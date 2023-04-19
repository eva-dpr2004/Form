let express = require('express')
let app = express()
let bodyParser = require('body-parser')


//Moteur de template
app.set('view engine', 'ejs')

//static précise quel est le dossier qui distribue les fichiers static
//Middelware , bodyparser parse les données du formulaire car sinon elles sont undefined 
app.use('/assets', express.static('public'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//Routes
app.get('/', (request, response) => {
    response.render('pages/index')
})
app.get('/login', (request, response) => {
    response.render('pages/login')
})
app.get('/inscription', (request, response) => {
    response.render('pages/inscription')
})
app.get('/contact', (request, response) => {
    response.render('pages/contact')
})

//Ce que je récupère
app.post('/login', (request, response) => {
    console.log(request.body.name + request.body.mdp);
    name = undefined
    mdp = undefined
    response.redirect('/login')
})
app.post('/inscription', (request, response) => {
    console.log(request.body.name + request.body.mail + request.bodymdp + request.body.num);
    name = undefined
    mail = undefined
    mdp = undefined
    num = undefined
    response.redirect('/inscription')
})
app.post('/contact', (request, response) => {
    console.log(request.body.num);
    num = undefined
    response.redirect('/contact')
})

app.listen(4040)