import {useState, useEffect} from 'react';

const useFetch = (url) => {
    const [data, setData] = useState(null);

    // const [name, setName] = useState('mario');
    const [isPending, setIsPending] = useState(true);

    const [error, setError] = useState(null);

    const handleDelete = (id) => {
        const newData = data.filter(data => data.id !== id);
        setData(newData);
    }

    


    useEffect(() => {
        setTimeout(() => {fetch(url)
        .then(res => {
            if(!res.ok){
                throw Error('could not fetch the data for that resource');
            }   
            return res.json()
        })
        .then((data) => {
            setData(data);
            setIsPending(false);
        })
            .catch(err => {
                setError(err.message);
                setIsPending(false);
            })
    }, 1000);
 }, [url]);

    return ({data, isPending, error, handleDelete});
}
 
export default useFetch;