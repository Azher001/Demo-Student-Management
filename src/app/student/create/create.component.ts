import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from 'src/app/model/StudentModel';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit{
  edit: boolean = false;
  studentForm: FormGroup;
  studentId: string;
  constructor(private activatedRoute: ActivatedRoute,
    private studentService: StudentService, 
    private formBuilder: FormBuilder,
    private router: Router) {

  }
  ngOnInit(): void {
    if(!this.router.url.split('/').includes('create')){
      this.studentId = this.activatedRoute.snapshot.paramMap.get('id')!;
      this.edit = true;
    }
    this.createForm();
  }
  
  createForm(): void{
    if(!this.edit){
      this.studentForm = this.formBuilder.group({
        name: [null],
        id: [null],
        department: [null],
        cgpa:[null],
        completedCredit: [null]
      })
    }
    else{
      let studentInfo: Student = this.studentService.getStudentById(this.studentId)[0];
      this.studentForm = this.formBuilder.group({
        name: [studentInfo.name],
        id: [studentInfo.id],
        department: [studentInfo.department],
        cgpa:[studentInfo.cgpa],
        completedCredit: [studentInfo.completedCredit]
      })
    }
  }

  onSubmit():void{
    let student: Student = {
      name:  this.studentForm.controls['name'].value,
      id: this.studentForm.controls['id'].value,
      cgpa: this.studentForm.controls['cgpa'].value,
      completedCredit: this.studentForm.controls['completedCredit'].value,
      department: this.studentForm.controls['department'].value
    }
    if(!this.edit){
      this.studentService.addStudents(student);
      this.router.navigate(['/',"home"])
    }
    else{
      this.studentService.updateStudent(student, student.id)
      this.router.navigate(['/',"home"])
    }
  }
}
