let immutable_descriptor_set = property => {
  let privatized = Symbol(property);
  let UNINITIALIZED = undefined;

  return {
    [privatized]: {
      value: UNINITIALIZED,
      writable: true
    },

    [property]: {
      enumerable: true,
      get() {
        return this[privatized];
      },
      set(value) {
        if (this[privatized] !== UNINITIALIZED) {
          throw new Error(`${property} is immutable`)
        } else if (value === UNINITIALIZED) {
          throw new Error(`${property} should be defined`)
        }
        this[privatized] = value
      }
    }
  }
};

let freeze = (obj, ...properties) => {
  if (typeof obj !== 'object') {
    throw new Error(`Expected obj ${obj} to be an object`)
  }
  for (let property of properties) {
    if (typeof property !== 'string') {
      throw new Error(`Expected property ${property} to be a string`)
    }
    Object.defineProperties(obj, immutable_descriptor_set(property))
  }
  return obj;
};

export default {freeze}