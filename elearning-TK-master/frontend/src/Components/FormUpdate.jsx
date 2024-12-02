import axios from "axios"
import { useEffect, useRef, useState } from "react"

const FormUpdate = ({ linkGet, descGet, catGet, _id, updateFunc, idForm, routes, wrapperId, closeButtonId, updated }) => {

    const refLink = useRef(null)
    const refDesc = useRef(null)
    const refCat = useRef(null)

    const closeFormGambar = document.getElementById(idForm)

    const handleSubmit = async (e) => {
        e.preventDefault()

        const linkVal = refLink.current.value
        const descVal = refDesc.current.value
        const catVal = refCat.current.value
        const dataUpdated = {
            link: linkVal,
            description: descVal,
            category: catVal
        }
        
        try {
            const res = await axios.put(`http://localhost:3000/${routes}/${_id}`, dataUpdated)
            const data = res.data
            alert('data has been updated!')
            closeFormGambar.style.top = '-50%'
            updateFunc(!updated)
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
                    <form className="mt-3" id="formUpdateGambar">
                        <div className="mb-3">
                            <label htmlFor="" className="form-label">Link Gambar</label>
                            <input type="text" className="form-control" aria-describedby="emailHelp" ref={refLink} defaultValue={linkGet}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="" className="form-label">Deskirpsi Gambar</label>
                            <input type="text" className="form-control" ref={refDesc} defaultValue={descGet}/>
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

export default FormUpdate