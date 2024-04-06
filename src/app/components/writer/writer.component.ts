import { Component } from '@angular/core';
import { QuotesComponent } from '../quotes/quotes.component';

@Component({
  selector: 'app-writer',
  standalone: true,
  imports: [QuotesComponent],
  templateUrl: './writer.component.html',
  styleUrl: './writer.component.scss'
})
export class WriterComponent {

}
