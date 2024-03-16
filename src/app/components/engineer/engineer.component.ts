import { Component } from '@angular/core';
import { SkillsComponent } from '../skills/skills.component';
import { ProjectsComponent } from '../projects/projects.component';
import { CarouselComponent } from '../carousel/carousel.component';

@Component({
  selector: 'app-engineer',
  standalone: true,
  imports: [SkillsComponent, ProjectsComponent, CarouselComponent],
  templateUrl: './engineer.component.html',
  styleUrl: './engineer.component.scss'
})
export class EngineerComponent {

}
