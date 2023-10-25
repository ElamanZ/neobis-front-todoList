//Part 1

// #1
// В консоле будет выведено число 10, 10 раз

// #2
const test2 = () => {

    const info = new Date();
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const dayOfWeek = daysOfWeek[info.getDay()]

    const hours = info.getHours()
    const minutes = info.getMinutes()
    const seconds  = info.getSeconds()
    const period = hours >= 12 ? "PM" : "AM";
    const formattedHours = hours % 12 || 12;

    const todayIs = `Today is: ${dayOfWeek}`
    const timeIs = `Current time is: ${formattedHours}${period}:${minutes}:${seconds}`

    return `${todayIs}\n${timeIs}`
}
// console.log(test2())


// #3
const test3 = () => {
    const exampleX = 32243
    const result = exampleX.toString().split('').reverse().join('')
    const result2 = parseInt(result)

    return result2
}
// console.log(test3())

// #4
const test4 = (x) => {
    let result = 1
    for (let i = 1; i <= x; i++) {
        result *= i
    }
    return result
}
// console.log(test4(5))

// #5
const test5 = () => {
    const x = parseInt(prompt('Введите первое число для сравнения'))
    const y = parseInt(prompt('Введите второе число для сравнения'))

    if (isNaN(x) || isNaN(y))
        return alert("Некорректный ввод. Пожалуйста, введите числа.")
    if (x > y) {
        return alert("Первоое число больше второго")
    }
    if (x < y) {
        return alert("Второе число больше первого")
    }
    return alert("Они равны")
};
// console.log(test5())

// #6
const test6 = () => {
    let myColor = ["Red", "Green", "White", "Black"];
    let resultFirst = myColor.join(', ')
    let resultSecond = myColor.join('+')
    return `${resultFirst} \n${resultSecond}`
}
// console.log(test6())

// #7
const test7 = (date) => {
    const options = { month: 'long' };
    return date.toLocaleDateString('en-US', options);
}

// console.log(test7(new Date('10/11/2009')))
// console.log(test7(new Date('11/13/2014')))

// #8
const test8 = (name) => {
    let test = name.split('')
    if (test[0] === test[0].toUpperCase()){
        return "First character of the string is uppercase"
    }
    return "First character of the string is not uppercase"
}
// console.log(test8('Elaman'))

// #9
const test9 = () => {
    const smile = ":)"
    return smile
}
// console.log(test9())


// Part 2

// #1
const stringsOrder = ["string-3", "string-5", "string-2", "string-6", "string-4", "string-1"];
stringsOrder.forEach(tagId => {
    const tagContent = document.getElementById(tagId).textContent;
    console.log(tagContent);
});

// #2
const elements = document.querySelectorAll('.element')

for (let i = 0; i < 3; i++){
    elements[i].style.color = "red"
}
for (let j = 3; j < 6; j++){
    elements[j].style.color = "green"
}

// #3
const tasks = ['Buy lemonade', 'Make toasts', 'Repair car', 'Play games', 'Pet a cat'];
const todoList = document.getElementById('todo-list');

const taskItems = tasks.map(taskText => {
    const taskItem = document.createElement('li');
    taskItem.className = 'task';
    taskItem.textContent = taskText;
    return taskItem;
});

taskItems.forEach(taskItem => {
    todoList.appendChild(taskItem);
});


// #4
const article = document.querySelector('article')
const paragraph = article.querySelectorAll('p');
paragraph.forEach(paragraphs => {
    paragraphs.insertAdjacentHTML('afterend', '<hr>')
})

//#5
const cartItems = document.getElementById('cart-items');
const colaItem = Array.from(cartItems.querySelectorAll('.item')).find(item => item.textContent.includes("Cola 1.5 l."));
if (colaItem) {
    colaItem.remove();
}

const cannedFishItem = document.createElement('div');
cannedFishItem.className = 'item';
cannedFishItem.textContent = 'Canned Fish x 4';

const chocolateBarItem = Array.from(cartItems.querySelectorAll('.item')).find(item => item.textContent.includes("Chocolate bar"));

if (chocolateBarItem) {
    cartItems.replaceChild(cannedFishItem, chocolateBarItem);
}


// #6
const testSix = () => {
    const name = prompt("Введите ваше имя")
    if (name !== '') {
        const ul = document.createElement('ul')
        const li = document.createElement('li');
        li.textContent = name;
        ul.appendChild(li)
        document.body.appendChild(ul);
    }
}
testSix()





