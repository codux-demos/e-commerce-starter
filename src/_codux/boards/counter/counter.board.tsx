import { useState } from 'react';
import { createBoard } from '@wixc3/react-board';
import { Counter } from '../../../components/counter/counter';

export default createBoard({
    name: 'Counter',
    Board: () => {
        const [count, setCount] = useState(0);
        return <Counter count={count} onChange={setCount} />
    },
    isSnippet: true,
});
