function Note ({note}){
    
        return <li>{
            note.result ? note.name + '★' : note.name
            }
            </li>
        
      
}

export default Note;