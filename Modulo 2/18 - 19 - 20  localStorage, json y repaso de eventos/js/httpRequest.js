const getUsers = async () => {
  try {
    const resp = await fetch('http://localhost:3000/users');
    console.log(resp.status);
    const data = await resp.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

const getUsersByEmail = async () => {
  try {
    const email = 'alejandrobsusi@gmail.com';
    const resp = await fetch(`http://localhost:3000/users?email=${email}`);
    console.log(resp.status);
    const data = await resp.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

const createUser = async () => {
  try {
    const resp = await fetch('http://localhost:3000/users', {
      method: 'POST',
      body: JSON.stringify({
        email: 'carlitos@gmail.com',
        userName: 'carlangasCopad',
        date: new Date(),
        password: 'asd123',
        role: 'USER',
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    const data = await resp.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

const editUserById = async (id) => {
  try {
    const resp = await fetch(`http://localhost:3000/users/${id}`, {
      method: 'PATCH',
      body: JSON.stringify({
        role: 'ADMIN',
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    const data = await resp.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

const deleteUserById = async (id) => {
  try {
    const resp = await fetch(`http://localhost:3000/users/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    const data = await resp.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
