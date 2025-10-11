import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-inputs',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './inputs.component.html',
  styleUrl: './inputs.component.scss'
})
export class InputsComponent {
  // Reactive Form
  demoForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    username: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
    description: new FormControl('', [Validators.required])
  });

  get emailControl() {
    return this.demoForm.get('email') as FormControl;
  }

  get passwordControl() {
    return this.demoForm.get('password') as FormControl;
  }

  get usernameControl() {
    return this.demoForm.get('username') as FormControl;
  }

  get descriptionControl() {
    return this.demoForm.get('description') as FormControl;
  }

  // Helper method to check if field has error and is touched
  hasError(controlName: string): boolean {
    const control = this.demoForm.get(controlName);
    return !!(control && control.invalid && (control.dirty || control.touched));
  }

  // Get error message for a control
  getErrorMessage(controlName: string): string {
    const control = this.demoForm.get(controlName);
    if (!control || !control.errors) return '';

    if (control.errors['required']) return 'This field is required';
    if (control.errors['email']) return 'Please enter a valid email address';
    if (control.errors['minlength']) {
      const minLength = control.errors['minlength'].requiredLength;
      return `Minimum length is ${minLength} characters`;
    }
    if (control.errors['maxlength']) {
      const maxLength = control.errors['maxlength'].requiredLength;
      return `Maximum length is ${maxLength} characters`;
    }
    return '';
  }
}
