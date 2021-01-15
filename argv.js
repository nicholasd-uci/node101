// process.argv is a globally scooped API of your current file
// process.argv is a process that happens when a node file is ran

console.log(process.argv)

// running node
// node argv.js  *press enter

// Example of process.argv
let firstName = process.argv[2]
let lastName = process.argv[3]
let movie = process.argv[4]

console.log(` Excellent, so your name is ${firstName} ${lastName} and your favorite movie is ${movie} `)