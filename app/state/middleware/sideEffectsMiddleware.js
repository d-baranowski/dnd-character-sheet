const sideEffects = {};

const registerSideEffect = (actionName, callback) => {
  if (sideEffects[actionName] === undefined) {
    sideEffects[actionName] = [];
  }

  sideEffects[actionName].push(callback);
};

const sideEffectsMiddleware = store => next => action => {
  (sideEffects[action.type] || []).forEach((callback) => {
    callback({store, action, next});
  });

  (sideEffects['*'] || []).forEach((callback) => {
    callback({store, action, next});
  });

  return next(action)
};

sideEffectsMiddleware.registerSideEffect = registerSideEffect;

export default sideEffectsMiddleware;
