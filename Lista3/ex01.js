function listaCores(cores){
    let lis = document.querySelectorAll("li")
    cores.map((element, i)=>{
        lis[i].style.backgroundColor = element
    })
}