import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { ChartComponent } from './chart.component';
import { ChartRoutingModule } from './chart-routing.module';

@NgModule({
  declarations: [ChartComponent],
  imports: [CommonModule, NgZorroAntdModule, ChartRoutingModule],
  exports: [ChartComponent]
})
export class ChartModule {}
