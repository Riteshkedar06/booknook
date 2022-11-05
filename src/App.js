
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Explore from './components/Explore';
import { Routes, Route } from "react-router-dom";
import Home from './components/Home.js';
import AddBook from './components/AddBook';
import EditBook from './components/EditBook';
import BookDetail from './components/BookDetail';
import RequestBook from './components/RequestBook';
import ChatPage from './components/ChatPage';
import Authentication from './components/Authentication';




function App() {
  return (
    <div className="app">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/explore' element={<Explore />} />
        <Route path='/addbook' element={<AddBook />} />
        <Route path='/edit/:id' element={<EditBook />} />
        <Route path='/login' element={<Authentication />} />
        <Route path='/explore/:id' element={<BookDetail />} />
        <Route path='/request' element={<RequestBook />} />
        <Route path='/chat' element={<ChatPage />} />
      </Routes>
    </div>
  );
}

export default App;
