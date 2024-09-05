import Header from '../Header'
import './index.css'

const Skills = () => {
    return (
        <div className="app-container">
            <Header />
            <div className="skills-app-container">
                <h1 className="skills-heading">My Skills</h1>
                <div className="skills-container">
                    <h1 className="front-end-heading">Front End Skills</h1>
                    <div className="front-end-skills-container">
                        <div className="card-container">
                            <img src="https://res.cloudinary.com/dtnwl3ron/image/upload/v1725454465/slknipjip0spyy6g1tmz.svg" alt="Html-image" className="image" />
                            <p className="description">HTML</p>
                        </div>
                        <div className="card-container">
                            <img src="https://res.cloudinary.com/dtnwl3ron/image/upload/v1725454821/t4cnjyiynfzzm1eblwtv.svg" alt="css-image" className="image" />
                            <p className="description">CSS</p>
                        </div>
                        <div className="card-container">
                            <img src="https://res.cloudinary.com/dtnwl3ron/image/upload/v1725455061/aeg7givdz3381yn7bxuw.png" alt="bootStrap-image" className="image" />
                            <p className="description">BootStrap</p>
                        </div>
                        <div className="card-container">
                            <img src="https://res.cloudinary.com/dtnwl3ron/image/upload/v1725455170/rqcqbkwpiueklnfygeba.png" alt="javaScript-image" className="image"/>
                            <p className="description">Java Script</p>
                        </div>
                        <div className="card-container">
                            <img src="https://res.cloudinary.com/dtnwl3ron/image/upload/v1725457197/if5nsxq9xka8vovmqfu9.svg" alt="react-image" className="image"/>
                            <p className="description">React JS</p>
                        </div>
                    </div>
                    
                </div>
                <div className="skills-container">
                    <h1 className="back-end-heading">Back End Skills</h1>
                    <div className="back-end-skills-container">
                        <div className="card-container">
                            <img src="https://res.cloudinary.com/dtnwl3ron/image/upload/v1725457680/nllr6yoyha3lslfbucef.webp" alt="python-image" className="image" />
                            <p className="description">Python</p>
                        </div>
                        <div className="card-container">
                            <img src="https://res.cloudinary.com/dtnwl3ron/image/upload/v1725457852/zh6zghygeho7tpoizurx.png" alt="java-image" className="image"/>
                            <p className="description">Java</p>
                        </div>
                        <div className="card-container">
                            <img src="https://res.cloudinary.com/dtnwl3ron/image/upload/v1725457932/rvvrj7g56oplbnlcxhxu.webp" alt="sql-image" className="image"/>
                            <p className="description">SQL</p>
                        </div>
                        <div className="card-container">
                            <img src="https://res.cloudinary.com/dtnwl3ron/image/upload/v1725458040/rrygi67iszujqt5dusyh.png" alt="spring-boot-image" className="image"/>
                            <p className="description">Spring Boot</p>
                        </div>
                        <div className="card-container">
                            <img src="https://res.cloudinary.com/dtnwl3ron/image/upload/v1725458153/r71z9mjojmzwzfugbzzb.webp" alt="git-image" className="image" />
                            <p className="description">Git Hub</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills