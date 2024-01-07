import React, { createElement } from 'react'
import element from '../data.json'
import image1 from '../image/Nityanand Charan Das.jpg'
import Navigation from './Navigation'
import '../App.css';
import Carousel from './carousel'
const Course = () => {
    const points=(id, heading, text, htmlText=false)=>{
        return (
            <div id={id}>
                <div className='text-xl font-bold mt-8 w-[100%]'>
                    <h1>{heading}</h1>
                </div>
                {
                    (htmlText==false)?<div className='mt-5'>{text}</div>:<div className='mt-5' dangerouslySetInnerHTML={{__html:text,}}></div>
                }
            </div>
        )
    }
    return (
        <>
            {/* header image */}
            <div className="w-[100%] relative">
                <img className="w-[100%] h-[80vh]" src={image1} alt='' style={{filter: "brightness(50%)"}}/>
                <div className="absolute bottom-0 left-[10%] top-[75%] px-4 w-[50%] text-left">
                    <h1 className="text-xl text-white font-bold">
                        {element.instructor.name}
                    </h1>
                    <h1 className="text-4xl text-white font-bold">
                        {element.course.title}
                    </h1>
                </div>
            </div>
            {/* content */}
            <div className='flex justify-center'>
                <div className='w-[80vw]'>
                    <div className='w-[80vw] justify-center'>
                        <div className='flex items-stretch flex flex-row  '>
                            <div className='w-[55vw] text-justify pl-2.5 ml-10 '>
                                <Navigation></Navigation>
                                <div className="userDataSection">
                                {points("about_course","About the course",element.course.about.html_content)}
                                {points("course_expectation","What to expect from the course",element.course.what_to_expect.html_content, true)}
                                {points("key_topics","Key topics covered",element.course.key_topics.html_content, true)}
                                </div>
                            </div>
                            <div className='grid-cols-4 w-[45vw] ml-20 '>
                                <div className= 'w-[100%] flex flex-rows justify-center'>

                                    <div className="w-[80%] p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 grid grid-cols-1">
                                        <div>
                                            <h2 className='text-md font-bold mt-5'>Course:</h2>
                                            <h5 className="mb-2 text-4xl font-bold tracking-tight text-gray-900">{element.course.fee.currency}{element.course.fee.amount}/-</h5>
                                        </div>
                                        <h2 className='text-xl font-bold mt-5'>What's included:</h2>
                                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                            <p>📺 {element.course.inclusions.on_demand_videos}</p>
                                            <p>📺 {element.course.inclusions.live_streams}</p>
                                            <p>✉ {element.course.inclusions.live_qa_sessions}</p>
                                            <p>✉ {element.course.inclusions.whatsapp_community}</p>
                                        </p>
                                        <button className="text-center text-xl font-bold text-white bg-blue-700 rounded-full hover:bg-blue-800 py-3">
                                            Register Today

                                        </button>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>


                    {/* about */}

                    <div className='w-[80vw]' id='instructor'>
                        <div className='grid grid-cols-1 text-left ml-10 pl-2.5'>
                            <div className='text-xl font-bold mt-5 w-[100%]'>
                                <h1>About The Instructor</h1>

                            </div>

                            <div className='grid grid-cols-3 gap-6 mt-5'>
                                <div className='flex justify-center  items-center' >
                                    <img className='w-40 h-40 rounded-full ' src={image1} alt=''></img>

                                </div>
                                <div className='text-justify'>
                                    <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially
                                        unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
                                        Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker</p>

                                </div>
                                <div className='text-justify'>
                                    <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially
                                        unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
                                        Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker</p>

                                </div>

                            </div>
                            <div className='grid grid-cols-4 gap-5 mt-5 mb-20 text-xl'>
                                <div className='flex justify-center text-center'>
                                    <a href='#' className='text-black text-decoration-none'>
                                        <i className="fa fa-facebook-official mx-2"></i>
                                        Facebook
                                    </a>
                                </div>
                                <div className='flex justify-center text-center'>
                                    <a href='#' className='text-black text-decoration-none'>
                                        <i className="fa fa-twitter mx-2"></i>
                                        Twitter
                                    </a>
                                </div>
                                <div className='flex justify-center text-center'>
                                    <a href='#' className='text-black text-decoration-none'>
                                        <i className="fa fa-youtube-play mx-2"></i>
                                        Youtube
                                    </a>
                                </div>
                                <div className='flex justify-center text-center'>
                                    <a href='#' className='text-black text-decoration-none'>
                                        <i className="fa fa-instagram mx-2"></i>
                                        Instagram
                                    </a>
                                </div>
                            </div>




                        </div>





                    </div>



                </div>


            </div>
            {/* bottom section */}
            <div className="w-[100vw] bg-gray-100 py-20 mb-4" id='review'>
                {Carousel(element.testimonial)}
            </div>
        </>
    )
}

export default Course
