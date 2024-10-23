import "./Header.scss"
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <>
    <div className="container">
        <div className="header">
            <div className="header--logo">
              <Link to="/">
              <img className="header--im" src="../../../img/logo.jpg" alt="" />
              </Link>
                
            </div>
            <div className="header--content">
            <Link to="/">
            <h1 >BD CIRCLE KinG GrouP</h1>
            </Link>
            
            </div>
        </div>
    </div>
    </>
  )
}

export default Header