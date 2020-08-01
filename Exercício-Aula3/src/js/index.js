
function Funcionario(nome, idade, tempo){
    this.nome = nome;
    this.idade = idade;
    this.tempoDeEmpresa = tempo;
}
function Cliente(nome, sistema, mensalidade){
    this.nome = nome;
    this.sistema = sistema;
    this.mensalidade = mensalidade;
}

let funcionario1 = new Funcionario('Ingrid', 26, '4 meses');
let funcionario2 = new Funcionario('Rafael', 27, '4 anos' );
let funcionario3 = new Funcionario('Thiago', 28, '5 anos');
    
let cliente1 = new Cliente('Pablo', 'Green', 'R$100,00');
let cliente2 = new Cliente('Mariana', 'Smart', 'R$120,00');
let cliente3 = new Cliente('Julia', 'PDV', 'R$90,00');   

// Objeto Trade
let Trade = {sistemas : ['Smart', 'Quickshop','Green', 'Parks', 'Invoice'],
            funcionarios : [funcionario1, funcionario2, funcionario3],
            clientes : [cliente1, cliente2, cliente3],
            numeroEquipamentos : numero = 6,
            endereco : ['Rua Padre Tintório 120, Várzea, Teresópolis, RJ'],
            contatos : ['0000-0000', '1111-1111']};

document.getElementById('sistemas').innerHTML = Trade.sistemas;
document.getElementById('funcionarios').innerHTML = JSON.stringify(Trade.funcionarios[0]) + '<br>' + JSON.stringify(Trade.funcionarios[1]) + '<br>' + JSON.stringify(Trade.funcionarios[2]);
document.getElementById('clientes').innerHTML = JSON.stringify(Trade.clientes[0]) + '<br>' + JSON.stringify(Trade.clientes[1]) + '<br>' + JSON.stringify(Trade.clientes[2]);
document.getElementById('nrEquipamentos').innerHTML = Trade.numeroEquipamentos + ' ' + 'Computadores';
document.getElementById('endereco').innerHTML = Trade.endereco;
document.getElementById('contatos').innerHTML = Trade.contatos[0] + '/' + Trade.contatos[1];

//document.write(JSON.stringify(Trade));
//document.write('<br>');