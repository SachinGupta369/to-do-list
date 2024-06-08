let item = document.querySelector("#item")
let addLists = document.querySelector("#addList")

item.addEventListener("keyup",function(event){
    if(event.key == "Enter"){
        addList(this.value);
        this.value = ""
    }
})

let addList = (data) => {
    let listsItems = document.createElement("li")
    listsItems.innerHTML = 
    ` ${data} <i class="fa fa-remove"></i> `
    addLists.appendChild(listsItems)

    listsItems.addEventListener("click",function(){
        this.classList.toggle("tick")
    })

    listsItems.querySelector("i").addEventListener("click",
        function(){
            listsItems.remove()
        }
    )
}



