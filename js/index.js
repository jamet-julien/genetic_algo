!function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return t[r].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){n(1),t.exports=n(3)},function(t,e,n){(function(e,n){!function(e){"use strict";function r(t,e,n,r){var o=Object.create((e||i).prototype),u=new v(r||[]);return o._invoke=f(t,n,u),o}function o(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}function i(){}function u(){}function a(){}function c(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function s(t){this.arg=t}function l(t){function e(e,n){var r=t[e](n),o=r.value;return o instanceof s?Promise.resolve(o.arg).then(i,u):Promise.resolve(o).then(function(t){return r.value=t,r})}function r(t,n){function r(){return e(t,n)}return o=o?o.then(r,r):new Promise(function(t){t(r())})}"object"==typeof n&&n.domain&&(e=n.domain.bind(e));var o,i=e.bind(t,"next"),u=e.bind(t,"throw");e.bind(t,"return");this._invoke=r}function f(t,e,n){var r=x;return function(i,u){if(r===E)throw new Error("Generator is already running");if(r===L){if("throw"===i)throw u;return d()}for(;;){var a=n.delegate;if(a){if("return"===i||"throw"===i&&a.iterator[i]===m){n.delegate=null;var c=a.iterator.return;if(c){var s=o(c,a.iterator,u);if("throw"===s.type){i="throw",u=s.arg;continue}}if("return"===i)continue}var s=o(a.iterator[i],a.iterator,u);if("throw"===s.type){n.delegate=null,i="throw",u=s.arg;continue}i="next",u=m;var l=s.arg;if(!l.done)return r=P,l;n[a.resultName]=l.value,n.next=a.nextLoc,n.delegate=null}if("next"===i)n._sent=u,r===P?n.sent=u:n.sent=m;else if("throw"===i){if(r===x)throw r=L,u;n.dispatchException(u)&&(i="next",u=m)}else"return"===i&&n.abrupt("return",u);r=E;var s=o(t,e,n);if("normal"===s.type){r=n.done?L:P;var l={value:s.arg,done:n.done};if(s.arg!==T)return l;n.delegate&&"next"===i&&(u=m)}else"throw"===s.type&&(r=L,i="throw",u=s.arg)}}}function h(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function p(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function v(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(h,this),this.reset(!0)}function y(t){if(t){var e=t[g];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,r=function e(){for(;++n<t.length;)if(w.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=m,e.done=!0,e};return r.next=r}}return{next:d}}function d(){return{value:m,done:!0}}var m,w=Object.prototype.hasOwnProperty,g="function"==typeof Symbol&&Symbol.iterator||"@@iterator",b="object"==typeof t,k=e.regeneratorRuntime;if(k)return void(b&&(t.exports=k));k=e.regeneratorRuntime=b?t.exports:{},k.wrap=r;var x="suspendedStart",P="suspendedYield",E="executing",L="completed",T={},_=a.prototype=i.prototype;u.prototype=_.constructor=a,a.constructor=u,u.displayName="GeneratorFunction",k.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===u||"GeneratorFunction"===(e.displayName||e.name))},k.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,a):t.__proto__=a,t.prototype=Object.create(_),t},k.awrap=function(t){return new s(t)},c(l.prototype),k.async=function(t,e,n,o){var i=new l(r(t,e,n,o));return k.isGeneratorFunction(e)?i:i.next().then(function(t){return t.done?t.value:i.next()})},c(_),_[g]=function(){return this},_.toString=function(){return"[object Generator]"},k.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},k.values=y,v.prototype={constructor:v,reset:function(t){if(this.prev=0,this.next=0,this.sent=m,this.done=!1,this.delegate=null,this.tryEntries.forEach(p),!t)for(var e in this)"t"===e.charAt(0)&&w.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=m)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){function e(e,r){return i.type="throw",i.arg=t,n.next=e,!!r}if(this.done)throw t;for(var n=this,r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r],i=o.completion;if("root"===o.tryLoc)return e("end");if(o.tryLoc<=this.prev){var u=w.call(o,"catchLoc"),a=w.call(o,"finallyLoc");if(u&&a){if(this.prev<o.catchLoc)return e(o.catchLoc,!0);if(this.prev<o.finallyLoc)return e(o.finallyLoc)}else if(u){if(this.prev<o.catchLoc)return e(o.catchLoc,!0)}else{if(!a)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return e(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&w.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?this.next=o.finallyLoc:this.complete(i),T},complete:function(t,e){if("throw"===t.type)throw t.arg;"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=t.arg,this.next="end"):"normal"===t.type&&e&&(this.next=e)},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),p(n),T}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;p(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:y(t),resultName:e,nextLoc:n},T}}}("object"==typeof e?e:"object"==typeof window?window:"object"==typeof self?self:this)}).call(e,function(){return this}(),n(2))},function(t,e){function n(){throw new Error("setTimeout has not been defined")}function r(){throw new Error("clearTimeout has not been defined")}function o(t){if(l===setTimeout)return setTimeout(t,0);if((l===n||!l)&&setTimeout)return l=setTimeout,setTimeout(t,0);try{return l(t,0)}catch(e){try{return l.call(null,t,0)}catch(e){return l.call(this,t,0)}}}function i(t){if(f===clearTimeout)return clearTimeout(t);if((f===r||!f)&&clearTimeout)return f=clearTimeout,clearTimeout(t);try{return f(t)}catch(e){try{return f.call(null,t)}catch(e){return f.call(this,t)}}}function u(){y&&p&&(y=!1,p.length?v=p.concat(v):d=-1,v.length&&a())}function a(){if(!y){var t=o(u);y=!0;for(var e=v.length;e;){for(p=v,v=[];++d<e;)p&&p[d].run();d=-1,e=v.length}p=null,y=!1,i(t)}}function c(t,e){this.fun=t,this.array=e}function s(){}var l,f,h=t.exports={};!function(){try{l="function"==typeof setTimeout?setTimeout:n}catch(t){l=n}try{f="function"==typeof clearTimeout?clearTimeout:r}catch(t){f=r}}();var p,v=[],y=!1,d=-1;h.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];v.push(new c(t,e)),1!==v.length||y||o(a)},c.prototype.run=function(){this.fun.apply(null,this.array)},h.title="browser",h.browser=!0,h.env={},h.argv=[],h.version="",h.versions={},h.on=s,h.addListener=s,h.once=s,h.off=s,h.removeListener=s,h.removeAllListeners=s,h.emit=s,h.binding=function(t){throw new Error("process.binding is not supported")},h.cwd=function(){return"/"},h.chdir=function(t){throw new Error("process.chdir is not supported")},h.umask=function(){return 0}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(t){s.default.restart(),this.setPhase("draw")}function i(t){}var u=n(4),a=r(u),c=n(5),s=r(c),l=n(6),f=r(l),h=n(8),p=(r(h),window.innerWidth,window.innerHeight,new a.default("setup")),v=(new f.default,{setup:o,draw:i});p.computePhase(v),s.default.setCadence(12).run(function(t){p.run(t)}).play(),document.addEventListener("DOMContentLoaded",function(t){s.default.start()})},function(t,e){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),o=function(){function t(e){n(this,t),this.sPhaseName=e,this.oPhase={},this.oPhaseCurrent=null}return r(t,[{key:"setPhase",value:function(t){this.sPhaseName=t,this.oPhase[this.sPhaseName]&&(this.oPhaseCurrent=this.oPhase[this.sPhaseName])}},{key:"computePhase",value:function(t){return this.oPhase=t,this.setPhase(this.sPhaseName),this}},{key:"run",value:function(){return this.oPhaseCurrent.apply(this,arguments),this}}]),t}();e.default=o},function(t,e){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}();window.requestAnimFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)}}();var o=function(t){},i=0,u=10,a=!0,c=!1,s=null,l=null,f=function(){function t(){n(this,t)}return r(t,null,[{key:"setCounter",value:function(e){return l=e,t}},{key:"restart",value:function(){return s=null,t}},{key:"setCadence",value:function(e){return t.restart(),u=e,t}},{key:"run",value:function(e){return o=e,t}},{key:"start",value:function(){a&&requestAnimationFrame(t.start);var e=Date.now(),n=e-i;l&&l.run(e),n>u&&a&&(i=e-n%u,null==s&&(s=i),c||o.call(null,i-s))}},{key:"play",value:function(){a=!0,c=!1}},{key:"pause",value:function(){c=!0}},{key:"stop",value:function(){a=!1}},{key:"togglePlay",value:function(){a=!a}}]),t}();e.default=f},function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),i=n(7),u=function(){function t(e,n){r(this,t),this.element=[],this.popsize=n||25;for(var o=0;o<this.popsize;o++)this.element[o]=e()}return o(t,[{key:"evaluate",value:function(){for(var t=0,e=0,n=[];e<this.popsize;e++)this.element[e].calcFitness(),n.push(this.element[e].fitness);for(t=Math.max.apply(null,n),e=0;e<this.popsize;e++)this.element[e].fitness=(0,i.map)(this.element[e].fitness,0,t,0,1)}},{key:"getRandomElement",value:function(){for(var t,e=1e5,n=this.element.length-1;;){if(t=(0,i.randomInt)(0,n),Math.random()<this.element[t].fitness)return this.element[t];if(e<=0)return{dna:null};e--}}},{key:"selection",value:function(t){for(var e,n,r,o=[],i=0;i<this.element.length;i++)e=this.getRandomElement(),n=this.getRandomElement(),r=oDNAparentA.dna.crossover(oDNAparentB.dna),r.mutation(t),o[i]=t(r);this.element=o}},{key:"run",value:function(){for(var t=0;t<this.popsize;t++)this.element[t].update(),this.element[t].draw()}}]),t}();e.default=u},function(t,e){"use strict";function n(t,e){var n=t%e,r=Math.floor(t/e);return[n,r]}function r(t,e,n){return e*n+t}function o(t){return t.filter(function(e,n){return t.indexOf(e)==n})}function i(t,e){return Math.floor(Math.random()*(e-t+1)+t)}function u(t,e,n){return Math.max(Math.min(t,n),e)}function a(t,e,n,r,o){return(t-e)/(n-e)*(o-r)+r}function c(t){for(var e=t.length;e;e--){var n=Math.floor(Math.random()*e),r=[t[n],t[e-1]];t[e-1]=r[0],t[n]=r[1]}}Object.defineProperty(e,"__esModule",{value:!0}),e.indexToXY=n,e.XYToIndex=r,e.dedoublon=o,e.randomInt=i,e.contrain=u,e.map=a,e.shuffle=c},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),u=n(9),a=r(u),c=function(){function t(){o(this,t),this.fitness=0,this.dna=new a.default([],t.buildDNA)}return i(t,null,[{key:"completeDNA",value:function(t){return t}},{key:"buildDNA",value:function(){return[]}}]),i(t,[{key:"calcFitness",value:function(){}},{key:"update",value:function(){}},{key:"draw",value:function(){}}]),t}();e.default=c},function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),i=n(7),u=function(){function t(e,n){r(this,t);var o=n||function(){return[]};this.gene=e||[],e.length||(this.gene=o())}return o(t,[{key:"crossover",value:function(e){var n=[],r=(0,i.randomInt)(0,this.gene.length-1);return n=this.gene.slice(0,r).concat(e.gene.slice(r,e.gene.length)),new t(n)}},{key:"mutation",value:function(t,e){for(var n=0,r=e||.001;n<this.gene.length;n++)Math.random()<r&&(this.gene[n]=t())}}]),t}();e.default=u}]);