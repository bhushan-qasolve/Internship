const { create ,getStudents,getStudentById,updateStudent,deleteStudent}=require("./student.service");

const {genSaltSync,hashSync,compareSync }=require("bcrypt");
const {sign} =  require("jsonwebtoken");
module.exports={
    createStudent:(req,res)=>{
        const body = req.body;
        const salt = genSaltSync(10);
        body.password = hashSync(body.password, salt);
        create(body,(err,results)=>{
            if(err){
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    message: "Database connection error" 
                });
            }
            return res.status(200).json({
                success: 1,
                data: results
            });
        });
    },
    getStudentById:(req,res)=>{
        const id=req.params.id;
        getStudentById(id,(err,results)=>{
            if(err){
                console.log(err);
                return;
            }
            if(!results){
                return res.json({
                    success:0,
                    message:"Record not found."
                });
            }
            return res.json({
                success:1,
                data:results
            });
        });
    },
    getStudents:(req,res)=>{
        getStudents((err,results)=>{
            if(err){
                console.log(err);
                return;
            }
            if(!results){
                return res.json({
                    success:0,
                    message:"No students found."
                });
            }
            return res.json({
                success:1,
                data:results
            });
        });
    },
    updateStudent:(req,res)=>{
        const body = req.body;
        const salt = genSaltSync(10);
        body.password = hashSync(body.password,salt);
        updateStudent(body,(err,results)=>{
            if(err){
                console.log(err);
                return;
            }
            if(!results){
                return res.json({
                    success:0,
                    message:"Failed to update student."

                });
            }
            return res.json({
                success:1,
                message:"Student updated successfully."
            });
        }) ;
    },
    deleteStudent:(req,res)=>{
        const id=req.params.id;
        deleteStudent(id,(err,results)=>{
            if(err){
                console.log(err);
                return;
            }
            if(!results){
                return res.json({
                    success:0,
                    message:"Data not found."
                });
            }
            return res.json({
                success:1,
                message:"Student deleted successfully."
            });
        });
    }
}