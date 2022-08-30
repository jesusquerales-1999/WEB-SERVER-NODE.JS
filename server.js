const express = require('express');
const app = express();

const hbs = require('hbs');
require('./helpers/helpers');
// le hbs es para renderizar el contenido de las paginas

app.use(express.static( __dirname + '/public'));
//Esto es para servir contenido estatico en la web.
//Con esto se puede hacer publico cualqueir directorio
//Muesta todo lo que tengamos en nuesta carpeta public

hbs.registerPartials( __dirname + '/views/parciales');
app.set('view engine', 'hbs');
//Esto es para utilizar el hbs


app.get('/',(req,res)=>{

res.render('home',{
    nombre:'jesus querales'
})
});

app.get('/about',(req,res)=>{
    res.render('about');
})

app.get('/paguina3',(req,res)=>{
    res.render('paguina3');
})





app.listen(3000,()=>{
    console.log('Corriendo en el puerto',3000);
})