import { NextApiRequest, NextApiResponse } from "next";
import { apiKey } from "../../../util/api";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "GET") {
        if (req.query.prompt == undefined || req.query.prompt == "") {
            res.status(400).json({ error: "Prompt is required" });
            return;
        }
        res.setHeader("Content-Type", "text/plain");
        const prompt: string = req.query.prompt as string;
        const url = await dall23(prompt, apiKey);
        if (!url) {
            res.status(500).json({ error: "Error generating image" });
            return;
        }
        // console.log(url);
        res.status(200).send(url);
        // res.status(200).send();
    }
    res.status(405).json({ error: "Method Not Allowed" });
}

async function dall23(prompt: string, key: string) {
    let result: string;
    await fetch("https://api.openai.com/v1/images/generations", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${key}`,
        },
        body: JSON.stringify({
            model: "dall-e-3",
            prompt: prompt,
            "n": 1,
            "size": "1024x1024",
            response_format: "url",
        }),
    })
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        if (!data || !data.data || data.data.length === 0 || data.errors) {
            console.log("Error  ")
            console.error(data);
            return "";
        }
        result = data.data[0].url;
    });
    return result;
}