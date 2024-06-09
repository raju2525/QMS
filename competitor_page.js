// ... (previous JavaScript code) ...

// Sample market share data (replace with actual data)
function showTab(tabId) {
    // Hide all tabs
    $(".tab-content").hide();
    // Show the selected tab
    $("#" + tabId).show();
  };
  
const marketShareData = {
    labels: ['Product 1', 'Product 2', 'Product 3', 'Product 4', 'Product 5'],
    datasets: [{
      label: 'Market Share',
      data: [30, 20, 15, 10, 25], // Replace with actual market share percentages
      backgroundColor: [
        'rgba(255, 99, 132, 0.5)',
        'rgba(54, 162, 235, 0.5)',
        'rgba(255, 206, 86, 0.5)',
        'rgba(75, 192, 192, 0.5)',
        'rgba(153, 102, 255, 0.5)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
      ],
      borderWidth: 1,
    }],
  };
  
  // Function to create a market share chart
  const createMarketShareChart = () => {
    const marketShareCanvas = $('#marketShareChart');
    const marketShareChart = new Chart(marketShareCanvas[0].getContext('2d'), {
      type: 'bar',
      data: marketShareData,
      options: {
        scales: {
          y: {
            beginAtZero: true,
            max: 100,
            title: {
              display: true,
              text: 'Market Share (%)',
            },
          },
          x: {
            title: {
              display: true,
              text: 'Products',
            },
          },
        },
      },
    });
  };
  
  // ... (remaining JavaScript code) ...
  
  // Call the function to create the market share chart
  createMarketShareChart();
  