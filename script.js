// 1. გამოიყენეთ ყველა  სტრინგის მეთოდები
// slice
let sliceNumbers = [1, 2, 3, 4, 5, 6, 7, 8];

let sliceNumbersArray = sliceNumbers.slice(3);

console.log(sliceNumbersArray);

let stringsSliceArray = ['joe', 'fred', 'luka', 'jack'];

let stringsSlice = stringsSliceArray.slice(1, 3);

console.log(stringsSlice);

// length

let numbersArrayLength = [1, 3, 'abcdefgh'];

let numbersLength = numbersArrayLength.length;

console.log(numbersLength);

// split

let text = "Hello";
const myArr = text.split("");

console.log(myArr);

// 2.  მოცემულია კომენტარების მასივი, dom მანუპულაციით გამოიტანეთ ყველა ინფორმაცია ქარდებში, გამოიყენეთ 
// შესაბამისი მნიშნვნელობის მქონე ტეგები და ერთმანეთის გვერდიგვერდ განათავსეთ ყველა ელემენტი flex ან grid ის 
// საშუალებით

const infoArray = [
    {
      "postId": 1,
      "id": 1,
      "name": "id labore ex et quam laborum",
      "email": "Eliseo@gardner.biz",
      "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
    },
    {
      "postId": 1,
      "id": 2,
      "name": "quo vero reiciendis velit similique earum",
      "email": "Jayne_Kuhic@sydney.com",
      "body": "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et"
    },
    {
      "postId": 1,
      "id": 3,
      "name": "odio adipisci rerum aut animi",
      "email": "Nikita@garfield.biz",
      "body": "quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione"
    },
    {
      "postId": 1,
      "id": 4,
      "name": "alias odio sit",
      "email": "Lew@alysha.tv",
      "body": "non et atque\noccaecati deserunt quas accusantium unde odit nobis qui voluptatem\nquia voluptas consequuntur itaque dolor\net qui rerum deleniti ut occaecati"
    },
    {
      "postId": 1,
      "id": 5,
      "name": "vero eaque aliquid doloribus et culpa",
      "email": "Hayden@althea.biz",
      "body": "harum non quasi et ratione\ntempore iure ex voluptates in ratione\nharum architecto fugit inventore cupiditate\nvoluptates magni quo et"
    }
  ]; 


  const title = document.createElement('h1'); 
  document.body.appendChild(title);
  title.textContent = 'D O M Task number 2'
  title.style.marginTop = '100px';
  title.style.marginLeft = '40%';

  const cardsSection = document.createElement('section');
  document.body.appendChild(cardsSection);
  
  const container = document.createElement('div');
  cardsSection.appendChild(container);
  container.classList.add('container')

  const userList = document.createElement('div');
  container.appendChild(userList);
  userList.classList.add('user-list');

  for (let i = 0; i < infoArray.length; i++) {
    let info = infoArray[i];

    const userCards = document.createElement('div');
    userList.appendChild(userCards);
    userCards.classList.add('user-cards');

    const nameText = document.createElement('p');
    userCards.appendChild(nameText);
    nameText.textContent = `${info.name}`;
    nameText.style.fontSize = '20px';

    const emailText = document.createElement('p');
    userCards.appendChild(emailText);
    emailText.textContent = `${info.email}`;
    emailText.style.color = 'red';
    emailText.style.paddingTop = '10px';

    const bodyText = document.createElement('p');
    userCards.appendChild(bodyText);
    bodyText.textContent = `${info.body}`;
    bodyText.style.marginTop = '30px';
    bodyText.style.maxWidth = '120px';
    bodyText.style.maxHeight = '100px';
    bodyText.style.overflowX = 'auto';

    const span = document.createElement('span');
    userCards.appendChild(span);
    span.style.marginTop = '30px';
    span.style.marginBottom = '20px';
    span.style.color = 'green';

    const deleteImg = document.createElement('img');
    userCards.appendChild(deleteImg);
    deleteImg.src = './img/delete.png';
    deleteImg.style.width = '30px'
    userCards.style.padding = '20px'

    deleteImg.addEventListener('click', () => {
      userCards.remove()
      const repeatImg = document.createElement('img');
      userList.appendChild(repeatImg);
      repeatImg.src = './img/repeat.png';
      repeatImg.style.width = '30px'
      repeatImg.style.height = '30px'
      repeatImg.style.cursor = 'pointer'
      repeatImg.addEventListener('click', () => {
        userList.appendChild(userCards);
        repeatImg.style.display = 'none';
      })
    })

  }


  const form = document.createElement('form');
  userList.appendChild(form);
  form.classList.add('form');
  
  const inp = document.createElement('input');
  form.appendChild(inp);
  inp.classList.add('inp');

  const btn = document.createElement('button');
  form.appendChild(btn);
  btn.classList.add('btn');
  btn.textContent = 'form submit';

  btn.addEventListener('click', () => {
    if (inp.value === '') {
     const redP = document.createElement('p');
     form.appendChild(redP);
     redP.textContent = 'Please fill in the field';
     redP.style.color = 'red';
     redP.style.textAlign = 'center';
     redP.style.paddingTop = '20px';
   }
 });

  btn.addEventListener('click',() => {
    const pText = document.createElement('p');
    form.appendChild(pText);
    pText.textContent = (inp.value);
  })


// let box = document.getElementById("showbox")
// function clickbox(){
//   box.style.display = "block"
// }

//   3. დაამატეთ ფორმა შემედგი   ველებით id,postId, name, email, body (body სთვის გამოიყენეთ textarea)  ღილაკზე
//  დაჭერისას (form submit) შეყვანილი ინფორმაცია დაამატეთ ზემოთ არსებულ მასივს, 
//  თუ რომელიმე შესაყვანი ველი ცარიელია, გამოიტანეთ ტექსტი წითლად " გთხოვთ შეავსოთ ველი". 

  // const title2 = document.createElement('h2'); 
  // document.body.appendChild(title2);
  // title2.textContent = 'D O M Task number 3'
  // title2.style.marginTop = '40px';
  // title2.style.marginLeft = '40%';
  // title2.style.fontSize = '2em';

const click = document.getElementById('click');
const modal = document.getElementById('modal');
const back = document.getElementById('back');


click.addEventListener('click', () => {
  modal.style.display = 'block';
})

back.addEventListener('click', () => {
  modal.style.display = 'none';
})






  