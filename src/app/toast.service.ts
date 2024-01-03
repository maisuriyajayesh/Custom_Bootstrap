import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  showSuccess(message: string): void {
    // Replace this with your actual logic to display a success toast
    alert(`Success: ${message}`);
  }

  showError(message: string): void {
    // Implement logic to show an error toast
    alert(`Error: ${message}`);
  }

  showInfo(message: string): void {
    // Implement logic to show an info toast
    alert(`Info: ${message}`);
  }
}
