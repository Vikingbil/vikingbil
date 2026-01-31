fetch("cars.json")
  .then(res => res.json())
  .then(cars => {
    const list = document.getElementById("carList");
    const brand = document.getElementById("brandFilter");
    const price = document.getElementById("priceFilter");


    function render() {
      list.innerHTML = "";
      cars.filter(c =>
        c.brand.toLowerCase().includes(brand.value.toLowerCase()) &&
        (!price.value || c.price <= price.value)
      ).forEach(c => {
        list.innerHTML += `
          <div class="car">
            <h3>${c.brand} ${c.model}</h3>
            <p>År: ${c.year}</p>
            <p>Miltal: ${c.mileage} mil</p>
            <strong>${c.price.toLocaleString()} kr</strong>
          </div>
        `;
      });
    }


    brand.oninput = render;
    price.oninput = render;
    render();
  });
