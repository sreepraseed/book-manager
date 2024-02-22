import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';

const ShowBook = () => {
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/books/${id}`)
      .then((response) => {
        setBook(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className='container p-4'>
  <BackButton />
  <h1 className='display-3 my-4'>Show Book</h1>
  {loading ? (
    <Spinner />
  ) : (
    <div className='border border-primary rounded p-4'>
      <div className='my-4'>
        <h5 className='text-muted'>Id</h5>
        <p className='lead'>{book._id}</p>
      </div>
      <div className='my-4'>
        <h5 className='text-muted'>Title</h5>
        <p className='lead'>{book.title}</p>
      </div>
      <div className='my-4'>
        <h5 className='text-muted'>Author</h5>
        <p className='lead'>{book.author}</p>
      </div>
      <div className='my-4'>
        <h5 className='text-muted'>Publish Year</h5>
        <p className='lead'>{book.publishYear}</p>
      </div>
      <div className='my-4'>
        <h5 className='text-muted'>Create Time</h5>
        <p className='lead'>{new Date(book.createdAt).toString()}</p>
      </div>
      <div className='my-4'>
        <h5 className='text-muted'>Last Update Time</h5>
        <p className='lead'>{new Date(book.updatedAt).toString()}</p>
      </div>
    </div>
  )}
</div>


  );
};

export default ShowBook;
