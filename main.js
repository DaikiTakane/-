'use strict';

  {
    const timer = document.getElementById('timer');
    const start = document.getElementById('start');
    const stop = document.getElementById('stop');
    const reset = document.getElementById('reset');
    
    let startTime;
    let timeoutId;
    let elapsedTime = 0;
    
    function countUp() {
        const d = new Date (Date.now() - startTime + elapsedTime);
        const m = String(d.getMinutes()).padStart(2, '0');
        const s = String(d.getSeconds()).padStart(2, '0');
        const ms = String(d.getMilliseconds()).slice(0,-2);
        timer.textContent = `${m}:${s}.${ms}`;
        
        timeoutId = setTimeout(() => {
            countUp();
        }, 10);
    }
    
    function setButtonStartInitial() {
        start.disabled = false;
        stop.disabled = true;
        reset.disabled = true;
    }

    function setButtonStartRunning() {
        start.disabled = true;
        start.disabled = true;
        stop.disabled = false;
    }
    
    function setButtonStartStopped() {
        start.disabled = false;
        stop.disabled = true;
        reset.disabled = false;
    }
    
    setButtonStartInitial()
    
    start.addEventListener('mousedown', () => {
        setButtonStartRunning()
        startTime = Date.now();
        countUp();
    });
    
    stop.addEventListener('mousedown', () => {
        setButtonStartStopped()
        clearTimeout(timeoutId)
        elapsedTime += Date.now() - startTime;
    });
    
    reset.addEventListener('mousedown', () => {
        setButtonStartInitial()
        timer.textContent = '00:00.0'
        elapsedTime = 0;
    });
  }