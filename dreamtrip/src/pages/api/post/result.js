import { connectDB } from "@/util/database.js";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
	if (req.method === "POST") {
		try {
			// 데이터 추출
			const data = { title: "req.body.name", content: " req.body.placeholder" };

			// 데이터베이스 연결
			const db = (await connectDB()).db("dreamtrip");

			// 데이터 삽입
			const result = await db.collection("post").insertOne(data);

			// 성공 응답
			console.log(result);
			res.status(200).json({ message: "Data inserted successfully", result });
		} catch (error) {
			// 오류 처리
			console.error(error);
			res.status(500).json({ error: "An error occurred while inserting data" });
		}
	} else {
		// 잘못된 요청 방법
		res.status(405).json({ error: "Method not allowed" });
	}
}
