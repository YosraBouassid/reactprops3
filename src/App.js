import image from './one.jpg';
import './App.css';
import Profile from './profile/Profile';





function y() {
  alert("Hello World!")
}
function App() {
  return (
    <div className="App" style={{color:"red"}}>
      
      <Profile fullName="Sara" profession="ing" bio="a" a={y}> 
      <img src={image} alt=",;l"  width="30px" height="30px"/>
      </Profile>
    
 
    </div>
  );
}

export default App;
