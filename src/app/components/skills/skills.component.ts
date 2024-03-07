import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  skills: string[] = [];

  constructor() {
    this.skills = ['C#', '.NET', 'MSSQL', 'LINQ', 'Entity Framework', 'ASP.NET Core Web API', 'ASP.NET Core MVC', 'Minimal APIs', 'Unit Testing', 'XUnit', 'Angular', 'JavaScript', 'TypeScript', 'Git', 'JWT', 'Object-Oriented Programming (OOP)', 'SOLID Principles', 'CSS', 'HTML', 'Java', 'English (Fluent)', 'Arabic (Native Speaker)'
    ];
  }
}
