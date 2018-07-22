import React from 'react';
import Card from './Card';
import './CardList.css';

const CardList = ({ robots }) => {
    return (
        <div className="card-list">
            {
                robots.map((robot, i) => {
                    return <Card key={'robot' + robot.id} name={robot.name} id={robot.id} email={robot.email} />
                })
            }
        </div>
    );
};

export default CardList;