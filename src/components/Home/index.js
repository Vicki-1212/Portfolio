import Header from '../Header'
import './index.css'
import resume from '../../assets/Resume.pdf'

const Home = () => {
    return (
        <div className="app-container">
            <Header />
            <div className="home-app-container">
                <div className="home-info-container">
                    <p className="greeting-text">Hi,</p>
                    <h1 className="name-text">I'm <span className="name">Vignesh</span></h1>
                    <p className="course-details">Full stack Web Developer</p>
                    <a href={resume} download="Resume" target="_blank">
                        <button type="button" className="resume-button">Resume</button>
                    </a>
                </div>
                <img src="https://res.cloudinary.com/dtnwl3ron/image/upload/v1724851779/mqf7fxfwzgyvnqwn2zxk.svg" alt="deign-image" className="home-image"/>
            </div>
        </div>
    )
}

export default Home