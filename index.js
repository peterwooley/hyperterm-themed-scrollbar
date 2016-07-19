module.exports.decorateConfig = config => {
  return Object.assign({}, config, {
    termCSS: `
      ${config.termCSS || ''}
      ::-webkit-scrollbar {
        width: 7px;
      }
      ::-webkit-scrollbar-thumb {
        border-radius: 4px;
        background-color:${config.foregroundColor};
      }
    `
  })
};

