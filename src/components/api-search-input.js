import React, { useState } from 'react';

export default ({ search, showJson, apiBase, display }) => {
    const [value, setValue] = useState('');
    return (
        <label>
            <span>{apiBase}</span>
            <input
                onInput={(e) => {
                    setValue(e.target.value);
                    search(value);
                }}
                type='text'/>
            <button onClick={() => {
                search();
                display(value);
            }}>
                <span>Cards</span>
            </button>
            <button onClick={() => {
                showJson();
                display(value);
            }}>
                <span>JSON</span>
            </button>
        </label>
    );
}