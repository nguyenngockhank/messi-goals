// import Image from 'next/image'
import GoalCard from '@/components/GoalCard'
import styles from './page.module.css'

import path from 'path';
import { promises as fs } from 'fs';

export default async function Home() {
  const goals = await getAllGoals();
  return (
    <main >
      <h1 className={styles.h1}>Messi&apos;s Goals</h1>

      <div style={{display: 'flex', flexWrap: 'wrap'}}>
        {
          goals.map((goal) => <GoalCard key={goal.id} 
            tournament={goal.meta.competition} 
            order={goal.order} 
            opponent={goal.meta.homeTeam} 
          />)
        }
      </div>
    </main>
  )
}

type Goal = {
  id: string;
  order: string | number;
  tournament: string;
  opponent: string;
  meta: {
    competition: string;
    homeTeam: string;
  }
}

async function getAllGoals() : Promise<Goal[]> {
  const jsonDirectory = path.join(process.cwd(), 'data');

  const fileContents = await fs.readFile(jsonDirectory + '/goals.json', 'utf8');

  return JSON.parse(fileContents).map((item : any) => ({...item, meta: JSON.parse(item.meta)}))
}