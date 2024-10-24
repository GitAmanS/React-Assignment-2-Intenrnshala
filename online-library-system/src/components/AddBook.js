import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/actions';
import { useNavigate } from 'react-router-dom';

const AddBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [description, setDescription] = useState('');
  const [rating, setRating] = useState('');
  const [category, setCategory] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = { title, author, description, rating, category };
    dispatch(addBook(newBook));
    navigate('/browse');
  };

  return (


    <div className='add-book'>
          <form className="add-book-form" onSubmit={handleSubmit}>
      <h2>Add a New Book</h2>
      <input 
        type="text" 
        placeholder="Title" 
        value={title} 
        onChange={(e) => setTitle(e.target.value)} 
        required 
      />
      <input 
        type="text" 
        placeholder="Author" 
        value={author} 
        onChange={(e) => setAuthor(e.target.value)} 
        required 
      />
      <textarea 
        placeholder="Description" 
        value={description} 
        onChange={(e) => setDescription(e.target.value)} 
        required 
      />
      <input 
        type="number" 
        placeholder="Rating" 
        value={rating} 
        onChange={(e) => setRating(e.target.value)} 
        required 
      />
      <input 
        type="text" 
        placeholder="Category" 
        value={category} 
        onChange={(e) => setCategory(e.target.value)} 
        required 
      />
      <button type="submit">Add Book</button>
    </form>
    </div>

  );
};

export default AddBook;
