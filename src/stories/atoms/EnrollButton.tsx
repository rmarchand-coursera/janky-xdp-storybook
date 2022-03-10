import React from 'react';

export type Props = {
    isFree: boolean;
    startDate: string;
}

const Button = ({ isFree, startDate }: Props) => (
    <button style={{ padding: '4px 48px', height: 'fit-content', backgroundColor: 'orange', border: 'none', color: 'white' }}>
        {isFree && <p style={{ fontSize: '18px', margin: '0' }}>Try for free</p>}
        <p style={{ fontSize: '16px', margin: '4px' }}>Starts {startDate}</p>
    </button>
);

export default Button;