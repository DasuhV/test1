import React, { useState } from 'react';
import s from './Paginator.module.css'


let Paginator = ({ totalItemsCount, pageSize, currentPage, pageChanged, portionSize = 15 }) => {

	let pagesCount = Math.ceil(totalItemsCount / pageSize);
	let pages = [];
	for (let i = 1; i <= pagesCount; i++) {
		pages.push(i);
	}

	let allPortionCounts = Math.ceil(pagesCount / portionSize);
	let [portionNumber, setPortionNumber] = useState(1)
	let beginningOfPortion = (portionNumber - 1) * portionSize + 1
	let endingOfPortion = portionNumber * portionSize

	return <div className={s.paginator}>
		{portionNumber > 1 &&
			<button onClick={() => { setPortionNumber(portionNumber - 1) }}>Prev</button>}
		{pages
			.filter(p => p >= beginningOfPortion && p <= endingOfPortion)
			.map(p => {
				return <span key={p} className={currentPage === p ? s.selectedPage : undefined}
					onClick={() => {
						pageChanged(p, currentPage, pageSize)
					}}>{p}</span>
			})}
		{allPortionCounts > portionNumber &&
			<button onClick={() => { setPortionNumber(portionNumber + 1) }}>Next</button>
		}
	</div>

}
export default Paginator;