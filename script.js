for (let i = 1; i <= 10; i++) {
    let row = '';
    for (let j = 1; j <= 10; j++) {
      row += (i * j) + '\t';  0
    }
    console.log(row);  
}







let user = +prompt(); 
let computer = Math.floor(Math.random() * 3);

let result = '';

if (user === computer) {
    result = alert('Ничья!');
} else if (user === 0) {
    if (computer === 1) {
        result = alert('Вы выиграли!');
    } else {
        result = alert('Вы не выиграли!');
    }
} else if (user === 1) {
    if (computer === 2) {
        result = alert('Вы выиграли!');
    } else {
        result = alert('Вы не выиграли!');
    }
} else if (user === 2) {
    if (computer === 0) {
        result = alert('Вы выиграли!');
    } else {
        result = alert('Вы не выиграли!');
    }
}


console.log('Вы выбрали:' + user);
console.log('Компьютер выбрал: ' + computer);
alert(result);
