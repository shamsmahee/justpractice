// fetch("https://jsonplaceholder.typicode.com/user")
//     .then(res => {
//         if (!res.ok) {
//             throw new Error(`HTTP error!status:${res.status}`)
//         }
//         return res.json();
//     })

function search() {
    let ip = document.getElementById('ip')
    let val = ip.value
    fetchMoves(val)

}

async function fetchMoves(v) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users?id=${v}`);
    const users = await res.json();
    showData(users)

}
function showData(u) {
    const cardholder = document.getElementById('cardHolder')
    u.map(r => {
        const div = document.createElement('div');
        div.innerHTML = `  <div class="card bg-base-100 w-96 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title text-orange-500">${r.name}</h2>
                    <p>${r.email}</p>
                    <div class="card-actions justify-end">
                        <button class="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>`
        cardholder.appendChild(div)
    }
    )
}
fetchMoves()

