
import './App.css';
import socketIO from 'socket.io-client';

const socket = socketIO.connect('http://localhost:5000')

function App() {
  return (
    <div className="App">
      <h1>Welcome</h1>
    </div>
  );
}

export default App;
