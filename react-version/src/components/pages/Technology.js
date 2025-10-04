import { useState } from 'react';
import data from '../../data.json';

function Technology() {
    const [selectedTech, setSelectedTech] = useState(0);
    const technologies = data.technology;

    const currentTech = technologies[selectedTech];

    if (!currentTech) {
        return <div>Loading...</div>;
    }
    return (
        <div className="technology-wrapper">
            <h3><span className="number-bold">03</span> SPACE LAUNCH 101</h3>
            <div className="main-container technology-page">
                <div className="buttons-num">
                    {technologies.map((_, index) => (
                        <button
                            key={index}
                            className={`num-btn ${selectedTech === index ? 'btn-active' : ''}`}
                            onClick={() => setSelectedTech(index)}>
                            {index + 1}
                        </button>
                    ))}
                </div>

                <div className="main-content">
                    <h4>THE TERMINOLOGY</h4>
                    <h1>{currentTech.name}</h1>
                    <p>{currentTech.description}</p>
                </div>

                <img
                    src={currentTech.images.portrait}
                    alt={currentTech.name}
                />
            </div>
        </div>
    );
}

export default Technology;