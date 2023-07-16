const getRotation = async () => {
	try {
		const url =
			"https://la2.api.riotgames.com/lol/platform/v3/champion-rotations?api_key=RGAPI-f0550c8d-9902-49b4-bc3b-16bdac9e4167";
		const res = await fetch(url);

		const data = await res.json();
		const rotation = data.freeChampionIds;

		return rotation;
	} catch (error) {
		console.log(error);
	}
};

export default getRotation;
