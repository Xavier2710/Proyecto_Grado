import { Component } from '@angular/core';
import { DashboardComponent } from '../dashboard/dashboard.component'; 
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [DashboardComponent,SidebarComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
