import { h } from "preact";
import { Route, Router } from "preact-router";
import {
  getAuth,
  createConnection,
  subscribeEntities,
  ERR_HASS_HOST_REQUIRED,
} from "home-assistant-js-websocket";

async function connect() {
  let auth;
  try {
    // Try to pick up authentication after user logs in
    auth = await getAuth();
  } catch (err) {
    if (err === ERR_HASS_HOST_REQUIRED) {
      const hassUrl = prompt(
        "What host to connect to?",
        "https://sinclair-ha.pipsimon.com"
      );
      // Redirect user to log in on their instance
      auth = await getAuth({ hassUrl });
    } else {
      alert(`Unknown error: ${err}`);
      return;
    }
  }
  const connection = await createConnection({ auth });
  subscribeEntities(connection, (ent) => console.log(ent));
}

import Home from "../routes/home";

const App = () => {
  connect();

  return (
    <div id="app">
      <main>
        <Router>
          <Route path="/" component={Home} />
        </Router>
      </main>
    </div>
  );
};

export default App;
