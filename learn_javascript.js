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
*/