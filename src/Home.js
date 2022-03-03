import {useState} from 'react';
import BlogList from './Bloglist';

const Home = () => {

    // let name = 'Devorah';
    // const [name, setName] = useState('Devorah');
    // const [age, setAge] = useState(1.8);


    // const handleClick = (name) => {
    //     if (name === 'Daddy') {
    //         setName('Devorah');
    //         setAge(1.8);
    //     }
    //     else {
    //     setName('Daddy');
    //     setAge(29);
    //     }
    //     // name = 'Daddy';
    // }

    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    ])

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }


    return (  
        <div className="home">
            <BlogList blogs={blogs} title='All blogs!' handleDelete={handleDelete}/>
            {/* <BlogList blogs={blogs.filter((blog) => blog.author === 'mario')} title="Mario's blogs!"/> */}
        </div>
    );
}
 
export default Home;