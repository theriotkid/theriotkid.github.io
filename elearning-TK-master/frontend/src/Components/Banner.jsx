import axios from "axios"
import { useState, useEffect } from "react"


const Banner = (props) => {
    const [dataBerita, setDataBerita] = useState([])

    const getData = async () =>{
        try{
            const res =  await axios('http://localhost:3000/getDataBerita')
            const data = res.data
            setDataBerita(data)
        } catch(error){
            console.log(error)
        }
    }
    useEffect(() => {
        getData()
    }, [])

    return (
        <div className={`d-flex justify-content-center align-items-center w-100 ${props.bannerClassWrapper} `} style={{ height: props.bannerWrapHeight, marginTop: props.bannerMarginTop }}>

            <div id="carouselExampleAutoplaying" className={`carousel slide d-flex justify-content-between align-items-center container ${props.bannerClassWrapper}`} data-bs-ride="carousel" style={{
                width: props.bannerWidth,
                height: props.imageHeight
            }}>
                <div className="carousel-inner">
                    {dataBerita.map((item) => {
                        return (
                            <div className="carousel-item active" key={item._id}>
                                <img src={`${item.foto}`} alt={`${item.judul}`} className={`rounded-3 ${props.bannerClassWrapper}`} style={{ width: '100%', height: props.imageHeight }} onClick={()=>{window.open(item.foto)}}/>
                                <div className="carousel-caption d-md-block">
                                    <h3 className="fw-bolder">{item.category}</h3>
                                    <p className="fw-bolder">{item.judul}</p>
                                </div>
                            </div>
                        )
                    })}

                </div>
                <div className="buttonSlide">
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true" />
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true" />
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>

            </div>
        </div>
    )
}

export default Banner