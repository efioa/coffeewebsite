
document.addEventListener('DOMContentLoaded', () => {
  const mobileMenuToggle = document.getElementById('mobile-menu');
  const navbarMenu = document.querySelector('.navbar__menu');

  mobileMenuToggle.addEventListener('click', () => {
    navbarMenu.classList.toggle('active');
  });
});

/*the function of product search bar*/ 

const products = [
    "Honduran Coffee Beans",
    "Arabic Coffee Beans",
    "Brazilian Coffee Beans",
    "Turkish Coffee Beans",
    "Smooth Roast Guatamalan Beans",
    "Columbian Ground Coffee Beans",
  ];
  
  const searchInput = document.getElementById("searchInput");
  const productList = document.getElementById("productList");
  
  searchInput.addEventListener("input", updateProductList);
  
  function updateProductList() {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredProducts = products.filter(product => product.toLowerCase().includes(searchTerm));
    displayProducts(filteredProducts);
  }
  
  function displayProducts(productArray) {
    const listItems = productArray.map(product => `<li>${product}</li>`).join("");
    productList.innerHTML = listItems;
  }

/*feedback form function*/

document.addEventListener('DOMContentLoaded', function () {
    const feedbackForm = document.getElementById('feedbackForm');
    const responseMessage = document.getElementById('responseMessage');
  
    feedbackForm.addEventListener('submit', function (event) {
      event.preventDefault();
  
     
      if (validateForm()) {
    
  
        responseMessage.textContent = 'Thank you for your feedback!';
        feedbackForm.reset();
      }
    });
  
    function validateForm() {
    
      const nameInput = document.getElementById('name');
      const emailInput = document.getElementById('email');
      const messageInput = document.getElementById('message');
  
      if (nameInput.value.trim() === '' || emailInput.value.trim() === '' || messageInput.value.trim() === '') {
        responseMessage.textContent = 'Please fill out all fields.';
        return false;
      }
    }
  });

