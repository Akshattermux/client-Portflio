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

var currentIndex = 1;
      
    //Show current image
    showSlides(currentIndex);
    
    //Function to move Next
    function plusSlides(n) {
       showSlides(currentIndex += n);
    }
    
    //Function to move back
    function currentSlide(n) {
       showSlides(currentIndex = n);
    }
    
    
    //Initiate moving of slides
    function showSlides(n) {
       var i;
       var slides = document.getElementsByClassName("images");
         var dots = document.getElementsByClassName("navigation-dot");
         if (n > slides.length) {currentIndex = 1}
         if (n < 1) {currentIndex = slides.length}
         for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
         }
         for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
         }
         slides[currentIndex-1].style.display = "block";
         dots[currentIndex-1].className += " active";
      }