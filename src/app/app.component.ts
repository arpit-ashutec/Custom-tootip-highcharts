import { Component, ElementRef, ViewChild } from '@angular/core';
import * as Highcharts from 'highcharts';
import Tree from 'highcharts/modules/treemap';
Tree(Highcharts);
import More from 'highcharts/highcharts-more';
More(Highcharts);

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild('container', { read: ElementRef }) container: ElementRef;
  chartConfig = {};

  constructor() {
    this.chartConfig = {
      chart: {
        type: 'areaspline',
      },
      title: {
        text: '<b>Power consumption</b>',
      },
      xAxis: {
        categories: [
          '00:00',
          '01:00',
          '02:00',
          '03:00',
          '04:00',
          '05:00',
          '06:00',
          '07:00',
          '08:00',
          '09:00',
          '10:00',
          '11:00',
          '12:00',
          '13:00',
          '14:00',
          '15:00',
          '16:00',
          '17:00',
          '18:00',
          '19:00',
          '20:00',
          '21:00',
          '22:00',
          '23:00',
        ],
      },
      yAxis: {
        title: {
          text: 'Power (watt)',
        },
      },
      tooltip: {
        useHTML: true,
        style: {
          backgroundColor: '#FFFFF',
        },
        formatter: function () {
          const dataList = [
            {
              items: [
                {
                  key: 'BBB+',
                  value: '001 Investments',
                },
                {
                  key: '',
                  value: '20 Micron Pvt. Ltd.',
                },
                {
                  key: '',
                  value: 'ABC Infratech',
                },
              ],
            },
            {
              items: [
                {
                  key: 'BBB',
                  value: 'Reliance Industries',
                },
                {
                  key: '',
                  value: '20 Micron Pvt. Ltd.',
                },
                {
                  key: '',
                  value: 'ABC Infratech',
                },
              ],
            },
          ];

          let item01 = '';

          dataList.map((dataItems) => {
            const getItemList = dataItems.items.map((item, index) => {
              const lastIndex = dataItems.items.length - 1;
              const isLastrow = lastIndex === index ? true : false;
              return `
              <div
                  style="
                  display: flex;
                  justify-content: space-between;
                   ${
                     isLastrow
                       ? 'border-bottom: 2px solid rgba(128,128,128, .5);'
                       : 'border-bottom: 1px solid rgba(128,128,128, .5);'
                   }
                  margin-bottom: 0.5rem;
                  "> 
              <div>${item?.key ? item?.key : ''}</div>
              <div style="
            width:8rem;
            ">
              <div style="
              text-align: left;
              text-decoration: underline;
              "
              >
              ${item?.value}
              </div>
            </div>
            </div>
              `;
            });
            item01 += getItemList.join(' ');

            return item01;
          });

          console.log('data0123', item01);
          if (item01) {
            return `
            <div style="background-color: #ffffff;
            ">
            <div style="
            display: flex;
            justify-content: space-between;
            min-width: 35vw;
            border-bottom: 1px solid gray;
            
            ">
              <h4>BBB(281)</h4>
            </div>
            <div style="
            padding:5px;
            ">
                <div 
                >
                ${item01}
                </div>
            </div>
            </div>
            `;
          }
        },
      },
      plotOptions: {
        areaspline: {
          marker: {
            enabled: true,
            symbol: 'circle',
            radius: 3,
            states: {
              hover: {
                enabled: true,
              },
            },
          },
        },
        series: {
          fillOpacity: 0.5,
        },
      },
      series: [
        {
          name: 'Today ',
          data: [
            3, 4, 3, 5, 4, 10, 12, 3, 4, 3, 5, 4, 10, 12, 3, 4, 3, 5, 4, 10, 12,
            3, 4, 3,
          ],
          color: '#2ecc71',
          zIndex: 1,
        },
        {
          name: 'Yesterday ',
          data: [
            1, 3, 4, 3, 3, 5, 4, 1, 3, 4, 3, 3, 5, 4, 1, 3, 4, 3, 3, 5, 4, 1, 3,
            4,
          ],
          color: '#bdc3c7',
          zIndex: 0,
        },
      ],
    };
  }

  ngAfterViewInit(): void {
    this.loadChartData();
  }

  // Load chart
  loadChartData() {
    if (this.container)
      Highcharts.chart(this.container?.nativeElement, this.chartConfig);
  }
}
