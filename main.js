let allDaycareCounter = 0;
let upperContainer = document.getElementById('upper-container');
let lowerContainer = document.getElementById('lower-container')


//Code below will define the daycare class and its params
class Daycare{
    constructor(name, cleanStatus, numWorkers, id){
        this.name = name;
        this.cleanStatus = cleanStatus;
        this.numWorkers = numWorkers;
        this.daycareChildren = []
        this.id = id;
    }
//Need to be able to add children
    addChild(child){
        this.dayCareChildren.push(child)
    }

//Need to be able to render daycares added
    renderDaycare(){
        //Need to create a new div to contain the new daycares in the upper container
        let newContainer = document.createElement('div');
        newContainer.classList.add('daycare')
        newContainer.id = this.id

        //Need to create elements with Daycare properties to store in the new div
        let name = document.createElement('h2')
        name.innerText = "Daycare Name: " + this.name;

        let status = document.createElement('h3')
        status.innerText = 'Status: ' + (this.cleanStatus ? "Clean" : "Not Clean");

        let id = document.createElement('h4')
        id.innerText = "Daycare ID#: " + this.id

        let numWorkers = document.createElement('h4')
        numWorkers.innerText = "# of Workers: " + this.numWorkers;


        //Need to append list of children to div of their assigned daycare 
        let childrenContainer = document.createElement('section')
        childrenContainer.classList.add('children-list')
        for(let child of this.daycareChildren){
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
        newContainer.append(name, status, id, numWorkers, childrenContainer);
        upperContainer.appendChild(newContainer);
        allDaycareCounter++;

    }
}

//Need to be able to add a Child to daycares
let daycareForm = document.getElementById('daycare-form')

daycareForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let nameInput = document.getElementById('daycare-name').value
    let daycareStatus = document.getElementById('daycare-status').value
    let numWorkers = document.getElementById('numofworkers').value

    //Assign true or false to clean status
    if(daycareStatus === "Clean"){
        dayCareStatus = true;  
    }else{
        daycareStatus = false;
    }
    let newDaycare = new Daycare(nameInput, daycareStatus, numWorkers, allDaycareCounter+1);
    daycareStore.push(newDaycare);
    newDaycare.renderDaycare();
})

const removeChildButton = document.getElementsByClassName('remove-child')



//Hardcoded content on load

// let jazzy = new Child('Jazzy', 8, 'Queens', false);
// let tudii = new Child('Tudi', 7, 'Boston', true);

// let carl = new Child('Carl', 8, 'Manhattan', true);
// let rick = new Child('Rick', 1, 'Brooklyn', true);

let rugDaycare = new Daycare('Rugrats Inn', true, 5, 1);
let mattyDaycare = new Daycare('Miss Matties Kiddy Corner', false, 7, 2)


// bobDaycare.addChild(bob);
// bobDaycare.addChild(david)

// johnDaycare.addChild(carl);
// johnDaycare.addChild(rick);

let daycareStore = [rugDaycare, mattyDaycare]

rugDaycare.renderDaycare();
mattyDaycare.renderDaycare();