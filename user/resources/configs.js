/**
 * @overview configurations of ccm component for user authentication
 * @author André Kless <andre.kless@web.de> 2017-2018
 * @license The MIT License (MIT)
 */

ccm.files[ 'configs.js' ] = {
  "local": {
    "css": [ "ccm.load", "../user/resources/default.css" ],
    "logger": [ "ccm.instance", "../log/ccm.log.js", [ "ccm.get", "../log/resources/configs.js", "greedy" ] ]
  },
  "demo": {
    "realm": "demo",
    "css": [ "ccm.load",
      "https://ccmjs.github.io/tkless-components/libs/bootstrap/css/bootstrap.css",
      { "context": "head", "url": "https://ccmjs.github.io/tkless-components/libs/bootstrap/css/font-face.css" },
      "https://ccmjs.github.io/akless-components/user/resources/bootstrap.css"
    ],
    "html": {
      "logged_in": {
        "id": "logged_in",
        "class": "well well-sm",
        "inner": [
          {
            "id": "user",
            "inner": [
              { "class": "glyphicon glyphicon-user" },
              "%user%"
            ]
          },
          {
            "id": "button",
            "class": "btn btn-default btn-xs",
            "inner": [
              {
                "tag": "span",
                "class": "glyphicon glyphicon-log-out"
              },
              "Logout"
            ],
            "onclick": "%click%"
          }
        ]
      },
      "logged_out": {
        "id": "logged_out",
        "class": "well well-sm",
        "inner": {
          "id": "button",
          "class": "btn btn-default btn-xs",
          "inner": [
            {
              "tag": "span",
              "class": "glyphicon glyphicon-log-in"
            },
            "Login"
          ],
          "onclick": "%click%"
        }
      },
      // HTML template 'login_form' by Tea Kless <tea.kless@web.de> 2018
      "login_form": {
        "id": "login-form",
        "class": "container",
        "inner": [
          {
            "id": "loginbox",
            "class": "mainbox col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2",
            "inner": {
              "class": "panel panel-info",
              "inner": [
                {
                  "class": "panel-heading",
                  "inner": {
                    "class": "panel-title",
                    "inner": "%title%"
                  }
                },
                {
                  "class": "panel-body",
                  "inner": [
                    {
                      "tag": "form",
                      "id": "loginform",
                      "class": "form-horizontal",
                      "role": "form",
                      "inner": [
                        {
                          "id": "username-entry",
                          "class": "input-group",
                          "inner": [
                            {
                              "tag": "span",
                              "class": "input-group-addon",
                              "inner": {
                                "tag": "i",
                                "class": "glyphicon glyphicon-user"
                              }
                            },
                            {
                              "tag": "input",
                              "id": "login-username",
                              "type": "text",
                              "class": "form-control",
                              "name": "username",
                              "placeholder": "username",
                              "required": true
                            }
                          ]
                        },
                        {
                          "id": "password-entry",
                          "class": "input-group",
                          "inner": [
                            {
                              "tag": "span",
                              "class": "input-group-addon",
                              "inner": {
                                "tag": "i",
                                "class": "glyphicon glyphicon-lock"
                              }
                            },
                            {
                              "tag": "input",
                              "id": "login-password",
                              "type": "password",
                              "class": "form-control",
                              "name": "password",
                              "placeholder": "password",
                              "required": true
                            }
                          ]
                        },
                        {
                          "class": "form-group",
                          "inner": {
                            "class": "col-sm-12 controls",
                            "inner": [
                              {
                                "tag": "a",
                                "id": "btn-login",
                                "class": "btn btn-success",
                                "onclick": "%login%",
                                "inner": "Login"
                              },
                              {
                                "tag": "a",
                                "id": "btn-abort",
                                "class": "btn btn-warning",
                                "onclick": "%abort%",
                                "inner": "Abort"
                              }
                            ]
                          }
                        }/*,
                          {
                            "class": "form-group",
                            "inner": {
                              "class": "col-md-12 control",
                              "inner":  {
                                "style": "border-top: 1px solid#888; padding-top:15px; font-size:85%",
                                "inner": [
                                  "Don't have an account!",
                                  {
                                    "tag": "a",
                                    "onclick": "%signup%",
                                    "inner": "&nbsp Sign Up Here"
                                  }
                                ]
                              }
                            }
                          }*/
                      ]
                    }
                  ]
                }
              ]
            }
          },
          {
            "id": "signupbox",
            "style": "display:none; margin-top:50px",
            "class": "mainbox col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2",
            "inner": {
              "class": "panel panel-info",
              "inner": [
                {
                  "class": "panel-heading",
                  "inner": [
                    {
                      "class": "panel-title",
                      "inner": "Sign Up"
                    },
                    {
                      "style": "float:right; font-size: 85%; position: relative; top:-10px",
                      "inner": {
                        "tag": "a",
                        "id": "signinlink",
                        "onclick": "%loginbox%",
                        "inner": "Sign In"
                      }
                    }
                  ]
                },
                {
                  "class": "panel-body",
                  "inner": {
                    "id": "signupform",
                    "class": "form-horizontal",
                    "role": "form",
                    "inner": [
                      {
                        "id": "signupalert",
                        "style": "display:none",
                        "class": "alert alert-danger",
                        "inner": [
                          {
                            "tag": "p",
                            "inner": "Error:"
                          },
                          {

                          }
                        ]
                      },
                      {
                        "class": "form-group",
                        "inner": [
                          {
                            "tag": "label",
                            "for": "email",
                            "class": "col-md-3 control-label",
                            "inner": "Email"
                          },
                          {
                            "class":" col-md-9",
                            "inner": {
                              "tag": "input",
                              "type": "text",
                              "class": "form-control",
                              "id": "email",
                              "name": "email",
                              "placeholder": "Email Address"
                            }
                          }
                        ]
                      },
                      {
                        "class": "form-group",
                        "inner": [
                          {
                            "tag": "label",
                            "for": "firstname",
                            "class": "col-md-3 control-label",
                            "inner": "Frist Name"
                          },
                          {
                            "class":" col-md-9",
                            "inner": {
                              "tag": "input",
                              "type": "text",
                              "class": "form-control",
                              "id": "firstname",
                              "name": "firstname",
                              "placeholder": "First Name"
                            }
                          }
                        ]
                      },
                      {
                        "class": "form-group",
                        "inner": [
                          {
                            "tag": "label",
                            "for": "lastname",
                            "class": "col-md-3 control-label",
                            "inner": "Last Name"
                          },
                          {
                            "class":" col-md-9",
                            "inner": {
                              "tag": "input",
                              "type": "text",
                              "class": "form-control",
                              "id": "lastname",
                              "name": "lastname",
                              "placeholder": "Last Name"
                            }
                          }
                        ]
                      },
                      {
                        "class": "form-group",
                        "inner": [
                          {
                            "tag": "label",
                            "for": "password",
                            "class": "col-md-3 control-label",
                            "inner": "Password"
                          },
                          {
                            "class":" col-md-9",
                            "inner": {
                              "tag": "input",
                              "type": "text",
                              "class": "form-control",
                              "id": "password",
                              "name": "password",
                              "placeholder": "Password"
                            }
                          }
                        ]
                      },
                      {
                        "class": "form-group",
                        "inner": [
                          {
                            "tag": "label",
                            "for": "icode",
                            "class": "col-md-3 control-label",
                            "inner": "Invitation Code"
                          },
                          {
                            "class":" col-md-9",
                            "inner": {
                              "tag": "input",
                              "type": "text",
                              "class": "form-control",
                              "id": "icode",
                              "name": "icode"
                            }
                          }
                        ]
                      },
                      {
                        "class": "form-group",
                        "inner": {
                          "class": "col-md-offset-3 col-md-9",
                          "inner": {
                            "tag": "button",
                            "id": "btn-signup",
                            "type": "button",
                            "class": "btn btn-primary",
                            "inner": [
                              {
                                "tag": "i",
                                "class": "glyphicon glyphicon-hand-right",
                              },
                              "&nbsp; Sign Up"
                            ]
                          }
                        }
                      }
                    ]
                  }
                }
              ]
            }
          }
        ]
      }
    }
  },
  "lea": {
    "realm": "LEA",
    "css": [ "ccm.load",
      "https://ccmjs.github.io/tkless-components/libs/bootstrap/css/bootstrap.css",
      { "context": "head", "url": "https://ccmjs.github.io/tkless-components/libs/bootstrap/css/font-face.css" },
      "https://ccmjs.github.io/akless-components/user/resources/bootstrap.css"
    ],
    "html": {
      "logged_in": {
        "id": "logged_in",
        "class": "well well-sm",
        "inner": [
          {
            "id": "user",
            "inner": [
              { "class": "glyphicon glyphicon-user" },
              "%user%"
            ]
          },
          {
            "id": "button",
            "class": "btn btn-default btn-xs",
            "inner": [
              {
                "tag": "span",
                "class": "glyphicon glyphicon-log-out"
              },
              "Logout"
            ],
            "onclick": "%click%"
          }
        ]
      },
      "logged_out": {
        "id": "logged_out",
        "class": "well well-sm",
        "inner": {
          "id": "button",
          "class": "btn btn-default btn-xs",
          "inner": [
            {
              "tag": "span",
              "class": "glyphicon glyphicon-log-in"
            },
            "Login"
          ],
          "onclick": "%click%"
        }
      },
      // HTML template 'login_form' by Tea Kless <tea.kless@web.de> 2018
      "login_form": {
        "id": "login-form",
        "class": "container",
        "inner": [
          {
            "id": "loginbox",
            "class": "mainbox col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2",
            "inner": {
              "class": "panel panel-info",
              "inner": [
                {
                  "class": "panel-heading",
                  "inner": {
                    "class": "panel-title",
                    "inner": "%title%"
                  }
                },
                {
                  "class": "panel-body",
                  "inner": [
                    {
                      "tag": "form",
                      "id": "loginform",
                      "class": "form-horizontal",
                      "role": "form",
                      "inner": [
                        {
                          "id": "username-entry",
                          "class": "input-group",
                          "inner": [
                            {
                              "tag": "span",
                              "class": "input-group-addon",
                              "inner": {
                                "tag": "i",
                                "class": "glyphicon glyphicon-user"
                              }
                            },
                            {
                              "tag": "input",
                              "id": "login-username",
                              "type": "text",
                              "class": "form-control",
                              "name": "username",
                              "placeholder": "username",
                              "required": true
                            }
                          ]
                        },
                        {
                          "id": "password-entry",
                          "class": "input-group",
                          "inner": [
                            {
                              "tag": "span",
                              "class": "input-group-addon",
                              "inner": {
                                "tag": "i",
                                "class": "glyphicon glyphicon-lock"
                              }
                            },
                            {
                              "tag": "input",
                              "id": "login-password",
                              "type": "password",
                              "class": "form-control",
                              "name": "password",
                              "placeholder": "password",
                              "required": true
                            }
                          ]
                        },
                        {
                          "class": "form-group",
                          "inner": {
                            "class": "col-sm-12 controls",
                            "inner": [
                              {
                                "tag": "a",
                                "id": "btn-login",
                                "class": "btn btn-success",
                                "onclick": "%login%",
                                "inner": "Login"
                              },
                              {
                                "tag": "a",
                                "id": "btn-abort",
                                "class": "btn btn-warning",
                                "onclick": "%abort%",
                                "inner": "Abort"
                              }
                            ]
                          }
                        }/*,
                          {
                            "class": "form-group",
                            "inner": {
                              "class": "col-md-12 control",
                              "inner":  {
                                "style": "border-top: 1px solid#888; padding-top:15px; font-size:85%",
                                "inner": [
                                  "Don't have an account!",
                                  {
                                    "tag": "a",
                                    "onclick": "%signup%",
                                    "inner": "&nbsp Sign Up Here"
                                  }
                                ]
                              }
                            }
                          }*/
                      ]
                    }
                  ]
                }
              ]
            }
          },
          {
            "id": "signupbox",
            "style": "display:none; margin-top:50px",
            "class": "mainbox col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2",
            "inner": {
              "class": "panel panel-info",
              "inner": [
                {
                  "class": "panel-heading",
                  "inner": [
                    {
                      "class": "panel-title",
                      "inner": "Sign Up"
                    },
                    {
                      "style": "float:right; font-size: 85%; position: relative; top:-10px",
                      "inner": {
                        "tag": "a",
                        "id": "signinlink",
                        "onclick": "%loginbox%",
                        "inner": "Sign In"
                      }
                    }
                  ]
                },
                {
                  "class": "panel-body",
                  "inner": {
                    "id": "signupform",
                    "class": "form-horizontal",
                    "role": "form",
                    "inner": [
                      {
                        "id": "signupalert",
                        "style": "display:none",
                        "class": "alert alert-danger",
                        "inner": [
                          {
                            "tag": "p",
                            "inner": "Error:"
                          },
                          {

                          }
                        ]
                      },
                      {
                        "class": "form-group",
                        "inner": [
                          {
                            "tag": "label",
                            "for": "email",
                            "class": "col-md-3 control-label",
                            "inner": "Email"
                          },
                          {
                            "class":" col-md-9",
                            "inner": {
                              "tag": "input",
                              "type": "text",
                              "class": "form-control",
                              "id": "email",
                              "name": "email",
                              "placeholder": "Email Address"
                            }
                          }
                        ]
                      },
                      {
                        "class": "form-group",
                        "inner": [
                          {
                            "tag": "label",
                            "for": "firstname",
                            "class": "col-md-3 control-label",
                            "inner": "Frist Name"
                          },
                          {
                            "class":" col-md-9",
                            "inner": {
                              "tag": "input",
                              "type": "text",
                              "class": "form-control",
                              "id": "firstname",
                              "name": "firstname",
                              "placeholder": "First Name"
                            }
                          }
                        ]
                      },
                      {
                        "class": "form-group",
                        "inner": [
                          {
                            "tag": "label",
                            "for": "lastname",
                            "class": "col-md-3 control-label",
                            "inner": "Last Name"
                          },
                          {
                            "class":" col-md-9",
                            "inner": {
                              "tag": "input",
                              "type": "text",
                              "class": "form-control",
                              "id": "lastname",
                              "name": "lastname",
                              "placeholder": "Last Name"
                            }
                          }
                        ]
                      },
                      {
                        "class": "form-group",
                        "inner": [
                          {
                            "tag": "label",
                            "for": "password",
                            "class": "col-md-3 control-label",
                            "inner": "Password"
                          },
                          {
                            "class":" col-md-9",
                            "inner": {
                              "tag": "input",
                              "type": "text",
                              "class": "form-control",
                              "id": "password",
                              "name": "password",
                              "placeholder": "Password"
                            }
                          }
                        ]
                      },
                      {
                        "class": "form-group",
                        "inner": [
                          {
                            "tag": "label",
                            "for": "icode",
                            "class": "col-md-3 control-label",
                            "inner": "Invitation Code"
                          },
                          {
                            "class":" col-md-9",
                            "inner": {
                              "tag": "input",
                              "type": "text",
                              "class": "form-control",
                              "id": "icode",
                              "name": "icode"
                            }
                          }
                        ]
                      },
                      {
                        "class": "form-group",
                        "inner": {
                          "class": "col-md-offset-3 col-md-9",
                          "inner": {
                            "tag": "button",
                            "id": "btn-signup",
                            "type": "button",
                            "class": "btn btn-primary",
                            "inner": [
                              {
                                "tag": "i",
                                "class": "glyphicon glyphicon-hand-right",
                              },
                              "&nbsp; Sign Up"
                            ]
                          }
                        }
                      }
                    ]
                  }
                }
              ]
            }
          }
        ]
      }
    }
  }
};