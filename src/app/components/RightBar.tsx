import { FcGoogle } from "react-icons/fc";

type Props = {};

const RightBar = (props: Props) => {
  return (
    <div className="h-screen md:flex w-3/6 hidden">
      <div className="border h-64 mt-8 m-14 w-80 rounded-md border-gray-700 ">
        <h1 className="mt-2 ml-2 font-bold text-xl">New to Twitter</h1>
        <p className="text-gray-500 text-[12px] ml-2 my-2">
          Sign up now to get your own personalized timeline!
        </p>
        <div className="flex flex-col space-y-3">
          <button className="flex items-center justify-center bg-gray-100 w-72 ml-2 py-2 space-x-2 rounded-full">
            <FcGoogle />
            <p className="text-black text-sm font-semibold">
              Sign up with Google
            </p>
          </button>
          <button className="flex items-center justify-center bg-gray-100 w-72 ml-2 py-2 space-x-2 rounded-full">
            <FcGoogle />
            <p className="text-black text-sm font-semibold">
              Sign up with Google
            </p>
          </button>
          <button className="flex items-center justify-center bg-gray-100 w-72 ml-2 py-2 space-x-2 rounded-full">
            <FcGoogle />
            <p className="text-black text-sm font-semibold">
              Sign up with Google
            </p>
          </button>
        </div>
        <p className="text-xs m-2 text-gray-500">
          By signing up, you agree to the 
          <span className="text-sky-500"> Terms of Service </span>
          and <br />
          <span className="text-sky-500">
          Privacy Policy

          </span>
           , including
          <span className="text-sky-500">Cookie Use.</span>
        </p>
      </div>
    </div>
  );
};

export default RightBar;
