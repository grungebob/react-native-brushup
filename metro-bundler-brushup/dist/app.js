var __BUNDLE_START_TIME__=this.nativePerformanceNow?nativePerformanceNow():Date.now(),__DEV__=false,process=this.process||{},__METRO_GLOBAL_PREFIX__='';process.env=process.env||{};process.env.NODE_ENV=process.env.NODE_ENV||"production";
!(function(e){"use strict";e.__r=i,e[`${__METRO_GLOBAL_PREFIX__}__d`]=function(e,n,o){if(null!=t[n])return;const i={dependencyMap:o,factory:e,hasError:!1,importedAll:r,importedDefault:r,isInitialized:!1,publicModule:{exports:{}}};t[n]=i},e.__c=o,e.__registerSegment=function(e,r,n){s[e]=r,n&&n.forEach((r=>{t[r]||f.has(r)||f.set(r,e)}))};var t=o();const r={},{hasOwnProperty:n}={};function o(){return t=Object.create(null)}function i(e){const r=e,n=t[r];return n&&n.isInitialized?n.publicModule.exports:d(r,n)}function l(e){const n=e;if(t[n]&&t[n].importedDefault!==r)return t[n].importedDefault;const o=i(n),l=o&&o.__esModule?o.default:o;return t[n].importedDefault=l}function u(e){const o=e;if(t[o]&&t[o].importedAll!==r)return t[o].importedAll;const l=i(o);let u;if(l&&l.__esModule)u=l;else{if(u={},l)for(const e in l)n.call(l,e)&&(u[e]=l[e]);u.default=l}return t[o].importedAll=u}i.importDefault=l,i.importAll=u,i.context=function(){throw new Error("The experimental Metro feature `require.context` is not enabled in your project.")};let c=!1;function d(t,r){if(!c&&e.ErrorUtils){let n;c=!0;try{n=p(t,r)}catch(t){e.ErrorUtils.reportFatalError(t)}return c=!1,n}return p(t,r)}function a(e){return{segmentId:e>>>16,localId:65535&e}}i.unpackModuleId=a,i.packModuleId=function(e){return(e.segmentId<<16)+e.localId};const s=[],f=new Map;function p(r,n){if(!n&&s.length>0){var o;const e=null!==(o=f.get(r))&&void 0!==o?o:0,i=s[e];null!=i&&(i(r),n=t[r],f.delete(r))}const c=e.nativeRequire;if(!n&&c){const{segmentId:e,localId:o}=a(r);c(o,e),n=t[r]}if(!n)throw h(r);if(n.hasError)throw _(r,n.error);n.isInitialized=!0;const{factory:d,dependencyMap:p}=n;try{const t=n.publicModule;return t.id=r,d(e,i,l,u,t,t.exports,p),n.factory=void 0,n.dependencyMap=void 0,t.exports}catch(e){throw n.hasError=!0,n.error=e,n.isInitialized=!1,n.publicModule.exports=void 0,e}}function h(e){return Error('Requiring unknown module "'+e+'".')}function _(e,t){return Error('Requiring module "'+e+'", which threw an exception: '+t)}})('undefined'!=typeof globalThis?globalThis:'undefined'!=typeof global?global:'undefined'!=typeof window?window:this);
__d((function(g,r,i,a,m,e,d){"use strict";alert('what up doe')}),0,[]);
__r(0);