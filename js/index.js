//Write your Javascript code here
console.log("Shoppinglist")

let element1 = createNewElement("unhealthy","7","Pizza")
console.log(element1)

appendToList("listUnhealthy",element1)
changeClass(7,"healthy")
deleteFromList("listUnhealthy",7)
changeText(2,"Soda")

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

function changeClass(elementid, attributetochange)
{
    let element = document.getElementById(elementid)
    if (element.className === null) element.className = attributetochange
    else element.setAttribute("class",attributetochange)
}

function deleteFromList(listid, elementid)
{
    let list = document.getElementById(listid)
    let element = document.getElementById(elementid)
    if(element.parentElement === list)
        {
            list.removeChild(element)
        }
}

function changeText(elementid, text)
{
    let element = document.getElementById(elementid)
    element.textContent = text
}