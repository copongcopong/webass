const log = require('debug')('API');

async function authViaDb () {

  //{user:{user_id: 1, name: 'johndoe'}};
  return {};
}

function authViaTest (body) {
  //always success, mock user
  return {user:{user_id: 1, name: 'johndoe'}};
}

export function post(req, res) {
  const post = req.body;
  log('login POST data', post);
  var u = authViaTest(post);
  var t = req.jwtAuth.makeToken(u);
  res.json(t);
}