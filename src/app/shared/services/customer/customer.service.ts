import { Injectable } from '@angular/core';
import { Customer } from '../../models/customer/costumer.modal';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { RegistrandoCustomerModel } from '../../models/customer/registrando-customer.model';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private httpClient: HttpClient) { }

  endpoint = `${environment.baseUrl}/customers`;

  obterClientes(): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>(this.endpoint);
  }

  criarCliente(customer: RegistrandoCustomerModel): Observable<Customer> {
    return this.httpClient.post<Customer>(this.endpoint, customer);
  }

  obterCliente(email: string, senha: string): Observable<Customer> {
    return this.httpClient.get<Customer>(`${this.endpoint}?email=${email}&senha=${senha}`);
  }
}
