console.log("App.js loaded");
fetch("https://smartshop-fullstack2.onrender.com/api/products")
  .then(res => res.json())
  .then(data => {
    const d = document.getElementById("products");
    d.innerHTML = "";

    if (!Array.isArray(data) || data.length === 0) {
      d.innerHTML = "<p>No products found</p>";
      return;
    }

    data.forEach(p => {
      d.innerHTML += `<p>${p.title} - ₹${p.price}</p>`;
    });
  })
  .catch(err => {
    console.error(err);
    document.getElementById("products").innerHTML =
      "<p>Server error</p>";
  });

