import React, { Component } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import Room from './pages/Room'
import Roomlogin from './pages/Roomlogin'
import Homepage from './pages/Homepage'
import Whiteboard from './pages/Whiteboard'
import MessageBox from './components/MessageBox'

class App extends Component {
  render() {
    return (
      <div className="App">
         <>
      <div>
        <Toaster
            position = 'top-right'  
            toastOptions = {{
              success:{
                theme:{
                  primary: "green-400",
                },
              },
            }}
        ></Toaster>
      </div>
      <div className="App">
        <Router>
          <Routes>
            <Route path='/' element={<Homepage/>} exact/>
            <Route path="/room/:roomId" element={<Room/>}/>
            <Route path="/room/:roomId/whiteboard" element={<Whiteboard/>}/>
            <Route path="/room" element={<Roomlogin/>}/>
            <Route path="/room/:roomId/messagebox" element={<MessageBox/>}/>
          </Routes>
        </Router>
      </div>
    </>
      </div>
    );
  }
}

export default App;
