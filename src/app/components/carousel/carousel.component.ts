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
 
  tutorials!: Tutorial[]; 
  
    constructor(private primengConfig: PrimeNGConfig) { } 
  
    ngOnInit() { 
        this.tutorials = [ 
            { 
                title: 'Web MH ', 
                image: 
'https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210420155051/WebMH.png', 
            }, 
            { 
                title: 'Interview Experience ', 
                image: 
'https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210420112859/IntExp.png', 
            }, 
            { 
                title: 'GeeksforGeeks Logo ', 
                image: 
'https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210419113249/gfg-new-logo-min.png', 
            }, 
            { 
                title: 'GeeksforGeeks Carnival ', 
                image: 
'https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210418122505/132_00_00_Mailheader-min.png', 
            }, 
            { 
                title: 'Python Course ', 
                image: 
'https://media.geeksforgeeks.org/wp-content/cdn-uploads/20211028203138/GeeksforGeeks-Python-Foundation-Course-Learn-Python-from-Scratch-in-Hindi.png', 
            }, 
        ]; 
    } 
} 
export interface Tutorial { 
    title?: String; 
    image?: String; 
}