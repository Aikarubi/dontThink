import { Component } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-decide',
  standalone: true,
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './decide.component.html',
  styleUrl: './decide.component.css'
})
export class DecideComponent {

}
