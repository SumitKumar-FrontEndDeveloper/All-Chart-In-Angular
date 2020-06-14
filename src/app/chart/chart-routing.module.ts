import { DoughnutChartComponent } from './doughnut-chart/doughnut-chart.component';
import { RadarChartComponent } from './radar-chart/radar-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { BubbleChartComponent } from './bubble-chart/bubble-chart.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { CommonModule } from '@angular/common';
import { ChartComponent } from './../chart/chart.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:'',component : ChartComponent},
  {path:'pie',component : PieChartComponent},
  {path:'line',component : LineChartComponent},
  {path:'bubble',component : BubbleChartComponent},
  {path:'bar',component : BarChartComponent},
  {path:'radar',component : RadarChartComponent},
  {path:'dough',component : DoughnutChartComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports:[RouterModule]
})
export class ChartRoutingModule { }
