import { getProductsOrUser } from "../../helpers/getProducts-user"



describe('Probando Async-await y fetch', () => {

    test('probando getProductsOrUser retorne un objeto ', async() => {

        const data = await getProductsOrUser("user")
        expect(typeof data).toBe('object')
    })

    test('probando propiedades del objeto user', async() => {

        const data = await getProductsOrUser("user")

        expect(typeof data._id).toBe('string')
        expect(typeof data.name).toBe('string')
        expect(typeof data.points).toBe('number')
        expect(Array.isArray(data.redeemHistory)).toBe(true)
        expect(typeof data.createDate).toBe('string')
    })
        

        
})
