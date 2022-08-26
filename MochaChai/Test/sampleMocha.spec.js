import assert from 'assert'

describe(' Meu primeiro teste', () => {
    it('Verificar uma igualdade', () => {
        let aux = 2
        assert.strictEqual(aux, 2)
    })
    it('Verificar uma desigualdade', () => {
        let aux = 2
        assert.strictEqual(aux, 3)
    })
    it('Verificar uma desigualdade', () => {
        let aux = 2
        assert.notStrictEqual(aux, 3)
    })
    it('Verificar outra igualdade', () => {
        let aux = 'carro'
        assert.strictEqual(aux, 'carro')
    })

})

describe('Meu segundo teste', () => {
    it('Verificar  desigualdade', () => {
        let aux = 2
        assert.notStrictEqual(aux, '2')

    })
    it('Verificar outra desigualdade', () => {
        let aux = 'carro'
        assert.notStrictEqual(aux, 'charrete')


    })
})
