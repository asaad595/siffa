'use client'


const VedioHero = () => {
  return (
    <div className="w-full max-h-screen top-0   flex items-center justify-center ">
        <video autoPlay muted loop className="w-full h-3/4 object-cover" >
            <source src="./vedio/banner-video.mp4" type="video/mp4" />
        </video>
    </div>
  )
}

export default VedioHero