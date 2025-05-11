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