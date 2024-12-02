import axios from "axios"
import Footer from "./Footer"
import SideBar from "./SideBar"

import { useState } from "react"
import Cookies from "js-cookie"
import NotLogin from "./NotLogin"

const AdminUpload = ({ userData, setIsloggin }) => {

    // state untuk penyimpanan data gambar
    const [postLinkGambar, setPostLinkGambar] = useState('')
    const [postDescGambar, setPostDescGambar] = useState('')
    const [postCatGambar, setPostCatGambar] = useState('')

    // handle untuk post data gambar melalui axios
    
    const handlePostGambar = async (e) => {
        e.preventDefault()
        const data = {
            link: postLinkGambar,
            description: postDescGambar,
            category: postCatGambar
        }
        const form = document.getElementById('formUpGambar')
        if (!postLinkGambar || !postDescGambar || !postCatGambar) {
            alert('please fill all field!')
        } else {
            try {
                const res = await axios.post('http://localhost:3000/postDataGambar', data)
                if (res.status === 200) {
                    setPostLinkGambar("")
                    setPostDescGambar("")
                    setPostCatGambar("")
                    form.reset()
                    alert(`data has been posted!`)
                } else {
                    alert('failed to post Data')
                }

            } catch (error) {
                console.log(error)
            }
        }

    }

    // state untuk penyimpanan data video
    const [postLinkVideo, setPostLinkVideo] = useState('')
    const [postDescVideo, setPostDescVideo] = useState('')
    const [postCatVideo, setPostCatVideo] = useState('')

    // handle untuk post data video melalui axios
    const handlePostVideo = async (e) => {
        e.preventDefault()
        const form = document.getElementById('formUpVideo')
        const data = {
            link: postLinkVideo,
            description: postDescVideo,
            category: postCatVideo
        }
        if (!postLinkVideo || !postDescVideo || !postCatVideo) {
            alert('please fill all field!!')
        } else {
            try {
                const res = await axios.post('http://localhost:3000/postDataVideo', data)
                if (res.status === 200) {
                    setPostLinkVideo("")
                    setPostDescVideo("")
                    setPostCatVideo("")
                    form.reset()
                    alert(`data has been posted!`)
                } else {
                    alert('failed to post Data')
                }

            } catch (error) {
                console.log(error)
            }
        }

    }

    // state untuk penyimpanan data berita
    const [postJudulBerita, setPostJudulBerita] = useState('')
    const [postIsiBerita, setPostIsiBerita] = useState('')
    const [postFotoBerita, setPostFotoBerita] = useState('')
    const [postCatBerita, setPostCatBerita] = useState('')

    // handle untuk post data berita melalui axios
    const handlePostBerita = async (e) => {
        e.preventDefault()
        const data = {
            judul: postJudulBerita,
            isi: postIsiBerita,
            foto: postFotoBerita,
            category: postCatBerita
        }
        const form = document.getElementById('formUpBerita')

        if (!postJudulBerita || !postIsiBerita || !postFotoBerita || !postCatBerita) {
            alert('please fill all field!')
        } else {
            try {
                const res = await axios.post('http://localhost:3000/postDataBerita', data)
                if (res.status === 200) {
                    setPostJudulBerita("")
                    setPostIsiBerita("")
                    setPostFotoBerita("")
                    setPostCatBerita("")
                    form.reset()
                    alert('data has been posted!')
                } else if (res.status === 500) {
                    alert('failed to fetch')
                }
            } catch (error) {
                console.log(error)
            }
        }

    }

    // variable untuk menyimpan cookie yang digunakan untuk validasi
    const isCookie = Cookies.get('auth')

    return (
        <div>
            {isCookie ? (
                <div style={{
                    paddingLeft: 280
                }} className="contentAdmin">
                    <SideBar menuAct2='active' userData={userData} setIsLoggin={setIsloggin} />

                    <div className="titleWrap w-100 d-flex justify-content-center align-items-center contentWrapper" style={{
                        height: '15vh'
                    }}>
                        <h2>Upload Content</h2>
                    </div>
                    <div className="wrapper mb-5">
                        <div className="container mt-3 d-flex justify-content-center align-items-center" style={{
                            height: 'auto'
                        }}>
                            <div className="my-2 w-100 pb-2" style={{
                                height: 'auto',
                                border: '1px solid black',
                                borderRadius: 5
                            }}>
                                <div className="w-100 bg-primary-subtle d-flex align-items-center justify-content-between container" style={{
                                    height: '7vh',
                                    borderTopLeftRadius: 5,
                                    borderTopRightRadius: 5
                                }}>
                                    <h5 className="ms-2 fw-bolder">Gambar</h5>
                                </div>
                                <div className="container">
                                    <form className="mt-3" id="formUpGambar">
                                        <div className="mb-3">
                                            <label htmlFor="" className="form-label">Link Gambar</label>
                                            <input type="text" className="form-control form-control-sm" onChange={(e) => setPostLinkGambar(e.target.value)} />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="" className="form-label">Deskripsi gambar</label>
                                            <input type="text" className="form-control form-control-sm" onChange={(e) => setPostDescGambar(e.target.value)} />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="" className="form-label">Kategori Kelas</label>
                                            <input type="text" className="form-control form-control-sm" onChange={(e) => setPostCatGambar(e.target.value)} />
                                        </div>
                                        <div className="w-100 d-flex justify-content-end">
                                            <button className="btn btn-dark" onClick={handlePostGambar}>Submit</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                        <div className="container mt-3 d-flex justify-content-center align-items-center" style={{
                            height: 'auto'
                        }}>
                            <div className="my-2 w-100 pb-2" style={{
                                height: 'auto',
                                border: '1px solid black',
                                borderRadius: 5
                            }}>
                                <div className="w-100 bg-primary-subtle d-flex align-items-center container" style={{
                                    height: '7vh',
                                    borderTopLeftRadius: 5,
                                    borderTopRightRadius: 5
                                }}>
                                    <h5 className="ms-2 fw-bolder" style={{ marginBottom: 0 }}>Video</h5>
                                </div>
                                <div className="container">
                                    <form className="mt-3" onSubmit={handlePostVideo} id="formUpVideo">
                                        <div className="mb-3">
                                            <label htmlFor="" className="form-label">Link Embed Video</label>
                                            <input type="text" className="form-control form-control-sm" aria-describedby="emailHelp" onChange={(e) => setPostLinkVideo(e.target.value)} />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="" className="form-label">Deskripsi Video</label>
                                            <input type="text" className="form-control form-control-sm" onChange={(e) => setPostDescVideo(e.target.value)} />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="" className="form-label">Kategori</label>
                                            <input type="text" className="form-control form-control-sm" onChange={(e) => setPostCatVideo(e.target.value)} />
                                        </div>
                                        <div className="w-100 d-flex justify-content-end">
                                            <button type="submit" className="btn btn-dark">Submit</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                        <div className="container mt-3 d-flex justify-content-center align-items-center" style={{
                            height: 'auto'
                        }}>
                            <div className="w-100 pb-2" style={{
                                height: 'auto',
                                border: '1px solid black',
                                borderRadius: 5
                            }}>
                                <div className="w-100 bg-primary-subtle d-flex align-items-center container" style={{
                                    height: '7vh',
                                    borderTopLeftRadius: 5,
                                    borderTopRightRadius: 5
                                }}>
                                    <h5 className="ms-2 fw-bolder" style={{ marginBottom: 0 }}>Berita</h5>
                                </div>
                                <div className="container">
                                    <form className="mt-3" onSubmit={handlePostBerita} id="formUpBerita">
                                        <div className="mb-3">
                                            <label htmlFor="" className="form-label">Judul Berita</label>
                                            <input type="text" className="form-control form-control-sm" onChange={(e) => setPostJudulBerita(e.target.value)} />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="" className="form-label">Isi Berita</label>
                                            <textarea type="text" className="form-control form-control-sm" rows={8} onChange={(e) => setPostIsiBerita(e.target.value)} />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="" className="form-label">Foto</label>
                                            <input type="text" className="form-control form-control-sm" onChange={(e) => setPostFotoBerita(e.target.value)} />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="" className="form-label">Kategori Berita</label>
                                            <input type="text" className="form-control form-control-sm" onChange={(e) => setPostCatBerita(e.target.value)} />
                                        </div>
                                        <div className="w-100 d-flex justify-content-end">
                                            <button type="submit" className="btn btn-dark">Submit</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Footer />
                </div>
            ) : (
                <NotLogin />
            )}
        </div>
    )
}

export default AdminUpload