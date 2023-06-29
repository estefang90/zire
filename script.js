// Seleccionamos el botón de menú y la lista de enlaces
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');

// Añadimos un evento click al botón de menú
menuBtn.addEventListener('click', () => {
  // Si el menú tiene la clase "show", lo ocultamos
  if (menu.classList.contains('show')) {
    menu.classList.remove('show');
    menuBtn.innerHTML = '&#9776;';
  } else {
    // Si el menú no tiene la clase "show", lo mostramos
    menu.classList.add('show');
    menuBtn.innerHTML = '&times;';
  }
});

// Añadimos un evento resize al objeto window para ocultar el menú cuando se cambie el tamaño de la ventana
window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    menu.classList.remove('show');
    menuBtn.innerHTML = '&#9776;';
  }
});


function renderPortfolioItems(items) {
    var template = _.template($("#portfolio-item-template").html());
    var container = $("#portfolio-items");
    container.empty();
    items.forEach(function(item) {
      var html = template(item);
      container.append(html);
    })
  }

  var portfolioItems = [
    {
      imageUrl: "proyecto1.jpg",
      title: "Proyecto 1"
    },
    {
      imageUrl: "proyecto2.jpg",
      title: "Proyecto 2"
    },
    {
      imageUrl: "proyecto3.jpg",
      title: "Proyecto 3"
    }
  ];
  
  $(document).ready(function() {
    renderPortfolioItems(portfolioItems);
  });
  

