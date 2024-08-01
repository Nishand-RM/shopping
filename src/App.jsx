function Description() {
  return <p>This is a simple Web Page</p>
}

function Heading(props) {

  console.log(props);

  return <h1>{ props.data }</h1>
}

function Header() {

  const headingData = ["Placements", "Alumni"];

  return (
    <div>
      <Heading 
        data={headingData[0]}
      />
      <Heading 
        data={headingData[1]}
      />
      <Description />
    </div>
  )
}

function App() {
  return (
    <div>
      <Header />
    </div>
  )
}

export default App;