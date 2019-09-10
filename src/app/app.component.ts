import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isCollapsed = false;
  menu = [{ label: '账单', icon: 'book', link: '/record' }, { label: '图表', icon: 'bar-chart', link: '/chart' }];
}
