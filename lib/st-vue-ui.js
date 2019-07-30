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

var script = {
  name: 'tom-button',
  props: {
    type: {
      type: String,
      default: 'default',
      validator(type) {
        return ['default', 'primary', 'info', 'warning', 'danger'].includes(
          type
        )
      }
    },
    size: {
      type: String,
      default: 'medium',
      validator(size) {
        return ['medium', 'small', 'mini'].includes(size)
      }
    },
    round: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      defalut: false
    }
  },
  methods: {
    onClick(event) {
      this.$emit('click', event);
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
    "button",
    {
      class:
        "tom-button tom-button-" +
        _vm.type +
        " tom-button-" +
        _vm.size +
        " \n    " +
        (_vm.round ? "tom-button-round" : "") +
        " " +
        (_vm.disabled ? "is-disabled" : ""),
      attrs: { disabled: _vm.disabled },
      on: { click: _vm.onClick }
    },
    [_vm._t("default")],
    2
  )
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;

  /* style */
  const __vue_inject_styles__ = function (inject) {
    if (!inject) return
    inject("data-v-ec69655c_0", { source: "\n.tom-button[data-v-ec69655c] {\n  display: inline-block;\n  outline: 0;\n  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  user-select: none;\n  cursor: pointer;\n  line-height: 1;\n  white-space: nowrap;\n  background-color: #fff;\n  border: 1px solid #dcdfe6;\n  color: #606266;\n  -webkit-appearance: none;\n  text-align: center;\n  box-sizing: border-box;\n  outline: none;\n  margin: 0;\n  transition: 0.1s;\n  font-weight: 500;\n  padding: 12px 20px;\n  font-size: 14px;\n  border-radius: 4px;\n}\n.tom-button.is-disabled[data-v-ec69655c] {\n  color: #c0c4cc;\n  cursor: not-allowed;\n  background-image: none;\n  background-color: #fff;\n  border-color: #ebeef5;\n}\n\n/*颜色*/\n.tom-button-primary[data-v-ec69655c] {\n  color: #fff;\n  background-color: #409eff;\n  border-color: #409eff;\n}\n.tom-button-primary.is-disabled[data-v-ec69655c] {\n  color: #fff;\n  background-color: #a0cfff;\n  border-color: #a0cfff;\n}\n.tom-button-success[data-v-ec69655c] {\n  color: #fff;\n  background-color: #67c23a;\n  border-color: #67c23a;\n}\n.tom-button-success.is-disabled[data-v-ec69655c] {\n  color: #fff;\n  background-color: #b3e19d;\n  border-color: #b3e19d;\n}\n.tom-button-info[data-v-ec69655c] {\n  color: #fff;\n  background-color: #c8c9cc;\n  border-color: #c8c9cc;\n}\n.tom-button-info.is-disabled[data-v-ec69655c] {\n  color: #fff;\n  background-color: #c8c9cc;\n  border-color: #c8c9cc;\n}\n.tom-button-warning[data-v-ec69655c] {\n  color: #fff;\n  background-color: #e6a23c;\n  border-color: #e6a23c;\n}\n.tom-button-warning.is-disabled[data-v-ec69655c] {\n  color: #fff;\n  background-color: #f3d19e;\n  border-color: #f3d19e;\n}\n.tom-button-danger[data-v-ec69655c] {\n  color: #fff;\n  background-color: #f56c6c;\n  border-color: #f56c6c;\n}\n.tom-button-danger.is-disabled[data-v-ec69655c] {\n  color: #fff;\n  background-color: #fab6b6;\n  border-color: #fab6b6;\n}\n\n/*大小*/\n.tom-button-medium[data-v-ec69655c] {\n  padding: 10px 20px;\n  font-size: 14px;\n  border-radius: 4px;\n}\n.tom-button-small[data-v-ec69655c] {\n  padding: 9px 15px;\n  font-size: 12px;\n  border-radius: 3px;\n}\n.tom-button-mini[data-v-ec69655c] {\n  padding: 7px 15px;\n  font-size: 12px;\n  border-radius: 3px;\n}\n\n/*是否圆角*/\n.tom-button-round[data-v-ec69655c] {\n  border-radius: 20px;\n}\n", map: {"version":3,"sources":["D:\\tom-vueui\\src\\Button\\Button.vue"],"names":[],"mappings":";AAgDA;EACA,qBAAA;EACA,UAAA;EACA,2DAAA;EACA,iBAAA;EACA,eAAA;EACA,cAAA;EACA,mBAAA;EACA,sBAAA;EACA,yBAAA;EACA,cAAA;EACA,wBAAA;EACA,kBAAA;EACA,sBAAA;EACA,aAAA;EACA,SAAA;EACA,gBAAA;EACA,gBAAA;EACA,kBAAA;EACA,eAAA;EACA,kBAAA;AACA;AAEA;EACA,cAAA;EACA,mBAAA;EACA,sBAAA;EACA,sBAAA;EACA,qBAAA;AACA;;AAEA,KAAA;AAEA;EACA,WAAA;EACA,yBAAA;EACA,qBAAA;AACA;AAEA;EACA,WAAA;EACA,yBAAA;EACA,qBAAA;AACA;AAEA;EACA,WAAA;EACA,yBAAA;EACA,qBAAA;AACA;AAEA;EACA,WAAA;EACA,yBAAA;EACA,qBAAA;AACA;AAEA;EACA,WAAA;EACA,yBAAA;EACA,qBAAA;AACA;AAEA;EACA,WAAA;EACA,yBAAA;EACA,qBAAA;AACA;AAEA;EACA,WAAA;EACA,yBAAA;EACA,qBAAA;AACA;AAEA;EACA,WAAA;EACA,yBAAA;EACA,qBAAA;AACA;AAEA;EACA,WAAA;EACA,yBAAA;EACA,qBAAA;AACA;AACA;EACA,WAAA;EACA,yBAAA;EACA,qBAAA;AACA;;AAEA,KAAA;AACA;EACA,kBAAA;EACA,eAAA;EACA,kBAAA;AACA;AAEA;EACA,iBAAA;EACA,eAAA;EACA,kBAAA;AACA;AAEA;EACA,iBAAA;EACA,eAAA;EACA,kBAAA;AACA;;AAEA,OAAA;AACA;EACA,mBAAA;AACA","file":"Button.vue","sourcesContent":["<template>\r\n    <button\r\n        :class=\"`tom-button tom-button-${type} tom-button-${size} \r\n        ${round ? 'tom-button-round': ''} ${disabled ? 'is-disabled' : ''}`\"\r\n        @click=\"onClick\"\r\n        :disabled=\"disabled\"\r\n    >\r\n        <slot></slot>\r\n    </button>\r\n</template>\r\n<script>\r\nexport default {\r\n  name: 'tom-button',\r\n  props: {\r\n    type: {\r\n      type: String,\r\n      default: 'default',\r\n      validator(type) {\r\n        return ['default', 'primary', 'info', 'warning', 'danger'].includes(\r\n          type\r\n        )\r\n      }\r\n    },\r\n    size: {\r\n      type: String,\r\n      default: 'medium',\r\n      validator(size) {\r\n        return ['medium', 'small', 'mini'].includes(size)\r\n      }\r\n    },\r\n    round: {\r\n      type: Boolean,\r\n      default: false\r\n    },\r\n    disabled: {\r\n      type: Boolean,\r\n      defalut: false\r\n    }\r\n  },\r\n  methods: {\r\n    onClick(event) {\r\n      this.$emit('click', event)\r\n    }\r\n  }\r\n}\r\n</script>\r\n\r\n<style scoped>\r\n    .tom-button {\r\n      display: inline-block;\r\n      outline: 0;\r\n      font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;\r\n      user-select: none;\r\n      cursor: pointer;\r\n      line-height: 1;\r\n      white-space: nowrap;\r\n      background-color: #fff;\r\n      border: 1px solid #dcdfe6;\r\n      color: #606266;\r\n      -webkit-appearance: none;\r\n      text-align: center;\r\n      box-sizing: border-box;\r\n      outline: none;\r\n      margin: 0;\r\n      transition: 0.1s;\r\n      font-weight: 500;\r\n      padding: 12px 20px;\r\n      font-size: 14px;\r\n      border-radius: 4px;\r\n    }\r\n\r\n    .tom-button.is-disabled {\r\n      color: #c0c4cc;\r\n      cursor: not-allowed;\r\n      background-image: none;\r\n      background-color: #fff;\r\n      border-color: #ebeef5;\r\n    }\r\n\r\n    /*颜色*/\r\n\r\n    .tom-button-primary {\r\n      color: #fff;\r\n      background-color: #409eff;\r\n      border-color: #409eff;\r\n    }\r\n\r\n    .tom-button-primary.is-disabled {\r\n      color: #fff;\r\n      background-color: #a0cfff;\r\n      border-color: #a0cfff;\r\n    }\r\n\r\n    .tom-button-success {\r\n      color: #fff;\r\n      background-color: #67c23a;\r\n      border-color: #67c23a;\r\n    }\r\n\r\n    .tom-button-success.is-disabled {\r\n      color: #fff;\r\n      background-color: #b3e19d;\r\n      border-color: #b3e19d;\r\n    }\r\n\r\n    .tom-button-info {\r\n      color: #fff;\r\n      background-color: #c8c9cc;\r\n      border-color: #c8c9cc;\r\n    }\r\n\r\n    .tom-button-info.is-disabled {\r\n      color: #fff;\r\n      background-color: #c8c9cc;\r\n      border-color: #c8c9cc;\r\n    }\r\n\r\n    .tom-button-warning {\r\n      color: #fff;\r\n      background-color: #e6a23c;\r\n      border-color: #e6a23c;\r\n    }\r\n\r\n    .tom-button-warning.is-disabled {\r\n      color: #fff;\r\n      background-color: #f3d19e;\r\n      border-color: #f3d19e;\r\n    }\r\n\r\n    .tom-button-danger {\r\n      color: #fff;\r\n      background-color: #f56c6c;\r\n      border-color: #f56c6c;\r\n    }\r\n    .tom-button-danger.is-disabled {\r\n      color: #fff;\r\n      background-color: #fab6b6;\r\n      border-color: #fab6b6;\r\n    }\r\n\r\n    /*大小*/\r\n    .tom-button-medium {\r\n      padding: 10px 20px;\r\n      font-size: 14px;\r\n      border-radius: 4px;\r\n    }\r\n\r\n    .tom-button-small {\r\n      padding: 9px 15px;\r\n      font-size: 12px;\r\n      border-radius: 3px;\r\n    }\r\n\r\n    .tom-button-mini {\r\n      padding: 7px 15px;\r\n      font-size: 12px;\r\n      border-radius: 3px;\r\n    }\r\n\r\n    /*是否圆角*/\r\n    .tom-button-round {\r\n      border-radius: 20px;\r\n    }\r\n</style>\r\n\r\n"]}, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__ = "data-v-ec69655c";
  /* module identifier */
  const __vue_module_identifier__ = undefined;
  /* functional template */
  const __vue_is_functional_template__ = false;
  /* style inject SSR */
  

  
  var Button = normalizeComponent_1(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    browser,
    undefined
  );

const TomButton = {
    install(Vue, options) {
        Vue.component('tom-button', Button);
    }
};

module.exports = TomButton;
