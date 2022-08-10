menu.onclick = function myFunction() {
  var x = document.getElementById('top_nav');

  if (x.className === 'topnav') {
    x.className += ' responsive';
  } else {
    x.className = 'topnav';
  }
};
