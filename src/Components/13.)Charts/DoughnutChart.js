// yarn add react-chatsjs-2 chart.js
// npm install --save react-chartjs-2 chart.js

import React from 'react'
import { Doughnut } from 'react-chartjs-2'

function DoughnutChart() {

    const data = {
        labels: [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May'
        ],
        datasets : [
            {
                label: 'Sales for 2020 in Millions',
                data: [3,2,2,1,5],
                
                  backgroundColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 205, 86, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(153, 102, 255, 1)'
                  ]
            }
        ]
    }

    const options = {
        title: {
          display: true,
          text: 'Bar Chart'
        },
        
      }


    return (
        <div>
            <Doughnut data={data} options={options} />
        </div>
    )
}

export default DoughnutChart
