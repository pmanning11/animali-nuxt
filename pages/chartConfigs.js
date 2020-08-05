export default {
  // SPARKLINES
  lineChartOptions: {
    chart: {
      height: 100,
      type: 'area',
      sparkline: {
        enabled: true,
      },
    },
    stroke: {
      width: 2.5,
      curve: 'smooth',
    },
    colors: ['#3CDFD9'],
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 0.9,
        opacityFrom: 0.7,
        opacityTo: 0.5,
        stops: [0, 80, 100],
      },
    },
    xaxis: {
      type: 'numeric',
      lines: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      labels: { show: false },
    },
    yaxis: [
      {
        y: 0,
        offsetX: 0,
        offsetY: 0,
        padding: {
          left: 0,
          right: 0,
        },
      },
    ],
    tooltip: {
      x: { show: false },
    },
  },

  // PIE
  pieChartOptions: {
    labels: ['Returning', 'New'],
    dataLabels: {
      enabled: false,
    },
    legend: { show: false },
    chart: {
      type: 'pie',
      offsetY: 0,
      dropShadow: {
        enabled: false,
        blur: 5,
        left: 1,
        top: 1,
        opacity: 0.2,
      },
      toolbar: {
        show: false,
      },
    },
    stroke: {
      width: 5,
    },
    colors: ['#1b4ea2', '#6dbffe'],
    // fill: {
    //   type: 'gradient',
    //   gradient: {
    //     gradientToColors: ['#9c8cfc', '#FFC085'],
    //   },
    // },
  },
}
