import React, { useState } from 'react'

function Search( { getQuery }) {
    const [value, setValue] = useState();

    const onChange = (query) => {
        setValue(query);
        getQuery(query);
    }

    return (
        <div className="search">
            <form style={{width: "100%"}}>
                <input 
                    type="text"
                    className="form-control"
                    value={value}
                    onChange={(e) => onChange(e.target.value)} // to take input value
                    placeholder="Seach Hero by name"
                />
            </form>
        </div>
    )
}

export default Search
