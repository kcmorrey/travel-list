import { useState } from 'react';
import Form from './Form';
import Logo from './Logo';
import PackingList from './PackingList';
import Stats from './Stats';

export default function App() {
	const [items, setItems] = useState([]);

	function handleAddItems(item) {
		setItems((items) => [...items, item]);
	}

	function handleRemoveItems(id) {
		setItems((items) => items.filter((i) => i.id !== id));
	}

	function handleClearItems(id) {
		const confirmed = window.confirm('Are you sure you want to delete all items?');
		if (confirmed) setItems([]);
	}

	function handlePackedToggle(id) {
		setItems((items) => items.map((item) => (item.id === id ? { ...item, packed: !item.packed } : item)));
	}

	return (
		<div className="app">
			<Logo />
			<Form onAddItems={handleAddItems} />
			<PackingList items={items} onRemoveItems={handleRemoveItems} onPackedToggle={handlePackedToggle} onClearItems={handleClearItems} />
			<Stats items={items} />
		</div>
	);
}
