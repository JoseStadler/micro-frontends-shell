const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const mf = require("@angular-architects/module-federation/webpack");
const path = require("path");
const share = mf.share;

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(
  path.join(__dirname, 'tsconfig.json'),
  [/* mapped paths to share */
    '@services/*',]);

module.exports = {
  output: {
    uniqueName: "shell",
    publicPath: "auto"
  },
  optimization: {
    runtimeChunk: false
  },
  resolve: {
    alias: {
      ...sharedMappings.getAliases(),
    }
  },
  experiments: {
    outputModule: true
  },
  plugins: [
    new ModuleFederationPlugin({
        library: { type: "module" },

        // For remotes (please adjust)
        // name: "shell",
        // filename: "remoteEntry.js",
        // exposes: {
        //     './Component': './/src/app/app.component.ts',
        // },

        // For hosts (please adjust)
        remotes: {
            // "mfe1": "http://localhost:4300/remoteEntry.js",

        },

        shared: share({
          "@angular/core": { singleton: true, strictVersion: false, requiredVersion: 'auto' },
          "@angular/common": { singleton: true, strictVersion: false, requiredVersion: 'auto' },
          "@angular/common/http": { singleton: true, strictVersion: false, requiredVersion: 'auto' },
          "@angular/router": { singleton: true, strictVersion: false, requiredVersion: 'auto' },
          "@ngrx/store": { singleton: true, strictVersion: false, requiredVersion: 'auto' },
          "@services/*": { singleton: true, import: 'src/app/services/*' },

          ...sharedMappings.getDescriptors()
        })

    }),
    sharedMappings.getPlugin()
  ],
};
