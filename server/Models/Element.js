const mongoose=require('mongoose');
const {Schema}=mongoose;

const ElementSchema=new mongoose.Schema({
      user:{
          type:mongoose.Schema.Types.ObjectId,
          ref:'user'
      },
      name:{
          type:String,
        //   required:true
      },
      description:{
          type:String,
        //   required:true,
      },
      tag:{
         type:String,
         default:'General'
      },
      date:{
          type:Date,
          default:Date.now
      }
});

module.exports=mongoose.model('element',ElementSchema);