import React from 'react'

function Banner({ mainClass, title, content, src}) {
    return (
        <div className={mainClass}>

            <div className={mainClass} id="137-84027">
                <div className="sb-contentColumn__inner ">
                    <div className="md:flex md:flex-row-reverse image-content-block_flexRowReverse__SYVqg">
                        <div className="flex justify-center items-center w-full md:w-6/12" style={{ backgroundColor: "#d4e9e2" }}>
                            <img className="block" src={src} alt="The text “Starbucks® Summer Game: Adventure Awaits” on a mint background surrounded by badges." />
                        </div>
                        <div className="flex items-center justify-center text-center w-full md:w-6/12 py-5 textBlockGutter" style={{ backgroundColor: "#006241" }}>
                            <div className="image-content-block_copyBlockMaxWidth__tWE8V">
                                <h1 className="sb-heading mb-4 xl font-semibold" tabIndex="-1" style={{ color: "#ffffff" }}>
                                    <span className="rich-text_text__APy_s rich-text_width__3DGrd rich-text_greenLinks__I4L5P">{title}</span>
                                </h1>
                                <div className="md rich-text_text__APy_s rich-text_width__3DGrd rich-text_greenLinks__I4L5P" style={{ color: "#ffffff" }}>
                                    {content}
                                </div>
                                <a className="sb-button sb-button--default sb-button--white mt-5" href="https://www.starbuckssummergame.com?utm_medium=website&utm_source=sr&utm_campaign=sg23_20230513&utm_content=web_banner_spot_1" style={{ minWidth: "35px", minHeight: "35px" }}>Play now</a>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
        


    )
}

export default Banner