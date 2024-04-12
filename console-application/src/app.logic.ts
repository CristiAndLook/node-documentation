import fs from 'fs';
import { yarg as argv } from './config/plugins/args.plugin';

console.log(argv);

let outputMessage = '';

const base = argv.b;
const limit = argv.l;
const headerMessage = `
===========================================
                Tabla del ${base}
===========================================\n
`;

for (let i = 1; i <= limit; i++) {
    outputMessage += `${base} x ${i} = ${base * i}\n`;
}

outputMessage = headerMessage + outputMessage;

const outputPath = `${argv.d}`;
if (!fs.existsSync(outputPath)) {
    fs.mkdirSync(outputPath, { recursive: true });
}

fs.writeFileSync(`${outputPath}/${argv.n}.txt`, outputMessage);
console.log(`File ${argv.n} created successfully`);

if (argv.s) {
    const tableFive = fs.readFileSync(`${outputPath}/${argv.n}.txt`, 'utf-8');
    console.log(tableFive);
}
