"use client";
import { FcGoogle } from "react-icons/fc";
import { BsApple } from "react-icons/bs";

const RightBar = () => {
  return (
    <div className="md:flex w-3/6 h-screen hidden flex-col items-center ">
      <div className="border h-64 mt-8 m-14 mb-4 w-80 rounded-lg border-gray-700 ">
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
            <BsApple className="text-black" />
            <p className="text-black text-sm font-semibold">
              Sign up with Apple
            </p>
          </button>
           {/* You can open the modal using ID.showModal() method */}
      <button
        className="flex text-black text-sm font-bold items-center justify-center bg-gray-100 w-72 ml-2 py-2 space-x-2 rounded-full"
        onClick={() => window.my_modal_3.showModal()}
      >
        Create account
      </button>
      <dialog id="my_modal_3" className="modal">
        <form method="dialog" className="modal-box">
          <button
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >
            ✕
          </button>
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">Press ESC key or click on ✕ button to close</p>
        </form>
      </dialog>
        </div>
        <p className="text-xs m-2 text-gray-500">
          By signing up, you agree to the
          <span className="text-sky-500"> Terms of Service </span>
          and <br />
          <span className="text-sky-500">Privacy Policy</span>, including
          <span className="text-sky-500">Cookie Use.</span>
        </p>
      </div>

      <div className="grid grid-cols-3">
        <button className="text-gray-500 text-sm hover:underline">
          Terms of Service
        </button>
        <button className="text-gray-500 text-sm hover:underline">
          Privacy Policy
        </button>
        <button className="text-gray-500  text-sm hover:underline">
          Cookie Policy
        </button>
        <button className="text-gray-500 text-sm  hover:underline">
          Accessibility
        </button>
        <button className="text-gray-500 text-sm  hover:underline">
          Add info
        </button>
        <button className="text-gray-500 text-sm  hover:underline">
          @ 2023 X Corp.
        </button>
      </div>
     
    </div>
  );
};

export default RightBar;
