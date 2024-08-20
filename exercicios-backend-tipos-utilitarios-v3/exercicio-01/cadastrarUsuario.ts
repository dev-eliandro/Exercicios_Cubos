type Usuario = {
    nome: string,
    email: string,
    cpf: string,
    rg: string
    dataNacimento?: string

}
type UsuarioSemRg = Omit<Usuario, 'rg'>;

const cadastrarUsuário = (info: Usuario): UsuarioSemRg => {
    return info;
}