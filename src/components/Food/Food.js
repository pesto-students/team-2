import React from 'react';
import './Food.css'
function Food(props) {
    const styles = {
        left: `${props.food[0]}%`,
        top: `${props.food[1]}%`
    }
   
     return (<div className="snake-food" style={styles}></div>)
}

export default Food;