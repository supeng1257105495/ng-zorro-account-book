import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { RecordComponent } from './record.component';
import { RecordRoutingModule } from './record-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [RecordComponent],
  imports: [CommonModule, RecordRoutingModule, NgZorroAntdModule, FormsModule, ReactiveFormsModule],
  exports: [RecordComponent]
})
export class RecordModule {}
