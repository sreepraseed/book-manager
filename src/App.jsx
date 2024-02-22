import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import CreateBook from './pages/CreateBooks';
import ShowBook from './pages/ShowBook';
import EditBook from './pages/EditBook';
import DeleteBook from './pages/DeleteBook';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Signup from './pages/SignUp'

const App = () => {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path='/home' element={<Home />} />
      <Route path='/home/books/create' element={<CreateBook />} />
      <Route path='/home/books/details/:id' element={<ShowBook />} />
      <Route path='/home/books/edit/:id' element={<EditBook />} />
      <Route path='/home/books/delete/:id' element={<DeleteBook />} />
    </Routes>
    <Footer />
    </>
  );
};

export default App;
