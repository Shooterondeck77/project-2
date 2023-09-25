document.getElementById('add-cart').addEventListener('click', async () => {
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