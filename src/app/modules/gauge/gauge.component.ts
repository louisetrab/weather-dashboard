import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { IgxRadialGaugeComponent } from 'igniteui-angular-gauges';

@Component({
  selector: 'app-gauge',
  templateUrl: './gauge.component.html',
  styleUrls: ['./gauge.component.css'],
})
export class GaugeComponent implements OnInit {
  @Input() currentTemp: any; // Input property for temperature
  @ViewChild('radialGauge', { static: true })
  public radialGauge!: IgxRadialGaugeComponent;

  ngOnInit(): void {
    // changing defaults to highlight current feature
    this.radialGauge.scaleBrush = '#e8e8e8';
  }
}
