"use client";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import usePlaceStore from "../../store/placeStore";

export default function RegionPage() {
  const router = useRouter();
  const { register, handleSubmit } = useForm();

  const onNext = async (data) => {
    try {
      const res = await fetch("/api/post/region", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ region: data.region }),
      });

      if (res.ok) {
        const result = await res.json();
        console.log(result);
        usePlaceStore.setPlaceData(result);
      }
      router.push("/detail");
    } catch (error) {
      console.error("Error posting region data:", error);
    }
  };
  return (
    <main className="w-full flex flex-1 flex-col align-items justify-between">
      <section className="flex-1 flex flex-col justify-center items-center">
        <h1 className="text-[26px] text-center mb-[40px]">
          어디로 여행을 가실 건가요?
        </h1>
        <form>
          <input
            type="text"
            {...register("region")}
            className="text-center py-[10px] px-[5px] mx-[40px] text-[18px] border-b border-black focus:bg-white focus:outline-none"
            placeholder="ex. 부산, 미국 ..."
          ></input>
        </form>
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
