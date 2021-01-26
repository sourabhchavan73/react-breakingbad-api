import React from 'react';
import Charitem from './Charitem';
import loader from '../../Images/loader.gif'

function Chargrid({items, isLoading}) {
    return isLoading ? ( 
        <div className="loader">
            <img  src={loader} alt="loader" />
        </div> ) :

        (
            <section className="container mx-auto" >
                <div className="cards">
                    {items.length > 0 ? items.map((item) => (
                        <Charitem key={item.char_id} item={item} />
                    )) : ( <h5>There is not results for this Search</h5>) }
                </div>
            </section>
        )
}

export default Chargrid
