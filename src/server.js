import sirv from 'sirv';
import polka from 'polka';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import * as sapper from '@sapper/server';
import jwtApiAuth from '@app/libs/middlewares/jwt-api-auth';
import debug from '@app/libs/middlewares/debug';
const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';
const jwtauth = jwtApiAuth({
	secret: 'secretStringForJWT', 
	expiration: '2hr', 
	privateApi: true, 
	api: {
		pub: ['/api/auth/login', '/api/tests/ping.json']
	}
});
polka() // You can also use Express
	.use(bodyParser.json())
	.use(cookieParser())
	.use(

		compression({ threshold: 0 }),
		sirv('static', { dev }),
		jwtauth,
		debug,
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
