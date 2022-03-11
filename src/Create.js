import React, { useState } from 'react';
import {useHistory} from 'react-router-dom';


const Create = () => {
    const history = useHistory();
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    

    const handleSubmit = (e) => {
        setIsLoading(true);
        e.preventDefault();
        const blog = {title, body, author};
  
        fetch('http://localhost:8000/blogs' , {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(blog)
        })
        .then(() => {
            setIsLoading(false);
            // history.go(-1); can go forward (positive) or backward (negative) in browser history
            history.push('/') //"pushes" stirng into URL path -> redirects HOME
        })
    }
    
    return ( 
        <div className="create">
            <h2>Add a New Blog!</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title:</label>
                <input type='text' required value={title} onChange={(e) => setTitle(e.target.value)}/>
                <label>Body:</label>
                <textarea value={body} onChange={(e) => setBody(e.target.value)}></textarea>
                <label>Author:</label>
                <select value={author} onChange={(e) => setAuthor(e.target.value)}>
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>
                </select>
                {!isLoading && <button>add blog</button>}
                {isLoading && <button disabled>Adding blog...</button>}
            </form>
        </div>
     );
}
 
export default Create;