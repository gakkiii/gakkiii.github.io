//var myHeading = document.querySelector('h1'); /*将h1传入que函数中并赋予myheading中*/
//myHeading.innerHTML = 'Hello world!';         /*然后为myheading赋予新值*/

var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/me2.jpg') {
      myImage.setAttribute ('src','images/me.jpg');
    } else {
      myImage.setAttribute ('src','images/me2.jpg');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');


function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.innerHTML = myName + "超帅的!";
}

if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    var storedName = localStorage.getItem('name');
    myHeading.innerHTML = storedName + "超帅的!";
  }

myButton.onclick = function() {
    setUserName();
}