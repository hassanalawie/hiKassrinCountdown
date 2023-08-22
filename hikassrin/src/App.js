import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import DisplayGrid from './components/DisplayGrid';

function App() {
  const [letters, setLetters] = useState([
    ['G', 'V', 'M', 'E'],
    ['I', 'E', 'O', 'D'],
    ['R', 'L', 'E', 'N'],
    ['L', 'F', 'R', 'I']
  ]);

  const [selectedIndices, setSelectedIndices] = useState([]);
  const [words, setWords] = useState([]);
  const [clue1, setClue1] = useState(false);
  const [showNewDiv, setShowNewDiv] = useState(false);

  const newDivRef = useRef(null);

  const handleLetterClick = (rowIndex, columnIndex) => {
    setSelectedIndices((prevSelectedIndices) => {
      const key = `${rowIndex}-${columnIndex}`;
      if (prevSelectedIndices.includes(key)) {
        return prevSelectedIndices.filter((index) => index !== key);
      }
      return [...prevSelectedIndices, key];
    });
  };

  const clearSelectedLetters = () => {
    setSelectedIndices([]);
  };

  const addSelectedAsWord = () => {
    const selectedWord = selectedIndices.map((index) => letters[index.split('-')[0]][index.split('-')[1]]).join('');
    if (selectedWord) {
      setWords((prevWords) => [...prevWords, selectedWord]);
      setSelectedIndices([]);

      const requiredWords = ["ME", "LOVE", "ME", "GIRLFRIEND"];
      if (requiredWords.every((word) => words.includes(word))) {
        setClue1(true);
        setShowNewDiv(true);
      }
    }
  };

  const deleteLastWord = () => {
    if (words.length > 0) {
      const newWords = [...words];
      newWords.pop();
      setWords(newWords);
    }
  };

  useEffect(() => {
    const requiredWords = ["ME", "LOVE", "ME", "GIRLFRIEND"];
    if (requiredWords.every((word) => words.includes(word))) {
      setClue1(true);
      setShowNewDiv(true);
    }
  }, [words]);

  useEffect(() => {
    if (showNewDiv && newDivRef.current) {
      newDivRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [showNewDiv]);

  return (
    <div className="App">
      <DisplayGrid />
      <div style={{ backgroundColor: "#445A42", padding: "50px", margin: "0px" }}>
        <p>Solve the Riddle</p>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
          <table style={{ margin: "50px 0px" }}>
          <tr>
            <td style={{borderBottom:"5px solid #000", width:"40px"}}></td>
            <td style={{borderBottom:"5px solid #000", width:"40px"}}></td>
            <td style={{width:"60px"}}></td>
            <td style={{borderBottom:"5px solid #000", width:"40px"}}></td>
            <td style={{borderBottom:"5px solid #000", width:"40px"}}></td>
            <td style={{borderBottom:"5px solid #000", width:"40px"}}></td>
            <td style={{borderBottom:"5px solid #000", width:"40px"}}></td>
            <td style={{width:"60px"}}></td>
            <td style={{borderBottom:"5px solid #000", width:"40px"}}></td>
            <td style={{borderBottom:"5px solid #000", width:"40px"}}></td>
            <td style={{width:"60px"}}></td>

            <td style={{borderBottom:"5px solid #000", width:"40px"}}></td>
            <td style={{borderBottom:"5px solid #000", width:"40px"}}></td>
            <td style={{borderBottom:"5px solid #000", width:"40px"}}></td>
            <td style={{borderBottom:"5px solid #000", width:"40px"}}></td>
            <td style={{borderBottom:"5px solid #000", width:"40px"}}></td>
            <td style={{borderBottom:"5px solid #000", width:"40px"}}></td>
            <td style={{borderBottom:"5px solid #000", width:"40px"}}></td>
            <td style={{borderBottom:"5px solid #000", width:"40px"}}></td>
            <td style={{borderBottom:"5px solid #000", width:"40px"}}></td>
            <td style={{borderBottom:"5px solid #000", width:"40px"}}></td>
          </tr>
        </table>

        <table>
          {letters.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((letter, columnIndex) => (
                <td
                  key={`${rowIndex}-${columnIndex}`}
                  style={{
                    textAlign: "center",
                    height: "60px",
                    width: "60px",
                    backgroundColor: selectedIndices.includes(`${rowIndex}-${columnIndex}`) ? "#9BF5A5" : "#F5D39F",
                    fontFamily: "Arial",
                    fontWeight: "600",
                    padding: "20px",
                    fontSize: "50pt",
                    borderRadius: "10px",
                    cursor: "pointer"
                  }}
                  onClick={() => handleLetterClick(rowIndex, columnIndex)}
                >
                  {letter}
                </td>
              ))}
            </tr>
          ))}
          </table>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <p>Selected Letters: {selectedIndices.map((index) => letters[index.split('-')[0]][index.split('-')[1]]).join('')}</p>
          <button onClick={addSelectedAsWord}>Add Word</button>
          <button onClick={clearSelectedLetters}>Clear Selected Letters</button>
          <button onClick={deleteLastWord}>Delete Last Word</button>
        </div>
        <div>
          <p>Words: {words.join(', ')}</p>
        </div>
        {showNewDiv && (
          <div ref={newDivRef} style={{ width: "100%", height: "100vh", display:"flex", justifyContent:"center", alignItems:"center" }}>
            <div>
              <p style={{fontSize:"60px"}}>可以</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
