const getChampionInfo = async () => {
	try {
		const url =
			"http://ddragon.leagueoflegends.com/cdn/12.16.1/data/en_US/champion.json";

		const res = await fetch(url);
		const data = await res.json();
		return data.data;
	} catch (error) {
		console.log(error);
	}
};

export default getChampionInfo;
