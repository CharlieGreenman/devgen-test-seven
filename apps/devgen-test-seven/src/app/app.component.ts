import { Component } from '@angular/core';

@Component({
  selector: 'devgen-test-seven-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  sideNavOpen = false;
  title = 'devgen-test-seven';

  sideNavToggle(): void {
    this.sideNavOpen = !this.sideNavOpen;
  }
}
