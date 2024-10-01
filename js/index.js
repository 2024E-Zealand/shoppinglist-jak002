//Write your Javascript code here
console.log("Shoppinglist")

let element1 = createNewElement("unhealthy","7","Pizza")
console.log(element1)
appendToList(document.getElementById("listUnhealthy"),element1)

document.getElementById("addbutton").addEventListener('click',addNewToList)

function addNewToList(e)
{
    let text = document.getElementById("addtext").value
    let list = document.getElementById("listUnhealthy")
    let healthstatus
    if(document.getElementById("healthcheck").checked === true)
    {
        healthstatus = "healthy"
    } else {
        healthstatus = "unhealthy"
    }
    let element = createNewElement(healthstatus,list.children.length+1,text)
    appendToList(list,element)
}

function createNewElement(classatt,idatt,text)
{
    let NewElement = document.createElement("li")
    NewElement.setAttribute("id",idatt)
    NewElement.className = classatt
    let NewTextElement = document.createTextNode(text)
    NewElement.append(NewTextElement)
    return NewElement
}

function appendToList(listToAppend, listelement)
{
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