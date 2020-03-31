'use strict';

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var script = {
    name: 'TButton',
    props: {
        type: {
            type: String,
            default: 'default'
        },
        size: {
            type: String,
            default: 'medium'
        },
        icon: {
            type: String,
            default: ''
        },
        round: {
            type: Boolean,
            default: false
        },
        plain: {
            type: Boolean,
            default: false
        },
        disabled: {
            type: Boolean,
            default: false
        },
        circle: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        handleClick(e) {
            this.$emit('click', e);
        }
    }
};

function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier
/* server only */
, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  if (typeof shadowMode !== 'boolean') {
    createInjectorSSR = createInjector;
    createInjector = shadowMode;
    shadowMode = false;
  } // Vue.extend constructor export interop.


  var options = typeof script === 'function' ? script.options : script; // render functions

  if (template && template.render) {
    options.render = template.render;
    options.staticRenderFns = template.staticRenderFns;
    options._compiled = true; // functional template

    if (isFunctionalTemplate) {
      options.functional = true;
    }
  } // scopedId


  if (scopeId) {
    options._scopeId = scopeId;
  }

  var hook;

  if (moduleIdentifier) {
    // server build
    hook = function hook(context) {
      // 2.3 injection
      context = context || // cached call
      this.$vnode && this.$vnode.ssrContext || // stateful
      this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext; // functional
      // 2.2 with runInNewContext: true

      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__;
      } // inject component styles


      if (style) {
        style.call(this, createInjectorSSR(context));
      } // register component module identifier for async chunk inference


      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier);
      }
    }; // used by ssr in case component is cached and beforeCreate
    // never gets called


    options._ssrRegister = hook;
  } else if (style) {
    hook = shadowMode ? function () {
      style.call(this, createInjectorShadow(this.$root.$options.shadowRoot));
    } : function (context) {
      style.call(this, createInjector(context));
    };
  }

  if (hook) {
    if (options.functional) {
      // register for functional component in vue file
      var originalRender = options.render;

      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context);
        return originalRender(h, context);
      };
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate;
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
    }
  }

  return script;
}

var normalizeComponent_1 = normalizeComponent;

var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
function createInjector(context) {
  return function (id, style) {
    return addStyle(id, style);
  };
}
var HEAD;
var styles = {};

function addStyle(id, css) {
  var group = isOldIE ? css.media || 'default' : id;
  var style = styles[group] || (styles[group] = {
    ids: new Set(),
    styles: []
  });

  if (!style.ids.has(id)) {
    style.ids.add(id);
    var code = css.source;

    if (css.map) {
      // https://developer.chrome.com/devtools/docs/javascript-debugging
      // this makes source maps inside style tags work properly in Chrome
      code += '\n/*# sourceURL=' + css.map.sources[0] + ' */'; // http://stackoverflow.com/a/26603875

      code += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) + ' */';
    }

    if (!style.element) {
      style.element = document.createElement('style');
      style.element.type = 'text/css';
      if (css.media) style.element.setAttribute('media', css.media);

      if (HEAD === undefined) {
        HEAD = document.head || document.getElementsByTagName('head')[0];
      }

      HEAD.appendChild(style.element);
    }

    if ('styleSheet' in style.element) {
      style.styles.push(code);
      style.element.styleSheet.cssText = style.styles.filter(Boolean).join('\n');
    } else {
      var index = style.ids.size - 1;
      var textNode = document.createTextNode(code);
      var nodes = style.element.childNodes;
      if (nodes[index]) style.element.removeChild(nodes[index]);
      if (nodes.length) style.element.insertBefore(textNode, nodes[index]);else style.element.appendChild(textNode);
    }
  }
}

var browser = createInjector;

/* script */
const __vue_script__ = script;

/* template */
var __vue_render__ = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "Button",
    {
      class:
        "t-button t-button-" +
        _vm.type +
        "\n    t-button-" +
        _vm.size +
        "\n    " +
        (_vm.plain ? "is-plain" : "") +
        "\n    " +
        (_vm.round ? "is-round" : "") +
        "\n    " +
        (_vm.disabled ? "is-disabled" : "") +
        "\n    " +
        (_vm.circle ? "is-circle" : ""),
      on: { click: _vm.handleClick }
    },
    [
      _vm.icon ? _c("i", { class: "" + _vm.icon }) : _vm._e(),
      _vm._v(" "),
      _vm.$slots.default ? _c("span", [_vm._t("default")], 2) : _vm._e()
    ]
  )
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;

  /* style */
  const __vue_inject_styles__ = function (inject) {
    if (!inject) return
    inject("data-v-2ac88c1c_0", { source: ".t-button[data-v-2ac88c1c] {\n  display: inline-block;\n  line-height: 1;\n  white-space: nowrap;\n  cursor: pointer;\n  background: #ffffff;\n  border: 1px solid #dcdfe6;\n  color: #606266;\n  -webkit-appearance: none;\n  text-align: center;\n  box-sizing: border-box;\n  outline: none;\n  margin: 0;\n  transition: 0.1s;\n  font-weight: 500;\n  -moz-user-select: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  padding: 12px 20px;\n  font-size: 14px;\n  border-radius: 4px;\n}\n.t-button[data-v-2ac88c1c]:hover, .t-button[data-v-2ac88c1c]:focus {\n  color: #409eff;\n  border-color: #c6e2ff;\n  background-color: #ecf5ff;\n}\n.t-button-primary[data-v-2ac88c1c] {\n  color: #fff;\n  background-color: #409eff;\n  border-color: #409eff;\n}\n.t-button-primary[data-v-2ac88c1c]:hover, .t-button-primary[data-v-2ac88c1c]:focus {\n  background: #66b1ff;\n  background-color: #66b1ff;\n  color: #fff;\n}\n.t-button-success[data-v-2ac88c1c] {\n  color: #fff;\n  background-color: #67c23a;\n  border-color: #67c23a;\n}\n.t-button-success[data-v-2ac88c1c]:hover, .t-button-success[data-v-2ac88c1c]:focus {\n  background: #85ce61;\n  background-color: #85ce61;\n  color: #fff;\n}\n.t-button-info[data-v-2ac88c1c] {\n  color: #fff;\n  background-color: #909399;\n  border-color: #909399;\n}\n.t-button-info[data-v-2ac88c1c]:hover, .t-button-info[data-v-2ac88c1c]:focus {\n  background: #a6a9ad;\n  background-color: #a6a9ad;\n  color: #fff;\n}\n.t-button-warning[data-v-2ac88c1c] {\n  color: #fff;\n  background-color: #e6a23c;\n  border-color: #e6a23c;\n}\n.t-button-warning[data-v-2ac88c1c]:hover, .t-button-warning[data-v-2ac88c1c]:focus {\n  background: #ebb563;\n  background-color: #ebb563;\n  color: #fff;\n}\n.t-button-danger[data-v-2ac88c1c] {\n  color: #fff;\n  background-color: #f56c6c;\n  border-color: #f56c6c;\n}\n.t-button-danger[data-v-2ac88c1c]:hover, .t-button-danger[data-v-2ac88c1c]:focus {\n  background: #f78989;\n  background-color: #f78989;\n  color: #fff;\n}\n.t-button.is-plain[data-v-2ac88c1c]:hover, .t-button.is-plain[data-v-2ac88c1c]:focus {\n  background: #fff;\n  border-color: #489eff;\n  color: #409eff;\n}\n.t-button-primary.is-plain[data-v-2ac88c1c] {\n  color: #409eff;\n  background: #ecf5ff;\n}\n.t-button-primary.is-plain[data-v-2ac88c1c]:hover, .t-button-primary.is-plain[data-v-2ac88c1c]:focus {\n  background: #409eff;\n  border-color: #409eff;\n  color: #fff;\n}\n.t-button-success.is-plain[data-v-2ac88c1c] {\n  color: #67c23a;\n  background: #c2e7b0;\n}\n.t-button-success.is-plain[data-v-2ac88c1c]:hover, .t-button-success.is-plain[data-v-2ac88c1c]:focus {\n  background: #67c23a;\n  border-color: #67c23a;\n  color: #fff;\n}\n.t-button-info.is-plain[data-v-2ac88c1c] {\n  color: #909399;\n  background: #d3d4d6;\n}\n.t-button-info.is-plain[data-v-2ac88c1c]:hover, .t-button-info.is-plain[data-v-2ac88c1c]:focus {\n  background: #909399;\n  border-color: #909399;\n  color: #fff;\n}\n.t-button-warning.is-plain[data-v-2ac88c1c] {\n  color: #e6a23c;\n  background: #f5dab1;\n}\n.t-button-warning.is-plain[data-v-2ac88c1c]:hover, .t-button-warning.is-plain[data-v-2ac88c1c]:focus {\n  background: #e6a23c;\n  border-color: #e6a23c;\n  color: #fff;\n}\n.t-button-danger.is-plain[data-v-2ac88c1c] {\n  color: #f56c6c;\n  background: #fbc4c4;\n}\n.t-button-danger.is-plain[data-v-2ac88c1c]:hover, .t-button-danger.is-plain[data-v-2ac88c1c]:focus {\n  background: #f56c6c;\n  border-color: #f56c6c;\n  color: #fff;\n}\n.t-button.is-round[data-v-2ac88c1c] {\n  border-radius: 20px;\n  padding: 12px 23px;\n}\n.t-button.is-circle[data-v-2ac88c1c] {\n  border-radius: 50%;\n  padding: 12px;\n}\n.t-button [class*=t-icon-] + span[data-v-2ac88c1c] {\n  margin-left: 5px;\n}\n.t-button.is-disabled[data-v-2ac88c1c] {\n  cursor: no-drop;\n}\n.t-button-medium[data-v-2ac88c1c] {\n  padding: 12px 20px;\n  font-size: 14px;\n  border-radius: 4px;\n}\n.t-button-small[data-v-2ac88c1c] {\n  padding: 10px 15px;\n  font-size: 12px;\n  border-radius: 3px;\n}\n.t-button-mini[data-v-2ac88c1c] {\n  padding: 7px 15px;\n  font-size: 12px;\n  border-radius: 3px;\n}\n\n/*# sourceMappingURL=Button.vue.map */", map: {"version":3,"sources":["E:\\st-vue-ui\\src\\Button\\Button.vue","Button.vue"],"names":[],"mappings":"AA6DA;EACA,qBAAA;EACA,cAAA;EACA,mBAAA;EACA,eAAA;EACA,mBAAA;EACA,yBAAA;EACA,cAAA;EACA,wBAAA;EACA,kBAAA;EACA,sBAAA;EACA,aAAA;EACA,SAAA;EACA,gBAAA;EACA,gBAAA;EAEA,sBAAA;EACA,yBAAA;EACA,sBAAA;EACA,qBAAA;EACA,kBAAA;EACA,eAAA;EACA,kBAAA;AC7DA;AD8DA;EAEA,cAAA;EACA,qBAAA;EACA,yBAAA;AC7DA;ADgEA;EACA,WAAA;EACA,yBAAA;EACA,qBAAA;AC7DA;AD8DA;EAEA,mBAAA;EACA,yBAAA;EACA,WAAA;AC7DA;ADgEA;EACA,WAAA;EACA,yBAAA;EACA,qBAAA;AC7DA;AD8DA;EAEA,mBAAA;EACA,yBAAA;EACA,WAAA;AC7DA;ADgEA;EACA,WAAA;EACA,yBAAA;EACA,qBAAA;AC7DA;AD8DA;EAEA,mBAAA;EACA,yBAAA;EACA,WAAA;AC7DA;ADgEA;EACA,WAAA;EACA,yBAAA;EACA,qBAAA;AC7DA;AD8DA;EAEA,mBAAA;EACA,yBAAA;EACA,WAAA;AC7DA;ADgEA;EACA,WAAA;EACA,yBAAA;EACA,qBAAA;AC7DA;AD8DA;EAEA,mBAAA;EACA,yBAAA;EACA,WAAA;AC7DA;ADkEA;EAEA,gBAAA;EACA,qBAAA;EACA,cAAA;AChEA;ADmEA;EACA,cAAA;EACA,mBAAA;AChEA;ADiEA;EAEA,mBAAA;EACA,qBAAA;EACA,WAAA;AChEA;ADmEA;EACA,cAAA;EACA,mBAAA;AChEA;ADiEA;EAEA,mBAAA;EACA,qBAAA;EACA,WAAA;AChEA;ADmEA;EACA,cAAA;EACA,mBAAA;AChEA;ADiEA;EAEA,mBAAA;EACA,qBAAA;EACA,WAAA;AChEA;ADmEA;EACA,cAAA;EACA,mBAAA;AChEA;ADiEA;EAEA,mBAAA;EACA,qBAAA;EACA,WAAA;AChEA;ADmEA;EACA,cAAA;EACA,mBAAA;AChEA;ADiEA;EAEA,mBAAA;EACA,qBAAA;EACA,WAAA;AChEA;ADoEA;EACA,mBAAA;EACA,kBAAA;ACjEA;ADoEA;EACA,kBAAA;EACA,aAAA;ACjEA;ADoEA;EACA,gBAAA;ACjEA;ADoEA;EACA,eAAA;ACjEA;ADoEA;EACA,kBAAA;EACA,eAAA;EACA,kBAAA;ACjEA;ADoEA;EACA,kBAAA;EACA,eAAA;EACA,kBAAA;ACjEA;ADmEA;EACA,iBAAA;EACA,eAAA;EACA,kBAAA;AChEA;;AAEA,qCAAqC","file":"Button.vue","sourcesContent":["<template>\r\n    <Button\r\n        :class=\"`t-button t-button-${type}\r\n        t-button-${size}\r\n        ${plain ? 'is-plain' : ''}\r\n        ${round ? 'is-round' : ''}\r\n        ${disabled ? 'is-disabled' : ''}\r\n        ${circle ? 'is-circle' : ''}`\"\r\n        @click=\"handleClick\"\r\n    >\r\n        <i\r\n            v-if=\"icon\"\r\n            :class=\"`${icon}`\"\r\n        ></i>\r\n        <span v-if=\"$slots.default\">\r\n            <slot></slot>\r\n        </span>\r\n    </Button>\r\n</template>\r\n\r\n<script>\r\nexport default {\r\n    name: 'TButton',\r\n    props: {\r\n        type: {\r\n            type: String,\r\n            default: 'default'\r\n        },\r\n        size: {\r\n            type: String,\r\n            default: 'medium'\r\n        },\r\n        icon: {\r\n            type: String,\r\n            default: ''\r\n        },\r\n        round: {\r\n            type: Boolean,\r\n            default: false\r\n        },\r\n        plain: {\r\n            type: Boolean,\r\n            default: false\r\n        },\r\n        disabled: {\r\n            type: Boolean,\r\n            default: false\r\n        },\r\n        circle: {\r\n            type: Boolean,\r\n            default: false\r\n        }\r\n    },\r\n    methods: {\r\n        handleClick(e) {\r\n            this.$emit('click', e)\r\n        }\r\n    }\r\n}\r\n</script>\r\n<style lang=\"scss\" scoped>\r\n.t-button {\r\n    display: inline-block;\r\n    line-height: 1;\r\n    white-space: nowrap;\r\n    cursor: pointer;\r\n    background: #ffffff;\r\n    border: 1px solid #dcdfe6;\r\n    color: #606266;\r\n    -webkit-appearance: none;\r\n    text-align: center;\r\n    box-sizing: border-box;\r\n    outline: none;\r\n    margin: 0;\r\n    transition: 0.1s;\r\n    font-weight: 500;\r\n    //禁止元素的文字被选中\r\n    -moz-user-select: none;\r\n    -webkit-user-select: none;\r\n    -moz-user-select: none;\r\n    -ms-user-select: none;\r\n    padding: 12px 20px;\r\n    font-size: 14px;\r\n    border-radius: 4px;\r\n    &:hover,\r\n    &:focus {\r\n        color: #409eff;\r\n        border-color: #c6e2ff;\r\n        background-color: #ecf5ff;\r\n    }\r\n}\r\n.t-button-primary {\r\n    color: #fff;\r\n    background-color: #409eff;\r\n    border-color: #409eff;\r\n    &:hover,\r\n    &:focus {\r\n        background: #66b1ff;\r\n        background-color: #66b1ff;\r\n        color: #fff;\r\n    }\r\n}\r\n.t-button-success {\r\n    color: #fff;\r\n    background-color: #67c23a;\r\n    border-color: #67c23a;\r\n    &:hover,\r\n    &:focus {\r\n        background: #85ce61;\r\n        background-color: #85ce61;\r\n        color: #fff;\r\n    }\r\n}\r\n.t-button-info {\r\n    color: #fff;\r\n    background-color: #909399;\r\n    border-color: #909399;\r\n    &:hover,\r\n    &:focus {\r\n        background: #a6a9ad;\r\n        background-color: #a6a9ad;\r\n        color: #fff;\r\n    }\r\n}\r\n.t-button-warning {\r\n    color: #fff;\r\n    background-color: #e6a23c;\r\n    border-color: #e6a23c;\r\n    &:hover,\r\n    &:focus {\r\n        background: #ebb563;\r\n        background-color: #ebb563;\r\n        color: #fff;\r\n    }\r\n}\r\n.t-button-danger {\r\n    color: #fff;\r\n    background-color: #f56c6c;\r\n    border-color: #f56c6c;\r\n    &:hover,\r\n    &:focus {\r\n        background: #f78989;\r\n        background-color: #f78989;\r\n        color: #fff;\r\n    }\r\n}\r\n// 朴素按钮样式\r\n.t-button.is-plain {\r\n    &:hover,\r\n    &:focus {\r\n        background: #fff;\r\n        border-color: #489eff;\r\n        color: #409eff;\r\n    }\r\n}\r\n.t-button-primary.is-plain {\r\n    color: #409eff;\r\n    background: #ecf5ff;\r\n    &:hover,\r\n    &:focus {\r\n        background: #409eff;\r\n        border-color: #409eff;\r\n        color: #fff;\r\n    }\r\n}\r\n.t-button-success.is-plain {\r\n    color: #67c23a;\r\n    background: #c2e7b0;\r\n    &:hover,\r\n    &:focus {\r\n        background: #67c23a;\r\n        border-color: #67c23a;\r\n        color: #fff;\r\n    }\r\n}\r\n.t-button-info.is-plain {\r\n    color: #909399;\r\n    background: #d3d4d6;\r\n    &:hover,\r\n    &:focus {\r\n        background: #909399;\r\n        border-color: #909399;\r\n        color: #fff;\r\n    }\r\n}\r\n.t-button-warning.is-plain {\r\n    color: #e6a23c;\r\n    background: #f5dab1;\r\n    &:hover,\r\n    &:focus {\r\n        background: #e6a23c;\r\n        border-color: #e6a23c;\r\n        color: #fff;\r\n    }\r\n}\r\n.t-button-danger.is-plain {\r\n    color: #f56c6c;\r\n    background: #fbc4c4;\r\n    &:hover,\r\n    &:focus {\r\n        background: #f56c6c;\r\n        border-color: #f56c6c;\r\n        color: #fff;\r\n    }\r\n}\r\n// round属性\r\n.t-button.is-round {\r\n    border-radius: 20px;\r\n    padding: 12px 23px;\r\n}\r\n// circle属性\r\n.t-button.is-circle {\r\n    border-radius: 50%;\r\n    padding: 12px;\r\n}\r\n// icon配套样式\r\n.t-button [class*='t-icon-'] + span {\r\n    margin-left: 5px;\r\n}\r\n// disabled属性\r\n.t-button.is-disabled {\r\n    cursor: no-drop;\r\n}\r\n\r\n.t-button-medium {\r\n    padding: 12px 20px;\r\n    font-size: 14px;\r\n    border-radius: 4px;\r\n}\r\n\r\n.t-button-small {\r\n    padding: 10px 15px;\r\n    font-size: 12px;\r\n    border-radius: 3px;\r\n}\r\n.t-button-mini {\r\n    padding: 7px 15px;\r\n    font-size: 12px;\r\n    border-radius: 3px;\r\n}\r\n</style>\r\n",".t-button {\n  display: inline-block;\n  line-height: 1;\n  white-space: nowrap;\n  cursor: pointer;\n  background: #ffffff;\n  border: 1px solid #dcdfe6;\n  color: #606266;\n  -webkit-appearance: none;\n  text-align: center;\n  box-sizing: border-box;\n  outline: none;\n  margin: 0;\n  transition: 0.1s;\n  font-weight: 500;\n  -moz-user-select: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  padding: 12px 20px;\n  font-size: 14px;\n  border-radius: 4px;\n}\n.t-button:hover, .t-button:focus {\n  color: #409eff;\n  border-color: #c6e2ff;\n  background-color: #ecf5ff;\n}\n\n.t-button-primary {\n  color: #fff;\n  background-color: #409eff;\n  border-color: #409eff;\n}\n.t-button-primary:hover, .t-button-primary:focus {\n  background: #66b1ff;\n  background-color: #66b1ff;\n  color: #fff;\n}\n\n.t-button-success {\n  color: #fff;\n  background-color: #67c23a;\n  border-color: #67c23a;\n}\n.t-button-success:hover, .t-button-success:focus {\n  background: #85ce61;\n  background-color: #85ce61;\n  color: #fff;\n}\n\n.t-button-info {\n  color: #fff;\n  background-color: #909399;\n  border-color: #909399;\n}\n.t-button-info:hover, .t-button-info:focus {\n  background: #a6a9ad;\n  background-color: #a6a9ad;\n  color: #fff;\n}\n\n.t-button-warning {\n  color: #fff;\n  background-color: #e6a23c;\n  border-color: #e6a23c;\n}\n.t-button-warning:hover, .t-button-warning:focus {\n  background: #ebb563;\n  background-color: #ebb563;\n  color: #fff;\n}\n\n.t-button-danger {\n  color: #fff;\n  background-color: #f56c6c;\n  border-color: #f56c6c;\n}\n.t-button-danger:hover, .t-button-danger:focus {\n  background: #f78989;\n  background-color: #f78989;\n  color: #fff;\n}\n\n.t-button.is-plain:hover, .t-button.is-plain:focus {\n  background: #fff;\n  border-color: #489eff;\n  color: #409eff;\n}\n\n.t-button-primary.is-plain {\n  color: #409eff;\n  background: #ecf5ff;\n}\n.t-button-primary.is-plain:hover, .t-button-primary.is-plain:focus {\n  background: #409eff;\n  border-color: #409eff;\n  color: #fff;\n}\n\n.t-button-success.is-plain {\n  color: #67c23a;\n  background: #c2e7b0;\n}\n.t-button-success.is-plain:hover, .t-button-success.is-plain:focus {\n  background: #67c23a;\n  border-color: #67c23a;\n  color: #fff;\n}\n\n.t-button-info.is-plain {\n  color: #909399;\n  background: #d3d4d6;\n}\n.t-button-info.is-plain:hover, .t-button-info.is-plain:focus {\n  background: #909399;\n  border-color: #909399;\n  color: #fff;\n}\n\n.t-button-warning.is-plain {\n  color: #e6a23c;\n  background: #f5dab1;\n}\n.t-button-warning.is-plain:hover, .t-button-warning.is-plain:focus {\n  background: #e6a23c;\n  border-color: #e6a23c;\n  color: #fff;\n}\n\n.t-button-danger.is-plain {\n  color: #f56c6c;\n  background: #fbc4c4;\n}\n.t-button-danger.is-plain:hover, .t-button-danger.is-plain:focus {\n  background: #f56c6c;\n  border-color: #f56c6c;\n  color: #fff;\n}\n\n.t-button.is-round {\n  border-radius: 20px;\n  padding: 12px 23px;\n}\n\n.t-button.is-circle {\n  border-radius: 50%;\n  padding: 12px;\n}\n\n.t-button [class*=t-icon-] + span {\n  margin-left: 5px;\n}\n\n.t-button.is-disabled {\n  cursor: no-drop;\n}\n\n.t-button-medium {\n  padding: 12px 20px;\n  font-size: 14px;\n  border-radius: 4px;\n}\n\n.t-button-small {\n  padding: 10px 15px;\n  font-size: 12px;\n  border-radius: 3px;\n}\n\n.t-button-mini {\n  padding: 7px 15px;\n  font-size: 12px;\n  border-radius: 3px;\n}\n\n/*# sourceMappingURL=Button.vue.map */"]}, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__ = "data-v-2ac88c1c";
  /* module identifier */
  const __vue_module_identifier__ = undefined;
  /* functional template */
  const __vue_is_functional_template__ = false;
  /* style inject SSR */
  

  
  var TButton = normalizeComponent_1(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    browser,
    undefined
  );

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var script$1 = {
    name: 'TCheckbox',
    inject: {
        checkboxGroup: {
            default: ''
        }
    },
    props: {
        value: {
            type: Boolean,
            default: false
        },
        label: {
            type: String,
            default: ''
        },
        name: {
            type: String,
            default: ''
        }
    },
    computed: {
        isGroup() {
            return !!this.checkboxGroup
        },
        model: {
            get () {
                return this.isGroup ? this.checkboxGroup.value : this.value
            },
            set (value) {
                this.isGroup ? this.checkboxGroup.$emit('input', value) : this.$emit('input', value);
            }
        },
        isChecked() {
            /** 如果是group包裹，判断label是否在model中
             * 如果没有包裹，直接使用model
             */
            return this.isGroup ? this.model.includes(this.label) : this.model
        }
    }
};

/* script */
const __vue_script__$1 = script$1;

/* template */
var __vue_render__$1 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "label",
    { staticClass: "t-checkbox", class: { " is-checked": _vm.isChecked } },
    [
      _c("span", { staticClass: "t-checkbox_input" }, [
        _c("span", { staticClass: "t-checkbox_inner" }),
        _vm._v(" "),
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.model,
              expression: "model"
            }
          ],
          staticClass: "t-checkbox_original",
          attrs: { type: "checkbox", name: _vm.name },
          domProps: {
            value: _vm.label,
            checked: Array.isArray(_vm.model)
              ? _vm._i(_vm.model, _vm.label) > -1
              : _vm.model
          },
          on: {
            change: function($event) {
              var $$a = _vm.model,
                $$el = $event.target,
                $$c = $$el.checked ? true : false;
              if (Array.isArray($$a)) {
                var $$v = _vm.label,
                  $$i = _vm._i($$a, $$v);
                if ($$el.checked) {
                  $$i < 0 && (_vm.model = $$a.concat([$$v]));
                } else {
                  $$i > -1 &&
                    (_vm.model = $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
                }
              } else {
                _vm.model = $$c;
              }
            }
          }
        })
      ]),
      _vm._v(" "),
      _c(
        "span",
        { staticClass: "t-checkbox_label" },
        [
          _vm._t("default"),
          _vm._v(" "),
          !_vm.$slots.default
            ? [_vm._v("\n            " + _vm._s(_vm.label) + "\n        ")]
            : _vm._e()
        ],
        2
      )
    ]
  )
};
var __vue_staticRenderFns__$1 = [];
__vue_render__$1._withStripped = true;

  /* style */
  const __vue_inject_styles__$1 = function (inject) {
    if (!inject) return
    inject("data-v-c995182c_0", { source: ".t-checkbox[data-v-c995182c] {\n  color: #606266;\n  font-weight: 500;\n  font-size: 14px;\n  position: relative;\n  cursor: pointer;\n  display: inline-block;\n  white-space: nowrap;\n  user-select: none;\n  margin-right: 30px;\n}\n.t-checkbox .t-checkbox_input[data-v-c995182c] {\n  white-space: nowrap;\n  cursor: pointer;\n  outline: none;\n  display: inline-block;\n  line-height: 1;\n  position: relative;\n  vertical-align: middle;\n}\n.t-checkbox .t-checkbox_input .t-checkbox_inner[data-v-c995182c] {\n  display: inline-block;\n  position: relative;\n  border: 1px solid #dcdfe6;\n  border-radius: 2px;\n  box-sizing: border-box;\n  width: 14px;\n  height: 14px;\n  background-color: #fff;\n  z-index: 1;\n  transition: border-color 0.25s cubic-bezier(0.71, -0.46, 0.29, 1.46), background-color 0.25s, cubic-bezier(0.71, -0.46, 0.29, 1.46);\n}\n.t-checkbox .t-checkbox_input .t-checkbox_inner[data-v-c995182c]:after {\n  box-sizing: content-box;\n  content: \"\";\n  border: 1px solid #ffffff;\n  border-left: 0;\n  border-top: 0;\n  height: 7px;\n  left: 4px;\n  position: absolute;\n  top: 1px;\n  transform: rotate(45deg) scaleY(0);\n  width: 3px;\n  transition: transform 0.15s ease-in 0.05s;\n  transform-origin: center;\n}\n.t-checkbox .t-checkbox_input .t-checkbox_original[data-v-c995182c] {\n  opacity: 0;\n  outline: none;\n  position: absolute;\n  left: 10px;\n  margin: 0;\n  width: 0;\n  height: 0;\n  z-index: -1;\n}\n.t-checkbox .t-checkbox_label[data-v-c995182c] {\n  display: inline-block;\n  padding-left: 10px;\n  line-height: 19px;\n  font-size: 14px;\n}\n.t-checkbox.is-checked .t-checkbox_input .t-checkbox_inner[data-v-c995182c] {\n  background-color: #409eff;\n  border-color: #409eff;\n}\n.t-checkbox.is-checked .t-checkbox_input .t-checkbox_inner[data-v-c995182c]:after {\n  transform: rotate(45deg) scaleY(1);\n}\n.t-checkbox.is-checked .t-checkbox_label[data-v-c995182c] {\n  color: #409eff;\n}\n\n/*# sourceMappingURL=Checkbox.vue.map */", map: {"version":3,"sources":["E:\\st-vue-ui\\src\\CheckBox\\Checkbox.vue","Checkbox.vue"],"names":[],"mappings":"AAgEA;EACA,cAAA;EACA,gBAAA;EACA,eAAA;EACA,kBAAA;EACA,eAAA;EACA,qBAAA;EACA,mBAAA;EACA,iBAAA;EACA,kBAAA;AC/DA;ADgEA;EACA,mBAAA;EACA,eAAA;EACA,aAAA;EACA,qBAAA;EACA,cAAA;EACA,kBAAA;EACA,sBAAA;AC9DA;AD+DA;EACA,qBAAA;EACA,kBAAA;EACA,yBAAA;EACA,kBAAA;EACA,sBAAA;EACA,WAAA;EACA,YAAA;EACA,sBAAA;EACA,UAAA;EACA,mIAAA;AC7DA;AD8DA;EACA,uBAAA;EACA,WAAA;EACA,yBAAA;EACA,cAAA;EACA,aAAA;EACA,WAAA;EACA,SAAA;EACA,kBAAA;EACA,QAAA;EACA,kCAAA;EACA,UAAA;EACA,yCAAA;EACA,wBAAA;AC5DA;AD+DA;EACA,UAAA;EACA,aAAA;EACA,kBAAA;EACA,UAAA;EACA,SAAA;EACA,QAAA;EACA,SAAA;EACA,WAAA;AC7DA;ADgEA;EACA,qBAAA;EACA,kBAAA;EACA,iBAAA;EACA,eAAA;AC9DA;ADoEA;EACA,yBAAA;EACA,qBAAA;ACjEA;ADkEA;EACA,kCAAA;AChEA;ADoEA;EACA,cAAA;AClEA;;AAEA,uCAAuC","file":"Checkbox.vue","sourcesContent":["<template>\r\n    <label class=\"t-checkbox\" :class=\"{' is-checked': isChecked}\">\r\n        <span class=\"t-checkbox_input\">\r\n            <span class=\"t-checkbox_inner\"></span>\r\n            <input type=\"checkbox\"\r\n                class=\"t-checkbox_original\"\r\n                :name=\"name\"\r\n                v-model=\"model\"\r\n                :value=\"label\"\r\n            >\r\n        </span>\r\n        <span class=\"t-checkbox_label\">\r\n            <slot></slot>\r\n            <template v-if=\"!$slots.default\">\r\n                {{label}}\r\n            </template>\r\n        </span>\r\n    </label>\r\n</template>\r\n<script>\r\nexport default {\r\n    name: 'TCheckbox',\r\n    inject: {\r\n        checkboxGroup: {\r\n            default: ''\r\n        }\r\n    },\r\n    props: {\r\n        value: {\r\n            type: Boolean,\r\n            default: false\r\n        },\r\n        label: {\r\n            type: String,\r\n            default: ''\r\n        },\r\n        name: {\r\n            type: String,\r\n            default: ''\r\n        }\r\n    },\r\n    computed: {\r\n        isGroup() {\r\n            return !!this.checkboxGroup\r\n        },\r\n        model: {\r\n            get () {\r\n                return this.isGroup ? this.checkboxGroup.value : this.value\r\n            },\r\n            set (value) {\r\n                this.isGroup ? this.checkboxGroup.$emit('input', value) : this.$emit('input', value)\r\n            }\r\n        },\r\n        isChecked() {\r\n            /** 如果是group包裹，判断label是否在model中\r\n             * 如果没有包裹，直接使用model\r\n             */\r\n            return this.isGroup ? this.model.includes(this.label) : this.model\r\n        }\r\n    }\r\n}\r\n</script>\r\n\r\n<style lang=\"scss\" scoped>\r\n.t-checkbox{\r\n    color: #606266;\r\n    font-weight: 500;\r\n    font-size: 14px;\r\n    position: relative;\r\n    cursor: pointer;\r\n    display: inline-block;\r\n    white-space: nowrap;\r\n    user-select: none;\r\n    margin-right: 30px;\r\n    .t-checkbox_input{\r\n        white-space: nowrap;\r\n        cursor: pointer;\r\n        outline: none;\r\n        display: inline-block;\r\n        line-height: 1;\r\n        position: relative;\r\n        vertical-align: middle;\r\n        .t-checkbox_inner{\r\n            display: inline-block;\r\n            position: relative;\r\n            border: 1px solid #dcdfe6;\r\n            border-radius: 2px;\r\n            box-sizing: border-box;\r\n            width: 14px;\r\n            height: 14px;\r\n            background-color: #fff;\r\n            z-index: 1;\r\n            transition: border-color .25s cubic-bezier(.71,-.46,.29,1.46),background-color .25s,cubic-bezier(.71,-.46,.29,1.46);\r\n            &:after{\r\n                box-sizing: content-box;\r\n                content: '';\r\n                border: 1px solid #ffffff;\r\n                border-left: 0;\r\n                border-top: 0;\r\n                height: 7px;\r\n                left: 4px;\r\n                position: absolute;\r\n                top: 1px;\r\n                transform: rotate(45deg) scaleY(0);\r\n                width: 3px;\r\n                transition: transform .15s ease-in .05s;\r\n                transform-origin: center;\r\n            }\r\n        }\r\n        .t-checkbox_original{\r\n            opacity: 0;\r\n            outline: none;\r\n            position: absolute;\r\n            left: 10px;\r\n            margin: 0;\r\n            width: 0;\r\n            height: 0;\r\n            z-index: -1;\r\n        }\r\n    }\r\n        .t-checkbox_label{\r\n            display: inline-block;\r\n            padding-left: 10px;\r\n            line-height: 19px;\r\n            font-size: 14px;\r\n        }\r\n}\r\n  // 选中的样式\r\n.t-checkbox.is-checked{\r\n    .t-checkbox_input{\r\n        .t-checkbox_inner{\r\n            background-color: #409eff;\r\n            border-color: #409eff;\r\n            &:after{\r\n                transform: rotate(45deg) scaleY(1);\r\n            }\r\n        }\r\n    }\r\n    .t-checkbox_label{\r\n        color: #409eff;\r\n    }\r\n}\r\n</style>\r\n",".t-checkbox {\n  color: #606266;\n  font-weight: 500;\n  font-size: 14px;\n  position: relative;\n  cursor: pointer;\n  display: inline-block;\n  white-space: nowrap;\n  user-select: none;\n  margin-right: 30px;\n}\n.t-checkbox .t-checkbox_input {\n  white-space: nowrap;\n  cursor: pointer;\n  outline: none;\n  display: inline-block;\n  line-height: 1;\n  position: relative;\n  vertical-align: middle;\n}\n.t-checkbox .t-checkbox_input .t-checkbox_inner {\n  display: inline-block;\n  position: relative;\n  border: 1px solid #dcdfe6;\n  border-radius: 2px;\n  box-sizing: border-box;\n  width: 14px;\n  height: 14px;\n  background-color: #fff;\n  z-index: 1;\n  transition: border-color 0.25s cubic-bezier(0.71, -0.46, 0.29, 1.46), background-color 0.25s, cubic-bezier(0.71, -0.46, 0.29, 1.46);\n}\n.t-checkbox .t-checkbox_input .t-checkbox_inner:after {\n  box-sizing: content-box;\n  content: \"\";\n  border: 1px solid #ffffff;\n  border-left: 0;\n  border-top: 0;\n  height: 7px;\n  left: 4px;\n  position: absolute;\n  top: 1px;\n  transform: rotate(45deg) scaleY(0);\n  width: 3px;\n  transition: transform 0.15s ease-in 0.05s;\n  transform-origin: center;\n}\n.t-checkbox .t-checkbox_input .t-checkbox_original {\n  opacity: 0;\n  outline: none;\n  position: absolute;\n  left: 10px;\n  margin: 0;\n  width: 0;\n  height: 0;\n  z-index: -1;\n}\n.t-checkbox .t-checkbox_label {\n  display: inline-block;\n  padding-left: 10px;\n  line-height: 19px;\n  font-size: 14px;\n}\n\n.t-checkbox.is-checked .t-checkbox_input .t-checkbox_inner {\n  background-color: #409eff;\n  border-color: #409eff;\n}\n.t-checkbox.is-checked .t-checkbox_input .t-checkbox_inner:after {\n  transform: rotate(45deg) scaleY(1);\n}\n.t-checkbox.is-checked .t-checkbox_label {\n  color: #409eff;\n}\n\n/*# sourceMappingURL=Checkbox.vue.map */"]}, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__$1 = "data-v-c995182c";
  /* module identifier */
  const __vue_module_identifier__$1 = undefined;
  /* functional template */
  const __vue_is_functional_template__$1 = false;
  /* style inject SSR */
  

  
  var TCheckBox = normalizeComponent_1(
    { render: __vue_render__$1, staticRenderFns: __vue_staticRenderFns__$1 },
    __vue_inject_styles__$1,
    __vue_script__$1,
    __vue_scope_id__$1,
    __vue_is_functional_template__$1,
    __vue_module_identifier__$1,
    browser,
    undefined
  );

//
//
//
//
//
//

var script$2 = {
    name: 'TCheckboxGroup',
    props: {
        value: {
            type: Array
        }
    },
    provide() {
        return {
            checkboxGroup: this
        }
    }
};

/* script */
const __vue_script__$2 = script$2;

/* template */
var __vue_render__$2 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { staticClass: "t-check_group" }, [_vm._t("default")], 2)
};
var __vue_staticRenderFns__$2 = [];
__vue_render__$2._withStripped = true;

  /* style */
  const __vue_inject_styles__$2 = undefined;
  /* scoped */
  const __vue_scope_id__$2 = undefined;
  /* module identifier */
  const __vue_module_identifier__$2 = undefined;
  /* functional template */
  const __vue_is_functional_template__$2 = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var TCheckBoxGroup = normalizeComponent_1(
    { render: __vue_render__$2, staticRenderFns: __vue_staticRenderFns__$2 },
    __vue_inject_styles__$2,
    __vue_script__$2,
    __vue_scope_id__$2,
    __vue_is_functional_template__$2,
    __vue_module_identifier__$2,
    undefined,
    undefined
  );

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var script$3 = {
    name: 'TDialog',
    props: {
        title: {
            type: String,
            default: '提示'
        },
        width: {
            type: String,
            default: '50%'
        },
        top: {
            type: String,
            default: '15vh'
        },
        visible: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        handleClose() {
            // 运用 .sync语法糖修改父组件的某个属性
            this.$emit('update:visible', false);
        }
    }
};

/* script */
const __vue_script__$3 = script$3;

/* template */
var __vue_render__$3 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("transition", { attrs: { name: "dialog-fade" } }, [
    _c(
      "div",
      {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.visible,
            expression: "visible"
          }
        ],
        staticClass: "t-dialog_wrapper",
        on: { click: _vm.handleClose }
      },
      [
        _c(
          "div",
          {
            staticClass: "t-dialog",
            style: { width: _vm.width, marginTop: _vm.top }
          },
          [
            _c(
              "div",
              { staticClass: "t-dialog_header" },
              [
                _vm._t("title", [
                  _c("span", { staticClass: "t-dailog_title" }, [
                    _vm._v(_vm._s(_vm.title))
                  ])
                ]),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "t-dialog_headerbtn",
                    on: { click: _vm.handleClose }
                  },
                  [_c("i", { staticClass: "t-icon-cuo" })]
                )
              ],
              2
            ),
            _vm._v(" "),
            _c("div", { staticClass: "t-dialog_body" }, [_vm._t("default")], 2),
            _vm._v(" "),
            _vm.$slots.footer
              ? _c(
                  "div",
                  { staticClass: "t-dialog_footer" },
                  [_vm._t("footer")],
                  2
                )
              : _vm._e()
          ]
        )
      ]
    )
  ])
};
var __vue_staticRenderFns__$3 = [];
__vue_render__$3._withStripped = true;

  /* style */
  const __vue_inject_styles__$3 = function (inject) {
    if (!inject) return
    inject("data-v-6eacbbce_0", { source: ".t-dialog_wrapper[data-v-6eacbbce] {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  overflow: auto;\n  margin: 0;\n  z-index: 2001;\n  background-color: rgba(0, 0, 0, 0.5);\n}\n.t-dialog_wrapper .t-dialog[data-v-6eacbbce] {\n  position: relative;\n  margin: 15vh auto 50px;\n  background: #fff;\n  border-radius: 2px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);\n  box-sizing: border-box;\n  width: 30%;\n}\n.t-dialog_wrapper .t-dialog_header[data-v-6eacbbce] {\n  padding: 20px 20px 10px;\n}\n.t-dialog_wrapper .t-dialog_header .t-dialog_title[data-v-6eacbbce] {\n  line-height: 24px;\n  font-size: 18px;\n  color: #303133;\n}\n.t-dialog_wrapper .t-dialog_header .t-dialog_headerbtn[data-v-6eacbbce] {\n  position: absolute;\n  top: 20px;\n  right: 20px;\n  padding: 0;\n  background: transparent;\n  border: none;\n  outline: none;\n  cursor: pointer;\n  font-size: 16px;\n}\n.t-dialog_wrapper .t-dialog_header .t-dialog_headerbtn .t-icon-close[data-v-6eacbbce] {\n  color: 909399;\n}\n.t-dialog_wrapper .t-dialog_body[data-v-6eacbbce] {\n  padding: 30px 20px;\n  color: #606266;\n  font-size: 14px;\n  word-break: break-all;\n}\n.t-dialog_wrapper .t-dialog_footer[data-v-6eacbbce] {\n  padding: 10px 20px 20px;\n  text-align: right;\n  box-sizing: border-box;\n}\n.t-dialog_wrapper .t-dialog_footer[data-v-6eacbbce]  .t-button:first-child {\n  margin-right: 20px;\n}\n.dialog-fade-enter-active[data-v-6eacbbce] {\n  animation: fade-data-v-6eacbbce 0.3s;\n}\n.dialog-fade-leave-active[data-v-6eacbbce] {\n  animation: fade-data-v-6eacbbce 0.3s reverse;\n}\n@keyframes fade-data-v-6eacbbce {\n0% {\n    opacity: 0;\n    transform: translateY(-20px);\n}\n100% {\n    opacity: 1;\n    transform: translateY(0);\n}\n}\n\n/*# sourceMappingURL=Dialog.vue.map */", map: {"version":3,"sources":["E:\\st-vue-ui\\src\\Dialog\\Dialog.vue","Dialog.vue"],"names":[],"mappings":"AAoEA;EACA,eAAA;EACA,MAAA;EACA,QAAA;EACA,SAAA;EACA,OAAA;EACA,cAAA;EACA,SAAA;EACA,aAAA;EACA,oCAAA;ACnEA;ADoEA;EACA,kBAAA;EACA,sBAAA;EACA,gBAAA;EACA,kBAAA;EACA,wCAAA;EACA,sBAAA;EACA,UAAA;AClEA;ADmEA;EACA,uBAAA;ACjEA;ADkEA;EACA,iBAAA;EACA,eAAA;EACA,cAAA;AChEA;ADkEA;EACA,kBAAA;EACA,SAAA;EACA,WAAA;EACA,UAAA;EACA,uBAAA;EACA,YAAA;EACA,aAAA;EACA,eAAA;EACA,eAAA;AChEA;ADiEA;EACA,aAAA;AC/DA;ADmEA;EACA,kBAAA;EACA,cAAA;EACA,eAAA;EACA,qBAAA;ACjEA;ADmEA;EACA,uBAAA;EACA,iBAAA;EACA,sBAAA;ACjEA;ADkEA;EACA,kBAAA;AChEA;ADqEA;EACA,oCAAA;AClEA;ADoEA;EACA,4CAAA;ACjEA;ADoEA;AACA;IACA,UAAA;IACA,4BAAA;ACjEE;ADmEF;IACA,UAAA;IACA,wBAAA;ACjEE;AACF;;AAEA,qCAAqC","file":"Dialog.vue","sourcesContent":["<template>\r\n    <transition name=\"dialog-fade\">\r\n        <!-- 对话框遮罩 -->\r\n        <div\r\n            class=\"t-dialog_wrapper\"\r\n            v-show=\"visible\"\r\n            @click=\"handleClose\"\r\n        >\r\n            <div\r\n                class=\"t-dialog\"\r\n                :style=\"{width, marginTop: top}\"\r\n            >\r\n                <div class=\"t-dialog_header\">\r\n                    <slot name=\"title\">\r\n                        <span class=\"t-dailog_title\">{{title}}</span>\r\n                    </slot>\r\n                    <button\r\n                        class=\"t-dialog_headerbtn\"\r\n                        @click=\"handleClose\"\r\n                    >\r\n                        <i class=\"t-icon-cuo\"></i>\r\n                    </button>\r\n                </div>\r\n                <div class=\"t-dialog_body\">\r\n                    <!-- 默认插槽 -->\r\n                    <slot></slot>\r\n                </div>\r\n                <div\r\n                    class=\"t-dialog_footer\"\r\n                    v-if=\"$slots.footer\"\r\n                >\r\n                    <slot name=\"footer\"></slot>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </transition>\r\n</template>\r\n<script>\r\nexport default {\r\n    name: 'TDialog',\r\n    props: {\r\n        title: {\r\n            type: String,\r\n            default: '提示'\r\n        },\r\n        width: {\r\n            type: String,\r\n            default: '50%'\r\n        },\r\n        top: {\r\n            type: String,\r\n            default: '15vh'\r\n        },\r\n        visible: {\r\n            type: Boolean,\r\n            default: false\r\n        }\r\n    },\r\n    methods: {\r\n        handleClose() {\r\n            // 运用 .sync语法糖修改父组件的某个属性\r\n            this.$emit('update:visible', false)\r\n        }\r\n    }\r\n}\r\n</script>\r\n\r\n<style lang=\"scss\" scoped>\r\n.t-dialog_wrapper {\r\n    position: fixed;\r\n    top: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    overflow: auto;\r\n    margin: 0;\r\n    z-index: 2001;\r\n    background-color: rgba(0, 0, 0, 0.5);\r\n    .t-dialog {\r\n        position: relative;\r\n        margin: 15vh auto 50px;\r\n        background: #fff;\r\n        border-radius: 2px;\r\n        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);\r\n        box-sizing: border-box;\r\n        width: 30%;\r\n        &_header {\r\n            padding: 20px 20px 10px;\r\n            .t-dialog_title {\r\n                line-height: 24px;\r\n                font-size: 18px;\r\n                color: #303133;\r\n            }\r\n            .t-dialog_headerbtn {\r\n                position: absolute;\r\n                top: 20px;\r\n                right: 20px;\r\n                padding: 0;\r\n                background: transparent;\r\n                border: none;\r\n                outline: none;\r\n                cursor: pointer;\r\n                font-size: 16px;\r\n                .t-icon-close {\r\n                    color: 909399;\r\n                }\r\n            }\r\n        }\r\n        &_body {\r\n            padding: 30px 20px;\r\n            color: #606266;\r\n            font-size: 14px;\r\n            word-break: break-all;\r\n        }\r\n        &_footer {\r\n            padding: 10px 20px 20px;\r\n            text-align: right;\r\n            box-sizing: border-box;\r\n            ::v-deep .t-button:first-child {\r\n                margin-right: 20px;\r\n            }\r\n        }\r\n    }\r\n}\r\n.dialog-fade-enter-active {\r\n    animation: fade 0.3s;\r\n}\r\n.dialog-fade-leave-active {\r\n    animation: fade 0.3s reverse;\r\n}\r\n\r\n@keyframes fade {\r\n    0% {\r\n        opacity: 0;\r\n        transform: translateY(-20px);\r\n    }\r\n    100% {\r\n        opacity: 1;\r\n        transform: translateY(0);\r\n    }\r\n}\r\n</style>\r\n",".t-dialog_wrapper {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  overflow: auto;\n  margin: 0;\n  z-index: 2001;\n  background-color: rgba(0, 0, 0, 0.5);\n}\n.t-dialog_wrapper .t-dialog {\n  position: relative;\n  margin: 15vh auto 50px;\n  background: #fff;\n  border-radius: 2px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);\n  box-sizing: border-box;\n  width: 30%;\n}\n.t-dialog_wrapper .t-dialog_header {\n  padding: 20px 20px 10px;\n}\n.t-dialog_wrapper .t-dialog_header .t-dialog_title {\n  line-height: 24px;\n  font-size: 18px;\n  color: #303133;\n}\n.t-dialog_wrapper .t-dialog_header .t-dialog_headerbtn {\n  position: absolute;\n  top: 20px;\n  right: 20px;\n  padding: 0;\n  background: transparent;\n  border: none;\n  outline: none;\n  cursor: pointer;\n  font-size: 16px;\n}\n.t-dialog_wrapper .t-dialog_header .t-dialog_headerbtn .t-icon-close {\n  color: 909399;\n}\n.t-dialog_wrapper .t-dialog_body {\n  padding: 30px 20px;\n  color: #606266;\n  font-size: 14px;\n  word-break: break-all;\n}\n.t-dialog_wrapper .t-dialog_footer {\n  padding: 10px 20px 20px;\n  text-align: right;\n  box-sizing: border-box;\n}\n.t-dialog_wrapper .t-dialog_footer ::v-deep .t-button:first-child {\n  margin-right: 20px;\n}\n\n.dialog-fade-enter-active {\n  animation: fade 0.3s;\n}\n\n.dialog-fade-leave-active {\n  animation: fade 0.3s reverse;\n}\n\n@keyframes fade {\n  0% {\n    opacity: 0;\n    transform: translateY(-20px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n\n/*# sourceMappingURL=Dialog.vue.map */"]}, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__$3 = "data-v-6eacbbce";
  /* module identifier */
  const __vue_module_identifier__$3 = undefined;
  /* functional template */
  const __vue_is_functional_template__$3 = false;
  /* style inject SSR */
  

  
  var TDialog = normalizeComponent_1(
    { render: __vue_render__$3, staticRenderFns: __vue_staticRenderFns__$3 },
    __vue_inject_styles__$3,
    __vue_script__$3,
    __vue_scope_id__$3,
    __vue_is_functional_template__$3,
    __vue_module_identifier__$3,
    browser,
    undefined
  );

//
//
//
//
//

var script$4 = {
    name: 'TForm',
    provide () {
        return {
            Form: this
        }
    },
    props: {
        model: {
            type: Object,
            required: true
        },
        labelWidth: {
            type: String,
            default: '80px'
        }
    }
};

/* script */
const __vue_script__$4 = script$4;

/* template */
var __vue_render__$4 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { staticClass: "t-form" }, [_vm._t("default")], 2)
};
var __vue_staticRenderFns__$4 = [];
__vue_render__$4._withStripped = true;

  /* style */
  const __vue_inject_styles__$4 = undefined;
  /* scoped */
  const __vue_scope_id__$4 = undefined;
  /* module identifier */
  const __vue_module_identifier__$4 = undefined;
  /* functional template */
  const __vue_is_functional_template__$4 = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var TForm = normalizeComponent_1(
    { render: __vue_render__$4, staticRenderFns: __vue_staticRenderFns__$4 },
    __vue_inject_styles__$4,
    __vue_script__$4,
    __vue_scope_id__$4,
    __vue_is_functional_template__$4,
    __vue_module_identifier__$4,
    undefined,
    undefined
  );

//
//
//
//
//
//
//
//

var script$5 = {
    name: 'TFormItem',
    props: {
        label: {
            type: String,
            default: ''
        }
    },
    inject: ['Form'],
    computed: {
        labelStyle () {
            return {
                width: this.Form.labelWidth
            }
        }
    }
};

/* script */
const __vue_script__$5 = script$5;

/* template */
var __vue_render__$5 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { staticClass: "t-form-item" }, [
    _c("label", { staticClass: "t-form-item_label", style: _vm.labelStyle }, [
      _vm._v(_vm._s(_vm.label))
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "t-form-item_content" }, [_vm._t("default")], 2)
  ])
};
var __vue_staticRenderFns__$5 = [];
__vue_render__$5._withStripped = true;

  /* style */
  const __vue_inject_styles__$5 = function (inject) {
    if (!inject) return
    inject("data-v-50a5cf1e_0", { source: ".t-form-item[data-v-50a5cf1e] {\n  margin-bottom: 25px;\n}\n.t-form-item .t-form-item_label[data-v-50a5cf1e] {\n  text-align: right;\n  vertical-align: middle;\n  float: left;\n  font-size: 14px;\n  color: #606266;\n  line-height: 40px;\n  padding: 0 12px 0 0;\n  box-sizing: border-box;\n}\n.t-form-item .t-form-item_content[data-v-50a5cf1e] {\n  line-height: 40px;\n  position: relative;\n  font-size: 14px;\n  overflow: hidde;\n}\n\n/*# sourceMappingURL=Formitem.vue.map */", map: {"version":3,"sources":["E:\\st-vue-ui\\src\\FormItem\\Formitem.vue","Formitem.vue"],"names":[],"mappings":"AA6BA;EACA,mBAAA;AC5BA;AD6BA;EACA,iBAAA;EACA,sBAAA;EACA,WAAA;EACA,eAAA;EACA,cAAA;EACA,iBAAA;EACA,mBAAA;EACA,sBAAA;AC3BA;AD6BA;EACA,iBAAA;EACA,kBAAA;EACA,eAAA;EACA,eAAA;AC3BA;;AAEA,uCAAuC","file":"Formitem.vue","sourcesContent":["<template>\r\n    <div class=\"t-form-item\">\r\n        <label :style=\"labelStyle\" class=\"t-form-item_label\">{{label}}</label>\r\n        <div class=\"t-form-item_content\">\r\n            <slot></slot>\r\n        </div>\r\n    </div>\r\n</template>\r\n<script>\r\nexport default {\r\n    name: 'TFormItem',\r\n    props: {\r\n        label: {\r\n            type: String,\r\n            default: ''\r\n        }\r\n    },\r\n    inject: ['Form'],\r\n    computed: {\r\n        labelStyle () {\r\n            return {\r\n                width: this.Form.labelWidth\r\n            }\r\n        }\r\n    }\r\n}\r\n</script>\r\n\r\n<style lang=\"scss\" scoped>\r\n.t-form-item{\r\n    margin-bottom: 25px;\r\n    .t-form-item_label{\r\n        text-align: right;\r\n        vertical-align: middle;\r\n        float: left;\r\n        font-size: 14px;\r\n        color: #606266;\r\n        line-height: 40px;\r\n        padding: 0 12px 0 0;\r\n        box-sizing: border-box;\r\n    }\r\n    .t-form-item_content{\r\n        line-height: 40px;\r\n        position: relative;\r\n        font-size: 14px;\r\n        overflow: hidde;\r\n    }\r\n}\r\n</style>\r\n",".t-form-item {\n  margin-bottom: 25px;\n}\n.t-form-item .t-form-item_label {\n  text-align: right;\n  vertical-align: middle;\n  float: left;\n  font-size: 14px;\n  color: #606266;\n  line-height: 40px;\n  padding: 0 12px 0 0;\n  box-sizing: border-box;\n}\n.t-form-item .t-form-item_content {\n  line-height: 40px;\n  position: relative;\n  font-size: 14px;\n  overflow: hidde;\n}\n\n/*# sourceMappingURL=Formitem.vue.map */"]}, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__$5 = "data-v-50a5cf1e";
  /* module identifier */
  const __vue_module_identifier__$5 = undefined;
  /* functional template */
  const __vue_is_functional_template__$5 = false;
  /* style inject SSR */
  

  
  var TFormGroup = normalizeComponent_1(
    { render: __vue_render__$5, staticRenderFns: __vue_staticRenderFns__$5 },
    __vue_inject_styles__$5,
    __vue_script__$5,
    __vue_scope_id__$5,
    __vue_is_functional_template__$5,
    __vue_module_identifier__$5,
    browser,
    undefined
  );

//
//
//
//
//
//
//
//
//
//
//
//

var script$6 = {
    name: 'TInput',
    data () {
        return {
            pwdVisiable: false
        }
    },
    props: {
        type: {
            type: String,
            default: 'text'
        },
        placeholder: {
            type: String,
            default: ''
        },
        name: {
            type: String,
            default: ''
        },
        disabled: {
            type: Boolean,
            default: false
        },
        value: {
            type: String,
            default: ''
        },
        clearable: {
            type: Boolean,
            default: false
        },
        showPassword: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        showSuffix() {
            return this.clearable || this.showPassword
        }
    },
    methods: {
        handleInput(e) {
            this.$emit('input', e.target.value);
        },
        clearValue() {
            this.$emit('input', '');
        },
        showPwd() {
            this.pwdVisiable = !this.pwdVisiable;
        }
    }
};

/* script */
const __vue_script__$6 = script$6;

/* template */
var __vue_render__$6 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    { staticClass: "t-input", class: { "t-input_suffix": _vm.showSuffix } },
    [
      _c("input", {
        staticClass: "t-input_inner",
        class: { "is-disabled": _vm.disabled },
        attrs: {
          type: _vm.pwdVisiable ? "text" : _vm.type,
          placeholder: _vm.placeholder,
          name: _vm.name,
          disabled: _vm.disabled
        },
        domProps: { value: _vm.value },
        on: { input: _vm.handleInput }
      }),
      _vm._v(" "),
      _vm.showSuffix
        ? _c("span", { staticClass: "t-input_suffix" }, [
            _vm.clearable && _vm.value
              ? _c("i", {
                  staticClass: "t-icon-cuo",
                  on: { click: _vm.clearValue }
                })
              : _vm._e(),
            _vm._v(" "),
            _vm.showPassword
              ? _c("i", {
                  class: _vm.pwdVisiable
                    ? "t-icon-yanjing active"
                    : "t-icon-yanjing",
                  on: { click: _vm.showPwd }
                })
              : _vm._e()
          ])
        : _vm._e()
    ]
  )
};
var __vue_staticRenderFns__$6 = [];
__vue_render__$6._withStripped = true;

  /* style */
  const __vue_inject_styles__$6 = function (inject) {
    if (!inject) return
    inject("data-v-54d30831_0", { source: ".t-input[data-v-54d30831] {\n  width: 100%;\n  position: relative;\n  font-size: 14px;\n  display: inline-block;\n}\n.t-input .t-input_inner[data-v-54d30831] {\n  -webkit-appearance: none;\n  background-color: #fff;\n  background-image: none;\n  border: 1px solid #dcdfe6;\n  border-radius: 4px;\n  box-sizing: border-box;\n  color: #606266;\n  display: inline-block;\n  font-size: inherit;\n  height: 40px;\n  line-height: 40px;\n  outline: none;\n  padding: 0 15px;\n  transition: border-color 0.2s cubic-bezier(0.645, 45, 0.355, 1);\n  width: 100%;\n}\n.t-input .t-input_inner[data-v-54d30831]:focus {\n  outline: none;\n  border-color: #409eff;\n}\n.t-input .t-input_inner[data-v-54d30831]::placeholder {\n  color: #ccc;\n}\n.t-input .t-input_inner.is-disabled[data-v-54d30831] {\n  background-color: #f5f7fa;\n  border-color: #e4e7ed;\n  color: #c0c4cc;\n  cursor: not-allowed;\n}\n.t-input_suffix .t-input_inner[data-v-54d30831] {\n  padding-right: 30px;\n}\n.t-input_suffix .t-input_suffix[data-v-54d30831] {\n  position: absolute;\n  right: 10px;\n  height: 100%;\n  top: 0;\n  line-height: 40px;\n  text-align: center;\n  color: #c0c4cc;\n  transition: all 0.3s;\n  z-index: 900;\n}\n.t-input_suffix .t-input_suffix i[data-v-54d30831] {\n  color: #c0c4cc;\n  font-size: 18px;\n  cursor: pointer;\n  transition: color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);\n}\n.t-input_suffix .t-input_suffix i.active[data-v-54d30831] {\n  color: blue;\n}\n\n/*# sourceMappingURL=Input.vue.map */", map: {"version":3,"sources":["E:\\st-vue-ui\\src\\Input\\Input.vue","Input.vue"],"names":[],"mappings":"AAqEA;EACA,WAAA;EACA,kBAAA;EACA,eAAA;EACA,qBAAA;ACpEA;ADqEA;EACA,wBAAA;EACA,sBAAA;EACA,sBAAA;EACA,yBAAA;EACA,kBAAA;EACA,sBAAA;EACA,cAAA;EACA,qBAAA;EACA,kBAAA;EACA,YAAA;EACA,iBAAA;EACA,aAAA;EACA,eAAA;EACA,+DAAA;EACA,WAAA;ACnEA;ADoEA;EACA,aAAA;EACA,qBAAA;AClEA;ADoEA;EACA,WAAA;AClEA;ADqEA;EACA,yBAAA;EACA,qBAAA;EACA,cAAA;EACA,mBAAA;ACnEA;ADyEA;EACA,mBAAA;ACtEA;ADwEA;EACA,kBAAA;EACA,WAAA;EACA,YAAA;EACA,MAAA;EACA,iBAAA;EACA,kBAAA;EACA,cAAA;EACA,oBAAA;EACA,YAAA;ACtEA;ADuEA;EACA,cAAA;EACA,eAAA;EACA,eAAA;EACA,2DAAA;ACrEA;ADsEA;EACA,WAAA;ACpEA;;AAEA,oCAAoC","file":"Input.vue","sourcesContent":["<template>\r\n    <div class=\"t-input\" :class=\"{'t-input_suffix': showSuffix}\">\r\n        <input class=\"t-input_inner\" :class=\"{'is-disabled': disabled}\"\r\n        :type=\"pwdVisiable ? 'text' : type\" :placeholder=\"placeholder\" :name=\"name\"\r\n        :disabled=\"disabled\" :value=\"value\" @input=\"handleInput\">\r\n        <span class=\"t-input_suffix\" v-if=\"showSuffix\">\r\n            <i class=\"t-icon-cuo\" v-if=\"clearable && value\" @click=\"clearValue\"></i>\r\n            <i :class=\" pwdVisiable ? 't-icon-yanjing active' : 't-icon-yanjing'\" v-if=\"showPassword\" @click=\"showPwd\"></i>\r\n        </span>\r\n    </div>\r\n</template>\r\n\r\n<script>\r\nexport default {\r\n    name: 'TInput',\r\n    data () {\r\n        return {\r\n            pwdVisiable: false\r\n        }\r\n    },\r\n    props: {\r\n        type: {\r\n            type: String,\r\n            default: 'text'\r\n        },\r\n        placeholder: {\r\n            type: String,\r\n            default: ''\r\n        },\r\n        name: {\r\n            type: String,\r\n            default: ''\r\n        },\r\n        disabled: {\r\n            type: Boolean,\r\n            default: false\r\n        },\r\n        value: {\r\n            type: String,\r\n            default: ''\r\n        },\r\n        clearable: {\r\n            type: Boolean,\r\n            default: false\r\n        },\r\n        showPassword: {\r\n            type: Boolean,\r\n            default: false\r\n        }\r\n    },\r\n    computed: {\r\n        showSuffix() {\r\n            return this.clearable || this.showPassword\r\n        }\r\n    },\r\n    methods: {\r\n        handleInput(e) {\r\n            this.$emit('input', e.target.value)\r\n        },\r\n        clearValue() {\r\n            this.$emit('input', '')\r\n        },\r\n        showPwd() {\r\n            this.pwdVisiable = !this.pwdVisiable\r\n        }\r\n    }\r\n}\r\n</script>\r\n<style lang=\"scss\" scoped>\r\n.t-input {\r\n    width: 100%;\r\n    position: relative;\r\n    font-size: 14px;\r\n    display: inline-block;\r\n    .t-input_inner {\r\n        -webkit-appearance: none;\r\n        background-color: #fff;\r\n        background-image: none;\r\n        border: 1px solid #dcdfe6;\r\n        border-radius: 4px;\r\n        box-sizing: border-box;\r\n        color: #606266;\r\n        display: inline-block;\r\n        font-size: inherit;\r\n        height: 40px;\r\n        line-height: 40px;\r\n        outline: none;\r\n        padding: 0 15px;\r\n        transition: border-color .2s cubic-bezier(.645,045,.355,1);\r\n        width: 100%;\r\n        &:focus {\r\n            outline: none;\r\n            border-color: #409eff;\r\n        }\r\n        &::placeholder {\r\n            color: #ccc;\r\n        }\r\n        // input禁用样式\r\n        &.is-disabled {\r\n            background-color: #f5f7fa;\r\n            border-color: #e4e7ed;\r\n            color: #c0c4cc;\r\n            cursor:not-allowed;\r\n        }\r\n    }\r\n}\r\n// 后面加suffix的意思是后面如果有后缀的话，触发该样式\r\n.t-input_suffix {\r\n    .t-input_inner {\r\n        padding-right: 30px;\r\n    }\r\n    .t-input_suffix {\r\n        position: absolute;\r\n        right: 10px;\r\n        height: 100%;\r\n        top: 0;\r\n        line-height: 40px;\r\n        text-align: center;\r\n        color: #c0c4cc;\r\n        transition: all .3s;\r\n        z-index: 900;\r\n        i {\r\n            color: #c0c4cc;\r\n            font-size: 18px;\r\n            cursor: pointer;\r\n            transition: color .2s cubic-bezier(.645,.045,.355,1);\r\n            &.active {\r\n                color: blue;\r\n            }\r\n        }\r\n    }\r\n}\r\n</style>\r\n",".t-input {\n  width: 100%;\n  position: relative;\n  font-size: 14px;\n  display: inline-block;\n}\n.t-input .t-input_inner {\n  -webkit-appearance: none;\n  background-color: #fff;\n  background-image: none;\n  border: 1px solid #dcdfe6;\n  border-radius: 4px;\n  box-sizing: border-box;\n  color: #606266;\n  display: inline-block;\n  font-size: inherit;\n  height: 40px;\n  line-height: 40px;\n  outline: none;\n  padding: 0 15px;\n  transition: border-color 0.2s cubic-bezier(0.645, 45, 0.355, 1);\n  width: 100%;\n}\n.t-input .t-input_inner:focus {\n  outline: none;\n  border-color: #409eff;\n}\n.t-input .t-input_inner::placeholder {\n  color: #ccc;\n}\n.t-input .t-input_inner.is-disabled {\n  background-color: #f5f7fa;\n  border-color: #e4e7ed;\n  color: #c0c4cc;\n  cursor: not-allowed;\n}\n\n.t-input_suffix .t-input_inner {\n  padding-right: 30px;\n}\n.t-input_suffix .t-input_suffix {\n  position: absolute;\n  right: 10px;\n  height: 100%;\n  top: 0;\n  line-height: 40px;\n  text-align: center;\n  color: #c0c4cc;\n  transition: all 0.3s;\n  z-index: 900;\n}\n.t-input_suffix .t-input_suffix i {\n  color: #c0c4cc;\n  font-size: 18px;\n  cursor: pointer;\n  transition: color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);\n}\n.t-input_suffix .t-input_suffix i.active {\n  color: blue;\n}\n\n/*# sourceMappingURL=Input.vue.map */"]}, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__$6 = "data-v-54d30831";
  /* module identifier */
  const __vue_module_identifier__$6 = undefined;
  /* functional template */
  const __vue_is_functional_template__$6 = false;
  /* style inject SSR */
  

  
  var TIput = normalizeComponent_1(
    { render: __vue_render__$6, staticRenderFns: __vue_staticRenderFns__$6 },
    __vue_inject_styles__$6,
    __vue_script__$6,
    __vue_scope_id__$6,
    __vue_is_functional_template__$6,
    __vue_module_identifier__$6,
    browser,
    undefined
  );

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var script$7 = {
    name: 'TRadio',
    inject: {
        radioGroup: {
            default: ''
        }
    },

    props: {
        value: {
            type: String,
            default: ''
        },
        label: {
            type: [String, Number, Boolean],
            default: ''
        },
        name: {
            type: String,
            default: ''
        }
    },
    computed: {
        model: {
            get() {
                return this.isGroup ? this.radioGroup.$attrs.value : this.value
            },
            set(value) {
                this.isGroup ? this.radioGroup.$emit('input', value) : this.$emit('input', value);
            }
        },
        // 判断radio是否被radiogroup包裹
        isGroup() {
            return !!this.radioGroup // 返回一个boolean
        }
    }
};

/* script */
const __vue_script__$7 = script$7;

/* template */
var __vue_render__$7 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "label",
    {
      staticClass: "t-radio",
      class: { "is-checked": _vm.label === _vm.model }
    },
    [
      _c("span", { staticClass: "t-radio_input" }, [
        _c("span", { staticClass: "t-radio_inner" }),
        _vm._v(" "),
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.model,
              expression: "model"
            }
          ],
          staticClass: "t-radio_original",
          attrs: { type: "radio", name: _vm.name },
          domProps: { value: _vm.label, checked: _vm._q(_vm.model, _vm.label) },
          on: {
            change: function($event) {
              _vm.model = _vm.label;
            }
          }
        })
      ]),
      _vm._v(" "),
      _c(
        "span",
        { staticClass: "t-radio_label" },
        [
          _vm._t("default"),
          _vm._v(" "),
          !_vm.$slots.default
            ? [_vm._v("\n            " + _vm._s(_vm.label) + "\n        ")]
            : _vm._e()
        ],
        2
      )
    ]
  )
};
var __vue_staticRenderFns__$7 = [];
__vue_render__$7._withStripped = true;

  /* style */
  const __vue_inject_styles__$7 = function (inject) {
    if (!inject) return
    inject("data-v-8309f3f8_0", { source: ".t-radio[data-v-8309f3f8] {\n  color: #606266;\n  font-weight: 500;\n  line-height: 1;\n  position: relative;\n  cursor: pointer;\n  display: inline-block;\n  white-space: nowrap;\n  outline: none;\n  font-size: 14px;\n  margin-right: 30px;\n  -moz-user-select: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n}\n.t-radio .t-radio_input[data-v-8309f3f8] {\n  white-space: nowrap;\n  cursor: pointer;\n  outline: none;\n  display: inline-block;\n  line-height: 1;\n  position: relative;\n  vertical-align: middle;\n}\n.t-radio .t-radio_input .t-radio_inner[data-v-8309f3f8] {\n  border: 1px solid #dcdfe6;\n  border-radius: 100%;\n  width: 14px;\n  height: 14px;\n  background-color: #fff;\n  position: relative;\n  cursor: pointer;\n  display: inline-block;\n  box-sizing: border-box;\n}\n.t-radio .t-radio_input .t-radio_inner[data-v-8309f3f8]:after {\n  width: 4px;\n  height: 4px;\n  border-radius: 100%;\n  background-color: #fff;\n  content: \"\";\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%) scale(0);\n  transition: transform 0.15s ease-in;\n}\n.t-radio .t-radio_input .t-radio_original[data-v-8309f3f8] {\n  opacity: 0;\n  outline: none;\n  position: absolute;\n  z-index: -1;\n  top: 0;\n  left: 0px;\n  right: 0;\n  bottom: 0;\n  margin: 0;\n}\n.t-radio .t-radio_label[data-v-8309f3f8] {\n  font-size: 14px;\n  padding-left: 10px;\n}\n.t-radio.is-checked .t-radio_input .t-radio_inner[data-v-8309f3f8] {\n  border-color: #409eff;\n  background-color: #409eff;\n}\n.t-radio.is-checked .t-radio_input .t-radio_inner[data-v-8309f3f8]:after {\n  transform: translate(-50%, -50%) scale(1);\n}\n.t-radio.is-checked .t-radio_label[data-v-8309f3f8] {\n  color: #409eff;\n}\n\n/*# sourceMappingURL=Radio.vue.map */", map: {"version":3,"sources":["E:\\st-vue-ui\\src\\Radio\\Radio.vue","Radio.vue"],"names":[],"mappings":"AA6DA;EACA,cAAA;EACA,gBAAA;EACA,cAAA;EACA,kBAAA;EACA,eAAA;EACA,qBAAA;EACA,mBAAA;EACA,aAAA;EACA,eAAA;EACA,kBAAA;EACA,sBAAA;EACA,yBAAA;EACA,sBAAA;AC5DA;AD6DA;EACA,mBAAA;EACA,eAAA;EACA,aAAA;EACA,qBAAA;EACA,cAAA;EACA,kBAAA;EACA,sBAAA;AC3DA;AD4DA;EACA,yBAAA;EACA,mBAAA;EACA,WAAA;EACA,YAAA;EACA,sBAAA;EACA,kBAAA;EACA,eAAA;EACA,qBAAA;EACA,sBAAA;AC1DA;AD2DA;EACA,UAAA;EACA,WAAA;EACA,mBAAA;EACA,sBAAA;EACA,WAAA;EACA,kBAAA;EACA,SAAA;EACA,QAAA;EACA,yCAAA;EACA,mCAAA;ACzDA;AD4DA;EACA,UAAA;EACA,aAAA;EACA,kBAAA;EACA,WAAA;EACA,MAAA;EACA,SAAA;EACA,QAAA;EACA,SAAA;EACA,SAAA;AC1DA;AD6DA;EACA,eAAA;EACA,kBAAA;AC3DA;ADiEA;EACA,qBAAA;EACA,yBAAA;AC9DA;AD+DA;EACA,yCAAA;AC7DA;ADiEA;EACA,cAAA;AC/DA;;AAEA,oCAAoC","file":"Radio.vue","sourcesContent":["<template>\r\n    <label class=\"t-radio\" :class=\"{'is-checked': label === model}\">\r\n        <span class=\"t-radio_input\">\r\n             <span class=\"t-radio_inner\"></span>\r\n        <input\r\n            type=\"radio\"\r\n            class=\"t-radio_original\"\r\n            :value=\"label\"\r\n            :name=\"name\"\r\n            v-model=\"model\"\r\n        >\r\n        </span>\r\n        <span class=\"t-radio_label\">\r\n            <slot></slot>\r\n            <template v-if=\"!$slots.default\">\r\n                {{label}}\r\n            </template>\r\n        </span>\r\n    </label>\r\n</template>\r\n<script>\r\nexport default {\r\n    name: 'TRadio',\r\n    inject: {\r\n        radioGroup: {\r\n            default: ''\r\n        }\r\n    },\r\n\r\n    props: {\r\n        value: {\r\n            type: String,\r\n            default: ''\r\n        },\r\n        label: {\r\n            type: [String, Number, Boolean],\r\n            default: ''\r\n        },\r\n        name: {\r\n            type: String,\r\n            default: ''\r\n        }\r\n    },\r\n    computed: {\r\n        model: {\r\n            get() {\r\n                return this.isGroup ? this.radioGroup.$attrs.value : this.value\r\n            },\r\n            set(value) {\r\n                this.isGroup ? this.radioGroup.$emit('input', value) : this.$emit('input', value)\r\n            }\r\n        },\r\n        // 判断radio是否被radiogroup包裹\r\n        isGroup() {\r\n            return !!this.radioGroup // 返回一个boolean\r\n        }\r\n    }\r\n}\r\n</script>\r\n\r\n<style lang=\"scss\" scoped>\r\n.t-radio{\r\n    color: #606266;\r\n    font-weight: 500;\r\n    line-height: 1;\r\n    position: relative;\r\n    cursor: pointer;\r\n    display: inline-block;\r\n    white-space: nowrap;\r\n    outline: none;\r\n    font-size: 14px;\r\n    margin-right: 30px;\r\n    -moz-user-select: none;\r\n    -webkit-user-select: none;\r\n    -moz-user-select: none;\r\n    .t-radio_input{\r\n        white-space: nowrap;\r\n        cursor: pointer;\r\n        outline: none;\r\n        display: inline-block;\r\n        line-height: 1;\r\n        position: relative;\r\n        vertical-align: middle;\r\n        .t-radio_inner{\r\n            border: 1px solid #dcdfe6;\r\n            border-radius: 100%;\r\n            width: 14px;\r\n            height: 14px;\r\n            background-color: #fff;\r\n            position: relative;\r\n            cursor: pointer;\r\n            display: inline-block;\r\n            box-sizing: border-box;\r\n            &:after{\r\n                width: 4px;\r\n                height: 4px;\r\n                border-radius: 100%;\r\n                background-color: #fff;\r\n                content: \"\";\r\n                position: absolute;\r\n                left: 50%;\r\n                top: 50%;\r\n                transform: translate(-50%,-50%) scale(0);\r\n                transition: transform .15s ease-in;\r\n            }\r\n        }\r\n        .t-radio_original{\r\n            opacity: 0;\r\n            outline: none;\r\n            position: absolute;\r\n            z-index: -1;\r\n            top: 0;\r\n            left: 0px;\r\n            right: 0;\r\n            bottom: 0;\r\n            margin: 0;\r\n        }\r\n    }\r\n    .t-radio_label{\r\n        font-size: 14px;\r\n        padding-left: 10px;;\r\n    }\r\n}\r\n  // 选中的样式\r\n.t-radio.is-checked{\r\n    .t-radio_input{\r\n      .t-radio_inner{\r\n        border-color: #409eff;\r\n        background-color: #409eff;\r\n        &:after{\r\n          transform: translate(-50%,-50%) scale(1);\r\n        }\r\n      }\r\n    }\r\n    .t-radio_label{\r\n        color:#409eff;\r\n    }\r\n}\r\n</style>\r\n",".t-radio {\n  color: #606266;\n  font-weight: 500;\n  line-height: 1;\n  position: relative;\n  cursor: pointer;\n  display: inline-block;\n  white-space: nowrap;\n  outline: none;\n  font-size: 14px;\n  margin-right: 30px;\n  -moz-user-select: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n}\n.t-radio .t-radio_input {\n  white-space: nowrap;\n  cursor: pointer;\n  outline: none;\n  display: inline-block;\n  line-height: 1;\n  position: relative;\n  vertical-align: middle;\n}\n.t-radio .t-radio_input .t-radio_inner {\n  border: 1px solid #dcdfe6;\n  border-radius: 100%;\n  width: 14px;\n  height: 14px;\n  background-color: #fff;\n  position: relative;\n  cursor: pointer;\n  display: inline-block;\n  box-sizing: border-box;\n}\n.t-radio .t-radio_input .t-radio_inner:after {\n  width: 4px;\n  height: 4px;\n  border-radius: 100%;\n  background-color: #fff;\n  content: \"\";\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%) scale(0);\n  transition: transform 0.15s ease-in;\n}\n.t-radio .t-radio_input .t-radio_original {\n  opacity: 0;\n  outline: none;\n  position: absolute;\n  z-index: -1;\n  top: 0;\n  left: 0px;\n  right: 0;\n  bottom: 0;\n  margin: 0;\n}\n.t-radio .t-radio_label {\n  font-size: 14px;\n  padding-left: 10px;\n}\n\n.t-radio.is-checked .t-radio_input .t-radio_inner {\n  border-color: #409eff;\n  background-color: #409eff;\n}\n.t-radio.is-checked .t-radio_input .t-radio_inner:after {\n  transform: translate(-50%, -50%) scale(1);\n}\n.t-radio.is-checked .t-radio_label {\n  color: #409eff;\n}\n\n/*# sourceMappingURL=Radio.vue.map */"]}, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__$7 = "data-v-8309f3f8";
  /* module identifier */
  const __vue_module_identifier__$7 = undefined;
  /* functional template */
  const __vue_is_functional_template__$7 = false;
  /* style inject SSR */
  

  
  var TRadio = normalizeComponent_1(
    { render: __vue_render__$7, staticRenderFns: __vue_staticRenderFns__$7 },
    __vue_inject_styles__$7,
    __vue_script__$7,
    __vue_scope_id__$7,
    __vue_is_functional_template__$7,
    __vue_module_identifier__$7,
    browser,
    undefined
  );

//
//
//
//
//
//

var script$8 = {
    name: 'TRadioGroup',
    provide() {
        return {
            radioGroup: this
        }
    },
    props: {
        value: null
    }
};

/* script */
const __vue_script__$8 = script$8;

/* template */
var __vue_render__$8 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { staticClass: "t-radio_group" }, [_vm._t("default")], 2)
};
var __vue_staticRenderFns__$8 = [];
__vue_render__$8._withStripped = true;

  /* style */
  const __vue_inject_styles__$8 = undefined;
  /* scoped */
  const __vue_scope_id__$8 = undefined;
  /* module identifier */
  const __vue_module_identifier__$8 = undefined;
  /* functional template */
  const __vue_is_functional_template__$8 = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var TRadioGroup = normalizeComponent_1(
    { render: __vue_render__$8, staticRenderFns: __vue_staticRenderFns__$8 },
    __vue_inject_styles__$8,
    __vue_script__$8,
    __vue_scope_id__$8,
    __vue_is_functional_template__$8,
    __vue_module_identifier__$8,
    undefined,
    undefined
  );

//
//
//
//
//
//
//
//
//
//
//

var script$9 = {
    name: 'TSwitch',
    data() {
        return {
            color: ''
        }
    },
    props: {
        value: {
            type: Boolean,
            default: false
        },
        activeColor: {
            type: String,
            default: ''
        },
        inactiveColor: {
            type: String,
            default: ''
        },
        name: {
            type: String,
            default: ''
        }
    },
    mounted() {
        this.setColor();
        // 同步checkBox状态
        this.$refs.input.checked = this.value;
    },
    methods: {
        async handleChange() {
            this.$emit('input', !this.value);
            await this.$nextTick();
            this.setColor();
            this.$refs.input.checked = this.value;
        },
        setColor() {
            if (this.activeColor || this.inactiveColor) {
                this.color = this.value ? this.activeColor : this.inactiveColor;
                this.$refs.core.style.borderColor = this.color;
                this.$refs.core.style.backgroundColor = this.color;
            }
        }
    }
};

/* script */
const __vue_script__$9 = script$9;

/* template */
var __vue_render__$9 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    {
      staticClass: "t-switch",
      class: { "is-checked": _vm.value },
      on: { click: _vm.handleChange }
    },
    [
      _c("input", {
        ref: "input",
        staticClass: "t-switch_input",
        attrs: { type: "checkbox", name: _vm.name }
      }),
      _vm._v(" "),
      _c("span", { ref: "core", staticClass: "t-switch_core" }, [
        _c("span", { staticClass: "t-switch_button" })
      ])
    ]
  )
};
var __vue_staticRenderFns__$9 = [];
__vue_render__$9._withStripped = true;

  /* style */
  const __vue_inject_styles__$9 = function (inject) {
    if (!inject) return
    inject("data-v-0882be16_0", { source: ".t-switch[data-v-0882be16] {\n  display: inline-block;\n  align-items: center;\n  position: relative;\n  font-size: 14px;\n  line-height: 20px;\n  vertical-align: middle;\n}\n.t-switch .t-switch_core[data-v-0882be16] {\n  margin: 0;\n  display: inline-block;\n  position: relative;\n  width: 40px;\n  height: 20px;\n  border: 1px solid #dcdfe6;\n  outline: none;\n  border-radius: 10px;\n  box-sizing: border-box;\n  background: #dcdfe6;\n  cursor: pointer;\n  transition: border-color 0.3s, background-color 0.3s;\n  vertical-align: middle;\n}\n.t-switch .t-switch_core .t-switch_button[data-v-0882be16] {\n  position: absolute;\n  top: 1px;\n  left: 1px;\n  border-radius: 100%;\n  transition: all 0.3s;\n  width: 16px;\n  height: 16px;\n  background-color: #fff;\n}\n.is-checked .t-switch_core[data-v-0882be16] {\n  border-color: #409eff;\n  background-color: #409eff;\n}\n.is-checked .t-switch_core .t-switch_button[data-v-0882be16] {\n  transform: translateX(20px);\n}\n.t-switch_input[data-v-0882be16] {\n  position: absolute;\n  width: 0;\n  height: 0;\n  opacity: 0;\n  margin: 0;\n}\n\n/*# sourceMappingURL=Switch.vue.map */", map: {"version":3,"sources":["E:\\st-vue-ui\\src\\Switch\\Switch.vue","Switch.vue"],"names":[],"mappings":"AA6DA;EACA,qBAAA;EACA,mBAAA;EACA,kBAAA;EACA,eAAA;EACA,iBAAA;EACA,sBAAA;AC5DA;AD6DA;EACA,SAAA;EACA,qBAAA;EACA,kBAAA;EACA,WAAA;EACA,YAAA;EACA,yBAAA;EACA,aAAA;EACA,mBAAA;EACA,sBAAA;EACA,mBAAA;EACA,eAAA;EACA,oDAAA;EACA,sBAAA;AC3DA;AD4DA;EACA,kBAAA;EACA,QAAA;EACA,SAAA;EACA,mBAAA;EACA,oBAAA;EACA,WAAA;EACA,YAAA;EACA,sBAAA;AC1DA;ADgEA;EACA,qBAAA;EACA,yBAAA;AC7DA;AD8DA;EACA,2BAAA;AC5DA;ADiEA;EACA,kBAAA;EACA,QAAA;EACA,SAAA;EACA,UAAA;EACA,SAAA;AC9DA;;AAEA,qCAAqC","file":"Switch.vue","sourcesContent":["<template>\r\n    <div class=\"t-switch\" :class=\"{'is-checked': value}\" @click=\"handleChange\">\r\n         <input type=\"checkbox\" class=\"t-switch_input\" :name=\"name\" ref=\"input\">\r\n        <span\r\n            class=\"t-switch_core\"\r\n            ref=\"core\"\r\n        >\r\n            <span class=\"t-switch_button\"></span>\r\n        </span>\r\n    </div>\r\n</template>\r\n<script>\r\nexport default {\r\n    name: 'TSwitch',\r\n    data() {\r\n        return {\r\n            color: ''\r\n        }\r\n    },\r\n    props: {\r\n        value: {\r\n            type: Boolean,\r\n            default: false\r\n        },\r\n        activeColor: {\r\n            type: String,\r\n            default: ''\r\n        },\r\n        inactiveColor: {\r\n            type: String,\r\n            default: ''\r\n        },\r\n        name: {\r\n            type: String,\r\n            default: ''\r\n        }\r\n    },\r\n    mounted() {\r\n        this.setColor()\r\n        // 同步checkBox状态\r\n        this.$refs.input.checked = this.value\r\n    },\r\n    methods: {\r\n        async handleChange() {\r\n            this.$emit('input', !this.value)\r\n            await this.$nextTick()\r\n            this.setColor()\r\n            this.$refs.input.checked = this.value\r\n        },\r\n        setColor() {\r\n            if (this.activeColor || this.inactiveColor) {\r\n                this.color = this.value ? this.activeColor : this.inactiveColor\r\n                this.$refs.core.style.borderColor = this.color\r\n                this.$refs.core.style.backgroundColor = this.color\r\n            }\r\n        }\r\n    }\r\n}\r\n</script>\r\n\r\n<style lang=\"scss\" scoped>\r\n.t-switch {\r\n    display: inline-block;\r\n    align-items: center;\r\n    position: relative;\r\n    font-size: 14px;\r\n    line-height: 20px;\r\n    vertical-align: middle;\r\n    .t-switch_core {\r\n        margin: 0;\r\n        display: inline-block;\r\n        position: relative;\r\n        width: 40px;\r\n        height: 20px;\r\n        border: 1px solid #dcdfe6;\r\n        outline: none;\r\n        border-radius: 10px;\r\n        box-sizing: border-box;\r\n        background: #dcdfe6;\r\n        cursor: pointer;\r\n        transition: border-color 0.3s, background-color 0.3s;\r\n        vertical-align: middle;\r\n        .t-switch_button {\r\n            position: absolute;\r\n            top: 1px;\r\n            left: 1px;\r\n            border-radius: 100%;\r\n            transition: all 0.3s;\r\n            width: 16px;\r\n            height: 16px;\r\n            background-color: #fff;\r\n        }\r\n    }\r\n}\r\n// 选中样式\r\n.is-checked {\r\n    .t-switch_core {\r\n        border-color: #409eff;\r\n        background-color: #409eff;\r\n        .t-switch_button {\r\n            transform: translateX(20px);\r\n        }\r\n    }\r\n}\r\n// 隐藏input标签\r\n.t-switch_input {\r\n    position: absolute;\r\n    width: 0;\r\n    height: 0;\r\n    opacity: 0;\r\n    margin: 0;\r\n}\r\n</style>\r\n",".t-switch {\n  display: inline-block;\n  align-items: center;\n  position: relative;\n  font-size: 14px;\n  line-height: 20px;\n  vertical-align: middle;\n}\n.t-switch .t-switch_core {\n  margin: 0;\n  display: inline-block;\n  position: relative;\n  width: 40px;\n  height: 20px;\n  border: 1px solid #dcdfe6;\n  outline: none;\n  border-radius: 10px;\n  box-sizing: border-box;\n  background: #dcdfe6;\n  cursor: pointer;\n  transition: border-color 0.3s, background-color 0.3s;\n  vertical-align: middle;\n}\n.t-switch .t-switch_core .t-switch_button {\n  position: absolute;\n  top: 1px;\n  left: 1px;\n  border-radius: 100%;\n  transition: all 0.3s;\n  width: 16px;\n  height: 16px;\n  background-color: #fff;\n}\n\n.is-checked .t-switch_core {\n  border-color: #409eff;\n  background-color: #409eff;\n}\n.is-checked .t-switch_core .t-switch_button {\n  transform: translateX(20px);\n}\n\n.t-switch_input {\n  position: absolute;\n  width: 0;\n  height: 0;\n  opacity: 0;\n  margin: 0;\n}\n\n/*# sourceMappingURL=Switch.vue.map */"]}, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__$9 = "data-v-0882be16";
  /* module identifier */
  const __vue_module_identifier__$9 = undefined;
  /* functional template */
  const __vue_is_functional_template__$9 = false;
  /* style inject SSR */
  

  
  var TSwitch = normalizeComponent_1(
    { render: __vue_render__$9, staticRenderFns: __vue_staticRenderFns__$9 },
    __vue_inject_styles__$9,
    __vue_script__$9,
    __vue_scope_id__$9,
    __vue_is_functional_template__$9,
    __vue_module_identifier__$9,
    browser,
    undefined
  );

// 引入组件

const components = [
    TButton,
    TCheckBox,
    TCheckBoxGroup,
    TDialog,
    TForm,
    TFormGroup,
    TIput,
    TRadio,
    TRadioGroup,
    TSwitch
];

const install = function (Vue) {
    if (install.installed) return
    // 遍历注册全局组件
    components.forEach(component => {
        Vue.component(component.name, component);
    });
};

// 用于script标签引入
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}


var index = {
    install,
    TButton,
    TCheckBox,
    TCheckBoxGroup,
    TDialog,
    TForm,
    TFormGroup,
    TIput,
    TRadio,
    TRadioGroup,
    TSwitch
};

module.exports = index;
