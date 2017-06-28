/*var  mongoose=require('mongoose');
var Item2=new mongoose.Schema({
cateogry_id:{type:Number},
cateogry_name:{type:String}
})
 module.exports=mongoose.model('pqr',Item2);*/



var  mongoose=require('mongoose');
 var ItemSchema3=new mongoose.Schema({
 name: {type: String},
 desc:{type:String},

 series_id:{type:String},
 
 created_by:{type:String},
 created_at:{type:Date,default:Date.now},
 updated_at:{type:Date,default:Date.now}

 });
 
module.exports=mongoose.model('series',ItemSchema3);