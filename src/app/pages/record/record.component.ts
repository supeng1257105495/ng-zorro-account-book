import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.less']
})
export class RecordComponent implements OnInit {
  listOfData = [
    {
      date: '1',
      type: 'John Brown',
      price: 32,
      member: 'New York No. 1 Lake Park',
      remark: 'New York No. 1 Lake Park'
    },
    {
      date: '2',
      type: 'John Brown',
      price: 32,
      member: 'New York No. 1 Lake Park',
      remark: 'New York No. 1 Lake Park'
    },
    {
      date: '3',
      type: 'John Brown',
      price: 32,
      member: 'New York No. 1 Lake Park',
      remark: 'New York No. 1 Lake Park'
    }
  ];
  listHeader = [
    { label: 'date', value: '日期' },
    { label: 'type', value: '分类' },
    { label: 'price', value: '金额' },
    { label: 'member', value: '成员' },
    { label: 'remark', value: '备注' }
  ];

  validateForm: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.validateForm = this.fb.group({
      date: [moment(new Date()).format('L'), [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true]
    });
  }
}
