const mongoose= require("mongoose");

const postModel=new mongoose.Schema({
    
    title:{
        type:String,
        require:true,
    },
    user:{
        type:String,
        require:true,
    },
    likes:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Likes",
                
    }],
    comments:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Comments",
    }]
});
module.exports=mongoose.Schema("Post",postModel);