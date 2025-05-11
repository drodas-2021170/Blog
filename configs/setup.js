import Courses from "../src/courses/courses.model.js"

export const addCourses = async (req, res) => {
    try {
        let course1 = await Courses.findOne({name:'Tecnologia'})
        if(!course1){
            course1 = await Courses.create(
                {
                    name: 'Tecnologia',
                    description: 'Curso de tecnologia 2023-2024'
                }
            )
        }
        let course2 = await Courses.findOne({name:'Taller'})
        if(!course2){
            course2 = await Courses.create(
                {
                    name: 'Taller',
                    description: 'Curso de taller 2023-2024'
                }
            )
        }
        let course3 = await Courses.findOne({name:'TICS'})
        if(!course3){
            course3 = await Courses.create(
                {
                    name: 'TICS',
                    description: 'Curso de TICS 2023-2024'
                }
            )
        }

        await course1.save()
        await course2.save()
        await course3.save()
    } catch (err) {
        console.error(err)
        return res.status(500).send({success:false, message:'General Error',err})
    }
}