const getRotation = async () => {
  try {
    const url =
      'https://la2.api.riotgames.com/lol/platform/v3/champion-rotations?api_key=RGAPI-11a78906-10c5-4938-90df-89906b1751a7';
    const res = await fetch(url);

    const data = await res.json();
    const rotation = data.freeChampionIds;

    return rotation;
  } catch (error) {
    console.log(error);
  }
};

export default getRotation;
