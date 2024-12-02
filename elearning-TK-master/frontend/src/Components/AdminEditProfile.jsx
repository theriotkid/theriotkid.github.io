import Cookies from "js-cookie"
import SideBar from "./SideBar"
import NotLogin from "./NotLogin"
import { useState } from "react"
import axios from "axios"


const AdminEditProfile = ({ userData, setIsLoggin, setUserData }) => {
    const isCookie = Cookies.get('auth')
    const [fullName, setFullname] = useState(userData[0].fullName)
    const [age, setAge] = useState(userData[0].age)
    const [address, setAddress] = useState(userData[0].address)
    const [division, setDivision] = useState(userData[0].division)
    const [className, setClassName] = useState(userData[0].class)
    const [password, setPassword] = useState('')
    const [oldPass, setOldPass] = useState('')
    const getUser = async () => {
        const res = await axios.get(`http://localhost:3000/userByID/${userData[0]._id}`)
        setUserData(res.data)
    }

    const handleChangePass = async (e) => {
        e.preventDefault()
        if (oldPass === userData[0].password) {
            if (!oldPass || !password) {
                alert('maaf field harus diisi!')
            } else {
                try {
                    const res = await axios.put(`http://localhost:3000/userUpdatePassword/${userData[0]._id}`)
                    if (res.status === 200) {
                        alert('success change password!')
                    }
                } catch (error) {
                    console.log(error)
                }
            }
        } else {
            alert('maaf password lama harus sama yang dengan di ketikkan!')
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const data = {
            "fullname": fullName,
            "age": age,
            "address": address,
            "class": className,
            "division": division,
        }

        try {
            const update = await axios.put(`http://localhost:3000/userUpdate/${userData[0]._id}`, data)
            if (update.status === 200) {
                alert('success update data!!')
                getUser()
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            {isCookie ? (
                <div style={{
                    paddingLeft: 280
                }} className="contentAdmin">
                    <SideBar menuAct3='active' userData={userData} setIsLoggin={setIsLoggin} />
                    {userData.map((item) => {
                        return (
                            <div className="container py-3">
                                <div className="w-100 d-flex align-items-center flex-column rounded-3" style={{
                                    height: 'vh',
                                    border: '1px solid black',
                                }}>
                                    <div className="w-100 rounded-top-3" style={{
                                        height: '3vh',
                                        borderBottom: '1px solid black',
                                        backgroundColor: '#0d6efd'
                                    }}>
                                    </div>

                                    <div className="bg-light p-2 mt-4 mb-2 rounded-circle" style={{
                                        boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'
                                    }}>
                                        <div className="pictDasboard rounded-circle" style={{
                                            width: 150,
                                            height: 150,
                                            backgroundImage: `url(${item.pics})`,
                                            backgroundPosition: 'center',
                                            backgroundSize: 'cover'
                                        }}></div>
                                    </div>

                                    <h5 style={{
                                        marginBottom: 0
                                    }} className="fw-bolder mt-2 text-capitalize">{item.fullName}</h5>

                                    <div className="d-flex justify-content-center container align-items-center w-100 mt-3 mb-3">
                                        <i className="fa-solid fa-map-location-dot fs-5 " />
                                        <h5 className="fw-bolder ms-2" style={{ marginBottom: 0 }}>{item.address}</h5>
                                    </div>

                                    <div className="w-100 d-flex justify-content-center align-items-center" style={{
                                        height: '7vh',
                                        borderTop: '1px solid black'
                                    }}>
                                        <a href="" className="text-black mx-2">
                                            <i className="fa-brands fa-square-instagram fs-1 sosLink" />
                                        </a>
                                        <a href="" className="text-black mx-2">
                                            <i className="fa-brands fa-square-twitter fs-1 sosLink" />
                                        </a>
                                        <a href="" className="text-black mx-2">
                                            <i className="fa-brands fa-square-facebook fs-1 sosLink" />
                                        </a>
                                        <a href="" className="text-black mx-2">
                                            <i className="fa-brands fa-square-snapchat fs-1 sosLink" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        )
                    })}

                    <div className="container pb-3">
                        <div className="w-100 d-flex align-items-center flex-column rounded-3" style={{
                            height: 'auto',
                            border: '1px solid black',
                        }}>
                            <div className="w-100 rounded-top-3" style={{
                                height: '3vh',
                                borderBottom: '1px solid black',
                                backgroundColor: '#0d6efd'
                            }}>
                            </div>

                            <div className="container py-3 d-flex align-items-center flex-column">
                                <div className="w-100" style={{ backgroundColor: '#f72585' }}></div>
                                <div className=" w-100 rounded-3" style={{
                                    height: 'auto',
                                    border: '1px solid black',
                                    backgroundColor: '#cfe2ff'
                                }}>
                                    <div className="w-100 rounded-top-3 d-flex align-items-center titleUpdate" style={{
                                        height: '4vh',
                                        backgroundColor: '#efb8e0',
                                        borderBottom: '1px solid black'
                                    }}>
                                        <div className="px-1 mx-1 p-0" style={{
                                            borderRight: '1px solid black'
                                        }}>
                                            <h5 style={{ marginBottom: 0, fontWeight: 700 }} className="Thover active">Personal Details</h5>
                                        </div>

                                        <h5 style={{
                                            marginBottom: 0
                                        }} className="px-2 Thover">Change Picture</h5>
                                    </div>

                                    <div className="container">
                                        <div className="w-100 d-flex py-3 formUpdate">
                                            <div className="d-flex align-items-Center pe-2 updateCol" style={{ width: '50%' }}>
                                                <form className="w-100" action="" onSubmit={(e) => handleSubmit(e)}>
                                                    <div className="mb-3">
                                                        <label className="form-label">Fullname</label>
                                                        <input type="text" className="form-control text-capitalize" id="" value={fullName} onChange={(e) => setFullname(e.target.value)} />
                                                    </div>
                                                    <div className="mb-3">
                                                        <label className="form-label">Age</label>
                                                        <input type="number" className="form-control text-capitalize" id="" value={age} onChange={(e) => setAge(e.target.value)} />
                                                    </div>
                                                    <div className="mb-3">
                                                        <label className="form-label">Address</label>
                                                        <input type="text" className="form-control text-capitalize" id="" value={address} onChange={(e) => setAddress(e.target.value)} />
                                                    </div>
                                                    <div className="mb-3">
                                                        <label className="form-label">Division</label>
                                                        <input type="text" className="form-control text-capitalize" id="" value={division} onChange={(e) => setDivision(e.target.value)} />
                                                    </div>
                                                    <div className="mb-3">
                                                        <label className="form-label">Class</label>
                                                        <input type="text" className="form-control text-capitalize" id="" value={className} onChange={(e) => setClassName(e.target.value)} />
                                                    </div>
                                                    <div className="d-flex w-100 justify-content-end align-items-center">
                                                        <button type="submit" className="btn btn-primary">Submit</button>
                                                    </div>
                                                </form>
                                            </div>
                                            <div className="align-items-Center ps-2 d-flex updateCol" style={{ width: '50%' }}>
                                                <form className="w-100" onSubmit={(e) => handleChangePass(e)}>
                                                    <h3>Change Password</h3>
                                                    <div className="mb-3">
                                                        <label className="form-label">Old Password</label>
                                                        <input type="password" className="form-control" onChange={(e) => setOldPass(e.target.value)} />
                                                    </div>
                                                    <div className="mb-3">
                                                        <label className="form-label">New Password</label>
                                                        <input type="password" className="form-control" onChange={(e) => setPassword(e.target.value)} />
                                                    </div>
                                                    <div className="d-flex w-100 justify-content-end align-items-center">
                                                        <button type="submit" className="btn btn-primary">Submit</button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <NotLogin />
            )}
        </div>
    )
}

export default AdminEditProfile