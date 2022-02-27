const getUser = async () => {
    try {

        
        const res = await axios('https://jsonplaceholder.typicode.com/users');
        const users = await res.data;
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