import logo from './styles/pictures/logo.svg';
import image from './styles/pictures/image.svg';
import mailbox from './styles/pictures/mail.svg';
import telegram from './styles/pictures/telegram.svg';
import github from './styles/pictures/git.svg';
import instagram from './styles/pictures/insta.svg';
import './styles/App.css';


function App() {
    return (
        <div className='App'>
            <div className='Info'>
                <div className='Info_block'>
                    <img className='Image' src={logo} alt='logo'/>
                    <div className='Text' id='Info'>
                        <p>Hello there👋!<br/>I am Anton Gotovko</p>
                        <p><b>Developer,<br/>Learner,<br/>and Student</b></p>
                    </div>
                </div>
            </div>
            <div className='About'>
                <a id="Header">About</a>
                <div className="About_block">
                    <img className='Image' src={image} alt='photo'/>
                    <div className="Text" id="Ab">
                        <div className='Text' id='About'>
                            <p>I am a second-year student of the Moscow Technical University of Communications and
                                Informatics, studying in the specialty 'Computer Engineering and Informatics.</p>
                            <p>I know the following programming languages: C++/C#, Java, Python, MySQL.</p>
                        </div>
                        <div className="Links">
                            <a href=""><img src={telegram}/></a>
                            <a href="mailto:lostik369@gmail.com"><img src={mailbox}/></a>
                            <a href=""><img src={github}/></a>
                            <a href=""><img src={instagram}/></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
