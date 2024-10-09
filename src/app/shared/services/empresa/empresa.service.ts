import { Injectable } from '@angular/core';
import { RegistrarEmpresaModel } from '../../models/empresas/registrar-empresa.model';
import { HttpClient } from '@angular/common/http';
import { Empresa } from '../../models/empresas/empresa.model';
import { environment } from '../../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class EmpresaService {

    constructor(private httpClient: HttpClient) { }

    endpoint = `${environment.baseUrl}/empresas`;


    registrar(model: RegistrarEmpresaModel) {
        return this.httpClient.post(this.endpoint, model);
    }

    obter() {
        return this.httpClient.get<Empresa[]>(`${this.endpoint}`);
    }
}
