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