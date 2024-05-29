/* eslint-disable react/prop-types */
import './Hero.css'
import arrow_btn from '../../Assets/arrow_btn.png'
import play_icon from '../../Assets/play_icon.png'
import pause_icon from '../../Assets/pause_icon.png'

const Hero = ({heroData,setHeroCount,heroCount,setPlayStatus,playStatus}) => {
  return (
    <div className='hero'>
        <div className='hero-text xl:leading-[130px] text-center xl:text-start xl:m ml-5 '>
            <p className=' w-72 xl:w-full text-[40px] xl:text-[100px] xl:mt- xl:ml-0 mt-[-200px] ml-[-100px]'>{heroData.text1}</p>
            <p className=' w-80 xl:w-full text-[40px] xl:text-[100px]  xl:ml-[-0px]  ml-[-100px]'>{heroData.text2}</p>
        </div>
        <div className="hero-explore xl:w-fit xl:ml-0 xl:mt-[60px] ">
            <p>Explore the features</p>
            <img src={arrow_btn} alt="" />
        </div>
        <div className="hero-dot-play xl:mt-5 mt-[-80px]   ">
            <ul className="hero-dots">
                <li onClick={()=>setHeroCount(0)} className={heroCount===0?"hero-dot orange":"hero-dot"}></li>
                <li onClick={()=>setHeroCount(1)} className={heroCount===1?"hero-dot orange":"hero-dot"}></li>
                <li onClick={()=>setHeroCount(2)} className={heroCount===2?"hero-dot orange":"hero-dot"}></li>
            </ul>
            <div className="hero-play xl:mt-0 xl:flex xl:flex-row xl:w-[238px] xl:mr-0 w-[400px] mr-10">
                <img onClick={()=>setPlayStatus(!playStatus)}  className='mr-20 xl:ml-0 ml-20 xl:mr-0' src={playStatus?pause_icon:play_icon} alt="" />
                <p className='bg-white xl:bg-transparent xl:text-white text-black rounded-full xl:w-[128px] xl:p-0 p-3  pr-2 w-[155px]'>See the video</p>
            </div>
        </div>

    </div>
  )
}

export default Hero