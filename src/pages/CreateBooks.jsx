import React, { useState } from 'react';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';

const CreateBooks = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishYear, setPublishYear] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const handleSaveBook = () => {
    const data = {
      title,
      author,
      publishYear,
    };
    setLoading(true);
    axios
      .post('http://localhost:5555/books', data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar('Book Created successfully', { variant: 'success' });
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
  <h1 className='text-3xl my-4'>Create Book</h1>
  {loading ? <Spinner /> : ''}
  <div className='d-flex flex-column border border-primary rounded-3 w-75 p-4 mx-auto'>
    <div className='my-4'>
      <label className='form-label text-xl mr-4 text-gray-500'>Title</label>
      <input
        type='text'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className='form-control border-2 border-gray-500 px-4 py-2 w-full'
      />
    </div>
    <div className='my-4'>
      <label className='form-label text-xl mr-4 text-gray-500'>Author</label>
      <input
        type='text'
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        className='form-control border-2 border-gray-500 px-4 py-2 w-full'
      />
    </div>
    <div className='my-4'>
      <label className='form-label text-xl mr-4 text-gray-500'>Publish Year</label>
      <input
        type='number'
        value={publishYear}
        onChange={(e) => setPublishYear(e.target.value)}
        className='form-control border-2 border-gray-500 px-4 py-2 w-full'
      />
    </div>
    <button className='btn btn-primary p-2 mt-4' onClick={handleSaveBook}>
      Save
    </button>
  </div>
</div>

  );
}

export default CreateBooks