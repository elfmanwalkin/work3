

window.onload=function(){
    document.getElementById('homeBtn').addEventListener('click', checkEmail);
    document.getElementById('aboutBtn').addEventListener('click', checkEmail);
}
// Event Listeners


// Functions
function checkEmail(e) {
    e.preventDefault();
    let field = document.getElementById('email').value;
    if (field === '') {
        alert('Please provide a valid email address');
        return true;
    } else {
        alert('Thank you for your subscription!');
        return false;
    }
    console.log(field);
}

var el = document.getElementById('overlayBtn');
if(el){
  el.addEventListener('click', swapper, false);
}