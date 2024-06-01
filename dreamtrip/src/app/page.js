"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const regionList = ["부산", "미국", "울릉도", "프랑스"];

const Home = () => {
  const router = useRouter();
  return (
    <div className="h-screen flex flex-col justify-center space-y-10 px-6">
      <div className="flex justify-center align-items">
        <Image
          src="/DreamTripLogo.png"
          alt="로고"
          width={150}
          height={100}
        ></Image>
      </div>
      <div>
        <button
          onClick={() => router.push("/region")}
          className="w-full bg-primary text-white py-2 px-4 rounded-xl text-center"
        >
          여행 계획 추가하러 가기
        </button>
      </div>
      <div class="w-full border-t border-black-400"></div>
      <div className="text-mx text-center">이전 기록</div>
      <div className="flex flex-col justify-center items-center">
        {regionList.map((region, i) => (
          <div className="m-2 flex flex-col justify-center items-center">
            <div key={i} className="">
              <Link href="/" className="text-xl">
                {region}
              </Link>
            </div>
            <div className="w-[200px] h-[1px] bg-black"></div>
          </div>
        ))}
      </div>
    </div>
  );
};
