import React from 'react'
import '../Styles/Footer.css'
import { useNavigate } from 'react-router-dom'

const Footer = () => {

    const navigate = useNavigate()

    return (
        <section className='bloggios-landing-footer'>
            <div className='landing-footer-div d-flex'>
                <div className="col-lg-5 com-md-4 col-sm-12">
                    <span>Find Us</span>
                    <div className='footer-icons-div'>
                        <i className="fa-brands fa-instagram"></i>
                        <i className="fa-brands fa-facebook"></i>
                        <i className="fa-brands fa-square-twitter"></i>
                        <i className="fa-brands fa-linkedin"></i>
                    </div>
                </div>
                <div className="col-lg-7 col-md-12 col-sm-12 d-flex footer-services-section">
                    <div className="col">
                        <span>Dev Service</span>
                        <div>
                            <span onClick={() => navigate('services/web-devlopment')}>Web Development</span>
                            <span onClick={() => navigate('services/app-devlopment')}>App Development</span>
                            <span onClick={() => navigate('services/backend')}>Backend</span>
                            <span onClick={() => navigate('services/frontend')}>Frontend</span>
                        </div>
                    </div>
                    <div className="col">
                        <span>Resources</span>
                        <div>
                            <span onClick={() => navigate('pricing')}>Pricing</span>
                            <span onClick={() => navigate('blogs')}>Blog</span>
                            <span onClick={() => navigate('projects')}>Projects</span>
                            <span onClick={() => navigate('about')}>About</span>
                        </div>
                    </div>
                    <div className="col">
                        <span>Learn</span>
                        <div>
                            <span onClick={() => navigate('learn/instructor')}>Instructor</span>
                            <span onClick={() => navigate('learn/learner')}>Learner</span>
                            <span onClick={() => navigate('learn/courses')}>Courses</span>
                            <span onClick={() => navigate('learn/resources')}>Free Resource</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='footer-last-section'>
                <div>
                    <span>Bloggios</span>
                    <span>Term of Use</span>
                    <span>Privacy Policy</span>
                </div>
                <div>
                    <span>Copyright © 2023 Bloggios. All Right Reserved</span>
                </div>
            </div>
        </section>
    )
}

export default Footer