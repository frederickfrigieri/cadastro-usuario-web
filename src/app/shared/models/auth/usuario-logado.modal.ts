export class UsuarioLogado {
    constructor(
        public chaveUsuario: string,
        public logado: boolean,
        public email: string,
        public nomeCompleto: string
    ) { }
}
