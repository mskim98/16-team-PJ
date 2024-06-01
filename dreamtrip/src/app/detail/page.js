"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";

const res = {
  recommend: "좋아요, 부산에서 유명한 여행지를 아래에 몇 가지 추천해드릴게요!",
  list: [
    {
      place: "해운대 해수욕장",
      explain:
        "대한민국에서 가장 유명한 해수욕장 중 하나로, 아름다운 백사장과 푸른 바다를 자랑합니다. 해운대 주변에는 다양한 카페, 레스토랑, 쇼핑센터 등이 있어 다양한 활동을 즐길 수 있습니다.",
    },
    {
      place: "광안리 해수욕장",
      explain:
        "광안대교가 보이는 해변으로, 밤에는 다리의 멋진 조명쇼를 볼 수 있습니다. 바다를 배경으로 한 카페와 레스토랑이 많아 저녁 시간을 보내기에 좋습니다.",
    },
    {
      place: "감천 문화마을",
      explain:
        "형형색색의 집들이 언덕을 따라 자리 잡고 있는 마을로, 벽화와 예술 작품이 가득합니다. 독특한 골목길과 전망대를 통해 부산의 아름다운 경치를 감상할 수 있습니다.",
    },
  ],
};

export default function DetailPage() {
  const router = useRouter();
  const { register, handleSubmit } = useForm();
  const [isPlus, setIsPlus] = useState(false);

  // const placeData = usePlaceStore((state) => state.placeData);

  const onNext = (data) => {
    router.push("/result");
  };

  return (
    <main className="w-full flex flex-1 flex-col align-items justify-between">
      <section className="flex-1 flex flex-col">
        <div className="flex flex-col bg-gray rounded-xl p-[15px]">
          <div className="flex">
            <div className="w-[25px] h-[25px] rounded-full bg-skyblue mr-[8px]"></div>
            <div className="flex-1 text-wrap">{res.recommend}</div>
          </div>
          {res.list.map((data, index) => (
            <div key={index} className="my-[8px]">
              <div>
                {index + 1}. {data.place}
              </div>
              <div>{data.explain}</div>
            </div>
          ))}
        </div>
        <form className="mt-[20px] flex flex-col">
          <label>Plan your dream</label>
          <input
            type="text"
            {...register("region1")}
            className="py-[10px] px-[5px] border-b border-black focus:bg-white focus:outline-none"
            placeholder="장소를 입력해주세요"
          />
          <textarea
            className="bg-gray rounded-xl mt-[10px] p-[8px]"
            placeholder="당신의 계획을 적어주세요!"
          />
        </form>
        <button
          onClick={() => setIsPlus(true)}
          className="m-auto my-[10px] bg-primary text-white py-2 px-4 rounded-xl text-center"
        >
          장소 추가하기
        </button>
        {isPlus && (
          <>
            <form className="mt-[20px] flex flex-col">
              <label>Plan your dream</label>
              <input
                type="text"
                {...register("region2")}
                className="py-[10px] px-[5px] border-b border-black focus:bg-white focus:outline-none"
                placeholder="장소를 입력해주세요"
              />
              <textarea
                className="bg-gray rounded-xl mt-[10px] p-[8px]"
                placeholder="당신의 계획을 적어주세요!"
              />
            </form>
            <button
              onClick={() => setIsPlus(true)}
              className="m-auto my-[10px] bg-primary text-white py-2 px-4 rounded-xl text-center"
            >
              장소 추가하기
            </button>
          </>
        )}
      </section>
      <button
        className="w-full bg-primary text-white py-2 px-4 rounded-xl text-center"
        onClick={handleSubmit(onNext)}
      >
        다음으로
      </button>
    </main>
  );
}
