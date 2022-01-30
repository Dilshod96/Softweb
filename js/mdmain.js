(function ($) {
    $(window).on('load', function () {
        function removePreloader() {
            var preLoader = $('.preLoader');
            preLoader.fadeOut();
        }
        setTimeout(removePreloader, 250);
    });
    $(window).on('load', function () {
        var $animateEl = $('[data-animate]');
        $animateEl.each(function () {
            var $el = $(this),
                $name = $el.data('animate'),
                $duration = $el.data('duration'),
                $delay = $el.data('delay');
            $duration = typeof $duration === 'undefined' ? '0.6' : $duration;
            $delay = typeof $delay === 'undefined' ? '0' : $delay;
            $el.waypoint(function () {
                $el.addClass('animated ' + $name).css({
                    'animation-duration': $duration + 's',
                    'animation-delay': $delay + 's'
                });
            }, {
                offset: '93%'
            });
        });
    });
})(jQuery);
// load page

// contact call
jQuery(".contact-info div strong").text(function() {
  jQuery(this).replaceWith(
    '<a href="tel:+' + $(this).text().replace(/-/g, '').replace(/ /g, '').replace(/\./g, '').replace(/x/g, ',') + '">' + jQuery(this).text() + "</a>"
  );
});
// contact call

// scroll id
$(function() {
  $('.scroll').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 300);
        return false;
      }
    }
  });
});
// scroll id

// navbar scroll
(jQuery);
    "use strict";
    (function ($) {
      var SCROLLING_NAVBAR_OFFSET_TOP = 50;
      $(window).on('scroll', function () {
        var $navbar = $('.navbar');

        if ($navbar.length) {
          if ($navbar.offset().top > SCROLLING_NAVBAR_OFFSET_TOP) {
            $('.scrolling-navbar').addClass('top-nav-collapse');
          } else {
            $('.scrolling-navbar').removeClass('top-nav-collapse');
          }
        }
      });
    })(jQuery);
// navbar scroll

// wow anim
(function() {
  var MutationObserver, Util, WeakMap, getComputedStyle, getComputedStyleRX,
    bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

  Util = (function() {
    function Util() {}

    Util.prototype.extend = function(custom, defaults) {
      var key, value;
      for (key in defaults) {
        value = defaults[key];
        if (custom[key] == null) {
          custom[key] = value;
        }
      }
      return custom;
    };

    Util.prototype.isMobile = function(agent) {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(agent);
    };

    Util.prototype.createEvent = function(event, bubble, cancel, detail) {
      var customEvent;
      if (bubble == null) {
        bubble = false;
      }
      if (cancel == null) {
        cancel = false;
      }
      if (detail == null) {
        detail = null;
      }
      if (document.createEvent != null) {
        customEvent = document.createEvent('CustomEvent');
        customEvent.initCustomEvent(event, bubble, cancel, detail);
      } else if (document.createEventObject != null) {
        customEvent = document.createEventObject();
        customEvent.eventType = event;
      } else {
        customEvent.eventName = event;
      }
      return customEvent;
    };

    Util.prototype.emitEvent = function(elem, event) {
      if (elem.dispatchEvent != null) {
        return elem.dispatchEvent(event);
      } else if (event in (elem != null)) {
        return elem[event]();
      } else if (("on" + event) in (elem != null)) {
        return elem["on" + event]();
      }
    };

    Util.prototype.addEvent = function(elem, event, fn) {
      if (elem.addEventListener != null) {
        return elem.addEventListener(event, fn, false);
      } else if (elem.attachEvent != null) {
        return elem.attachEvent("on" + event, fn);
      } else {
        return elem[event] = fn;
      }
    };

    Util.prototype.removeEvent = function(elem, event, fn) {
      if (elem.removeEventListener != null) {
        return elem.removeEventListener(event, fn, false);
      } else if (elem.detachEvent != null) {
        return elem.detachEvent("on" + event, fn);
      } else {
        return delete elem[event];
      }
    };

    Util.prototype.innerHeight = function() {
      if ('innerHeight' in window) {
        return window.innerHeight;
      } else {
        return document.documentElement.clientHeight;
      }
    };

    return Util;

  })();

  WeakMap = this.WeakMap || this.MozWeakMap || (WeakMap = (function() {
    function WeakMap() {
      this.keys = [];
      this.values = [];
    }

    WeakMap.prototype.get = function(key) {
      var i, item, j, len, ref;
      ref = this.keys;
      for (i = j = 0, len = ref.length; j < len; i = ++j) {
        item = ref[i];
        if (item === key) {
          return this.values[i];
        }
      }
    };

    WeakMap.prototype.set = function(key, value) {
      var i, item, j, len, ref;
      ref = this.keys;
      for (i = j = 0, len = ref.length; j < len; i = ++j) {
        item = ref[i];
        if (item === key) {
          this.values[i] = value;
          return;
        }
      }
      this.keys.push(key);
      return this.values.push(value);
    };

    return WeakMap;

  })());

  MutationObserver = this.MutationObserver || this.WebkitMutationObserver || this.MozMutationObserver || (MutationObserver = (function() {
    function MutationObserver() {
      if (typeof console !== "undefined" && console !== null) {
        console.warn('MutationObserver is not supported by your browser.');
      }
      if (typeof console !== "undefined" && console !== null) {
        console.warn('WOW.js cannot detect dom mutations, please call .sync() after loading new content.');
      }
    }

    MutationObserver.notSupported = true;

    MutationObserver.prototype.observe = function() {};

    return MutationObserver;

  })());

  getComputedStyle = this.getComputedStyle || function(el, pseudo) {
    this.getPropertyValue = function(prop) {
      var ref;
      if (prop === 'float') {
        prop = 'styleFloat';
      }
      if (getComputedStyleRX.test(prop)) {
        prop.replace(getComputedStyleRX, function(_, _char) {
          return _char.toUpperCase();
        });
      }
      return ((ref = el.currentStyle) != null ? ref[prop] : void 0) || null;
    };
    return this;
  };

  getComputedStyleRX = /(\-([a-z]){1})/g;

  this.WOW = (function() {
    WOW.prototype.defaults = {
      boxClass: 'wow',
      animateClass: 'animated',
      offset: 0,
      mobile: true,
      live: true,
      callback: null,
      scrollContainer: null
    };

    function WOW(options) {
      if (options == null) {
        options = {};
      }
      this.scrollCallback = bind(this.scrollCallback, this);
      this.scrollHandler = bind(this.scrollHandler, this);
      this.resetAnimation = bind(this.resetAnimation, this);
      this.start = bind(this.start, this);
      this.scrolled = true;
      this.config = this.util().extend(options, this.defaults);
      if (options.scrollContainer != null) {
        this.config.scrollContainer = document.querySelector(options.scrollContainer);
      }
      this.animationNameCache = new WeakMap();
      this.wowEvent = this.util().createEvent(this.config.boxClass);
    }

    WOW.prototype.init = function() {
      var ref;
      this.element = window.document.documentElement;
      if ((ref = document.readyState) === "interactive" || ref === "complete") {
        this.start();
      } else {
        this.util().addEvent(document, 'DOMContentLoaded', this.start);
      }
      return this.finished = [];
    };

    WOW.prototype.start = function() {
      var box, j, len, ref;
      this.stopped = false;
      this.boxes = (function() {
        var j, len, ref, results;
        ref = this.element.querySelectorAll("." + this.config.boxClass);
        results = [];
        for (j = 0, len = ref.length; j < len; j++) {
          box = ref[j];
          results.push(box);
        }
        return results;
      }).call(this);
      this.all = (function() {
        var j, len, ref, results;
        ref = this.boxes;
        results = [];
        for (j = 0, len = ref.length; j < len; j++) {
          box = ref[j];
          results.push(box);
        }
        return results;
      }).call(this);
      if (this.boxes.length) {
        if (this.disabled()) {
          this.resetStyle();
        } else {
          ref = this.boxes;
          for (j = 0, len = ref.length; j < len; j++) {
            box = ref[j];
            this.applyStyle(box, true);
          }
        }
      }
      if (!this.disabled()) {
        this.util().addEvent(this.config.scrollContainer || window, 'scroll', this.scrollHandler);
        this.util().addEvent(window, 'resize', this.scrollHandler);
        this.interval = setInterval(this.scrollCallback, 50);
      }
      if (this.config.live) {
        return new MutationObserver((function(_this) {
          return function(records) {
            var k, len1, node, record, results;
            results = [];
            for (k = 0, len1 = records.length; k < len1; k++) {
              record = records[k];
              results.push((function() {
                var l, len2, ref1, results1;
                ref1 = record.addedNodes || [];
                results1 = [];
                for (l = 0, len2 = ref1.length; l < len2; l++) {
                  node = ref1[l];
                  results1.push(this.doSync(node));
                }
                return results1;
              }).call(_this));
            }
            return results;
          };
        })(this)).observe(document.body, {
          childList: true,
          subtree: true
        });
      }
    };

    WOW.prototype.stop = function() {
      this.stopped = true;
      this.util().removeEvent(this.config.scrollContainer || window, 'scroll', this.scrollHandler);
      this.util().removeEvent(window, 'resize', this.scrollHandler);
      if (this.interval != null) {
        return clearInterval(this.interval);
      }
    };

    WOW.prototype.sync = function(element) {
      if (MutationObserver.notSupported) {
        return this.doSync(this.element);
      }
    };

    WOW.prototype.doSync = function(element) {
      var box, j, len, ref, results;
      if (element == null) {
        element = this.element;
      }
      if (element.nodeType !== 1) {
        return;
      }
      element = element.parentNode || element;
      ref = element.querySelectorAll("." + this.config.boxClass);
      results = [];
      for (j = 0, len = ref.length; j < len; j++) {
        box = ref[j];
        if (indexOf.call(this.all, box) < 0) {
          this.boxes.push(box);
          this.all.push(box);
          if (this.stopped || this.disabled()) {
            this.resetStyle();
          } else {
            this.applyStyle(box, true);
          }
          results.push(this.scrolled = true);
        } else {
          results.push(void 0);
        }
      }
      return results;
    };

    WOW.prototype.show = function(box) {
      this.applyStyle(box);
      box.className = box.className + " " + this.config.animateClass;
      if (this.config.callback != null) {
        this.config.callback(box);
      }
      this.util().emitEvent(box, this.wowEvent);
      this.util().addEvent(box, 'animationend', this.resetAnimation);
      this.util().addEvent(box, 'oanimationend', this.resetAnimation);
      this.util().addEvent(box, 'webkitAnimationEnd', this.resetAnimation);
      this.util().addEvent(box, 'MSAnimationEnd', this.resetAnimation);
      return box;
    };

    WOW.prototype.applyStyle = function(box, hidden) {
      var delay, duration, iteration;
      duration = box.getAttribute('data-wow-duration');
      delay = box.getAttribute('data-wow-delay');
      iteration = box.getAttribute('data-wow-iteration');
      return this.animate((function(_this) {
        return function() {
          return _this.customStyle(box, hidden, duration, delay, iteration);
        };
      })(this));
    };

    WOW.prototype.animate = (function() {
      if ('requestAnimationFrame' in window) {
        return function(callback) {
          return window.requestAnimationFrame(callback);
        };
      } else {
        return function(callback) {
          return callback();
        };
      }
    })();

    WOW.prototype.resetStyle = function() {
      var box, j, len, ref, results;
      ref = this.boxes;
      results = [];
      for (j = 0, len = ref.length; j < len; j++) {
        box = ref[j];
        results.push(box.style.visibility = 'visible');
      }
      return results;
    };

    WOW.prototype.resetAnimation = function(event) {
      var target;
      if (event.type.toLowerCase().indexOf('animationend') >= 0) {
        target = event.target || event.srcElement;
        return target.className = target.className.replace(this.config.animateClass, '').trim();
      }
    };

    WOW.prototype.customStyle = function(box, hidden, duration, delay, iteration) {
      if (hidden) {
        this.cacheAnimationName(box);
      }
      box.style.visibility = hidden ? 'hidden' : 'visible';
      if (duration) {
        this.vendorSet(box.style, {
          animationDuration: duration
        });
      }
      if (delay) {
        this.vendorSet(box.style, {
          animationDelay: delay
        });
      }
      if (iteration) {
        this.vendorSet(box.style, {
          animationIterationCount: iteration
        });
      }
      this.vendorSet(box.style, {
        animationName: hidden ? 'none' : this.cachedAnimationName(box)
      });
      return box;
    };

    WOW.prototype.vendors = ["moz", "webkit"];

    WOW.prototype.vendorSet = function(elem, properties) {
      var name, results, value, vendor;
      results = [];
      for (name in properties) {
        value = properties[name];
        elem["" + name] = value;
        results.push((function() {
          var j, len, ref, results1;
          ref = this.vendors;
          results1 = [];
          for (j = 0, len = ref.length; j < len; j++) {
            vendor = ref[j];
            results1.push(elem["" + vendor + (name.charAt(0).toUpperCase()) + (name.substr(1))] = value);
          }
          return results1;
        }).call(this));
      }
      return results;
    };

    WOW.prototype.vendorCSS = function(elem, property) {
      var j, len, ref, result, style, vendor;
      style = getComputedStyle(elem);
      result = style.getPropertyCSSValue(property);
      ref = this.vendors;
      for (j = 0, len = ref.length; j < len; j++) {
        vendor = ref[j];
        result = result || style.getPropertyCSSValue("-" + vendor + "-" + property);
      }
      return result;
    };

    WOW.prototype.animationName = function(box) {
      var animationName, error;
      try {
        animationName = this.vendorCSS(box, 'animation-name').cssText;
      } catch (error) {
        animationName = getComputedStyle(box).getPropertyValue('animation-name');
      }
      if (animationName === 'none') {
        return '';
      } else {
        return animationName;
      }
    };

    WOW.prototype.cacheAnimationName = function(box) {
      return this.animationNameCache.set(box, this.animationName(box));
    };

    WOW.prototype.cachedAnimationName = function(box) {
      return this.animationNameCache.get(box);
    };

    WOW.prototype.scrollHandler = function() {
      return this.scrolled = true;
    };

    WOW.prototype.scrollCallback = function() {
      var box;
      if (this.scrolled) {
        this.scrolled = false;
        this.boxes = (function() {
          var j, len, ref, results;
          ref = this.boxes;
          results = [];
          for (j = 0, len = ref.length; j < len; j++) {
            box = ref[j];
            if (!(box)) {
              continue;
            }
            if (this.isVisible(box)) {
              this.show(box);
              continue;
            }
            results.push(box);
          }
          return results;
        }).call(this);
        if (!(this.boxes.length || this.config.live)) {
          return this.stop();
        }
      }
    };

    WOW.prototype.offsetTop = function(element) {
      var top;
      while (element.offsetTop === void 0) {
        element = element.parentNode;
      }
      top = element.offsetTop;
      while (element = element.offsetParent) {
        top += element.offsetTop;
      }
      return top;
    };

    WOW.prototype.isVisible = function(box) {
      var bottom, offset, top, viewBottom, viewTop;
      offset = box.getAttribute('data-wow-offset') || this.config.offset;
      viewTop = (this.config.scrollContainer && this.config.scrollContainer.scrollTop) || window.pageYOffset;
      viewBottom = viewTop + Math.min(this.element.clientHeight, this.util().innerHeight()) - offset;
      top = this.offsetTop(box);
      bottom = top + box.clientHeight;
      return top <= viewBottom && bottom >= viewTop;
    };

    WOW.prototype.util = function() {
      return this._util != null ? this._util : this._util = new Util();
    };

    WOW.prototype.disabled = function() {
      return !this.config.mobile && this.util().isMobile(navigator.userAgent);
    };

    return WOW;

  })();

}).call(this);

new WOW().init();
// wow anim

! function(t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define(e) : "object" == typeof exports ? module.exports = e() : t.baguetteBox = e()
}(this, function() {
    "use strict";

    function t(t, n) {
        M.transforms = k(), M.svg = w(), i(), o(t), e(t, n)
    }

    function e(t, e) {
        var n = document.querySelectorAll(t),
            o = {
                galleries: [],
                nodeList: n
            };
        U[t] = o, [].forEach.call(n, function(t) {
            e && e.filter && (V = e.filter);
            var n = [];
            if (n = "A" === t.tagName ? [t] : t.getElementsByTagName("a"), n = [].filter.call(n, function(t) {
                    return V.test(t.href)
                }), 0 !== n.length) {
                var i = [];
                [].forEach.call(n, function(t, n) {
                    var o = function(t) {
                            t.preventDefault ? t.preventDefault() : t.returnValue = !1, u(i, e), c(n)
                        },
                        a = {
                            eventHandler: o,
                            imageElement: t
                        };
                    E(t, "click", o), i.push(a)
                }), o.galleries.push(i)
            }
        })
    }

    function n() {
        for (var t in U) U.hasOwnProperty(t) && o(t)
    }

    function o(t) {
        if (U.hasOwnProperty(t)) {
            var e = U[t].galleries;
            [].forEach.call(e, function(t) {
                [].forEach.call(t, function(t) {
                    B(t.imageElement, "click", t.eventHandler)
                }), R === t && (R = [])
            }), delete U[t]
        }
    }

    function i() {
        return (S = T("baguetteBox-overlay")) ? (P = T("baguetteBox-slider"), F = T("previous-button"), H = T("next-button"), void(L = T("close-button"))) : (S = N("div"), S.setAttribute("role", "dialog"), S.id = "baguetteBox-overlay", document.getElementsByTagName("body")[0].appendChild(S), P = N("div"), P.id = "baguetteBox-slider", S.appendChild(P), F = N("button"), F.setAttribute("type", "button"), F.id = "previous-button", F.setAttribute("aria-label", "Previous"), F.innerHTML = M.svg ? I : "&lt;", S.appendChild(F), H = N("button"), H.setAttribute("type", "button"), H.id = "next-button", H.setAttribute("aria-label", "Next"), H.innerHTML = M.svg ? Y : "&gt;", S.appendChild(H), L = N("button"), L.setAttribute("type", "button"), L.id = "close-button", L.setAttribute("aria-label", "Close"), L.innerHTML = M.svg ? q : "&times;", S.appendChild(L), F.className = H.className = L.className = "baguetteBox-button", void r())
    }

    function a(t) {
        switch (t.keyCode) {
            case 37:
                v();
                break;
            case 39:
                h();
                break;
            case 27:
                p()
        }
    }

    function r() {
        E(S, "click", J), E(F, "click", K), E(H, "click", Q), E(L, "click", Z), E(S, "touchstart", $), E(S, "touchmove", _), E(S, "touchend", tt), E(document, "focus", et, !0)
    }

    function l() {
        B(S, "click", J), B(F, "click", K), B(H, "click", Q), B(L, "click", Z), B(S, "touchstart", $), B(S, "touchmove", _), B(S, "touchend", tt), B(document, "focus", et, !0)
    }

    function u(t, e) {
        if (R !== t) {
            for (R = t, s(e); P.firstChild;) P.removeChild(P.firstChild);
            W.length = 0;
            for (var n, o = [], i = [], a = 0; a < t.length; a++) n = N("div"), n.className = "full-image", n.id = "baguette-img-" + a, W.push(n), o.push("baguetteBox-figure-" + a), i.push("baguetteBox-figcaption-" + a), P.appendChild(W[a]);
            S.setAttribute("aria-labelledby", o.join(" ")), S.setAttribute("aria-describedby", i.join(" "))
        }
    }

    function s(t) {
        t || (t = {});
        for (var e in X) j[e] = X[e], "undefined" != typeof t[e] && (j[e] = t[e]);
        P.style.transition = P.style.webkitTransition = "fadeIn" === j.animation ? "opacity .4s ease" : "slideIn" === j.animation ? "" : "none", "auto" === j.buttons && ("ontouchstart" in window || 1 === R.length) && (j.buttons = !1), F.style.display = H.style.display = j.buttons ? "" : "none";
        try {
            S.style.backgroundColor = j.overlayBackgroundColor
        } catch (t) {}
    }

    function c(t) {
        j.noScrollbars && (document.documentElement.style.overflowY = "hidden", document.body.style.overflowY = "scroll"), "block" !== S.style.display && (E(document, "keydown", a), z = t, D = {
            count: 0,
            startX: null,
            startY: null
        }, m(z, function() {
            x(z), C(z)
        }), y(), S.style.display = "block", j.fullScreen && f(), setTimeout(function() {
            S.className = "visible", j.afterShow && j.afterShow()
        }, 50), j.onChange && j.onChange(z, W.length), G = document.activeElement, d())
    }

    function d() {
        j.buttons ? F.focus() : L.focus()
    }

    function f() {
        S.requestFullscreen ? S.requestFullscreen() : S.webkitRequestFullscreen ? S.webkitRequestFullscreen() : S.mozRequestFullScreen && S.mozRequestFullScreen()
    }

    function g() {
        document.exitFullscreen ? document.exitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitExitFullscreen && document.webkitExitFullscreen()
    }

    function p() {
        j.noScrollbars && (document.documentElement.style.overflowY = "auto", document.body.style.overflowY = "auto"), "none" !== S.style.display && (B(document, "keydown", a), S.className = "", setTimeout(function() {
            S.style.display = "none", g(), j.afterHide && j.afterHide()
        }, 500), G.focus())
    }

    function m(t, e) {
        var n = W[t];
        if ("undefined" != typeof n) {
            if (n.getElementsByTagName("img")[0]) return void(e && e());
            var o = R[t].imageElement,
                i = o.getElementsByTagName("img")[0],
                a = "function" == typeof j.captions ? j.captions.call(R, o) : o.getAttribute("data-caption") || o.title,
                r = b(o),
                l = N("figure");
            if (l.id = "baguetteBox-figure-" + t, l.innerHTML = '<div class="baguetteBox-spinner"><div class="baguetteBox-double-bounce1"></div><div class="baguetteBox-double-bounce2"></div></div>', j.captions && a) {
                var u = N("figcaption");
                u.id = "baguetteBox-figcaption-" + t, u.innerHTML = a, l.appendChild(u)
            }
            n.appendChild(l);
            var s = N("img");
            s.onload = function() {
                var n = document.querySelector("#baguette-img-" + t + " .baguetteBox-spinner");
                l.removeChild(n), !j.async && e && e()
            }, s.setAttribute("src", r), s.alt = i ? i.alt || "" : "", j.titleTag && a && (s.title = a), l.appendChild(s), j.async && e && e()
        }
    }

    function b(t) {
        var e = t.href;
        if (t.dataset) {
            var n = [];
            for (var o in t.dataset) "at-" !== o.substring(0, 3) || isNaN(o.substring(3)) || (n[o.replace("at-", "")] = t.dataset[o]);
            for (var i = Object.keys(n).sort(function(t, e) {
                    return parseInt(t, 10) < parseInt(e, 10) ? -1 : 1
                }), a = window.innerWidth * window.devicePixelRatio, r = 0; r < i.length - 1 && i[r] < a;) r++;
            e = n[i[r]] || e
        }
        return e
    }

    function h() {
        var t;
        return z <= W.length - 2 ? (z++, y(), x(z), t = !0) : j.animation && (P.className = "bounce-from-right", setTimeout(function() {
            P.className = ""
        }, 400), t = !1), j.onChange && j.onChange(z, W.length), t
    }

    function v() {
        var t;
        return z >= 1 ? (z--, y(), C(z), t = !0) : j.animation && (P.className = "bounce-from-left", setTimeout(function() {
            P.className = ""
        }, 400), t = !1), j.onChange && j.onChange(z, W.length), t
    }

    function y() {
        var t = 100 * -z + "%";
        "fadeIn" === j.animation ? (P.style.opacity = 0, setTimeout(function() {
            M.transforms ? P.style.transform = P.style.webkitTransform = "translate3d(" + t + ",0,0)" : P.style.left = t, P.style.opacity = 1
        }, 400)) : M.transforms ? P.style.transform = P.style.webkitTransform = "translate3d(" + t + ",0,0)" : P.style.left = t
    }

    function k() {
        var t = N("div");
        return "undefined" != typeof t.style.perspective || "undefined" != typeof t.style.webkitPerspective
    }

    function w() {
        var t = N("div");
        return t.innerHTML = "<svg/>", "http://www.w3.org/2000/svg" === (t.firstChild && t.firstChild.namespaceURI)
    }

    function x(t) {
        t - z >= j.preload || m(t + 1, function() {
            x(t + 1)
        })
    }

    function C(t) {
        z - t >= j.preload || m(t - 1, function() {
            C(t - 1)
        })
    }

    function E(t, e, n, o) {
        t.addEventListener ? t.addEventListener(e, n, o) : t.attachEvent("on" + e, n)
    }

    function B(t, e, n, o) {
        t.removeEventListener ? t.removeEventListener(e, n, o) : t.detachEvent("on" + e, n)
    }

    function T(t) {
        return document.getElementById(t)
    }

    function N(t) {
        return document.createElement(t)
    }

    function A() {
        l(), n(), B(document, "keydown", a), document.getElementsByTagName("body")[0].removeChild(document.getElementById("baguetteBox-overlay")), U = {}, R = [], z = 0
    }
    var S, P, F, H, L, I = '<svg width="44" height="60"><polyline points="30 10 10 30 30 50" stroke="rgba(255,255,255,0.5)" stroke-width="4"stroke-linecap="butt" fill="none" stroke-linejoin="round"/></svg>',
        Y = '<svg width="44" height="60"><polyline points="14 10 34 30 14 50" stroke="rgba(255,255,255,0.5)" stroke-width="4"stroke-linecap="butt" fill="none" stroke-linejoin="round"/></svg>',
        q = '<svg width="30" height="30"><g stroke="rgb(160,160,160)" stroke-width="4"><line x1="5" y1="5" x2="25" y2="25"/><line x1="5" y1="25" x2="25" y2="5"/></g></svg>',
        j = {},
        X = {
            captions: !0,
            fullScreen: !1,
            noScrollbars: !1,
            titleTag: !1,
            buttons: "auto",
            async: !1,
            preload: 2,
            animation: "slideIn",
            afterShow: null,
            afterHide: null,
            onChange: null,
            overlayBackgroundColor: "rgba(0,0,0,.8)"
        },
        M = {},
        R = [],
        z = 0,
        D = {},
        O = !1,
        V = /.+\.(gif|jpe?g|png|webp)/i,
        U = {},
        W = [],
        G = null,
        J = function(t) {
            t.target.id.indexOf("baguette-img") !== -1 && p()
        },
        K = function(t) {
            t.stopPropagation ? t.stopPropagation() : t.cancelBubble = !0, v()
        },
        Q = function(t) {
            t.stopPropagation ? t.stopPropagation() : t.cancelBubble = !0, h()
        },
        Z = function(t) {
            t.stopPropagation ? t.stopPropagation() : t.cancelBubble = !0, p()
        },
        $ = function(t) {
            D.count++, D.count > 1 && (D.multitouch = !0), D.startX = t.changedTouches[0].pageX, D.startY = t.changedTouches[0].pageY
        },
        _ = function(t) {
            if (!O && !D.multitouch) {
                t.preventDefault ? t.preventDefault() : t.returnValue = !1;
                var e = t.touches[0] || t.changedTouches[0];
                e.pageX - D.startX > 40 ? (O = !0, v()) : e.pageX - D.startX < -40 ? (O = !0, h()) : D.startY - e.pageY > 100 && p()
            }
        },
        tt = function() {
            D.count--, D.count <= 0 && (D.multitouch = !1), O = !1
        },
        et = function(t) {
            "block" !== S.style.display || S.contains(t.target) || (t.stopPropagation(), d())
        };
    return [].forEach || (Array.prototype.forEach = function(t, e) {
        for (var n = 0; n < this.length; n++) t.call(e, this[n], n, this)
    }), [].filter || (Array.prototype.filter = function(t, e, n, o, i) {
        for (n = this, o = [], i = 0; i < n.length; i++) t.call(e, n[i], i, n) && o.push(n[i]);
        return o
    }), {
        run: t,
        destroy: A,
        showNext: h,
        showPrevious: v
    }
});
baguetteBox.run('.tz-gallery');
// gallery