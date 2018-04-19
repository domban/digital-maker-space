/**
 * @overview configurations of ccm component for rendering a listing
 * @author André Kless <andre.kless@web.de> 2018
 * @license The MIT License (MIT)
 */

ccm.files[ 'configs.js' ] = {
  "local": {
    "data": {
      "store": [ "ccm.store", { "url": "http://localhost:8080", "store": "show_solutions", "method": "POST" } ],
      "key": "{}"
    },
    "target": [ "ccm.component", "https://ccmjs.github.io/tkless-components/table/ccm.table.js" ]
  },
  "we_ss18": {
    "data": {
      "store": [ "ccm.store", { "url": "https://ccm2.inf.h-brs.de", "store": "we_ss18_solutions", "method": "POST" } ],
      "key": { "_id": { "$regex": ",le01_a1$" } }
    },
    "target": [ "ccm.component", "https://ccmjs.github.io/tkless-components/table/ccm.table.min.js" ]
  }
};