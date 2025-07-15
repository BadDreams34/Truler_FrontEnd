
const URLBASE = "http://localhost:6050"
window.addEventListener('load', async ()=>{
    const response = await fetch (`${URLBASE}/home/allfriends`, {method: "GET",credentials: "include"})
if (response.ok) {
    const data = await response.json()
    console.log(data)
} else {
    const data = await response.json()
    console.log(err, data)
}
})
