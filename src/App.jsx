import "../src/App.css";
import Profile from "../src/components/Profile/Profile";
import FriendList from "../src/components/FriendList/FriendList";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";
import userData from "../src/Profile.json";
import friends from "../src/FriendList.json";
import transactions from "../src/transaction.json";

export default function App() {
  return (
    <>
      <Profile username={userData.username} tag={userData.tag} location={userData.location} avatar={userData.avatar} stats={userData.stats} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
}