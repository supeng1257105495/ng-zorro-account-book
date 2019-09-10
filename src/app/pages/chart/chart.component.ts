import { Component, OnInit } from '@angular/core';
import { ChartDataService } from '../../services';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.less']
})
export class ChartComponent implements OnInit {
  range = [{ label: '周', value: 1 }, { label: '月度', value: 2 }, { label: '季度', value: 3 }, { label: '年度', value: 4 }];
  rangeValue = 1;
  payPipeOption; // 支出 饼图
  incomePipeOption; // 收入 饼图
  payLineOption; // 支出 饼图
  incomeLineOption; // 收入 饼图

  constructor(private $services: ChartDataService) {}

  ngOnInit() {
    // 支出 饼图
    this.payEcharPipeInit();
    // 收入 饼图
    this.incomeEcharPipeInit();
    // 支出 折线图
    this.payEcharLineInit();
    // 收入 折线图
    this.incomeEcharLineInit();
  }

  // 支出
  payEcharPipeInit() {
    const params = {
      data: [
        { value: 335, type: 1, name: '衣' },
        { value: 310, type: 2, name: '食' },
        { value: 274, type: 3, name: '住' },
        { value: 235, type: 4, name: '行' },
        { value: 400, type: 5, name: '娱乐' },
        { value: 400, type: 6, name: '其他' }
      ],
      value: 1,
      name: `${this.range.find(x => x.value === this.rangeValue).label}收入统计汇总图`
    };

    this.$services.basic(params).subscribe(res => {
      this.payPipeOption = res;
    });
  }

  // 收入
  incomeEcharPipeInit() {
    const params = {
      data: [
        { value: 335, type: 1, name: '工资' },
        { value: 310, type: 2, name: '红包' },
        { value: 274, type: 3, name: '退款' },
        { value: 235, type: 4, name: '奖金' },
        { value: 400, type: 5, name: '其他' }
      ],
      value: 1,
      name: `${this.range.find(x => x.value === this.rangeValue).label}收入统计汇总图`
    };

    this.$services.basic(params).subscribe(res => {
      this.incomePipeOption = res;
    });
  }

  // 支出
  payEcharLineInit() {
    const params = {
      data: [
        { type: 1, name: '衣', value: [120, 132, 101, 134, 90, 230, 210] },
        { type: 2, name: '食', value: [220, 182, 191, 234, 290, 330, 310] },
        { type: 3, name: '住', value: [150, 232, 201, 154, 190, 330, 410] },
        { type: 4, name: '行', value: [320, 332, 301, 334, 390, 330, 320] },
        { type: 5, name: '娱乐', value: [820, 932, 901, 934, 1290, 1330, 1320] },
        { type: 6, name: '其他', value: [720, 432, 501, 634, 190, 330, 130] }
      ],
      value: 2,
      name: `${this.range.find(x => x.value === this.rangeValue).label}收入统计趋势图`
    };

    this.$services.basic(params).subscribe(res => {
      this.payLineOption = res;
    });
  }

  // 收入
  incomeEcharLineInit() {
    const params = {
      data: [
        { type: 1, name: '工资', value: [120, 132, 101, 134, 90, 230, 210] },
        { type: 2, name: '红包', value: [220, 182, 191, 234, 290, 330, 310] },
        { type: 3, name: '退款', value: [150, 232, 201, 154, 190, 330, 410] },
        { type: 4, name: '奖金', value: [320, 332, 301, 334, 390, 330, 320] },
        { type: 5, name: '其他', value: [820, 932, 901, 934, 1290, 1330, 1320] }
      ],
      value: 2,
      name: `${this.range.find(x => x.value === this.rangeValue).label}收入统计趋势图`
    };

    this.$services.basic(params).subscribe(res => {
      this.incomeLineOption = res;
    });
  }

  // 时间节点切换
  seasonChange() {
    // 支出
    this.payEcharPipeInit();
    // 收入
    this.incomeEcharPipeInit();
    // 支出 折线图
    this.payEcharLineInit();
    // 收入 折线图
    this.incomeEcharLineInit();
  }
}
