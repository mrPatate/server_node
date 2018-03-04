      
			var margin = {top: 100, right: 100, bottom: 100, left: 100},
				width = Math.min(700, window.innerWidth - 10) - margin.left - margin.right,
				height = Math.min(width, window.innerHeight - margin.top - margin.bottom - 20);
					
			////////////////////////////////////////////////////////////// 
			////////////////////////// Data ////////////////////////////// 
			////////////////////////////////////////////////////////////// 
			var data = [

			  [
				{axis:"0°",value:0.59},
				{axis:"-20°",value:0.05},
				{axis:"-40°",value:0.05},
				{axis:"-60°",value:0.05},
				{axis:"-80°",value:0.05},
				{axis:"-100°",value:0.05},
				{axis:"-120°",value:0.05},
				{axis:"-140°",value:0.05},
				{axis:"-160°",value:0.05},
	                        {axis:"180°",value:0.05},
	                        {axis:"160°",value:0.05},
	                        {axis:"140°",value:0.05},
	                        {axis:"120°",value:0.05},
	                        {axis:"100°",value:0.05},
	                        {axis:"80°",value:0.05},
	                        {axis:"60°",value:0.05},
	                        {axis:"40°",value:0.05},
	                        {axis:"20°",value:0.05},

			  ],[
	                        {axis:"0°",value:0.50},
	                        {axis:"-20°",value:0.50},
	                        {axis:"-40°",value:0.50},
	                        {axis:"-60°",value:0.50},
	                        {axis:"-80°",value:0.50},
	                        {axis:"-100°",value:0.50},
	                        {axis:"-120°",value:0.50},
	                        {axis:"-140°",value:0.50},
	                        {axis:"-160°",value:0.50},
	                        {axis:"180°",value:0.50},
	                        {axis:"160°",value:0.50},
	                        {axis:"140°",value:0.50},
	                        {axis:"120°",value:0.50},
	                        {axis:"100°",value:0.50},
	                        {axis:"80°",value:0.50},
	                        {axis:"60°",value:0.50},
	                        {axis:"40°",value:0.50},
				{axis:"20°",value:0.50},
                    ]

					];
			////////////////////////////////////////////////////////////// 
			//////////////////// Draw the Chart ////////////////////////// 
			////////////////////////////////////////////////////////////// 
			var color = d3.scale.ordinal()
				.range(["#EDC951","#CC333F","#00A0B0"]);
				
			var radarChartOptions = {
			  w: width,
			  h: height,
			  margin: margin,
			  maxValue: 0.5,
			  levels: 5,
			  roundStrokes: true,
			  color: color
			};
			//Call function to draw the Radar chart
			RadarChart(".radarChart", data, radarChartOptions);
