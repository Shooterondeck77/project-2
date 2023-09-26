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


