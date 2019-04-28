const xhr = new XMLHttpRequest();

// first example:
// xhr.onreadystatechange = () => {
//     console.log(xhr.readyState)
//     if(xhr.readyState === 4) {

//     }
// }

// second example:
xhr.onreadystatechange = () => {
    console.log(xhr.status)
    if(xhr.readyState === 4 && xhr.status === 200) {
        const jsonData = xhr.responseText
        const data = JSON.parse(jsonData)
        console.log(data)
        for(let i=0; i < data.length; i++) {
            const results = document.getElementById("results");
            results.innerHTML  += `<li>${data[i].title}</li>`;
        }
    }
}

xhr.open("GET", "https://api.vschool.io/alan/todo", true)
xhr.send()

axios.get("https://api.vschool.io/alan/todo").then((response)=>{
    console.log(response.data)
})