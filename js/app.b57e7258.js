(function(t){function s(s){for(var a,r,o=s[0],l=s[1],c=s[2],u=0,m=[];u<o.length;u++)r=o[u],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&m.push(i[r][0]),i[r]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);p&&p(s);while(m.length)m.shift()();return n.push.apply(n,c||[]),e()}function e(){for(var t,s=0;s<n.length;s++){for(var e=n[s],a=!0,o=1;o<e.length;o++){var l=e[o];0!==i[l]&&(a=!1)}a&&(n.splice(s--,1),t=r(r.s=e[0]))}return t}var a={},i={app:0},n=[];function r(s){if(a[s])return a[s].exports;var e=a[s]={i:s,l:!1,exports:{}};return t[s].call(e.exports,e,e.exports,r),e.l=!0,e.exports}r.m=t,r.c=a,r.d=function(t,s,e){r.o(t,s)||Object.defineProperty(t,s,{enumerable:!0,get:e})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,s){if(1&s&&(t=r(t)),8&s)return t;if(4&s&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&s&&"string"!=typeof t)for(var a in t)r.d(e,a,function(s){return t[s]}.bind(null,a));return e},r.n=function(t){var s=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(s,"a",s),s},r.o=function(t,s){return Object.prototype.hasOwnProperty.call(t,s)},r.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=s,o=o.slice();for(var c=0;c<o.length;c++)s(o[c]);var p=l;n.push([0,"chunk-vendors"]),e()})({0:function(t,s,e){t.exports=e("56d7")},"034f":function(t,s,e){"use strict";var a=e("85ec"),i=e.n(a);i.a},"56d7":function(t,s,e){"use strict";e.r(s);e("e260"),e("e6cf"),e("cca6"),e("a79d");var a=e("2b0e"),i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"app"}},[t.loading?t._e():e("Hello",{attrs:{marketJson:t.marketJson,shmarketJson:t.shmarketJson,redbubbleJson:t.redbubbleJson}})],1)},n=[],r=(e("d3b7"),e("3ca3"),e("ddb0"),function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[t._m(0),t.isRu?e("div",[t._m(1),e("agile",{ref:"main1",staticClass:"main",attrs:{options:t.optionsMain1,"as-nav-for":t.asNavFor1_1}},t._l(t.slides1_big,(function(s,a){return e("div",{key:a,staticClass:"slide",class:"slide--"+a,on:{click:function(s){return t.goUrl(t.hrefs1[a])}}},[e("img",{attrs:{src:s}})])})),0),e("agile",{ref:"thumbnails1",staticClass:"thumbnails",attrs:{options:t.optionsThumb1,"as-nav-for":t.asNavFor1_2}},[t._l(t.slides1_small,(function(s,a){return e("div",{key:a,staticClass:"slide slide--thumbniail",class:"slide--"+a,on:{click:function(s){return t.$refs.thumbnails1.goTo(a)}}},[e("img",{attrs:{src:s}})])})),e("template",{slot:"prevButton"},[e("i",{staticClass:"fas fa-chevron-left"})]),e("template",{slot:"nextButton"},[e("i",{staticClass:"fas fa-chevron-right"})])],2)],1):t._e(),t._m(2),e("agile",{ref:"main2",staticClass:"main",attrs:{options:t.optionsMain2,"as-nav-for":t.asNavFor2_1}},t._l(t.slides2_big,(function(s,a){return e("div",{key:a,staticClass:"slide",class:"slide--"+a,on:{click:function(s){return t.goUrl(t.hrefs2[a])}}},[e("img",{attrs:{src:s}})])})),0),e("agile",{ref:"thumbnails2",staticClass:"thumbnails",attrs:{options:t.optionsThumb2,"as-nav-for":t.asNavFor2_2}},[t._l(t.slides2_small,(function(s,a){return e("div",{key:a,staticClass:"slide slide--thumbniail",class:"slide--"+a,on:{click:function(s){return t.$refs.thumbnails2.goTo(a)}}},[e("img",{attrs:{src:s}})])})),e("template",{slot:"prevButton"},[e("i",{staticClass:"fas fa-chevron-left"})]),e("template",{slot:"nextButton"},[e("i",{staticClass:"fas fa-chevron-right"})])],2),t._m(3),e("agile",{ref:"main3",staticClass:"main",attrs:{options:t.optionsMain3,"as-nav-for":t.asNavFor3_1}},t._l(t.slides3_big,(function(s,a){return e("div",{key:a,staticClass:"slide",class:"slide--"+a,on:{click:function(s){return t.goUrl(t.hrefs3[a])}}},[e("img",{attrs:{src:s}})])})),0),e("agile",{ref:"thumbnails3",staticClass:"thumbnails",attrs:{options:t.optionsThumb3,"as-nav-for":t.asNavFor3_2}},[t._l(t.slides3_small,(function(s,a){return e("div",{key:a,staticClass:"slide slide--thumbniail",class:"slide--"+a,on:{click:function(s){return t.$refs.thumbnails3.goTo(a)}}},[e("img",{attrs:{src:s}})])})),e("template",{slot:"prevButton"},[e("i",{staticClass:"fas fa-chevron-left"})]),e("template",{slot:"nextButton"},[e("i",{staticClass:"fas fa-chevron-right"})])],2)],1)}),o=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"block-avatar"},[e("div",{staticClass:"block-item "},[e("div"),t._v(" "),e("a",{attrs:{href:"#"}},[e("div",[e("img",{staticStyle:{"border-radius":"50%"},attrs:{width:"65",src:"//s.taplink.cc/a/c/9/d/8/2929eb.jpg?2",alt:"natalyonpattern"}})])]),t._v(" "),e("div",[e("i",{staticStyle:{"padding-right":"0px !important",visibility:"hidden"}})])]),t._v(" "),e("div",{staticClass:"color: #777777 !important;"},[t._v("@natalyonpattern")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("h1",{attrs:{id:"title1"}},[t._v("Buy fabrics with my prints on "),e("a",{attrs:{href:"https://marketshmarket.com/collection/all?characteristics[]=85386478"}},[t._v("Shmarket")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("h1",{attrs:{id:"title2"}},[t._v("Buy my designs on "),e("a",{attrs:{href:"https://www.redbubble.com/people/natalyon/shop"}},[t._v("Redbubble")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("h1",{attrs:{id:"title3"}},[t._v("Buy my patterns on "),e("a",{attrs:{href:"https://creativemarket.com/natalyon"}},[t._v("Creative market")])])}],l=(e("caad"),e("2532"),e("1393"),e("c96a"),{name:"Hello",props:{marketJson:null,shmarketJson:null,redbubbleJson:null},data:function(){return{hrefs1:["https://marketshmarket.com/product/zavitki-na-serom-3","https://marketshmarket.com/product/treugolniki-monohrom","https://marketshmarket.com/product/romashki-af214d","https://marketshmarket.com/product/polosatye-serdtsa","https://marketshmarket.com/product/rybnyy-potok","https://marketshmarket.com/product/morskaya-verevka"],slides1_big:["https://static-eu.insales.ru/images/products/1/3635/318402099/output_5d9d35a0f0f96d6d424485dc318f42c0_fabric1.jpg","https://static-eu.insales.ru/images/products/1/6616/319183320/output_4c598c9a5eed7b00813284aedfb0bc2f_fabric1.jpg","https://static-eu.insales.ru/images/products/1/5923/320640803/output_3f25cf5f5b10622304484922f4d6c992_fabric1.jpg","https://static-eu.insales.ru/images/products/1/7270/321084518/output_802d4eeb335b98101e9b3a3a0b49f643_fabric1.jpg","https://static-eu.insales.ru/images/products/1/4067/327053283/output_f34c30d9114aa208da52a3f301d2daaf_fabric1.jpg","https://static-eu.insales.ru/images/products/1/4698/327053914/output_5f518fcf66f688d71c1ada96bb521e8e_fabric1.jpg"],slides1_small:["https://static-eu.insales.ru/images/products/1/3628/318402092/large_output_5d9d35a0f0f96d6d424485dc318f42c0_scale.jpg","https://static-eu.insales.ru/images/products/1/6615/319183319/large_output_4c598c9a5eed7b00813284aedfb0bc2f_scale.jpg","https://static-eu.insales.ru/images/products/1/5921/320640801/large_output_3f25cf5f5b10622304484922f4d6c992_scale.jpg","https://static-eu.insales.ru/images/products/1/7268/321084516/large_output_802d4eeb335b98101e9b3a3a0b49f643_scale.jpg","https://static-eu.insales.ru/images/products/1/4065/327053281/large_output_f34c30d9114aa208da52a3f301d2daaf_scale.jpg","https://static-eu.insales.ru/images/products/1/4695/327053911/large_output_5f518fcf66f688d71c1ada96bb521e8e_scale.jpg"],hrefs2:["https://www.redbubble.com/i/greeting-card/Sport-shoes-snickers-sketch-by-natalyon/50364622.5MT14","https://www.redbubble.com/i/mask/Colorful-abstract-swirls-on-red-by-natalyon/49680866.9G0D8","https://www.redbubble.com/i/mask/Flowers-on-red-by-natalyon/48679159.9G0D8","https://www.redbubble.com/i/mug/Vibrant-tiger-stripes-animal-print-by-natalyon/49689669.9Q0AD"],slides2_big:["https://ih1.redbubble.net/image.1310899262.4622/sn,x1000-pad,750x1000,f8f8f8.jpg","https://ih1.redbubble.net/image.1279571903.0866/ur,mask_three_quarter,tall_portrait,750x1000.jpg","https://ih1.redbubble.net/image.1235607022.9159/icr,iphone_11_soft,back,a,x1000-bg,f8f8f8.jpg","https://ih1.redbubble.net/image.1279959523.9669/ur,mug_lifestyle,tall_portrait,750x1000.jpg"],slides2_small:["https://ih1.redbubble.net/image.1310899315.4622/papergc,300x,w,f8f8f8-pad,600x600,f8f8f8.jpg","https://ih1.redbubble.net/image.1279571903.0866/ur,mask_flatlay_front,product,600x600.jpg","https://ih0.redbubble.net/image.1235607022.9159/icr,iphone_11_soft,back,a,x750-pad,828x898,f8f8f8.jpg","https://ih1.redbubble.net/image.1279959523.9669/mug,standard,x334,right-pad,600x600,f8f8f8.jpg"],hrefs3:["https://creativemarket.com/natalyon/4973997-Simple-yellow-daisy-seamless-pattern","https://creativemarket.com/natalyon/4967811-Tiger-skin-striped-seamless-pattern","https://creativemarket.com/natalyon/4966116-Blue-geo-low-poly-seamless-pattern","https://creativemarket.com/natalyon/4963347-Bold-flowers-on-red-seamless-pattern","https://creativemarket.com/natalyon/4836359-Black-polygonal-seamless-pattern","https://creativemarket.com/natalyon/4755599-Ice-creams-on-dark-blue-seamless","https://creativemarket.com/natalyon/4613039-Green-viruses-on-black-pattern"],slides3_big:["https://images.creativemarket.com/0.1.0/ps/8382575/910/607/m1/fpnw/wm0/6prev-.jpg?1589978658&s=e2b5f716ad33838f613fdff6f1eddad9","https://images.creativemarket.com/0.1.0/ps/8373595/910/607/m1/fpnw/wm0/5prev-.jpg?1589884256&s=f3c6cd35ac2226fbaa4478d954ba065e","https://images.creativemarket.com/0.1.0/ps/8370943/910/607/m1/fpnw/wm0/7prev-.jpg?1589855516&s=43ec3af4b0062c2bb8114a5225f42f4a","https://images.creativemarket.com/0.1.0/ps/8366715/910/607/m1/fpnw/wm0/1prev-.jpg?1589801303&s=ca1460c40216b253b0c7f4972e77e0b8","https://images.creativemarket.com/0.1.0/ps/8166624/910/607/m1/fpnw/wm0/5prev-.jpg?1587364855&s=40133435421a43f31b49d787f9d7934d","https://images.creativemarket.com/0.1.0/ps/8036373/910/607/m1/fpnw/wm0/2prev-.jpg?1585545469&s=6ec9da49610f3208208defcab0fa2093","https://images.creativemarket.com/0.1.0/ps/7816815/910/607/m1/fpnw/wm0/24prev-.jpg?1582612117&s=35ef03dec009e105cc1789ff7cd92f89"],slides3_small:["https://images.creativemarket.com/0.1.0/ps/8382575/910/607/m1/fpnw/wm0/6prev-.jpg?1589978658&s=e2b5f716ad33838f613fdff6f1eddad9","https://images.creativemarket.com/0.1.0/ps/8373595/910/607/m1/fpnw/wm0/5prev-.jpg?1589884256&s=f3c6cd35ac2226fbaa4478d954ba065e","https://images.creativemarket.com/0.1.0/ps/8370943/910/607/m1/fpnw/wm0/7prev-.jpg?1589855516&s=43ec3af4b0062c2bb8114a5225f42f4a","https://images.creativemarket.com/0.1.0/ps/8366715/910/607/m1/fpnw/wm0/1prev-.jpg?1589801303&s=ca1460c40216b253b0c7f4972e77e0b8","https://images.creativemarket.com/0.1.0/ps/8166624/910/607/m1/fpnw/wm0/5prev-.jpg?1587364855&s=40133435421a43f31b49d787f9d7934d","https://images.creativemarket.com/0.1.0/ps/8036373/910/607/m1/fpnw/wm0/2prev-.jpg?1585545469&s=6ec9da49610f3208208defcab0fa2093","https://images.creativemarket.com/0.1.0/ps/7816815/910/607/m1/fpnw/wm0/24prev-.jpg?1582612117&s=35ef03dec009e105cc1789ff7cd92f89"],isRu:!1,asNavFor1_1:[],asNavFor1_2:[],asNavFor2_1:[],asNavFor2_2:[],asNavFor3_1:[],asNavFor3_2:[],optionsMain1:{autoplay:!0,dots:!1,fade:!0,navButtons:!1},optionsMain2:{autoplay:!1,dots:!1,fade:!0,navButtons:!1},optionsMain3:{autoplay:!1,dots:!1,fade:!0,navButtons:!1},optionsThumb1:{autoplay:!1,centerMode:!0,dots:!0,navButtons:!0,slidesToShow:3,responsive:[{breakpoint:500,settings:{slidesToShow:5}},{breakpoint:1e3,settings:{navButtons:!1}}]},optionsThumb2:{autoplay:!1,centerMode:!0,dots:!0,navButtons:!0,slidesToShow:3,responsive:[{breakpoint:500,settings:{slidesToShow:5}},{breakpoint:1e3,settings:{navButtons:!1}}]},optionsThumb3:{autoplay:!1,centerMode:!0,dots:!0,navButtons:!0,slidesToShow:3,responsive:[{breakpoint:500,settings:{slidesToShow:5}},{breakpoint:1e3,settings:{navButtons:!1}}]}}},methods:{goUrl:function(t){location=t},handleScroll:function(){return document.querySelector("#title3").offsetTop<window.scrollY+window.innerHeight/2?this.optionsMain3.autoplay||(this.optionsMain3.autoplay=!0,this.$refs.thumbnails3.reload(),this.$refs.thumbnails3.goToNext(),this.$refs.main3.goToNext(),this.$refs.thumbnails1&&this.optionsMain1.autoplay&&(this.optionsMain1.autoplay=!1,this.$refs.thumbnails1.reload()),this.optionsMain2.autoplay&&(this.optionsMain2.autoplay=!1,this.$refs.thumbnails2.reload())):document.querySelector("#title2").offsetTop<window.scrollY+window.innerHeight/2?this.optionsMain2.autoplay||(this.optionsMain2.autoplay=!0,this.$refs.thumbnails2.reload(),this.$refs.thumbnails2.goToNext(),this.$refs.main2.goToNext(),this.$refs.thumbnails1&&this.optionsMain1.autoplay&&(this.optionsMain1.autoplay=!1,this.$refs.thumbnails1.reload()),this.optionsMain3.autoplay&&(this.optionsMain3.autoplay=!1,this.$refs.thumbnails3.reload())):this.optionsMain1&&!this.optionsMain1.autoplay&&(this.optionsMain1.autoplay=!0,this.$refs.thumbnails1.reload(),this.$refs.thumbnails1.goToNext(),this.$refs.main1.goToNext(),this.optionsMain2.autoplay&&(this.optionsMain2.autoplay=!1,this.$refs.thumbnails2.reload()),this.optionsMain3.autoplay&&(this.optionsMain3.autoplay=!1,this.$refs.thumbnails3.reload())),!1}},beforeMount:function(){var t=this;this.isRu=navigator.languages.includes("ru")||navigator.languages.includes("ru_RU"),this.shmarketJson&&(this.hrefs1=this.shmarketJson.links,this.slides1_big=this.shmarketJson.big,this.slides1_small=this.shmarketJson.small),this.redbubbleJson&&(this.hrefs2=this.redbubbleJson.links,this.slides2_big=this.redbubbleJson.big,this.slides2_small=this.redbubbleJson.small),this.marketJson&&(this.hrefs3=this.marketJson.links,this.slides3_big=this.marketJson.big,this.slides3_small=this.marketJson.small),this.isRu?setTimeout((function(){t.asNavFor1_1.push(t.$refs.thumbnails1),t.asNavFor1_2.push(t.$refs.main1)})):this.optionsMain2.autoplay=!0,setTimeout((function(){t.asNavFor2_1.push(t.$refs.thumbnails2),t.asNavFor2_2.push(t.$refs.main2),t.asNavFor3_1.push(t.$refs.thumbnails3),t.asNavFor3_2.push(t.$refs.main3)})),window.addEventListener("scroll",this.handleScroll)},beforeDestroy:function(){window.removeEventListener("scroll",this.handleScroll)}}),c=l,p=(e("e1be"),e("2877")),u=Object(p["a"])(c,r,o,!1,null,null,null),m=u.exports,f=e("bc3a"),d=e.n(f),h={name:"App",components:{Hello:m},data:function(){return{loading:!0,marketJson:null,shmarketJson:null,redbubbleJson:null}},mounted:function(){var t=this,s=Math.random(),e="https://raw.githubusercontent.com/natalyon/insta-patterns/master/public/";Promise.all([d.a.get(e+"market.json?v="+s),d.a.get(e+"shmarket.json?v="+s),d.a.get(e+"redbubble.json?v="+s)]).then((function(s){var e,a,i;t.marketJson=null===(e=s[0])||void 0===e?void 0:e.data,t.shmarketJson=null===(a=s[1])||void 0===a?void 0:a.data,t.redbubbleJson=null===(i=s[2])||void 0===i?void 0:i.data})).catch((function(t){console.error(t)})).finally((function(s){t.loading=!1}))}},b=h,g=(e("034f"),Object(p["a"])(b,i,n,!1,null,null,null)),v=g.exports,_=e("f7ab");e("6f3d"),a["a"].config.productionTip=!1,a["a"].use(_["a"]),new a["a"]({render:function(t){return t(v)}}).$mount("#app")},"85ec":function(t,s,e){},"8d80":function(t,s,e){},e1be:function(t,s,e){"use strict";var a=e("8d80"),i=e.n(a);i.a}});
//# sourceMappingURL=app.b57e7258.js.map