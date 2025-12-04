interface AsymGridProps {
    cards: number[];
    width: number;
}

export const AsymGrid = (props : AsymGridProps) => {

    const getGridColumnClass = (index: number) => {
        if (props.cards.length % 2 !== 0 && index === props.cards.length - 1) {
            return 'lg:col-span-12';
        }

        const row = Math.floor(index / 2);
        const isEvenRow = row % 2 == 0;
        const positionInRow = index % 2;

        if (isEvenRow) {
            return positionInRow == 0 ? 'lg:col-span-5' : 'lg:col-span-7';
        } else {
            return positionInRow == 0 ? 'lg:col-span-7' : 'lg:col-span-5';
        }
    };


    const styles = {
        card: {
            backgroundColor: '#00B0CC',
            borderRadius: '16px',
            padding: '32px',
            textAlign: 'center' as const,
        },
        cardNumber: {
            fontSize: '32px',
            fontWeight: 'bold',
            color: '#FFFFFF',
        },
    };

    
    return (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 w-full">
            {props.cards.map((number, index) => (
                <div key={number} className={getGridColumnClass(index)} style={styles.card}>
                    <span style={styles.cardNumber}>{number}</span>
                </div>
            ))}
        </div>
    );
}