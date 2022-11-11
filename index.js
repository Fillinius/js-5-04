const userName = prompt('Как Вас зовут')

console.log(userName.toLowerCase().trim())

// alert('Вас зовут ' + userName.toLowerCase().trim())

const userAge = prompt('Сколько Вам лет?')
console.log(Number(userAge))

// alert(
//   'Вас зовут ' + userName.toLowerCase().trim() + '' + 'и вам' + Number(userAge)
// )

alert(`
  Вас зовут ${userName.toLowerCase().trim()}  и вам  ${Number(userAge.trim())}`)
