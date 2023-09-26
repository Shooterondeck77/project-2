// Store the original button styles
const button = document.getElementById('add-cart');
const originalBackgroundColor = button.style.backgroundColor;
const originalTextColor = button.style.color;

document.getElementById('add-cart').addEventListener('click', async () => {
  console.log('button clicked');
  const url = window.location.href;
  const parts = url.split('/');
  const productId = parts[parts.length - 1];

  const response = await fetch(`/api/product/cartid/${productId}`, {
    method: 'PUT',
  });

  if (response.ok) {
    console.log('Product cart_id updated successfully');

    button.textContent = 'Added to Cart';

    button.style.backgroundColor = '#4CAF50';
    button.style.color = 'white';

    setTimeout(() => {
      button.textContent = 'Add to Cart';
      button.style.backgroundColor = originalBackgroundColor;
      button.style.color = originalTextColor;
    }, 2000);
  } else {
    console.error('Failed to update product cart_id');
  }
});

    console.log('button clicked')
    const url = window.location.href;
    const parts = url.split('/');
    const productId = parts[parts.length - 1];

    const response = await fetch(`/api/product/cartid/${productId}`, {
      method: 'PUT',
    });

    if (response.ok) {
      console.log('Product cart_id updated successfully');
      // Handle success, e.g., show a success message
    } else {
      console.error('Failed to update product cart_id');
      // Handle error, e.g., show an error message
    }
  });

  // Sample cart data (you would fetch this from your backend)
const cartItems = [
  { id: 1, name: 'Product 1', quantity: 2, price: 10 },
  { id: 2, name: 'Product 2', quantity: 1, price: 20 },
  // Add more items as needed
];

// Reference to the <tbody> element
const cartTableBody = document.getElementById('cartTable');

// Clear any existing content in the table body
cartTableBody.innerHTML = '';

// Iterate over the cart items and create table rows
cartItems.forEach((item) => {
  const row = document.createElement('tr');
  row.innerHTML = `
    <td>${item.name}</td>
    <td>${item.quantity}</td>
    <td>$${item.price.toFixed(2)}</td>
    <td>$${(item.quantity * item.price).toFixed(2)}</td>
    <td><button class="btn btn-danger" onclick="removeItem(${item.id})">Remove</button></td>
  `; 
  cartTableBody.appendChild(row);
});

// Function to remove an item from the cart
function removeItem(itemId) {
  // Implement the logic to remove the item from the cart and update the UI
}
