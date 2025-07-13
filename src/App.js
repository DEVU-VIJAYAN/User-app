import logo from './logo.svg';
import './App.css';
import AddUser from './component/AddUser';
import SearchUser from './component/SearchUser';
import DeleteUser from './component/DeleteUser';
import ViewUser from './component/ViewUser';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
  
    <BrowserRouter>
    <Routes>

    <Route path="/" element={<AddUser/>}/>
    <Route path="/SearchUser" element={<SearchUser/>}/>
    <Route path="/DeleteUser" element={<DeleteUser/>}/>
    <Route path="ViewUser" element={<ViewUser/>}/>

    </Routes>
    </BrowserRouter>


  );
}

export default App;
