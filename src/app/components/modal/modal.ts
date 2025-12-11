import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface ModalEvent {
  type: string;
  data?: any;
}

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './modal.html',
  styleUrls: ['./modal.css']
})
export class ModalComponent implements OnInit, OnDestroy {
  activeModal: string | null = null;
  activeFeature: any = null;
  scanProgress = 0;
  isScanning = false;
  private scanInterval: any;
  
  formData = {
    name: '',
    email: '',
    company: '',
    message: ''
  };

  scanLines = [
    { text: '[✓] Escaneando el perímetro de la red...', show: true },
    { text: '[✓] Analizando reglas de firewall...', show: true },
    { text: '[✓] Verificando protocolos de encriptación...', show: true },
    { text: '[✓] Detectando vulnerabilidades...', show: true },
    { text: '[✓] Ejecutando análisis de amenazas...', show: false, threshold: 50 },
    { text: '[✓] Verificando parches de seguridad...', show: false, threshold: 75 },
    { text: '[✓] ESCANEO COMPLETO', show: false, threshold: 100, class: 'complete' },
    { text: 'No se detectaron amenazas. Sistema seguro.', show: false, threshold: 100, class: 'success' }
  ];

  ngOnInit(): void {
    window.addEventListener('openModal', this.handleOpenModal.bind(this));
  }

  ngOnDestroy(): void {
    window.removeEventListener('openModal', this.handleOpenModal.bind(this));
    if (this.scanInterval) {
      clearInterval(this.scanInterval);
    }
  }

  handleOpenModal(event: any): void {
    const detail = event.detail;
    
    if (typeof detail === 'string') {
      this.activeModal = detail;
      if (detail === 'scan') {
        this.startScan();
      }
    } else if (detail && detail.type === 'feature') {
      this.activeModal = 'feature';
      this.activeFeature = detail.data;
    }
  }

  closeModal(): void {
    this.activeModal = null;
    this.activeFeature = null;
    if (this.scanInterval) {
      clearInterval(this.scanInterval);
    }
    this.isScanning = false;
    this.scanProgress = 0;
    this.resetScanLines();
  }

  resetScanLines(): void {
    this.scanLines.forEach(line => {
      if (line.threshold) {
        line.show = false;
      }
    });
  }

  startScan(): void {
    this.isScanning = true;
    this.scanProgress = 0;
    this.resetScanLines();
    
    this.scanInterval = setInterval(() => {
      if (this.scanProgress < 100) {
        this.scanProgress += 2;
        
        // Show lines based on progress
        this.scanLines.forEach(line => {
          if (line.threshold && this.scanProgress >= line.threshold) {
            line.show = true;
          }
        });
      } else {
        clearInterval(this.scanInterval);
        this.isScanning = false;
      }
    }, 100);
  }

  submitForm(): void {
    if (this.formData.name && this.formData.email && this.formData.message) {
      alert('¡Mensaje enviado! Nos pondremos en contacto pronto.');
      this.closeModal();
      this.formData = { name: '', email: '', company: '', message: '' };
    } else {
      alert('Por favor completa todos los campos requeridos.');
    }
  }
}