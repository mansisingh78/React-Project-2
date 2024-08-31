import BoyImage from "../assets/boy.jpg";
import { FaCreativeCommonsShare } from "react-icons/fa";
import { TbWashDrycleanOff } from "react-icons/tb";
import { SiSquarespace } from "react-icons/si";
import { BsBootstrapReboot } from "react-icons/bs";
import { SiFontforge } from "react-icons/si";
import { MdAutoAwesomeMotion } from "react-icons/md";
import { MdPersonPin } from "react-icons/md";
import { IoIosFlower } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { FaTimesCircle } from "react-icons/fa";

function About() {
  return (
    <>
      <div className="hero-img bg-[#2D2F2E]">
        <div className="about flex mt-24  ">
          <div className="right-card w-[15%] h-auto rounded-xl object-cover right ml-[250px] mt-36 ">
            <img src={BoyImage} alt="Boy" />
          </div>
          <div className="left-card mt-36 ml-10 ">
            <h1 className="text-[#DDA80E] font-bold">About Me</h1>
            <p className="text-white pb-3">
              Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit.
              Sequi quam incidunt amet <br />
              itaque ab dolorum quaerat eveniet ex. Poss
            </p>
            <p className="text-white text-lg">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              asperiores <br /> ratione aperiam eveniet quis, voluptate numquam
              rerum aut?
            </p>
            <div className="btn pt-4  ">
              <button className="bg-[#DDA80E] px-3 py-2 rounded-3xl mr-5 text-white">
                Download Cv
              </button>
              <button className="border-2 border-[#DDA80E] border-solid rounded-3xl px-3 py-2 text-white">
                Portfolio
              </button>
            </div>
          </div>
        </div>
        <div className="hero-icon">
          <h1 className="text-yellow-400 text-center mt-24 font-bold text-2xl ">
            Services
          </h1>

          <div className="icons  ">
            <div className="icon grid grid-cols-3 gap-6 ml-28  mt-8 w-[80%] h-auto ">
              <div className="icon-1 flex flex-col items-center text-white bg-[#212322] p-6  rounded-lg ">
                <FaCreativeCommonsShare className="text-[#DDA80E] text-3xl" />
                <h1 className="text-white">Creative Design</h1>
                <p className="text-white">
                  Lorem ipsum dolor sit amet <br /> consectetur adipisicing
                  elit.
                  <br /> commodi deleniti vero nemo !
                </p>
              </div>

              <div className="icon-2  flex flex-col items-center text-white bg-[#212322] p-6  rounded-lg ">
                <TbWashDrycleanOff className="text-[#DDA80E] text-3xl" />
                <h1 className="text-white">Creative Design</h1>
                <p className="text-white">
                  Lorem ipsum dolor sit amet <br /> consectetur adipisicing
                  elit.
                  <br /> commodi deleniti vero nemo !
                </p>
              </div>
              <div className="icon-3  flex flex-col items-center text-white bg-[#212322] p-6  rounded-lg ">
                <SiSquarespace className="text-[#DDA80E] text-3xl" />
                <h1 className="text-white">Creative Design</h1>
                <p className="text-white">
                  Lorem ipsum dolor sit amet <br /> consectetur adipisicing
                  elit.
                  <br /> commodi deleniti vero nemo !
                </p>
              </div>
              <div className="icon-4  flex flex-col items-center text-white bg-[#212322] p-6  rounded-lg ">
                <BsBootstrapReboot className="text-[#DDA80E] text-3xl" />
                <h1 className="text-white">Creative Design</h1>
                <p className="text-white">
                  Lorem ipsum dolor sit amet <br /> consectetur adipisicing
                  elit.
                  <br /> commodi deleniti vero nemo !
                </p>
              </div>
              <div className="icon-5  flex flex-col items-center text-white bg-[#212322] p-6  rounded-lg ">
                {" "}
                <SiFontforge className="text-[#DDA80E] text-3xl" />
                <h1 className="text-white">Creative Design</h1>
                <p className="text-white">
                  Lorem ipsum dolor sit amet <br /> consectetur adipisicing
                  elit.
                  <br /> commodi deleniti vero nemo !
                </p>
              </div>
              <div className="icon-6  flex flex-col items-center text-white bg-[#212322] p-6  rounded-lg ">
                {" "}
                <MdAutoAwesomeMotion className="text-[#DDA80E] text-3xl" />
                <h1 className="text-white">Creative Design</h1>
                <p className="text-white">
                  Lorem ipsum dolor sit amet <br /> consectetur adipisicing
                  elit.
                  <br /> commodi deleniti vero nemo !
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="down-icon flex justify-evenly mt-14 mb-4 mx-20">
        <MdPersonPin className="text-[#DDA80E] text-2xl" />
        <IoIosFlower className="text-[#DDA80E] text-2xl" />
        <CiHeart className="text-[#DDA80E] text-2xl" />
        <FaTimesCircle className="text-[#DDA80E] text-2xl" />
      </div>
    </>
  );
}

export default About;
