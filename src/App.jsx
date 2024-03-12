import "./App.css";
import Profile from "../src/components/Profile";
import FriendList from "../src/components/FriendList";
import userData from "./userData.json";
import friends from "./friends.json";
import TransactionHistory from "../src/components/TransactionHistory";
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
