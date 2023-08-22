import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import DisplayGrid from './components/DisplayGrid';

function App() {
  const [letters] = useState([
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
        setShowNewDiv(clue1);
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
              <p style={{fontSize:"60px", textAlign:"center"}}>可以</p>
              <p>
                Dear Katherine, <br></br><br></br>
                I know this github repo was something we worked 
                on together but I hope its okay that I changed it a bit.
                Thank you for being the person you are and always making me the 
                happiest guy in the world. 365 days ago I knew that you were everything I wanted
                and more, I knew waiting any longer to ask you to be my girlfriend would be a
                waste of time because I already knew.
                Over the past year, I've learned more and more
                about you, and every day it becomes more and more
                apparent that I love every single part of you. I love how goofy you are,
                how much you correct me when I'm just trying to speak English (not a native
                speaker). I love how you always want to hang out and have fun, I love how you 
                are always down to do things in my best interest. I love that such a cool person
                cares about me and I want this cool person (you btw) to know that I care about them
                a lot. I hope the word hunt game works and 
                is responsive to your screen but anyways this was the practice you needed (burn) 
                Thank you for caring about me, 
                motivating me, and reminding me that everything can and will be alright, 
                so long as my beautful girlfriend is there. <br></br><br></br>
                Happy 1 Year honey, schnookims, sweetheart, cutiepie, Kassrin. I love you 
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
