import Joi from 'joi';
import * as Auth from '../handler/auth.js';

export default [
  {
    method: 'GET',
    path: '/',
    handler: (request, h) => {
      const { username } = request.auth.credentials;
      return h.response({ code: 0, data: { username } });
    },
  },
  {
    method: 'GET',
    path: '/dashboard',
    handler: (request, h) => {
      const { username } = request.auth.credentials;
      return h.response({ code: 0, data: { message: `${username}'s dashboard` } });
    },
  },
  {
    method: 'POST',
    path: '/login',
    options: {
      auth: false,
      validate: {
        payload: Joi.object({
          username: Joi.any().required(),
          password: Joi.any().required(),
        }),
      },
    },
    handler: Auth.login,
  },
  {
    method: '*',
    path: '/{any*}',
    options: {
      auth: false,
    },
    handler(/* request, h */) {
      return '404 Error! Page Not Found!';
    },
  },
];
