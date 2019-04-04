
module.exports.authenticate = function(mail,pass) {
	if(mail=='aromal.nair'&& pass=='123'||mail=='priyanka.kalena'&& pass=='456')
	{
  console.log("Logged in successfully "+mail);
	}
	else
	{
		console.log("Wrong id or password");
	}
}