import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Chart} from 'chart.js';
declare var FusionCharts;
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild('barCanvas') barCanvas;

  barChart: any;

  fsChart: any;
  constructor(public navCtrl: NavController) {
    
  }

  ionViewDidLoad() {
    FusionCharts.ready(function() {
      var revenueChart = new FusionCharts({
      type: 'doughnut2d',
      renderAt: 'lineCanvas',
      width: '100%',
      height: '450',
      dataFormat: 'json',
      dataSource: {
      "chart": {
      "caption": "Split of Revenue by Product Categories",
      "subCaption": "Last year",
      "numberPrefix": "$",
      "paletteColors": "#0075c2,#1aaf5d,#f2c500,#f45b00,#8e0000",
      // more chart attributes
      },
      "data": [{
      "label": "Food",
      "value": "85"
      },
      {
      "label": "Drink",
      "value": "15"
      }
      // more data
      ]
      }
      }).render();
      });

    this.barChart = new Chart(this.barCanvas.nativeElement, {
      type: 'bar',
      data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [{
          label: "# of votes",
          data: [12, 19, 3, 11, 5, 3],
          backgroundColor: [
            'rgba(255, 99, 132, 0.5)',
            'rgba(54, 162, 235, 0.5)',
            'rgba(255, 206, 86, 0.5)',
            'rgba(75, 192, 192, 0.5)',
            'rgba(153, 102, 255, 0.5)',
            'rgba(255, 159, 64, 0.5)'
          ],
          borderColor: [
              'rgba(255,99,132,1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    })
  }

}
