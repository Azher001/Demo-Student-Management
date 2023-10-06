import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from 'src/app/model/StudentModel';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit{

  studentId: string;
  studentInfo: Student;
  constructor(private activatedRoute: ActivatedRoute,
    private studentService: StudentService,
    private router: Router){
  }
  ngOnInit(): void {
    this.studentId = this.activatedRoute.snapshot.paramMap.get('id')!;
    this.studentInfo = this.studentService.getStudentById(this.studentId)[0]
  }

  edit(): void{
    this.router.navigate(['/', 'students','edit',this.studentInfo.id])
  }
}
