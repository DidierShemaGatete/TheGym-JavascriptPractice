function stripProperty(obj, prop) {
    if (obj.hasOwnProperty(prop)) {
      delete obj[prop];
      return obj;
    } else {
      return obj;
    }
  }