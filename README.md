# Black-Auth

**Black-Auth** - это гоновый стиль со скриптами для ркгистрации и авторизации на сайтах

---

## 🔦 Фонарик

```html
    <div class="light">
    </div>
```

Данный блок следует за курсором и переключается при нажатии на "L".

### 🖱️ Перемещение 'фонарика' за курсором
```js
function MoudeLight() {
  const light = document.querySelector(".light");

  document.addEventListener('mousemove', function(event) {
      let x = event.clientX-350;
      let y = event.clientY-350;
      light.style.left = `${x}px`;
      light.style.top = `${y}px`;
  });
}
```

### Переключяение фонарика
```js
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
```
---
## 🕺 Неон
```html
<div class="out neon-card">
    <div class="inner">
        /* Содержимое */
    </div>
</div>
```
Блок **out** с классом `neon-card` создает `::before` и `::after` для визульного барьера в стиле Neon.

```css
/* Плавное переключение */
.neon-card.active::before {
  opacity:1;
  transition:.3s;
}
/* Создание неонового блока RGB */
.neon-card::before {
  opacity:0;
  transition:.3s;
  content: '';
  position: absolute;
  width: 250%;
  height: 450%;
  background: conic-gradient(#00f, #f0f, #00f); /* Цвета неона */
  animation: rotate 4s linear infinite;
}
/* Создание фонового блока для перекрытия неонового, оставляя по раям место для неона */
.neon-card::after {
  content: '';
  position: absolute;
  inset: 4px; /* Толщина рамки */
  background: #0a0a0a; /* Цвет внутри блока */
  border-radius: inherit;
}
/* Создание анимации */
@keyframes rotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
```

Скрипт для переключения Neon
```js
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
```
---
## ⌨️ Фильтрование прослушивания клавиатуры

Для того, что бы не переключались неон и фонарик, стоит отслеживание фокуса на поля ввода

```js
if (event.target.tagName === 'INPUT' || event.target.tagName === 'TEXTAREA') {
    return; 
}
```

## 🔐 Переключение Авторизации и Регистрации

Переключение плашки, в зависимости что пользователь хочет сделать (регистрация или авторизация)

```js
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
```

# 📥 Установка

Для установки:
1. Скопируйте *html* DOM-элемент `#back` и вставьте в нужное место вашего файла php.
2. Найдите DOM-элементы с классами `form form-login` и измените эелемент *div* на *form*.
3. Настройте DOM-элементы *form* с классами `form form-login` (active, подключекние кнопки и остальное, то что вам нужно).
4. Скопируйте содержимое `index.css` и `index.js` в свой проект и подключите эти файлы.
5. Настройте адаптивную верстку под мобильную версию.
6. Настройти  нужные для себя элименты и используйте.