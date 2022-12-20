import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getWinners } from '../../actions/winnerActions';
import { FlexRow } from '../flex-row/FlexRow';
import './FlexGrid.css';

const FlexGrid = (props) => {
    const dispatch = useDispatch();
    const [winners, setWinners] = useState([]);

    const shuffledNumbers = (list) => list.sort(() => {
        return Math.random() - 0.5;
    });

    let winnersReducer = useSelector(state => state.winnerReducer.winners);

    useEffect(() => {
        dispatch(getWinners());
    }, [])

    useEffect(() => {
        if (winnersReducer && winnersReducer.length > 0) {
            winnersReducer = shuffledNumbers(winnersReducer);
            let fiveWinners = [], listWinners = [];
            for (let i = 0; i < winnersReducer.length; i++) {
                winnersReducer[i].index = i + 1;
                fiveWinners = [...fiveWinners, winnersReducer[i]];
                if (fiveWinners.length === 5 || i === 13) {
                    listWinners = [...listWinners, fiveWinners];
                    fiveWinners = [];
                }
            }
            setWinners(listWinners);
        }
    }, [winnersReducer])

    return (
        <div className="flex-grid">
            <h1 className="bingo-title">Bingo World Cup</h1>
            {
                winners && winners.map((fiveWinner, index) => {
                    return (<FlexRow fiveWinners={fiveWinner} key={index} />)
                })
            }
            <button className="btn-play" onClick={props.renderFromChild}>Replay</button>
        </div >
    );
}

export default FlexGrid;