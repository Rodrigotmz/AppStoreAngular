import { Component, inject } from '@angular/core';
import { OrderResponse } from '../../interfaces/order-response.interface';
import { LoginResponse } from '../../../user/interfaces/login-response.interface';
import { OrderService } from '../../services/order.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from '../../../user/services/auth.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrl: './order-list.component.css'
})
export class OrderListComponent {

  orders: OrderResponse[] = [];
  private authService = inject(AuthService);

  loginResponse: LoginResponse | null;

  constructor(
    private ordersService: OrderService,
    private snackBar: MatSnackBar
  ) {
    this.loginResponse = this.authService.getLoginResponse();
  }

  ngOnInit(): void {
    this.loadOrders();
  }

  loadOrders(): void {
    this.ordersService
      .getOrdersByCustomer(this.loginResponse!.user.id)
      .subscribe({
        next: (orders) => {
          this.orders = orders;
        },
        error: () => {
          this.showSnackBar('Error fetching orders');
        },
      });
  }

  private showSnackBar(message: string): void {
    this.snackBar.open(message, 'Cerrar', {
      duration: 3000,
    });
  }
}
