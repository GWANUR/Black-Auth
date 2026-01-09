function MoudeLight() {
  const light = document.querySelector(".light");

  document.addEventListener('mousemove', function(event) {
      let x = event.clientX-350;
      let y = event.clientY-350;
      light.style.left = `${x}px`;
      light.style.top = `${y}px`;
  });
}
function OffOnLight() {
  document.addEventListener('keydown', function(event) {
    if (event.target.tagName === 'INPUT' || event.target.tagName === 'TEXTAREA') {
      return; 
    }

    if (event.code === 'KeyL') { 
      let light = document.querySelector(".light");
      if (light) {
        light.classList.toggle('active');
        console.log('Фонарик переключен');
      }
    }
  });
}

function OffOnNeon() {
  document.addEventListener('keydown', function(event) {
    if (event.target.tagName === 'INPUT' || event.target.tagName === 'TEXTAREA') {
      return;
    }

    if (event.code === 'KeyN') { 
      let neon = document.querySelector(".neon-card");
      if (neon) {
        neon.classList.toggle('active');
        console.log('Неон переключен');
      }
    }
  });
}

function LogReg() {
  const die = document.querySelector(".die");
  const btns = document.querySelectorAll(".die .button");
  const loginfo = document.querySelector(".action-login");
  const reginfo = document.querySelector(".action-register");
  
  if (btns) {
    btns.forEach((btn,index)=>{
    btn.addEventListener("mousedown", function(e) {
      if (!e.target.classList.contains('button')) return;

      die.classList.toggle('reg');

      if (die.classList.contains('reg')) {
        if (loginfo && reginfo) {
          loginfo.classList.remove('active');
          setTimeout(() => {
            loginfo.style.display = 'none';
            reginfo.style.display = 'flex';
            setTimeout(() => {
              reginfo.classList.add('active');
            }, 50);
          }, 300);
        }
      } else 
        if (loginfo && reginfo) {
          reginfo.classList.remove('active');
          setTimeout(() => {
            reginfo.style.display = 'none';
            loginfo.style.display = 'flex';
            setTimeout(() => {
              loginfo.classList.add('active');
            }, 50);
          }, 300);
        }
      }
    )});
  }
}

MoudeLight();
OffOnLight();
OffOnNeon();
LogReg();
