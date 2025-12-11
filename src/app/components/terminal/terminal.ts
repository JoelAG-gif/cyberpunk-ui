import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface TerminalLine {
  type: 'command' | 'output' | 'success' | 'error';
  text: string;
  timestamp?: string;
}

@Component({
  selector: 'app-terminal',
  imports: [CommonModule, FormsModule],
  templateUrl: './terminal.html',
  styleUrl: './terminal.css'
})
export class TerminalComponent {
  terminalLines: TerminalLine[] = [
    { type: 'output', text: 'CYBER TERMINAL v3.2.1' },
    { type: 'output', text: 'Connected to secure server [192.168.1.100]' },
    { type: 'output', text: '-------------------------------------------' },
    { type: 'command', text: '$ cyber scan --network' },
    { type: 'output', text: 'Initializing network scan...' },
    { type: 'success', text: '✓ Network scan completed. 0 threats detected.' },
    { type: 'command', text: '$ cyber status' },
    { type: 'success', text: '✓ All systems operational' },
    { type: 'success', text: '✓ Firewall: ACTIVE' },
    { type: 'success', text: '✓ Encryption: ENABLED' },
    { type: 'command', text: '$ cyber monitor --realtime' },
    { type: 'output', text: 'Starting real-time monitoring...' }
  ];

  currentCommand = '';

  predefinedCommands = [
    'cyber scan --network',
    'cyber status',
    'cyber monitor --realtime',
    'cyber encrypt --level 256',
    'cyber firewall --enable',
    'cyber threat-detect --ai'
  ];

  executeCommand(): void {
    if (!this.currentCommand.trim()) return;

    this.terminalLines.push({
      type: 'command',
      text: `$ ${this.currentCommand}`,
      timestamp: new Date().toLocaleTimeString()
    });

    setTimeout(() => {
      this.processCommand(this.currentCommand);
      this.currentCommand = '';
    }, 500);
  }

  processCommand(command: string): void {
    const cmd = command.toLowerCase().trim();

    if (cmd.includes('scan')) {
      this.terminalLines.push({
        type: 'output',
        text: 'Scanning network perimeter...'
      });
      setTimeout(() => {
        this.terminalLines.push({
          type: 'success',
          text: '✓ Scan completed. System secure.'
        });
      }, 1000);
    } else if (cmd.includes('status')) {
      this.terminalLines.push({
        type: 'success',
        text: '✓ All systems operational'
      });
    } else if (cmd.includes('help')) {
      this.terminalLines.push({
        type: 'output',
        text: 'Available commands: scan, status, monitor, encrypt, firewall, threat-detect'
      });
    } else {
      this.terminalLines.push({
        type: 'error',
        text: `✗ Command not recognized: ${command}`
      });
    }

    this.scrollToBottom();
  }

  scrollToBottom(): void {
    setTimeout(() => {
      const terminal = document.querySelector('.terminal-output');
      if (terminal) {
        terminal.scrollTop = terminal.scrollHeight;
      }
    }, 100);
  }

  insertCommand(command: string): void {
    this.currentCommand = command;
  }
}