import { Component, OnInit } from '@angular/core';
import { Project } from 'src/Models/project';
import { CarouselModule } from 'primeng/carousel'; 
import { ButtonModule } from 'primeng/button'; 
import { ImageModule } from 'primeng/image'; 
import { FormsModule } from '@angular/forms';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CarouselModule, ButtonModule, ImageModule, FormsModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent implements OnInit{
 
   projects: Project[] = [];
  
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
    
    ];
}  
    ngOnInit() { 
        
    } 
} 
export interface Tutorial { 
    title?: String; 
    image?: String; 
}