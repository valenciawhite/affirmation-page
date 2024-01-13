document.addEventListener("DOMContentLoaded", function(event) { 
    
    const cakeImg = document.getElementById('cake-img');
    const cakeSound = document.getElementById('cake-audio');

    cakeImg.addEventListener("mouseover", function(){
        cakeSound.play();
    })

    // const cupidImg = document.getElementById('cupid-img');
    // const cupidSound = document.getElementById('cupid-audio');

    // cupidImg.addEventListener('mouseover', function(){
    //     cupidSound.play();
    // });

  });