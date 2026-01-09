# Black-Auth

**Black-Auth** - это гоновый стиль со скриптами для ркгистрации и авторизации на сайтах

---

## Html

```html
<div id="back">
        <div class="light">
            
        </div>
        <div class="content">
            <header>
            <h1>Black-Auth</h1>
            <div class="info">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-info-circle" viewBox="0 0 16 16">
        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
        <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
        </svg>
                <h4>
                    L - on/off light <br>
                    N - on/off neon
                </h4>
                </div>
            </header>
            <div id="auth">
            <div class="out neon-card">
                <div class="inner">
                <div class="login">
                    <div class="form form-login" >
                    <label class="title"> Login</label>
                    <div class="input-box">
                        <label>Username / Email</label>
                        <input type="text" name="login">
                    </div>
                    <div class="input-box">
                        <label>Password</label>
                        <input type="password" name="pass">
                    </div>
                    <button>Login</button>
                    </div>
                </div>
                <div class="register">
                    <div class="form form-register" >
                    <label class="title">Registration</label>
                    <div class="input-box">
                        <label>Username</label>
                        <input type="text" name="login">
                    </div>
                    <div class="input-box">
                        <label>Email</label>
                        <input type="text" name="name">
                    </div>
                    <div class="input-box">
                        <label>Password</label>
                        <input type="password" name="pass">
                    </div>
                    <div class="input-box">
                        <label>Accept password</label>
                        <input type="password" name="accept-pass">
                    </div>
                    <button>Register</button>
                    </div>
                </div>
                <div class="die">
                    <div class="action-login active">
                    <h3>If you don't have account. <br> You can create new accaunt</h3>
                    <div class="button go-reg">Registration</div>
                    </div>
                    <div class="action-register">
                    <h3>If you have account. <br> You can login in you accaunt</h3>
                    <div class="button go-log">Login</div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
    </div>
```
