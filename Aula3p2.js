import { validate } from 'bycontract';

class contacomum{
    #numero
    #saldo

    constructor(numero){
        validate(arguments, ["Number"]);
        if (numero<=0){
            throw new Error("Número da conta deve ser positivo.");
        }else{
            this.#numero = numero
            this.#saldo = 0;
        }
    }

    get saldo(){
        return this.#saldo;}

    set saldo(valor){
        validate(arguments, ["Number"]);
        if(valor< 0){
            this.#saldo = 0
        }else{
            this.#saldo = valor
        }
    }

    depositar(dinheiro){
        validate(arguments, ["Number"]);
        if (dinheiro<=0){
            throw new Error("Valor de depósito deve ser positivo.");
        }else{
            this.#saldo += dinheiro
            return true
        }
    }

    retirada(dinheiro){
        validate(arguments,["Number"]);
        if (dinheiro>this.#saldo){
            throw new Error("Saldo insuficiente.");
        }else{
            this.#saldo -= dinheiro;
            return this.#saldo
        }
    }

    toString(){
        let str = `Número da conta: ${this.#numero}, saldo da conta: ${this.#saldo}.`;
        return str;
    }
}

class contalimite extends contacomum{

    constructor(numero){
        super(numero);
    }

    limite(saldo){
        validate(arguments, ["Number"]);
        let l = this.saldo * 0.10;
        this.saldo += l
        return l;
    }

    toString() {
        return super.toString() + `, limite: R$${this.limite(this.saldo)}`;
    }
}


class contapoupança extends contacomum{

    constructor(numero){
        super(numero);
    }

    computajuros(saldo){
        validate(arguments, ["Number"]);
        let j = this.saldo * 0.15;
        this.saldo += j
        return j;
    }

    toString(){
        return super.toString()+`, juros: R$${this.computajuros(this.saldo)}`;
    }    
}

let cc1 = new contacomum(55826);
cc1.depositar(5000);
cc1.retirada(258);
console.log(cc1.toString());

let cc2 = new contacomum(55827);
cc2.depositar(2546);
cc2.retirada(2000);
console.log(cc2.toString());

let cc3 = new contacomum(55828);
cc3.depositar(4155);
cc3.retirada(680);
console.log(cc3.toString());

let cc4 = new contalimite(55829);
cc4.depositar(4555);
cc4.retirada(1688);
console.log(cc4.toString());

let cc5 = new contalimite(55830);
cc5.depositar(49988);
cc5.retirada(6555);
console.log(cc5.toString());

let cc6 = new contalimite(55831);
cc6.depositar(4995);
cc6.retirada(500);
console.log(cc6.toString());

let cc7 = new contapoupança(55832);
cc7.depositar(4545);
cc7.retirada(889);
console.log(cc7.toString());

let cc8 = new contapoupança(55833);
cc8.depositar(2552);
cc8.retirada(445);
console.log(cc8.toString());

let cc9 = new contapoupança(55834);
cc9.depositar(9000);
cc9.retirada(200);
console.log(cc9.toString());
