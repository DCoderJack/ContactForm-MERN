import './App.css';
import Home from './components/Home';
import DataState from './context/DataState';
import Alert from './components/Alert';
import { useState } from 'react';

function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type, reaction) =>{
      setAlert({
        msg : message,
        type : type,
        reaction : reaction
      })

     setTimeout(() => {
        setAlert(null);
     }, 1000);
  }
  return (
    <>
     <DataState>
     <Alert alert={alert}/>
      <Home showAlert={showAlert}/>
     </DataState>
      
    </>
  );
}

export default App;
