(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{qebg:function(t,n,o){"use strict";o.r(n),o.d(n,"ResourcesModule",(function(){return _}));var e=o("ofXK"),i=o("tyNb"),r=o("cp0P"),a=o("fXoL"),g=o("tk/3"),c=o("jhN1");let p=(()=>{class t{constructor(t){this.domSanitizer=t}transform(t){return this.domSanitizer.bypassSecurityTrustHtml(t)}}return t.\u0275fac=function(n){return new(n||t)(a.Hb(c.b))},t.\u0275pipe=a.Gb({name:"noSanitize",type:t,pure:!0}),t})();function m(t,n){if(1&t&&(a.Kb(0,"div",8),a.Kb(1,"div",9),a.Kb(2,"h3",10),a.lc(3),a.Jb(),a.Jb(),a.Kb(4,"div",11),a.Ib(5,"div",12),a.Wb(6,"noSanitize"),a.Ib(7,"div",13),a.Jb(),a.Jb()),2&t){const t=n.$implicit;a.xb(3),a.mc(t.title),a.xb(2),a.Yb("innerHTML",a.Xb(6,2,t.content),a.hc)}}let d=(()=>{class t{constructor(t){this.http=t,this.pages=[]}ngOnInit(){var t=[];t.push(this.http.get("assets/data/pages/pages.json")),t.push(this.http.get("assets/data/pages/categories.json")),Object(r.a)(t).subscribe(t=>{this.allPages=t[0].pages,this.allCategories=t[1].categories;for(var n=[],o=0;o<this.allPages.length;o++)"resources"==this.allPages[o].category&&(this.pages.push(this.allPages[o]),n.push(this.http.get("assets/data/pages/"+this.allPages[o].contentPath+".html",{responseType:"text"})));Object(r.a)(n).subscribe(t=>{for(var n=0;n<t.length;n++)this.pages[n].content=t[n]})})}}return t.\u0275fac=function(n){return new(n||t)(a.Hb(g.a))},t.\u0275cmp=a.Bb({type:t,selectors:[["app-root"]],decls:17,vars:1,consts:[["id","main",1,"main"],[1,"content-container"],[1,"content"],[1,"content-header"],[1,"content-title"],[1,"content-body"],[1,"page-content"],["class","subsection",4,"ngFor","ngForOf"],[1,"subsection"],[1,"subsection-header"],[1,"subsection-title"],[1,"subsection-body"],[3,"innerHTML"],[2,"clear","both"]],template:function(t,n){1&t&&(a.Kb(0,"div",0),a.Kb(1,"div",1),a.Kb(2,"div",2),a.Kb(3,"div",3),a.Kb(4,"h1",4),a.lc(5,"Resources"),a.Jb(),a.Jb(),a.Kb(6,"div",5),a.Kb(7,"p"),a.lc(8," Everybody loves resources!"),a.Ib(9,"br"),a.lc(10," The more you got, the better "),a.Ib(11,"br"),a.Ib(12,"br"),a.lc(13," At least, that's my opinion... "),a.Jb(),a.Ib(14,"br"),a.Kb(15,"div",6),a.kc(16,m,8,4,"div",7),a.Jb(),a.Jb(),a.Jb(),a.Jb(),a.Jb()),2&t&&(a.xb(16),a.Yb("ngForOf",n.pages))},directives:[e.i],pipes:[p],styles:['.text-secret[_ngcontent-%COMP%]{color:#000}a.text-secret[_ngcontent-%COMP%]{color:#000!important}a.text-secret[_ngcontent-%COMP%]:active, a.text-secret[_ngcontent-%COMP%]:hover, a.text-secret[_ngcontent-%COMP%]:link, a.text-secret[_ngcontent-%COMP%]:visited{color:#000!important;-webkit-text-decoration-color:#000;text-decoration-color:#000}a[_ngcontent-%COMP%]{color:#fca505}a[_ngcontent-%COMP%]:link, a[_ngcontent-%COMP%]:visited{color:#fca505;-webkit-text-decoration-color:transparent;text-decoration-color:transparent}a[_ngcontent-%COMP%]:active, a[_ngcontent-%COMP%]:hover{color:#e86400;-webkit-text-decoration-color:transparent;text-decoration-color:transparent}.btn-group[_ngcontent-%COMP%] > .btn-group[_ngcontent-%COMP%]:not(:last-child) > .btn[_ngcontent-%COMP%], .btn-group[_ngcontent-%COMP%] > .btn[_ngcontent-%COMP%]:not(:last-child):not(.dropdown-toggle){border-top-right-radius:0;border-bottom-right-radius:0}.btn-group[_ngcontent-%COMP%] > .btn[_ngcontent-%COMP%]:not(:first-child){border-top-left-radius:0;border-bottom-left-radius:0;margin-left:-1px}.btn[_ngcontent-%COMP%]:not(:disabled):not(.disabled){cursor:pointer}.btn-outline-info[_ngcontent-%COMP%]:not(:disabled):active{border-color:#17a2b8}.btn-group-toggle[_ngcontent-%COMP%] > .btn[_ngcontent-%COMP%], .btn-group-toggle[_ngcontent-%COMP%] > .btn-group[_ngcontent-%COMP%] > .btn[_ngcontent-%COMP%]{margin-bottom:0}.btn-group[_ngcontent-%COMP%] > .btn[_ngcontent-%COMP%]{position:relative;flex:1 1 auto}.btn[_ngcontent-%COMP%]{text-align:center;vertical-align:middle;-webkit-user-select:none;-moz-user-select:none;user-select:none;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;font-family:roboto,helvetica;font-weight:700;color:#fff;background-color:#222;border:none;border-radius:3px;padding:10px}.btn[_ngcontent-%COMP%]:hover{background-color:#323232}.btn[_ngcontent-%COMP%]:active{background-color:#000;color:#c60000;font-family:schreibmaschine;font-weight:500;font-size:16px;padding:4px 10px}.btn.disabled[_ngcontent-%COMP%], .btn.disabled[_ngcontent-%COMP%]:active{background-color:#323232;color:#626262}.btn.disabled[_ngcontent-%COMP%]:active{font-family:roboto,helvetica;font-weight:700;font-size:13px;padding:10px}.btn-group[_ngcontent-%COMP%], .btn-group-vertical[_ngcontent-%COMP%]{position:relative;display:inline-flex;vertical-align:middle}.mt-auto[_ngcontent-%COMP%]{margin-top:auto}.mb-auto[_ngcontent-%COMP%]{margin-bottom:auto}.mr-auto[_ngcontent-%COMP%]{margin-right:auto}.ml-auto[_ngcontent-%COMP%]{margin-left:auto}.row[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;margin-right:-15px;margin-left:-15px}.flex-nowrap[_ngcontent-%COMP%]{flex-wrap:nowrap!important}.flex-column[_ngcontent-%COMP%]{flex-direction:column!important}.d-inline[_ngcontent-%COMP%]{display:inline!important}.d-inline-block[_ngcontent-%COMP%]{display:inline-block!important}.d-block[_ngcontent-%COMP%]{display:block!important}.d-none[_ngcontent-%COMP%]{display:none!important}.position-absolute[_ngcontent-%COMP%]{position:absolute}.border[_ngcontent-%COMP%]{border:1px solid #dee2e6}.border-0[_ngcontent-%COMP%]{border:0!important}.rounded[_ngcontent-%COMP%]{border-radius:.25rem!important}h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{margin-top:0;margin-bottom:.5rem;font-family:inherit;font-weight:500;line-height:1.2}.shadow-lg[_ngcontent-%COMP%]{box-shadow:0 1rem 3rem rgba(0,0,0,.175)!important}*[_ngcontent-%COMP%]{font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,open-sans,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji}label[_ngcontent-%COMP%]{display:inline-block;margin-bottom:.5rem}.btn-info[_ngcontent-%COMP%]{color:#fff}textarea.form-control[_ngcontent-%COMP%]{height:auto}.input-group[_ngcontent-%COMP%]{position:relative;display:flex;flex-wrap:wrap;align-items:stretch;width:100%}.input-group[_ngcontent-%COMP%] > .input-group-append[_ngcontent-%COMP%]{margin-left:-1px;display:flex}.input-group[_ngcontent-%COMP%] > .input-group-append[_ngcontent-%COMP%] > .btn[_ngcontent-%COMP%]{border-top-left-radius:0;border-bottom-left-radius:0}.input-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]{position:relative;flex:1 1 auto;width:1%;margin-bottom:0}.input-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:not(:last-child){border-top-right-radius:0;border-bottom-right-radius:0}.form-control[_ngcontent-%COMP%]{display:block;width:100%;height:calc(2.25rem + 2px);padding:.375rem .75rem;font-size:1rem;font-weight:400;line-height:1.5;color:#495057;background-color:#fff;background-clip:padding-box;border:1px solid #ced4da;border-radius:.25rem;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out}.form-control[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:disabled{background-color:#e9ecef;opacity:1}p[_ngcontent-%COMP%]:first-child{margin-top:0}.float-left[_ngcontent-%COMP%]{float:left!important}.float-right[_ngcontent-%COMP%]{float:right!important}.small[_ngcontent-%COMP%]{font-size:80%;font-weight:400}.text-secondary[_ngcontent-%COMP%]{color:#6c757d}.text-danger[_ngcontent-%COMP%]{color:#dc3545}.text-muted[_ngcontent-%COMP%]{color:#6c757d}.font-weight-light[_ngcontent-%COMP%]{font-weight:300!important}.text-left[_ngcontent-%COMP%]{text-align:left!important}.text-center[_ngcontent-%COMP%]{text-align:center!important}.text-right[_ngcontent-%COMP%]{text-align:right!important}.align-items-center[_ngcontent-%COMP%]{align-items:center!important}.justify-content-center[_ngcontent-%COMP%]{justify-content:center!important}.rounded-circle[_ngcontent-%COMP%]{border-radius:50%!important}button[_ngcontent-%COMP%]{-webkit-appearance:button;text-transform:none;overflow:visible;margin:0}h3[_ngcontent-%COMP%]{font-size:1.75rem}h4[_ngcontent-%COMP%]{font-size:1.5rem}h6[_ngcontent-%COMP%]{font-size:1rem}h6.text-muted[_ngcontent-%COMP%]{font-weight:300;font-size:.8em}hr[_ngcontent-%COMP%]{margin-top:1rem;margin-bottom:1rem;border:0;border-top:1px solid rgba(0,0,0,.1)}.w-25[_ngcontent-%COMP%]{width:25%!important}.w-50[_ngcontent-%COMP%]{width:50%!important}.w-75[_ngcontent-%COMP%]{width:75%!important}.w-100[_ngcontent-%COMP%]{width:100%!important}.card-holder[_ngcontent-%COMP%]{min-height:100vh;background-color:#000}.card-holder[_ngcontent-%COMP%]   .card-section-division[_ngcontent-%COMP%]{border-bottom:2px solid #323232;margin-bottom:35px;display:flex}.card-holder[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{width:154px;display:inline-grid;margin:5px}.card-holder[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-weight:700;display:flex;text-align:center;margin:auto auto 5px}.card-holder[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{border:2px solid #323232;width:150px;height:150px}.card-holder[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%]{border-color:#222}.card-holder[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:active   img[_ngcontent-%COMP%]{border-color:#000}.card-holder[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:10px}.card-holder[_ngcontent-%COMP%]   .card.card-large[_ngcontent-%COMP%]{width:304px}.card-holder[_ngcontent-%COMP%]   .card.card-large[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:300px}.bg-white[_ngcontent-%COMP%]{background-color:#fff!important}.bg-info[_ngcontent-%COMP%]{background-color:#17a2b8!important}.text-white[_ngcontent-%COMP%]{color:#fff!important}.jumbotron[_ngcontent-%COMP%]{padding:2rem 1rem;margin-bottom:2rem;background-color:#e9ecef;border-radius:.3rem}@media (min-width:576px){.jumbotron[_ngcontent-%COMP%]{padding:4rem 2rem}}section[_ngcontent-%COMP%]{display:block}.container[_ngcontent-%COMP%]{margin-right:auto;margin-left:auto}.col[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]{width:100%;padding-right:15px;padding-left:15px}.col[_ngcontent-%COMP%]{flex-basis:0;flex-grow:1;max-width:100%;position:relative}a[_ngcontent-%COMP%]:not([href]):not([tabindex]){color:inherit;text-decoration:none}.clearfix[_ngcontent-%COMP%]:after{display:block;clear:both;content:""}.main[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{min-width:500px}.main[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .content-header[_ngcontent-%COMP%]{display:flex;width:100%;padding:30px 0}.main[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .content-header[_ngcontent-%COMP%]   .content-title[_ngcontent-%COMP%]{float:left;margin:auto;text-align:center;font-size:5vh;font-family:roboto,helvetica}.main[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .content-body[_ngcontent-%COMP%]{margin:20px 10%}.main[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .content-body[_ngcontent-%COMP%]   .centered[_ngcontent-%COMP%]{display:block;margin:auto;text-align:center}@media (max-width:500px){.main[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{min-width:0}.main[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .content-header[_ngcontent-%COMP%]{width:90%;margin:0 5%}.main[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .content-body[_ngcontent-%COMP%]{margin:20px 5%}}.hidden[_ngcontent-%COMP%]{display:none!important}.col-md-1[_ngcontent-%COMP%]{width:8.3333333333%}.col-md-1[_ngcontent-%COMP%], .col-md-2[_ngcontent-%COMP%]{float:left;padding-left:15px;padding-right:15px}.col-md-2[_ngcontent-%COMP%]{width:16.6666666667%}.col-md-3[_ngcontent-%COMP%]{width:25%}.col-md-3[_ngcontent-%COMP%], .col-md-4[_ngcontent-%COMP%]{float:left;padding-left:15px;padding-right:15px}.col-md-4[_ngcontent-%COMP%]{width:33.3333333333%}.col-md-5[_ngcontent-%COMP%]{width:41.6666666667%}.col-md-5[_ngcontent-%COMP%], .col-md-6[_ngcontent-%COMP%]{float:left;padding-left:15px;padding-right:15px}.col-md-6[_ngcontent-%COMP%]{width:50%}.col-md-7[_ngcontent-%COMP%]{width:58.3333333333%}.col-md-7[_ngcontent-%COMP%], .col-md-8[_ngcontent-%COMP%]{float:left;padding-left:15px;padding-right:15px}.col-md-8[_ngcontent-%COMP%]{width:66.6666666667%}.col-md-9[_ngcontent-%COMP%]{width:75%}.col-md-9[_ngcontent-%COMP%], .col-md-10[_ngcontent-%COMP%]{float:left;padding-left:15px;padding-right:15px}.col-md-10[_ngcontent-%COMP%]{width:83.3333333333%}.col-md-11[_ngcontent-%COMP%]{width:91.6666666667%}.col-md-11[_ngcontent-%COMP%], .col-md-12[_ngcontent-%COMP%]{float:left;padding-left:15px;padding-right:15px}.col-md-12[_ngcontent-%COMP%]{width:100%}.p-0[_ngcontent-%COMP%]{padding:0!important}.p-1[_ngcontent-%COMP%]{padding:5px!important}.p-2[_ngcontent-%COMP%]{padding:10px!important}.p-3[_ngcontent-%COMP%]{padding:15px!important}.p-4[_ngcontent-%COMP%]{padding:20px!important}.p-5[_ngcontent-%COMP%]{padding:25px!important}.p-6[_ngcontent-%COMP%]{padding:30px!important}.p-7[_ngcontent-%COMP%]{padding:35px!important}.p-8[_ngcontent-%COMP%]{padding:40px!important}.p-9[_ngcontent-%COMP%]{padding:45px!important}.p-10[_ngcontent-%COMP%]{padding:50px!important}.pr-0[_ngcontent-%COMP%]{padding-right:0!important}.pr-1[_ngcontent-%COMP%]{padding-right:5px!important}.pr-2[_ngcontent-%COMP%]{padding-right:10px!important}.pr-3[_ngcontent-%COMP%]{padding-right:15px!important}.pr-4[_ngcontent-%COMP%]{padding-right:20px!important}.pr-5[_ngcontent-%COMP%]{padding-right:25px!important}.pr-6[_ngcontent-%COMP%]{padding-right:30px!important}.pr-7[_ngcontent-%COMP%]{padding-right:35px!important}.pr-8[_ngcontent-%COMP%]{padding-right:40px!important}.pr-9[_ngcontent-%COMP%]{padding-right:45px!important}.pr-10[_ngcontent-%COMP%]{padding-right:50px!important}.pl-0[_ngcontent-%COMP%]{padding-left:0!important}.pl-1[_ngcontent-%COMP%]{padding-left:5px!important}.pl-2[_ngcontent-%COMP%]{padding-left:10px!important}.pl-3[_ngcontent-%COMP%]{padding-left:15px!important}.pl-4[_ngcontent-%COMP%]{padding-left:20px!important}.pl-5[_ngcontent-%COMP%]{padding-left:25px!important}.pl-6[_ngcontent-%COMP%]{padding-left:30px!important}.pl-7[_ngcontent-%COMP%]{padding-left:35px!important}.pl-8[_ngcontent-%COMP%]{padding-left:40px!important}.pl-9[_ngcontent-%COMP%]{padding-left:45px!important}.pl-10[_ngcontent-%COMP%]{padding-left:50px!important}.pt-0[_ngcontent-%COMP%]{padding-top:0!important}.pt-1[_ngcontent-%COMP%]{padding-top:5px!important}.pt-2[_ngcontent-%COMP%]{padding-top:10px!important}.pt-3[_ngcontent-%COMP%]{padding-top:15px!important}.pt-4[_ngcontent-%COMP%]{padding-top:20px!important}.pt-5[_ngcontent-%COMP%]{padding-top:25px!important}.pt-6[_ngcontent-%COMP%]{padding-top:30px!important}.pt-7[_ngcontent-%COMP%]{padding-top:35px!important}.pt-8[_ngcontent-%COMP%]{padding-top:40px!important}.pt-9[_ngcontent-%COMP%]{padding-top:45px!important}.pt-10[_ngcontent-%COMP%]{padding-top:50px!important}.pb-0[_ngcontent-%COMP%]{padding-bottom:0!important}.pb-1[_ngcontent-%COMP%]{padding-bottom:5px!important}.pb-2[_ngcontent-%COMP%]{padding-bottom:10px!important}.pb-3[_ngcontent-%COMP%]{padding-bottom:15px!important}.pb-4[_ngcontent-%COMP%]{padding-bottom:20px!important}.pb-5[_ngcontent-%COMP%]{padding-bottom:25px!important}.pb-6[_ngcontent-%COMP%]{padding-bottom:30px!important}.pb-7[_ngcontent-%COMP%]{padding-bottom:35px!important}.pb-8[_ngcontent-%COMP%]{padding-bottom:40px!important}.pb-9[_ngcontent-%COMP%]{padding-bottom:45px!important}.pb-10[_ngcontent-%COMP%]{padding-bottom:50px!important}.m-0[_ngcontent-%COMP%]{margin:0!important}.m-1[_ngcontent-%COMP%]{margin:5px!important}.m-2[_ngcontent-%COMP%]{margin:10px!important}.m-3[_ngcontent-%COMP%]{margin:15px!important}.m-4[_ngcontent-%COMP%]{margin:20px!important}.m-5[_ngcontent-%COMP%]{margin:25px!important}.m-6[_ngcontent-%COMP%]{margin:30px!important}.m-7[_ngcontent-%COMP%]{margin:35px!important}.m-8[_ngcontent-%COMP%]{margin:40px!important}.m-9[_ngcontent-%COMP%]{margin:45px!important}.m-10[_ngcontent-%COMP%]{margin:50px!important}.mr-0[_ngcontent-%COMP%]{margin-right:0!important}.mr-1[_ngcontent-%COMP%]{margin-right:5px!important}.mr-2[_ngcontent-%COMP%]{margin-right:10px!important}.mr-3[_ngcontent-%COMP%]{margin-right:15px!important}.mr-4[_ngcontent-%COMP%]{margin-right:20px!important}.mr-5[_ngcontent-%COMP%]{margin-right:25px!important}.mr-6[_ngcontent-%COMP%]{margin-right:30px!important}.mr-7[_ngcontent-%COMP%]{margin-right:35px!important}.mr-8[_ngcontent-%COMP%]{margin-right:40px!important}.mr-9[_ngcontent-%COMP%]{margin-right:45px!important}.mr-10[_ngcontent-%COMP%]{margin-right:50px!important}.ml-0[_ngcontent-%COMP%]{margin-left:0!important}.ml-1[_ngcontent-%COMP%]{margin-left:5px!important}.ml-2[_ngcontent-%COMP%]{margin-left:10px!important}.ml-3[_ngcontent-%COMP%]{margin-left:15px!important}.ml-4[_ngcontent-%COMP%]{margin-left:20px!important}.ml-5[_ngcontent-%COMP%]{margin-left:25px!important}.ml-6[_ngcontent-%COMP%]{margin-left:30px!important}.ml-7[_ngcontent-%COMP%]{margin-left:35px!important}.ml-8[_ngcontent-%COMP%]{margin-left:40px!important}.ml-9[_ngcontent-%COMP%]{margin-left:45px!important}.ml-10[_ngcontent-%COMP%]{margin-left:50px!important}.mt-0[_ngcontent-%COMP%]{margin-top:0!important}.mt-1[_ngcontent-%COMP%]{margin-top:5px!important}.mt-2[_ngcontent-%COMP%]{margin-top:10px!important}.mt-3[_ngcontent-%COMP%]{margin-top:15px!important}.mt-4[_ngcontent-%COMP%]{margin-top:20px!important}.mt-5[_ngcontent-%COMP%]{margin-top:25px!important}.mt-6[_ngcontent-%COMP%]{margin-top:30px!important}.mt-7[_ngcontent-%COMP%]{margin-top:35px!important}.mt-8[_ngcontent-%COMP%]{margin-top:40px!important}.mt-9[_ngcontent-%COMP%]{margin-top:45px!important}.mt-10[_ngcontent-%COMP%]{margin-top:50px!important}.mb-0[_ngcontent-%COMP%]{margin-bottom:0!important}.mb-1[_ngcontent-%COMP%]{margin-bottom:5px!important}.mb-2[_ngcontent-%COMP%]{margin-bottom:10px!important}.mb-3[_ngcontent-%COMP%]{margin-bottom:15px!important}.mb-4[_ngcontent-%COMP%]{margin-bottom:20px!important}.mb-5[_ngcontent-%COMP%]{margin-bottom:25px!important}.mb-6[_ngcontent-%COMP%]{margin-bottom:30px!important}.mb-7[_ngcontent-%COMP%]{margin-bottom:35px!important}.mb-8[_ngcontent-%COMP%]{margin-bottom:40px!important}.mb-9[_ngcontent-%COMP%]{margin-bottom:45px!important}.mb-10[_ngcontent-%COMP%]{margin-bottom:50px!important}  .rotfang, .green-button[_nghost-%COMP%]   button[_ngcontent-%COMP%], .green-button   [_nghost-%COMP%]   button[_ngcontent-%COMP%]{color:green}.main[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]{margin-left:10%;margin-right:10%;margin-top:50px;padding:0}.main[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{border:1px solid #222;background-color:#101010}.main[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .content-header[_ngcontent-%COMP%]{width:90%;margin:0 5%;padding-bottom:10px;border-bottom:2px solid #222}.main[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .content-header[_ngcontent-%COMP%]   .content-title[_ngcontent-%COMP%]{font-size:40px;font-weight:400}.main[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .content-body[_ngcontent-%COMP%]{margin:20px 5% 40px}  .page-content .epigraph{font-style:italic;text-align:center}  .page-content .epigraph .attribution{text-align:right}  .page-content .subsection{margin-bottom:30px}  .page-content .subsection .subsection-header{border-bottom:1px solid #222;margin-bottom:5px;text-align:center}  .page-content .subsection .subsection-header .subsection-title{font-size:24px;margin-top:10px;margin-bottom:5px;font-weight:400}  .page-content .subsection .subsection-body{color:#f6f7f8}  .page-content .thumbnail-container{width:auto;margin-top:6px;margin-bottom:20px}  .page-content .thumbnail-container.right{margin-left:20px;float:right;clear:right}  .page-content .thumbnail-container.left{float:left;clear:left;margin-right:20px}  .page-content .thumbnail-container .thumbnail{padding:3px;border:1px solid #323232;background-color:#101010}  .page-content .thumbnail-container .thumbnail img{display:block}  .page-content .thumbnail-container .thumbnail .caption{padding:3px;font-size:12px}  .page-content .sidebar-container .sidebar{width:380px;margin:12px 6px 0}  .page-content a{color:#fca505;text-decoration:none}']}),t})();var l=o("MIdS");const P=[{path:"",redirectTo:"home",pathMatch:"full"},{path:"home",component:d},{path:":page",component:l.a}];let M=(()=>{class t{}return t.\u0275mod=a.Fb({type:t}),t.\u0275inj=a.Eb({factory:function(n){return new(n||t)},imports:[[i.e.forChild(P)],i.e]}),t})();var O=o("sO0u");let C=(()=>{class t{}return t.\u0275mod=a.Fb({type:t}),t.\u0275inj=a.Eb({factory:function(n){return new(n||t)},providers:[],imports:[[e.b]]}),t})(),_=(()=>{class t{}return t.\u0275mod=a.Fb({type:t,bootstrap:[d]}),t.\u0275inj=a.Eb({factory:function(n){return new(n||t)},providers:[],imports:[[e.b,M,O.a,C]]}),t})()}}]);