const getUser = async () => {
    try {
        const respuesta = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await respuesta.json();
        console.log(users);
        users.forEach(user => {
            document.body.innerHTML += 
            ` 
            <ul>
            <li>
            ${user.id}: ${user.name}
            </li>
            </ul>
            `
        });
    } catch (error) {
        console.log(error);
    }
}

getUser();