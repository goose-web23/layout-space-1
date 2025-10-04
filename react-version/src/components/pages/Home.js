import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();

    const handleExplore = () => {
        navigate('/destination');
    };

    return (
        <div className="main-container">
            <div className="main-content">
                <h3>SO, YOU WANT TO TRAVEL TO</h3>
                <h1>SPACE</h1>
                <p>Let's face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we'll give you a truly out of this world experience!</p>
            </div>
            <button id="explore" onClick={handleExplore}>EXPLORE</button>
        </div>
    );
}

export default Home;