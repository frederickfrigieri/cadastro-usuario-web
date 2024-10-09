export class RegistrarEmpresaModel {
    constructor(
        public razaoSocial: string,
        public cnpj: string,
        public responsavel: string,
        public cep: string,
        public cidade: string,
        public estado: string,
        public endereco: string,
        public customerId: string
    ) { }
}