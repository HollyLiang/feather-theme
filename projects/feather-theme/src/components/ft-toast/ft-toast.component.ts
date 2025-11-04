import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

export type MessageType = 'info' | 'success' | 'warning' | 'error';

export interface ToastButton {
  text: string;
  action: () => void;
  class?: string;
}

export interface ToastConfig {
  title?: string;
  message: string;
  type: MessageType;
  duration: number;
  buttons: ToastButton[];
  closeable: boolean;
}

@Component({
  selector: 'ft-toast',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ft-toast.component.html',
  styleUrl: './ft-toast.component.scss'
})
export class FtToastComponent implements OnInit {
  @Output() close = new EventEmitter<void>();

  config!: ToastConfig;
  isClosing = false;
  private timeoutId?: number;

  ngOnInit(): void {
    if (this.config.duration > 0) {
      this.timeoutId = window.setTimeout(() => {
        this.closeToast();
      }, this.config.duration);
    }
  }

  closeToast(): void {
    if (this.isClosing) return;
    
    this.isClosing = true;
    
    // Wait for animation to complete
    setTimeout(() => {
      if (this.timeoutId) {
        clearTimeout(this.timeoutId);
      }
      this.close.emit();
    }, 300); // Match animation duration
  }

  onButtonClick(button: ToastButton): void {
    button.action();
    this.closeToast();
  }

  getIcon(): string {
    const icons: Record<MessageType, string> = {
      info: 'info',
      success: 'check_circle',
      warning: 'warning',
      error: 'error'
    };
    return icons[this.config.type];
  }
}
