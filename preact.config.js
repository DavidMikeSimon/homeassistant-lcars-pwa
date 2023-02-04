export default (config, env, helpers, options) => {
  const stylusRules = helpers.getRulesByMatchingFile(config, 'src/style/index.styl');
  // console.log(stylusRules);
  // console.log(stylusRules[0].rule.use[0].options.options);
  stylusRules[0].rule.use[0].options.options = {
    sourceMap: true,
  };
};
