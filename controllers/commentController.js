const Post=require("../models/postModel");
const Comment=require("../models/commentModel");

exports.createComment= async (req,res)=>{
    try{
    const {post,user,body}=req.body;
    const comment= new Comment({post,user,body});
    //comment maine save ker li comment wale schem me 
    const savedComment=await Comment.save();
    const UpdatePost= await  Post.findByIdAndUpdate(post,{$push:{Comment:savedComment._id}},{new:true}).populate("Comment").exec();
    res.json({
        post:updatedPost,
    })
    }
    catch(error){
        error:"Error while creating comment"
    }
};
