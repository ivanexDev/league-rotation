const getRotation = async () => {
  try {
    const API_KEY = import.meta.env.VITE_API_KEY;
    const url = `https://la2.api.riotgames.com/lol/platform/v3/champion-rotations?api_key=${API_KEY}`;
    const res = await fetch(url);

    const data = await res.json();
    const rotation = data.freeChampionIds;

    return rotation;
  } catch (error) {
    console.log(error);
  }
};

export default getRotation;
