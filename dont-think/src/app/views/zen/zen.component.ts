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

  public frase = 'Su frase aparecerá aquí';
}
