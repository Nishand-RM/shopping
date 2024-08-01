import Hello from "./component/Hello";

function Mob(){

    const a=10;
    const b=20;
    return  (
        <div>
             <Hello
              val1 = {a} 
              val2 ={b}/>
  
        </div>
    )
  }

  export default Mob;