class StateManager {
  actions = {
    ADD_ONE: (state) => {
      return state + 1;
    },
    MINUS_ONE: (state) => {
      return state - 1;
    },
  };

  constructor(startingState) {
    this.startingState = startingState;
    this.state = startingState;

    this.actionList = [];
    this.actionIndex = 0;
  }

  addOne() {
    this.resetFuture();
    this.actionList.push("ADD_ONE");
    this.actionIndex++;  
    this.limitActionsList()
    console.log(this.actionList);
    console.log(this.state);
    this.reducer();
  }

  minusOne() { 
    this.resetFuture();
    this.actionList.push("MINUS_ONE");
    this.actionIndex++;
    this.limitActionsList()
    console.log(this.actionList);
    console.log(this.state);
    this.reducer();
  }

  resetFuture(){
      this.actionList = this.actionList.slice(0, this.actionIndex);
  }

  undo() {
    if (this.actionIndex > 0) {
      this.actionIndex--;
      this.reducer();
    }
  }

  redo() {
    if (this.actionIndex < this.actionList.length) {
      this.actionIndex++;
      this.reducer();
    }
  }

  reducer() {
    this.state = this.actionList.reduce((state, action, i) => {
      return i < this.actionIndex ? this.actions[action](state) : state;
    }, this.startingState);
  }
  limitActionsList(){
      if (this.actionList.length > 3) {
          this.lostAction = this.actionList.slice(0,1);
          this.actionList = this.actionList.slice(1, this.actionList.length);
          this.actionIndex --;
          const actionName = this.lostAction[0];
          this.startingState = this.actions[actionName](this.startingState);
      }
  }
  reset(){
      this.actionList = [];
      this.actionIndex = 0;
      this.startingState = this.state;
  }
}
