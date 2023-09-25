const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Product extends Model { }

Product.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    product_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      validate: {
        isDecimal: true,
      }
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    condition: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    category_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'category',
        key: 'id'
      }
    },
    cart_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

// Function to generate star rating HTML
function generateStarRating(rating) {
  const filledStars = '★'.repeat(Math.round(rating));
  const emptyStars = '☆'.repeat(5 - Math.round(rating));
  return `${filledStars}${emptyStars}`;
}

// Function to fetch product reviews
async function fetchProductReviews(productId) {
  try {
    const response = await fetch(`/api/products/${productId}/reviews`);
    if (!response.ok) {
      throw new Error('Failed to fetch product reviews');
    }
    const reviewsData = await response.json();
    return reviewsData;
  } catch (error) {
    console.error('Error fetching product reviews:', error);
    throw error;
  }
}

// Function to generate HTML for product reviews
function generateProductReviews(reviewsData) {
  let reviewsHTML = '';
  reviewsData.forEach((review) => {
    const starRatingHTML = generateStarRating(review.star_rating);
    reviewsHTML += `
      <div class="review">
        <div class="star-rating">${starRatingHTML}</div>
        <p>${review.review_text}</p>
      </div>
    `;
  });
  return reviewsHTML;
}

document.addEventListener('DOMContentLoaded', async () => {
  const productReviewsContainer = document.querySelector('.product-reviews');
  const productId = window.location.pathname.split('/').pop();
  
  try {
    const productReviewsData = await fetchProductReviews(productId);
    // the generateProductReviews function generate reviews HTML
    productReviewsContainer.innerHTML = generateProductReviews(productReviewsData);
  } catch (error) {
    console.error('Error fetching product reviews:', error);
  }

  // Handle form submission for adding reviews
  const reviewForm = document.querySelector('.review-form');
  reviewForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const reviewText = document.querySelector('#review-text').value;
    const starRating = document.querySelector('#star-rating').value;
    
    try {
      // Send the review data to your server using fetch or AJAX
      const response = await fetch('/api/reviews', {
        method: 'POST',
        body: JSON.stringify({ review_text: reviewText, star_rating, product_id: productId }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      
      if (response.ok) {
        // Refresh the reviews after adding a new review
        const updatedReviewsData = await fetchProductReviews(productId);
        productReviewsContainer.innerHTML = generateProductReviews(updatedReviewsData);
      } else {
        throw new Error('Failed to submit review');
      }
    } catch (error) {
      console.error('Error submitting review:', error);
    }
  });
});

module.exports = Product;

