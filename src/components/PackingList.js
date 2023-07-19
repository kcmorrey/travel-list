import { useState } from 'react';
import Item from './Item';

export default function PackingList({ items, onRemoveItems, onPackedToggle, onClearItems }) {
	const [sortBy, setSortBy] = useState('date');

	let sortedItems;
	if (sortBy === 'date') {
		sortedItems = items;
	}
	if (sortBy === 'description') {
		sortedItems = items.slice().sort((a, b) => a.description.localeCompare(b.description));
	}
	if (sortBy === 'packed') {
		sortedItems = items.slice().sort((a, b) => +a.packed - b.packed);
	}

	return (
		<div className="list">
			<ul>
				{sortedItems.map((item) => (
					<Item item={item} key={item.id} onRemoveItems={onRemoveItems} onPackedToggle={onPackedToggle} />
				))}
			</ul>
			<div className="actions">
				<span>SORT BY:</span>
				<select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
					<option value="date">date added</option>
					<option value="description">description</option>
					<option value="packed">packed status</option>
				</select>
				<button onClick={onClearItems}>Clear List</button>
			</div>
		</div>
	);
}
