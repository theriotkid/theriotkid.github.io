import { useEffect, useState, useRef } from "react"
import axios from 'axios'
import FormUpdate from "./FormUpdate"
const GambarTable = ({gambarId, setGambarID}) => {
    const [getGambar, getDataGambar] = useState([])
    const [updated, setUpdated] = useState(false)

    const getGambarFunc = async () => {
        try {
            const res = await axios.get('http://localhost:3000/getGambar')
            const data = res.data
            getDataGambar(data)
            setUpdated(!updated)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getGambarFunc()
    }, [updated])

    const delFuncGambar = async (id) => {
        try {
            await axios.delete(`http://localhost:3000/deleteGambar/${id}`)
            alert(`data dengan id: ${id} berhasil di delete`)
            setUpdated(!updated)
        } catch (error) {
            console.log(error)
        }
    }

    // state untuk update
    const [linkGet, setLinkget] = useState('')
    const [desc, setDesc] = useState('')
    const [cat, setCat] = useState('')
    const [idData, setIdData] = useState('')

    const updateFuncGambar = (_id, link, description, category) => {
        setLinkget(link)
        setDesc(description)
        setCat(category)
        setIdData(_id)

        const wrapperId = document.getElementById('updateFormGambar')
        const closeFormGambar = document.getElementById('closeFormGambar')
        wrapperId.style.top = '50%'
        closeFormGambar.addEventListener('click', () => {
            wrapperId.style.top = '-50%'
            setLinkget('')
            setDesc('')
            setCat('')
            setIdData('')
        })
    }



    // state untuk menyimpan 'add details' validasi true atau false
    const [addDetails, setAddDetails] = useState(false)

    // state untuk menyimpan data post details
    const [source, setSource] = useState('')
    const [place, setPlace] = useState('')

    // handle untuk post details gambar dengan axios
    
    const hanldePostDetails = async (e) => {
        e.preventDefault()
        const data = {
            source: source,
            place: place
        }
        try {
            const res = await axios.post(`http://localhost:3000/postGambarDetail/${gambarId}`, data)
            if (res.status === 200) {
                alert('data details berhasil di up!')
                setAddDetails(false)
            }
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <div>
            <div className="tableWrapper container my-3">
                <div className="tableGambar rounded-3" style={{
                    border: '1px solid black',
                }}>
                    <div className=" rounded-top-3 bg-primary-subtle">
                        <h3 className="text-center pt-1 pb-1" style={{
                            marginBottom: 0,
                            borderBottom: '1px solid black'
                        }}>Table Gambar</h3>
                    </div>
                    <div className="" style={{
                        maxHeight: '50vh',
                        overflowY: 'auto',
                    }}>
                        <table className="table table-responsive table-sm">
                            <thead>
                                <tr className="sticky-top bg-dark-subtle text-center">
                                    <th scope="col">No</th>
                                    <th scope="col" className="linkTable">Link Gambar</th>
                                    <th scope="col" className="text-center">Deskripsi Gambar</th>
                                    <th scope="col">Kategori Kelas</th>
                                    <th scope="col">Extentions</th>
                                    <th scope="col">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {getGambar.map((item, data) => {
                                    return (
                                        <tr className="w-100" key={item._id}>
                                            <th scope="row" className="text-center">{data + 1}</th>
                                            <td className="linkTable">{item.link}</td>
                                            <td className="text-center">{item.description}</td>
                                            <td className="text-center">{item.category}</td>
                                            <td className="text-center"><a href="" onClick={(e) => {
                                                e.preventDefault()
                                                setAddDetails(true)
                                                setGambarID(item._id)
                                            }}>add details?</a></td>
                                            <td className=" text-center">
                                                <div className="btn-group" role="group" aria-label="Basic mixed styles example">
                                                    <button className="btn btn-outline-success btn-sm rounded-0 rounded-start" onClick={() => updateFuncGambar(item._id, item.link, item.description, item.category)}>
                                                        <i className="fa-solid fa-pen-to-square"></i>
                                                    </button>
                                                    <button className="btn btn-outline-danger btn-sm rounded-0 rounded-end" onClick={() => delFuncGambar(item._id)}>
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
            <FormUpdate _id={idData} catGet={cat} descGet={desc} linkGet={linkGet} idForm={'updateFormGambar'} updateFunc={setUpdated} routes={'updateGambar'} wrapperId={'updateFormGambar'} closeButtonId={'closeFormGambar'} updated={updated} />
            <div className='w-100 vh-100 position-fixed' style={{
                backgroundColor: 'rgba(0,0,0,0.3)',
                top: addDetails ? '50%' : '-500%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                transition: 'all eas-in-out 1s',
                zIndex: 99999
            }}>
                <div className='w-50 py-4 position-fixed container rounded-3' style={{
                    backgroundColor: '#dad7cd',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)'
                }}>
                    <h1 className='mb-3 text-center'>Form add Details</h1>
                    <i class="fa-solid fa-circle-xmark fs-4 position-fixed closePopDetails" style={{
                        top: 10,
                        right: 10
                    }} onClick={()=> setAddDetails(false)}></i>
                    <form onSubmit={(e)=>hanldePostDetails(e)}>
                        <input type="text" className='form-control mb-3' placeholder='please type source here' onChange={(e) => { setSource(e.target.value) }} />
                        <input type="text" className='form-control mb-3' placeholder='please type place here' onChange={(e) => { setPlace(e.target.value) }} />
                        <div className='d-flex justify-content-between align-items-center'>
                            <button type='submit' className='btn btn-success w-25 m-auto'>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default GambarTable