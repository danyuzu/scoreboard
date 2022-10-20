// const title= React.createElement(
//   'h1',
//   {id: 'main-title', title: 'this is a title'},
//   'my first React Elementt'
// );

// const desc= React.createElement(
//   'p',
//   null,
//   'i just learned how to create a React node and render it into the DOM'
// );
// const header = React.createElement(
//   'header',
//   null,
//   title,
//   desc
// // );
//  const mytitleID= 'main-title';
//  const name= 'Daniel';

// const title= 'My first React Element';

// const desc= 'i just learned how to create a React node and render it into the DOM';

// const header= (
//   <header>
//     <h1 id={mytitleID}>{name}'s First React Element!</h1>
//     <p>{desc}</p>
//   </header>
// );


function Header(props)
{
  console.log(props);
  return (

    <header>

      <h1>{props.title}</h1>
      <span className="stats">Players: {props.totalPlayers}</span>
    </header>
  );
}
class Counter extends React.Component{
//
//   constructor()
//   {
//     super()
//     this.state= {
// score:0
//     };
//   }
//sameshit
state= {
  score:0
};
decrementScore()
{
  this.setState( prevState =>
    ({
      
    score: this.state.score - 1
      
    }));
}
incrementScore()
{
  console.log("Hi, from inside incrementScore motherfuckers!");
  this.setState( prevState =>
   ({ 
      score: prevState.score + 1
   
    }));
}

  render ()
  {
    return(
      <div className="counter">
  <button className='counter-action decrement' onClick={this.decrementScore.bind(this)}>-</button>
  <span className='counter-score'>{this.state.score}</span>
  <button className='counter-action increment' onClick={this.incrementScore.bind(this)}>+</button>
  
  </div>
    );
    
  }
  
}



const Player= (props) => {
  return(
<div className='player'>
<span className="player-name">
    <button className="remove-player" onClick={() =>props.removePlayer(props.id)}>x</button>
  {props.name}
</span>
<Counter score={props.score}/>

</div>

  );
}

class App extends React.Component
{
  state= {
    players: [
      {
        name: "Daniel",
        score: 98,
        id: 1
      },
      {
        name: "Treasure",
        score: 85,
        id: 2
      },
      {
        name: "Ashley",
        score: 95,
        id: 3
      },
      {
        name: "James",
        score: 80,
        id: 4
      }
    ]
  }

  handleRemovePlayer= (id) =>
  {
this.setState(prevState =>
  {
    return{
    players: prevState.players.filter(p => p.id !== id )
    }
  });
  }


  render()
  {
    return(
      <div className='scoreboard'>
        <Header title="Scoreboard" totalPlayers={this.state.players.length}/>
  
        {/* Players list */}
              {this.state.players.map(player =>
                <Player
                 name={player.name}
                 id={player.id}
                  score={player.score}
                  key={player.id.toString()}
                  removePlayer={this.handleRemovePlayer}
                  />
                  
              )}
        
        
      </div>
    );
  }
  
}



ReactDOM.render(
<App  />,
  document.getElementById('root')
);