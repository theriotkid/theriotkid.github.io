import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
import Cookies from "js-cookie"

const SideBar = ({ menuAct1, menuAct2, menuAct3, menuAct4, userData, setIsLoggin }) => {

    const navigate = useNavigate() 

    const logout = async () => {
        const res =  await axios.post('http://localhost:3000/logout')
        if(res.status === 200) {
            Cookies.remove('auth')
            setIsLoggin(false)
            navigate('/')
        } else(
            console.log('err')
        )
    }
    return (

        <div style={{
            position: 'fixed',
            left: 0
        }}>

            <div className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark sideWrap" style={{ width: 280, height: '100vh' }} id="sideWrap">
                <div href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none titleSide">
                    <i className="fas fa-cubes fa-2x me-2 logoMenu" style={{ color: '#ff6219' }} />
                    <span className="fs-4 t">Menus</span>
                </div>
                <hr />
                <ul className="nav nav-pills flex-column mb-auto">
                    <li className="my-1">
                        <Link to={'/admin/dashboard'} className={`nav-link sideLink text-white d-flex ${menuAct1} align-items-center w-100`}>
                            <i className="fa-solid fa-gauge-high mb-0 fs-3" />
                            <p className="ps-3 mb-0 fs-5 t">Dashboard</p>
                        </Link>
                    </li>
                    <li className="my-1" >
                        <Link to={'/admin/upload'} className={`nav-link sideLink text-white d-flex ${menuAct2} align-items-center w-100 `}>
                            <i className="fa-solid fa-file-arrow-up fs-2" />
                            <p className="ps-3 mb-0 fs-5 t">Upload Content</p>
                        </Link>
                    </li>
                    <li className="my-1">
                        <Link to={'/admin/edit'} className={`nav-link sideLink text-white d-flex ${menuAct3} align-items-center w-100`}>
                            <i className="fa-solid fa-pen-to-square fs-3" />
                            <p className="ps-3 mb-0 fs-5 t">Edit Profile</p>
                        </Link>
                    </li>
                    <li className="my-1">
                        <Link to={'/'} className={`nav-link sideLink text-white d-flex ${menuAct4} align-items-center w-100`}>
                            <i className="fa-solid fa-circle-arrow-left fs-3"></i>
                            <p className="ps-3 mb-0 fs-5 t">Back to Home</p>
                        </Link>
                    </li>
                </ul>
                <hr />
                {userData.map((item) => {
                    return (
                        <div className="dropdown">
                            <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                <img src={`${item.pics}`} alt={'true'} width={32} height={32} className="rounded-circle me-2" />
                                <strong className="text-capitalize t">{item.username}</strong>
                            </a>
                            <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
                                <li><a className="dropdown-item" to={'/'} onClick={() => {
                                    if(confirm('apakah anda yakin akan logout?')){
                                        logout()
                                    }
                                }}>Sign out</a></li>
                                <li><Link className="dropdown-item " to={"/"}>Back to Home Page</Link></li>
                            </ul>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default SideBar