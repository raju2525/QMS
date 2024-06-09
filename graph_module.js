document.addEventListener('DOMContentLoaded', function () {
    // Initial setup when the page loads
    showGraph('profitLossTab');
});

function createProfitLossChart() {
    const profitLossCanvas = document.getElementById('profitLossChart').getContext('2d');
    new Chart(profitLossCanvas, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [{
                label: 'Profit/Loss',
                data: [10000, 12000, 8000, 15000, 11000, 13000],
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 2,
                fill: false,
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                }
            }
        }
    });
}

function createRevenueChart() {
    const revenueCanvas = document.getElementById('revenueChart').getContext('2d');
    new Chart(revenueCanvas, {
        type: 'bar',
        data: {
            labels: ['Q1', 'Q2', 'Q3', 'Q4'],
            datasets: [{
                label: 'Revenue',
                data: [50000, 60000, 75000, 90000],
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1,
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                }
            }
        }
    });
}

function createMonthlySalesChart() {
    const monthlySalesCanvas = document.getElementById('monthlySalesChart').getContext('2d');
    new Chart(monthlySalesCanvas, {
        type: 'bar',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [{
                label: 'Monthly Sales',
                data: [1200, 1500, 900, 1800, 1300, 1600],
                backgroundColor: 'rgba(54, 162, 235, 0.5)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1,
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                }
            }
        }
    });
}

function createPieChart() {
    const pieChartCanvas = document.getElementById('pieChart1').getContext('2d');
    new Chart(pieChartCanvas, {
        type: 'pie',
        data: {
            labels: ['Category A', 'Category B', 'Category C'],
            datasets: [{
                data: [30, 40, 30],
                backgroundColor: ['rgba(255, 99, 132, 0.5)', 'rgba(54, 162, 235, 0.5)', 'rgba(255, 206, 86, 0.5)'],
                borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)'],
                borderWidth: 1,
            }]
        }
    });
}

function showGraph(tabId) {
    // Hide all tabs
    $(".tab-content").hide();
    // Show the selected tab
    $("#" + tabId).show();

    // Call the corresponding function to create the chart
    switch (tabId) {
        case 'profitLossTab':
            createProfitLossChart();
            break;
        case 'revenueTab':
            createRevenueChart();
            break;
        case 'monthlySalesTab':
            createMonthlySalesChart();
            break;
        case 'pieChartsTab':
            createPieChart();
            break;
        default:
            break;
    }
}
