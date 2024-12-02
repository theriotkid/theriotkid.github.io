import { useState } from "react"
import { Link, json, useNavigate } from "react-router-dom"
import axios from 'axios'
import Cookies from 'js-cookie'

const PageLogin = ({ setIsLogin, setUserData }) => {
    const [username, setusername] = useState('')
    const [pass, setpass] = useState('')
    const navigate = useNavigate() //untuk menavigasikan ke halaman yang akan dituju
    const cookie = document.cookie

    const handleSubmit = async (e) => {
        e.preventDefault()
        const data = {
            username: username,
            password: pass
        }

        try {
            const res = await axios.post('http://localhost:3000/log', data)
            const respData = res.data['data']
            if (res.status === 200) {
                Cookies.set('auth', cookie)//untuk men set nama cookienya 
                alert(`login succes! hello ${res.data['data'][0].username}`)
                setIsLogin(true) 
                setUserData(respData)
                navigate('/')
            }
        } catch (error) {
            alert('data tidak ditemukan')
            setIsLogin(false)
            setUserData([])
            console.error('error: ', error)
        }
    }

    return (
        <div>
            <div className="">
                <div className="d-flex wrapperLogin">
                    <div className="quotes d-flex align-items-center justify-content-center" style={{
                        width: '50%'
                    }}>
                        <blockquote className="w-50 ">
                            <p className="fs-5 fw-bolder">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo cum fugiat odio dolor delectus ab illo ad quis rem quidem!</p>
                            <p className="fs-5">- Yoona Savirah Kholid</p>
                        </blockquote>
                    </div>
                    <div className="loginForm d-flex flex-column py-3 justify-content-center align-items-center" style={{
                        width: '50%',
                        height: '100vh'
                    }}>
                        <i className="fas fa-cubes fa-2x mb-4" style={{ color: '#ff6219', fontSize: 100 }} />
                        <form className=" w-50">
                            <input type="text" placeholder="Username" className="form-control py-3 mb-4 px-4" style={{
                                borderRadius: '30px'
                            }} id="usernameLogin" value={username} onChange={(e) => setusername(e.target.value)} />
                            <input type="password" placeholder="Password" className="form-control py-3 mb-4 px-4" style={{
                                borderRadius: '30px'
                            }} id="passLogin" value={pass} onChange={(e) => setpass(e.target.value)} />
                            <button className="btn btn-dark w-100 fs-3 fw-bolder" style={{
                                borderRadius: '30px'
                            }} type="submit" onClick={(e) => handleSubmit(e)}>LOGIN</button>
                            <p className="fs-6 text-black-50 text-center mt-4">Lupa Password? <a href="">Hubungi Developer</a></p>
                        </form>

                        <div style={{
                            marginTop: '20%'
                        }} className="d-flex fle">
                            © 2020 Copyright:
                            <a className=" text-black text-decoration-underline mx-2" href="">Yoona</a>
                        </div>
                        <Link to={"/"} className="btn btn-outline-primary btnBackLogin mt-4">Back to Home</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PageLogin