const localStorageMiddleware = (store) => (next) => (action) => {
  const result = next(action);
  if (action.type === "employees/addEmployee") {
    const employees = store.getState().employees.list;
    localStorage.setItem("employees", JSON.stringify(employees));
  }
  return result;
};

export default localStorageMiddleware;
