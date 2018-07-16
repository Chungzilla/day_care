
//Hardcoded content on load

let jazzy = new Child('Jazzy', 8, 'Queens', false);
let tudii = new Child('Tudi', 7, 'Boston', true);

let carl = new Child('Carl', 8, 'Manhattan', true);
let rick = new Child('Rick', 1, 'Brooklyn', true);

let rugDaycare = new Daycare('Rugrats Inn', true, 5, 1);
let mattyDaycare = new Daycare('Miss Matties Kiddy Corner', false, 7, 2)


// bobDaycare.addChild(bob);
// bobDaycare.addChild(david)

// johnDaycare.addChild(carl);
// johnDaycare.addChild(rick);

let daycareStore = [rugDaycare, mattyDaycare]

rugDaycare.renderDaycare();
mattyDaycare.renderDaycare();