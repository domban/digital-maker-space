/**
 * @overview configurations of ccm component for rendering a kanban board
 * @author André Kless <andre.kless@web.de> 2017
 * @license The MIT License (MIT)
 */

ccm.files[ 'configs.js' ] = {

  "local": {
    "key": "local",
    "css": [ "ccm.load", "../kanban_board/resources/default.css" ],
    "data": {
      "store": [ "ccm.store", "../kanban_board/resources/datasets.js" ],
      "key": "local"
    },
    "card": {
      "component": "../kanban_card/ccm.kanban_card.js",
      "config": {
        "font": [ "ccm.load", { "context": "head", "url": "../libs/weblysleekui/font.css" } ],
        "css": [ "ccm.load", "../kanban_card/resources/weblysleek.css" ],
        "data": {},
        "logger": [ "ccm.instance", "../log/ccm.log.js", [ "ccm.get", "../log/resources/configs.js", "greedy" ] ]
      }
    }
  },

  "remote": {
    "key": "remote",
    "css": [ "ccm.load", "../kanban_board/resources/default.css" ],
    "data": {
      "store": [ "ccm.store", { "store": "kanban_board", "url": "wss://ccm2.inf.h-brs.de" } ],
      "key": "test"
    },
    "card": {
      "component": "../kanban_card/ccm.kanban_card.js",
      "config": {
        "font": [ "ccm.load", { "context": "head", "url": "../libs/weblysleekui/font.css" } ],
        "css": [ "ccm.load", "../kanban_card/resources/weblysleek.css" ],
        "data": {
          "store": [ "ccm.store", { "store": "kanban_card", "url": "wss://ccm2.inf.h-brs.de" } ],
          "permission_settings": { "access": "group" }
        },
        "logger": [ "ccm.instance", "../log/ccm.log.js", [ "ccm.get", "../log/resources/configs.js", "greedy" ] ]
      }
    }
  },

  "demo": {
    "key": "demo",
    "css": [ "ccm.load", "https://ccmjs.github.io/akless-components/kanban_board/resources/default.css" ],
    "data": {
      "store": [ "ccm.store", { "store": "kanban_board", "url": "wss://ccm2.inf.h-brs.de" } ],
      "key": "demo"
    },
    "card": {
      "component": "https://ccmjs.github.io/akless-components/kanban_card/versions/ccm.kanban_card-1.0.0.js",
      "config": {
        "font": [ "ccm.load", { "context": "head", "url": "https://ccmjs.github.io/akless-components/libs/weblysleekui/font.css" } ],
        "css": [ "ccm.load", "https://ccmjs.github.io/akless-components/kanban_card/resources/weblysleek.css" ],
        "data": {
          "store": [ "ccm.store", { "store": "kanban_card", "url": "wss://ccm2.inf.h-brs.de" } ],
          "permission_settings": { "access": "group" }
        },
        "logger": [ "ccm.instance", "https://ccmjs.github.io/akless-components/log/versions/ccm.log-1.0.0.js", [ "ccm.get", "https://ccmjs.github.io/akless-components/log/resources/configs.js", "greedy" ] ]
      }
    }
  },

  "showcase": {
    "key": "showcase",
    "css": [ "ccm.load", "https://ccmjs.github.io/akless-components/kanban_board/resources/default.css" ],
    "data": {
      "store": [ "ccm.store", "https://ccmjs.github.io/akless-components/kanban_board/resources/datasets.js" ],
      "key": "showcase"
    },
    "card": {
      "component": "https://ccmjs.github.io/akless-components/kanban_card/versions/ccm.kanban_card-1.0.0.js",
      "config": { "data": {} }
    }
  },

  "experimental": {
    "key": "experimental",
    "css": [ "ccm.load", "https://ccmjs.github.io/akless-components/kanban_board/resources/default.css" ],
    "data": {
      "store": [ "ccm.store", "resources/datasets.js" ],
      "key": "experimental"
    },
    "card": {
      "component": "https://ccmjs.github.io/akless-components/kanban_card/versions/ccm.kanban_card-1.0.0.js",
      "config": { "data": {} }
    }
  }

};