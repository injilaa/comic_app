var  mongoose=require('mongoose');
 var ItemSchema2=new mongoose.Schema({
 name: {type: String},
 desc:{type:String},

 series_id:{type:String},
 starts_on:{type:Date},
 ends_on:{type:Date},
 created_at:{type:Date,default:Date.now},
 updated_at:""

 });
 
module.exports=mongoose.model('season',ItemSchema2);