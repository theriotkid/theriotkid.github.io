import Header from "./Header";
import Footer from "./Footer";
import { useEffect, useState } from "react";
import axios from 'axios'


const Pembelajaran = ({ isLoggin, setIsloggin }) => {
    const [dataHistory, setDataHistory] = useState([])
    const [dataPopuler, setDataPopuler] = useState([])
    const [dataUp, setDataUp] = useState(false)
    const historyGet = async () => {
        try {
            const res = await axios(`http://localhost:3000/getVideoByCategory?category=history`)
            const data = res.data
            setDataHistory(data)
            setDataUp(!dataUp)
        } catch (error) {
            console.log(error)
        }
    }
    const populerGet = async () => {
        try {
            const res = await axios(`http://localhost:3000/getVideoByCategory?category=populer`)
            const data = res.data
            setDataPopuler(data)
            setDataUp(!dataUp)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        historyGet()
        populerGet()
    }, [dataUp])

    return (
        <div>
            <div className="py-5 my-5">
                <Header act2="active" isLoggin={isLoggin} setIsloggin={setIsloggin} />

                <div className="justify-content-center align-items-center container wrapperPembelajaran" style={{

                }}>
                    <div className="title d-flex justify-content-between align-items-center">
                        <div>
                            <h4>History :</h4>
                        </div>
                        <div className="d-flex align-items-center">
                            <h4>More</h4>
                            <i className="fa-sharp fa-solid fa-forward px-2"></i>
                        </div>
                    </div>

                    <div className="row mt-4">
                        {dataHistory.map((item) => {
                            return (
                                <div className="col-sm-4" key={item._id}>
                                    <iframe width={'100%'} height={230} src={`${item.link}`} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen className="" style={{
                                        borderRadius: 10
                                    }} />
                                </div>
                            )
                        })}
                    </div>

                    <div className="p-3 bg-dark-subtle my-4" style={{
                        borderRadius: 10
                    }}>
                        <div className="title d-flex justify-content-between align-items-center">
                            <div className="d-flex align-items-center">
                                <h4>Video Populer</h4>
                                <i className="fa-sharp fa-solid fa-forward px-2"></i>
                            </div>
                        </div>

                        <div className="row mt-3">
                            {dataPopuler.map((item) => {
                                return (
                                    <div className="col-sm-4">
                                        <iframe width={'100%'} height={230} src={`${item.link}`} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen style={{
                                            borderRadius: 10
                                        }} />
                                    </div>
                                )
                            })}

                        </div>
                    </div>

                </div>

                <Footer isLogin={isLoggin} />
            </div>
        </div>
    )
}
export default Pembelajaran