import { about } from './about.js'
import{menu} from './menu.js'
const nav = document.getElementById('navv')
const content = document.getElementById('content')

function navBar() {
    const home_btn =  document.createElement('button')
    home_btn.innerHTML ='Home'
    nav.appendChild(home_btn)
    home_btn.addEventListener('click',() =>{
        document.getElementById('content').innerHTML = "";
        home()
    })
    
    const menu_btn =  document.createElement('button')
    menu_btn.innerHTML ='Menu'
    nav.appendChild(menu_btn)
    menu_btn.addEventListener('click',() =>{
        document.getElementById('content').innerHTML = "";
        menu()
    })
    const about_btn =  document.createElement('button')
    about_btn.innerHTML ='About'
    nav.appendChild(about_btn)
    about_btn.addEventListener('click',() =>{
        document.getElementById('content').innerHTML = "";
        about()
    })
}

function home(){
    const heading =  document.createElement('h1')
    heading.innerHTML ='SK Restaurant'
    content.appendChild(heading)
    const image = document.createElement('img')
    image.src ="food.jpg"
    image.width ='300'
    content.appendChild(image)
    const para = document.createElement('p')
    para.innerHTML = 'My favorite restaurant is called Sunny’s Pizza. It’s a small, cozy place in my town. When you walk in, the smell of fresh pizza dough and melting cheese fills your nose. The friendly staff always greet you with big smiles, making you feel at home right away. The walls are painted bright yellow and red, just like a pizza! The best part is the pizza itself. They make it in a big, shiny oven right in front of you. The crust is always crispy and the cheese is so gooey and yummy. They put on all your favorite toppings, from juicy tomatoes to sweet pineapples. And if you don’t like pizza, they have tasty pasta and fresh salads too. You can also have fun playing games while waiting for your food. They have a little corner filled with board games and coloring books. After eating, they serve a sweet treat – creamy ice cream in different flavors. I love going to Sunny’s Pizza because of the yummy food, fun games, and friendly people. It’s a place that makes me happy every time I visit. My friends and I always have a great time there. So, Sunny’s Pizza is my favorite restaurant. It’s like a little piece of pizza heaven!'
    content.appendChild(para)
}

export{navBar, home}