
type GoalCardProps = {
  order: number | string;
  opponent: string;
  tournament: string;
}

export default function GoalCard({ order, opponent, tournament }: GoalCardProps) {

    return (
      <div style={{width: '25%', margin: '4px'}}>
        <div style={{border: '1px solid #d596d5',  display:'flex' }}>
          <div style={{width: '20%', backgroundColor: '#d596d5', display: 'flex', color: 'white', fontSize: '32px', justifyContent: 'center', alignItems: 'center'}}>
            <span>{(order + "").padStart(3, "0")}</span>
          </div>
          <div style={{flexGrow: 5, padding: '4px'}}>
            <div style={{fontSize: '20px'}}>vs {opponent}</div>
            <div style={{fontSize: '13px', color: '#aaa'}}>{tournament}</div>
          </div>
        </div>
      </div>
    )
  }