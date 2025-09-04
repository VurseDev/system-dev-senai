const mongoose = require('mongoose');
const express = require('express')
const app = express()
const cors = require('cors');
const port = 3000
app.use(cors());
app.use(express.json());

// Iniciando API
app.listen(port, () => { 
    console.log("API RODANDO!")
})  


// Inicializando o mongodb
mongoose.connect('mongodb://127.0.0.1:27017/testdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('✅ Conectado a API'))
.catch(err => console.error('❌ MongoDB Erro:', err));



// Schema principal
const database_aps = new mongoose.Schema ({
    func: String,
    data: String,    
});

// Usando nosso schema para table Search
const search_table = mongoose.model('Search', database_aps);


// Isso é só teste
app.get('/',(req, res) => {
    res.send("Hello, World!")
});

app.post('/addfunc', async (req, res) => {
    try {

        const func = await
    }
        catch (error) {
            console.log("Erro ao salvar a função");
        }   
})


// Request para o search 
app.get('/funcs', async (req, res) => {
    try {
        const func = await search_table.find();
        res.json(func);
    }
        catch (error) {
            console.log("Erro ao tentar localizar a func")
        }
    });


