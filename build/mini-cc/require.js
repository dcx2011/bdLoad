(function(k,J,w){var g=function(a,c,b){return T(a,c,b,0,g)};g.has=w=k.has||this.has||w;var q=function(){},r={}.toString,K=function(a){return r.call(a)=="[object Function]"},x=function(a,c){for(var b=0;a&&b<a.length;)c(a[b++])},j=function(a,c){for(var b in c)a[b]=c[b];return a},da=function(a){return a.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g,function(c){return"\\"+c})},ea=1,U={},o={},V={},y=g.pathTransforms=[],fa={},z=[],A={},W={},B=[],m={},t={},L=function(a){var c,b=[];for(c in a)b.push([c,a[c]]);b.sort(function(d, e){return e[0].length-d[0].length});for(a=0;a<b.length;){c=b[a++];c[2]=RegExp("^"+da(c[0])+"(/|$)");c[3]=c[0].length+1}return b},X=function(a,c){c=c||"";a=j({lib:"lib",main:"main",pathTransforms:[]},r.call(a)=="[object String]"?{name:a}:a);a.location=c+(a.location?a.location:a.name);a.mapProg=L(a.packageMap);var b=a.name;A[b]=a;W[b]=b},Y=function(a,c,b){(a&&a.length||c)&&g(a||[],c||q);b&&g.addOnLoad(b)},M=function(a,c){var b,d;for(b in a)/pathTransforms|paths|packages|packageMap|packagePaths|cache|ready/.test(b)|| (g[b]=a[b]);d=a.pathTransforms;for(b=0;d&&b<d.length;b++)y.push(d[b]);z=L(j(fa,a.paths));x(a.packages,X);for(baseUrl in a.packagePaths)x(a.packagePaths[baseUrl],function(e){X(e,baseUrl+"/")});B=L(j(W,a.packageMap));j(t,a.cache);c||Y(a.deps,a.callback,a.ready)};M(J,1);M(k,1);if(K(this.define))console.error("global define already defined; did you try to load multiple AMD loaders?");else{var C=function(a){x(a.deps,Z)},T=function(a,c,b,d,e){if(r.call(a)=="[object String]"){a=l(a,d);a.plugin&&$(a,true); return a.result}if(r.call(a)!="[object Array]"){M(a);a=c;c=b}if(r.call(a)=="[object Array]"){for(b=0;b<a.length;b++)a[b]=l(a[b],d);d="_"+ea++;a=j(D("",d,"*"+d,0,"",""),{injected:o,deps:a,def:c||q});C(a);E(a)===u&&v.push(a)}return e},aa=function(a){var c=a.require;if(!c){c=function(b,d,e){return T(b,d,e,a,c)};a.require=j(c,g);c.nameToUrl=c.toUrl=function(b,d){return ga(b,d,a)};c.toAbsMid=function(b){return N(b,a,A,m,g.baseUrl,".",B,z,y).path}}return c},v=[],p={},F=function(a,c){for(var b=0;b<c.length;b++)if(c[b][2].test(a))return c[b]; return 0},O=function(a,c){if(!/\./.test(a))return a;for(var b=a.split("/"),d=[],e;b.length;){e=b.shift();if(e=="..")d.length&&d[d.length-1].charAt(0)!="."?d.pop():d.push("..");else if(e!="."||!d.length&&!c)d.push(e)}return d.join("/")},ba=function(a,c){for(var b=0,d=0;!d&&b<c.length;){d=c[b++];d=K(d)?d(a):d[0].test(a)&&a.replace(d[0],d[1])}return d},D=function(a,c,b,d,e,f){return{pid:a,mid:c,pqn:b,pack:d,path:e,url:f}},N=function(a,c,b,d,e,f,h,G,ha,ia){var n,i;if(/(^\/)|(\:)|(\.[^\/]+$)/.test(a)){b= /^\./.test(a)?O(f+"/"+a):a;return D(0,b,"*"+b,0,b,b)}else{if(/^\./.test(a))a=c?c.path+"/../"+a:e+a;f=O(a,true);if(i=(a=c&&c.pack&&c.pack.mapProg)&&F(f,a)||F(f,h)){h=i[1];a=f.substring(i[3])}else{h="";a=f}c=h+"*"+a;if(i=d[c])return ia?D(i.pid,i.mid,i.pqn,i.pack,i.path,i.url):d[c]}if(h){n=b[h];f=h+"/"+(a||n.main);b=n.location+"/"+(n.lib?n.lib+"/":"")+(a||n.main);b=(i=F(b,G))?i[1]+b.substring(i[3]-1):ba(f,n.pathTransforms)||b}else b=(i=F(f,G))?i[1]+f.substring(i[3]-1):ba(f,ha)||f;/(^\/)|(\:)/.test(b)|| (b=e+b);b+=".js";return D(h,a,c,n,f,O(b))},l=function(a,c){var b,d,e;if(b=a.match(/^(.+?)\!(.+)$/)){d=l(b[1],c);b=b[2];e=d.pqn+"!"+(c?c.pqn+"!":"")+b;return m[e]||(m[e]={plugin:d,mid:b,req:c?aa(c):g,pqn:e})}else{d=N(a,c,A,m,g.baseUrl,".",B,z,y);return m[d.pqn]||(m[d.pqn]=d)}},ga=g.nameToUrl=g.toUrl=function(a,c,b){var d=a.match(/(.+)(\.[^\/]+)$/);a=N(d&&d[1]||a,b,A,m,g.baseUrl,".",B,z,y).url;return a.substring(0,a.length-3)+(c?c:d?d[2]:"")};k={injected:o,deps:[],executed:1,result:1};var ja=j(l("require"), k),ka=j(l("exports"),k),la=j(l("module"),k),H=0,u={},ma=0,E=function(a){if(!a.executed){if(typeof a.def=="undefined")return u;var c=a.deps||[],b,d=[],e=0;for(a.executed=1;e<c.length;){b=c[e++];b=b===ja?aa(a):b===ka?a.exports:b===la?a:E(b);if(b===u){a.executed=0;return u}d.push(b)}c=a.def;e=a.cjs;H=1;d=K(c)?c.apply(null,d)||e&&e.exports:c;a.result=d;a.evalOrder=ma++;if(a.loadQ){d=a.loadQ;for(c=a.load=a.result.load;d.length;)c.apply(null,d.shift())}}return a.result},P=0,ca=function(){if(!P){for(H=P= 1;H;){H=0;for(var a,c=0;c<v.length;){a=E(v[c]);if(a!==u)v.splice(c,1);else c++}}P=0}};g.toAbsMid=function(a){return a};var Q={},$=function(a,c){var b=a.pqn,d=function(f){j(a,{executed:1,result:f});delete p[b];ca()};if(t[b])d(t[b]);else{var e=a.plugin;if(!e.load)if(e.executed)e.load=e.result.load;else if(!c){e.loadQ=[];e.load=function(f,h,G){e.loadQ.push([f,h,G])};Z(e);v.unshift(e)}c||(p[b]=1);e.load&&e.load(a.mid,a.req,d)}},s=[],Z=function(a){var c=a.pqn;if(!(a.injected||p[c]))if(a.plugin)$(a);else{a.injected= U;p[c]=1;var b=a.url;if(!Q[b]){Q[b]=U;var d=function(){Q[b]=o;delete p[c];for(var e=[],f,h;R.length;){h=R.shift();f=h[0]&&l(h[0])||a;e.push(I(f,h[1],h[2]))}x(e,C);a.injected!==o&&j(a,{injected:o,deps:[],def:V,result:V});ca()};if(t[c]){s.push(a);t[c].call(null);s.pop();d()}else{s.push(a);a.node=g.injectUrl(b,d);s.pop();na()}}}},R=[],I=function(a,c,b){var d=a.pqn;if(a.injected==o){g.onError("loader/multiple-define",[d]);return a}j(a,{injected:o,deps:c,def:b,cjs:{id:a.path,uri:a.url,exports:a.result= {},setExports:function(e){a.cjs.exports=e}}});for(b=0;b<c.length;b++)c[b]=l(c[b],a);delete p[d];return a},na=q,S=document,oa=function(a,c,b,d,e){if(w("dom-addEventListener")){a.addEventListener(c,b,!!d);return function(){a.removeEventListener(c,b,!!d)}}else if(e!==false){c=e||"on"+c;a.attachEvent(c,b);return function(){a.detachEvent(c,b)}}else return q},pa=S.getElementsByTagName("head")[0]||S.getElementsByTagName("html")[0];g.injectUrl=g.injectUrl||function(a,c){var b=S.createElement("script"),d= oa(b,"load",function(e){e=e||window.event;var f=e.target||e.srcElement;if(e.type==="load"||/complete|loaded/.test(f.readyState)){d();c&&c()}},false,"onreadystatechange");b.src=a;b.type="text/javascript";b.charset="utf-8";pa.appendChild(b);return b};g.trace=g.trace||q;g.onError=g.onError||q;define=function(a,c,b){var d=arguments.length,e=0,f=["require","exports","module"];if(d==3&&c==0)E(I(l(a),[],b));else{e||(e=d==1?[0,f,a]:d==2?r.call(a)=="[object Array]"?[0,a,c]:[a,f,c]:[a,c,b]);if(e[0])C(I(l(e[0]), e[1],e[2]));else if(w("dom-addEventListener"))R.push(e);else{d=(d=s.length)&&s[d-1];var h;if(!d)for(h in p){f=m[h];if(f.node&&f.node.readyState==="interactive"){d=f;break}}d?C(I(d,e[1],e[2])):g.onError("loader/define-ie")}}};require=g;k=g.ready;g.deps=g.deps||["config"];Y(g.deps,g.callback,k)}})(this.require||{},{host:"browser",isBrowser:1,timeout:0,packages:[],baseUrl:""},function(){var k={"dom-addEventListener":!!document.addEventListener};return function(J){return k[J]}}());