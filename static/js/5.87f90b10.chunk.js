(this.webpackJsonpbicon=this.webpackJsonpbicon||[]).push([[5],{1092:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(103),s=n(1),r=n(328),i=n(331),o=n(350),l=n(72),u=(n(340),n(173),n(55)),d=n.n(u),j=n(358),h=n(102),f=n(2),m=Object(a.memo)((function(){var e=Object(a.useState)({title:"",price:"",period:"",description:""}),t=Object(r.a)(e,2),n=t[0],u=t[1],m=Object(a.useState)({name:"meeting"}),p=Object(r.a)(m,2),b=p[0],x=p[1],O=Object(a.useState)({name:"chat",free:!1}),v=Object(r.a)(O,2),g=v[0],y=v[1],N=Object(a.useState)({name:"videoCall"}),w=Object(r.a)(N,2),k=w[0],_=w[1],S=Object(h.c)();Object(a.useEffect)((function(){document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelectorAll("select");d.a.FormSelect.init(e)}));var e=document.querySelectorAll(".collapsible");d.a.Collapsible.init(e)}));var A=function(e){u(Object(s.a)(Object(s.a)({},n),{},Object(c.a)({},e.target.name,e.target.value)))},T=function(e){x(Object(s.a)(Object(s.a)({},b),{},Object(c.a)({},e.target.name,e.target.value)))},C=function(e){console.log("targeet chat : ",e.target.value),"free"==e.target.name?y(Object(s.a)(Object(s.a)({},g),{},{free:"on"==e.target.value})):y(Object(s.a)(Object(s.a)({},g),{},Object(c.a)({},e.target.name,e.target.value)))},D=function(e){_(Object(s.a)(Object(s.a)({},k),{},Object(c.a)({},e.target.name,e.target.value)))};return Object(f.jsxs)("div",{children:[Object(f.jsxs)("div",{id:"loader-wrapper",children:[Object(f.jsx)("div",{id:"loader"}),Object(f.jsx)("div",{className:"loader-section section-left"}),Object(f.jsx)("div",{className:"loader-section section-right"})]}),Object(f.jsx)(i.a,{}),Object(f.jsx)("div",{id:"main",children:Object(f.jsxs)("div",{className:"wrapper",children:[Object(f.jsx)(o.a,{}),Object(f.jsx)("div",{id:"back_shado"}),Object(f.jsx)("div",{className:"container",children:Object(f.jsx)("div",{className:"row",children:Object(f.jsxs)("div",{className:"col s12",children:[Object(f.jsx)("div",{className:"col s12",children:Object(f.jsx)("div",{id:"breadcrumbs-wrapper",children:Object(f.jsx)("div",{className:"container",children:Object(f.jsx)("div",{className:"row",children:Object(f.jsxs)("div",{className:"col s10 m6 l6",children:[Object(f.jsx)("h5",{className:"breadcrumbs-title",children:"Package Add"}),Object(f.jsxs)("ol",{className:"breadcrumbs",children:[Object(f.jsx)("li",{children:Object(f.jsx)(l.c,{to:"/doctor",children:Object(f.jsx)("a",{children:"Dashboard"})})}),Object(f.jsx)("li",{children:Object(f.jsx)(l.c,{to:"/doctor-list-package",children:Object(f.jsx)("a",{children:"Package Manager"})})}),Object(f.jsx)("li",{children:Object(f.jsx)("a",{className:"active",children:"Package add"})})]})]})})})})}),Object(f.jsx)("form",{onSubmit:function(e){return function(e){e.preventDefault();var t=Object(s.a)(Object(s.a)({},n),{},{items:[]});t.items.push(b),t.items.push(g),t.items.push(k),console.log(b),b.value&&b.unit&&g.unit&&k.unit&&k.value&&n.title&&n.price&&n.period&&n.description?S(Object(j.b)(t)):d.a.toast({html:"please field all input !"})}(e)},children:Object(f.jsx)("div",{className:"col s12",children:Object(f.jsxs)("div",{className:"main_package_form",children:[Object(f.jsxs)("div",{className:"col s12 l6",children:[Object(f.jsx)("div",{class:"col s12",children:Object(f.jsxs)("div",{className:"input-field col s12",style:{marginTop:0},children:[Object(f.jsx)("p",{style:{color:"#ccc"},children:"\xa0\xa0Title"}),Object(f.jsx)("div",{id:"input_back",children:Object(f.jsx)("input",{type:"text",name:"title",onChange:function(e){return A(e)},className:"validate"})})]})}),Object(f.jsx)("div",{class:"col s6",children:Object(f.jsxs)("div",{className:"input-field col s12",style:{marginTop:0},children:[Object(f.jsx)("p",{style:{color:"#ccc"},children:"\xa0\xa0Price"}),Object(f.jsx)("div",{id:"input_back",children:Object(f.jsx)("input",{type:"text",name:"price",onChange:function(e){return A(e)},className:"validate"})})]})}),Object(f.jsx)("div",{class:"col s6",children:Object(f.jsxs)("div",{className:"input-field col s12",style:{marginTop:0},children:[Object(f.jsx)("p",{style:{color:"#ccc"},children:"\xa0\xa0period"}),Object(f.jsx)("div",{id:"input_back",children:Object(f.jsx)("input",{type:"text",name:"period",onChange:function(e){return A(e)},className:"validate"})})]})}),Object(f.jsx)("div",{className:"col s12",style:{marginBottom:"20px"},children:Object(f.jsxs)("div",{className:"input-field col s12",style:{marginTop:10},children:[Object(f.jsx)("p",{style:{color:"#ccc"},children:"\xa0\xa0Description"}),Object(f.jsx)("div",{id:"input_back",children:Object(f.jsx)("textarea",{name:"description",onChange:function(e){return A(e)}})})]})})]}),Object(f.jsxs)("div",{className:"col s12 l6",children:[Object(f.jsx)("p",{style:{color:"#ccc"},children:"Package Detial "}),Object(f.jsxs)("ul",{className:"collapsible customs-colapse",children:[Object(f.jsxs)("li",{children:[Object(f.jsxs)("div",{className:"collapsible-header",children:[Object(f.jsx)("i",{className:"material-icons",children:"people"}),"Meeting"]}),Object(f.jsx)("div",{className:"collapsible-body",style:{background:"#313131"},children:Object(f.jsx)("span",{children:Object(f.jsx)("div",{className:"container",children:Object(f.jsx)("div",{className:"row",children:Object(f.jsxs)("div",{className:"col s12",children:[Object(f.jsx)("div",{className:"col s6",children:Object(f.jsx)("input",{placeholder:"value",onChange:function(e){return T(e)},type:"text",name:"value",className:"validate add_pack_input"})}),Object(f.jsx)("div",{className:"col s6",children:Object(f.jsx)("input",{placeholder:"unit",onChange:function(e){return T(e)},type:"text",name:"unit",className:"validate add_pack_input"})})]})})})})})]}),Object(f.jsxs)("li",{children:[Object(f.jsxs)("div",{className:"collapsible-header",children:[Object(f.jsx)("i",{className:"material-icons",children:"chat"}),"Chat"]}),Object(f.jsx)("div",{className:"collapsible-body",style:{background:"#313131"},children:Object(f.jsx)("span",{children:Object(f.jsx)("div",{className:"container",children:Object(f.jsx)("div",{className:"row",children:Object(f.jsxs)("div",{className:"col s12",children:[Object(f.jsx)("div",{className:"col s4",children:Object(f.jsx)("input",{placeholder:"unit",type:"text",name:"unit",onChange:function(e){return C(e)},className:"validate add_pack_input"})}),Object(f.jsx)("div",{className:"col s6",children:Object(f.jsx)("div",{class:"switch",id:"true-false",children:Object(f.jsxs)("label",{style:{height:25},children:["free",Object(f.jsx)("input",{onChange:function(e){return C(e)},type:"checkbox",name:"free"}),Object(f.jsx)("span",{class:"lever"})]})})})]})})})})})]}),Object(f.jsxs)("li",{children:[Object(f.jsxs)("div",{className:"collapsible-header",children:[Object(f.jsx)("i",{className:"material-icons",children:"voice_chat"}),"Vidoe Call"]}),Object(f.jsx)("div",{className:"collapsible-body",style:{background:"#313131"},children:Object(f.jsx)("span",{children:Object(f.jsx)("div",{className:"container",children:Object(f.jsx)("div",{className:"row",children:Object(f.jsxs)("div",{className:"col s12",children:[Object(f.jsx)("div",{className:"col s6",children:Object(f.jsx)("input",{onChange:function(e){return D(e)},placeholder:"unit",type:"text",name:"unit",className:"validate add_pack_input"})}),Object(f.jsx)("div",{className:"col s6",children:Object(f.jsx)("input",{onChange:function(e){return D(e)},placeholder:"value",type:"text",name:"value",className:"validate add_pack_input"})})]})})})})})]})]})]}),Object(f.jsx)("div",{className:"col s12",children:Object(f.jsx)("div",{className:"col s4",style:{marginTop:30},children:Object(f.jsx)("input",{type:"submit",className:"btn btn-success waves-effect green darken-3",style:{textTransform:"lowercase"},value:"save package"})})})]})})})]})})})]})}),Object(f.jsx)("div",{id:"back_detail",children:Object(f.jsx)("div",{className:"container",children:Object(f.jsx)("div",{className:"row",children:Object(f.jsxs)("div",{className:"col s12",children:[Object(f.jsx)("div",{className:"col s1 m2 l4"}),Object(f.jsx)("div",{className:"col s10 m8 l4",style:{marginTop:30},children:Object(f.jsxs)("div",{className:"card grey darken-4",children:[Object(f.jsxs)("div",{className:"card-content white-text",children:[Object(f.jsx)("span",{className:"card-title",children:"Delete Package"}),Object(f.jsxs)("p",{children:["Do you want to delete the ",Object(f.jsx)("span",{id:"serial_pp"})," ","package?"]})]}),Object(f.jsxs)("div",{className:"card-action",children:[Object(f.jsx)("a",{className:"btn btn-secondary waves-effect red",id:"deleted",style:{textTransform:"lowercase",marginBottom:15,float:"left"},children:"delete"}),Object(f.jsx)("a",{className:"btn btn-secondary waves-effect blue darken-3",id:"cancel",style:{textTransform:"lowercase",marginBottom:15,float:"right"},children:"back"})]})]})}),Object(f.jsx)("div",{className:"col s1 m2 l4"})]})})})})]})}));t.default=Object(a.memo)((function(){return Object(f.jsx)(m,{})}))},327:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(329),c=n(342),s=n.n(c),r=n(346),i=n.n(r);i()(s.a,{retries:a.e,retryDelay:i.a.exponentialDelay});var o=s.a.create({baseURL:a.d,timeout:a.g,headers:a.c});s.a.create({baseURL:a.d,timeout:a.g,headers:a.b})},328:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(333);function c(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],a=!0,c=!1,s=void 0;try{for(var r,i=e[Symbol.iterator]();!(a=(r=i.next()).done)&&(n.push(r.value),!t||n.length!==t);a=!0);}catch(o){c=!0,s=o}finally{try{a||null==i.return||i.return()}finally{if(c)throw s}}return n}}(e,t)||Object(a.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},329:function(e,t,n){"use strict";n.d(t,"f",(function(){return c})),n.d(t,"d",(function(){return s})),n.d(t,"g",(function(){return r})),n.d(t,"a",(function(){return i})),n.d(t,"e",(function(){return o})),n.d(t,"b",(function(){return u})),n.d(t,"c",(function(){return d}));var a=n(43),c="http://188.34.138.109:7000/",s="".concat("http://185.235.43.243:3000/api/").concat("v1"),r=("".concat(s,"/auth/upload"),6e4),i="clinic_img_1254",o=3,l=Object(a.a)(),u={"Content-Type":"application/json"},d={"Access-Control-Allow-Origin":"*","Content-Type":"application/json",Authorization:"Bearer "+l}},331:function(e,t,n){"use strict";var a=n(0),c=n(173),s=n.n(c),r=n(375),i=n(55),o=n.n(i),l=n(2);t.a=function(){Object(a.useEffect)((function(){var e=document.querySelectorAll(".sidenav");o.a.Sidenav.init(e),s()(".sidebar-collapse").click((function(){s()(".side-nav.fixed.leftside-navigation").css("transform","translateX(0px)")}))}));var e=Object(r.a)().i18n;return Object(l.jsx)("header",{id:"header",className:"page-topbar",children:Object(l.jsx)("div",{className:"navbar-fixed",children:Object(l.jsx)("nav",{className:"navbar-color gradient-45deg-light-blue-cyan-header",children:Object(l.jsxs)("div",{className:"nav-wrapper",children:[Object(l.jsx)("ul",{className:"left",children:Object(l.jsx)("li",{children:Object(l.jsx)("h1",{className:"logo-wrapper",children:Object(l.jsx)("a",{className:"brand-logo darken-1",children:Object(l.jsx)("span",{children:"Bi Con"})})})})}),Object(l.jsxs)("ul",{className:"right hide-on-med-and-down",children:[Object(l.jsx)("li",{children:Object(l.jsxs)("div",{className:"box_switch",children:[Object(l.jsx)("input",{onClick:function(t){localStorage.getItem("lan")||localStorage.setItem("lan","en");var n=s()(".mini-box"),a=localStorage.getItem("lan");s()("input[name=cahngelan]").is(":checked")&&"en"===a?(s()(".mini-box #one").css({display:"none"}),s()(".mini-box #tow").css({display:"flex"}),s()(".box_switch .one img").css({display:"block"}),s()(".box_switch .tow img").css({display:"none"}),n.addClass("actives"),localStorage.setItem("lan","ch")):(s()(".mini-box #tow").css({display:"none"}),s()(".mini-box #one").css({display:"flex"}),s()(".box_switch .one img").css({display:"none"}),s()(".box_switch .tow img").css({display:"block"}),n.removeClass("actives"),localStorage.setItem("lan","en"));var c=localStorage.getItem("lan");e.changeLanguage(c)},name:"cahngelan",checked:"en"!==localStorage.getItem("lan"),type:"checkbox",id:"switcher"}),Object(l.jsxs)("div",{className:"mini-box ".concat("ch"===localStorage.getItem("lan")?"actives":""),children:[Object(l.jsx)("span",{id:"one",style:{display:"".concat("en"===localStorage.getItem("lan")?"flex":"none")},children:"En"}),Object(l.jsx)("span",{id:"tow",style:{display:"".concat("ch"===localStorage.getItem("lan")?"flex":"none")},children:"Ch"})]}),Object(l.jsx)("span",{className:"one",children:Object(l.jsx)("img",{style:{display:"".concat("en"===localStorage.getItem("lan")?"none":"block")},src:"/img/icons/china.png"})}),Object(l.jsx)("span",{className:"tow",children:Object(l.jsx)("img",{style:{display:"".concat("ch"===localStorage.getItem("lan")?"none":"block")},src:"/img/icons/united-kingdom.png"})})]})}),Object(l.jsx)("li",{children:Object(l.jsx)("a",{href:"javascript:void(0);",className:"waves-effect waves-block waves-light toggle-fullscreen",children:Object(l.jsx)("i",{className:"material-icons",children:"settings_overscan"})})})]})]})})})})}},333:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(334);function c(e,t){if(e){if("string"===typeof e)return Object(a.a)(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Object(a.a)(e,t):void 0}}},334:function(e,t,n){"use strict";function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}n.d(t,"a",(function(){return a}))},338:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n(327),c=n(174),s={get_admin_dashboard_data:function(){return a.a.get(c.a.get_dashboard_path)},GetAllDoctors:function(){return a.a.get("admin/doctors")},GetAllPatient:function(){return a.a.get("admin/patients")},GetAllClinic:function(){return a.a.get("admin/doctors/clinics")},GetAllUsers:function(){return a.a.get("users")},GetOneDoctor:function(e){return a.a.get("admin/doctors/"+e)},GetOnePatient:function(e){return a.a.get("admin/patients/"+e)},GetOneClinic:function(e){return a.a.get("/admin/doctors/clinics/"+e)},DeleteOneDoctor:function(e){return a.a.delete("admin/doctors/"+e)},DeleteOnePatient:function(e){return a.a.delete("admin/patients/"+e)},DelteClinic:function(e){return a.a.delete("/doctors/clinics/"+e)},UpdateDoctor:function(e,t){return a.a.put("admin/doctors/"+e,t)},AddSpecialty:function(e){return a.a.post("admin/specialties",e)},GetAllSpecials:function(){return a.a.get("admin/specialties")},DeleteSpecilty:function(e){return a.a.delete("admin/specialties/"+e)},AddPackage:function(e){return a.a.post("admin/packages",e)},AddPackageDoctor:function(e){return a.a.post("doctors/packages",e)},DeletePackage:function(e){return a.a.delete("admin/packages/"+e)},DeleteDoctorPackage:function(e){return a.a.delete("doctors/packages/"+e)},GetAllPackage:function(){return a.a.get("admin/packages")},GetAllDoctorPackage:function(){return a.a.get("doctors/packages")},AddNewUser:function(e){return a.a.post("superadmin/admins",e)},GetAllUserAdmin:function(){return a.a.get("superadmin/admins")},SignIn:function(e){return a.a.post("auth/login",e)},SaveTest:function(e){return a.a.post("admin/tests",e)},Uploaded:function(e){return a.a.post("/auth/upload",e)},UpdatePatient:function(e,t){return a.a.put("/admin/patients/"+e,t)},DeleteAdmin:function(e){return a.a.delete("/superadmin/admins/"+e)}}},340:function(e,t,n){},350:function(e,t,n){"use strict";var a=n(0),c=n(72),s=n(375),r=n(26),i=(n(55),n(173)),o=n.n(i),l=n(2);t.a=function(){Object(a.useEffect)((function(){o()("li#logouts").click((function(){localStorage.removeItem(r.d),localStorage.removeItem(r.a),setTimeout((function(){window.location.pathname="/signin"}),1200)})),o()(".sidebar-collapse").click((function(){setTimeout((function(){o()(".back_pack").fadeIn()}),200)})),o()(".back_pack").click((function(){o()(".back_pack").fadeOut(),o()("ul.side-nav.leftside-navigation").css("transform","translateX(-100%) !important")}))}));var e=Object(s.a)().t;return Object(l.jsxs)("aside",{id:"left-sidebar-nav",children:[Object(l.jsx)("div",{className:"back_pack"}),Object(l.jsxs)("ul",{id:"slide-out",className:"side-nav fixed leftside-navigation",children:[Object(l.jsx)("li",{className:"user-details cyan darken-2",children:Object(l.jsxs)("div",{className:"row",children:[Object(l.jsx)("div",{className:"col col s4 m4 l4",children:Object(l.jsx)("img",{src:"/img/avatar/avatar-13.png",alt:"",className:"circle responsive-img valign profile-image cyan"})}),Object(l.jsxs)("div",{className:"col col s8 m8 l8",children:[Object(l.jsx)("p",{className:"user-roal",id:"user-roel-det",children:"Emran rastadi sdvsdvvvvvvvvvvvvvvvvvvv"}),Object(l.jsx)("p",{className:"user-roal",children:"doctor"})]})]})}),Object(l.jsx)("li",{className:"no-padding",children:Object(l.jsxs)("ul",{className:"collapsible","data-collapsible":"accordion",children:[Object(l.jsx)("li",{className:"bold",children:Object(l.jsxs)("a",{className:"waves-effect waves-cyan",children:[Object(l.jsx)("i",{className:"material-icons",children:"pie_chart_outlined"}),Object(l.jsx)(c.c,{to:"/doctor",children:Object(l.jsx)("span",{className:"nav-text","data-localize":"menu.dashboard",children:e("Dashboard.l")})})]})}),Object(l.jsx)("li",{className:"bold",children:Object(l.jsxs)("a",{className:"waves-effect waves-cyan",children:[Object(l.jsx)("i",{className:"material-icons",children:"my_location"}),Object(l.jsx)(c.c,{to:"/add-clinic",children:Object(l.jsx)("span",{className:"nav-text","data-localize":"menu.dashboard",children:"Clinic Address"})})]})}),Object(l.jsx)("li",{className:"bold",children:Object(l.jsxs)("a",{className:"waves-effect waves-cyan",children:[Object(l.jsx)("i",{children:Object(l.jsx)("img",{src:"/img/icons/schedule.png"})}),Object(l.jsx)(c.c,{to:"/schedule-list",children:Object(l.jsx)("span",{className:"nav-text","data-localize":"menu.doctors",children:"Schedule"})})]})}),Object(l.jsx)("li",{className:"bold",children:Object(l.jsxs)("a",{className:"waves-effect waves-cyan",children:[Object(l.jsx)("i",{children:Object(l.jsx)("img",{src:"/img/icons/admin.png"})}),Object(l.jsx)(c.c,{to:"/patient-profile",children:Object(l.jsx)("span",{className:"nav-text",children:e("Patient.l")})})]})}),Object(l.jsx)("li",{className:"bold",children:Object(l.jsxs)("a",{className:"waves-effect waves-cyan",children:[Object(l.jsx)("i",{className:"material-icons",children:"style"}),Object(l.jsx)(c.c,{to:"/doctor-list-package",children:Object(l.jsx)("span",{className:"nav-text","data-localize":"menu.doctors",children:e("package.l")})})]})}),Object(l.jsx)("li",{className:"bold",children:Object(l.jsxs)("a",{className:"waves-effect waves-cyan",children:[Object(l.jsx)("i",{children:Object(l.jsx)("img",{src:"/img/icons/help.png"})}),Object(l.jsx)(c.c,{to:"/assistant-request",children:Object(l.jsx)("span",{className:"nav-text",children:"Assisstant"})})]})}),Object(l.jsx)("li",{className:"bold",children:Object(l.jsxs)("a",{className:"waves-effect waves-cyan",children:[Object(l.jsx)("i",{className:"material-icons",children:"report"}),Object(l.jsx)(c.c,{to:"/",children:Object(l.jsx)("span",{className:"nav-text",children:e("Report.l")})})]})}),Object(l.jsx)("li",{className:"bold",id:"logouts",children:Object(l.jsxs)("a",{className:"waves-effect waves-cyan",children:[Object(l.jsx)("i",{className:"material-icons",children:"keyboard_tab"}),Object(l.jsx)("span",{className:"nav-text",children:e("Logout.l")})]})})]})})]}),Object(l.jsx)("a",{href:"#","data-activates":"slide-out",className:"sidebar-collapse btn-floating btn-medium waves-effect waves-light hide-on-large-only",children:Object(l.jsx)("i",{className:"material-icons",children:"menu"})})]})}},358:function(e,t,n){"use strict";n.d(t,"m",(function(){return A})),n.d(t,"i",(function(){return T})),n.d(t,"d",(function(){return C})),n.d(t,"n",(function(){return D})),n.d(t,"l",(function(){return I})),n.d(t,"a",(function(){return P})),n.d(t,"j",(function(){return E})),n.d(t,"o",(function(){return G})),n.d(t,"e",(function(){return L})),n.d(t,"r",(function(){return U})),n.d(t,"h",(function(){return J})),n.d(t,"q",(function(){return M})),n.d(t,"c",(function(){return R})),n.d(t,"p",(function(){return q})),n.d(t,"k",(function(){return z})),n.d(t,"g",(function(){return B})),n.d(t,"b",(function(){return K})),n.d(t,"f",(function(){return X}));var a=n(343),c=n.n(a),s=n(344),r=(n(0),n(327)),i=function(){return r.a.get("/doctors/patients")},o=function(){return r.a.get("/auth/me")},l=function(){return r.a.get("/schedules")},u=function(){return r.a.get("/doctors/assistants")},d=function(e){return r.a.post("/doctors/assistants/confirm",e)},j=function(e){return r.a.delete("/doctors/assistants/reject/"+e)},h=function(e){return r.a.post("/doctors/patients/confirm",e)},f=function(e){return r.a.get("/patients/"+e)},m=function(e){return r.a.post("/doctors/patients/reject",e)},p=function(e){return r.a.post("/auth/upload",e)},b=function(){return r.a.get("/doctors/clinics")},x=function(e){return r.a.delete("/doctors/clinics/"+e)},O=function(e,t){return r.a.put("doctors/clinics/"+e,t)},v=function(e){return r.a.post("schedules",e)},g=function(e){return r.a.post("/doctors/clinics",e)},y=n(55),N=n.n(y),w=n(173),k=n.n(w),_=n(338),S="clinic_img_1254",A=function(){return function(){var e=Object(s.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i().then((function(e){t({type:"GET_ALL_PATIENT_SUCCESS",response:e})}),(function(e){N.a.toast({html:""+e.response.data.error})})).catch((function(e){N.a.toast({html:"Network has error! try again ..."})}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},T=function(){return function(){var e=Object(s.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o().then((function(e){t({type:"GET_ME",responseGetMe:e})}),(function(e){N.a.toast({html:""+e.response.data.error})})).catch((function(e){N.a.toast({html:"Network has error! try again ..."})}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},C=function(e){var t=JSON.stringify({assistant:e});return function(){var e=Object(s.a)(c.a.mark((function e(n){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d(t).then((function(e){N.a.toast({html:"Assistant approval completed successfully ..."}),setTimeout((function(){window.location.reload()}),1e3)}),(function(e){N.a.toast({html:""+e.response.data.error})})).catch((function(e){N.a.toast({html:"Network has error! try again ..."})}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},D=function(e){return function(){var t=Object(s.a)(c.a.mark((function t(n){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,j(e).then((function(e){N.a.toast({html:"Assistant reject completed successfully ..."}),setTimeout((function(){window.location.reload()}),1e3)}),(function(e){N.a.toast({html:""+e.response.data.error})})).catch((function(e){N.a.toast({html:"Network has error! try again ..."})}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},I=function(){return function(){var e=Object(s.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u().then((function(e){t({type:"ALL_REQ_ASSIS",responseAssis:e})}),(function(e){N.a.toast({html:""+e.response.data.error})})).catch((function(e){N.a.toast({html:"Network has error! try again ..."})}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},P=function(e){return localStorage.removeItem(S),function(){var t=Object(s.a)(c.a.mark((function t(n){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g(e).then((function(e){N.a.toast({html:"Add clinic was successfully.please wait to reload ..."}),setTimeout((function(){window.location.reload()}),700)}),(function(e){N.a.toast({html:""+e.response.data.error})})).catch((function(e){N.a.toast({html:"Network has error! try again ..."})}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},E=function(e){return function(){var t=Object(s.a)(c.a.mark((function t(n){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f(e).then((function(e){n({type:"SINGLE_PATIENT_OK",responsePat:e})}),(function(e){N.a.toast({html:""+e.response.data.error}),setTimeout((function(){window.location.pathname="/patient-profile"}),1e3)})).catch((function(e){N.a.toast({html:"Network has error! try again ..."}),setTimeout((function(){window.location.pathname="/patient-profile"}),1e3)}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},G=function(e){var t=JSON.stringify({patient:e});return function(){var e=Object(s.a)(c.a.mark((function e(n){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m(t).then((function(e){N.a.toast({html:"Patient reject successfully!"}),setTimeout((function(){window.location.pathname="/patient-profile"}),1e3)}),(function(e){N.a.toast({html:""+e.response.data.error})})).catch((function(e){N.a.toast({html:"Network has error! try again ..."})}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},L=function(e){var t=JSON.stringify({patient:e});return function(){var e=Object(s.a)(c.a.mark((function e(n){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h(t).then((function(e){N.a.toast({html:"Patient approval completed successfully ..."}),setTimeout((function(){window.location.reload()}),1e3)}),(function(e){N.a.toast({html:""+e.response.data.error})})).catch((function(e){N.a.toast({html:"Network has error! try again ..."})}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},U=function(e){return function(){var t=Object(s.a)(c.a.mark((function t(n,a){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return localStorage.setItem(S,""),t.next=3,p(e).then((function(e){N.a.toast({html:"clinic img is uploaded"}),localStorage.setItem(S,JSON.stringify(e)),k()("#uploaded_img_clinic").fadeOut()}),(function(e){N.a.toast({html:""+e.response.data.error})})).catch((function(e){N.a.toast({html:"Network has error! try again ..."})}));case 3:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()},J=function(){return function(){var e=Object(s.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b().then((function(e){t({type:"DOCTOR_CLINIC_GET",resDocClinic:e})}),(function(e){N.a.toast({html:""+e.response.data.error})})).catch((function(e){N.a.toast({html:"Network has error! try again ..."})}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},M=function(e,t){return localStorage.removeItem(S),function(){var n=Object(s.a)(c.a.mark((function n(a){return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,O(e,t).then((function(e){N.a.toast({html:"update successfully.please wait to reload ..."}),setTimeout((function(){window.location.reload()}),700)}),(function(e){N.a.toast({html:""+e.response.data.error})})).catch((function(e){N.a.toast({html:"Network has error! try again ..."})}));case 2:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},R=function(e){var t=JSON.stringify(e);return function(){var e=Object(s.a)(c.a.mark((function e(n){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v(t).then((function(e){N.a.toast({html:"Schedule added successfully.please wait to reload ..."}),setTimeout((function(){window.location.reload()}),700)}),(function(e){N.a.toast({html:""+e.response.data.error})})).catch((function(e){N.a.toast({html:"Network has error! try again ..."})}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},q=function(){return function(){var e=Object(s.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l().then((function(e){t({type:"SCHADULE_LIST",responseSche:e})}),(function(e){N.a.toast({html:""+e.response.data.error})})).catch((function(e){N.a.toast({html:"Network has error! try again ..."})}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},z=function(){return function(){var e=Object(s.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.a.GetAllDoctorPackage().then((function(e){t({type:"GET_ALL_PACK_DOCTOR",response:e})}),(function(e){N.a.toast({html:""+e.response.data.error})})).catch((function(e){N.a.toast({html:"Network has error! try again ..."})}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},B=function(e){return function(){var t=Object(s.a)(c.a.mark((function t(n){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,_.a.DeleteDoctorPackage(e).then((function(e){N.a.toast({html:"Updateed successfully!"}),setTimeout((function(){window.location.reload()}),800)}),(function(e){N.a.toast({html:""+e.response.data.error})})).catch((function(e){N.a.toast({html:"Network has error! try again ..."})}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},K=function(e){return function(){var t=Object(s.a)(c.a.mark((function t(n){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,_.a.AddPackageDoctor(e).then((function(e){N.a.toast({html:"Added Successfully ! please wait for reload page ..."}),setTimeout((function(){window.location.pathname="/doctor-list-package"}),1500)}),(function(e){N.a.toast({html:""+e.response.data.error})})).catch((function(e){N.a.toast({html:"Network has error! try again ..."})}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},X=function(e){return function(){var t=Object(s.a)(c.a.mark((function t(n){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x(e).then((function(e){N.a.toast({html:"Delete successfully ! please wait ..."}),setTimeout((function(){window.location.reload()}),600)}),(function(e){N.a.toast({html:""+e.response.data.error})})).catch((function(e){N.a.toast({html:"Network has error! try again ..."})}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}}]);
//# sourceMappingURL=5.87f90b10.chunk.js.map