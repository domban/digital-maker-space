/**
 * @overview configurations of ccm component for Create/Read/Update/Delete a ccm-based app
 * @author André Kless <andre.kless@web.de> 2018
 * @license The MIT License (MIT)
 */

ccm.files[ 'configs.js' ] = {
  "local": {
    "logger": [ "ccm.instance", "../log/ccm.log.js", [ "ccm.get", "../log/resources/configs.js", "greedy" ] ]
  },
  "localhost": {
    "store": [ "ccm.store", { "store": "cloze", "url": "http://localhost:8080" } ],
    "logger": [ "ccm.instance", "../log/ccm.log.js", [ "ccm.get", "../log/resources/configs.js", "greedy" ] ]
  },
  "demo": {
    "builder": [ "ccm.component", "https://ccmjs.github.io/akless-components/cloze_builder/versions/ccm.cloze_builder-2.1.3.js" ],
    "store": [ "ccm.store", { "store": "cloze", "url": "https://ccm2.inf.h-brs.de" } ],
    "url": "https://ccmjs.github.io/akless-components/cloze/versions/ccm.cloze-4.0.0.js"
  },
  "teambuild": {
    "builder": [ "ccm.component", "https://ccmjs.github.io/akless-components/teambuild_builder/versions/ccm.teambuild_builder-3.0.0.js" ],
    "store": [ "ccm.store", { "store": "teambuild", "url": "https://ccm2.inf.h-brs.de" } ],
    "url": "https://ccmjs.github.io/akless-components/teambuild/versions/ccm.teambuild-2.0.0.js"
  },
  "lea": {
    "builder": [ "ccm.component", "https://ccm-comp.bib.h-brs.de/ccm-components/cloze_builder/versions/ccm.cloze_builder-2.1.3.js" ],
    "store": [ "ccm.store", { "store": "cloze", "url": "https://ccm-data.bib.h-brs.de" } ],
    "url": "https://ccm-comp.bib.h-brs.de/ccm-components/cloze/versions/ccm.cloze-4.0.0.js"
  }
};