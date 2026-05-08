import './App.css';

function Block({ number, color }) {
  const handleClick = () => {
    alert(number);
  };

  // dynamically creates the class name with the color of the block
  return (
    <div className={`block ${color}`} onClick={handleClick}>
      {number}
    </div>
  );
}

function App() {
  const blocks = [
    { number: 7, color: 'black' },
    { number: 8, color: 'mediumblue' },
    { number: 9, color: 'crimson' },
    { number: 4, color: 'goldenrod' },
    { number: 5, color: 'black' },
    { number: 6, color: 'mediumblue' },
    { number: 1, color: 'crimson' },
    { number: 2, color: 'goldenrod' },
    { number: 3, color: 'black' },
  ];

  // build the blocks
  return (
    <div className="app">
      <h1>Color Blocks</h1>
      <div className="blocks">
        {blocks.map((block) => (
          <Block key={block.number} number={block.number} color={block.color} />
        ))}
      </div>
    </div>
  );
}

export default App;
