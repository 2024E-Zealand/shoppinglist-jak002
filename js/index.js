//Write your Javascript code here
console.log("Shoppinglist")

let element1 = createNewElement("unhealthy","7","Pizza")
console.log(element1)

appendToList("listUnhealthy",element1)

function createNewElement(classatt,idatt,text)
{
    let NewElement = document.createElement("li")
    NewElement.setAttribute("id",idatt)
    NewElement.className = classatt
    let NewTextElement = document.createTextNode(text)
    NewElement.append(NewTextElement)
    return NewElement
}

function appendToList(listid, listelement)
{
    let listToAppend = document.getElementById(listid)
    listToAppend.append(listelement)
}