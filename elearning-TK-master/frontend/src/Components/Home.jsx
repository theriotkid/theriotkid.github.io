import Header from "./Header";
import Footer from "./Footer";
import Banner from "./Banner";
import { useEffect, useState } from "react";
import axios from "axios";
import Title from "./Title";



const Home = ({isLoggin, setIsloggin}) => {

    const [dataVideo, setDataVideo] = useState([]) //state untuk menyimpan hasil pengambilan datanya


    const getData = async() =>{
        try {
            const res = await axios('http://localhost:3000/getVideo')
            const data = res.data
            setDataVideo(data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getData()
    })

    return (
        <div>
            <Title/>
            <Header act1="active" isLoggin={isLoggin} setIsloggin={setIsloggin}/>

            <section className="text-center container pt-5 mt-5">
                <div className="row">
                    <div className="col-lg-6 col-md-8 mx-auto">
                        <h1 className="fw-bolder">BANNERS</h1>
                        <p className="lead text-body-secondary">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don't simply skip over it entirely.</p>
                    </div>
                </div>
            </section>

            <Banner bannerWrapHeight='80vh'
                bannerMarginTop='3%'
                bannerWidth='100%'
                imageHeight='75vh'
                bannerClassWrapper='bannerHome'
            />

            
            <section className="text-center container py-5">
                <div className="row">
                    <div className="col-lg-6 col-md-8 mx-auto">
                        <h1 className="fw-bolder">VIDEOS</h1>
                        <p className="lead text-body-secondary">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don't simply skip over it entirely.</p>
                    </div>
                </div>
            </section>
            <div className="container">
                <div className="row justify-content-center align-items-center" style={{ marginRight: 0 }}>
                    {dataVideo.map((item) => {
                        return (
                            <div className="col-sm-12 col-lg-6 pe-0" key={item._id}>
                                <div className="embed-responsive embed-responsive-16by9">
                                    <iframe className="embed-responsive-item" src={`${item.link}`} title={`${item.description}`} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen width={'100%'} height={300} style={{
                                        borderRadius: 10
                                    }} />
                                </div>
                            </div>
                        )
                    })}
                </div></div>



            <Footer isLogin={isLoggin}/>
        </div>
    )
}

export default Home

