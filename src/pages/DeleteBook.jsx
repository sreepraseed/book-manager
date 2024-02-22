import React, { useState } from 'react';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useSnackbar } from 'notistack';

const DeleteBook = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();

  const handleDeleteBook = () => {
    setLoading(true);
    axios
      .delete(`http://localhost:5555/books/${id}`)
      .then(() => {
        setLoading(false);
        enqueueSnackbar('Book Deleted successfully', { variant: 'success' });
        navigate('/');
      })
      .catch((error) => {
        setLoading(false);
        // alert('An error happened. Please Chack console');
        enqueueSnackbar('Error', { variant: 'error' });
        console.log(error);
      });
  };
  
  return (
    <div className='container p-4'>
  <BackButton />
  <h1 className='text-3xl my-4'>Delete Book</h1>
  {loading ? <Spinner /> : ''}
  <div className='d-flex flex-column align-items-center border border-primary rounded-3 w-75 p-4 mx-auto'>
    <h3 className='text-2xl'>Are You Sure You want to delete this book?</h3>

    <button
      className='btn btn-danger p-4 text-white mt-4 w-100'
      onClick={handleDeleteBook}
    >
      Yes, Delete it
    </button>
  </div>
</div>
  )
}

export default DeleteBook;
