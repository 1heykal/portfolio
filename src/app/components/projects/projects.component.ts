import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Project } from 'src/Models/project';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projects: Project[] = []
  
  constructor(){
    this.projects = [
      {
        name: 'Home Compass Web API',
        description: 'An app to help and empower the homeless.',
        imgpath: 'assets/imgs/compass.png',
        repoURL: 'https://github.com/1heykal/home-compass-api',
        skills: [`Led the inception and execution of the Home Compass project, from requirements gathering to database
        schema design.`, ` Facilitated full CRUD operations and repository management, optimizing data access and manipulation
        efficiency.`, ` Implemented JWT Tokens and Refresh Tokens for enhanced privacy and security, ensuring compliance with
        data protection standards.`]
      },
      {
        name: 'Home Compass Web API',
        description: 'An app to help and empower the homeless.',
        imgpath: 'assets/imgs/compass.png',
        repoURL: 'https://github.com/1heykal/home-compass-api',
        skills: [`Led the inception and execution of the Home Compass project, from requirements gathering to database
        schema design.`, ` Facilitated full CRUD operations and repository management, optimizing data access and manipulation
        efficiency.`, ` Implemented JWT Tokens and Refresh Tokens for enhanced privacy and security, ensuring compliance with
        data protection standards.`]
      },
    
    ]
  }
}
