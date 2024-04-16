import { useEffect, useState } from 'react';
const FetchDataById = (id) => {

	const URL = `https://jsonplaceholder.typicode.com/posts/${id}`
	const [loading, setLoading] = useState(true);
	const [article, setArticle] = useState({});

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(URL);
				if (response.ok) {
					const data = await response.json();
					setArticle(data);
					setLoading(false);
				} else {
					throw new Error(`Something went wrong: ${response.status}`);
				}
			} catch (error) {
				console.error(error);
			};
		}

		fetchData();
	}, [URL]);

	return {loading, article};

};
export default FetchDataById;