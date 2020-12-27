import React from 'react';
import './Snake.css'
function Snake(props) {
    return (
        <div >
            {props.dot.map((dot, i) => {
                const styles = {
                    left: `${dot[0]}%`,
                    top: `${dot[1]}%`
                }

                return (<div className="snake-dot" key={i} style={styles}></div>)
            })}



        </div>
    );
}

export default Snake;