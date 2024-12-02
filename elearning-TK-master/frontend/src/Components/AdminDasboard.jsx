import Banner from "./Banner"
import Footer from "./Footer"
import GambarTable from "./GambarTable"
import SideBar from "./SideBar"
import Videotable from "./VideoTable"
import BeritaTable from "./BeritaTable"
import Cookies from "js-cookie"
import NotLogin from "./NotLogin"
import GambarDetailsTable from "./GambarDetailsTable"
import { useState } from "react"

const AdminDasboard = ({ userData, setIsLoggin }) => {
    const isCookie = Cookies.get('auth')

    // state untuk menyimpan gambarId
    const [gambarId, setGambarID] = useState('')
    return (
        <div>
            {isCookie ? (
                <div>
                    <SideBar menuAct1='active' userData={userData} setIsLoggin={setIsLoggin} />
                    <div style={{ paddingLeft: 280 }} className="contentAdmin">
                        <div className="bannerWrap"></div>
                        <Banner bannerWrapHeight='75vh'
                            bannerMarginTop='0%'
                            bannerWidth='97%'
                            imageHeight='70vh'
                            bannerClassWrapper='bannerDasboard bannerWrap'
                        />

                        <div className="w-100 my-3 container">
                            <div className="d-flex w-100 bodyDasboard">
                                <div className="w-50 container cardInfo" style={{ height: '80vh' }}>
                                    {userData.map((item) => {
                                        return (
                                            <div className="rounded-3 d-flex align-items-center flex-column text-capitalize" style={{ height: '80vh', backgroundColor: '#f08080' }}>
                                                <div className="bg-light p-2 mt-4 rounded-circle" style={{
                                                    boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px'
                                                }}>
                                                    <div className="pictDasboard rounded-circle" style={{
                                                        width: 150,
                                                        height: 150,
                                                        backgroundImage: `url(${item.pics})`,
                                                        backgroundPosition: 'center',
                                                        backgroundSize: 'cover'
                                                    }}></div>
                                                </div>

                                                <div className="name mt-3 d-flex justify-content-center align-items-center rounded-5 infoWrapper" style={{
                                                    height: '4vh',
                                                    backgroundColor: '#ffdab9',
                                                    width: '70%'
                                                }}>
                                                    <h5 style={{
                                                        marginBottom: 0
                                                    }} className="fw-bolder text-capitalize">{item.fullName}</h5>
                                                </div>

                                                <div className="address mt-3 d-flex justify-content-center align-items-center rounded-5 infoWrapper" style={{
                                                    height: '4vh',
                                                    backgroundColor: '#ffdab9',
                                                    width: '70%'
                                                }}>
                                                    <h5 style={{
                                                        marginBottom: 0
                                                    }} className="fw-bolder text-capitalize">{item.address}</h5>
                                                </div>

                                                <div className="age mt-3 d-flex justify-content-center align-items-center rounded-5 infoWrapper" style={{
                                                    height: '4vh',
                                                    backgroundColor: '#ffdab9',
                                                    width: '70%'
                                                }}>
                                                    <h5 style={{
                                                        marginBottom: 0
                                                    }} className="fw-bolder">{item.age}</h5>
                                                </div>

                                                <div className="division mt-3 d-flex justify-content-center align-items-center rounded-5 infoWrapper" style={{
                                                    height: '4vh',
                                                    backgroundColor: '#ffdab9',
                                                    width: '70%'
                                                }}>
                                                    <h5 style={{
                                                        marginBottom: 0
                                                    }} className="fw-bolder text-capitalize">{item.division}</h5>
                                                </div>

                                                <div className="class mt-3 d-flex justify-content-center align-items-center rounded-5 infoWrapper" style={{
                                                    height: '4vh',
                                                    backgroundColor: '#ffdab9',
                                                    width: '70%'
                                                }}>
                                                    <h5 style={{
                                                        marginBottom: 0
                                                    }} className="fw-bolder text-uppercase">{item.class}</h5>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                                <div className="w-50 container cardInfo my-2" style={{ height: '80vh' }}>
                                    <div className="rounded-3 d-flex align-items-center flex-column" style={{ height: '80vh', backgroundColor: '#ffdab9' }}>
                                        <div className="title mt-5 rounded-5 d-flex justify-content-center align-items-center infoWrapper" style={{
                                            height: '5vh',
                                            backgroundColor: '#f08080',
                                            width: '70%'
                                        }}>
                                            <h4 style={{
                                                marginBottom: 0
                                            }} className="fw-bolder">STATUS</h4>
                                        </div>

                                        <div className="body mt-5 rounded-3 infoWrapper" style={{
                                            height: '55vh',
                                            backgroundColor: '#f08080',
                                            width: '70%'
                                        }}>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="traffic container my-3">
                            <img src="https://a.c-dn.net/c/content/dam/publicsites/igcom/uk/images/content-2-chart-images/GBP-USD%20(1).png" alt="" style={{
                                width: '100%',
                                height: '70vh'
                            }} />
                        </div>
                        <GambarTable gambarId={gambarId} setGambarID={setGambarID}/>
                        <GambarDetailsTable gambarId={gambarId} setGambarId={setGambarID}/>
                        <Videotable />
                        <BeritaTable />
                        <Footer />
                    </div>
                </div>
            ) : (
                <NotLogin />
            )}
        </div>
    )
}

export default AdminDasboard