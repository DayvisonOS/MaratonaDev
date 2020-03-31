const express = require("express");//importando o express do modules
//configurando server tbm

const server = express();//usando a funcionalidade do expres
//passa o caminho e o que ele faz quando chega no caminho
//configurando a apresentação da pagina

//configurar servidor para apresentar arquivos estaticos
server.use(express.static('public'))


//habilitar body do form
server.use(express.urlencoded({extended:true}))

 
//configurando a template engine(nunjucks)
const nunjucks = require("nunjucks")
nunjucks.configure("./",{
    express:server,
    noCache:true
})

//lista de doadores (array)
const donors=[
{
    name:"Dayvison Oliveira",
    blood : "B-"
},{
    name:"Robislania Oliveira",
    blood : "AB+"
},{
    name:"Pedro Oliveira",
    blood : "O-"
},{
    name:"Danubia Oliveira",
    blood : "A-"
}

]


server.get("/",function(req, res){
// return res.send("Ok, chegamos aqui com nodemon")//retornando a resposta enviando um ok
return res.render("index.html",{ donors })

})

server.post("/", function(req,res){
    //pegar dados do form
    const name = req.body.name
    const email = req.body.email
    const blood = req.body.blood

    // coloca valores dentro do array
    donors.push({
        name: name,
        blood:blood,
    })


    return res.redirect("/")

})


server.listen(3000, function(){
    console.log("iniciei o server")
})//liga o server e permite acesso a porta 3000 e assim que inicar execute essa funcionalidade