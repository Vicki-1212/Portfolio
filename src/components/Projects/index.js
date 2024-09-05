import Header from '../Header'
import "./index.css"
import { IoLinkSharp } from "react-icons/io5";

const Projects = () => {
    return (
        <div className="app-container">
            <Header />
            <div className="project-app-container">
                <h1 className="project-heading">My Projects</h1>
                <div className="project-container">
                    <div className="project-card-container">
                        <img src="https://res.cloudinary.com/dtnwl3ron/image/upload/v1725460128/u7hk1gvlet9z5zarhffb.webp" alt="Ecommerce-image" className="project-image" />
                        <div className="name-link-container">
                            <h1 className="project-name">Nxt Trendz</h1>
                            <div className="link-container">
                                <IoLinkSharp size={20} />
                                <a href="https://vigneshtrendz.ccbp.tech" target="_blank" className="link">Visit</a>
                            </div>
                            
                        </div>
                        <p className="project-description">An e-commerce website, or electronic commerce website, is a virtual storefront that allows customers to buy and sell products and services online.Browse our collections today and find your new favorites!</p>
                    </div>
                    <div className="project-card-container">
                        <img src="https://res.cloudinary.com/dtnwl3ron/image/upload/v1725462569/mhe7peximisuuv4cbyrn.png" alt="job-search-image" className="project-image"/>
                        <div className="name-link-container">
                            <h1 className="project-name">Jobby</h1>
                            <div className="link-container">
                                <IoLinkSharp size={20} />
                                <a href="https://vigneshjobby.ccbp.tech" target="_blank" className="link">Visit</a>
                            </div>
                        </div>
                        <p className="project-description">An employment website is a website that deals specifically with employment.Many employment websites are designed to allow employers to post job requirements for a position to be filled and are commonly known as job boards.</p>
                    </div>
                    <div className="project-card-container">
                        <img src="https://res.cloudinary.com/dtnwl3ron/image/upload/v1725470418/mexgbyt6v6xuqvvig06t.webp" alt="job-search-image" className="project-image"/>
                        <div className="name-link-container">
                            <h1 className="project-name">Nxt Watch</h1>
                            <div className="link-container">
                                <IoLinkSharp size={20} />
                                <a href="https://vickinxtwatch.ccbp.tech" target="_blank" className="link">Visit</a>
                            </div>
                        </div>
                        <p className="project-description">Discover, share, and experience a world of video content like never before with Vedia. Our platform is designed for both creators and viewers to connect, inspire, and engage through the power of video.
                        </p>
                    </div>
                    <div className="project-card-container">
                        <img src="https://res.cloudinary.com/dtnwl3ron/image/upload/v1725471216/eorxijtntrkhfc9nrpbc.jpg" alt="job-search-image" className="project-image"/>
                        <div className="name-link-container">
                            <h1 className="project-name">Wikipedia</h1>
                            <div className="link-container">
                                <IoLinkSharp size={20} />
                                <a href="https://vigwikipedia.ccbp.tech" target="_blank" className="link">Visit</a>
                            </div>
                        </div>
                        <p className="project-description">Wikipedia is a free online encyclopedia that anyone can edit.The content is created and maintained by a community of editors who follow guidelines to ensure accuracy and neutrality.
                        </p>
                    </div>
                    <div className="project-card-container">
                        <img src="https://res.cloudinary.com/dtnwl3ron/image/upload/v1725512677/ntwxbixhnt19ieupewhx.png" alt="job-search-image" className="project-image"/>
                        <div className="name-link-container">
                            <h1 className="project-name">Todo App</h1>
                            <div className="link-container">
                                <IoLinkSharp size={20} />
                                <a href="https://todowebiste.ccbp.tech" target="_blank" className="link">Visit</a>
                            </div>
                        </div>
                        <p className="project-description">TodoApp is a user-friendly productivity tool designed to help you manage your tasks efficiently.TodoApp aims to streamline your task management  focused, and on top of your responsibilities.
                        </p>
                    </div>
                    <div className="project-card-container">
                        <img src="https://res.cloudinary.com/dtnwl3ron/image/upload/v1725512889/yk09qjzrkwmojawnihqm.webp" alt="job-search-image" className="project-image"/>
                        <div className="name-link-container">
                            <h1 className="project-name">Quiz Game</h1>
                            <div className="link-container">
                                <IoLinkSharp size={20} />
                                <a href="https://vickiquizgame.ccbp.tech" target="_blank" className="link">Visit</a>
                            </div>
                        </div>
                        <p className="project-description">QuizMaster is perfect for trivia lovers of all ages, offering a fun and educational way to test and expand your knowledge while competing with others or enjoying some solo play.
                        </p>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects