interface CardsProps {
    cards: number[];
}

export const SmartGrid = (props : CardsProps) => {

    let half, topCards, bottomCards;
    if (props.cards.length > 3) {
        half = Math.ceil(props.cards.length / 2);
        topCards = props.cards.slice(0, half);
        bottomCards = props.cards.slice(half);
    } else {
        topCards = props.cards;
        bottomCards = [,];
    }


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
        <>
            <div className="flex flex-wrap gap-4 [&>*]:flex-[1_1_220px]">
                {topCards.map((number) => (
                    <div key={number} style={styles.card}>
                        <span style={styles.cardNumber}>{number}</span>
                    </div>
                ))}
            </div>
            
            <div className="flex flex-wrap gap-4 [&>*]:flex-[1_1_220px]">
                {bottomCards.map((number) => (
                    <div key={number} style={styles.card}>
                        <span style={styles.cardNumber}>{number}</span>
                    </div>
                ))}
            </div>
        </>
    );
};
