import assert from 'assert'
import chai from 'chai'
import Calculadora from '../src/Calculadora.js'

const expect = chai.expect

describe('Teste de soma', () => {
    it('Deve somar 4 e 5 resultando em 9', () => {

        let resultado = Calculadora.soma(4, 5)
        expect(resultado).to.be.eq(9)

    })

    it('Deve somar 2.45 e 2.13 resultando em 4,58', () => {
        let resultado = Calculadora.soma(2.45, 2.13)
        expect(resultado).to.be.eq(4.58)
    })

    it('Deve somar -4 e 5 resultando em 1', () => {
        let resultado = Calculadora.soma(-4, 5)
        expect(resultado).to.be.eq(1)
    })

    it('Deve somar -4 e -5 resultando em -9', () => {
        let resultado = Calculadora.soma(-4, -5)
        expect(resultado).to.be.eq(-9)
    })


})

describe('Teste de subtração', () => {

    it('Deve subtrair 4 e 5 resultando em -1', () => {
        let resultado = Calculadora.sub(4, 5)
        expect(resultado).to.be.eq(-1)

    })

    it('Deve subtrair -4 e 5 resultando em -9', () => {
        let resultado = Calculadora.sub(-4, 5)
        expect(resultado).to.be.eq(-9)
    })

    it('Deve subtrair -4 e -5 resultando em 1', () => {
        let resultado = Calculadora.sub(-4, -5)
        expect(resultado).to.be.eq(1)
    })

    it('Deve subtrair 11.56 e 10.44 resultando em 1.12', () => {
        let resultado = Calculadora.sub(11.56, 10.44)
        expect(parseFloat(resultado.toFixed(2))).to.be.eq(1.12)

    })
})

describe('Teste de multiplicação', () => {

    it('Deve multiplicar 5 e 5 resultando em 25', () => {

        let resultado = Calculadora.mult(5, 5)
        expect(resultado).to.be.eq(25)


    })

    it('Deve multiplicar -5 e -5 resultando em 25', () => {

        let resultado = Calculadora.mult(-5, -5)
        expect(resultado).to.be.eq(25)

    })
    it('Deve multiplicar 5 e -25 resultando em -125', () => {

        let resultado = Calculadora.mult(5, -25)
        expect(resultado).to.be.eq(-125)


    })

    it('Deve multiplicar 4.5 e 5 resultando em 22.5', () => {
        let resultado = Calculadora.mult(4.5, 5)
        expect(resultado).to.be.eq(22.5)
    })
})
describe('Teste de divisão', () => {
    it('Deve dividir 5 e 0 resultando em Infinity', () => {
        let resultado = Calculadora.div(5, 0)
        expect(resultado).to.be.eq(Infinity)

    })
    it(' Deve dividir 5 e 5 resultando em 1', () => {
        let resultado = Calculadora.div(5, 5)
        expect(resultado).to.be.eq(1)

    })
    it(' Deve dividir 25 e -5 resultando em -5', () => {
        let resultado = Calculadora.div(25, -5)
        expect(resultado).to.be.eq(-5)


    })
    it(' Deve dividir 25.42 e 3 resultando em 8.47', () => {
        let resultado = Calculadora.div(25.42, 3)
        expect(parseFloat(resultado.toFixed(2))).to.be.eq(8.47)


    })
})
describe('Teste de porcentagem', () => {

    it('Deve calcular a porcentagem 10% de 5000 resultando 500', () => {

        let resultado = Calculadora.porc(10, 5000)
        expect(resultado).to.be.eq(500)

    })

    it('Deve calcular a porcentagem 10% de -5000 resultando -500', () => {

        let resultado = Calculadora.porc(10, -5000)
        expect(resultado).to.be.eq(-500)


    })
    it('Deve calcular a porcentagem 5% de 1500.25 resultando 75.0125', () => {
        let resultado = Calculadora.porc(5, 1500.25)
        expect(resultado).to.be.eq(75.0125)

    })
})

describe('Teste de Raiz', () => {
    it('Deve calcular raiz de 9 o resultando 3', () => {

        let resultado = Calculadora.raiz(9)
        expect(resultado).to.be.eq(3)
    })

    it('Deve calcular raiz de -9 o resultando NaN', () => {

        let resultado = Calculadora.raiz(-9)
        expect(resultado).to.be.NaN

    })
    it('Deve calcular raiz de 1.44 o resultando 1.2', () => {

        let resultado = Calculadora.raiz(1.44)
        expect(resultado).to.be.eq(1.2)
    })

})

describe('Teste de Potencia', () => {
    it('Deve calcular 7 elevado a 2 o resultando 49', () => {

        let resultado = Calculadora.potencia(7, 2)
        expect(resultado).to.be.eq(49)
    })

    it('Deve calcular -7 elevado a 2 o resultando 49', () => { // base negativa elevada a expoente par
        let resultado = Calculadora.potencia(-7, 2)                // resultado é positivo
        expect(resultado).to.be.eq(49)
    })

    it('Deve calcular -2 elevado a 3 o resultando -8', () => {      // base negativa elevada a expoente impar 
        let resultado = Calculadora.potencia(-2, 3)                 // resultado é negativo 
        expect(resultado).to.be.eq(-8)

    })
    it('Deve calcular 5 elevado a -2 o resultando 0.04', () => {
        let resultado = Calculadora.potencia(5, -2)
        expect(resultado).to.be.eq(0.04)

    })

})

describe('Teste de Conversão de Temperatura', () => {
    it('Deve transformar 45 graus Fahrenheit o resultando 7 Celsius', () => {

        let resultado = Calculadora.temperatura(45)
        expect(parseFloat(resultado.toFixed(0))).to.be.eq(7)
   // escrever um teste para validar a formula
    })
})
