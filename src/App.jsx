function App({notes}) {
   
    
  return (
    <div>
        <h1>Names</h1>
        <ul>
            {
               notes.map((note)=>{
                return <li>{note.name}</li>
               })
            }
        </ul>

        <h1>Place</h1>
        <ul>
            {
               notes.map((note)=>{
                return <li>{note.place}</li>
               })
            }
        </ul>
    </div>

    
  )
}

export default App;