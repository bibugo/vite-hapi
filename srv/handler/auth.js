import Jwt from '@hapi/jwt';
import config from '../config/index.js';
import db from '../db/index.js';

export async function login(request, h, err) {
  if (err) return console.log(err);

  console.log(request.payload);
  const {
    payload: { username, password },
  } = request;

  const user = db.prepare('SELECT * FROM user WHERE username  = ?').get(username);

  if (user && password !== user.password) {
    return h.response({ code: -1, message: '用户名或密码错误' });
  }

  const token = Jwt.token.generate(
    {
      // aud: 'issuer:access',
      // iss: 'issuer',
      user: username,
    },
    {
      key: config.JWT.secret,
      algorithm: config.JWT.algorithm,
    },
    {
      ttlSec: config.JWT.maxAgeSec,
    },
  );

  return h.response({ code: 0, data: { token } }).code(200).type('application/json');
}
