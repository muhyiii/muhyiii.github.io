(this.webpackJsonpbelajar=this.webpackJsonpbelajar||[]).push([[0],{35:function(e,t,a){},61:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(28),s=a.n(c),l=(a(35),a(17)),i=a(9),d=a.n(i),o=a(12),j=a(14),x=a(13),u=a.n(x),b=a(10),h=a(1);var m=function(e){return Object(h.jsx)("div",{children:Object(h.jsxs)(b.b,{to:"/alquran/".concat(e.nomor),className:"border lg:p-5 p-2 grid-cols-3 grid lg:grid-cols-6 my-3",children:[Object(h.jsx)("h1",{className:"lg:text-4xl",children:e.nomor}),Object(h.jsxs)("div",{className:"lg:col-start-2 lg:col-end-4 ",children:[Object(h.jsx)("h1",{className:"lg:text-3xl text-lg",children:e.nama}),Object(h.jsx)("h1",{children:e.arti})]}),Object(h.jsx)("h2",{className:"lg:text-5xl col-start-5 col-end-6 text-center font-serif   ",children:e.asma})]})})};function g(){var e=n.a.useState([]),t=Object(j.a)(e,2),a=t[0],r=t[1];return function(){var e=Object(o.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return" https://al-quran-8d642.firebaseio.com/data.json?print=pretty",e.prev=1,e.next=4,u.a.get(" https://al-quran-8d642.firebaseio.com/data.json?print=pretty");case 4:t=e.sent,r(t.data),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log("error");case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}()(),Object(h.jsx)("div",{className:"border-4 py-5",children:Object(h.jsx)("div",{className:"border-2 my-3 py-7 mx-2 lg:mx-8 lg:px-7 px-4 gap-x-7 grid   shadow-2xl rounded-lg",children:a.map((function(e,t){return Object(h.jsx)(m,{nama:e.nama,asma:e.asma,arti:e.arti,nomor:e.nomor,audio:e.audio,slug:e.slug})}))})})}var p=a(2);function O(){return Object(h.jsxs)("div",{className:"w-full  p-2",children:[Object(h.jsx)("div",{className:"text-center border-2 ",children:Object(h.jsx)("h1",{className:"text-5xl font-bold shadow-lg py-6",children:"Alqur'an Digital"})}),Object(h.jsxs)("div",{className:"lg:m-8 m-6 grid lg:grid-cols-2  bg-yellow-100    ",children:[Object(h.jsx)("div",{className:"",children:Object(h.jsxs)("h1",{className:"lg:text-4xl t py-24 text-center mx-7 ",children:['" Bacalah Al - Qur\'an Nisyaca ia akan datang pada hari kiamat sebagai syafaat bagi para pembacanya "'," "]})}),Object(h.jsx)("img",{className:" rounded-3xl lg:py-10 ",src:"https://pict-a.sindonews.net/dyn/620/pena/news/2021/06/15/68/456504/surat-penenang-hati-yang-terdapat-dalam-alquran-ere.jpg",alt:""})]})]})}var v=function(e){return Object(h.jsx)("div",{children:Object(h.jsxs)("article",{className:"grid grid-cols-8 px-4 mx-2 ",children:[Object(h.jsx)("h1",{className:"text-4xl  mt-10",children:e.nomor}),Object(h.jsxs)("div",{className:"col-start-2 col-end-9  mt-10     ",children:[Object(h.jsx)("h1",{className:"text-3xl mb-5 text-right font-serif",children:e.ar}),Object(h.jsx)("h1",{children:e.id})]})]})})};function f(){var e=Object(p.g)().slug,t=n.a.useState([]),a=Object(j.a)(t,2),r=a[0],c=a[1];return function(){var t=Object(o.a)(d.a.mark((function t(){var a,r;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=" https://al-quran-8d642.firebaseio.com/surat/".concat(e,".json?print=pretty"),t.prev=1,t.next=4,u.a.get(a);case 4:r=t.sent,console.log(r.data),c(r.data),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),console.log("error");case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(){return t.apply(this,arguments)}}()(),Object(h.jsx)("div",{className:"border-4 py-5",children:Object(h.jsx)("div",{className:"border-2 my-3 py-7 mx-3 lg:mx-8 lg:px-7 lg:gap-x-7   shadow-2xl rounded-lg",children:null===r||void 0===r?void 0:r.map((function(e,t){return Object(h.jsx)(v,{nomor:e.nomor,ar:e.ar,id:e.id})}))})})}var N=function(){var e;return Object(h.jsx)(n.a.Fragment,{children:Object(h.jsx)("div",{className:"h-full",children:Object(h.jsx)(b.a,{children:Object(h.jsxs)(p.d,{children:[Object(h.jsxs)(p.b,(e={exact:!0,path:"/alquran"},Object(l.a)(e,"exact",!0),Object(l.a)(e,"children",[Object(h.jsx)(O,{}),Object(h.jsx)("div",{className:"divide-solid text-center text-3xl ",children:"Surat - Surat"}),Object(h.jsx)(g,{})]),e))," ",Object(h.jsx)(p.b,{path:"/alquran/:slug",exact:!0,children:Object(h.jsx)(f,{})}),Object(h.jsx)(p.a,{from:"*",to:"/alquran"})]})})})})},y=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,62)).then((function(t){var a=t.getCLS,r=t.getFID,n=t.getFCP,c=t.getLCP,s=t.getTTFB;a(e),r(e),n(e),c(e),s(e)}))};s.a.render(Object(h.jsx)(n.a.StrictMode,{children:Object(h.jsx)(N,{})}),document.getElementById("root")),y()}},[[61,1,2]]]);
//# sourceMappingURL=main.10bae07f.chunk.js.map