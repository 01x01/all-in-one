console.log("Testing async function...")
let superagent = require('superagent');

process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0;

async function test() {
    let res = await superagent.get('https://www.baidu.com');
    console.log(res.text)
    await _handleJsonp(res)
    console.log(res.text)
}

function _handleJsonp(response){
    return new Promise((resolve,reject) => {
        response.text  = "execuse me?"
        resolve(response)
    })  
}

test()
