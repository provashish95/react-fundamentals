import React, { useState } from 'react';


const Profession = () => {
    const name = "provashish";
    const [counts, setCounts] = useState(0);

    const plus = () => {
        /* const oldCount = counts;
        const newCount = oldCount + 1;
        setCounts(newCount); */
        setCounts(counts + 1);
    }
    const minus = () => {
        /*   const oldCount = counts;
          const newCount = oldCount - 1;
          setCounts(newCount); */
        if (counts <= 0) {
            return;
        } else {
            setCounts(counts - 1);
        }

    }

    //console.log(counts);

    return (
        <div>
            <h3>{name}</h3>
            <h4>Web Developer</h4>
            <h1>{counts}</h1>
            <div className="count mt-5">
                <button className=" ms-3 p-3" onClick={plus}>+</button>
                <button className=" ms-3 p-3" onClick={minus}>-</button>
            </div>
        </div>
    );
};

export default Profession;