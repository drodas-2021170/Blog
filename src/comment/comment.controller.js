import Comment from "./comment.model.js";
import Publication from "../publication/publication.model.js";

export const addComment = async (req, res) => {
    try {
        let data = req.body
        
        let publication = await Publication.findOne({_id:data.publication})
        
        if(!publication) return res.status(404).send({success:false, message:'Publication not found'})
        
        let comment = new Comment(data)
        await comment.save()
        return res.send({success:true, message:'Comment created successfully',comment})
    } catch (err) {
        console.error(err)
        return res.status(500).send({success:false, message:'General Error',err})
    }
}

export const getCommentsByPublication = async(req,res)=>{
    const { id } = req.params
    try {
        console.log(id)
        let publication = await Publication.findById(id)
        if(!publication) return res.status(404).send({success:false, message:'Publication not found'})
    
        let comments = await Comment.find({ publication: id }).sort({ creationDate: -1 });
        if(!comments) return res.status(404).send({success:false, message:'Comments not found'})
        return res.send({success:true, message:'Comments found', comments})
    } catch (err) {
        console.error(err)
        return res.status(500).send({sucess:false,message:'General Error',err})
    }
}