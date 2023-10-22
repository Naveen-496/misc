
import express from "express";
import { StudentModel } from "../models/Student.js";

const router = express.Router();

router.get("/", async (req, res) => {
   
  try{
     const students = await StudentModel.find();

     if(!students){
      return  res.status(404).json({error : "students not found"});
     }
    res.json(students);

  }
  catch(error){
    
     return res.status(500).json({error : "server error"});
  }
});

router.get("/age/:age", async (req, res) => {
   
  try {
     
     const student = await StudentModel.find({ age: req.params.age});
      
     if(!student){
      return res.status(404).json({error : "student not found"});
     }
      
     res.json(student);
  } catch (error) {
    
    return res.status(500).json({error : "server error"});
  }
} )

router.post("/", async (req, res) => {
  const student = new StudentModel(req.body);
  // const dob = new Date();
  try {
   
    const response = await student.save();
    
    res.json({
      message: "Student created successfully",
      student: response // send back the full student object in the response
    });
  } catch (error) {
    console.error(error);
  }
});

router.put("/", async  (req, res) => {

     const student  = new StudentModel(req.body);

     try {
      
       const updatedStudent = await StudentModel.findByIdAndUpdate(student._id,student, {new : true});

       if( !updatedStudent){
        return res.status(404).json({message : "student not found"});
       }

        return res.json(updatedStudent);

     } catch (error) {
       return res.status(500).json("something went wrong");
     }
});


router.delete("/:id", async (req, res) => {
   
   try {
     const deletedStudent = await StudentModel.findByIdAndDelete(req.params.id);

     if( !deletedStudent){
      return res.status(404).json({error : "student not found"});
     }

     return res.json(deletedStudent);

   } catch (error) {

     return res.status(500).json({error : "something wrong on server"});
   }
});

router.put("/:id/grade", async (req, res) => {
   
  try {
     
     const updatedStudent = await StudentModel.findByIdAndUpdate(req.params.id, {
       grade : req.body.grade}, {new : true});

       if( !updatedStudent){
        return res.status(404).json({error: "student not found"});
       }
       return res.json(updatedStudent);

  } catch (error) {
    
    return res.status(500).json({error : "server error"});

  }
});

router.get("/:id", async (req, res) => {
   
  try {
     
     const student = await StudentModel.findById(req.params.id);
     const sDate = student.dob;
     const prdate = new Date();
     const noofDays = Math.floor((prdate.getTime() - sDate.getTime()) / (24 * 60 * 60 * 1000));

     res.json({ noofDays});

  } catch (error) {
    
  }
});

export {router as StudentRouter};