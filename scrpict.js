const navbar = document.getElementById('navbar');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('transparent');
            } else {
                navbar.classList.remove('transparent');
            }
        });


 var typed = new Typed('#element', {
    strings: [" Welcome to my portfolio","Bienvenido a mi portafolio","Welcome to my portfolio","मेरे पोर्टफोलियो में आपका स्वागत है","Welcome to my portfolio","میرے پورٹ فولیو میں خوش آمدید","Welcome to my portfolio","मम विभागे स्वागतम्","Welcome to my portfolio"],
    typeSpeed: 50,
    });
  
//this code is for block ctrl+U 
document.onkeydown = function(e) {
    if (e.ctrlKey && 
        (e.keyCode === 67 || 
         e.keyCode === 86 || 
         e.keyCode === 85 || 
         e.keyCode === 117)) {
        return false;
    } else {
        return true;
    }
};
$(document).keypress("u",function(e) {
if(e.ctrlKey)
{
return false;
}
else
{
return true;
}
});