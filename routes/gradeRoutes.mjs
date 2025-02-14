// Imports
import express from 'express';

import gradesCTL from '../controllers/gradesController.mjs'


const router = express.Router();

// Get grades by ID
router.route('/:id').get(gradesCTL.getSingleGrade);

// Get student grades by studentid
router.get('/student/:id', gradesCTL.getStudentGrades)

// Get Class grades by classID
router.get('/class/:id', gradesCTL.getClassGrades)

// Add new grade too
router.post('/', gradesCTL.createGrade)


//
//router.get('/learner/:id/avg')

//http://localhost:3000/grades/class/350

export default router;