import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

  chart: any;

  chartLoader() {
    console.log('Chart Loader Called');

    this.chart = new Chart('Barchart', {
      type: 'bar',
      data: {
        labels: ["Assignment", "Quiz", "Presentation", "Lab", "Viva"],
        datasets: [
         
          {
            label: "Completed",
            data: [28, 80, 65, 45, 0], // Example data
            backgroundColor: '#90ee90',// Gray for 0, green otherwise
            borderColor: '#90ee90',
            borderWidth: 1
          },
          {
            label: "Completed",
            data: [75, 30, 45, 55, 0], // Example data
            backgroundColor: '#90ee90',// Gray for 0, green otherwise
            borderColor: '#90ee90',
            borderWidth: 1
          },
          {
            label: "Completed",
            data: [55, 66, 30, 0, 100], // Example data
            backgroundColor: '#90ee90',// Gray for 0, green otherwise
            borderColor: '#90ee90',
            borderWidth: 1
          },
          {
            
            label: "Pending",
            data: [100], // Example data
            backgroundColor: '#d3d3d3', // Gray for 0, green otherwise
            borderColor: '#d3d3d3',
            borderWidth: 1
          },
          {
            label: "Completed",
            data: [0, 75], // Example data
            backgroundColor: '#90ee90',// Gray for 0, green otherwise
            borderColor: '#90ee90',
            borderWidth: 1
          },
          {
            label: "Completed",
            data: [0, 29], // Example data
            backgroundColor: '#90ee90',// Gray for 0, green otherwise
            borderColor: '#90ee90',
            borderWidth: 1
          },
          {
            label: "Completed",
            data: [0, 50], // Example data
            backgroundColor: '#90ee90',// Gray for 0, green otherwise
            borderColor: '#90ee90',
            borderWidth: 1
          },
          {
            
            label: "Pending",
            data: [0,100], // Example data
            backgroundColor: '#d3d3d3', // Gray for 0, green otherwise
            borderColor: '#d3d3d3',
            borderWidth: 1
          },
          {
            
            label: "Pending",
            data: [0, 100], // Example data
            backgroundColor: '#d3d3d3', // Gray for 0, green otherwise
            borderColor: '#d3d3d3',
            borderWidth: 1
          },
          {
            
            label: "Pending",
            data: [0, 100], // Example data
            backgroundColor: '#d3d3d3', // Gray for 0, green otherwise
            borderColor: '#d3d3d3',
            borderWidth: 1
          },
        ]
      },
      options: {
        plugins: {
          legend: {
            display: false, // Show the legend if needed
          },
          title: {
            display: false, // Hide the title if any
          }
        },
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true,
            min: 0,
            max: 100,
            ticks: {
              stepSize: 25,
              callback: function(value: string | number) {
                return typeof value === 'number' ? value + '%' : value;
              }
            }
          }
        },
      
      }
    });
  }

  constructor() { }

  ngOnInit(): void {
    this.chartLoader();
  }

}
