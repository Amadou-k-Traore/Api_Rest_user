const { request, response } = require('express')
const express = require('express')
const app = express()
const PORT = 3000
const db = require('./db.js')

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.post('/api/contact', (request, response) => {
    
    const { Nom, Prénom, Email, Téléphone } = request.body
    
    if (!Nom || !Prénom || !Email || !Téléphone) {
        response.json({ message: "Merci de remplir tous les champs" })
        return
    } else {
        const utilusateurs = { Nom, Prénom, Email, Téléphone }
        const sql = 'INSERT INTO utilusateurs (Nom, Prénom, Email, Téléphone) VALUES (?, ?, ?, ?) '

        const params = [utilusateurs.Nom, utilusateurs.Prénom, utilusateurs.Email, utilusateurs.Téléphone]

        db.run(sql, params, function (error) {
            if (error) {
                response.status(400).json({ message: "Oups une erreur est survenu lors de l'ajout à la base de donnée" })
                return
            } else {
                response
                    .status(200)
                    .json({ message: "opération reussit avec succés" })
            }
        })
    }
})
app.listen(PORT, console.log("connexion sur le port " + PORT))