module.exports = function(api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo", "module:jest-expo"]
  };
};
