import image from './styles/pictures/image.svg';
import mailbox from './styles/pictures/mail.png';
import telegram from './styles/pictures/telegram.png';
import github from './styles/pictures/github.png';
import instagram from './styles/pictures/instagram.png';

function About() {
    return (
        <div className='Part About'>
            <div className="Header">
                <p>About</p>
            </div>
            <div className="Block">
                <div>
                    <img className='Image' src={image}/>
                </div>
                <div className="Text">
                    <p>I am a second-year student of the Moscow Technical University of Communications and
                        Informatics, studying in the specialty 'Computer Engineering and Informatics.</p>
                    <p>I know the following programming languages: C++/C#, Java, Python, MySQL.</p>
                    <div className="Links">
                        <a href=""><img src={telegram}/></a>
                        <a href=""><img src={github}/></a>
                        <a href=""><img src={instagram}/></a>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default About;
