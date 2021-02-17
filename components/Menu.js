// This is the data we will be using, study it but don't change anything, yet.

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/* 
  Step 1: Write a component called 'menuMaker' to create a menu like the markup below:

  <div class="menu">
    <ul>
      {each menu item as an <li>}
    </ul>
  </div>

  The 'menuMaker' takes an array of menu items as its only argument.

  Step 2: Inside the function, iterate over the array creating a list item <li> element for each item in the array.
  Add those items to the <ul>

  Step 3: Still inside your function, select from the DOM the menu button (the element with a class of 'menu-button').

  Step 4: Add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on div.menu (your div with a 'menu' class).

  Step 5: Don't forget to return your div.menu.

  Step 6: Use 'menuMaker' to create a menu using the 'menuItems' array, and append the returned menu to the header.
*/

function menuMaker(object) {
  //create elements
  let mDiv = document.createElement('div');
  let list = document.createElement('ul');
  let students = document.createElement('li');
  let faculty = document.createElement('li');
  let whatsNew = document.createElement('li');
  let techTrends = document.createElement('li');
  let music = document.createElement('li');
  let logOut = document.createElement('li');

  //place elements inside div
  mDiv.appendChild(list);
  list.appendChild(students);
  list.appendChild(faculty);
  list.appendChild(whatsNew);
  list.appendChild(techTrends);
  list.appendChild(music);
  list.appendChild(logOut);
  
  //class
  mDiv.classList.add('menu')

  //textContent
  students.textContent = object[0];
  faculty.textContent = object[1];
  whatsNew.textContent = object[2];
  techTrends.textContent = object[3];
  music.textContent = object[4];
  logOut.textContent = object[5];
  
  //button + evenListener
   let mButton = document.querySelector('.menu-button');
   mButton.addEventListener('click', event => {
     mDiv.classList.toggle('menu--open');
   })

  //return
   return mDiv;

}

const menu = document.querySelector('.menu-button');

menuItems.map(item => {
  menu.appendChild(menuMaker(item));
})