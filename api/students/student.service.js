const pool = require("../../config/database");


module.exports = {
    create:(data,callBack)=>{
        pool.query(
            `insert into registration(firstName,lastName,gender,email,password,contact)
            values(?,?,?,?,?,?)`,
            [
                data.firstName,
                data.lastName,
                data.gender,
                data.email,
                data.password,
                data.contact
            ],
            (error,results,fields)=>{
                if(error){
                    return callBack(error);
                }
                return callBack(null,results);
            }
        );
    },
    getStudents:callBack =>{
        pool.query(
            `select * from registration`,
            [],
            (error,results,fields)=>{
                if(error){
                    return callBack(error);
                }
                return callBack(null,results);  
            }
        );
    },
    getStudentById:(id,callBack) =>{
        pool.query(
            `select * from registration where id=?`,
            [id],
            (error,results,fields)=>{
                if(error){
                    return callBack(error);
                }
                return callBack(null,results[0]);
            }

        );
    },
    updateStudent:(data,callBack)=>{
        pool.query(
            `update registration set firstName=?,lastName=?,gender=?,email=?,password=?,contact=? where id=?`,
            [
                data.firstName,
                data.lastName,
                data.gender,
                data.email,
                data.password,
                data.contact,
                data.id
            ],
            (error,results,fields) => {
                if(error){
                    return callBack(error)
                }
                return callBack(null,results);
            }
        );
    },
    deleteStudent:(id,callBack)=>{
        pool.query(
            `delete from registration where id=?`,
            [id],
            (error,results,fields)=>{
                if(error){
                    return callBack(error)
                }
                return callBack(null,results);
            }
        );
    }
};