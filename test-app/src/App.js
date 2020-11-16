import React,{useState} from "react";
import './App.css';
import Build from './components/BuildItem';
import BlogForm from './components/BlogForm';
import Name from "./components/Name";


function App() {

  const[name,setName] = useState("mursel");


  const handleClick = () =>{
        console.log("hello")
        setName(name)
  }
  return (
    <div className="App">
      <Build/>
      <BlogForm  handleClick = {handleClick}/>
      <Name  name={name}/>
    </div>
  );
}

export default App;
