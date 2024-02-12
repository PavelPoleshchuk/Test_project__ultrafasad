export type StoredToken = {
  value: string;
  timeStamp: number;
};

const TOKEN_KEY = "auth_token";
const TOKEN_TTL_MS = 12 * 60 * 60 * 1000;

const isExpired = (timeStamp?: number): boolean => {
  if (!timeStamp) return false;

  const now = new Date().getTime();
  const diff = now - timeStamp;

  return diff > TOKEN_TTL_MS;
};

const setToken = (access_token: string): void => {
  localStorage.setItem(
    TOKEN_KEY,
    JSON.stringify({
      value: access_token,
      timeStamp: new Date().getTime(),
    })
  );
};

const removeToken = (): void => {
  localStorage.removeItem(TOKEN_KEY);
};

const getToken = (): StoredToken | null => {
  let result = null;

  const storedToken = localStorage.getItem(TOKEN_KEY);
  storedToken && (result = JSON.parse(storedToken));

  return result;
};

const fetchToken = async (
  email: string,
  password: string,
  reset: () => void
) => {
  try {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        password,
      }),
    };

    const response = await fetch(
      "https://reqres.in/api/register",
      requestOptions
    );

    if (!response.ok) {
      alert(
        "НИМАНИЕ!!! В проекте использыется учебный сервер. Возврат токена возможен только для определенных пользователей. Для успешного получения токена используйте Логин: eve.holt@reqres.in Пароль: любой`"
      );
      throw new Error(
        `Response status in function 'fetchToken': ${response.status}`
      );
    }

    const data = await response.json();

    if (data.token) {
      setToken(data.token);
      reset();
    }
  } catch (error) {
    if (error instanceof Error) {
      console.error("An error occurred:", error.message);
    }
    alert(
      "Произошла ошибка при получении токена. Пожалуйста, проверьте данные."
    );
  }
};

const isLoggedIn = () => {
  const token = getToken();
  if (!token) return false;
  return !isExpired(token.timeStamp);
};

export { getToken, setToken, removeToken, isExpired, fetchToken, isLoggedIn };
