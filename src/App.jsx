import React, { useState } from 'react'


const App = () => {
  
  const [marks, setMarks] = useState([45, 67, 89, 34, 23, 56, 78, 90, 12, 34])
  function graceStudents() {
    const newMarks = marks.map(function(elem){
      return elem + 5
    })
    setMarks(newMarks)
  }


  return (
    <div>
      {marks.map(function(elem,idx){
        return <h1 key={idx}>Student {idx+1} is = {elem}({elem >33 ? "Pass" : "Fail"})</h1>
      })}
      <button onClick={graceStudents}>Give them Grace </button>

    </div>
  )
}

export default App
