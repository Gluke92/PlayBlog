import {useState} from 'react';

const Home = () => {

    // let name = 'Devorah';
    const [name, setName] = useState('Devorah');
    const [age, setAge] = useState(1.8);


    const handleClick = (name) => {
        if (name === 'Daddy') {
            setName('Devorah');
            setAge(1.8);
        }
        else {
        setName('Daddy');
        setAge(29);
        }
        // name = 'Daddy';
    }

    return (  
        <div className="home">
            <h1>Homepage</h1>
            <button onClick={() => handleClick(name)}>Click Me</button>
            <h2>{name}</h2>
            <p> {name} is {age} years old</p>
        </div>
    );
}
 
export default Home;