import { NextApiRequest, NextApiResponse } from "next";
import { dall23 } from "../../images";
import { apiKey } from "../../../../util/api";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "POST") {
        const placeList = req.body.list;
        const result = {urls: []};
        for (let i = 0; i < placeList.length; i++) {
            const u = await dall23(`${placeList[i].place}에서 ${placeList[i].contents}를 하는 사람을 그려줘`, apiKey);
            result.urls.push(u);
        }
        res.status(200).json(result);
    }
}