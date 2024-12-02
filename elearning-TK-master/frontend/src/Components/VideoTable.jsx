import axios from "axios"
import { useEffect, useState, useRef } from "react"
import FormUpdate from "./FormUpdate"

const VideoTable = () => {
    const [getVideo, getDataVideo] = useState([])

    const [updated, setUpdated] = useState(false)
    const getVideoFunc = async () => {
        try {
            const res = await axios('http://localhost:3000/getVideo')
            const data = res.data
            getDataVideo(data)
            setUpdated(!updated)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getVideoFunc()
    }, [updated])

    const delFuncVideo = async (id) => {
        try {
            const deleted = await axios.delete(`http://localhost:3000/deleteVideo/${id}`)
            if (deleted.status === 200) {
                alert(`delete on id: ${id} success!`)
                setUpdated(!updated)
            } else if (deleted.status === 404) {
                alert(`Data not found!`)
            }
        } catch (error) {
            console.log(error)
        }
    }

    // state untuk update
    const [linkGet, setLinkget] = useState('')
    const [desc, setDesc] = useState('')
    const [cat, setCat] = useState('')
    const [idData, setIdData] = useState('')

    const updateFunc = (_id, link, description, category) => {
        setLinkget(link)
        setDesc(description)
        setCat(category)
        setIdData(_id)
        const wrapperId = document.getElementById('updateFormVideo')
        const closeFormVideo = document.getElementById('closeFormVideo')
        wrapperId.style.top = '50%'
        closeFormVideo.addEventListener('click', () => {
            wrapperId.style.top = '-50%'
            setLinkget('')
            setDesc('')
            setCat('')
            setIdData('')
        })
    }

    return (
        <div>
            <div className="tableWrapper my-3 container">
                <div className="tableGambar rounded-3" style={{
                    border: '1px solid black',
                }}>
                    <div className=" rounded-top-3 bg-success-subtle">
                        <h3 className="text-center pt-1 pb-1" style={{
                            marginBottom: 0,
                            borderBottom: '1px solid black'
                        }}>Table Video</h3>
                    </div>
                    <div className="" style={{
                        maxHeight: '50vh',
                        overflowY: 'auto',
                        overflowX: 'auto'
                    }}>
                        <table className="table table-responsive text-center table-sm">
                            <thead>
                                <tr className="sticky-top bg-dark-subtle">
                                    <th scope="col">No</th>
                                    <th scope="col">Link Embeded Video</th>
                                    <th scope="col">Deskripsi Video</th>
                                    <th scope="col">Kategori</th>
                                    <th scope="col">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {getVideo.map((item, data) => {
                                    return (
                                        <tr className="w-100" key={item._id}>
                                            <th scope="row" className="text-center">{data + 1}</th>
                                            <td className="linkTable">{item.link}</td>
                                            <td className="text-center">{item.description}</td>
                                            <td className="text-center">{item.category}</td>
                                            <td className=" text-center">
                                                <div className="btn-group" role="group" aria-label="Basic mixed styles example">
                                                    <button className="btn btn-outline-success btn-sm rounded-0 rounded-start" onClick={() => updateFunc(item._id, item.link, item.description, item.category)}>
                                                        <i className="fa-solid fa-pen-to-square"></i>
                                                    </button>
                                                    <button className="btn btn-outline-danger btn-sm rounded-0 rounded-end" onClick={() => delFuncVideo(item._id)}>
                                                        <i className="fa-solid fa-trash"></i>
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>


            <FormUpdate _id={idData} catGet={cat} descGet={desc} linkGet={linkGet} idForm={'updateFormVideo'} updateFunc={setUpdated} routes={'updateVideo'} wrapperId={'updateFormVideo'} closeButtonId={'closeFormVideo'} updated={updated}/>


        </div>
    )
}

export default VideoTable