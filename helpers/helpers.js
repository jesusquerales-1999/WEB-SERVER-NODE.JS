const hbs = require('hbs');
//helpers 
hbs.registerHelper('Anio',()=> {
    return new Date().getFullYear()
});

hbs.registerHelper('Capitalizar',(texto)=> {

    let palabras = texto.split(' ');
    palabras.forEach((palabra,idx)=>{
        palabras[idx] = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
    });
    
    return palabras.join(' ');
    
});