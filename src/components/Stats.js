export default function Stats({ items }) {
	if (!items.length)
		return (
			<p className="stats">
				<em>Start adding some items to your packing list 🚀</em>
			</p>
		);
	const itemCount = items.length;
	const packedItemCount = items.filter((item) => item.packed).length;
	const packedItemPercentage = Math.round((packedItemCount / itemCount) * 100);

	return (
		<footer className="stats">
			<em>
				{packedItemPercentage === 100
					? 'You got everything! You are ready to go ✈️'
					: `🧳 You have ${itemCount} items on your list, and you have packed ${packedItemCount} (${packedItemPercentage}%)`}
			</em>
		</footer>
	);
}
