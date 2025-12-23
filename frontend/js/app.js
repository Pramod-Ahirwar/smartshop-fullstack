fetch("https://fullstack2.onrender.com/api/products")

  .then(res => res.json())
  .then(data => {
    const d = document.getElementById("products");
    data.forEach(p => {
      d.innerHTML += `<p>${p.title} - ₹${p.price}</p>`;
    });
  });

