const loggerMiddleware = (store) => (next) => (action) => {
  console.log("Dispatching action:", action);
  const result = next(action);
  console.log("Updated state:", store.getState());
  return result;
};

export default loggerMiddleware;
