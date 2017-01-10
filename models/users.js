var mongoose=require('mongoose');
var schema=mongoose.Schema;

//create the schema

var userschema=new schema({
	name:String,
	username:{
		type:String,
		required:true,
		unique: true
	},
	pwd:{
		type:String,
		required: true
	},
		admin:String,
		location:String,
	
});
var users=module.exports=mongoose.model('users', userschema);
