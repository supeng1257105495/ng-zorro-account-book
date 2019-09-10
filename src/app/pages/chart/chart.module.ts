import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { ChartComponent } from './chart.component';
import { ChartRoutingModule } from './chart-routing.module';
import { NgxEchartsModule } from 'ngx-echarts';

@NgModule({
  declarations: [ChartComponent],
  imports: [CommonModule, NgZorroAntdModule, ChartRoutingModule, NgxEchartsModule, FormsModule, ReactiveFormsModule],
  exports: [ChartComponent]
})
export class ChartModule {}
