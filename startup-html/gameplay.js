window.addEventListener("load", function() {
    this.setTimeout(
        function open(event){
            document.querySelector(".popup").style.display = "block";
        }, 
        1000
    )
});

function closePopup() {
    document.querySelector('.popup').remove();
    const min = 2000;
    const max = 5000;
    timeBeforeDraw = ThreadLocalRandom.current().nextInt(min, max);
    
    TimeUnit.MILLISECONDS.sleep(timeBeforeDraw);
  }