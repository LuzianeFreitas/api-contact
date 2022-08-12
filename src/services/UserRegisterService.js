const db = require('../db')

class UserRegisterService {
    constructor(service) {
        this.service = service
    }
    contacts = async () => await this.service('contact')
    createContact = async (data) => 
        await (await this.service('contact').insert(data).returning('*'))[0]
    updateContact = async  (id, data) =>
        await (await this.service('contact').where({ id }).update(data).returning('*'))[0]
    deleteContact = async (filter) => {
        if (filter.id) {
            return this.service('contact').where({ id: filter.id }).delete()
        }

        if (filter.email) {
            return db('contact').where({ email: filter.email }).delete()
        }

        throw new Error('pass a parameter!')
    }
}

module.exports = new UserRegisterService(db)