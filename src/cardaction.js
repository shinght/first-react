import React, { useState } from 'react';

function CardAction(props) {

    // Declare the state called likeValues and initialize it with the value of 40
    // Use the function changeLikeValues whenever the value of likeValues needs to be updated.
   
    const [likeValues, changeLikeValues] = useState(parseInt(props.likes))
    const [dislikeValues, changeDislikeValues] = useState(parseInt(props.dislikes))

    const changeLikes=()=>{
        // Change the value of state likeValues using changeLikeValues
        changeLikeValues(likeValues + 1)
    }

    const changeDislike=()=>{
        changeDislikeValues(dislikeValues + 1)
    }

    return ( 
        <div>
            <button onClick={changeLikes}>Likes</button>
            &nbsp;
            &nbsp;
            {likeValues}
            &nbsp;
            &nbsp;
            <button onClick={changeDislike}>Dislikes</button>
            &nbsp;
            &nbsp;
            {dislikeValues}
        </div>
     );
}

export default CardAction;