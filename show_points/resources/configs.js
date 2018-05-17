/**
 * @overview configurations of ccm component for rendering a point list of an user
 * @author André Kless <andre.kless@web.de> 2018
 * @license The MIT License (MIT)
 */

ccm.files[ 'configs.js' ] = {
  "we_ss18": {
    "html.inner.0.inner": "Punktekonto von %user%",
    "html.inner.2.inner": "Summe: %points% Punkte",
    "css": [ "ccm.load", "https://ccmjs.github.io/akless-components/show_points/resources/default.css" ],
    "store": [ "ccm.store", { "url": "https://ccm2.inf.h-brs.de", "store": "we_ss18_solutions", "method": "POST" } ],
    "user": [ "ccm.instance", "https://ccmjs.github.io/akless-components/user/versions/ccm.user-4.0.0.min.js", { "realm": "hbrsinfkaul", "logged_in": true } ],
    "target": [ "ccm.component", "https://ccmjs.github.io/tkless-components/table/ccm.table.min.js" ],
    "mapping": {
      "le01_a1": { "points": 5, "deadline": "2018-04-19T08:00" },
      "le01_a2": { "points": 5, "deadline": "2018-04-19T08:00" },
      "le02_a1": { "points": 2, "deadline": "2018-04-26T08:00" },
      "le02_a2": { "points": 2, "deadline": "2018-04-26T08:00" },
      "le02_a3": { "points": 2, "deadline": "2018-04-26T08:00" },
      "le02_a4": { "points": 4, "deadline": "2018-04-26T08:00" },
      "le03_a1": { "points": 2, "deadline": "2018-05-03T08:00" },
      "le03_a2": { "points": 2, "deadline": "2018-05-03T08:00" },
      "le03_a3": { "points": 4, "deadline": "2018-05-03T08:00" },
      "le03_a4": { "points": 3, "deadline": "2018-05-03T08:00" },
      "le04_a1": { "points": 5, "deadline": "2018-05-17T08:00" },
      "le04_a2": { "points": 5, "deadline": "2018-05-17T08:00" },
      "le05_a1": { "points": 2, "deadline": "2018-05-24T08:00" },
      "le05_a2": { "points": 2, "deadline": "2018-05-24T08:00" },
      "le05_a3": { "points": 6, "deadline": "2018-05-24T08:00" }
    }
  }
};