const express    = require('express'),
      bodyParser = require('body-parser'),
      port       = 3000,
      app        = express(),
      fs         = require('fs'),
      user   = JSON.parse(fs.readFileSync('public/user.json'), 'utf-8');


//   On configure le body parser pour utiliser du JSON
    app.use(bodyParser.json());

    app.get('/', function(req,res){
        // res.send("Petit coucou du serveur");
        // res.send(user)
    })

    app.listen(port, function(){
        console.log( "Le serveur fonctionne sur le port" + port );
    })

//Mettre à jour les fichiers customers.json users.json
const writeFiles = () => {
    fs.writeFiles(JSON.stringify(user));
}

//Retourner un utilisateur par id
app.get('/user/:id', (req, res) => {
    let result = {};
    result.user = user.find(x=>x.id == req.params.id);
    result.error = (result.user) ? false : true;
    // res.json(result);
    res.send(result)
});