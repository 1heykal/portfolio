import { Component, OnInit } from '@angular/core';
import { Project } from 'src/Models/project';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { ImageModule } from 'primeng/image';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {TagModule} from 'primeng/tag';
@Component({
  selector: 'app-quotes',
  standalone: true,
  imports: [TagModule, CarouselModule, ButtonModule, ImageModule, FormsModule, MatButtonModule, MatIconModule],
  templateUrl: './quotes.component.html',
  styleUrl: './quotes.component.scss'
})
export class QuotesComponent {
 products: Project[] = [];
}
