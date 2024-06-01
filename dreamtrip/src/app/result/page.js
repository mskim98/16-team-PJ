"use client";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

export default function ResultPage() {
  const router = useRouter();
  const { register, handleSubmit } = useForm();

  // const placeData = usePlaceStore((state) => state.placeData);

  const onNext = (data) => {
    router.push("/result");
  };

  return (
    <main className="w-full flex flex-1 flex-col align-items justify-between p-[20px]">
      <div className="my-[20px] w-full bg-gray p-3 rounded-2xl focus:outline-none resize-none font-pre text-[14px]">
        <div className="flex justify-center align-items py-5">
          <img src="ExampleImage1.png" alt="예시이미지"></img>
        </div>
        <div className="text-xl ml-2 mb-3 underline text-blue-600">해운대</div>
        <div className="ml-2">나는 해운대에 가서 수영 할거야</div>
      </div>
      <div className="w-full my-[15px] bg-gray p-3 rounded-2xl focus:outline-none resize-none font-pre text-[14px]">
        <div className="flex justify-center align-items py-5">
          <img src="ExampleImage2.png" alt="예시이미지"></img>
        </div>
        <div className="text-xl ml-2 mb-3 underline text-blue-600">
          광안리 해수욕장
        </div>
        <div className="ml-2">나는 광안리에 가서 야경을 볼거야</div>
      </div>
    </main>
  );
}
