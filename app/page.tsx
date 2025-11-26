"use client";

import { useState } from 'react';
import { SmartGrid } from './components/smart-grid';


export default function Home() {

    const card_count = 5;
    const [cards] = useState(Array.from({length: card_count}, (_, i) => i + 1));

    const styles = {
        container: {
            display: 'grid',
            maxWidth: '1600px',
            margin: '0 auto',
            padding: '24px',
            gap: '16px',
        },
    };


    return (
        <div style={styles.container}>
            <SmartGrid 
                cards={cards}
            />
        </div>
    );
}
