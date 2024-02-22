import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useSnackbar } from 'notistack';

const ShowBook = () => {
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/books/${id}`);
        setBook(response.data);
        setLoading(false);
      } catch (error) {
        enqueueSnackbar('Error', { variant: 'error' });
        console.log(error);
      }
    };

    fetchBook();
  }, [id, enqueueSnackbar]);
  
  return (
    <div className='p-4'>
      <BackButton />
      <h1 className='text-3xl my-4'>Book Details</h1>
      {loading ? <Spinner /> : ''}
      {book && (
        <div className='border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
          <h2 className='text-2xl mb-4'>{book.title}</h2>
          <p className='text-xl mb-4'>Author: {book.author}</p>
          <p className='text-xl mb-4'>Publish Year: {book.publishYear}</p>
        </div>
      )}
    </div>
  );
};

export default ShowBook;