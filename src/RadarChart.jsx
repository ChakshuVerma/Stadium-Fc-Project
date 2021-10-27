import React from "react";
import {Radar} from 'react-chartjs-2'

const RadarChart = ({player}) => {

    const data = {
        labels: [
          'Crossing',
          'Finishing',
          'HeadingAccuracy',
          'ShortPassing',
          'Volleys',
        ],
        datasets: [{
          label: `${player.Name}'s Skills`,
          data: [player.Crossing, player.Finishing, player.HeadingAccuracy, player.ShortPassing, player.Volleys],
          fill: true,
          backgroundColor: 'rgba(255, 99, 132, 0.4)',
          borderColor: 'rgb(255, 99, 132)',
          pointBackgroundColor: 'rgb(255, 99, 132)',
          pointRadius: 5,
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgb(255, 99, 132)'
        }]
      };

      const options = {
        scale: {
          ticks: { 
            beginAtZero: true,
            max: 100,
            stepSize: 10,
          },
        }
      }

    return(
        <Radar data={data} options={options} height={'400'} width={'400'}/>  
    );
}

export default RadarChart;