import { NextApiRequest, NextApiResponse } from "next";
import { apiKey } from "../../../../util/api";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const region = req.body.region;
    if (!region) {
      res.status(400).send("Region is required");
      return;
    }
    // console.log("region: " + region);
    const result = await recommand(region);
    // res.status(200).send("result");
    res.setHeader("Content-Type", "application/json");
    // console.log(result);
    res.status(200).send(JSON.stringify(result));
  } else res.status(405).send("NO");
}

async function recommand(region: string) {
  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo-16k",
      n: 1,
      response_format: { type: "text" },
      messages:
        // [
        //     {
        //       "role": "system",
        //       "content": "You are a helpful assistant."
        //     },
        //     {
        //       "role": "user",
        //       "content": "Hello!"
        //     }
        // ]
        [
          {
            role: "system",
            content:
              "You are a guide to recommend the best place to visit in the region.",
          },
          {
            role: "user",
            content: `${region}에 관련된 장소의 이름과 설명을 5개 이상 추천해줘. Json 형태로 출력해줘. 예시: {list: [{name: "첨성대", description: "첨성대에 대한 설명"}, {name: "경복궁": "경복궁에 대한 설명"}]`,
          },
        ],
    }),
  });

  const data = await response.json();

  if (!data || !data.choices || data.choices.length === 0 || data.errors) {
    console.log("Error  ");
    console.error(data);
    return "";
  }

  return data.choices[0].message.content;

  // .then((response) => {
  //     console.log(response);
  //     return  response.json()
  // })
  // .then((data) => {
  //     if (!data || !data.choices || data.choices.length === 0 || data.errors) {
  //         console.log("Error  ")
  //         console.error(data);
  //         return "";
  //     }
  //     // const a = data.json();

  //     return data.choices[0].message.content;
  //     // return a.choices[0].message.content;
  // });
}
