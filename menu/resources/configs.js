/**
 * @overview configurations of ccm component for rendering a menu
 * @author André Kless <andre.kless@web.de> 2018
 * @license The MIT License (MIT)
 */

ccm.files[ 'configs.js' ] = {

  "local": {
    "css": [ "ccm.load", "../menu/resources/default.css" ],
    "data": {
      "store": [ "ccm.store", "../menu/resources/datasets.js" ],
      "key": "demo"
    },
    "logger": [ "ccm.instance", "../log/ccm.log.js", [ "ccm.get", "../log/resources/configs.js", "greedy" ] ]
  },

  "demo": {
    "css": [ "ccm.load", "https://ccmjs.github.io/akless-components/menu/resources/default.css" ],
    "data": {
      "store": [ "ccm.store", "https://ccmjs.github.io/akless-components/menu/resources/datasets.js" ],
      "key": "demo"
    },
    "logger": [ "ccm.instance", "https://ccmjs.github.io/akless-components/log/ccm.log.js", [ "ccm.get", "https://ccmjs.github.io/akless-components/log/resources/configs.js", "greedy" ] ]
  },

  "icon": {
    "css": [ "ccm.load",
      { "context": "head", "url": "https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css" },
      "https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css",
      "https://ccmjs.github.io/akless-components/menu/resources/icon.css"
    ],
    "data": {
      "store": [ "ccm.store", "https://ccmjs.github.io/akless-components/menu/resources/datasets.js" ],
      "key": "icon"
    },
    "logger": [ "ccm.instance", "https://ccmjs.github.io/akless-components/log/ccm.log.js", [ "ccm.get", "https://ccmjs.github.io/akless-components/log/resources/configs.js", "greedy" ] ]
  },

};