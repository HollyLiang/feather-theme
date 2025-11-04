import { Injectable, ApplicationRef, ComponentRef, createComponent, EnvironmentInjector } from '@angular/core';
import { FtToastComponent, ToastConfig } from '../components/ft-toast/ft-toast.component';

export type MessageType = 'info' | 'success' | 'warning' | 'error';

export interface ToastButton {
  text: string;
  action: () => void;
  class?: string;
}

export interface ToastOptions {
  title?: string;
  message: string;
  type?: MessageType;
  duration?: number; // milliseconds, 0 = no auto-close
  buttons?: ToastButton[];
  closeable?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class FtMessageService {
  private toastComponents: ComponentRef<FtToastComponent>[] = [];

  constructor(
    private appRef: ApplicationRef,
    private injector: EnvironmentInjector
  ) {}

  /**
   * Show a toast notification
   */
  show(options: ToastOptions): void {
    const config: ToastConfig = {
      title: options.title,
      message: options.message,
      type: options.type || 'info',
      duration: options.duration ?? 5000,
      buttons: options.buttons || [],
      closeable: options.closeable ?? true
    };

    const componentRef = createComponent(FtToastComponent, {
      environmentInjector: this.injector
    });

    componentRef.instance.config = config;
    componentRef.instance.close.subscribe(() => {
      this.removeToast(componentRef);
    });

    this.appRef.attachView(componentRef.hostView);
    
    const domElem = (componentRef.hostView as any).rootNodes[0] as HTMLElement;
    let container = document.querySelector('.ft-toast-container');
    
    if (!container) {
      container = document.createElement('div');
      container.className = 'ft-toast-container';
      document.body.appendChild(container);
    }
    
    container.appendChild(domElem);
    this.toastComponents.push(componentRef);
  }

  /**
   * Show info toast
   */
  info(message: string, title?: string, options?: Partial<ToastOptions>): void {
    this.show({ ...options, message, title, type: 'info' });
  }

  /**
   * Show success toast
   */
  success(message: string, title?: string, options?: Partial<ToastOptions>): void {
    this.show({ ...options, message, title, type: 'success' });
  }

  /**
   * Show warning toast
   */
  warning(message: string, title?: string, options?: Partial<ToastOptions>): void {
    this.show({ ...options, message, title, type: 'warning' });
  }

  /**
   * Show error toast
   */
  error(message: string, title?: string, options?: Partial<ToastOptions>): void {
    this.show({ ...options, message, title, type: 'error' });
  }

  /**
   * Remove a toast
   */
  private removeToast(componentRef: ComponentRef<FtToastComponent>): void {
    const index = this.toastComponents.indexOf(componentRef);
    if (index > -1) {
      this.toastComponents.splice(index, 1);
      this.appRef.detachView(componentRef.hostView);
      componentRef.destroy();
    }
  }

  /**
   * Clear all toasts
   */
  clearAll(): void {
    this.toastComponents.forEach(componentRef => {
      this.appRef.detachView(componentRef.hostView);
      componentRef.destroy();
    });
    this.toastComponents = [];
  }
}
