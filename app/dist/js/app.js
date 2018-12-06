(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _Grid = _interopRequireDefault(require("./Grid"));

var _updater = _interopRequireDefault(require("../updater"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var App =
/*#__PURE__*/
function (_Component) {
  _inherits(App, _Component);

  function App(props) {
    var _this;

    _classCallCheck(this, App);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(App).call(this, props));
    _this.state = {
      rows: [
        /*{
            columns: [
                {
                    size: "md-6",
                    portlet: {
                        icon: "fa fa-opencart font-dark",
                        name: "MyMonolith UK",
                        table: {
                            headers: [
                                {name: "Store Name", width: "101px"},
                                {name: "Today Sales", width: "65px"}
                            ],
                            rows: [
                                {id: "1", name: "Mix1", sum: "162,700 €"},
                                {id: "2", name: "Mix2", sum: "1,200,000 €"},
                                {id: "3", name: "Mix3", sum: "162,700 €"},
                                {id: "4", name: "Mix4", sum: "1,200,000 €"}
                            ]
                        }
                    }
                }
            ]
        }*/
      ]
    };
    return _this;
  }

  _createClass(App, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.updater = new _updater.default("/tests/instantcash/query", "/tests/instantcash/collect");
      this.updater.setHandlers(function (res) {
        var n = 0;
        var rows = [];

        for (var i = 0; i < res.data.length; i++) {
          if (n === 0) {
            rows.push({
              columns: []
            });
          }

          var lri = rows.length - 1;
          rows[lri].columns.push({
            size: "md-6",
            portlet: {
              icon: "fa fa-opencart font-dark",
              name: res.data[i].name,
              table: {
                headers: [{
                  name: "Store Name",
                  width: "101px"
                }, {
                  name: "Today Sales",
                  width: "65px"
                }],
                rows: []
              }
            }
          });

          for (var y = 0; y < res.data[i].peers.length; y++) {
            var lci = rows[lri].columns.length - 1;
            rows[lri].columns[lci].rows.push({
              id: res.data[i].peers[y].id,
              name: res.data[i].peers[y].name,
              sum: "-"
            });
          }

          n = n + 1;

          if (n === 2) {
            n = 0;
          }
        }

        _this2.setState({
          rows: rows
        });
      }, function (res) {
        var rows = _toConsumableArray(_this2.state.rows);

        for (var i = 0; i < res.data.length; i++) {
          var peers = res.data[i].peers;

          var _loop = function _loop(x) {
            var peerId = peers[x].id,
                results = peers[x].results;

            if (results.length > 0) {
              for (var y = 0; y < rows.length; y++) {
                var column = rows[y].columns.find(function (column) {
                  return column.rows.find(function (row) {
                    return row.id === peerId;
                  });
                });

                if (column !== undefined) {
                  //TODO: show animation :)
                  var index = column.rows.findIndex(function (row) {
                    return row.id === peerId;
                  });
                  column.rows[index] = Object.assign({}, column.rows[index]);
                  column.rows[index].sum = results[0].totalamount;
                  break;
                }
              }
            }
          };

          for (var x = 0; x < peers.length; x++) {
            _loop(x);
          }
        }

        _this2.setState({
          rows: rows
        });
      });
      this.updater.start();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.updater.stop();
    }
  }, {
    key: "render",
    value: function render() {
      return _react.default.createElement(_Grid.default, {
        rows: this.state.rows
      });
    }
  }]);

  return App;
}(_react.Component);

var _default = App;
exports.default = _default;

},{"../updater":7,"./Grid":2,"react":undefined}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _Portlet = _interopRequireDefault(require("./Portlet"));

var _Table = _interopRequireDefault(require("./Table"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Row = function Row(props) {
  var columns = props.columns.map(function (column, index) {
    return _react.default.createElement("div", {
      key: index,
      className: "col-" + column.size
    }, _react.default.createElement(_Portlet.default, {
      icon: column.portlet.icon,
      name: column.portlet.name
    }, _react.default.createElement(_Table.default, {
      headers: column.portlet.table.headers,
      rows: column.portlet.table.rows
    })));
  });
  return _react.default.createElement("div", {
    className: "row"
  }, columns);
};

var Grid =
/*#__PURE__*/
function (_Component) {
  _inherits(Grid, _Component);

  function Grid(props) {
    _classCallCheck(this, Grid);

    return _possibleConstructorReturn(this, _getPrototypeOf(Grid).call(this, props));
  }

  _createClass(Grid, [{
    key: "render",
    value: function render() {
      return this.props.rows.map(function (row, index) {
        return _react.default.createElement(Row, {
          key: index,
          columns: row.columns
        });
      });
    }
  }]);

  return Grid;
}(_react.Component);

var _default = Grid;
exports.default = _default;

},{"./Portlet":3,"./Table":4,"react":undefined}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Portlet =
/*#__PURE__*/
function (_Component) {
  _inherits(Portlet, _Component);

  function Portlet(props) {
    var _this;

    _classCallCheck(this, Portlet);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Portlet).call(this, props));
    _this.state = {
      animated: false
    };
    return _this;
  }

  _createClass(Portlet, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          icon = _this$props.icon,
          name = _this$props.name,
          children = _this$props.children;
      var animated = this.state.animated;
      return _react.default.createElement("div", {
        className: "portlet light bordered"
      }, _react.default.createElement("div", {
        className: "portlet-title"
      }, _react.default.createElement("div", {
        className: "caption font-dark"
      }, _react.default.createElement("i", {
        className: icon
      }), _react.default.createElement("span", {
        className: "caption-subject bold uppercase"
      }, name)), _react.default.createElement("div", {
        className: "tools" + (animated ? "visible" : "")
      }, _react.default.createElement("div", {
        style: {
          position: "absolute",
          right: "38px",
          top: "20px"
        }
      }, _react.default.createElement("svg", {
        version: "1.1",
        id: "Layer_1",
        xmlns: "http://www.w3.org/2000/svg",
        x: "0px",
        y: "0px",
        width: "24px",
        height: "30px",
        viewBox: "0 0 24 30",
        style: {
          enableBackground: "new 0 0 50 50"
        }
      }, _react.default.createElement("rect", {
        x: "0",
        y: "0",
        width: "4",
        height: "10",
        fill: "#333",
        transform: "translate(0 19.9464)"
      }, _react.default.createElement("animateTransform", {
        attributeType: "xml",
        attributeName: "transform",
        type: "translate",
        values: "0 0; 0 20; 0 0",
        begin: "0",
        dur: "0.6s",
        repeatCount: "indefinite"
      })), _react.default.createElement("rect", {
        x: "10",
        y: "0",
        width: "4",
        height: "10",
        fill: "#333",
        transform: "translate(0 6.61307)"
      }, _react.default.createElement("animateTransform", {
        attributeType: "xml",
        attributeName: "transform",
        type: "translate",
        values: "0 0; 0 20; 0 0",
        begin: "0.2s",
        dur: "0.6s",
        repeatCount: "indefinite"
      })), _react.default.createElement("rect", {
        x: "20",
        y: "0",
        width: "4",
        height: "10",
        fill: "#333",
        transform: "translate(0 6.72027)"
      }, _react.default.createElement("animateTransform", {
        attributeType: "xml",
        attributeName: "transform",
        type: "translate",
        values: "0 0; 0 20; 0 0",
        begin: "0.4s",
        dur: "0.6s",
        repeatCount: "indefinite"
      })))))), _react.default.createElement("div", {
        className: "portlet-body"
      }, children));
    }
  }]);

  return Portlet;
}(_react.Component);

var _default = Portlet;
exports.default = _default;

},{"react":undefined}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var TableHeader = function TableHeader(props) {
  var headers = props.headers.map(function (header, index) {
    return _react.default.createElement("th", {
      key: index,
      rowSpan: "1",
      colSpan: "1",
      style: {
        width: header.width
      }
    }, header.name);
  });
  return _react.default.createElement("thead", null, _react.default.createElement("tr", null, headers));
};

var TableBody = function TableBody(props) {
  var rows = props.rows.map(function (row, index) {
    return _react.default.createElement("tr", {
      role: "row",
      key: index,
      className: index % 2 ? "odd" : "even"
    }, _react.default.createElement("td", null, row.name), _react.default.createElement("td", {
      style: {
        fontWeight: row.updated ? 'bold' : 'normal'
      }
    }, row.sum));
  });
  return _react.default.createElement("tbody", null, rows);
};

var Table =
/*#__PURE__*/
function (_Component) {
  _inherits(Table, _Component);

  function Table() {
    _classCallCheck(this, Table);

    return _possibleConstructorReturn(this, _getPrototypeOf(Table).apply(this, arguments));
  }

  _createClass(Table, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          headers = _this$props.headers,
          rows = _this$props.rows;
      return _react.default.createElement("div", {
        className: "table-scrollable"
      }, _react.default.createElement("table", {
        className: "table table-striped table-bordered dt-responsive"
      }, _react.default.createElement(TableHeader, {
        headers: headers
      }), _react.default.createElement(TableBody, {
        rows: rows
      })));
    }
  }]);

  return Table;
}(_react.Component);

var _default = Table;
exports.default = _default;

},{"react":undefined}],5:[function(require,module,exports){
"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _App = _interopRequireDefault(require("./components/App"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactDom.default.render(_react.default.createElement(_App.default, null), document.getElementsByTagName('main')[0]);
/*
 rows: [
            {
                columns: [
                    {
                        name: "MyMonolith UK",
                        rid: "asd",
                        size: "md-6",
                        headers: [
                            {name: "Store Name", width: "101px"},
                            {name: "Today Sales", width: "65px"}
                        ],
                        rows: [
                            {id= "1", name: "Mix1", sum: "162,700 €"},
                            {id= "2",name: "Mix2", sum: "1,200,000 €"},
                            {id= "3",name: "Mix3", sum: "162,700 €"},
                            {id= "4",name: "Mix4", sum: "1,200,000 €"}
                        ]
                    }
                ]
            }
 */

/*
window.x = new Component(table, document.getElementsByTagName('main')[0], {
    rows: [
        {
            columns: [
                {
                    name: "MyMonolith UK",
                    size: "md-6",
                    rid: "as1",
                    headers: [
                        {name: "Store Name", width: "101px"},
                        {name: "Today Sales", width: "65px"}
                    ],
                    rows: [
                        {id: "1",name: "Mix1", sum: "162,700 €"},
                        {id: "2",name: "Mix2", sum: "1,200,000 €"},
                        {id: "3",name: "Mix3", sum: "162,700 €"},
                        {id: "4",name: "Mix4", sum: "1,200,000 €"}
                    ]
                },
                {
                    name: "MyMonolith UK",
                    size: "md-6",
                    rid: "as2",
                    headers: [
                        {name: "Store Name", width: "101px"},
                        {name: "Today Sales", width: "65px"}
                    ],
                    rows: [
                        {id: "1",name: "Mix1", sum: "162,700 €"},
                        {id: "2",name: "Mix2", sum: "1,200,000 €"},
                        {id: "3",name: "Mix3", sum: "162,700 €"},
                        {id: "4",name: "Mix4", sum: "1,200,000 €"}
                    ]
                }
            ]
        },
        {
            columns: [
                {
                    name: "MyMonolith UK",
                    size: "md-6",
                    rid: "as3",
                    headers: [
                        {name: "Store Name", width: "101px"},
                        {name: "Today Sales", width: "65px"}
                    ],
                    rows: [
                        {id: "1",name: "Mix1", sum: "162,700 €"},
                        {id: "2",name: "Mix2", sum: "1,200,000 €"},
                        {id: "3",name: "Mix3", sum: "162,700 €"},
                        {id: "4",name: "Mix4", sum: "1,200,000 €"}
                    ]
                },
                {
                    name: "MyMonolith UK",
                    size: "md-6",
                    rid: "as4",
                    headers: [
                        {name: "Store Name", width: "101px"},
                        {name: "Today Sales", width: "65px"}
                    ],
                    rows: [
                        {id: "1",name: "Mix1", sum: "162,700 €"},
                        {id: "2",name: "Mix2", sum: "1,200,000 €"},
                        {id: "3",name: "Mix3", sum: "162,700 €"},
                        {id: "4",name: "Mix4", sum: "1,200,000 €"}
                    ]
                }
            ]
        }
    ]
});*/

},{"./components/App":1,"react":undefined,"react-dom":undefined}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Post = Post;
exports.Get = Get;

function Post() {
  var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  // Default options are marked with *
  return fetch(url, {
    method: "POST",
    // *GET, POST, PUT, DELETE, etc.
    mode: "cors",
    // no-cors, cors, *same-origin
    cache: "no-cache",
    // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin",
    // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json; charset=utf-8" // "Content-Type": "application/x-www-form-urlencoded",

    },
    redirect: "follow",
    // manual, *follow, error
    referrer: "no-referrer",
    // no-referrer, *client
    body: JSON.stringify(data) // body data type must match "Content-Type" header

  }).then(function (response) {
    return response.json();
  }); // parses response to JSON
}

function Get() {
  var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  return fetch(url, {
    mode: "cors",
    // no-cors, cors, *same-origin
    cache: "no-cache",
    // *default, no-cache, reload, force-cache, only-if-cached
    headers: {
      "Content-Type": "application/json; charset=utf-8" // "Content-Type": "application/x-www-form-urlencoded",

    },
    referrer: "no-referrer" // no-referrer, *client

  }).then(function (response) {
    return response.json();
  }); // parses response to JSON
}

},{}],7:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _requester = require("./requester");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Updater =
/*#__PURE__*/
function () {
  function Updater(queryUrl, collectUrl) {
    _classCallCheck(this, Updater);

    this.queryUrl = queryUrl;
    this.collectUrl = collectUrl;
    this.stoped = false;
    this.draw = false;

    this.cOk = function (res) {};

    this.qOk = function (res) {};
  }

  _createClass(Updater, [{
    key: "stop",
    value: function stop() {
      this.stoped = true;
      window.clearTimeout(this.t1);
      window.clearTimeout(this.t2);
    }
  }, {
    key: "start",
    value: function start() {
      var _this = this;

      //Call query endpoint
      (0, _requester.Post)(this.queryUrl).then(function (res) {
        if (_this.stoped) return;

        if (res.data === undefined || res.data.len === 0) {
          _this.t1 = window.setTimeout(function () {
            _this.start();
          }, 5000);
          console.error("Bad data received!", res);
        } else {
          var rid = res.data.map(function (x) {
            return x.rid;
          });

          if (_this.draw === false) {
            _this.qOk(res);

            _this.draw = true;
          }

          _this.t1 = window.setTimeout(function () {
            _this.collect(rid, "sqlsrv");
          }, 5000);
        }
      }).catch(function (error) {
        return console.error(error);
      });
    }
  }, {
    key: "collect",
    value: function collect(rid, p) {
      var _this2 = this;

      (0, _requester.Get)(this.collectUrl + "?rid=" + rid.join(";") + "&p=" + p).then(function (res) {
        if (_this2.stoped) return;

        if (res.data === undefined) {
          _this2.t2 = window.setTimeout(function () {
            _this2.start();
          }, 5000);
          console.error("Bad data received!", res);
        } else {
          _this2.cOk(res);

          _this2.t2 = window.setTimeout(function () {
            _this2.start();
          }, 15000);
        }
      }).catch(function (error) {
        return console.error(error);
      });
    }
  }, {
    key: "setHandlers",
    value: function setHandlers(qOk, cOk) {
      this.qOk = qOk;
      this.cOk = cOk;
    }
  }]);

  return Updater;
}();

exports.default = Updater;

},{"./requester":6}]},{},[5]);
