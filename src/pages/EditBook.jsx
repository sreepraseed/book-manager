import React, { useState, useEffect } from 'react';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useSnackbar } from 'notistack';

const EditBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishYear, setPublishYear] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const {id} = useParams();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    setLoading(true);
    axios.get(`http://localhost:5555/books/${id}`)
    .then((response) => {
        setAuthor(response.data.author);
        setPublishYear(response.data.publishYear)
        setTitle(response.data.title)
        setLoading(false);
      }).catch((error) => {
        setLoading(false);
        alert('An error happened. Please Chack console');
        console.log(error);
      });
  }, [])
  
  const handleEditBook = () => {
    const data = {
      title,
      author,
      publishYear,
    };
    setLoading(true);
    axios
      .put(`http://localhost:5555/books/${id}`, data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar('Book Edited successfully', { variant: 'success' });
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
  <h1 className='text-3xl my-4'>Edit Book</h1>
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
    <button className='btn btn-primary p-2 mt-4' onClick={handleEditBook}>
      Save
    </button>
  </div>
</div>

  )
}

export default EditBook