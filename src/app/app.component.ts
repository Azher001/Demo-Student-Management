import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'student-management';

  constructor(private _router: Router){

  }

  buttonClicked(student: boolean): void{
    if(student){
      this._router.navigate(['/', 'students']);
    }else{
      this._router.navigate(['/', 'courses']);
    }
  }
}


