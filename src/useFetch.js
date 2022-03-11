
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
        const abortCont = new AbortController();

        setTimeout(() => {fetch(url, {signal: abortCont.signal})
        .then(res => {
            if(!res.ok){
                throw Error('could not fetch the data for that resource');
            }   
            return res.json()
        })
        .then((data) => {
            console.log(data);
            setData(data);
            setIsPending(false);
            setError(null);
        })
            .catch(err => {
                if (err.name === 'AbortError') {
                    console.log('error aborted!');
                } else {
                setError(err.message);
                setIsPending(false);
                }
            })
    }, 1000);

    //cleanup function, to prevent warnings when Home is unmounted, and fetch still runs
    return () => abortCont.abort();
    //aborts the fetch associated with it, rather than running it again
 }, [url]);

    return ({data, isPending, error, handleDelete});
}
 
export default useFetch;