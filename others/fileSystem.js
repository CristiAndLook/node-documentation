const fs = require('fs')
const data = fs.readFileSync('README.md', 'utf-8')

const reactCount = data.match(/react/gi ?? []).length

console.log(`Words 'react' count: ${reactCount}`)