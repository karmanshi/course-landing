import React from 'react'

const Navigation = () => {
    const createLinkElement =(lnk, pat)=>{
       
        return (    
            <li className="my-4 mx-6">
                <a
                className="active disabled:text-black/30 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400 text-xl"
                href={pat}>
                    {lnk}
                </a>
            </li>
        )
    }
    return (
        <div>

            <nav
                className="relative flex w-full flex-nowrap items-center justify-between bg-[#FBFBFB] py-2 text-neutral-500 shadow-lg hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-600 lg:flex-wrap lg:justify-start lg:py-4"
                data-te-navbar-ref>
                <div className="flex w-full flex-wrap justify-center px-3 text-center">

                    <div
                        className="flex justify-center basis"
                        id="navbarSupportedContent2"
                        data-te-collapse-item>

                        <ul className="list-style-none mr-auto flex pl-0 justify-center ">
                            {createLinkElement("About", "#about_course")}
                            {createLinkElement("Instructor", "#instructor")}
                            {createLinkElement("Review", "#review")}
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navigation
