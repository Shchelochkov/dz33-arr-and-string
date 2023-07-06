
let input1 = document.getElementById('input1');
let button1 = document.getElementById('but1');
let out1 = document.getElementById('out1');

let button2 = document.getElementById('but2');
let input2 = document.getElementById('input2');
let out2 = document.getElementById('out2');

button1.onclick = f1

function f1() {
    // берем весь тескст из поля и преобразует его в строку потом в элементы массива
    let string = input1.value;
    const stringArray = string.split(' ');
    console.log(stringArray);
// считает количество этих элементов и выводит в рез1
    let rez1 = stringArray.length;
    console.log(rez1);
// сортирует массив по длинне элементов массива
//и пишет его в рез2
    let rez2 = stringArray.sort((a,b) => b.length - a.length)[0];
    console.log(rez2);
// объеденяет элементы массива в одну строку и пишет его в рез3
    let rez3 = stringArray.join('');
    console.log(rez3);

    out1.innerHTML = 'Слов в тексте: '+ rez1 + '<br>' + 'Самое длинное слово: '+ rez2 + '<br>' + 'Одна строка: '+ rez3;
}


//вторая задачка (Написать функцию, которая принимает двузначное число и возвращает его в текстовом виде.
//Например: 35 - тридцать пять, 12 - двенадцать)

function numToString(number){
    const p = ['', 'двадцать', 'тридцать', 'сорок', 'пятьдесят', 'шестьдесят', 'семьдесят', 'восемьдесят', 'девяносто'];
    const m = ['один', 'два', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять'];
    const s = ['одиннацать', 'двенадцать', 'тринадцать', 'четырнадцать', 'пятнадцать', 'шестнадцать', 'семнадцать', 'восемнадцать', 'девятнадцать'];
    
    let str = number.toString()
    let out = '';

    if(str.length == 1) return m [number-1];

    else if(str.length == 2){
        if(str[0] == 1) out = s [parseInt(str[1])-1];
        
        else out = (p [parseInt(str[0])-1] + ((str[1]!='0') ? (' ' + m [parseInt(str[1])-1]):''));
    }

    let array = out.split('');
    array[0] = array[0].toUpperCase();
    out = array.join('');
    return out;
}


button2.addEventListener('click', function(){
    let num = input2.value;
    console.log(numToString(num))
    out2.textContent = numToString (num)
})








