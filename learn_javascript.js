/* Часть 1. Язык JavaScript

2.1.1
<script>
    alert('Я JavaScript!')
</script>

2.1.2
<script src="alert.js"></script>

2.4.1
let admin
let name
name = 'Джон'
admin = name
alert(admin)

2.4.2
let ourPlanet
let currentUser

2.4.3
const BIRTHDAY = '18.04.1982'
const age = someCode(BIRTHDAY)

2.5
let name = 'Ilya'
alert( `hello ${1}` ) // hello 1
alert( `hello ${"name"}` ) // hello name
alert( `hello ${name}` ) // hello Ilya

2.6
let name = prompt('Как ваше имя?', '')
alert(name)

2.8.1
a = 2
b = 2
c = 2
d = 1

2.8.2
a = 4
x = 5

2.8.3
'' + 1 + 0 // 10
'' - 1 + 0 // -1
true + false // 1
6 / '3' // 2
'2' * '3' // 6
4 + 5 + 'px' // 9px
'$' + 4 + 5 // $45
'4' - 2 // NaN
'4px' - 2 // -2
'  -9  ' + 5 // '  -9  5'
'  -9  ' - 5 // -14
null + 1 // 1
undefined + 1 // NaN
' \t \n' - 2 // -2

2.8.4
let a = prompt('Первое число?', 1)
let b = prompt('Второе число?', 2)
alert(+a + +b)

2.9
5 > 4 // true
'ананас' > 'яблоко' // false
'2' > '12' // true
undefined == null // true
undefined === null // false
null == '\n0\n' // false
null === +'\n0\n' //false

2.10.1
да

2.10.2
let question = promt('Какое "официальное" название JavaScript?', '')

if (question == 'ECMAScript') {
    alert('Верно!')
} else {
    alert('Не знаете? ECMAScript!')
}

2.10.3
let number = promt('Введите число:', '')

if (number > 0) {
    alert(1)
} else if (number < 0) {
    alert(-1)
} else {
    alert(0)
}

2.10.4
let result

result = (a + b < 4) ? 'Мало' : 'Много'

2.10.5
let message

message = (login == 'Сотрудник') ? 'Привет' : (login == 'Директор')
    ? 'Здравствуйте' : (login == '')
        ? 'Нет логина' : ''

2.11.1
2

2.11.2
1
2

2.11.3
null

2.11.4
1
undefined

2.11.5
3

2.11.6
if (age >= 14 && age <= 90)

2.11.7
if (!(age >= 14 && age <= 90))
if (age < 14 || age > 90)

2.11.8
alert('first')
alert('third')

2.11.9
let user = prompt('Кто там?', '')

if (user === 'Админ') {

  let pass = prompt('Пароль?', '')
  
  if (pass === 'Я главный') {
    alert('Здравствуйте!')
  } else if (pass === '' || pass === null) {
    alert('Отменено')
  } else {
    alert('Неверный пароль')
  }

} else if (userName === '' || userName === null) {
  alert('Отменено')
} else {
  alert('Я вас не знаю')
}

2.13.1
1

2.13.2
1, 2, 3, 4
1, 2, 3, 4, 5

2.13.3
0, 1, 2, 3, 4

2.13.4
for (let i = 2; i <= 10; i++) {
  if (i % 2 == 0) {
    alert( i )
  }
}

2.13.5
let i = 0;
while (i < 3) {
  alert( `number ${i}!` )
  i++
}

2.13.6
let num

do {
  num = prompt('Введите число больше 100?', 0)
} while (num <= 100 && num)

2.13.7
let numbersRange = 10

nextNumber: for (let i = 2; i <= numbersRange; i++) {
    for (let j = 2; j < i; j++) {
        if (i % j == 0) continue nextNumber
    }
    console.log(i)
}

2.14.1
if(browser == 'Edge') {
  alert('You've got the Edge!')
} else if (browser == 'Chrome' || browser == 'Firefox' || browser == 'Safari'|| browser == 'Opera') {
  alert('Okay we support these browsers too')
} else {
  alert('We hope that this page looks ok!')
}

2.14.2
const number = +prompt('Введите число между 0 и 3', '')

switch (number) {
  case 0:
    alert('Вы ввели число 0')
    break
  case 1:
    alert('Вы ввели число 1')
    break
  case 2:
  case 3:
    alert('Вы ввели число 2, а может и 3')
    break
}

2.15.1
нет

2.15.2
function checkAge(age) {
  return (age > 18) ? true : confirm('Родители разрешили?')
}
function checkAge(age) {
  return (age > 18) || confirm('Родители разрешили?')
}

2.15.3
function min(a, b) {
  return a < b ? a : b
}

2.15.4
function pow(x, n) {
  let result = x

  for (let i = 1; i < n; i++) {
    result *= x;
  }

  return result;
}

let x = prompt("x?", '')
let n = prompt("n?", '')

if (n < 1) {
  alert(`Степень ${n} не поддерживается, используйте натуральное число`)
} else {
  alert(pow(x, n))
}

2.17.1
function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no()
}

ask('Вы согласны?',
() => alert('Вы согласились.'),
() => alert('Вы отменили выполнение'))

4.1.1
const user = {}
user.name = 'John'
user.surname = 'Smith'
user.name = 'Pete'
delete user.name

4.1.2
function isEmpty(obj) {
  for (let key in obj) {
    return false
  }
  return true
}

4.1.3
Да

4.1.4
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}

let sum = 0
for (let key in salaries) {
  sum += salaries[key]
}

4.1.5
function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] == 'number') {
      obj[key] *= 2
    }
  }
}
*/