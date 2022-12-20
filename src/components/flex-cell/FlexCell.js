import React, { useState, useEffect } from 'react'
import { addtoSelected, isBingoAction, deleteWinningCondition } from '../../actions/winnerActions';
import { useDispatch, useSelector } from 'react-redux';
import './FlexCell.css';

const FlexCell = (props) => {
    const dispatch = useDispatch();
    const { winner, showWorldCup } = props;

    const [checked, setChecked] = useState(false);

    const handleClick = e => {
        let index = Number(e.target.id);
        dispatch(addtoSelected(index));
        setChecked(true);
    }

    const winningConditions = useSelector(state => state.winnerReducer.winningConditions);
    const selctedIndexs = useSelector(state => state.winnerReducer.selctedIndexs);

    const checkWinner = (selctedIndexs) => {
        winningConditions.map(
            list => {
                let found = list.every(v => selctedIndexs.includes(v));
                if (found) {
                    dispatch(isBingoAction(true));
                    dispatch(deleteWinningCondition(list));
                }
            }
        )
    }

    useEffect(() => {
        if (selctedIndexs && selctedIndexs.length > 0) {
            checkWinner(selctedIndexs);
        }
        else { setChecked(false); }
    }, [selctedIndexs])

    return (
        <>
            <div className={`flex-cell ${checked ? 'checked' : ''}`}>
                <span>{winner.team} ({winner.year})</span>
                <img src={require(`./../../images/${winner.team}.png`)} alt={`${winner.team} flag`} />
                <button className="circle-selector" id={winner.index} onClick={
                    e => handleClick(e)
                }></button>
            </div>
            {
                (showWorldCup) ? (
                    <div className="flex-cell free-space">
                        <img src={require('./../../images/world_cup.png')} alt="World cup" />
                        <div className="circle-selector"></div>
                    </div>) : null
            }
        </>
    );
}

export default FlexCell;