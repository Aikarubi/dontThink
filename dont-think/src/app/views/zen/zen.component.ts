import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-zen',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, NgClass],
  templateUrl: './zen.component.html',
  styleUrl: './zen.component.css'
})
export class ZenComponent {

 frase: string = '';
 fondoClase: string = 'bg-gradient-to-br from-purple-200 via-pink-100 to-yellow-100';


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

  const fondos: Record<string, string> = {
    feliz: 'bg-gradient-to-br from-yellow-100 via-yellow-200 to-yellow-300',
    inspirado: 'bg-gradient-to-br from-orange-100 via-orange-200 to-pink-200',
    motivado: 'bg-gradient-to-br from-green-100 via-green-200 to-green-300',
    triste: 'bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300',
    ansioso: 'bg-gradient-to-br from-purple-100 via-purple-200 to-purple-300',
    frustrado: 'bg-gradient-to-br from-red-100 via-red-200 to-red-300',
    perdido: 'bg-gradient-to-br from-pink-100 via-purple-100 to-indigo-100',
    confundido: 'bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300',
    reflexivo: 'bg-gradient-to-br from-indigo-100 via-indigo-200 to-indigo-300',
  };

  this.fondoClase = fondos[emocion] || this.fondoClase;
}

}
