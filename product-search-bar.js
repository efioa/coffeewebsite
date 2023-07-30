/*Product search list*/
  const products = [
    { name: "Honduran Rich Roast Coffee", description: " A Honduran rich roast coffee is a high-quality blend from Honduras,known for its bold flavor with dark chocolate and caramel notes. It's a robust and satisfying choice that showcases the region's coffee craftsmanship and unique terroir. &nbsp<b>Price:</b> $23.00 per bag/kilo", image_src: "images.jpg/Honduran-coffee-on-burlap-sack.webp" },
    { name: " Arabic Coffee Blend", description: "An Arabic coffee blend is a carefully crafted mixture of coffee beans, often featuring Arabica beans as the main component. This blend is known for its smooth, delicate, and nuanced flavors, with hints of fruity, floral, and nutty notes. It offers a refined and elegant coffee experience that is cherished by coffee aficionados for its unique taste and aromatic profile. &nbsp<b>Price:</b> $26.00 per bag/kilo",image_src: "images.jpg/arabicbeans.jpg" },
    { name: "Brazilian Smooth Roasted Coffee Beans", description: "Brazilian smooth roasted coffee beans are a delightful coffee choice known for their gentle and mellow flavors. These beans are carefully roasted to perfection, resulting in a smooth and balanced cup of coffee. With a mild acidity and a subtle sweetness, they offer a pleasant taste with hints of nuts and chocolate. Brazilian smooth roasted coffee beans provide a comforting and easygoing coffee experience that appeals to a wide range of coffee enthusiasts. &nbsp<b>Price:</b>$26.00 per bag/kilo",image_src: "images.jpg/brazilianbeans.jpg" },
    { name: "Turkish Coffee", description: "Turkish coffee beans are a special and traditional variety used to make the beloved Turkish coffee. These beans are finely ground to a powder-like consistency, essential for the unique brewing method. When prepared using the Turkish method, the coffee has a rich, bold, and full-bodied flavor with a strong aroma. It is typically served in small cups and enjoyed slowly to savor the intense and distinctive taste.&nbsp<b>Price:</b> $25.40 per bag/kilo",image_src: "images.jpg/turkishbeans.jpg" },
    { name: "Guatamalan Ground Coffee", description: "Guatemalan ground coffee beans are a delightful and flavorful choice hailing from the lush highlands of Guatemala. Grown in volcanic soil and under ideal climatic conditions, these beans develop a unique taste profile. When ground, they release captivating aromas of citrus, cocoa, and sometimes nutty undertones. &nbsp<b>Price:</b> $24.35 per bag/kilo", image_src: "images.jpg/coffee-woodentable.jpg" },
    { name: "Columbian Rich Smooth Roast Coffee", description: "Colombian smooth rich roast beans are a premium coffee selection from the renowned coffee-producing regions of Colombia. These beans are expertly roasted to perfection, resulting in a smooth and velvety cup of coffee. The brew offers a delightful richness with hints of caramel, dark chocolate, and a subtle fruity undertone. &nbsp<b>Price:</b> $26.70 per bag/kilo", image_src: "images.jpg/coffee-plantation.jpg" },
  ];

  const searchInput = document.getElementById("searchInput");
  const productList = document.getElementById("productList");
  const searchBtn = document.getElementById("searchBtn");


  
  function updateProductList() {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredProducts = products.filter(product => product.name.toLowerCase().includes(searchTerm));
    displayProducts(filteredProducts);
  }
   
  function displayProducts(productArray) {
    const listItems = productArray.map(product => `
      <li>
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        ${product.image_src ? `<img src="${product.image_src}" alt="${product.name}" width="100">` : ''}
      </li>
    `).join("");
    productList.innerHTML = listItems;
  }
  searchBtn.addEventListener("click", updateProductList);

  /*function for togglebar when using mobile device*/
  document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuToggle = document.getElementById('mobile-menu');
    const navbarMenu = document.querySelector('.navbar__menu');
  
    mobileMenuToggle.addEventListener('click', () => {
      navbarMenu.classList.toggle('active');
    });
  });