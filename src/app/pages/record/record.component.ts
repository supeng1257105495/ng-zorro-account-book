import { Component, OnInit } from '@angular/core';

export interface List {
  id: number;
  price: number;
  date: string | Date;
  basicType: string;
}
@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.less']
})
export class RecordComponent implements OnInit {
  listHeader = [{ label: '金额', Value: 'price' }, { label: '日期', Value: 'date' }, { label: '类别', Value: 'basicType' }];
  listOfData = [
    {
      id: 0,
      price: 122,
      date: new Date(),
      basicType: 'New York No. 1 Lake Park'
    },
    {
      id: 1,
      price: 322,
      date: new Date(),
      basicType: 'London No. 1 Lake Park'
    },
    {
      id: 2,
      price: 311,
      date: new Date(),
      basicType: 'Sidney No. 1 Lake Park'
    }
  ];
  basicOptions = [
    { label: '衣', value: 1 },
    { label: '食', value: 2 },
    { label: '住', value: 3 },
    { label: '行', value: 4 },
    { label: '其他', value: 5 }
  ];
  editCache: { [key: string]: any } = {};

  constructor() {}

  ngOnInit() {
    this.updateEditCache();
  }

  updateEditCache(): void {
    this.listOfData.forEach(item => {
      this.editCache[item.id] = {
        edit: false,
        data: { ...item }
      };
    });
  }

  startEdit(id: string): void {
    this.editCache[id].edit = true;
  }

  saveEdit(id: string): void {
    const index = this.listOfData.findIndex(item => Number(item.id) === Number(id));
    Object.assign(this.listOfData[index], this.editCache[id].data);
    this.editCache[id].edit = false;
  }

  cancelEdit(id: string): void {
    const index = this.listOfData.findIndex(item => Number(item.id) === Number(id));
    this.editCache[id] = {
      data: { ...this.listOfData[index] },
      edit: false
    };
  }
}
