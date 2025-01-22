import './App.css';
import {useState,useEffect} from 'react';
import Square from './components/Square';
import {Patterns} from './Patterns'


function App() {

  const [board,setBoard] = useState(["","","","","","","","",""]);
  const [player,setPlayer] = useState("O");
  const [result,setResult] = useState({winner:"none",state:"none"});

  useEffect(() => {
    checkwin();
    checktie();
    if(player=="X"){
      setPlayer("O");
    }else{
      setPlayer("X");
    }

  }, [board])

  useEffect(() => {
    if(result.state!="none"){
      alert(`Game finished! Winning Player: ${result.winner}`)
      restart();
    }
  },[result])


  const chooseSquare =(square) => {
    setBoard(board.map((val,idx) => {
      if(idx==square && val == ""){
          return player;
      }
      return val;
    }));

   

  };

  const checkwin = () => {
    Patterns.forEach((currentPattern) => {
      const firstplayer = board[currentPattern[0]];
      if(firstplayer=="") return;
      let foundwinner = true;
      currentPattern.forEach((idx) => {
        if(board[idx]!=firstplayer){
          foundwinner = false;
        }
      })

      if(foundwinner){
        setResult({winner:player,state:"won"})
      }

    })
  }

  const checktie = () => {
    let filled = true;
    board.forEach((square) => {
      if(square==""){
        filled =false;
      }
    });

    if(filled){
      setResult({winner: "noone",state:"Tie"});
    }
  }

  const restart = () => {
    setBoard(["","","","","","","","",""]);
    setPlayer("X");
  }

  return (
    <div className="App">
      <div className="board">
        <div className='row'>
          <Square 
          val= {board[0]} 
          chooseSquare ={() => {chooseSquare(0)}}/>

          <Square 
          val= {board[1]} 
          chooseSquare = {() => {chooseSquare(1)}}/>

          <Square 
          val= {board[2]} 
          chooseSquare = {() => {chooseSquare(2)}}/>
        </div>
        <div className='row'>
        <Square 
          val= {board[3]} 
          chooseSquare ={() => {chooseSquare(3)}}/>

          <Square 
          val= {board[4]} 
          chooseSquare = {() => {chooseSquare(4)}}/>

          <Square 
          val= {board[5]} 
          chooseSquare = {() => {chooseSquare(5)}}/>

        </div>
        <div className='row'>
        <Square 
          val= {board[6]} 
          chooseSquare ={() => {chooseSquare(6)}}/>

          <Square 
          val= {board[7]} 
          chooseSquare = {() => {chooseSquare(7)}}/>

          <Square 
          val= {board[8]} 
          chooseSquare = {() => {chooseSquare(8)}}/>
        </div>

      </div>
    </div>
  );
}

export default App;
