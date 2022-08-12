const db = require('../../../db')

module.exports = {
    Query: {
        contacts: async () => await db('contact'),
    },
    Mutation: {
        createContact: async (_, { data }) => 
            await (await db('contact').insert(data).returning('*'))[0],
        updateContact: async  (_, { id, data }) =>
            await (await db('contact').where({ id }).update(data).returning('*'))[0],
            deleteContact: async (_, { filter }) => {
                if (filter.id) {
                    return db('contact').where({ id: filter.id }).delete()
                }

                if (filter.email) {
                    return db('contact').where({ email: filter.email }).delete()
                }

                throw new Error('pass a parameter!')
            }
    }
}