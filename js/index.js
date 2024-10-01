//Write your Javascript code here
console.log("Shoppinglist")

let element1 = CreateNewElement("hot","seven","bongus")
console.log(element1)

function CreateNewElement(classatt,idatt,text)
{
    let NewElement = document.createElement("li")
    NewElement.setAttribute("id",idatt)
    NewElement.className = classatt
    let NewTextElement = document.createTextNode(text)
    NewElement.append(NewTextElement)
    return NewElement
}