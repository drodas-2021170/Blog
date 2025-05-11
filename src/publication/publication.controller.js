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