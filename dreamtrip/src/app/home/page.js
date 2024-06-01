export default async function Home() {
	return (
		<div>
			<form action="/api/post/result" method="POST">
				<input name="title" placeholder="글제목" />
				<input name="content" placeholder="글내용" />
				<button type="submit">전송</button>
			</form>
		</div>
	);
}
