import { Link } from "react-router-dom"

const Footer = ({ isLogin }) => {

    return (
        <div className="mt-3">
            <div className="">
                <footer className="text-center text-black bg-dark text-white">
                    <div className="container">
                        <section className="mt-5">
                            <div className="row text-center d-flex justify-content-center pt-5 ">

                                <div className="col-md-2">
                                    <h6 className="text-uppercase font-weight-bold ">
                                        <Link to={'/'} className="text-decoration-none text-white">Home</Link>
                                    </h6>
                                </div>


                                <div className="col-md-2">
                                    <h6 className="text-uppercase font-weight-bold">
                                        <Link to={'/pembelajaran'} className="text-decoration-none text-white">Pembelajaran</Link>
                                    </h6>
                                </div>


                                <div className="col-md-2">
                                    <h6 className="text-uppercase font-weight-bold">
                                        <Link to={'/info'} className="text-decoration-none text-white">info</Link>
                                    </h6>
                                </div>
                                {isLogin ? (
                                    <div className="col-md-2">
                                        <h6 className="text-uppercase font-weight-bold">
                                            <Link to={'/admin/dashboard'} className="text-decoration-none text-white">admin</Link>
                                        </h6>
                                    </div>
                                ) : (
                                    <div className="col-md-2">
                                        <h6 className="text-uppercase font-weight-bold">
                                            <Link className="text-decoration-none text-white" onClick={()=>{alert('Please Login to see Admin Page')}}>admin</Link>
                                        </h6>
                                    </div>
                                )}
                                <div className="col-md-2">
                                    <h6 className="text-uppercase font-weight-bold">
                                        <Link to={''} className="text-decoration-none text-white">Terms & Service</Link>
                                    </h6>
                                </div>
                            </div>

                        </section>
                        <hr className="my-5" />
                        <section className="mb-5">
                            <div className="row d-flex justify-content-center">
                                <div className="col-lg-8">
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                                        distinctio earum repellat quaerat voluptatibus placeat nam,
                                        commodi optio pariatur est quia magnam eum harum corrupti
                                        dicta, aliquam sequi voluptate quas.
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section className="text-center mb-5">
                            <a className="me-4 text-white">
                                <i className="fab fa-facebook-f" />
                            </a>
                            <a className="me-4 text-white">
                                <i className="fab fa-twitter" />
                            </a>
                            <a className="me-4 text-white">
                                <i className="fab fa-google" />
                            </a>
                            <a className="me-4 text-white">
                                <i className="fab fa-instagram" />
                            </a>
                            <a className="me-4 text-white">
                                <i className="fab fa-linkedin" />
                            </a>
                            <a className="me-4 text-white">
                                <i className="fab fa-github" />
                            </a>
                        </section>
                    </div>

                    <div className="p-3 bg-dark white d-flex align-items-center justify-content-center">
                        <p className="mb-0 me-2">© 2023 Copyright:</p>
                        <a className="" href="https://mdbootstrap.com/">Yoona@123gmail.com</a>
                    </div>
                </footer>
            </div>
        </div>
    )
}

export default Footer