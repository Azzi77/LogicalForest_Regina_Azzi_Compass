import assert from 'assert'
import chai from 'chai'

const expect = chai.expect

describe (' Meu primeiro teste ', () => {

    it.only('Verificar a variavel "aux"', () => {
        let aux = 2
        expect(aux).to.be.equals(2).and.to.be.a('number')
    
})       
    it.only ('Verificar outra variavel ', () => {
    let aux = 'carro'
    expect(aux).to.be.equals('carro').and.not.equals('charrete')
       

})
})