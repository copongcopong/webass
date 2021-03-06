var sleep = require('sleep').sleep;
export async function get(req, res, next) {

    await req.jwtAuth.allowIf(async function(jdata){
        console.log(['eee', jdata, req.cookies])
        sleep(1);
        if(jdata.user.user_id == 2) {
            throw Error('banned!')
        }
       return;
    });

    
    res.json({
        reply: `pong`,
        message: `via GET`
    });

}

export async function post(req, res) {
    await req.jwtAuth.isRequired();

    res.json({
        reply: `pong`,
        message: `via POST`
    });
}