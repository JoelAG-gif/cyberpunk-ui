import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.html',
  styleUrl: './hero.css'
})
export class HeroComponent implements OnInit, OnDestroy {
  displayText = '';
  fullText = 'BIENVENIDO A LA MATRIZ CIBERNÉTICA';
  typingSpeed = 100;
  private typingInterval: any;

  stats = [
    { value: '99.9%', label: 'Uptime' },
    { value: '<10ms', label: 'Latency' },
    { value: '256-bit', label: 'Encryption' },
    { value: '24/7', label: 'Support' }
  ];

  ngOnInit(): void {
    this.typeWriter();
    this.createParticles();
  }

  ngOnDestroy(): void {
    if (this.typingInterval) {
      clearInterval(this.typingInterval);
    }
  }

  typeWriter(): void {
    let i = 0;
    this.typingInterval = setInterval(() => {
      if (i < this.fullText.length) {
        this.displayText += this.fullText.charAt(i);
        i++;
      } else {
        clearInterval(this.typingInterval);
      }
    }, this.typingSpeed);
  }

  createParticles(): void {
    const container = document.querySelector('.hero-particles');
    if (!container) return;

    for (let i = 0; i < 30; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.left = Math.random() * 100 + '%';
      particle.style.top = Math.random() * 100 + '%';
      particle.style.width = Math.random() * 3 + 1 + 'px';
      particle.style.height = particle.style.width;
      particle.style.animationDuration = Math.random() * 3 + 2 + 's';
      particle.style.animationDelay = Math.random() * 2 + 's';
      container.appendChild(particle);
    }
  }

  initiateScan(): void {
    window.dispatchEvent(new CustomEvent('openModal', { detail: 'scan' }));
  }

  viewDocumentation(): void {
    window.dispatchEvent(new CustomEvent('openModal', { detail: 'docs' }));
  }
}