import React, { Component } from "react";
import ChartTotalSchedules from "../../components/chart-total-schedules-per-day/chart_total_schedules_per_day";

class HomeDashBoard extends Component{
  render() { 
    return (
      <>
        <ChartTotalSchedules/>
      </>        
    );
  }
}