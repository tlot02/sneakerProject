
//Where the Movement Animations Happens
const card = document.querySelector('.card')
const container = document.querySelector('.container')

//Items
const title = document.querySelector('.title');
const sneaker = document.querySelector('.sneaker img');
const purchase = document.querySelector('.purchase button');
const description = document.querySelector('.info h3');
const sizes = document.querySelector('.sizes');


//Moving Animation Event on mouse movement
container.addEventListener('mousemove', (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX)/ 50;
    let yAxis = (window.innerHeight / 2 - e.pageY)/ 50;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`
})


//Animate In
container.addEventListener('mouseenter', e => {
    card.style.transition = 'none';

    //Popout
    title.style.transform = 'translateZ(150px)';
    sneaker.style.transform = 'translateZ(200px) rotateZ(-35deg)';
    description.style.transform = 'translateZ(125px)';
    sizes.style.transform = 'translateZ(125px)';
    purchase.style.transform = 'translateZ(125px)';

})

//Ease Back into Place
container.addEventListener('mouseleave', e => {
    card.style.transition = 'all 0.5s ease';
    //popback
    card.style.transform  = `rotateY(0deg) rotateX(0deg)`
    sneaker.style.transform = 'translateZ(0px) rotateZ(0deg)';
    title.style.transform = 'translateZ(0px)';
    description.style.transform = 'translateZ(0px)';
    sizes.style.transform = 'translateZ(0px)';
    purchase.style.transform = 'translateZ(0px)';

})


//CHANGE THE ACTIVE STATE OF THE SIZE BUTTONS
//make a variable to grab the buttons. 
let activeButton = document.getElementsByClassName('sizes')[0];

//This function assigns the active class to the button in the active state. It also removes the class if the button is not in the active state. 
function buttonFunction(e) {
    var elems = document.querySelector('.active');
    if(elems !=null) {
        elems.classList.remove('active');
    }
    e.target.className = "active";
}

activeButton.addEventListener('click', buttonFunction);

