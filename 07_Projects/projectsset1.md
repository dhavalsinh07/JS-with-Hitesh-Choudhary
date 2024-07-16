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
## Project 2 Solution

``` javascript
const form = document.querySelector('form');

// This use case will give you an empty
// const height = parseInt(document.querySelector('#height').value)
form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    // Show the result
    if (bmi < 18.6) {
      results.innerHTML = `<span> ${bmi}0</span> ,Under Weight`;
    }
    else if (bmi >= 18.6 && bmi <= 24.9 ) {
      results.innerHTML = `<span> ${bmi}0</span> ,Normal Range`;
    }
    else if (bmi > 24.9) {
      results.innerHTML = `<span> ${bmi}0</span> ,Overweight`;
    }
  }
});

```

## Project 3 Solution

```javascript
const clock = document.getElementById('clock')
// document.querySelector('#clock')

setInterval(function(){
  let date = new Date()
  // console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);

```
