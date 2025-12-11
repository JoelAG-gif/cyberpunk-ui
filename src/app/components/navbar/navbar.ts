import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class NavbarComponent {
  menuOpen = false;
 
  menuItems = [
    { label: 'Home', link: '#home' },
    { label: 'Features', link: '#features' },
    { label: 'Terminal', link: '#terminal' },
    { label: 'Contact', link: '#contact' }
  ];

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  scrollTo(section: string): void {
    const element = document.querySelector(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    this.menuOpen = false;
  }

  openContactModal(): void {
    window.dispatchEvent(new CustomEvent('openModal', { detail: 'contact' }));
  }
}