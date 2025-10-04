import { useState } from 'react';
import data from '../../data.json';

function Crew() {
    const [selectedCrew, setSelectedCrew] = useState(0);
    const crew = data.crew;
    const currentCrew = crew[selectedCrew];

    if (!currentCrew) {
        return <div>Loading...</div>;
    }

    return (
        <div className="crew-wrapper">
            <h3><span className="number-bold">02</span> MEET YOUR CREW</h3>
            <div className="main-container crew-page">
                <div className="main-content">
                    <h4>{currentCrew.role}</h4>
                    <h1>{currentCrew.name}</h1>
                    <p>{currentCrew.bio}</p>
                    <div className="crew-pagination">
                        {crew.map((_, index) => (
                            <button
                                key={index}
                                className={`pagination-dot ${selectedCrew === index ? 'active' : ''}`}
                                onClick={() => setSelectedCrew(index)}
                                aria-label={`Select crew member ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
                <img
                    src={currentCrew.images.png}
                    alt={currentCrew.name}
                />
            </div>
        </div>
    );
}

export default Crew;