import Jwt from '@hapi/jwt';
import Hapi from '@hapi/hapi';

import config from './config/index.js';
import routes from './routes/index.js';

const init = async () => {
  const server = Hapi.server(config.server);

  await server.register(Jwt);
  server.auth.strategy('jwt_strategy', 'jwt', {
    keys: config.JWT.secret,
    verify: {
      // aud: 'issuer:access',
      // iss: 'issuer',
      aud: false,
      iss: false,
      sub: false,
      nbf: true,
      exp: true,
      maxAgeSec: config.JWT.maxAgeSec,
      timeSkewSec: 15,
    },
    validate: (artifacts /* , request, h */) => {
      return {
        isValid: true,
        credentials: { username: artifacts.decoded.payload.user },
      };
    },
  });
  server.auth.default('jwt_strategy');

  server.route(routes);

  await server.start();
  console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});

init();
