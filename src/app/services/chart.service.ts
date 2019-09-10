import { map } from 'rxjs/operators';
import { Injectable, OnInit, OnChanges } from '@angular/core';
import { of, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

export interface Chart {
  value: number;
  data: { value: number | number[]; type: number; name: string }[];
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class ChartDataService {
  constructor(private $httpClient: HttpClient) {}
  color = [
    '#ff6c02',
    '#ff9003',
    '#ffaa43',
    '#ffd184',
    '#5d7ea9',
    '#548da0',
    '#a6dcf4',
    '#fdfffe',
    '#036072',
    '#029396',
    '#03deca',
    '#a361f9',
    '#7188fc',
    '#47e2ff',
    '#fe7484'
  ];

  /**
   *
   * @param params 数据参数
   *
   * @params.value ecahrt 类型 1 饼图  2 折线图
   */
  basic(params: Chart): Observable<any> {
    let info;
    switch (params.value) {
      case 1:
        info = this.pipe(
          params.data,
          params.name
        );
        break;
      case 2:
        info = this.line(params.data, params.name);
        break;
    }
    return of(info);
  }

  pipe(data, name) {
    return {
      // backgroundColor: '#fff',
      title: {
        text: name
      },
      legend: {
        data: data.map(x => x.name)
      },
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
      },
      visualMap: {
        show: false,
        min: 80,
        max: 600,
        inRange: {
          colorLightness: [0, 1]
        }
      },
      series: [
        {
          name: data.map(x => x.name),
          type: 'pie',
          radius: '55%',
          center: ['50%', '50%'],
          data: data.sort((a, b) => {
            return a.value - b.value;
          }),
          roseType: 'radius',
          itemStyle: {
            normal: {
              color: params => {
                const colorList = this.color;
                return colorList[params.dataIndex];
              }
            }
          },
          animationType: 'scale',
          animationEasing: 'elasticOut',
          animationDelay: idx => {
            return Math.random() * 200;
          }
        }
      ]
    };
  }

  line(data, name) {
    const colorList = this.color;
    return {
      title: {
        text: name
      },
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: data.map(x => x.name)
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
      },
      yAxis: {
        type: 'value'
      },
      series: data.map((x, i) => {
        x.type = 'line';
        x.stack = x.name;
        x.data = x.value;
        x.color = colorList[i];
        return x;
      })
    };
  }
}
