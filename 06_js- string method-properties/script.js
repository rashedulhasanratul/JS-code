const message = 'hello world!'
const capitalMessage = message.toUpperCase()
let a = 'ratul'
var b = 'shakil'


// trim example:

const faltuMessage = '  This is Business     '
const finalMessage = faltuMessage.trim().toUpperCase()
const replacedMessage = finalMessage.replace('THIS','IT')

// replace() and replaceAll() :
finalMessage.replace('I' , 'Z')
finalMessage.replaceAll('I', 'Q')

//padStart
const lastFourDigits = '7856' 
const maskAccountNumber = lastFourDigits.padStart(16, '*')

//padEnd
// const maskAccountNumber = lastFourDigits.padEnd(16, '*')

//charCodeAt(11) : it returns the ascii value of the given indexed character
message.charCodeAt(0)


//templateLiterals  : when we use backticks to create a string, that's called template literals 

const bankBalance = 9569
const ConcatenatedString = `Last four digits of my account number is`.concat(' ',lastFourDigits)
// example of template literals :
const templateString = `Last four digits of my account number is ${lastFourDigits.padStart(10,'.')}`
const templateString2 = `Last four digits of my account number is ${lastFourDigits}`

const templateString3 = `I have $${bankBalance} in my account`





























//concat() syntax:
// message.concat(', ' ,finalMessage, '  ',a)