function App({notes}) {
    const notelist =[];
    const noteplace =[];
    for(let i=0;i<notes.length;i++)
    {
        notelist.push(<li>{notes[i].name}</li>)
    }

    for(let i=0;i<notes.length;i++)
        {
            noteplace.push(<li>{notes[i].place}</li>)
        }
    console.log(noteplace);
  return (
    <div>
        <h1>Names</h1>
        <ul>
            {
               notelist
            }
        </ul>

        <h1>Place</h1>
        <ul>
            {
               noteplace 
            }
        </ul>
    </div>

    
  )
}

export default App;