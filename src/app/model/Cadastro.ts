import { Endereco } from "./Endereco"
import { Genero } from "./Genero"
import { Racial } from "./Racial"
import { UnidadeFederativa } from "./UnidadeFederativa"

export class Cadastro{
    public id: number
    public nomeCompleto: string
    public areaProf: string
    public email: string
    public telefone: string
    public celular: string
    public genero: string
    public rua: string
    public num: number
    public bairro: string
    public cidade: string
    public estado: string
    public dataNascimento: Date
    public perfilDiversidade: string
    public biografia: string
    public foto: string
}