const saveUser = (userData) => {
  console.log(JSON.stringify(userData));
  const httpPromise = fetch(
    "https://61b7b29564e4a10017d18c6f.mockapi.io/api/v1/users",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    }
  );
  // input: func
  // output: promise
  httpPromise
    .then((response) => {
      return response.json();
    })
    .then((res) => {
      console.log(res);
      alert(JSON.stringify(res));
    });
};

const user = {
  email: "text1@gmail.com",
  userName: "user111",
  password: "sass",
};
saveUser(user);
