import React,{ FC, useState } from 'react';



interface BlockProps{
  position:number,
  onClick:any,
  value:string
}

const Block: FC<BlockProps> = ({ value,position,onClick})=>{
  
  
  return (
    <div className={`block ${!onClick?"disabled":""}`} onClick={()=>onClick(position)}>
      <span>{value}</span>
    </div>
  )
}

const Grid:FC = (props)=>{
  const gridCount = 9
  const [ Blocks, setBlock ] = useState(Array(gridCount).fill(null))
  const [isPlayerX,setisPlayerX] = useState(true)
  const [ gameOver,setgameOver ] = useState(false)
  const blockClickedController=(position:number):void=>{
      
      const newBlocks = Blocks.map((i:any,idx:number)=>{
        if(idx===position)return isPlayerX ?'X':'O'
        return i
      })
      setBlock(newBlocks)
      const newPlayer = !isPlayerX
      setisPlayerX(newPlayer)
      // console.log(newBlocks)
      // setBlock(newBlocks)
    if (!newBlocks.find(value => null)) CheckGameState(newBlocks)
    
  }
  const CheckGameState=(blocks:Object):void=>{
      console.log(blocks)
  }
  // Blocks.map(i=>console.log(i))
  return (
    
    <div className="grid">
        
        <header>
          {
            gameOver?
              "GameOver"
            :
            `Curent Player : ${ isPlayerX?"X":"O"}`
          }
          
        </header>

        <div className="row" >
          <Block value={Blocks[0]} onClick={!gameOver?blockClickedController:null} position={0} />
          <Block value={Blocks[1]} onClick={!gameOver?blockClickedController:null} position={1} />
          <Block value={Blocks[2]} onClick={!gameOver?blockClickedController:null} position={2} />
        </div>
        <div className="row" >
          <Block value={Blocks[3]} onClick={!gameOver?blockClickedController:null} position={3} />
          <Block value={Blocks[4]} onClick={!gameOver?blockClickedController:null} position={4} />
          <Block value={Blocks[5]} onClick={!gameOver?blockClickedController:null} position={5} />
        </div>
        <div className="row" >
          <Block value={Blocks[6]} onClick={!gameOver?blockClickedController:null} position={6} />
          <Block value={Blocks[7]} onClick={!gameOver?blockClickedController:null} position={7} />
          <Block value={Blocks[8]} onClick={!gameOver?blockClickedController:null} position={8} />
        </div>
      </div>
  )
}

// const App: React.FC = () => {
//   return (
//     <div style={ APP_STYLES } className="App">
      
//     </div>
//   );
// }

export default Grid;
