import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface FooterLink {
  title: string;
  url: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

@Component({
  selector: 'app-footer',
  imports: [CommonModule],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class FooterComponent {
  currentYear = new Date().getFullYear();

  footerSections: FooterSection[] = [
    {
      title: 'Product',
      links: [
        { title: 'Features', url: '#features' },
        { title: 'Pricing', url: '#pricing' },
        { title: 'Security', url: '#security' },
        { title: 'Enterprise', url: '#enterprise' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { title: 'Documentation', url: '#docs' },
        { title: 'API Reference', url: '#api' },
        { title: 'Support', url: '#support' },
        { title: 'Status', url: '#status' }
      ]
    },
    {
      title: 'Company',
      links: [
        { title: 'About', url: '#about' },
        { title: 'Blog', url: '#blog' },
        { title: 'Careers', url: '#careers' },
        { title: 'Contact', url: '#contact' }
      ]
    },
    {
      title: 'Legal',
      links: [
        { title: 'Privacy', url: '#privacy' },
        { title: 'Terms', url: '#terms' },
        { title: 'License', url: '#license' },
        { title: 'Cookies', url: '#cookies' }
      ]
    }
  ];

  socialLinks = [
    { name: 'GitHub', icon: '⚡', url: 'https://github.com/JoelAG-gif' },
    { name: 'LinkedIn', icon: '💼', url: 'https://www.linkedin.com/in/jireharoni/' },
  ];
}