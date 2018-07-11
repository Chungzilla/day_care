var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
}


let allDaycareCounter = 0;
let upperContainer = document.getElementById('upper-container');
let lowerContainer = document.getElementById('lower-container');


//Code below will define the daycare class and its params
class Daycare {
    constructor(name, status, numWorkers, id){
        this.name = name;
        this.status = status;
        this.numWorkers = numWorkers;
        this.daycareChildren = []
    }
//Need to be able to add new daycares
    addDaycare (daycare){
        this.daycareChildren.push(child)
    }

//Need to be able to render daycares added
    renderDaycare(){
        //Need to create a new div to contain the new daycares in the upper container
        let newContainer = document.createElement.Id(div);
        newContainer.classList.add('daycare')
        newContainer.id = this.id

        //Need to create elements with Daycare properties to store in the new div
        let name = document.createElement('h2')
        name.innerText = "Daycare Name:" + this.name

        let status = document.createElement('h3')
        status.innerText = "Status" + this.status

        let id = document.createElement('h4')
        id.innerText = "Daycare ID#:" + this.id

        let numWorkers = document.createElement('h4')
        numworkers.innerText = "# of Workers" + this.numWorkers


        //Need to append list of children to div of their assigned daycare 
        let childrenContainer = document.createElementId('section')
        childrenContainer.classList.add('children-list')

        //Create a remove child button..
        for(let child of daycareChildren){
            //..each time an instance of a child is created/added to array

            let wrapper = document.createElement('div')
            wrapper.classList.add('child-element')

            let removeButton = document.createElementID('button')
            removeButton.innerText = "Remove"
            removeButton.classList.add('remove-child')

            //Grab and wrap name of child assigned and remove button
            let childWrapper = document.createElementId('span')
            childWrapper.innerText = child.name

            //append the child wrapper and button to wrapper; append wrapper to children container section
            wrapper.append(childWrapper, removeButton)
            childrenContainer.append(wrapper)
        }

        //Append the children container section to daycare container div; 
        // append each new daycare to upper container; update daycare counter
        newContainer.appendChild(childrenContainer)
        upperContainer.appendChild(newContainer)
        allDaycareCounter++;

    }

//Need to be able to add a Child to daycares

}



// //.               OLD CODE

// class Daycare {
// 	constructor(name, status, workers, id){
// 		this.name = name;
// 		this.status = status;
// 		this.workers = work;
// 		this.id = id;
// 		this.childArray = []
// 	}

// 	adDaycare (daycare){
// 		//add new daycare to scroll
	
// 		// creates new div for each daycare
// 	let toScroll = 

// 	addChild(child){
// 		//add the child to the array
//     this.childArray.push(child);
// 		// call the function to update children in daycare
// 	}

// 	renderDayCare(){
// 		//Creating the card div
// 		let newDaycare = document.createElement('div');
// 		newDaycare.classList.add('card')
// 		newDaycare.id = this.id

// 		let name = document.createElement('h1')
// 		name.inneText = 'Daycare Name:' + this.name;
// 	}
// 	}
// }


//  class Child {
//   constructor(name, age, hometown){
//     this.name = name;
//     this.age = age;
//     this.hometown = hometown;
//     this.daycareId = daycareId
//   }
// }



// let daycareName = document.getElementById('daycare-name-input')
// let daycareStatus = document.getElementById('daycare-status-input')
// let daycareWorkers = document.getElementById('workers-input')
// let daycareButton = document.getElementById('daycare-button')

// let newDaycare = new Daycare ('', '', '')



// daycareButton.addEventListener('click', function() {
//     //grabbing the text of the add daycare input box
//     let scoreToAdd = Number(scoreInput.value);
//     //using the addScore method of myStudent to add it to the array property of that students assignment scores
// 	myStudent.addScore(scoreToAdd);