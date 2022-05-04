module.exports = {
  "bail": true,
  "cache": {
    "name": "bud.production",
    "type": "filesystem",
    "version": "_o9ivw1ogwonlbffmwvfbb_jbxg_",
    "cacheDirectory": "/Users/pope/Local Sites/claraumbach/app/public/wp-content/themes/umbachtheme/.budfiles/cache/webpack",
    "managedPaths": [
      "/Users/pope/Local Sites/claraumbach/app/public/wp-content/themes/umbachtheme/node_modules"
    ],
    "buildDependencies": {
      "bud": [
        "/Users/pope/Local Sites/claraumbach/app/public/wp-content/themes/umbachtheme/package.json",
        "/Users/pope/Local Sites/claraumbach/app/public/wp-content/themes/umbachtheme/.editorconfig",
        "/Users/pope/Local Sites/claraumbach/app/public/wp-content/themes/umbachtheme/bud.config.js",
        "/Users/pope/Local Sites/claraumbach/app/public/wp-content/themes/umbachtheme/composer.json",
        "/Users/pope/Local Sites/claraumbach/app/public/wp-content/themes/umbachtheme/jsconfig.json",
        "/Users/pope/Local Sites/claraumbach/app/public/wp-content/themes/umbachtheme/tailwind.config.js",
        "/Users/pope/Local Sites/claraumbach/app/public/wp-content/themes/umbachtheme/theme.json"
      ]
    }
  },
  "context": "/Users/pope/Local Sites/claraumbach/app/public/wp-content/themes/umbachtheme",
  "infrastructureLogging": {
    "console": {
      "Console": {}
    }
  },
  "mode": "production",
  "module": {
    "noParse": {},
    "rules": [
      {
        "test": {},
        "include": [
          "/Users/pope/Local Sites/claraumbach/app/public/wp-content/themes/umbachtheme/resources"
        ],
        "parser": {
          "requireEnsure": false
        }
      },
      {
        "oneOf": [
          {
            "test": {},
            "use": [
              {
                "loader": "/Users/pope/Local Sites/claraumbach/app/public/wp-content/themes/umbachtheme/node_modules/babel-loader/lib/index.js",
                "options": {
                  "presets": [
                    [
                      "/Users/pope/Local Sites/claraumbach/app/public/wp-content/themes/umbachtheme/node_modules/@babel/preset-env/lib/index.js"
                    ],
                    [
                      "/Users/pope/Local Sites/claraumbach/app/public/wp-content/themes/umbachtheme/node_modules/@babel/preset-react/lib/index.js"
                    ]
                  ],
                  "plugins": [
                    [
                      "/Users/pope/Local Sites/claraumbach/app/public/wp-content/themes/umbachtheme/node_modules/@babel/plugin-transform-runtime/lib/index.js",
                      {
                        "helpers": false
                      }
                    ],
                    [
                      "/Users/pope/Local Sites/claraumbach/app/public/wp-content/themes/umbachtheme/node_modules/@babel/plugin-proposal-object-rest-spread/lib/index.js"
                    ],
                    [
                      "/Users/pope/Local Sites/claraumbach/app/public/wp-content/themes/umbachtheme/node_modules/@babel/plugin-syntax-dynamic-import/lib/index.js"
                    ],
                    [
                      "/Users/pope/Local Sites/claraumbach/app/public/wp-content/themes/umbachtheme/node_modules/@babel/plugin-proposal-class-properties/lib/index.js"
                    ]
                  ]
                }
              }
            ],
            "include": [
              "/Users/pope/Local Sites/claraumbach/app/public/wp-content/themes/umbachtheme/resources"
            ]
          },
          {
            "test": {},
            "use": [
              {
                "loader": "/Users/pope/Local Sites/claraumbach/app/public/wp-content/themes/umbachtheme/node_modules/mini-css-extract-plugin/dist/loader.js"
              },
              {
                "loader": "/Users/pope/Local Sites/claraumbach/app/public/wp-content/themes/umbachtheme/node_modules/css-loader/dist/cjs.js",
                "options": {
                  "importLoaders": 1,
                  "sourceMap": false
                }
              },
              {
                "loader": "/Users/pope/Local Sites/claraumbach/app/public/wp-content/themes/umbachtheme/node_modules/postcss-loader/dist/cjs.js",
                "options": {
                  "postcssOptions": {
                    "plugins": [
                      [
                        "/Users/pope/Local Sites/claraumbach/app/public/wp-content/themes/umbachtheme/node_modules/postcss-import/index.js"
                      ],
                      [
                        null
                      ],
                      [
                        null
                      ],
                      [
                        "/Users/pope/Local Sites/claraumbach/app/public/wp-content/themes/umbachtheme/node_modules/postcss-preset-env/dist/index.cjs",
                        {
                          "stage": 1,
                          "features": {
                            "focus-within-pseudo-class": false
                          }
                        }
                      ]
                    ]
                  },
                  "sourceMap": true
                }
              }
            ],
            "include": [
              "/Users/pope/Local Sites/claraumbach/app/public/wp-content/themes/umbachtheme/resources"
            ]
          },
          {
            "test": {},
            "use": [
              {
                "loader": "/Users/pope/Local Sites/claraumbach/app/public/wp-content/themes/umbachtheme/node_modules/mini-css-extract-plugin/dist/loader.js"
              },
              {
                "loader": "/Users/pope/Local Sites/claraumbach/app/public/wp-content/themes/umbachtheme/node_modules/css-loader/dist/cjs.js",
                "options": {
                  "importLoaders": 1,
                  "localIdentName": "[name]__[local]___[hash:base64:5]",
                  "modules": true,
                  "sourceMap": false
                }
              }
            ],
            "include": [
              "/Users/pope/Local Sites/claraumbach/app/public/wp-content/themes/umbachtheme/resources"
            ]
          },
          {
            "test": {},
            "include": [
              "/Users/pope/Local Sites/claraumbach/app/public/wp-content/themes/umbachtheme/resources"
            ],
            "type": "asset/resource",
            "generator": {
              "filename": "images/[name].[contenthash:6][ext]"
            }
          },
          {
            "test": {},
            "include": [
              "/Users/pope/Local Sites/claraumbach/app/public/wp-content/themes/umbachtheme/resources"
            ],
            "type": "asset/resource",
            "generator": {
              "filename": "images/[name].[contenthash:6][ext]"
            }
          },
          {
            "test": {},
            "include": [
              "/Users/pope/Local Sites/claraumbach/app/public/wp-content/themes/umbachtheme/resources"
            ],
            "type": "asset/resource",
            "generator": {
              "filename": "images/[name].[contenthash:6][ext]"
            }
          },
          {
            "test": {},
            "include": [
              "/Users/pope/Local Sites/claraumbach/app/public/wp-content/themes/umbachtheme/resources"
            ],
            "type": "asset",
            "generator": {
              "filename": "fonts/[name].[contenthash:6][ext]"
            }
          },
          {
            "test": {},
            "include": [
              "/Users/pope/Local Sites/claraumbach/app/public/wp-content/themes/umbachtheme/resources"
            ],
            "type": "json",
            "parser": {}
          },
          {
            "test": {},
            "include": [
              "/Users/pope/Local Sites/claraumbach/app/public/wp-content/themes/umbachtheme/resources"
            ],
            "type": "json",
            "parser": {}
          },
          {
            "test": {},
            "use": [
              {
                "loader": "/Users/pope/Local Sites/claraumbach/app/public/wp-content/themes/umbachtheme/node_modules/html-loader/dist/cjs.js"
              }
            ],
            "include": [
              "/Users/pope/Local Sites/claraumbach/app/public/wp-content/themes/umbachtheme/resources"
            ]
          },
          {
            "test": {},
            "use": [
              {
                "loader": "/Users/pope/Local Sites/claraumbach/app/public/wp-content/themes/umbachtheme/node_modules/csv-loader/index.js"
              }
            ],
            "include": [
              "/Users/pope/Local Sites/claraumbach/app/public/wp-content/themes/umbachtheme/resources"
            ]
          },
          {
            "test": {},
            "use": [
              {
                "loader": "/Users/pope/Local Sites/claraumbach/app/public/wp-content/themes/umbachtheme/node_modules/xml-loader/index.js"
              }
            ],
            "include": [
              "/Users/pope/Local Sites/claraumbach/app/public/wp-content/themes/umbachtheme/resources"
            ]
          },
          {
            "test": {},
            "include": [
              "/Users/pope/Local Sites/claraumbach/app/public/wp-content/themes/umbachtheme/resources"
            ],
            "type": "json",
            "parser": {}
          },
          {
            "test": {},
            "use": [
              {
                "loader": "/Users/pope/Local Sites/claraumbach/app/public/wp-content/themes/umbachtheme/node_modules/mini-css-extract-plugin/dist/loader.js"
              },
              {
                "loader": "/Users/pope/Local Sites/claraumbach/app/public/wp-content/themes/umbachtheme/node_modules/css-loader/dist/cjs.js",
                "options": {
                  "importLoaders": 1,
                  "sourceMap": false
                }
              },
              {
                "loader": "/Users/pope/Local Sites/claraumbach/app/public/wp-content/themes/umbachtheme/node_modules/postcss-loader/dist/cjs.js",
                "options": {
                  "postcssOptions": {
                    "plugins": [
                      [
                        "/Users/pope/Local Sites/claraumbach/app/public/wp-content/themes/umbachtheme/node_modules/postcss-import/index.js"
                      ],
                      [
                        null
                      ],
                      [
                        null
                      ],
                      [
                        "/Users/pope/Local Sites/claraumbach/app/public/wp-content/themes/umbachtheme/node_modules/postcss-preset-env/dist/index.cjs",
                        {
                          "stage": 1,
                          "features": {
                            "focus-within-pseudo-class": false
                          }
                        }
                      ]
                    ]
                  },
                  "sourceMap": true
                }
              },
              {
                "loader": "/Users/pope/Local Sites/claraumbach/app/public/wp-content/themes/umbachtheme/node_modules/resolve-url-loader/index.js",
                "options": {
                  "root": "/Users/pope/Local Sites/claraumbach/app/public/wp-content/themes/umbachtheme/resources",
                  "sourceMap": false
                }
              },
              {
                "loader": "/Users/pope/Local Sites/claraumbach/app/public/wp-content/themes/umbachtheme/node_modules/sass-loader/dist/cjs.js",
                "options": {
                  "implementation": {
                    "sassNull": {},
                    "sassTrue": {
                      "value": true
                    },
                    "sassFalse": {
                      "value": false
                    },
                    "Logger": {
                      "silent": {}
                    },
                    "info": "dart-sass\t1.49.9\t(Sass Compiler)\t[Dart]\ndart2js\t2.16.1\t(Dart Compiler)\t[Dart]",
                    "types": {},
                    "NULL": {},
                    "TRUE": {
                      "value": true
                    },
                    "FALSE": {
                      "value": false
                    },
                    "default": {
                      "sassNull": {},
                      "sassTrue": {
                        "value": true
                      },
                      "sassFalse": {
                        "value": false
                      },
                      "Logger": {
                        "silent": {}
                      },
                      "info": "dart-sass\t1.49.9\t(Sass Compiler)\t[Dart]\ndart2js\t2.16.1\t(Dart Compiler)\t[Dart]",
                      "types": {},
                      "NULL": {},
                      "TRUE": {
                        "value": true
                      },
                      "FALSE": {
                        "value": false
                      }
                    }
                  },
                  "sourceMap": true
                }
              }
            ],
            "include": [
              "/Users/pope/Local Sites/claraumbach/app/public/wp-content/themes/umbachtheme/resources"
            ]
          }
        ]
      }
    ],
    "unsafeCache": false
  },
  "name": "bud",
  "node": false,
  "output": {
    "assetModuleFilename": "[name].[contenthash:6][ext]",
    "chunkFilename": "[name].[contenthash:6].js",
    "filename": "[name].[contenthash:6].js",
    "path": "/Users/pope/Local Sites/claraumbach/app/public/wp-content/themes/umbachtheme/public",
    "pathinfo": false,
    "publicPath": ""
  },
  "optimization": {
    "emitOnErrors": false,
    "minimize": true,
    "minimizer": [
      "...",
      {
        "options": {
          "test": {},
          "parallel": true,
          "minimizer": {
            "options": {
              "preset": [
                "default",
                {
                  "discardComments": {
                    "removeAll": true
                  }
                }
              ]
            }
          }
        }
      }
    ],
    "runtimeChunk": "single",
    "splitChunks": {
      "cacheGroups": {
        "bud": {
          "chunks": "all",
          "test": {},
          "reuseExistingChunk": true,
          "priority": -10
        },
        "vendor": {
          "chunks": "all",
          "test": {},
          "reuseExistingChunk": true,
          "priority": -20
        }
      }
    }
  },
  "parallelism": 3,
  "performance": {
    "hints": false
  },
  "recordsPath": "/Users/pope/Local Sites/claraumbach/app/public/wp-content/themes/umbachtheme/.budfiles/bud/modules.json",
  "stats": "normal",
  "target": "browserslist:/Users/pope/Local Sites/claraumbach/app/public/wp-content/themes/umbachtheme/package.json",
  "plugins": [
    {
      "patterns": [
        {
          "from": "images/**/*",
          "context": "/Users/pope/Local Sites/claraumbach/app/public/wp-content/themes/umbachtheme/resources",
          "noErrorOnMissing": true
        }
      ],
      "options": {}
    },
    {
      "options": {
        "assetHookStage": null,
        "basePath": "",
        "fileName": "manifest.json",
        "filter": null,
        "map": null,
        "publicPath": "",
        "removeKeyHash": {},
        "sort": null,
        "transformExtensions": {},
        "useEntryKeys": false,
        "useLegacyEmit": false,
        "writeToFileEmit": true
      }
    },
    {
      "_sortedModulesCache": {},
      "options": {
        "filename": "[name].[contenthash:6].css",
        "ignoreOrder": false,
        "runtime": true,
        "chunkFilename": "[name].[contenthash:6].css"
      },
      "runtimeOptions": {
        "linkType": "text/css"
      }
    },
    {
      "options": {
        "emitHtml": false,
        "publicPath": ""
      },
      "plugin": {
        "name": "EntrypointsManifestPlugin",
        "stage": null
      },
      "name": "entrypoints.json"
    },
    {
      "name": "WordPressExternalsWebpackPlugin",
      "stage": null,
      "externals": {
        "type": "window"
      }
    },
    {
      "plugin": {
        "name": "WordPressDependenciesWebpackPlugin",
        "stage": null
      },
      "manifest": {},
      "usedDependencies": {},
      "fileName": "wordpress.json"
    },
    {
      "plugin": {
        "name": "MergedManifestPlugin"
      },
      "file": "entrypoints.json",
      "entrypointsName": "entrypoints.json",
      "wordpressName": "wordpress.json"
    }
  ],
  "entry": {
    "app": {
      "import": [
        "@scripts/app",
        "@styles/app"
      ]
    },
    "editor": {
      "import": [
        "@scripts/editor",
        "@styles/editor"
      ]
    }
  },
  "resolve": {
    "alias": {
      "@src": "/Users/pope/Local Sites/claraumbach/app/public/wp-content/themes/umbachtheme/resources",
      "@dist": "/Users/pope/Local Sites/claraumbach/app/public/wp-content/themes/umbachtheme/public",
      "@fonts": "/Users/pope/Local Sites/claraumbach/app/public/wp-content/themes/umbachtheme/resources/fonts",
      "@images": "/Users/pope/Local Sites/claraumbach/app/public/wp-content/themes/umbachtheme/resources/images",
      "@scripts": "/Users/pope/Local Sites/claraumbach/app/public/wp-content/themes/umbachtheme/resources/scripts",
      "@styles": "/Users/pope/Local Sites/claraumbach/app/public/wp-content/themes/umbachtheme/resources/styles"
    },
    "extensions": [
      ".wasm",
      ".mjs",
      ".js",
      ".jsx",
      ".css",
      ".json",
      ".toml",
      ".yml",
      ".scss",
      ".sass"
    ],
    "modules": [
      "/Users/pope/Local Sites/claraumbach/app/public/wp-content/themes/umbachtheme/resources",
      "node_modules"
    ]
  }
}