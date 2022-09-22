import Profile from "./Profile";
import Statistics from "./Statistics";
import user from "../user.json";
import data from "../data.json";
// import 'normalize.css';
import css from "./App.module.css";

export default function App() {
  return (
    <div className={css.card}>
      <Profile username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats} />

<Statistics title="Upload stats" stats={data} />

    </div>
  );
}; 