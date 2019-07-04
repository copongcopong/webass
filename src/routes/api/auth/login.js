const log = require('debug')('API');
export function post(req, res) {
  const post = req.body;
  log('login POST data', post);
  var u = {user:{user_id: 1, name: 'johndoe'}};
  var t = req.jwtAuth.makeToken(u);
  res.json(t);
}