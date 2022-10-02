import logos from './styles/pictures/logos.png';
import './styles/App.css';


function Home() {
    return (
        <div className='Part Hello'>
            <div className='Block'>
                <div>
                    <img className='Image' src={logos}></img>
                </div>
                <div className='Text'>
                    <p>Hello there!<br/>I am Gotovko Anton</p>
                    <p><b>Developer,<br/>Learner,<br/>and Student</b></p>
                </div>
            </div>
        </div>
    );
}

export default Home;
