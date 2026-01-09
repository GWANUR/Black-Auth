# Black-Auth

**Black-Auth** - это гоновый стиль со скриптами для ркгистрации и авторизации на сайтах

---

## Фонарик

```html
    <div class="light">
    </div>
```

Данный блок следует за курсором и переключается при нажатии на "L"

### Перемещение 'фонарика' за курсором
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
## Неон
