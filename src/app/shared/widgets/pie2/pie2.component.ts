import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';
import { StatistiqueService } from 'src/app/services/statistique.service';


@Component({
  selector: 'app-widget-pie2',
  templateUrl: './pie2.component.html',
  styleUrls: ['./pie2.component.css']
})
export class Pie2Component implements OnInit {

  highcharts = Highcharts;
  chartOptions = {};
  readyData:Boolean;

  constructor(private statistique: StatistiqueService,private router:Router ,route: ActivatedRoute) { }

  ngOnInit() {
    this.readyData = false;
    this.statistique.getPercentageGroupByType().subscribe({next: (res: Object) => {
      console.log(res);
      const Types = Object.getOwnPropertyNames(res);
      const TypePercent = Object.values(res);
      console.log(Types,TypePercent)
      
      this.chartOptions = {
        chart: {
          plotBorderWidth: null,
          plotShadow: false,
         
        },
        title: {
          text: "Number of claims by Types"
        },
        tooltip: {
          pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
  
        plotOptions: {
          pie: {
            allowPointSelect: true,
            cursor: 'pointer',
  
            dataLabels: {
              enabled: false
            },
            showInLegend: true
          }
        },
        exporting: {
          enabled: true
        },
        credits: {
          enabled: false
        },
        series: [{
          type: 'pie',
          name: '%',
           data: [
              ['Type IT',  TypePercent[0].count],
             
              {
                 name: 'Type 2',
                 y: TypePercent[1].count,
                 sliced: true,
                 selected: true
              },
              
              {
                name: 'Type 3',
                y: TypePercent[2].count,
                sliced: true,
                selected: true
             },
             {
              name: 'Type 4',
              y: TypePercent[3].count,
              sliced: true,
              selected: true
           },
           ]
        }]
      };
      console.log(this.chartOptions);
      
      HC_exporting(Highcharts);
      this.readyData = true;
      setTimeout(() => {
        window.dispatchEvent(
          new Event('resize')
        );
      }, 300);
  },
  error: (err) => {
    console.log(err);
  },
});

    

  


   
  }
/*
  ngOnInit() {

      this.chartOptions = {
        chart: {
          plotBorderWidth: null,
          plotShadow: false,
         
        },
        title: {
          text: "Number of claims by departemant"
        },
        tooltip: {
          pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
  
        plotOptions: {
          pie: {
            allowPointSelect: true,
            cursor: 'pointer',
  
            dataLabels: {
              enabled: false
            },
            showInLegend: true
          }
        },
        exporting: {
          enabled: true
        },
        credits: {
          enabled: false
        },
        series: [{
          type: 'pie',
          name: '%',
           data: [
              ['IT_Dep',   10.0],
             
              {
                 name: 'FI_Dep',
                 y: 90.0,
                 sliced: true,
                 selected: true
              }
              
           ]
        }]
      };
  
      HC_exporting(Highcharts);
  
      setTimeout(() => {
        window.dispatchEvent(
          new Event('resize')
        );
      }, 300);










    }
  */

}
