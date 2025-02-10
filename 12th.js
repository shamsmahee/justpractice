// fetch("https://jsonplaceholder.typicode.com/user")
//     .then(res => {
//         if (!res.ok) {
//             throw new Error(`HTTP error!status:${res.status}`)
//         }
//         return res.json();
//     })


async function fetchMoves() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await res.json();
    console.log(users);

}

fetchMoves()

