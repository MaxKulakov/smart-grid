"use client";

import { useState, useMemo, useEffect, CSSProperties } from 'react';
import { SmartGrid } from './components/smart-grid';
import { AsymGrid } from './components/asym-grid';

export default function Home() {
    const [numberOfCards, setNumberOfCards] = useState<number>(10);
    const [minWidthCards, setMinWidthCards] = useState<number>(220);
    const [selectedComponent, setSelectedComponent] = useState<'SmartGrid' | 'AsymGrid'>('SmartGrid');
    

    const handleNumberInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        const numValue = value === '' ? 0 : parseInt(value, 10);
        setNumberOfCards(numValue);
    };

    const handleWidthInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        const numValue = value === '' ? 0 : parseInt(value, 10);
        setMinWidthCards(numValue);
    };

    const handleComponentChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedComponent(e.target.value as 'SmartGrid' | 'AsymGrid');
    };


    const cards = useMemo(() => {
        const newCards = Array.from({length: numberOfCards}, (_, i) => i + 1);
        return newCards;
    }, [numberOfCards]);

    const width = useMemo(() => {
        const newWidth = minWidthCards;
        return newWidth;
    }, [minWidthCards]);


    const styles: { [key: string]: CSSProperties } = {
        container: {
            display: 'grid',
            maxWidth: '1600px',
            margin: '0 auto',
            padding: '24px',
            gap: '16px',
            color: '#21272B',
        },
        input: {
            padding: '8px',
            borderRadius: '8px',
            border: '1px solid #D9DFE6',
            backgroundColor: 'white',
        },
        inputLabel: {
            display: 'flex',
            marginBottom: '8px',
        },
        inputWithLabel: {
            display: 'flex',
            flexDirection: 'column',
            flex: '1 0 0',
            minWidth: '220px',
            maxWidth: '320px',
        },
        form: {
            display: 'flex',
            gap: '16px',
            marginBottom: '16px',
            flexWrap: 'wrap',
            width: '100%',
        },
    };

    
    return (
        <div style={styles.container}>
            <h1 className='text-4xl font-semibold'>Smart Grid Viewer</h1>
            
            <div style={styles.form}>
                <div style={styles.inputWithLabel}>
                    <label htmlFor="componentSelect" style={styles.inputLabel}>
                        Grid:
                    </label>
                    <select
                        style={styles.input}
                        id="componentSelect"
                        value={selectedComponent}
                        onChange={handleComponentChange}
                    >
                        <option value="SmartGrid">Smart Grid</option>
                        <option value="AsymGrid">Asymmetrical Grid</option>
                    </select>
                </div>

                <div style={styles.inputWithLabel}>
                    <label htmlFor="numberInput" style={styles.inputLabel}>
                        Number of Cards:
                    </label>
                    <input
                        style={styles.input}
                        id="numberInput"
                        type="number"
                        value={numberOfCards}
                        onChange={handleNumberInputChange}
                    />
                </div>

                <div style={styles.inputWithLabel}>
                    <label htmlFor="widthInput" style={styles.inputLabel}>
                        Min Width:
                    </label>
                    <input
                        style={styles.input}
                        id="widthInput"
                        type="number"
                        value={minWidthCards}
                        onChange={handleWidthInputChange}
                    />
                </div>
            </div>

            {selectedComponent === 'SmartGrid' ? (
                <>
                    <h2 className='text-3xl font-semibold'>Smart Grid</h2>
                    <SmartGrid 
                        cards={cards}
                        width={width}
                    />
                </>
            ) : (
                <>
                    <h2 className='text-3xl font-semibold'>Asymmetrical Grid</h2>
                    <AsymGrid
                        cards={cards}
                        width={width}
                    />
                </>
            )}
        </div>
    );
}