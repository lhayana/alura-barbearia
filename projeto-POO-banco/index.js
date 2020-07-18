import { Cliente } from "./Cliente.js";
import { Gerente } from "./Funcionários/Gerente.js"
import { Diretor } from "./Funcionários/Diretor.js"
import { SistemaAutenticacao } from "./SistemaAutenticacao.js"

const diretor = new Diretor("Joao", 5000, 111222333);
diretor.cadastrarSenha("12345")
const gerente = new Gerente("Pedro", 2000, 333222111);
const cliente = new Cliente("Lais", 1122233344, "123")

const clienteEstaLogado = SistemaAutenticacao.login(cliente, "1234");

console.log(clienteEstaLogado);