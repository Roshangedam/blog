import { Component } from '@angular/core';
import { SidebarComponent } from "./layout/sidebar/sidebar.component";

@Component({
  selector: 'app-dashboard',
  imports: [SidebarComponent],
  template: `
    <app-sidebar>
  `,
  styles: ``
})
export class DashboardComponent {

}
