using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;

namespace AngularCharts.Controllers
{
    [Produces("application/json")]
    [Route("api/LineChart")]
    public class LineChartController : Controller
    {
        [HttpGet("[action]")]

        public WeatherForecast GetWeatherForecast()
        {
            var weatherList = new List<Weather>();
            weatherList.Add(new Weather { Label = "New Delhi", Data = new double[] { 3.99, 4, 3, 4.83, 4.83, 4.83 } });
            weatherList.Add(new Weather { Label = "New York", Data = new double[] { 4.37, 4.83, 5, 2, 3, 5 } });
            weatherList.Add(new Weather { Label = "Moscow", Data = new double[] { 5, 2, 3, 5, 3, 4.5 } });
            weatherList.Add(new Weather { Label = "London", Data = new double[] { 4.37, 4.83, 5, 2, 3, 5 } });
            weatherList.Add(new Weather { Label = "Bangkok", Data = new double[] { 5, 3, 4.83, 4, 4, 4 } });
            weatherList.Add(new Weather { Label = "Paris", Data = new double[] { 4.37, 4.83, 5, 2, 3, 5 } });
            weatherList.Add(new Weather { Label = "A", Data = new double[] { 5, 3, 4, 4.83, 4, 4 } });
            weatherList.Add(new Weather { Label = "B", Data = new double[] { 5, 4.83, 4, 5, 3, 4.83 } });

            List<string> lineChartLabelsList = new List<string>();

            for (int i = 0; i < 3; i++)
            {
                lineChartLabelsList.AddRange(new string[] { $"{(DayOfWeek)i} High", $"{(DayOfWeek)i} Low" });
            }

            return new WeatherForecast { WeatherList = weatherList, ChartLabels = lineChartLabelsList.ToArray() };

        }

        public class Weather
        {
            public double[] Data { get; set; }
            public string Label { get; set; }
        }

        public class WeatherForecast
        {
            public List<Weather> WeatherList { get; set; }
            public string[] ChartLabels { get; set; }
        }
    }
}