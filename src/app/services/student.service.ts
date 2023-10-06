import { Injectable } from '@angular/core';
import { Student } from '../model/StudentModel';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  students: Student[] = [{
    name: "Efat",
    id: "00000000",
    cgpa: 10.5,
    department: "cse",
    completedCredit: 136
  },
  {
    name: "Asif",
    id: "00000001",
    cgpa: 15.5,
    department: "bba",
    completedCredit: 154
  },
  {
    name: "Nam Nai",
    id: "00000002",
    cgpa: 5.5,
    department: "ENH",
    completedCredit: 140
  },
  {
    name: "Ki hobe nam diye",
    id: "00005000",
    cgpa: 2.5,
    department: "MNS",
    completedCredit: 124
  },
  {
    name: "Asad",
    id: "00000005",
    cgpa: 34.5,
    department: "cse",
    completedCredit: 136
  }]; 
  constructor() { }

  getStudents(): Student[] {
    return this.students;
  }
  addStudents(studentInfo: Student): void {
    this.students.push(studentInfo);
  }
  getStudentById(id: string): Student[]{
    return this.students.filter((student) => student.id === id);
  }
  updateStudent(studentInfo: Student, id: string){
    const index = this.students.findIndex((student) => student.id === id);
    this.students[index] = studentInfo;
  }
}
