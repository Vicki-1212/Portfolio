import {Link} from 'react-router-dom'
import './index.css'

const Header = () => {
    return (
        <div className="header-container">
            <h1 className="logo">V</h1>
            <ul className="nav-container">
                <Link to="/" className="nav-link">
                    <li className="nav-items">Home</li>
                </Link>

                <Link to="/about" className="nav-link">
                    <li className="nav-items">About</li>
                </Link>

                <Link to="/skill" className="nav-link">
                    <li className="nav-items">Skills</li>
                </Link>

                <Link to="/project" className="nav-link">
                    <li className="nav-items">Projects</li>
                </Link>
            </ul>
        </div>
    )
}

export default Header