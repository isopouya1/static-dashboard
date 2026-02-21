const ctx = document.getElementById('myChart');
// new Chart(ctx, {
//   type: 'bar',
//   data: {
//     labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//     datasets: [{
//       backgroundColor: '#E3F5FF',
//       label: '# of Votes',
//       data: [12, 29, 35, 5, 2, 3],
//       borderWidth: 1
//     }]
//   },
//   options: {

//     scales: {
//       y: {
//         beginAtZero: true
//       }
//     }
//   }
// });

new Chart(document.getElementById("bar-chart-horizontal"), {
  type: 'horizontalBar',
  data: {
    labels: ["Sells", "Founds", "Buy", "Delivery", "Changes"],
    datasets: [
      {
        label: "Status",
        backgroundColor: ["#E3F5FF", "#1C1C1C", "#F7F9FB", "#E5ECF6", "#E3F5FF"],
        data: [2478, 5267, 734, 784, 433]
      }
    ]
  },
  options: {
    legend: { display: false },
    title: {
      display: true,
      text: 'Status in 2050'
    }
  }
});


new Chart(document.getElementById("myChart"), {
  type: 'line',
  data: {
    labels: [1500,1600,1700,1750,1800,1850,1900,1950,1999,2050],
    datasets: [{ 
        data: [86,114,106,106,107,111,133,221,783,2478],
        label: "Sells",
        borderColor: "#E3F5FF",
        fill: false
      }, { 
        data: [282,350,411,502,635,809,947,1402,3700,5267],
        label: "Founds",
        borderColor: "#1C1C1C",
        fill: false
      }, { 
        data: [168,170,178,190,203,276,408,547,675,734],
        label: "Buy",
        borderColor: "#E3F5FF",
        fill: false
      }, { 
        data: [40,20,10,16,24,38,74,167,508,784],
        label: "Delivery",
        borderColor: "#1C1C1C",
        fill: false
      }, { 
        data: [6,3,2,2,7,26,82,172,312,433],
        label: "Changes",
        borderColor: "#E3F5FF",
        fill: false
      }
    ]
  },
  options: {
    title: {
      display: true,
      text: 'Status in 2050'
    }
  }
});