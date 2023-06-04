import { BsTwitter } from "react-icons/Bs";
import { FaHashtag } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";

type Props = {};

const leftbar = (props: Props) => {
  return (
    <div className="h-screen  flex flex-col items-end pr-5   w-2/6">
      <div >
        <BsTwitter size={30} className="text-sky-600 my-4 mr-40 " />
      </div>
      <div className="flex items-center justify-evenly my-4 mr-12">
        <FaHashtag size={25} />
        <p className="hidden md:flex text-2xl font-boldbold ml-10">Explore</p>
      </div>
      <div className="flex items-center justify-evenly my-4 mr-12 ">
        <FiSettings size={25} />
        <p className="hidden md:flex text-2xl font-boldbold ml-10">Settings</p>
      </div>
    </div>
  );
};

export default leftbar;
