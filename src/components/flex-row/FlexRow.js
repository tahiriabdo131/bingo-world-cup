import React from 'react';
import FlexCell from '../flex-cell/FlexCell';
import './FlexRow.css';

export const FlexRow = (props) => {
    const { fiveWinners } = props;

    return (
        <div className="flex-row">
            {
                fiveWinners && fiveWinners.map((winner, index) => {
                    return (
                        <FlexCell key={index} winner={winner}
                            showWorldCup={(fiveWinners.length === 4 && index === 1) ? true : false}
                        />
                    );
                })
            }
        </div>
    );
}