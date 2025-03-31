import Image from "next/image"

function SpeakerCard({photo, name, desig}) {
    return <div className="flex flex-col items-center gap-2">
        <div className="w-[150px] h-[150px] rounded-full bg-red-500"></div>
        <h1 className="text-xl">{name}</h1>
        <p className="text-sm">{desig}</p>
    </div>
}

export default function Speakers() {
    return (<>
        <div className="flex flex-col items-center">
            <div className="relative flex flex-col items-center justify-center w-full my-16 mt-24">
            <span className="absolute text-4xl md:text-8xl font-extrabold text-yellow-700/50 blur-lg">
                OUR SPEAKERS
            </span>
            <h1 className="relative z-10 text-4xl md:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#FFD35B] to-[#F5A201] tracking-tight">
                OUR SPEAKERS
            </h1>
            <div className="mt-4 w-24 md:w-1/3 h-1 bg-gradient-to-r from-[#FFD35B] to-[#F5A201] rounded-full"></div>
            </div>
            <div className="flex w-[65vw] justify-center gap-8 my-8 flex-wrap">
                {(new Array(10)).fill(1).map(() =>
                    <SpeakerCard name='Mr. X' desig='XYZ' />
                )}
            </div>
        </div>
    </>)
}