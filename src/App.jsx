import "./App.css";
import Profile from "./Profile";
import FriendList from "./FriendList";
import userData from "./userData.json";
import friends from "./friends.json";
import TransactionHistory from "./TransactionHistory";
import transactions from "./transactions.json";

export default function App() {
	return (
		<>
			<Profile username={userData.username} tag={userData.tag} location={userData.location} avatar={userData.avatar} stats={userData.stats} />
			<FriendList friends={friends} />
			<TransactionHistory items={transactions} />
		</>
	);
}
