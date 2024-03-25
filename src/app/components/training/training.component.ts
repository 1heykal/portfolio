import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCard, MatCardModule } from '@angular/material/card';
import { Training } from 'src/Models/training';

@Component({
  selector: 'app-training',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, CommonModule],
  templateUrl: './training.component.html',
  styleUrl: './training.component.scss'
})
export class TrainingComponent {
  trainings: Training[] = [];

  constructor(){
    this.trainings = [{
      title: ".NET Backend Development",
      trainer: "ITI-Mansoura Summer Training",
      start: "01-07-2023",
      end: "",
      details: [
        `Engaged in hands-on learning experiences, applying C#, LINQ, Entity Framework, MSSQL, and ASP.NET Core
  MVC.`,
        `Successfully completed assigned tasks and projects, contributing to the development of real-world
  applications.`
      ]
    },
    {
      title: ".NET Backend Development",
      trainer: "ITI-Mansoura Summer Training",
      start: "01-07-2023",
      end: "",
      details: [
        `Engaged in hands-on learning experiences, applying C#, LINQ, Entity Framework, MSSQL, and ASP.NET Core
  MVC.`,
        `Successfully completed assigned tasks and projects, contributing to the development of real-world
  applications.`
      ]
    }
  ];
  }
}
