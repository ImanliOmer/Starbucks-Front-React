import React from 'react'

const Iframe = ({ src }) => {
    return (
        <div style={{ width: '100%' }} className='flex'>

            <div style={{ width: '40%' }} className='flex'>
                <div style={{width:'100%'}}>

                
                        <div className="flex items-center border-b border-gray-300 mx-2 "  style={{ }} >
                            <input style={{width:'80%', borderBottom:'1px solid black'}}
                                type="text"
                                placeholder="Search"
                                className="flex-grow py-2 px-4 focus:outline-none"
                            />
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 text-gray-400 mr-4"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path d="M15.447 15.043c-1.36 1.435-3.246 2.263-5.27 2.263-3.994 0-7.23-3.216-7.23-7.18 0-3.965 3.236-7.18 7.23-7.18 3.996 0 7.233 3.215 7.233 7.18 0 .47-.046.935-.136 1.39-.084.426.193.84.62.924.425.084.838-.193.922-.62.11-.555.166-1.122.166-1.695 0-4.835-3.943-8.752-8.804-8.752-4.86 0-8.804 3.918-8.804 8.752 0 4.835 3.943 8.753 8.804 8.753 2.46 0 4.758-1.01 6.41-2.754.3-.315.285-.813-.03-1.11-.315-.3-.812-.286-1.11.03zm1.307 2.725l4.506 4.477c.308.306.806.304 1.112-.004.306-.305.304-.802-.004-1.11l-4.506-4.476c-.308-.305-.805-.304-1.11.004-.307.308-.306.806.002 1.112z">
                                    
                                </path>
                            </svg>
                            <a className="sb-button sb-button--default sb-button--white mb-1 ml-1 py-2 px-3" href="LoginIn" style={{ width: "70px", height: "30px", color: 'green',border:'1px solid green' }}>Filter</a>

                        </div>
                    
                </div>
            </div>
            <div style={{ width: '60%' }} className=''>
                <iframe src={src}
                    width="100%"
                    height="900"
                    style={{ border: '0' }}
                    allowfullscreen=""
                    loading="lazy" r
                    eferrerpolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
        </div>
    )
}

export default Iframe;