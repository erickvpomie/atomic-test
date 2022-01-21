import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Router, Routes} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

  public cardsData    : Array<any> = [
    {
      title: 'Explora',
      details : [ `Innovación y <span class="fw-bold">creación tecnológica</span>`, `<span class="fw-bold">UI/UX</span>`, `<span class="fw-bold">Innovación</span>` ],
      imgName: '04.png',
      color: 'white',
      size: 'sm'
    },
    {
      title: 'Imagina',
      details : [ `<span class="fw-bold">Estrategia</span> Digital`, `Big Data & <span class="fw-bold">Analysis</span>`, `<span class="fw-bold">Consultoría</span> Tecnológica`, `<span class="fw-bold">Reducción</span> de costos TI` ],
      imgName: '05.png',
      color: 'orange',
      size: 'xl'
    },
    {
      title: 'Conquista',
      details : [ `Desarrollo tecnológico <span class="fw-bold">a la medida</span>`, `<span class="fw-bold">Ciberseguridad</span>`, `<span class="fw-bold">Servicios de la Nube</span>` ],
      imgName: '06.png',
      color: 'white',
      size: 'sm'
    }
  ];
  public gatewayData  : Array<any> = [
    {
      imgName: '09.png',
      details: ['Usamos las tecnologías más modernas', 'Innovamos y creamos proyectos retadores']
    },
    {
      imgName: '10.png',
      details: ['¡Trabajos en equipo rumbo al éxito!', 'No tenemos código de vestimenta']
    },
    {
      imgName: '11.png',
      details: ['Realizamos actividades para tu bienestar', '¡Tenemos un parque frente a la oficina!']
    }
  ];
  public featuresData : Array<any> = [
    {
      title: 'Equipo inclusivo, honesto y auténtico',
      others: true,
      atomic: true
    },
    {
      title: 'Puntualidad es nuestro segundo nombre',
      others: true,
      atomic: true
    },
    {
      title: 'Siempre innovamos en nuestros productos',
      others: true,
      atomic: true
    },
    {
      title: 'Te ayudamos a crecer e implementar nuevos conocimientos',
      others: false,
      atomic: true
    },
    {
      title: 'Nos preocupamos por tu bienestar',
      others: false,
      atomic: true
    },
    {
      title: 'El respeto es una parte fundamental',
      others: false,
      atomic: true
    }
  ]

  constructor(
    private router : Router
  ) {

  }

  ngOnInit(): void {
  }

  toRegisterPage(){
    this.router.navigate(['register']).then();
  }

}
