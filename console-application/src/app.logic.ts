import fs from 'fs';

let outputMessage = '';
const base = 5;
const headerMessage = `
===========================================
                Tabla del ${base}
===========================================\n
`;

for (let i = 1; i <= 10; i++) {
    outputMessage += `${base} x ${i} = ${base * i}\n`;
}

outputMessage = headerMessage + outputMessage;

const outputPath = `outputs`;
if (!fs.existsSync(outputPath)) {
    fs.mkdirSync(outputPath, { recursive: true });
}

fs.writeFileSync(`${outputPath}/tabla-5.txt`, outputMessage);

const tableFive = fs.readFileSync('outputs/tabla-5.txt', 'utf-8');
console.log(tableFive);
