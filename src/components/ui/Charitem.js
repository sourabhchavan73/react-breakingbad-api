import React from 'react'

function Charitem( {item}) {
    return (
        <div className="flip-card">
            <div className="flip-card-inner">
                <div className="flip-card-front">
                    <img src={item.img} alt="Avatar" style={{width:"300px", height:"100%"}} />
                </div>

                <div className="flip-card-back">
                    <h1>{item.name}</h1>
                    <h2>{item.nickname}</h2>
                    <h3>{item.occupation[0]}</h3> 
                    <h3>Apperence in  {`season ${item.appearance}`}</h3> 
                </div>
            </div>
        </div>
    )
}

export default Charitem
