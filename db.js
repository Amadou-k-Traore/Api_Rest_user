const { response } = require('express')

const sqlite3 = require('sqlite3').verbose()
const dbFile = "db.sqlite"

const db = new sqlite3.Database(dbFile, (error) => {
    if (error) {
        console.error(error.message)
        throw error
    } else {
        console.log("Etablissement de la connextion . . . . .")

        const sql = `CREATE TABLE utilusateurs (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      Nom text,
      Prénom text,
      Email text,
      Téléphone text
    )`
        db.run(sql, (error) => {
            if (error) {
                console.error(error.message)

            } else {
                response
                    .status(200)
                    .json({ message: "VOTRE OPERATION à REUSSIT" })
            }
        })

        
    }
    module.exports = db
    
})