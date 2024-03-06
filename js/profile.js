let listTextUser = document.querySelector('.textUser');
let token = localStorage.getItem('AuthToken');



// Получение данных юзера через токен , который сохраняется в localstorage 
async function userContent() {
    let responseUser = await fetch(`${url}/api/user`, {
        method: "GET",
        headers:
        {     
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    })
    let contentToken = await responseUser.json();
    console.log(contentToken)
}

userContent();



