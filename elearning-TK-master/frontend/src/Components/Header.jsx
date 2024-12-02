import axios from "axios"
import Cookies from "js-cookie"
import { useState, useEffect } from "react"
import { Link } from 'react-router-dom'

const Header = ({ isLoggin, setIsloggin, act1, act2, act3, act4 }) => {

    const [isScrolled, setIsScrolled] = useState(false)

    const handleScroll = () => {
        if (window.pageYOffset > 50) {
            setIsScrolled(true)
        } else {
            setIsScrolled(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [isLoggin])

    const handleClickNav = () => {
        const offcanvas = document.querySelector('.offcanvas')
        const backdrop = document.querySelector('.offcanvas-backdrop')
        if (offcanvas && backdrop) {
            offcanvas.classList.remove('show')
            backdrop.classList.remove('show')
        }

    }

    const logout = async () => {
        const res =  await axios.post('http://localhost:3000/logout')
        if(res.status === 200) {
            Cookies.remove('auth')
            setIsloggin(false)
        } else(
            console.log('err')
        )
    }

    return (
        <div className="fixed-top shadow" style={{
            zIndex: 9999,
            backgroundColor: '#FFFFFF'
        }}>
            <nav className={`navbar navbar-expand-lg ${isScrolled ? 'bg-dark navbar-dark text-white' : ''}`} aria-label="Offcanvas navbar large">
                <div className="d-flex justify-content-between align-items-center w-100 px-3">
                    <div className="logo justify-content-center d-flex align-items-center">
                        <i className="fas fa-cubes fa-2x" style={{ color: '#ff6219' }} />
                        <h4 className="ps-2 pt-2">Elearning TK</h4>
                    </div>
                    <button className={`navbar-toggler ${isScrolled ? 'bg-light' : ''}`} type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar2" aria-controls="offcanvasNavbar2">
                        <i className={`fa-solid fa-bars ${isScrolled ? 'text-black' : ''}`} />
                    </button>
                    <div className="offcanvas offcanvas-end text-white" tabIndex={-1} id="offcanvasNavbar2" aria-labelledby="offcanvasNavbar2Label" data-bs-scroll="true">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title text-black" id="offcanvasNavbar2Label">Menus</h5>
                            <button type="button" className="btn-close btn-close-dark" data-bs-dismiss="offcanvas" aria-label="Close" />
                        </div>
                        <div className="offcanvas-body" style={{ fontSize: 18 }}>
                            <ul className="navbar-nav flex-grow-1 justify-content-center text-black">
                                <li className="nav-item">
                                    <Link to={'/'} className={`nav-link ${act1}`} onClick={handleClickNav}>Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={'/pembelajaran'} className={`nav-link ${act2}`} onClick={handleClickNav}>Pembelajaran</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className={`nav-link ${act3}`} to={'/info'} onClick={handleClickNav}>Info</Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <div className={`nav-link dropdown-toggle ${act4}`} role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Admin
                                    </div>
                                    {isLoggin ? (
                                        <ul className="dropdown-menu mb-3">
                                            <li><Link className="dropdown-item nav-underline" to="/admin/dashboard" onClick={handleClickNav}>Dashboard</Link></li>
                                            <li><Link className="dropdown-item" to="/admin/upload" onClick={handleClickNav}>Upload</Link></li>
                                            <li><Link className="dropdown-item" to="/admin/edit" onClick={handleClickNav} >Edit Profile</Link></li>
                                        </ul>
                                    ) : (
                                        <ul className="dropdown-menu mb-3">
                                            <li className="dropdown-item nav-underline btn" onClick={() => alert('Please Login to see Admin Page')}>Dasboard</li>
                                            <li className="dropdown-item nav-underline btn" onClick={() => alert('Please Login to see Admin Page')}>Upload</li>
                                            <li className="dropdown-item nav-underline btn" onClick={() => alert('Please Login to see Admin Page')}>Edit Profile</li>
                                        </ul>
                                    )}
                                </li>
                            </ul>

                            <div className="loginBtn">
                                {isLoggin ? (
                                    <button className={`text-decoration-none btn fw-bolder ${isScrolled ? 'btn-danger ' : 'btn-danger'}`} onClick={() => {
                                        if (confirm('Apakah Anda Ingin Logout?')) {
                                            logout()
                                        }
                                    }}>Logout</button>
                                ) : (
                                    <Link to={"/login"} className={`text-decoration-none btn fw-bolder ${isScrolled ? 'btn-light ' : 'btn-dark'}`}>Login</Link>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header