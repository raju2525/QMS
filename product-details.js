// public/product-details.js
$(document).ready(() => {
    // Function to extract URL parameters
    const getParameterByName = (name, url) => {
      if (!url) url = window.location.href;
      name = name.replace(/[\[\]]/g, "\\$&");
      const regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
      if (!results) return null;
      if (!results[2]) return "";
      return decodeURIComponent(results[2].replace(/\+/g, " "));
    };
  
    // Sample product data (replace with actual data)
    const productData = {
      product1: {
        sales: [5000, 8000, 6000, 7000, 9000, 7500, 10000], // Monthly sales data
        description: 'This is the description for Product 1.',
        supply: [100, 150, 120, 130, 110, 90, 80], // Monthly supply data
        feedback: 'Positive',
      },
      product2: {
        sales: [8000, 12000, 10000, 9000, 11000, 9500, 12000], // Monthly sales data
        description: 'This is the description for Product 2.',
        supply: [80, 70, 100, 120, 90, 110, 130], // Monthly supply data
        feedback: 'Neutral',
      },
      // Add more products as needed
    };
  
    // Get the product ID from the URL
    const productId = getParameterByName('productId');
  
    // Function to show product details, sales graph, and supply graph
    const showProductDetails = () => {
      const detailsContainer = $('#productDetails');
      const productInfo = productData[productId];
  
      if (productInfo) {
        const detailsHTML = `
          <div class="card">
            <i class="fas fa-dollar-sign"></i>
            <h3>${productId}</h3>
            <p>Sales: ${productInfo.sales[productInfo.sales.length - 1]}</p>
          </div>
          <div class="card">
            <i class="fas fa-info-circle"></i>
            <p>Description: ${productInfo.description}</p>
          </div>
          <div class="card">
            <i class="fas fa-chart-line"></i>
            <p>Monthly Sales Chart:</p>
            <canvas id="salesChart"></canvas>
          </div>
          <div class="card">
            <i class="fas fa-cube"></i>
            <p>Supply: ${productInfo.supply[productInfo.supply.length - 1]}</p>
          </div>
          <div class="card">
            <i class="fas fa-chart-line"></i>
            <p>Monthly Supply Chart:</p>
            <canvas id="supplyChart"></canvas>
          </div>
          <div class="card">
            <i class="fas fa-comments"></i>
            <p>Customer Feedback: ${productInfo.feedback}</p>
          </div>
        `;
  
        // Append product details to the container
        detailsContainer.html(detailsHTML);
  
        // Create a canvas for the sales chart
        const salesCanvas = $('#salesChart');
        const salesChart = new Chart(salesCanvas[0].getContext('2d'), {
          type: 'line', // You can change this to other chart types like 'bar', 'pie', etc.
          data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [{
              label: 'Monthly Sales',
              data: productInfo.sales,
              borderColor: 'rgba(75, 192, 192, 1)',
              borderWidth: 1,
              fill: false,
            }],
          },
        });
  
        // Create a canvas for the supply chart
        const supplyCanvas = $('#supplyChart');
        const supplyChart = new Chart(supplyCanvas[0].getContext('2d'), {
          type: 'line', // You can change this to other chart types like 'bar', 'pie', etc.
          data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [{
              label: 'Monthly Supply',
              data: productInfo.supply,
              borderColor: 'rgba(255, 99, 132, 1)',
              borderWidth: 1,
              fill: false,
            }],
          },
        });
      }
    };
  
    // Call the function to show product details, sales graph, and supply graph
    showProductDetails();
  });
  