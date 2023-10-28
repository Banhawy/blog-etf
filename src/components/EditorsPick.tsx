import React from 'react';

const authorImage = "https://media.licdn.com/dms/image/C4D03AQFfx0wQ27Nqeg/profile-displayphoto-shrink_400_400/0/1619481595209?e=1703721600&v=beta&t=TVL_ZX3DjOLPxM5pL-hRCrlhDAKqwZekAy_-l6i53cI"

const backgroundImage = "https://www.marketsmedia.com/wp-content/uploads/2019/10/Depositphotos_247188554_xl-2015-1024x614.jpg"

const EditorPickComponent = () => {
    return (
        <div className="bg-gradient-to-r from-blue-600 to-blue-900 p-8 text-white rounded-lg relative">
            {/* Central Content */}
            <div className="mb-6">
                <h2 className="text-2xl font-semibold">Editor's pick</h2>
                <p className="mt-2">Discover the most outstanding articles in all topics of life.</p>
            </div>

            <div className='flex'>
                {/* Featured Article Card (positioned to overlap with the image) */}
                <div className="bg-gray-800/[0.98] p-4 rounded-lg self-center h-fit flex justify-center flex-1 flex-col items-center mr-[-7rem] z-10 mx-4 shadow-lg ">
                    <div className='flex flex-col justify-center space-y-7'>
                        <div className="mr-4">
                            <span className="bg-red-500 text-white text-xs px-2 py-1 rounded">Garden</span>
                            <span className="ml-2 material-icons text-lg">videocam</span>
                        </div>
                        <div className="flex-1">
                            <h3 className="text-lg font-semibold">Lenovo's smarter devices stoke professional passions</h3>
                            <div className="flex items-center mt-2">
                                <img src={authorImage} alt="Author" className="w-8 h-8 rounded-full mr-2" />
                                <div className="text-sm">
                                    <span>Lia</span> - <span className="text-gray-400">Sep 11, 2023</span> · <span>1 min</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Image on the Featured Card */}
                <div className="mt-6">
                    <img src={backgroundImage} alt="Beach View" className="rounded-lg" />
                </div>
            </div>
        </div>
    );
}

export default EditorPickComponent;


