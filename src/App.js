import './App.css';
import One from './One.tsx';
import ReactDOM from 'react-dom';  
import { Route,Routes, BrowserRouter as Router } from 'react-router-dom';  
import Client from './Client.tsx';
import { useEffect } from 'react';


let scriptElement = null;
function App() {
  let number = "5f92a62013332e0f667794dc"
  function initializeScript(clientId) {
    window._csc('show');
    // @ts-ignore
    if (window['loaded-_csc']) {
      // @ts-ignore
      window['loaded-_csc'] = undefined;
    }
    (function (w, d, s, o, f, cid) {
      if (scriptElement) {
        // @ts-ignore
        scriptElement.parentNode.removeChild(scriptElement);
        // @ts-ignore
        w[o] = undefined;
      }
      // @ts-ignore
      if (!w[o]) {
        // @ts-ignore
        w[o] = function () {
          // @ts-ignore
          w[o].q.push(arguments);
        };
        // @ts-ignore
        w[o].q = [];
      };
      scriptElement = d.createElement(s);
      const fjs = d.getElementsByTagName(s)[0];
      scriptElement.id = o;
      scriptElement.src = f;
      scriptElement.async = true;
      scriptElement.title = cid;
      // @ts-ignore
      fjs.parentNode.insertBefore(scriptElement, fjs);
    })(window, document, 'script', '_csc', 'https://csc-sdk.netlify.app/', clientId);
  }
  
  useEffect(()=>{
    initializeScript("5f92a62013332e0f667794dc")
  },[])

  return (
    <div className="App">
     
      <div >
        {/* <Router>
            <Routes>
              <Route exact path="/" element={<Client/>}></Route>
              <Route exact path="/one/:id" element={<One/>}></Route> 
            </Routes>
        </Router> */}
        <One/>
      </div>
      
    </div>
  );
}
export default App;