const input1 = document.querySelector("#first")
const input2 = document.querySelector("#last")
const btn = document.querySelector(".btn-add")
const action = document.querySelector("ul")

// btn.addEventListener("click", () => {
//     ul.innerHTML += `<li class="list-group-item d-flex
// justify-content-between align-items-center">
// ${input.value}
// </li>`
// }

btn.addEventListener('click',()=>{
    action.innerHTML += `
     <div class="man" style="background: black">
        <p style="color: #fff; padding: 0 50px;">${input1.value}</p>
        <p style="color: #fff; padding: 0 50px;">${input2.value}</p>
        <button style="color: red">delete</button>
    </div>`
})



// function add(){
//     ul.innerHTML +=`<div><span>
//     <h1>${input.value}</h1>
//     <h1>${input1.value}</h1>
//
//     </span>
//     <div/>`
//     // console.log(ul.target)
// }
//
// btn.addEventListener("click",(e) => {
//     if (e !== ""){
//         action.innerHTML += `<li>
// ${input.value}
// // ${input1.value}
// <li/>`
//     }
// })
// // add()