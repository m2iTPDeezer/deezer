const express = require('express'),
    bodyParser = require('body-parser'),
    port = 3000,
    app = express(),
    fs = require('fs'),
    users = JSON.parse(fs.readFileSync('public/user.json'), 'utf-8');

    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, Authorization, X-Requested-With, X-XSRF-TOKEN, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
    next();
});

app.get('/',(req, res)=> {
    res.end("NON");
})

app.post('/signin', (req, res)=> {
    const data = req.body;
    result = {};
    result.error = false;
    if(data.mail == undefined || data.nom == undefined || data.prenom == undefined || data.password == undefined){
        result.error = true;
    }
    if(!result.error){
        users.push({
            nom :      data.nom,
            prenom :   data.prenom,
            mail :     data.mail,
            password : data.password,
            token : ''
        })
        fs.writeFileSync('public/user.json', JSON.stringify(users));
    }
    res.json(result);
})



app.listen(port, function () {
    console.log("Le serveur fonctionne sur le port" + port);
})





















// //Mettre à jour les fichiers customers.json users.json
// const writeFiles = () => {
//     fs.writeFiles(JSON.stringify(user));
// }

// //Retourner un utilisateur par id
// app.get('/user/:id', (req, res) => {
//     let result = {};
//     result.user = user.find(x => x.id == req.params.id);
//     result.error = (result.user) ? false : true;
//     // res.json(result);
//     res.send(result)
// });