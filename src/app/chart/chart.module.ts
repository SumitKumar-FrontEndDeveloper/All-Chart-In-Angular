import { ChartRoutingModule } from './chart-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartComponent } from './chart.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { RadarChartComponent } from './radar-chart/radar-chart.component';
import { DoughnutChartComponent } from './doughnut-chart/doughnut-chart.component';
import { BubbleChartComponent } from './bubble-chart/bubble-chart.component';
import { ChartsModule } from 'ng2-charts';
@NgModule({
  declarations: [BubbleChartComponent,ChartComponent, BarChartComponent, LineChartComponent, PieChartComponent, RadarChartComponent, DoughnutChartComponent],
  imports: [
    CommonModule,
    ChartsModule,
    ChartRoutingModule
  ]
})
export class ChartModule { }
