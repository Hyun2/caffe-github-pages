(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5774:function(e,n,t){"use strict";var r=t(1664),a=t(5893);n.Z=function(){return(0,a.jsxs)("header",{className:"flex flex-row py-2 -mx-3 justify-between",children:[(0,a.jsx)("div",{children:(0,a.jsx)(r.default,{href:"/",children:(0,a.jsx)("a",{className:"btn btn-link",children:"Logo"})})}),(0,a.jsxs)("div",{children:[(0,a.jsx)(r.default,{href:"/introduce",children:(0,a.jsx)("a",{className:"btn btn-link",children:"Introduce"})}),(0,a.jsx)(r.default,{href:"/order",children:(0,a.jsx)("a",{className:"btn btn-link",children:"Order"})}),(0,a.jsx)(r.default,{href:"/hiring",children:(0,a.jsx)("a",{className:"btn btn-link",children:"Hiring"})}),(0,a.jsx)(r.default,{href:"contact-us",children:(0,a.jsx)("a",{className:"btn btn-link",children:"Contact us"})})]})]})}},2167:function(e,n,t){"use strict";var r=t(3848);n.default=void 0;var a,l=(a=t(7294))&&a.__esModule?a:{default:a},c=t(1063),i=t(4651),o=t(7426);var s={};function u(e,n,t,r){if(e&&c.isLocalURL(n)){e.prefetch(n,t,r).catch((function(e){0}));var a=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;s[n+"%"+t+(a?"%"+a:"")]=!0}}var f=function(e){var n,t=!1!==e.prefetch,a=i.useRouter(),f=l.default.useMemo((function(){var n=c.resolveHref(a,e.href,!0),t=r(n,2),l=t[0],i=t[1];return{href:l,as:e.as?c.resolveHref(a,e.as):i||l}}),[a,e.href,e.as]),d=f.href,h=f.as,p=e.children,v=e.replace,b=e.shallow,x=e.scroll,m=e.locale;"string"===typeof p&&(p=l.default.createElement("a",null,p));var j=(n=l.default.Children.only(p))&&"object"===typeof n&&n.ref,y=o.useIntersection({rootMargin:"200px"}),g=r(y,2),N=g[0],_=g[1],k=l.default.useCallback((function(e){N(e),j&&("function"===typeof j?j(e):"object"===typeof j&&(j.current=e))}),[j,N]);l.default.useEffect((function(){var e=_&&t&&c.isLocalURL(d),n="undefined"!==typeof m?m:a&&a.locale,r=s[d+"%"+h+(n?"%"+n:"")];e&&!r&&u(a,d,h,{locale:n})}),[h,d,_,m,t,a]);var w={ref:k,onClick:function(e){n.props&&"function"===typeof n.props.onClick&&n.props.onClick(e),e.defaultPrevented||function(e,n,t,r,a,l,i,o){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&c.isLocalURL(t))&&(e.preventDefault(),null==i&&r.indexOf("#")>=0&&(i=!1),n[a?"replace":"push"](t,r,{shallow:l,locale:o,scroll:i}))}(e,a,d,h,v,b,x,m)},onMouseEnter:function(e){c.isLocalURL(d)&&(n.props&&"function"===typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),u(a,d,h,{priority:!0}))}};if(e.passHref||"a"===n.type&&!("href"in n.props)){var E="undefined"!==typeof m?m:a&&a.locale,C=a&&a.isLocaleDomain&&c.getDomainLocale(h,E,a&&a.locales,a&&a.domainLocales);w.href=C||c.addBasePath(c.addLocale(h,E,a&&a.defaultLocale))}return l.default.cloneElement(n,w)};n.default=f},7426:function(e,n,t){"use strict";var r=t(3848);Object.defineProperty(n,"__esModule",{value:!0}),n.useIntersection=function(e){var n=e.rootMargin,t=e.disabled||!c,o=a.useRef(),s=a.useState(!1),u=r(s,2),f=u[0],d=u[1],h=a.useCallback((function(e){o.current&&(o.current(),o.current=void 0),t||f||e&&e.tagName&&(o.current=function(e,n,t){var r=function(e){var n=e.rootMargin||"",t=i.get(n);if(t)return t;var r=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var n=r.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return i.set(n,t={id:n,observer:a,elements:r}),t}(t),a=r.id,l=r.observer,c=r.elements;return c.set(e,n),l.observe(e),function(){c.delete(e),l.unobserve(e),0===c.size&&(l.disconnect(),i.delete(a))}}(e,(function(e){return e&&d(e)}),{rootMargin:n}))}),[t,n,f]);return a.useEffect((function(){if(!c&&!f){var e=l.requestIdleCallback((function(){return d(!0)}));return function(){return l.cancelIdleCallback(e)}}}),[f]),[h,f]};var a=t(7294),l=t(3447),c="undefined"!==typeof IntersectionObserver;var i=new Map},2562:function(e,n,t){"use strict";t.r(n);var r=t(9008),a=t(1664),l=t(5774),c=t(5893);n.default=function(){return(0,c.jsxs)("div",{className:"container",children:[(0,c.jsx)(r.default,{children:(0,c.jsx)("title",{children:"\uba54\uc778 - Caffe : \uc628\ub77c\uc778 \ucee4\ud53c \uc8fc\ubb38"})}),(0,c.jsx)(l.Z,{}),(0,c.jsx)("div",{className:"p-5 mb-4 bg-light rounded-3",children:(0,c.jsxs)("div",{className:"container-fluid py-5",children:[(0,c.jsx)("h1",{className:"display-5 fw-bold",children:"Caffe"}),(0,c.jsx)("p",{className:"col-md-8 fs-4 py-3",children:"\uc628\ub77c\uc778\uc73c\ub85c \uc8fc\ubb38\ud558\uace0 \ud3b8\ud558\uac8c \ucee4\ud53c\ub97c \ubc1b\uc544\ubcf4\uc138\uc694!"}),(0,c.jsx)(a.default,{href:"/introduce",children:(0,c.jsx)("a",{className:"btn btn-primary btn-lg",type:"button",children:"Caffe \uc18c\uac1c"})}),(0,c.jsx)(a.default,{href:"/order",children:(0,c.jsx)("a",{className:"btn btn-outline-primary btn-lg ml-3",type:"button",children:"\uc8fc\ubb38\ud558\uae30"})})]})})]})}},5301:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(2562)}])},1664:function(e,n,t){e.exports=t(2167)}},function(e){e.O(0,[774,888,179],(function(){return n=5301,e(e.s=n);var n}));var n=e.O();_N_E=n}]);