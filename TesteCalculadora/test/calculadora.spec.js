import assert from 'assert'
import chai from 'chai'
import Calculadora from '../src/Calculadora.js'

const expect = chai.expect

describe('Teste de soma', () => {
    it('Deve somar 4 e 5 resultado em 9', () => {

        let resultado = Calculadora.soma(4, 5)
        expect(resultado).to.be.eq(9)

    })

    it('Deve somar 2.45 e 2.13 resultado em 4,58', () => {
        let resultado = Calculadora.soma(2.45, 2.13)
        expect(resultado).to.be.eq(4.58)
    })

    it('Deve somar -4 e 5 resultado em 1', () => {
        let resultado = Calculadora.soma(-4, 5)
        expect(resultado).to.be.eq(1)
    })

    it('Deve somar -4 e -5 resultado em -9', () => {
        let resultado = Calculadora.soma(-4, -5)
        expect(resultado).to.be.eq(-9)
    })


})

describe('Teste de subtração', () => {

    it('Deve subtrair 4 e 5 resultado em -1', () => {
        let resultado = Calculadora.sub(4, 5)
        expect(resultado).to.be.eq(-1)

    })

    it('Deve subtrair -4 e 5 resultado em -9', () => {
        let resultado = Calculadora.sub(-4, 5)
        expect(resultado).to.be.eq(-9)
    })

    it('Deve subtrair -4 e -5 resultado em 1', () => {
        let resultado = Calculadora.sub(-4, -5)
        expect(resultado).to.be.eq(1)
    })

    it//('Deve subtrair 10.5 e 10.4 resultado em 0.10', () => {
       //let resultado = Calculadora.sub(10.5, 10.4)
      // assert.equal (Calculadora.sub(10.5,10.4), 0.10)

})


describe('Teste de multiplicação', () => {

    it('Deve multiplicar 5 e 5 resultado em 25', () => {

        let resultado = Calculadora.mult(5, 5)
        expect(resultado).to.be.eq(25)


    })

    it('Deve multiplicar -5 e -5 resultado em 25', () => {

        let resultado = Calculadora.mult(-5, -5)
        expect(resultado).to.be.eq(25)

    })
    it('Deve multiplicar 4.5 e 5 resultado em 22.5', () => {
        let resultado = Calculadora.mult(4.5, 5)
        expect(resultado).to.be.eq(22.5)
    })

    it('Deve multiplicar 8 e 5 resultado em 40', () => { // Prova real 40:8 = 5 ou 40:5 = 8
        let resultado = Calculadora.mult(8, 5)
        expect(resultado).to.be.eq(40)


    })
})

describe('Teste de porcentagem', () => {

    it('Deve calcular a porcentagem 10% de 5000 resultado 500', () => {

        let resultado = Calculadora.porc(10, 5000)
        expect(resultado).to.be.eq(500)


    })

    it('Deve calcular a porcentagem 10% de -5000 resultado -500', () => {

        let resultado = Calculadora.porc(10, -5000)
        expect(resultado).to.be.eq(-500)



    })
})

describe('Teste de Raiz', () => {
    it('Deve calcular raiz de 9 o resultado 3', () => {

        let resultado = Calculadora.raiz(9)
        expect(resultado).to.be.eq(3)
    })

    it('Deve calcular raiz de -9 o resultado NaN', () => {

        let resultado = Calculadora.raiz(-9)
        expect(resultado).to.be.NaN

    })

})

describe('Teste de Potencia', () => {
    it('Deve calcular 7 elevado a 2 o resultado 49', () => {

        let resultado = Calculadora.potencia(7, 2)
        expect(resultado).to.be.eq(49)
    })

    it('Deve calcular -7 elevado a 2 o resultado 49',()=>{ // base negativa elevada a expoente par
    let resultado = Calculadora.potencia(-7, 2)                // resultado é positivo
    expect(resultado).to.be.eq(49)
})

it('Deve calcular -2 elevado a 3 o resultado -8',()=>{      // base negativa elevada a expoente impar 
    let resultado = Calculadora.potencia(-2, 3)                 // resultado é negativo 
    expect(resultado).to.be.eq(-8)

})
it('Deve calcular 5 elevado a -2 o resultado 1/25',()=>{      
    let resultado = Calculadora.potencia(5, -2)                 
    expect(resultado).to.be.eq(1/25)

})

})

