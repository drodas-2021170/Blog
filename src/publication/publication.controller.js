import Publication from "./publication.model.js"

export const addPublication = async (req, res) => {
    try {
        let data = req.body
        let publication = new Publication(data)
        await publication.save()
        return res.send({success:true, message:'Publication created successfully',publication})
    } catch (err) {
        console.error(err)
        return res.status(500).send({success:false, message:'General Error',err})
    }
}

export const getPublications = async(req,res)=>{
    try {
        let publications = await Publication.find()
        if(!publications) return res.status(404).send({sucess:false, message:'Publications not found'})
        return res.send({success:true, message:'Publications found', publications})
    } catch (err) {
        console.error(err)
        return res.status(500).send({sucess:false, message:'General Error',err})
    }
}

export const getPublicationsById = async(req,res)=>{
    try{
        let id = req.params.id
        let publication = await Publication.findById(id)
        if(!publication) return res.status(404).send({sucess:false, message:'Publication'})
        return res.send({success:true, message:'Publication found',publication})

    }catch(err){
        console.log(err)
        return res.send(500).send({sucess:false, message:'General Error, err'})
    }
}