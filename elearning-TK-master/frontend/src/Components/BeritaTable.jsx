import { useEffect, useState } from "react"
import axios from 'axios'
import FormUpdateBerita from "./FormUpdateBerita"

const BeritaTable = () => {
    const [getBerita, getDataBerita] = useState([])
    const [updated, setUpdated] = useState(false)

    const getBeritaFunc = async () => {
        const res = await axios('http://localhost:3000/getDataBerita')
        const data = res.data
        getDataBerita(data)
        setUpdated(!updated)
    }

    useEffect(() => {
        getBeritaFunc()
    }, [updated])

    const delFuncBerita = async (_id) => {
        try {
            await axios.delete(`http://localhost:3000/deleteBerita/${_id}`,)
            alert(`data on id: ${_id} has been deleted`)
            setUpdated(!updated)
        } catch (error) {
            console.log(error)
        }
    }

    const [judul, setJudul] = useState('')
    const [isi, setIsi] = useState('')
    const [foto, setFoto] = useState('')
    const [cat, setCat] = useState('')
    const [_id, set_Id] = useState('')

    const updateFuncBerita = (_id, judulGet, isiGet, fotoGet, catGet) => {
        const wrapperId = document.getElementById('updateFormBerita')
        const closeFormBerita = document.getElementById('closeFormBerita')
        wrapperId.style.top = '50%'
        setJudul(judulGet)
        setIsi(isiGet)
        setFoto(fotoGet)
        setCat(catGet)
        set_Id(_id)
        console.log(_id)
        closeFormBerita.addEventListener('click', () => {
            wrapperId.style.top = '-50%'
            setJudul('')
            setIsi('')
            setFoto('')
            setCat('')
            set_Id('')
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
                        }}>Table Berita</h3>
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
                                    <th scope="col">Judul Berita</th>
                                    <th scope="col">isi Berita</th>
                                    <th scope="col">foto Berita</th>
                                    <th scope="col">Kategori</th>
                                    <th scope="col">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {getBerita.map((item, data) => {
                                    return (
                                        <tr className="w-100" key={item._id}>
                                            <th scope="row" >{data + 1}</th>
                                            <td className="linkTable" >{item.judul}</td>
                                            <td className="linkTable" style={{
                                                textAlign: 'justify'
                                            }}>{item.isi}</td>
                                            <td className="linkTable">{item.foto}</td>
                                            <td>{item.category}</td>
                                            <td className="">
                                                <div className="btn-group" role="group" aria-label="Basic mixed styles example">
                                                    <button className="btn btn-outline-success btn-sm" onClick={() => updateFuncBerita(item._id, item.judul, item.isi, item.foto, item.category)}>
                                                        <i className="fa-solid fa-pen-to-square"></i>
                                                    </button>
                                                    <button className="btn btn-outline-danger btn-sm">
                                                        <i className="fa-solid fa-trash" onClick={() => delFuncBerita(item._id)} />
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
            <FormUpdateBerita _id={_id} judulGet={judul} isiGet={isi} fotoGet={foto} catGet={cat} routes={'updateBerita'} closeButtonId={'closeFormBerita'} wrapperId={'updateFormBerita'} setUpdated={setUpdated} updated={updated}/>
        </div>
    )
}

export default BeritaTable