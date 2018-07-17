class HelloWorld {
  constructor(options) {
    this.options = options;
  }
  apply(compiler) {
    compiler.hooks.done.tap('HelloWorld', (stats) => {
      const pkg = require("../../package.json");
      const notifier = require("node-notifier");
      const time = ((stats.endTime - stats.startTime) / 1000).toFixed(2);

      notifier.notify({
        title: pkg.name,
        message: `WebPack is done!\n${stats.compilation.errors.length} errors in ${time}s`,
        contentImage: "https://raw.githubusercontent.com/webpack/media/master/logo/icon-square-small.png",
      });
    })
  }
}

module.exports = HelloWorld;