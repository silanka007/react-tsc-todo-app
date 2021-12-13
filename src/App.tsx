import React, { useEffect, useState } from "react";
import { getUsers } from "./requests/users";

type iUser = {
  id: number;
  name: string;
  phone: string;
  username: string;
  website: string;
};

function App() {
  const [users, setUsers] = useState<iUser[] | null>(null);

  useEffect(() => {
    setTimeout(async () => {
      const result = await getUsers();
      setUsers(result);
    }, 5000);
  }, []);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
  };

  return (
    <div className="App">
      <div
        style={{
          width: "100vw",
          height: 600,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <iframe
          title="mine"
          src="https://codesandbox.io/embed/new?codemirror=1"
          style={{
            width: "90vw",
            height: "500px",
            border: 0,
            borderRadius: "4px",
            overflow: "hidden",
          }}
          allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
          sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
        ></iframe>
      </div>
      {users ? (
        users.map((user) => (
          <div key={user.id} style={styles.user}>
            <h2 className="App-header">{user.name}</h2>
            <h2 className="App-header">{user.username}</h2>
            <p className="App-header">{user.website}</p>
            <p className="App-header">{user.phone}</p>
          </div>
        ))
      ) : (
        <h1>loading...</h1>
      )}
      <div>
        <input onChange={handleInputChange} />
      </div>
    </div>
  );
}

export default App;

const styles = {
  user: {
    width: 300,
    border: "1px solid black",
    padding: 10,
    borderRadius: 5,
    margin: 10,
  },
};
