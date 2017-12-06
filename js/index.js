(function(){
  function init() {
    const inc = document.getElementById("increment");
    const dec = document.getElementById("decrement");

    const time = document.getElementById('time');
    const alarm = document.getElementById('alarm');
    const tick = document.getElementById('tick');

    inc.onclick = () => {
      time.value = parseInt(time.value) + 1;
      if (time.value == 60) {
        inc.disabled = true;
      } else {
        inc.disabled = false;
        dec.disabled = false;
      }
      
    }

    dec.onclick = () => {
      time.value = parseInt(time.value) - 1;
      if (time.value == 0) {
        dec.disabled = true;
      } else {
        dec.disabled = false;
        inc.disabled = false;
      }
    }

    startTimer = () => {
      let startTime = time.value;
      setTimeout(playAlarm, startTime*60*1000)
      tick.play();
      document.getElementsByClassName('material-icons')[2].innerHTML = 'pause';
      document.getElementsByClassName('reading-wrapper')[0].classList.add("animation-move");
    }

    playAlarm = () => {
      document.getElementsByClassName('material-icons')[2].innerHTML = 'play_arrow';
      document.getElementsByClassName('reading-wrapper')[0].classList.remove("animation-move");
      tick.pause();
      alarm.play()
    }


  }
  init();
})();