import Note from "./component/note";


function App({notes}) {
   
    
  return (
    <div>
        <h1>Names</h1>
        <ul>
            {
               notes.map(note=>{
                return <Note 
                     note={note} 
                     key={note.id}
                     />
               })
            }
        </ul>
        </div>)

    

    

}

export default App;