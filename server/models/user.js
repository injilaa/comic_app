var  mongoose=require('mongoose');
 var ItemSchema4=new mongoose.Schema({
 username: {type: String},
 password:{type:String},
  types:{type:String},
 email:{type:String},
 token:{type:String},
 veriffy:{type:Boolean}
});
 
module.exports=mongoose.model('user',ItemSchema4);