
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Chat from './Components/Chat/Chat';
import Join from './Components/Join/Join';


function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Join/>
    },
    {
      path: '/chat',
      element: <Chat/>
    }
  ])

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
