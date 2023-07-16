import getChampionInfo from './champList';
import getRotation from './rotation';
import { championsInfo } from './types';

async function weekRotation() {
  const arrayListNumbers = await getRotation();
  const championsInfo = await getChampionInfo();

  const completeRotationInfo: championsInfo[] = [];

  if (arrayListNumbers) {
    arrayListNumbers.forEach((id: number) => {
      const championsArray = Object.keys(championsInfo).find((champion) => championsInfo[champion].key === `${id}`);

      if (championsArray) {
        const pj: championsInfo = {
          name: championsInfo[championsArray].name,
          id: championsInfo[championsArray].key,
          title: championsInfo[championsArray].title,
          tags: championsInfo[championsArray].tags,
        };
        console.log(pj);
        completeRotationInfo.push(pj);
      }
    });
  }

  return completeRotationInfo;
}

export default weekRotation;
