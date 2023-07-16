import React from 'react';
import './ChampionCard.css';
import { championsInfo } from '../../API/types';

export type ChampionCardProps = {
  data: championsInfo;
};

const ChampionCard: React.FC<ChampionCardProps> = ({ data }) => {
  let fixedName = '';

  if (data.name === "Bel'Veth") {
    fixedName = 'Belveth';
  } else {
    fixedName = data.name.replace("'", '');
  }

  const imgUrl = `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${fixedName}_0.jpg`;

  return (
    <div className="championcard-container">
      <img className="championcard-image" src={imgUrl} alt={` Champion Image: ${data.name}`} />
    </div>
  );
};

export default ChampionCard;
