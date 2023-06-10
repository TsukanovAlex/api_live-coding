const host = "https://wedev-api.sky.pro/api/v2/todos";

export function getTodo({ token }) {
    return fetch(host, {
        method: "GET",
        headers: {
          Authorization: token,
        },
      })
        .then((response) => {
          if (response.status === 401) {
            throw new Error('Нет авторизации');
          }
          return response.json();
        })
}
export function deleteTodo( {token, id} ) {
    return fetch("https://wedev-api.sky.pro/api/v2/todos/" + id, {
        method: "DELETE",
        headers: {
          Authorization: token,
        },
      })
        .then((response) => {
          return response.json();
        })
}
export function postTodo ({ text, token }) {
    return fetch(host, {
        method: "POST",
        body: JSON.stringify({
          text,
        }),
        headers: {
          Authorization: token,
        },
      })
        .then((response) => {
          return response.json();
        })
}

// https://github.com/GlebkaF/webdev-hw-api/blob/main/pages/api/user/README.md
export function loginUser({ login, password }) {
    return fetch("https://webdev-hw-api.vercel.app/api/user/login", {
      method: "POST",
      body: JSON.stringify({
        login,
        password,
      }),
    }).then((response) => {
        if (response.status === 400) {
        throw new Error("Неверный логин или пароль");
      }
      return response.json();
    });
  }