let operator = process.argv[2],
firstNum = parseInt(process.argv[3]),
secondNum = parseInt(process.argv[4])

switch(operator) {

    case 'add':
        console.log(firstNum + secondNum)
        break
    case 'subtract':
        console.log(firstNum - secondNum)
        break
    case 'multiply':
        console.log(firstNum * secondNum)
        break
    case 'divide':
        console.log(firstNum / secondNum)
        break
}

