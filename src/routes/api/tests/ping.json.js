export function get (req, res, next) {

  res.json({
    reply: `pong`,
    message: `via GET`
  });

}

export function post (req, res) {
  res.json({
    reply: `pong`,
    message: `via POST`
  });
}