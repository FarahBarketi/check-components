import './App.css';
import Address from './profil/Address';
import FullName from './profil/FullName';
import ProfilePhoto from './profil/ProfilePhoto';
import "./App.css"

function App() {
  return (
    <div >
            <h1>My Profil</h1>
               <div className='App'>
     <ProfilePhoto />
   
     <FullName />
     <Address />
     </div>
    </div>
    
  );
}

export default App;

