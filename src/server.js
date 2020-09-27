import sirv from 'sirv';
import polka from 'polka';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import * as sapper from '@sapper/server';

import jwtAuth from '@webass/server/middlewares/jwtauth';
import debug from '@webass/server/middlewares/debug';
import json from '@webass/server/middlewares/json';
import wConfig from '@webass/config';
import apx from '@webass/api';

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';
const jwtauth = jwtAuth(wConfig.server.middlewares.jwtauth);


polka() // You can also use Express
	.use(bodyParser.json())
  .use(cookieParser())
  .use(json, jwtauth, debug)
  .use('apx', apx)
	.use(
		compression({ threshold: 0 }),
		sirv('static', { dev }),
		sapper.middleware({
			session: req => ({
				user: req.cookies && req.cookies.user,
				authToken: req.cookies && req.cookies.authToken
			})
		})	
  )
	.listen(PORT, err => {
		if (err) console.log('error', err);
	});
