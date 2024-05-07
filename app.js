require('dotenv').config();
const express = require('express');
const app = express();
app.use(express.json());

const {createStudent,getStudentById,getStudents,updateStudent,deleteStudent} = require("./api/students/student.controller");


// Adding Swagger 
const swaggerJsDoc = require("swagger-jsdoc")
const swaggerUi = require("swagger-ui-express")

const options = {
    definition: {
        openapi:'3.0.0',
        info:{
            title:"Student Registration API Project !",
            version:'1.0.0'
        },
        servers:[
           {
             url: 'http://localhost:3030/'
            }
        ]
    },
    apis:['./app.js']

}

const swaggerSpec = swaggerJsDoc(options)
app.use('/api-docs',swaggerUi.serve,swaggerUi.setup(swaggerSpec))

/**
 * @swagger
 * components:
 *      schemas:
 *          Student:
 *                  type: object
 *                  properties:
 *                      id:
 *                          type: integer
 *                      firstName:
 *                           type: string
 *                      lastName:
 *                           type: string
 *                      gender:
 *                           type: string
 *                      email:
 *                           type: string
 *                      password:
 *                           type: string
 *                      contact:
 *                           type: string
 *                      
 */

/**
 * @swagger
 *  /api/add-student:
 *  post:
 *      summary: To add  students into database
 *      description: This api is used to add information of  students in database
 *      requestBody:
 *          required: true
 *          content:
 *               application/json:
 *                          schema:
 *                             $ref: '#components/schemas/Student'
 *      responses:
 *          200:
 *              description: Added Successfully.
 *              
 */
app.post("/api/add-student",createStudent);

/**
 * @swagger
 *  /api/students:
 *  get:
 *      summary: To fetch all students from database
 *      description: This api is used to fetch information of all students
 *      responses:
 *          200:
 *              description: To fetch all students from database
 *              content:
 *                  application/json:
 *                          schema:
 *                              type: array
 *                              items:
 *                                  $ref: '#components/schemas/Student'
 */
app.get("/api/students",getStudents);

/**
 * @swagger
 *  /api/student/{id}:
 *  get:
 *      summary: To fetch student from database
 *      description: This api is used to fetch information of specific student
 *      parameters:
 *            - in: path
 *              name: id
 *              required: true
 *              description: Numeric ID required
 *              schema:
 *                  type: integer
 *      responses:
 *          200:
 *              description: To fetch all students from database
 *              content:
 *                  application/json:
 *                          schema:
 *                              type: array
 *                              items:
 *                                  $ref: '#components/schemas/Student'
 */
app.get("/api/student/:id",getStudentById);

/**
 * @swagger
 *  /api/student:
 *  put:
 *      summary: To update  students from database
 *      description: This api is used to update information of  students in database
 *      requestBody:
 *          required: true
 *          content:
 *               application/json:
 *                          schema:
 *                             $ref: '#components/schemas/Student'
 *      responses:
 *          200:
 *              description: Updated Successfully.
 *              content:
 *                  application/json:
 *                          schema:
 *                              type: array
 *                              items:
 *                                  $ref: '#components/schemas/Student'
 *              
 */
app.put("/api/student",updateStudent);

/**
 * @swagger
 *  /api/student/{id}:
 *  delete:
 *      summary: To delete student from database
 *      description: This api is used to delete information of specific student
 *      parameters:
 *            - in: path
 *              name: id
 *              required: true
 *              description: Numeric ID required
 *              schema:
 *                  type: integer
 *      responses:
 *          200:
 *              description: Student data is deleted.
 */
app.delete("/api/student/:id",deleteStudent);




app.listen(process.env.APP_PORT,()=>{
    console.log("Server up and running on PORT :",process.env.APP_PORT);
});

