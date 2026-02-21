 const ctx = document.getElementById('myChart');

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        backgroundColor: '#E3F5FF',
        label: '# of Votes',
        data: [12, 29, 3, 5, 2, 3],
        borderWidth: 1
      }]
    },
    options: {
      
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });