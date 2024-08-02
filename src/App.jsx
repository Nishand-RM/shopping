function App({notes}) {
   
    
  return (
    <div>
        <h1>Names</h1>
        <ul>
            {
               notes.map((note,index)=>{
                return <li key={index}>{note.name}</li>
               })
            }
        </ul>

        <h1>Place</h1>
        <ul>
            {
               notes.map((item,index)=>{
                return <li key={index}>{item.place}</li>
               })
            }
        </ul>
    </div>

    
  )
}

export default App;