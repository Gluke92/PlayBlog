import React from 'react';
import {Link} from 'react-router-dom';

const BlogList = ({blogs, title, handleDelete}) => {
    // const blogs = props.blogs;
    // const title = title.blogs;
    // destructure directly above

    return (
        <div className="blog-list">
            <h1>{title}</h1>
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <Link to={`/blogs/${blog.id}`}>
                        <h2>{blog.title}</h2>
                        <p>Written by {blog.author} </p>
                    </Link>
                    <button onClick={() => handleDelete(blog.id)}>delete blog</button>
                </div>))}
        </div>
      );
}
 
export default BlogList;