
import './App.css';
import Build from './components/BuildItem';
import BlogForm from './components/BlogForm';


function App() {
  const handleClick = () =>{
        console.log("hello")
  }
  return (
    <div className="App">
      <Build/>
      <BlogForm  handleClick = {handleClick}/>
    </div>
  );
}

export default App;
