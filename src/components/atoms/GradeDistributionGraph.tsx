import { FC } from 'react'
import { Bar } from 'react-chartjs-2'

import { GradeDistributionGraphData } from 'types'

type GradeDistributionGraphProps = {
  data: GradeDistributionGraphData
}

const labels = ['A+', 'A', 'A-', 'B+', 'B', 'B-', 'C+', 'C', 'D', 'D-', 'F']
const options = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    y: {
      beginAtZero: true,
    },
  },
}

const GradeDistributionGraph: FC<GradeDistributionGraphProps> = ({ data }) => {
  const gradeData = {
    labels,
    datasets: [
      {
        label: '人数',
        data: [
          data.apCount,
          data.aCount,
          data.amCount,
          data.bpCount,
          data.bCount,
          data.bmCount,
          data.cpCount,
          data.cCount,
          data.dCount,
          data.dmCount,
          data.fCount,
        ],
        backgroundColor: [
          'rgb(33, 150, 243)',
          'rgb(33, 150, 243)',
          'rgb(33, 150, 243)',
          'rgb(187, 222, 251)',
          'rgb(187, 222, 251)',
          'rgb(187, 222, 251)',
          'rgb(255, 152, 0)',
          'rgb(255, 152, 0)',
          'rgb(244, 67, 54)',
          'rgb(244, 67, 54)',
          'rgb(244, 67, 54)',
        ],
      },
    ],
  }
  return <Bar options={options} data={gradeData} height="600" />
}

export default GradeDistributionGraph
