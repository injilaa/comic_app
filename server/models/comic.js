/*var  mongoose=require('mongoose');
 var ItemSchema=new mongoose.Schema({
 name: {type: String},
 price:{type:Number},
 cateogry:{type:Number}
 });
 
module.exports=mongoose.model('abc',ItemSchema);*/
var  mongoose=require('mongoose');

 var ItemSchema=new mongoose.Schema({
 name: {type: String},
 story:{type:String},
 image:{type:String},
 
 season_id:{type:String},
 starts_on:{type:Date},
 ends_on:{type:Date},
 comments:{type:String},
 
 created_at:{type:Date,default:Date.now},
 updated_at:{type:Date,default:Date.now},
 

 });
 
module.exports=mongoose.model('comic',ItemSchema);