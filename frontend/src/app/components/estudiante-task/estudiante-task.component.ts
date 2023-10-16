import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { TaskService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-estudiante-task',
  templateUrl: './estudiante-task.component.html',
  styleUrls: ['./estudiante-task.component.css']
})
export class EstudianteTaskComponent implements OnInit {
  userData: any;
  user = {
    username: '',
    email: '',
    password: '',
    rol: ''
  }
  
  constructor(private taskService: TaskService, private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    const userRole = this.authService.getRole();
    if (this.authService.loggedIn() && userRole === 'estudiante') {
    this.taskService.getEstudianteProfile().subscribe(
      (res: any) => {
        this.userData = res;
      },
      (err: any) => {
        console.error('Error al obtener los datos del usuario:', err);
      }
    );
  }
}
}
