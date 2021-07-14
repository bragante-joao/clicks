
var seudinheiro = 0;
var clickValor = 1;
function money() {
  contarPonto()

}
function contarPonto() {
  seudinheiro = seudinheiro + clickValor
  imprimirTela()
}
function imprimirTela() {
  var hostel = document.getElementById("ym")
  hostel.innerHTML = `Seu dinheiro: ${seudinheiro.toFixed(0)}`
}
var preco = 50
function upgrade() {
  var upgradeQuantidades = 0


  if (seudinheiro >= preco) {

    seudinheiro = seudinheiro - preco
    clickValor = clickValor + clickValor * 60 / 100

    preco = preco * 50 / 100 + preco
    var hostelpreço = document.getElementById("preço")
    hostelpreço.innerHTML = `Valor ${preco.toFixed(1)}`
    upgradeQuantidades = upgradeQuantidades + 1

    imprimirTela()
    if (upgradeQuantidades == 5) {
      console.log('salve')

    }
  }

}
