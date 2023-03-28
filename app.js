// Classes and Encapsulation
// an "instance" just means one object created by a class
// "encapsulation" means bundling code together
// Object Oriented Programming vs. Functional
// cache HTML elements for later use

// Define a class
class ToDoListItem {
    static itemsCreated = 0;
    static toDoListItems = [];
    static addNewItem(){
        const inputEl = document.querySelector("#newItemInput")
        // use the .value property to get the text
        const newText = inputEl.value;
        // create a new toDoListItem using the class!
        const newItem = new ToDoListItem(newText)
        // clear the input
        inputEl.value = "";
    }
    constructor(textInput){
        ToDoListItem.itemsCreated++;
        // put that item in the global array
        ToDoListItem.toDoListItems.push(this);
        // "this" refers to the object being created by the constructor
        this.text = textInput;
        // you can created "default" properties without a parameter
        this.completed = false;
        // create a new list item HTML Element
        const listElement = document.createElement('li');
        // fill in that element's text equal to this.text property
        listElement.innerText = this.text;
        // add it to the page
        // GRAB the ul by its ID
        const ulElement = document.querySelector("#toDoList")
            // use the append method
        ulElement.append(listElement)
        // SAVE that element onto this object by creating a new property
        this.listItemElement = listElement;
        // use the render method to draw it on the page
        this.render();
    }
    render(){
        this.listItemElement.innerHTML = "";
        const newButton = document.createElement('button');
        // use an arrow function so we still have access to "THIS"
        newButton.addEventListener("click", ()=>{
            this.toggleComplete();
            this.render();
        })
        if(this.completed){
            newButton.innerText = "Change to Incompleted";
            this.listItemElement.style.textDecoration = "line-through";
        }else{
            this.listItemElement.style.textDecoration = "";
            newButton.innerText = "Mark Complete";
        }
        this.listItemElement.innerText = this.text;
        this.listItemElement.append(newButton);
    }
    toggleComplete(){
        this.completed = !this.completed;
    }
}
// Define a function to respond to the press of the button
    // It should create a new ToDoListItem()
    // It should put that item into the array
function addNewListItem(){
    // Grab the input element

}
// Add an event listener to the button that triggers the function on click
    // Grab the button from the dom
const addNewButtonEl = document.querySelector("#addNewItemButton")
    // Use the event listener method
addNewButtonEl.addEventListener("click", ToDoListItem.addNewItem)

// Define static methods

// Define static properties

// Use extends to implement inheritance



// ACTUALLY IMPORTANT FOR NOW
// Create a class
class Cat{
    constructor(name){
        this.name = name;
        this.legs = 4
    }
    meow(){
        console.log(`MEOW MY NAME IS ${this.name}`)
    }
}
const morty = new Cat("morty")
morty.meow()
// Create a constructor method that sets instance properties
// Invoke the class constructor to create new objects
// Add methods to the class
// Invoke the instance methods