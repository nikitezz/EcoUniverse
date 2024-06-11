const data = {
    labels: ['1950', '1960', '1970', '1980', '1990', '2000', '2010', '2020'],
    datasets: [{
        label: 'Вымирание животных',
        data: [500, 600, 800, 1200, 1500, 1000, 900, 700],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1
    },
    {
        label: 'Исчезновение растений',
        data: [200, 300, 400, 500, 600, 700, 800, 900],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1
    }
]
  };

  const config = {
    type: 'line',
    data: data,
    options: {
        responsive: true,
        scales: {
            beginAtZero: true
        }
    }
  }

  const chart = new Chart(document.getElementById('extinctionChart'), config);

