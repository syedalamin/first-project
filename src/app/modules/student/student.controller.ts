import { Request, Response } from "express";
import { StudentServices } from "./student.service";

const createStudent = async (req: Request, res: Response) => {
  try {
    const { student: studentData } = req.body;
    const result = await StudentServices.createStudentIntoDB(studentData);
    res.status(200).json({
      success: true,
      message: "Student is created successfully",
      data: result,
    });
  } catch (err) {
    console.log("🚀 ~ createStudent ~ err:", err);
  }
};

const getAllStudent = async (req: Request, res: Response) => {
  try {
    const result = await StudentServices.getAllStudentsFromDB();
    res.status(200).json({
      status: true,
      message: "Students are retrieved successfully",
      data: result,
    });
  } catch (err) {
    console.log("🚀 ~ getAllStudent ~ err:", err);
  }
};

const getStudent = async (req: Request, res: Response) => {
  const { studentId } = req.params;
  const result = await StudentServices.getSingleStudentFromDB(studentId);
  res.status(200).json({
    success: true,
    message: "Student is retrieved successfully",
    data: result,
  });
};

export const StudentControllers = {
  createStudent,
  getAllStudent,
  getStudent,
};
