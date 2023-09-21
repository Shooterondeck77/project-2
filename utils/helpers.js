module.exports = {
   // Helper to format a date as MM/DD/YYYY
  format_date: (date) => {
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    return new Date(date).toLocaleDateString(undefined, options);
  },

  format_amount: (amount) => {
    // format large numbers with commas
    return parseInt(amount).toLocaleString();
  },
  get_emoji: () => {
    const randomNum = Math.random();

    // Return a random emoji
    if (randomNum > 0.7) {
      return `<span for="img" aria-label="lightbulb">💡</span>`;
    } else if (randomNum > 0.4) {
      return `<span for="img" aria-label="laptop">💻</span>`;
    } else {
      return `<span for="img" aria-label="gear">⚙️</span>`;
    }
  },

  // Helper to truncate text to a certain length
  truncate_text: (text, length) => {
    if (text.length > length) {
      return text.substring(0, length) + '...';
    }
    return text;
  },

  // Helper to capitalize the first letter of a string
  capitalize: (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  },
};
