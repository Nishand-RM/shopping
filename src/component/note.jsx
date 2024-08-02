function Note ({note}){
    
        if(note.result){
            return <li>{note.name} { '★' }</li>
        }
        else
        return <li>{note.name}</li>
        
      
}

export default Note;