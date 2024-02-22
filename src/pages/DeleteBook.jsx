import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import axios from 'axios';
import { useSnackbar } from 'notistack';

const DeleteBook = () => {
  const { id } = useParams();
  const history = useHistory();
  const { enqueueSnackbar } = useSnackbar();
  const [loading, setLoading] = useState(false);

  const handleDeleteBook = async () => {
    setLoading(true);

    try {
      await axios.delete(`${process.env.REACT_APP_BACKEND_URL}/books/${id}`);
      setLoading(false);
      enqueueSnackbar('Book Deleted successfully', { variant: 'success' });
      history.push('/');
    } catch (error) {
      setLoading(false);
      enqueueSnackbar('Error', { variant: 'error' });
      console.log(error);
    }
  };

  return (
    <div className='p-4'>
      <BackButton />
      <h1 className='text-3xl my-4'>Delete Book</h1>
      {loading ? <Spinner /> : ''}
      <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
        <p className='my-4'>Are you sure you want to delete this book?</p>
        <button className='p-2 bg-red-300 m-8' onClick={handleDeleteBook}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default DeleteBook;