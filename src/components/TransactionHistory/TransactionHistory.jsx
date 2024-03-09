import TransactionItem from "../TransactionHistory/TransactionHistory";
import css from "../TransactionHistory/TransactionHistory.module.css";

const TransactionHistory = ({ items }) => {
	return (
		<table className={css.table}>
			<thead className={css.thead}>
				<tr>
					<th className={css.title}>Type</th>
					<th className={css.title}>Amount</th>
					<th className={css.title}>Currency</th>
				</tr>
			</thead>
			<tbody>
				{items.map((item) => {
					return (
						<tr className={css.line} key={item.id}>
							<TransactionItem type={item.type} amount={item.amount} currency={item.currency} />
						</tr>
					);
				})}
			</tbody>
		</table>
	);
};

export default TransactionHistory;
