const body = document.querySelector("body")
const container = document.createElement("div")
container.classList.add("container")

function setNewGrid(height, width){
    let unit = (1/(height>width ? height : width))*92

    let previous = container.querySelectorAll(".row")
    previous.forEach((e)=>container.removeChild(e))
    for (let i = 0; i<height; i++){
        const row = document.createElement("div")
        for (let j = 0; j<width; j++){
            const div = document.createElement("div")
            div.classList.add("grid")
            div.setAttribute("style", `height: ${unit}vh; width: ${unit}vh`)
            div.setAttribute("id", 0)
            row.appendChild(div)
        }
        container.appendChild(row)
        row.classList.add("row")
    }
    body.appendChild(container)

    const divNodeList = container.querySelectorAll(".grid")


    divNodeList.forEach(item =>{
        item.addEventListener("mouseover", changeColor)
    })

    divNodeList.forEach(item =>{
        item.addEventListener("mouseout", revertColor)
    })
}

setNewGrid(16, 16)

const button = document.querySelector("#size-button")
    button.addEventListener("click", () =>{
        let userHeight = prompt("Choose new grid height")
        let userWidth = prompt("Choose new grid width")
        if (userHeight>100 || userWidth>100)
            alert("Your grid size must be smaller than 100x100")
        else
            setNewGrid(userHeight, userWidth)
        console.log(userHeight, userWidth)
    })

function changeColor(){
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    this.style.backgroundColor = `#${randomColor}`
    console.log(randomColor, Number(this.getAttribute("id")))
    this.setAttribute("id", `${Number(this.getAttribute("id"))+1}`)
}

function revertColor(){
    this.style.backgroundColor = `rgba(1,1,1, ${Number(this.getAttribute("id"))/10}`
}