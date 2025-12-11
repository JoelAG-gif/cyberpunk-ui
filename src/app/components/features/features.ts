import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Feature {
  icon: string;
  title: string;
  description: string;
  status: string;
  details: {
    specs: string[];
    performance: string;
    compatibility: string;
  };
}

@Component({
  selector: 'app-features',
  imports: [CommonModule],
  templateUrl: './features.html',
  styleUrl: './features.css'
})
export class FeaturesComponent {
  features: Feature[] = [
    {
      icon: '🛡️',
      title: 'Advanced Firewall',
      description: 'Sistema de protección multicapa con detección de amenazas en tiempo real y protocolos de respuesta automática.',
      status: 'ACTIVE',
      details: {
        specs: [
          'Detección en tiempo real de amenazas',
          'Protección DDoS con mitigación automática',
          'Filtrado de paquetes avanzado con deep packet inspection'
        ],
        performance: '99.9% de precisión en detección de amenazas',
        compatibility: 'Compatible con todos los protocolos TCP/IP y IPv6'
      }
    },
    {
      icon: '🔐',
      title: 'Quantum Encryption',
      description: 'Cifrado de grado militar de 256 bits con algoritmos resistentes a la computación cuántica para máxima seguridad.',
      status: 'ACTIVE',
      details: {
        specs: [
          'Cifrado AES-256 bits de grado militar',
          'Algoritmos post-cuánticos implementados',
          'Zero-knowledge proof para máxima privacidad'
        ],
        performance: 'Resistente a ataques de computación cuántica',
        compatibility: 'Compatible con TLS 1.3 y protocolos modernos'
      }
    },
    {
      icon: '🤖',
      title: 'AI Threat Detection',
      description: 'Los algoritmos de aprendizaje automático analizan millones de patrones para identificar y neutralizar amenazas.',
      status: 'ACTIVE',
      details: {
        specs: [
          'Machine Learning avanzado con redes neuronales',
          'Análisis de comportamiento en tiempo real',
          'Predicción de amenazas con IA'
        ],
        performance: '10M+ patrones analizados por segundo',
        compatibility: 'Integración completa con sistemas SIEM'
      }
    },
    {
      icon: '📊',
      title: 'Real-Time Analytics',
      description: 'Comprehensive dashboard with live monitoring, alerts, and detailed security reports.',
      status: 'ACTIVE',
      details: {
        specs: [
          'Dashboard interactivo en tiempo real',
          'Alertas personalizables por correo y SMS',
          'Reportes detallados con métricas avanzadas'
        ],
        performance: 'Actualización de datos cada 100ms',
        compatibility: 'API REST completa para integración'
      }
    },
    {
      icon: '🔍',
      title: 'Vulnerability Scanner',
      description: 'Auditorías de seguridad automatizadas que detectan debilidades antes de que los atacantes puedan explotarlas.',
      status: 'ACTIVE',
      details: {
        specs: [
          'Escaneo automatizado programable',
          'Base de datos CVE actualizada diariamente',
          'Priorización inteligente de riesgos'
        ],
        performance: 'Escaneo completo de red en menos de 5 minutos',
        compatibility: 'Compatible con OWASP Top 10 y CWE'
      }
    },
    {
      icon: '⚡',
      title: 'Instant Response',
      description: 'Sub-millisecond reaction time to emerging threats with automated countermeasures.',
      status: 'ACTIVE',
      details: {
        specs: [
          'Respuesta automática ante amenazas',
          'Contención y aislamiento de amenazas',
          'Rollback automático de cambios maliciosos'
        ],
        performance: 'Tiempo de respuesta menor a 1 milisegundo',
        compatibility: 'Integración nativa con firewalls principales'
      }
    }
  ];

  openFeatureDetail(feature: Feature): void {
    window.dispatchEvent(new CustomEvent('openModal', { 
      detail: { type: 'feature', data: feature }
    }));
  }
}