import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-fighters',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatIconModule, FlexLayoutModule, RouterModule],
  templateUrl: './fighters.component.html',
  styleUrl: './fighters.component.scss'
})
export class FightersComponent {

}
