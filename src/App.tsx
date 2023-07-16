import { useEffect, useState } from 'react';
import './App.css';
import weekRotation from './API';
import { championsInfo } from './API/types';
import { ChampionCard } from './components/ChampionCard';

function App() {
  useEffect(() => {
    weekRotation().then((res) => setChampions(res));
  }, []);

  const [champions, setChampions] = useState<championsInfo[]>();
  return (
    <>
      <h1>League Rotation</h1>

      <div className="container">
        {champions &&
          champions.map((champion: championsInfo) => {
            return <ChampionCard key={`${champion.id}-${champion.name}`} data={champion} />;
          })}
      </div>
    </>
  );
}

export default App;
