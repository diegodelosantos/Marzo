const fs = require('fs');

// Generar un array de horas desde ahora hasta septiembre de 2024 (cada 30 minutos)
const startDate = new Date('2024-04-01'); // Fecha actual
const endDate = new Date('2024-09-30'); // Fecha de septiembre de 2024
const intervalMinutes = 30; // Intervalo de tiempo en minutos

const allHours = [];
for (let currentTime = startDate; currentTime <= endDate; currentTime.setMinutes(currentTime.getMinutes() + intervalMinutes)) {
    const formattedTime = currentTime.toLocaleTimeString('en-US', { hour12: false });
    allHours.push(formattedTime);
}

// Escribir el array en un archivo de texto
const filePath = 'horas.txt';
const fileContent = allHours.join('\n');

fs.writeFileSync(filePath, fileContent);

console.log(`Se han escrito ${allHours.length} horas en el archivo ${filePath}.`);
