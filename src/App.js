import React from 'react'

function App() {
  const [d,setD] = React.useState()
  const [result,setResult] = React.useState()
  const f = (event)=>{
    let data = event.target.value
    setD(data)
  }
  const showData = ()=>{  
    console.log(d);
    if (d === "soumya") {
      setResult(`No No U r an Idiot!! Fuck U`)
    }else if(d === "Soumya") {
      setResult(`No No U r an Idiot!! Fuck U`)
    }else if(d === "soumyadeep") {
      setResult(`No No U r an Idiot!! Fuck U`)
    }else if(d === "Soumyadeep") {
      setResult(`No No U r an Idiot!! Fuck U`)
    }else if(d === "Soumyadeep Mondal") {
      setResult(`No No U r an Idiot!! Fuck U`)
    }else if(d === "Soumyadeep mondal") {
      setResult(`No No U r an Idiot!! Fuck U`)
    }else if(d === "soumyadeep mondal") {
      setResult(`No No U r an Idiot!! Fuck U`)
    }else if(d === "soumyadeep Mondal") {
      setResult(`No No U r an Idiot!! Fuck U`)
    }else{
      setResult(`Fuck U ${d} !`)
    }
  }
  return (
    <div>
      <div className="d-flex justify-content-center mt-5">
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">Enter Your Name please</label>
          <input type="email" className="form-control w-100" id="exampleFormControlInput1"  onChange={f}/>
          <button type="button" className="btn btn-info my-3" onClick={showData} >Submit</button>
          <h1>{result}</h1>
        </div>
      </div>
    </div>
  )
}
export default App

