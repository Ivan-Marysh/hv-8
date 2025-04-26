// const friends = ['Mango', 'Poly', 'Kiwi', 'Ajax'];
// let string = '';
// string = friends.join(', ');
// console.log(string);



const cards = [
    'Карточка-1',
    'Карточка-2',
    'Карточка-3',
    'Карточка-4',
    'Карточка-5',
  ];

console.log(cards);

  const cardToRemove = 'Карточка-3';
  const index = cards.indexOf(cardToRemove);
  if(index !== -1){
   cards.splice(index, 1);
  }

  console.log(cards);



  const cardToInsert = 'Карточка-6';
  const index2 = 5;
  cards.splice(index2, 0, cardToInsert);
  console.log(cards);


  const cardToUpdate = 'Карточка-4';
  const newcard ='Карточка-4_2.0';
  const index3 = cards.indexOf(cardToUpdate);

