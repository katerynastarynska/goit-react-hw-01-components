import Profile from "./Profile";
import user from "../user.json";
import 'normalize.css';
import css from "./App.module.css";

export default function App() {
  return (
    <div classname={css.card}>
      <Profile username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats} />
    </div>
  );
}; 