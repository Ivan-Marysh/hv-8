
console.log("1. Напиши скрипт, який об'єднує всі елементи массива в один рядок. Елементів може бути довільна кількість. Нехай елементи массива в рядку будут розділені комою.");

const friends = ['Mango', 'Poly', 'Kiwi', 'Ajax'];
let string = '';
string = friends.join(', ');
console.log(string);

console.log("2. Працюємо з колекцією карток в trello. Метод splice() (можна використати інші методи)");

const cards = [
    'Карточка-1',
    'Карточка-2',
    'Карточка-3',
    'Карточка-4',
    'Карточка-5',
  ];

console.log(cards);


console.log("3. Видалити");

  const cardToRemove = 'Карточка-3';
  const index = cards.indexOf(cardToRemove);
  if(index !== -1){
   cards.splice(index, 1);
  }

  console.log(cards);

  console.log("4. Додати");

  const cardToInsert = 'Карточка-6';
  const index2 = 5;
  cards.splice(index2, 0, cardToInsert);
  console.log(cards);

  console.log("5. Оновити");

  const cardToUpdate = 'Карточка-4';
  const newcard ='Карточка-4_2.0';
  const index3 = cards.indexOf(cardToUpdate);
  if(index3 !== -1){
    cards.splice(index3, 1, newcard);
   }

  console.log(cards);