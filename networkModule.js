//En el archivo `networkModule.js` deberás sacar los siguientes datos de red:
//- Interfaz
//- Dentro de cada interfaz habrá que sacar la Familia, dirección e Interno.

const os = require('node:os');

function getNetworkData(){
   
        const interfaces = os.networkInterfaces();  
            console.log("Datos de red:");
    
        // Información de cada interfaz
        
       Object.entries(interfaces).forEach(([nombreInterfaz, detallesInterfaz]) => {
        console.log(`\nInterfaz: ${nombreInterfaz}`);

            detallesInterfaz.forEach((detalles) => {
            console.log(`  Familia: ${detalles.family}`);
            console.log(`  Dirección: ${detalles.address}`);
            console.log(`  Interno: ${detalles.internal}`);
        });
    });

   
}

module.exports = getNetworkData;