const navSlide = () => {
	const burger =this.document.querySelector('.burger');	
	const nav = document.querySelector('.nav-links');
	const navLinks = document.querySelectorAll('.nav-links li');

	burger.addEventListener('click', () => {
		//toggle nav
		nav.classList.toggle('nav-active');
		//animate links
		navLinks.forEach((link, index) => {
			if (link.style.animation) {
				link.style.animation = ``;
			} else {
				link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
			}
		});
		//burger animation
		burger.classList.toggle('toggleBurger');
	});
};
navSlide();

const navLinks = document.querySelectorAll('.nav-links li');

function onMouseOver(){
	const divs = document.querySelectorAll('.underline div');
	navLinks.forEach((el, index)=>{
		el.onmouseover = function(){
			for(let i = 0; i < divs.length; i++){
				if (index === i){
					console.log(divs[i]);
					divs[i].style.backgroundColor = 'rgb(30, 108, 224)';
				}
			}
		}
	})
}
onMouseOver();

function onMouseOut(){
	const divs = document.querySelectorAll('.underline div');
	navLinks.forEach((el, index)=>{
		el.onmouseout = function(){
			for(let i = 0; i < divs.length; i++){
				if (index === i){					
					divs[i].style.backgroundColor = 'transparent';
				}
			}
		}
	})
}
onMouseOut();

//____________________________________________

// on click send mail.

const sendMail = () => {
	window.location = 'mailto:mk.contac@valtech.com';
};

let btn = document.querySelector('.mail_btn');

btn.addEventListener('click', () => {
	sendMail();
});

//____________________________________________________

// cards generator with constructor

class Card {
	constructor(_img, _title, _body) {
		(this.img = _img), (this.title = _title), (this.body = _body);
	}
}

let card1 = new Card(
	'./assets/img/slika_1.png',
	'Teaser title',
	'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus assumenda quam recusandae temporibus sapiente dolores esse ipsum magnam aliquid aspernatur!'
);
let card2 = new Card(
	'./assets/img/slika_2.png',
	'Teaser title',
	'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus assumenda'
);
let card3 = new Card(
	'./assets/img/slika_3.png',
	'Teaser title',
	'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus assumenda quam recusandae temporibus sapiente dolores '
);
let card4 = new Card(
	'./assets/img/slika_4.png',
	'Teaser title',
	'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus assumenda quam recusandae temporibus sapiente dolores esse ipsum magnam aliquid aspernatur!'
);

let cardArr = [ card1, card2, card3, card4 ];

// insert card template

cardArr.forEach((element, index) => {
	document.querySelector('.cardsLoader').innerHTML += `	
	<article class="card">
    	<img src=${element.img} alt="card_img" style="width:100%">
    	<div class="container">
        	 <h3><b>${element.title}</b></h3> 
        	 <p>${element.body}</p> 
		<div class="card_footer">
        	 <button class="card_btn">Read more</button>
		</div>
    </div>
</article>
	`;
});
//______________________________________________________

document.querySelector('.form_btn').addEventListener('click', (e) => {
	e.preventDefault();
});
