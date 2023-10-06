import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from 'src/app/model/StudentModel';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  allStudent: Student[];
  columnNames = ["Id", "Name", "Department", "CGPA", "Credits Completed"];
  fieldNames = ['id', 'name', 'department', 'cgpa', 'completedCredit'];
  constructor(private studentService: StudentService,
    private _router: Router){

  }
  ngOnInit(): void {
    this.allStudent = this.studentService.getStudents();
  }
  create(){
    this._router.navigate(['/', 'students','create'])
  }
  goToDetails(id: string){
    this._router.navigate(['/', 'students','details',id])
  }
}
