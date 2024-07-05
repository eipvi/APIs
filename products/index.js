//Importa o módulo express, que é um framework para Node.js usado para construir aplicações web e APIs.
const express = require('express') 
//Cria uma instância da aplicação Express.
const app = express()

//Este middleware analisa solicitações JSON e as coloca no objeto req.body, permitindo que você acesse os dados enviados no corpo da solicitação.
app.use(
    //Este middleware analisa as solicitações
    express.urlencoded({
        extended:true,
    }),
)

app.use(express.json())

//Define uma rota POST no caminho /createproduct.
app.post('/createproduct', (req, res) => {
    //Extrai os valores name e price do corpo da solicitação (req.body).
    const { name, price} = req.body

    // if(!name || ! price) {
    //     res.status(422).json({ message: 'Name and price are required'})
    //     return
    // }

    //Verifica se name e price estão presentes no corpo da solicitação. Se não estiverem, retorna um status 400 (Bad Request) com uma mensagem de erro.
    if (!name || !price) {
        return res.status(400).json({ error: 'Name and price are required' })
    }
    
     // Verifica se price é um número válido. Se não for, retorna um status 400 (Bad Request) com uma mensagem de erro.
     if (isNaN(price)) {
        return res.status(400).json({ error: 'Price must be a valid number' })
    }
    //Imprime o valor de name no console.
    console.log(name)
    //Imprime o valor de price no console.
    console.log(price)

   
    res.json({message: `The product ${name} has been created successfully!`})
    // res.status(200).json({message: `The product ${name} has been created successfully!`})
})


app.get('/', (req, res) =>{
     //Envia uma resposta JSON com uma mensagem de sucesso.
    res.json({message: 'ok'})

})
// Inicia o servidor e faz com que ele ouça solicitações na porta 3000. 
app.listen(3000)