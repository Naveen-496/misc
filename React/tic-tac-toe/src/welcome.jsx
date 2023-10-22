

function Greet({firstName, lastName}){
   
  return(
    <h1>Welcome, {`${firstName} ${lastName}`}</h1>
  );
}

function Welcome(){
  return (
    <div>
      <Greet firstName="Naveen" lastName="Reddy" />
      <Greet firstName="Guru" lastName="Raj" />
      <Greet firstName="Sachin" lastName="Rebel" />
    </div>
  );
}
export default Welcome