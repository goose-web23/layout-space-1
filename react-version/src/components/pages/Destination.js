import { useState } from 'react';
import data from '../../data.json';

function Destination() {
    const [selectedDestination, setSelectedDestination] = useState(0);
    const destinations = data.destinations;
    const handlePlanetClick = (index) => {
        setSelectedDestination(index);
    };

    const currentDestination = destinations[selectedDestination];

    if (!currentDestination) {
        return <div>Loading...</div>;
    }

    return (
        <div className="destination-wrapper">
            <h3><span className="number-bold">01</span> PICK YOUR DESTINATION</h3>
            <div className="main-container destination-page">
                <img
                    src={currentDestination.images.png}
                    alt={currentDestination.name}
                />
                <div className="main-content">
                    <ul className="planet-list">
                        {destinations.map((destination, index) => (
                            <li
                                key={destination.name}
                                className={`planet-link ${selectedDestination === index ? 'planet-active' : ''}`}
                                onClick={() => handlePlanetClick(index)}>
                                {destination.name}
                            </li>
                        ))}
                    </ul>

                    <h1>{currentDestination.name}</h1>
                    <p>{currentDestination.description}</p>
                    <div className="divider-main"></div>
                    <div className="about-numbers">
                        <div className="about-element">
                            AVG. DISTANCE
                            <span className="about-num">{currentDestination.distance}</span>
                        </div>
                        <div className="about-element">
                            EST. TRAVEL TIME
                            <span className="about-num">{currentDestination.travel}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Destination;