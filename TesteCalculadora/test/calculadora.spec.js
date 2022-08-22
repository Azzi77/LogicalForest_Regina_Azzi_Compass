import assert from 'assert'
import chai from  'chai'
import Calculadora from '../src/Calculadora.js'

const expect = chai.expect

describe ('Teste de soma', () =>{
    it ('Deve somar 4 e 5 resultado em 9', ()=>{

    
    let resultado = Calculadora.soma (4,5)
    expect (resultado).to.be.eq(9)

})
it ('Deve somar -4 e 5 resultado em 1', ()=>{
    let resultado = Calculadora.soma (-4,5)
    expect (resultado).to.be.eq(1)
})

})



