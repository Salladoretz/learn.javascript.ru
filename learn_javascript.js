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

4.4.1
Ошибка

4.4.3
Ошибка

4.4.4
const calculator = {

  read() {
    this.a = +prompt('a?', 0)
    this.b = +prompt('b?', 0)
  },

  sum() {
    return this.a + this.b
  },

  mul() {
    return this.a * this.b
  }
}

4.4.5
let ladder = {
  step: 0,
  up() {
    this.step++
    return this
  },
  down() {
    this.step--
    return this
  },
  showStep() {
    alert(this.step)
    return this
  }
}

4.5.1
let obj = {}

function A() {
  return obj
}
function B() {
  return obj
}

4.5.2
function Calculator() = {

  this.read() = function() {
    this.a = +prompt('a?', 0)
    this.b = +prompt('b?', 0)
  },

  this.sum() = function() {
    return this.a + this.b
  },

  this.mul() = function() {
    return this.a * this.b
  }
}

4.5.3
function Accumulator(startingValue) {
  this.value = startingValue

  this.read = function() {
    this.value += +prompt('Добавить число?', 0)
  }
}

5.1.1
Нет

5.2.1
let a = +prompt('Введите первое число', '')
let b = +prompt('Введите второе число', '')

alert(a + b)

5.2.3
function readNumber() {
  let num

  do {
    num = prompt('Введите число', 0)
  } while (!isFinite(num))

  if (num === null || num === '') return null

  return +num
}

5.2.5
function random(min, max) {
  return min + Math.random() * (max - min)
}

5.2.6
function randomInteger(min, max) {
  let randInt = min + Math.random() * (max + 1 - min)
  return Math.floor(rand)
}

5.3.1
function ucFirst(str) {
  if (!str) return str

  return str[0].toUpperCase() + str.slice(1)
}

5.3.2
function checkSpam(str) {
  let lowerStr = str.toLowerCase()

  return lowerStr.includes('viagra') || lowerStr.includes('xxx')
}

5.3.3
function truncate(str, maxlength) {
  return (str.length > maxlength) ?
    str.slice(0, maxlength - 1) + '…' : str
}

5.3.4
function extractCurrencyValue(str) {
  return +str.slice(1);
}

5.4.1
4

5.4.2
let styles = ['Джаз', 'Блюз']

styled.push('Рок-н-ролл')

styles[Math.floor((styles.length - 1) / 2)] = 'Классика'

alert(styles.shift())

styles.unshift('Рэп', 'Регги')

5.4.4
function sumInput() {

  let numbers = []

  while (true) {
    let value = prompt('Введите число', 0)
    if (value === '' || value === null || !isFinite(value)) break
    numbers.push(+value)
  }

  let sum = 0
  for (let number of numbers) {
    sum += number
  }
  return sum
}

5.4.5
function getMaxSubSum(arr) {
  let maxSum = 0
  let partialSum = 0

  for (let item of arr) {
    partialSum += item;
    maxSum = Math.max(maxSum, partialSum)
    if (partialSum < 0) partialSum = 0
  }
  return maxSum
}

5.5.1
function camelize(str) {
  return str
    .split('-')
    .map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1))
    .join('')
}

5.5.2
function filterRange(arr, a, b) {
  return arr.filter(item => a <= item && item <= b);
}

5.5.3
function filterRangeInPlace(arr, a, b) {

  for (let i = 0; i < arr.length; i++) {
    let val = arr[i]

    if (val < a || val > b) {
      arr.splice(i, 1)
      i--
    }
  }
}

5.5.4
arr.sort((a, b) => b - a)

5.5.5
function copySorted(arr) {
  return arr.slice().sort()
}

5.5.6
function Calculator() {

  this.methods = {
    "-": (a, b) => a - b,
    "+": (a, b) => a + b
  }

  this.calculate = function(str) {

    let split = str.split(' '),
      a = +split[0],
      op = split[1],
      b = +split[2]

    if (!this.methods[op] || isNaN(a) || isNaN(b)) {
      return NaN
    }

    return this.methods[op](a, b)
  }

  this.addMethod = function(name, func) {
    this.methods[name] = func
  }
}

5.5.7
let names = users.map(item => item.name)

5.5.8
let usersMapped = users.map(user => ({
  fullName: `${user.name} ${user.surname}`,
  id: user.id
}))

5.5.9
function sortByAge(arr) {
  arr.sort((a, b) => a.age > b.age ? 1 : -1)
}

5.5.10
function shuffle(array) {
  array.sort(() => Math.random() - 0.5)
}

5.5.11
function getAverageAge(users) {
  return users.reduce((prev, user) => prev + user.age, 0) / users.length
}

5.5.12
function unique(arr) {
  let result = []

  for (let str of arr) {
    if (!result.includes(str)) {
      result.push(str)
    }
  }

  return result
}

5.7.1
function unique(arr) {
  return Array.from(new Set(arr))
}

5.7.2
function aclean(arr) {
  let obj = {}

  for (let i = 0; i < arr.length; i++) {
    let sorted = arr[i].toLowerCase().split("").sort().join("")
    obj[sorted] = arr[i]
  }

  return Object.values(obj)
}

5.7.3
let map = new Map()

map.set('name', 'John')

let keys = Array.from(map.keys())

keys.push('more')

5.8.1
let messages = [
    {text: 'Hello', from: 'John'},
    {text: 'How goes?', from: 'John'},
    {text: 'See you soon', from: 'Alice'}
]

let readMessages = new WeakSet()

5.8.2
let readMap = new WeakMap()

readMap.set(messages[0], new Date(2017, 1, 1))

5.9.1
function sumSalaries(salaries) {

  let sum = 0
  for (let salary of Object.values(salaries)) {
    sum += salary
  }

  return sum
}

5.9.2
function count(obj) {
  return Object.keys(obj).length
}

5.10.1
let {name, years: age, isAdmin = false} = user

5.10.2
function topSalary(salaries) {

  let max = 0
  let maxName = null

  for(const [name, salary] of Object.entries(salaries)) {
    if (max < salary) {
      max = salary
      maxName = name
    }
  }

  return maxName
}

5.11.1
let obj = new Date(2012, 1, 20, 3, 12)

5.11.2
function getWeekDay(date) {
  let days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ']

  return days[date.getDay()]
}

5.11.3
function getLocalDay(date) {

  let day = date.getDay()

  if (day == 0) {
    day = 7;
  }

  return day
}

5.11.4
function getDateAgo(date, days) {
  let dateCopy = new Date(date)

  dateCopy.setDate(date.getDate() - days)
  return dateCopy.getDate()
}

5.11.5
function getLastDayOfMonth(year, month) {
  let date = new Date(year, month + 1, 0)
  return date.getDate()
}

5.11.6
function getSecondsToday() {
  let d = new Date()
  return d.getHours() * 3600 + d.getMinutes() * 60 + d.getSeconds()
}

5.11.7
function getSecondsToTomorrow() {
  let now = new Date();
  let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate()+1)
  let diff = tomorrow - now
  return Math.round(diff / 1000)
}

5.11.8
function formatDate(date) {
  let dayOfMonth = date.getDate()
  let month = date.getMonth() + 1
  let year = date.getFullYear()
  let hour = date.getHours()
  let minutes = date.getMinutes()
  let diffMs = new Date() - date
  let diffSec = Math.round(diffMs / 1000)
  let diffMin = diffSec / 60
  let diffHour = diffMin / 60

  year = year.toString().slice(-2)
  month = month < 10 ? '0' + month : month
  dayOfMonth = dayOfMonth < 10 ? '0' + dayOfMonth : dayOfMonth
  hour = hour < 10 ? '0' + hour : hour
  minutes = minutes < 10 ? '0' + minutes : minutes

  if (diffSec < 1) {
    return 'прямо сейчас'
  } else if (diffMin < 1) {
    return `${diffSec} сек. назад`
  } else if (diffHour < 1) {
    return `${diffMin} мин. назад`
  } else {
    return `${dayOfMonth}.${month}.${year} ${hour}:${minutes}`
  }
}

5.12.1
let user = {
  name: "Василий Иванович",
  age: 35
}

let user2 = JSON.parse(JSON.stringify(user))

5.12.2
let room = {
  number: 23
}

let meetup = {
  title: 'Совещание',
  occupiedBy: [{name: 'Иванов'}, {name: 'Петров'}],
  place: room
}

room.occupiedBy = meetup
meetup.self = meetup

alert( JSON.stringify(meetup, function replacer(key, value) {
  return (key != '' && value == meetup) ? undefined : value
}))

6.1.1
function sumTo(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i
  }
  return sum
}

function sumTo(n) {
  if (n == 1) return 1
  return n + sumTo(n - 1)
}

function sumTo(n) {
  return n * (n + 1) / 2
}

6.1.2
function factorial(n) {
  return (n != 1) ? n * factorial(n - 1) : 1
}

6.1.3
function fib(n) {
  let a = 1;
  let b = 1;
  for (let i = 3; i <= n; i++) {
    let c = a + b;
    a = b;
    b = c;
  }
  return b;
}

6.1.4
let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
}

function printList(list) {
  alert(list.value)
  if (list.next) {
    printList(list.next)
  }
}

6.1.5
let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

function printReverseList(list) {
 if (list.next) {
    printReverseList(list.next)
  }
  alert(list.value)
}

6.3.1
0.1

6.3.2
да

6.3.3
ошибка

6.3.4
function sum(a) {
  return function(b) {
    return a + b
  }
}

6.3.5
function inBetween(a, b) {
  return function(x) {
    return x >= a && x <= b
  }
}

function inArray(arr) {
  return function(x) {
    return arr.includes(x)
  }
}

6.3.6
function byField(field) {
  return (a, b) => a[field] > b[field] ? 1 : -1
}

6.3.7
function makeArmy() {
  let shooters = [];
  for(let i = 0; i < 10; i++) {
    let shooter = function() {
      alert( i )
    }
    shooters.push(shooter)
  }
  return shooters
}

6.6.1
function makeCounter() {
  let count = 0
  function counter() {
    return count++
  }
  counter.set = value => count = value
  counter.decrease = () => count--
  return counter
}

6.6.2
function sum(a) {
  let currentSum = a
  function f(b) {
    currentSum += b;
    return f
  }
  f.toString = function() {
    return currentSum;
  }
  return f
}

6.8.1
function printNumbers(from, to) {
  let current = from

  let timerId = setInterval(function() {
    alert(current)
    if (current == to) {
      clearInterval(timerId)
    }
    current++
  }, 1000)
}

function printNumbers(from, to) {
  let current = from

  setTimeout(function go() {
    alert(current)
    if (current < to) {
      setTimeout(go, 1000)
    }
    current++
  }, 1000)
}

6.8.2
100000000

6.9.1
function spy(func) {
  function wrapper(...args) {
    wrapper.calls.push(args)
    return func.apply(this, arguments)
  }
  wrapper.calls = []
  return wrapper
}

6.9.2
function delay(f, ms) {
  return function() {
    setTimeout(() => f.apply(this, arguments), ms)
  }
}

6.9.3
function debounce(f, ms) {
  let isCooldown = false
  return function() {
    if (isCooldown) return
    f.apply(this, arguments)
    isCooldown = true
    setTimeout(() => isCooldown = false, ms)
  }
}

6.9.4
function throttle(func, ms) {
  let isThrottled = false,
    savedArgs,
    savedThis

  function wrapper() {
    if (isThrottled) { // (2)
      savedArgs = arguments
      savedThis = this
      return
    }

    func.apply(this, arguments)

    isThrottled = true

    setTimeout(function() {
      isThrottled = false
      if (savedArgs) {
        wrapper.apply(savedThis, savedArgs)
        savedArgs = savedThis = null
      }
    }, ms)
  }
  return wrapper
}

6.10.1
function f() {
  alert( this )
}

let user = {
  g: f.bind(null)
}

6.10.2
Вася

6.10.3
undefined

6.10.4
askPassword(user.loginOk.bind(user), user.loginFail.bind(user))

6.10.5
askPassword(() => user.login(true), () => user.login(false))

8.1.1
true, null, undefined

8.1.2
let head = {
  glasses: 1
}

let table = {
  pen: 3,
  __proto__: head
}

let bed = {
  sheet: 1,
  pillow: 2,
  __proto__: table
}

let pockets = {
  money: 2000,
  __proto__: bed
}

8.1.3
rabbit

8.1.4
let hamster = {
  stomach: [],
  eat(food) {
    this.stomach.push(food)
  }
}

let speedy = {
  __proto__: hamster,
  stomach: []
}

let lazy = {
  __proto__: hamster,
  stomach: []
}

8.2.1
true, false, true, undefined

8.3.1
Function.prototype.defer = function(ms) {
  setTimeout(this, ms);
}

function f() {
  alert("Hello!")
}

8.3.2
Function.prototype.defer = function(ms) {
  let f = this
  return function(...args) {
    setTimeout(() => f.apply(this, args), ms)
  }
}

function f(a, b) {
  alert( a + b )
}

8.4.1
let dictionary = Object.create(null, {
  toString: {
    value() {
      return Object.keys(this).join()
    }
  }
})

8.4.2
function Rabbit(name) {
  this.name = name
}
Rabbit.prototype.sayHi = function() {
  alert( this.name )
}

9.1.1
class Clock {
  constructor({ template }) {
    this.template = template
  }

  render() {
    let date = new Date()

    let hours = date.getHours()
    if (hours < 10) hours = '0' + hours

    let mins = date.getMinutes()
    if (mins < 10) mins = '0' + mins

    let secs = date.getSeconds()
    if (secs < 10) secs = '0' + secs

    let output = this.template
      .replace('h', hours)
      .replace('m', mins)
      .replace('s', secs)

    console.log(output)
  }

  stop() {
    clearInterval(this.timer)
  }

  start() {
    this.render()
    this.timer = setInterval(() => this.render(), 1000)
  }
}

9.2.1
class Animal {
  constructor(name) {
    this.name = name
  }
}

class Rabbit extends Animal {
  constructor(name) {
    super(name)
    this.created = Date.now()
  }
}

9.2.2
class ExtendedClock extends Clock {
  constructor(options) {
    super(options)
    let { precision=1000 } = options
    this.precision = precision
  }

  start() {
    this.render()
    this.timer = setInterval(() => this.render(), this.precision)
  }
}

9.2.3
class Rabbit extends Object {
  constructor(name) {
    super()
    this.name = name
  }
}

10.2.2
class FormatError extends SyntaxError {
  constructor(message) {
    super(message)
    this.name = 'FormatError'
  }
}

Часть 2. Браузер: документ, события, интерфейсы
1.3.1
document.body.firstElementChild
document.body.lastElementChild
document.body.lastElementChild.lastElementChild

1.3.2
Да
Нет

1.3.3
let table = document.body.firstElementChild

for (let i = 0; i < table.rows.length; i++) {
  let row = table.rows[i]
  row.cells[i].style.backgroundColor = 'red'
}

1.4.1
1. let table = document.getElementById('age-table')
2. document.querySelectorAll('#age-table label')
3. table.querySelector('td')
4. document.querySelector('form[name="search"]')
5. form.querySelector('input')
6. let inputs = form.querySelectorAll('input')
inputs[inputs.length-1]

1.5.1
for (let li of document.querySelectorAll('li')) {
  let title = li.firstChild.data
}

1.5.2
1

1.5.3
BODY

1.6.1
let elem = document.querySelector('[data-widget-name]')
alert(elem.dataset.widgetName)

1.6.2
let selector = 'a[href*="://"]:not([href^="http://internal.com"])'
let links = document.querySelectorAll(selector)
links.forEach(link => link.style.color = 'orange')

1.7.1
1
3

1.7.2
function clear(elem) {
  elem.innerHTML = ''
}

1.7.4
let ul = document.createElement('ul')
document.body.append(ul)

while (true) {
  let data = prompt('Введите текст для элемента списка', '')

  if (!data) {
    break
  }

  let li = document.createElement('li')
  li.textContent = data
  ul.append(li)
}

1.7.5
let data = {
  'Рыбы': {
    'форель': {},
    'лосось': {}
  },
  'Деревья': {
    'Огромные': {
      'секвойя': {},
      'дуб': {}
    },
    'Цветковые': {
      'яблоня': {},
      'магнолия': {}
    }
  }
}

function createTree(container, obj) {
  container.innerHTML = createTreeText(obj)
}

function createTreeText(obj) {
  let li = ''
  let ul
  for (let key in obj) {
    li += '<li>' + key + createTreeText(obj[key]) + '</li>'
  }
  if (li) {
    ul = '<ul>' + li + '</ul>'
  }
  return ul || ''
}

1.7.6
let lis = document.getElementsByTagName('li')

for (let li of lis) {
  let descendantsCount = li.getElementsByTagName('li').length
  if (!descendantsCount) continue

  li.firstChild.data += ' [' + descendantsCount + ']'
}

1.7.7
function createCalendar(elem, year, month) {
  
  let mon = month - 1
  let d = new Date(year, mon)
  let table = '<table><tr><th>пн</th><th>вт</th><th>ср</th><th>чт</th><th>пт</th><th>сб</th><th>вс</th></tr><tr>'
  
  for (let i = 0; i < getDay(d); i++) {
    table += '<td></td>'
  }
  
  while (d.getMonth() == mon) {
    table += '<td>' + d.getDate() + '</td>'
    
    if (getDay(d) % 7 == 6) {
      table += '</tr><tr>'
    }
    d.setDate(d.getDate() + 1)
  }
  
  if (getDay(d) != 0) {
    for (let i = getDay(d); i < 7; i++) {
      table += '<td></td>'
    }
  }
  
  table += '</tr></table>'

  elem.innerHTML = table
}

function getDay(date) {
  let day = date.getDay()
  if (day == 0) day = 7
  return day - 1
}

1.7.8
let timerId

function update() {
  let clock = document.getElementById('clock')
  let date = new Date()
  let hours = date.getHours()
  
  if (hours < 10) hours = '0' + hours
  clock.children[0].innerHTML = hours
  
  let minutes = date.getMinutes()
  if (minutes < 10) minutes = '0' + minutes
  clock.children[1].innerHTML = minutes
  
  let seconds = date.getSeconds()
  if (seconds < 10) seconds = '0' + seconds
  clock.children[2].innerHTML = seconds
}

function clockStart() {
  if (!timerId) {
    timerId = setInterval(update, 1000)
  }
  update()
}

function clockStop() {
  clearInterval(timerId)
  timerId = null
}

1.7.9
one.insertAdjacentHTML('afterend', '<li>2</li><li>3</li>')

1.7.10
let sortedRows = Array.from(table.rows)
  .slice(1)
  .sort((rowA, rowB) => rowA.cells[0].innerHTML > rowB.cells[0].innerHTML ? 1 : -1)

table.tBodies[0].append(...sortedRows)

1.8.1
function showNotification({top = 0, right = 0, className, html}) {
  
  let notification = document.createElement('div')
  notification.className = 'notification'
  if (className) {
    notification.classList.add(className)
  }
  
  notification.style.top = top + 'px'
  notification.style.right = right + 'px'
  
  notification.innerHTML = html
  document.body.append(notification)
  
  setTimeout(() => notification.remove(), 1500)
}

let i = 1
setInterval(() => {
  showNotification({
    top: 10,
    right: 10,
    html: 'Hello ' + i++,
    className: 'welcome'
  })
}

1.10.1
let scrollBottom = elem.scrollHeight - elem.scrollTop - elem.clientHeight

1.10.2
let div = document.createElement('div')

div.style.overflowY = 'scroll'
div.style.width = '50px'
div.style.height = '50px'

document.body.append(div)

let scrollWidth = div.offsetWidth - div.clientWidth

1.10.3
ball.style.left = Math.round(field.clientWidth / 2 - ball.offsetWidth / 2) + 'px'
ball.style.top = Math.round(field.clientHeight / 2 - ball.offsetHeight / 2) + 'px'

1.11.2
function positionAt(anchor, position, elem) {
  
  let anchorCoords = anchor.getBoundingClientRect()
  
  switch (position) {
    case 'top':
      elem.style.left = anchorCoords.left + 'px'
      elem.style.top = anchorCoords.top - elem.offsetHeight + 'px'
      break      
    case 'right':
      elem.style.left = anchorCoords.left + anchor.offsetWidth + 'px'
      elem.style.top = anchorCoords.top + 'px'
      break
    case 'bottom':
      elem.style.left = anchorCoords.left + 'px'
      elem.style.top = anchorCoords.top + anchor.offsetHeight + 'px'
      break
  }
}

function showNote(anchor, position, html) {
  let note = document.createElement('div')
  note.className = 'note'
  note.innerHTML = html
  document.body.append(note)
  
  positionAt(anchor, position, note)
}

1.11.3
function getCoords(elem) {
  let box = elem.getBoundingClientRect()
  
  return {
        top: box.top + pageYOffset,
        left: box.left + pageXOffset
  }
}

1.11.4

function getCoords(elem) {
  let box = elem.getBoundingClientRect()

  return {
    top: box.top + pageYOffset,
    left: box.left + pageXOffset
  }
}

function showNote(anchor, position, html) {

  let note = document.createElement('div')
  note.className = 'note'
  note.innerHTML = html
  document.body.append(note)

  positionAt(anchor, position, note)
}

function positionAt(anchor, position, elem) {

  let anchorCoords = getCoords(anchor);

  switch (position) {
    case 'top-out':
      elem.style.left = anchorCoords.left + 'px'
      elem.style.top = anchorCoords.top - elem.offsetHeight + 'px'
      break
    case 'right-out':
      elem.style.left = anchorCoords.left + anchor.offsetWidth + 'px'
      elem.style.top = anchorCoords.top + 'px'
      break
    case 'bottom-out':
      elem.style.left = anchorCoords.left + 'px'
      elem.style.top = anchorCoords.top + anchor.offsetHeight + 'px'
      break
    case 'top-in':
      elem.style.left = anchorCoords.left + 'px'
      elem.style.top = anchorCoords.top + 'px'
      break
    case 'right-in':
      elem.style.width = '150px'
      elem.style.left = anchorCoords.left + anchor.offsetWidth - elem.offsetWidth + 'px'
      elem.style.top = anchorCoords.top + 'px'
      break
    case 'bottom-in':
      elem.style.left = anchorCoords.left + 'px'
      elem.style.top = anchorCoords.top + anchor.offsetHeight - elem.offsetHeight + 'px'
      break
  }
}

Глава 3.
8.4.3

<div class="nav">
  <img src="https://js.cx/clipart/arrow-left.jpg" class="left" width="40" height="40">
    <img src="https://js.cx/clipart/arrow-right.jpg" class="right" width="40" height="40">
      <ul class="pages">
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>6</li>
        <li>7</li>
        <li>8</li>
        <li>9</li>
      </ul>
    </div>

    <style>
      .nav {
        height: 40px;
      width: 80%;
      margin: auto;
    }

      .nav .left {
        float: left;
      cursor: pointer;
    }

      .nav .right {
        float: right;
      cursor: pointer;
    }

      .nav .pages {
        list - style: none;
      text-align: center;
      margin: 0;
      padding: 0;
    }

      .nav .pages li {
        display: inline;
      margin: 0 3px;
      line-height: 40px;
      cursor: pointer;
    }
    </style>

8.4.4
.right {
  float:right;
  width:70%;
  box-sizing: border-box;
  border-left: 2px solid green;
  padding-left: 10px;
  background: tan;
}

8.5.1
#box {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
}

8.6.1
#ball {
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -20px;
  margin-top: -20px;
}

8.6.3
.arrow {
  position: absolute;
  height: 60px;
  border: 1px solid black;
  font-size: 28px;
  line-height: 60px;
}

8.11.2
input {
  margin: 0;
  width: 12em;
}

#placeholder {
  color: red;
  margin: -1.3em 0 0 0.2em;
}

8.15.1
function test(selector, count) {
  let elems = document.querySelectorAll(selector)
  let ok = (elems.length == count)
  
  if (!ok) alert(selector + ': ' + elems.length + ' != ' + count);
}

test('input[type="checkbox"]', 2)
test('input[type="checkbox"]:not(:checked)', 1)
test('[id|="message"]', 6)
test('[id^="message-"]', 5)
test('a[href$=".zip"]', 1)
test('[data-action~="delete"]', 2)
test('[data-action]:not([data-action~="delete"])', 1)
test('#messages li:nth-child(2n)', 3)
test('h3#widget-title + *', 1)
test('h3#widget-title ~ a', 2)
test('#messages li:last-child a', 1)

8.15.2
li:nth-child(n+2) {
  margin-top: 1.5em;
}

8.15.3
li:nth-child(odd):not(:first-child) {
  margin-top: 1.5em;
}
*/
