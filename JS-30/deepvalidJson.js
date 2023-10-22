
// const a = {"a": 1};
// const b = [undefined, 2, 3];
var areDeeplyEqual = function(o1, o2) {
    
  // base cases
  if(typeof o1 !== typeof o2) {
      return false;
  }
  // if it enters here then they are of same typw
  // now check if they are primitives
  if(typeof o1 !== "object") {
      // if they are primitives then check are they really equal
      return o1 === o2;
  }
  
  if(Array.isArray(o1) || Array.isArray(o2)) {
      if(String(o1) !== String(o2)) {
          return false;
      }
      
      for(let i = 0; i < o1.length; i++) {
          areDeeplyEqual(o1[i], o2[i]);
      }
  
  } else {
  // Objects 
  if(Object.keys(o1).length !== Objects.keys(o2).length) {
      return false;
  }
  
  for( const key of o1) {
      if(!areDeeplyEqual(o1[key], o2[key])) {
          return false;
      }
  }
  }
  return true;
}

const a = [3, 2];
const b = ["3", "2"];
console.log(String(a) === String(b));