import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'header-component',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

}
