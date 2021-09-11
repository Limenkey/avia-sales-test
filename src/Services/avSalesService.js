/* eslint-disable consistent-return */
/* eslint-disable eqeqeq */
/* eslint-disable no-return-await */
/* eslint-disable no-unused-vars */

class AvSalesSerice {

    adress = 'https://front-test.beta.aviasales.ru'

    getSearchId = async () => {
        const req = await fetch(`${this.adress}/search`)
        const res = await req.json() 
        return res.searchId
    }


    getTickets = async (id) => {
        const req = await fetch(`${this.adress}/tickets?searchId=${id}`)
        return await req
    }

    getTicketsTest = async (id) => await fetch(`${this.adress}/tickets?searchId=${id}`)
        
    

}






const service = new AvSalesSerice()

export default service