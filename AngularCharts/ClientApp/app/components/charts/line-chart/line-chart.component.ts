import { Component, Inject } from '@angular/core';
import { Http } from '@angular/http';

@Component({
    selector: 'app-line-chart',
    templateUrl: './line-chart.component.html',
    styleUrls: ['./line-chart.component.css']
})


export class LineChartComponent {
    public weatherForecast: WeatherForecast;
    public chartLegend: boolean = true;
    //public chartType: string = 'line';
    public chartType: string = 'bar';
    

    public chartOptions: any = {
        responsive: true,
        legend: {
            position: 'bottom'
        }
    };

    constructor(http: Http, @Inject('BASE_URL') baseUrl: string) {
        http.get(baseUrl + 'api/LineChart/GetWeatherForecast').subscribe(result => {
            this.weatherForecast = result.json() as WeatherForecast;
        }, error => console.error(error));
    }

   


    public chartColors: Array<any> = [
        {

            //backgroundColor: 'rgba(255, 0, 0, 0.2)',
            borderColor: 'rgba(255,153,51,1)',
            pointBackgroundColor: 'rgba(0,128,0,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(148,159,177,0.8)',
            pointRadius: 8,
            fill: false,
        },
        {

            //backgroundColor: 'rgba(0, 0, 255, 0.4)',
            borderColor: 'rgba(77,83,96,1)',
            pointBackgroundColor: 'rgba(77,83,96,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(77,83,96,1)',
            lineTension: 0,
            pointRadius: 10,
            pointStyle: 'rectRounded',
            fill: false,
        },
        {
            //backgroundColor: 'green',
            borderColor: 'rgba(0,128,0,1)',
            pointBackgroundColor: 'rgba(148,159,177,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(148,159,177,0.8)',
            pointStyle: 'rect',
            pointRadius: 6,
            fill: false,

        },

        {

            //backgroundColor: 'rgba(255, 255, 0, 0.2)',
            borderColor: 'rgba(0,0,255,1)',
            pointBackgroundColor: 'rgba(0,0,255,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(148,159,177,0.8)',
            pointStyle: 'triangle',
            pointRadius: 10,
            fill: false,
        }
    ];







     //public spliceData() {
    //    this.chartType = 'bar';
    //    this.weatherForecast.weatherList = this.weatherForecast.weatherList.splice(1, 2);
    //}

    //public useCustomColor: boolean = false;

     //public chartData: Weather[];
    //public chartLabels: string[];


    //constructor(http: Http, @Inject('BASE_URL') baseUrl: string) {
    //    http.get(baseUrl + 'api/LineChart/GetWeatherForecast').subscribe(result => {
    //        this.weatherForecast = result.json() as WeatherForecast;
    //    }, error => console.error(error));
    //}


    //constructor(http: Http, @Inject('BASE_URL') baseUrl: string) {
    //    http.get('http://localhost:7533/api/LineChart/GetWeatherForecast').subscribe(result => {
    //        this.weatherForecast = result.json() as WeatherForecast;
    //    }, error => console.error(error));
    //}


    



    //public showLineChart() {
    //    //this.weatherForecast = this.weatherForecast1;
    //    //this.chartData = this.weatherForecast.weatherList;
    //    //this.chartLabels = this.weatherForecast.chartLabels;

    //    this.chartType = 'line';
    //    this.useCustomColor = false;

    //}

    //public showLineChartWithCustomColor() {
    //    //this.weatherForecast = this.weatherForecast1;
    //    //this.chartData = this.weatherForecast.weatherList;
    //    //this.chartLabels = this.weatherForecast.chartLabels;

    //    this.chartType = 'line';
    //    this.useCustomColor = true;
    //}





    //public showHorizontalBar() {
    //    //this.weatherForecast = this.weatherForecast1;
    //    //this.chartData = this.weatherForecast.weatherList;
    //    //this.chartLabels = this.weatherForecast.chartLabels;

    //    this.chartType = 'horizontalbar';
    //    this.useCustomColor = false;
    //}

    //public showBarChart() {
    //    //this.weatherForecast = this.weatherForecast1;
    //    //this.chartData = this.weatherForecast.weatherList;
    //    //this.chartLabels = this.weatherForecast.chartLabels;

    //    this.chartType = 'bar';
    //    this.useCustomColor = false;
    //}


    //public showBarChartLessData() {
    //    this.chartType = 'bar';
    //    this.useCustomColor = false;
    //    this.weatherForecast.weatherList.splice(1, 2);
    //}

    //public LineChartNoFill() {
    //    this.chartType = 'line';
    //    this.useCustomColor = true;
    //    this.chartColors = this.chartColorsNoFills;
    //}



    //public showScatterChart() {
    //    this.chartType = 'scatter';
    //}

   
    //public chartColors: Array<any> = [
    //    {

    //        backgroundColor: 'rgba(148,159,177,0.2)',
    //        borderColor: 'rgba(255,153,51,1)',
    //        pointBackgroundColor: 'rgba(0,128,0,1)',
    //        pointBorderColor: '#fff',
    //        pointHoverBackgroundColor: '#fff',
    //        pointHoverBorderColor: 'rgba(148,159,177,0.8)',
    //        pointRadius: 8,
    //    },
    //    {

    //        backgroundColor: 'rgba(77,83,96,0.2)',
    //        borderColor: 'rgba(77,83,96,1)',
    //        pointBackgroundColor: 'rgba(77,83,96,1)',
    //        pointBorderColor: '#fff',
    //        pointHoverBackgroundColor: '#fff',
    //        pointHoverBorderColor: 'rgba(77,83,96,1)',
    //        lineTension: 0,
    //        pointRadius: 10,
    //        pointStyle: 'rectRounded'
    //    },
    //    {
    //        backgroundColor: 'rgba(148,159,177,0.2)',
    //        borderColor: 'rgba(0,128,0,1)',
    //        pointBackgroundColor: 'rgba(148,159,177,1)',
    //        pointBorderColor: '#fff',
    //        pointHoverBackgroundColor: '#fff',
    //        pointHoverBorderColor: 'rgba(148,159,177,0.8)',
    //        pointStyle: 'rect',
    //        pointRadius: 6,

    //    },

    //    {
    //        backgroundColor: 'rgba(148,159,177,0.2)',
    //        borderColor: 'rgba(0,0,255,1)',
    //        pointBackgroundColor: 'rgba(0,0,255,1)',
    //        pointBorderColor: '#fff',
    //        pointHoverBackgroundColor: '#fff',
    //        pointHoverBorderColor: 'rgba(148,159,177,0.8)',
    //        pointStyle: 'triangle',
    //        pointRadius: 10,
    //    }
    //];

    //public chartColorsNoFills: Array<any> = [
    //    {

    //        borderColor: 'rgba(255,153,51,1)',
    //        pointBackgroundColor: 'rgba(0,128,0,1)',
    //        pointBorderColor: '#fff',
    //        pointHoverBackgroundColor: '#fff',
    //        pointHoverBorderColor: 'rgba(148,159,177,0.8)',
    //        pointRadius: 8,
    //        lineTension: 0,
    //        fill: false,
    //    },
    //    {

    //        borderColor: 'rgba(77,83,96,1)',
    //        pointBackgroundColor: 'rgba(77,83,96,1)',
    //        pointBorderColor: '#fff',
    //        pointHoverBackgroundColor: '#fff',
    //        pointHoverBorderColor: 'rgba(77,83,96,1)',
    //        lineTension: 0,
    //        pointRadius: 10,
    //        pointStyle: 'rectRounded',
    //        fill: false,
    //    },
    //    {
    //        borderColor: 'rgba(0,128,0,1)',
    //        pointBackgroundColor: 'rgba(148,159,177,1)',
    //        pointBorderColor: '#fff',
    //        pointHoverBackgroundColor: '#fff',
    //        pointHoverBorderColor: 'rgba(148,159,177,0.8)',
    //        pointStyle: 'rect',
    //        pointRadius: 6,
    //        fill: false,

    //    },

    //    {

    //        borderColor: 'rgba(0,0,255,1)',
    //        pointBackgroundColor: 'rgba(0,0,255,1)',
    //        pointBorderColor: '#fff',
    //        pointHoverBackgroundColor: '#fff',
    //        pointHoverBorderColor: 'rgba(148,159,177,0.8)',
    //        pointStyle: 'triangle',
    //        pointRadius: 10,
    //        fill: false,
    //    }
    //];

    
    //public lineChartType: string = 'line';
    //public barChartType: string = 'bar';
}


interface Weather {
    data: Array<number>;
    label: string;
}

interface WeatherForecast {
    weatherList: Weather[];
    chartLabels: string[];
}

