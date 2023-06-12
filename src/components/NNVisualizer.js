import { useState } from 'react';
import NNGraph from './NNGraph';

function NNVisualizer() {
    const [xOne, setXOne] = useState(1);
    const [weightOne, setWeightOne] = useState(1);
    const [biasOne, setBiasOne] = useState(1);
    const [weightTwo, setWeightTwo] = useState(1);
    const [biasTwo, setBiasTwo] = useState(1);
    return (<>
        <NNGraph x1={xOne} w1={weightOne} b1={biasOne} w2={weightTwo} b2={biasTwo}></NNGraph>
        <div className='text-center'>
            x1: <input type="text" value={xOne} onChange={(event) => setXOne(event.target.value)}></input>,
            w1: <input type="text" value={weightOne} onChange={(event) => setWeightOne(event.target.value)}></input>,
            b1: <input type="text" value={biasOne} onChange={(event) => setBiasOne(event.target.value)}></input>,
            w2: <input type="text" value={weightTwo} onChange={(event) => setWeightTwo(event.target.value)}></input>,
            b2: <input type="text" value={biasTwo} onChange={(event) => setBiasTwo(event.target.value)}></input>
        </div>
        </>
    )
}

export default NNVisualizer;