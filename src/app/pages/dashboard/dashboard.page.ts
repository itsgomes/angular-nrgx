import { Component } from "@angular/core";
import { HeaderComponent } from "src/app/components/header/header.component";

@Component({
  selector: 'dashboard-page',
  standalone: true,
  imports: [
    HeaderComponent
  ],
  templateUrl: './dashboard.page.html'
})
export class DashboardPage {}