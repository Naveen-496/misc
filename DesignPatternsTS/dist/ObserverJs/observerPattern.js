

let Subject = {
   
   _state: 0,
   _observers: [],

   add: function( observer) {
     this._observers.push( observer);
   },

   setState: function( newValue) {
     this._state = newValue;

     // when the state changes notify the subscribers about the state change
      this.notify();
   },

   getState: function() {
     return this._state;
   },

   notify: function() {
     
     for( let i = 0; i < this._observers.length; i++ ) {
         this._observers[i].signal( this );
     }
   }
}

let Observer = {
   
   signal: function( subject) {
     const newValue = subject.getState();
     console.log( newValue );
   }
}

let Observer2 = {
   
   signal: function( subject ) {
     const newValue = subject.getState();
     console.log(newValue * 10);
   }
}

Subject.add( Observer);
Subject.add( Observer2);
Subject.setState(10);