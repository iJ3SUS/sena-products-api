import knex from 'knex'

const DB = knex({
  client: 'sqlite3', // or 'better-sqlite3'
  connection: {
    filename: './db.sqlite',
  },
  useNullAsDefault: true
})

export default DB
