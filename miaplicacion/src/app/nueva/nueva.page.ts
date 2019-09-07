import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nueva',
  templateUrl: './nueva.page.html',
  styleUrls: ['./nueva.page.scss'],
})
export class NuevaPage implements OnInit {



  lugares = [
     {
       nombre: 'Peru',
       imagen: 'assets/Machupichu.jpg',
       Descripcion: 'Los viajeros prefieren Perú por tener un gran número de sitios turísticos naturales por recorrer. Empezando por su principal atractivo Machu Picchu, el Lago Titicaca, la Isla de los Uros, las Líneas de Nazca, entre muchos otros sitios turísticos de este país.',
     },
     {
      nombre: 'Mexico',
      imagen: 'assets/piramide.jpg',
      Descripcion: 'Las pirámides de México son construcciones que nos remontan a la época prehispánica, cuando algunas etnias desarrollaron conocimientos arquitectónicos de tal complejidad y exactitud que les permitieron edificar pirámides, templos y ciudades que aun en nuestros días logran sorprendernos ¡Conoce más de estos monumentos!',
    },
    {
      nombre: 'Brazil',
      imagen: 'assets/cristo.jpg',
      Descripcion: 'Brasil es considerado como principal destino turístico internacional y de América del Sur. Destaca por los paisajes que ofrece desde el Cristo de Corcovado o el teleférico de Pan de Azúcar. Las playas de Ipanamea y Copacabana. La arquitectura peculiar de Oscar Niemeyer que se expresa en la Catedral de Brasilia y el Museo de Arte Moderno de São Paulo.',
    },
    {
      nombre: 'Colombia',
      imagen: 'assets/santuariolajas.jpg',
      Descripcion: 'San Juan de Pasto, Nariño. Es especial por su arquitectura medieval y por su ubicación topográfica entre los riscos de la cordillera de los Andes. El templo se construyó a propósito del hallazgo de una imagen de la Virgen plasmada sobre una laja, en medio del cañón. Es considerada una de las joyas arquitectónicas y religiosas más importantes de Colombia. Es visitada por millares de peregrinos en el mes de septiembre al igual que en temporada de la Semana Santa.',
    },
    {
      nombre: 'Ecuador',
      imagen: 'assets/Quilotoa.png',
      Descripcion: 'La Laguna del Quilotoa es una de las 15 lagunas de origen volcánico apreciadas como las más hermosas del mundo según Twistedsifter. En el artículo publicado por este sitio web con el nombre “15 de los más hermosos lagos volcánicos en el mundo” se invita a los lectores a disfrutar de esta misteriosa maravilla de la naturaleza mediante una galería fotográfica que describe a las lagunas según su encanto.',
    }

   ];

  constructor() { }

  ngOnInit() {
  }

}
