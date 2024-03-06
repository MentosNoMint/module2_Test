let registerForm = document.querySelector('#login-form');
let url = 'https://3162-89-232-236-182.ngrok-free.app'

// обработка формы логина
registerForm.addEventListener('submit', async (e) => {
    e.preventDefault()
    let formData = new FormData(registerForm);
    
    let phone = formData.get('phone');
    let password = formData.get('password');

    let responseLogin = await fetch(`${url}/api/login`, {
        method: "POST" ,
        headers: {"Content-Type" :"application/json"} ,
        body: JSON.stringify({phone , password})
    })
    let contentLogin = await responseLogin.json()

    localStorage.setItem('AuthToken' , contentLogin.data.token);
})