import React from 'react';
import { useState, useEffect, useRef } from "react";
import FormUpdate from './FormUpdate';
import axios from 'axios';

const GambarDetailsTable = ({gambarId, setGambarId}) => {
    // state untuk mngambil data gambar
    const [getGambar, getDataGambar] = useState([])
    const [updated, setUpdated] = useState(false)

    const [detailsArray, setDetailsArray] = useState([])

    // function untuk mengambil embedednya saja
    const getGambarFunc = async () => {
        try {
            const res = await axios.get('http://localhost:3000/getGambar');
            const data = res.data;

            const updatedGambar = [...data]; // Gunakan data baru tanpa perlu menggabungkan dengan getGambar sebelumnya

            getDataGambar(updatedGambar);
            setDetailsArray([]); // Kosongkan detailsArray sebelum menambahkan data baru

            // Mengambil array "details" dan menyimpannya dalam variabel detailsArray
            const details = updatedGambar
                .filter(item => item.details) // Filter objek yang memiliki array "details"
                .map(item => item.details);
            const flattenedDetails = details.flat();
            setDetailsArray(flattenedDetails);
            setUpdated(!updated);
            // setGambarId(res.data._id)
        } catch (error) {
            console.log(error);
        }
    };


    useEffect(() => {
        getGambarFunc()
    }, [updated])

    const [source, setSource] = useState('')
    const [place, setPlace] = useState('')
    const [upDetails, setUpDetails] = useState(false)

    const updateDetails = async (id, e) => {
        e.preventDefault()
        const data = {
            source: source,
            place: place
        }

        try {
            const res = await axios.put(`http://localhost:3000/updateGambarDetails/${id}`, data)
            if (res.status === 200) {
                alert('update details berhasil!')
                setUpDetails(false)
            }
        } catch (error) {
            console.log(error)
        }
    }

    const deleteDetails = async(id, detailsId) =>{
        try {
            const res = await axios.delete(`http://localhost:3000/deleteGambarDetail/${id}/${detailsId}`)
            if(res.status === 200) {
                alert('data detail telah terhapus!')
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
                    <div className=" rounded-top-3 bg-danger-subtle">
                        <h3 className="text-center pt-1 pb-1" style={{
                            marginBottom: 0,
                            borderBottom: '1px solid black'
                        }}>Table Gambar Details</h3>
                    </div>
                    <div className="" style={{
                        maxHeight: '50vh',
                        overflowY: 'auto',
                    }}>
                        <table className="table table-responsive table-sm">
                            <thead>
                                <tr className="sticky-top bg-dark-subtle text-center">
                                    <th scope="col">No</th>
                                    <th scope="col" className="linkTable">Details ID</th>
                                    <th scope="col" className="text-center">Tanggal</th>
                                    <th scope="col">Source</th>
                                    <th scope="col">Place</th>
                                    <th scope="col">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {detailsArray.map((item, data) => {
                                    return (
                                        <tr className="w-100" key={item._id}>
                                            <th scope="row" className="text-center">{data + 1}</th>
                                            <td className="linkTable">{item._id}</td>
                                            <td className="text-center">{new Date(item.tanggal).toISOString()}</td>
                                            <td className="text-center">{item.source}</td>
                                            <td className="text-center">{item.place}</td>
                                            <td className=" text-center">
                                                <div className="btn-group" role="group" aria-label="Basic mixed styles example">
                                                    <button className="btn btn-outline-success btn-sm rounded-0 rounded-start" onClick={() => {
                                                        setUpDetails(true)
                                                        setSource(item.source)
                                                        setPlace(item.place)
                                                        setGambarId(item.gambarId)
                                                        console.log(gambarId)
                                                    }}>
                                                        <i className="fa-solid fa-pen-to-square"></i>
                                                    </button>
                                                    <button className="btn btn-outline-danger btn-sm rounded-0 rounded-end" onClick={() => {
                                                        if(confirm('apakah anda yakin akan menghapus detail ini?')){
                                                            deleteDetails(item.gambarId, item._id)
                                                        }
                                                    }}>
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

                <div className='w-100 vh-100 position-fixed' style={{
                    backgroundColor: 'rgba(0,0,0,0.3)',
                    top: upDetails ? '50%' : '-500%',
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
                        <h1 className='mb-3 text-center'>Form Update Details</h1>
                        <i class="fa-solid fa-circle-xmark fs-4 position-fixed closePopDetails" style={{
                            top: 10,
                            right: 10
                        }} onClick={()=> setUpDetails(false)}></i>
                        <form onSubmit={(e)=> updateDetails(gambarId, e)}>
                            <input type="text" value={source} className='form-control mb-3' placeholder='please type source here' onChange={(e) => { setSource(e.target.value) }} />
                            <input type="text" value={place} className='form-control mb-3' placeholder='please type place here' onChange={(e) => { setPlace(e.target.value) }} />
                            <div className='d-flex justify-content-between align-items-center'>
                                <button type='submit' className='btn btn-success w-25 m-auto'>Submit</button>
                            </div>
                        </form>
                    </div>



                </div>
            </div>
        </div>
    )
};

export default GambarDetailsTable;