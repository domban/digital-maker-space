/**
 * @overview datasets of ccm component for submitting data
 * @author André Kless <andre.kless@web.de> 2017
 * @license The MIT License (MIT)
 */

ccm.files[ 'datasets.js' ] = {

  // example for initial values for input elements of local demo
  "test": {
    "color": "#66CCFF",
    "date": "2017-11-21",
    "datetime-local": "2017-11-21T16:53",
    "email": "john.doe@web.de",
    "hidden": "secret",
    "month": "2017-11",
    "password": "secret",
    "search": "found!",
    "tel": "0123456789",
    "text": "John Doe",
    "time": "16:54",
    "url": "https://www.john-doe.com",
    "week": "2017-W47",
    "number": 4711,
    "range": 5,
    "checkbox": true,
    "multi-checkbox": [ 'A', 'C' ],
    "radio": "B",
    "select": "B",
    "multi-select": [ 'A', 'C' ],
    "textarea": "My Story",
    "contenteditable": "This is editable text.",
    "complex-data": { "A": [ "B", "C" ] },
    "deep": { "property": "A" },
    "texts": [ "foo", "bar" ],
    "highscore": [ { "player": "john", "score": 100 }, { "player": "jane", "score": 100 } ],
    "cloze_builder": [ "ccm.get", "../cloze_builder/resources/datasets.js", "test" ],
    "teambuild_builder": [ "ccm.get", "../teambuild_builder/resources/datasets.js", "test" ],
    "objects": [ { "foo": "bar" }, { "abc": "xyz" } ]
  },

  // example special HTML structure for main HTML
  "html": {
    "data": [
      "<source src='https://ccmjs.github.io/akless-components/blank/ccm.blank.js'>",
      "<legend>Decoration</legend>",
      "<ccm-blank></ccm-blank>",
      "<legend>Input</legend>",
      {
        "label": "color",
        "name": "color",
        "type": "color",
        "info": "Text Text Text"
      },
      {
        "label": "date",
        "name": "date",
        "type": "date",
        "info": "Text Text Text"
      },
      {
        "label": "datetime-local",
        "name": "datetime-local",
        "type": "datetime-local",
        "info": "Text Text Text"
      },
      {
        "label": "email",
        "name": "email",
        "type": "email",
        "info": "Text Text Text"
      },
      {
        "name": "hidden",
        "type": "hidden",
        "info": "Text Text Text"
      },
      {
        "label": "month",
        "name": "month",
        "type": "month",
        "info": "Text Text Text"
      },
      {
        "label": "password",
        "name": "password",
        "type": "password",
        "info": "Text Text Text"
      },
      {
        "label": "search",
        "name": "search",
        "type": "search",
        "info": "Text Text Text"
      },
      {
        "label": "tel",
        "name": "tel",
        "type": "tel",
        "info": "Text Text Text"
      },
      {
        "label": "text",
        "name": "text",
        "type": "text",
        "info": "Text Text Text"
      },
      {
        "label": "time",
        "name": "time",
        "type": "time",
        "info": "Text Text Text"
      },
      {
        "label": "url",
        "name": "url",
        "type": "url",
        "info": "Text Text Text"
      },
      {
        "label": "week",
        "name": "week",
        "type": "week",
        "info": "Text Text Text"
      },
      "<legend>Number</legend>",
      {
        "label": "number",
        "name": "number",
        "type": "number",
        "info": "Text Text Text",
        "min": 1
      },
      {
        "label": "range",
        "name": "range",
        "type": "range",
        "min": 1,
        "max": 10,
        "info": "Text Text Text"
      },
      "<legend>Checkbox</legend>",
      {
        "label": "checkbox",
        "name": "checkbox",
        "type": "checkbox",
        "info": "Text Text Text"
      },
      {
        "label": "multi-checkbox",
        "name": "multi-checkbox",
        "type": "multi-checkbox",
        "info": "Text Text Text",
        "items": [
          {
            "label": "checkbox A",
            "value": "A"
          },
          {
            "label": "checkbox B",
            "value": "B"
          },
          {
            "label": "checkbox C",
            "value": "C"
          }
        ]
      },
      "<legend>Radio</legend>",
      {
        "label": "radio",
        "name": "radio",
        "type": "radio",
        "info": "Text Text Text",
        "items": [
          {
            "label": "radio A",
            "value": "A"
          },
          {
            "label": "radio B",
            "value": "B"
          },
          {
            "label": "radio C",
            "value": "C"
          }
        ]
      },
      "<legend>Select</legend>",
      {
        "label": "select",
        "name": "select",
        "type": "select",
        "info": "Text Text Text",
        "items": [
          {
            "inner": "option A",
            "value": "A"
          },
          {
            "inner": "option B",
            "value": "B"
          },
          {
            "inner": "option C",
            "value": "C"
          }
        ]
      },
      {
        "label": "multi-select",
        "name": "multi-select",
        "type": "multi-select",
        "info": "Text Text Text",
        "items": [
          {
            "label": "option A",
            "value": "A"
          },
          {
            "label": "option B",
            "value": "B"
          },
          {
            "label": "option C",
            "value": "C"
          }
        ]
      },
      "<legend>Textarea</legend>",
      {
        "label": "textarea",
        "name": "textarea",
        "type": "textarea",
        "info": "Text Text Text"
      },
      "<legend>Special</legend>",
      {
        "label": "contenteditable",
        "name": "contenteditable",
        "type": "contenteditable",
        "info": "Text Text Text"
      },
      {
        "label": "deep.property",
        "name": "deep.property",
        "type": "text",
        "info": "Text Text Text"
      },
      {
        "label": "texts",
        "type": "several",
        "info": "Text Text Text",
        "item": {
          "label": "text %nr%",
          "name": "texts",
          "type": "text"
        }
      },
      {
        "label": "highscore",
        "name": "highscore",
        "type": "several",
        "info": "Text Text Text",
        "items": [
          {
            "label": "player",
            "name": "player",
            "type": "text",
            "info": "Text Text Text"
          },
          {
            "label": "score",
            "name": "score",
            "type": "number",
            "info": "Text Text Text",
            "min": 0
          }
        ]
      },
      "<legend><i>ccm</i>-based Input Elements</legend>",
      {
        "label": "cloze_builder",
        "name": "cloze_builder",
        "type": "cloze_builder",
        "info": "Text Text Text"
      },
      {
        "label": "teambuild_builder",
        "name": "teambuild_builder",
        "type": "teambuild_builder",
        "info": "Text Text Text"
      },
      {
        "label": "objects",
        "type": "several",
        "info": "Text Text Text",
        "item": {
          "label": "object %nr%",
          "name": "objects",
          "type": "json_builder"
        }
      },
      { "type": "submit" }
    ]
  }

};