
// Inicialización de categorías en localStorage
categorias = {
    "101" : { codigo: "101", nombre: "Tacones", descripcion: "El mejor tipo de calzado para eventos importantes", imagen: "img/Tacones.jpg" },
    "102" : { codigo: "102", nombre: "Sandalias", descripcion: "Sandalias cómodas y ligeras, perfectas para el día a día", imagen: "img/Sandalias.jpg"  },
    "103" : { codigo: "103", nombre: "Tenis", descripcion: "Lo mejor en comodidad y confort", imagen: "img/Tenis.jpg"  }
};

localStorage.setItem("categorias", JSON.stringify(categorias));


//Inicialización de banners en localStorage
banners = {
    "101" : { codigo: "101", titulo: "Tacones", descripcion: "Atrévete a destacar con nuestro nuevo estilo de tacones, ideales para elevar cualquier look con elegancia y sofisticación. Perfectos para ocasiones especiales o para transformar tu outfit diario con un toque de glamour.", subtitulo: "", imagen: "img/Tacones.jpg" },
    "102" : { codigo: "102", titulo: "Sandalias", descripcion: "Disfruta del confort y la frescura con nuestras sandalias en promoción. Diseñadas para ofrecer estilo y comodidad en cada paso, son el complemento ideal para tus días soleados o tus salidas casuales.", subtitulo: "", imagen: "img/Sandalias.jpg" },
    "103" : { codigo: "103", titulo: "Tenis", descripcion: "Vive cada paso con nuestros tenis de alta calidad. Su diseño moderno y ergonómico te brinda comodidad durante todo el día, adaptándose tanto a tu rutina diaria como a tu estilo urbano.", subtitulo: "", imagen: "img/Tenis.jpg" }
};

localStorage.setItem("banners", JSON.stringify(banners));


//Inicialización del calzado en localStorage
calzado = {
    "1011" : { codigo: "1011", nombre: "Tacon alto", descripcion: "El mejor estilo y diseño para eventos importantes",
              categoria: "101", imagen: "img/TaconAlto.png", precio: 89.000, calificacion: "4", especificaciones: ["Altura: 10 cm",
                                                                                                                   "Material: Cuero sintético",
                                                                                                                   "Color: Cafe", 
                                                                                                                   "Talla: 36-41"] },
    "1012" : { codigo: "1012", nombre: "Tacon medio", descripcion: "El equilibrio perfecto entre estilo y comodidad",
              categoria: "101", imagen: "img/TaconMedio.png", precio: 89.000, calificacion: "5", especificaciones: ["Altura: 7 cm",
                                                                                                                    "Material: Cuero sintético",
                                                                                                                    "Color: Blanco", 
                                                                                                                    "Talla: 36-41"] },
    "1013" : { codigo: "1013", nombre: "Tacon bajo", descripcion: "Paara esos eventos importantes, pero con un toque de comodidad",
              categoria: "101", imagen: "img/TaconPequeño.png", precio: 79.000, calificacion: "4" , especificaciones: [ "Altura: 4 cm",
                                                                                                                        "Material: Cuero sintético",
                                                                                                                        "Color: Multicolor",
                                                                                                                        "Talla: 35-40"]
            },

    
    "1020" : { codigo: "1020", nombre: "Sandalias", descripcion: "Cómodas y ligeras, perfectas para el día a día",
              categoria: "102", imagen: "img/Sandalias.jpg", precio: 59.000, calificacion: "5", especificaciones: ["Material: Tela", "Color: Azul", "Talla: 35-39"] },
    "1021" : { codigo: "1021", nombre: "Sandalias de playa", descripcion: "Cómodas y perfectas para esos viajes a la playa",
              categoria: "102", imagen: "img/SandaliasPlaya.png", precio: 49.000, calificacion: "4", especificaciones: ["Material: Plástico", "Color: Gris", "Talla: 35-40"]},
    "1022" : { codigo: "1022", nombre: "Sandalias casuales", descripcion: "Ligeras y cómodas, ideales para el día a día",
              categoria: "102", imagen: "img/SandaliasCasuales.png", precio: 55.000, calificacion: "5", especificaciones: ["Material: Tela", "Color: Multicolor", "Talla: 36-40"]},


    "1030" : { codigo: "1030", nombre: "Tenis", descripcion: "Lo mejor en comodidad y confort",
              categoria: "103", imagen: "img/Tenis.jpg", precio: 65.000, calificacion: "4", especificaciones: ["Material: Tela", "Color: Gris", "Talla: 36-41"] },
    "1031" : { codigo: "1031", nombre: "Tenis deportivos", descripcion: "Lo mejor en confort para tus actividades deportivas",
              categoria: "103", imagen: "img/TenisDeportivos.png", precio: 75.000, calificacion: "5", especificaciones: ["Material: Tela", "Color: Cafe", "Talla: 36-41"] },
    "1032" : { codigo: "1032", nombre: "Tenis casuales", descripcion: "Lo mejor en comodidad para tu día a día",
              categoria: "103", imagen: "img/TenisCasuales.png", precio: 70.000, calificacion: "4", especificaciones: ["Material: Tela", "Color: Beige", "Talla: 35-39"] },
};

localStorage.setItem("calzado", JSON.stringify(calzado));