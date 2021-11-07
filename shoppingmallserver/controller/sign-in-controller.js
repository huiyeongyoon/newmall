const service_main = require("../service/sign-in-service");

exports.signIn = async function(req, res){

  const result = await service_main.signIn(req);
  if(result.code === 0) {
    res.cookie('userid', result.data.userid);
    res.cookie('username', result.data.name, {
      maxAge:60*60*1000, path:"/"
    });
  }

  return result;
}
