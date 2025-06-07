import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-zen',
  standalone: true,
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './zen.component.html',
  styleUrl: './zen.component.css'
})
export class ZenComponent {

 frase: string = '';

  private frasesPorEmocion: Record<string, string[]> = {
    feliz: [
      'Disfruta este momento, te lo mereces 🌟',
      'Sonríe, tu alegría es contagiosa 😊'
    ],
    inspirado: [
      'Las ideas que cambian el mundo empiezan contigo 💡',
      'Inspírate en lo pequeño para lograr lo grande'
    ],
    motivado: [
      'Sigue así, estás imparable 💪',
      'Hoy es un buen día para avanzar con fuerza'
    ],
    triste: [
      'Está bien no estar bien, esto también pasará 🌧️',
      'Tu tristeza merece cuidado, no juicio'
    ],
    ansioso: [
      'Respira hondo, estás a salvo aquí y ahora 🫧',
      'No tienes que controlarlo todo, solo respirar'
    ],
    frustrado: [
      'Tómate un respiro, la claridad volverá',
      'Frustrarse es parte del camino, no el final'
    ],
    perdido: [
      'A veces perderse es la mejor forma de encontrarse 🌀',
      'No necesitas tener todas las respuestas ahora'
    ],
    confundido: [
      'La confusión es el principio del entendimiento',
      'No tener claridad también es parte del proceso'
    ],
    reflexivo: [
      'Escúchate. A veces el silencio tiene mucho que decir',
      'Reflexionar es crecer en silencio 🧘'
    ]
  };

  public mostrarFrase(emocion: string): void {
    const frases = this.frasesPorEmocion[emocion] || ['Respira. Estás aquí y ahora 🌿'];
    const aleatoria = frases[Math.floor(Math.random() * frases.length)];
    this.frase = aleatoria;
  }
}
