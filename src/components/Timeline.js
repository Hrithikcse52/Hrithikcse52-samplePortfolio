import React from 'react'

function TimeLine({ education }) {
    return (
        <div className="container  mx-auto w-full h-full">
            <p className="text-2xl md:text-4xl mt-6 font-bold text-center">
                Education
            </p>
            <div className="relative wrap overflow-hidden p-10 h-full">
                <div
                    className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border"
                    style={{ left: '50%' }}
                ></div>
                {education.map((col, index) => {
                    if (col.align === 'R') {
                        return (
                            <div className="mb-8 flex justify-between items-center w-full right-timeline">
                                <div className="order-1 w-5/12"></div>
                                <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                                    <h1 className="mx-auto font-semibold text-lg text-white">
                                        {index + 1}
                                    </h1>
                                </div>
                                <div className="order-1 bg-gray-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
                                    <div className="flex">
                                        <div className="p-2">
                                            <h3 className="mb-3 font-bold text-gray-800 text-xl">
                                                {col.title}
                                            </h3>
                                            <h3 className="mb-3 font-bold text-gray-800 text-xl">
                                                {col.cert}: {col.stream}
                                            </h3>
                                            <h3 className="mb-3 font-bold text-gray-800 text-xl">
                                                {col.from
                                                    ? `${col.from} - ${col.to}`
                                                    : col.to}
                                            </h3>

                                            <h3 className=" font-bold text-gray-800 text-xl">
                                                Result: {col.cur}
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    } else {
                        return (
                            <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                                <div className="order-1 w-5/12"></div>
                                <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                                    <h1 className="mx-auto text-white font-semibold text-lg">
                                        2
                                    </h1>
                                </div>
                                <div className="order-1 bg-red-400 rounded-lg  shadow-xl w-5/12 px-6 py-4">
                                    <div className="flex">
                                        <div className="p-2">
                                            <h3 className="mb-3 font-bold text-gray-800 text-xl">
                                                {col.title}
                                            </h3>
                                            <h3 className="mb-3 font-bold text-gray-800 text-xl">
                                                {col.cert}: {col.stream}
                                            </h3>
                                            <h3 className="mb-3 font-bold text-gray-800 text-xl">
                                                {col.from
                                                    ? `${col.from} - ${col.to}`
                                                    : col.to}
                                            </h3>

                                            <h3 className=" font-bold text-gray-800 text-xl">
                                                Result: {col.cur}
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                })}
                {/* 
                {education[1].align === 'R' ? (
                    <div className="mb-8 flex justify-between items-center w-full right-timeline">
                        <div className="order-1 w-5/12"></div>
                        <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                            <h1 className="mx-auto font-semibold text-lg text-white">
                                1
                            </h1>
                        </div>
                        <div className="order-1 bg-gray-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
                            <h3 className="mb-3 font-bold text-gray-800 text-xl">
                                Lorem Ipsum
                            </h3>
                            <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                the industry's standard dummy text ever since
                                the 1500s, when an unknown printer took a galley
                                of type and scrambled it to make a type specimen
                                book.
                            </p>
                        </div>
                    </div>
                ) : (
                    <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                        <div className="order-1 w-5/12"></div>
                        <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                            <h1 className="mx-auto text-white font-semibold text-lg">
                                2
                            </h1>
                        </div>
                        <div className="order-1 bg-red-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
                            <h3 className="mb-3 font-bold text-white text-xl">
                                Lorem Ipsum
                            </h3>
                            <p className="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                the industry's standard dummy text ever since
                                the 1500s, when an unknown printer took a galley
                                of type and scrambled it to make a type specimen
                                book.
                            </p>
                        </div>
                    </div>
                )} */}
            </div>
        </div>
    )
}

export default TimeLine
