document.addEventListener("DOMContentLoaded", function () {
  // Get all "navbar-burger" elements
  var $navbarBurgers = Array.prototype.slice.call(
    document.querySelectorAll(".navbar-burger"),
    0
  );

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {
    // Add a click event on each of them
    $navbarBurgers.forEach(function ($el) {
      $el.addEventListener("click", function () {
        // Get the target from the "data-target" attribute
        var target = $el.dataset.target;
        var $target = document.getElementById(target);

        // Toggle the class on both the "navbar-burger" and the "navbar-menu"
        $el.classList.toggle("is-active");
        $target.classList.toggle("is-active");
      });
    });
  }

  OverlayScrollbars(document.querySelectorAll("body"), { });
});

new Vue({
  el: "#productCard",
  data: {
    products: [
      {
        productImage: "../assets/image/churros_image1.jpg",
        productHarga: "Rp. 25k - 90k",
        productTitle: "Classic Churros",
        productOptions: [
          {
            option: "Regular (8pcs + 1 dip sauce) : Rp.25.000,-"
          },
          {
            option: "Medium (11pcs + 1 dip sauce) : Rp.30.000,-"
          },
          {
            option: "Party (35pcs + 2 dip sauce 100gr) : Rp.90.000,-"
          }                        
          ],
        // format : api.whatsapp.com/send?phone=XXXXXX&text=YYYYYY
        whatsAppMsg: "https://api.whatsapp.com/send?phone=6282154775983&text=Saya%20ingin%20membeli%20churros%20classic%20apakah%20untuk%20saat%20ini%20tersedia%20%3F"
      },
      {
        productImage: "../assets/img/110307339_212551720202453_1167792534904387234_n.jpg",
        productHarga: "Rp. 27k - 32k",
        productTitle: "Oreo Churros",
        productOptions: [
          {
            option: "Regular (8pcs + 1 dip sauce) : Rp.27.000,-"
          },
          {
            option: "Medium (11pcs + 1 dip sauce) : Rp.32.000,-"
          }                        
          ],
        whatsAppMsg: "https://api.whatsapp.com/send?phone=6282154775983&text=Saya%20ingin%20membeli%20churros%20oreo%20apakah%20untuk%20saat%20ini%20tersedia%20%3F%2C%20terima%20kasih%20"
      },
      {
        productImage: "../assets/img/75349222_124191459041190_721392458555616904_n.jpg",
        productHarga: "Rp. 25k - 90k",
        productTitle: "Cheese Churros",
        productOptions: [
          {
            option: "Regular (8pcs + 1 dip sauce) : Rp.27.000,-"
          },
          {
            option: "Medium (11pcs + 1 dip sauce) : Rp.32.000,-"
          }                        
          ],
        whatsAppMsg: "https://api.whatsapp.com/send?phone=6282154775983&text=Saya%20ingin%20membeli%20cheese%20churros%20apakah%20untuk%20saat%20ini%20tersedia%20%3F%2C%20terima%20kasih%20"
      },
      {
        productImage: "../assets/img/74998156_418439952411420_3997353601191102813_n.jpg",
        productHarga: "Rp. 23k - 145k",
        productTitle: "Creamy Regal",
        productOptions: [
          {
            option: "Creamy Regal Cup : Rp.23.000,-"
          },
          {
            option: "Creamy Regal Pan : Rp.65.000,-"
          },
          {
            option: "Creamy Regal Party : Rp.135.000,-"
          },                        
          ],
        whatsAppMsg: "https://api.whatsapp.com/send?phone=6282154775983&text=Saya%20ingin%20membeli%20creamy%20regal%20apakah%20untuk%20saat%20ini%20tersedia%20%3F%2C%20terima%20kasih%20"
      },
      {
        productImage: "../assets/img/95149241_173770884079146_2180526919243496227_n.jpg",
        productHarga: "Rp. 22k - 65k",
        productTitle: "Dalgona Choco Pudding",
        productOptions: [
          {
            option: "Dalgona Choco Pudding : Rp.23.000,-"
          },
          {
            option: "Dalgona Choco Pudding : Rp.65.000,-"
          }                        
          ],
        whatsAppMsg: "https://api.whatsapp.com/send?phone=6282154775983&text=Saya%20ingin%20membeli%20dalgona%20choco%20apakah%20untuk%20saat%20ini%20tersedia%20%3F%2C%20terima%20kasih%20"
      },
    ],
  },
});
