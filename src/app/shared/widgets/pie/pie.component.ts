import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router ,ParamMap} from '@angular/router';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';
import { StatistiqueService } from 'src/app/services/statistique.service';

@Component({
  selector: 'app-widget-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.css']
})
export class PieComponent implements OnInit {

  highcharts = Highcharts;
  chartOptions = {};
  readyData:Boolean;

  constructor(private statistique: StatistiqueService,private router:Router ,route: ActivatedRoute) { }

  ngOnInit() {
    this.readyData = false;
    this.statistique.getPercentageGroupByStatus().subscribe({next: (res: Object) => {
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
          text: "Number of claims by Status"
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
              ['Accepted',  TypePercent[0].count],
             
              {
                 name: 'Refused',
                 y: TypePercent[1].count,
                 sliced: true,
                 selected: true
              },
              
              {
                name: 'Waiting',
                y: TypePercent[2].count,
                sliced: true,
                selected: true
             }
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

}
