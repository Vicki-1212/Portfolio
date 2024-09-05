import {Chrono} from 'react-chrono'
import Header from '../Header'
import './index.css'

const items= [{title: "2023 - 2024"}, {title: "2018 - 2022"}, {title: "2017 - 2018"}, {title: "2015 - 2016"}]

const About = () => {
    return (
        <div className="app-container">
            <Header />
            <div className="education-details-container">
                <div className="greet-heading">My Education</div>
                <Chrono mode="VERTICAL_ALTERNATING" items={items} cardHeight={205} disableToolbar theme={{secondary: "", cardBgColor: 'White', titleColorActive: ''}} mediaSettings={{ align: 'left', fit: 'contain' }}>
                    <div className="card">
                        <h1 className="education-heading">Nxtwave Disruptive Technologies</h1>
                        <p className="education-info">Full Stack Web Development</p>
                        <p className="education-info">Industry Ready Certification in Java Full-Stack Development</p>
                        <p className="education-info">CGPA: 8.2</p>
                    </div>
                    <div className="card">
                        <h1 className="education-heading">Graduation</h1>
                        <p className="education-info">Hindusthan College of Engineering and Technology, Coimbatore</p>
                        <p className="education-info">BTech (Bachelor of Technology) Information Technology</p>
                        <p className="education-info">CGPA: 7.98</p>
                    </div>
                    <div className="card">
                        <h1 className="education-heading">High Secondary School</h1>
                        <p className="education-info">S.B.K Higher Secondary School, Virudhunagar</p>
                        <p className="education-info">Computer Science</p>
                        <p className="education-info">Percentage: 69.25</p>
                    </div>
                    <div className="card">
                        <h1 className="education-heading">Secondary School Of Certificate</h1>
                        <p className="education-info">S.B.K Higher Secondary School, Virudhunagar</p>
                        <p className="education-info">General</p>
                        <p className="education-info">Percentage: 90.4</p>
                    </div>
                </Chrono>
            </div>
        </div>
    )
}

export default About