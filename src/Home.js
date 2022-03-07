import {useEffect, useState} from 'react';
import BlogList from './Bloglist';
import useFetch from './useFetch';

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

    // useEffect(() => {
    //     console.log('use effect ran');
    //     console.log(name);
    // }, [name]);
    //use whenever you need to run a bit of code at every render of the DOM
    // pass a dependency array to not have uE happen at every consequent render, post initial/first render
    //if you pass a particular variable you want to track in useState, you can limit useEffect to fire only at that dependency changing

    const {data: blogs, isPending, error, handleDelete} = useFetch('http://localhost:8000/blogs');
    return (  
        <div className="home">
            { error && <div>{error}</div>}
            {isPending && <div>...Loading...</div> }
            {blogs && <BlogList blogs={blogs} title='All blogs!' handleDelete={handleDelete} />}
            {/* <BlogList blogs={blogs.filter((blog) => blog.author === 'mario')} title="Mario's blogs!"/> */}
            {/* <button onClick={() => name === 'mario' ? setName('luigi'): setName('mario')}>change name</button> 
            <p>{name}</p> */}
        </div>
    );
}
 
export default Home;