import { Component } from '@angular/core';
import { slideInAnimation } from './animations';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [slideInAnimation]
})
export class AppComponent {
  // @HostBinding('@routeAnimations') state;

  isCollapsed = false;

  menu = [{ label: '账单', icon: 'book', link: '/record' }, { label: '图表', icon: 'bar-chart', link: '/chart' }];

  prepareRoute(outlet: RouterOutlet) {
    return outlet.isActivated ? outlet.activatedRoute : '';
  }
}
