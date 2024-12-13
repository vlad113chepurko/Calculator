import React, { useState } from 'react';
import '../CSS/Calculator.css';

interface CalculatorProps {
    currentNumber?: string;
}

const Calculator: React.FC<CalculatorProps> = ({ currentNumber = '' }) => {
    const [display, setDisplay] = useState(currentNumber);

    const handleButtonClick = (value: string) => {
        setDisplay(display + value);
        if (value === '=') {
            try {
                setDisplay(eval(display).toString());
            } catch (error) {
                setDisplay('Error');
            }
        };
    }

    return (
        <main className='container'>
            <div className='calculator'>
                <div className='display'>
                    <p>{display}</p>
                </div>
                <div className='buttons'>
                    <button className='button' onClick={() => handleButtonClick('1')}>1</button>
                    <button className='button' onClick={() => handleButtonClick('2')}>2</button>
                    <button className='button' onClick={() => handleButtonClick('3')}>3</button>
                    <button className='button' onClick={() => handleButtonClick('4')}>4</button>
                    <button className='button' onClick={() => handleButtonClick('5')}>5</button>
                    <button className='button' onClick={() => handleButtonClick('6')}>6</button>
                    <button className='button' onClick={() => handleButtonClick('7')}>7</button>
                    <button className='button' onClick={() => handleButtonClick('8')}>8</button>
                    <button className='button' onClick={() => handleButtonClick('9')}>9</button>
                    <button className='button' onClick={() => handleButtonClick('0')}>0</button>
                    <button className='button' onClick={() => handleButtonClick('+')}>+</button>
                    <button className='button' onClick={() => handleButtonClick('-')}>-</button>
                    <button className='button' onClick={() => handleButtonClick('*')}>*</button>
                    <button className='button' onClick={() => handleButtonClick('/')}>/</button>
                    <button className='button' onClick={() => handleButtonClick('=')}>=</button>
                    <button className='button' onClick={() => setDisplay('')}>C</button>
                </div>
            </div>
        </main>
    );
};

export default Calculator;