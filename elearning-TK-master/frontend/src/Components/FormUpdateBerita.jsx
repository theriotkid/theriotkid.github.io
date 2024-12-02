import { useRef } from "react"
import axios from "axios"

const FormUpdateBerita = ({ judulGet, isiGet, catGet, _id, fotoGet, routes, wrapperId, closeButtonId, setUpdated, updated }) =>{
    
    const refJudul = useRef(null)
    const refIsi = useRef(null)
    const refFoto = useRef(null)
    const refCat = useRef(null)

    const closeFormBerita = document.getElementById(wrapperId)

    const handleSubmit = async (e) => {
        e.preventDefault()

        const judulVal = refJudul.current.value
        const isiVal = refIsi.current.value
        const fotoVal = refFoto.current.value
        const catVal = refCat.current.value
        const dataUpdated = {
            judul: judulVal,
            isi: isiVal,
            foto: fotoVal,
            category: catVal
        }
        try {
            const res = await axios.put(`http://localhost:3000/${routes}/${_id}`, dataUpdated)
            const data = res.data
            setUpdated(!updated)
            alert('data has been updated!')
            closeFormBerita.style.top = '-50%'
        } catch (error) {
            console.error(error)
        }
    }
    return (
        <div className="updateForm d-flex justify-content-center align-items-center" id={wrapperId} style={{
            width: '100%',
            height: '100vh',
            backgroundColor: '#1d1d1d33',
            zIndex: 9999,
            position: 'fixed',
            top: '-50%',
            left: '50%',
            transition: '.5s',
            transform: 'translate(-50%, -50%)'
        }}>
            <div style={{
                width: '50%',
                height: 'auto',
                backgroundColor: '#d4a373',
                position: 'absolute'
            }} className="rounded-4 shadow-lg pb-2">
                <i className="fa-solid fa-circle-xmark fs-3" id={closeButtonId} style={{
                    position: 'absolute',
                    top: 10,
                    right: 10
                }} />

                <h3 className="text-center mt-4">Update Form</h3>

                <div className="container mt-3">
                    <form className="mt-3" id="formUpdateberita">
                        <div className="mb-3">
                            <label htmlFor="" className="form-label">Judul Berita</label>
                            <input type="text" className="form-control" aria-describedby="emailHelp" ref={refJudul} defaultValue={judulGet}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="" className="form-label">isi Berita</label>
                            <textarea type="text" className="form-control" rows={6} ref={refIsi} defaultValue={isiGet}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="" className="form-label">Foto Berita</label>
                            <input type="text" className="form-control" ref={refFoto} defaultValue={fotoGet}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="" className="form-label">Kategori</label>
                            <input type="text" className="form-control" ref={refCat} defaultValue={catGet}/>
                        </div>
                        <div className="w-100 d-flex justify-content-end">
                            <button type="submit" className="btn btn-dark" onClick={handleSubmit}>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default FormUpdateBerita