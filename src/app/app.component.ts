import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  DataConfirmed = '';
  DataRecovered = '';
  DataHospitalized = '';
  DataDeaths = '';
  DataNewConfirmed = '';
  DataNewRecovered = '';
  DataNewHospitalized = '';
  DataNewDeaths = '';
  DataUpdateDate = '';
  allData: any;

  constructor() { }

  ngOnInit(): void {

    this.getData()

  }

  getData(){
    fetch(`https://covid19.th-stat.com/json/covid19v2/getTodayCases.json`).then(e=>{
      return e.json()
      // console.log(e)
    }).then(e=>{
      console.log(e)
      this.allData = e
      console.log(this.allData.Confirmed)
      this.DataConfirmed = e.Confirmed.toLocaleString();
      this.DataRecovered = e.Recovered.toLocaleString();
      this.DataHospitalized = e.Hospitalized.toLocaleString();
      this.DataDeaths = e.Deaths.toLocaleString();
      this.DataNewConfirmed = e.NewConfirmed.toLocaleString();
      this.DataNewRecovered = e.NewRecovered.toLocaleString();
      this.DataNewHospitalized = e.NewHospitalized.toLocaleString();
      this.DataNewDeaths = e.NewDeaths.toLocaleString();
      this.DataUpdateDate = e.UpdateDate.toLocaleString();

      
    })
  }
}
