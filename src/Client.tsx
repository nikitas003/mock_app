import React from 'react';
import { Link } from 'react-router-dom';

// const AMP_URL = 'https://csc-amp-demo.netlify.app';

const Client=()=>{

    const id1 = "CS-1";
    const id2 = "CS-2";
    const id3 = "CS-3";

  return(
    <div>
        <Link to={`./one/${id1}`}>Client Story1</Link>
    <br/>
        <Link to={`./one/${id2}`}>Client Story2</Link>
        <br/>

        <Link to={`./one/${id3}`}>Client Story3</Link>
        <br/>
    </div>
  );
}
export default Client;