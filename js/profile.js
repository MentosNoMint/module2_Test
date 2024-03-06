let listTextUser = document.querySelector('.textUser');
let token = localStorage.getItem('AuthToken');
let url = 'https://3162-89-232-236-182.ngrok-free.app'


// Получение данных юзера через токен , который сохраняется в localstorage 
async function userContent() {
    let responseUser = await fetch('https://3162-89-232-236-182.ngrok-free.app/api/user', {
        method: "GET",
        headers:
        {    
            "Authorization": `Bearer ${token}`,  
            "Content-Type": "application/json",
        }
    })
    .then(res => res.json())
    let contentToken = await responseUser.json();
    console.log(contentToken)
}

userContent();



