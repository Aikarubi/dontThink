import { Component } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { FooterComponent } from '../../components/footer/footer.component';
import { ReactiveFormsModule, FormBuilder, FormGroup, Form } from '@angular/forms';

@Component({
  selector: 'app-decide',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, ReactiveFormsModule],
  templateUrl: './decide.component.html',
  styleUrl: './decide.component.css'
})
export class DecideComponent {

  decisionForm: FormGroup;
  resultado: string = '';

  /*
  "Macarrones o arroz" → elige uno aleatoriamente.

"¿Debería pedir sushi hoy?" → responde sí o no.

"Ketchup o mayonesa" → elige una.

"Voy al gimnasio o descanso" → decide.

"Tengo antojo de pizza, ¿la pido?" → responde tipo IA simple.
  */
  constructor(private formBuilder: FormBuilder) {
    this.decisionForm = this.formBuilder.group({
      decision: [''],
      categoria: ['']
    });
  }

public decidir(): void {
  const pregunta: string = this.decisionForm.value.decision?.trim();
  const categoria: string = this.decisionForm.value.categoria;

  if (!pregunta || !categoria) {
    this.resultado = 'Por favor, escribe tu duda y selecciona una categoría.';
    return;
  }

  const opciones = pregunta.split(/ o /i);

  if (opciones.length === 2) {
    const eleccion = opciones[Math.floor(Math.random() * 2)].trim();
    this.resultado = `¡${this.capitalizar(eleccion)}! 🙌`;
  } else {
    this.resultado = this.respuestaPorCategoria(categoria);
  }
}

private respuestaPorCategoria(categoria: string): string {
  const respuestas = this.respuestasPorCategoria[categoria] || ['Haz lo que te apetezca 😉'];
  return respuestas[Math.floor(Math.random() * respuestas.length)];
}


private respuestaSiNo(pregunta: string): string {
  const respuestas = [
    '¡Sí! Suena como una gran idea 😊',
    'No lo creo... hoy no 😕',
    '¡Por supuesto! ✨',
    'Mmm... quizá no hoy 😌',
    '¡Hazlo sin pensar! 💡',
    'No lo pienses más, ¡adelante! 🚀',
    'No te rayes, ¡hazlo ya! 🔥',
    'Tal vez deberías intentarlo mañana... ⏳',
    'Si te hace feliz, ¡sí! 🧡',
    'No es el momento... pero pronto lo será 🌙',
    'Sigue tu instinto... y di que sí 👁️',
    'Dale una oportunidad 🙌',
    'Eso suena genial, ¡hazlo! 🥳',
    'Hoy no... pero no lo descartes ❌',
    '¡Hazlo sin miedo! 💪',
    'Confía, esta es la señal que esperabas 🔮',
  ];
  return respuestas[Math.floor(Math.random() * respuestas.length)];
}

private respuestasPorCategoria: Record<string, string[]> = {
  comida: [
    '¡Eso suena delicioso! 😋',
    'Creo que tu estómago ya decidió 🍽️',
    '¡Hoy toca darte un capricho! 🍰',
    'Ve a por ello, ¡te lo mereces! 🍔',
    'Pide doble ración 😎',
    'Esa elección nunca falla 🍕',
    '¡Mmm! ¡Me diste hambre! 🤤',
  ],
  ropa: [
    'Póntelo, ¡te queda genial! 👌',
    'El estilo te lo haces tú 😎',
    'Hoy es un buen día para experimentar 👗',
    '¡Combina perfecto con tu energía! 💫',
    'Siente comodidad, no presión 👟',
    'No hay reglas, solo actitud 💃',
  ],
  ocio: [
    '¡Desconecta un rato, te lo mereces! 🎮',
    'Relájate y disfruta, no hay prisa 🍿',
    'Perfecto para un día como hoy ☁️',
    'Es justo lo que necesitas ahora 🎧',
    '¿Y por qué no? ¡Vamos allá! 🛋️',
    'Suena divertido, hazlo 🎉',
  ],
  rutina: [
    'Un pequeño paso hoy, ¡gran avance mañana! 🧼',
    'A veces solo hay que empezar ✨',
    'Te sentirás mejor después 💪',
    'Tu yo del futuro te lo agradecerá ⏳',
    'No es mucho, pero es progreso 🌱',
    '¡Rutina activada! ⚙️',
  ],
  aleatorio: [
    'Deja que el caos decida 🎲',
    'Sorpréndete a ti misma 🤯',
    'Lo inesperado siempre es divertido 💥',
    'Improvisa, ¡y verás magia! 🎭',
    'Haz lo que menos harías 😏',
    '¡Hoy no hay lógica, solo acción! 🌀',
  ]
};


private capitalizar(texto: string): string {
  return texto.charAt(0).toUpperCase() + texto.slice(1);
}

}
