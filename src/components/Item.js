export default function Item({ item, onRemoveItems, onPackedToggle }) {
	const { id, description, quantity, packed } = item;

	return (
		<li>
			<input type="checkbox" value={packed} onChange={() => onPackedToggle(id)}></input>
			<span style={packed ? { textDecoration: 'line-through' } : {}}>
				{quantity} {description}
			</span>
			<button onClick={() => onRemoveItems(id)}>❌</button>
		</li>
	);
}
