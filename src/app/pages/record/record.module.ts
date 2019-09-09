import { NgModule } from '@angular/core';
import { RecordComponent } from './record.component';
import { RecordRoutingModule } from './record-routing.module';

@NgModule({
  declarations: [RecordComponent],
  imports: [RecordRoutingModule],
  exports: [RecordComponent]
})
export class RecordModule {}
