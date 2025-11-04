import { Component } from '@angular/core';
import { FtMessageService } from '../../../../projects/feather-theme/src/services/ft-message.service';

@Component({
  selector: 'app-messages',
  standalone: true,
  imports: [],
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.scss'
})
export class MessagesComponent {
  constructor(private messageService: FtMessageService) {}

  showInfoToast(): void {
    this.messageService.info('This is an informational message', 'Information');
  }

  showSuccessToast(): void {
    this.messageService.success('Your operation completed successfully!', 'Success');
  }

  showWarningToast(): void {
    this.messageService.warning('Please review this warning carefully', 'Warning');
  }

  showErrorToast(): void {
    this.messageService.error('An error occurred while processing your request', 'Error');
  }

  showToastWithButtons(): void {
    this.messageService.show({
      type: 'warning',
      title: 'Confirm Action',
      message: 'Are you sure you want to proceed with this action?',
      buttons: [
        {
          text: 'Confirm',
          action: () => {
            this.messageService.success('Action confirmed!');
          },
          class: 'ft-btn ft-btn-sm ft-btn-primary'
        },
        {
          text: 'Cancel',
          action: () => {
            this.messageService.info('Action cancelled');
          },
          class: 'ft-btn ft-btn-sm ft-btn-secondary'
        }
      ]
    });
  }

  showPersistentToast(): void {
    this.messageService.show({
      type: 'info',
      title: 'Persistent Message',
      message: 'This toast will not auto-close. Click the X button to dismiss it.',
      duration: 0,
      closeable: true
    });
  }
}
