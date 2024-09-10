import React, {useEffect, useState} from 'react'

interface Data {
    id: number;
    title: string;
    body : string;
}

function TextUseEffect() {
    const [data, setData] = useState<Data | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    // useEffect(() => {
    //     const fetchData = async () => {
    //       try {
    //         const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    //         const result: Data = await response.json();
    //         setData(result);
    //         setLoading(false);
    //       } catch (error) {
    //         console.error('Error fetching data:', error);
    //         setLoading(false);
    //       }
    //     };
    
    //     fetchData();
    //   }, []); 

        useEffect(() => {
            const fetchData = async () => {
                try {
                    const res = await fetch('https://jsonplaceholder.typicode.com/posts/9');
                    const result: Data = await res.json();
                    setData(result);
                    setLoading(false);
                } catch (error) {
                    console.log(error);
                    setLoading(false);
                }
            }

            fetchData();
        }, []);
    
      if (loading) {
        return <div>Loading...</div>;
      }
    
      if (!data) {
        return <div>No data available</div>;
      }

  return (
    <div>
        <h1>{data.title}</h1>
        <p>{data.body}</p>
    </div>
  )
}

export default TextUseEffect