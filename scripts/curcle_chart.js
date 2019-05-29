			$('.recommend_сircle_сhart').each(function(index, element){          
			  var ctx1 = element.getContext("2d");

					var recommendCircleChartGradient = ctx1.createLinearGradient(200,16,0,184);
					recommendCircleChartGradient.addColorStop(0, 'rgba(233,58,58,1)');
					recommendCircleChartGradient.addColorStop(1, 'rgba(232,164,31,1)');

					var recommendCircleChart = new Chart(ctx1, {
					  type: 'pie',
					  data: {
					    labels: ['Recommend'],
					    datasets: [{
					      data: [45, 55],
					      backgroundColor: [
					        recommendCircleChartGradient,
					        'rgb(236,238,238)'
					      ],
					      borderWidth: 0
					    }]
					  },
					  options: {
					   	cutoutPercentage: 40,
					    responsive: false,
					    legend: {
					        display: false
					    },
					    tooltips: {
					         enabled: false
					    },
					      animation: {
					        duration: 1500,
					        easing: 'linear'
					      },
					  }
					});

					
			});
