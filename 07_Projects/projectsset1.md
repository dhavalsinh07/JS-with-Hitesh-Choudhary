# Project related to DOM
##  Project link

[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution Code

``` javascript
console.log('Dhaval');
const button = document.querySelectorAll('.button');
const body = document.querySelector('body');

button.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
   switch(e.target.id){
     case 'grey':
       body.style.backgroundColor = 'grey';
       break;
       case 'white':
        body.style.backgroundColor = 'white';
        break;
       case 'blue':
        body.style.backgroundColor = 'blue';
        break;
       case 'yellow':
        body.style.backgroundColor = 'yellow';
        break;
   }
  });
});


```