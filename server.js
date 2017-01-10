var express=require('express');
var app=express();
var user=require('./models/users');
var mongoose=require('mongoose');
var port=process.env.PORT || 2202;
var router=express.Router();
mongoose.connect('mongodb://localhost/mycurd');


router.post('/create',function(req,res){
var ins=new user({
	name:'senthil',
	username:'dhoni',
	pwd:'pass123',
	admin:'viginesh',
	location:'hydrebad'});

ins.save(function(err){
	if(err) 
		res.send(err);

res.json({message:'user added successfully in the database'});

});
});
router.get('/read',function(req,res){
	user.find(function(err, users){
		if(err)
			res.send(err);

		res.json(users);
	});
	
});
router.put('/update',function(req,res){
	user.findOneAndUpdate({location:'hydrebad'},{location:'mycountry'}, function(err, user){
		if(err)
			res.send(err);

				 res.json({message:'succesfully updated'});

			});
	});


router.delete('/delete',function(req,res){
	user.findOneAndRemove({location:'hydrebad'},function(err, user){
		if(err)
			res.send(err);
			

				 res.json({message:'succesfully deleted'});

			});
	});
	


app.use('/', router);
app.listen(port);
console.log('connect' +port);

