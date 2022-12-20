import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearSelectedListAction, isBingoAction } from './actions/winnerActions';
import FlexGrid from './components/flex-grid/FlexGrid';
import './App.css';

const App = () => {
	const dispatch = useDispatch();

	const [bingoNum, setBingoNum] = useState(0);
	const isBingo = useSelector(state => state.winnerReducer.isBingo);
	const [showModal, setShowModal] = useState(false);

	useEffect(() => {
		if (isBingo) {
			setBingoNum(bingoNum + 1);
			setShowModal(isBingo);
			dispatch(isBingoAction(false));
			console.log("Congrats You won");
		}
	}, [isBingo])

	const [renderFlexGrid, setRenderFlexGrid] = useState(false);

	useEffect(() => {
		if (renderFlexGrid) {
			dispatch(clearSelectedListAction());
			setBingoNum(0);
			setRenderFlexGrid(false);
		}
	}, [renderFlexGrid])

	const renderFromChild = () => { setRenderFlexGrid(true); }

	return (
		<>
			<div className="App">
				<FlexGrid renderFromChild={renderFromChild} />
				{renderFlexGrid ? <FlexGrid /> : null}
			</div>
			{showModal && (<div className="modal">
				<div className="modal__content" onClick={() => setShowModal(false)}>
					<span>You have {bingoNum} Bingos now</span>
				</div>
			</div>
			)}
		</>
	);
}
export default App;