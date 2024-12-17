//En el archivo `osModule.js` deberás sacar los siguientes datos:
//- Nombre, Tipo, Versión, Arquitectura, CPUs, Memoria Total, Memoria Libre.
//- Memoria Total y Memoria Libre tendrá que estar en MB. Mira que dato dá y qué cáculo debes hacer//
const os = require('node:os');

function getSystemInformation(){
    const nombre  = os.hostname();          
    const tipo = os.type();                  
    const version = os.release();          
    const arquitectura = os.arch();          
    const CPUs = os.cpus();                   
    const memoriaTotal = os.totalmem();       
    const memoriaLibre = os.freemem();       

    // Información sistema operativo
    console.log("Información del sistema operativo:");
    console.log(`Nombre: ${nombre}`);
    console.log(`Tipo de sistema operativo: ${tipo}`);
    console.log(`Versión de sistema operativo: ${version}`);
    console.log(`Arquitectura: ${arquitectura}`);
    console.log(`CPUs: ${CPUs.length}`);
    console.log(`Memoria total: ${(memoriaTotal / (1024 ** 2)).toFixed(2)} MB`); 
    console.log(`Memoria libre: ${(memoriaLibre / (1024 ** 2)).toFixed(2)} MB`);
    
   
}
module.exports =getSystemInformation;