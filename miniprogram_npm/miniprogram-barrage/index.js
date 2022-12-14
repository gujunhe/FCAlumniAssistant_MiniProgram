module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _barrage = __webpack_require__(1);

var _barrage2 = _interopRequireDefault(_barrage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Component({
  methods: {
    getBarrageInstance: function getBarrageInstance(opt) {
      opt.comp = this;
      this.barrage = new _barrage2.default(opt);
      return this.barrage;
    },
    onAnimationend: function onAnimationend(e) {
      var _e$currentTarget$data = e.currentTarget.dataset,
          tunnelid = _e$currentTarget$data.tunnelid,
          bulletid = _e$currentTarget$data.bulletid;

      this.barrage.animationend({
        tunnelId: tunnelid,
        bulletId: bulletid
      });
    },
    onTapBullet: function onTapBullet(e) {
      var _e$currentTarget$data2 = e.currentTarget.dataset,
          tunnelid = _e$currentTarget$data2.tunnelid,
          bulletid = _e$currentTarget$data2.bulletid;

      this.barrage.tapBullet({
        tunnelId: tunnelid,
        bulletId: bulletid
      });
    }
  }
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _require = __webpack_require__(2),
    substring = _require.substring,
    getRandom = _require.getRandom,
    getFontSize = _require.getFontSize;

var Bullet = function () {
  function Bullet() {
    var opt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Bullet);

    this.bulletId = opt.bulletId;
  }

  /**
   * image ??????
   * {
   *   head: {src, width, height},
   *   tail: {src, width, height},
   *   gap: 4 // ?????????????????????
   * }
   */


  Bullet.prototype.addContent = function addContent() {
    var opt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var defaultBulletOpt = {
      duration: 0, // ????????????
      passtime: 0, // ???????????????????????????
      content: '', // ??????
      color: '#000000', // ????????????
      width: 0, // ????????????
      height: 0, // ????????????
      image: {}, // ??????
      paused: false // ????????????
    };
    Object.assign(this, defaultBulletOpt, opt);
  };

  Bullet.prototype.removeContent = function removeContent() {
    this.addContent({});
  };

  return Bullet;
}();

// tunnel????????????


var Tunnel = function () {
  function Tunnel() {
    var opt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Tunnel);

    var defaultTunnelOpt = {
      tunnelId: 0,
      height: 0, // ????????????
      width: 0, // ????????????
      safeGap: 4, // ????????????????????????
      maxNum: 10, // ??????????????????
      bullets: [], // ??????
      last: -1, // ??????????????????????????????
      bulletStatus: [], // 0 ?????????1 ?????????
      disabled: false, // ?????????
      sending: false // ??????????????????
    };
    Object.assign(this, defaultTunnelOpt, opt);
    this.bulletStatus = new Array(this.maxNum).fill(0);
    for (var i = 0; i < this.maxNum; i++) {
      this.bullets.push(new Bullet({
        bulletId: i
      }));
    }
  }

  Tunnel.prototype.disable = function disable() {
    this.disabled = true;
    this.last = -1;
    this.sending = false;
    this.bulletStatus = new Array(this.maxNum).fill(1);
    this.bullets.forEach(function (bullet) {
      return bullet.removeContent();
    });
  };

  Tunnel.prototype.enable = function enable() {
    if (this.disabled) {
      this.bulletStatus = new Array(this.maxNum).fill(0);
    }
    this.disabled = false;
  };

  Tunnel.prototype.clear = function clear() {
    this.last = -1;
    this.sending = false;
    this.bulletStatus = new Array(this.maxNum).fill(0);
    this.bullets.forEach(function (bullet) {
      return bullet.removeContent();
    });
  };

  Tunnel.prototype.getIdleBulletIdx = function getIdleBulletIdx() {
    return this.bulletStatus.indexOf(0);
  };

  Tunnel.prototype.getIdleBulletNum = function getIdleBulletNum() {
    var count = 0;
    this.bulletStatus.forEach(function (status) {
      if (status === 0) count++;
    });
    return count;
  };

  Tunnel.prototype.addBullet = function addBullet(opt) {
    if (this.disabled) return;
    var idx = this.getIdleBulletIdx();
    if (idx >= 0) {
      this.bulletStatus[idx] = 1;
      this.bullets[idx].addContent(opt);
    }
  };

  Tunnel.prototype.removeBullet = function removeBullet(bulletId) {
    if (this.disabled) return;
    this.bulletStatus[bulletId] = 0;
    var bullet = this.bullets[bulletId];
    bullet.removeContent();
  };

  return Tunnel;
}();

// Barrage(????????????)


var Barrage = function () {
  function Barrage() {
    var _this = this;

    var opt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Barrage);

    this._promise = new Promise(function (resolve) {
      var defaultBarrageOpt = {
        width: 300, // ??????????????????
        height: 150, // ??????????????????
        duration: 10, // ??????????????????
        lineHeight: 1.2, // ????????????
        padding: [0, 0, 0, 0], // ?????????????????????
        alpha: 1, // ???????????????
        font: '10px sans-serif', // ????????????
        mode: 'separate', // ???????????? overlap  ????????? separate
        range: [0, 1], // ????????????????????????????????????????????????[0,1]?????????????????????????????????
        tunnelShow: false, // ???????????????
        tunnelMaxNum: 30, // ????????????????????????
        maxLength: 30, // ?????????????????????????????????????????????
        safeGap: 4, // ????????????????????????
        enableTap: false, // ????????????????????????????????????
        tunnelHeight: 0,
        tunnelNum: 0,
        tunnels: [],
        idleTunnels: null,
        enableTunnels: null,
        distance: 2000,
        comp: null // ????????????
      };
      Object.assign(_this, defaultBarrageOpt, opt);
      var query = _this.comp.createSelectorQuery();
      query.select('.barrage-area').boundingClientRect(function (res) {
        _this.width = res.width;
        _this.height = res.height;
        _this.init();
        resolve();
      }).exec();
    });
  }

  Barrage.prototype.resize = function resize() {
    var _this2 = this;

    return this._promise.then(function () {
      var query = _this2.comp.createSelectorQuery();
      query.select('.barrage-area').boundingClientRect(function (res) {
        _this2.width = res.width;
        _this2.height = res.height;
        var isActive = _this2._isActive;
        _this2.close(function () {
          _this2.init();
          if (isActive) {
            setTimeout(function () {
              _this2.open();
            }, 2000);
          }
        });
      }).exec();
    });
  };

  Barrage.prototype.init = function init() {
    this.fontSize = getFontSize(this.font);
    this.idleTunnels = new Set();
    this.enableTunnels = new Set();
    this.tunnels = [];
    this.availableHeight = this.height - this.padding[0] - this.padding[2];
    this.tunnelHeight = this.fontSize * this.lineHeight;
    this.tunnelNum = Math.floor(this.availableHeight / this.tunnelHeight);
    for (var i = 0; i < this.tunnelNum; i++) {
      this.idleTunnels.add(i); // ???????????????id??????
      this.enableTunnels.add(i); // ???????????????id??????

      this.tunnels.push(new Tunnel({ // ????????????
        width: this.width,
        height: this.tunnelHeight,
        safeGap: this.safeGap,
        maxNum: this.tunnelMaxNum,
        tunnelId: i
      }));
    }
    this.comp.setData({
      tunnelShow: this.tunnelShow,
      tunnels: this.tunnels,
      font: this.font,
      alpha: this.alpha,
      padding: this.padding.map(function (item) {
        return item + 'px';
      }).join(' ')
    });
    // ???????????????????????????
    this.setRange();
  };

  // ?????????????????? range: [0,1]


  Barrage.prototype.setRange = function setRange(range) {
    var _this3 = this;

    return this._promise.then(function () {
      range = range || _this3.range;
      var top = range[0] * _this3.tunnelNum;
      var bottom = range[1] * _this3.tunnelNum;
      // ???????????????????????????
      // ???????????????????????????
      var idleTunnels = new Set();
      var enableTunnels = new Set();
      _this3.tunnels.forEach(function (tunnel, tunnelId) {
        if (tunnelId >= top && tunnelId < bottom) {
          var disabled = tunnel.disabled;
          tunnel.enable();
          enableTunnels.add(tunnelId);

          if (disabled || _this3.idleTunnels.has(tunnelId)) {
            idleTunnels.add(tunnelId);
          }
        } else {
          tunnel.disable();
        }
      });
      _this3.idleTunnels = idleTunnels;
      _this3.enableTunnels = enableTunnels;
      _this3.range = range;
      _this3.comp.setData({ tunnels: _this3.tunnels });
    });
  };

  Barrage.prototype.setFont = function setFont(font) {
    var _this4 = this;

    return this._promise.then(function () {
      if (typeof font !== 'string') return;
      _this4.font = font;
      _this4.comp.setData({ font: font });
    });
  };

  Barrage.prototype.setAlpha = function setAlpha(alpha) {
    var _this5 = this;

    return this._promise.then(function () {
      if (typeof alpha !== 'number') return;
      _this5.alpha = alpha;
      _this5.comp.setData({ alpha: alpha });
    });
  };

  Barrage.prototype.setDuration = function setDuration(duration) {
    var _this6 = this;

    return this._promise.then(function () {
      if (typeof duration !== 'number') return;
      _this6.duration = duration;
      _this6.clear();
    });
  };

  // ????????????


  Barrage.prototype.open = function open() {
    var _this7 = this;

    return this._promise.then(function () {
      _this7._isActive = true;
    });
  };

  // ?????????????????????????????????


  Barrage.prototype.close = function close(cb) {
    var _this8 = this;

    return this._promise.then(function () {
      _this8._isActive = false;
      _this8.clear(cb);
    });
  };

  Barrage.prototype.clear = function clear(cb) {
    this.tunnels.forEach(function (tunnel) {
      return tunnel.clear();
    });
    this.idleTunnels = new Set(this.enableTunnels);
    this.comp.setData({ tunnels: this.tunnels }, function () {
      if (typeof cb === 'function') {
        cb();
      }
    });
  };

  // ?????????????????????????????????????????????


  Barrage.prototype.addData = function addData() {
    var _this9 = this;

    var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

    return this._promise.then(function () {
      if (!_this9._isActive) return;
      data.forEach(function (item) {
        item.content = substring(item.content, _this9.maxLength);
        _this9.addBullet2Tunnel(item);
      });
      _this9.comp.setData({
        tunnels: _this9.tunnels
      }, function () {
        _this9.updateBullets();
      });
    });
  };

  // ??????????????????


  Barrage.prototype.send = function send() {
    var _this10 = this;

    var opt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    return this._promise.then(function () {
      if (_this10.enableTunnels.size === 0) return;
      var timer = setInterval(function () {
        var tunnel = _this10.getIdleTunnel();
        if (tunnel) {
          _this10.addData([opt]);
          clearInterval(timer);
        }
      }, 16);
    });
  };

  // ???????????????


  Barrage.prototype.addBullet2Tunnel = function addBullet2Tunnel() {
    var opt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var tunnel = this.getIdleTunnel();
    if (tunnel === null) return;

    var tunnelId = tunnel.tunnelId;
    tunnel.addBullet(opt);
    if (tunnel.getIdleBulletNum() === 0) this.removeIdleTunnel(tunnelId);
  };

  Barrage.prototype.updateBullets = function updateBullets() {
    var self = this;
    var query = this.comp.createSelectorQuery();
    query.selectAll('.bullet-item').boundingClientRect(function (res) {
      for (var i = 0; i < res.length; i++) {
        var _res$i$dataset = res[i].dataset,
            tunnelid = _res$i$dataset.tunnelid,
            bulletid = _res$i$dataset.bulletid;

        var tunnel = self.tunnels[tunnelid];
        var bullet = tunnel.bullets[bulletid];
        bullet.width = res[i].width;
        bullet.height = res[i].height;
      }
      self.animate();
    }).exec();
  };

  Barrage.prototype.animate = function animate() {
    var _this11 = this;

    this.tunnels.forEach(function (tunnel) {
      _this11.tunnelAnimate(tunnel);
    });
  };

  Barrage.prototype.tunnelAnimate = function tunnelAnimate(tunnel) {
    var _this12 = this;

    if (tunnel.disabled || tunnel.sending) return;

    var next = (tunnel.last + 1) % tunnel.maxNum;
    var bullet = tunnel.bullets[next];

    if (!bullet) return;

    if (bullet.content || bullet.image) {
      var _comp$setData;

      tunnel.sending = true;
      tunnel.last = next;
      var duration = this.distance * this.duration / (this.distance + bullet.width);
      var passDistance = bullet.width + tunnel.safeGap;
      bullet.duration = this.mode === 'overlap' ? duration : this.duration;
      // ???????????????????????????
      bullet.passtime = Math.ceil(passDistance * bullet.duration * 1000 / this.distance);

      this.comp.setData((_comp$setData = {}, _comp$setData['tunnels[' + tunnel.tunnelId + '].bullets[' + bullet.bulletId + ']'] = bullet, _comp$setData), function () {
        setTimeout(function () {
          tunnel.sending = false;
          _this12.tunnelAnimate(tunnel);
        }, bullet.passtime);
      });
    }
  };

  Barrage.prototype.showTunnel = function showTunnel() {
    this.comp.setData({
      tunnelShow: true
    });
  };

  Barrage.prototype.hideTunnel = function hideTunnel() {
    this.comp.setData({
      tunnelShow: false
    });
  };

  Barrage.prototype.removeIdleTunnel = function removeIdleTunnel(tunnelId) {
    this.idleTunnels.delete(tunnelId);
  };

  Barrage.prototype.addIdleTunnel = function addIdleTunnel(tunnelId) {
    this.idleTunnels.add(tunnelId);
  };

  // ???????????????????????????????????????


  Barrage.prototype.getEnableTunnel = function getEnableTunnel() {
    if (this.enableTunnels.size === 0) return null;
    var enableTunnels = Array.from(this.enableTunnels);
    var index = getRandom(enableTunnels.length);
    return this.tunnels[enableTunnels[index]];
  };

  // ?????????????????????????????????????????????


  Barrage.prototype.getIdleTunnel = function getIdleTunnel() {
    if (this.idleTunnels.size === 0) return null;
    var idleTunnels = Array.from(this.idleTunnels);
    var index = getRandom(idleTunnels.length);
    return this.tunnels[idleTunnels[index]];
  };

  Barrage.prototype.animationend = function animationend(opt) {
    var _comp$setData2;

    var tunnelId = opt.tunnelId,
        bulletId = opt.bulletId;

    var tunnel = this.tunnels[tunnelId];
    var bullet = tunnel.bullets[bulletId];

    if (!tunnel || !bullet) return;

    tunnel.removeBullet(bulletId);
    this.addIdleTunnel(tunnelId);
    this.comp.setData((_comp$setData2 = {}, _comp$setData2['tunnels[' + tunnelId + '].bullets[' + bulletId + ']'] = bullet, _comp$setData2));
  };

  Barrage.prototype.tapBullet = function tapBullet(opt) {
    var _comp$setData3;

    if (!this.enableTap) return;

    var tunnelId = opt.tunnelId,
        bulletId = opt.bulletId;

    var tunnel = this.tunnels[tunnelId];
    var bullet = tunnel.bullets[bulletId];
    bullet.paused = !bullet.paused;
    this.comp.setData((_comp$setData3 = {}, _comp$setData3['tunnels[' + tunnelId + '].bullets[' + bulletId + ']'] = bullet, _comp$setData3));
  };

  return Barrage;
}();

exports.default = Barrage;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// ??????????????????????????????2?????????
function getStrLen(str) {
  // eslint-disable-next-line no-control-regex
  return str.replace(/[^\x00-\xff]/g, 'aa').length;
}

// ?????????????????????????????????
function substring(str, n) {
  if (!str) return '';

  var len = getStrLen(str);
  if (n >= len) return str;

  var l = 0;
  var result = '';
  for (var i = 0; i < str.length; i++) {
    var ch = str.charAt(i);
    // eslint-disable-next-line no-control-regex
    l = /[^\x00-\xff]/i.test(ch) ? l + 2 : l + 1;
    result += ch;
    if (l >= n) break;
  }
  return result;
}

function getRandom() {
  var max = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;
  var min = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

  return Math.floor(Math.random() * (max - min) + min);
}

function getFontSize(font) {
  var reg = /(\d+)(px)/i;
  var match = font.match(reg);
  return match && match[1] || 10;
}

module.exports = {
  getStrLen: getStrLen,
  substring: substring,
  getRandom: getRandom,
  getFontSize: getFontSize
};

/***/ })
/******/ ]);