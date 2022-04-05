let counter = 0;

const manager = new StateManager(counter);

function plusOne() {
 manager.addOne();
 updateCounter();
}
function minusOne(){
  manager.minusOne();
  updateCounter();
}

function undo() {
manager.undo();
updateCounter();
}

function redo() {
manager.redo();
updateCounter();
}

function updateCounter() {
    const counterLabel=document.getElementById('counter');
    counterLabel.innerHTML=manager.state;
}

function reset() {
    manager.reset();
    updateCounter();
    
}
// function plusOne() {
//     counter ++;
//     updateCounter();
// }

// function minusOne(){
//     counter--;
//     updateCounter();
// }

// function updateCounter() {
//     const counterLabel=document.getElementById('counter');
//     counterLabel.innerHTML=counter;
// }

// function undo() {

// }

// function redo() {

// }
