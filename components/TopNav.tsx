import Image from "next/image";
import pb from "../pages/api/pocketbase";

const TopNav = () => {
  const userModel = pb.authStore.model;

  return (
    <div class="p-4 flex justify-between bg-white">
      <a href="/" class="">
        <Image
          src="/images/mobilelogo.jpg"
          width={120}
          height={40}
          alt="Ebesa icon"
        />
      </a>
      {pb.authStore.isValid ? (
        <a href="/Profile">
          <img
            src={userModel?.avatar}
            width={40}
            height={40}
            class="w-10 h-10 rounded-full"
          />
        </a>
      ) : (
        <a href="/auth/Signin">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        </a>
      )}
    </div>
  );
};

export default TopNav;
