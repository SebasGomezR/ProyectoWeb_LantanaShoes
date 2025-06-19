
// Inicialización de categorías en localStorage
categorias = {
    "101" : { codigo: "101", nombre: "Tacones", descripcion: "El mejor tipo de calzado para eventos importantes", imagen: "img/Tacones.jpg" },
    "102" : { codigo: "102", nombre: "Sandalias", descripcion: "Sandalias cómodas y ligeras, perfectas para el día a día", imagen: "img/Sandalias.jpg"  },
    "103" : { codigo: "103", nombre: "Tenis", descripcion: "Lo mejor en comodidad y confort", imagen: "img/Tenis.jpg"  }
};

localStorage.setItem("categorias", JSON.stringify(categorias));



banners = {
    "101" : { codigo: "101", titulo: "Tacones", descripcion: "Atrévete a destacar con nuestro nuevo estilo de tacones, ideales para elevar cualquier look con elegancia y sofisticación. Perfectos para ocasiones especiales o para transformar tu outfit diario con un toque de glamour.", subtitulo: "", imagen: "img/Tacones.jpg" },
    "102" : { codigo: "102", titulo: "Sandalias", descripcion: "Disfruta del confort y la frescura con nuestras sandalias en promoción. Diseñadas para ofrecer estilo y comodidad en cada paso, son el complemento ideal para tus días soleados o tus salidas casuales.", subtitulo: "", imagen: "img/Sandalias.jpg" },
    "103" : { codigo: "103", titulo: "Tenis", descripcion: "Vive cada paso con nuestros tenis de alta calidad. Su diseño moderno y ergonómico te brinda comodidad durante todo el día, adaptándose tanto a tu rutina diaria como a tu estilo urbano.", subtitulo: "", imagen: "img/Tenis.jpg" }
};

localStorage.setItem("banners", JSON.stringify(banners));



calzado = {
    "1011" : { codigo: "1011", nombre: "Tacon alto", descripcion: "El mejor estilo y diseño para eventos importantes",
              categoria: "101", imagen: "img/Tacones.jpg", precio: 89.000, clasificacion: "4"},
    "1012" : { codigo: "1012", nombre: "Tacon medio", descripcion: "El mejor estilo y diseño para eventos importantes",
              categoria: "101", imagen: "img/Tacones.jpg", precio: 89.000, clasificacion: "5"},

    
    "1020" : { codigo: "1020", nombre: "Sandalias", descripcion: "Cómodas y ligeras, perfectas para el día a día",
              categoria: "102", imagen: "img/Sandalias.jpg", precio: 59.000, clasificacion: "5"},


    "1030" : { codigo: "1030", nombre: "Tenis", descripcion: "Lo mejor en comodidad y confort",
              categoria: "103", imagen: "img/Tenis.jpg", precio: 65.000, clasificacion: "4"},
};

localStorage.setItem("calzado", JSON.stringify(calzado));