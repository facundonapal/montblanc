(function(e){var h="akpagescroll",f=(typeof window.ontouchstart==="undefined")?"mouseup":"touchend",g=(typeof window.ontouchstart==="undefined")?"mousedown":"touchstart",b=(typeof window.ontouchstart==="undefined")?"mousemove":"touchmove",j="click",k=true,a=true,c=(function(n){if(typeof n.MozTransform==="string"){return"-moz-"
}if(typeof n.WebkitTransform==="string"){return"-webkit-"
}if((typeof n.msTransform==="string"||typeof n.MsTransform==="string")&&!/MSIE 9/.test(navigator.appVersion)){return"-ms-"
}if(typeof n.transform==="string"){return""
}return null
}(document.body.style)),d=(j==="touchend"),m={speed:500,easing:"ease-in-out"};
function l(r){var w,s,x,G=false,v=false,O=null,q=false,C=r.node,L=(r.slideName)?C.find(r.slidename):C.children(),n=1,M={queue:[]},I=(r.pausedelay)?(d?r.pausedelay.touch:r.pausedelay.scroll):(d?700:1400),y=(r.pagination)?e(r.pagination):null;
function F(){z();
D();
p()
}function D(){var S,Q,P,R=function(){var V="",U=h+"-pagelink",T=function(Y){var X="",Z=Y.attr("data-title")||Y.attr("title")||"",W=Y.attr("id");
X+='<a href="#'+W+'"'+(Z?' title="'+Z+'"':"")+' class="'+U+'">';
X+=Z;
X+='<span class="blip"></span>';
X+="</a>";
return X
};
y.addClass(h+"-pagination");
if(y.children().length>0){y.children().addClass(U)
}else{L.each(function(){V=V+T(e(this))
});
y.append(V)
}};
C.addClass(h);
L.addClass(h+"-slide");
if(y){R()
}window.loc=window.location.hash;
if(window.loc&&window.loc!==""){Q=y.find('a[href="'+window.loc+'"]');
if(!Q.length){Q=y.find('a[href="'+encodeURI(window.loc)+'"]')
}if(!Q.length){S=x
}else{S=Q.attr("href").replace("#","")
}if(M[S]){n=M.queue.lastIndexOf(M[S])+1
}}if(d){P=e("section a[target]");
P.unbind().on(g,function(T){T.preventDefault()
}).on(b,function(){G=true
}).on(f,function(U){U.preventDefault();
var T=e(this);
if(!G){if(T.attr("target")==="_blank"){window.open(T.attr("href"))
}else{if(T.attr("href").indexOf("http")!==-1){window.location.href=T.attr("href")
}}}G=false
})
}if(c){C.css(c+"transition",c+"transform "+r.speed+"ms "+r.easing)
}M[S||x]()
}function z(){function U(W,V){return function(){K(W);
if(typeof V!=="undefined"){if(((r.actions||{})[W]||[])[V]){r.actions[W][V]()
}}else{if((r.actions||{})[W]){r.actions[W]()
}}}
}var T,R,Q,S,P;
for(R=0,Q=L.length;
R<Q;
R++){T=L.eq(R).attr("id");
if(T){if(R===0){x=T
}if(r.actions&&r.actions[T]&&r.actions[T].slice){S=0;
P=r.actions[T].length;
for(S=0;
S<P;
S++){M[T+((S===0)?"":S)]=U(T,S);
M.queue.push(M[T+((S===0)?"":S)])
}}else{M[T]=U(T);
M.queue.push(M[T])
}}}}function p(){e(document).on("mousewheel",N).on("wheel",N).on("keyup",H);
e(window).on("hashchange",A);
if(y){y.find("a").on("click",u)
}if(d){var P=C[0];
if(P){document.addEventListener(g,o,false);
document.addEventListener(f,t,false);
document.addEventListener(b,J,false)
}}}function K(U,V,S){if((U==="")||(typeof U==="undefined")){return
}clearTimeout(O);
var Q=e("#"+U),P=L.index(Q),T;
if("#"+U===window.location.hash){return
}T=y?y.find('[href="#'+U+'"]').attr("href"):null;
if(T){window.location.hash=T
}e(window).scrollTop(0);
q=true;
if(y){y.find("a").removeClass("active")
}Q.addClass("on").removeClass("off");
L.removeClass("active");
if(c){if(c.indexOf("webkit")!==-1){C.css("-webkit-transform","translate3d(0,"+(-(P*100)+"%")+",0)")
}else{C.css(c+"transform","translate(0,"+(-(P*100)+"%")+")")
}}else{C.animate({top:-(P*100)+"%"})
}function R(){if(y){setTimeout(function(){e("html,body").scrollTop(0);
y.find('[href="#'+U+'"]').addClass("active")
},250)
}setTimeout(function(){L.removeClass("on").addClass("off");
Q.removeClass("off");
Q.addClass("on active");
Q.next().removeClass("off").addClass("on");
if(n>1){Q.prev().removeClass("off").addClass("on")
}},400);
if(V&&typeof V==="function"){V()
}}if(S&&typeof V==="function"){O=setTimeout(function(){R()
},S)
}else{R()
}}function A(){if(!q&&y.find('[href="'+encodeURI(window.location.hash)+'"]').attr("href")){var P=y.find('[href="'+encodeURI(window.location.hash)+'"]').attr("href").replace("#","");
if(!P){P=y.find('[href="'+window.location.hash+'"]').attr("href").replace("#","")
}M[P||x]()
}q=false
}function u(R){R.preventDefault();
R.stopPropagation();
var P=e(R.currentTarget),S=P.attr("href").replace("#",""),Q=e("#"+S);
if(S){n=(parseInt(L.index(Q),10)+1);
B()
}}function B(){if(n<1){n=1
}if(n>M.queue.length){n=M.queue.length
}v=true;
if(typeof M.queue[n-1]!=="undefined"){M.queue[n-1]()
}window.setTimeout(function(){v=false
},I)
}function E(R,Q){var P=e(R.target);
if(!Q&&R.target.scrollHeight>P.height()){return true
}if((R.target.scrollHeight>P.height())&&(R.target.scrollHeight>(P.scrollTop()+P.height()))&&Q<0){return true
}if(((R.target.scrollHeight>P.height())&&(P.scrollTop()>0&&Q>0))){return true
}return false
}function N(Q){if(!k||!a){return
}if(!v&&k){var P=Q.wheelDelta||(Q.originalEvent||{}).wheelDelta||-(Q.originalEvent||{}).deltaY||-Q.deltaY;
if(E(Q,P)){return
}n+=(P>0)?-1:1;
Q.preventDefault();
Q.stopPropagation();
B()
}}function H(P){if(!v&&k){if((P.keyCode||P.which)===38||(P.keyCode||P.which)===33){n--;
B();
return
}if((P.keyCode||P.which)===40||(P.keyCode||P.which)===34){n++;
B();
return
}}}function o(P){w={};
s={};
if(window.navigator.msPointerEnabled&&window.navigator.msMaxTouchPoints&&!P.isPrimary){return
}if(v||!a||!k){return
}if(P.preventDefault&&!E(P)){P.preventDefault();
P.stopPropagation()
}else{return
}w={x:((P.touches||[])[0]||P).pageX,y:((P.touches||[])[0]||P).pageY}
}function J(P){if(v||!a||!k){return
}if(window.navigator.msPointerEnabled&&window.navigator.msMaxTouchPoints&&!P.isPrimary){return
}window.console.log(E(P));
if(P.preventDefault&&!E(P)){P.preventDefault()
}else{return
}s={x:((P.touches||[])[0]||P).pageX,y:((P.touches||[])[0]||P).pageY}
}function t(P){if(v||!a||!k){return
}if(window.navigator.msPointerEnabled&&window.navigator.msMaxTouchPoints&&!P.isPrimary){return
}if(Math.abs(s.x-w.x)<Math.abs(s.y-w.y)){if(Math.abs(w.y-s.y)>35){if((w.y-s.y)<0){n--
}else{n++
}B()
}}}F()
}e.fn.akpagescroll=function(n,o){this.each(function(){var q,p;
if(typeof n==="string"){p=e.extend(m,o);
q=n;
if(this.akpagecroll&&this.akpagescroll[q]){this.akpagescroll[q](p)
}else{throw"Incorrect usage"
}}else{p=e.extend(m,n);
p.node=e(this);
this.akpagescroll=new l(p)
}})
};
if(!Array.prototype.lastIndexOf){Array.prototype.lastIndexOf=function(q){if(this===null){throw new TypeError()
}var s,p,r=Object(this),o=r.length>>>0;
if(o===0){return -1
}s=o;
if(arguments.length>1){s=Number(arguments[1]);
if(s!==s){s=0
}else{if(s!==0&&s!==(1/0)&&s!==-(1/0)){s=(s>0||-1)*Math.floor(Math.abs(s))
}}}for(p=s>=0?Math.min(s,o-1):o-Math.abs(s);
p>=0;
p--){if(p in r&&r[p]===q){return p
}}return -1
}
}}(window.jQuery||window.Zepto));
(function(c,a,b){if(!Array.prototype.filter){Array.prototype.filter=function(f){if(this===void 0||this===null){throw new TypeError()
}var j=Object(this);
var d=j.length>>>0;
if(typeof f!=="function"){throw new TypeError()
}var h=[];
var e=arguments.length>=2?arguments[1]:void 0;
for(var g=0;
g<d;
g++){if(g in j){var k=j[g];
if(f.call(e,k,g,j)){h.push(k)
}}}return h
}
}if(!String.prototype.trim){String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,"")
}
}}(document,window,window.jQuery||window.Zepto));
(function(f,a,e,c){var b=function(j,d,g){var k;
return function h(){var n=this,m=arguments;
function l(){if(!g){j.apply(n,m);
k=null
}}if(k){clearTimeout(k)
}else{if(g){j.apply(n,m)
}}k=setTimeout(l,d||100)
}
};
e.fn[c]=function(d){return d?this.bind("resize",b(d)):this.trigger(c)
};
a.gdt.debounce=b
}(document,window,window.jQuery||window.Zepto,"smartresize"));
(function(a){a.tiny=a.tiny||{};
a.tiny.scrollbar={options:{axis:"y",wheel:40,scroll:true,lockscroll:true,size:"auto",sizethumb:"auto",invertscroll:true}};
a.fn.tinyscrollbar=function(d){var c=a.extend({},a.tiny.scrollbar.options,d);
this.each(function(){a(this).data("tsb",new b(a(this),c))
});
return this
};
a.fn.tinyscrollbar_update=function(c){return a(this).data("tsb").update(c)
};
function b(r,g){var l=this,u=r,k={obj:a(".viewport",r)},h={obj:a(".overview",r)},d={obj:a(".scrollbar",r)},n={obj:a(".track",d.obj)},q={obj:a(".thumb",d.obj)},m=g.axis==="x",o=m?"left":"top",w=m?"Width":"Height",s=0,z={start:0,now:0},p={},e="ontouchstart" in document.documentElement;
function c(){l.update();
t();
return l
}this.update=function(A){k[g.axis]=k.obj[0]["offset"+w];
h[g.axis]=h.obj[0]["scroll"+w];
h.ratio=k[g.axis]/h[g.axis];
d.obj.toggleClass("disable",h.ratio>=1);
n[g.axis]=g.size==="auto"?k[g.axis]:g.size;
q[g.axis]=Math.min(n[g.axis],Math.max(0,(g.sizethumb==="auto"?(n[g.axis]*h.ratio):g.sizethumb)));
d.ratio=g.sizethumb==="auto"?(h[g.axis]/n[g.axis]):(h[g.axis]-k[g.axis])/(n[g.axis]-q[g.axis]);
s=(A==="relative"&&h.ratio<=1)?Math.min((h[g.axis]-k[g.axis]),Math.max(0,s)):0;
s=(A==="bottom"&&h.ratio<=1)?(h[g.axis]-k[g.axis]):isNaN(parseInt(A,10))?s:parseInt(A,10);
x()
};
function x(){var A=w.toLowerCase();
q.obj.css(o,s/d.ratio);
h.obj.css(o,-s);
p.start=q.obj.offset()[o];
d.obj.css(A,n[g.axis]);
n.obj.css(A,n[g.axis]);
q.obj.css(A,q[g.axis])
}function t(){if(!e){q.obj.bind("mousedown",j);
n.obj.bind("mouseup",v)
}else{k.obj[0].ontouchstart=function(A){if(1===A.touches.length){j(A.touches[0]);
A.stopPropagation()
}}
}if(g.scroll&&window.addEventListener){u[0].addEventListener("DOMMouseScroll",y,false);
u[0].addEventListener("mousewheel",y,false);
u[0].addEventListener("MozMousePixelScroll",function(A){A.preventDefault()
},false)
}else{if(g.scroll){u[0].onmousewheel=y
}}}function j(B){a("body").addClass("noSelect");
var A=parseInt(q.obj.css(o),10);
p.start=m?B.pageX:B.pageY;
z.start=A=="auto"?0:A;
if(!e){a(document).bind("mousemove",v);
a(document).bind("mouseup",f);
q.obj.bind("mouseup",f)
}else{document.ontouchmove=function(C){C.preventDefault();
v(C.touches[0])
};
document.ontouchend=f
}}function y(C){if(h.ratio<1){var B=C||window.event,A=B.wheelDelta?B.wheelDelta/120:-B.detail/3;
s-=A*g.wheel;
s=Math.min((h[g.axis]-k[g.axis]),Math.max(0,s));
q.obj.css(o,s/d.ratio);
h.obj.css(o,-s);
if(a.event.fix&&(g.lockscroll||(s!==(h[g.axis]-k[g.axis])&&s!==0))){B=a.event.fix(B);
B.preventDefault()
}}}function v(A){if(h.ratio<1){if(g.invertscroll&&e){z.now=Math.min((n[g.axis]-q[g.axis]),Math.max(0,(z.start+(p.start-(m?A.pageX:A.pageY)))))
}else{z.now=Math.min((n[g.axis]-q[g.axis]),Math.max(0,(z.start+((m?A.pageX:A.pageY)-p.start))))
}s=z.now*d.ratio;
h.obj.css(o,-s);
q.obj.css(o,z.now)
}}function f(){a("body").removeClass("noSelect");
a(document).unbind("mousemove",v);
a(document).unbind("mouseup",f);
q.obj.unbind("mouseup",f);
document.ontouchmove=document.ontouchend=null
}return c()
}}(window.jQuery||window.Zepto));
/*! http://mths.be/placeholder by @mathias */
(function(g,j){var a="placeholder" in j.createElement("input");
var e="placeholder" in j.createElement("textarea");
var k=$.fn;
var d=$.valHooks;
var b=$.propHooks;
var m;
var l;
if(a&&e){l=k.placeholder=function(){return this
};
l.input=l.textarea=true
}else{l=k.placeholder=function(){var n=this;
n.filter((a?"textarea":":input")+"[placeholder]").not(".placeholder").bind({"focus.placeholder":c,"blur.placeholder":f}).data("placeholder-enabled",true).trigger("blur.placeholder");
return n
};
l.input=a;
l.textarea=e;
m={get:function(o){var n=$(o);
var p=n.data("placeholder-password");
if(p){return p[0].value
}return n.data("placeholder-enabled")&&n.hasClass("placeholder")?"":o.value
},set:function(o,q){var n=$(o);
var p=n.data("placeholder-password");
if(p){var s=p[0].value=q;
return s
}if(!n.data("placeholder-enabled")){var r=o.value=q;
return r
}if(q===""){o.value=q;
if(o!=j.activeElement){f.call(o)
}}else{if(n.hasClass("placeholder")){c.call(o,true,q)||(o.value=q)
}else{o.value=q
}}return n
}};
if(!a){d.input=m;
b.value=m
}if(!e){d.textarea=m;
b.value=m
}$(function(){$(j).delegate("form","submit.placeholder",function(){var n=$(".placeholder",this).each(c);
setTimeout(function(){n.each(f)
},10)
})
});
$(g).bind("beforeunload.placeholder",function(){$(".placeholder").each(function(){this.value=""
})
})
}function h(o){var n={};
var p=/^jQuery\d+$/;
$.each(o.attributes,function(r,q){if(q.specified&&!p.test(q.name)){n[q.name]=q.value
}});
return n
}function c(p,q){var o=this;
var r=$(o);
if(o.value==r.attr("placeholder")&&r.hasClass("placeholder")){if(r.data("placeholder-password")){r=r.hide().next().show().attr("id",r.removeAttr("id").data("placeholder-id"));
if(p===true){var n=r[0].value=q;
return n
}r.focus()
}else{o.value="";
r.removeClass("placeholder");
o==j.activeElement&&o.select()
}}}function f(){var r;
var n=this;
var q=$(n);
var p=this.id;
if(n.value===""){if(n.type=="password"){if(!q.data("placeholder-textinput")){try{r=q.clone().attr({type:"text"})
}catch(o){r=$("<input>").attr($.extend(h(this),{type:"text"}))
}r.removeAttr("name").data({"placeholder-password":q,"placeholder-id":p}).bind("focus.placeholder",c);
q.data({"placeholder-textinput":r,"placeholder-id":p}).before(r)
}q=q.removeAttr("id").hide().prev().attr("id",p).show()
}q.addClass("placeholder");
q[0].value=q.attr("placeholder")
}else{q.removeClass("placeholder")
}}}(this,document));
(function(c,a,b){a.gdt=a.gdt||{};
a.gdt.Validate=a.gdt.Validate||{};
var e=function(){var J=false,U="",x=[],p={};
function f(Y){Y=Y||document.querySelectorAll(".errorMessage");
for(var X=0;
X<Y.length;
X++){Y[X].className=Y[0].className.replace(/\bshow\b/," ")
}}function w(){var X=document.querySelectorAll(".errorMessage");
f(X);
if(X.length>0){X[0].className+=" show"
}}function s(aa,Y){var Z=b(),X=b(aa).next(),ab="span";
Y=Y?Y:"empty";
while(X.length){if(X.is(ab)){Z=Z.add(X)
}else{break
}X=X.next()
}return Z
}function G(aa,Z){var X=s(aa,Z);
for(var Y=0;
Y<X.length;
Y++){if(b(X[Y]).data("required")&&b(X[Y]).data("required").indexOf(Z)!==-1){b(X[Y]).addClass("show")
}}if(Z.indexOf("checkBox")!==-1){b(aa).parent().next("span").addClass("show")
}}function t(aa,Z){var X=s(aa),ab="";
Z=Z?Z:"empty";
if(Z){for(var Y=0;
Y<X.length;
Y++){ab=b(X[Y]).data("required");
if(ab&&ab.indexOf(Z)!==-1){b(X[Y]).removeClass("show")
}}if(Z.indexOf("checkBox")!==-1){b(aa).parent().next("span").removeClass("show")
}}}function E(Z,Y){Y=Y?Y:"empty";
if(Z.length>0&&Z.tagName===undefined){for(var X=0;
X<Z.length;
X++){if(Z[X].className.indexOf("error")===-1){Z[X].className+=" error";
b(Z).parent().find(".mtb-pictogram-icon").removeClass("hide");
G(Z[X],Y)
}}}else{if(Z.className.indexOf("error")===-1){Z.className+=" error";
b(Z).parent().find(".mtb-pictogram-icon").removeClass("hide")
}G(Z,Y)
}}function C(){var Z=document.querySelectorAll(".error");
for(var X=0;
X<Z.length;
X++){u(Z[X])
}f();
var Y=document.querySelectorAll(".err-msg");
for(var X=0;
X<Y.length;
X++){Y[X].className=Y[0].className.replace(/\bshow\b/," ")
}}function u(aa,Z){var Y,Z=Z?Z:"empty";
if(aa.length>0&&aa.tagName===undefined){for(var X=0;
X<aa.length;
X++){if(aa[X].className.indexOf("error")!==-1){Y=aa[X].className=aa[X].className.replace(/\berror\b/," ");
b(aa).parent().find(".mtb-pictogram-icon").addClass("hide");
t(aa[X],Z)
}}}else{if(aa.className.indexOf("error")!==-1){Y=aa.className=aa.className.replace(/\berror\b/," ");
b(aa).parent().find(".mtb-pictogram-icon").addClass("hide")
}t(aa,Z)
}return Y
}function o(Y,aa){var X=aa.replace(/\bconfirm-\b/,""),Z=false;
if(document.getElementsByName(aa)[0].value===document.getElementsByName(X)[0].value){u(document.getElementsByName(aa)[0],"compare-error");
u(document.getElementsByName(X)[0]);
Z=true
}else{E(document.getElementsByName(aa)[0],"compare-error");
E(document.getElementsByName(X)[0])
}return Z
}function l(X){var Y=X.selectedIndex;
if(Y===0&&X.name&&X.name.indexOf("possibleDeliveryDate")===-1&&X.name.indexOf("timeOption")===-1){E(X)
}else{u(X)
}}function z(Z){var Y=false;
for(var X=Z.length-1;
X>=0;
X--){if(Z[X].checked){u(Z,"checkBox");
J=true
}if(!J){E(Z,"checkBox")
}}return Y
}function H(Z){var Y="",X;
Z=Z.name?document.getElementsByName(Z.name):Z;
z(Z);
J=false
}function L(Z){var Y="";
for(var X=0;
X<Z.length;
X++){if(Z[X].type==="radio"||Z[X].type==="checkbox"){if(Z[X].checked){Y=Z[X].name;
J=true;
u(Z[X],"checkBox");
break
}else{Z[X].className=" error";
E(Z[X],"checkBox")
}}}if(Y.length>1&&J){document.getElementsByName(Y)[0].className=""
}}function d(X){var ab=X.value,Y=X.name,ac=Y.replace(/\bshipping\b/,"billing");
if(X.type==="radio"&&X.checked){var aa=document.getElementsByName(ac);
for(var Z=0;
Z<aa.length;
Z++){aa[Z].removeAttribute("checked");
if(aa[Z].value===ab){aa[Z].setAttribute("checked");
break
}}}else{if(X.type!=="radio"){document.getElementsByName(ac)[0].value=ab
}}}function q(Y){var X=false,aa=[];
for(var Z=0;
Z<Y.length;
Z++){if(Y[Z].className.indexOf("error")>=0){X=true;
aa.push("Missing field:"+Y[Z].name)
}}a.gdt.Tracking.MTBtracking.trackingValidation(aa);
a.gdt.Checkout.validationError(aa);
return X
}function A(ac,aa){var Y=false;
var Z=aa.exec(ac);
if(Z){var X=ac.length;
var ab=Z[0].length;
Y=(ab===X)
}return Y
}function B(X){return X.replace(/\s/g,"")
}function D(Y){var X=B(Y.value);
Y.value=X;
if(!A(X,/^[^@]+([@]{1})[0-9a-zA-Z\._-]+([\.]{1})[0-9a-zA-Z\._-]+$/)||Y.value.length===0){E(Y,"constraint-message")
}else{u(Y,"constraint-message")
}}function P(X){if(X.value.length<X.getAttribute("minlength")||X.value.length>X.getAttribute("maxlength")){E(X,"min-length");
E(X,"max-length")
}else{u(X,"min-length");
u(X,"max-length")
}}function h(X){if(X.value.length<X.getAttribute("minlength")){E(X,"min-length")
}else{u(X,"min-length")
}}function F(X){if((X.value.length===0)||(X.value.length>X.getAttribute("maxlength"))){E(X,"max-length")
}else{u(X,"max-length")
}}function K(X){var Z=b("html").attr("lang"),Y="";
if(Z.indexOf("en")!==-1){Y=/^(\(?\+?[0-9]*\)?)?[0-9_\- \(\)]*$/
}else{Y=/^[+]?[0-9.()\\s]{1,}$/
}if(!A(X.value,Y)||X.value.length===0){E(X,"constraint-message")
}else{u(X,"constraint-message")
}}function v(Y){var X=a.gdt.Validate.CreditCards.creditCardName(Y.value);
if(!X){return false;
b(".form_button_submit").removeClass("mb-loader").prop("disabled",false)
}else{return true
}}function I(X){X.value=X.value.replace(/\s/g,"");
if(X.value.length<=13||!(a.gdt.Validate.CreditCards.luhnChk(X.value))||!(v(X))){E(X)
}else{u(X)
}}function r(Z){var Y=document.getElementsByName("creditcard-type");
for(var X=0;
X<Y.length;
X++){if(Y[X].checked){I(Z,Y[X].id)
}}}function V(Y){var X=/((?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,})/;
if(Y.value&&Y.value.length>0&&!A(Y.value,X)){E(Y,"constraint-message")
}}function Q(Y){var X=/^[A-Za-z0-9]{8,}$/;
if(Y.value&&Y.value.length>0&&!A(Y.value,X)){E(Y)
}}function O(Y){var X=false;
if(Y.type==="text"){if(Y.value===Y.getAttribute("placeholder")){E(Y);
X=true
}}return X
}function n(X){for(var Y=0;
Y<X.length;
Y++){E(X[Y].input)
}}function W(X){return !isNaN(parseFloat(X))&&isFinite(X)
}function R(Y,Z){var X=Y.value;
if(!W(X)&&!Z.test(X)||W(X)&&!Z.test(X)){E(Y)
}else{u(Y)
}}function j(X){if(!W(X.value)||X.value>31){E(X)
}else{u(X)
}}function g(X){var Y=/^(0?[1-9]|1[012])$/;
R(X,Y)
}function y(X){var Y=/^\d{4}$/;
R(X,Y)
}function m(X){for(var Y=0;
Y<X.length;
Y++){if(X[Y].empty===true){n(X)
}if(X[Y].input.getAttribute("name").indexOf("day")!==-1){j(X[Y].input)
}if(X[Y].input.getAttribute("name").indexOf("month")!==-1){g(X[Y].input)
}if(X[Y].input.getAttribute("name").indexOf("year")!==-1){y(X[Y].input)
}}}function S(X){X=X?X:"";
X.value=X.value.replace(/,/g," ")
}function k(X){X=X?X:"";
p={input:X,empty:X.value.length!==0?false:true};
x.push(p);
if(x.length>=3){for(var Y=0;
Y<x.length;
Y++){if(x[Y].empty!==true){m(x);
x=[]
}}}}function N(){if(b("input[name=formErrorTitle]").val()!=""){document.title=b("input[name=formErrorTitle]").val()
}}function M(af){for(var ac=0;
ac<af.length;
ac++){var aa=b(af[ac]),Z=af[ac],ae=(af[ac].type?af[ac].type.toLowerCase():"");
if(Z&&Z.type&&(ae==="radio"||ae==="checkbox"||ae==="textarea"||ae==="email"||Z.tagName.toLowerCase()==="select"||ae==="password"||ae==="text"||ae==="select")&&!(aa.css("display")==="none")&&!(aa.prop("disabled"))){if(Z.hasAttribute("required")||Z.value.length!==0&&Z.type!=="checkbox"&&!a.gdt.Utils.Browser.isOldIE){if((Z.hasAttribute("required")&&ae==="checkbox")||Z.value.length===0){E(af[ac],"empty")
}if(Z.hasAttribute("name")){if(Z.name.indexOf("phone")!==-1){K(Z)
}else{if(Z.hasAttribute("required")&&Z.hasAttribute("minlength")&&Z.hasAttribute("maxlength")){P(Z)
}else{if(Z.hasAttribute("required")&&Z.hasAttribute("minlength")){h(Z)
}else{if(Z.hasAttribute("required")&&Z.hasAttribute("maxlength")){F(Z)
}}}}}if(Z.type==="email"||Z.name.indexOf("email")!==-1||Z.className.indexOf("email")!==-1){D(Z)
}if(Z.tagName.toLowerCase()==="select"){l(Z)
}if(Z.hasAttribute("name")&&Z.name.indexOf("shipping")!==-1){if(Z.type.toLowerCase()!=="checkbox"&&Z.id==="shipping-address"&&Z.checked===true){d(Z)
}}if(a.gdt.Utils.Browser.isOldIE){O(Z)
}if(Z.hasAttribute("name")&&Z.name.indexOf("card-number")!==-1&&Z.value){I(Z)
}}if(Z.hasAttribute("required")&&Z.type==="checkbox"){if(!Z.checked){L(Z)
}else{u(Z);
t(Z,"checkBox")
}}if(Z.type==="radio"&&aa.css("display")!=="none"){if(!Z.checked&&Z.hasAttribute("required")){H(Z)
}else{u(Z,"checkBox")
}}if(Z.type==="radio"&&aa.data("error-target")){var Y=b('[name="'+Z.name+'"]'),ab=b(aa.data("error-target")),X=Y.filter(":checked").length;
ab.toggleClass("show",!X)
}if(Z.name&&Z.name.indexOf("dob")!==-1){k(Z)
}if(Z.name&&Z.name.indexOf("street")!==-1||Z.name.indexOf("address")!==-1||Z.name.indexOf("company")!==-1){S(af[ac])
}if(Z.name&&Z.name.indexOf("billing.codiceIt")!==-1&&Z.maxLength==16){var ad=a.gdt.Checkout.itFiscalValidate();
if(ad==false){E(Z,"constraint-message")
}else{u(Z,"constraint-message")
}}}}N()
}if(b("p").hasClass("backendErrorMessage")||b("p").hasClass("form_error")){N()
}function T(ab,Z,aa){var X=document.forms[ab].elements,Y=false;
C();
M(X);
if(!q(X)){f();
Y=true
}else{w();
b(document.forms[ab]).find(":submit").removeClass("mb-loader").prop("disabled",false)
}return Y
}return{validateForm:T,compare:o,cq5forms_regcheck:A,removeErrorClass:u,removeErrorMessage:f,removeAllErrors:C,checkValuePlaceholder:O,radioCheckbox:H,dob:k}
};
a.gdt.Validate=new e()
}(document,window,window.jQuery||window.Zepto));
(function(c,a,b){a.gdt=a.gdt||{};
a.gdt.Validate=a.gdt.Validate||{};
a.gdt.Validate.CreditCards=a.gdt.Validate.CreditCards||{};
var e=function(){var f=[{name:"amex",pattern:/^3[47]/,value:"3000"},{name:"diners_club_carte_blanche",pattern:/^30[0-5]/,value:"6000"},{name:"diners_club_international",pattern:/^36/,value:"6000"},{name:"jcb",pattern:/^35(2[89]|[3-8][0-9])/,value:"6000"},{name:"laser",pattern:/^(6304|670[69]|6771)/,value:"6000"},{name:"visa_electron",pattern:/^(4026|417500|4508|4844|491(3|7))/,value:"6000"},{name:"visa",pattern:/^4/,value:"4000"},{name:"mastercard",pattern:/^5[1-5]/,value:"5000"},{name:"maestro",pattern:/^(5018|5020|5038|6304|6759|676[1-3])/,value:"6000"},{name:"discover dc",pattern:/^(6011|622(12[6-9]|1[3-9][0-9]|[2-8][0-9]{2}|9[0-1][0-9]|92[0-5]|64[4-9])|65)/,value:"6000"}];
function d(j){var m,h,l,k;
l=[];
for(m=0,h=j.length;
m<h;
m++){if(f[m]&&j.match(f[m].pattern)){k={name:f[m].name,value:f[m].value}
}}return k
}function g(n){var o=[0,2,4,6,8,1,3,5,7,9],h=0,l,m=false,j=String(n).replace(/[^\d]/g,"");
if(j.length===0){return false
}for(var k=j.length-1;
k>=0;
--k){l=parseInt(j.charAt(k),10);
h+=(m=!m)?l:o[l]
}return(h%10===0)
}return{luhnChk:g,creditCardName:d}
};
a.gdt.Validate.CreditCards=new e()
}(document,window,window.jQuery||window.Zepto));
(function(a){a.fn.succinct=function(b){var c={size:240,omission:"...",ignore:true},b=a.extend(c,b);
return this.each(function(){var e,d,h=a(this),g=/[!-\/:-@\[-`{-~]$/;
var f=function(){h.each(function(){e=a(this).text();
if(e.length>b.size){d=a.trim(e).substring(0,b.size).split(" ").slice(0,-1).join(" ");
if(b.ignore){d=d.replace(g,"")
}a(this).text(d+b.omission)
}})
};
var j=function(){f()
};
j()
})
}
})(this.jQuery||this.Zepto);
document.createElement("video");
document.createElement("audio");
document.createElement("track");
var vjs=function(d,b,c){var a;
if(typeof d==="string"){if(d.indexOf("#")===0){d=d.slice(1)
}if(vjs.players[d]){return vjs.players[d]
}else{a=vjs.el(d)
}}else{a=d
}if(!a||!a.nodeName){throw new TypeError("The element or ID supplied is not valid. (videojs)")
}return a.player||new vjs.Player(a,b,c)
};
var videojs=vjs;
window.videojs=window.vjs=vjs;
vjs.CDN_VERSION="4.5";
vjs.ACCESS_PROTOCOL=("https:"==document.location.protocol?"https://":"http://");
vjs.options={techOrder:["html5","flash"],html5:{},flash:{},width:300,height:150,defaultVolume:0,children:{mediaLoader:{},posterImage:{},textTrackDisplay:{},loadingSpinner:{},bigPlayButton:{},controlBar:{}},notSupportedMessage:'Sorry, no compatible source and playback technology were found for this video. Try using another browser like <a href="http://bit.ly/ccMUEC">Chrome</a> or download the latest <a href="http://adobe.ly/mwfN1">Adobe Flash Player</a>.'};
if(vjs.CDN_VERSION!=="GENERATED_CDN_VSN"){videojs.options.flash["swf"]=vjs.ACCESS_PROTOCOL+"vjs.zencdn.net/"+vjs.CDN_VERSION+"/video-js.swf"
}vjs.players={};
/*!
 * Custom Universal Module Definition (UMD)
 *
 * Video.js will never be a non-browser lib so we can simplify UMD a bunch and
 * still support requirejs and browserify. This also needs to be closure
 * compiler compatible, so string keys are used.
 */
if(typeof define==="function"&&define.amd){define([],function(){return videojs
})
}else{if(typeof exports==="object"&&typeof module==="object"){module.exports=videojs
}}vjs.CoreObject=vjs.CoreObject=function(){};
vjs.CoreObject.extend=function(c){var d,a;
c=c||{};
d=c.init||c.init||this.prototype.init||this.prototype.init||function(){};
a=function(){d.apply(this,arguments)
};
a.prototype=vjs.obj.create(this.prototype);
a.prototype.constructor=a;
a.extend=vjs.CoreObject.extend;
a.create=vjs.CoreObject.create;
for(var b in c){if(c.hasOwnProperty(b)){a.prototype[b]=c[b]
}}return a
};
vjs.CoreObject.create=function(){var a=vjs.obj.create(this.prototype);
this.apply(a,arguments);
return a
};
vjs.on=function(c,b,a){var d=vjs.getData(c);
if(!d.handlers){d.handlers={}
}if(!d.handlers[b]){d.handlers[b]=[]
}if(!a.guid){a.guid=vjs.guid++
}d.handlers[b].push(a);
if(!d.dispatcher){d.disabled=false;
d.dispatcher=function(g){if(d.disabled){return
}g=vjs.fixEvent(g);
var f=d.handlers[g.type];
if(f){var h=f.slice(0);
for(var e=0,j=h.length;
e<j;
e++){if(g.isImmediatePropagationStopped()){break
}else{h[e].call(c,g)
}}}}
}if(d.handlers[b].length==1){if(document.addEventListener){c.addEventListener(b,d.dispatcher,false)
}else{if(document.attachEvent){c.attachEvent("on"+b,d.dispatcher)
}}}};
vjs.off=function(e,d,c){if(!vjs.hasData(e)){return
}var f=vjs.getData(e);
if(!f.handlers){return
}var g=function(j){f.handlers[j]=[];
vjs.cleanUpEvents(e,j)
};
if(!d){for(var b in f.handlers){g(b)
}return
}var a=f.handlers[d];
if(!a){return
}if(!c){g(d);
return
}if(c.guid){for(var h=0;
h<a.length;
h++){if(a[h].guid===c.guid){a.splice(h--,1)
}}}vjs.cleanUpEvents(e,d)
};
vjs.cleanUpEvents=function(b,a){var c=vjs.getData(b);
if(c.handlers[a].length===0){delete c.handlers[a];
if(document.removeEventListener){b.removeEventListener(a,c.dispatcher,false)
}else{if(document.detachEvent){b.detachEvent("on"+a,c.dispatcher)
}}}if(vjs.isEmpty(c.handlers)){delete c.handlers;
delete c.dispatcher;
delete c.disabled
}if(vjs.isEmpty(c)){vjs.removeData(b)
}};
vjs.fixEvent=function(e){function g(){return true
}function d(){return false
}if(!e||!e.isPropagationStopped){var b=e||window.event;
e={};
for(var c in b){if(c!=="layerX"&&c!=="layerY"&&c!=="keyboardEvent.keyLocation"){if(!(c=="returnValue"&&b.preventDefault)){e[c]=b[c]
}}}if(!e.target){e.target=e.srcElement||document
}e.relatedTarget=e.fromElement===e.target?e.toElement:e.fromElement;
e.preventDefault=function(){if(b.preventDefault){b.preventDefault()
}e.returnValue=false;
e.isDefaultPrevented=g;
e.defaultPrevented=true
};
e.isDefaultPrevented=d;
e.defaultPrevented=false;
e.stopPropagation=function(){if(b.stopPropagation){b.stopPropagation()
}e.cancelBubble=true;
e.isPropagationStopped=g
};
e.isPropagationStopped=d;
e.stopImmediatePropagation=function(){if(b.stopImmediatePropagation){b.stopImmediatePropagation()
}e.isImmediatePropagationStopped=g;
e.stopPropagation()
};
e.isImmediatePropagationStopped=d;
if(e.clientX!=null){var f=document.documentElement,a=document.body;
e.pageX=e.clientX+(f&&f.scrollLeft||a&&a.scrollLeft||0)-(f&&f.clientLeft||a&&a.clientLeft||0);
e.pageY=e.clientY+(f&&f.scrollTop||a&&a.scrollTop||0)-(f&&f.clientTop||a&&a.clientTop||0)
}e.which=e.charCode||e.keyCode;
if(e.button!=null){e.button=(e.button&1?0:(e.button&4?1:(e.button&2?2:0)))
}}return e
};
vjs.trigger=function(d,c){var a=(vjs.hasData(d))?vjs.getData(d):{};
var b=d.parentNode||d.ownerDocument;
if(typeof c==="string"){c={type:c,target:d}
}c=vjs.fixEvent(c);
if(a.dispatcher){a.dispatcher.call(d,c)
}if(b&&!c.isPropagationStopped()&&c.bubbles!==false){vjs.trigger(b,c)
}else{if(!b&&!c.defaultPrevented){var e=vjs.getData(c.target);
if(c.target[c.type]){e.disabled=true;
if(typeof c.target[c.type]==="function"){c.target[c.type]()
}e.disabled=false
}}}return !c.defaultPrevented
};
vjs.one=function(d,b,a){var c=function(){vjs.off(d,b,c);
a.apply(this,arguments)
};
c.guid=a.guid=a.guid||vjs.guid++;
vjs.on(d,b,c)
};
var hasOwnProp=Object.prototype.hasOwnProperty;
vjs.createEl=function(b,a){var c,d;
c=document.createElement(b||"div");
for(d in a){if(hasOwnProp.call(a,d)){if(d.indexOf("aria-")!==-1||d=="role"){c.setAttribute(d,a[d])
}else{c[d]=a[d]
}}}return c
};
vjs.capitalize=function(a){return a.charAt(0).toUpperCase()+a.slice(1)
};
vjs.obj={};
vjs.obj.create=Object.create||function(b){function a(){}a.prototype=b;
return new a()
};
vjs.obj.each=function(d,c,b){for(var a in d){if(hasOwnProp.call(d,a)){c.call(b||this,a,d[a])
}}};
vjs.obj.merge=function(c,b){if(!b){return c
}for(var a in b){if(hasOwnProp.call(b,a)){c[a]=b[a]
}}return c
};
vjs.obj.deepMerge=function(e,d){var a,c,b;
e=vjs.obj.copy(e);
for(a in d){if(hasOwnProp.call(d,a)){c=e[a];
b=d[a];
if(vjs.obj.isPlain(c)&&vjs.obj.isPlain(b)){e[a]=vjs.obj.deepMerge(c,b)
}else{e[a]=d[a]
}}}return e
};
vjs.obj.copy=function(a){return vjs.obj.merge({},a)
};
vjs.obj.isPlain=function(a){return !!a&&typeof a==="object"&&a.toString()==="[object Object]"&&a.constructor===Object
};
vjs.bind=function(c,d,b){if(!d.guid){d.guid=vjs.guid++
}var a=function(){return d.apply(c,arguments)
};
a.guid=(b)?b+"_"+d.guid:d.guid;
return a
};
vjs.cache={};
vjs.guid=1;
vjs.expando="vdata"+(new Date()).getTime();
vjs.getData=function(a){var b=a[vjs.expando];
if(!b){b=a[vjs.expando]=vjs.guid++;
vjs.cache[b]={}
}return vjs.cache[b]
};
vjs.hasData=function(a){var b=a[vjs.expando];
return !(!b||vjs.isEmpty(vjs.cache[b]))
};
vjs.removeData=function(a){var c=a[vjs.expando];
if(!c){return
}delete vjs.cache[c];
try{delete a[vjs.expando]
}catch(b){if(a.removeAttribute){a.removeAttribute(vjs.expando)
}else{a[vjs.expando]=null
}}};
vjs.isEmpty=function(a){for(var b in a){if(a[b]!==null){return false
}}return true
};
vjs.addClass=function(a,b){if((" "+a.className+" ").indexOf(" "+b+" ")==-1){a.className=a.className===""?b:a.className+" "+b
}};
vjs.removeClass=function(c,a){var d,b;
if(c.className.indexOf(a)==-1){return
}d=c.className.split(" ");
for(b=d.length-1;
b>=0;
b--){if(d[b]===a){d.splice(b,1)
}}c.className=d.join(" ")
};
vjs.TEST_VID=vjs.createEl("video");
vjs.USER_AGENT=navigator.userAgent;
vjs.IS_IPHONE=(/iPhone/i).test(vjs.USER_AGENT);
vjs.IS_IPAD=(/iPad/i).test(vjs.USER_AGENT);
vjs.IS_IPOD=(/iPod/i).test(vjs.USER_AGENT);
vjs.IS_IOS=vjs.IS_IPHONE||vjs.IS_IPAD||vjs.IS_IPOD;
vjs.IOS_VERSION=(function(){var a=vjs.USER_AGENT.match(/OS (\d+)_/i);
if(a&&a[1]){return a[1]
}})();
vjs.IS_ANDROID=(/Android/i).test(vjs.USER_AGENT);
vjs.ANDROID_VERSION=(function(){var b=vjs.USER_AGENT.match(/Android (\d+)(?:\.(\d+))?(?:\.(\d+))*/i),a,c;
if(!b){return null
}a=b[1]&&parseFloat(b[1]);
c=b[2]&&parseFloat(b[2]);
if(a&&c){return parseFloat(b[1]+"."+b[2])
}else{if(a){return a
}else{return null
}}})();
vjs.IS_OLD_ANDROID=vjs.IS_ANDROID&&(/webkit/i).test(vjs.USER_AGENT)&&vjs.ANDROID_VERSION<2.3;
vjs.IS_FIREFOX=(/Firefox/i).test(vjs.USER_AGENT);
vjs.IS_CHROME=(/Chrome/i).test(vjs.USER_AGENT);
vjs.TOUCH_ENABLED=!!(("ontouchstart" in window)||window.DocumentTouch&&document instanceof window.DocumentTouch);
vjs.getAttributeValues=function(a){var g,b,d,f,c;
g={};
b=",autoplay,controls,loop,muted,default,";
if(a&&a.attributes&&a.attributes.length>0){d=a.attributes;
for(var e=d.length-1;
e>=0;
e--){f=d[e].name;
c=d[e].value;
if(typeof a[f]==="boolean"||b.indexOf(","+f+",")!==-1){c=(c!==null)?true:false
}g[f]=c
}}return g
};
vjs.getComputedDimension=function(a,b){var c="";
if(document.defaultView&&document.defaultView.getComputedStyle){c=document.defaultView.getComputedStyle(a,"").getPropertyValue(b)
}else{if(a.currentStyle){c=a["client"+b.substr(0,1).toUpperCase()+b.substr(1)]+"px"
}}return c
};
vjs.insertFirst=function(b,a){if(a.firstChild){a.insertBefore(b,a.firstChild)
}else{a.appendChild(b)
}};
vjs.support={};
vjs.el=function(a){if(a.indexOf("#")===0){a=a.slice(1)
}return document.getElementById(a)
};
vjs.formatTime=function(g,b){b=b||g;
var e=Math.floor(g%60),a=Math.floor(g/60%60),d=Math.floor(g/3600),f=Math.floor(b/60%60),c=Math.floor(b/3600);
if(isNaN(g)||g===Infinity){d=a=e="-"
}d=(d>0||c>0)?d+":":"";
a=(((d||f>=10)&&a<10)?"0"+a:a)+":";
e=(e<10)?"0"+e:e;
return d+a+e
};
vjs.blockTextSelection=function(){document.body.focus();
document.onselectstart=function(){return false
}
};
vjs.unblockTextSelection=function(){document.onselectstart=function(){return true
}
};
vjs.trim=function(a){return(a+"").replace(/^\s+|\s+$/g,"")
};
vjs.round=function(a,b){if(!b){b=0
}return Math.round(a*Math.pow(10,b))/Math.pow(10,b)
};
vjs.createTimeRange=function(b,a){return{length:1,start:function(){return b
},end:function(){return a
}}
};
vjs.get=function(a,g,d){var b,c;
if(typeof XMLHttpRequest==="undefined"){window.XMLHttpRequest=function(){try{return new window.ActiveXObject("Msxml2.XMLHTTP.6.0")
}catch(k){}try{return new window.ActiveXObject("Msxml2.XMLHTTP.3.0")
}catch(j){}try{return new window.ActiveXObject("Msxml2.XMLHTTP")
}catch(h){}throw new Error("This browser does not support XMLHttpRequest.")
}
}c=new XMLHttpRequest();
try{c.open("GET",a)
}catch(f){d(f)
}b=(a.indexOf("file:")===0||(window.location.href.indexOf("file:")===0&&a.indexOf("http")===-1));
c.onreadystatechange=function(){if(c.readyState===4){if(c.status===200||b&&c.status===0){g(c.responseText)
}else{if(d){d()
}}}};
try{c.send()
}catch(f){if(d){d(f)
}}};
vjs.setLocalStorage=function(b,c){try{var a=window.localStorage||false;
if(!a){return
}a[b]=c
}catch(d){if(d.code==22||d.code==1014){vjs.log("LocalStorage Full (VideoJS)",d)
}else{if(d.code==18){vjs.log("LocalStorage not allowed (VideoJS)",d)
}else{vjs.log("LocalStorage Error (VideoJS)",d)
}}}};
vjs.getAbsoluteURL=function(a){if(!a.match(/^https?:\/\//)){a=vjs.createEl("div",{innerHTML:'<a href="'+a+'">x</a>'}).firstChild.href
}return a
};
vjs.log=function(){vjs.log.history=vjs.log.history||[];
vjs.log.history.push(arguments);
if(window.console){window.console.log(Array.prototype.slice.call(arguments))
}};
vjs.findPosition=function(c){var g,b,h,j,e,d,f,a,k;
if(c.getBoundingClientRect&&c.parentNode){g=c.getBoundingClientRect()
}if(!g){return{left:0,top:0}
}b=document.documentElement;
h=document.body;
j=b.clientLeft||h.clientLeft||0;
e=window.pageXOffset||h.scrollLeft;
d=g.left+e-j;
f=b.clientTop||h.clientTop||0;
a=window.pageYOffset||h.scrollTop;
k=g.top+a-f;
return{left:vjs.round(d),top:vjs.round(k)}
};
vjs.util={};
vjs.util.mergeOptions=function(e,d){var a,c,b;
e=vjs.obj.copy(e);
for(a in d){if(d.hasOwnProperty(a)){c=e[a];
b=d[a];
if(vjs.obj.isPlain(c)&&vjs.obj.isPlain(b)){e[a]=vjs.util.mergeOptions(c,b)
}else{e[a]=d[a]
}}}return e
};
vjs.Component=vjs.CoreObject.extend({init:function(b,a,c){this.player_=b;
this.options_=vjs.obj.copy(this.options_);
a=this.options(a);
this.id_=a.id||((a.el&&a.el["id"])?a.el["id"]:b.id()+"_component_"+vjs.guid++);
this.name_=a.name||null;
this.el_=a.el||this.createEl();
this.children_=[];
this.childIndex_={};
this.childNameIndex_={};
this.initChildren();
this.ready(c);
if(a.reportTouchActivity!==false){this.enableTouchActivity()
}}});
vjs.Component.prototype.dispose=function(){this.trigger({type:"dispose",bubbles:false});
if(this.children_){for(var a=this.children_.length-1;
a>=0;
a--){if(this.children_[a].dispose){this.children_[a].dispose()
}}}this.children_=null;
this.childIndex_=null;
this.childNameIndex_=null;
this.off();
if(this.el_.parentNode){this.el_.parentNode.removeChild(this.el_)
}vjs.removeData(this.el_);
this.el_=null
};
vjs.Component.prototype.player_=true;
vjs.Component.prototype.player=function(){return this.player_
};
vjs.Component.prototype.options_;
vjs.Component.prototype.options=function(a){if(a===undefined){return this.options_
}return this.options_=vjs.util.mergeOptions(this.options_,a)
};
vjs.Component.prototype.el_;
vjs.Component.prototype.createEl=function(b,a){return vjs.createEl(b,a)
};
vjs.Component.prototype.el=function(){return this.el_
};
vjs.Component.prototype.contentEl_;
vjs.Component.prototype.contentEl=function(){return this.contentEl_||this.el_
};
vjs.Component.prototype.id_;
vjs.Component.prototype.id=function(){return this.id_
};
vjs.Component.prototype.name_;
vjs.Component.prototype.name=function(){return this.name_
};
vjs.Component.prototype.children_;
vjs.Component.prototype.children=function(){return this.children_
};
vjs.Component.prototype.childIndex_;
vjs.Component.prototype.getChildById=function(a){return this.childIndex_[a]
};
vjs.Component.prototype.childNameIndex_;
vjs.Component.prototype.getChild=function(a){return this.childNameIndex_[a]
};
vjs.Component.prototype.addChild=function(f,d){var c,e,a,b;
if(typeof f==="string"){a=f;
d=d||{};
e=d.componentClass||vjs.capitalize(a);
d.name=a;
c=new window.videojs[e](this.player_||this,d)
}else{c=f
}this.children_.push(c);
if(typeof c.id==="function"){this.childIndex_[c.id()]=c
}a=a||(c.name&&c.name());
if(a){this.childNameIndex_[a]=c
}if(typeof c.el==="function"&&c.el()){this.contentEl().appendChild(c.el())
}return c
};
vjs.Component.prototype.removeChild=function(b){if(typeof b==="string"){b=this.getChild(b)
}if(!b||!this.children_){return
}var a=false;
for(var c=this.children_.length-1;
c>=0;
c--){if(this.children_[c]===b){a=true;
this.children_.splice(c,1);
break
}}if(!a){return
}this.childIndex_[b.id]=null;
this.childNameIndex_[b.name]=null;
var d=b.el();
if(d&&d.parentNode===this.contentEl()){this.contentEl().removeChild(b.el())
}};
vjs.Component.prototype.initChildren=function(){var b=this.options_;
if(b&&b.children){var a=this;
vjs.obj.each(b.children,function(d,e){if(e===false){return
}var c=function(){a[d]=a.addChild(d,e)
};
if(e.loadEvent){}else{c()
}})
}};
vjs.Component.prototype.buildCSSClass=function(){return""
};
vjs.Component.prototype.on=function(b,a){vjs.on(this.el_,b,vjs.bind(this,a));
return this
};
vjs.Component.prototype.off=function(b,a){vjs.off(this.el_,b,a);
return this
};
vjs.Component.prototype.one=function(b,a){vjs.one(this.el_,b,vjs.bind(this,a));
return this
};
vjs.Component.prototype.trigger=function(a,b){vjs.trigger(this.el_,a,b);
return this
};
vjs.Component.prototype.isReady_;
vjs.Component.prototype.isReadyOnInitFinish_=true;
vjs.Component.prototype.readyQueue_;
vjs.Component.prototype.ready=function(a){if(a){if(this.isReady_){a.call(this)
}else{if(this.readyQueue_===undefined){this.readyQueue_=[]
}this.readyQueue_.push(a)
}}return this
};
vjs.Component.prototype.triggerReady=function(){this.isReady_=true;
var c=this.readyQueue_;
if(c&&c.length>0){for(var b=0,a=c.length;
b<a;
b++){c[b].call(this)
}this.readyQueue_=[];
this.trigger("ready")
}};
vjs.Component.prototype.addClass=function(a){vjs.addClass(this.el_,a);
return this
};
vjs.Component.prototype.removeClass=function(a){vjs.removeClass(this.el_,a);
return this
};
vjs.Component.prototype.show=function(){this.el_.style.display="block";
return this
};
vjs.Component.prototype.hide=function(){this.el_.style.display="none";
return this
};
vjs.Component.prototype.lockShowing=function(){this.addClass("vjs-lock-showing");
return this
};
vjs.Component.prototype.unlockShowing=function(){this.removeClass("vjs-lock-showing");
return this
};
vjs.Component.prototype.disable=function(){this.hide();
this.show=function(){}
};
vjs.Component.prototype.width=function(a,b){return this.dimension("width",a,b)
};
vjs.Component.prototype.height=function(a,b){return this.dimension("height",a,b)
};
vjs.Component.prototype.dimensions=function(b,a){return this.width(b,true).height(a)
};
vjs.Component.prototype.dimension=function(e,a,d){if(a!==undefined){if((""+a).indexOf("%")!==-1||(""+a).indexOf("px")!==-1){this.el_.style[e]=a
}else{if(a==="auto"){this.el_.style[e]=""
}else{this.el_.style[e]=a+"px"
}}if(!d){this.trigger("resize")
}return this
}if(!this.el_){return 0
}var c=this.el_.style[e];
var b=c.indexOf("px");
if(b!==-1){return parseInt(c.slice(0,b),10)
}else{return parseInt(this.el_["offset"+vjs.capitalize(e)],10)
}};
vjs.Component.prototype.onResize;
vjs.Component.prototype.emitTapEvents=function(){var a,b,d,c;
a=0;
this.on("touchstart",function(e){a=new Date().getTime();
d=true
});
c=function(){d=false
};
this.on("touchmove",c);
this.on("touchleave",c);
this.on("touchcancel",c);
this.on("touchend",function(e){if(d===true){b=new Date().getTime()-a;
if(b<250){this.trigger("tap")
}}})
};
vjs.Component.prototype.enableTouchActivity=function(){var a,c,b;
a=vjs.bind(this.player(),this.player().reportUserActivity);
this.on("touchstart",function(){a();
clearInterval(c);
c=setInterval(a,250)
});
b=function(d){a();
clearInterval(c)
};
this.on("touchmove",a);
this.on("touchend",b);
this.on("touchcancel",b)
};
vjs.Button=vjs.Component.extend({init:function(c,b){vjs.Component.call(this,c,b);
var d=false;
this.on("touchstart",function(e){e.preventDefault();
d=true
});
this.on("touchmove",function(){d=false
});
var a=this;
this.on("touchend",function(e){if(d){a.onClick(e)
}e.preventDefault()
});
this.on("click",this.onClick);
this.on("focus",this.onFocus);
this.on("blur",this.onBlur)
}});
vjs.Button.prototype.createEl=function(b,a){a=vjs.obj.merge({className:this.buildCSSClass(),innerHTML:'<div class="vjs-control-content"><span class="vjs-control-text">'+(this.buttonText||"Need Text")+"</span></div>",role:"button","aria-live":"polite",tabIndex:0},a);
return vjs.Component.prototype.createEl.call(this,b,a)
};
vjs.Button.prototype.buildCSSClass=function(){return"vjs-control "+vjs.Component.prototype.buildCSSClass.call(this)
};
vjs.Button.prototype.onClick=function(){};
vjs.Button.prototype.onFocus=function(){vjs.on(document,"keyup",vjs.bind(this,this.onKeyPress))
};
vjs.Button.prototype.onKeyPress=function(a){if(a.which==32||a.which==13){a.preventDefault();
this.onClick()
}};
vjs.Button.prototype.onBlur=function(){vjs.off(document,"keyup",vjs.bind(this,this.onKeyPress))
};
vjs.Slider=vjs.Component.extend({init:function(b,a){vjs.Component.call(this,b,a);
this.bar=this.getChild(this.options_.barName);
this.handle=this.getChild(this.options_.handleName);
b.on(this.playerEvent,vjs.bind(this,this.update));
this.on("mousedown",this.onMouseDown);
this.on("touchstart",this.onMouseDown);
this.on("focus",this.onFocus);
this.on("blur",this.onBlur);
this.on("click",this.onClick);
this.player_.on("controlsvisible",vjs.bind(this,this.update));
b.ready(vjs.bind(this,this.update));
this.boundEvents={}
}});
vjs.Slider.prototype.createEl=function(b,a){a=a||{};
a.className=a.className+" vjs-slider";
a=vjs.obj.merge({role:"slider","aria-valuenow":0,"aria-valuemin":0,"aria-valuemax":100,tabIndex:0},a);
return vjs.Component.prototype.createEl.call(this,b,a)
};
vjs.Slider.prototype.onMouseDown=function(a){a.preventDefault();
vjs.blockTextSelection();
this.boundEvents.move=vjs.bind(this,this.onMouseMove);
this.boundEvents.end=vjs.bind(this,this.onMouseUp);
vjs.on(document,"mousemove",this.boundEvents.move);
vjs.on(document,"mouseup",this.boundEvents.end);
vjs.on(document,"touchmove",this.boundEvents.move);
vjs.on(document,"touchend",this.boundEvents.end);
this.onMouseMove(a)
};
vjs.Slider.prototype.onMouseUp=function(){vjs.unblockTextSelection();
vjs.off(document,"mousemove",this.boundEvents.move,false);
vjs.off(document,"mouseup",this.boundEvents.end,false);
vjs.off(document,"touchmove",this.boundEvents.move,false);
vjs.off(document,"touchend",this.boundEvents.end,false);
this.update()
};
vjs.Slider.prototype.update=function(){if(!this.el_){return
}var b,a=this.getPercent(),f=this.handle,g=this.bar;
if(isNaN(a)){a=0
}b=a;
if(f){var d=this.el_,e=d.offsetWidth,j=f.el().offsetWidth,k=(j)?j/e:0,c=1-k,h=a*c;
b=h+(k/2);
f.el().style.left=vjs.round(h*100,2)+"%"
}g.el().style.width=vjs.round(b*100,2)+"%"
};
vjs.Slider.prototype.calculateDistance=function(b){var d,g,m,l,a,j,h,f,e;
d=this.el_;
g=vjs.findPosition(d);
a=j=d.offsetWidth;
h=this.handle;
if(this.options_.vertical){l=g.top;
if(b.changedTouches){e=b.changedTouches[0].pageY
}else{e=b.pageY
}if(h){var k=h.el().offsetHeight;
l=l+(k/2);
j=j-k
}return Math.max(0,Math.min(1,((l-e)+j)/j))
}else{m=g.left;
if(b.changedTouches){f=b.changedTouches[0].pageX
}else{f=b.pageX
}if(h){var c=h.el().offsetWidth;
m=m+(c/2);
a=a-c
}return Math.max(0,Math.min(1,(f-m)/a))
}};
vjs.Slider.prototype.onFocus=function(){vjs.on(document,"keyup",vjs.bind(this,this.onKeyPress))
};
vjs.Slider.prototype.onKeyPress=function(a){if(a.which==37){a.preventDefault();
this.stepBack()
}else{if(a.which==39){a.preventDefault();
this.stepForward()
}}};
vjs.Slider.prototype.onBlur=function(){vjs.off(document,"keyup",vjs.bind(this,this.onKeyPress))
};
vjs.Slider.prototype.onClick=function(a){a.stopImmediatePropagation();
a.preventDefault()
};
vjs.SliderHandle=vjs.Component.extend();
vjs.SliderHandle.prototype.defaultValue=0;
vjs.SliderHandle.prototype.createEl=function(b,a){a=a||{};
a.className=a.className+" vjs-slider-handle";
a=vjs.obj.merge({innerHTML:'<span class="vjs-control-text">'+this.defaultValue+"</span>"},a);
return vjs.Component.prototype.createEl.call(this,"div",a)
};
vjs.Menu=vjs.Component.extend();
vjs.Menu.prototype.addItem=function(a){this.addChild(a);
a.on("click",vjs.bind(this,function(){this.unlockShowing()
}))
};
vjs.Menu.prototype.createEl=function(){var b=this.options().contentElType||"ul";
this.contentEl_=vjs.createEl(b,{className:"vjs-menu-content"});
var a=vjs.Component.prototype.createEl.call(this,"div",{append:this.contentEl_,className:"vjs-menu"});
a.appendChild(this.contentEl_);
vjs.on(a,"click",function(c){c.preventDefault();
c.stopImmediatePropagation()
});
return a
};
vjs.MenuItem=vjs.Button.extend({init:function(b,a){vjs.Button.call(this,b,a);
this.selected(a.selected)
}});
vjs.MenuItem.prototype.createEl=function(b,a){return vjs.Button.prototype.createEl.call(this,"li",vjs.obj.merge({className:"vjs-menu-item",innerHTML:this.options_.label},a))
};
vjs.MenuItem.prototype.onClick=function(){this.selected(true)
};
vjs.MenuItem.prototype.selected=function(a){if(a){this.addClass("vjs-selected");
this.el_.setAttribute("aria-selected",true)
}else{this.removeClass("vjs-selected");
this.el_.setAttribute("aria-selected",false)
}};
vjs.MenuButton=vjs.Button.extend({init:function(b,a){vjs.Button.call(this,b,a);
this.menu=this.createMenu();
this.addChild(this.menu);
if(this.items&&this.items.length===0){this.hide()
}this.on("keyup",this.onKeyPress);
this.el_.setAttribute("aria-haspopup",true);
this.el_.setAttribute("role","button")
}});
vjs.MenuButton.prototype.buttonPressed_=false;
vjs.MenuButton.prototype.createMenu=function(){var b=new vjs.Menu(this.player_);
if(this.options().title){b.el().appendChild(vjs.createEl("li",{className:"vjs-menu-title",innerHTML:vjs.capitalize(this.kind_),tabindex:-1}))
}this.items=this["createItems"]();
if(this.items){for(var a=0;
a<this.items.length;
a++){b.addItem(this.items[a])
}}return b
};
vjs.MenuButton.prototype.createItems=function(){};
vjs.MenuButton.prototype.buildCSSClass=function(){return this.className+" vjs-menu-button "+vjs.Button.prototype.buildCSSClass.call(this)
};
vjs.MenuButton.prototype.onFocus=function(){};
vjs.MenuButton.prototype.onBlur=function(){};
vjs.MenuButton.prototype.onClick=function(){this.one("mouseout",vjs.bind(this,function(){this.menu.unlockShowing();
this.el_.blur()
}));
if(this.buttonPressed_){this.unpressButton()
}else{this.pressButton()
}};
vjs.MenuButton.prototype.onKeyPress=function(a){a.preventDefault();
if(a.which==32||a.which==13){if(this.buttonPressed_){this.unpressButton()
}else{this.pressButton()
}}else{if(a.which==27){if(this.buttonPressed_){this.unpressButton()
}}}};
vjs.MenuButton.prototype.pressButton=function(){this.buttonPressed_=true;
this.menu.lockShowing();
this.el_.setAttribute("aria-pressed",true);
if(this.items&&this.items.length>0){this.items[0].el().focus()
}};
vjs.MenuButton.prototype.unpressButton=function(){this.buttonPressed_=false;
this.menu.unlockShowing();
this.el_.setAttribute("aria-pressed",false)
};
vjs.Player=vjs.Component.extend({init:function(a,b,c){this.tag=a;
a.id=a.id||"vjs_video_"+vjs.guid++;
b=vjs.obj.merge(this.getTagSettings(a),b);
this.cache_={};
this.poster_=b.poster;
this.controls_=b.controls;
a.controls=false;
b.reportTouchActivity=false;
vjs.Component.call(this,this,b,c);
if(this.controls()){this.addClass("vjs-controls-enabled")
}else{this.addClass("vjs-controls-disabled")
}this.one("play",function(g){var d={type:"firstplay",target:this.el_};
var f=vjs.trigger(this.el_,d);
if(!f){g.preventDefault();
g.stopPropagation();
g.stopImmediatePropagation()
}});
this.on("ended",this.onEnded);
this.on("play",this.onPlay);
this.on("firstplay",this.onFirstPlay);
this.on("pause",this.onPause);
this.on("progress",this.onProgress);
this.on("durationchange",this.onDurationChange);
this.on("error",this.onError);
this.on("fullscreenchange",this.onFullscreenChange);
vjs.players[this.id_]=this;
if(b.plugins){vjs.obj.each(b.plugins,function(d,e){this[d](e)
},this)
}this.listenForUserActivity()
}});
vjs.Player.prototype.options_=vjs.options;
vjs.Player.prototype.dispose=function(){this.trigger("dispose");
this.off("dispose");
vjs.players[this.id_]=null;
if(this.tag&&this.tag.player){this.tag.player=null
}if(this.el_&&this.el_.player){this.el_.player=null
}this.stopTrackingProgress();
this.stopTrackingCurrentTime();
if(this.tech){this.tech.dispose()
}vjs.Component.prototype.dispose.call(this)
};
vjs.Player.prototype.getTagSettings=function(a){var d={sources:[],tracks:[]};
vjs.obj.merge(d,vjs.getAttributeValues(a));
if(a.hasChildNodes()){var f,g,b,e,c;
f=a.childNodes;
for(e=0,c=f.length;
e<c;
e++){g=f[e];
b=g.nodeName.toLowerCase();
if(b==="source"){d.sources.push(vjs.getAttributeValues(g))
}else{if(b==="track"){d.tracks.push(vjs.getAttributeValues(g))
}}}}return d
};
vjs.Player.prototype.createEl=function(){var e=this.el_=vjs.Component.prototype.createEl.call(this,"div");
var a=this.tag;
a.removeAttribute("width");
a.removeAttribute("height");
if(a.hasChildNodes()){var b,g,d,f,h,c;
b=a.childNodes;
g=b.length;
c=[];
while(g--){f=b[g];
h=f.nodeName.toLowerCase();
if(h==="track"){c.push(f)
}}for(d=0;
d<c.length;
d++){a.removeChild(c[d])
}}e.id=a.id;
e.className=a.className;
a.id+="_html5_api";
a.className="vjs-tech";
a.player=e.player=this;
this.addClass("vjs-paused");
this.width(this.options_.width,true);
this.height(this.options_.height,true);
if(a.parentNode){a.parentNode.insertBefore(e,a)
}vjs.insertFirst(a,e);
return e
};
vjs.Player.prototype.loadTech=function(d,b){if(this.tech){this.unloadTech()
}if(d!=="Html5"&&this.tag){vjs.Html5.disposeMediaElement(this.tag);
this.tag=null
}this.techName=d;
this.isReady_=false;
var a=function(){this.player_.triggerReady();
if(!this.features.progressEvents){this.player_.manualProgressOn()
}if(!this.features.timeupdateEvents){this.player_.manualTimeUpdatesOn()
}};
var c=vjs.obj.merge({source:b,parentEl:this.el_},this.options_[d.toLowerCase()]);
if(b){if(b.src==this.cache_.src&&this.cache_.currentTime>0){c.startTime=this.cache_.currentTime
}this.cache_.src=b.src
}this.tech=new window.videojs[d](this,c);
this.tech.ready(a)
};
vjs.Player.prototype.unloadTech=function(){this.isReady_=false;
this.tech.dispose();
if(this.manualProgress){this.manualProgressOff()
}if(this.manualTimeUpdates){this.manualTimeUpdatesOff()
}this.tech=false
};
vjs.Player.prototype.manualProgressOn=function(){this.manualProgress=true;
this.trackProgress();
this.tech.one("progress",function(){this.features.progressEvents=true;
this.player_.manualProgressOff()
})
};
vjs.Player.prototype.manualProgressOff=function(){this.manualProgress=false;
this.stopTrackingProgress()
};
vjs.Player.prototype.trackProgress=function(){this.progressInterval=setInterval(vjs.bind(this,function(){if(this.cache_.bufferEnd<this.buffered().end(0)){this.trigger("progress")
}else{if(this.bufferedPercent()==1){this.stopTrackingProgress();
this.trigger("progress")
}}}),500)
};
vjs.Player.prototype.stopTrackingProgress=function(){clearInterval(this.progressInterval)
};
/*! Time Tracking -------------------------------------------------------------- */
vjs.Player.prototype.manualTimeUpdatesOn=function(){this.manualTimeUpdates=true;
this.on("play",this.trackCurrentTime);
this.on("pause",this.stopTrackingCurrentTime);
this.tech.one("timeupdate",function(){this.features.timeupdateEvents=true;
this.player_.manualTimeUpdatesOff()
})
};
vjs.Player.prototype.manualTimeUpdatesOff=function(){this.manualTimeUpdates=false;
this.stopTrackingCurrentTime();
this.off("play",this.trackCurrentTime);
this.off("pause",this.stopTrackingCurrentTime)
};
vjs.Player.prototype.trackCurrentTime=function(){if(this.currentTimeInterval){this.stopTrackingCurrentTime()
}this.currentTimeInterval=setInterval(vjs.bind(this,function(){this.trigger("timeupdate")
}),250)
};
vjs.Player.prototype.stopTrackingCurrentTime=function(){clearInterval(this.currentTimeInterval)
};
vjs.Player.prototype.onLoadStart;
vjs.Player.prototype.onLoadedMetaData;
vjs.Player.prototype.onLoadedData;
vjs.Player.prototype.onLoadedAllData;
vjs.Player.prototype.onPlay=function(){vjs.removeClass(this.el_,"vjs-paused");
vjs.addClass(this.el_,"vjs-playing");
window.gdt.Tracking.MTBtracking.videoTracking(this,"Play")
};
vjs.Player.prototype.onFirstPlay=function(){if(this.options_.starttime){this.currentTime(this.options_.starttime)
}this.addClass("vjs-has-started");
window.gdt.Tracking.MTBtracking.videoTracking(this,"Start")
};
vjs.Player.prototype.onPause=function(){vjs.removeClass(this.el_,"vjs-playing");
vjs.addClass(this.el_,"vjs-paused");
window.gdt.Tracking.MTBtracking.videoTracking(this,"Pause")
};
vjs.Player.prototype.onTimeUpdate;
vjs.Player.prototype.onProgress=function(){if(this.bufferedPercent()==1){this.trigger("loadedalldata")
}};
vjs.Player.prototype.onEnded=function(){if(this.options_.loop){this.currentTime(0);
this.play()
}};
vjs.Player.prototype.onDurationChange=function(){var a=this.techGet("duration");
if(a){this.duration(a)
}};
vjs.Player.prototype.onVolumeChange;
vjs.Player.prototype.onFullscreenChange=function(){if(this.isFullScreen()){this.addClass("vjs-fullscreen");
window.gdt.Tracking.MTBtracking.videoTracking(this,"Full Screen")
}else{this.removeClass("vjs-fullscreen");
window.gdt.Tracking.MTBtracking.videoTracking(this,"Normal Size")
}};
vjs.Player.prototype.onError=function(a){vjs.log("Video Error",a)
};
vjs.Player.prototype.cache_;
vjs.Player.prototype.getCache=function(){return this.cache_
};
vjs.Player.prototype.techCall=function(c,a){if(this.tech&&!this.tech.isReady_){this.tech.ready(function(){this[c](a)
})
}else{try{this.tech[c](a)
}catch(b){vjs.log(b);
throw b
}}};
vjs.Player.prototype.techGet=function(b){if(this.tech&&this.tech.isReady_){try{return this.tech[b]()
}catch(a){if(this.tech[b]===undefined){vjs.log("Video.js: "+b+" method not defined for "+this.techName+" playback technology.",a)
}else{if(a.name=="TypeError"){vjs.log("Video.js: "+b+" unavailable on "+this.techName+" playback technology element.",a);
this.tech.isReady_=false
}else{vjs.log(a)
}}throw a
}}return
};
vjs.Player.prototype.play=function(){this.techCall("play");
return this
};
vjs.Player.prototype.pause=function(){this.techCall("pause");
return this
};
vjs.Player.prototype.paused=function(){return(this.techGet("paused")===false)?false:true
};
vjs.Player.prototype.currentTime=function(a){if(a!==undefined){this.techCall("setCurrentTime",a);
if(this.manualTimeUpdates){this.trigger("timeupdate")
}return this
}return this.cache_.currentTime=(this.techGet("currentTime")||0)
};
vjs.Player.prototype.duration=function(a){if(a!==undefined){this.cache_.duration=parseFloat(a);
return this
}if(this.cache_.duration===undefined){this.onDurationChange()
}return this.cache_.duration||0
};
vjs.Player.prototype.remainingTime=function(){return this.duration()-this.currentTime()
};
vjs.Player.prototype.buffered=function(){var c=this.techGet("buffered"),d=0,a=c.length-1,b=this.cache_.bufferEnd=this.cache_.bufferEnd||0;
if(c&&a>=0&&c.end(a)!==b){b=c.end(a);
this.cache_.bufferEnd=b
}return vjs.createTimeRange(d,b)
};
vjs.Player.prototype.bufferedPercent=function(){return(this.duration())?this.buffered().end(0)/this.duration():0
};
vjs.Player.prototype.volume=function(a){var b;
if(a!==undefined){b=Math.max(0,Math.min(1,parseFloat(a)));
this.cache_.volume=b;
this.techCall("setVolume",b);
vjs.setLocalStorage("volume",b);
return this
}b=parseFloat(this.techGet("volume"));
return(isNaN(b))?1:b
};
vjs.Player.prototype.muted=function(a){if(a!==undefined){this.techCall("setMuted",a);
return this
}return this.techGet("muted")||false
};
vjs.Player.prototype.supportsFullScreen=function(){return this.techGet("supportsFullScreen")||false
};
vjs.Player.prototype.isFullScreen_=false;
vjs.Player.prototype.isFullScreen=function(a){if(a!==undefined){this.isFullScreen_=a;
return this
}return this.isFullScreen_
};
vjs.Player.prototype.requestFullScreen=function(){var a=vjs.support.requestFullScreen;
this.isFullScreen(true);
if(a){vjs.on(document,a.eventName,vjs.bind(this,function(b){this.isFullScreen(document[a.isFullScreen]);
if(this.isFullScreen()===false){vjs.off(document,a.eventName,arguments.callee)
}this.trigger("fullscreenchange")
}));
this.el_[a.requestFn]()
}else{if(this.tech.supportsFullScreen()){this.techCall("enterFullScreen")
}else{this.enterFullWindow();
this.trigger("fullscreenchange")
}}return this
};
vjs.Player.prototype.cancelFullScreen=function(){var a=vjs.support.requestFullScreen;
this.isFullScreen(false);
if(a){document[a.cancelFn]()
}else{if(this.tech.supportsFullScreen()){this.techCall("exitFullScreen")
}else{this.exitFullWindow();
this.trigger("fullscreenchange")
}}return this
};
vjs.Player.prototype.enterFullWindow=function(){this.isFullWindow=true;
this.docOrigOverflow=document.documentElement.style.overflow;
vjs.on(document,"keydown",vjs.bind(this,this.fullWindowOnEscKey));
document.documentElement.style.overflow="hidden";
vjs.addClass(document.body,"vjs-full-window");
this.trigger("enterFullWindow")
};
vjs.Player.prototype.fullWindowOnEscKey=function(a){if(a.keyCode===27){if(this.isFullScreen()===true){this.cancelFullScreen()
}else{this.exitFullWindow()
}}};
vjs.Player.prototype.exitFullWindow=function(){this.isFullWindow=false;
vjs.off(document,"keydown",this.fullWindowOnEscKey);
document.documentElement.style.overflow=this.docOrigOverflow;
vjs.removeClass(document.body,"vjs-full-window");
this.trigger("exitFullWindow")
};
vjs.Player.prototype.selectSource=function(g){for(var h=0,f=this.options_.techOrder;
h<f.length;
h++){var l=vjs.capitalize(f[h]),e=window.videojs[l];
if(e.isSupported()){for(var d=0,c=g;
d<c.length;
d++){var k=c[d];
if(e.canPlaySource(k)){return{source:k,tech:l}
}}}}return false
};
vjs.Player.prototype.src=function(b){if(b===undefined){return this.techGet("src")
}if(b instanceof Array){var a=this.selectSource(b),c;
if(a){b=a.source;
c=a.tech;
if(c==this.techName){this.src(b)
}else{this.loadTech(c,b)
}}else{this.el_.appendChild(vjs.createEl("p",{innerHTML:this.options()["notSupportedMessage"]}));
this.triggerReady()
}}else{if(b instanceof Object){if(window.videojs[this.techName]["canPlaySource"](b)){this.src(b.src)
}else{this.src([b])
}}else{this.cache_.src=b;
if(!this.isReady_){this.ready(function(){this.src(b)
})
}else{this.techCall("src",b);
if(this.options_.preload=="auto"){this.load()
}if(this.options_.autoplay){this.play()
}}}}return this
};
vjs.Player.prototype.load=function(){this.techCall("load");
return this
};
vjs.Player.prototype.currentSrc=function(){return this.techGet("currentSrc")||this.cache_.src||""
};
vjs.Player.prototype.preload=function(a){if(a!==undefined){this.techCall("setPreload",a);
this.options_.preload=a;
return this
}return this.techGet("preload")
};
vjs.Player.prototype.autoplay=function(a){if(a!==undefined){this.techCall("setAutoplay",a);
this.options_.autoplay=a;
return this
}return this.techGet("autoplay",a)
};
vjs.Player.prototype.loop=function(a){if(a!==undefined){this.techCall("setLoop",a);
this.options_.loop=a;
return this
}return this.techGet("loop")
};
vjs.Player.prototype.poster_;
vjs.Player.prototype.poster=function(a){if(a===undefined){return this.poster_
}this.poster_=a;
this.techCall("setPoster",a);
this.trigger("posterchange")
};
vjs.Player.prototype.controls_;
vjs.Player.prototype.controls=function(a){if(a!==undefined){a=!!a;
if(this.controls_!==a){this.controls_=a;
if(a){this.removeClass("vjs-controls-disabled");
this.addClass("vjs-controls-enabled");
this.trigger("controlsenabled")
}else{this.removeClass("vjs-controls-enabled");
this.addClass("vjs-controls-disabled");
this.trigger("controlsdisabled")
}}return this
}return this.controls_
};
vjs.Player.prototype.usingNativeControls_;
vjs.Player.prototype.usingNativeControls=function(a){if(a!==undefined){a=!!a;
if(this.usingNativeControls_!==a){this.usingNativeControls_=a;
if(a){this.addClass("vjs-using-native-controls");
this.trigger("usingnativecontrols")
}else{this.removeClass("vjs-using-native-controls");
this.trigger("usingcustomcontrols")
}}return this
}return this.usingNativeControls_
};
vjs.Player.prototype.error=function(){return this.techGet("error")
};
vjs.Player.prototype.ended=function(){return this.techGet("ended")
};
vjs.Player.prototype.seeking=function(){return this.techGet("seeking")
};
vjs.Player.prototype.userActivity_=true;
vjs.Player.prototype.reportUserActivity=function(a){this.userActivity_=true
};
vjs.Player.prototype.userActive_=true;
vjs.Player.prototype.userActive=function(a){if(a!==undefined){a=!!a;
if(a!==this.userActive_){this.userActive_=a;
if(a){this.userActivity_=true;
this.removeClass("vjs-user-inactive");
this.addClass("vjs-user-active");
this.trigger("useractive")
}else{this.userActivity_=false;
if(this.tech){this.tech.one("mousemove",function(b){b.stopPropagation();
b.preventDefault()
})
}this.removeClass("vjs-user-active");
this.addClass("vjs-user-inactive");
this.trigger("userinactive")
}}return this
}return this.userActive_
};
vjs.Player.prototype.listenForUserActivity=function(){var c,e,f,b,a,d;
c=vjs.bind(this,this.reportUserActivity);
e=function(){c();
clearInterval(f);
f=setInterval(c,250)
};
b=function(g){c();
clearInterval(f)
};
this.on("mousedown",e);
this.on("mousemove",c);
this.on("mouseup",b);
this.on("keydown",c);
this.on("keyup",c);
a=setInterval(vjs.bind(this,function(){if(this.userActivity_){this.userActivity_=false;
this.userActive(true);
clearTimeout(d);
d=setTimeout(vjs.bind(this,function(){if(!this.userActivity_){this.userActive(false)
}}),2000)
}}),250);
this.on("dispose",function(){clearInterval(a);
clearTimeout(d)
})
};
(function(){var a,b,c;
c=document.createElement("div");
b={};
if(c.cancelFullscreen!==undefined){b.requestFn="requestFullscreen";
b.cancelFn="exitFullscreen";
b.eventName="fullscreenchange";
b.isFullScreen="fullScreen"
}else{if(document.mozCancelFullScreen){a="moz";
b.isFullScreen=a+"FullScreen"
}else{a="webkit";
b.isFullScreen=a+"IsFullScreen"
}if(c[a+"RequestFullScreen"]){b.requestFn=a+"RequestFullScreen";
b.cancelFn=a+"CancelFullScreen"
}b.eventName=a+"fullscreenchange"
}if(document[b.cancelFn]){vjs.support.requestFullScreen=b
}})();
vjs.ControlBar=vjs.Component.extend();
vjs.ControlBar.prototype.options_={loadEvent:"play",children:{playToggle:{},currentTimeDisplay:{},timeDivider:{},durationDisplay:{},remainingTimeDisplay:{},progressControl:{},fullscreenToggle:{},volumeControl:{},muteToggle:{}}};
vjs.ControlBar.prototype.createEl=function(){return vjs.createEl("div",{className:"vjs-control-bar"})
};
vjs.PlayToggle=vjs.Button.extend({init:function(b,a){vjs.Button.call(this,b,a);
b.on("play",vjs.bind(this,this.onPlay));
b.on("pause",vjs.bind(this,this.onPause))
}});
vjs.PlayToggle.prototype.buttonText="Play";
vjs.PlayToggle.prototype.buildCSSClass=function(){return"vjs-play-control "+vjs.Button.prototype.buildCSSClass.call(this)
};
vjs.PlayToggle.prototype.onClick=function(){if(this.player_.paused()){this.player_.play()
}else{this.player_.pause()
}};
vjs.PlayToggle.prototype.onPlay=function(){vjs.removeClass(this.el_,"vjs-paused");
vjs.addClass(this.el_,"vjs-playing");
this.el_.children[0].children[0].innerHTML="Pause"
};
vjs.PlayToggle.prototype.onPause=function(){vjs.removeClass(this.el_,"vjs-playing");
vjs.addClass(this.el_,"vjs-paused");
this.el_.children[0].children[0].innerHTML="Play"
};
vjs.CurrentTimeDisplay=vjs.Component.extend({init:function(b,a){vjs.Component.call(this,b,a);
b.on("timeupdate",vjs.bind(this,this.updateContent))
}});
vjs.CurrentTimeDisplay.prototype.createEl=function(){var a=vjs.Component.prototype.createEl.call(this,"div",{className:"vjs-current-time vjs-time-controls vjs-control"});
this.contentEl_=vjs.createEl("div",{className:"vjs-current-time-display",innerHTML:'<span class="vjs-control-text">Current Time </span>0:00',"aria-live":"off"});
a.appendChild(this.contentEl_);
return a
};
vjs.CurrentTimeDisplay.prototype.updateContent=function(){var a=(this.player_.scrubbing)?this.player_.getCache().currentTime:this.player_.currentTime();
this.contentEl_.innerHTML='<span class="vjs-control-text">Current Time </span>'+vjs.formatTime(a,this.player_.duration())
};
vjs.DurationDisplay=vjs.Component.extend({init:function(b,a){vjs.Component.call(this,b,a);
b.on("timeupdate",vjs.bind(this,this.updateContent))
}});
vjs.DurationDisplay.prototype.createEl=function(){var a=vjs.Component.prototype.createEl.call(this,"div",{className:"vjs-duration vjs-time-controls vjs-control"});
this.contentEl_=vjs.createEl("div",{className:"vjs-duration-display",innerHTML:'<span class="vjs-control-text">Duration Time </span>0:00',"aria-live":"off"});
a.appendChild(this.contentEl_);
return a
};
vjs.DurationDisplay.prototype.updateContent=function(){var a=this.player_.duration();
if(a){this.contentEl_.innerHTML='<span class="vjs-control-text">Duration Time </span>'+vjs.formatTime(a)
}};
vjs.TimeDivider=vjs.Component.extend({init:function(b,a){vjs.Component.call(this,b,a)
}});
vjs.TimeDivider.prototype.createEl=function(){return vjs.Component.prototype.createEl.call(this,"div",{className:"vjs-time-divider",innerHTML:"<div><span>/</span></div>"})
};
vjs.RemainingTimeDisplay=vjs.Component.extend({init:function(b,a){vjs.Component.call(this,b,a);
b.on("timeupdate",vjs.bind(this,this.updateContent))
}});
vjs.RemainingTimeDisplay.prototype.createEl=function(){var a=vjs.Component.prototype.createEl.call(this,"div",{className:"vjs-remaining-time vjs-time-controls vjs-control"});
this.contentEl_=vjs.createEl("div",{className:"vjs-remaining-time-display",innerHTML:'<span class="vjs-control-text">Remaining Time </span>-0:00',"aria-live":"off"});
a.appendChild(this.contentEl_);
return a
};
vjs.RemainingTimeDisplay.prototype.updateContent=function(){if(this.player_.duration()){this.contentEl_.innerHTML='<span class="vjs-control-text">Remaining Time </span>-'+vjs.formatTime(this.player_.remainingTime())
}};
vjs.FullscreenToggle=vjs.Button.extend({init:function(b,a){vjs.Button.call(this,b,a)
}});
vjs.FullscreenToggle.prototype.buttonText="Fullscreen";
vjs.FullscreenToggle.prototype.buildCSSClass=function(){return"vjs-fullscreen-control "+vjs.Button.prototype.buildCSSClass.call(this)
};
vjs.FullscreenToggle.prototype.onClick=function(){if(!this.player_.isFullScreen()){this.player_.requestFullScreen();
this.el_.children[0].children[0].innerHTML="Non-Fullscreen"
}else{this.player_.cancelFullScreen();
this.el_.children[0].children[0].innerHTML="Fullscreen"
}};
vjs.ProgressControl=vjs.Component.extend({init:function(b,a){vjs.Component.call(this,b,a)
}});
vjs.ProgressControl.prototype.options_={children:{seekBar:{}}};
vjs.ProgressControl.prototype.createEl=function(){return vjs.Component.prototype.createEl.call(this,"div",{className:"vjs-progress-control vjs-control"})
};
vjs.SeekBar=vjs.Slider.extend({init:function(b,a){vjs.Slider.call(this,b,a);
b.on("timeupdate",vjs.bind(this,this.updateARIAAttributes));
b.ready(vjs.bind(this,this.updateARIAAttributes))
}});
vjs.SeekBar.prototype.options_={children:{loadProgressBar:{},playProgressBar:{},seekHandle:{}},barName:"playProgressBar",handleName:"seekHandle"};
vjs.SeekBar.prototype.playerEvent="timeupdate";
vjs.SeekBar.prototype.createEl=function(){return vjs.Slider.prototype.createEl.call(this,"div",{className:"vjs-progress-holder","aria-label":"video progress bar"})
};
vjs.SeekBar.prototype.updateARIAAttributes=function(){var a=(this.player_.scrubbing)?this.player_.getCache().currentTime:this.player_.currentTime();
this.el_.setAttribute("aria-valuenow",vjs.round(this.getPercent()*100,2));
this.el_.setAttribute("aria-valuetext",vjs.formatTime(a,this.player_.duration()))
};
vjs.SeekBar.prototype.getPercent=function(){return this.player_.currentTime()/this.player_.duration()
};
vjs.SeekBar.prototype.onMouseDown=function(a){vjs.Slider.prototype.onMouseDown.call(this,a);
this.player_.scrubbing=true;
this.videoWasPlaying=!this.player_.paused();
this.player_.pause()
};
vjs.SeekBar.prototype.onMouseMove=function(b){var a=this.calculateDistance(b)*this.player_.duration();
if(a==this.player_.duration()){a=a-0.1
}this.player_.currentTime(a)
};
vjs.SeekBar.prototype.onMouseUp=function(a){vjs.Slider.prototype.onMouseUp.call(this,a);
this.player_.scrubbing=false;
if(this.videoWasPlaying){this.player_.play()
}};
vjs.SeekBar.prototype.stepForward=function(){this.player_.currentTime(this.player_.currentTime()+5)
};
vjs.SeekBar.prototype.stepBack=function(){this.player_.currentTime(this.player_.currentTime()-5)
};
vjs.LoadProgressBar=vjs.Component.extend({init:function(b,a){vjs.Component.call(this,b,a);
b.on("progress",vjs.bind(this,this.update))
}});
vjs.LoadProgressBar.prototype.createEl=function(){return vjs.Component.prototype.createEl.call(this,"div",{className:"vjs-load-progress",innerHTML:'<span class="vjs-control-text">Loaded: 0%</span>'})
};
vjs.LoadProgressBar.prototype.update=function(){if(this.el_.style){this.el_.style.width=vjs.round(this.player_.bufferedPercent()*100,2)+"%"
}};
vjs.PlayProgressBar=vjs.Component.extend({init:function(b,a){vjs.Component.call(this,b,a)
}});
vjs.PlayProgressBar.prototype.createEl=function(){return vjs.Component.prototype.createEl.call(this,"div",{className:"vjs-play-progress",innerHTML:'<span class="vjs-control-text">Progress: 0%</span>'})
};
vjs.SeekHandle=vjs.SliderHandle.extend({init:function(b,a){vjs.SliderHandle.call(this,b,a);
b.on("timeupdate",vjs.bind(this,this.updateContent))
}});
vjs.SeekHandle.prototype.defaultValue="00:00";
vjs.SeekHandle.prototype.createEl=function(){return vjs.SliderHandle.prototype.createEl.call(this,"div",{className:"vjs-seek-handle","aria-live":"off"})
};
vjs.SeekHandle.prototype.updateContent=function(){var a=(this.player_.scrubbing)?this.player_.getCache().currentTime:this.player_.currentTime();
this.el_.innerHTML='<span class="vjs-control-text">'+vjs.formatTime(a,this.player_.duration())+"</span>"
};
vjs.VolumeControl=vjs.Component.extend({init:function(b,a){vjs.Component.call(this,b,a);
if(b.tech&&b.tech.features&&b.tech.features.volumeControl===false){this.addClass("vjs-hidden")
}b.on("loadstart",vjs.bind(this,function(){if(b.tech.features&&b.tech.features.volumeControl===false){this.addClass("vjs-hidden")
}else{this.removeClass("vjs-hidden")
}}))
}});
vjs.VolumeControl.prototype.options_={children:{volumeBar:{}}};
vjs.VolumeControl.prototype.createEl=function(){return vjs.Component.prototype.createEl.call(this,"div",{className:"vjs-volume-control vjs-control"})
};
vjs.VolumeBar=vjs.Slider.extend({init:function(b,a){vjs.Slider.call(this,b,a);
b.on("volumechange",vjs.bind(this,this.updateARIAAttributes));
b.ready(vjs.bind(this,this.updateARIAAttributes));
setTimeout(vjs.bind(this,this.update),0)
}});
vjs.VolumeBar.prototype.updateARIAAttributes=function(){this.el_.setAttribute("aria-valuenow",vjs.round(this.player_.volume()*100,2));
this.el_.setAttribute("aria-valuetext",vjs.round(this.player_.volume()*100,2)+"%")
};
vjs.VolumeBar.prototype.options_={children:{volumeLevel:{},volumeHandle:{}},barName:"volumeLevel",handleName:"volumeHandle"};
vjs.VolumeBar.prototype.playerEvent="volumechange";
vjs.VolumeBar.prototype.createEl=function(){return vjs.Slider.prototype.createEl.call(this,"div",{className:"vjs-volume-bar","aria-label":"volume level"})
};
vjs.VolumeBar.prototype.onMouseMove=function(a){if(this.player_.muted()){this.player_.muted(false)
}this.player_.volume(this.calculateDistance(a))
};
vjs.VolumeBar.prototype.getPercent=function(){if(this.player_.muted()){return 0
}else{return this.player_.volume()
}};
vjs.VolumeBar.prototype.stepForward=function(){this.player_.volume(this.player_.volume()+0.1)
};
vjs.VolumeBar.prototype.stepBack=function(){this.player_.volume(this.player_.volume()-0.1)
};
vjs.VolumeLevel=vjs.Component.extend({init:function(b,a){vjs.Component.call(this,b,a)
}});
vjs.VolumeLevel.prototype.createEl=function(){return vjs.Component.prototype.createEl.call(this,"div",{className:"vjs-volume-level",innerHTML:'<span class="vjs-control-text"></span>'})
};
vjs.VolumeHandle=vjs.SliderHandle.extend();
vjs.VolumeHandle.prototype.defaultValue="00:00";
vjs.VolumeHandle.prototype.createEl=function(){return vjs.SliderHandle.prototype.createEl.call(this,"div",{className:"vjs-volume-handle"})
};
vjs.MuteToggle=vjs.Button.extend({init:function(b,a){vjs.Button.call(this,b,a);
b.on("volumechange",vjs.bind(this,this.update));
if(b.tech&&b.tech.features&&b.tech.features.volumeControl===false){this.addClass("vjs-hidden")
}b.on("loadstart",vjs.bind(this,function(){if(b.tech.features&&b.tech.features.volumeControl===false){this.addClass("vjs-hidden")
}else{this.removeClass("vjs-hidden")
}}))
}});
vjs.MuteToggle.prototype.createEl=function(){return vjs.Button.prototype.createEl.call(this,"div",{className:"vjs-mute-control vjs-control",innerHTML:'<div><span class="vjs-control-text">Mute</span></div>'})
};
vjs.MuteToggle.prototype.onClick=function(){this.player_.muted(this.player_.muted()?false:true)
};
vjs.MuteToggle.prototype.update=function(){var b=this.player_.volume(),c=3;
if(b===0||this.player_.muted()){c=0
}else{if(b<0.33){c=1
}else{if(b<0.67){c=2
}}}if(this.player_.muted()){if(this.el_.children[0].children[0].innerHTML!="Unmute"){this.el_.children[0].children[0].innerHTML="Unmute"
}}else{if(this.el_.children[0].children[0].innerHTML!="Mute"){this.el_.children[0].children[0].innerHTML="Mute"
}}for(var a=0;
a<4;
a++){vjs.removeClass(this.el_,"vjs-vol-"+a)
}vjs.addClass(this.el_,"vjs-vol-"+c)
};
vjs.VolumeMenuButton=vjs.MenuButton.extend({init:function(b,a){vjs.MenuButton.call(this,b,a);
b.on("volumechange",vjs.bind(this,this.update));
if(b.tech&&b.tech.features&&b.tech.features.volumeControl===false){this.addClass("vjs-hidden")
}b.on("loadstart",vjs.bind(this,function(){if(b.tech.features&&b.tech.features.volumeControl===false){this.addClass("vjs-hidden")
}else{this.removeClass("vjs-hidden")
}}));
this.addClass("vjs-menu-button")
}});
vjs.VolumeMenuButton.prototype.createMenu=function(){var b=new vjs.Menu(this.player_,{contentElType:"div"});
var a=new vjs.VolumeBar(this.player_,vjs.obj.merge({vertical:true},this.options_.volumeBar));
b.addChild(a);
return b
};
vjs.VolumeMenuButton.prototype.onClick=function(){vjs.MuteToggle.prototype.onClick.call(this);
vjs.MenuButton.prototype.onClick.call(this)
};
vjs.VolumeMenuButton.prototype.createEl=function(){return vjs.Button.prototype.createEl.call(this,"div",{className:"vjs-volume-menu-button vjs-menu-button vjs-control",innerHTML:'<div><span class="vjs-control-text">Mute</span></div>'})
};
vjs.VolumeMenuButton.prototype.update=vjs.MuteToggle.prototype.update;
vjs.PosterImage=vjs.Button.extend({init:function(b,a){vjs.Button.call(this,b,a);
if(b.poster()){this.src(b.poster())
}if(!b.poster()||!b.controls()){this.hide()
}b.on("posterchange",vjs.bind(this,function(){this.src(b.poster())
}));
b.on("play",vjs.bind(this,this.hide))
}});
var _backgroundSizeSupported="backgroundSize" in vjs.TEST_VID.style;
vjs.PosterImage.prototype.createEl=function(){var a=vjs.createEl("div",{className:"vjs-poster",tabIndex:-1});
if(!_backgroundSizeSupported){a.appendChild(vjs.createEl("img"))
}return a
};
vjs.PosterImage.prototype.src=function(a){var b=this.el();
if(a===undefined){return
}if(_backgroundSizeSupported){b.style.backgroundImage='url("'+a+'")'
}else{b.firstChild.src=a
}};
vjs.PosterImage.prototype.onClick=function(){if(this.player().controls()){this.player_.play()
}};
vjs.LoadingSpinner=vjs.Component.extend({init:function(b,a){vjs.Component.call(this,b,a);
b.on("canplay",vjs.bind(this,this.hide));
b.on("canplaythrough",vjs.bind(this,this.hide));
b.on("playing",vjs.bind(this,this.hide));
b.on("seeking",vjs.bind(this,this.show));
b.on("seeked",vjs.bind(this,this.hide));
b.on("error",vjs.bind(this,this.show));
b.on("ended",vjs.bind(this,this.hide));
b.on("waiting",vjs.bind(this,this.show))
}});
vjs.LoadingSpinner.prototype.createEl=function(){return vjs.Component.prototype.createEl.call(this,"div",{className:"vjs-loading-spinner"})
};
vjs.BigPlayButton=vjs.Button.extend();
vjs.BigPlayButton.prototype.createEl=function(){return vjs.Button.prototype.createEl.call(this,"div",{className:"vjs-big-play-button",innerHTML:'<span aria-hidden="true"></span>',"aria-label":"play video"})
};
vjs.BigPlayButton.prototype.onClick=function(){this.player_.play()
};
vjs.MediaTechController=vjs.Component.extend({init:function(b,a,c){a=a||{};
a.reportTouchActivity=false;
vjs.Component.call(this,b,a,c);
this.initControlsListeners()
}});
vjs.MediaTechController.prototype.initControlsListeners=function(){var c,b,a,d;
b=this;
c=this.player();
var a=function(){if(c.controls()&&!c.usingNativeControls()){b.addControlsListeners()
}};
d=vjs.bind(b,b.removeControlsListeners);
this.ready(a);
c.on("controlsenabled",a);
c.on("controlsdisabled",d)
};
vjs.MediaTechController.prototype.addControlsListeners=function(){var a;
this.on("mousedown",this.onClick);
this.on("touchstart",function(b){b.preventDefault();
a=this.player_.userActive()
});
this.on("touchmove",function(b){if(a){this.player().reportUserActivity()
}});
this.emitTapEvents();
this.on("tap",this.onTap)
};
vjs.MediaTechController.prototype.removeControlsListeners=function(){this.off("tap");
this.off("touchstart");
this.off("touchmove");
this.off("touchleave");
this.off("touchcancel");
this.off("touchend");
this.off("click");
this.off("mousedown")
};
vjs.MediaTechController.prototype.onClick=function(a){if(a.button!==0){return
}if(this.player().controls()){if(this.player().paused()){this.player().play()
}else{this.player().pause()
}}};
vjs.MediaTechController.prototype.onTap=function(){this.player().userActive(!this.player().userActive())
};
vjs.MediaTechController.prototype.setPoster=function(){};
vjs.MediaTechController.prototype.features={volumeControl:true,fullscreenResize:false,progressEvents:false,timeupdateEvents:false};
vjs.media={};
vjs.media.ApiMethods="play,pause,paused,currentTime,setCurrentTime,duration,buffered,volume,setVolume,muted,setMuted,width,height,supportsFullScreen,enterFullScreen,src,load,currentSrc,preload,setPreload,autoplay,setAutoplay,loop,setLoop,error,networkState,readyState,seeking,initialTime,startOffsetTime,played,seekable,ended,videoTracks,audioTracks,videoWidth,videoHeight,textTracks,defaultPlaybackRate,playbackRate,mediaGroup,controller,controls,defaultMuted".split(",");
function createMethod(a){return function(){throw new Error('The "'+a+"\" method is not available on the playback technology's API")
}
}for(var i=vjs.media.ApiMethods.length-1;
i>=0;
i--){var methodName=vjs.media.ApiMethods[i];
vjs.MediaTechController.prototype[vjs.media.ApiMethods[i]]=createMethod(methodName)
}vjs.Html5=vjs.MediaTechController.extend({init:function(b,a,c){this.features.volumeControl=vjs.Html5.canControlVolume();
this.features.movingMediaElementInDOM=!vjs.IS_IOS;
this.features.fullscreenResize=true;
vjs.MediaTechController.call(this,b,a,c);
this.setupTriggers();
var d=a.source;
if(d&&this.el_.currentSrc===d.src&&this.el_.networkState>0){b.trigger("loadstart")
}else{if(d){this.el_.src=d.src
}}if(vjs.TOUCH_ENABLED&&b.options()["nativeControlsForTouch"]!==false){this.useNativeControls()
}b.ready(function(){if(this.tag&&this.options_.autoplay&&this.paused()){delete this.tag.poster;
this.play()
}});
this.triggerReady()
}});
vjs.Html5.prototype.dispose=function(){vjs.MediaTechController.prototype.dispose.call(this)
};
vjs.Html5.prototype.createEl=function(){var d=this.player_,e=d.tag,f,g;
if(!e||this.features.movingMediaElementInDOM===false){if(e){g=e.cloneNode(false);
vjs.Html5.disposeMediaElement(e);
e=g;
d.tag=null
}else{e=vjs.createEl("video",{id:d.id()+"_html5_api",className:"vjs-tech"})
}e.player=d;
vjs.insertFirst(e,d.el())
}var b=["autoplay","preload","loop","muted"];
for(var c=b.length-1;
c>=0;
c--){var a=b[c];
if(d.options_[a]!==null){e[a]=d.options_[a]
}}return e
};
vjs.Html5.prototype.setupTriggers=function(){for(var a=vjs.Html5.Events.length-1;
a>=0;
a--){vjs.on(this.el_,vjs.Html5.Events[a],vjs.bind(this.player_,this.eventHandler))
}};
vjs.Html5.prototype.eventHandler=function(a){this.trigger(a);
a.stopPropagation()
};
vjs.Html5.prototype.useNativeControls=function(){var a,b,e,d,c;
a=this;
b=this.player();
a.setControls(b.controls());
e=function(){a.setControls(true)
};
d=function(){a.setControls(false)
};
b.on("controlsenabled",e);
b.on("controlsdisabled",d);
c=function(){b.off("controlsenabled",e);
b.off("controlsdisabled",d)
};
a.on("dispose",c);
b.on("usingcustomcontrols",c);
b.usingNativeControls(true)
};
vjs.Html5.prototype.play=function(){this.el_.play()
};
vjs.Html5.prototype.pause=function(){this.el_.pause()
};
vjs.Html5.prototype.paused=function(){return this.el_.paused
};
vjs.Html5.prototype.currentTime=function(){return this.el_.currentTime
};
vjs.Html5.prototype.setCurrentTime=function(b){try{this.el_.currentTime=b
}catch(a){vjs.log(a,"Video is not ready. (Video.js)")
}};
vjs.Html5.prototype.duration=function(){return this.el_.duration||0
};
vjs.Html5.prototype.buffered=function(){return this.el_.buffered
};
vjs.Html5.prototype.volume=function(){return this.el_.volume
};
vjs.Html5.prototype.setVolume=function(a){this.el_.volume=a
};
vjs.Html5.prototype.muted=function(){return this.el_.muted
};
vjs.Html5.prototype.setMuted=function(a){this.el_.muted=a
};
vjs.Html5.prototype.width=function(){return this.el_.offsetWidth
};
vjs.Html5.prototype.height=function(){return this.el_.offsetHeight
};
vjs.Html5.prototype.supportsFullScreen=function(){if(typeof this.el_.webkitEnterFullScreen=="function"){if(/Android/.test(vjs.USER_AGENT)||!/Chrome|Mac OS X 10.5/.test(vjs.USER_AGENT)){return true
}}return false
};
vjs.Html5.prototype.enterFullScreen=function(){var a=this.el_;
if(a.paused&&a.networkState<=a.HAVE_METADATA){this.el_.play();
setTimeout(function(){a.pause();
a.webkitEnterFullScreen()
},0)
}else{a.webkitEnterFullScreen()
}};
vjs.Html5.prototype.exitFullScreen=function(){this.el_.webkitExitFullScreen()
};
vjs.Html5.prototype.src=function(a){this.el_.src=a
};
vjs.Html5.prototype.load=function(){this.el_.load()
};
vjs.Html5.prototype.currentSrc=function(){return this.el_.currentSrc
};
vjs.Html5.prototype.poster=function(){return this.el_.poster
};
vjs.Html5.prototype.setPoster=function(a){this.el_.poster=a
};
vjs.Html5.prototype.preload=function(){return this.el_.preload
};
vjs.Html5.prototype.setPreload=function(a){this.el_.preload=a
};
vjs.Html5.prototype.autoplay=function(){return this.el_.autoplay
};
vjs.Html5.prototype.setAutoplay=function(a){this.el_.autoplay=a
};
vjs.Html5.prototype.controls=function(){return this.el_.controls
};
vjs.Html5.prototype.setControls=function(a){this.el_.controls=!!a
};
vjs.Html5.prototype.loop=function(){return this.el_.loop
};
vjs.Html5.prototype.setLoop=function(a){this.el_.loop=a
};
vjs.Html5.prototype.error=function(){return this.el_.error
};
vjs.Html5.prototype.seeking=function(){return this.el_.seeking
};
vjs.Html5.prototype.ended=function(){return this.el_.ended
};
vjs.Html5.prototype.defaultMuted=function(){return this.el_.defaultMuted
};
vjs.Html5.isSupported=function(){try{vjs.TEST_VID.volume=0.5
}catch(a){return false
}return !!vjs.TEST_VID.canPlayType
};
vjs.Html5.canPlaySource=function(a){try{return !!vjs.TEST_VID.canPlayType(a.type)
}catch(b){return""
}};
vjs.Html5.canControlVolume=function(){var a=vjs.TEST_VID.volume;
vjs.TEST_VID.volume=(a/2)+0.1;
return a!==vjs.TEST_VID.volume
};
(function(){var c,a=/^application\/(?:x-|vnd\.apple\.)mpegurl/i,b=/^video\/mp4/i;
vjs.Html5.patchCanPlayType=function(){if(vjs.ANDROID_VERSION>=4){if(!c){c=vjs.TEST_VID.constructor.prototype.canPlayType
}vjs.TEST_VID.constructor.prototype.canPlayType=function(d){if(d&&a.test(d)){return"maybe"
}return c.call(this,d)
}
}if(vjs.IS_OLD_ANDROID){if(!c){c=vjs.TEST_VID.constructor.prototype.canPlayType
}vjs.TEST_VID.constructor.prototype.canPlayType=function(d){if(d&&b.test(d)){return"maybe"
}return c.call(this,d)
}
}};
vjs.Html5.unpatchCanPlayType=function(){var d=vjs.TEST_VID.constructor.prototype.canPlayType;
vjs.TEST_VID.constructor.prototype.canPlayType=c;
c=null;
return d
};
vjs.Html5.patchCanPlayType()
})();
vjs.Html5.Events="loadstart,suspend,abort,error,emptied,stalled,loadedmetadata,loadeddata,canplay,canplaythrough,playing,waiting,seeking,seeked,ended,durationchange,timeupdate,progress,play,pause,ratechange,volumechange".split(",");
vjs.Html5.disposeMediaElement=function(a){if(!a){return
}a.player=null;
if(a.parentNode){a.parentNode.removeChild(a)
}while(a.hasChildNodes()){a.removeChild(a.firstChild)
}a.removeAttribute("src");
if(typeof a.load==="function"){(function(){try{a.load()
}catch(b){}})()
}};
vjs.Flash=vjs.MediaTechController.extend({init:function(n,o,l){vjs.MediaTechController.call(this,n,o,l);
var a=o.source,h=o.parentEl,m=this.el_=vjs.createEl("div",{id:n.id()+"_temp_flash"}),b=n.id()+"_flash_api",c=n.options_,j=vjs.obj.merge({readyFunction:"videojs.Flash.onReady",eventProxyFunction:"videojs.Flash.onEvent",errorEventProxyFunction:"videojs.Flash.onError",autoplay:c.autoplay,preload:c.preload,loop:c.loop,muted:c.muted},o.flashVars),d=vjs.obj.merge({wmode:"opaque",bgcolor:"#000000"},o.params),f=vjs.obj.merge({id:b,name:b,"class":"vjs-tech"},o.attributes),k;
if(a){if(a.type&&vjs.Flash.isStreamingType(a.type)){var e=vjs.Flash.streamToParts(a.src);
j.rtmpConnection=encodeURIComponent(e.connection);
j.rtmpStream=encodeURIComponent(e.stream)
}else{j.src=encodeURIComponent(vjs.getAbsoluteURL(a.src))
}}this["setCurrentTime"]=function(p){k=p;
this.el_.vjs_setProperty("currentTime",p)
};
this["currentTime"]=function(p){if(this.seeking()){return k
}return this.el_.vjs_getProperty("currentTime")
};
vjs.insertFirst(m,h);
if(o.startTime){this.ready(function(){this.load();
this.play();
this.currentTime(o.startTime)
})
}if(vjs.IS_FIREFOX){this.ready(function(){vjs.on(this.el(),"mousemove",vjs.bind(this,function(){this.player().trigger({type:"mousemove",bubbles:false})
}))
})
}if(o.iFrameMode===true&&!vjs.IS_FIREFOX){var g=vjs.createEl("iframe",{id:b+"_iframe",name:b+"_iframe",className:"vjs-tech",scrolling:"no",marginWidth:0,marginHeight:0,frameBorder:0});
j.readyFunction="ready";
j.eventProxyFunction="events";
j.errorEventProxyFunction="errors";
vjs.on(g,"load",vjs.bind(this,function(){var q,p=g.contentWindow;
q=g.contentDocument?g.contentDocument:g.contentWindow.document;
q.write(vjs.Flash.getEmbedCode(o.swf,j,d,f));
p.player=this.player_;
p.ready=vjs.bind(this.player_,function(s){var u=q.getElementById(s),t=this,r=t.tech;
r.el_=u;
vjs.Flash.checkReady(r)
});
p.events=vjs.bind(this.player_,function(s,r){var t=this;
if(t&&t.techName==="flash"){t.trigger(r)
}});
p.errors=vjs.bind(this.player_,function(s,r){vjs.log("Flash Error",r)
})
}));
m.parentNode.replaceChild(g,m)
}else{vjs.Flash.embed(o.swf,m,j,d,f)
}}});
vjs.Flash.prototype.dispose=function(){vjs.MediaTechController.prototype.dispose.call(this)
};
vjs.Flash.prototype.play=function(){this.el_.vjs_play()
};
vjs.Flash.prototype.pause=function(){this.el_.vjs_pause()
};
vjs.Flash.prototype.src=function(b){if(b===undefined){return this.currentSrc()
}if(vjs.Flash.isStreamingSrc(b)){b=vjs.Flash.streamToParts(b);
this.setRtmpConnection(b.connection);
this.setRtmpStream(b.stream)
}else{b=vjs.getAbsoluteURL(b);
this.el_.vjs_src(b)
}if(this.player_.autoplay()){var a=this;
setTimeout(function(){a.play()
},0)
}};
vjs.Flash.prototype.currentSrc=function(){var c=this.el_.vjs_getProperty("currentSrc");
if(c==null){var a=this["rtmpConnection"](),b=this["rtmpStream"]();
if(a&&b){c=vjs.Flash.streamFromParts(a,b)
}}return c
};
vjs.Flash.prototype.load=function(){this.el_.vjs_load()
};
vjs.Flash.prototype.poster=function(){this.el_.vjs_getProperty("poster")
};
vjs.Flash.prototype.setPoster=function(){};
vjs.Flash.prototype.buffered=function(){return vjs.createTimeRange(0,this.el_.vjs_getProperty("buffered"))
};
vjs.Flash.prototype.supportsFullScreen=function(){return false
};
vjs.Flash.prototype.enterFullScreen=function(){return false
};
var api=vjs.Flash.prototype,readWrite="rtmpConnection,rtmpStream,preload,defaultPlaybackRate,playbackRate,autoplay,loop,mediaGroup,controller,controls,volume,muted,defaultMuted".split(","),readOnly="error,networkState,readyState,seeking,initialTime,duration,startOffsetTime,paused,played,seekable,ended,videoTracks,audioTracks,videoWidth,videoHeight,textTracks".split(",");
var createSetter=function(a){var b=a.charAt(0).toUpperCase()+a.slice(1);
api["set"+b]=function(c){return this.el_.vjs_setProperty(a,c)
}
};
var createGetter=function(a){api[a]=function(){return this.el_.vjs_getProperty(a)
}
};
(function(){var a;
for(a=0;
a<readWrite.length;
a++){createGetter(readWrite[a]);
createSetter(readWrite[a])
}for(a=0;
a<readOnly.length;
a++){createGetter(readOnly[a])
}})();
vjs.Flash.isSupported=function(){return vjs.Flash.version()[0]>=10
};
vjs.Flash.canPlaySource=function(a){var b;
if(!a.type){return""
}b=a.type.replace(/;.*/,"").toLowerCase();
if(b in vjs.Flash.formats||b in vjs.Flash.streamingFormats){return"maybe"
}};
vjs.Flash.formats={"video/flv":"FLV","video/x-flv":"FLV","video/mp4":"MP4","video/m4v":"MP4"};
vjs.Flash.streamingFormats={"rtmp/mp4":"MP4","rtmp/flv":"FLV"};
vjs.Flash.onReady=function(b){var d=vjs.el(b);
var c=d.player||d.parentNode.player,a=c.tech;
d.player=c;
a.el_=d;
vjs.Flash.checkReady(a)
};
vjs.Flash.checkReady=function(a){if(a.el().vjs_getProperty){a.triggerReady()
}else{setTimeout(function(){vjs.Flash.checkReady(a)
},50)
}};
vjs.Flash.onEvent=function(b,a){var c=vjs.el(b)["player"];
c.trigger(a)
};
vjs.Flash.onError=function(a,c){var b=vjs.el(a)["player"];
b.trigger("error");
vjs.log("Flash Error",c,a)
};
vjs.Flash.version=function(){var a="0,0,0";
try{a=new window.ActiveXObject("ShockwaveFlash.ShockwaveFlash").GetVariable("$version").replace(/\D+/g,",").match(/^,?(.+),?$/)[1]
}catch(c){try{if(navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin){a=(navigator.plugins["Shockwave Flash 2.0"]||navigator.plugins["Shockwave Flash"]).description.replace(/\D+/g,",").match(/^,?(.+),?$/)[1]
}}catch(b){}}return a.split(",")
};
vjs.Flash.embed=function(b,j,g,c,e){var a=vjs.Flash.getEmbedCode(b,g,c,e),f=vjs.createEl("div",{innerHTML:a}).childNodes[0],h=j.parentNode;
j.parentNode.replaceChild(f,j);
var d=h.childNodes[0];
setTimeout(function(){d.style.display="block"
},1000);
return f
};
vjs.Flash.getEmbedCode=function(e,h,g,b){var c='<object type="application/x-shockwave-flash"',a="",f="",d="";
if(h){vjs.obj.each(h,function(j,k){a+=(j+"="+k+"&amp;")
})
}g=vjs.obj.merge({movie:e,flashvars:a,allowScriptAccess:"always",allowNetworking:"all"},g);
vjs.obj.each(g,function(j,k){f+='<param name="'+j+'" value="'+k+'" />'
});
b=vjs.obj.merge({data:e,width:"100%",height:"100%"},b);
vjs.obj.each(b,function(j,k){d+=(j+'="'+k+'" ')
});
return c+d+">"+f+"</object>"
};
vjs.Flash.streamFromParts=function(a,b){return a+"&"+b
};
vjs.Flash.streamToParts=function(d){var c={connection:"",stream:""};
if(!d){return c
}var b=d.indexOf("&");
var a;
if(b!==-1){a=b+1
}else{b=a=d.lastIndexOf("/")+1;
if(b===0){b=a=d.length
}}c.connection=d.substring(0,b);
c.stream=d.substring(a,d.length);
return c
};
vjs.Flash.isStreamingType=function(a){return a in vjs.Flash.streamingFormats
};
vjs.Flash.RTMP_RE=/^rtmp[set]?:\/\//i;
vjs.Flash.isStreamingSrc=function(a){return vjs.Flash.RTMP_RE.test(a)
};
vjs.MediaLoader=vjs.Component.extend({init:function(e,c,f){vjs.Component.call(this,e,c,f);
if(!e.options_.sources||e.options_.sources.length===0){for(var d=0,b=e.options_.techOrder;
d<b.length;
d++){var g=vjs.capitalize(b[d]),a=window.videojs[g];
if(a&&a.isSupported()){e.loadTech(g);
break
}}}else{e.src(e.options_.sources)
}}});
vjs.Player.prototype.textTracks_;
vjs.Player.prototype.textTracks=function(){this.textTracks_=this.textTracks_||[];
return this.textTracks_
};
vjs.Player.prototype.addTextTrack=function(f,e,g,d){var c=this.textTracks_=this.textTracks_||[];
d=d||{};
d.kind=f;
d.label=e;
d.language=g;
var b=vjs.capitalize(f||"subtitles");
var a=new window.videojs[b+"Track"](this,d);
c.push(a);
return a
};
vjs.Player.prototype.addTextTracks=function(b){var c;
for(var a=0;
a<b.length;
a++){c=b[a];
this.addTextTrack(c.kind,c.label,c.language,c)
}return this
};
vjs.Player.prototype.showTextTrack=function(h,f){var c=this.textTracks_,d=0,b=c.length,a,g,e;
for(;
d<b;
d++){a=c[d];
if(a.id()===h){a.show();
g=a
}else{if(f&&a.kind()==f&&a.mode()>0){a.disable()
}}}e=(g)?g.kind():((f)?f:false);
if(e){this.trigger(e+"trackchange")
}return this
};
vjs.TextTrack=vjs.Component.extend({init:function(b,a){vjs.Component.call(this,b,a);
this.id_=a.id||("vjs_"+a.kind+"_"+a.language+"_"+vjs.guid++);
this.src_=a.src;
this.dflt_=a["default"]||a.dflt;
this.title_=a.title;
this.language_=a.srclang;
this.label_=a.label;
this.cues_=[];
this.activeCues_=[];
this.readyState_=0;
this.mode_=0;
this.player_.on("fullscreenchange",vjs.bind(this,this.adjustFontSize))
}});
vjs.TextTrack.prototype.kind_;
vjs.TextTrack.prototype.kind=function(){return this.kind_
};
vjs.TextTrack.prototype.src_;
vjs.TextTrack.prototype.src=function(){return this.src_
};
vjs.TextTrack.prototype.dflt_;
vjs.TextTrack.prototype.dflt=function(){return this.dflt_
};
vjs.TextTrack.prototype.title_;
vjs.TextTrack.prototype.title=function(){return this.title_
};
vjs.TextTrack.prototype.language_;
vjs.TextTrack.prototype.language=function(){return this.language_
};
vjs.TextTrack.prototype.label_;
vjs.TextTrack.prototype.label=function(){return this.label_
};
vjs.TextTrack.prototype.cues_;
vjs.TextTrack.prototype.cues=function(){return this.cues_
};
vjs.TextTrack.prototype.activeCues_;
vjs.TextTrack.prototype.activeCues=function(){return this.activeCues_
};
vjs.TextTrack.prototype.readyState_;
vjs.TextTrack.prototype.readyState=function(){return this.readyState_
};
vjs.TextTrack.prototype.mode_;
vjs.TextTrack.prototype.mode=function(){return this.mode_
};
vjs.TextTrack.prototype.adjustFontSize=function(){if(this.player_.isFullScreen()){this.el_.style.fontSize=screen.width/this.player_.width()*1.4*100+"%"
}else{this.el_.style.fontSize=""
}};
vjs.TextTrack.prototype.createEl=function(){return vjs.Component.prototype.createEl.call(this,"div",{className:"vjs-"+this.kind_+" vjs-text-track"})
};
vjs.TextTrack.prototype.show=function(){this.activate();
this.mode_=2;
vjs.Component.prototype.show.call(this)
};
vjs.TextTrack.prototype.hide=function(){this.activate();
this.mode_=1;
vjs.Component.prototype.hide.call(this)
};
vjs.TextTrack.prototype.disable=function(){if(this.mode_==2){this.hide()
}this.deactivate();
this.mode_=0
};
vjs.TextTrack.prototype.activate=function(){if(this.readyState_===0){this.load()
}if(this.mode_===0){this.player_.on("timeupdate",vjs.bind(this,this.update,this.id_));
this.player_.on("ended",vjs.bind(this,this.reset,this.id_));
if(this.kind_==="captions"||this.kind_==="subtitles"){this.player_.getChild("textTrackDisplay").addChild(this)
}}};
vjs.TextTrack.prototype.deactivate=function(){this.player_.off("timeupdate",vjs.bind(this,this.update,this.id_));
this.player_.off("ended",vjs.bind(this,this.reset,this.id_));
this.reset();
this.player_.getChild("textTrackDisplay").removeChild(this)
};
vjs.TextTrack.prototype.load=function(){if(this.readyState_===0){this.readyState_=1;
vjs.get(this.src_,vjs.bind(this,this.parseCues),vjs.bind(this,this.onError))
}};
vjs.TextTrack.prototype.onError=function(a){this.error=a;
this.readyState_=3;
this.trigger("error")
};
vjs.TextTrack.prototype.parseCues=function(b){var f,c,g,h=b.split("\n"),k="",a;
for(var e=1,d=h.length;
e<d;
e++){k=vjs.trim(h[e]);
if(k){if(k.indexOf("-->")==-1){a=k;
k=vjs.trim(h[++e])
}else{a=this.cues_.length
}f={id:a,index:this.cues_.length};
c=k.split(" --> ");
f.startTime=this.parseCueTime(c[0]);
f.endTime=this.parseCueTime(c[1]);
g=[];
while(h[++e]&&(k=vjs.trim(h[e]))){g.push(k)
}f.text=g.join("<br/>");
this.cues_.push(f)
}}this.readyState_=2;
this.trigger("loaded")
};
vjs.TextTrack.prototype.parseCueTime=function(b){var g=b.split(":"),f=0,c,e,a,h,d;
if(g.length==3){c=g[0];
e=g[1];
a=g[2]
}else{c=0;
e=g[0];
a=g[1]
}a=a.split(/\s+/);
h=a.splice(0,1)[0];
h=h.split(/\.|,/);
d=parseFloat(h[1]);
h=h[0];
f+=parseFloat(c)*3600;
f+=parseFloat(e)*60;
f+=parseFloat(h);
if(d){f+=d/1000
}return f
};
vjs.TextTrack.prototype.update=function(){if(this.cues_.length>0){var b=this.player_.currentTime();
if(this.prevChange===undefined||b<this.prevChange||this.nextChange<=b){var f=this.cues_,k=this.player_.duration(),j=0,g=false,a=[],h,e,d,c;
if(b>=this.nextChange||this.nextChange===undefined){c=(this.firstActiveIndex!==undefined)?this.firstActiveIndex:0
}else{g=true;
c=(this.lastActiveIndex!==undefined)?this.lastActiveIndex:f.length-1
}while(true){d=f[c];
if(d.endTime<=b){j=Math.max(j,d.endTime);
if(d.active){d.active=false
}}else{if(b<d.startTime){k=Math.min(k,d.startTime);
if(d.active){d.active=false
}if(!g){break
}}else{if(g){a.splice(0,0,d);
if(e===undefined){e=c
}h=c
}else{a.push(d);
if(h===undefined){h=c
}e=c
}k=Math.min(k,d.endTime);
j=Math.max(j,d.startTime);
d.active=true
}}if(g){if(c===0){break
}else{c--
}}else{if(c===f.length-1){break
}else{c++
}}}this.activeCues_=a;
this.nextChange=k;
this.prevChange=j;
this.firstActiveIndex=h;
this.lastActiveIndex=e;
this.updateDisplay();
this.trigger("cuechange")
}}};
vjs.TextTrack.prototype.updateDisplay=function(){var b=this.activeCues_,d="",c=0,a=b.length;
for(;
c<a;
c++){d+='<span class="vjs-tt-cue">'+b[c].text+"</span>"
}this.el_.innerHTML=d
};
vjs.TextTrack.prototype.reset=function(){this.nextChange=0;
this.prevChange=this.player_.duration();
this.firstActiveIndex=0;
this.lastActiveIndex=0
};
vjs.CaptionsTrack=vjs.TextTrack.extend();
vjs.CaptionsTrack.prototype.kind_="captions";
vjs.SubtitlesTrack=vjs.TextTrack.extend();
vjs.SubtitlesTrack.prototype.kind_="subtitles";
vjs.ChaptersTrack=vjs.TextTrack.extend();
vjs.ChaptersTrack.prototype.kind_="chapters";
vjs.TextTrackDisplay=vjs.Component.extend({init:function(b,a,c){vjs.Component.call(this,b,a,c);
if(b.options_.tracks&&b.options_.tracks.length>0){this.player_.addTextTracks(b.options_.tracks)
}}});
vjs.TextTrackDisplay.prototype.createEl=function(){return vjs.Component.prototype.createEl.call(this,"div",{className:"vjs-text-track-display"})
};
vjs.TextTrackMenuItem=vjs.MenuItem.extend({init:function(c,b){var a=this.track=b.track;
b.label=a.label();
b.selected=a.dflt();
vjs.MenuItem.call(this,c,b);
this.player_.on(a.kind()+"trackchange",vjs.bind(this,this.update))
}});
vjs.TextTrackMenuItem.prototype.onClick=function(){vjs.MenuItem.prototype.onClick.call(this);
this.player_.showTextTrack(this.track.id_,this.track.kind())
};
vjs.TextTrackMenuItem.prototype.update=function(){this.selected(this.track.mode()==2)
};
vjs.OffTextTrackMenuItem=vjs.TextTrackMenuItem.extend({init:function(b,a){a.track={kind:function(){return a.kind
},player:b,label:function(){return a.kind+" off"
},dflt:function(){return false
},mode:function(){return false
}};
vjs.TextTrackMenuItem.call(this,b,a);
this.selected(true)
}});
vjs.OffTextTrackMenuItem.prototype.onClick=function(){vjs.TextTrackMenuItem.prototype.onClick.call(this);
this.player_.showTextTrack(this.track.id_,this.track.kind())
};
vjs.OffTextTrackMenuItem.prototype.update=function(){var c=this.player_.textTracks(),d=0,b=c.length,a,e=true;
for(;
d<b;
d++){a=c[d];
if(a.kind()==this.track.kind()&&a.mode()==2){e=false
}}this.selected(e)
};
vjs.TextTrackButton=vjs.MenuButton.extend({init:function(b,a){vjs.MenuButton.call(this,b,a);
if(this.items.length<=1){this.hide()
}}});
vjs.TextTrackButton.prototype.createItems=function(){var b=[],a;
b.push(new vjs.OffTextTrackMenuItem(this.player_,{kind:this.kind_}));
for(var c=0;
c<this.player_.textTracks().length;
c++){a=this.player_.textTracks()[c];
if(a.kind()===this.kind_){b.push(new vjs.TextTrackMenuItem(this.player_,{track:a}))
}}return b
};
vjs.CaptionsButton=vjs.TextTrackButton.extend({init:function(b,a,c){vjs.TextTrackButton.call(this,b,a,c);
this.el_.setAttribute("aria-label","Captions Menu")
}});
vjs.CaptionsButton.prototype.kind_="captions";
vjs.CaptionsButton.prototype.buttonText="Captions";
vjs.CaptionsButton.prototype.className="vjs-captions-button";
vjs.SubtitlesButton=vjs.TextTrackButton.extend({init:function(b,a,c){vjs.TextTrackButton.call(this,b,a,c);
this.el_.setAttribute("aria-label","Subtitles Menu")
}});
vjs.SubtitlesButton.prototype.kind_="subtitles";
vjs.SubtitlesButton.prototype.buttonText="Subtitles";
vjs.SubtitlesButton.prototype.className="vjs-subtitles-button";
vjs.ChaptersButton=vjs.TextTrackButton.extend({init:function(b,a,c){vjs.TextTrackButton.call(this,b,a,c);
this.el_.setAttribute("aria-label","Chapters Menu")
}});
vjs.ChaptersButton.prototype.kind_="chapters";
vjs.ChaptersButton.prototype.buttonText="Chapters";
vjs.ChaptersButton.prototype.className="vjs-chapters-button";
vjs.ChaptersButton.prototype.createItems=function(){var b=[],a;
for(var c=0;
c<this.player_.textTracks().length;
c++){a=this.player_.textTracks()[c];
if(a.kind()===this.kind_){b.push(new vjs.TextTrackMenuItem(this.player_,{track:a}))
}}return b
};
vjs.ChaptersButton.prototype.createMenu=function(){var h=this.player_.textTracks(),e=0,c=h.length,b,l,k=this.items=[];
for(;
e<c;
e++){b=h[e];
if(b.kind()==this.kind_&&b.dflt()){if(b.readyState()<2){this.chaptersTrack=b;
b.on("loaded",vjs.bind(this,this.createMenu));
return
}else{l=b;
break
}}}var a=this.menu=new vjs.Menu(this.player_);
a.el_.appendChild(vjs.createEl("li",{className:"vjs-menu-title",innerHTML:vjs.capitalize(this.kind_),tabindex:-1}));
if(l){var f=l.cues_,d,g;
e=0;
c=f.length;
for(;
e<c;
e++){d=f[e];
g=new vjs.ChaptersTrackMenuItem(this.player_,{track:l,cue:d});
k.push(g);
a.addChild(g)
}}if(this.items.length>0){this.show()
}return a
};
vjs.ChaptersTrackMenuItem=vjs.MenuItem.extend({init:function(d,c){var b=this.track=c.track,a=this.cue=c.cue,e=d.currentTime();
c.label=a.text;
c.selected=(a.startTime<=e&&e<a.endTime);
vjs.MenuItem.call(this,d,c);
b.on("cuechange",vjs.bind(this,this.update))
}});
vjs.ChaptersTrackMenuItem.prototype.onClick=function(){vjs.MenuItem.prototype.onClick.call(this);
this.player_.currentTime(this.cue.startTime);
this.update(this.cue.startTime)
};
vjs.ChaptersTrackMenuItem.prototype.update=function(){var a=this.cue,b=this.player_.currentTime();
this.selected(a.startTime<=b&&b<a.endTime)
};
vjs.obj.merge(vjs.ControlBar.prototype.options_.children,{subtitlesButton:{},captionsButton:{},chaptersButton:{}});
vjs.JSON;
if(typeof window.JSON!=="undefined"&&window.JSON.parse==="function"){vjs.JSON=window.JSON
}else{vjs.JSON={};
var cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
vjs.JSON.parse=function(text,reviver){var j;
function walk(holder,key){var k,v,value=holder[key];
if(value&&typeof value==="object"){for(k in value){if(Object.prototype.hasOwnProperty.call(value,k)){v=walk(value,k);
if(v!==undefined){value[k]=v
}else{delete value[k]
}}}}return reviver.call(holder,key,value)
}text=String(text);
cx.lastIndex=0;
if(cx.test(text)){text=text.replace(cx,function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)
})
}if(/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,""))){j=eval("("+text+")");
return typeof reviver==="function"?walk({"":j},""):j
}throw new SyntaxError("JSON.parse(): invalid or malformed JSON data")
}
}vjs.autoSetup=function(){var d,a,f,c=document.getElementsByTagName("video");
if(c&&c.length>0){for(var e=0,b=c.length;
e<b;
e++){a=c[e];
if(a&&a.getAttribute){if(a.player===undefined){d=a.getAttribute("data-setup");
if(d!==null){d=vjs.JSON.parse(d||"{}");
f=videojs(a,d)
}}}else{vjs.autoSetupTimeout(1);
break
}}}else{if(!vjs.windowLoaded){vjs.autoSetupTimeout(1)
}}};
vjs.autoSetupTimeout=function(a){setTimeout(vjs.autoSetup,a)
};
if(document.readyState==="complete"){vjs.windowLoaded=true
}else{vjs.one(window,"load",function(){vjs.windowLoaded=true
})
}vjs.autoSetupTimeout(1);
vjs.plugin=function(a,b){vjs.Player.prototype[a]=b
};
(function(){function c(f,g,e){if(!f.addEventListener){f.attachEvent(g,e)
}else{f.addEventListener(g,e,true)
}}videojs.Youtube=videojs.MediaTechController.extend({init:function(j,g,k){this.player_=j;
this["featuresProgressEvents"]=false;
this["featuresTimeupdateEvents"]=false;
this["featuresPlaybackRate"]=true;
videojs.MediaTechController.call(this,j,g,k);
this.isIos=/(iPad|iPhone|iPod)/g.test(navigator.userAgent);
this.isAndroid=/(Android)/g.test(navigator.userAgent);
this.playVideoIsAllowed=!(this.isIos||this.isAndroid);
if(this.isIos||this.isAndroid){this.player_.options()["autoplay"]=false
}if(typeof g.source!=="undefined"){for(var h in g.source){if(g.source.hasOwnProperty(h)){j.options()[h]=g.source[h]
}}}this.userQuality=videojs.Youtube.convertQualityName(j.options()["quality"]);
this.playerEl_=j.el();
this.playerEl_.className+=" vjs-youtube";
this.qualityButton=document.createElement("div");
this.qualityButton.setAttribute("class","vjs-quality-button vjs-menu-button vjs-control");
this.qualityButton.setAttribute("tabindex",0);
var l=document.createElement("div");
l.setAttribute("class","vjs-control-content");
this.qualityButton.appendChild(l);
this.qualityTitle=document.createElement("span");
this.qualityTitle.setAttribute("class","vjs-control-text");
l.appendChild(this.qualityTitle);
if(j.options()["quality"]!=="undefined"){d(this.qualityTitle,j.options()["quality"]||"auto")
}var f=document.createElement("div");
f.setAttribute("class","vjs-menu");
l.appendChild(f);
this.qualityMenuContent=document.createElement("ul");
this.qualityMenuContent.setAttribute("class","vjs-menu-content");
f.appendChild(this.qualityMenuContent);
this.id_=this.player_.id()+"_youtube_api";
this.el_=videojs.Component.prototype.createEl("iframe",{id:this.id_,className:"vjs-tech",scrolling:"no",marginWidth:0,marginHeight:0,frameBorder:0});
this.el_.setAttribute("allowFullScreen","");
this.playerEl_.insertBefore(this.el_,this.playerEl_.firstChild);
if(/MSIE (\d+\.\d+);/.test(navigator.userAgent)){var m=Number(RegExp.$1);
this.addIframeBlocker(m)
}else{if(!/(iPad|iPhone|iPod|Android)/g.test(navigator.userAgent)){this.el_.className+=" onDesktop";
this.addIframeBlocker()
}}this.parseSrc(j.options()["src"]);
this.playOnReady=this.player_.options()["autoplay"]&&this.playVideoIsAllowed;
this.forceHTML5=!!(typeof this.player_.options()["forceHTML5"]==="undefined"||this.player_.options()["forceHTML5"]===true);
this.updateIframeSrc();
var e=this;
j.ready(function(){if(e.player_.options()["controls"]){var n=e.playerEl_.querySelectorAll(".vjs-control-bar")[0];
if(n){n.appendChild(e.qualityButton)
}}if(e.playOnReady&&!e.player_.options()["ytcontrols"]){if(typeof e.player_.loadingSpinner!=="undefined"){e.player_.loadingSpinner.show()
}if(typeof e.player_.bigPlayButton!=="undefined"){e.player_.bigPlayButton.hide()
}}j.trigger("loadstart")
});
this.on("dispose",function(){if(this.ytplayer){this.ytplayer.destroy()
}if(!this.player_.options()["ytcontrols"]){this.player_.off("waiting",this.bindedWaiting)
}this.playerEl_.querySelectorAll(".vjs-poster")[0].style.backgroundImage="none";
if(this.el_.parentNode){this.el_.parentNode.removeChild(this.el_)
}if(this.qualityButton.parentNode){this.qualityButton.parentNode.removeChild(this.qualityButton)
}if(typeof this.player_.loadingSpinner!=="undefined"){this.player_.loadingSpinner.hide()
}if(typeof this.player_.bigPlayButton!=="undefined"){this.player_.bigPlayButton.hide()
}if(this.iframeblocker){this.playerEl_.removeChild(this.iframeblocker)
}})
}});
videojs.Youtube.prototype.updateIframeSrc=function(){var j={enablejsapi:1,iv_load_policy:3,playerapiid:this.id(),disablekb:1,wmode:"transparent",controls:(this.player_.options()["ytcontrols"])?1:0,html5:(this.player_.options()["forceHTML5"])?1:null,playsinline:(this.player_.options()["playsInline"])?1:0,showinfo:0,rel:0,autoplay:(this.playOnReady)?1:0,loop:(this.player_.options()["loop"])?1:0,list:this.playlistId,vq:this.userQuality,origin:window.location.protocol+"//"+window.location.host};
var f=window.location.protocol==="file:"||window.location.protocol==="app:";
if(f){delete j.origin
}for(var k in j){if(j.hasOwnProperty(k)&&(typeof j[k]==="undefined"||j[k]===null)){delete j[k]
}}var g=this;
if(!this.videoId&&!this.playlistId){this.el_.src="about:blank";
setTimeout(function(){g.triggerReady()
},500)
}else{this.el_.src="https://www.youtube.com/embed/"+(this.videoId||"videoseries")+"?"+videojs.Youtube.makeQueryString(j);
if(this.player_.options()["ytcontrols"]){this.player_.controls(false)
}else{if(this.videoId&&(typeof this.player_.poster()==="undefined"||this.player_.poster().length===0)){setTimeout(function(){g.player_.poster("https://img.youtube.com/vi/"+g.videoId+"/0.jpg")
},100)
}}this.bindedWaiting=function(){g.onWaiting()
};
this.player_.on("waiting",this.bindedWaiting);
if(videojs.Youtube.apiReady){this.loadYoutube()
}else{videojs.Youtube.loadingQueue.push(this);
if(!videojs.Youtube.apiLoading){var e=document.createElement("script");
e.onerror=function(l){g.onError(l)
};
e.src="https://www.youtube.com/iframe_api";
var h=document.getElementsByTagName("script")[0];
h.parentNode.insertBefore(e,h);
videojs.Youtube.apiLoading=true
}}}};
videojs.Youtube.prototype.onWaiting=function(){if(typeof this.player_.bigPlayButton!=="undefined"){this.player_.bigPlayButton.hide()
}};
videojs.Youtube.prototype.addIframeBlocker=function(f){this.iframeblocker=videojs.Component.prototype.createEl("div");
this.iframeblocker.className="iframeblocker";
this.iframeblocker.style.position="absolute";
this.iframeblocker.style.left=0;
this.iframeblocker.style.right=0;
this.iframeblocker.style.top=0;
this.iframeblocker.style.bottom=0;
if(f&&f<9){this.iframeblocker.style.opacity=0.01
}else{this.iframeblocker.style.background="rgba(255, 255, 255, 0.01)"
}var e=this;
c(this.iframeblocker,"mousemove",function(g){if(!e.player_.userActive()){e.player_.userActive(true)
}g.stopPropagation();
g.preventDefault()
});
c(this.iframeblocker,"click",function(){if(e.paused()){e.play()
}else{e.pause()
}});
this.playerEl_.insertBefore(this.iframeblocker,this.el_.nextSibling)
};
videojs.Youtube.prototype.parseSrc=function(j){this.srcVal=j;
if(j){var f=/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
var e=j.match(f);
if(e&&e[2].length===11){this.videoId=e[2]
}else{this.videoId=null
}var h=/[?&]list=([^#\&\?]+)/;
e=j.match(h);
if(e!==null&&e.length>1){this.playlistId=e[1]
}else{if(this.playlistId){delete this.playlistId
}}var g=/[?&]vq=([^#\&\?]+)/;
e=j.match(g);
if(e!==null&&e.length>1){this.userQuality=e[1];
videojs.Youtube.appendQualityLabel(this.qualityTitle,this.userQuality)
}}};
videojs.Youtube.prototype.src=function(e){if(typeof e!=="undefined"){this.parseSrc(e);
if(this.el_.src==="about:blank"){this.updateIframeSrc();
return
}delete this.defaultQuality;
if(this.videoId!==null){if(this.player_.options()["autoplay"]&&this.playVideoIsAllowed){this.ytplayer.loadVideoById({videoId:this.videoId,suggestedQuality:this.userQuality})
}else{this.ytplayer.cueVideoById({videoId:this.videoId,suggestedQuality:this.userQuality})
}this.playerEl_.querySelectorAll(".vjs-poster")[0].style.backgroundImage="url(https://img.youtube.com/vi/"+this.videoId+"/0.jpg)";
this.player_.poster("https://img.youtube.com/vi/"+this.videoId+"/0.jpg")
}}return this.srcVal
};
videojs.Youtube.prototype.load=function(){};
videojs.Youtube.prototype.play=function(){if(this.videoId!==null){if(!this.player_.options()["ytcontrols"]){this.player_.trigger("waiting")
}if(this.isReady_){this.ytplayer.setVolume(this.player_.volume()*100);
if(this.volumeVal>0){this.ytplayer.unMute()
}else{this.ytplayer.mute()
}if(this.playVideoIsAllowed){this.ytplayer.playVideo()
}}else{this.playOnReady=true
}}};
videojs.Youtube.prototype.pause=function(){if(this.ytplayer){this.ytplayer.pauseVideo()
}};
videojs.Youtube.prototype.paused=function(){return(this.ytplayer)?(this.lastState!==YT.PlayerState.PLAYING&&this.lastState!==YT.PlayerState.BUFFERING):true
};
videojs.Youtube.prototype.currentTime=function(){return(this.ytplayer&&this.ytplayer.getCurrentTime)?this.ytplayer.getCurrentTime():0
};
videojs.Youtube.prototype.setCurrentTime=function(e){this.ytplayer.seekTo(e,true);
this.player_.trigger("timeupdate");
this.player_.trigger("seeking");
this.isSeeking=true
};
videojs.Youtube.prototype.playbackRate=function(){return(this.ytplayer&&this.ytplayer.getPlaybackRate)?this.ytplayer.getPlaybackRate():1
};
videojs.Youtube.prototype.setPlaybackRate=function(f){if(this.ytplayer&&this.ytplayer.setPlaybackRate){this.ytplayer.setPlaybackRate(f);
var e=this;
setTimeout(function(){e.player_.trigger("ratechange")
},100)
}};
videojs.Youtube.prototype.duration=function(){return(this.ytplayer&&this.ytplayer.getDuration)?this.ytplayer.getDuration():0
};
videojs.Youtube.prototype.currentSrc=function(){return this.srcVal
};
videojs.Youtube.prototype.ended=function(){return(this.ytplayer)?(this.lastState===YT.PlayerState.ENDED):false
};
videojs.Youtube.prototype.volume=function(){if(this.ytplayer&&isNaN(this.volumeVal)){this.volumeVal=this.ytplayer.getVolume()/100;
this.volumeVal=(isNaN(this.volumeVal))?1:this.volumeVal;
this.player_.volume(this.volumeVal)
}return this.volumeVal
};
videojs.Youtube.prototype.setVolume=function(e){if(typeof(e)!=="undefined"&&e!==this.volumeVal){this.ytplayer.setVolume(e*100);
this.volumeVal=e;
this.player_.trigger("volumechange")
}};
videojs.Youtube.prototype.muted=function(){return this.mutedVal
};
videojs.Youtube.prototype.setMuted=function(e){if(e){this.storedVolume=this.volumeVal;
this.ytplayer.mute();
this.player_.volume(0)
}else{this.ytplayer.unMute();
this.player_.volume(this.storedVolume)
}this.mutedVal=e;
this.player_.trigger("volumechange")
};
videojs.Youtube.prototype.buffered=function(){if(this.ytplayer&&this.ytplayer.getVideoBytesLoaded){var e=this.ytplayer.getVideoBytesLoaded();
var h=this.ytplayer.getVideoBytesTotal();
if(!e||!h){return 0
}var j=this.ytplayer.getDuration();
var g=(e/h)*j;
var f=(this.ytplayer.getVideoStartBytes()/h)*j;
return videojs.createTimeRange(f,f+g)
}else{return videojs.createTimeRange(0,0)
}};
videojs.Youtube.prototype.supportsFullScreen=function(){if(typeof this.el_.webkitEnterFullScreen==="function"){if(/Android/.test(videojs.USER_AGENT)||!/Chrome|Mac OS X 10.5/.test(videojs.USER_AGENT)){return true
}}return false
};
videojs.Youtube.isSupported=function(){return true
};
videojs.Youtube.canPlaySource=function(e){return(e.type==="video/youtube")
};
videojs.Youtube.canControlVolume=function(){return true
};
videojs.Youtube.loadingQueue=[];
videojs.Youtube.prototype.loadYoutube=function(){var e=this;
this.ytplayer=new YT.Player(this.id_,{events:{onReady:function(f){f.target.vjsTech.onReady();
e.player_.trigger("ratechange")
},onStateChange:function(f){f.target.vjsTech.onStateChange(f.data)
},onPlaybackQualityChange:function(f){f.target.vjsTech.onPlaybackQualityChange(f.data)
},onError:function(f){f.target.vjsTech.onError(f.data)
}}});
this.ytplayer.vjsTech=this
};
videojs.Youtube.makeQueryString=function(e){var g=["modestbranding=1"];
for(var f in e){if(e.hasOwnProperty(f)){g.push(f+"="+e[f])
}}return g.join("&")
};
window.onYouTubeIframeAPIReady=function(){var e;
while((e=videojs.Youtube.loadingQueue.shift())){e.loadYoutube()
}videojs.Youtube.loadingQueue=[];
videojs.Youtube.apiReady=true
};
videojs.Youtube.prototype.onReady=function(){this.isReady_=true;
this.triggerReady();
this.player_.trigger("loadedmetadata");
this.player_.trigger("durationchange");
this.player_.trigger("timeupdate");
if(typeof this.player_.loadingSpinner!=="undefined"&&!this.isIos&&!this.isAndroid){this.player_.loadingSpinner.hide()
}if(this.player_.options()["muted"]){this.setMuted(true)
}if(!this.videoId&&this.playlistId){this.videoId=this.ytplayer.getPlaylist()[0];
this.player_.poster("https://img.youtube.com/vi/"+this.videoId+"/0.jpg")
}if(this.playOnReady){this.playOnReady=false;
this.play()
}};
videojs.Youtube.prototype.updateQualities=function(){function f(k){c(k,"click",function(){var m=this.getAttribute("data-val");
e.ytplayer.setPlaybackQuality(m);
e.userQuality=m;
videojs.Youtube.appendQualityLabel(e.qualityTitle,m);
var l=e.qualityMenuContent.querySelector(".vjs-selected");
if(l){videojs.Youtube.removeClass(l,"vjs-selected")
}videojs.Youtube.addClass(this,"vjs-selected")
})
}var j=this.ytplayer.getAvailableQualityLevels();
var e=this;
if(j.indexOf(this.userQuality)<0){videojs.Youtube.appendQualityLabel(e.qualityTitle,this.defaultQuality)
}if(j.length===0){this.qualityButton.style.display="none"
}else{this.qualityButton.style.display="";
while(this.qualityMenuContent.hasChildNodes()){this.qualityMenuContent.removeChild(this.qualityMenuContent.lastChild)
}for(var g=0;
g<j.length;
++g){var h=document.createElement("li");
h.setAttribute("class","vjs-menu-item");
h.setAttribute("data-val",j[g]);
videojs.Youtube.appendQualityLabel(h,j[g]);
if(j[g]===this.quality){videojs.Youtube.addClass(h,"vjs-selected")
}f(h);
this.qualityMenuContent.appendChild(h)
}}};
videojs.Youtube.prototype.onStateChange=function(e){if(e!==this.lastState){switch(e){case -1:this.player_.trigger("durationchange");
break;
case YT.PlayerState.ENDED:var f=true;
if(this.playlistId&&!this.player_.options()["loop"]){f=this.ytplayer.getPlaylistIndex()===0
}if(f){if(!this.player_.options()["ytcontrols"]){this.playerEl_.querySelectorAll(".vjs-poster")[0].style.display="block";
if(typeof this.player_.bigPlayButton!=="undefined"){this.player_.bigPlayButton.show()
}}this.player_.trigger("ended")
}break;
case YT.PlayerState.PLAYING:this.playerEl_.querySelectorAll(".vjs-poster")[0].style.display="none";
this.playVideoIsAllowed=true;
this.updateQualities();
this.player_.trigger("timeupdate");
this.player_.trigger("durationchange");
this.player_.trigger("playing");
this.player_.trigger("play");
if(this.isSeeking){this.player_.trigger("seeked");
this.isSeeking=false
}break;
case YT.PlayerState.PAUSED:this.player_.trigger("pause");
break;
case YT.PlayerState.BUFFERING:this.player_.trigger("timeupdate");
if(!this.player_.options()["ytcontrols"]){this.player_.trigger("waiting")
}break;
case YT.PlayerState.CUED:break
}this.lastState=e
}};
videojs.Youtube.convertQualityName=function(e){switch(e){case"144p":return"tiny";
case"240p":return"small";
case"360p":return"medium";
case"480p":return"large";
case"720p":return"hd720";
case"1080p":return"hd1080";
case"1440p":return"hd1440";
case"2160p":return"hd2160"
}return"auto"
};
videojs.Youtube.parseQualityName=function(e){switch(e){case"tiny":return"144p";
case"small":return"240p";
case"medium":return"360p";
case"large":return"480p";
case"hd720":return"720p";
case"hd1080":return"1080p";
case"hd1440":return"1440p";
case"hd2160":return"2160p"
}return"auto"
};
videojs.Youtube.appendQualityLabel=function(f,g){d(f,videojs.Youtube.parseQualityName(g));
var e=document.createElement("span");
e.setAttribute("class","vjs-hd-label");
switch(g){case"hd720":case"hd1080":case"hd1440":d(e,"HD");
f.appendChild(e);
break;
case"hd2160":d(e,"4K");
f.appendChild(e);
break
}};
videojs.Youtube.prototype.onPlaybackQualityChange=function(e){if(typeof this.defaultQuality==="undefined"){this.defaultQuality=e;
if(typeof this.userQuality!=="undefined"){return
}}this.quality=e;
videojs.Youtube.appendQualityLabel(this.qualityTitle,e);
switch(e){case"medium":this.player_.videoWidth=480;
this.player_.videoHeight=360;
break;
case"large":this.player_.videoWidth=640;
this.player_.videoHeight=480;
break;
case"hd720":this.player_.videoWidth=960;
this.player_.videoHeight=720;
break;
case"hd1080":this.player_.videoWidth=1440;
this.player_.videoHeight=1080;
break;
case"highres":this.player_.videoWidth=1920;
this.player_.videoHeight=1080;
break;
case"small":this.player_.videoWidth=320;
this.player_.videoHeight=240;
break;
case"tiny":this.player_.videoWidth=144;
this.player_.videoHeight=108;
break;
default:this.player_.videoWidth=0;
this.player_.videoHeight=0;
break
}this.player_.trigger("ratechange")
};
videojs.Youtube.prototype.onError=function(e){this.player_.error(e)
};
videojs.Youtube.addClass=function(e,f){if((" "+e.className+" ").indexOf(" "+f+" ")===-1){e.className=e.className===""?f:e.className+" "+f
}};
videojs.Youtube.removeClass=function(g,e){var h,f;
if(g.className.indexOf(e)===-1){return
}h=g.className.split(" ");
for(f=h.length-1;
f>=0;
f--){if(h[f]===e){h.splice(f,1)
}}g.className=h.join(" ")
};
function d(e,g){if(typeof e==="undefined"){return false
}var f=("innerText" in e)?"innerText":"textContent";
try{e[f]=g
}catch(h){e.setAttribute("innerText",g)
}}var a=document.createElement("style");
var b=" .vjs-youtube .vjs-poster { background-size: 100%!important; }.vjs-youtube .vjs-poster, .vjs-youtube .vjs-loading-spinner, .vjs-youtube .vjs-big-play-button, .vjs-youtube .vjs-text-track-display{ pointer-events: none !important; }.vjs-youtube.vjs-user-active .iframeblocker { display: none; }.vjs-youtube.vjs-user-inactive .vjs-tech.onDesktop { pointer-events: none; }.vjs-quality-button > div:first-child > span:first-child { position:relative;top:7px }";
a.setAttribute("type","text/css");
document.getElementsByTagName("head")[0].appendChild(a);
if(a.styleSheet){a.styleSheet.cssText=b
}else{a.appendChild(document.createTextNode(b))
}if(!Array.prototype.indexOf){Array.prototype.indexOf=function(f){var e=this.length>>>0;
var g=Number(arguments[1])||0;
g=(g<0)?Math.ceil(g):Math.floor(g);
if(g<0){g+=e
}for(;
g<e;
g++){if(g in this&&this[g]===f){return g
}}return -1
}
}})();
/*! Author: Scott van Looy */
(function(b){function a(g){var z=(typeof window.ontouchstart==="undefined")?"mouseup":"touchend",B=(typeof window.ontouchstart==="undefined")?"mousedown":"touchstart",x=(typeof window.ontouchstart==="undefined")?"mousemove":"touchmove",F=350,c=g.swipeDistance||50,d={x:0,y:0},t={x:0,y:0},w={},f={},k,r,u,E,o,C,v,q=g.scrollSpeed||500,n=(function(I){if(typeof I.MozTransform==="string"){return{j:"Moz",c:"-moz-"}
}if(typeof I.OTransform==="string"){return{j:"O",c:"-O-"}
}if(typeof I.WebkitTransform==="string"){return{j:"Webkit",c:"-webkit-"}
}if((typeof I.msTransform==="string"||typeof I.MsTransform==="string")&&!/MSIE 9/.test(navigator.appVersion)){return{j:"ms",c:"-ms-"}
}if(typeof I.transform==="string"){return{j:"",c:""}
}return{j:null,c:null}
}(document.body.style)),y=(!g.node.find(".slide").length)?g.node[0]:((g.node.find(".slide").parent().length)?g.node.find(".slide").parent()[0]:g.node.find(".slide")[0]),H=function H(I){clearTimeout(o);
E=((I||{}).x||g.boundsX||(g.node.width()+20))-g.node.parent().width();
C=((I||{}).y||g.boundsY||(g.node.height()+20))-g.node.parent().height();
return y
},m=function m(K,J){var I=(g.horizontal||J)?K.pageX||(((K.touches||[])[0])||{}).pageX:0,L=(g.vertical||J)?K.pageY||(((K.touches||[])[0])||{}).pageY:0;
return{x:I,y:L}
},h=function h(K){var I,J=Math.abs;
I=m(K,true);
if((g.horizontal&&J(w.x-I.x)>15)||(g.vertical&&J(w.y-I.y)>15)){if(J(w.x-I.x)>J(w.y-I.y)){if(g.horizontal){return true
}}else{if(g.vertical){return true
}}}return false
},e=function e(L,M,J){var K,N,I,O;
if(!r&&!J){return
}N={x:t.x-L.x,y:t.y-L.y};
if(J){N=L
}if(N.x>E){N.x=E;
K=true
}if(N.x<0){N.x=0;
K=true
}if(N.y>C){N.y=C;
K=true
}if(N.y<0){N.y=0;
K=true
}I=-(N.x||0);
O=-(N.y||0);
if(!n.j){if(J){b(y).animate({left:I+"px",top:O+"px"},q)
}else{y.style.left=I+"px";
y.style.top=O+"px"
}}else{y.style[n.j+"Transform"]=((n.j==="Webkit")?"translate3d("+I+"px, "+O+"px, 0)":"translate("+I+"px, "+O+"px)")
}d=N
},G=function(J,I){y.style[n.j+"Transition"]=n.c+"transform "+(I||q)+"ms ease-out";
e(J,null,true);
return y
},l=function l(J,K,I){if(new Date().getTime()-J.getTime()<F){if(g.horizontal){if(Math.abs(K.x-I.x)>c){return(K.x>I.x)?1:-1
}}if(g.vertical){if(Math.abs(K.y-I.y)>c){return(K.y>I.y)?1:-1
}}}return false
},A=function A(J){if(v){return
}if(window.navigator.msPointerEnabled&&window.navigator.msMaxTouchPoints&&!J.isPrimary){return
}u=true;
k=new Date();
y.style[n.j+"Transition"]="";
var I=m(J);
if(!d){t=I
}else{t={x:d.x+I.x,y:d.y+I.y}
}w=m(J,true)
},s=function s(J){if(v){return
}if(window.navigator.msPointerEnabled&&window.navigator.msMaxTouchPoints&&!J.isPrimary){return
}var I=b(J.target).parents("."+g.scrollable).length;
if(u){r=true;
if((g.lockscroll||h(J))&&!I){J.stopPropagation();
J.preventDefault()
}if(!g.scrollable||(g.scrollable&&!I)){e(m(J),J)
}}f=m(J,true)
},p=function p(I){if(v){return
}if(window.navigator.msPointerEnabled&&window.navigator.msMaxTouchPoints&&!I.isPrimary){return
}if(g.callback&&u){g.callback(b(I.target),d,r,(r)?l(k,w,f):false)
}u=false;
r=false
};
if(window.navigator.msPointerEnabled&&window.navigator.msMaxTouchPoints){z="MSPointerUp";
B="MSPointerDown";
x="MSPointerMove"
}H();
var D;
function j(){D=setTimeout(function(){clearTimeout(o);
g.horizontal=!g.horizontal;
g.vertical=!g.vertical;
o=setTimeout(H,1000)
},200)
}if(g.orientationchange){if(window.addEventListener){window.addEventListener("orientationchange",j,true)
}else{b("window").on("orientationchange resize",j)
}}if(y.addEventListener){y.addEventListener(B,A,true);
y.addEventListener(x,s,true);
y.addEventListener(z,p,true);
g.node[0].addEventListener("mouseleave",p,true)
}else{b(y).bind(B,A);
b(y).bind(x,s);
b(y).bind(z,p)
}return{position:function(){return d
},scrollto:G,setBounds:H,switchDirection:function(){g.vertical=!g.vertical;
g.horizontal=!g.horizontal;
return y
},suspend:function(){v=true
},resume:function(){v=false
}}
}b.fn.akscroller=function(d,c,e){if(typeof d!=="string"){c=d;
this.each(function(){var f=b.extend({},c);
f.node=b(this);
b(this).attr("style","");
this.akscroller=new a(f);
b(this).data("scroller",true)
})
}else{if(d==="scrollto"){this.each(function(){this.akscroller.scrollto(c,e)
})
}if(d==="bounds"){this.each(function(){this.akscroller.setBounds(c)
})
}if(d==="position"){if(this.eq(0)&&this.eq(0)[0]&&this.eq(0)[0].akscroller){return this.eq(0)[0].akscroller.position()
}}if(d==="switchdirection"){this.each(function(){this.akscroller.switchDirection()
})
}if(d==="suspendscroll"){this.each(function(){if(this.akscroller){this.akscroller.suspend()
}})
}if(d==="resumescroll"){this.each(function(){if(this.akscroller){this.akscroller.resume()
}})
}}return this
}
}(window.jQuery||window.Zepto));
/*!Author: Scott van Looy. (C) Copyright AKQA 2012-2014. All Rights Reserved. */
(function(){function b(d){function e(k,r){if(k.switchonorientationchange&&((r&&document.width/document.height<1)||(!r&&document.width/document.height>1))){k.horizontal=!k.horizontal;
k.vertical=!k.vertical
}var t,F=(typeof window.ontouchstart==="undefined")?"mouseup":"touchend",G=(typeof window.ontouchstart==="undefined")?"mousedown":"touchstart",A=k.node.find(".slide"),B=k.singleStep?1:Math.round(k.node.width()/A.width(),10),s,w,E,g,J,f,o=false,y,H,C,v=0,I=function I(L,N){if(L<0||L>A.length-1||o){return
}if(k.autoSwitch){clearTimeout(s);
s=setTimeout(D,k.interruptionDelay||15000)
}function O(T){var S=0,U=Q,R=K.length;
while(R--){if(Math.abs(K[R]-T)<U){U=K[R]-T;
S=K[R];
v=R
}}return S
}var l=t.akscroller("position"),K=[],Q=(k.horizontal)?A.width():A.height(),M=(typeof L!=="undefined")?L*Q:(k.horizontal)?l.x:l.y,P;
for(P=0,C=k.node.find(".slide").length;
P<C;
P++){if(k.variablesizeslides){if(P===0){Q=0;
K.push(0)
}if(L&&L===P){M=Q
}Q+=(k.horizontal)?A.eq(P).width():A.eq(P).height();
K.push(Q)
}else{K.push((Q)*P)
}}t.akscroller("scrollto",(k.horizontal)?{x:O(M),y:0}:{x:0,y:O(M)},N||k.scrollSpeed);
x(v);
m();
return k.domNode
},j=function j(){var K=A.length,L=0;
if(k.horizontal){if(k.variablesizeslides){while(K--){L+=A.eq(K).width()
}return L
}return k.node.find(".slide").width()*k.node.find(".slide").length
}if(k.variablesizeslides){while(K--){if(A.eq(K).width()>L){L=A.eq(K).width()
}}return L
}return A.width()
},h=function j(){var L=A.length,K=0;
if(k.vertical){if(k.variablesizeslides){while(L--){K+=A.eq(L).height()
}return K
}return k.node.find(".slide").height()*k.node.find(".slide").length
}if(k.variablesizeslides){while(L--){if(A.eq(L).height()>K){K=A.eq(L).height()
}}return K
}return A.height()
},x=function x(K){var l=A.eq(K);
if(w){w.find("a").removeClass("active");
w.find("a").eq(K).addClass("active")
}A.removeClass("active");
l.addClass("active");
if(k.hero){E.find(".img").removeClass("active").eq(K).addClass("active");
E.find("article").html(l.find("article").html());
k.node.removeClass("light dark").addClass(l.hasClass("dark")?"dark":"light")
}},q={horizontal:k.horizontal,vertical:k.vertical,lockscroll:k.lockscroll,swipeDistance:k.swipeDistance,scrollable:(k.scrollable)?"scrollable":null,callback:function(O,N,M,K){var L,l;
if(k.clickablelinks&&!M&&!K){if(O.is("a")){l=O
}else{if(O.find("a").length){l=O.find("a").eq(0)
}if(O.parent("a").length){l=O.parent("a")
}}if(l){window.open(l.attr("href"),l.attr("target"))
}}if(O.hasClass("slide")){L=O.index()
}else{L=O.parents(".slide").index()
}if(!K){if(!M&&k.tapnavigation){I(L,(k.scrollSpeed/2))
}else{I()
}}else{v+=K;
if(v<0){v=0
}if(v+B>A.length){v=A.length-B
}I(v,k.swipeSpeed||(k.scrollSpeed/4))
}if(k.callback){k.callback(v,N,M,k.node)
}},scrollSpeed:k.scrollSpeed,interruptionDelay:k.interruptionDelay};
if(window.navigator.msPointerEnabled&&window.navigator.msMaxTouchPoints){F="MSPointerUp";
G="MSPointerDown"
}if(!k.skipbounds){q.boundsX=j();
q.boundsY=h()
}k.node.find("img").mousedown(function(l){l.preventDefault()
});
if(k.scrollNode){t=d(k.node).find(".scroll").akscroller(q)
}else{t=d(k.node).akscroller(q)
}var z;
function n(){clearTimeout(z);
z=setTimeout(function(){if(k.scrolltotop){window.scrollTo(0,1)
}if(k.switchonorientationchange){k.horizontal=!k.horizontal;
k.vertical=!k.vertical
}t.akscroller("bounds",{x:j(),y:h()});
if(k.switchonorientationchange){t.akscroller("switchdirection")
}I(v)
},200)
}if(window.addEventListener){window.addEventListener("orientationchange",n,false);
window.addEventListener("resize",n,false)
}else{d("window").bind("orientationchange resize",n)
}function D(){var l;
clearTimeout(s);
s=setTimeout(function(){l=++v;
if(l===A.length){l=v=0
}I(l);
if(k.callback){k.callback(v,false,false,k.node)
}D()
},k.delay||5000)
}if(k.autoSwitch){D()
}function p(K){K.preventDefault();
K.stopPropagation();
var l=w.find("a").index(d(this));
I(l);
if(k.callback){k.callback(l,false,false,k.node)
}}w=k.node.find(".pager");
E=k.node.find(".hero");
if(w.length){f=function(){d(this).removeAttr("style")
};
w.empty();
w.on("touchend click","a",p);
C=A.length-parseInt(((A.parent().width()/A.width())-1),10);
while(C--){var u=d('<a href="#"></a>');
w.append(u);
if(k.hero&&E.length){g="";
if(A.eq(C).hasClass("light")){g=" light"
}J=d('<img style="opacity:0" />').bind("load",f);
J.attr("src",A.eq(C).data("hero")||A.eq(C).attr("data-hero"));
H=d('<div class="img'+g+'"></div>').append(J);
E.prepend(H)
}}}else{w=null
}function m(){if(k.navarrows){var K=k.node.find(".icon-gallery-left").removeClass("off"),L=k.node.find(".icon-gallery-right").removeClass("off");
if((v===A.length-B)||B>A.length||B===A.length){L.addClass("off")
}if(!v||v===0||B===A.length){K.addClass("off")
}}}if(k.navarrows){y=d('<a class="icon-gallery-left" href="#"></a>');
y.unbind().bind("click",function(l){l.preventDefault();
l.stopPropagation()
}).bind(F,function(){if(v>0){I(v-1);
if(k.callback){k.callback(v,false,false,k.node)
}}});
k.node.append(y);
y=d('<a class="icon-gallery-right" href="#"></a>');
y.unbind().bind("click",function(l){l.preventDefault();
l.stopPropagation()
}).bind(F,function(){if(v<A.length-B){I(v+1);
if(k.callback){k.callback(v,false,false,k.node)
}}});
k.node.append(y);
k.node.bind(G+".navicons",function(){clearTimeout(d(this)[0].tmptimeout);
d(this).addClass("touched")
}).bind(F+".navicons",function(){var l=d(this);
l[0].tmptimeout=setTimeout(function(){l.removeClass("touched")
},3500)
});
k.node.addClass("touched");
k.node[0].tmptimeout=setTimeout(function(){k.node.removeClass("touched")
},3500);
m()
}x(0);
return{moveto:I,forward:function(){I(v+1)
},back:function(){I(v-1)
},currentSlide:function(){return v
},suspend:function(){d(k.node).akscroller("suspendscroll");
o=true
},resume:function(){d(k.node).akscroller("resumescroll");
o=false
}}
}function c(g,f){if(!f){return new e(g)
}if(/ipad/i.test(navigator.appVersion)||window.screenX!==0||!("ontouchstart" in window)||((window.screen.width>1023)&&(/android/i.test(navigator.appVersion)&&!/mobile/i.test(navigator.appVersion)))){return new e(g,true)
}return new e(f,false)
}d.fn.akcarousel=function(j,h,g){if(typeof j!=="string"){if(typeof d.fn.akscroller!=="function"){throw ("Error: $.fn.akscroller is required for this carousel to work correctly.")
}this.each(function(){var l,k;
if(h){k=d.extend({},h);
k.node=d(this)
}l=d.extend({},j);
l.node=d(this);
if(g&&g.node){k=d.extend({},g);
k.node=d(this)
}this.akcarousel=new c(l,k)
})
}else{if(j==="move"){this.each(function(){if(this.akcarousel){if(!isNaN(h)){this.akcarousel.moveto(h);
return
}if(h.indexOf("+")!==-1){this.akcarousel.forward();
return
}if(h.indexOf("-")!==-1){this.akcarousel.back()
}return
}});
return this
}else{if(j==="realign"){var f;
this.each(function(){if(this.akcarousel){this.akcarousel.moveto(this.akcarousel.currentSlide())
}});
return f
}else{if(j==="suspend"){this.each(function(){if(this.akcarousel&&this.akcarousel.suspend){this.akcarousel.suspend()
}})
}else{if(j==="resume"){this.each(function(){if(this.akcarousel&&this.akcarousel.resume){this.akcarousel.resume()
}})
}else{if(window.console&&window.console.warn){window.console.warn(this,"carousel: function "+j+" not recognised")
}}}}}}return this
}
}function a(){if((window.jQuery||window.Zepto)&&((window.jQuery||window.Zepto).fn||{}).akscroller){b(window.jQuery||window.Zepto)
}else{setTimeout(a,100)
}}a()
}());
(function(a){a.extend(a.fn,{modal:function(){var d=(typeof window.ontouchstart==="undefined")?"click":"touchend";
function c(){var f=a(".modal, #modal-overlay"),e="transitionend, oTransitionEnd, otransitionend, webkitTransitionEnd";
a("#modal-overlay").remove();
f.off(e).on(e,function(g){var h=a(this);
if(h.css("opacity")==="0"){h.hide();
if(h.hasClass("modal")){h.removeAttr("style")
}}});
f.removeClass("visible");
a("body").css({position:"",overflow:""})
}function b(f){var e=f.clone(),g={height:0,width:0};
e.css({visibility:"hidden",display:"block"}).insertAfter("footer");
e.attr("style",e.attr("style").replace("block","block !important"));
g=e.offset();
e.remove();
return g
}return this.each(function(){a(this).bind(d,function(j){var h,f=a(a(this).data("modal-id")),g;
if(f.length===0){return
}if(f.css("display")==="block"){return
}h=a("#modal-overlay");
g=b(f);
if(h.length===0){h=a(document.createElement("div"));
h.attr("id","modal-overlay");
h.css({display:"block",height:"100%",left:"0",position:"fixed",top:"0",width:"100%","z-index":"100"});
a("body").css({position:"fixed",overflow:"hidden"});
h.off(d).on(d,function(k){k.preventDefault();
k.stopPropagation();
c()
});
a("body").append(h)
}else{h.css("display","block")
}h.off(d).on(d,function(k){k.preventDefault();
k.stopPropagation();
c()
});
f.off(d,".modal, .closebutton").on(d,".modal, .closebutton, .center",function(k){k.preventDefault();
k.stopPropagation();
if(k.currentTarget.className!=="center"){c()
}});
setTimeout(function(){h.addClass("visible")
},0.4);
f.css({display:"block",left:"0",position:"fixed",top:"0","z-index":"101"});
f.find(".center").css({"margin-left":-(g.width/2)+"px","margin-top":-(g.height/2)+"px"});
setTimeout(function(){f.addClass("visible")
},0.4);
j.preventDefault()
})
})
}})
})(window.jQuery||window.Zepto);
(function(h){var w=(typeof window.ontouchstart==="undefined")?"mouseup":"touchend",x=(typeof window.ontouchstart==="undefined")?"mousedown":"touchstart",v=(typeof window.ontouchstart==="undefined")?"mousemove":"touchmove",q=window.Zepto?"ease-in-out 1ms":undefined,j,s,p=false,e,c,f,d,b,a,m=(function(y){if(typeof y.transform==="string"){return{j:"",c:""}
}if(typeof y.WebkitTransform==="string"){return{j:"Webkit",c:"-webkit-"}
}if(typeof y.MozTransform==="string"){return{j:"Moz",c:"-moz-"}
}if(typeof y.OTransform==="string"){return{j:"O",c:"-O-"}
}if((typeof y.msTransform==="string"||typeof y.MsTransform==="string")&&!/MSIE 9/.test(navigator.appVersion)){return{j:"ms",c:"-ms-"}
}return{j:null,c:null}
}((document.body||document.head).style));
function r(){return true
}var o=function(y){y=y||h(".mediaImage img.zoom-image");
if("WebkitTransform" in document.body.style||"MozTransform" in document.body.style||"OTransform" in document.body.style||"transform" in document.body.style){y.off().animate({translate3d:"0,0,0"},1,q).parents(".active").removeClass("zoomed")
}else{y.off().css({left:"0",right:"0"})
}};
function n(A){A.preventDefault();
A.stopPropagation();
var y=h(A.target).parents(".slide"),B=h(A.target).parents(".gallery"),z=y.find(".mediaImage img.zoom-image");
if(y.hasClass("zoomed")){y.removeClass("zoomed");
o(z);
e=0;
c=0;
B.akscroller("resumescroll")
}else{y.addClass("zoomed");
z.on(r);
B.akscroller("suspendscroll")
}}function g(y){return y.targetTouches?y.targetTouches[0]:y
}function u(z){z.preventDefault();
z.stopPropagation();
var y=h(z.target);
b=g(z).pageX;
a=g(z).pageY;
f=(m)?(e||0)+b:-(b-y.offset().left);
d=(m)?(c||0)+a:-(a-y.offset().top);
p=true
}function l(D){if(p){var C=h(D.target),z=f-g(D).pageX,E=d-g(D).pageY,B=C.width()/3,A=C.height()/2;
D.stopPropagation();
D.preventDefault();
if((z<=B&&z>=-B)&&(E<=A&&E>=-A)){if("WebkitTransform" in document.body.style||"MozTransform" in document.body.style||"OTransform" in document.body.style||"transform" in document.body.style){C[0].style[m.j.length?m.j+"Transform":"transform"]=(m.j==="Webkit")?"translate3d("+-z+"px, "+-E+"px, 0)":"translate("+-z+"px, "+-E+"px)"
}else{C.css("left",-z);
C.css("top",-E)
}e=z;
c=E
}else{return
}}}function k(){f=e;
d=c;
p=false
}function t(y){s=y.find(".zoom-image");
s.on(x,u).on(v,l).on(w,k).on("mouseout",k);
y.parents().find(".icon-gallery-right, .icon-gallery-left").on(x,function(){if(y.hasClass("zoomed")){y.removeClass("zoomed");
s.off();
o(s)
}})
}h.fn.galleryZoom=function(z,y){if(typeof z!=="string"){y=z
}else{if(z==="zoomReset"){o()
}}y=y||{};
m=m;
this.each(function(){var A=h(this);
j=A.find(y.imgClass||"img");
j.after(h("<img/>").addClass("zoom-image").attr("src",j.data("image")));
if(!A.find(".circle").length){A.append('<div class="circle"><span>+</span><span class="min">-</span></div>')
}A.find(".circle").off().on(x,function(B){n(B);
t(A)
})
})
}
}(window.Zepto||window.jQuery));
(function(a){a.cookie=function(c,m,p){if(typeof m!="undefined"){p=p||{};
if(m===null){m="";
p.expires=-1
}var f="";
if(p.expires&&(typeof p.expires=="number"||p.expires.toUTCString)){var g;
if(typeof p.expires=="number"){g=new Date();
g.setTime(g.getTime()+(p.expires*24*60*60*1000))
}else{g=p.expires
}f="; expires="+g.toUTCString()
}var o=p.path?"; path="+(p.path):"";
var j=p.domain?"; domain="+(p.domain):"";
var b=p.secure?"; secure":"";
document.cookie=[c,"=",encodeURIComponent(m),f,o,j,b].join("")
}else{var e=null;
if(document.cookie&&document.cookie!==""){var n=document.cookie.split(";"),h=n.length;
for(var k=0;
k<h;
k++){var d=a.trim(n[k]);
if(d.substring(0,c.length+1)==(c+"=")){e=decodeURIComponent(d.substring(c.length+1));
break
}}}return e
}}
})(window.jQuery||window.Zepto);
(function(e,a,b){a.gdt=a.gdt||{};
var c={};
c.PADCHAR="=";
c.ALPHA="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
c.makeDOMException=function(){var f;
try{return new DOMException(DOMException.INVALID_CHARACTER_ERR)
}catch(f){var d=new Error("DOM Exception 5");
d.code=d.number=5;
d.name=d.description="INVALID_CHARACTER_ERR";
d.toString=function(){return"Error: "+d.name+": "+d.message
};
return d
}};
c.getbyte64=function(g,f){var d=c.ALPHA.indexOf(g.charAt(f));
if(d===-1){throw c.makeDOMException()
}return d
};
c.decode=function(h){h=""+h;
var l=c.getbyte64;
var k,g,j;
var f=h.length;
if(f===0){return h
}if(f%4!==0){throw c.makeDOMException()
}k=0;
if(h.charAt(f-1)===c.PADCHAR){k=1;
if(h.charAt(f-2)===c.PADCHAR){k=2
}f-=4
}var d=[];
for(g=0;
g<f;
g+=4){j=(l(h,g)<<18)|(l(h,g+1)<<12)|(l(h,g+2)<<6)|l(h,g+3);
d.push(String.fromCharCode(j>>16,(j>>8)&255,j&255))
}switch(k){case 1:j=(l(h,g)<<18)|(l(h,g+1)<<12)|(l(h,g+2)<<6);
d.push(String.fromCharCode(j>>16,(j>>8)&255));
break;
case 2:j=(l(h,g)<<18)|(l(h,g+1)<<12);
d.push(String.fromCharCode(j>>16));
break
}return d.join("")
};
c.getbyte=function(g,f){var d=g.charCodeAt(f);
if(d>255){throw c.makeDOMException()
}return d
};
c.encode=function(j){if(arguments.length!==1){throw new SyntaxError("Not enough arguments")
}var f=c.PADCHAR;
var l=c.ALPHA;
var k=c.getbyte;
var h,m;
var d=[];
j=""+j;
var g=j.length-j.length%3;
if(j.length===0){return j
}for(h=0;
h<g;
h+=3){m=(k(j,h)<<16)|(k(j,h+1)<<8)|k(j,h+2);
d.push(l.charAt(m>>18));
d.push(l.charAt((m>>12)&63));
d.push(l.charAt((m>>6)&63));
d.push(l.charAt(m&63))
}switch(j.length-g){case 1:m=k(j,h)<<16;
d.push(l.charAt(m>>18)+l.charAt((m>>12)&63)+f+f);
break;
case 2:m=(k(j,h)<<16)|(k(j,h+1)<<8);
d.push(l.charAt(m>>18)+l.charAt((m>>12)&63)+l.charAt((m>>6)&63)+f);
break
}return d.join("")
};
a.gdt.Base64=c
}(document,window,window.jQuery||window.Zepto));
function ClusterIcon(a,b){a.getMarkerClusterer().extend(ClusterIcon,google.maps.OverlayView);
this.cluster_=a;
this.className_=a.getMarkerClusterer().getClusterClass();
this.styles_=b;
this.center_=null;
this.div_=null;
this.sums_=null;
this.visible_=false;
this.setMap(a.getMap())
}ClusterIcon.prototype.onAdd=function(){var c=this;
var a;
var b;
this.div_=document.createElement("div");
this.div_.className=this.className_;
if(this.visible_){this.show()
}this.getPanes().overlayMouseTarget.appendChild(this.div_);
this.boundsChangedListener_=google.maps.event.addListener(this.getMap(),"bounds_changed",function(){b=a
});
google.maps.event.addDomListener(this.div_,"mousedown",function(){a=true;
b=false
});
google.maps.event.addDomListener(this.div_,"click",function(h){a=false;
if(!b){var d;
var f;
var g=c.cluster_.getMarkerClusterer();
google.maps.event.trigger(g,"click",c.cluster_);
google.maps.event.trigger(g,"clusterclick",c.cluster_);
if(g.getZoomOnClick()){f=g.getMaxZoom();
d=c.cluster_.getBounds();
g.getMap().fitBounds(d);
setTimeout(function(){g.getMap().fitBounds(d);
if(f!==null&&(g.getMap().getZoom()>f)){g.getMap().setZoom(f+1)
}},100)
}h.cancelBubble=true;
if(h.stopPropagation){h.stopPropagation()
}}});
google.maps.event.addDomListener(this.div_,"mouseover",function(){var d=c.cluster_.getMarkerClusterer();
google.maps.event.trigger(d,"mouseover",c.cluster_)
});
google.maps.event.addDomListener(this.div_,"mouseout",function(){var d=c.cluster_.getMarkerClusterer();
google.maps.event.trigger(d,"mouseout",c.cluster_)
})
};
ClusterIcon.prototype.onRemove=function(){if(this.div_&&this.div_.parentNode){this.hide();
google.maps.event.removeListener(this.boundsChangedListener_);
google.maps.event.clearInstanceListeners(this.div_);
this.div_.parentNode.removeChild(this.div_);
this.div_=null
}};
ClusterIcon.prototype.draw=function(){if(this.visible_){var a=this.getPosFromLatLng_(this.center_);
this.div_.style.top=a.y+"px";
this.div_.style.left=a.x+"px"
}};
ClusterIcon.prototype.hide=function(){if(this.div_){this.div_.style.display="none"
}this.visible_=false
};
ClusterIcon.prototype.show=function(){if(this.div_){var a="";
var c=this.backgroundPosition_.split(" ");
var d=parseInt(c[0].replace(/^\s+|\s+$/g,""),10);
var b=parseInt(c[1].replace(/^\s+|\s+$/g,""),10);
var e=this.getPosFromLatLng_(this.center_);
this.div_.style.cssText=this.createCss(e);
a="<img src='"+this.url_+"' style='position: absolute; top: "+b+"px; left: "+d+"px; ";
if(!this.cluster_.getMarkerClusterer().enableRetinaIcons_){a+="clip: rect("+(-1*b)+"px, "+((-1*d)+this.width_)+"px, "+((-1*b)+this.height_)+"px, "+(-1*d)+"px);"
}a+="'>";
this.div_.innerHTML=a+"<div style='position: absolute;top: "+this.anchorText_[0]+"px;left: "+this.anchorText_[1]+"px;color: "+this.textColor_+";font-size: "+this.textSize_+"px;font-family: "+this.fontFamily_+";font-weight: "+this.fontWeight_+";font-style: "+this.fontStyle_+";text-decoration: "+this.textDecoration_+";text-align: center;width: "+this.width_+"px;line-height:"+this.height_+"px;'>"+this.sums_.text+"</div>";
if(typeof this.sums_.title==="undefined"||this.sums_.title===""){this.div_.title=this.cluster_.getMarkerClusterer().getTitle()
}else{this.div_.title=this.sums_.title
}this.div_.style.display=""
}this.visible_=true
};
ClusterIcon.prototype.useStyle=function(b){this.sums_=b;
var a=Math.max(0,b.index-1);
a=Math.min(this.styles_.length-1,a);
var c=this.styles_[a];
this.url_=c.url;
this.height_=c.height;
this.width_=c.width;
this.anchorText_=c.anchorText||[0,0];
this.anchorIcon_=c.anchorIcon||[parseInt(this.height_/2,10),parseInt(this.width_/2,10)];
this.textColor_=c.textColor||"black";
this.textSize_=c.textSize||11;
this.textDecoration_=c.textDecoration||"none";
this.fontWeight_=c.fontWeight||"bold";
this.fontStyle_=c.fontStyle||"normal";
this.fontFamily_=c.fontFamily||"Arial,sans-serif";
this.backgroundPosition_=c.backgroundPosition||"0 0"
};
ClusterIcon.prototype.setCenter=function(a){this.center_=a
};
ClusterIcon.prototype.createCss=function(b){var a=[];
a.push("cursor: pointer;");
a.push("position: absolute; top: "+b.y+"px; left: "+b.x+"px;");
a.push("width: "+this.width_+"px; height: "+this.height_+"px;");
return a.join("")
};
ClusterIcon.prototype.getPosFromLatLng_=function(b){var a=this.getProjection().fromLatLngToDivPixel(b);
a.x-=this.anchorIcon_[1];
a.y-=this.anchorIcon_[0];
a.x=parseInt(a.x,10);
a.y=parseInt(a.y,10);
return a
};
function Cluster(a){this.markerClusterer_=a;
this.map_=a.getMap();
this.gridSize_=a.getGridSize();
this.minClusterSize_=a.getMinimumClusterSize();
this.averageCenter_=a.getAverageCenter();
this.markers_=[];
this.center_=null;
this.bounds_=null;
this.clusterIcon_=new ClusterIcon(this,a.getStyles())
}Cluster.prototype.getSize=function(){return this.markers_.length
};
Cluster.prototype.getMarkers=function(){return this.markers_
};
Cluster.prototype.getCenter=function(){return this.center_
};
Cluster.prototype.getMap=function(){return this.map_
};
Cluster.prototype.getMarkerClusterer=function(){return this.markerClusterer_
};
Cluster.prototype.getBounds=function(){var a;
var b=new google.maps.LatLngBounds(this.center_,this.center_);
var c=this.getMarkers();
for(a=0;
a<c.length;
a++){b.extend(c[a].getPosition())
}return b
};
Cluster.prototype.remove=function(){this.clusterIcon_.setMap(null);
this.markers_=[];
delete this.markers_
};
Cluster.prototype.addMarker=function(b){var e;
var d;
var f;
if(this.isMarkerAlreadyAdded_(b)){return false
}if(!this.center_){this.center_=b.getPosition();
this.calculateBounds_()
}else{if(this.averageCenter_){var a=this.markers_.length+1;
var g=(this.center_.lat()*(a-1)+b.getPosition().lat())/a;
var c=(this.center_.lng()*(a-1)+b.getPosition().lng())/a;
this.center_=new google.maps.LatLng(g,c);
this.calculateBounds_()
}}b.isAdded=true;
this.markers_.push(b);
d=this.markers_.length;
f=this.markerClusterer_.getMaxZoom();
if(f!==null&&this.map_.getZoom()>f){if(b.getMap()!==this.map_){b.setMap(this.map_)
}}else{if(d<this.minClusterSize_){if(b.getMap()!==this.map_){b.setMap(this.map_)
}}else{if(d===this.minClusterSize_){for(e=0;
e<d;
e++){this.markers_[e].setMap(null)
}}else{b.setMap(null)
}}}this.updateIcon_();
return true
};
Cluster.prototype.isMarkerInClusterBounds=function(a){return this.bounds_.contains(a.getPosition())
};
Cluster.prototype.calculateBounds_=function(){var a=new google.maps.LatLngBounds(this.center_,this.center_);
this.bounds_=this.markerClusterer_.getExtendedBounds(a)
};
Cluster.prototype.updateIcon_=function(){var b=this.markers_.length;
var d=this.markerClusterer_.getMaxZoom();
if(d!==null&&this.map_.getZoom()>d){this.clusterIcon_.hide();
return
}if(b<this.minClusterSize_){this.clusterIcon_.hide();
return
}var c=this.markerClusterer_.getStyles().length;
var a=this.markerClusterer_.getCalculator()(this.markers_,c);
this.clusterIcon_.setCenter(this.center_);
this.clusterIcon_.useStyle(a);
this.clusterIcon_.show()
};
Cluster.prototype.isMarkerAlreadyAdded_=function(a){var b;
if(this.markers_.indexOf){return this.markers_.indexOf(a)!==-1
}else{for(b=0;
b<this.markers_.length;
b++){if(a===this.markers_[b]){return true
}}}return false
};
function MarkerClusterer(c,a,b){this.extend(MarkerClusterer,google.maps.OverlayView);
a=a||[];
b=b||{};
this.markers_=[];
this.clusters_=[];
this.listeners_=[];
this.activeMap_=null;
this.ready_=false;
this.gridSize_=b.gridSize||60;
this.minClusterSize_=b.minimumClusterSize||2;
this.maxZoom_=b.maxZoom||null;
this.styles_=b.styles||[];
this.title_=b.title||"";
this.zoomOnClick_=true;
if(b.zoomOnClick!==undefined){this.zoomOnClick_=b.zoomOnClick
}this.averageCenter_=false;
if(b.averageCenter!==undefined){this.averageCenter_=b.averageCenter
}this.ignoreHidden_=false;
if(b.ignoreHidden!==undefined){this.ignoreHidden_=b.ignoreHidden
}this.enableRetinaIcons_=false;
if(b.enableRetinaIcons!==undefined){this.enableRetinaIcons_=b.enableRetinaIcons
}this.imagePath_=b.imagePath||MarkerClusterer.IMAGE_PATH;
this.imageExtension_=b.imageExtension||MarkerClusterer.IMAGE_EXTENSION;
this.imageSizes_=b.imageSizes||MarkerClusterer.IMAGE_SIZES;
this.calculator_=b.calculator||MarkerClusterer.CALCULATOR;
this.batchSize_=b.batchSize||MarkerClusterer.BATCH_SIZE;
this.batchSizeIE_=b.batchSizeIE||MarkerClusterer.BATCH_SIZE_IE;
this.clusterClass_=b.clusterClass||"cluster";
if(navigator.userAgent.toLowerCase().indexOf("msie")!==-1){this.batchSize_=this.batchSizeIE_
}this.setupStyles_();
this.addMarkers(a,true);
this.setMap(c)
}MarkerClusterer.prototype.onAdd=function(){var a=this;
this.activeMap_=this.getMap();
this.ready_=true;
this.repaint();
this.listeners_=[google.maps.event.addListener(this.getMap(),"zoom_changed",function(){a.resetViewport_(false);
if(this.getZoom()===(this.get("minZoom")||0)||this.getZoom()===this.get("maxZoom")){google.maps.event.trigger(this,"idle")
}}),google.maps.event.addListener(this.getMap(),"idle",function(){a.redraw_()
})]
};
MarkerClusterer.prototype.onRemove=function(){var a;
for(a=0;
a<this.markers_.length;
a++){if(this.markers_[a].getMap()!==this.activeMap_){this.markers_[a].setMap(this.activeMap_)
}}for(a=0;
a<this.clusters_.length;
a++){this.clusters_[a].remove()
}this.clusters_=[];
for(a=0;
a<this.listeners_.length;
a++){google.maps.event.removeListener(this.listeners_[a])
}this.listeners_=[];
this.activeMap_=null;
this.ready_=false
};
MarkerClusterer.prototype.draw=function(){};
MarkerClusterer.prototype.setupStyles_=function(){var b,a;
if(this.styles_.length>0){return
}for(b=0;
b<this.imageSizes_.length;
b++){a=this.imageSizes_[b];
this.styles_.push({url:this.imagePath_+(b+1)+"."+this.imageExtension_,height:a,width:a})
}};
MarkerClusterer.prototype.fitMapToMarkers=function(){var a;
var c=this.getMarkers();
var b=new google.maps.LatLngBounds();
for(a=0;
a<c.length;
a++){b.extend(c[a].getPosition())
}this.getMap().fitBounds(b)
};
MarkerClusterer.prototype.getGridSize=function(){return this.gridSize_
};
MarkerClusterer.prototype.setGridSize=function(a){this.gridSize_=a
};
MarkerClusterer.prototype.getMinimumClusterSize=function(){return this.minClusterSize_
};
MarkerClusterer.prototype.setMinimumClusterSize=function(a){this.minClusterSize_=a
};
MarkerClusterer.prototype.getMaxZoom=function(){return this.maxZoom_
};
MarkerClusterer.prototype.setMaxZoom=function(a){this.maxZoom_=a
};
MarkerClusterer.prototype.getStyles=function(){return this.styles_
};
MarkerClusterer.prototype.setStyles=function(a){this.styles_=a
};
MarkerClusterer.prototype.getTitle=function(){return this.title_
};
MarkerClusterer.prototype.setTitle=function(a){this.title_=a
};
MarkerClusterer.prototype.getZoomOnClick=function(){return this.zoomOnClick_
};
MarkerClusterer.prototype.setZoomOnClick=function(a){this.zoomOnClick_=a
};
MarkerClusterer.prototype.getAverageCenter=function(){return this.averageCenter_
};
MarkerClusterer.prototype.setAverageCenter=function(a){this.averageCenter_=a
};
MarkerClusterer.prototype.getIgnoreHidden=function(){return this.ignoreHidden_
};
MarkerClusterer.prototype.setIgnoreHidden=function(a){this.ignoreHidden_=a
};
MarkerClusterer.prototype.getEnableRetinaIcons=function(){return this.enableRetinaIcons_
};
MarkerClusterer.prototype.setEnableRetinaIcons=function(a){this.enableRetinaIcons_=a
};
MarkerClusterer.prototype.getImageExtension=function(){return this.imageExtension_
};
MarkerClusterer.prototype.setImageExtension=function(a){this.imageExtension_=a
};
MarkerClusterer.prototype.getImagePath=function(){return this.imagePath_
};
MarkerClusterer.prototype.setImagePath=function(a){this.imagePath_=a
};
MarkerClusterer.prototype.getImageSizes=function(){return this.imageSizes_
};
MarkerClusterer.prototype.setImageSizes=function(a){this.imageSizes_=a
};
MarkerClusterer.prototype.getCalculator=function(){return this.calculator_
};
MarkerClusterer.prototype.setCalculator=function(a){this.calculator_=a
};
MarkerClusterer.prototype.getBatchSizeIE=function(){return this.batchSizeIE_
};
MarkerClusterer.prototype.setBatchSizeIE=function(a){this.batchSizeIE_=a
};
MarkerClusterer.prototype.getClusterClass=function(){return this.clusterClass_
};
MarkerClusterer.prototype.setClusterClass=function(a){this.clusterClass_=a
};
MarkerClusterer.prototype.getMarkers=function(){return this.markers_
};
MarkerClusterer.prototype.getTotalMarkers=function(){return this.markers_.length
};
MarkerClusterer.prototype.getClusters=function(){return this.clusters_
};
MarkerClusterer.prototype.getTotalClusters=function(){return this.clusters_.length
};
MarkerClusterer.prototype.addMarker=function(a,b){this.pushMarkerTo_(a);
if(!b){this.redraw_()
}};
MarkerClusterer.prototype.addMarkers=function(c,b){var a;
for(a in c){if(c.hasOwnProperty(a)){this.pushMarkerTo_(c[a])
}}if(!b){this.redraw_()
}};
MarkerClusterer.prototype.pushMarkerTo_=function(a){if(a.getDraggable()){var b=this;
google.maps.event.addListener(a,"dragend",function(){if(b.ready_){this.isAdded=false;
b.repaint()
}})
}a.isAdded=false;
this.markers_.push(a)
};
MarkerClusterer.prototype.removeMarker=function(a,b){var c=this.removeMarker_(a);
if(!b&&c){this.repaint()
}return c
};
MarkerClusterer.prototype.removeMarkers=function(e,b){var a,c;
var d=false;
for(a=0;
a<e.length;
a++){c=this.removeMarker_(e[a]);
d=d||c
}if(!b&&d){this.repaint()
}return d
};
MarkerClusterer.prototype.removeMarker_=function(a){var c;
var b=-1;
if(this.markers_.indexOf){b=this.markers_.indexOf(a)
}else{for(c=0;
c<this.markers_.length;
c++){if(a===this.markers_[c]){b=c;
break
}}}if(b===-1){return false
}a.setMap(null);
this.markers_.splice(b,1);
return true
};
MarkerClusterer.prototype.clearMarkers=function(){this.resetViewport_(true);
this.markers_=[]
};
MarkerClusterer.prototype.repaint=function(){var a=this.clusters_.slice();
this.clusters_=[];
this.resetViewport_(false);
this.redraw_();
setTimeout(function(){var b;
for(b=0;
b<a.length;
b++){a[b].remove()
}},0)
};
MarkerClusterer.prototype.getExtendedBounds=function(e){var c=this.getProjection();
var f=new google.maps.LatLng(e.getNorthEast().lat(),e.getNorthEast().lng());
var h=new google.maps.LatLng(e.getSouthWest().lat(),e.getSouthWest().lng());
var d=c.fromLatLngToDivPixel(f);
d.x+=this.gridSize_;
d.y-=this.gridSize_;
var b=c.fromLatLngToDivPixel(h);
b.x-=this.gridSize_;
b.y+=this.gridSize_;
var g=c.fromDivPixelToLatLng(d);
var a=c.fromDivPixelToLatLng(b);
e.extend(g);
e.extend(a);
return e
};
MarkerClusterer.prototype.redraw_=function(){this.createClusters_(0)
};
MarkerClusterer.prototype.resetViewport_=function(c){var b,a;
for(b=0;
b<this.clusters_.length;
b++){this.clusters_[b].remove()
}this.clusters_=[];
for(b=0;
b<this.markers_.length;
b++){a=this.markers_[b];
a.isAdded=false;
if(c){a.setMap(null)
}}};
MarkerClusterer.prototype.distanceBetweenPoints_=function(k,h){var g=6371;
var e=(h.lat()-k.lat())*Math.PI/180;
var f=(h.lng()-k.lng())*Math.PI/180;
var b=Math.sin(e/2)*Math.sin(e/2)+Math.cos(k.lat()*Math.PI/180)*Math.cos(h.lat()*Math.PI/180)*Math.sin(f/2)*Math.sin(f/2);
var l=2*Math.atan2(Math.sqrt(b),Math.sqrt(1-b));
var j=g*l;
return j
};
MarkerClusterer.prototype.isMarkerInBounds_=function(a,b){return b.contains(a.getPosition())
};
MarkerClusterer.prototype.addToClosestCluster_=function(c){var f,g,b,a;
var h=40000;
var e=null;
for(f=0;
f<this.clusters_.length;
f++){b=this.clusters_[f];
a=b.getCenter();
if(a){g=this.distanceBetweenPoints_(a,c.getPosition());
if(g<h){h=g;
e=b
}}}if(e&&e.isMarkerInClusterBounds(c)){e.addMarker(c)
}else{b=new Cluster(this);
b.addMarker(c);
this.clusters_.push(b)
}};
MarkerClusterer.prototype.createClusters_=function(a){var e,c;
var b;
var d=this;
if(!this.ready_){return
}if(a===0){google.maps.event.trigger(this,"clusteringbegin",this);
if(typeof this.timerRefStatic!=="undefined"){clearTimeout(this.timerRefStatic);
delete this.timerRefStatic
}}if(this.getMap().getZoom()>3){b=new google.maps.LatLngBounds(this.getMap().getBounds().getSouthWest(),this.getMap().getBounds().getNorthEast())
}else{b=new google.maps.LatLngBounds(new google.maps.LatLng(85.02070771743472,-178.48388434375),new google.maps.LatLng(-85.08136444384544,178.00048865625))
}var g=this.getExtendedBounds(b);
var f=Math.min(a+this.batchSize_,this.markers_.length);
for(e=a;
e<f;
e++){c=this.markers_[e];
if(!c.isAdded&&this.isMarkerInBounds_(c,g)){if(!this.ignoreHidden_||(this.ignoreHidden_&&c.getVisible())){this.addToClosestCluster_(c)
}}}if(f<this.markers_.length){this.timerRefStatic=setTimeout(function(){d.createClusters_(f)
},0)
}else{delete this.timerRefStatic;
google.maps.event.trigger(this,"clusteringend",this)
}};
MarkerClusterer.prototype.extend=function(b,a){return(function(c){var d;
for(d in c.prototype){this.prototype[d]=c.prototype[d]
}return this
}).apply(b,[a])
};
MarkerClusterer.CALCULATOR=function(f,d){var a=0;
var e="";
var c=f.length.toString();
var b=c;
while(b!==0){b=parseInt(b/10,10);
a++
}a=Math.min(a,d);
return{text:c,index:a,title:e}
};
MarkerClusterer.BATCH_SIZE=2000;
MarkerClusterer.BATCH_SIZE_IE=500;
MarkerClusterer.IMAGE_PATH="http://google-maps-utility-library-v3.googlecode.com/svn/trunk/markerclustererplus/images/m";
MarkerClusterer.IMAGE_EXTENSION="png";
MarkerClusterer.IMAGE_SIZES=[53,56,66,78,90];
(function(){function p(b,a,d){return("string"===typeof a?a:a.toString()).replace(b.define||h,function(a,c,e,g){0===c.indexOf("def.")&&(c=c.substring(4));
c in d||(":"===e?(b.defineParams&&g.replace(b.defineParams,function(a,b,l){d[c]={arg:b,text:l}
}),c in d||(d[c]=g)):(new Function("def","def['"+c+"']="+g))(d));
return""
}).replace(b.use||h,function(a,c){b.useParams&&(c=c.replace(b.useParams,function(a,b,c,l){if(d[c]&&d[c].arg&&l){return a=(c+":"+l).replace(/'|\\/g,"_"),d.__exp=d.__exp||{},d.__exp[a]=d[c].text.replace(new RegExp("(^|[^\\w$])"+d[c].arg+"([^\\w$])","g"),"$1"+l+"$2"),b+"def.__exp['"+a+"']"
}}));
var e=(new Function("def","return "+c))(d);
return e?p(b,e,d):e
})
}function k(b){return b.replace(/\\('|\\)/g,"$1").replace(/[\r\t\n]/g," ")
}var f={version:"1.0.3",templateSettings:{evaluate:/\{\{([\s\S]+?(\}?)+)\}\}/g,interpolate:/\{\{=([\s\S]+?)\}\}/g,encode:/\{\{!([\s\S]+?)\}\}/g,use:/\{\{#([\s\S]+?)\}\}/g,useParams:/(^|[^\w$])def(?:\.|\[[\'\"])([\w$\.]+)(?:[\'\"]\])?\s*\:\s*([\w$\.]+|\"[^\"]+\"|\'[^\']+\'|\{[^\}]+\})/g,define:/\{\{##\s*([\w\.$]+)\s*(\:|=)([\s\S]+?)#\}\}/g,defineParams:/^\s*([\w$]+):([\s\S]+)/,conditional:/\{\{\?(\?)?\s*([\s\S]*?)\s*\}\}/g,iterate:/\{\{~\s*(?:\}\}|([\s\S]+?)\s*\:\s*([\w$]+)\s*(?:\:\s*([\w$]+))?\s*\}\})/g,varname:"it",strip:!0,append:!0,selfcontained:!1,doNotSkipEncoded:!1},template:void 0,compile:void 0},m;
f.encodeHTMLSource=function(b){var a={"&":"&#38;","<":"&#60;",">":"&#62;",'"':"&#34;","'":"&#39;","/":"&#47;"},d=b?/[&<>"'\/]/g:/&(?!#?\w+;)|<|>|"|'|\//g;
return function(b){return b?b.toString().replace(d,function(b){return a[b]||b
}):""
}
};
m=function(){return this||(0,eval)("this")
}();
"undefined"!==typeof module&&module.exports?module.exports=f:"function"===typeof define&&define.amd?define(function(){return f
}):m.doT=f;
var r={start:"'+(",end:")+'",startencode:"'+encodeHTML("},s={start:"';out+=(",end:");out+='",startencode:"';out+=encodeHTML("},h=/$^/;
f.template=function(b,a,d){a=a||f.templateSettings;
var n=a.append?r:s,c,e=0,g;
b=a.use||a.define?p(a,b,d||{}):b;
b=("var out='"+(a.strip?b.replace(/(^|\r|\n)\t* +| +\t*(\r|\n|$)/g," ").replace(/\r|\n|\t|\/\*[\s\S]*?\*\//g,""):b).replace(/'|\\/g,"\\$&").replace(a.interpolate||h,function(b,a){return n.start+k(a)+n.end
}).replace(a.encode||h,function(b,a){c=!0;
return n.startencode+k(a)+n.end
}).replace(a.conditional||h,function(b,a,c){return a?c?"';}else if("+k(c)+"){out+='":"';}else{out+='":c?"';if("+k(c)+"){out+='":"';}out+='"
}).replace(a.iterate||h,function(b,a,c,d){if(!a){return"';} } out+='"
}e+=1;
g=d||"i"+e;
a=k(a);
return"';var arr"+e+"="+a+";if(arr"+e+"){var "+c+","+g+"=-1,l"+e+"=arr"+e+".length-1;while("+g+"<l"+e+"){"+c+"=arr"+e+"["+g+"+=1];out+='"
}).replace(a.evaluate||h,function(a,b){return"';"+k(b)+"out+='"
})+"';return out;").replace(/\n/g,"\\n").replace(/\t/g,"\\t").replace(/\r/g,"\\r").replace(/(\s|;|\}|^|\{)out\+='';/g,"$1").replace(/\+''/g,"");
c&&(a.selfcontained||!m||m._encodeHTML||(m._encodeHTML=f.encodeHTMLSource(a.doNotSkipEncoded)),b="var encodeHTML = typeof _encodeHTML !== 'undefined' ? _encodeHTML : ("+f.encodeHTMLSource.toString()+"("+(a.doNotSkipEncoded||"")+"));"+b);
try{return new Function(a.varname,b)
}catch(q){throw"undefined"!==typeof console&&console.log("Could not create a template function: "+b),q
}};
f.compile=function(b,a){return f.template(b,null,a)
}
})();
(function(a){a.fn.qrcode=function(k){var v;
function n(h){this.mode=v;
this.data=h
}function d(h,j){this.typeNumber=h;
this.errorCorrectLevel=j;
this.modules=null;
this.moduleCount=0;
this.dataCache=null;
this.dataList=[]
}function b(j,m){if(void 0==j.length){throw Error(j.length+"/"+m)
}for(var l=0;
l<j.length&&0==j[l];
){l++
}this.num=Array(j.length-l+m);
for(var h=0;
h<j.length-l;
h++){this.num[h]=j[h+l]
}}function c(h,j){this.totalCount=h;
this.dataCount=j
}function r(){this.buffer=[];
this.length=0
}n.prototype={getLength:function(){return this.data.length
},write:function(h){for(var j=0;
j<this.data.length;
j++){h.put(this.data.charCodeAt(j),8)
}}};
d.prototype={addData:function(h){this.dataList.push(new n(h));
this.dataCache=null
},isDark:function(h,j){if(0>h||this.moduleCount<=h||0>j||this.moduleCount<=j){throw Error(h+","+j)
}return this.modules[h][j]
},getModuleCount:function(){return this.moduleCount
},make:function(){if(1>this.typeNumber){for(var j=1,j=1;
40>j;
j++){for(var o=c.getRSBlocks(j,this.errorCorrectLevel),m=new r,h=0,l=0;
l<o.length;
l++){h+=o[l].dataCount
}for(l=0;
l<this.dataList.length;
l++){o=this.dataList[l],m.put(o.mode,4),m.put(o.getLength(),g.getLengthInBits(o.mode,j)),o.write(m)
}if(m.getLengthInBits()<=8*h){break
}}this.typeNumber=j
}this.makeImpl(!1,this.getBestMaskPattern())
},makeImpl:function(j,m){this.moduleCount=4*this.typeNumber+17;
this.modules=Array(this.moduleCount);
for(var l=0;
l<this.moduleCount;
l++){this.modules[l]=Array(this.moduleCount);
for(var h=0;
h<this.moduleCount;
h++){this.modules[l][h]=null
}}this.setupPositionProbePattern(0,0);
this.setupPositionProbePattern(this.moduleCount-7,0);
this.setupPositionProbePattern(0,this.moduleCount-7);
this.setupPositionAdjustPattern();
this.setupTimingPattern();
this.setupTypeInfo(j,m);
7<=this.typeNumber&&this.setupTypeNumber(j);
null==this.dataCache&&(this.dataCache=d.createData(this.typeNumber,this.errorCorrectLevel,this.dataList));
this.mapData(this.dataCache,m)
},setupPositionProbePattern:function(j,m){for(var l=-1;
7>=l;
l++){if(!(-1>=j+l||this.moduleCount<=j+l)){for(var h=-1;
7>=h;
h++){-1>=m+h||this.moduleCount<=m+h||(this.modules[j+l][m+h]=0<=l&&6>=l&&(0==h||6==h)||0<=h&&6>=h&&(0==l||6==l)||2<=l&&4>=l&&2<=h&&4>=h?!0:!1)
}}}},getBestMaskPattern:function(){for(var j=0,m=0,l=0;
8>l;
l++){this.makeImpl(!0,l);
var h=g.getLostPoint(this);
if(0==l||j>h){j=h,m=l
}}return m
},createMovieClip:function(j,o,m){j=j.createEmptyMovieClip(o,m);
this.make();
for(o=0;
o<this.modules.length;
o++){for(var m=1*o,h=0;
h<this.modules[o].length;
h++){var l=1*h;
this.modules[o][h]&&(j.beginFill(0,100),j.moveTo(l,m),j.lineTo(l+1,m),j.lineTo(l+1,m+1),j.lineTo(l,m+1),j.endFill())
}}return j
},setupTimingPattern:function(){for(var h=8;
h<this.moduleCount-8;
h++){null==this.modules[h][6]&&(this.modules[h][6]=0==h%2)
}for(h=8;
h<this.moduleCount-8;
h++){null==this.modules[6][h]&&(this.modules[6][h]=0==h%2)
}},setupPositionAdjustPattern:function(){for(var j=g.getPatternPosition(this.typeNumber),q=0;
q<j.length;
q++){for(var p=0;
p<j.length;
p++){var h=j[q],o=j[p];
if(null==this.modules[h][o]){for(var m=-2;
2>=m;
m++){for(var l=-2;
2>=l;
l++){this.modules[h+m][o+l]=-2==m||2==m||-2==l||2==l||0==m&&0==l?!0:!1
}}}}}},setupTypeNumber:function(j){for(var m=g.getBCHTypeNumber(this.typeNumber),l=0;
18>l;
l++){var h=!j&&1==(m>>l&1);
this.modules[Math.floor(l/3)][l%3+this.moduleCount-8-3]=h
}for(l=0;
18>l;
l++){h=!j&&1==(m>>l&1),this.modules[l%3+this.moduleCount-8-3][Math.floor(l/3)]=h
}},setupTypeInfo:function(j,o){for(var m=g.getBCHTypeInfo(this.errorCorrectLevel<<3|o),h=0;
15>h;
h++){var l=!j&&1==(m>>h&1);
6>h?this.modules[h][8]=l:8>h?this.modules[h+1][8]=l:this.modules[this.moduleCount-15+h][8]=l
}for(h=0;
15>h;
h++){l=!j&&1==(m>>h&1),8>h?this.modules[8][this.moduleCount-h-1]=l:9>h?this.modules[8][15-h-1+1]=l:this.modules[8][15-h-1]=l
}this.modules[this.moduleCount-8][8]=!j
},mapData:function(t,q){for(var p=-1,s=this.moduleCount-1,o=7,m=0,j=this.moduleCount-1;
0<j;
j-=2){for(6==j&&j--;
;
){for(var l=0;
2>l;
l++){if(null==this.modules[s][j-l]){var h=!1;
m<t.length&&(h=1==(t[m]>>>o&1));
g.getMask(q,s,j-l)&&(h=!h);
this.modules[s][j-l]=h;
o--;
-1==o&&(m++,o=7)
}}s+=p;
if(0>s||this.moduleCount<=s){s-=p;
p=-p;
break
}}}}};
d.PAD0=236;
d.PAD1=17;
d.createData=function(j,p,o){for(var p=c.getRSBlocks(j,p),h=new r,m=0;
m<o.length;
m++){var l=o[m];
h.put(l.mode,4);
h.put(l.getLength(),g.getLengthInBits(l.mode,j));
l.write(h)
}for(m=j=0;
m<p.length;
m++){j+=p[m].dataCount
}if(h.getLengthInBits()>8*j){throw Error("code length overflow. ("+h.getLengthInBits()+">"+8*j+")")
}for(h.getLengthInBits()+4<=8*j&&h.put(0,4);
0!=h.getLengthInBits()%8;
){h.putBit(!1)
}for(;
!(h.getLengthInBits()>=8*j);
){h.put(d.PAD0,8);
if(h.getLengthInBits()>=8*j){break
}h.put(d.PAD1,8)
}return d.createBytes(h,p)
};
d.createBytes=function(x,u){for(var t=0,w=0,s=0,q=Array(u.length),m=Array(u.length),p=0;
p<u.length;
p++){var j=u[p].dataCount,o=u[p].totalCount-j,w=Math.max(w,j),s=Math.max(s,o);
q[p]=Array(j);
for(var l=0;
l<q[p].length;
l++){q[p][l]=255&x.buffer[l+t]
}t+=j;
l=g.getErrorCorrectPolynomial(o);
j=(new b(q[p],l.getLength()-1)).mod(l);
m[p]=Array(l.getLength()-1);
for(l=0;
l<m[p].length;
l++){o=l+j.getLength()-m[p].length,m[p][l]=0<=o?j.get(o):0
}}for(l=p=0;
l<u.length;
l++){p+=u[l].totalCount
}t=Array(p);
for(l=j=0;
l<w;
l++){for(p=0;
p<u.length;
p++){l<q[p].length&&(t[j++]=q[p][l])
}}for(l=0;
l<s;
l++){for(p=0;
p<u.length;
p++){l<m[p].length&&(t[j++]=m[p][l])
}}return t
};
v=4;
for(var g={PATTERN_POSITION_TABLE:[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],G15:1335,G18:7973,G15_MASK:21522,getBCHTypeInfo:function(h){for(var j=h<<10;
0<=g.getBCHDigit(j)-g.getBCHDigit(g.G15);
){j^=g.G15<<g.getBCHDigit(j)-g.getBCHDigit(g.G15)
}return(h<<10|j)^g.G15_MASK
},getBCHTypeNumber:function(h){for(var j=h<<12;
0<=g.getBCHDigit(j)-g.getBCHDigit(g.G18);
){j^=g.G18<<g.getBCHDigit(j)-g.getBCHDigit(g.G18)
}return h<<12|j
},getBCHDigit:function(h){for(var j=0;
0!=h;
){j++,h>>>=1
}return j
},getPatternPosition:function(h){return g.PATTERN_POSITION_TABLE[h-1]
},getMask:function(h,l,j){switch(h){case 0:return 0==(l+j)%2;
case 1:return 0==l%2;
case 2:return 0==j%3;
case 3:return 0==(l+j)%3;
case 4:return 0==(Math.floor(l/2)+Math.floor(j/3))%2;
case 5:return 0==l*j%2+l*j%3;
case 6:return 0==(l*j%2+l*j%3)%2;
case 7:return 0==(l*j%3+(l+j)%2)%2;
default:throw Error("bad maskPattern:"+h)
}},getErrorCorrectPolynomial:function(h){for(var l=new b([1],0),j=0;
j<h;
j++){l=l.multiply(new b([1,f.gexp(j)],0))
}return l
},getLengthInBits:function(h,j){if(1<=j&&10>j){switch(h){case 1:return 10;
case 2:return 9;
case v:return 8;
case 8:return 8;
default:throw Error("mode:"+h)
}}else{if(27>j){switch(h){case 1:return 12;
case 2:return 11;
case v:return 16;
case 8:return 10;
default:throw Error("mode:"+h)
}}else{if(41>j){switch(h){case 1:return 14;
case 2:return 13;
case v:return 16;
case 8:return 12;
default:throw Error("mode:"+h)
}}else{throw Error("type:"+j)
}}}},getLostPoint:function(u){for(var s=u.getModuleCount(),q=0,t=0;
t<s;
t++){for(var p=0;
p<s;
p++){for(var o=0,j=u.isDark(t,p),m=-1;
1>=m;
m++){if(!(0>t+m||s<=t+m)){for(var l=-1;
1>=l;
l++){0>p+l||s<=p+l||0==m&&0==l||j==u.isDark(t+m,p+l)&&o++
}}}5<o&&(q+=3+o-5)
}}for(t=0;
t<s-1;
t++){for(p=0;
p<s-1;
p++){if(o=0,u.isDark(t,p)&&o++,u.isDark(t+1,p)&&o++,u.isDark(t,p+1)&&o++,u.isDark(t+1,p+1)&&o++,0==o||4==o){q+=3
}}}for(t=0;
t<s;
t++){for(p=0;
p<s-6;
p++){u.isDark(t,p)&&!u.isDark(t,p+1)&&u.isDark(t,p+2)&&u.isDark(t,p+3)&&u.isDark(t,p+4)&&!u.isDark(t,p+5)&&u.isDark(t,p+6)&&(q+=40)
}}for(p=0;
p<s;
p++){for(t=0;
t<s-6;
t++){u.isDark(t,p)&&!u.isDark(t+1,p)&&u.isDark(t+2,p)&&u.isDark(t+3,p)&&u.isDark(t+4,p)&&!u.isDark(t+5,p)&&u.isDark(t+6,p)&&(q+=40)
}}for(p=o=0;
p<s;
p++){for(t=0;
t<s;
t++){u.isDark(t,p)&&o++
}}u=Math.abs(100*o/s/s-50)/5;
return q+10*u
}},f={glog:function(h){if(1>h){throw Error("glog("+h+")")
}return f.LOG_TABLE[h]
},gexp:function(h){for(;
0>h;
){h+=255
}for(;
256<=h;
){h-=255
}return f.EXP_TABLE[h]
},EXP_TABLE:Array(256),LOG_TABLE:Array(256)},e=0;
8>e;
e++){f.EXP_TABLE[e]=1<<e
}for(e=8;
256>e;
e++){f.EXP_TABLE[e]=f.EXP_TABLE[e-4]^f.EXP_TABLE[e-5]^f.EXP_TABLE[e-6]^f.EXP_TABLE[e-8]
}for(e=0;
255>e;
e++){f.LOG_TABLE[f.EXP_TABLE[e]]=e
}b.prototype={get:function(h){return this.num[h]
},getLength:function(){return this.num.length
},multiply:function(j){for(var m=Array(this.getLength()+j.getLength()-1),l=0;
l<this.getLength();
l++){for(var h=0;
h<j.getLength();
h++){m[l+h]^=f.gexp(f.glog(this.get(l))+f.glog(j.get(h)))
}}return new b(m,0)
},mod:function(j){if(0>this.getLength()-j.getLength()){return this
}for(var m=f.glog(this.get(0))-f.glog(j.get(0)),l=Array(this.getLength()),h=0;
h<this.getLength();
h++){l[h]=this.get(h)
}for(h=0;
h<j.getLength();
h++){l[h]^=f.gexp(f.glog(j.get(h))+m)
}return(new b(l,0)).mod(j)
}};
c.RS_BLOCK_TABLE=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]];
c.getRSBlocks=function(y,w){var u=c.getRsBlockTable(y,w);
if(void 0==u){throw Error("bad rs block @ typeNumber:"+y+"/errorCorrectLevel:"+w)
}for(var x=u.length/3,t=[],s=0;
s<x;
s++){for(var p=u[3*s+0],q=u[3*s+1],o=u[3*s+2],m=0;
m<p;
m++){t.push(new c(q,o))
}}return t
};
c.getRsBlockTable=function(h,j){switch(j){case 1:return c.RS_BLOCK_TABLE[4*(h-1)+0];
case 0:return c.RS_BLOCK_TABLE[4*(h-1)+1];
case 3:return c.RS_BLOCK_TABLE[4*(h-1)+2];
case 2:return c.RS_BLOCK_TABLE[4*(h-1)+3]
}};
r.prototype={get:function(h){return 1==(this.buffer[Math.floor(h/8)]>>>7-h%8&1)
},put:function(h,l){for(var j=0;
j<l;
j++){this.putBit(1==(h>>>l-j-1&1))
}},getLengthInBits:function(){return this.length
},putBit:function(h){var j=Math.floor(this.length/8);
this.buffer.length<=j&&this.buffer.push(0);
h&&(this.buffer[j]|=128>>>this.length%8);
this.length++
}};
"string"===typeof k&&(k={text:k});
k=a.extend({},{render:"canvas",width:256,height:256,typeNumber:-1,correctLevel:2,background:"#ffffff",foreground:"#000000"},k);
return this.each(function(){var u;
if("canvas"==k.render){u=new d(k.typeNumber,k.correctLevel);
u.addData(k.text);
u.make();
var s=document.createElement("canvas");
s.width=k.width;
s.height=k.height;
for(var q=s.getContext("2d"),t=k.width/u.getModuleCount(),p=k.height/u.getModuleCount(),o=0;
o<u.getModuleCount();
o++){for(var l=0;
l<u.getModuleCount();
l++){q.fillStyle=u.isDark(o,l)?k.foreground:k.background;
var m=Math.ceil((l+1)*t)-Math.floor(l*t),h=Math.ceil((o+1)*t)-Math.floor(o*t);
q.fillRect(Math.round(l*t),Math.round(o*p),m,h)
}}}else{u=new d(k.typeNumber,k.correctLevel);
u.addData(k.text);
u.make();
s=a("<table></table>").css("width",k.width+"px").css("height",k.height+"px").css("border","0px").css("border-collapse","collapse").css("background-color",k.background);
q=k.width/u.getModuleCount();
t=k.height/u.getModuleCount();
for(p=0;
p<u.getModuleCount();
p++){o=a("<tr></tr>").css("height",t+"px").appendTo(s);
for(l=0;
l<u.getModuleCount();
l++){a("<td></td>").css("width",q+"px").css("background-color",u.isDark(p,l)?k.foreground:k.background).appendTo(o)
}}}u=s;
a(u).appendTo(this)
})
}
})(window.jQuery||window.Zepto);
(function(e,a,c){a.gdt=a.gdt||{};
a.gdt.Utils=a.gdt.Utils||{};
var b=function(){var d=function(){var m=c(".montblanc-form").find("form");
m.attr("novalidate","novalidate")
};
var j=function(q){var n,m,p,o=document.cookie.split(";");
for(n=0;
n<o.length;
n++){m=c.trim(o[n].substr(0,o[n].indexOf("=")));
p=c.trim(o[n].substr(o[n].indexOf("=")+1));
if(m===q){return p
}}return false
};
var k=function(n,m){if(n&&n.data&&(n.type==="POST"||n.type==="post")){if(n.data instanceof Object){n.data._charset_="UTF-8"
}else{n.data+="&_charset_=UTF-8"
}}return c.ajax({type:n.type,url:n.url,data:n.data,dataType:n.dataType?n.dataType:"",context:c("body"),success:function(o,q,p){if(typeof n.callback==="function"){n.callback(o,q,p)
}if(m){m.find('input[type="submit"]').addClass("loader").prop("disabled",true)
}},error:function(p,q,o){if(typeof n.error==="function"){n.error(p,q,o)
}if(m){m.find('input[type="submit"]').addClass("loader").prop("disabled",true)
}}})
};
var f=function(){return c("body").data("cq-mode")==="DISABLED"
};
var l=function(){c("select").find("option:first-child").attr("disabled","disabled")
};
var h=function(){c(".montblanc-form").find("form").attr("autocomplete","off")
};
function g(){return(typeof a.ontouchstart==="undefined")?"click":"touchend"
}return{noValidate:d(),checkCookie:j,ajaxCall:k,noWCM:f(),preventOptionSelected:l,autoCompleteOff:h(),getEvent:g}
};
a.gdt.Utils=new b()
}(document,window,window.jQuery||window.Zepto));
(function(c,b){b.gdt=b.gdt||{};
b.gdt.Utils=b.gdt.Utils||{};
var a=function(){function f(h){if(b.console&&b.console.log){b.console.log(h)
}}function g(h){if(b.console&&b.console.warn){b.console.warn(h)
}}function e(h){if(b.console&&b.console.error){b.console.error(h)
}}function d(h){if(b.console&&b.console.log){b.console.log(JSON.stringify(h))
}}return{log:f,warn:g,error:e,logify:d}
};
b.gdt.Utils.Console=new a()
}(document,window));
(function(c,a){a.gdt=a.gdt||{};
a.gdt.Utils=a.gdt.Utils||{};
a.gdt.Utils.Objects=a.gdt.Utils.Objects||{};
function b(h,d){var g=d.split("."),e=h,f;
for(f=0;
f<g.length;
f++){if(e[g[f]]!==undefined){e=e[g[f]]
}else{e=undefined;
break
}}return e
}a.gdt.Utils.Objects.getPropByPathStr=b
}(document,window));
(function(c,a,b){a.gdt=a.gdt||{};
a.gdt.Utils=a.gdt.Utils||{};
var e=function(){var l=a.navigator.appVersion,j=b("body"),s,n,f;
function p(){var t=false;
if(b.os&&(b.os.phone||(/android/i.test(l)&&/mobile/i.test(l)))){t=true
}return t
}function d(){n=navigator.userAgent.toLowerCase().indexOf("firefox")>-1;
return n
}function h(){var t=false;
if(/android/i.test(a.navigator.appVersion)&&!/mobile/i.test(a.navigator.appVersion)){t=true
}return t
}function m(){var t=/android 2/i.test(l);
if(t){j.addClass("oldDroid")
}return t
}function g(){s=navigator.userAgent.match(/iPad/i)!==null;
if(s){j.addClass("ipad")
}return s
}function k(){var t=false;
if(b("html").is(".ie6, .ie7, .ie8, .ie9")){t=true
}return t
}function o(){return b.os&&(b.os.phone||b.os.ipod)&&b.os.ios&&parseInt(b.os.version,10)>6
}function q(){var t=b.os&&b.os.ios&&parseInt(b.os.version,10)===6;
if(t){j.addClass("iOS6")
}return t
}function r(){var t=screen.height,u=screen.width;
if(l.indexOf("Android")>=0&&((u===1280&&t===800)||(u===800&&t===1280)||(u===1024&&t===600)||(u===600&&t===1024))){f=true;
j.addClass("galaxy")
}}if(a.addEventListener){a.addEventListener("orientationchange",function(){if(a.orientation===0){r()
}},false)
}r();
return{isMobile:p(),isAndroidPad:h(),oldDroid:m(),isOldIE:k(),isiPad:g(),isGalaxy:f,isiOS7iPhone:o(),isiOS6:q(),isFirefox:d()}
};
a.gdt.Utils.Browser=new e()
}(document,window,window.jQuery||window.Zepto));
(function(e,a,c){a.gdt=a.gdt||{};
a.gdt.Utils=a.gdt.Utils||{};
var b=function(){function d(g){if(!g){a.gdt.Utils.Console.warn("No template options");
return
}var j=g.data,h=g.template,f;
h=h.replace(/\{\{(.+?)\}\}/g,function(m,l){var k=a.gdt.Utils.Objects.getPropByPathStr(j,l);
return k!==undefined?k:l+"-is-undefined"
});
f=c(h);
return f
}return{render:d}
};
a.gdt.Utils.Template=new b()
}(document,window,window.jQuery||window.Zepto));
(function(e,a,c){a.gdt=a.gdt||{};
a.gdt.Utils=a.gdt.Utils||{};
var b=function(){var h=(typeof a.ontouchstart==="undefined")?"click":"touchend",d,j,l;
var g=function(o){var u,v=c(".concat"),r,w,p="",s="",n;
if(o){o.preventDefault();
o.stopPropagation()
}var t=function(z){var x=this.contCatTxt||"",y=this.txt||"";
z.preventDefault();
z.stopPropagation();
x.html(y+' <a class="readLess" href="#">'+window.gdt.showless+"</a>");
c(".readLess").on(h,g)
};
function m(A){var z=c(A).data("concat"),x,y;
n=c(A).hasClass("toggle");
if(n){x=c(A).find("p").html()||c(A).html();
y=x.replace(window.gdt.showless,"");
s=c(A).find("p").empty();
p=y
}else{x=c(A).html()
}if(z&&n){if(y.length>z){u=y.substring(0,z)+'... <a class="readMore" href="#">'+window.gdt.readmore+"</a>"
}else{u=y
}c(A).find("p").html(u)
}else{if(x.length>z){u=x.substring(0,z)+"...";
c(A).html(u)
}}}for(var q=v.length-1;
q>=0;
q--){m(v[q])
}if(n){r={contCatTxt:s,txt:p};
w=t;
c(".readMore").on(h,c.proxy(w,r))
}return u
};
var k=function(m){m=m.replace(/([^a-zA-Z0-9_\- ])|^[_0-9]+/g,"").trim().toLowerCase();
m=m.replace(/([ -]+)([a-zA-Z0-9])/g,function(o,n,p){return p.toUpperCase()
});
m=m.replace(/([0-9]+)([a-zA-Z])/g,function(o,n,p){return n+p.toUpperCase()
});
return m
};
var f=function(n){var s=n,z=s.closest("form"),w,y,m,x,r;
d=z.data("messageLength")||200;
j=z.data("numCharacters")||50;
l=z.data("messageLines")||8;
function o(D){var B=j;
for(var C=0;
C<D.length;
C++){if(D[C].length<=B){continue
}var A=0,E=B;
while(A++<=B){if(D[C].charAt(A)===" "){E=A
}}D[C+1]=D[C].substring(E+1)+(D[C+1]||"");
D[C]=D[C].substring(0,E)
}return D
}function p(C){var B=c(C.target);
if(w<"0"||x<"0"||s.val().length>d||!(a.gdt.Validate.validateForm(z.attr("id")))){B.find(".errorMessage").show();
B.addClass("error");
return false
}var A=B[0].cardmessage.value;
B[0].encodedcardmessage.value=A.split("\n").join("$n$");
return
}function t(D,C,B){r=o(D);
var A=Number(l)-r.length;
y=(a.Event)?B.which:B.keyCode;
if(C>="0"&&A>="0"){c(".count").text(C);
c(".lineNum").text(A)
}else{if(y&&y===8||y===46){return true
}else{if(y&&y===13&&r.length>=A){return false
}else{B.preventDefault()
}}}return A
}function q(F){var A=F.split("\n"),D=j;
for(var C=0;
C<A.length;
C++){if(A[C].length<=D){continue
}var B=0,E=D;
while(B++<=D){if(A[C].charAt(B)===" "){E=B
}}A[C+1]=A[C].substring(E+1)+(A[C+1]||"");
A[C]=A[C].substring(0,E)
}return A.join("\n")
}function v(C){var A=s,B=C.target?C.target.value:C[0].value;
y=(a.Event)?C.which:C.keyCode;
C=C||c("textarea");
(function(E){setTimeout(function(){m=c(E).val();
var G=m.split("\n"),F=d-m.length,H;
w=F<0?0:F;
x=t(G,w,C);
if(m.length>=0){B=q(m);
H=C.target?C.target.value=B:C[0].value=B;
if(B.length>d&&(C.type!=="paste")){H=C.target?C.target.value=B.substring(0,d):C[0].value=B.substring(0,d)
}else{if(z.find(".errorMessage").css("display")==="block"){z.find(".errorMessage").hide();
z.removeClass("error")
}}}if(w<="0"&&x<="0"){if(y===8||y===46){return true
}else{return false
}}},100)
})(A);
if(x<="0"){var D=r[r.length-1];
if(y===8||y===46){return true
}else{if(x<="0"){if(x===0&&w>0&&D.length<j){return true
}else{return false
}}else{return true
}}}}if(s.length>0){var u=s.val();
u=u.replace(/\+/g," ");
s.val(u);
v(s)
}s.on("keypress paste",v);
z.on("submit",p)
};
return{concatText:g(),characterCount:f,toCamelCase:k}
};
a.gdt.Utils.TextTransforms=new b()
}(document,window,window.jQuery||window.Zepto));
(function(c,a,b){a.gdt=a.gdt||{};
a.gdt.Utils=a.gdt.Utils||{};
var e=function(){var g=(typeof a.ontouchstart==="undefined")?"click":"touchend",h=function(){var o=[],m=b(".hero-teaser").height()+b(".nav-container header").height(),l=0,k=b(".scroll-nav"),n=k.find("nav");
function j(){l=a.pageXOffset?a.pageXOffset:document.documentElement.scrollTop?document.documentElement.scrollTop:document.body.scrollTop;
for(var p=b("dd").length-1;
p>=0;
p--){o[p]={id:b("dd").eq(p).attr("id"),top:b("dd").eq(p).offset().top}
}if(l>=m){n.removeClass("static").addClass("fixed")
}else{n.removeClass("fixed").addClass("static")
}for(var q in o){if(o[q].top<=l){n.find("a").removeClass("medium");
n.find("#nav_"+o[q].id).addClass("medium")
}}}b(a).on("touchmove",j).on("scroll",j);
k.on(g,j)
};
var d=function(){var l=95,k=b(".btn-top");
function j(){if(a.scrollTo){a.scrollTo(0,0)
}}b(a).scroll(function(){if(b(this).scrollTop()>l){k.addClass("show-btn")
}else{k.removeClass("show-btn")
}});
k.on(g,j)
};
var f=function(){var m,r=b("#basket-summery-old"),q,j,k,n,p,l;
function o(){m=a.pageXOffset?a.pageXOffset:document.documentElement.scrollTop?document.documentElement.scrollTop:document.body.scrollTop;
r=b("#basket-summery-old");
l=b("#user_payment");
j=b(".nav-container").height();
k=b("#content").height();
p=b(".page-footer").height();
n=b(a).width();
q=k-r.height()-100;
if(l.length===0){if(m>0&&m<q&&n>=669){r.addClass("fixed").css("top",m)
}else{if(m===0||n<=669){r.removeClass("fixed").removeAttr("style")
}else{r.removeClass("fixed").css("top",q)
}}}}b(a).on("touchmove",o).on("scroll",o);
b(a).smartresize(o)
};
return{scrollNav:h(),scrollTopButton:d(),scrollBasket:f()}
};
a.gdt.Utils.Scroll=new e()
}(document,window,window.jQuery||window.Zepto));
(function(c,a){a.gdt=a.gdt||{};
a.gdt.Utils=a.gdt.Utils||{};
function b(){var h=a.location.search.substr(1),g=h.split("&"),d={},f,e;
for(e=0;
e<g.length;
e++){f=g[e].split("=");
d[f[0]]=f[1]
}return d
}a.gdt.Utils.queryParams=b()
}(document,window,window.jQuery||window.Zepto));
(function(e,b,c){b.gdt=b.gdt||{};
b.gdt.Utils=b.gdt.Utils||{};
var a=function(){var f=function(){c("#lightbox-content video").each(function(h){var j=c(this).attr("id")||"video"+h;
j="lightbox_"+j;
c(this).attr("id",j);
if(b.gdt.Utils.Browser.isiPad){c(this).removeAttr("controls")
}if(navigator.appVersion.indexOf("Chrome")!==-1&&navigator.appVersion.indexOf("Mobile")===-1){var k=c(this).find('source[type="video/mp4"]').attr("src");
c(this).find('source[type="video/mp4"]').attr("src",k+"?"+Date.now())
}videojs(j)
})
};
var g=function(){c("#lightbox-content video").each(function(){var h=c(this).attr("id");
videojs(h).dispose()
})
};
var d=function(){c("video").each(function(){c(this).removeAttr("controls")
})
};
return{setUpLightboxVideo:f,destroyLightboxVideo:g,removeControlsIpad:d}
};
b.gdt.Utils.Video=new a()
}(document,window,window.jQuery||window.Zepto));
(function(a,b){a.gdt=a.gdt||{};
a.gdt.Util=a.gdt.Util||{};
a.gdt.Util.QRCode=(function(){var g,f,e,h;
function d(j){g=j.data||"MTB: No data found.";
f=j.container||b("<div></div>");
e=j.height||150;
h=j.width||150
}function c(j){d(j);
f.qrcode({text:g,height:e,width:h})
}return{generateQRCode:c}
})()
}(window,window.jQuery||window.Zepto));
(function(a,b){a.gdt=a.gdt||{};
a.gdt.Util=a.gdt.Util||{};
a.gdt.Util.Timer=(function(){var c,e;
function d(g){c=(g.durationInMins||30)*60;
e=g.container||b("<div></div>")
}function f(j){d(j);
var l=c,g,k;
var h=setInterval(function(){g=parseInt(l/60,10);
k=parseInt(l%60,10);
g=g<10?"0"+g:g;
k=k<10?"0"+k:k;
e.text(g+":"+k);
l=l-1;
if(l<0){clearInterval(h)
}},1000)
}return{startTimer:f}
})()
}(window,window.jQuery||window.Zepto));
(function(e,a,b){a.gdt=a.gdt||{};
a.gdt.Utils=a.gdt.Utils||{};
var c=function(){var d=function(q){var w=16,p="[^aeiouAEIOU]{3}",l="[A-Za-z]{3}",m="[0-9LlMmNnPpQqRrSsTtUuVv]{2}",v="[AaBbCcDdEeHhLlMmPpRrSsTt]{1}",t="[0-7LlMmNnPpQqRrSsTtUuVv]{1}",r="[0-9LlMmNnPpQqRrSsTtUuVv]{1}",j="[A-Za-z]{1}",h="[0-9LlMmNnPpQqRrSsTtUuVv]{3}",f="[A-Za-z]{1}",g=new RegExp("^"+p+l+m+v+t+r+j+h+f+"$"),u=new Map(),s=new Map(),o=new Map(),n=false;
u.set("0",1);
u.set("1",0);
u.set("2",5);
u.set("3",7);
u.set("4",9);
u.set("5",13);
u.set("6",15);
u.set("7",17);
u.set("8",19);
u.set("9",21);
u.set("A",1);
u.set("B",0);
u.set("C",5);
u.set("D",7);
u.set("E",9);
u.set("F",13);
u.set("G",15);
u.set("H",17);
u.set("I",19);
u.set("J",21);
u.set("K",2);
u.set("L",4);
u.set("M",18);
u.set("N",20);
u.set("O",11);
u.set("P",3);
u.set("Q",6);
u.set("R",8);
u.set("S",12);
u.set("T",14);
u.set("U",16);
u.set("V",10);
u.set("W",22);
u.set("X",25);
u.set("Y",24);
u.set("Z",23);
s.set("0",0);
s.set("1",1);
s.set("2",2);
s.set("3",3);
s.set("4",4);
s.set("5",5);
s.set("6",6);
s.set("7",7);
s.set("8",8);
s.set("9",9);
s.set("A",0);
s.set("B",1);
s.set("C",2);
s.set("D",3);
s.set("E",4);
s.set("F",5);
s.set("G",6);
s.set("H",7);
s.set("I",8);
s.set("J",9);
s.set("K",10);
s.set("L",11);
s.set("M",12);
s.set("N",13);
s.set("O",14);
s.set("P",15);
s.set("Q",16);
s.set("R",17);
s.set("S",18);
s.set("T",19);
s.set("U",20);
s.set("V",21);
s.set("W",22);
s.set("X",23);
s.set("Y",24);
s.set("Z",25);
o.set(0,"A");
o.set(1,"B");
o.set(2,"C");
o.set(3,"D");
o.set(4,"E");
o.set(5,"F");
o.set(6,"G");
o.set(7,"H");
o.set(8,"I");
o.set(9,"J");
o.set(10,"K");
o.set(11,"L");
o.set(12,"M");
o.set(13,"N");
o.set(14,"O");
o.set(15,"P");
o.set(16,"Q");
o.set(17,"R");
o.set(18,"S");
o.set(19,"T");
o.set(20,"U");
o.set(21,"V");
o.set(22,"W");
o.set(23,"X");
o.set(24,"Y");
o.set(25,"Z");
if(q&&q.length==w&&g.test(q)){var k=0;
for(var x=0;
x<w-1;
++x){if(((x+1)%2)>0){k+=u.get(q.charAt(x).toUpperCase())
}else{k+=s.get(q.charAt(x).toUpperCase())
}}n=(o.get(k%26))==q.slice(-1).toUpperCase()
}return n
};
return{validateFiscalCode:d}
};
a.gdt.Utils.FiscalValidation=new c()
}(document,window,window.jQuery));
(function(c,a,b){b.fn.backgroundSwap=function(){return this.each(function(f,j){var g=b(j),h=false;
function e(){if(h){h=false;
return
}h=false;
g.addClass("product-details-show");
b(".product-details-show").not(g).removeClass("product-details-show")
}function d(){g.removeClass("product-details-show")
}g.on("mouseenter",e);
g.on("touchend",e);
g.on("touchmove",function(){h=true
}).on("mouseleave",d)
})
}
}(document,window,window.jQuery||window.Zepto));
(function(e,a,c){a.gdt=a.gdt||{};
var b=function(){var o,m,j;
function n(){return o
}function f(){return m
}function g(){return c.cookie("device")
}function l(){return c.cookie("device",m==="tablet"?"mobile":m,{path:"/",domain:a.gdt.domainName})
}function k(){o=e.body&&e.body.clientWidth?e.body.clientWidth:1024;
console.log("hello",o);
if(o>=1025){c.cookie("device","desktop",{path:"/",domain:a.gdt.domainName})
}else{c.cookie("device","mobile",{path:"/",domain:a.gdt.domainName})
}}function p(){o=e.body&&e.body.clientWidth?e.body.clientWidth:1024;
if(o>=768){c.cookie("device","desktop",{path:"/",domain:a.gdt.domainName})
}else{c.cookie("device","mobile",{path:"/",domain:a.gdt.domainName})
}}function d(){o=e.body&&e.body.clientWidth?e.body.clientWidth:1024;
if(o>=1024){m="desktop"
}else{if(o>=768){m="tablet"
}else{m="mobile"
}}return m
}function h(){clearTimeout(j);
j=setTimeout(function(){d();
l()
},200)
}if(window.addEventListener){window.addEventListener("orientationchange",h,false);
c(window).smartresize(h)
}else{c("window").on("orientationchange resize",h)
}d();
l();
return{getSize:n,getBreakpoint:f,getCookie:g,setEUDeviceCookie:k,setCNDeviceCookie:p}
};
a.gdt.Browsersize=new b()
}(document,window,window.jQuery||window.Zepto));
(function(c,a,b){b.fn.accordion=function(d){return this.each(function(h,j){var p=b(j),m=p.find("h2"),e=p.find("h2 > button"),k=p.find("h2 + div"),g=[],n=false,f={h2:null,div:null};
function l(q){if(window.scrollTo&&window.gdt.Utils.Browser.isMobile&&!q.parents("#lightboxPanel").length&&q.length>1){window.scrollTo(0,q.offset().top-b("header.mobile-navigation").height())
}}function o(s){var r=b(s),v=r.find("button"),q=r.next("div"),u=b("#basket-summery .shipping-basket section h2").find(".total-section"),t=r.parent().find("div").index(q);
e.attr({"aria-expanded":"false",tabindex:"-1"});
if(r.hasClass("open")){r.removeClass("open").addClass("closed").blur().find(".icon-arrow-up").removeClass("icon-arrow-up").addClass("icon-arrow-down");
u.show();
q.removeClass("open").addClass("closed").removeAttr("style");
f={h2:null,div:null};
p.trigger("accordion",["closed",t])
}else{if(f.h2&&f.div){f.h2.removeClass("open").addClass("closed").find(".icon-arrow-up").removeClass("icon-arrow-up").addClass("icon-arrow-down");
f.div.removeClass("open").addClass("closed").removeAttr("style");
f.div.removeAttr("aria-hidden");
p.trigger("accordion",["closed",r.parent().find("div").index(f.div)])
}r.addClass("open").removeClass("closed").find(".icon-arrow-down").removeClass("icon-arrow-down").addClass("icon-arrow-up");
v.attr({"aria-expanded":"true"});
v.focus();
q.attr({"aria-hidden":"false"});
u.hide();
q.addClass("open").removeClass("closed").css("height",g[t]);
q.find("div").removeClass("closed").removeAttr("tabindex");
f={h2:r,div:q};
p.trigger("accordion",["opened",t]);
l(r)
}}p.addClass("enhance").find("section").addClass("enhance");
k.each(function(r){var s=b(this),q;
if(d){q=s.height()+20;
g[r]=220>q?220:q
}else{g[r]="auto"
}s.attr("tabindex",0).addClass("closed")
});
m.attr("tabindex",0).addClass("closed");
e.attr({"aria-expanded":"false",tabindex:"-1"});
m.on("touchmove",function(){n=true
}).on("click",function(){n=false;
o(this)
});
m.on("keypress",function(q){if(q.keyCode===32||q.keyCode===13){o(q.target)
}})
})
}
}(document,window,window.jQuery||window.Zepto));
(function(g,b,f){var e;
function a(){var d=b.gdt.Utils.ajaxCall({type:"GET",url:b.gdt.userInteractionsUrl+"?cachebust="+new Date().getTime(),callback:function(h){e=h;
f("body").trigger("userinteractionsdata")
}});
return d
}function c(){a();
return{update:a,data:function(){return e
}}
}b.gdt=b.gdt||{};
b.gdt.UserInteractions=new c()
}(document,window,window.jQuery||window.Zepto));
(function(f,a,e){var b=1,c=9;
e.fn.quantityControl=function(){return this.each(function(m,l){var n=(typeof window.ontouchstart==="undefined")?"click":"touchend",d=e(l),p=d.find(".plus"),q=d.find(".minus"),r=d.find(".quantity-value"),g,k=r.attr("min")&&r.attr("min").length?parseInt(r.attr("min"),10):b,j=r.attr("max")&&r.attr("max").length?parseInt(r.attr("max"),10):c;
function o(s){s.preventDefault();
s.stopPropagation();
g=parseFloat(r.val());
if(g<j){g++;
r.val(g);
r.trigger("change")
}else{return
}}function h(s){s.preventDefault();
s.stopPropagation();
g=parseFloat(r.val());
if(g>k){g--;
r.val(g);
r.trigger("change")
}else{return
}}p.on(n,o);
q.on(n,h);
r.on("keypress",function(s){s.preventDefault();
s.stoppropagation()
})
})
}
}(document,window,window.jQuery||window.Zepto));
(function(c,a){var b=b||{};
b.comp=b.comp||{};
b.comp.captcha=b.comp.captcha||{};
b.comp.captcha.aemCaptcha=(function(){var e={captchaRow:".form-aemcaptcha-row",captchaTokenHdnInp:".form-aemcaptcha-token",captchaImage:".form-aemcaptcha-img",captchaRefreshBtn:".form-aemcaptcha-refresh",captchaInput:".form-aemcaptcha-input",},f={click:(typeof window.ontouchstart==="undefined")?"click":"touchend",};
function g(p){var m=c(p.currentTarget||p.target),k=m.closest(e.captchaRow),n=k.find(e.captchaImage),r=k.find(e.captchaTokenHdnInp),q=k.find(e.captchaInput),l=m.data("url"),o=l.replace(/\.[^/.]+$/,".json");
c.get(o).done(function(t){var s=t.token,u=l+"?token="+s;
r.val(s);
n.attr({src:u});
q.val("").focus()
})
}function j(k){k.on(f.click,e.captchaRefreshBtn,g)
}function h(l){var k=c(l);
if(!k.find(e.captchaRow).length){return
}j(k)
}return{init:h}
})();
var d=c(document).find("div.form-layout form");
c.each(d,function(e,f){b.comp.captcha.aemCaptcha.init(f)
})
}($,window));
(function(e,b,c){var a=(function(){var Z=c("html"),U=c("body"),l=c("#content"),J=c("#baidu-map-container"),h,E,C={},s=(typeof window.ontouchstart==="undefined")?"click":"touchend",R="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAG4AAAB0CAMAAABTyPc0AAAAYFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAwMAAAAAAAAAAAAAAAD///8iIiITExNfX1/S0tL19fW6urp8fHzj4+M+Pj6kpKSTk5OptP20AAAAE3RSTlMA8AucVyRiawMWS99AiDT8xrB2i2/GFgAAA4lJREFUeAHN2e2WsygMAGBAQEAENFb7Ob3/u9w/u747M5LamJ7d5wZyEpKArdjDmxS11jF58VkujU2RsJKlGZMTH6HsIGGDHLQS3GIjoUo2kbWIuoMXimYr6hoM1WnBwRTYqZjjdewz7JZ7x5fa5xPUEt4kgyAbgWAUNK4Bkp4WbQCixnHnhmvE23pAsNezhUOseEvMcIhM4g2+g4M6JfYbAMfbLhoYBLGT6oBBp/hngGGb+QwspBd7NMCk508OIxXHrTMvt+fX87acOE7PdYDJy3n6x/k2A6oTLwXALPfp3y43QMVDjTJfp5/Op0OrxUmoOt2n3+4PrFmcwEU82oYLll8ib5R8nrbdZ3pvFqh5TjVfUDVQj+401dWPTwqUgZqvqe4KVZ42dfNlQtS7JdA22DJh6tPe0hoTqyVWzZ62U84T5kLcKwNUXCbUjEwCIVyecCdauPLfh/tkMdlb5f80CJZ7zLXAJO4llgRGZeT+IdRSOuJ9d7pQLqBCvs1vU82TfpsnqLpO284ZqhL9JTZvz979dORd2wAWD49G+CiJUJd/D/t1BkQ6+I3wOH9PbQFMd/zbdble1syWfPz71cAL+bHcnrflkeGF7Pl/5UAUa63WOoSYkjFeKYc3y0F9+4fVISazGbAAi679zlodklH4LUTXtL9ZHZN3+CzQyHabDT9rOgKDoa3R8XtJvWRIbmyrbDAOGXVicghtFJIeLTk8nkPSIyaHCN4h6RGSw9mkCM2JJIezwYs/lOSfOez0WoaFgrLGMa2Wrt3D4L8KUJPDs1uVzyanf6zqxHDPIYLi+VG6tPtq+TOcl3wTjmyVVcvXJ8hSWbnyqT6x0SOvJP4+8Tx/YRTCENC7RY6ENqG/yhriua0Kd5/o5ESdybBbHvfdO5ie81Jto3fEDz5CKXXy4pXINXI2GLFDwzNyNnH+9dvRTw0vJ6WUYb1veMo50FuEUM5u95Nyj3CglHr9nmMr54DVEQ9GKGeHfDkiwYjdmftKMHyuqeUcSNsY57v3ShmMd4LOxfxGKUPy4hjX7y2l1dGLo5wveCmx1wGBSxJ9DK3BlBMc1PjyMWSTUYKLH/BLTgfjBB9nOuTg8NuaQulcnYHgnRPMfLM9AzZSpxrny8bB6ZiUQDFMgxxZGgSnbF4PDvl4Yj++4e8zw4eaa5mVjd9dP3d8crT4Vc3H6Zx7fBGz8n2TGBbxX/E+/v6WmTJ0AAAAAElFTkSuQmCC",p="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAABCCAYAAADZhL+bAAAACXBIWXMAAAsTAAALEwEAmpwYAAA5+GlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxMzIgNzkuMTU5Mjg0LCAyMDE2LzA0LzE5LTEzOjEzOjQwICAgICAgICAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIKICAgICAgICAgICAgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIgogICAgICAgICAgICB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIKICAgICAgICAgICAgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOmV4aWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vZXhpZi8xLjAvIj4KICAgICAgICAgPHhtcDpDcmVhdG9yVG9vbD5BZG9iZSBQaG90b3Nob3AgQ0MgMjAxNS41IChNYWNpbnRvc2gpPC94bXA6Q3JlYXRvclRvb2w+CiAgICAgICAgIDx4bXA6Q3JlYXRlRGF0ZT4yMDE4LTAzLTEyVDIyOjI1OjQ2KzA1OjMwPC94bXA6Q3JlYXRlRGF0ZT4KICAgICAgICAgPHhtcDpNb2RpZnlEYXRlPjIwMTgtMDMtMTZUMTA6MDQ6MzQrMDU6MzA8L3htcDpNb2RpZnlEYXRlPgogICAgICAgICA8eG1wOk1ldGFkYXRhRGF0ZT4yMDE4LTAzLTE2VDEwOjA0OjM0KzA1OjMwPC94bXA6TWV0YWRhdGFEYXRlPgogICAgICAgICA8ZGM6Zm9ybWF0PmltYWdlL3BuZzwvZGM6Zm9ybWF0PgogICAgICAgICA8cGhvdG9zaG9wOkNvbG9yTW9kZT4zPC9waG90b3Nob3A6Q29sb3JNb2RlPgogICAgICAgICA8eG1wTU06SW5zdGFuY2VJRD54bXAuaWlkOjMxZjQyNzU5LTMzMDYtNDk2ZC05MGQyLTVlMWIzY2JhOWNmNDwveG1wTU06SW5zdGFuY2VJRD4KICAgICAgICAgPHhtcE1NOkRvY3VtZW50SUQ+YWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOmI1ZjFmMzYwLTY5NjEtMTE3Yi04ZTM3LWI1MjQ1MWUzYTA3MjwveG1wTU06RG9jdW1lbnRJRD4KICAgICAgICAgPHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD54bXAuZGlkOmE5ZTQwZDdhLThmY2YtNDJjZS1hZDkzLTgxMzM5NWJmNzM2NTwveG1wTU06T3JpZ2luYWxEb2N1bWVudElEPgogICAgICAgICA8eG1wTU06SGlzdG9yeT4KICAgICAgICAgICAgPHJkZjpTZXE+CiAgICAgICAgICAgICAgIDxyZGY6bGkgcmRmOnBhcnNlVHlwZT0iUmVzb3VyY2UiPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6YWN0aW9uPmNyZWF0ZWQ8L3N0RXZ0OmFjdGlvbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0Omluc3RhbmNlSUQ+eG1wLmlpZDphOWU0MGQ3YS04ZmNmLTQyY2UtYWQ5My04MTMzOTViZjczNjU8L3N0RXZ0Omluc3RhbmNlSUQ+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDp3aGVuPjIwMTgtMDMtMTJUMjI6MjU6NDYrMDU6MzA8L3N0RXZ0OndoZW4+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDpzb2Z0d2FyZUFnZW50PkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE1LjUgKE1hY2ludG9zaCk8L3N0RXZ0OnNvZnR3YXJlQWdlbnQ+CiAgICAgICAgICAgICAgIDwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpIHJkZjpwYXJzZVR5cGU9IlJlc291cmNlIj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OmFjdGlvbj5zYXZlZDwvc3RFdnQ6YWN0aW9uPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6aW5zdGFuY2VJRD54bXAuaWlkOjMxZjQyNzU5LTMzMDYtNDk2ZC05MGQyLTVlMWIzY2JhOWNmNDwvc3RFdnQ6aW5zdGFuY2VJRD4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OndoZW4+MjAxOC0wMy0xNlQxMDowNDozNCswNTozMDwvc3RFdnQ6d2hlbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OnNvZnR3YXJlQWdlbnQ+QWRvYmUgUGhvdG9zaG9wIENDIDIwMTUuNSAoTWFjaW50b3NoKTwvc3RFdnQ6c29mdHdhcmVBZ2VudD4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OmNoYW5nZWQ+Lzwvc3RFdnQ6Y2hhbmdlZD4KICAgICAgICAgICAgICAgPC9yZGY6bGk+CiAgICAgICAgICAgIDwvcmRmOlNlcT4KICAgICAgICAgPC94bXBNTTpIaXN0b3J5PgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPgogICAgICAgICA8dGlmZjpYUmVzb2x1dGlvbj43MjAwMDAvMTAwMDA8L3RpZmY6WFJlc29sdXRpb24+CiAgICAgICAgIDx0aWZmOllSZXNvbHV0aW9uPjcyMDAwMC8xMDAwMDwvdGlmZjpZUmVzb2x1dGlvbj4KICAgICAgICAgPHRpZmY6UmVzb2x1dGlvblVuaXQ+MjwvdGlmZjpSZXNvbHV0aW9uVW5pdD4KICAgICAgICAgPGV4aWY6Q29sb3JTcGFjZT42NTUzNTwvZXhpZjpDb2xvclNwYWNlPgogICAgICAgICA8ZXhpZjpQaXhlbFhEaW1lbnNpb24+MzM8L2V4aWY6UGl4ZWxYRGltZW5zaW9uPgogICAgICAgICA8ZXhpZjpQaXhlbFlEaW1lbnNpb24+NjY8L2V4aWY6UGl4ZWxZRGltZW5zaW9uPgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAKPD94cGFja2V0IGVuZD0idyI/PqiCuDcAAAAgY0hSTQAAeiUAAICDAAD5/wAAgOkAAHUwAADqYAAAOpgAABdvkl/FRgAABkZJREFUeNrsmW9sE/cZxz935/vjK3cEYowtRYaFkqggpkRuJRCV8mYwbdPEm4i+GG/6AnhD/6JK1dautKhqRV8UMalS1qYb0tgq1qFBt0UIJCZKS6VGSsFQ6qZKCmVMSdOECw32ne/svujZci+X1HacrS/ySCfZ59/97nPP/X7P830eC6VSif+3ifwAbAliCWIJYgliCWIJYgmiURP27NlTz/i1wINAGlgPqEARkIAZ4FPgEvAeMFrrpJEax6wBeoFfAg8AyjzjHeBD4B3gbeA64C4EIgY8AjwOmDU+mAJs9Y9fA4eB3wETjayJnwODwG/rAAia6V//IfCLeiEeA076r2GWlXWpKIqVo/r8HGvppO/Rml7HU8ChuW4uSRKKolAqlXAch2KxiCAIyLJMJBKhUChQKBQQBCF4uQS8CsjAK/NB/GouAEEQ0DSNfD7PyMgId+7cQRCEys08z0PXdZLJJKZpYts2nueFwRwCbgHHwiB+DPSFuisSQRAERkZGsCyLZDLJli1bWLduHZqm4Xkeo6OjXLlyhevXryNJEu3t7SiKQqFQCJuyD8gAl6shTOA54J6g+xVFwbZthoeHaWtrY/fu3WzduhXTNJFluTLWdV1mZmbIZDIcP36coaEh1qxZw4oVK7BtO+iRe/z7PQxMS+l0GuAnwMEggKqq3L17l2w2y7Zt2zhw4ABdXV3ouo4kSd9d4aKIpmmkUil6enqQZZnz588jiiLLly/Hdd0gyH1+UBuW0um0AbwEdAQ94HkeV69eZceOHezfv59ly5bVtC9lWaa7uxvDMDh9+jTRaBTDMMJAlgPviMCPgJ8FF6Esy2QyGTZv3sy+fftQVbXuINHb28uuXbu4du0arusSiczajD8FUqL/Qar2gqZp3Lx5k0gkwt69e9F1veHk1NvbS2dnJ9lsFlVVg7EkAmwTgfuDXhAEgRs3brB9+3Y6OzsXlCFXrVrFzp07mZ6eJpfLzVpLwGYRuDe4HS3LQpZlenp6mpKqN2zYQCKRYGxsrBLoqqxDBNqCEXFqaop4PE4ymWwKRCKRoK2tjdu3b4cFr9UiIARfh23b6LpONBptCoSqqrS0tFQiawBEFoFF75KUSqXKjcOSnOiLkIoXyjEin8+Tz+ebAuE4DpZlIQhC2MK8K/rJpGKe52GaJhMTE4yPjzcFYmJiglu3bmEYRpg3/iP6uvA7EC0tLdi2zcWLF5sCMTw8zNjYGLFYLCzNfyIC71efKRaLiKJIIpHgzJkzjI6OLgjAsixOnDiBqqoYhoHnecEhF0Tg34AX3B2pVIqpqSmOHj2K4zgNQwwMDDA4OEhHR0fYPDngXRG4CQwEveF5Hhs3buTUqVMcO3asIYBz585x5MgR1q9fj67ruO4s0f1P4L9SOp12ABt4qNobruui6zqmaTIw8C3jpk2bwlb3nB44ePAgra2tpFIpZmZmwgLVU8DHZT2RA3YCRjVIoVDANE2i0Shnz54lm80Sj8eJx+MVcRu0bDZLf38/fX19xGIx2tvbyeVyYUNHfKk3Xc6tnwNHgJeD0TOXy9Ha2oqiKAwNDXH58mW6urro7u4mmUwSjUZxHIfJyUkuXbrE4OAglmWxdu1aVq9eTS6Xq4jhgB0GvgiWgV3AB35pFypUisUik5OTWJaFbdvIsoyiKLiuW/luGAYrV65E0zQcx5mrDJj2y8lMUOh+BLwGPDFX1BNFkVgsVtGN1SJWkiQ0TSMSieB5Hvl8Puzpy/ZaGSBM8v8N2OfXBrMkf6lUqgQbVVVnqa3y7+Xxc4UO4MR8Fdh7wBu1JKRisTjrqPEfg36/LJy3DPwzcGeREuqXwFu11KIXgDcXCeKPQS/MVxD319PkqNGuAb+vpyrPAH9pMsRx4LN6+xOH/P5EM+x9v8Cqu0liVVfOCzAX+IOfnxrq3h0Gzi4Q4sz3bftaWojP+1urERsHXmhGH/MC8NcGIY76+agpzdTn/dRbj30MvNjMju448CxQqFXlA8/4i7upbeW3gb/XOPYt4B+L0dt2gKeBr75n3Bjwmzq8VneDfcTvcc5nj/rieVG7/Cf9EDxXaP5XvRM2AvG1v/enQhbvAf/3RYcAuAo8GTi338+U/K8gytqgrDteB/7U6EQRFmZvAik/MjZs3wwAEew84F3ihgEAAAAASUVORK5CYII=",I="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAtCAQAAACKL8qfAAAACXBIWXMAAAsTAAALEwEAmpwYAAADGGlDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjaY2BgnuDo4uTKJMDAUFBUUuQe5BgZERmlwH6egY2BmYGBgYGBITG5uMAxIMCHgYGBIS8/L5UBFTAyMHy7xsDIwMDAcFnX0cXJlYE0wJpcUFTCwMBwgIGBwSgltTiZgYHhCwMDQ3p5SUEJAwNjDAMDg0hSdkEJAwNjAQMDg0h2SJAzAwNjCwMDE09JakUJAwMDg3N+QWVRZnpGiYKhpaWlgmNKflKqQnBlcUlqbrGCZ15yflFBflFiSWoKAwMD1A4GBgYGXpf8EgX3xMw8BSMDVQYqg4jIKAUICxE+CDEESC4tKoMHJQODAIMCgwGDA0MAQyJDPcMChqMMbxjFGV0YSxlXMN5jEmMKYprAdIFZmDmSeSHzGxZLlg6WW6x6rK2s99gs2aaxfWMPZ9/NocTRxfGFM5HzApcj1xZuTe4FPFI8U3mFeCfxCfNN45fhXyygI7BD0FXwilCq0A/hXhEVkb2i4aJfxCaJG4lfkaiQlJM8JpUvLS19QqZMVl32llyfvIv8H4WtioVKekpvldeqFKiaqP5UO6jepRGqqaT5QeuA9iSdVF0rPUG9V/pHDBYY1hrFGNuayJsym740u2C+02KJ5QSrOutcmzjbQDtXe2sHY0cdJzVnJRcFV3k3BXdlD3VPXS8Tbxsfd99gvwT//ID6wIlBS4N3hVwMfRnOFCEXaRUVEV0RMzN2T9yDBLZE3aSw5IaUNak30zkyLDIzs+ZmX8xlz7PPryjYVPiuWLskq3RV2ZsK/cqSql01jLVedVPrHzbqNdU0n22VaytsP9op3VXUfbpXta+x/+5Em0mzJ/+dGj/t8AyNmf2zvs9JmHt6vvmCpYtEFrcu+bYsc/m9lSGrTq9xWbtvveWGbZtMNm/ZarJt+w6rnft3u+45uy9s/4ODOYd+Hmk/Jn58xUnrU+fOJJ/9dX7SRe1LR68kXv13fc5Nm1t379TfU75/4mHeY7En+59lvhB5efB1/lv5dxc+NH0y/fzq64Lv4T8Ffp360/rP8f9/AA0ADzT6lvFdAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAMrSURBVHjanJZriFVVGIafGWWO0hw9Z5qCQIqCoQwi6aIEYYN2AavpR3mLDCsooV9qpIX1I4QJREiNbmoXSTIq7IJ2pyAUA6UihsDRhqlMaShMpyxzePqxZs/stc+ec7bzrp/fe57z7bXW960P8jWLx9lBDwMc5wh7eYGHuZiCamUF+zFnnWE3tzYG3Elf8pMpXus8u5zr9DToHTrqATYF22SX+qFHTDTkQV9yTgI5RddYgHeD5UH7zNcnXp9g1uQBdiK2+7H1tSaB3JcFPIN4oYdsrJcTyMw0YDbiOfZaTBsC4jcmJIBmfkT8yOJaHCBPJoj7ERfX2P7xPZ9ytRv9Jic2VeQvKgHxNTZ7LGPa6iWp23CHhzPxdSGyHKAD8a6M4TERy1atWrFFbPfbyDHoZJE9AMsQd0bh18WS51odWW3iRZ6MXPPDpT8PtmHJgVTohBdIBAgLn4gQm8On3AYHcEYU2i5OqQG0idM9lfLtGzmVozgvQiyXGkDVqpOcZE/K12eTyHNwEhdEiAfEthxEWdyX8h21JLINBrArQqwSKzmIFls9mPL95ASRzbAXL40Q748cZ3YvrvK/lO+LsBcr4Vkkqo7TXpZzIlPFDdFfrQ2I62AR4qZMXwiFP5pBVbzGocg1S+QPSlDhX5yZuZ3Pi1iyYptlEa9IdTHV3pDDG6FG3kIy11e/tDPsuHi+K6IboboyxG4PiE7Eu3NK+ju3u8UP/L0m8neo1F+YmJT7D9iUSbS+1occHhntWksQHyoMOGO7yCDlUUQT/dhsf0HE0yGHtXH7XYI4vxDgROgUg7Rme/ghxP0FEMtCDo/WviO3IF7dENCbdO+JeY/Rp4ivNkDMDogF+Q9iB2Jrpr3F2hEAe8Z+ltch3jsm4E8rAXF5vbe9H/HzMRCLAqC7/nzRiTgtU5NBuwPg1/yNTOuVMCBkdTrcSLmh8ZxT4hjiZxnEPQGwpdi0dXNoOIMpwNsB8DMtRUe2FxEXjgAGhtsON1JYJXoRXxtG3FToJLK6ErHZw2p3AHzPWWsV4lx3BcAQ0xiHvkpNm0sZl8r0DAPeZNwq083W2vEw1v8DAHOtGQh+MrZjAAAAAElFTkSuQmCC",q=c("#customImage"),ai=c(".mtb-boutique-finder").find("form"),M=c(".store-locator-autosearch"),W=ai.find("input[type=search]"),A=c("#storesSearchTemplate").clone(),ao=c(".mtb-boutique-finder").find("#results"),ah=c(".boutique-details"),z=ah.find(".boutique-details-content"),ab=c(".boutique-details").find(".info-window-close-btn"),am=c(".show-locations"),o=null,H,ad=[],k,P,j={},al="",av=[],ae=[],K,w,m,at,ac,f=false,L={infoWindow:"hide-info-window"};
function v(ax){var aw=b.MontBlancSearchServiceUrl+((b.MontBlancSearchServiceUrl.indexOf("?")===-1)?"?":"&"),ay=[];
if(ax.searchtype){ay.push("f="+ax.searchtype)
}if(ax.id){ay.push("sap_number="+ax.id)
}if(ax.lat&&ax.lng){ay.push("lat="+ax.lat);
ay.push("lng="+ax.lng)
}if(ax.radius){ay.push("r="+ax.radius)
}if(ax.fulltext&&ax.country){if(!ax.searchtype){ay.push("f=bran")
}ay.push("cou="+ax.country+"&cityfull="+ax.fulltext)
}else{if(ax.country){ay.push("cou="+ax.country)
}if(ax.fulltext){if(!ax.searchtype){ay.push("f=bran")
}ay.push("cityfull="+ax.fulltext);
ay.push("lat="+ax.lat);
ay.push("lng="+ax.lng)
}}return aw+ay.join("&")
}function D(ax,az){var aw;
if(ax.id){aw=v({searchtype:"bid",id:ax.id})
}if(ax.lat&&ax.lng){aw=v({searchtype:"geo",lat:ax.lat,lng:ax.lng,radius:ax.radius})
}if(ax.country){aw=v({searchtype:"bran",country:ax.country})
}if(ax.fulltext){aw=v({searchtype:"bran",fulltext:ax.fulltext})
}if(ax.fulltext&&ax.country){aw=v({searchtype:"bran",fulltext:ax.fulltext,country:ax.country})
}if(!ax.id&&!ax.fulltext&&!ax.lat&&!ax.country){aw=v({searchtype:"geo"})
}var ay={url:aw,dataType:"jsonp",type:"GET",callback:function(aA){az(aA,ax.skipbounds)
},error:function(aC,aA,aB){b.gdt.Utils.Console.warn("Map not found",aA+" ("+aB+")");
b.gdt.Utils.Console.log("mapRequest",aC)
}};
b.gdt.Utils.ajaxCall(ay)
}function u(ax){c(document.body).trigger("receivedBtqResults",ax);
var az=ax.branches,aw=[];
for(var ay=0;
ay<(az||{}).length;
ay++){aw.push({bid:"b"+az[ay].id,location:new b.BMap.Point(parseFloat(az[ay].longitude),parseFloat(az[ay].latitude)),type:parseInt(az[ay].type.id,10)});
j["b"+az[ay].id]={name:az[ay].name,address:[az[ay].adress_1,az[ay].adress_2,az[ay].adress_3,az[ay].adress_4],city:az[ay].city.name||"",continent:(az[ay].continent||{}).name||"",country:(az[ay].country||{}).name||"",lang:az[ay].lang,tel:az[ay].phone,fax:az[ay].fax,lat:az[ay].latitude,lng:az[ay].longitude,open:[az[ay].time_open_1,az[ay].time_open_2,az[ay].time_open_3,az[ay].time_open_4,az[ay].time_open_5,az[ay].time_open_6,az[ay].time_open_7],type:parseInt(az[ay].type.id,10),bid:az[ay].id,onlinestatus:az[ay].click_collect||"0"}
}aw.sort(function(aB,aA){return aB.type-aA.type
});
return aw
}function Q(aw){aw.preventDefault();
if(W.val()!==""){W.val("")
}W.focus()
}function t(){H.clearOverlays();
if(ac&&av.length>0){ac.removeMarkers(av);
for(var aw=0;
aw<av.length;
aw++){H.removeOverlay(av[aw])
}}av=[]
}function ak(aA,az,aw){var ay=new b.BMap.Icon(R,new b.BMap.Size(110,116),{imageSize:new b.BMap.Size(50,46),anchor:new b.BMap.Size(10,32),infoWindowAnchor:new b.BMap.Size(10,0)});
var ax=new b.BMap.Marker(az,{icon:ay,id:aA.bid,title:aA.name||""});
av.push(ax);
ad.push(az);
H.addOverlay(ax);
H.setCenter(az);
(function(){var aC=aA;
var aD=ax;
var aB=av[aw];
aD.addEventListener(s,function(){var aE=aB.getPosition();
M.find(am).toggleClass("mtb-hide",(ao.find(".result").length<=1));
var aF=av.idx["b"+aC.bid];
aF.boutiqueOpen();
k=aF.point;
H.centerAndZoom(k,19);
U.trigger("icon:pin:clicked",{countryBoutique:aC.country,citySelected:aC.city,boutiqueName:aC.name});
M.removeClass("boutique-info active type")
})
})()
}function ap(ax,aw){if(ax.hasOwnProperty(aw)){return ax[aw]
}return false
}function ar(ay,aF){var aA=3.141592653589793*3000/180,aD=ay,aC=aF,aB=Math.sqrt(aD*aD+aC*aC)+0.00002*Math.sin(aC*aA),ax=Math.atan2(aC,aD)+0.000003*Math.cos(aD*aA),az=aB*Math.cos(ax)+0.0065,aw=aB*Math.sin(ax)+0.006,aE={lng:az,lat:aw};
return aE
}function aj(aw){var ax=[];
if(aw.isBoutique){ax.push("boutique")
}if(aw.isTechnicalCentre){ax.push("technical")
}if(l.hasClass("mobile-view")){ax=["bubble"];
this._div=c('<div class="bubbleWrapper"><div class="'+ax.join(" ")+" w"+aw.boutiqueId+'"><a href="#" class="icon-close"><span>Close</span></a></div>');
this._div.find(".bubble").append(c("#"+aw.boutiqueId).html())
}else{this._div=c('<div class="'+ax.join(" ")+'"></div>');
this._div.append(c("#"+aw.boutiqueId).html())
}this.close=function(){this._div.remove()
};
this.content=function(){return this._div
}
}function O(ax,az){var aw;
var ay=new b.BMap.Icon(I,new b.BMap.Size(33,45),{anchor:new b.BMap.Size(10,32),infoWindowAnchor:new b.BMap.Size(10,0)});
aw=new b.BMap.Marker(az,{icon:ay,clickable:true});
aw.isBoutique=(ax.type===1);
aw.isTechnicalCentre=(ax.type===4);
aw.boutiqueId=ax.bid;
aw.boutiqueOpen=function(){m=new aj(aw);
at.addHTML(m.content(),aw);
M.removeClass("hide-filter").addClass("hide-boutique");
if(!l.hasClass("mobile-view")){z.html(m.content());
ah.removeClass(L.infoWindow)
}if(l.hasClass("tab-port")){M.removeClass("type active").toggleClass("boutique-info")
}c(".directions").find("a").on("click",function(){c(this).attr({href:"http://map.baidu.com/?latlng="+c(this).data("lat")+","+c(this).data("lng"),target:"_blank"})
});
aw.isOpen=true
};
aw.boutiqueClose=function(){aw.isOpen=false
};
H.addEventListener(aw,"click",function(){U.trigger("boutique:pin:clicked",{countryBoutique:c("#"+ax.bid).find(".country").html(),citySelected:c("#"+ax.bid).find(".city").html(),boutiqueName:c("#"+ax.bid).find("h2").html()});
var aA=H.getBounds();
aw.boutiqueOpen();
H.centerAndZoom(15);
H.setCenter(ar(ax.location.lng,ax.location.lat));
aA.extend(ax.location);
H.setViewport(aA)
});
av.idx[aw.boutiqueId]=aw
}function ag(aA,aB){var az=H.getBounds();
av.idx={};
if(!f&&aA.length&&k){az.extend(k)
}if(aA.length>0){for(var aw=0;
aw<aA.length;
aw++){var aC=ar(aA[aw].location.lng,aA[aw].location.lat);
var ax=new b.BMap.Point(aC.lng,aC.lat);
O(aA[aw],ax);
if(!aB&&aA[aw].location.lng&&aA[aw].location.lat){az.extend(ax)
}var ay=ap(j,aA[aw].bid);
ak(ay,ax,aw);
H.centerAndZoom(ax,6)
}ac=new b.BMapLib.MarkerClusterer(H,{markers:av});
ac.setStyles(ae)
}}function au(ax){var aw=c(A.html());
aw.attr("id","b"+ax.bid);
if(ax.type===1){aw.addClass("boutique")
}aw.find("h4").html(ax.name).addClass("icon-pin");
aw.find("h3").remove();
aw.find(".address").html(ax.address.filter(Boolean).join("<br />"));
aw.find(".country").html(ax.country);
aw.find(".city").html(ax.city);
if(ax.onlinestatus==="1"){aw.find(".onlinestatus").removeClass("hide")
}if(Z.attr("lang").indexOf("ja")!==-1){aw.find(".city").after(aw.find(".country").after(aw.find(".address")));
aw.find(".address").after(aw.find("h2"))
}if(navigator.geolocation){aw.find(".tel span").html('<a href="tel://'+ax.tel.replace(/\ /gi,"")+'">'+ax.tel+"</a>");
aw.find(".fax span").html('<a href="tel://'+ax.fax.replace(/\ /gi,"")+'">'+ax.fax+"</a>")
}else{aw.find(".tel span").html(ax.tel);
aw.find(".fax span").html(ax.fax)
}if(b.appointmentEndpoint!==""){aw.find(".view a").attr("href",b.appointmentEndpoint)
}else{aw.find(".view").hide()
}if(h&&ax.bid===h){aw.find(".favourite").addClass("my-boutique")
}aw.find(".favourite span").html(C.success);
aw.find(".favourite a").attr("data-id",ax.bid).html(C.linkText);
aw.find(".directions a").attr({"data-lat":ax.lat,"data-lng":ax.lng});
aw.find(".opening").html(ax.open.filter(Boolean).join("<br />"));
ao.append(aw)
}function y(aC,aA){var ax=aC.length,aw=[],az,ay,aB=H.getBounds();
for(ay=0;
ay<ax;
ay++){az=j[aC[ay].bid];
if(aC[ay].location){aB.extend(aC[ay].location)
}au(az);
if(az.city){aw.push(az.city)
}}if(aw||aA){M.find(".text .bl-results").show()
}else{M.find(".text .bl-results").hide()
}if(aC.length===0){M.find(".text .bl-results").hide();
if(aA){M.find(".text .bl-no-results").show();
k=new b.BMap.Point(b.defaultLoc.lat,b.defaultLoc.lng);
H.centerAndZoom(b.gdt.baidu.location,11);
aB.extend(k)
}else{M.find(".text .bl-no-results").hide()
}}else{M.find(".text .bl-no-results").hide()
}K=aB;
M.find(".count").html(aC.length);
M.find(".loc").html(aA||aw);
M.removeClass("hide-filter");
M.removeClass("hide-boutique")
}function T(ax,az){function aA(aB){if(ax.indexOf(aB.type)!==-1){return true
}return false
}var aw=P.filter(aA),ay=W.val();
t();
ao.empty();
ag(aw,az);
if(ay.length>0||aw.length>0){y(aw,ay)
}}function S(){var aw="";
ai.find("input[type=checkbox]:checked").each(function(){this._value=this.value||this._value;
var ax=this._value;
aw+=ax
});
return aw
}function d(aw){if(aw.branches&&aw.branches.length>0){P=u(aw);
T(S());
U.trigger("boutique:results",{searchBoutique:true,boutiqueSearchTerm:"geo",boutiqueSearchResults:aw.branches?aw.branches.length:0})
}else{return false
}}function aa(aw){f=true;
D({fulltext:aw},function(ax){if(ax.branches&&ax.branches.length&&aw.length>0){localStorage.boutiqueSearch=JSON.stringify({term:aw})
}else{if(!ax.branches){H.centerAndZoom(10)
}}al=aw;
P=u(ax);
T(S());
U.trigger("boutique:results",{searchBoutique:true,boutiqueSearchTerm:aw,boutiqueSearchResults:ax.branches?ax.branches.length:0})
});
M.find(".text").removeAttr("style");
ao.empty()
}function g(ax,ay){var aw=ay.currentTarget.Qi;
aa(aw);
X()
}function af(aw){if(c(aw.target).hasClass("icon-close")){aw.preventDefault();
W.val("").focus()
}}function V(){c(".mtb-boutique-finder").removeClass("loader");
q.removeClass("hide");
M.addClass("initialLook")
}function X(){q.addClass("hide");
c(".mtb-boutique-finder").removeClass("loader");
M.removeClass("hide initialLook")
}function x(){k=new b.BMap.Point(116.404,39.915);
D({lat:k.lat,lng:k.lng},function(aw){});
V()
}function G(aw){if(aw){k=new b.BMap.Marker(aw.point);
H.addOverlay(k);
H.panTo(aw.point);
D({lat:k.lat,lng:k.lng});
X()
}else{x()
}}function Y(aw){this.setMap=function(ax){this.setMapType(ax)
};
this.getMap=function(){return H.getMapType()
};
this.draw=function(){if(this._icon&&this._html){var ay=this.getMap().getProjection(),ax=ay.lngLatToPoint(this._icon.position);
this._html.css({left:parseInt(ax.x,10),top:parseInt(ax.y,10)})
}};
this.onAdd=function(){};
this.onRemove=function(){};
this.addHTML=function(az,aB){var aA=H.getPanes(),ax=this.getMap().getProjection(),ay,aC;
this._html=az;
this._icon=aB;
c(aA.floatPane).append(az);
this.draw();
ay=ax.lngLatToPoint(aB.points);
ay.y+=-c(".bubble").height()/2;
aC=ax.pointToLngLat(ay);
H.setCenter(aC)
}
}function n(ax){var aw=typeof ax==="string"?ax:"filter";
if(M.attr("class").indexOf("hide")!==-1){M.removeClass(function(ay,az){return(az.match(/(^|\s)hide-\S+/g)||[]).join(" ")
});
if(!K){K=H.getBounds()
}H.setViewport(ad)
}else{M.addClass("hide-"+aw)
}z.empty()
}function aq(){H=new b.BMap.Map("baidu-map-container");
b.gdt.baidu.bMmap=H;
H.centerAndZoom(b.gdt.baidu.location,11);
H.addControl(new b.BMap.MapTypeControl({mapTypes:[BMAP_NORMAL_MAP,BMAP_HYBRID_MAP]}));
H.addControl(new b.BMap.NavigationControl({anchor:BMAP_ANCHOR_BOTTOM_RIGHT,type:BMAP_NAVIGATION_CONTROL_SMALL}));
o=new b.BMap.Autocomplete({input:"autoSearchText",location:H});
o.addEventListener("onconfirm",function(aw){g(o,aw)
});
H.enableScrollWheelZoom(true);
ae=[{url:p,size:new b.BMap.Size(33,66),opt_anchor:[16,0],textColor:"#000",opt_textSize:10}];
if(!b.navigator.geolocation){x();
return false
}b.navigator.geolocation.getCurrentPosition(function(aw){G(aw)
},function(aw){x(aw)
});
Y.prototype=H.addOverlay();
at=new Y(H)
}b.initiazeBaiduMap=function(){U.trigger("baidu:maps:loaded");
var ax=e.createElement("script");
ax.src="//api.map.baidu.com/library/TextIconOverlay/1.2/src/TextIconOverlay_min.js";
e.body.appendChild(ax);
var aw=e.createElement("script");
aw.src="//api.map.baidu.com/library/MarkerClusterer/1.2/src/MarkerClusterer_min.js";
e.body.appendChild(aw);
b.gdt.baidu.mapMarker=new b.BMap.Icon(R,new b.BMap.Size(110,116),{imageSize:new b.BMap.Size(45,45)})
};
function F(){var aw=e.createElement("script"),ax=b.gdt.baidu.mapKey;
aw.type="text/javascript";
aw.src=b.gdt.boutique.baiduAPIEndPointUrl+"&ak="+ax+"&callback=initiazeBaiduMap";
e.body.appendChild(aw)
}function N(){c(".mtb-boutique-finder").find(".result, .bubble").each(function(){var aw=c(this);
aw.find(".favourite span").html(C.success);
aw.find(".favourite a").html(C.linkText)
})
}function an(){ao.find(".my-boutique").removeClass("my-boutique");
J.find(".my-boutique").addClass("my-boutique");
c("#b"+h).find(".favourite").addClass("my-boutique");
J.find(".wb"+h).find(".favourite").addClass("my-boutique")
}function B(az){az.preventDefault();
var ay=c(az.target).data("id"),ax=E.replace("html",ay+".html"),aw=b.gdt.Utils.checkCookie("RCHMFrontEndCookie")?"POST":"GET";
b.gdt.Utils.ajaxCall({type:aw,data:aw==="POST"?{boutiqueData:JSON.stringify(j["b"+ay])}:"",url:ax,callback:function(){if(aw==="POST"){h=ay;
c(ah).find(".my-boutique").removeClass("my-boutique");
c(az.target).parent(".favourite").addClass("my-boutique");
an()
}else{window.location.href=ax
}}})
}function r(){W.on(s,Q);
ah.on(s,".favourite a",function(aw){B(aw)
});
ab.on("click",function(aw){aw.preventDefault();
c(aw.target).parent(".boutique-details").addClass(L.infoWindow)
});
J.on(s,".favourite a",function(aw){B(aw)
});
ai.find("input[type=checkbox]").on("change",function(){T(S())
});
ai.find(".toggle").on(s,function(){M.removeClass("type boutique-info").toggleClass("active")
});
ai.find(".type, .filter > legend > .icon-arrow-down").on(s,function(){M.removeClass("active boutique-info").toggleClass("type")
});
am.on(s,n)
}r();
ao.on("touchstart",function(){w=false
}).on("touchmove",function(){w=true
}).on(s,function(az){az.stopPropagation();
var ay,ax,aw=c(az.target).closest(".result").find(".onlinestatus a");
if(c(az.target)[0]===aw[0]){w=true
}if(!w){ay=c(az.target).parents(".result");
if(ay.length){M.find(am).toggleClass("mtb-hide",(ao.find(".result").length<=1));
ax=av.idx[ay.attr("id")];
ax.boutiqueOpen();
k=ax.point;
H.centerAndZoom(k,19);
U.trigger("boutique:result:clicked",{countryBoutique:ay.find(".country").html(),citySelected:ay.find(".city").html(),boutiqueName:ay.find("h2").html()})
}M.removeClass("boutique-info active type")
}w=false
});
U.on("userinteractionsdata",function(){var aw=b.gdt.UserInteractions.data();
if(aw&&aw.boutique){h=aw.boutique.savedBoutique;
E=aw.boutique.endpoint;
C=aw.boutique.messages;
N();
an()
}});
U.on("baidu:maps:loaded",function(){if(c("#baidu-map-container").length>0){aq();
l.addClass("boutique-stores")
}});
return{loadBaiduScript:F}
})();
if(b.gdt.oldBoutiqueLocator===true){if(b.gdt.baidu&&b.gdt.baidu.BaiduMapsAccessible&&b.gdt.baidu.mapKey){c(document).ready(function(){a.loadBaiduScript()
})
}}})(document,window,window.jQuery||window.Zepto);
(function(g,a,f){a.gdt=a.gdt||{};
a.gdt.google=a.gdt.google||{};
var c="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAG4AAAB0CAMAAABTyPc0AAAAYFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAwMAAAAAAAAAAAAAAAD///8iIiITExNfX1/S0tL19fW6urp8fHzj4+M+Pj6kpKSTk5OptP20AAAAE3RSTlMA8AucVyRiawMWS99AiDT8xrB2i2/GFgAAA4lJREFUeAHN2e2WsygMAGBAQEAENFb7Ob3/u9w/u747M5LamJ7d5wZyEpKArdjDmxS11jF58VkujU2RsJKlGZMTH6HsIGGDHLQS3GIjoUo2kbWIuoMXimYr6hoM1WnBwRTYqZjjdewz7JZ7x5fa5xPUEt4kgyAbgWAUNK4Bkp4WbQCixnHnhmvE23pAsNezhUOseEvMcIhM4g2+g4M6JfYbAMfbLhoYBLGT6oBBp/hngGGb+QwspBd7NMCk508OIxXHrTMvt+fX87acOE7PdYDJy3n6x/k2A6oTLwXALPfp3y43QMVDjTJfp5/Op0OrxUmoOt2n3+4PrFmcwEU82oYLll8ib5R8nrbdZ3pvFqh5TjVfUDVQj+401dWPTwqUgZqvqe4KVZ42dfNlQtS7JdA22DJh6tPe0hoTqyVWzZ62U84T5kLcKwNUXCbUjEwCIVyecCdauPLfh/tkMdlb5f80CJZ7zLXAJO4llgRGZeT+IdRSOuJ9d7pQLqBCvs1vU82TfpsnqLpO284ZqhL9JTZvz979dORd2wAWD49G+CiJUJd/D/t1BkQ6+I3wOH9PbQFMd/zbdble1syWfPz71cAL+bHcnrflkeGF7Pl/5UAUa63WOoSYkjFeKYc3y0F9+4fVISazGbAAi679zlodklH4LUTXtL9ZHZN3+CzQyHabDT9rOgKDoa3R8XtJvWRIbmyrbDAOGXVicghtFJIeLTk8nkPSIyaHCN4h6RGSw9mkCM2JJIezwYs/lOSfOez0WoaFgrLGMa2Wrt3D4L8KUJPDs1uVzyanf6zqxHDPIYLi+VG6tPtq+TOcl3wTjmyVVcvXJ8hSWbnyqT6x0SOvJP4+8Tx/YRTCENC7RY6ENqG/yhriua0Kd5/o5ESdybBbHvfdO5ie81Jto3fEDz5CKXXy4pXINXI2GLFDwzNyNnH+9dvRTw0vJ6WUYb1veMo50FuEUM5u95Nyj3CglHr9nmMr54DVEQ9GKGeHfDkiwYjdmftKMHyuqeUcSNsY57v3ShmMd4LOxfxGKUPy4hjX7y2l1dGLo5wveCmx1wGBSxJ9DK3BlBMc1PjyMWSTUYKLH/BLTgfjBB9nOuTg8NuaQulcnYHgnRPMfLM9AzZSpxrny8bB6ZiUQDFMgxxZGgSnbF4PDvl4Yj++4e8zw4eaa5mVjd9dP3d8crT4Vc3H6Zx7fBGz8n2TGBbxX/E+/v6WmTJ0AAAAAElFTkSuQmCC",e=f("body");
if(a.gdt.google.requireMap&&!a.gdt.google.mapKey){a.gdt.Utils.Console.warn("No Google Maps Key found")
}a.initializeMap=function(){a.gdt.google.boutiqueMarker=new google.maps.MarkerImage(c,new google.maps.Size(110,116),new google.maps.Point(0,0),new google.maps.Point(15,45),new google.maps.Size(55,58));
a.gdt.google.mapMarker=new google.maps.MarkerImage(c,new google.maps.Size(89,89),new google.maps.Point(0,0),new google.maps.Point(15,45),new google.maps.Size(45,45));
if(a.gdt.google.requireGeoMarker){h()
}else{e.trigger("google:maps:loaded")
}};
function h(){var d=document.createElement("script"),j;
d.src="/etc/designs/richemont-mtb/clientlibs/core/js/lib/geolocationMarker.js";
document.body.appendChild(d);
j=setInterval(function(){if(a.GeolocationMarker){clearInterval(j);
e.trigger("google:maps:loaded")
}},100)
}function b(){var d=document.createElement("script"),j=a.gdt.google.mapLanguage,k=a.gdt.google.mapRegion;
d.type="text/javascript";
if(j==="ko"){j="EN"
}if(k==="HK"){j="zh-TW"
}d.src="//maps.googleapis.com/maps/api/js?key="+a.gdt.google.mapKey+"&libraries=places&region="+(k||"EN")+"&language="+(j||"EN")+"&callback=initializeMap";
document.body.appendChild(d)
}if(a.gdt.oldBoutiqueLocator===true){if(a.gdt.googleApiAccessible&&a.gdt.google.requireMap&&a.gdt.google.mapKey&&window.name.indexOf("cq-cf-frame")===-1){f(document).ready(function(){b()
})
}}}(document,window,window.jQuery||window.Zepto));
(function(e,a,c){a.gdt=a.gdt||{};
a.gdt.Boutique=a.gdt.Boutique||{};
var b=function(){var aA=(typeof window.ontouchstart==="undefined")?"click":"touchend",j,z,H,an="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAvCAMAAACWqWnGAAAAP1BMVEUAAABUVFRHR0dmZmZjY2NJSUlJSUlmZmZjY2NUVFRHR0cyMjI1NTW1tbXY2NhmZmZzc3P///9bW1tRUVGPj48C1JxlAAAADXRSTlMASGmp3SMAAAAAAH+T9uNU/AAAAY5JREFUeF6llMl2wzAIRSUESVqNHv7/W5s6zxkM1Ivehb3hHh6awhuREnNnTiSXPwiXHeL+IsUvl4B/hPCS5KRL6hr6tgnb1zB8J3wa850zJ7wby4LvTnTGj7swr7VNU6vr/JSuBuF6ZRijTaCN3UmmQjDW6Y11d8RaZFYGHK9NkM2Y+3Sgz5vCN0WgR5N6VOriJQvJaII2zt4ENibBNM4wUKpWqqv0c+X/XU5n0eNjxYZWxuyczBAfw7Sj0bAv1hnDefHXWCsJa2ZvfrTui+A6fkRrs3HEQLjdGM5bnwqjk32RI679MurWqdWxwOjiPErcd6mvdzoEDG9d5OvWBtIdCGhidUEb5yETiUSUcyaiKPJUom2wRMrll1zwJ4FySZYxCpWSPykl4hkXs0k2KEX8Z3yUbDoUsD+sDM4nil4BCFYwkPxYenygYlkCFhnEk1jYFSgq2ih0rC85bgIU4MXCtgMox2hWvVYQDbFUvVYAI9azHPl9BdFUva0A2jax5KzLtQLSYDLj+IoklPv8AIhAZG1tvWXGAAAAAElFTkSuQmCC",ap,q={},J=a.gdt.Utils.queryParams.boutiqueCode,C=c(".boutique-locator-map"),L=c("body"),g=c("html"),ay=c(".stores"),v,az,aa,U,O,Z,Y,o=12,d=[],N,k,aw={},al,aB=false,ai,aj,m=c(".boutique-locator form"),p=c(".searchpanel"),u=c("#searchtemplate").remove(),V=c("#results"),K=c("#suggestiontemplate").remove(),I=c("#suggestions div"),w=c("#boutiqueLocatorCountries"),aq,G=false,x=false;
function t(aD){var aC=MontBlancSearchServiceUrl+((MontBlancSearchServiceUrl.indexOf("?")===-1)?"?":"&"),aE=[];
if(aD.searchtype){aE.push("f="+aD.searchtype)
}if(aD.id){aE.push("sap_number="+aD.id)
}if(aD.lat&&aD.lng){aE.push("lat="+aD.lat);
aE.push("lng="+aD.lng)
}if(aD.radius){aE.push("r="+aD.radius)
}if(aD.country){aE.push("cou="+aD.country)
}if(aD.fulltext){if(!aD.searchtype){aE.push("f=bran")
}aE.push("ful="+aD.fulltext)
}return aC+aE.join("&")
}function ab(){if(al){al.close()
}}function ad(){for(var aD=0,aC=d.length;
aD<aC;
aD++){d[aD].setMap(null)
}}function ac(){c(".boutique-locator").find(".result, .bubble").each(function(){var aC=c(this);
aC.find(".favourite span").html(q.success);
aC.find(".favourite a").html(q.linkText)
})
}function y(){V.find(".my-boutique").removeClass("my-boutique");
C.find(".my-boutique").addClass("my-boutique");
c("#b"+H).find(".favourite").addClass("my-boutique");
C.find(".wb"+H).find(".favourite").addClass("my-boutique")
}function av(aC){o=16;
l({searchtype:"bid",id:aC},function(aF){var aE=aF.branches[0],aD=new google.maps.LatLng(aE.latitude,aE.longitude);
ar(aF,true);
v.setZoom(16);
v.setCenter(aD)
})
}function af(aF){aF.preventDefault();
var aE=c(aF.target).data("id"),aD=ap.replace("html",aE+".html"),aC=a.gdt.Utils.checkCookie("RCHMFrontEndCookie")?"POST":"GET";
a.gdt.Utils.ajaxCall({type:aC,data:aC==="POST"?{boutiqueData:JSON.stringify(aw["b"+aE])}:"",url:aD,callback:function(){if(aC==="POST"){H=aE;
y();
ab()
}else{window.location.href=aD
}}})
}function ax(aC){var aD=["bubble"];
if(aC.isBoutique){aD.push("boutique")
}if(aC.isTechnicalCentre){aD.push("technical")
}this._div=c('<div class="bubbleWrapper"><div class="'+aD.join(" ")+" w"+aC.boutiqueId+'"><a href="#" class="icon-close"><span>Close</span></a></div>');
ab();
this._div.find(".bubble").append(c("#"+aC.boutiqueId).html());
this.close=function(){this._div.remove()
};
this.content=function(){return this._div
}
}function E(aD){var aC;
if(!aa){aa=a.gdt.google.boutiqueMarker
}if(!O){O=a.gdt.google.mapMarker
}aC=new google.maps.Marker({position:aD.location,icon:((aD.type===1)?aa:O),clickable:true});
aC.isBoutique=(aD.type===1);
aC.isTechnicalCentre=(aD.type===4);
aC.boutiqueId=aD.bid;
aC.boutiqueOpen=function(){ab();
al=new ax(aC);
aj.addHTML(al.content(),aC);
aC.isOpen=true
};
aC.boutiqueClose=function(){ab();
aC.isOpen=false
};
google.maps.event.addListener(aC,"click",function(){L.trigger("boutique:pin:clicked",{countryBoutique:c("#"+aD.bid).find(".country").html(),citySelected:c("#"+aD.bid).find(".city").html(),boutiqueName:c("#"+aD.bid).find("h2").html()});
aC.boutiqueOpen()
});
d.push(aC);
d.idx[aC.boutiqueId]=aC
}function T(aC){var aD=c(K.html());
aD.find("h2").html(aC.formatted_address);
aD.data("lat",aC.geometry.location.lat());
aD.data("lng",aC.geometry.location.lng());
I.append(aD)
}function at(aF){var aD=aF.length,aC,aE;
I.empty();
for(aE=0;
aE<aD;
aE++){aC=aF[aE];
T(aC)
}if(aD===1){I.parent().find(".one-suggestion").show()
}else{if(aD>1){I.parent().find(".more-suggestions").show()
}}}function M(aD){var aC=c(u.html());
aC.attr("id","b"+aD.bid);
if(aD.type===1){aC.addClass("boutique")
}aC.find("h2").html(aD.name);
aC.find("h3").remove();
aC.find(".address").html(aD.address.filter(Boolean).join("<br />"));
aC.find(".country").html(aD.country);
aC.find(".city").html(aD.city);
if(g.attr("lang").indexOf("ja")!==-1){aC.find(".city").after(aC.find(".country").after(aC.find(".address")));
aC.find(".address").after(aC.find("h2"))
}if(navigator.geolocation){aC.find(".tel span").html('<a href="tel://'+aD.tel.replace(/\ /gi,"")+'">'+aD.tel+"</a>");
aC.find(".fax span").html('<a href="tel://'+aD.fax.replace(/\ /gi,"")+'">'+aD.fax+"</a>")
}else{aC.find(".tel span").html(aD.tel);
aC.find(".fax span").html(aD.fax)
}aC.find(".view a").attr("href",appointmentEndpoint+aD.bid+"&boutiqueName="+a.gdt.Base64.encode(encodeURIComponent(aD.name)));
if(H&&aD.bid===H){aC.find(".favourite").addClass("my-boutique")
}aC.find(".favourite span").html(q.success);
aC.find(".favourite a").attr("data-id",aD.bid).html(q.linkText);
aC.find(".opening").html(aD.open.filter(Boolean).join("<br />"));
V.append(aC)
}function W(aH,aG){var aD=aH.length,aC,aF,aE;
for(aE=0;
aE<aD;
aE++){aF=aw[aH[aE].bid];
M(aF);
if(aF.city){aC=aF.city
}}if(aC||aG){p.find(".text .rslts").show()
}else{p.find(".text .rslts").hide()
}if(aH.length===0){p.find(".text .rslts").hide();
if(aG){p.find(".text .norslts").show();
Q(aG);
z=new google.maps.LatLng(defaultLoc.lat,defaultLoc.lng);
v.setZoom(2);
v.setCenter(z)
}else{p.find(".text .norslts").hide()
}}else{p.find(".text .norslts").hide()
}p.find(".count").html(aH.length);
p.find(".loc").html(aG||aC);
if(!aG||aG.indexOf(aC)===-1){m.find("input[type=search]").val(aC||"")
}}function ah(aD){c(document.body).trigger("receivedBtqResults",aD);
var aF=aD.branches,aC=[],aE=(aF||{}).length;
while(aE--){aC.push({bid:"b"+aF[aE].id,location:new google.maps.LatLng(parseFloat(aF[aE].latitude),parseFloat(aF[aE].longitude)),type:parseInt(aF[aE].type.id,10)});
aw["b"+aF[aE].id]={name:aF[aE].name,address:[aF[aE].adress_1,aF[aE].adress_2,aF[aE].adress_3,aF[aE].adress_4],city:aF[aE].city.name||"",continent:(aF[aE].continent||{}).name||"",country:(aF[aE].country||{}).name||"",lang:aF[aE].lang,tel:aF[aE].phone,fax:aF[aE].fax,lat:aF[aE].latitude,lng:aF[aE].longitude,open:[aF[aE].time_open_1,aF[aE].time_open_2,aF[aE].time_open_3,aF[aE].time_open_4,aF[aE].time_open_5,aF[aE].time_open_6,aF[aE].time_open_7],type:parseInt(aF[aE].type.id,10),bid:aF[aE].id}
}aC.sort(function(aH,aG){return aH.type-aG.type
});
return aC
}function D(aF,aG){var aC=(aF||{}).length,aD=0,aE=new google.maps.LatLngBounds();
d=[];
d.idx={};
if(!aB&&aF.length&&z){aE.extend(z)
}for(aD=0;
aD<aC;
aD++){E(aF[aD]);
if(!aG){aE.extend(aF[aD].location)
}}if(!U){U=new MarkerClusterer(v,d.slice(),{styles:[{url:an,height:50,width:56,anchorIcon:[50,23],anchorText:[-9,-12]},{url:an,height:50,width:56,anchorIcon:[50,23],anchorText:[-9,-12]},{url:an,height:50,width:56,anchorIcon:[50,23],anchorText:[-9,-12]}]})
}else{U.clearMarkers();
U.addMarkers(d.slice())
}if(!aG&&aF.length){if(!aE.contains(v.getCenter())){new google.maps.Geocoder().geocode({address:JSON.parse(localStorage.boutiqueSearch).term?JSON.parse(localStorage.boutiqueSearch).term:$inputSearch.val(),region:a.gdt.google.mapRegion},function(aI,aH){if(aH===google.maps.GeocoderStatus.OK){v.fitBounds(aI[0].geometry.viewport)
}else{result="Unable to find address: "+aH
}})
}else{if(aE.contains(v.getCenter())){v.fitBounds(aE)
}else{return
}}}return aF
}function l(aD,aF){var aC;
if(aD.id){aC=t({searchtype:"bid",id:aD.id})
}if(aD.lat&&aD.lng){aC=t({searchtype:"geo",lat:aD.lat,lng:aD.lng,radius:aD.radius})
}if(aD.country){aC=t({searchtype:"bran",country:aD.country})
}if(aD.fulltext&&aD.country){aC=t({searchtype:"bran",fulltext:aD.fulltext,country:aD.country})
}if(aD.fulltext){aC=t({searchtype:"bran",fulltext:aD.fulltext})
}if(!aD.id&&!aD.fulltext&&!aD.lat&&!aD.country){aC=t({searchtype:"geo"})
}var aE={url:aC,dataType:"jsonp",type:"GET",callback:function(aG){aF(aG,aD.skipbounds)
},error:function(aI,aG,aH){a.gdt.Utils.Console.warn("Map not found",aG+" ("+aH+")");
a.gdt.Utils.Console.log("mapRequest",aI)
}};
a.gdt.Utils.ajaxCall(aE)
}function ar(aD,aC){if(!x){B()
}N=ah(aD);
if(N.length===0){v.setCenter(z);
v.setZoom(8);
l({lat:v.getCenter().lat(),lng:v.getCenter().lng(),radius:ao(v),skipbounds:true},ar)
}R(am(),aC)
}function am(){var aC="";
m.find("input[type=checkbox]:checked").each(function(){this._value=this.value||this._value;
var aD=this._value;
aC+=aD
});
return aC
}function R(aD,aE){function aF(aG){if(aD.indexOf(aG.type)!==-1){return true
}return false
}var aC=N.filter(aF);
V.empty();
ad();
D(aC,aE);
W(aC,m.find("input[type=search]").val())
}function ao(aD){if(!aD){return null
}var aG=6371,aC,aF=aD.getBounds().getNorthEast().lat(),aE=aD.getCenter().lat(),aI=aD.getBounds().getNorthEast().lng(),aH=aD.getCenter().lng(),aL,aK,aN,aM,aJ=function(aO){return aO*Math.PI/180
};
aN=aJ(aE-aF);
aM=aJ(aH-aI);
aF=aJ(aF);
aE=aJ(aE);
aL=Math.sin(aN/2)*Math.sin(aN/2)+Math.sin(aM/2)*Math.sin(aM/2)*Math.cos(aF)*Math.cos(aE);
aK=2*Math.atan2(Math.sqrt(aL),Math.sqrt(1-aL));
aC=aG*aK;
return aC
}function P(aD,aE){aD.preventDefault();
var aC=c(aD.target);
clearTimeout(az);
az=setTimeout(function(){p.find(".geo").hide();
au(aE||aC.val())
},250)
}function au(aC){if(aC!==null&&aC===ai){return
}aB=true;
l({fulltext:aC},function(aD){if(aD.branches&&aD.branches.length){localStorage.boutiqueSearch=JSON.stringify({term:aC})
}else{if(!ai){z=new google.maps.LatLng(defaultLoc.lat,defaultLoc.lng);
v.setZoom(2);
v.setCenter(z)
}}ai=aC;
N=ah(aD);
R(am());
L.trigger("boutique:results",{searchBoutique:true,boutiqueSearchTerm:aC,boutiqueSearchResults:aD.branches?aD.branches.length:0})
});
p.find(".text").removeAttr("style");
V.empty();
I.empty();
ab()
}function Q(aD){function aC(aF){var aG=new google.maps.Geocoder(),aE="";
aG.geocode({address:aF,region:a.gdt.google.mapRegion},function(aI,aH){if(aH===google.maps.GeocoderStatus.OK){aE=aI;
at(aE)
}else{aE="Unable to find address: "+aH
}})
}aC(aD)
}function ak(){l({lat:v.getCenter().lat(),lng:v.getCenter().lng(),radius:ao(v),skipbounds:true},ar);
p.find(".geo").hide()
}function A(aC){this.setMap(aC);
this.draw=function(){if(this._icon&&this._html){var aE=this.getProjection(),aD=aE.fromLatLngToDivPixel(this._icon.position);
this._html.css({left:parseInt(aD.x,10),top:parseInt(aD.y,10)})
}};
this.onAdd=function(){};
this.onRemove=function(){};
this.addHTML=function(aF,aH){var aG=this.getPanes(),aD=this.getProjection(),aE,aI;
this._html=aF;
this._icon=aH;
c(aG.floatPane).append(aF);
this.draw();
aE=aD.fromLatLngToDivPixel(aH.position);
aE.y+=-c(".bubble").height()/2;
aI=aD.fromDivPixelToLatLng(aE);
aC.setCenter(aI)
}
}function B(){var aC={zoom:o,mapTypeId:google.maps.MapTypeId.ROADMAP},aD;
if(z){aC.center=z
}A.prototype=new google.maps.OverlayView();
v=new google.maps.Map(C[0],aC);
aj=new A(v);
aD=new GeolocationMarker(v);
x=true;
if(searchOnPan){google.maps.event.addListener(v,"dragend",function(){clearTimeout(Y);
Y=setTimeout(ak,1000)
})
}}function r(){m.find("input[type=search]").val("")
}function h(){m.on("submit",function(aC){if(!window.jQuery){c(this).find("input").blur()
}P(aC,c(this).find("input[type=search]").val())
}).find("input[type=search]").on("blur",P).on(aA,r);
I.on("touchstart",function(){k=false
}).on("touchmove",function(){k=true
}).on(aA,function(aD){var aC;
if(!k){aC=c(aD.target).parents(".suggestion");
if(aC.length){localStorage.boutiqueSearch=JSON.stringify({term:ai,geo:{lat:aC.data("lat"),lng:aC.data("lng")}});
z=new google.maps.LatLng(aC.data("lat"),aC.data("lng"));
I.empty();
I.parent().find("p").hide();
l({lat:z.lat(),lng:z.lng(),radius:radius},ar)
}}k=false
});
V.on("touchstart",function(){k=false
}).on("touchmove",function(){k=true
}).on(aA,function(aE){var aD,aC;
if(!k){aD=c(aE.target).parents(".result");
if(aD.length){aC=d.idx[aD.attr("id")];
aC.boutiqueOpen();
L.trigger("boutique:result:clicked",{countryBoutique:aD.find(".country").html(),citySelected:aD.find(".city").html(),boutiqueName:aD.find("h2").html()})
}p.removeClass("active type")
}k=false
});
V.on(aA,".favourite a",function(aC){af(aC)
});
C.on(aA,".favourite a",function(aC){af(aC)
});
C.on("click",".icon-close",function(aC){aC.preventDefault();
aC.stopPropagation();
ab()
});
m.find("input[type=checkbox]").on("change",function(){R(am())
});
m.find(".toggle").on(aA,function(){p.removeClass("type").toggleClass("active")
});
m.find(".type, .filter > legend > .icon-arrow-down").on(aA,function(){p.removeClass("active").toggleClass("type")
})
}function ag(aG,aD){var aI=new google.maps.LatLng(aG,aD),aF=new google.maps.Geocoder(),aE,aH,aC;
aF.geocode({latLng:aI},function(aM,aJ){if(aJ==google.maps.GeocoderStatus.OK){if(aM[1]){var aP=0;
for(var aK=0;
aK<aM.length;
aK++){if(aM[aK].types[0]=="locality"){aP=aK;
break
}}for(var aL=0;
aL<aM[aK].address_components.length;
aL++){if(aM[aK].address_components[aL].types[0]=="country"){aH=aM[aK].address_components[aL]
}}aC=aH.long_name
}}aE=w.find("option").attr("value",aq).text();
if(aC!==aE){var aO=w.find("option");
for(var aN=aO.length-1;
aN>=0;
aN--){if(c(aO[aN]).text().indexOf(aC)!==-1){aO.attr("default","false");
c(aO[aN]).attr("default","true");
c(aO[aN]).attr("selected","selected")
}}}})
}function X(aC){clearTimeout(j);
G=true;
if(aC){S();
z=new google.maps.LatLng(aC.coords.latitude,aC.coords.longitude);
p.find(".geo").hide();
if(w.find("option").length>0){ag(z.lat(),z.lng())
}l({lat:z.lat(),lng:z.lng(),radius:radius},ar)
}else{s()
}}function s(aC){clearTimeout(j);
if(!(G)&&w.find("option").length>0){w.trigger("change",F)
}else{clearTimeout(j);
o=2;
z=new google.maps.LatLng(defaultLoc.lat,defaultLoc.lng);
p.find(".geo").hide();
l({lat:z.lat(),lng:z.lng(),radius:radius},ar)
}}function S(){var aE=w.find("option"),aD;
for(var aC=aE.length-1;
aC>=0;
aC--){if(c(aE[aC]).attr("default")==="true"){aD=c(aE[aC]).val()
}}aq=aD;
return aD
}function n(){var aC,aD,aF,aE;
if(J){av({id:J},ar);
return
}if(navigator.geolocation){navigator.geolocation.getCurrentPosition(function(aG){X(aG)
},function(aG){if(localStorage.boutiqueSearch&&localStorage.boutiqueSearch.length>1){aC=localStorage.boutiqueSearch?JSON.parse(localStorage.boutiqueSearch):false;
aD=aC.term;
aF=aC.geo;
B();
m.find("input[type=search]").val(aD);
if(aF){l({lat:aF.lat,lng:aF.lng,radius:radius},ar)
}else{m.submit()
}}else{s()
}});
if(a.gdt.Utils.Browser.isFirefox||a.gdt.Utils.Browser.isOldIE){j=setTimeout(function(){if(!(G)){s()
}},5000)
}}else{s()
}}function f(){var aD=w.find("option");
Z=S();
for(var aC=aD.length-1;
aC>=0;
aC--){if(Z!==0&&aD[aC].value===Z){c(aD[aC]).attr("selected","selected");
l({country:aD[aC].value},ar)
}}}function F(aD){var aC=c(aD.target);
l({country:aC.val()},function(aF){ar(aF,true);
var aE=new google.maps.LatLngBounds();
for(i=0;
i<d.length;
i++){aE.extend(d[i].getPosition())
}v.fitBounds(aE)
})
}var ae=function(){w.on("change",F);
L.on("userinteractionsdata",function(){var aC=a.gdt.UserInteractions.data();
if(aC&&aC.boutique){H=aC.boutique.savedBoutique;
ap=aC.boutique.endpoint;
q=aC.boutique.messages;
ac();
y()
}});
L.on("google:maps:loaded",function(){if(a.gdt.oldBoutiqueLocator===true){if(C.length){n()
}}});
h()
};
return{init:ae}
};
a.gdt.Boutique=new b()
}(document,window,window.jQuery||window.Zepto));
(function(e,b,c){b.gdt=b.gdt||{};
b.gdt.Boutique=b.gdt.Boutique||{};
b.gdt.Boutique.Stores=b.gdt.Boutique.Stores||{};
var a=function(){var aI=(typeof window.ontouchstart==="undefined")?"click":"touchend",j,z,L,au="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAvCAMAAACWqWnGAAAAP1BMVEUAAABUVFRHR0dmZmZjY2NJSUlJSUlmZmZjY2NUVFRHR0cyMjI1NTW1tbXY2NhmZmZzc3P///9bW1tRUVGPj48C1JxlAAAADXRSTlMASGmp3SMAAAAAAH+T9uNU/AAAAY5JREFUeF6llMl2wzAIRSUESVqNHv7/W5s6zxkM1Ivehb3hHh6awhuREnNnTiSXPwiXHeL+IsUvl4B/hPCS5KRL6hr6tgnb1zB8J3wa850zJ7wby4LvTnTGj7swr7VNU6vr/JSuBuF6ZRijTaCN3UmmQjDW6Y11d8RaZFYGHK9NkM2Y+3Sgz5vCN0WgR5N6VOriJQvJaII2zt4ENibBNM4wUKpWqqv0c+X/XU5n0eNjxYZWxuyczBAfw7Sj0bAv1hnDefHXWCsJa2ZvfrTui+A6fkRrs3HEQLjdGM5bnwqjk32RI679MurWqdWxwOjiPErcd6mvdzoEDG9d5OvWBtIdCGhidUEb5yETiUSUcyaiKPJUom2wRMrll1zwJ4FySZYxCpWSPykl4hkXs0k2KEX8Z3yUbDoUsD+sDM4nil4BCFYwkPxYenygYlkCFhnEk1jYFSgq2ih0rC85bgIU4MXCtgMox2hWvVYQDbFUvVYAI9azHPl9BdFUva0A2jax5KzLtQLSYDLj+IoklPv8AIhAZG1tvWXGAAAAAElFTkSuQmCC",ac="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAtCAQAAACKL8qfAAAACXBIWXMAAAsTAAALEwEAmpwYAAADGGlDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjaY2BgnuDo4uTKJMDAUFBUUuQe5BgZERmlwH6egY2BmYGBgYGBITG5uMAxIMCHgYGBIS8/L5UBFTAyMHy7xsDIwMDAcFnX0cXJlYE0wJpcUFTCwMBwgIGBwSgltTiZgYHhCwMDQ3p5SUEJAwNjDAMDg0hSdkEJAwNjAQMDg0h2SJAzAwNjCwMDE09JakUJAwMDg3N+QWVRZnpGiYKhpaWlgmNKflKqQnBlcUlqbrGCZ15yflFBflFiSWoKAwMD1A4GBgYGXpf8EgX3xMw8BSMDVQYqg4jIKAUICxE+CDEESC4tKoMHJQODAIMCgwGDA0MAQyJDPcMChqMMbxjFGV0YSxlXMN5jEmMKYprAdIFZmDmSeSHzGxZLlg6WW6x6rK2s99gs2aaxfWMPZ9/NocTRxfGFM5HzApcj1xZuTe4FPFI8U3mFeCfxCfNN45fhXyygI7BD0FXwilCq0A/hXhEVkb2i4aJfxCaJG4lfkaiQlJM8JpUvLS19QqZMVl32llyfvIv8H4WtioVKekpvldeqFKiaqP5UO6jepRGqqaT5QeuA9iSdVF0rPUG9V/pHDBYY1hrFGNuayJsym740u2C+02KJ5QSrOutcmzjbQDtXe2sHY0cdJzVnJRcFV3k3BXdlD3VPXS8Tbxsfd99gvwT//ID6wIlBS4N3hVwMfRnOFCEXaRUVEV0RMzN2T9yDBLZE3aSw5IaUNak30zkyLDIzs+ZmX8xlz7PPryjYVPiuWLskq3RV2ZsK/cqSql01jLVedVPrHzbqNdU0n22VaytsP9op3VXUfbpXta+x/+5Em0mzJ/+dGj/t8AyNmf2zvs9JmHt6vvmCpYtEFrcu+bYsc/m9lSGrTq9xWbtvveWGbZtMNm/ZarJt+w6rnft3u+45uy9s/4ODOYd+Hmk/Jn58xUnrU+fOJJ/9dX7SRe1LR68kXv13fc5Nm1t379TfU75/4mHeY7En+59lvhB5efB1/lv5dxc+NH0y/fzq64Lv4T8Ffp360/rP8f9/AA0ADzT6lvFdAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAMrSURBVHjanJZriFVVGIafGWWO0hw9Z5qCQIqCoQwi6aIEYYN2AavpR3mLDCsooV9qpIX1I4QJREiNbmoXSTIq7IJ2pyAUA6UihsDRhqlMaShMpyxzePqxZs/stc+ec7bzrp/fe57z7bXW960P8jWLx9lBDwMc5wh7eYGHuZiCamUF+zFnnWE3tzYG3Elf8pMpXus8u5zr9DToHTrqATYF22SX+qFHTDTkQV9yTgI5RddYgHeD5UH7zNcnXp9g1uQBdiK2+7H1tSaB3JcFPIN4oYdsrJcTyMw0YDbiOfZaTBsC4jcmJIBmfkT8yOJaHCBPJoj7ERfX2P7xPZ9ytRv9Jic2VeQvKgHxNTZ7LGPa6iWp23CHhzPxdSGyHKAD8a6M4TERy1atWrFFbPfbyDHoZJE9AMsQd0bh18WS51odWW3iRZ6MXPPDpT8PtmHJgVTohBdIBAgLn4gQm8On3AYHcEYU2i5OqQG0idM9lfLtGzmVozgvQiyXGkDVqpOcZE/K12eTyHNwEhdEiAfEthxEWdyX8h21JLINBrArQqwSKzmIFls9mPL95ASRzbAXL40Q748cZ3YvrvK/lO+LsBcr4Vkkqo7TXpZzIlPFDdFfrQ2I62AR4qZMXwiFP5pBVbzGocg1S+QPSlDhX5yZuZ3Pi1iyYptlEa9IdTHV3pDDG6FG3kIy11e/tDPsuHi+K6IboboyxG4PiE7Eu3NK+ju3u8UP/L0m8neo1F+YmJT7D9iUSbS+1occHhntWksQHyoMOGO7yCDlUUQT/dhsf0HE0yGHtXH7XYI4vxDgROgUg7Rme/ghxP0FEMtCDo/WviO3IF7dENCbdO+JeY/Rp4ivNkDMDogF+Q9iB2Jrpr3F2hEAe8Z+ltch3jsm4E8rAXF5vbe9H/HzMRCLAqC7/nzRiTgtU5NBuwPg1/yNTOuVMCBkdTrcSLmh8ZxT4hjiZxnEPQGwpdi0dXNoOIMpwNsB8DMtRUe2FxEXjgAGhtsON1JYJXoRXxtG3FToJLK6ErHZw2p3AHzPWWsV4lx3BcAQ0xiHvkpNm0sZl8r0DAPeZNwq083W2vEw1v8DAHOtGQh+MrZjAAAAAElFTkSuQmCC",az,q={},N=b.gdt.Utils.queryParams.boutiqueCode,B=c(".boutique-locator-map"),aG=c(".stores"),r=c("#content"),Q=c("body"),g=c("html"),v,aH,ab,W,U,y,n=15,d=[],T,k,aC={},at,aJ=false,ao,aK,H,aq,A=c(".boutique-locator").find("form"),o=c(".searchpanel"),P=o.find(".icon-search"),u=c("#storesSearchTemplate").clone(),X=c("#results"),O=c("#storesSuggestionTemplate").clone(),m=c("#suggestions"),M=m.find("div"),aw=A.find("input[type=search]"),K=false,aF=c("#customImage"),ah=c(".boutique-details"),ak=c(".show-locations"),G="",I,w=false;
function ap(aN){var aM=MontBlancSearchServiceUrl+((MontBlancSearchServiceUrl.indexOf("?")===-1)?"?":"&"),aO=[];
if(aN.searchtype){aO.push("f="+aN.searchtype)
}if(aN.id){aO.push("sap_number="+aN.id)
}if(aN.lat&&aN.lng){aO.push("lat="+aN.lat);
aO.push("lng="+aN.lng)
}if(aN.radius){aO.push("r="+aN.radius)
}if(aN.fulltext&&aN.country){if(!aN.searchtype){aO.push("f=bran")
}aO.push("cou="+aN.country+"&cityfull="+aN.fulltext)
}else{if(aN.country){aO.push("cou="+aN.country)
}if(aN.fulltext){if(!aN.searchtype){aO.push("f=bran")
}aO.push("cityfull="+aN.fulltext);
aO.push("lat="+aN.lat);
aO.push("lng="+aN.lng)
}}return aM+aO.join("&")
}function aD(){if(at){at.close()
}}function aE(){for(var aN=0,aM=d.length;
aN<aM;
aN++){d[aN].setMap(null)
}}function E(){c(".boutique-locator").find(".result, .bubble").each(function(){var aM=c(this);
aM.find(".favourite span").html(q.success);
aM.find(".favourite a").html(q.linkText)
})
}function R(){X.find(".my-boutique").removeClass("my-boutique");
B.find(".my-boutique").addClass("my-boutique");
c("#b"+L).find(".favourite").addClass("my-boutique");
B.find(".wb"+L).find(".favourite").addClass("my-boutique")
}function l(aP){aP.preventDefault();
var aO=c(aP.target).data("id"),aN=az.replace("html",aO+".html"),aM=b.gdt.Utils.checkCookie("RCHMFrontEndCookie")?"POST":"GET";
b.gdt.Utils.ajaxCall({type:aM,data:aM==="POST"?{boutiqueData:JSON.stringify(aC["b"+aO])}:"",url:aN,callback:function(){if(aM==="POST"){L=aO;
c(ah).find(".my-boutique").removeClass("my-boutique");
c(aP.target).parent(".favourite").addClass("my-boutique");
R()
}else{window.location.href=aN
}}})
}function s(aM){var aN=[];
if(aM.isBoutique){aN.push("boutique")
}if(aM.isTechnicalCentre){aN.push("technical")
}if(r.hasClass("mobile-view")){aN=["bubble"];
this._div=c('<div class="bubbleWrapper"><div class="'+aN.join(" ")+" w"+aM.boutiqueId+'"><a href="#" class="icon-close"><span>Close</span></a></div>');
this._div.find(".bubble").append(c("#"+aM.boutiqueId).html())
}else{this._div=c('<div class="'+aN.join(" ")+'"></div>');
this._div.append(c("#"+aM.boutiqueId).html())
}aD();
aM.setIcon(ac);
this.close=function(){this._div.remove();
aM.setIcon(U)
};
this.content=function(){return this._div
}
}function aB(aN){var aM;
if(!ab){ab=b.gdt.google.boutiqueMarker
}if(!U){U=b.gdt.google.mapMarker
}aM=new google.maps.Marker({position:aN.location,icon:((aN.type===1)?ab:U),clickable:true});
aM.isBoutique=(aN.type===1);
aM.isTechnicalCentre=(aN.type===4);
aM.boutiqueId=aN.bid;
aM.boutiqueOpen=function(){aD();
at=new s(aM);
aq.addHTML(at.content(),aM);
o.removeClass("hide-filter").addClass("hide-boutique");
if(!r.hasClass("mobile-view")){ah.append(at.content())
}if(r.hasClass("tab-port")){o.removeClass("type active").toggleClass("boutique-info")
}c(".directions").find("a").on("click",function(){c(this).attr({href:"http://maps.google.com/maps?daddr="+c(this).data("lat")+","+c(this).data("lng"),target:"_blank"})
});
aM.isOpen=true
};
aM.boutiqueClose=function(){aD();
aM.isOpen=false
};
google.maps.event.addListener(aM,"click",function(){Q.trigger("boutique:pin:clicked",{countryBoutique:c("#"+aN.bid).find(".country").html(),citySelected:c("#"+aN.bid).find(".city").html(),boutiqueName:c("#"+aN.bid).find("h2").html()});
var aO=new google.maps.LatLngBounds();
aM.boutiqueOpen();
v.setZoom(n);
v.setCenter(aN.location);
aO.extend(aN.location);
v.fitBounds(aO)
});
d.push(aM);
d.idx[aM.boutiqueId]=aM
}function t(aM){var aO=c(O.html()),aN=new google.maps.LatLngBounds();
aO.find("h2").html(aM.formatted_address);
aO.data("lat",aM.geometry.location.lat());
aO.data("lng",aM.geometry.location.lng());
z=new google.maps.LatLng(aM.geometry.location.lat(),aM.geometry.location.lng());
M.append(aO);
v.setCenter(z);
aN.extend(z);
I=aN
}function ae(aP){var aN=aP.length,aM,aO;
M.empty();
for(aO=0;
aO<aN;
aO++){aM=aP[aO];
t(aM)
}if(aN===1){M.parent().find(".one-suggestion").show();
o.removeClass("hide-filter")
}else{if(aN>1){M.parent().find(".more-suggestions").show()
}}}function p(aN){var aM=c(u.html());
aM.attr("id","b"+aN.bid);
if(aN.type===1){aM.addClass("boutique")
}aM.find("h4").html(aN.name).addClass("icon-pin");
aM.find("h3").remove();
aM.find(".address").html(aN.address.filter(Boolean).join("<br />"));
aM.find(".country").html(aN.country);
aM.find(".city").html(aN.city);
if(aN.onlinestatus==="1"){aM.find(".onlinestatus").removeClass("hide")
}if(g.attr("lang").indexOf("ja")!==-1){aM.find(".city").after(aM.find(".country").after(aM.find(".address")));
aM.find(".address").after(aM.find("h2"))
}if(navigator.geolocation){aM.find(".tel span").html('<a href="tel://'+aN.tel.replace(/\ /gi,"")+'">'+aN.tel+"</a>");
aM.find(".fax span").html('<a href="tel://'+aN.fax.replace(/\ /gi,"")+'">'+aN.fax+"</a>")
}else{aM.find(".tel span").html(aN.tel);
aM.find(".fax span").html(aN.fax)
}if(appointmentEndpoint!==""){aM.find(".view a").attr("href",appointmentEndpoint)
}else{aM.find(".view").hide()
}if(L&&aN.bid===L){aM.find(".favourite").addClass("my-boutique")
}aM.find(".favourite span").html(q.success);
aM.find(".favourite a").attr("data-id",aN.bid).html(q.linkText);
aM.find(".directions a").attr({"data-lat":aN.lat,"data-lng":aN.lng});
aM.find(".opening").html(aN.open.filter(Boolean).join("<br />"));
X.append(aM)
}function x(aS,aQ){var aN=aS.length,aM=[],aP,aO,aR=new google.maps.LatLngBounds();
for(aO=0;
aO<aN;
aO++){aP=aC[aS[aO].bid];
if(aS[aO].location){aR.extend(aS[aO].location)
}p(aP);
if(aP.city){aM.push(aP.city)
}}if(aM||aQ){o.find(".text .rslts").show()
}else{o.find(".text .rslts").hide()
}if(aS.length===0){o.find(".text .rslts").hide();
if(aQ){o.find(".text .norslts").show();
h(aQ);
z=new google.maps.LatLng(defaultLoc.lat,defaultLoc.lng);
v.setCenter(z);
v.setZoom(n);
aw.val(aQ);
ar();
aR.extend(z)
}else{o.find(".text .norslts").hide()
}}else{o.find(".text .norslts").hide()
}I=aR;
o.find(".count").html(aS.length);
o.find(".loc").html(aQ||aM);
o.removeClass("hide-filter");
o.removeClass("hide-boutique");
if(!aQ||aQ.indexOf(aM[0])===-1){aw.val(aM[0]||"");
ar()
}}function aL(aO,aM){var aN=false;
if(aO.length>0&&aM.length>0&&aO.length===aM.length&&aM.indexOf(aO)!==-1){aN=true
}return aN
}function aA(aN){c(document.body).trigger("receivedBtqResults",aN);
var aP=aN.branches,aM=[];
for(var aO=0;
aO<(aP||{}).length;
aO++){aM.push({bid:"b"+aP[aO].id,location:new google.maps.LatLng(parseFloat(aP[aO].latitude),parseFloat(aP[aO].longitude)),type:parseInt(aP[aO].type.id,10)});
aC["b"+aP[aO].id]={name:aP[aO].name,address:[aP[aO].adress_1,aP[aO].adress_2,aP[aO].adress_3,aP[aO].adress_4],city:aP[aO].city.name||"",continent:(aP[aO].continent||{}).name||"",country:(aP[aO].country||{}).name||"",lang:aP[aO].lang,tel:aP[aO].phone,fax:aP[aO].fax,lat:aP[aO].latitude,lng:aP[aO].longitude,open:[aP[aO].time_open_1,aP[aO].time_open_2,aP[aO].time_open_3,aP[aO].time_open_4,aP[aO].time_open_5,aP[aO].time_open_6,aP[aO].time_open_7],type:parseInt(aP[aO].type.id,10),bid:aP[aO].id,onlinestatus:aP[aO].click_collect||"0"}
}aM.sort(function(aR,aQ){return aR.type-aQ.type
});
return aM
}function ax(aP,aQ){var aM=(aP||{}).length,aN=0,aO=new google.maps.LatLngBounds();
d=[];
d.idx={};
if(!aJ&&aP.length&&z){aO.extend(z)
}for(aN=0;
aN<aM;
aN++){aB(aP[aN]);
if(!aQ&&aP[aN].location.lng()&&aP[aN].location.lat()){aO.extend(aP[aN].location)
}}if(!W){W=new MarkerClusterer(v,d.slice(),{styles:[{url:au,height:50,width:56,anchorIcon:[50,23],anchorText:[-9,-12]},{url:au,height:50,width:56,anchorIcon:[50,23],anchorText:[-9,-12]},{url:au,height:50,width:56,anchorIcon:[50,23],anchorText:[-9,-12]}]})
}else{W.clearMarkers();
W.addMarkers(d.slice())
}if(!aQ&&aP.length){if(v.getCenter()&&!aO.contains(v.getCenter())){new google.maps.Geocoder().geocode({address:JSON.parse(localStorage.boutiqueSearch).term?JSON.parse(localStorage.boutiqueSearch).term:aw.val(),region:b.gdt.google.mapRegion},function(aU,aS){if(aL(JSON.parse(localStorage.boutiqueSearch).term,G)){return
}else{if(aS===google.maps.GeocoderStatus.OK){for(var aT=0;
aT<aU.length;
aT++){aO.extend(new google.maps.LatLng(aU[aT].geometry.location.lat(),aU[aT].geometry.location.lng()))
}v.fitBounds(aO);
G=JSON.parse(localStorage.boutiqueSearch).term
}else{b.gdt.Utils.Console.warn("Unable to find address: "+aS)
}}})
}else{if(v.getCenter()&&aO.contains(v.getCenter())){var aR=new google.maps.Geocoder();
aR.geocode({latLng:z},function(aU,aS){if(aS===google.maps.GeocoderStatus.OK){for(var aT=0;
aT<aU.length;
aT++){aO=new google.maps.LatLng(aU[aT].geometry.location.lat(),aU[aT].geometry.location.lng())
}if(aU[1]){G=aU[1].address_components[2].short_name
}else{b.gdt.Utils.Console.warn("No results found")
}}else{b.gdt.Utils.Console.warn("Geocoder failed due to: "+aS)
}});
v.fitBounds(aO)
}else{if(v.fitBounds(aO)){v.fitBounds(aO)
}else{return
}}}}}function F(aN,aP){var aM;
if(aN.id){aM=ap({searchtype:"bid",id:aN.id})
}if(aN.lat&&aN.lng){aM=ap({searchtype:"geo",lat:aN.lat,lng:aN.lng,radius:aN.radius})
}if(aN.country){aM=ap({searchtype:"bran",country:aN.country})
}if(aN.fulltext){aM=ap({searchtype:"bran",fulltext:aN.fulltext})
}if(aN.fulltext&&aN.country){aM=ap({searchtype:"bran",fulltext:aN.fulltext,country:aN.country})
}if(!aN.id&&!aN.fulltext&&!aN.lat&&!aN.country){aM=ap({searchtype:"geo"})
}var aO={url:aM,dataType:"jsonp",type:"GET",callback:function(aQ){aP(aQ,aN.skipbounds)
},error:function(aS,aQ,aR){b.gdt.Utils.Console.warn("Map not found",aQ+" ("+aR+")");
b.gdt.Utils.Console.log("mapRequest",aS)
}};
b.gdt.Utils.ajaxCall(aO)
}function ay(aN,aP){function aQ(aR){if(aN.indexOf(aR.type)!==-1){return true
}return false
}var aM=T.filter(aQ),aO=aw.val();
X.empty();
aE();
ax(aM,aP);
if(aO.length>0||aM.length>0){x(aM,aO);
Y()
}}function C(){var aM="";
A.find("input[type=checkbox]:checked").each(function(){this._value=this.value||this._value;
var aN=this._value;
aM+=aN
});
return aM
}function ad(aN,aM){if(!w){am()
}T=aA(aN);
if(v.getBounds()&&T.length===0){v.setCenter(z);
v.setZoom(8);
F({lat:v.getCenter().lat(),lng:v.getCenter().lng(),radius:Z(v),skipbounds:true},ad)
}ay(C(),aM)
}function Z(aN){if(!aN){return null
}var aQ=6371,aM,aP=aN.getBounds().getNorthEast().lat(),aO=aN.getCenter().lat(),aS=aN.getBounds().getNorthEast().lng(),aR=aN.getCenter().lng(),aV,aU,aX,aW,aT=function(aY){return aY*Math.PI/180
};
aX=aT(aO-aP);
aW=aT(aR-aS);
aP=aT(aP);
aO=aT(aO);
aV=Math.sin(aX/2)*Math.sin(aX/2)+Math.sin(aW/2)*Math.sin(aW/2)*Math.cos(aP)*Math.cos(aO);
aU=2*Math.atan2(Math.sqrt(aV),Math.sqrt(1-aV));
aM=aQ*aU;
return aM
}function an(aM){aM=aM||"";
if(aM.indexOf(",")!==-1){aM=aM.slice(0,aM.indexOf(","))
}return aM
}function af(aO,aP){aO.preventDefault();
var aN=c(aO.target),aM;
aM=aP?aP:aK!==undefined?aK:aN.val();
aM=an(aM);
P.removeClass("icon-close").addClass("icon-search");
clearTimeout(aH);
aH=setTimeout(function(){o.find(".geo").hide();
if(!aL(aM,G)){S(aM)
}},250)
}function S(aM){if(aM!==null&&aM===ao){return
}aJ=true;
F({fulltext:aM},function(aN){if(aN.branches&&aN.branches.length&&aM.length>0){localStorage.boutiqueSearch=JSON.stringify({term:aM})
}else{if(!ao){z=new google.maps.LatLng(defaultLoc.lat,defaultLoc.lng);
v.setCenter(z);
v.setZoom(n)
}else{if(!aN.branches){v.setZoom(n)
}}}ao=aM;
T=aA(aN);
ay(C());
Q.trigger("boutique:results",{searchBoutique:true,boutiqueSearchTerm:aM,boutiqueSearchResults:aN.branches?aN.branches.length:0});
ar()
});
o.find(".text").removeAttr("style");
X.empty();
M.empty();
aD()
}function h(aN){function aM(aP){var aQ=new google.maps.Geocoder(),aO="";
aQ.geocode({address:aP,region:b.gdt.google.mapRegion},function(aS,aR){if(aR===google.maps.GeocoderStatus.OK){aO=aS;
ae(aO)
}else{aO="Unable to find address: "+aR
}})
}aM(aN)
}function al(aM){this.setMap(aM);
this.draw=function(){if(this._icon&&this._html){var aO=this.getProjection(),aN=aO.fromLatLngToDivPixel(this._icon.position);
this._html.css({left:parseInt(aN.x,10),top:parseInt(aN.y,10)})
}};
this.onAdd=function(){};
this.onRemove=function(){};
this.addHTML=function(aP,aR){var aQ=this.getPanes(),aN=this.getProjection(),aO,aS;
this._html=aP;
this._icon=aR;
c(aQ.floatPane).append(aP);
this.draw();
aO=aN.fromLatLngToDivPixel(aR.position);
aO.y+=-c(".bubble").height()/2;
aS=aN.fromDivPixelToLatLng(aO);
aM.setCenter(aS)
}
}function am(){var aM=[{elementType:"geometry.stroke",stylers:[{visibility:"off"}]},{elementType:"labels.icon",stylers:[{visibility:"off"}]},{elementType:"labels.text",stylers:[{visibility:"on"},{color:"#7f7c76"}]},{elementType:"labels.text.stroke",stylers:[{visibility:"on"},{color:"#000000"}]},{featureType:"poi",elementType:"geometry",stylers:[{visibility:"on"},{color:"#5c5a56"}]},{featureType:"landscape",elementType:"geometry",stylers:[{visibility:"on"},{color:"#5c5a56"}]},{featureType:"road",elementType:"geometry.fill",stylers:[{visibility:"on"},{color:"#000000"}]},{featureType:"water",elementType:"geometry",stylers:[{visibility:"on"},{color:"#7c7974"}]},{featureType:"transit",elementType:"geometry",stylers:[{visibility:"on"},{color:"#3c3d3c"},{weight:3.2}]},{},{featureType:"poi.attraction",elementType:"geometry",stylers:[{color:"#242424"},{visibility:"on"}]}];
var aP={zoom:n,mapTypeId:google.maps.MapTypeId.ROADMAP,disableDefaultUI:true,opacity:0,mapTypeControlOptions:{style:google.maps.MapTypeControlStyle.HORIZONTAL_BAR,position:google.maps.ControlPosition.BOTTOM_CENTER},panControl:true,panControlOptions:{position:google.maps.ControlPosition.RIGHT_TOP},zoomControl:true,zoomControlOptions:{style:google.maps.ZoomControlStyle.LARGE,position:google.maps.ControlPosition.RIGHT_TOP},scaleControl:true,streetViewControl:true,streetViewControlOptions:{position:google.maps.ControlPosition.RIGHT_TOP}};
if(z){aP.center=z
}al.prototype=new google.maps.OverlayView();
v=new google.maps.Map(B[0],aP);
aq=new al(v);
w=true;
if(searchOnPan){google.maps.event.addListener(v,"dragstart",function(){o.removeClass("hide-boutique").addClass("hide-filter")
})
}var aO={types:["(cities)"]};
var aN=document.getElementById("autoCompInput");
H=new google.maps.places.Autocomplete(aN,aO);
H.bindTo("bounds",v);
var aQ=new google.maps.InfoWindow();
google.maps.event.addListener(H,"place_changed",function(){aK=H.getPlace().formatted_address?H.getPlace().formatted_address:aN.value;
c(aN).val(aK);
A.trigger("submit")
})
}function ai(aM){if(c(aM.target).hasClass("icon-close")){aM.preventDefault();
aw.val("").focus()
}}function aj(){aw.val("");
ar()
}function ar(){if(aw.val().length>1){P.removeClass("icon-search").addClass("icon-close")
}else{P.removeClass("icon-close").addClass("icon-search")
}}if(aG.length>0){if(!o.hasClass("initialLook")){A.on("submit",function(aM){if(!window.jQuery){c(this).find("input").blur()
}af(aM,c(this).find("input[type=search]").val())
}).find("input[type=search]").on("blur",af).on(aI,aj)
}P.on(aI,ai);
M.on("touchstart",function(){k=false
}).on("touchmove",function(){k=true
}).on(aI,function(aN){var aM;
if(!k){aM=c(aN.target).parents(".suggestion");
ao=ao?ao:aw.val();
if(aM.length&&ao.length>0){localStorage.boutiqueSearch=JSON.stringify({term:ao,geo:{lat:aM.data("lat"),lng:aM.data("lng")}});
z=new google.maps.LatLng(aM.data("lat"),aM.data("lng"));
M.empty();
M.parent().find("p").hide();
F({lat:z.lat(),lng:z.lng(),radius:radius},ad)
}}k=false
});
X.on("touchstart",function(){k=false
}).on("touchmove",function(){k=true
}).on(aI,function(aP){var aO,aN,aM=c(aP.target).closest(".result").find(".onlinestatus a");
if(c(aP.target)[0]===aM[0]){k=true
}if(!k){aO=c(aP.target).parents(".result");
if(aO.length){o.find(ak).toggleClass("mtb-hide",(X.find(".result").length<=1));
aN=d.idx[aO.attr("id")];
aN.boutiqueOpen();
z=new google.maps.LatLng(aO.data("lat"),aO.data("lng"));
v.setZoom(n);
Q.trigger("boutique:result:clicked",{countryBoutique:aO.find(".country").html(),citySelected:aO.find(".city").html(),boutiqueName:aO.find("h2").html()})
}o.removeClass("boutique-info active type")
}k=false
});
ah.on(aI,".favourite a",function(aM){l(aM)
});
B.on(aI,".favourite a",function(aM){l(aM)
});
B.on("click",".icon-close",function(aM){aM.preventDefault();
aM.stopPropagation();
aD()
});
A.find("input[type=checkbox]").on("change",function(){ay(C())
});
A.find(".toggle").on(aI,function(){o.removeClass("type boutique-info").toggleClass("active")
});
A.find(".type, .filter > legend > .icon-arrow-down").on(aI,function(){o.removeClass("active boutique-info").toggleClass("type")
})
}function D(aM){clearTimeout(j);
K=true;
if(aM){z=new google.maps.LatLng(aM.coords.latitude,aM.coords.longitude);
o.find(".geo").hide();
F({lat:z.lat(),lng:z.lng(),radius:radius},ad)
}else{J()
}}function J(aM){clearTimeout(j);
z=new google.maps.LatLng(defaultLoc.lat,defaultLoc.lng);
o.find(".geo").hide();
F({lat:z.lat(),lng:z.lng(),radius:radius},ad)
}function Y(){aF.addClass("hide");
c(".boutique-locator").removeClass("loader");
c(".searchpanel").removeClass("hide initialLook")
}function f(){c(".boutique-locator").removeClass("loader");
aF.removeClass("hide");
c(".searchpanel").addClass("initialLook")
}function av(){var aM,aN,aO;
am();
if(N){F({id:N},ad);
Y();
return
}if(navigator.geolocation){navigator.geolocation.getCurrentPosition(function(aP){D(aP);
Y();
v.setZoom(11)
},function(){if(localStorage.boutiqueSearch&&localStorage.boutiqueSearch.length>1){aM=localStorage.boutiqueSearch?JSON.parse(localStorage.boutiqueSearch):false;
aN=aM.term;
aO=aM.geo;
aw.val(aN);
if(aO){F({lat:aO.lat,lng:aO.lng,radius:radius},ad)
}else{A.submit()
}}else{f();
J()
}});
if(b.gdt.Utils.Browser.isFirefox||b.gdt.Utils.Browser.isOldIE){j=setTimeout(function(){if(!(K)){J();
f()
}},5000)
}}else{f();
J()
}}function aa(aN){var aM=typeof aN==="string"?aN:"filter";
if(o.attr("class").indexOf("hide")!==-1){o.removeClass(function(aO,aP){return(aP.match(/(^|\s)hide-\S+/g)||[]).join(" ")
});
if(!I){I=new google.maps.LatLngBounds()
}v.fitBounds(I);
aD()
}else{o.addClass("hide-"+aM)
}ah.empty()
}function V(){clearTimeout(y);
y=setTimeout(function(){var aM=c(b).width();
if(aM>=668&&aM<=768){r.removeClass("mobile-view").addClass("tab-port")
}else{if(aM<=668){r.removeClass("tab-port").addClass("mobile-view");
o.removeClass("hide-boutique boutique-info")
}}},200)
}var ag=function(){r.addClass("boutique-stores");
ak.on(aI,aa);
Q.on("userinteractionsdata",function(){var aM=b.gdt.UserInteractions.data();
if(aM&&aM.boutique){L=aM.boutique.savedBoutique;
az=aM.boutique.endpoint;
q=aM.boutique.messages;
E();
R()
}});
Q.on("google:maps:loaded",function(){if(b.gdt.oldBoutiqueLocator===true){if(B.length&&aG.length>0){av()
}}});
V();
c(b).smartresize(V)
};
return{init:ag}
};
b.gdt.Boutique.Stores=new a()
}(document,window,window.jQuery||window.Zepto));
(function(e,a,c){if(a.gdt.oldBoutiqueLocator===true){var b=c(".stores");
if(b.length>0){a.gdt.Boutique.Stores.init()
}else{a.gdt.Boutique.init()
}}}(document,window,window.jQuery||window.Zepto));
(function(g,a,e){a.gdt=a.gdt||{};
var f=a.gdt.googleMapApi||{},c=null,b={zoom:15,map:"",infoWindow:"",markerClusterer:"",isMapInitialised:false};
function j(){var d=g.createElement("script"),k;
d.src="/etc/designs/richemont-mtb/clientlibs/core/js/lib/geolocationMarker.js";
g.body.appendChild(d);
k=setInterval(function(){if(a.GeolocationMarker){clearInterval(k);
e(c.selectors.body).trigger("google:maps:loaded")
}},100)
}f.onInfoWindowClose=function(){c.activeInfoWindow=null
};
f.closeInfoWindow=function(){b.infoWindow.close()
};
function h(){c.activeInfoWindow=null;
if(b.infoWindow){b.infoWindow.close()
}return b.infoWindow
}f.clearMap=function(){if(b.markerClusterer){b.markerClusterer.clearMarkers()
}for(var k=0,d=c.markers.length;
k<d;
k++){c.markers[k].setMap(null)
}};
f.getLatLng=function(k,d){return new a.google.maps.LatLng(k,d)
};
f.createMarkerCluster=function(){b.markerClusterer=new a.MarkerClusterer(b.map,c.markers.slice(),{styles:[{url:c.googleCluster,height:50,width:56,anchorIcon:[50,23],anchorText:[-9,-12]},{url:c.googleCluster,height:50,width:56,anchorIcon:[50,23],anchorText:[-9,-12]},{url:c.googleCluster,height:50,width:56,anchorIcon:[50,23],anchorText:[-9,-12]}]});
b.markerClusterer.addMarkers(c.markers.slice())
};
f.markerClickHandler=function(d,l,k){if(k==="mobile"){b.infoWindow.setContent(d);
b.infoWindow.setPosition(l);
b.infoWindow.open(b.map)
}b.map.setCenter(l);
b.map.setZoom(16)
};
f.getMarker=function(k){var d=new a.google.maps.Marker({position:k.location,draggable:false,icon:a.gdt.google.mapMarker,id:k.bid});
b.map.setCenter(k.location);
b.map.setZoom(10);
return d
};
f.triggerMapEvent=function(d){a.google.maps.event.trigger(d,"click")
};
f.isMapInitialised=function(){return b.isMapInitialised
};
f.initializeMap=function(){if(b.markerClusterer){b.markerClusterer.clearMarkers()
}var d={center:{lat:a.defaultLoc.lat||51.0851912,lng:a.defaultLoc.lng||5.9697617},zoom:b.zoom||10,zoomControl:true,streetViewControl:false,mapTypeControl:false,mapTypeId:a.google.maps.MapTypeId.ROADMAP,disableDefaultUI:true};
b.map=new a.google.maps.Map(e(c.selectors.mapContainer)[0],d);
b.infoWindow=new a.google.maps.InfoWindow({pixelOffset:new a.google.maps.Size(0,-50)});
a.google.maps.event.addListener(b.map,"click",h);
b.isMapInitialised=true
};
a.initializeGoogleMap=function(){a.gdt.google.mapMarker=new a.google.maps.MarkerImage(c.markerImg,new a.google.maps.Size(89,89),new a.google.maps.Point(0,0),new a.google.maps.Point(15,45),new a.google.maps.Size(45,45));
if(a.gdt.google.requireGeoMarker){j()
}else{e(c.selectors.body).trigger("google:maps:loaded")
}};
f.loadMap=function(){c=a.gdt.boutiqueFinder.getDOMSelectors();
var d=g.createElement("script"),k=a.gdt.google.mapLanguage,l=a.gdt.google.mapRegion,m=a.gdt.google.mapKey;
d.type="text/javascript";
if(k==="ko"){k="EN"
}if(l==="HK"){k="zh-TW"
}d.src="//maps.googleapis.com/maps/api/js?key="+m+"&libraries=places&region="+(l||"EN")+"&language="+(k||"EN")+"&callback=initializeGoogleMap";
g.body.appendChild(d)
};
a.gdt.googleMapApi=f
})(document,window,window.jQuery||window.Zepto);
(function(e,a,c){a.gdt=a.gdt||{};
a.gdt.boutiqueFinder=a.gdt.boutiqueFinder||{};
var b=function(){var k={selectors:{html:"html",body:"body",content:"#content",parent:".mtb-boutique-locator",btqSearchPage:".mtb-btq-search-page",btqStorePage:".mtb-btq-store-page",sideBar:".mtb-btq-store-result-sidebar",searchBox:".mtb-btq-searchBox",countryList:".mtb-boutique-country-list",selectedCountry:".mtb-boutique-country-list option:checked",stateList:".mtb-boutique-state-list",selectedState:".mtb-boutique-state-list option:checked",cityList:".mtb-boutique-city-list",selectedCity:".mtb-boutique-city-list option:checked",filter:".mtb-btq-filters",searchSubmit:".btq-search-btn",btqBackToSearch:".btq-back-to-search.icon-arrow-left",cityHeader:".mtb-btq-search-city",mapContainer:".boutique-locator-map",resultCountCont:".mtb-btq-result-count",resultCount:".result-count",btqStoresList:".mtb-btq-search-results",btqStoreListItem:"#storesSearchTemplate",listItem:".result",listMoreInfo:".more-info.accordion-top-link",listClose:".close.accordion-bottom-link",ul:"ul"},cssClass:{btqShow:"btq-show",btqHide:"btq-hide",errorClass:"btq-error",filterError:"filter-error",loader:"loader"},mapType:"",baiduMapContainer:"boutique-locator-map",markerImg:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAG4AAAB0CAMAAABTyPc0AAAAYFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAwMAAAAAAAAAAAAAAAD///8iIiITExNfX1/S0tL19fW6urp8fHzj4+M+Pj6kpKSTk5OptP20AAAAE3RSTlMA8AucVyRiawMWS99AiDT8xrB2i2/GFgAAA4lJREFUeAHN2e2WsygMAGBAQEAENFb7Ob3/u9w/u747M5LamJ7d5wZyEpKArdjDmxS11jF58VkujU2RsJKlGZMTH6HsIGGDHLQS3GIjoUo2kbWIuoMXimYr6hoM1WnBwRTYqZjjdewz7JZ7x5fa5xPUEt4kgyAbgWAUNK4Bkp4WbQCixnHnhmvE23pAsNezhUOseEvMcIhM4g2+g4M6JfYbAMfbLhoYBLGT6oBBp/hngGGb+QwspBd7NMCk508OIxXHrTMvt+fX87acOE7PdYDJy3n6x/k2A6oTLwXALPfp3y43QMVDjTJfp5/Op0OrxUmoOt2n3+4PrFmcwEU82oYLll8ib5R8nrbdZ3pvFqh5TjVfUDVQj+401dWPTwqUgZqvqe4KVZ42dfNlQtS7JdA22DJh6tPe0hoTqyVWzZ62U84T5kLcKwNUXCbUjEwCIVyecCdauPLfh/tkMdlb5f80CJZ7zLXAJO4llgRGZeT+IdRSOuJ9d7pQLqBCvs1vU82TfpsnqLpO284ZqhL9JTZvz979dORd2wAWD49G+CiJUJd/D/t1BkQ6+I3wOH9PbQFMd/zbdble1syWfPz71cAL+bHcnrflkeGF7Pl/5UAUa63WOoSYkjFeKYc3y0F9+4fVISazGbAAi679zlodklH4LUTXtL9ZHZN3+CzQyHabDT9rOgKDoa3R8XtJvWRIbmyrbDAOGXVicghtFJIeLTk8nkPSIyaHCN4h6RGSw9mkCM2JJIezwYs/lOSfOez0WoaFgrLGMa2Wrt3D4L8KUJPDs1uVzyanf6zqxHDPIYLi+VG6tPtq+TOcl3wTjmyVVcvXJ8hSWbnyqT6x0SOvJP4+8Tx/YRTCENC7RY6ENqG/yhriua0Kd5/o5ESdybBbHvfdO5ie81Jto3fEDz5CKXXy4pXINXI2GLFDwzNyNnH+9dvRTw0vJ6WUYb1veMo50FuEUM5u95Nyj3CglHr9nmMr54DVEQ9GKGeHfDkiwYjdmftKMHyuqeUcSNsY57v3ShmMd4LOxfxGKUPy4hjX7y2l1dGLo5wveCmx1wGBSxJ9DK3BlBMc1PjyMWSTUYKLH/BLTgfjBB9nOuTg8NuaQulcnYHgnRPMfLM9AzZSpxrny8bB6ZiUQDFMgxxZGgSnbF4PDvl4Yj++4e8zw4eaa5mVjd9dP3d8crT4Vc3H6Zx7fBGz8n2TGBbxX/E+/v6WmTJ0AAAAAElFTkSuQmCC",selPin:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAtCAQAAACKL8qfAAAACXBIWXMAAAsTAAALEwEAmpwYAAADGGlDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjaY2BgnuDo4uTKJMDAUFBUUuQe5BgZERmlwH6egY2BmYGBgYGBITG5uMAxIMCHgYGBIS8/L5UBFTAyMHy7xsDIwMDAcFnX0cXJlYE0wJpcUFTCwMBwgIGBwSgltTiZgYHhCwMDQ3p5SUEJAwNjDAMDg0hSdkEJAwNjAQMDg0h2SJAzAwNjCwMDE09JakUJAwMDg3N+QWVRZnpGiYKhpaWlgmNKflKqQnBlcUlqbrGCZ15yflFBflFiSWoKAwMD1A4GBgYGXpf8EgX3xMw8BSMDVQYqg4jIKAUICxE+CDEESC4tKoMHJQODAIMCgwGDA0MAQyJDPcMChqMMbxjFGV0YSxlXMN5jEmMKYprAdIFZmDmSeSHzGxZLlg6WW6x6rK2s99gs2aaxfWMPZ9/NocTRxfGFM5HzApcj1xZuTe4FPFI8U3mFeCfxCfNN45fhXyygI7BD0FXwilCq0A/hXhEVkb2i4aJfxCaJG4lfkaiQlJM8JpUvLS19QqZMVl32llyfvIv8H4WtioVKekpvldeqFKiaqP5UO6jepRGqqaT5QeuA9iSdVF0rPUG9V/pHDBYY1hrFGNuayJsym740u2C+02KJ5QSrOutcmzjbQDtXe2sHY0cdJzVnJRcFV3k3BXdlD3VPXS8Tbxsfd99gvwT//ID6wIlBS4N3hVwMfRnOFCEXaRUVEV0RMzN2T9yDBLZE3aSw5IaUNak30zkyLDIzs+ZmX8xlz7PPryjYVPiuWLskq3RV2ZsK/cqSql01jLVedVPrHzbqNdU0n22VaytsP9op3VXUfbpXta+x/+5Em0mzJ/+dGj/t8AyNmf2zvs9JmHt6vvmCpYtEFrcu+bYsc/m9lSGrTq9xWbtvveWGbZtMNm/ZarJt+w6rnft3u+45uy9s/4ODOYd+Hmk/Jn58xUnrU+fOJJ/9dX7SRe1LR68kXv13fc5Nm1t379TfU75/4mHeY7En+59lvhB5efB1/lv5dxc+NH0y/fzq64Lv4T8Ffp360/rP8f9/AA0ADzT6lvFdAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAMrSURBVHjanJZriFVVGIafGWWO0hw9Z5qCQIqCoQwi6aIEYYN2AavpR3mLDCsooV9qpIX1I4QJREiNbmoXSTIq7IJ2pyAUA6UihsDRhqlMaShMpyxzePqxZs/stc+ec7bzrp/fe57z7bXW960P8jWLx9lBDwMc5wh7eYGHuZiCamUF+zFnnWE3tzYG3Elf8pMpXus8u5zr9DToHTrqATYF22SX+qFHTDTkQV9yTgI5RddYgHeD5UH7zNcnXp9g1uQBdiK2+7H1tSaB3JcFPIN4oYdsrJcTyMw0YDbiOfZaTBsC4jcmJIBmfkT8yOJaHCBPJoj7ERfX2P7xPZ9ytRv9Jic2VeQvKgHxNTZ7LGPa6iWp23CHhzPxdSGyHKAD8a6M4TERy1atWrFFbPfbyDHoZJE9AMsQd0bh18WS51odWW3iRZ6MXPPDpT8PtmHJgVTohBdIBAgLn4gQm8On3AYHcEYU2i5OqQG0idM9lfLtGzmVozgvQiyXGkDVqpOcZE/K12eTyHNwEhdEiAfEthxEWdyX8h21JLINBrArQqwSKzmIFls9mPL95ASRzbAXL40Q748cZ3YvrvK/lO+LsBcr4Vkkqo7TXpZzIlPFDdFfrQ2I62AR4qZMXwiFP5pBVbzGocg1S+QPSlDhX5yZuZ3Pi1iyYptlEa9IdTHV3pDDG6FG3kIy11e/tDPsuHi+K6IboboyxG4PiE7Eu3NK+ju3u8UP/L0m8neo1F+YmJT7D9iUSbS+1occHhntWksQHyoMOGO7yCDlUUQT/dhsf0HE0yGHtXH7XYI4vxDgROgUg7Rme/ghxP0FEMtCDo/WviO3IF7dENCbdO+JeY/Rp4ivNkDMDogF+Q9iB2Jrpr3F2hEAe8Z+ltch3jsm4E8rAXF5vbe9H/HzMRCLAqC7/nzRiTgtU5NBuwPg1/yNTOuVMCBkdTrcSLmh8ZxT4hjiZxnEPQGwpdi0dXNoOIMpwNsB8DMtRUe2FxEXjgAGhtsON1JYJXoRXxtG3FToJLK6ErHZw2p3AHzPWWsV4lx3BcAQ0xiHvkpNm0sZl8r0DAPeZNwq083W2vEw1v8DAHOtGQh+MrZjAAAAAElFTkSuQmCC",googleCluster:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAvCAMAAACWqWnGAAAAP1BMVEUAAABUVFRHR0dmZmZjY2NJSUlJSUlmZmZjY2NUVFRHR0cyMjI1NTW1tbXY2NhmZmZzc3P///9bW1tRUVGPj48C1JxlAAAADXRSTlMASGmp3SMAAAAAAH+T9uNU/AAAAY5JREFUeF6llMl2wzAIRSUESVqNHv7/W5s6zxkM1Ivehb3hHh6awhuREnNnTiSXPwiXHeL+IsUvl4B/hPCS5KRL6hr6tgnb1zB8J3wa850zJ7wby4LvTnTGj7swr7VNU6vr/JSuBuF6ZRijTaCN3UmmQjDW6Y11d8RaZFYGHK9NkM2Y+3Sgz5vCN0WgR5N6VOriJQvJaII2zt4ENibBNM4wUKpWqqv0c+X/XU5n0eNjxYZWxuyczBAfw7Sj0bAv1hnDefHXWCsJa2ZvfrTui+A6fkRrs3HEQLjdGM5bnwqjk32RI679MurWqdWxwOjiPErcd6mvdzoEDG9d5OvWBtIdCGhidUEb5yETiUSUcyaiKPJUom2wRMrll1zwJ4FySZYxCpWSPykl4hkXs0k2KEX8Z3yUbDoUsD+sDM4nil4BCFYwkPxYenygYlkCFhnEk1jYFSgq2ih0rC85bgIU4MXCtgMox2hWvVYQDbFUvVYAI9azHPl9BdFUva0A2jax5KzLtQLSYDLj+IoklPv8AIhAZG1tvWXGAAAAAElFTkSuQmCC",baiduCluster:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAABCCAYAAAAVHYVwAAAIeklEQVRoBe1ab2hU2RU/52Ve1GjiH5T4N7GxFUsmFW0jRfpBRFkNKKVTnED1g99K2e7aD4stgmBL2WWxpRBYpLVri/2Tl7eJrdk0SqFG2i3FbWStmcRUmSrW1iT+y0gSk0nuKb9n3vTm+Wbem8mUfpkLw73v3HN/55577jn33PeGqFRKK1BagdIKlFagtAKlFSitQGkFSitQWoHSCvx/VoCLLba5uXmjUupLzPx5Zv6MiCwgIkVEZcw8ppT6OxHdEJGPbNv+R7HkF0WRXbt2Raqrq2uZ+asicoCIGpm5PNskRWSKiD5m5k4R+WBoaOheT0/PdDb+MPR5K3LgwIGVFRUV32TmY0RUFUaohyclIj8aHx9v6ezsfOTpC/04L0UOHTrUZBjGe0RUG1piFkYRuauUet227a4sLDnJZTl7c3TG4/E3mfkcM6/wYxMRYmYyDMOp0QbNpXvHMPMyZo5Ho9FUIpH4i7c/6LkgReLx+FvM/ANmNrwCMNGysjJauHChU8/MzJBS8HUi0zRpwQL4PhHoUE4vwGPmffX19eOJROLPel9Qey5SEDcRxePxrzHzL/xYMTFM9MWLF/TgwQNKpVIZa4Afk6+oqKB169ZRVVUVTU5O+ioEXhE5bFnWL/3k+NHyUiQWi33ONE2s1GIvWCQScSZ99+5devbsGa1du5a2b99OmzdvdqwDJe7cuUM3btyge/fuEfg3bdrk1Ol02guH57F0Or2zvb39b36dXlpoRfbv319VVVUFn/iKDoKtVF5e7qzu4OAgbdiwgQ4fPky7d++mpUuXOn0u//T0ND1//pyuX79O58+fp97eXtq4cSOtWLHCGe/daiLSkUqljnZ3d6dcjGx1aB/Ztm3bHsMwvqcDQQlspfHxcRoYGKB9+/bR6dOnqbGxkRYvXuz4iM4Px1+0aBHV1dXR3r17nf4rV644AWHZsmUERXVlmPmzpml+1N/ff1vH8WuHUuTgwYOV5eXlbzPzZhfEtQS2zM2bNykWi9HJkyedve/y5KphxR07dtCSJUuoq6vLUbCysvIVZQzDWFpXV9c5ODiIQzRreSXq+HGapvkpItqv92HlEIWw53fu3EnHjx93fEHnCdM+cuQIHT16lPr7+x0l4Dt6EZHXTNOs0Wl+7VCKRCKR15g5Yz1YA+H1/v37jrMeO3bM2Up+AsLQ4FNbtmxxtie2KvDdwsyRSCSy133OVodShJm/oAPAGvgh+jQ1NVE0GtW7826vXr3aCRAI1xMTE6/4FhF9MQg0lCIi8mkdCOZHiMXW2rNnj95VcHvr1q20Zs0aevjwoRPpPFbJ+GY2AaEUYeb1LgAE4OR++vQpVVdX0/r1mS6XpaAa5w5CN3D1yDULVh0EGkoREZlz3kAQTm+c0vgVo8Dnli9f7kB50xcRMYNkhFKEmf/rfUGIBfbD0q4l9G0VFi6UIkSUieEQBkFuTgXnLEZB3gW/Az62rl6YeVx/9muHVeRf+mCYHknfyMiI45x6X6Ht4eFhJ9EELopuFRF5EIQbVhHcszMFimA/YxWvXr2aoc+ngRQHEWvVqlWEJNLdZsBk5ltB2KEUEZE5dwPcL5A3IVxeunSJbt8OTIVyzgORqrW11dmuSFOwUHoRkT/pz37tUIoQUY+IZNCxWrBGbW0tPXnyhM6cOeM8+wkIQ7tw4QJdu3bNOd2npjLu6AwVkQml1B+DcEIpMjEx8U8i6tbBYBWsXENDA2EiZ8+e1btDt2FRZMy4tyCUIwPWCzN3jY6O/lun+bXnhgc/DiJC5hmNRidxp3ZZYBUIhXA4aGdnp6MYLlPexM8d462xACdOnKCVK1c61h0bG5vjG+BXSr118eLFfu9Y73MoRTCooaEBcfYQEVW6IFAGjokLFO4Zly9fpr6+PufEh//Aj/wKeFpaWpwfnBs3xSxhPMnM7/b19QVerOac2H5CdVpzc/NxInpHp7ltnCtI+pLJpHMOwDK4YOF+Dqth7z969Mi5FcIfcGbU1NQQEkZkCdiqeqQCroi8YVlWiysjVz03+c/F+fLlwWXDME4x88tXIRo/nB+XJGTCjx8/diyDqywuUPjBcuBBG5EJORrSEiihn+oaZEop1aM952zmZREgNTc3/5CIvuWHiglhO8FHEAgwcT0K4cTGFnT7weO1gosrIu9YlvUd9zmozssiAFNKtRuG8TpeU3nBMSko4x5o2G746cXtBy2HEqNE1KGPC2qHdnYXKJFI3K+vr1/DzI0uLVuNSXt/2Xg99PcsyzrnoeV89A8rOYc4VvmViDwPYCuoW0RGiKg138EFKWLbNlKG9/MVFpL/Z5ZlfRySN8NWkCIYrZT6qYgU7UMNMEVkQCn148zs8mgUrIht2zdF5Nd5yApkZeY227bvBDL6MBSsCLBE5F0i+qsPbt4kZNijo6Nv5z1wdsC8FLFte1REQr8xzzZJEUGmeK67u3syG08QPe8D0Q8wHo//npkLfi8kIt2WZTX5YYelzcsirhCl1KnZsOmS8qmHiei7+Qzw4y2KIrPh2PYTEEQTkZ9blpX3pzYvblEUAejU1NQpIkp6BeR6FpF+pdT3c/GE7cs7RckGfOvWrbFoNIrPywfx54BsfC4d39qVUt+wbfsTlzafumgWwSRmZmY+EJHfhJxQazKZ/DAkbyBbURWxbXtqenr620T0OEDyUDqdPtHb2+v78TBgrG93URWBhPb29qSIvOkrbZaolHqjo6MDLzSKVoquCGamlPotEbVlmWWbiPwuS1/B5KIciH7SY7FYvWmaeB/18hX7S6ZhEdllWdaA35j50AKjS6HgAwMDI9FodIiIvuxiKKW+3tbW9gf3uZj1/0wRTLKvr++TaDSKD5nbiOgnlmUV5czwW4C87+x+ILloSqn3mbkGJ3guvvn2/QcXJWFkpAXzTAAAAABJRU5ErkJggg==",isMapInitialised:"",markers:[],activeInfoWindow:null,myBoutique:"",myBoutiqueEndpoint:"",myBoutiqueMessages:"",defaultCountryValue:"",defaultStateValue:"",defaultCityValue:"",selectedCountryIdx:""},M=c(k.selectors.parent),q={mapApi:"",elem:{$content:c(k.selectors.content),$btqSearchPage:c(k.selectors.btqSearchPage),$btqStorePage:c(k.selectors.btqStorePage),$searchBox:M.find(k.selectors.searchBox),$countryList:M.find(k.selectors.countryList),$stateList:M.find(k.selectors.stateList),$cityList:M.find(k.selectors.cityList),$submitSearch:M.find(k.selectors.searchSubmit),$sideBar:M.find(k.selectors.sideBar),$filters:M.find(k.selectors.filter),$btqBackToSearch:M.find(k.selectors.btqBackToSearch),$cityHeader:M.find(k.selectors.cityHeader),$resultCountCont:M.find(k.selectors.resultCountCont),$resultCount:M.find(k.selectors.resultCount),$btqStoresList:M.find(k.selectors.btqStoresList),$btqStoreListItem:c(k.selectors.btqStoreListItem).clone(),$listItem:""},states:{storePage:"store",searchPage:"search"},defaultCountry:M.data("default-countryid"),boutiques:{},boutiqueData:{},ajaxUrl:a.MontBlancSearchServiceUrl},L,ab,Z,V,Q;
var P=function(ag,ah){var ad=3.141592653589793*3000/180;
var af=Math.sqrt(ah*ah+ag*ag)+0.00002*Math.sin(ag*ad);
var ae=Math.atan(ag/ah)+0.000003*Math.cos(ah*ad);
var ac={lat:af*Math.sin(ae)+0.006,lng:af*Math.cos(ae)+0.0065};
return ac
};
function y(){k.activeInfoWindow=null;
L.closeInfoWindow()
}function f(){if(Z){Z.removeMarkers(k.markers)
}L=new a.BMap.Map(k.baiduMapContainer);
L.centerAndZoom(new a.BMap.Point(121.452433,31.22638),6);
L.addControl(new BMap.NavigationControl({anchor:BMAP_ANCHOR_BOTTOM_RIGHT,type:BMAP_NAVIGATION_CONTROL_SMALL}));
L.enableScrollWheelZoom(true);
ab=new a.BMap.Icon(k.markerImg,new a.BMap.Size(110,116),{imageSize:new a.BMap.Size(45,45)});
V=[{url:k.baiduCluster,size:new a.BMap.Size(50,66),opt_anchor:[16,0],textColor:"#000",opt_textSize:12}];
L.addEventListener("click",y);
Q=true
}a.initializeBaiduMap=function(){c("body").trigger("baidu:maps:loaded");
var ad=e.createElement("script");
ad.src=a.gdt.boutique.baiduTextIconApi;
e.body.appendChild(ad);
var ac=e.createElement("script");
ac.src=a.gdt.boutique.baiduMarkerClusterer;
e.body.appendChild(ac)
};
function X(){var ac=e.createElement("script"),ad=a.gdt.baidu.mapKey;
ac.type="text/javascript";
ac.src=a.gdt.boutique.baiduAPIEndPointUrl+"&ak="+ad+"&callback=initializeBaiduMap";
e.body.appendChild(ac)
}function B(){q.elem.$btqStoresList.find(".result").each(function(){var ac=c(this);
ac.find(".favourite").find(".text").html(k.myBoutiqueMessages.success);
ac.find(".favourite a").html(k.myBoutiqueMessages.linkText)
})
}function T(){q.elem.$btqStoresList.find(".my-boutique").removeClass("my-boutique");
c(k.selectors.mapContainer).find(".my-boutique").addClass("my-boutique");
c("#b"+k.myBoutique).find(".favourite").addClass("my-boutique");
c(k.selectors.mapContainer).find(".wb"+k.myBoutique).find(".favourite").addClass("my-boutique")
}function j(af){af.preventDefault();
var ae=c(af.target).data("id"),ad=k.myBoutiqueEndpoint.replace("html",ae+".html"),ac=a.gdt.Utils.checkCookie("RCHMFrontEndCookie")?"POST":"GET";
a.gdt.Utils.ajaxCall({type:ac,data:ac==="POST"?{boutiqueData:JSON.stringify(q.boutiqueData["b"+ae])}:"",url:ad,callback:function(){if(ac==="POST"){k.myBoutique=ae;
q.boutiqueData["b"+ae].find(".my-boutique").removeClass("my-boutique");
c(af.target).parent(".favourite").addClass("my-boutique");
T()
}else{window.location.href=ad
}}})
}c(k.selectors.body).on("userinteractionsdata",function(){var ac=a.gdt.UserInteractions.data();
if(ac&&ac.boutique){k.myBoutique=ac.boutique.savedBoutique;
k.myBoutiqueEndpoint=ac.boutique.endpoint;
k.myBoutiqueMessages=ac.boutique.messages;
B();
T()
}});
function h(ac){if(ac===q.states.storePage){q.elem.$btqStorePage.show();
q.elem.$btqSearchPage.hide()
}else{if(ac===q.states.searchPage){q.elem.$btqStorePage.hide();
q.elem.$btqSearchPage.show()
}}}function H(ae){var ad,ac;
if(c(q.elem.$searchBox.find('input[name="bt"]')).prop("checked")){ad=true
}else{ad=false
}if(c(q.elem.$searchBox.find('input[name="ar"]')).prop("checked")){ac=true
}else{ac=false
}if(ad||ac){if(ae){ae=true
}else{ae=false
}if(c(q.elem.$searchBox).find(".filter-label").hasClass(k.cssClass.filterError)){c(q.elem.$searchBox).find(".filter-label").removeClass(k.cssClass.filterError)
}}else{c(q.elem.$searchBox).find(".filter-label").addClass(k.cssClass.filterError);
ae=false
}return ae
}function aa(){var ac="";
if(q.elem.$cityList.val()!==""){ac=true;
if(q.elem.$cityList.hasClass(k.cssClass.errorClass)){q.elem.$cityList.removeClass(k.cssClass.errorClass)
}}else{q.elem.$cityList.addClass(k.cssClass.errorClass);
ac=false
}return H(ac)
}function p(ae,ac){if(ac===undefined){ae.stopImmediatePropagation();
var ad=c(ae.currentTarget).parent();
ad.hide();
if(ad.hasClass("more-info")){ad.parent().find("ul").show();
ad.parent().find(".close.accordion-bottom-link").show()
}else{if(ad.hasClass("close")){ad.parent().find("ul").hide();
ad.parent().find(".more-info.accordion-top-link").show()
}}}else{ae.find(".more-info.accordion-top-link").hide();
ae.find("ul").show();
ae.find(".close.accordion-bottom-link").show()
}}function l(ac){q.elem.$btqStoresList.scrollTop(0);
var ae=q.elem.$btqStoresList.find("#"+ac),af=ae.find(".btq-header").text(),ag=q.elem.$cityHeader.text();
p(ae,"pinClicked");
var ad=(ae.offset().top)-(q.elem.$btqStoresList.offset().top);
q.elem.$btqStoresList.scrollTop(ad);
a.gdt.Tracking.MTBtracking.trackBtqResultSelected(ag,af)
}function z(){if(k.mapType==="google"){a.gdt.googleMapApi.clearMap()
}else{if(k.mapType==="baidu"&&Z){Z.removeMarkers(k.markers)
}}q.elem.$btqStoresList.empty();
k.markers=[]
}function r(ae){ae.stopImmediatePropagation();
var ac=c(ae.currentTarget);
var ad=ac.parent().parent().parent().data("marker-id");
if(q.elem.$content.hasClass("mobile-view")){v("mobile");
q.elem.$resultCountCont.hide();
q.elem.$btqStoresList.hide()
}if(k.mapType==="google"){a.google.maps.event.trigger(k.markers[ad],"click")
}if(k.mapType==="baidu"){k.markers[ad].dispatchEvent("click")
}}function I(ae,ad){var ac=c(q.elem.$btqStoreListItem.html());
ac.attr("id","b"+ae.bid);
ac.attr("data-marker-id",ad);
ac.find("h5").html(ae.name);
ac.find(".address").html(ae.address.filter(Boolean).join("<br />"));
ac.find(".country").html(ae.country);
if(a.gdt.isECOMEnabled===true){ac.find(".onlinestatus").removeClass("btq-hide")
}if(c(k.selectors.html).attr("lang").indexOf("ja")!==-1){ac.find(".city").after(ac.find(".country").after(ac.find(".address")));
ac.find(".address").after(ac.find("h2"))
}ac.find(".tel span").html('<a href="tel:'+ae.tel.replace(/\ /gi,"")+'">'+ae.tel+"</a>");
if((a.appointmentEndpoint!=="")&&(ae.type!==3)){ac.find(".view a").attr("href",a.appointmentEndpoint)
}else{ac.find(".view").hide()
}if(k.myBoutique&&ae.bid===k.myBoutique){ac.find(".favourite").addClass("my-boutique")
}ac.find(".favourite").find(".text").html(k.myBoutiqueMessages.success);
ac.find(".favourite a").attr("data-id",ae.bid).html(k.myBoutiqueMessages.linkText);
if(k.mapType==="google"){ac.find(".directions a").attr({"data-lat":ae.lat,"data-lng":ae.lng,href:"http://maps.google.com/maps?daddr="+ae.lat+","+ae.lng,target:"_blank"})
}else{if(k.mapType==="baidu"){ac.find(".directions a").attr({"data-lat":ae.lat,"data-lng":ae.lng,href:"http://map.baidu.com/?latlng="+ae.lat+","+ae.lng,target:"_blank"})
}}ac.find(".opening").html(ae.open.filter(Boolean).join("<br />"));
q.elem.$btqStoresList.append(ac);
ac.on("click",".more-info.accordion-top-link a.more-info, .close.accordion-bottom-link a.close",p);
ac.on("click",".more-info.accordion-top-link a.mobile-map, .close.accordion-bottom-link a.mobile-map",r);
ac.on("click",".favourite a",function(af){j(af);
c(af.target).parent(".favourite").addClass("my-boutique");
c(af.target).parent(".favourite").find(".text").css("display","block");
c(af.target).css("display","none")
});
return ac
}function J(ac,ad){return function(){if(k.activeInfoWindow===ad.bid){if(k.mapType==="google"){a.gdt.googleMapApi.closeInfoWindow()
}else{if(k.mapType==="baidu"){L.closeInfoWindow()
}}}if(q.elem.$content.hasClass("mobile-view")){if(k.mapType==="google"){a.gdt.googleMapApi.markerClickHandler(ac.prop("outerHTML"),ad.location,"mobile")
}else{if(k.mapType==="baidu"){var ae=new a.BMap.InfoWindow(ac.prop("outerHTML"),{width:290,height:325});
L.openInfoWindow(ae,ad.location);
L.centerAndZoom(ad.location,17)
}}}else{if(k.mapType==="google"){a.gdt.googleMapApi.markerClickHandler(ac.html(),ad.location,"desktop")
}else{if(k.mapType==="baidu"){L.centerAndZoom(ad.location,17)
}}}l(ad.bid);
k.activeInfoWindow=ad.bid
}
}function x(ad,ag){var ac,af;
if(k.mapType==="google"){ac=a.gdt.googleMapApi.getMarker(ag);
af=J(ad,ag);
a.google.maps.event.addListener(ac,"click",af);
k.markers.push(ac)
}else{if(k.mapType==="baidu"){var ah=ag.location;
var ae=new a.BMap.Icon(k.markerImg,new a.BMap.Size(110,116),{imageSize:new a.BMap.Size(50,46),anchor:new a.BMap.Size(10,32),infoWindowAnchor:new a.BMap.Size(10,0)});
ac=new a.BMap.Marker(ah,{icon:ae});
af=J(ad,ag);
k.markers.push(ac);
ac.addEventListener("click",af);
L.addOverlay(ac);
L.centerAndZoom(ah,6)
}}}function R(ac){z();
c.each(ac,function(af,ag){var ad=q.boutiqueData[ag.bid];
var ae=I(ad,af);
if(a.gdt.googleMapApi.isMapInitialised()||Q){x(ae,ag)
}});
q.elem.$resultCount.html(ac.length+"  ");
q.elem.$listItem=q.elem.$btqStoresList.find(k.selectors.listItem);
if((a.gdt.googleMapApi.isMapInitialised()||Q)&&!(q.elem.$content.hasClass("mobile-view"))){q.elem.$listItem.on("click",function(ad){ad.stopImmediatePropagation();
var ae=c(ad.currentTarget).data("marker-id");
if(k.mapType==="google"){a.gdt.googleMapApi.triggerMapEvent(k.markers[ae])
}if(k.mapType==="baidu"){k.markers[ae].dispatchEvent("click")
}})
}if(k.mapType==="google"){a.gdt.googleMapApi.createMarkerCluster()
}else{if(k.mapType==="baidu"){Z=new a.BMapLib.MarkerClusterer(L,{markers:k.markers});
Z.setStyles(V)
}}}function S(ad){function ae(af){if(ad.indexOf(af.type)!==-1){return true
}return false
}var ac=q.boutiques.filter(ae);
if(ac.length>0){R(ac)
}else{q.elem.$resultCount.html("0  ");
z()
}}function s(ad){var ae="",ac;
if(ad==="search"){ac=q.elem.$searchBox.find(q.elem.$filters);
q.elem.$btqStorePage.find('input[type="checkbox"]').each(function(){c(this).prop("checked",false)
})
}else{if(ad==="store"){ac=q.elem.$btqStorePage.find(q.elem.$filters);
q.elem.$searchBox.find('input[type="checkbox"]').each(function(){c(this).prop("checked",false)
})
}}ac.find("input[type=checkbox]:checked").each(function(){this._value=this.value||this._value;
var af=this._value;
ae+=af;
if(ad==="search"){q.elem.$btqStorePage.find("#"+(this.id)).prop("checked",true)
}else{if(ad==="store"){q.elem.$searchBox.find("#"+(this.id)).prop("checked",true)
}}});
return ae
}function v(ad){var ac;
if(typeof(ad)==="object"){ac=c(ad.currentTarget)
}else{ac=c(".mobile.toggleMapList a.map-view")
}c(".mobile.toggleMapList a").each(function(){if(c(this).hasClass("highlight")){c(this).removeClass("highlight")
}});
ac.addClass("highlight");
if(ac.hasClass("map-view")){q.elem.$resultCountCont.hide();
q.elem.$btqStoresList.hide();
if(typeof(ad)==="object"){if(k.mapType==="google"){a.gdt.googleMapApi.closeInfoWindow()
}else{if(k.mapType==="baidu"){L.closeInfoWindow()
}}S(s("store"))
}}else{if(ac.hasClass("list-view")){q.elem.$resultCountCont.show();
q.elem.$btqStoresList.show()
}}}function m(af){var ac=[];
for(var ae=0;
ae<(af||{}).length;
ae++){var ad;
if(k.mapType==="google"){ad=a.gdt.googleMapApi.getLatLng(parseFloat(af[ae].latitude),parseFloat(af[ae].longitude))
}else{if(k.mapType==="baidu"){var ag=P(parseFloat(af[ae].latitude),parseFloat(af[ae].longitude));
ad=new a.BMap.Point(ag.lng,ag.lat)
}}ac.push({bid:"b"+af[ae].id,location:ad,type:parseInt(af[ae].type.id,10)});
q.boutiqueData["b"+af[ae].id]={name:af[ae].name,address:[af[ae].adress_1,af[ae].adress_2,af[ae].adress_3,af[ae].adress_4],city:af[ae].city.name||"",continent:(af[ae].continent||{}).name||"",country:(af[ae].country||{}).name||"",lang:af[ae].lang,tel:af[ae].phone,fax:af[ae].fax,lat:k.mapType==="google"?ac[ae].location.lat():k.mapType==="baidu"?ac[ae].location.lat:"",lng:k.mapType==="google"?ac[ae].location.lng():k.mapType==="baidu"?ac[ae].location.lng:"",open:[af[ae].time_open_1,af[ae].time_open_2,af[ae].time_open_3,af[ae].time_open_4,af[ae].time_open_5,af[ae].time_open_6,af[ae].time_open_7],type:parseInt(af[ae].type.id,10),bid:af[ae].id,onlinestatus:af[ae].click_collect||"0"}
}ac.sort(function(ai,ah){return ai.type-ah.type
});
return ac
}function F(ag,ac,ae){var ad=q.ajaxUrl+"&con="+ag+"&cou="+ac+"&cit="+ae;
var af={url:ad,dataType:"jsonp",type:"GET",callback:function(ah){q.boutiques=m(ah.branches);
S(s("search"))
},error:function(aj,ah,ai){a.gdt.Utils.Console.warn("Map not found",ah+" ("+ai+")");
a.gdt.Utils.Console.log("mapRequest",aj)
}};
a.gdt.Utils.ajaxCall(af)
}function E(){q.boutiques={};
q.boutiqueData={};
q.activeInfoWindow=null
}function g(){c(k.selectors.body).scrollTop(0);
var af=M.find(k.selectors.selectedCity);
var ac=M.find(k.selectors.selectedCountry);
var ae=af.text();
var ad=ac.data("continent");
q.elem.$cityHeader.html(ae);
if(aa()){E();
F(ad,ac.val(),af.val());
h(q.states.storePage)
}}function t(){h(q.states.searchPage)
}function A(ah,ae,af){var aj,ac={};
var ag=ae;
if(ae!==undefined){c.each(ah,function(ak,al){ac[al[ag].name]=al[ag];
if(af!==undefined){ac[al[ag].name][af]=al[af].id
}})
}else{c.each(ah,function(ak,al){ac[al.name]=al
})
}aj=Object.keys(ac);
aj.sort();
var ai={};
for(var ad in aj){if(aj.hasOwnProperty(ad)){ai[aj[ad]]=ac[aj[ad]]
}}return ai
}function n(ac){q.elem.$cityList.empty().append('<option selected="true" value="">'+k.defaultCityValue+"</option>");
c.each(ac,function(ad,ae){q.elem.$cityList.append(c("<option></option>").attr("value",ae.id).text(ae.name))
})
}function D(ai){var ae="";
if(typeof ai==="object"){ae=event.target.value;
var ag=a.gdt.boutiqueCountryCityJson.countries[k.selectedCountryIdx].states;
for(var ah in ag){if((ag[ah].name)===ae){var ac=A(ag[ah].cities);
n(ac);
return
}}}else{ae=ai;
for(var af in a.gdt.boutiqueCountryCityJson.countries){if((a.gdt.boutiqueCountryCityJson.countries[af].countryNameId.id)===ai){var ad=A(a.gdt.boutiqueCountryCityJson.countries[af].cities);
n(ad);
return
}}}}function w(ac){q.elem.$stateList.empty().append('<option selected="true" value="">'+k.defaultStateValue+"</option>");
c.each(ac,function(ad,ae){q.elem.$stateList.append(c("<option></option>").attr("value",ae.name).text(ae.name))
})
}function d(ac){if(ac){q.elem.$stateList.removeClass(k.cssClass.btqHide);
q.elem.$stateList.addClass(k.cssClass.btqShow)
}else{q.elem.$stateList.removeClass(k.cssClass.btqShow);
q.elem.$stateList.addClass(k.cssClass.btqHide)
}}function G(ae){d(true);
for(var ad in a.gdt.boutiqueCountryCityJson.countries){if((a.gdt.boutiqueCountryCityJson.countries[ad].countryNameId.id)===ae){var ac=A(a.gdt.boutiqueCountryCityJson.countries[ad].states);
k.selectedCountryIdx=ad;
w(ac);
return
}}}function W(ad){var ac="";
if(typeof ad==="object"){ac=ad.target.value
}else{ac=q.elem.$countryList.val()
}d(false);
if(ac==="88"||ac==="245"){G(ac)
}else{D(ac)
}}function o(){var ac=M.find(k.selectors.selectedCity).text();
a.gdt.Tracking.MTBtracking.trackBtqCitySelected(ac)
}function Y(){q.elem.$countryList.on("change click",W);
q.elem.$stateList.on("change click",D);
q.elem.$cityList.on("change",o);
q.elem.$submitSearch.on("click",g);
q.elem.$btqBackToSearch.on("click",t);
q.elem.$btqStorePage.find(".mobile.toggleMapList").on("click",".list-view, .map-view",v);
q.elem.$btqStorePage.find(q.elem.$filters).on("click",function(){S(s("store"))
})
}function C(){var ad={};
var ac=a.gdt.boutiqueCountryCityJson.countries;
var ae="countryNameId";
var af=A(ac,ae,"continent");
c.each(af,function(ag,ah){if(q.defaultCountry===""||q.defaultCountry===0){ad={value:ah.id,"data-continent":ah.continent}
}else{if(ah.id==q.defaultCountry){ad={value:ah.id,selected:"true","data-continent":ah.continent}
}else{ad={value:ah.id,"data-continent":ah.continent}
}}q.elem.$countryList.append(c("<option></option>").attr(ad).text(ah.name))
});
W();
Y()
}function O(){var ac;
clearTimeout(ac);
ac=setTimeout(function(){var ad=c(a).width();
if(ad>=668&&ad<=768){q.elem.$content.removeClass("mobile-view").addClass("tab-port")
}else{if(ad<=668){q.elem.$content.removeClass("tab-port").addClass("mobile-view")
}}},200)
}function N(){M.removeClass(k.cssClass.loader);
if(k.mapType==="google"){a.gdt.googleMapApi.initializeMap()
}else{if(k.mapType==="baidu"){f()
}}}function U(){if(c(".mtb-boutique-locator").length>0){q.elem.$content.addClass("boutique-finder-stores");
k.defaultCountryValue=q.elem.$countryList[0].options[0].text;
k.defaultStateValue=q.elem.$stateList[0].options[0].text;
k.defaultCityValue=q.elem.$cityList[0].options[0].text;
q.elem.$btqStorePage.hide();
C();
O()
}}function K(){return q.boutiqueData
}function u(){return k
}c(a).smartresize(O);
return{init:U,loadBaiduMap:X,initializeBtqFinder:N,getDOMSelectors:u,getBoutiqueData:K,convertGoogleCtoBaiduC:P}
};
a.gdt.boutiqueFinder=new b();
(function(){if(a.gdt.oldBoutiqueLocator===false){a.gdt.boutiqueFinder.init();
if(a.gdt.googleApiAccessible&&a.gdt.google.mapKey){a.gdt.boutiqueFinder.getDOMSelectors().mapType="google";
a.gdt.googleMapApi.loadMap()
}else{if(a.gdt.baidu&&a.gdt.baidu.BaiduMapsAccessible&&a.gdt.baidu.mapKey){a.gdt.boutiqueFinder.getDOMSelectors().mapType="baidu";
a.gdt.boutiqueFinder.loadBaiduMap()
}}c("body").on("google:maps:loaded baidu:maps:loaded",function(){a.gdt.boutiqueFinder.initializeBtqFinder()
})
}})()
})(document,window,window.jQuery||window.Zepto);
(function(e,a,c){a.gdt=a.gdt||{};
a.gdt.BasketAndWishlist=a.gdt.BasketAndWishlist||{};
var b=function(){var x=a.gdt.Utils.noWCM,n=(typeof window.ontouchstart==="undefined")?"click":"touchend",w=c("html"),v=c("body"),u=c("#wishlist"),k=c("#basket"),s={},g={},m;
function A(D,F,B){var C=c(D).find("button[clicked=true]")[0],E=c(D).serialize();
if(C){E+="&"+C.name+"="+C.value
}g={productCollection:c(D).find("input[name=productCollection]").val(),productCategory:c(D).find("input[name=productCategory]").val(),productSKU:c(D).find("input[name=productSKU]").val(),refillSKU:c(D).find("input[name=refillsku]").val(),event:c(D).find("input[name=event]").val(),shoppingBagValue:c(D).find("input[name=shoppingbagvalue]").val(),variant:c(D).find("input[name=variant]").val(),currencycode:c(D).find("input[name=currencycode]").val(),brand:c(D).find("input[name=brand]").val(),productName:c(D).find("input[name=productname]").val(),productPrice:c(D).find("input[name=productprice]").val()};
return a.gdt.Utils.ajaxCall({type:c(D).attr("method"),url:c(D).attr("action"),data:E,callback:F,error:B})
}function d(B){B.find(".save-product").each(function(G,I){var D=c(I),J=D.find("button[value="+s.wishlist.actions.add.value+"]","button[value="+s.wishlist.actions.remove.value+"]"),C=D.find("[name=product-path]").val(),E=C.split("/"),H=E[E.length-1],F=s.wishlist.itemsArray;
if(c.inArray(H,F)!==-1){J.val(s.wishlist.actions.remove.value);
J.html("<span>"+s.wishlist.actions.remove.label+"</span>")
}else{J.val(s.wishlist.actions.add.value);
J.html("<span>"+s.wishlist.actions.add.label+"</span>")
}})
}function p(C){var B=C.val();
if(B===s.wishlist.actions.add.value){C.val(s.wishlist.actions.remove.value);
C.html("<span>"+s.wishlist.actions.remove.label+"</span>")
}else{if(B===s.wishlist.actions.remove.value){C.val(s.wishlist.actions.add.value);
C.html("<span>"+s.wishlist.actions.add.label+"</span>")
}}}function f(){a.gdt.UserInteractions.update()
}function h(){s=a.gdt.UserInteractions.data();
if(x){var B=s.wishlist&&s.wishlist.items?s.wishlist.items:[];
s.wishlist.itemsArray=c.map(B,function(C){return C.id
});
o();
d(c("#content"))
}}function o(){if(s.wishlist.count>0){c(".wishlist .number").addClass("show").text(s.wishlist.count);
c(".mb-header-wishlist-count").text(s.wishlist.count)
}else{c(".wishlist .number").removeClass("show")
}if(s.basket.count>0){c(".shopping-bag .number").addClass("show").text(s.basket.count);
c(".mb-header-cart-count").text(s.basket.count)
}else{c(".shopping-bag .number").removeClass("show")
}}function q(C){var B=c("<div>"+C+"</div>");
u.empty().html(B.find("#wishlist").html())
}function r(C){var B=c("<div>"+C+"</div>");
k.empty().html(B.find("#basket").html());
location.reload();
c(".product-cta a.lightbox-feature-open").focus()
}function l(C){var B=c(".shopping-nav .wishlist a").data("href");
if(B&&x){a.gdt.Utils.ajaxCall({type:"GET",url:B+"?cachebust="+new Date().getTime(),callback:C})
}}function z(B){if(basketUrl&&x){a.gdt.Utils.ajaxCall({type:"GET",url:basketUrl+((basketUrl.indexOf("?")!==-1)?"&":"?")+"cachebust="+new Date().getTime(),callback:B})
}}v.on("userinteractionsdata",function(){h()
});
v.on("filters:productsadded",function(){if(s.wishlist){d(c("#content"))
}});
v.on(n,"button[name]",function(){c("button[clicked=true]").removeAttr("clicked");
c(this).attr("clicked","true")
});
function j(E){var C=E,F=C.find("button[clicked=true]"),G=F.val()===s.basket.actions.add.value,B=F.val()===s.wishlist.actions.add.value,D=F.val()===s.wishlist.actions.remove.value;
if(G){s.basket.count=s.basket.count+1
}else{if(B){s.wishlist.count=s.wishlist.count+1
}else{if(D){s.wishlist.count=s.wishlist.count-1
}}}A(C,function(H){if(G){if(document.location.pathname.indexOf("refill")===-1||g.event!=="addToBagRefill"){g.event=u.length>0?"addToBagFromWishlist":"addToBagProductPage"
}else{g.event="addToBagRefill"
}if(F.closest(".mtb-ymal").length){g.component="ymal"
}v.trigger("basketUpdated",g)
}else{if(B){g.event="addToWishlistProductPage";
v.trigger("wishlistUpdated",g)
}else{if(D){g.event="removeFromWishlistProductPage";
v.trigger("wishlistUpdated",g)
}}}if(H&&x&&G){a.gdt.Lightbox.Open(H)
}o()
},function(){f()
});
p(F)
}v.on("submit",".save-product",function(C){C.preventDefault();
var B=c(this);
j(B)
});
setTimeout(function(){c(".buybox-no-stock").submit(function(D){D.preventDefault();
var B=c(this),C;
C=B.find("button[clicked=true]");
if(!C.hasClass("notifications-button")){j(B)
}})
},100);
v.on("submit",".basket-modify",function(B){B.preventDefault()
});
v.on("change",".basket-modify",function(){var B=c(this);
A(B,function(){v.trigger("basketUpdated",g)
})
});
v.on("submit",".basket-remove",function(C){C.preventDefault();
var B=c(this);
c(this).find(".btn-remove-basket").addClass("loader");
A(B,function(E){var D=0;
c(E).find('input[name="shoppingbagvalue"]').each(function(){D+=Number(c(this).val())
});
g.shoppingBagValue=D;
if(s.basket.count===1){s.basket.count=0;
g.event="removeFromShoppingBag";
v.trigger("basketUpdated",g);
location.reload()
}else{B.closest("li").animate({"-webkit-transform":"translateY(-100%)",height:"0",padding:"0"},200,"swing",function(){g.event="removeFromShoppingBag";
v.trigger("basketUpdated",g)
});
s.basket.count=s.basket.count-1
}o()
})
});
v.on("submit",".wishlist-remove",function(C){C.preventDefault();
var B=c(this);
c(this).find(".btn-remove-wishlist").addClass("loader");
A(B,function(){if(s.wishlist.count===1){s.wishlist.count=0;
B.closest("li").animate({"-webkit-transform":"translateY(-100%)",height:"0",padding:"0"},200,"swing",function(){g.event="removeFromWishlist";
v.trigger("wishlistUpdated",g);
c(this).addClass("mtb-hide")
});
location.reload()
}else{s.wishlist.count=s.wishlist.count-1;
B.closest("li").animate({"-webkit-transform":"translateY(-100%)",height:"0",padding:"0"},200,"swing",function(){g.event="removeFromWishlist";
v.trigger("wishlistUpdated",g);
c(this).addClass("mtb-hide")
})
}o()
})
});
v.on("submit",".engraving-remove",function(C){C.preventDefault();
var B=c(this);
A(B,function(){g.event="removeEngraving";
v.trigger("basketUpdated",g)
})
});
v.on("basketUpdated",function(){if(e.getElementById("basket")){z(r)
}else{f()
}});
v.on("wishlistUpdated",function(){if(e.getElementById("wishlist")){l(q)
}else{f()
}});
v.on("click",".continue-shopping",function(B){B.preventDefault();
mb.util.lightbox.closeLightbox();
a.gdt.Lightbox.Close()
});
function t(){var E=window.innerWidth,D=window.innerHeight,C=m.width(),B=m.height();
m.css("margin-left",((E-C)/2));
m.css("margin-top",((D-B)/2))
}w.on("lightboxOpen",function(){if(c("#no-product-added-overlay").length>0){c("#lightboxPanel").addClass("no-product-added-to-bag-overlay");
m=c("#lightboxPanel.no-product-added-to-bag-overlay");
c(a).on("resize",t);
t()
}else{if(c("#lightboxPanel").hasClass("no-product-added-to-bag-overlay")){c("#lightboxPanel").removeClass("no-product-added-to-bag-overlay")
}}});
function y(){return{contents:function(){return s
}}
}return y()
};
a.gdt.BasketAndWishlist=new b()
}(document,window,window.jQuery||window.Zepto));
(function(N,F,A){F.gdt=F.gdt||{};
var f={CLICK:"click",SUBMIT:"submit"},h={FRONT_END:"RCHMFrontEndCookie"},p={UP_ARROW:"icon-arrow-up",DOWN_ARROW:"icon-arrow-down",HIDE:"hide",SHOW:"show",ERROR:"error",TOGGLE_VIEW:"toggle-view"},b=F.gdt.trackingObject||{},J,a,B,m,s,t,o,v,e,q,l,D,x,C,n,G,y,E,z,K,H,g;
function I(d){d.preventDefault();
F.gdt.Utils.ajaxCall({url:g,callback:function(){B.html(H);
m.addClass(p.HIDE)
}})
}function k(d){b.event="mtb_retrofit_notifyMe";
b.visitorStatus=F.gdt.Utils.checkCookie(h.FRONT_END)?"loggedin":"guest user";
b.userType=F.gdt.Utils.checkCookie(h.FRONT_END)?"logged user":"guest user";
b.productCategory=d.data("tracking-productcategory");
b.productCollection=d.data("tracking-productcollection");
b.productSKU=d.data("tracking-productsku");
F.gdt.Tracking.MTBtracking.pushToDataLayer(b)
}function u(Q){var O=J.find("button[clicked=true]");
if(O.hasClass("notifications-button")){if(F.gdt.Validate.validateForm("buyBox")){Q.preventDefault();
var d=J.serialize(),w=J.find(".notifications-button");
if(w.length>0){k(w);
d+="&"+w.attr("name")+"="+w.attr("value")
}var P={url:J.attr("action"),type:J.attr("method"),data:d,callback:function(R){if(R.type.indexOf(p.ERROR)!==-1){if(R.message=="form.captcha.error"){q.removeClass(p.HIDE);
e.addClass(p.HIDE);
D.find(".recaptchaTextbox").addClass(p.ERROR)
}}else{B.html(H);
o.addClass(p.HIDE);
v.addClass(p.HIDE);
l.removeClass(p.HIDE);
q.addClass(p.HIDE);
e.removeClass(p.SHOW);
D.addClass(p.HIDE);
x.addClass(p.HIDE);
G.addClass(p.HIDE);
C.addClass(p.HIDE);
t.removeClass(p.TOGGLE_VIEW)
}},error:function(T,R,S){F.gdt.Utils.Console.warn("Stock Email Failed",R+" ("+S+")");
F.gdt.Utils.Console.log("stock Email Request",T);
q.addClass(p.HIDE);
e.addClass(p.HIDE);
D.removeClass(p.HIDE);
return true
}};
if(G.length>0){Q.preventDefault();
F.gdt.aemcaptchaValidated=function(){F.gdt.Utils.ajaxCall(P)
}
}else{F.gdt.Utils.ajaxCall(P)
}}else{q.removeClass(p.SHOW);
q.addClass(p.HIDE);
e.removeClass(p.HIDE);
e.addClass(p.SHOW);
return false
}}}function j(){var d=F.gdt.UserInteractions.data();
E=d.notifications;
if(!E){return
}y=F.gdt.Utils.checkCookie(h.FRONT_END)?true:false;
z=E.messages.linkText;
K=E.messages.bodyText;
H=E.messages.success;
g=E.endpoint;
B.html(K);
if(y&&g&&H){m.attr("href",g).removeClass(p.HIDE).html(z);
m.on(f.CLICK,I);
A(".mtb-new-service-box .product-cta li:first-child").addClass("logged-in")
}else{if(y&&!H){B.html(K);
m.addClass(p.HIDE)
}else{s.removeClass(p.HIDE);
B.addClass(p.HIDE);
m.addClass(p.HIDE)
}}}function r(d){d.preventDefault();
if(C.hasClass(p.DOWN_ARROW)){C.removeClass(p.DOWN_ARROW).addClass(p.UP_ARROW);
n.removeClass(p.HIDE)
}else{C.removeClass(p.UP_ARROW).addClass(p.DOWN_ARROW);
n.addClass(p.HIDE)
}}function M(){J.off(f.SUBMIT).on(f.SUBMIT,u);
t.on(f.CLICK,r);
A("body").on("userinteractionsdata",function(){if(F.gdt.Utils.noWCM){j()
}})
}function c(){B=a.find(".notification-message");
m=J.find(".notifications-link");
s=J.find(".nonloggedInSection");
t=J.find(".toggle-view");
o=a.find(".notifications-email");
v=a.find(".notifications-button");
e=a.find(".errorMessage");
q=a.find(".error-msg-captcha");
l=a.find(".success-msg");
D=a.find(".captchaDiv");
x=a.find(".mtb-captch-notification-message");
C=a.find(".arrow-show");
n=a.find(".mtb-captcha-wrapper");
G=a.find(".form-aemcaptcha-row")
}function L(){J=A("#buyBox");
a=J.find(".notifications-signup");
if(a.length){c();
M()
}}L()
}(document,window,window.jQuery||window.Zepto));
(function(t,l,f){var o=f("body"),c=o.find(".site-nav"),k=o.find(".site-nav > ul > li, .site-nav-search"),u=f(".subnavigation"),h=(typeof window.ontouchstart==="undefined")?"click":"touchend",n=false,g,p,j=f(".tablet-search"),q=o.find(".mobile-navigation .btn-navbar");
var b=function(){o.removeClass("mob-menu-open");
o.find("#content").off("touchstart");
q.attr("aria-expanded","false")
};
var m=function(){if(!o.hasClass("mob-menu-open")){o.addClass("mob-menu-open");
o.find(".navigation").addClass("activated");
o.find(".mobile-background").on("touchstart",function(d){d.preventDefault()
})
}else{b()
}};
function e(w){var d=f(w.target),v=d.data("nav-item");
if(!o.hasClass("mob-menu-open")&&v.indexOf("find-montblanc")===-1&&v.indexOf("tablet-search")===-1){c.find("a").removeClass("active");
j.removeClass("showNav");
if(!c.hasClass("menu-active")){c.addClass("menu-active")
}if(v===p){c.removeClass("menu-active");
o.removeClass("nav-border");
u.find("ul").removeClass("showNav");
p=""
}else{u.find("ul").removeClass("showNav");
o.addClass("nav-border");
f("."+v).addClass("showNav");
d.addClass("active");
p=v
}}else{if(v.indexOf("tablet-search")!==-1){o.removeClass("nav-border");
u.find("ul").removeClass("showNav");
j.toggleClass("showNav")
}}}var r=function(){var v=l.gdt.Utils.checkCookie("RCHMFrontEndCookie"),d;
if(v){o.toggleClass("logged-in");
d=JSON.parse(decodeURIComponent(v)).u.replace(/\+/g," ");
f(".accountName").html(d);
f(".logged-in-track").addClass("show-truck")
}else{f(".logged-out-track").addClass("show-truck")
}};
k.on(h,"a",e);
q.on("touchmove",function(){n=true
}).on(h,function(d){d.stopPropagation();
d.preventDefault();
if(n){n=false;
return
}n=false;
f(d.currentTarget).attr("aria-expanded","true");
m()
});
f("#fnewsletter").on("focus",function(){f(this).next().addClass("focus")
}).off("focus",function(){f(this).next().removeClass("focus")
});
function a(){var v=f(".mobile-navigation"),w=f("input, select, textarea"),d=f(".btn-top");
w.on("focus",function(){d.css({display:"none"})
});
w.on("blur",function(){d.css({display:"block"})
})
}if(l.gdt.Utils.Browser.isMobile&&f.os.ios){a()
}function s(){clearTimeout(g);
g=setTimeout(function(){var v=f(l).width(),d=f(".tablet-search");
if(o.hasClass("mob-menu-open")&&v>=669){o.removeClass("mob-menu-open");
if(o.find(".navigation").hasClass("activated")){o.find(".navigation").removeClass("activated")
}}if(d.css("display")!=="none"){c.removeClass("menu-active");
d.removeClass("showNav")
}},200)
}if(l.addEventListener){l.addEventListener("orientationchange",s,false);
if(!l.gdt.Utils.Browser.isAndroidPad){f(l).smartresize(s)
}}else{f(l).on("orientationchange resize",s)
}r();
l.gdt.nav={toggleMobileNav:m,closeMobileNav:b,toggleLogin:r}
}(document,window,window.jQuery||window.Zepto));
(function(S,J,C){var s,e=(typeof window.ontouchstart==="undefined")?"click":"touchend",B=0,G=5,n=C(".montblanc-nav"),V=n.find(".mobile-navigation"),o=V.height(),f=C(".montblanc-site-nav").find("a"),O,g=C(".promo-teaser"),R=g.find(".promo-teaser-text"),Q=g.find(".top-image"),m=g.find(".bottom-image"),h=g.find("h2"),l=g.find("p"),M,v,t,W,a,U,N,H=C(".header-wrap, .top-nav, #content"),I=C(".sub-nav"),E=C(".header-wrap").find(".search-form"),c=E.find("label, .open-search"),A=E.find(".icon-close"),r=C(".montblanc-site-nav li a.new"),F=C(".sub-nav .grid h2.viewAll"),k=E.find(".open-search"),L=k.data("default-btn-text"),j=k.data("open-search-btn-text"),P;
C(J).scroll(function(){s=true
});
if(J.gdt.Utils.Browser.isiPad||J.gdt.Utils.Browser.isAndroidPad){for(P=0;
P<r.length;
P++){if(C(r[P]).data("openflyout")!==false){C(r[P]).attr("href","#")
}}f.on(e,x)
}function y(){var d;
for(P=0;
P<F.length;
P++){d=F[P];
if(!C(d).parent().find("dl").length>0){C(d).removeClass("viewAll");
C(d).addClass("viewlink")
}}}function D(d){d.preventDefault();
E.removeClass("open");
k.text(L);
E.find(".header-search-box").attr({"aria-hidden":"true",tabIndex:"-1"});
c.removeAttr("disabled","disabled")
}function q(d){if(!E.hasClass("open")){E.addClass("open");
k.text(j);
E.find(".header-search-box").attr({"aria-hidden":"false",tabIndex:"0"}).focus();
d.preventDefault()
}}function u(d){g.removeClass("hide");
U=Q.attr("src");
Q.attr("src",d);
Q.on("load",function(){Q.addClass("show");
m.removeClass("show")
})
}function z(d){N=Q.attr("alt");
Q.attr("alt",d)
}function b(Z){var X=C(Z.target),w=X.data("image"),Y=X.data("title"),aa=X.data("alt"),d=X.data("description");
g=X.parents(".closed").find(".promo-teaser");
R=g.find(".promo-teaser-text");
Q=g.find(".top-image");
m=g.find(".bottom-image");
h=g.find("h2");
l=g.find("p");
if(w&&w.length>0&&Y&&Y.length>0&&d&&d.length>0){u(w);
z(aa);
R.removeClass("hide");
h.text(Y);
l.text(d)
}else{if(w&&w.length>0&&Y&&Y.length>0){R.removeClass("hide");
u(w);
z(aa);
h.text(Y);
l.empty()
}else{if(w&&w.length>0){u(w);
z(aa);
R.addClass("hide")
}else{Q.attr("src",v);
m.attr("src",t);
h.text(W);
l.text(a)
}}}}function p(d){d.preventDefault();
I.removeClass("open");
I.find('[class*="nav"]').removeClass("open");
if(C(window).width()>737){I.css("height","0")
}}function T(d){M=C(d).find(".promo-teaser");
v=M.find(".top-image").attr("src");
t=M.find(".bottom-image").attr("src");
W=M.find("h2").text();
a=M.find("p").text()
}function K(Y){var X=C(Y.target),d=X.data("index"),w;
I.removeClass("open").find("div").removeClass("open");
I.css("height","0");
w=C(".nav-"+d);
if(X.data("openflyout")!==true){return
}if(w!==O){I.addClass("open");
w.addClass("open");
I.css("height",w.height()+20);
T(w);
if(!J.gdt.Utils.Browser.isiPad){w.find("li").on("mouseover",b)
}w.find("li").mouseleave(function(){m.addClass("show");
Q.removeClass("show")
});
O=w
}else{I.removeClass("open");
w.removeClass("open");
O=""
}}function x(d){K(d);
g.removeClass("hide")
}C(".sub-nav").on("click","dt",function(){C(".sub-nav").scrollTop(0);
var w=C(this);
var d=w.parent().parent().offset().top;
w.css("text-decoration","none");
if(w.hasClass("open")){C(".sub-nav").scrollTop(d,200)
}});
if(C("#sub-nav-2").find(".langSelector").children().length>0){C(".colon").html(" :")
}else{C(".colon").html("")
}f.on("mouseover",x);
y();
c.on(e,q);
A.on(e,D);
H.on("mouseover",p);
C(J).on("orientationchange resize",p)
}(document,window,window.jQuery||window.Zepto));
(function(v,n,g){var j=(typeof window.ontouchstart==="undefined")?"click":"touchend",h,o,m,f,t,p=g(n),q,y,u,z={},a=0,e={wrapper:".resultscontent",itemsWrapper:".results",resultCounter:".totalresults",loaderWrapper:".more-results",footer:".mb-footer"},b={hide:"mtb-hide"};
h=g(e.wrapper);
if(h.length){s()
}function x(){f.removeClass(b.hide);
z={url:y+"&i="+u+"&_charset_=UTF-8",type:"get",callback:function(d){c(d)
},error:function(A,d,w){n.gdt.Utils.Console.warn("Search Data not forund",d+" ("+w+")");
n.gdt.Utils.Console.log("Search Request",A);
return false
}};
n.gdt.Utils.ajaxCall(z)
}function c(w){var d=g(w);
d.find("ul.content").appendTo(o);
++u
}function l(){var D=p.scrollTop(),B=t.height()||0,w=o.find("li"),C=o.height()+o.offset().top,d=w.eq(0).height(),A=w.length<a;
if(!A){f.addClass(b.hide);
return
}if(A&&D>=C-d-B){x()
}}function r(){var d=g("input[name=searchTerm]").val();
g("input[name=dynamicTitle]").each(function(){var w=g(this).val();
g(this).val(w.replace("{0}",d));
g(".searchresults h1").text(g(this).val());
g(".searchresults h6").text(g(this).val());
document.title=g(this).val()
})
}function k(){var d=o.find("li"),w=d.length<a;
if(w){f.removeClass(b.hide);
g(".search-more-results").on("click",l)
}if(g("input[name=searchTerm]").length){r()
}}function s(){o=h.find(e.itemsWrapper);
f=g(e.loaderWrapper);
t=g(e.footer);
y=h.data("search-url");
u=h.data("search-index");
a=h.data("search-results");
k()
}}(document,window,window.jQuery||window.Zepto));
(function(e,a,c){a.gdt=a.gdt||{};
a.gdt.Lightbox=a.gdt.Lightbox||{};
var b=function(){var m=(typeof window.ontouchstart==="undefined")?"click":"touchend",q=c(".countryalert"),f=".lightbox-feature-open",l,n,h,p=false;
function g(r){if(p){return
}c(".countryselector ul li p a").removeClass("checked");
c(r.target).addClass("checked");
l=c(r.target).addClass("checked")
}function d(){q.css("display","none")
}function o(r){c(".countryselector a").each(function(){if(c(this).text()===r){c(this).addClass("checked")
}})
}function k(s){s.preventDefault();
var r=c(this);
if(r.find("span").hasClass("arrow-down")){n.hide();
if(h.hasClass("arrow-up")){h.addClass("arrow-down").removeClass("arrow-up")
}r.parent().find(".country-list").show();
r.find("span").addClass("arrow-up").removeClass("arrow-down")
}else{if(r.find("span").hasClass("arrow-up")){r.parent().find(".country-list").hide();
r.find("span").addClass("arrow-down").removeClass("arrow-up")
}}}var j=function(){var u=c(".countryselector ul li p a"),t=c(".countryclose"),r=c(".countrybutton"),s=(typeof window.ontouchstart==="undefined")?"click":"touchend";
u.on(s+".country-selector ul li p",g);
t.on(s+".countryclose",d);
r.on(s+".countrybutton",d);
if(l){o(l.text())
}};
c("body").on(m,f,function(r){r.preventDefault();
if(c(this).hasClass("country")){c("#lightboxPanel").addClass("global-country-selector")
}else{c("#lightboxPanel").removeClass("global-country-selector")
}});
c("body").on("lightboxContentLoaded",function(){if((c("#lightboxPanel").hasClass("global-country-selector"))&&(a.gdt.Utils.Browser.isMobile)){c(".arrow").on(m,k);
n=c(".mtb-countryselector-new .columns-wrapper .col-3-12:not(:last-child)").find(".country-list");
h=c(".mtb-countryselector-new .columns-wrapper .col-3-12:not(:last-child)").find(".arrow span")
}});
return{setUpCountry:j}
};
a.gdt.Lightbox.CountrySelector=new b()
}(document,window,window.jQuery||window.Zepto));
(function(aa,P,L){P.gdt=P.gdt||{};
var g=(typeof window.ontouchstart==="undefined")?"click":"touchend",T=P.gdt.Utils.queryParams.filters,a=document.getElementById("filter-item"),H=L(P),J=L("body"),W,S,Q,V,N,E,x,m,M,v,l=L(".mtb-grid-new-filter"),ab=L(".new-filter-header"),ac=L(".productfilters"),q=L(".product-promo"),X=12,c=0,G=L('<span class="loader mtb-loader"></span>'),j=document.location.pathname,h,C,t,K;
function I(ad,af,w){var ag,ae,d;
for(d=0;
d<af.length;
d++){ag=w.innerHTML;
ae=P.gdt.Utils.Template.render({data:af[d],template:ag});
ad.append(ae)
}return ad
}function u(ad){var d;
ad.filterProps=[];
for(var w=0;
w<ad.dataMap.length;
w++){d=ad.dataMap[w].values;
ad.filterProps=ad.filterProps.concat(d)
}}function b(){var w=P.gdt.filterData.productsDetail,d;
for(d=w.length-1;
d>=0;
d--){u(w[d])
}return w
}function r(d){var w=d.attr("href");
V.removeClass("active");
N.removeClass("active");
x.removeClass("active").find(".icon-arrow-up").removeClass("icon-arrow-up").addClass("icon-arrow-down");
if(d.hasClass("active")){d.removeClass("active");
L(w).removeClass("active")
}else{Q.removeClass("active");
d.addClass("active");
L(w).addClass("active")
}}function n(){var w={values:[]},d,ad;
if(t){if(K){d=S.find('[name="filters-sort"]')
}else{d=S.closest(".mtb-new-filters").find("#filterDropDown input")
}}else{d=S.find('[name="filters-sort"]')
}ad=d.filter(function(){return L(this).is(":checked")
});
w["filters-sort"]=ad.val();
S.find("#filters-filter").find("fieldset").each(function(ag,ae){var ah=L(ae),af=[];
ah.find("input:checked").each(function(aj,ai){af.push(ai.id)
});
w.values.push(af)
});
return w
}function B(w){var af=[],ae,ad,ag,d;
if(P.history.replaceState){for(d=w.length-1;
d>=0;
d--){af=af.concat(w[d])
}ae=af.join(",");
ad=P.gdt.Utils.queryParams;
delete ad.filters;
ag=L.param(ad)+(ae.length?"&filters="+ae:"");
P.history.replaceState(undefined,undefined,P.location.href.split("?")[0]+"?"+ag)
}}function F(ae,w,ad){var d=0,af;
for(af=0;
af<w.length;
af++){if(L.inArray(w[af],ae)>=0){d++
}}return d>=(ad||w.length)
}function p(ae,ad){var d=false,w;
for(w=0;
w<ad.length;
w++){if(ad[w].length){d=F(ae.filterProps,ad[w],1);
if(!d){return false
}}}return true
}function y(w,d){var ad,ae=L("#filters-filter").find("input:checked").length;
if(ae){m.removeClass("disabled").prop("disabled",false);
M.removeClass("disabled").prop("disabled",false);
ad=L.grep(w,function(af){return p(af,d)
})
}else{m.addClass("disabled").prop("disabled",true);
M.addClass("disabled").prop("disabled",true);
ad=w
}B(d);
return ad
}function D(ae,ad){var ag,d,w,af;
ag=ad.split(".");
d=ag.splice(ag.length-1,1)[0];
w=ag.join(".");
if(w!=="bestSeller"){af=ae.slice().sort(function(aj,ah){var ak=P.gdt.Utils.Objects.getPropByPathStr(aj,w),ai=P.gdt.Utils.Objects.getPropByPathStr(ah,w);
if((ak&&!ai)||(ak>ai)){return 1
}if((!ak&&ai)||(ak<ai)){return -1
}return 0
});
if(d==="desc"){af=af.reverse()
}}else{af=ae.slice()
}return af
}function f(d){return d.slice(c,c+X)
}function z(af,ad,ae){var d=L("<ul/>"),w=L(".product-grid > ul");
if(ae){w.empty()
}d=I(d,af,ad);
d.find(".render-false").remove();
P.srcset(d[0]);
w.append(d.children("li"));
c=L(".product-grid > ul > li").length;
w.find("li").backgroundSwap()
}function Z(d,w){var af=L(w),ad=L('<h1><button class="btn icon-close">'+af.parent().text()+"</button></h1>"),ae=false;
ad.on("touchmove",function(){ae=true
}).on(g,function(){if(ae){ae=false;
return
}ae=false;
af.prop("checked",false).removeClass("checked");
if(t){R()
}else{S.trigger("change")
}});
W.find(".active-filters").find(".reset-filters").after(ad)
}function A(){W.find(".active-filters").children().not(".reset-filters").remove();
W.find(".active-filters-wrapper").removeClass("active");
N.each(function(){var ae=L(this),af=ae.attr("id"),w=ae.find("input[type=checkbox]:checked"),ad=V.children("ul").find('a[href="#'+af+'"]').find(".active-count");
if(w.length){if(!K){W.find(".active-filters-wrapper").addClass("active")
}ae.closest("dd").prev("dt").find(".active-count").html(w.length).addClass("show");
ad.html(w.length).addClass("show");
w.each(Z)
}else{ae.closest("dd").prev("dt").find(".active-count").removeClass("show");
ad.removeClass("show")
}});
if(W.find(".active-filters").children().length>0){var d=W.find(".active-filters").children().length-1;
if(d>0){W.find(".filter-count").html(d);
W.find(".filter-count").css("display","inline-block")
}}}function k(w){if(!w||!w.length){return
}for(var d=w.length-1;
d>=0;
d--){L("#"+w[d]).prop("checked",true)
}}function o(ad,w){var d;
C=P.gdt.filterData.productsDetail;
C=y(C,ad.values);
W.find(".total-count").html(C.length);
C=ad["filters-sort"]?D(C,ad["filters-sort"]):C;
d=f(C);
z(d,a,w);
W.find(".visible-count").html(c);
J.trigger("filters:productsadded");
A()
}function U(d){d.preventDefault();
S.find("input[type=checkbox]").prop("checked",false);
if(t){R()
}else{S.trigger("change")
}W.find(".filter-count").css("display","none")
}function R(){var d=n();
C=b();
c=0;
o(d,true);
S.find("input[type=radio]").removeClass("checked").filter(":checked").addClass("checked")
}function s(d){this.filterDropDown=d;
this.initEvents()
}s.prototype={initEvents:function(){var d=this;
d.filterDropDown.on("click",function(w){L(this).toggleClass("active");
w.stopPropagation()
});
d.filterDropDown.find("label").on("click",function(ae){var ad=L(ae.currentTarget),w=ad.closest("#filterDropDown").find(".mtb-filter-sort-title"),ag=L.trim(ad.find(".mtb-filter-sort-option").text());
w.text(ag);
var af=window.setTimeout(function(){ad.closest("#filterDropDown").removeClass("active");
clearTimeout(af)
},100)
})
}};
h=function(){Q.on(g,function(af){af.preventDefault();
var w=L(this),ae=w.attr("href"),ad=ae.replace("#","opt-");
if(ae==="#filters-filter"&&K||ae==="#filters-filter"&&P.gdt.Utils.Browser.isAndroidPad){J.one("lightboxContentLoaded",function(){S.addClass("filters-mobile").addClass(ad);
S.find("dt").first().trigger(g);
L("#lightbox-title").html(w.html())
});
J.one("lightboxClose",function(){W.children(".active-filters-wrapper").before(S);
S.removeClass("filters-mobile").removeClass(ad);
J.removeClass("filters-overlay");
w.removeClass("active");
V.removeClass("active")
});
P.gdt.Lightbox.Open(S);
J.addClass("filters-overlay");
Q.removeClass("active");
V.removeClass("active");
S.closest("#lightboxPanel").css({"transform-origin":"initial",transform:"none"})
}else{if(ae==="#filters-sort"&&K&&t||ae==="#filters-sort"&&P.gdt.Utils.Browser.isAndroidPad&&t){J.one("lightboxContentLoaded",function(){S.addClass("filters-mobile").addClass(ad);
L("#lightbox-title").html(w.html());
var ag=S.find('[name="filters-sort"]:checked');
if(ag.length===0){v.addClass("disabled").prop("disabled",true)
}});
J.one("lightboxClose",function(){W.children(".active-filters-wrapper").before(S);
S.removeClass("filters-mobile").removeClass(ad);
J.removeClass("filters-overlay");
w.removeClass("active");
V.removeClass("active")
});
P.gdt.Lightbox.Open(S);
J.addClass("filters-overlay");
Q.removeClass("active");
V.removeClass("active")
}else{if(K||P.gdt.Utils.Browser.isAndroidPad){r(w);
L(ae).one("change",function(){Q.removeClass("active");
V.removeClass("active")
})
}else{r(w)
}}}});
x.parent("li").on("mouseover",function(ae){ae.preventDefault();
var w=L(this),ad=w.attr("href");
N.removeClass("active");
if(w.hasClass("active")){x.removeClass("active").find(".icon-arrow-up").removeClass("icon-arrow-up").addClass("icon-arrow-down")
}else{x.removeClass("active").find(".icon-arrow-up").removeClass("icon-arrow-up").addClass("icon-arrow-down");
w.addClass("active").find(".icon-arrow-down").removeClass("icon-arrow-down").addClass("icon-arrow-up");
L(ad).addClass("active")
}}).on("mouseout",function(){L(this).removeClass("active")
});
if(!t||(t&&!K)){S.on("change",R)
}S.find("#filters-filter").on("change","input",function(){var ad=this.checked?"filters:filter:added":"filters:filter:removed";
J.trigger(ad,{filterType:L(this).closest("label").data("tracking-filtertype"),filterSelected:L(this).closest("label").data("tracking-filterselected"),productCategory:L(this).closest("label").data("tracking-productcategory")});
if(t){if(!K){R()
}else{var ag=L(this).closest("dd"),ae=ag.find("input:checked").length,af=ag.prev("dt").find(".active-count"),w=S.find("#filters-filter input:checked").length;
af.text(ae).toggleClass("show",ae>0);
if(w>0){m.removeClass("disabled").prop("disabled",false);
M.removeClass("disabled").prop("disabled",false)
}else{m.addClass("disabled").prop("disabled",true);
M.addClass("disabled").prop("disabled",true)
}}}});
S.find("#filters-sort").on("change","input",function(){J.trigger("filters:sort",{sortSelected:L(this).closest("label").data("tracking-sortselected"),productCategory:L(this).closest("label").data("tracking-productcategory")});
if(t){if(!K){R()
}else{S.find("#filters-sort input").removeClass("checked");
L(this).addClass("checked").prop("checked",true);
v.removeClass("disabled").prop("disabled",false)
}}});
J.on(g,".reset-filters",U);
S.find("section").accordion();
if(!K){W.children(".filter-toggle").find(".icon-filter").trigger(g)
}if(T){k(T.split(","))
}function d(){var ae,ai=H.scrollTop(),af=P.gdt.filterData.productsDetail.length,ah=L(".page-footer"),aj=ah.height()||0,al=L(".product-grid"),am=al.find("li"),ad=al.height()+al.offset().top,ag=am.eq(0).height(),ak=am.length<af,w;
if(ak&&ai>=ad-ag-aj){ae=n();
al.after(G);
w=window.setTimeout(function(){o(ae);
clearTimeout(w);
G.remove()
},10)
}}H.on("touchmove.products scroll.products",P.gdt.debounce(d));
if(t){if(K){R();
m.on(g,function(){if(L(this).hasClass("disabled")){return
}R()
});
M.on(g,function(){if(L(this).hasClass("disabled")){return
}R();
P.gdt.Lightbox.Close()
});
v.on(g,function(){if(L(this).hasClass("disabled")){return
}R();
P.gdt.Lightbox.Close()
})
}else{R();
S.closest(".mtb-new-filters").find("#filterDropDown input").on("change",function(){R();
J.trigger("filters:sort",{sortSelected:L(this).closest("label").data("tracking-sortselected"),productCategory:L(this).closest("label").data("tracking-productcategory")})
})
}}else{R()
}if(j.indexOf("filter")!==-1){L(".breadcrumbnav").addClass("filter-crumb")
}if(K&&(l.length>0)&&(ab.length>0)){L(".breadcrumbnav").css("display","none");
L(".heading-wrapper").css("display","none")
}if(t&&!K){L(function(){var w=new s(L("#filterDropDown"));
L(document).click(function(){L(".filters-footer-section .filter").removeClass("active")
})
})
}};
function e(){var w=L(P).scrollTop();
var d=L(".filters.newFilters").offset().top;
if(w>d){ab.css("position","fixed");
ab.css("top",L(".mobile-navigation").height()+"px")
}else{ab.css("position","static");
ab.css("top","inherit")
}}function O(){S=W.children("form");
Q=W.children(".filter-toggle").find("a");
V=W.find(".filters-panel");
N=W.find(".filters-set");
E=N.find("label");
x=V.children("ul").find("a");
m=W.find(".reset-filters");
M=W.find(".apply-filters");
v=W.find(".done-filters");
t=S.hasClass("mtb-new-filters-form");
K=P.gdt.Utils.Browser.isMobile;
if(K){Q=W.children(".new-filter-header").children(".filter-toggle").find("a")
}if(q.length>0&&K){ab.css("position","static");
L(P).scroll(e)
}}function Y(){W=L(".filters");
if(!W.length){return
}O();
if(J.hasClass("ipad")){E.on("touchend",function(d){L(d.target).click()
})
}if(!P.gdt.filterData||!P.gdt.filterData.productsDetail||!P.gdt.filterData.productsDetail.length){P.gdt.Utils.Console.warn("Can't find the productsDetail data");
return
}if(!a){P.gdt.Utils.Console.warn("Can't find the productsDetail template");
return
}P.gdt.Filter=new h()
}Y()
}(document,window,window.jQuery||window.Zepto));
(function(e,a,b){a.gdt=a.gdt||{};
var c=function(){var t={opacity:0.65},B,w,d,C,k,g,F,D=a.gdt.Utils.Browser,v=false,E=".lightbox-feature-open",x=b("body"),y=b("html"),h="",f,s,m,p,r=(typeof a.ontouchstart==="undefined")?"click":"touchend",u="generic",j,l,o=0,n,z=a.gdt.Utils.noWCM;
b(".en_us #lightboxPanel").find("footer").remove();
d=function(){if(b.fn.tinyscrollbar&&!D.isiPad&&!D.isGalaxy&&!D.isMobile&&!D.isAndroidPad){p.addClass("scrollbar-added").tinyscrollbar()
}};
w=function(){var G,H,I=p.find(".boutique-pickup");
if(b.fn.tinyscrollbar&&!D.isiPad&&!D.isGalaxy&&!D.isMobile){if(p.hasClass("scrollbar-added")&&I.length===0){G=b("#lightbox-content").height()-b(".viewport").height();
H=m.find(".overview").css("top");
H=H.split("px")[0];
H=parseInt(H,10)*-1;
m.find(".viewport").scrollTop(0);
if(G<0){p.tinyscrollbar_update(0)
}else{if(G>H){p.tinyscrollbar_update(H)
}else{p.tinyscrollbar_update(G)
}}}else{if(I.length>0){I.tinyscrollbar()
}else{d()
}}}};
function q(){s=b("#lightbox");
m=b("#lightboxPanel");
p=b(".lightbox-wrapper")
}function A(H,M){var P=b.trim(M.find("#title").html()),N=M.find("#title")&&P.length>0?M.find("#title").html():M.find("h2").length?M.find("h2").html():j,L,K=M.children(".disclaimer").length?M.children(".disclaimer").html():"",G;
if(K!==""){b(".en_us #lightboxPanel section.lightbox-structure").after("<footer><div class='disclaimer'></div></footer>")
}H.find("#lightbox-title").html(N);
M.find(".disclaimer").remove();
L=M.find("#content").length?M.find("#content").html():M.find("#content-added").length?M.find("#content-added").html():M;
G=b(L).find(".boutique-pickup");
if(G.length>0){n=p.html();
p.empty().append(L)
}else{H.find("#lightbox-content").html(L)
}H.find(".disclaimer").html(K);
x.trigger("lightboxContentLoaded",[u]);
H.find(".lightbox-layout").removeClass("loader");
p.find("img").on("load",function(){if(b.fn.tinyscrollbar&&!D.isiPad&&!D.isGalaxy&&!D.isMobile){w()
}});
if(a.gdt.Utils.Browser.isOldIE&&b(".lightbox-table")){var O=b(".lightbox-table"),J=O.find("table").first().find("th").parent("tr");
for(var I=0;
I<J.length;
I++){b(J[I]).addClass("col"+J.length)
}}}B=function(I,G){var H=b("<div/>"),J;
I.find("#lightbox-title").empty();
I.find("#lightbox-content").empty();
if(I.find("#lightbox-content").length>0){I.find("#lightbox-content").empty()
}else{I.find(".lightbox-wrapper").empty().append(n);
d()
}if(G){if(typeof G==="string"){H.html(G)
}else{H.append(G)
}A(I,H)
}else{J={url:h,type:"GET",callback:function(K){if(f){H=b(K).find(f).removeAttr("style")
}else{H.append(K)
}if(H.attr("type")==="text/x-template"){H=b("<div>"+H.html()+"</div>")
}A(I,H)
},error:function(M,K,L){a.gdt.Utils.Console.warn("Lightbox data not found",K+" ("+L+")");
a.gdt.Utils.Console.log("lightboxRequest",M);
return false
}};
a.gdt.Utils.ajaxCall(J)
}return I
};
C=function(G){if(v){v=false;
return
}v=false;
o=x.scrollTop();
if(l){m.addClass(l)
}if(!y.hasClass("lightbox-open")){m.css({opacity:0,"z-index":101});
m.show().animate({opacity:1}).find(".lightbox-layout").addClass("loader");
s.css("opacity",0).show().animate({opacity:t.opacity})
}B(m,G);
y.addClass("lightbox-open");
x.addClass(u);
y.trigger("lightboxOpen",[u]);
x.scrollTop(0)
};
k=function(G){if(G){G.preventDefault();
G.stopPropagation()
}m.animate({opacity:0},{complete:function(){x.scrollTop(o);
o=0;
b(this).attr("style","").removeClass("open").hide();
y.removeClass("lightbox-open");
x.trigger("lightboxClose",[u]).removeClass(u);
u="generic";
if(l){m.removeClass(l)
}if(x.hasClass("country-select")){x.removeClass("country-select")
}}});
s.animate({opacity:0},{complete:function(){b(this).hide()
}});
b(".en_us #lightboxPanel").find("footer").remove()
};
F=function(){v=false;
if(z){x.on("touchmove",E,function(){v=true
}).on("touchend click",E,function(G){var H;
if(v){v=false;
return
}v=false;
G.preventDefault();
h=b(this).data("href")||"";
u=b(this).data("overlay")||"";
j=b(this).data("title")||"";
l=b(this).data("extra")||"";
if(z&&h.length){H=h.split(" ");
f=H[1];
h=H[0];
if(b(this).data("cachebust")){h+=(h.indexOf("?")!==-1?"&":"?")+"cachebust="+new Date().getTime()
}}C()
});
m.find(".icon-close-overlay").on(r,function(G){k(G)
});
x.on(r,".icon-close-overlay, .global-close-button-large, .cancel-lightbox, #lightbox",function(G){k(G)
});
b(document).keyup(function(G){if(G.keyCode===27){k(G)
}})
}else{b(E).each(function(){var G=b(this);
G.attr("href",G.data("href"))
})
}};
g=function(){q();
x.on("lightboxContentLoaded",function(){w();
function G(){a.gdt.Validate.validateForm("personal-message")
}if(p.hasClass("scrollbar-added")){p.tinyscrollbar_update(0)
}if(b(".content-gallery")){a.gdt.ContentGallery.contentGallery()
}if(b("#lightboxPanel video")){b("#lightboxPanel video").attr("preload","auto")
}if(b("#personal-message")){if(b("textarea")){a.gdt.Utils.TextTransforms.characterCount(b(".montblanc-form #cardmessage"))
}b("#personal-message").on("submit",G)
}});
p.on("accordion",function(){w()
});
d();
F()
};
g();
b(a).smartresize(w);
return{Open:C,Close:k,ResetDom:q,updateScrollbar:w}
};
a.gdt.Lightbox=new c()
}(document,window,window.jQuery||window.Zepto));
(function(n,p,l){var k=l("#detail-image"),a=l(".akpagescroll-slide"),b,g,e=l("html"),m="transitionend, oTransitionEnd, otransitionend, webkitTransitionEnd",o=(typeof window.ontouchstart==="undefined")?"click":"touchend";
b=l(".detail-images").find(".img-container");
if(k.length>=1){b.on(o,function(s){s.preventDefault();
s.stopPropagation();
var q=l(this).find("img"),d,t=q.data("backgroundsource");
function r(){b.removeClass("active");
q.addClass("active")
}if(p.gdt.Utils.Browser.isOldIE){a.attr("style","filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src="+t+' ,sizingMethod="scale");');
r()
}else{a.css("background-image",'url("'+t+'")');
d=a.css("background-image",'url("'+t+'")');
r();
setTimeout(function(){d.css("opacity","1")
},0.4)
}})
}var c=l(".mobile #detail-image"),f;
f=l(".mobile .detail-images").find(".img-container");
if(c.length>=1){f.on(o,function(u){u.preventDefault();
u.stopPropagation();
var r=l(this).find("img"),q=c,d=l(document.createElement("img")),t,s=q.find("img"),v=r.data("backgroundsource");
t=d.attr("src",v).css("opacity","0").appendTo(q).on(m,function(){s.remove()
});
f.removeClass("active");
r.addClass("active");
setTimeout(function(){t.css("opacity","1")
},0.4)
})
}if(l("#content").hasClass("webspecials-container")){if(p.gdt.Utils.Browser.isOldIE){var j=l(".page");
for(var h=0;
h<j.length;
h++){g=l(j[h]).css("background-image");
g=g.replace('url("',"");
g=g.replace('")',"");
l(j[h]).attr("style","filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src="+g+' ,sizingMethod="scale");')
}}e.addClass("webspecials")
}else{if(e.hasClass("webspecials")){e.removeClass("webspecials")
}}if(/android/i.test(navigator.appVersion)){l("article .scroll").akscroller({vertical:true});
l("#montblanc .webspecials-scroll.tablet").addClass("androidfix")
}else{l(".webspecials-container article").addClass("hwscroll")
}}(document,window,window.jQuery||window.Zepto));
(function(e,a,c){var b=c("body");
c.fn.engraving=function(d){return this.each(function(w,g){var j=a.gdt.engravingRegex,n=d&&d.typefaceName?"[name="+d.typefaceName+"]":"[name=font]",t=d&&d.positionName?"[name="+d.positionName+"]":"[name=location]",f=d&&d.inputId?c("#"+d.inputId):c("#engraving-text"),s=d&&d.outputId?c("#"+d.outputId):c("#engraving-preview"),u=c("#lightboxPanel").find("header"),p=c(".engraving-header"),m=c(g),o=[],z,l,A,v,r;
m.find(t).each(function(C,B){o.push(c(B).val())
});
function k(){Cufon.replace("#engraving-preview",{autoDetect:true});
Cufon.replace("#engraving-preview span",{autoDetect:true})
}function y(B){if(B&&l.data("direction")==="vertical"){B="<span>"+B.split("").join("<br />")+"</span>"
}return B
}function x(){var B,C,E;
r=f.val();
z=m.find(n+":checked");
l=m.find(t+":checked");
C=l.data("max-length");
A=l.val();
B=z.val();
if(c("html").hasClass("ko_kr")){if(B=="mb_connecting_script"){c("#engraving-preview").addClass("mb-connectingScript");
c("#engraving-preview").removeClass("mb-grotesk");
c("#engraving-preview").removeClass("mb-scriptRund")
}else{if(B=="mb_grotesk"){c("#engraving-preview").addClass("mb-grotesk");
c("#engraving-preview").removeClass("mb-connectingScript");
c("#engraving-preview").removeClass("mb-scriptRund")
}else{if(B=="mb_script_rund"){c("#engraving-preview").addClass("mb-scriptRund");
c("#engraving-preview").removeClass("mb-connectingScript");
c("#engraving-preview").removeClass("mb-grotesk")
}}}}if(p.length>0){u.hide()
}else{u.show()
}if(r&&r.length>C){v=r;
E=r.slice(0,C);
s.html(y(E));
f.val(E)
}else{if(v&&v.length<=C&&v.indexOf(r)===0){s.html(y(v));
f.val(v);
v=null
}else{s.html(y(r))
}}s.css("font-family",B);
f.attr("maxlength",C);
for(var D=o.length-1;
D>=0;
D--){s.closest("div").removeClass(o[D])
}s.closest("div").addClass(A||"");
k()
}function q(){b.trigger("basketUpdated");
var E=m.find('[data-overlay="embossing"]'),D=m.data("isaset");
if((E.length>0)&&(D===true)){var F=E.attr("data-href");
E.attr("data-href",F+"/set-product");
E.trigger("click");
mb.util.lightbox.closeLightbox();
mb.util.lightbox.openUrlInLightbox(F,"large")
}else{a.gdt.Lightbox.Close();
mb.util.lightbox.closeLightbox();
if(m.find(".mtb-presonalisation-eng-emb").length===0){var C=c(".shopping-bag a, .mb-header-cart-icon"),B=C.attr("href");
location.assign(location.protocol+"//"+location.host+B)
}}}function h(D,B,C){a.gdt.Utils.Console.warn("Cant save engraving",B+" ("+C+")");
a.gdt.Utils.Console.log("engravingRequest",D)
}Cufon.replace(".engraving-typeface span.radio + span",{autoDetect:true});
k();
m.on("change",function(){x()
});
f.on("keyup",function(){var B=f.val().replace(j,"");
f.val(B);
v=null;
x()
});
m.on("submit",function(D){var B=c(D.currentTarget||D.target);
D.preventDefault();
var E=f.val().replace(j,"").trim();
f.val(E);
var C={type:"POST",url:m.attr("action"),data:m.serialize(),callback:q,error:h};
if(a.gdt.Validate.validateForm(c(this)[0].id)){B.find('input[type="submit"]').addClass("mb-loader").prop("disabled",true);
if(m.find(".mtb-presonalisation-eng-emb").length===0){a.gdt.Utils.ajaxCall(C,B);
b.trigger("engravingLightboxClose")
}else{mb.comp.pdpbuybox.makeAjxCall(C.url,C.data).done(function(F){mb.util.lightbox.openContentInLightBox(F,"large",mb.comp.pdpbuybox.reInitCompInsideOverlay);
c.publish("update:basket")
}).fail(function(F,G){console.log("error while buying product"+G);
B.find('input[type="submit"]').removeClass("mb-loader").prop("disabled",true);
console.log("status is:"+F)
})
}}});
x()
})
}
}(document,window,window.jQuery||window.Zepto));
(function(c,a,b){b.fn.embossing=function(d){return this.each(function(E,h){var A=b("body"),F,p,n,u,C,o,J,M,z,k,t,B,v,I,s,K={GROTESQUE_MIXED:"mb_connecting_script",SCRIPT_ROUNDED:"mb_script_rund",GROTESQUE_UPPER:"mb_grotesk"},H={GROTESQUE_MIXED:"#fff -1px -1px, #333 1px 1px",SCRIPT_ROUNDED:"#fff -1px -1px, #333 1px 1px",GROTESQUE_UPPER:"#fff -1px -1px, #333 1px 1px"},L={embossingHeader:"header",embossingTitle:".embossing-header",inpPreview:"#embossing-preview",inpTextInputs:".embossing-text input",inpColors:".embossing-color",inpTypeface:".embossing-typeface",inpDot:".embossing-dot",inpSubmit:"#submit",inpHdnText:"#hdnText",shoppingBagLink:".shopping-bag a",fontName:".embossing-typeface-name"},j={basketUpdated:"basketUpdated",embossingLightboxClose:"embossingLightboxClose"},x=a.dataLayer||[];
function y(){var N=a.gdt.trackingObject||{};
N.page=document.location.pathname+"/embossingform";
N.event="virtualPageview";
a.gdt.Tracking.MTBtracking.pushToDataLayer(N)
}function w(){A.trigger(j.basketUpdated);
if(n.find(".mtb-presonalisation-eng-emb").length===0){var O=b(".shopping-bag a, .mb-header-cart-icon"),N=O.attr("href");
location.assign(location.protocol+"//"+location.host+N)
}}function g(){C.eq(0).attr("required","true").removeAttr("disabled");
l(C.eq(0));
C.each(function(N,O){if(b(O).val().trim().length>0){b(O).removeAttr("disabled");
b(O).next().removeAttr("disabled")
}});
n.on("change",function(){f()
});
C.on("keyup",function(S){var T=window.event?window.event:S,U=T.keyCode?T.keyCode:S.which;
if((U===37)||(U===38)||(U===39)||(U===40)||(U===9)||(U===16)){return
}var O=b(S.target),R=O.val().toUpperCase().split("")[0],V=s.indexOf(R)>-1,N=V===true?R:"",Q=parseInt(n.data("maxChars"));
O.val(N);
if(O.next().length){if(N.length){O.next().removeAttr("disabled");
l(O.next())
}else{for(var P=O.index()+1;
P<Q;
P++){C.eq(P).val("").attr("disabled","true")
}}}f()
});
n.on("submit",function(P){var O=b(P.currentTarget||P.target);
P.preventDefault();
var N={type:"POST",url:n.attr("action"),data:n.serialize(),callback:w,error:r};
if(a.gdt.Validate.validateForm(b(this)[0].id)){O.find('input[type="submit"]').addClass("mb-loader").prop("disabled",true);
if(n.find(".mtb-presonalisation-eng-emb").length===0){a.gdt.Utils.ajaxCall(N);
mb.util.lightbox.closeLightbox();
A.trigger(j.embossingLightboxClose,n);
O.find('input[type="submit"]').removeClass("mb-loader").prop("disabled",true)
}else{mb.comp.pdpbuybox.makeAjxCall(N.url,N.data).done(function(Q){mb.util.lightbox.openContentInLightBox(Q,"large",mb.comp.pdpbuybox.reInitCompInsideOverlay);
b.publish("update:basket")
}).fail(function(Q,R){console.log("error while buying product"+R);
O.find('input[type="submit"]').removeClass("mb-loader").prop("disabled",true);
console.log("status is:"+Q)
})
}}})
}function l(O){var P=O.val(),N=P.length*2;
O[0].focus();
if(O[0].setSelectionRange){O[0].setSelectionRange(N,N)
}else{O.val("").val(P)
}}function r(P,N,O){a.gdt.Utils.Console.warn("Cant save embossing",N+" ("+O+")");
a.gdt.Utils.Console.log("embossingRequest",P)
}function e(O){var N="";
O.each(function(P,Q){var R=b(O[P]).val();
if(R.length){N+=R;
if(I){N+="."
}}});
return b.trim(N)
}function m(){Cufon.replace(L.inpPreview,{textShadow:H[v],fontFamily:K[v],fontWeight:"bold"})
}function G(){u.text(t).attr("data-color",B).attr("data-typeface",v);
m()
}function f(){B=o.find("input:checked").val();
v=J.find("input:checked").val();
I=parseInt(M.find("input:checked").val());
t=e(C);
k.val(t);
if(p.length>0){F.hide()
}else{F.show()
}G()
}function q(N){F=b("#lightboxPanel").find(L.embossingHeader),p=b(L.embossingTitle),n=b(N),u=n.find(L.inpPreview),C=n.find(L.inpTextInputs),o=n.find(L.inpColors),J=n.find(L.inpTypeface),M=n.find(L.inpDot);
z=n.find(L.inpSubmit),k=n.find(L.inpHdnText);
s=n.data("allowedChars").split("");
Cufon.replace(L.fontName,{autoDetect:true})
}function D(N){if(!N){return
}q(N);
g();
y();
f()
}D(h)
})
}
}(document,window,window.jQuery||window.Zepto));
(function(e,a,b){a.gdt=a.gdt||{};
a.gdt.Lightbox=a.gdt.Lightbox||{};
a.gdt.Lightbox.MediaGallery=a.gdt.Lightbox.MediaGallery||{};
var c=function(){var d=(typeof window.ontouchstart==="undefined")?"click":"touchend";
function f(){var o=b(".buttonslideup"),n=b(".buttonslideup a"),q=false,k=b(".slidenavigation"),j=b(".icon-video-play-circle"),s=b("#lightbox"),l=b("body");
o.on(d+".buttonslideup",function(u){u.preventDefault();
u.stopPropagation();
var t=b(this).find("a").attr("class");
if(q){return
}if(t==="icon-arrow-up"){k.addClass("slidenavvisible").removeClass("slidenavhidden");
o.addClass("slidenavvisible").removeClass("slidenavhidden");
n.addClass("icon-arrow-down").removeClass("icon-arrow-up")
}else{k.removeClass("slidenavvisible").addClass("slidenavhidden");
o.removeClass("slidenavvisible").addClass("slidenavhidden");
n.removeClass("icon-arrow-down").addClass("icon-arrow-up")
}l.on(d+".buttonslideup",function(v){if(b(v.target).parents(".slidenavigation").length){return
}k.removeClass("slidenavvisible").addClass("slidenavhidden");
o.removeClass("slidenavvisible").addClass("slidenavhidden");
n.removeClass("icon-arrow-down").addClass("icon-arrow-up");
l.off(d+".buttonslideup")
})
}).on("touchmove",function(){setTimeout(function(){q=true
},15)
}).on("touchend",function(t){if(q){t.preventDefault();
t.stopPropagation();
q=false
}});
j.on(d+".icon-video-play-circle",function(v){v.preventDefault();
v.stopPropagation();
var t=b(this),w=t.attr("href")||("#"+t.prev().find("video").attr("id")),u=b(w)[0];
u.play();
setTimeout(function(){if(u.requestFullscreen){u.requestFullscreen()
}else{if(u.webkitRequestFullscreen){u.webkitRequestFullscreen()
}else{if(u.webkitEnterFullscreen){u.webkitEnterFullscreen()
}}}},1000)
});
var r={horizontal:true,scrollSpeed:1000,lockscroll:false,navarrows:true,callback:function(t){b(".tablet.slidenavigation").akcarousel("move",t);
b(".desktop.slidenavigation").akcarousel("move",t)
}};
b("#lightboxPanel").find(".gallery").akcarousel(r);
var h=b(".active"),p=b(".slide").index(h),m=b("a[data-overlay=media-gallery]");
if(m){b("#lightboxPanel").find(".gallery").akcarousel("move",p);
setTimeout(function(){b(".desktop.slidenavigation").akcarousel("move",p);
b(".tablet.slidenavigation").akcarousel("move",p)
},1000)
}b(".tablet.slidenavigation").akcarousel({horizontal:true,delay:5000,scrollSpeed:500,scrollNode:true,interruptionDelay:10000,skipbounds:true,lockscroll:true,tapnavigation:true,variablesizeslides:true,navarrows:true,callback:function(t){b("#lightboxPanel").find(".gallery").akcarousel("move",t)
}});
b(".mediagallery .desktop.slidenavigation").akcarousel({horizontal:true,delay:5000,scrollSpeed:500,scrollNode:true,interruptionDelay:10000,skipbounds:true,lockscroll:true,tapnavigation:true,variablesizeslides:true,navarrows:false,callback:function(t){b("#lightboxPanel").find(".gallery").akcarousel("move",t)
}});
if(b(".zoom").length>0){b(".zoom").galleryZoom()
}s.find(".global-close-button").on(d,function(t){t.preventDefault();
t.stopPropagation();
s.removeClass("active");
b(".gallery").akcarousel("move",0);
b(".tablet.slidenavigation").akcarousel("move",0);
b(".desktop.slidenavigation").akcarousel("move",0);
if(b(".mediagallery").find(".buttonslideup").hasClass("slidenavvisible")){b(".mediagallery").find(".buttonslideup").removeClass("slidenavvisible").addClass("slidenavhidden");
b(".mediagallery .buttonslideup").find("a").removeClass("icon-arrow-down").addClass("icon-arrow-up");
b(".mediagallery").find(".slidenavigation").removeClass("slidenavvisible").addClass("slidenavhidden")
}})
}function g(){f()
}return{init:g}
};
a.gdt.Lightbox.MediaGallery=new c()
}(document,window,window.jQuery||window.Zepto));
(function(f,a,e){var c=e(".downloadLink").find("input[type=checkbox]");
function b(g,d){if(g.prop("checked")){d.addClass("show")
}else{d.removeClass("show")
}}c.each(function(){var g=e(this),d=g.closest(".downloadLink").find(".icon-download");
g.on("change",function(){b(g,d)
})
})
}(document,window,window.jQuery||window.Zepto));
(function(c,a,b){b.fn.bookmark=function(){var d=(typeof window.ontouchstart==="undefined")?"click":"touchend";
return this.each(function(g,k){var e=b(k);
function j(){e.toggleClass("bookedmarked")
}function h(){e.parent("li").remove()
}function f(o){o.preventDefault();
var n,m;
if(e.hasClass("bookedmarked")){n="remove"
}else{n="add"
}if(e.hasClass("remove")){var l=e.parent().parent().find("a").attr("href").split(".")[0];
m=window.location.protocol+"//"+window.location.host+l+"."+n+"-bookmark.html"
}else{m=window.location.href.replace("html",n+"-bookmark.html")
}b.ajax({type:"GET",url:m,success:function(){if(e.hasClass("remove")&&e.hasClass("bookedmarked")){h()
}else{j()
}}})
}e.on(d,f)
})
}
}(document,window,window.jQuery||window.Zepto));
(function(c,a,b){b.fn.topicPicker=function(){return this.each(function(h,g){var k=b(g),d=k.next(".topics"),j=d.children("h2"),f=j.text(),l,e;
k.on("change",function(){e=k.val();
if(e===""){d.find("dd, dt").removeClass("hide-topic").addClass("show-topic");
j.html(f)
}else{d.find("dd, dt").removeClass("show-topic").addClass("hide-topic");
d.find("."+e).removeClass("hide-topic").addClass("show-topic");
l=k.children("option[value="+e+"]").text();
j.html(l)
}})
})
}
}(document,window,window.jQuery||window.Zepto));
(function(c,a,b){b.fn.toggleNext=function(){return this.each(function(g,d){var f=b(d),h=(typeof window.ontouchstart==="undefined")?"click":"touchend";
function e(k){var j=k.target;
k.preventDefault();
b(j).next().toggleClass("active")
}f.on(h,e)
})
}
}(document,window,window.jQuery||window.Zepto));
(function(e,a,c){a.gdt=a.gdt||{};
a.gdt.GenericArticle=a.gdt.GenericArticle||{};
var b=function(){var g=c(".generic-article section");
function d(){c(".generic-article").accordion()
}function f(){c(".topic-picker").topicPicker();
if(g.length){d()
}}return f()
};
a.gdt.GenericArticle=new b()
}(document,window,window.jQuery||window.Zepto));
(function(e,a,c){a.gdt=a.gdt||{};
a.gdt.ArtsAndCulture=a.gdt.ArtsAndCulture||{};
var b=function(){var g=(typeof window.ontouchstart==="undefined")?"click":"touchend";
function f(){var l=c("#teasergroup"),j=c(".teasergroup"),k=l.val();
if(k===""){j.find("li").removeClass("hide-date").addClass("show-date")
}else{j.find("li").removeClass("show-date").addClass("hide-date");
j.find("."+k).removeClass("hide-date").addClass("show-date")
}}function d(o){o.preventDefault();
var n=c(".teasergroup"),k=n.find("li"),j=n.find(".showing").length,m=8,l=k.length,p=Number(j+m);
c(".teasergroup li").slice(j,p).removeClass("hidden").addClass("showing");
if(p>=l){c(".teasergroup-component .more-results").css("display","none")
}}function h(){if(c("#teasergroup").length>0){f()
}c("#teasergroup").on("change",function(){f()
});
c(".teasergroup-component .icon-load-more").on(g,d)
}return h()
};
a.gdt.ArtsAndCulture=new b()
}(document,window,window.jQuery||window.Zepto));
(function(c,a,b){a.gdt=a.gdt||{};
a.gdt.relatedDropdowns=a.gdt.relatedDropdowns||{};
var e=function(){var o=[[],[],[],[]],d=[],D=b("select"),m=b('input[name="websiteCountryCode"]').val(),F=b("#addressJson"),l=b(".checkout"),s=b("#shipping"),h=b(".form_button_submit"),j=b('select[name="shipping.province"]'),p=b('select[name="shipping.district"]'),C=b('select[name="shipping.city"]'),z=b('select[name*="shipping"]').find("option"),f,A=b("body"),y=b('select[name="shipping.zipcode"]');
function r(I,H,J){if(J!==H){b('select[name="'+I+'"]').append('<option name="'+I+'" value="'+H+'">'+H+"</option>")
}}function x(H,J){var K=J||"";
if(H.length){for(var I=0;
I<H.length;
I++){r(H[I].type,H[I].name,K)
}}else{r(H.type,H.name,K)
}}function k(I,J){for(var H=0;
H<I.length;
H++){if(b(I[H]).find("option").length>1&&J){b(I[H]).find("option").slice(1).remove()
}}if(J){b(I).prop("selectedIndex",0)
}return I
}function E(K,L,J){var I=b(),H=b(K).next();
while(H.length){if(typeof L==="undefined"||H.is(L)){I=I.add(H)
}H=H.next()
}J=J||false;
k(I,J);
return I
}function w(O){var N=O.data||O,H=N.arr,L=N.nextArr,I=N.arrayNum,K=O.target,M=N.resetDropDown;
E(b(K),"select",M);
for(var J=0;
J<H[I].length;
J++){if(typeof H[I][J]==="object"&&H[I][J]&&H[I][J].name===K.value){x(H[I][J].children);
o[L]=H[I][J].children
}}a.gdt.Utils.preventOptionSelected()
}function v(H){function J(P){var O=y.find("option");
for(var Q=0;
Q<O.length;
Q++){if(O.text()!==P){x(H,P)
}}}function N(O,P){o[P]=O;
for(var Q=0;
Q<O.length;
Q++){J(y)
}}function I(O,Q,R){for(var P=0;
P<O.length;
P++){if(O[P].name===R){o[Q]=O[P].children;
x(O[P].children,R);
N(O[P].children,3)
}}}var M=H.children;
o[1]=M;
for(var L=0;
L<M.length;
L++){var K=M[L].children;
if(M[L].name===C.val()){I(K,2,p.val())
}}G()
}function t(I){var H={url:s.data("href")+"?shipping.zipcode="+I,type:"get",callback:function(J){var K=b(J);
s.removeClass("loader").find(".shipping-provider-content").html(K);
b(".addlink").removeClass("hide");
A.trigger("shippingLoaded");
h.removeClass("disabled").prop("disabled",false)
},error:function(L,J,K){a.gdt.Utils.Console.warn("Cant post zip code to shipping html",J+" ("+K+")");
a.gdt.Utils.Console.log("zipCodeRequest",L)
}};
a.gdt.Utils.ajaxCall(H)
}function q(I){for(var H=0;
H<I.length;
H++){if(b(I[H]).prop("selected")){d.push(I[H].value)
}}}function g(){j.removeClass("disabled").removeAttr("disabled","");
f.removeClass("disabled").removeAttr("disabled","");
D.parents("form").removeClass("loader")
}function B(){D.parents("form").addClass("loader");
f=E(j,"select");
j.addClass("disabled").attr("disabled","");
f.addClass("disabled").attr("disabled","");
s.next().addClass("shipping-textarea").next().addClass("hide")
}var n={url:F.data("href"),type:"GET",callback:function(I){var J=I;
if(J["shipping.province"]){for(var H=0;
H<J["shipping.province"].length;
H++){r(J["shipping.province"][H].type,J["shipping.province"][H].name,j.val());
o[0].push(J["shipping.province"][H]);
g()
}A.on("populatePostCode",function(){for(var K=0;
K<o[0].length;
K++){if(o[0][K].name===j.val()){x(o[0][K].children,C.val());
v(o[0][K])
}}G()
});
A.trigger("populatePostCode")
}},error:function(J,H,I){a.gdt.Utils.Console.warn("Drop down data not found",H+" ("+I+")");
a.gdt.Utils.Console.log("dropdownJsonRequest",J);
return true
}};
function G(){j.on("change",{arr:o,arrayNum:0,nextArr:1,resetDropDown:true},w);
C.on("change",{arr:o,arrayNum:1,nextArr:2,resetDropDown:true},w);
p.on("change",{arr:o,arrayNum:2,nextArr:3,resetDropDown:true},w);
y.on("change",function(){s.addClass("show").removeClass("hide loader");
q(z);
if(l.length>0){t(b(this)[0].value)
}})
}if(m&&m.indexOf("China")!==-1){if(j.length>0||p.length>0||C.length>0){B();
q(z);
a.gdt.Utils.ajaxCall(n)
}if(y.prop("selectedIndex")>0&&l.length>0){var u=y.find("option").eq(y.prop("selectedIndex"));
s.addClass("show").removeClass("hide loader");
A.trigger("shippingLoaded");
t(u[0].value)
}}};
a.gdt.relatedDropdowns=new e()
}(document,window,window.jQuery||window.Zepto));
(function(e,a,c){a.gdt=a.gdt||{};
var b=function(){var p=c("body"),r=a.gdt.Utils.noWCM,t=false,h=a.gdt.mulitsite,g=c("#default"),A=c("#US"),q,j,z=c(".mtb-countries-list-data"),f=c(".mb-countryselector-link"),C=z.data("countrie-list"),s=JSON.parse(c.cookie("GlobalE_Data")),u={};
function n(E){var D={path:"/",domain:a.gdt.domainName};
c.cookie("selectCountry",JSON.stringify(E),D)
}function k(E,G){var F={};
for(var D=E.length-1;
D>=0;
D--){if(E[D][G]&&E[D][G].url){F.url=E[D][G].url;
F.countryLocalCode=E[D][G].countryLocalCode
}}return F
}function x(E){var H=window.location.search.substring(1);
var G=H.split("&");
for(var F=0;
F<G.length;
F++){var D=G[F].split("=");
if(D[0]==E){return D[1]
}}}function y(D){if(m){if(c(".popupContent").hasClass(m)){q=c("."+m).find("a.button").attr("href");
j=q+"?glCountry="+D;
c("."+m).find("a.button").attr("href",j);
c(".mb-header-logo").find("a.mb-header-logo-link").attr("href",j)
}}else{q=c(".ecoInt").find("a.button").attr("href");
j=q+"?glCountry="+D;
c(".ecoInt").find(".intTextContaner").removeClass("hide");
c(".ecoInt").find("a.button").attr("href",j);
c(".mb-header-logo").find("a.mb-header-logo-link").attr("href",j)
}}var m=x("glCountry"),d=c("input[name=globalCountryCode]").val(),l=c("input[name=defaultCountryCode]").val();
function w(F){var E=h.split("/").slice(1)[0],D={url:"/"+E+"/fragments/country-bar.html",type:"GET",callback:function(J,M,H){var I=c(J).find(".selectcountry"),K={countryLocale:u.countryLocale,countryName:u.displayTitle,countryLocalLink:u.url,countryLocalCode:u.countryLocalCode,displayCountryName:u.countryName},L=I,G="";
n(K);
L=a.gdt.Utils.Template.render({data:K,template:L.html()});
if(K.countryName!==K.countryLocalCode){p.addClass("country-select");
a.gdt.Lightbox.Open(L)
}if(m){if(c(".popupContent").hasClass(m)){c("."+m).addClass("showPopupContent");
y(m)
}}else{c(".ecoInt").addClass("showPopupContent")
}if(l==="ALL"&&d==="HK"){if(F==="HK"||F==="TW"||F==="MO"){y(F)
}else{y(d)
}}c(".showPopupContent").focus()
},};
a.gdt.Utils.ajaxCall(D)
}function v(D){c(D).find(".gallery").akcarousel({horizontal:true,delay:5000,scrollSpeed:500,scrollNode:true,navarrows:false,autoSwitch:true,interruptionDelay:3000,callback:function(E){c(D).find(".gallery").akcarousel("move",E)
}})
}function B(D,F,E){w(E);
localStorage.setItem("welcomePopupCountry",D);
localStorage.setItem("welcomePopupGlobalCountry",F)
}function o(){var F=h||document.location.pathname;
F=F.replace(".html",".multisites.json");
var G=localStorage.getItem("welcomePopupCountry");
var E=localStorage.getItem("welcomePopupGlobalCountry");
var D={url:F,type:"GET",callback:function(M,J,L){var K=L.getResponseHeader("X-geoip-country-code")?L.getResponseHeader("X-geoip-country-code"):"Global",P=L.getResponseHeader("X-geoip-country-name")?L.getResponseHeader("X-geoip-country-name"):"Global",H=L.getResponseHeader("X-geoip-country-code")?true:false;
for(var I in M){if(M.hasOwnProperty(I)){for(var N=M[I].length-1;
N>=0;
N--){for(var Q in M[I][N]){if(Q==="Current"){u={displayTitle:M[I][N][Q].displayTitle,title:M[I][N][Q].title,url:M[I][N][Q].url,countryLocale:K,countryLocalCode:M[I][N][Q].countryCode,countryName:P}
}}}}}if(!c.cookie("selectCountry")){if(m){B(m,d,K)
}else{if(d){B(d,d,K)
}else{B(l,l,K)
}}}else{if(m){if(G!=m){B(m,d,K)
}}else{if(d){if(E!=d){B(d,d,K)
}}else{if(E!=l){B(l,l,K)
}}}}c.each(C,function(R,S){if(s!==null){if((S.countryCode)===s.countryISO){f.html(S.countryName)
}}});
var O=u.countryLocale?u.countryLocale.toLowerCase():"Global";
if(O.indexOf("us")!==-1){if(A.length>0){A.show();
v(A)
}}else{if(g.length>0){g.show();
v(g)
}}},error:function(J,H,I){a.gdt.Utils.Console.warn("Country data not found"+H+" ("+I+")");
a.gdt.Utils.Console.log("CountryRequest"+J)
}};
a.gdt.Utils.ajaxCall(D);
return u
}o()
};
a.gdt.CountryConfirmation=new b()
}(document,window,window.jQuery||window.Zepto));
(function(c,a,b){a.gdt=a.gdt||{};
a.gdt.ContentGallery=a.gdt.ContentGallery||{};
var e=function(){var d=(typeof window.ontouchstart==="undefined")?"click":"touchend";
var f=function(){var h=b(".content-gallery"),j=h.find(".image-thumbs").find("img");
j.on(d,function(l){l.preventDefault();
l.stopPropagation();
var n=b(this).data("image-text"),m=b(this).data("image"),k=b(this).parents(".col-two");
h.find("li").removeClass("selected");
k.find(".main-image").find("img").attr("src",m);
k.find(".gallery-image-text").text(n);
b(this).parent().parent().addClass("selected")
})
};
function g(){f()
}g();
return{contentGallery:f}
};
a.gdt.ContentGallery=new e()
}(document,window,window.jQuery||window.Zepto));
(function(e,b,c){b.gdt=b.gdt||{};
b.gdt.TogglePassword=b.gdt.TogglePassword||{};
var a=function(){var d=(typeof window.ontouchstart==="undefined")?"click":"touchend";
var g=function(){var j=c(".togglePassword"),h=b.gdt.Utils.Browser.isOldIE,k=j.prev(".password");
if(!h){j.on(d,function(l){l.preventDefault();
l.stopPropagation();
k=c(this).prev(".password");
if(k.attr("type")==="text"){k.attr("type","password");
c(this).text("SHOW")
}else{k.attr("type","text");
c(this).text("HIDE")
}})
}else{j.hide()
}};
function f(){g()
}f();
return{passwordToggle:g}
};
b.gdt.TogglePassword=new a()
}(document,window,window.jQuery||window.Zepto));
(function(e,a,c){a.gdt=a.gdt||{};
a.gdt.Timeline=a.gdt.Timeline||{};
var b=function(){var f=c(".mobile-slideout-link"),d=(typeof window.ontouchstart==="undefined")?"click":"touchend";
c(".mobile .col1 .scroll").addClass("hide");
f.on(d,function(h){h.preventDefault();
var g=c(this).next().hasClass("hide");
c(".mobile .col1 .scroll").addClass("hide");
if(g){c(this).next().removeClass("hide").addClass("show")
}else{c(this).next().removeClass("show").addClass("hide")
}})
};
a.gdt.Timeline=new b()
}(document,window,window.jQuery||window.Zepto));
(function(e,a,c){a.gdt=a.gdt||{};
var b=function(){var f=(typeof window.ontouchstart==="undefined")?"click":"touchend";
var d=function(){function g(h){h.preventDefault();
h.stopPropagation();
if(window.history.length!==0){window.history.back()
}}c(".backbutton").on(f,g)
};
return{historyBack:d()}
};
a.gdt.HistoryBack=new b()
}(document,window,window.jQuery||window.Zepto));
(function(e,a,b){a.gdt=a.gdt||{};
var c=function(){var g=(typeof window.ontouchstart==="undefined")?"click":"touchend",f=b(".checkout-coupon").find("button"),j=b('[name="couponCode"]');
function d(k){a.location.href=k
}var h=function(o){var m=b(o.target),n=m.data("href"),p=j.val(),l=b(".errorMessage"),k=n+"?couponCode="+p;
k=m.hasClass("button")?k:n;
m.prev("input").removeClass("error");
l.removeClass("show");
if(m.hasClass("button")&&m.prev("input")&&m.prev("input").val().length===0){m.prev("input").addClass("error");
l.addClass("show")
}else{d(k)
}};
f.on(g,h);
return{getPromotionCode:h}
};
a.gdt.Promotion=new c()
}(document,window,window.jQuery||window.Zepto));
(function(e,b,c){b.gdt=b.gdt||{};
var a=function(){var q=(typeof b.ontouchstart==="undefined")?"click":"touchend",o=c(".promotion-message"),h=b.gdt.promotionPath,j=c("body"),l=b.sessionStorage.promotion?JSON.parse(b.sessionStorage.promotion):undefined;
function g(){if(c(".cookie-message").length>0){var u=c(".cookie-message").height();
c(".promotion-message.show").css("top",u+"px");
var s=c(".promotion-message.show").height()+u;
c(".mobile-navigation").css("top",s+"px");
var r=c(".mobile-navigation").height()+s+"px";
c("#content").css("margin-top",r);
c(".new-filter-header").css("top",r)
}else{var t=c(".promotion-message.show").height()+c(".mobile-navigation").height()+"px";
c(".mobile-navigation").css("top",c(".promotion-message.show").height()+"px");
c("#content").css("margin-top",t);
c(".new-filter-header").css("top",t)
}}function f(){if(c(".cookie-message").length>0){var s=c(".cookie-message").height();
c(".mobile-navigation").css("top",s+"px");
var r=c(".mobile-navigation").height()+s+"px";
c("#content").css("margin-top",r);
c(".new-filter-header").css("top",r)
}else{c(".mobile-navigation").css("top","0px");
c("#content").css("margin-top",c(".mobile-navigation").height()+"px");
c(".new-filter-header").css("top",c(".mobile-navigation").height()+"px")
}}function d(){o.removeClass("show");
if(b.gdt.Utils.Browser.isMobile){f()
}}function n(){o.addClass("show");
if(b.gdt.Utils.Browser.isMobile){g()
}}function m(){b.sessionStorage.promotion=JSON.stringify({hide:true});
o.css("height",o.css("height"));
o.children().animate({opacity:0},100);
o.animate({height:0,padding:0},100,function(){o.hide();
if(b.gdt.Utils.Browser.isMobile){f()
}})
}function p(){n();
o.find("button").on(q,b.gdt.PromotionMessage.animateClose)
}function k(){var r={url:h+"?cachebust="+new Date().getTime(),callback:function(s){o=c(s).find(".promotion-message");
c(".promotion-message-container").html(c(o));
j.trigger("promo:loaded")
},error:function(u,s,t){b.gdt.Utils.Console.warn("No promo",s+" ("+t+")");
b.gdt.Utils.Console.log("No pomo request",u)
}}
}j.on("promo:loaded",p);
c(b).on("orientationchange resize",function(s){if(b.gdt.Utils.Browser.isMobile){if((c(".cookie-message").length>0)&&(c(".promotion-message.show").length>0)){var r=c(".cookie-message").height()+c(".promotion-message.show").height();
c(".promotion-message.show").css("top",c(".cookie-message").height()+"px");
c(".mobile-navigation").css("top",r+"px");
c("#content").css("margin-top",c(".mobile-navigation").height()+r+"px");
c(".new-filter-header").css("top",c(".mobile-navigation").height()+r+"px")
}else{if((c(".cookie-message").length>0)&&(c(".promotion-message.show").length==0)){c(".mobile-navigation").css("top",c(".cookie-message").height()+"px");
var t=c(".mobile-navigation").height()+c(".cookie-message").height()+"px";
c("#content").css("margin-top",t);
c(".new-filter-header").css("top",t)
}else{if((c(".promotion-message.show").length>0)&&(c(".cookie-message").length==0)){c(".mobile-navigation").css("top",c(".promotion-message.show").height()+"px");
var t=c(".mobile-navigation").height()+c(".promotion-message.show").height()+"px";
c("#content").css("margin-top",t);
c(".new-filter-header").css("top",t)
}}}}});
if(l&&l.hide){d()
}else{if(h&&h.length>0){k()
}else{n();
o.find("button").on("click",m)
}}return{hidePromo:d,showPromo:n,animateClose:m,getPromo:k}
};
b.gdt.PromotionMessage=new a()
}(document,window,window.jQuery||window.Zepto));
(function(c,a,b){a.gdt=a.gdt||{};
var e=function(){if(b("div.recently-viewed").length){var g=b(".recently-viewed"),f=a.gdt.recentlyViewedProductsPath,d={url:f+"?bustcache="+new Date().getTime(),type:"GET",callback:function(h){if(f===""){b("body").trigger("RecentlyViewd");
b(".product-preview").backgroundSwap()
}else{b(g).html(b(h).find("#content").html());
b("body").trigger("RecentlyViewd");
b(".product-preview").backgroundSwap()
}},error:function(k,h,j){a.gdt.Utils.Console.warn("Cant find recently viewd",h+" ("+j+")");
a.gdt.Utils.Console.log("RecentlyViewd",k)
}};
a.gdt.Utils.ajaxCall(d)
}};
a.gdt.RecView=new e()
}(document,window,window.jQuery||window.Zepto));
(function(e,a,c){a.gdt=a.gdt||{};
var b=function(){var g=(typeof window.ontouchstart==="undefined")?"click":"touchend",d=c(".cookie-message"),l=a.sessionStorage.cookieMessage?JSON.parse(a.sessionStorage.cookieMessage):undefined;
function f(){var m=c(".cookie-message").height()+c(".mobile-navigation").height()+"px";
c(".mobile-navigation").css("top",c(".cookie-message").height()+"px");
c("#content").css("margin-top",m);
c(".new-filter-header").css("top",m)
}function h(){if(c(".promotion-message.show").length>0){c(".promotion-message.show").css("top","0px");
c(".mobile-navigation").css("top",c(".promotion-message.show").height()+"px");
c("#content").css("margin-top",c(".promotion-message.show").height()+c(".mobile-navigation").height()+"px");
c(".new-filter-header").css("top",c(".promotion-message.show").height()+c(".mobile-navigation").height()+"px")
}else{c(".mobile-navigation").css("top","0px");
c("#content").css("margin-top",c(".mobile-navigation").height()+"px");
c(".new-filter-header").css("top",c(".mobile-navigation").height()+"px")
}}var k=function(){if(l&&l.hide){d.hide();
if(a.gdt.Utils.Browser.isMobile){h()
}}else{d.show();
if(a.gdt.Utils.Browser.isMobile){f()
}d.find("button").on(g,function(){a.sessionStorage.cookieMessage=JSON.stringify({hide:true});
d.css("height",d.css("height"));
d.children().animate({opacity:0},100);
d.animate({height:0,padding:0},100,"swing",function(){d.hide();
if(a.gdt.Utils.Browser.isMobile){h()
}})
})
}};
var j=function(){d.hide();
if(a.gdt.Utils.Browser.isMobile){h()
}};
return{showCookieMessage:k,hideCookieMessage:j}
};
a.gdt.CookieMessage=new b()
}(document,window,window.jQuery||window.Zepto));
(function(e,a,c){a.gdt=a.gdt||{};
a.gdt.Tracking=a.gdt.Tracking||{};
var b=function(){var aM=(typeof a.ontouchstart==="undefined")?"click":"touchend",G="pushToDataLayerKey",K=c('input[name="websiteCountryCode"]').val(),u=c(".paypal-basket"),V,Y=a.gdt.trackingObject||{},aL,t,al,ah,ao,L=[],N,F=c(a).height(),U,f,ab,ad,D,T=c("body"),W,aK,v=a.gdt.Utils.noWCM,h=a.dataLayer||[];
function aw(aP){return{"25%":parseInt(aP*0.25,10),"50%":parseInt(aP*0.5,10),"75%":parseInt(aP*0.75,10),"100%":aP-5}
}function ay(aP){a.gdt.Utils.Console.log(aP);
a.gdt.Utils.Console.logify(aP);
h.push(aP)
}function ae(aQ){var aP=JSON.parse(a.sessionStorage.getItem(G))||[];
aP.push(aQ);
a.sessionStorage.setItem(G,JSON.stringify(aP))
}function aH(){var aQ=JSON.parse(a.sessionStorage.getItem(G));
if(aQ){for(var aP=aQ.length-1;
aP>=0;
aP--){ay(aQ[aP])
}}a.sessionStorage.removeItem(G)
}function C(aQ,aP,aR){if(aP[aQ]){aR[aQ]=aP[aQ]
}return aR
}function az(aP,aT){var aS={},aQ={};
for(var aR=0;
aR<aP.length;
aR++){aS=C(aP[aR],aT,aQ)
}return aS
}function am(){var aS=document.documentElement.scrollTop?document.documentElement.scrollTop:document.body.scrollTop,aP=aS,aR=aw(F);
c.each(aR,function(aT,aU){if(c.inArray(aT,L)===-1&&aP>=aU){Y.event="scrollLevel";
Y.scrollLevel=aT;
Y=az(["event","scrollLevel"],Y);
L.push(aT);
ay(Y)
}});
var aQ={event:"virtualScroll",uri:document.location.pathname};
ay(aQ)
}function aq(aR){if(aR){var aQ=aR.indexOf("uid"),aP=aR.slice(aQ,aR.length);
return aP.replace("uid","")
}}function m(aP){aP=aP.replace(/(?:_| |\b)(\w)/g,function(aR,aQ){return aQ.toUpperCase()
});
aP=aP.charAt(0).toLowerCase()+aP.slice(1).replace("-","");
return aP
}function M(aP){return aP
}function d(aQ){if(aQ){for(var aP in aQ){if((aQ[aP]===null||aQ[aP]===undefined)||(aQ[aP]&&aQ[aP].length===0)||(typeof aQ[aP]==="object"&&aQ[aP].length===0)||(typeof aQ[aP]==="object"&&c.map(aQ[aP],M).length===0)){delete aQ[aP]
}}}}function s(aR){var aQ=[];
for(var aP=aR.length-1;
aP>=0;
aP--){aQ.push(c(aR[aP]).find("h1").text())
}return aQ.reverse().toString()
}function J(){var aP=a.gdt.UserInteractions.data();
return aP?aP.basket.cartPrice?aP.basket.cartPrice:0:0
}function y(aQ){var aP,aR=c("a[data-tracking-headercategories]").filter(function(aT,aS){return c(this).attr("href")==aQ.page
});
aP=c(aR[0]).data("trackingHeadercategories");
return aP
}function aF(aQ){var aP={path:"/",domain:a.gdt.domainName,expires:-1};
c.cookie(aQ,"",aP)
}function ak(aQ){aQ=c(aQ);
if(aQ.length===0){return
}var aZ=a.gdt.Utils.checkCookie("RCHMFrontEndCookie")?"loggedin":"guest";
V=aQ.data("trackable-cache")?aQ.data("trackable-cache"):aQ.data("trackable")?aQ.data("trackable"):false;
aL=aQ.data("tracking-event")?aQ.data("tracking-event"):aQ[0].event?aQ[0].event:a.gdt.Tracking.trackingObject?a.gdt.Tracking.trackingObject.event:"";
t=aQ.data("tracking-label")?aQ.data("tracking-label"):aQ[0].label?aQ[0].label:a.gdt.Tracking.trackingObject?a.gdt.Tracking.trackingObject.label:"";
Y.category=aQ.data("tracking-category")?aQ.data("tracking-category"):aQ[0].category?aQ[0].category:a.gdt.Tracking.trackingObject?a.gdt.Tracking.trackingObject.category:"";
Y.productCategory=aQ.data("tracking-productcategory")?aQ.data("tracking-productcategory"):aQ[0].productCategory?aQ[0].productCategory:a.gdt.Tracking.trackingObject?a.gdt.Tracking.trackingObject.productCategory:"";
Y.productCollection=aQ.data("tracking-productcollection")?aQ.data("tracking-productcollection"):aQ[0].productCollection?aQ[0].productCollection:a.gdt.Tracking.trackingObject?a.gdt.Tracking.trackingObject.productCollection:"";
Y.productSKU=aQ.data("tracking-productsku")?aQ.data("tracking-productsku"):aQ[0].productSKU?aQ[0].productSKU:a.gdt.Tracking.trackingObject?a.gdt.Tracking.trackingObject.productSKU:"";
Y.productName=aQ.data("tracking-productname")?aQ.data("tracking-productname"):aQ[0].productName?aQ[0].productName:a.gdt.Tracking.trackingObject?a.gdt.Tracking.trackingObject.productName:"-";
Y.productPrice=aQ.data("tracking-productprice")?aQ.data("tracking-productprice"):aQ[0].productPrice?aQ[0].productPrice:a.gdt.Tracking.trackingObject?a.gdt.Tracking.trackingObject.productPrice:"NA";
Y.refillSKU=aQ.data("tracking-refillsku")?aQ.data("tracking-refillsku"):aQ[0].refillSKU?aQ[0].refillSKU:a.gdt.Tracking.trackingObject?a.gdt.Tracking.trackingObject.refillSKU:"";
Y.shoppingBagValue=aQ.data("tracking-shoppingbagvalue")?aQ.data("tracking-shoppingbagvalue"):aQ[0].shoppingBagValue?aQ[0].shoppingBagValue:a.gdt.Tracking.trackingObject?a.gdt.Tracking.trackingObject.shoppingBagValue:"";
Y.productAvailability=aQ.data("tracking-productavailability")?aQ.data("tracking-productavailability"):aQ[0].productAvailability?aQ[0].productAvailability:a.gdt.Tracking.trackingObject?a.gdt.Tracking.trackingObject.productAvailability:"false";
Y.siteSearchTerm=al?al:a.gdt.Tracking.trackingObject?a.gdt.Tracking.trackingObject.siteSearchTerm:"";
Y.siteSearchResults=ah?ah:a.gdt.Tracking.trackingObject?a.gdt.Tracking.trackingObject.siteSearchResults:"";
Y.cartProducts=aQ.data("tracking-cartProducts")?aQ.data("tracking-cartProducts"):aQ[0].cartProducts?aQ[0].cartProducts:a.gdt.Tracking.trackingObject?a.gdt.Tracking.trackingObject.cartProducts:"";
Y.page=aQ.data("tracking-page")?aQ.data("tracking-page"):a.gdt.Tracking.trackingObject.page?a.gdt.Tracking.trackingObject.page:document.location.pathname;
Y.brand=aQ.data("tracking-brand")?aQ.data("tracking-brand"):aQ[0].brand?aQ[0].brand:a.gdt.Tracking.trackingObject?a.gdt.Tracking.trackingObject.brand:"";
Y.variant=aQ.data("tracking-variant")?aQ.data("tracking-variant"):aQ[0].variant?aQ[0].variant:a.gdt.Tracking.trackingObject?a.gdt.Tracking.trackingObject.variant:"";
Y.currencycode=aQ.data("tracking-currencycode")?aQ.data("tracking-currencycode"):aQ[0].currencycode?aQ[0].currencycode:a.gdt.Tracking.trackingObject?a.gdt.Tracking.trackingObject.currencycode:"";
Y.productEvent=a.gdt.Tracking.trackingObject?a.gdt.Tracking.trackingObject.productEvent:"";
Y.shippingoption=aQ.data("tracking-shippingoption")?aQ.data("tracking-shippingoption"):aQ[0].shippingoption?aQ[0].shippingoption:a.gdt.Tracking.trackingObject?a.gdt.Tracking.trackingObject.shippingoption:"NA";
Y.priceofshipping=aQ.data("tracking-priceofshipping")?aQ.data("tracking-priceofshipping"):aQ[0].priceofshipping?aQ[0].priceofshipping:a.gdt.Tracking.trackingObject?a.gdt.Tracking.trackingObject.priceofshipping:"NA";
Y.visitorStatus=a.gdt.Utils.checkCookie("RCHMFrontEndCookie")?"loggedin":"guest";
Y.pageCategory=a.gdt.Tracking.trackingObject?a.gdt.Tracking.trackingObject.pageCategory:"";
Y.summaryPaymentMethod=a.gdt.Tracking.trackingObject.summaryPaymentMethod?a.gdt.Tracking.trackingObject.summaryPaymentMethod:{};
Y.searchLink=aQ.data("tracking-kw")?aQ.data("tracking-kw"):aQ[0].kw?aQ[0].kw:a.gdt.Tracking.trackingObject?a.gdt.Tracking.trackingObject.kw:"";
Y.additionalFooterLink=aQ.data("tracking-additionalfooterlink")?aQ.data("tracking-additionalfooterlink"):a.gdt.Tracking.trackingObject?a.gdt.Tracking.trackingObject.additionalFooterLink:"";
Y.bannerTheme=aQ.data("tracking-theme")?aQ.data("tracking-theme"):a.gdt.Tracking.trackingObject?a.gdt.Tracking.trackingObject.bannerTheme:"";
Y.bannerPosition=aQ.data("tracking-position")?aQ.data("tracking-position"):a.gdt.Tracking.trackingObject?a.gdt.Tracking.trackingObject.bannerPosition:"";
Y.checkoutPage=aQ.data("checkout-page")?aQ.data("checkout-page"):a.gdt.Tracking.trackingObject?a.gdt.Tracking.trackingObject.checkoutPage:"";
W=a.gdt.Tracking.transactionTrackingObject?a.gdt.Tracking.transactionTrackingObject:{};
ao=a.gdt.Tracking.trackingObject.errorType?a.gdt.Tracking.trackingObject.errorType:"";
U=c('input[name="terms"]')||"";
f=aQ.data("tracking-newsletter")?aQ.data("tracking-newsletter"):c('input[name="newsletter"]').attr("checked")?"true":"false";
ab=c('select[name="country"]').val()||"";
D=c('select[id="globalcountry"]').val()||"";
ad=c('select[name="topic"]').val()||"";
aK=c('select[name="messageCard_0"]').val();
Y.siteLanguage=Y.siteLanguage||T.parent().attr("lang");
if(Y.checkoutPage&&c(".failed-response-tracking").length){Y.deliveryError="Yes"
}d(Y);
if(Y&&Y.page.indexOf("summary")!==-1){Y.promotionalCode=a.gdt.Tracking.trackingObject.promotionalCode?a.gdt.Tracking.trackingObject.promotionalCode:"";
Y.event="mtb_retrofit_shippingOption";
Y.shippingoption=a.gdt.Tracking.trackingObject.shippingoption?a.gdt.Tracking.trackingObject.shippingoption:"";
Y.priceofshipping=a.gdt.Tracking.trackingObject.priceofshipping?a.gdt.Tracking.trackingObject.priceofshipping:""
}if(Y&&Y.page.indexOf("login")!==-1){Y.event="logIn"
}if(Y&&document.location.pathname.indexOf("shopping/guest/order-confirmation/confirmation")!==-1){Y.page=Y.page+"/checkout/accountconfirmation"
}if(a.gdt.Tracking.transactionTrackingObject){Y.page=a.gdt.Tracking.transactionTrackingObject.page?a.gdt.Tracking.transactionTrackingObject.page:Y.page
}if(aL&&aL.length>0){Y.event=aL
}if(t&&t.length>0){Y.label=t
}if(Y&&Y.page&&Y.page.indexOf("home")!==-1){c(a).on("scroll",am)
}if(aL&&aL.indexOf("homepageBannerClicked")!==-1){Y=az(["event","bannerTheme","bannerPosition","label","category"],Y)
}if(aL&&aL==="homepageBannerClicked"){Y.event="homepageBannerClicked";
Y=az(["event","bannerTheme","bannerPosition"],Y)
}if(aL&&(aL==="loggedIn"||aL==="showCollectionsHeader"||aL==="discoverMontblancHeader"||aL==="findMontblancHeader"||aL==="myMontblanc"||aL==="proceedToCheckout"||aL==="logIn"||aL==="wishlistFromHeader"||aL==="zoom"||aL==="allDetails"||aL==="productCare"||aL==="callAConcierge"||aL==="continueShopping"||aL==="signUp"&&document.location.pathname.indexOf("account/register/confirmation")===-1||aL==="contactFooter"||aL==="corporateGiftShopFooter"||aL==="corporateGiftShopFooter"||aL==="customServicesFooter"||aL==="termsAndLegalFooter"||aL==="montblancAppsFooter"||aL==="signUpFromWishlist"||aL==="logInFromWishlist")){if(u.length>0&&aL==="continueShopping"){var aS=c(".delivery-name");
Y.deliveryMethod=(aS.length<=0)?"":aS.find('input[type="radio"]:checked').val()?aS.find('input[type="radio"]:checked').val():"";
Y=az(["event","deliveryMethod"],Y)
}else{Y=az(["event"],Y)
}}if(aL&&aL==="socialShareProductPage"){Y.socialNetwork=Y.label;
Y=az(["event","socialNetwork","productCategory","productCollection","productSKU"],Y)
}if(aL&&aL==="socialShareProductPage"&&t&&t==="print"){Y.event="printProduct";
Y=az(["event"],Y)
}if(aL&&aL==="bookmarkArticleFromPrivateSection"){var aU=Y.page,aW=aU.lastIndexOf("/"),aR=aU.lastIndexOf(".");
aU=aU.slice(aW+1,aR);
Y.articleTitle=aU;
Y=az(["event","articleTitle"],Y)
}if(aL&&(aL.indexOf("wishlistFromHeader")!==-1&&aL.indexOf("shoppingBag")!==-1)&&(aL!=="myMontblanc"&&aL!=="proceedToCheckout"&&aL!=="buyRefillsNow"&&aL!=="removeFromShoppingBag"&&aL!=="virtualPageview"&&aL!=="vitualPagePreview"&&aL.indexOf("confirmEngraving")!==-1&&Y.errorType.length===0)&&Y.cartProducts){Y=az(["event, cartProducts"],Y)
}if(aL&&aL==="CollectionClicked"){Y.category=Y.productCategory;
Y.collection=Y.productCollection;
Y=az(["event","category","collection"],Y)
}if(aL&&aL==="logInWithSocial"){if(document.location.href.indexOf("reservation.get-reservations")!==-1){Y.event="virtualPageview";
Y.page="checkout/loginwithsocialnetwork/"+t;
Y=az(["event","page"],Y)
}else{Y.socialNetwork=t;
Y=az(["event","socialNetwork"],Y)
}}if(Y.page&&Y.page.indexOf("account/newsletter-register")!==-1&&ao&&ao.length>0){Y.event="submitNewsletterWithError";
Y.errorType=ao;
Y=az(["event","errorType"],Y)
}if(Y.page&&Y.page.indexOf("newsletter-register/confirmation")!==-1&&!aL){if(Y.page.indexOf("success")!==-1){Y.page=Y.page+"/newslettersubscriptionvalidated";
Y=az(["page"],Y)
}else{Y.page=Y.page+"/newslettercompleted";
Y.event="newsletterSubscribed";
Y=az(["event","page"],Y)
}}if((aL&&aL==="signUp")||document.location.pathname.indexOf("account/register")!==-1){if(ao&&ao.length>0){Y.event="createAnAccountError";
Y.errorType=ao;
Y=az(["event","errorType"],Y)
}else{if(document.location.pathname.indexOf("confirmation")!==-1&&!aL){var a2=a.gdt.Utils.checkCookie("registerFormObj");
if(a2){Y=JSON.parse(decodeURIComponent(a2));
aF("registerFormObj")
}}}}if(aL&&aL==="additionalFooterLinkClicked"){Y=az(["event","additionalFooterLink"],Y)
}if(aL&&(aL&&aL==="addToWishlistProductPage"||aL==="removeFromWishlistProductPage")&&Y.page&&Y.page.indexOf("refill")===-1){if(Y&&Y.pageCategory&&Y.pageCategory.indexOf("Homepage")!==-1&&aL==="addToWishlistProductPage"){Y.event="addToWishlistHomePage";
Y=az(["event","productCategory","productCollection","productSKU","shoppingBagValue"],Y)
}else{if(Y&&Y.pageCategory&&Y.pageCategory.indexOf("Homepage")!==-1&&aL==="removeFromWishlistProductPage"){Y.event="removeWishlistHomePage";
Y=az(["event","productCategory","productCollection","productSKU","shoppingBagValue"],Y)
}else{if(Y&&Y.pageCategory&&Y.pageCategory.indexOf("Catalogue page")!==-1&&aL==="addToWishlistProductPage"){Y.event="addToWishlistCatePage";
Y=az(["event","productCategory","productCollection","productSKU","shoppingBagValue"],Y)
}else{if(Y&&Y.pageCategory&&Y.pageCategory.indexOf("Catalogue page")!==-1&&aL==="removeFromWishlistProductPage"){Y.event="removeWishlistCataPage";
Y=az(["event","productCategory","productCollection","productSKU","shoppingBagValue"],Y)
}else{Y=az(["event"],Y)
}}}}}if(Y&&Y.searchLink&&aL==="searchResult"){Y.kw55=Y.siteSearchTerm;
Y=az(["kw55"],Y)
}if(aL&&aL==="nibSelected"){Y=az(["event","nibSelected","productCategory","productCollection","productSKU"],Y)
}if(aL&&aL==="boutiqueSearch"&&document.location.pathname.indexOf("zh-cn/boutique")!==-1){Y=az(["event","citySelected"],Y)
}if(aL&&aL==="boutiqueResultClicked"&&document.location.pathname.indexOf("zh-cn/boutique")!==-1){Y=az(["event","citySelected","boutiqueName"],Y)
}if(aL&&aL==="addToBagProductPage"&&aL&&aL!=="productClickedOnCollectionOrCataloguePage"){var a1=y(Y);
Y.label=Y.pageCategory+"-"+Y.productCollection+"-"+Y.productSKU;
if(Y&&Y.pageCategory&&Y.pageCategory==="Homepage"){Y.event="addToBagHomePage"
}else{if(Y&&Y.pageCategory&&Y.pageCategory.indexOf("Catalogue page")!==-1){Y.event="addToBag"
}}if(Y.page.indexOf("refill")!==-1){Y.event="addToBagRefill";
Y.productCategory=a1;
Y.refillSKU=Y.refillSKU?Y.refillSKU:Y.productSKU;
Y=az(["event","label","productCategory","brand","variant","currencycode","productCollection","productSKU","refillSKU","shoppingBagValue"],Y)
}else{Y=az(["event","label","brand","variant","currencycode","productCategory","productCollection","productSKU","shoppingBagValue"],Y)
}}if(aL&&aL==="productClickedOnCollectionOrCataloguePage"){Y.productAvailability=Y.productAvailability?Y.productAvailability:"false";
Y=az(["event","productCategory","productCollection","productSKU","productAvailability"],Y)
}if(aL&&aL==="findRefill"){Y=az(["event","pageCategory","productCollection","productSKU"],Y)
}else{if(Y&&Y.pageCategory&&Y.pageCategory==="productPage"&&(aL&&aL.indexOf("addToBagProductPage")===-1&&aL.indexOf("countrySelectorFooter")===-1)){if(aL&&aL==="findRefills"||aL==="findABoutique"||aL==="confirmEngraving"||aL==="confirmEmbossing"){Y.event=aL;
Y=az(["event","productCategory","productCollection","productSKU"],Y)
}else{Y.label=Y.pageCategory+"-"+Y.productCollection+"-"+Y.productSKU;
Y=az(["label","pageCategory","productCollection","productSKU"],Y)
}}}if(aL&&aL==="addToBagFromWishlist"||aL==="addToWishlistFromBag"&&Y.page&&Y.page.indexOf("refill")===-1){if(Y&&Y.pageCategory&&Y.pageCategory==="Homepage"){Y.event="addToWishlistHomePage"
}else{if(Y&&Y.pageCategory&&Y.pageCategory.indexOf("Catalogue page")!==-1){Y.event="addToWishlistCatePage"
}}Y=az(["event","productCategory","productCollection","productSKU","shoppingBagValue"],Y);
ae(Y)
}if(aL&&aL==="buyRefillsNow"||aL==="confirmEngraving"){Y.event=aL;
Y=az(["event","productCategory","productCollection","productSKU"],Y)
}if(aL&&aL==="removeFromShoppingBag"||aL==="removeFromWishlist"){Y=az(["event","productCategory","productCollection","productSKU","shoppingBagValue","variant","brand","currencycode","productPrice","productName"],Y)
}if(aL&&aL==="addToBagRefill"){Y.refillSKU=Y.refillSKU?Y.refillSKU:Y.productSKU
}if(aL&&aL==="virtualPageview"){if(Y.page&&Y.page.indexOf("confirmembossing")!==-1){var aY=c(".embossing-edit form.engraving-remove").find('input[name="productCategory"]').val();
var aV=c(".embossing-edit form.engraving-remove").find('input[name="productCollection"]').val();
var aP=c(".embossing-edit form.engraving-remove").find('input[name="productSKU"]').val();
Y.embossing="confirmEmbossing";
Y.productCategory=aY?aY:Y.productCategory;
Y.productCollection=aV?aV:Y.productCollection;
Y.productSKU=aP?aP:Y.productSKU;
Y=az(["embossing","productCategory","productCollection","productSKU"],Y)
}else{if(Y.page&&Y.page.indexOf("confirmengraving")!==-1){Y.engraving="confirmEngraving";
Y.productCategory=c("form.engraving-remove").find('input[name="productCategory"]').val();
Y.productCollection=c("form.engraving-remove").find('input[name="productCollection"]').val();
Y.productSKU=c("form.engraving-remove").find('input[name="productSKU"]').val();
Y=az(["event","page","engraving","productCategory","productCollection","productSKU"],Y)
}else{Y=az(["event","page"],Y)
}}}if(aL&&aL==="newsletterform"){Y.page=Y.page+"/newsletterform";
Y=az(["page"],Y)
}if(al&&ah){Y.kw55=Y.siteSearchTerm;
Y.res55=Y.siteSearchResults;
Y=az(["kw55","res55"],Y)
}if(aL&&aL==="virtualPageview"&&Y.page&&Y.page.indexOf("shopping/checkout")!==-1&&!aQ.hasClass("shipping-info-chkout")){delete (Y.event);
Y.page=Y.page.replace(".html","")+"/pickfromprofile";
Y=az(["event","page"],Y)
}if(Y&&Y.event&&Y.event==="virtualPageview_search"){Y.page=Y.page+"/searchaddress"
}if(aL&&aL==="countrySelectorFooter"||aL==="socialShareFooter"||aL==="socialWishlist"){Y=az(["event","label"],Y)
}if(aL&&aL==="socialShareFooter"){Y.event="socialShareFooter";
Y.socialNetwork=aQ.data("tracking-label");
Y=az(["event","socialNetwork"],Y)
}if(document.location.pathname.indexOf("/register/confirmation/success")!==-1){Y.page=document.location.pathname+"/accountcreationconfirmed";
Y=az(["page"],Y)
}if(Y&&Y.pageCategory&&Y.pageCategory==="Checkout"){if(!(c("html").hasClass("ja_jp"))){if(c('input[type="radio"]#shippingType-BTQP').is(":checked")){if(c('input[name="provider.BTQP.boutiqueCode"]').is(":checked")){Y.pageURL=document.location.pathname+"/btqp";
Y.checkoutPage="shippingPage";
Y.currentTab="boutiquepickup"
}}else{Y.pageURL=document.location.pathname+"/shipit";
Y.checkoutPage="shippingPage";
Y.currentTab="shipping"
}Y.page=a.gdt.Utils.checkCookie("RCHMFrontEndCookie")?document.location.pathname+"/checkout/billingandshippinginformation/loggedin":document.location.pathname+"/checkout/billingandshippinginformation/guest"
}}if(aL&&aL==="virtualPageview"&&aQ.hasClass("shipping-info-chkout")){Y.page=Y.page+"/checkout/shippinginformation/"+aZ;
Y.event="virtualPageview_checkShip";
Y.visitorStatus=aZ
}if(Y&&Y.event&&Y.event==="virtualPageview_checkSearch"){Y.page=document.location.pathname+"/checkout/searchaddress/"+aZ;
Y=az(["page","event","visitorStatus"],Y)
}if(Y&&document.location.pathname.indexOf("/ko-kr/my-montblanc/order-history/open-orders/order-detail/confirmation/")!==-1){Y.page=document.location.pathname+"/canceltheorder"
}if(Y&&Y.pageCategory&&Y.pageCategory.indexOf("Order Detail Page")!==-1){Y.page=document.location.pathname+"/viewordertracking"
}if(Y&&Y.page&&Y.page.indexOf("/checkout/paymentmethod/")>=0){var aT=c('input[name="deliveryType"]').val();
Y.page=Y.page+Y.visitorStatus;
Y.citySelected=c('input[name="boutiqueCity"]').length?c('input[name="boutiqueCity"]').val():"";
Y.boutiqueName=c('input[name="boutiqueName"]').length?c('input[name="boutiqueName"]').val():"";
Y.shippingPrice=c('input[name="shippingPrice"]').length?c('input[name="shippingPrice"]').val():"";
Y.shippingoption=c('input[name="shippingOption"]').length?c('input[name="shippingOption"]').val():"";
if(aT!=="BTQP"){Y.checkoutPage="paymentPage";
Y.shippingPrice=c('input[name="shippingPrice"]').val();
if(c("html").hasClass("fr_fr")){Y.event="mtb_retrofit_shippingOption"
}if(c("html").hasClass("ja_jp")){Y={};
Y.checkoutPage="paymentPage";
Y.event="mtb_retrofit_shippingOption";
Y.shippingType=c('input[name="shippingOption"]').val();
Y.shippingOption=c('input[name="shippingOption"]').val();
Y.shippingPrice=c('input[name="shippingPrice"]').val()
}}else{Y.checkoutPage="paymentPage";
Y.shippingType=c('input[name="shippingOption"]').val();
Y.shippingOption=c('input[name="shippingOption"]').val();
Y.shippingPrice=c('input[name="shippingPrice"]').val();
Y.boutiqueName=c('input[name="boutiqueName"]').val();
Y.boutiqueCity=c('input[name="boutiqueCity"]').val();
if(c("html").hasClass("fr_fr")){Y.event="mtb_retrofit_boutique"
}if(c("html").hasClass("ja_jp")){Y={};
Y.checkoutPage="paymentPage";
Y.event="mtb_retrofit_boutique";
Y.shippingType="boutiquepickup";
Y.shippingOption=c('input[name="shippingOption"]').val();
Y.shippingPrice=c('input[name="shippingPrice"]').val()
}}Y=az(["page","event","checkoutPage","shippingType","boutiqueName","boutiqueCity","shippingOption","shippingPrice"],Y)
}if(Y&&Y.transactionId&&Y.visitorStatus==="guest"&&ao&&ao.length>0){Y.event="createAnAccountErrorAfterCheckOut";
Y.errorType=ao;
Y=az(["event","errorType"],Y)
}if(W&&W&&W.transactionId){Y=W;
Y.visitorStatus=a.gdt.Utils.checkCookie("RCHMFrontEndCookie")?"loggedin":"guest";
Y.origin="Order Confirmation Page";
if(W.promotionalCode===""){Y.promotionalCode="n/a"
}else{Y.promotionalCode=W.promotionalCode
}if(Y.shippingType==="shipIt"){Y.checkoutPage="transactionPage";
Y.shippingType="shipping";
if(K&&(K.indexOf("Japan")===0||K.indexOf("United States of America")===0||K.indexOf("Canada")===0||K.indexOf("China")===0)){Y.page=Y.page+"/shipping"
}Y.citySelected="n/a";
Y.boutiqueName="n/a";
Y.shippingOption;
Y.shippingPrice
}else{Y.checkoutPage="transactionPage";
Y.shippingType="boutiquepickup";
if(K&&(K.indexOf("Japan")===0||K.indexOf("United States of America")===0||K.indexOf("Canada")===0||K.indexOf("China")===0)){Y.page=Y.page+"/boutiquepickup"
}Y.citySelected;
Y.boutiqueName;
Y.shippingOption="n/a";
Y.shippingPrice="n/a"
}Y=az(["transactionCurrency","checkoutPage","citySelected","boutiqueName","shippingOption","shippingPrice","shippingType","transactionId","transactionPaymentMethod","transactionProducts","transactionShipping","transactionTax","transactionTotal","visitorStatus","origin","promotionalCode","messageSelected","page","event"],Y)
}if(c.isEmptyObject(W)&&Y&&document.location.pathname.indexOf("shopping/guest/order-confirmation")!==-1){var a0=a.gdt.Utils.checkCookie("registerFormObj");
if(a0){Y=JSON.parse(decodeURIComponent(a0));
Y.accountCreationAfterCheckOut=Y.accountCreation?"true":"false";
Y=az(["accountCreationAfterCheckOut","newsletterSubscription"],Y);
aF("registerFormObj")
}else{if(document.location.pathname.indexOf("success")!==-1){Y.page=Y.page+"/accountcreationconfirmedafterguestcheckout";
Y=az(["page"],Y)
}else{Y.accountCreationAfterCheckOut=Y.accountCreation?"true":"false";
Y=az(["accountCreationAfterCheckOut","newsletterSubscription"],Y)
}}}if(Y&&Y.summaryPaymentMethod){var aX=c('input[name="deliveryType"]').val();
if(aX!=="BTQP"){Y.checkoutPage="summaryPage";
Y.shippingType="shipping"
}else{Y.checkoutPage="summaryPage";
Y.shippingType="boutiquepickup"
}az(["summaryPaymentMethod","page","checkoutPage","shippingType"],Y)
}if(Y&&Y.page&&Y.page.indexOf("checkout-login")!==-1&&aL!=="logInWithSocial"){Y.page=a.gdt.Utils.checkCookie("RCHMFrontEndCookie")?Y.page+"/checkout/selection/loggedin":Y.page+"/checkout/selection/guest";
Y=az(["page"],Y)
}if(Y&&Y.pageCategory&&Y.pageCategory.indexOf("Contact page")!==-1&&U.attr("checked")){Y.contactConfirmation=U.attr("checked")?"true":"false";
Y.newsletterSubscription=f;
Y.countryContact=ab;
Y.topic=ad;
Y.selectedShop=s(c(".country_"+D));
Y=az(["contactConfirmation","newsletterSubscription","countryContact","topic","selectedShop"],Y)
}if(aL&&aL!=="boutiqueSearch"&&aL!=="boutiqueResultClicked"&&aL!=="confirmEngraving"&&aL!=="addToBagProductPage"&&!V&&aL!=="signUp"&&aL!=="createAnAccountError"&&Y&&Y.page&&Y.page.indexOf("checkout-login")!==-1){if(a.gdt.Utils.checkCookie("RCHMFrontEndCookie").length>0){Y.userId=aq(a.gdt.Utils.checkCookie("RCHMFrontEndCookie"));
Y.visitorStatus=a.gdt.Utils.checkCookie("RCHMFrontEndCookie")?"loggedin":"guest";
if(Y.pageCategory&&Y.pageCategory.length>0){Y.pageCategory=Y.pageCategory
}}else{if(Y&&aL!=="loggedIn"){Y.visitorStatus=a.gdt.Utils.checkCookie("RCHMFrontEndCookie")?"loggedin":"guest";
if(Y.pageCategory&&Y.pageCategory.length>0){Y.pageCategory=Y.pageCategory
}}}}if(aL&&aL.indexOf("subCategoryOf")>=0){Y=az(["event","label"],Y)
}if(Y.checkoutPage&&Y.checkoutPage==="shoppingBag"&&u.length>0){Y.promotionalCode=c(".shopping-bag-promotion").find(".promo-text").find(".coupon-code").html()?c(".shopping-bag-promotion").find(".promo-text").find(".coupon-code").html():""
}if(Y&&Y.visitorStatus==="loggedin"){Y.userId=aq(a.gdt.Utils.checkCookie("RCHMFrontEndCookie"))
}if(aQ[0].component&&aQ[0].component==="ymal"){Y.event="youMayAlsoLikeAddtoBag";
Y=az(["event","productCategory","productCollection","productSKU"],Y)
}Y.uri=document.location.pathname;
return Y
}function ai(){if(c('form[name="login-form"] .failed-response-tracking').length){var aP=a.gdt.Tracking.trackingObject;
Y=ak(aP);
Y.loginFailed="Yes";
Y=az(["loginFailed"],Y);
ay(Y)
}T.on("lightboxContentLoaded",function(aU){var aQ=aU?aU.currentTarget:aU?aU.target:a.gdt.Tracking.trackingObject;
Y=ak(aQ);
var aS=c("#lightbox-content #embossing");
var aT=c("#lightbox-content #engraving");
var aR=c("#lightbox-content .overlay-profile");
if(u.length>0){if(Y.event==="popinAddProductPerso"){Y.page=Y.page+"/addproductpersonnalisation"
}if(Y.event==="popinEditProductPerso"){Y.page=Y.page+"/editproductpersonnalisation"
}if(Y.event==="popinAddMessageCard"){Y.page=Y.page+"/addmessagecard"
}if(Y.event==="popinEditMessageCard"){Y.page=Y.page+"/editmessagecard"
}Y=az(["event","page"],Y);
ay(Y)
}if(aS.length){Y.productEmbossing="Yes";
Y.page=document.location.pathname+"/embossingform";
Y.event="popinAddProductPerso";
Y=az(["productEmbossing","page","event"],Y);
ay(Y);
ae(Y)
}if(aT.length){Y.event="virtualPageview";
Y.page=document.location.pathname+"/engravingform";
Y.productEngraving="Yes";
Y=az(["productEngraving","page","event"],Y);
ay(Y);
ae(Y)
}if(aR.length){Y.page=document.location.pathname.replace(".html","")+"/pickfromprofile"
}if(Y.event&&Y.event==="addToBagFromWishlist"||Y.event==="addToWishlistFromBag"||Y.event==="addToWishlistHomePage"||Y.event==="addToWishlistCatePage"){aH()
}});
T.on("userinteractionsdata",function(aR){var aQ=aR?aR.currentTarget:aR?aR.target:a.gdt.Tracking.trackingObject;
Y=ak(aQ);
Y.cartAmount=J();
Y.siteLanguage=Y.siteLanguage||T.parent().attr("lang");
if(Y&&Y.pageCategory&&Y.pageCategory==="Catalogue page"){Y.productCategory=y(Y)
}Y=az(["cartAmount","siteLanguage","pageCategory","productCategory"],Y);
ay(Y)
});
T.on(aM,'.top-nav .lang .concierge a, a[data-tracking-contactus="true"]',function(aR){var aQ=aR?aR.currentTarget:aR?aR.target:a.gdt.Tracking.trackingObject;
Y=ak(aQ);
Y.contactAmbassador="Yes";
ay(Y)
})
}function S(){if(c('input[type="radio"]#shippingType-BTQP').is(":checked")){Y.pageURL=document.location.pathname+"/btqp";
Y.checkoutPage="shippingPage";
Y.currentTab="boutiquepickup"
}else{Y.pageURL=document.location.pathname+"/shipit";
Y.checkoutPage="shippingPage";
Y.currentTab="shipping"
}Y.page=a.gdt.Utils.checkCookie("RCHMFrontEndCookie")?document.location.pathname+"/checkout/billingandshippinginformation/loggedin":document.location.pathname+"/checkout/billingandshippinginformation/guest"
}function P(aP){if(aP.event==="loggedIn"&&!a.gdt.Utils.checkCookie("RCHMFrontEndCookie")){return
}ay(aP)
}var I=function(aP){aP=aP||0;
return aP
};
function av(aR,aQ){aQ=aQ||"trackingObject";
var aP={path:"/",domain:a.gdt.domainName};
c.cookie(aQ,JSON.stringify(aR),aP)
}function ag(aP){Y=ak(aP);
if(Y&&Y.event&&Y.event==="findRefills"||Y.event==="productCare"||Y.event==="montblancAppsFooter"||Y.event==="contactFooter"||Y.event==="corporateGiftShopFooter"||Y.event==="customServicesFooter"||Y.event==="termsAndLegalFooter"||Y.event==="findMontblancHeader"||Y.event==="productClickedOnCollectionOrCataloguePage"||Y.event==="signUp"){av(Y)
}else{P(Y)
}}function r(aR,aQ){var aP=aR?aR.currentTarget:aR?aR.target:a.gdt.Tracking.trackingObject;
if(!c.isEmptyObject(a.gdt.Tracking.transactionTrackingObject)){aP=a.gdt.Tracking.transactionTrackingObject
}if(aQ){aP=aQ
}if(c.isEmptyObject(aP)&&(document.location.pathname.indexOf("success")===-1&&document.location.pathname.indexOf("newsletter-register/confirmation.html")===-1)){return
}else{ag(aP)
}}var aC=function(aP){aP=aP||"";
if(a.gdt.Tracking.trackingObject&&a.gdt.Tracking.trackingObject.pageCategory!=="Shopping Bag"&&aP.length>0){a.gdt.Tracking.trackingObject.errorType=aP;
ak(a.gdt.Tracking.trackingObject);
P(Y)
}else{a.gdt.Tracking.trackingObject.errorType=""
}};
function j(aP){var aQ={"tracking-productcollection":c(aP).find('input[name="productCollection"]').val()||"","tracking-productcategory":c(aP).find('input[name="productCategory"]').val()||"","tracking-productsku":c(aP).find('input[name="productSKU"]').val()||"","tracking-event":c(aP).find('input[name="event"]').val()||"","tracking-shoppingbagvalue":c(aP).find('input[name="shoppingbagvalue"]').val()||"","tracking-productavailability":c(aP).find('input[name="productAvailability"]').val()||"false"};
return aQ
}function p(aQ){var aP=j(aQ.target);
aQ=c(aQ);
aQ.data(aP);
ag(aQ)
}function aD(aP){Y.event="nibSelected";
Y.nibSelected=c(aP.target).find("option").filter(function(){return c(this).prop("selected")===true
})[0].innerHTML;
Y=ak(Y);
P(Y)
}function ax(){N=a.gdt.Utils.checkCookie("trackingObject").length>0?true:false;
if(!N&&a.gdt.Utils.checkCookie("registerFormObj").length>0&&document.location.pathname.indexOf("confirmation")!==-1){N=true
}return N
}function w(aQ){var aP=aQ?aQ.currentTarget:aQ?aQ.target:a.gdt.Tracking.trackingObject;
Y=ak(aP);
if(Y&&Y.event&&(Y.event.indexOf("Header")!==-1&&Y.event.indexOf("findMontblancHeader")===-1)&&Y.event.indexOf("wishlistFromHeader")===-1){P(Y)
}else{delete Y.pageCategory;
av(Y)
}}function an(aQ){var aP=aQ?aQ.currentTarget:aQ?aQ.target:a.gdt.Tracking.trackingObject;
Y=ak(aP);
delete Y.pageCategory;
av(Y)
}function ar(aP){var aQ={"tracking-page":document.location.pathname+"/confirmengraving","tracking-event":"vitualPagePreview"};
aP=c(aP.target);
aP.data(aQ);
ag(aP)
}function g(aP){var aQ={"tracking-page":document.location.pathname+"/confirmembossing","tracking-event":"vitualPagePreview"};
aP=c(aP.target);
aP.data(aQ);
ag(aP)
}function aa(aP){var aQ={"tracking-event":"loggedIn"};
aP=c(aP.target);
aP.data(aQ);
Y=ak(aP);
av(Y)
}function aI(){var aP={};
if(document.location.pathname.indexOf("shopping/guest/order-confirmation")!==-1){aP={newsletterSubscription:c('input[name="newsletter"]').attr("checked")?"true":"false",accountCreationAfterCheckOut:"true"}
}else{aP={newsletterSubscription:c('input[name="newsletter"]').attr("checked")?"true":"false",accountCreation:"true"}
}av(aP,"registerFormObj")
}function aG(){var aP=a.gdt.Utils.checkCookie("trackingObject");
if(a.gdt.Utils.checkCookie("registerFormObj").length>0){aP=a.gdt.Utils.checkCookie("registerFormObj");
P(JSON.parse(decodeURIComponent(aP)));
aF("registerFormObj")
}else{P(JSON.parse(decodeURIComponent(aP)));
aF("trackingObject")
}}function Z(aS){var aP,aR;
Y.event="boutiqueSearch";
Y.citySelected=c(aS.target).find("option").filter(function(){return c(this).prop("selected")===true
})[0];
aP=Y.citySelected.value;
if(aP.length>0){aR=c("dt."+aP);
for(var aQ=0;
aQ<aR.length;
aQ++){if(c(aR[aQ]).data("tracking-value")){Y.citySelected=c(aR[aQ]).data("tracking-value");
break
}}Y=ak(Y);
P(Y)
}}function aE(aQ){var aP=c(aQ.target);
Y.event="boutiqueResultClicked";
Y.boutiqueName=aP.data("tracking-value");
Y.citySelected=aP.data("tracking-key");
Y=ak(Y);
P(Y)
}function ap(aR){if(aR){var aS=Math.round(aR.currentTime()),aP=Math.round(aR.duration()),aT="<25%",aQ=Math.round(aS/aP*100);
if(aQ>=25){aT="25%"
}if(aQ>=50){aT="50%"
}if(aQ>=75){aT="75%"
}if(aQ===100){aT="100%"
}return aT
}}function z(aP){var aQ=c(aP?aP.currentTarget:aP?aP.target:c('.gift-options input[name^="giftwrap_"]'));
if(c("html").hasClass("ja_jp")&&aQ.is(":checked")){Y={};
Y.event="mtb_retrofit_giftWrapping";
ay(Y)
}}function A(aP){if(c('input[type="radio"]#shippingType-BTQP').is(":checked")){Y.event="mtb_retrofit_checkoutTab";
Y.currentTab="boutiquepickup";
Y.pageURL=document.location.pathname+"/boutiquepickup";
Y.page=document.location.pathname+"/boutiquepickup";
if(c("html").hasClass("ja_jp")){Y={};
Y.event="mtb_retrofit_checkoutTab";
Y.currentTab="boutiquepickup"
}}else{if(c('input[type="radio"]#shippingType-billingAddressSameAsShipping').is(":checked")||c('input[type="radio"]#shippingType-shipToAlternate').is(":checked")){Y.event="mtb_retrofit_shippingOption";
Y.currentTab="homedelivery";
if(c("html").hasClass("ja_jp")){Y={};
Y.event="mtb_retrofit_checkoutTab";
Y.currentTab="shipping"
}}else{if(c('input[type="radio"]#shippingType-SHIPIT').is(":checked")){Y.event="mtb_retrofit_checkoutTab";
Y.currentTab="shipping";
Y.pageURL=document.location.pathname+"/shipping";
Y.page=document.location.pathname+"/shipping"
}}}if(aP){ay(Y)
}}function O(){if(c('input[type="radio"]#shippingType-BTQP').is(":checked")){if(c('input[name="provider.BTQP.boutiqueCode"]').is(":checked")){Y.event="mtb_retrofit_boutique";
Y.selectedBoutiqueName=c('input[name="provider.BTQP.boutiqueCode"]').closest("ul").siblings(".trackBoutName").val();
Y.selectedBoutiqueCity=c('input[name="provider.BTQP.boutiqueCode"]').closest("ul").siblings(".trackBoutcity").val();
Y.pageURL=document.location.pathname+"/btqp";
A();
ay(Y)
}if(c("html").hasClass("ja_jp")){Y={};
Y.event="mtb_retrofit_boutique";
Y.boutiqueName=c(".ja_jp .jp-shipping-provider-content .trackBoutName").val();
Y.citySelected=c(".ja_jp .jp-shipping-provider-content .trackBoutCity").val();
ay(Y)
}}else{if(c('input[type="radio"]#shippingType-SHIPIT').is(":checked")){Y.event="mtb_retrofit_shippingOption";
Y.checkoutPage="shippingPage";
Y.currentTab="shipping";
Y.pageURL=document.location.pathname+"/shipIt";
Y.shippingOption="shipIt";
Y.shippingPrice=c(".shipping-provider-content ul#shippingProvider").find('input[type="radio"]:checked').data("tracking-price-value");
A();
ay(Y)
}else{if(c('.ja_jp input[type="radio"]#shippingType-billingAddressSameAsShipping').is(":checked")||c('.ja_jp input[type="radio"]#shippingType-shipToAlternate').is(":checked")){Y={};
Y.event="mtb_retrofit_shippingOption";
Y.shippingOption="shipping"||c(".ja_jp .mtb-shipping-option-list-input:checked").val();
Y.shippingPrice=c(".ja_jp .mtb-shipping-option-list-input:checked").data("shippingCost");
ay(Y)
}}}}function aJ(){var aQ={};
aQ.event="mtb_retrofit_findProductNearYou";
aQ.pageURL=document.location.pathname+"/nearyou/"+a.trackingObject.productCategory+"/"+a.trackingObject.productCollection+"/"+a.trackingObject.productSKU;
ay(aQ);
var aP={};
aP.event="findABoutique";
aP.productCategory=a.trackingObject.productCategory;
aP.productCollection=a.trackingObject.productCollection;
aP.productSKU=a.trackingObject.productSKU;
ay(aP)
}function ac(){Y.event="mtb_bsaod_search";
ay(Y)
}function q(aQ){var aP=c(aQ.currentTarget||aQ.target);
Y.event="mtb_retrofit_viewMap";
Y.boutiqueName=aP.closest("div.boutique-pickup-address").find("h2").html();
Y.boutiqueCity=aP.closest("div.boutique-pickup-address").find("span.boutiqueCity").html();
Y.citySelected=aP.closest("div.boutique-pickup-address").find("span.boutiqueCity").html();
ay(Y)
}function X(aQ){var aP=c(aQ.currentTarget||aQ.target);
Y.event="headerClick";
Y.headerCategories=aP.data("tracking-headercategories");
Y.label=aP.data("tracking-label");
Y.subCategories1=aP.data("tracking-subcategories1");
Y.subCategories2=aP.data("tracking-subcategories2")
}function Q(aQ){var aP=aQ?aQ.currentTarget:aQ?aQ.target:a.gdt.Tracking.trackingObject;
Y=ak(aP);
Y.event="Often Bought - See Details";
ay(Y);
av(Y)
}function aB(aQ){var aP=aQ?aQ.currentTarget:aQ?aQ.target:a.gdt.Tracking.trackingObject;
Y=ak(aP);
Y.event="addToCartOBW";
ay(Y)
}function at(aQ){var aP=aQ?aQ.currentTarget:aQ?aQ.target:a.gdt.Tracking.trackingObject;
Y=ak(aP);
Y.event="findRefill";
ay(Y)
}function o(aQ){var aP=aQ?aQ.currentTarget:aQ?aQ.target:a.gdt.Tracking.trackingObject;
Y=ak(aP);
Y.event="youMayAlsoLikeAddtoBag";
ay(Y)
}function B(){Y.event="removePersonnalisation";
ay(Y)
}function aA(){Y.event="confirmMessageCard";
ay(Y)
}function au(){var aP={event:"removeMessageCard"};
ae(aP)
}function H(){Y.event="readMore";
Y=az(["event","productCategory","productCollection","productSKU"],Y);
ay(Y)
}var E=function(aP,aR){var aQ={event:"videoInteraction",videoStatus:"Played "+ap(aP),videoInteractions:aR+" Video"};
if(aQ.videoStatus.indexOf("100%")!==-1){aQ.videoInteractions="Ended Video"
}if(c("#"+aP.id_).parent().data("tracking-nameofthevideo")){aQ.nameOfTheVideo=c("#"+aP.id_).parent().data("tracking-nameofthevideo")
}P(aQ)
};
function k(aQ){var aP={};
aP.event="boutiqueSearch";
aP.citySelected=aQ;
P(aP)
}function aN(aR,aP){var aQ={};
aQ.event="boutiqueResultClicked";
aQ.citySelected=aR;
aQ.boutiqueName=aP;
P(aQ)
}function n(){var aP={event:"virtualPageview",uri:document.location.pathname,visitorStatus:a.gdt.Utils.checkCookie("RCHMFrontEndCookie")?"loggedin":"guest"};
P(aP)
}function l(){var aQ=c(".mb-heroteaser-container .mb-carousel-control").parent().find(".mb-slick-active").data("tracking-bannerposition"),aP={event:"carouselInteraction",pageSection:"homepageBanner",carouselSlideNumber:aQ};
P(aP)
}T.on("filters:filter:added",function(aQ,aP){aP.event="filterProduct";
P(aP)
});
T.on("filters:sort",function(aQ,aP){aP.event="sortProduct";
P(aP)
});
T.on(aM,".mtb-campaign-filter-list .mtb-campaign-filter-link",function(aR){var aQ=c(aR.currentTarget||aR.target),aP={event:aQ.data("trackingEvent"),productCategory:aQ.data("productCategory"),filterSelected:aQ.data("filterSelected"),filterType:aQ.data("filterType")};
P(aP)
});
T.on("print",function(){if(document.location.pathname.indexOf("collection")!==-1){P({event:"printProduct"})
}});
T.on("boutique:results",function(aQ,aP){aP.event="boutiqueSearch";
P(aP)
});
T.on("boutique:result:clicked",function(aQ,aP){aP.event="boutiqueResultClicked";
P(aP)
});
T.on("boutique:pin:clicked",function(aQ,aP){aP.event="boutiqueResultClicked";
P(aP)
});
T.on("change",'select[name="product-path"]',aD);
T.on(aM,'a[data-trackable="true"]',r);
T.on(aM,'.top-nav a[data-trackable-cache="true"]',w);
T.on(aM,' main a[data-trackable-cache="true"]',w);
T.on(aM,'footer a[data-trackable-cache="true"]',w);
T.on("submit",'.contactform[data-trackable-cache="true"] form',w);
T.on("submit",'form[name="login-form"]',aa);
T.on("submit",'form[name="registration"]',aI);
T.on("submit",'form[name="user-checkout"]',O);
T.on(aM,'input[name="shippingType"]',A);
T.on("submit",'form[data-trackable="true"]',p);
T.on("submit",'form[data-trackable-cache="true"]',w);
T.on("change",'form[name="user_summary"] .gift-options [type="checkbox"]',z);
T.on("basketUpdated",r);
T.on("addressSearchModalOpen",r);
T.on("wishlistUpdated",r);
T.on("engravingLightboxClose",ar);
T.on("embossingLightboxClose",g);
T.on(aM,".product-featured ul.product-cta a.icon-pin-circle",aJ);
T.on(aM,".boutique-pickup .boutique-pickup-address p.view a.icon-link",q);
T.on(aM,".boutique-availability .lightbox-wrapper div.mtb-store-locator-search-form-wrapper button",ac);
c(".mb-bsoad-link").on("click",aJ);
c(".montblanc-site-nav ul li a.new").each(function(){if((c(this).attr("href")==="#")||(c(this).attr("href")==="")){c(this).removeAttr("data-trackable-cache")
}});
c(".sub-nav.open .open a").each(function(){if((c(this).attr("href")==="#")||(c(this).attr("href")==="")){c(this).removeAttr("data-trackable-cache")
}});
T.on(aM,'.montblanc-site-nav ul li a.new[data-trackable-cache="true"]',X);
T.on(aM,'.sub-nav.open .open a[data-trackable-cache="true"]',X);
T.on(aM,'.montblanc-site-nav ul li a.new[data-trackable-cache="true"]',an);
T.on(aM,'.sub-nav.open .open a[data-trackable-cache="true"]',an);
T.on(aM,'.often-bought-form .mtb-ob-highlights .mtb-ob-content a[data-trackable="true"]',Q);
T.on(aM,".often-bought-form .mtb-ob-btn",aB);
T.on(aM,"#shipping .lightbox-feature-open, #buyBox .lightbox-feature-open.opencounsel",n);
c('.mb-pdp-buy-box-wrapper .pdp-buy-box-form a[data-lightbox="true"]').on("click",n);
T.on(aM,".paypal-basket form.engraving-remove",B);
T.on(aM,'#personal-message input[class="form_button_submit"]',aA);
T.on(aM,'.product-message a[data-tracking-event="removeMessageCard"]',au);
T.on(aM,"a.morelink",H);
T.on(aM,".order-cancel-section",function(){var aP={uri:document.location.pathname};
P(aP)
});
if(c(".mtb-ymal").length>0){c('.mtb-ymal .slide a[data-trackable="true"]').each(function(aQ,aR){var aP=c(aR).attr("href")+"?from=YouMayAlsoLike";
c(aR).attr("href",aP).attr("data-tracking-event","yMALSeeDetails")
});
c('.mtb-ymal .slide input[name="event"]').val("yMALSeeDetails")
}if(document.location.pathname.indexOf("zh-cn/boutique")!==-1){T.on("change","select.topic-picker",Z);
T.find(".montblanc-accordion").find("dt").on(aM,aE)
}if(c("html").hasClass("ja_jp")){T.on("shippingLoaded",S)
}ai();
if(v){if(ax()){aG();
r()
}else{r()
}}function aO(aQ){var aP=c(aQ.currentTarget||aQ.target);
Y=ak(aP);
Y.event=aP.data("tracking-event");
ay(Y)
}function af(aQ){var aP=c(aQ.currentTarget||aQ.target);
Y=ak(aP);
Y.event=aP.data("tracking-event");
Y.productCategory=a.trackingObject.productCategory;
Y.productCollection=a.trackingObject.productCollection;
Y.productSKU=a.trackingObject.productSKU;
ay(Y)
}function R(aR){var aQ=c(aR.currentTarget||aR.target),aP={event:aQ.data("tracking-event"),productCategory:aQ.data("tracking-productcategory"),productCollection:aQ.data("tracking-productcollection"),productSKU:aQ.data("productid")};
P(aP)
}function x(aR){var aQ=c(aR.currentTarget||aR.target),aP={event:aQ.data("tracking-event"),productCategory:aQ.data("tracking-productcategory"),productCollection:aQ.data("tracking-productcollection"),productSKU:aQ.data("tracking-productsku")};
P(aP)
}function aj(aR){var aQ=c(aR.currentTarget||aR.target),aP={event:aQ.data("tracking-event"),bannerTheme:aQ.data("tracking-bannertheme"),bannerPosition:aQ.data("tracking-bannerposition")};
P(aP)
}T.on(aM,".mb-pdp-share-menu-icon",aO);
T.on(aM,".icon-print",aO);
T.on(aM,".mb-pdp-link-item button.mb-wishlist-link",af);
T.on(aM,".mb-prod-tile .mb-wishlist-link",R);
T.on(aM,".mb-generic-img-slide .mb-wishlist-link",R);
T.on(aM,".mb-header .mb-header-wishlist-link",R);
T.on(aM,".mb-pdp-con-concierge",x);
T.on(aM,".mb-heroteaser-slide.slick-current",aj);
T.on(aM,".mb-heroteaser-container .mb-carousel-control",l);
return{trackingValidation:aC,homepageTrackingSlideNumber:I,videoTracking:E,pushToDataLayer:ay,pushToDataLayerFromLastPage:aH,pushToDataLayerOnNextPage:ae,trackBtqCitySelected:k,trackBtqResultSelected:aN}
};
a.gdt.Tracking.MTBtracking=new b();
a.gdt.Tracking.trackingObject=a.trackingObject||{}
}(document,window,window.jQuery||window.Zepto));
(function(e,a,c){a.gdt=a.gdt||{};
a.gdt.CurrenctProduct=a.gdt.CurrenctProduct||{};
var b=function(){var o=(typeof window.ontouchstart==="undefined")?"click":"touchend",g=c("body"),d=c("input[name=productCookieId]").val(),q=15,h;
function k(r){return c.cookie("lastVisited",r,{expires:70,path:"/"})
}function f(){h=c.cookie("lastVisited");
h=h.split(",");
return h
}function j(r){d=r;
if(c.inArray(d,f())>-1){h.splice(c.inArray(d,h),1)
}}function p(r){if(h.indexOf(r)===-1){h.push(r)
}}function m(){if(h.length>q){k(h.splice(-q))
}else{k(h)
}}function l(){if(d!=="NaN"&&!c.cookie("lastVisited")){k(d)
}else{f();
p(d);
m()
}}if(d&&d.length!==0){l()
}function n(t){var s=c(t.target),r=c(s).next(".fullOverlayLink").data("tracking-productsku");
j(r.toString());
m();
c(s).parents(".slide").animate({opacity:0},100).remove();
c("body").trigger("RecentlyViewd")
}g.on(o,".icon-close-recent-view",n)
};
a.gdt.CurrenctProduct=new b()
}(document,window,window.jQuery||window.Zepto));
(function(c,a,b){var e=function(){var g=b("body"),f=b("html"),n=100,d="...",j="Read more >",h="Read less",o=b("#lightboxPanel"),k=b(".lightbox-wrapper");
function m(){g.on("click",".morelink",function(){var q=b(this);
if(q.hasClass("less")){q.removeClass("less");
q.html(j)
}else{q.addClass("less");
q.html(h)
}if(!a.gdt.Utils.Browser.isMobile){setTimeout(function(){o.find(".viewport").scrollTop(0);
k.tinyscrollbar_update(0)
},500)
}q.parent().prev().toggle();
q.prev().toggle();
return false
})
}function l(){b(".more-less-content").each(function(){var s=b(this).html();
if(s.length>n){var t=s.substr(0,n);
var r=s.substr(n,s.length-n);
var q=t+'<span class="moreellipses">'+d+'&nbsp;</span><span class="morecontent"><span>'+r+'</span>&nbsp;&nbsp;<a href="" class="morelink">'+j+"</a></span>";
b(this).html(q)
}})
}function p(){if(f.hasClass("ko_kr")){m();
g.on("lightboxContentLoaded",l);
if(a.gdt.Utils.Browser.isMobile){l()
}}}p()
};
e()
}(document,window,window.jQuery||window.Zepto));
(function(e,a,c){a.gdt=a.gdt||{};
a.gdt.Utils=a.gdt.Utils||{};
a.gdt.google=a.gdt.google||{};
a.gdt.google.maps=a.gdt.google.maps||{};
a.gdt.StoreLocator=a.gdt.StoreLocator||{};
var b=function(){var ar="storeLocator",f=c("html"),N=c("body"),V=c(a),q,ap,o,T,aH,ax,af,aB,X,az,w,D,ab,z,F,ae={},C,E,ac,S,ad=[],y,av,j=false,p=false,U=false,an,aG,Y,m,aj,aC,s,aF,aA,G,x,L=false,ay=false,ai,K=null,ao=null,d=null,aa,g,H={base:".mtb-store-locator",storeHeader:".mtb-store-locator-wrapper",storeButtonsWrapper:".mtb-store-buttons",listMapToggleBtn:".mtb-store-locator-map-list-toggle-btn",mapListWrapper:".mtb-store-locator-container",searchInput:".mtb-store-locator-search-field",searchNoResult:".mtb-store-locator-noresult",mapContainer:".mtb-store-locator-map-wrapper",baiduMapContainer:"mtb-store-locator-map",listContainer:".mtb-store-locator-list-wrapper",listItemWrapper:".mtb-store-locator-list",listItemSerialNumber:".mtb-store-list-serial-number",listItemSearchCounter:".mtb-store-list-search-counter",listItem:".mtb-store-locator-list-item",header:".mtb-store-header",footer:".mtb-store-locator-footer",geoButton:".mtb-store-locator-geolocationbtn"},R={mtbActive:"mtb-active",mtbHide:"mtb-hide",mtbShow:"mtb-show",mtbNoMaps:"mtb-no-maps",mtbListMapToggle:"mtb-hide-mobile"},O={MAP_TYPE_GOOGLE:"google",MAP_TYPE_BAIDU:"baidu",minLength:3,clusterIcon:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAvCAMAAACWqWnGAAAAP1BMVEUAAABUVFRHR0dmZmZjY2NJSUlJSUlmZmZjY2NUVFRHR0cyMjI1NTW1tbXY2NhmZmZzc3P///9bW1tRUVGPj48C1JxlAAAADXRSTlMASGmp3SMAAAAAAH+T9uNU/AAAAY5JREFUeF6llMl2wzAIRSUESVqNHv7/W5s6zxkM1Ivehb3hHh6awhuREnNnTiSXPwiXHeL+IsUvl4B/hPCS5KRL6hr6tgnb1zB8J3wa850zJ7wby4LvTnTGj7swr7VNU6vr/JSuBuF6ZRijTaCN3UmmQjDW6Y11d8RaZFYGHK9NkM2Y+3Sgz5vCN0WgR5N6VOriJQvJaII2zt4ENibBNM4wUKpWqqv0c+X/XU5n0eNjxYZWxuyczBAfw7Sj0bAv1hnDefHXWCsJa2ZvfrTui+A6fkRrs3HEQLjdGM5bnwqjk32RI679MurWqdWxwOjiPErcd6mvdzoEDG9d5OvWBtIdCGhidUEb5yETiUSUcyaiKPJUom2wRMrll1zwJ4FySZYxCpWSPykl4hkXs0k2KEX8Z3yUbDoUsD+sDM4nil4BCFYwkPxYenygYlkCFhnEk1jYFSgq2ih0rC85bgIU4MXCtgMox2hWvVYQDbFUvVYAI9azHPl9BdFUva0A2jax5KzLtQLSYDLj+IoklPv8AIhAZG1tvWXGAAAAAElFTkSuQmCC",baiduClusterIcon:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAABCCAYAAAAVHYVwAAAIeklEQVRoBe1ab2hU2RU/52Ve1GjiH5T4N7GxFUsmFW0jRfpBRFkNKKVTnED1g99K2e7aD4stgmBL2WWxpRBYpLVri/2Tl7eJrdk0SqFG2i3FbWStmcRUmSrW1iT+y0gSk0nuKb9n3vTm+Wbem8mUfpkLw73v3HN/55577jn33PeGqFRKK1BagdIKlFagtAKlFSitQGkFSitQWoHSCvx/VoCLLba5uXmjUupLzPx5Zv6MiCwgIkVEZcw8ppT6OxHdEJGPbNv+R7HkF0WRXbt2Raqrq2uZ+asicoCIGpm5PNskRWSKiD5m5k4R+WBoaOheT0/PdDb+MPR5K3LgwIGVFRUV32TmY0RUFUaohyclIj8aHx9v6ezsfOTpC/04L0UOHTrUZBjGe0RUG1piFkYRuauUet227a4sLDnJZTl7c3TG4/E3mfkcM6/wYxMRYmYyDMOp0QbNpXvHMPMyZo5Ho9FUIpH4i7c/6LkgReLx+FvM/ANmNrwCMNGysjJauHChU8/MzJBS8HUi0zRpwQL4PhHoUE4vwGPmffX19eOJROLPel9Qey5SEDcRxePxrzHzL/xYMTFM9MWLF/TgwQNKpVIZa4Afk6+oqKB169ZRVVUVTU5O+ioEXhE5bFnWL/3k+NHyUiQWi33ONE2s1GIvWCQScSZ99+5devbsGa1du5a2b99OmzdvdqwDJe7cuUM3btyge/fuEfg3bdrk1Ol02guH57F0Or2zvb39b36dXlpoRfbv319VVVUFn/iKDoKtVF5e7qzu4OAgbdiwgQ4fPky7d++mpUuXOn0u//T0ND1//pyuX79O58+fp97eXtq4cSOtWLHCGe/daiLSkUqljnZ3d6dcjGx1aB/Ztm3bHsMwvqcDQQlspfHxcRoYGKB9+/bR6dOnqbGxkRYvXuz4iM4Px1+0aBHV1dXR3r17nf4rV644AWHZsmUERXVlmPmzpml+1N/ff1vH8WuHUuTgwYOV5eXlbzPzZhfEtQS2zM2bNykWi9HJkyedve/y5KphxR07dtCSJUuoq6vLUbCysvIVZQzDWFpXV9c5ODiIQzRreSXq+HGapvkpItqv92HlEIWw53fu3EnHjx93fEHnCdM+cuQIHT16lPr7+x0l4Dt6EZHXTNOs0Wl+7VCKRCKR15g5Yz1YA+H1/v37jrMeO3bM2Up+AsLQ4FNbtmxxtie2KvDdwsyRSCSy133OVodShJm/oAPAGvgh+jQ1NVE0GtW7826vXr3aCRAI1xMTE6/4FhF9MQg0lCIi8mkdCOZHiMXW2rNnj95VcHvr1q20Zs0aevjwoRPpPFbJ+GY2AaEUYeb1LgAE4OR++vQpVVdX0/r1mS6XpaAa5w5CN3D1yDULVh0EGkoREZlz3kAQTm+c0vgVo8Dnli9f7kB50xcRMYNkhFKEmf/rfUGIBfbD0q4l9G0VFi6UIkSUieEQBkFuTgXnLEZB3gW/Az62rl6YeVx/9muHVeRf+mCYHknfyMiI45x6X6Ht4eFhJ9EELopuFRF5EIQbVhHcszMFimA/YxWvXr2aoc+ngRQHEWvVqlWEJNLdZsBk5ltB2KEUEZE5dwPcL5A3IVxeunSJbt8OTIVyzgORqrW11dmuSFOwUHoRkT/pz37tUIoQUY+IZNCxWrBGbW0tPXnyhM6cOeM8+wkIQ7tw4QJdu3bNOd2npjLu6AwVkQml1B+DcEIpMjEx8U8i6tbBYBWsXENDA2EiZ8+e1btDt2FRZMy4tyCUIwPWCzN3jY6O/lun+bXnhgc/DiJC5hmNRidxp3ZZYBUIhXA4aGdnp6MYLlPexM8d462xACdOnKCVK1c61h0bG5vjG+BXSr118eLFfu9Y73MoRTCooaEBcfYQEVW6IFAGjokLFO4Zly9fpr6+PufEh//Aj/wKeFpaWpwfnBs3xSxhPMnM7/b19QVerOac2H5CdVpzc/NxInpHp7ltnCtI+pLJpHMOwDK4YOF+Dqth7z969Mi5FcIfcGbU1NQQEkZkCdiqeqQCroi8YVlWiysjVz03+c/F+fLlwWXDME4x88tXIRo/nB+XJGTCjx8/diyDqywuUPjBcuBBG5EJORrSEiihn+oaZEop1aM952zmZREgNTc3/5CIvuWHiglhO8FHEAgwcT0K4cTGFnT7weO1gosrIu9YlvUd9zmozssiAFNKtRuG8TpeU3nBMSko4x5o2G746cXtBy2HEqNE1KGPC2qHdnYXKJFI3K+vr1/DzI0uLVuNSXt/2Xg99PcsyzrnoeV89A8rOYc4VvmViDwPYCuoW0RGiKg138EFKWLbNlKG9/MVFpL/Z5ZlfRySN8NWkCIYrZT6qYgU7UMNMEVkQCn148zs8mgUrIht2zdF5Nd5yApkZeY227bvBDL6MBSsCLBE5F0i+qsPbt4kZNijo6Nv5z1wdsC8FLFte1REQr8xzzZJEUGmeK67u3syG08QPe8D0Q8wHo//npkLfi8kIt2WZTX5YYelzcsirhCl1KnZsOmS8qmHiei7+Qzw4y2KIrPh2PYTEEQTkZ9blpX3pzYvblEUAejU1NQpIkp6BeR6FpF+pdT3c/GE7cs7RckGfOvWrbFoNIrPywfx54BsfC4d39qVUt+wbfsTlzafumgWwSRmZmY+EJHfhJxQazKZ/DAkbyBbURWxbXtqenr620T0OEDyUDqdPtHb2+v78TBgrG93URWBhPb29qSIvOkrbZaolHqjo6MDLzSKVoquCGamlPotEbVlmWWbiPwuS1/B5KIciH7SY7FYvWmaeB/18hX7S6ZhEdllWdaA35j50AKjS6HgAwMDI9FodIiIvuxiKKW+3tbW9gf3uZj1/0wRTLKvr++TaDSKD5nbiOgnlmUV5czwW4C87+x+ILloSqn3mbkGJ3guvvn2/QcXJWFkpAXzTAAAAABJRU5ErkJggg=="};
ao='<div class="mtb-infowindow mtb-store-locator-list-item" data-store-id="{{= it.id}}"><div class="mtb-store-locator-list-store-details"><h3 class="mtb-store-item-heading">{{= it.name}}</h3>{address}{{~it.timing :value:index }}<p class="mtb-store-item-contact-details"><label>{{= value.day}}:</label> {{= value.time}}</p>{{~}}<p class="mtb-store-item-contact-details {{? !it.contact.faxes }} mtb-hide {{?}}"><label>{{= it.storeFax}}:</label> <a href="tel:{{= it.contact.faxes}}">{{= it.contact.faxes}}</a></p><p class="mtb-store-item-contact-details {{? !it.contact.phones }} mtb-hide {{?}}"><label>{{= it.storePhone}}:</label> <a href="tel:{{= it.contact.phones}}">{{= it.contact.phones}}</a></p>{{? it.storeAppointment }}<p class="mtb-store-make-appointment"><a href="{{= it.storeAppointment}}" target="_blank">{{= it.appointmentText}}</a></p>{{?}}<p class="mtb-store-item-contact-store"><a href="{{= it.storeURL}}{{= it.id}}" target="_blank">{{= it.storeText}}</a></p></div></div>';
d='<li class="mtb-store-locator-list-item" data-store-id="{{=it.id}}" data-marker-id="{{= it.markerid}}"><div class="mtb-store-locator-list-marker"><span class="mtb-store-locator-marker-item"><span class="mtb-store-list-serial-number">{{= it.index}}</span><span class="mtb-store-list-search-counter mtb-hide"></span></span></div><div class="mtb-store-locator-list-store-details"><h3 class="mtb-store-item-heading">{{= it.name}}</h3>{address}{{~it.timing :value:index }}<p class="mtb-store-item-contact-details"><label>{{= value.day}}:</label> {{= value.time}}</p>{{~}}<p class="mtb-store-item-contact-details {{? !it.contact.faxes }} mtb-hide {{?}}"><label>{{= it.storeFax}}:</label> <a href="tel:{{= it.contact.faxes}}">{{= it.contact.faxes}}</a></p><p class="mtb-store-item-contact-details {{? !it.contact.phones }} mtb-hide {{?}}"><label>{{= it.storePhone}}:</label> <a href="tel:{{= it.contact.phones}}">{{= it.contact.phones}}</a></p><p class="mtb-store-item-status {{? it.available }} mtb-active {{?}}">{{= it.statusText}}</p></div></li>';
function I(){K=null
}function am(){I();
if(E===O.MAP_TYPE_GOOGLE){return an?an.close():{}
}else{if(E===O.MAP_TYPE_BAIDU){C.closeInfoWindow()
}}}function at(){if(!j||f.hasClass("zh_cn")){return false
}if(S){S.clearMarkers()
}y=a.gdt.google.mapMarker;
ac={center:{lat:z.data("store-map-latitude")||51.0851912,lng:z.data("store-map-longitude")||5.9697617},zoom:z.data("store-map-zoom")||10,zoomControl:true,streetViewControl:false,mapTypeControl:false,mapTypeId:google.maps.MapTypeId.ROADMAP};
C=new google.maps.Map(z[0],ac);
an=new google.maps.InfoWindow({pixelOffset:new google.maps.Size(0,-50)});
google.maps.event.addListener(C,"click",am);
google.maps.event.addListener(an,"closeclick",I);
p=true
}function al(){if(!j){return false
}if(S){S.removeMarkers(ad)
}y="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAG4AAAB0CAMAAABTyPc0AAAAYFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAwMAAAAAAAAAAAAAAAD///8iIiITExNfX1/S0tL19fW6urp8fHzj4+M+Pj6kpKSTk5OptP20AAAAE3RSTlMA8AucVyRiawMWS99AiDT8xrB2i2/GFgAAA4lJREFUeAHN2e2WsygMAGBAQEAENFb7Ob3/u9w/u747M5LamJ7d5wZyEpKArdjDmxS11jF58VkujU2RsJKlGZMTH6HsIGGDHLQS3GIjoUo2kbWIuoMXimYr6hoM1WnBwRTYqZjjdewz7JZ7x5fa5xPUEt4kgyAbgWAUNK4Bkp4WbQCixnHnhmvE23pAsNezhUOseEvMcIhM4g2+g4M6JfYbAMfbLhoYBLGT6oBBp/hngGGb+QwspBd7NMCk508OIxXHrTMvt+fX87acOE7PdYDJy3n6x/k2A6oTLwXALPfp3y43QMVDjTJfp5/Op0OrxUmoOt2n3+4PrFmcwEU82oYLll8ib5R8nrbdZ3pvFqh5TjVfUDVQj+401dWPTwqUgZqvqe4KVZ42dfNlQtS7JdA22DJh6tPe0hoTqyVWzZ62U84T5kLcKwNUXCbUjEwCIVyecCdauPLfh/tkMdlb5f80CJZ7zLXAJO4llgRGZeT+IdRSOuJ9d7pQLqBCvs1vU82TfpsnqLpO284ZqhL9JTZvz979dORd2wAWD49G+CiJUJd/D/t1BkQ6+I3wOH9PbQFMd/zbdble1syWfPz71cAL+bHcnrflkeGF7Pl/5UAUa63WOoSYkjFeKYc3y0F9+4fVISazGbAAi679zlodklH4LUTXtL9ZHZN3+CzQyHabDT9rOgKDoa3R8XtJvWRIbmyrbDAOGXVicghtFJIeLTk8nkPSIyaHCN4h6RGSw9mkCM2JJIezwYs/lOSfOez0WoaFgrLGMa2Wrt3D4L8KUJPDs1uVzyanf6zqxHDPIYLi+VG6tPtq+TOcl3wTjmyVVcvXJ8hSWbnyqT6x0SOvJP4+8Tx/YRTCENC7RY6ENqG/yhriua0Kd5/o5ESdybBbHvfdO5ie81Jto3fEDz5CKXXy4pXINXI2GLFDwzNyNnH+9dvRTw0vJ6WUYb1veMo50FuEUM5u95Nyj3CglHr9nmMr54DVEQ9GKGeHfDkiwYjdmftKMHyuqeUcSNsY57v3ShmMd4LOxfxGKUPy4hjX7y2l1dGLo5wveCmx1wGBSxJ9DK3BlBMc1PjyMWSTUYKLH/BLTgfjBB9nOuTg8NuaQulcnYHgnRPMfLM9AzZSpxrny8bB6ZiUQDFMgxxZGgSnbF4PDvl4Yj++4e8zw4eaa5mVjd9dP3d8crT4Vc3H6Zx7fBGz8n2TGBbxX/E+/v6WmTJ0AAAAAElFTkSuQmCC";
ac={center:{lat:z.data("store-map-latitude")||31.22638,lng:z.data("store-map-longitude")||121.452433},zoom:z.data("store-map-zoom")||11};
av=[{url:O.baiduClusterIcon,size:new a.BMap.Size(50,66),opt_anchor:[16,0],textColor:"#000",opt_textSize:12}];
var aJ=a.gdt.boutiqueFinder.convertGoogleCtoBaiduC(ac.center.lat,ac.center.lng);
var aI=new a.BMap.Point(aJ.lng,aJ.lat);
C=new a.BMap.Map(H.baiduMapContainer);
C.centerAndZoom(aI,ac.zoom);
C.addControl(new a.BMap.NavigationControl({anchor:BMAP_ANCHOR_BOTTOM_RIGHT,type:BMAP_NAVIGATION_CONTROL_SMALL}));
C.addEventListener("click",am);
p=true
}function aw(aI){a.trackingObject.event="mtb_bsaod_click";
a.trackingObject.boutiqueName=aI.name;
a.trackingObject.citySelected=aI.address.city;
a.gdt.Tracking.MTBtracking.pushToDataLayer(a.trackingObject)
}function au(aI){var aK;
az.removeClass(R.mtbActive);
aK=az.filter('[data-store-id="'+aI+'"]');
aK.addClass(R.mtbActive);
var aJ=parseInt(aK.position().top,10);
aB.scrollTop(aJ)
}function M(aI,aJ){return function(){if(K===aI.id){return
}var aL=aa(aI);
if(E===O.MAP_TYPE_GOOGLE){an.setContent(aL);
an.setPosition(aJ);
an.open(C);
C.setCenter(this.getPosition());
C.setZoom(16)
}else{if(E===O.MAP_TYPE_BAIDU){var aK=new a.BMap.InfoWindow(aL,{width:290,height:200});
C.openInfoWindow(aK,aJ);
C.centerAndZoom(this.getPosition(),17)
}}au(aI.id);
aw(aI);
K=aI.id
}
}function u(){X.empty();
ad=[]
}function r(aM){var aO,aI,aL,aK,aJ=document.querySelectorAll(".zh_cn");
if(aJ.length>0){if(E===O.MAP_TYPE_BAIDU){var aN=a.gdt.boutiqueFinder.convertGoogleCtoBaiduC(aM.location.latitude,aM.location.longitude);
aO=new a.BMap.Point(aN.lng,aN.lat);
aK=new a.BMap.Icon(y,new a.BMap.Size(110,116),{imageSize:new a.BMap.Size(45,45),imageOffset:new a.BMap.Size(37,15)});
aI=new a.BMap.Marker(aO,{icon:aK});
aL=M(aM,aO);
ad.push(aI);
aI.addEventListener("click",aL);
C.addOverlay(aI);
C.centerAndZoom(aO,6)
}}else{if(E===O.MAP_TYPE_GOOGLE){aO=new google.maps.LatLng(aM.location.latitude,aM.location.longitude),aI=new google.maps.Marker({position:aO,draggable:false,icon:y,id:aM.id,map:C}),aL=M(aM,aO);
google.maps.event.addListener(aI,"click",aL);
ad.push(aI)
}}}function h(aJ){var aI=g(aJ);
return aI
}function v(){u();
O.minLength=(E===O.MAP_TYPE_BAIDU)?2:(E===O.MAP_TYPE_GOOGLE)?O.minLength:O.minLength;
if(E===O.MAP_TYPE_GOOGLE&&S){S.clearMarkers()
}if(E===O.MAP_TYPE_BAIDU&&S){S.removeMarkers(ad)
}c.each(ae.boutiqueData,function(aI,aJ){aJ.index=aI+1;
aJ.markerid=aI;
aJ.statusText=aJ.available?G:x;
aJ.storeText=aG;
aJ.appointmentText=Y;
aJ.storeURL=m;
aJ.storeAppointment=aj;
aJ.storeFax=aC;
aJ.storePhone=s;
X.append(h(aJ));
if(p){r(aJ)
}});
az=X.find(H.listItem);
w=az.find(H.listItemSerialNumber);
D=az.find(H.listItemSearchCounter);
if(p){az.on("click",function(aJ){var aI=c(aJ.currentTarget),aK=aI.data("marker-id");
if(!aI.hasClass(R.mtbActive)){if(E===O.MAP_TYPE_GOOGLE){google.maps.event.trigger(ad[aK],"click")
}else{if(E===O.MAP_TYPE_BAIDU){ad[aK].dispatchEvent("click")
}}}})
}}function t(){ab.addClass(R.mtbShow)
}function aE(aI){var aL=aI.coords.latitude,aJ=aI.coords.longitude,aM=new google.maps.LatLng(aL,aJ),aK=new google.maps.Geocoder();
aK.geocode({location:aM},function(aP,aN){if(aN===google.maps.GeocoderStatus.OK){for(var aO in aP){var aQ=aP[aO].address_components;
if(aQ.length===3){C.setCenter(aP[aO].geometry.location);
af.val(aQ[0].long_name).trigger("blur")
}}}else{t()
}})
}function ag(aI){if(aI){var aJ=new a.BMap.Marker(aI.point);
C.addOverlay(aJ);
C.panTo(aI.point);
C.centerAndZoom(aI.point,19)
}else{t()
}}function ak(){var aI=navigator.geolocation;
if(aI){aI.getCurrentPosition(function(aK){L=true;
if(aK){E===O.MAP_TYPE_GOOGLE?aE(aK):E===O.MAP_TYPE_BAIDU?ag(aK):""
}},function(aK){t(aK)
});
if(a.gdt.Utils.Browser.isFirefox||a.gdt.Utils.Browser.isOldIE){var aJ=setTimeout(function(){if(!(L)){clearTimeout(aJ);
t()
}},5000)
}}else{t()
}ay=true
}function W(aJ,aN){var aM=aN||(aJ?c(aJ.target).val():""),aL=new RegExp(aM,"gi"),aK=false,aI=0;
if(typeof aM!=="undefined"&&aM.length>=O.minLength){az.addClass(R.mtbHide).removeClass(R.mtbActive);
az.find(H.listItemSearchCounter).removeClass(R.mtbHide);
az.find(H.listItemSerialNumber).addClass(R.mtbHide);
c.each(ad,function(aO,aP){if(E===O.MAP_TYPE_GOOGLE){aP.setVisible(false)
}else{if(E===O.MAP_TYPE_BAIDU){aP.hide()
}}});
am();
c.each(ae.boutiqueData,function(aO,aP){if(aL.test(aP.name)||aL.test(aP.address.city)||aL.test(aP.address.state)||aL.test(String(aP.address.zip))){++aI;
az.filter('[data-store-id="'+aP.id+'"]').removeClass(R.mtbHide).find(H.listItemSearchCounter).text(aI);
ad.find(function(aQ){if(E===O.MAP_TYPE_GOOGLE){if(aQ.id===aP.id){aQ.setVisible(true)
}}else{if(E===O.MAP_TYPE_BAIDU){if(ad.indexOf(aQ)===aP.markerid){aQ.show()
}}}});
aK=true
}});
ab.toggleClass(R.mtbShow,!aK)
}else{aK=false;
aI=0;
az.removeClass(R.mtbHide);
w.removeClass(R.mtbHide);
D.addClass(R.mtbHide);
ab.removeClass(R.mtbShow);
c.each(ad,function(aO,aP){if(E===O.MAP_TYPE_GOOGLE){aP.setVisible(true)
}else{if(E===O.MAP_TYPE_BAIDU){aP.show()
}}});
if(ay){C.setCenter(ac.center);
C.setZoom(ac.zoom);
ay=false
}}}function J(){z.toggleClass(R.mtbHide,!p);
ax.toggleClass(R.mtbNoMaps,!p);
T.toggleClass(R.mtbHide,!p);
aB.toggleClass(R.mtbListMapToggle,p)
}function aq(aI){j=true;
if(aI.type==="google:maps:loaded"){E=O.MAP_TYPE_GOOGLE
}else{if(aI.type==="baidu:maps:loaded"){E=O.MAP_TYPE_BAIDU
}}if(U){E===O.MAP_TYPE_GOOGLE?at():E===O.MAP_TYPE_BAIDU?al():"";
v();
J()
}}function A(aI){if(!aI){return
}return c.map(aI.match(/[^\{\}]+/g),function(aJ){return c.trim(aJ)
})
}function Q(){var aI='<p class="mtb-store-item-address">';
c.each(aF,function(aJ,aK){if(aK==="br"){aI+="<br/>"
}else{if(aK==="space"){aI+=" "
}else{if(aK==="comma"){aI+=","
}else{aI+="{{= it.address."+aK+"}}"
}}}});
aI+="</p>";
return aI
}function l(aL){var aJ=c(aL.target),aI=aJ.data("map-text"),aM=aJ.data("list-text"),aK=(aJ.text()===aM)?aI:aM;
aB.toggleClass(R.mtbListMapToggle);
z.toggleClass(R.mtbListMapToggle);
aJ.text(aK).toggleClass("icon-mapview",aK===aI).toggleClass("icon-menu",aK!==aI)
}function B(){aH.removeAttr("style");
var aJ=V.width(),aM=N.find(".overview"),aL=parseInt(aM.height(),10),aI=parseInt(o.height(),10),aN=(aJ>959?70:10),aK=parseInt(aL-aI-aN,10);
aH.height(aK>0?aK:"auto")
}function P(){if(E===O.MAP_TYPE_GOOGLE){S=new a.MarkerClusterer(C,ad,{maxZoom:2,gridSize:40,styles:[{url:O.clusterIcon,height:50,width:56,anchorIcon:[50,23],anchorText:[-9,-12]}]})
}else{if(E===O.MAP_TYPE_BAIDU){S=new a.BMapLib.MarkerClusterer(C,{markers:ad});
S.setStyles(av)
}}}function aD(){af.on("keyup blur",W);
F.on("click",l);
ai.on("click",ak);
V.on("resize orientationchange",B)
}function n(){ax=c(H.base);
if(ax.length===0){return
}U=true;
o=ax.find(H.storeHeader);
T=o.find(H.storeButtonsWrapper);
F=ax.find(H.listMapToggleBtn);
aH=ax.find(H.mapListWrapper);
z=ax.find(H.mapContainer);
ab=ax.find(H.searchNoResult);
aB=ax.find(H.listContainer);
X=aB.find(H.listItemWrapper);
q=ax.find(H.header);
ap=ax.find(H.footer);
ai=ax.find(H.geoButton);
af=ax.find(H.searchInput);
N.find("#lightbox-title").html(q.text());
ap.remove();
B();
ae=z.data("store-info");
G=z.data("store-available");
x=z.data("store-unavailable");
aG=z.data("store-text");
Y=z.data("appointment-text");
m=z.data("store-link");
aj=z.data("appointment-link");
aC=z.data("store-fax");
s=z.data("store-phone");
aF=A(z.data("store-sequence"))||[];
if(aF.length){aA=Q()
}else{aA='<p class="mtb-store-item-address">{{= it.address.street}}<br>{{= it.address.city}} {{= it.address.zip}} {{= it.address.state}}</p>'
}d=d.replace(/{address}/gi,aA);
ao=ao.replace(/{address}/gi,aA);
aa=doT.template(ao);
g=doT.template(d);
E===O.MAP_TYPE_GOOGLE?at():E===O.MAP_TYPE_BAIDU?al():"";
v();
if(p){P()
}aD();
J()
}function ah(){N.on("lightboxContentLoaded",n);
N.on("google:maps:loaded baidu:maps:loaded",aq)
}function Z(){ah()
}function k(){af.off("keyup blur");
F.off("click");
ai.off("click");
az.off("click")
}Z();
return{init:Z,teardown:k,onLightboxContentLoaded:n,onMapLoad:aq}
};
a.gdt.StoreLocator=new b()
}(document,window,window.jQuery||window.Zepto));
(function(e,a,c){a.gdt=a.gdt||{};
a.gdt.Contactform=a.gdt.Contactform||{};
var b=function(){function d(){c(".contact .col-two h2").click();
window.scrollTo(0,0)
}function f(){d()
}return f()
};
a.gdt.Contactform=new b()
}(document,window,window.jQuery||window.Zepto));
(function(t,n,k){var p=k("body"),g=k("#globalcountry"),m="map",q=n.gdt.Utils.noWCM,l,u,b,h,j="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAG4AAAB0CAMAAABTyPc0AAAAYFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAwMAAAAAAAAAAAAAAAD///8iIiITExNfX1/S0tL19fW6urp8fHzj4+M+Pj6kpKSTk5OptP20AAAAE3RSTlMA8AucVyRiawMWS99AiDT8xrB2i2/GFgAAA4lJREFUeAHN2e2WsygMAGBAQEAENFb7Ob3/u9w/u747M5LamJ7d5wZyEpKArdjDmxS11jF58VkujU2RsJKlGZMTH6HsIGGDHLQS3GIjoUo2kbWIuoMXimYr6hoM1WnBwRTYqZjjdewz7JZ7x5fa5xPUEt4kgyAbgWAUNK4Bkp4WbQCixnHnhmvE23pAsNezhUOseEvMcIhM4g2+g4M6JfYbAMfbLhoYBLGT6oBBp/hngGGb+QwspBd7NMCk508OIxXHrTMvt+fX87acOE7PdYDJy3n6x/k2A6oTLwXALPfp3y43QMVDjTJfp5/Op0OrxUmoOt2n3+4PrFmcwEU82oYLll8ib5R8nrbdZ3pvFqh5TjVfUDVQj+401dWPTwqUgZqvqe4KVZ42dfNlQtS7JdA22DJh6tPe0hoTqyVWzZ62U84T5kLcKwNUXCbUjEwCIVyecCdauPLfh/tkMdlb5f80CJZ7zLXAJO4llgRGZeT+IdRSOuJ9d7pQLqBCvs1vU82TfpsnqLpO284ZqhL9JTZvz979dORd2wAWD49G+CiJUJd/D/t1BkQ6+I3wOH9PbQFMd/zbdble1syWfPz71cAL+bHcnrflkeGF7Pl/5UAUa63WOoSYkjFeKYc3y0F9+4fVISazGbAAi679zlodklH4LUTXtL9ZHZN3+CzQyHabDT9rOgKDoa3R8XtJvWRIbmyrbDAOGXVicghtFJIeLTk8nkPSIyaHCN4h6RGSw9mkCM2JJIezwYs/lOSfOez0WoaFgrLGMa2Wrt3D4L8KUJPDs1uVzyanf6zqxHDPIYLi+VG6tPtq+TOcl3wTjmyVVcvXJ8hSWbnyqT6x0SOvJP4+8Tx/YRTCENC7RY6ENqG/yhriua0Kd5/o5ESdybBbHvfdO5ie81Jto3fEDz5CKXXy4pXINXI2GLFDwzNyNnH+9dvRTw0vJ6WUYb1veMo50FuEUM5u95Nyj3CglHr9nmMr54DVEQ9GKGeHfDkiwYjdmftKMHyuqeUcSNsY57v3ShmMd4LOxfxGKUPy4hjX7y2l1dGLo5wveCmx1wGBSxJ9DK3BlBMc1PjyMWSTUYKLH/BLTgfjBB9nOuTg8NuaQulcnYHgnRPMfLM9AzZSpxrny8bB6ZiUQDFMgxxZGgSnbF4PDvl4Yj++4e8zw4eaa5mVjd9dP3d8crT4Vc3H6Zx7fBGz8n2TGBbxX/E+/v6WmTJ0AAAAAElFTkSuQmCC",s,e,a={MAP_TYPE_GOOGLE:"google",MAP_TYPE_BAIDU:"baidu"};
function r(){var d=g.val();
return".country_"+d
}function c(){if(q){k(".displayAddress").css("display","none");
k(r()).css("display","block")
}}function f(w,d){b=k(r()).find("input[name=latitude]").val();
h=k(r()).find("input[name=longitude]").val();
if(s===a.MAP_TYPE_GOOGLE){google.maps.event.trigger(w,"resize");
d.setPosition(new google.maps.LatLng(b,h));
w.panTo(new google.maps.LatLng(b,h))
}else{if(s===a.MAP_TYPE_BAIDU){w.clearOverlays();
var x=new n.BMap.Point(h,b);
var v=new n.BMap.Marker(x,{icon:e});
w.addOverlay(v);
w.centerAndZoom(x,15)
}}}function o(w){console.log(w);
var d,v;
b=k(r()).find("input[name=latitude]").val();
h=k(r()).find("input[name=longitude]").val();
if(w.type==="google:maps:loaded"){s=a.MAP_TYPE_GOOGLE;
d=new google.maps.LatLng(b,h),v={zoom:15,radius:40,zoomControl:true,streetViewControl:true,center:d,mapTypeId:google.maps.MapTypeId.ROADMAP};
u=new google.maps.Map(document.getElementById(m),v);
l=new google.maps.Marker({position:d,icon:n.gdt.google.mapMarker,map:u,title:""});
l.setMap(u)
}else{if(w.type==="baidu:maps:loaded"){s=a.MAP_TYPE_BAIDU;
d=new n.BMap.Point(121.452433,31.22638),u=new n.BMap.Map(m);
u.centerAndZoom(d,15);
u.addControl(new n.BMap.NavigationControl({anchor:BMAP_ANCHOR_BOTTOM_RIGHT,type:BMAP_NAVIGATION_CONTROL_SMALL}));
var x=new n.BMap.PanoramaControl();
x.setOffset(new n.BMap.Size(2,15));
u.addControl(x);
e=new n.BMap.Icon(j,new n.BMap.Size(110,116),{imageSize:new n.BMap.Size(45,45)});
l=new n.BMap.Marker(d,{icon:e});
u.addOverlay(l)
}}g.find("option").eq(0).attr("selected",true);
f(u,l);
g.on("change",function(){f(u,l)
});
p.on("accordion",function(){f(u,l)
})
}if(document.getElementById(m)){c();
g.on("change",function(){c()
});
p.on("google:maps:loaded baidu:maps:loaded",o)
}}(document,window,window.jQuery||window.Zepto));
(function(v,l,f){var h="click",o=f("body"),g,a,c,m,r,t,p,e,j,x,z={FORM:"form.often-bought-form",LIST:".mtb-ob-list",ITEMS:".mtb-ob-item",TOTAL:".mtb-ob-item-total-price",ADDCARTBTN:".btn-primary",TOTALPRICE:".mtb-ob-price",CHECKBOX:".mtb-item-checkbox",HDNPRICELIST:".mtb-ob-price-list-input",TOTALHEADING:".mtb-ob-total-heading"};
function s(){g=o.find(z.FORM);
a=g.find(z.LIST);
c=a.find(z.ITEMS);
m=a.find(z.TOTAL);
r=m.find(z.TOTALPRICE);
p=a.find(z.CHECKBOX);
e=g.find(z.HDNPRICELIST);
j=m.find(z.ADDCARTBTN);
x=m.find(z.TOTALHEADING);
t=p.filter(function(){return f(this).is(":checked")
})
}function n(){var d="";
t.each(function(A,B){var w=t.eq(A).data("index");
d+=w
});
return d
}function k(){var w="",d="data-price-"+n();
w=e.attr(d);
return w
}function y(d){var w=x.data("format");
w=w.replace("*",d);
x.text(w)
}function u(){var w=t.length;
if(w>=1){j.removeAttr("disabled");
var d=t.eq(0).data("price");
if(w>1){d=k()
}}else{d="";
j.attr("disabled","disabled")
}r.text(d);
y(w)
}function b(){p.on(h,function(d){t=p.filter(function(){return f(this).is(":checked")
});
u()
})
}function q(){s();
b();
u()
}if(o.find(z.FORM).length){q()
}}(document,window,window.jQuery||window.Zepto));
(function(e,b,c){b.gdt=b.gdt||{};
b.gdt.Checkout=b.gdt.Checkout||{};
var a=function(){var s=(typeof b.ontouchstart==="undefined")?"click":"touchend",z=c("body"),r,k,l,q,h,d,w,C,D,g,x,o={ukAddressParent:".uk-address-fields-wrapper",manualAddressBlock:".uk-zip-filled-address-wrapper",searchAddressBlock:".uk-zip-search-address-wrapper",searchAddressResultBlock:".uk-address-search-result-wrapper",zipCode:".zip",searchByZipCTA:".find-address-cta.find-address-by-zip",addAddressManualCTA:".find-address-manually",resetAddressCTA:".reset-address-fields",addressList:".address-list",adressResults:".address-results",addressListItem:".address-results > ul"},E="",G=false;
function n(I,H){var J=c(I).find("input");
if(H){c(J).attr("disabled","disabled")
}else{c(J).removeAttr("disabled")
}}function y(H){b.gdt.Validate.removeAllErrors();
E=c(H.currentTarget).attr("data-address-type");
C=c(".uk-address-fields-wrapper."+E);
C.find(".no-address-result ").hide();
n(C.find(l),false);
C.find(r)[0].value="";
C.find(l).show();
C.find(D).hide();
C.find(k).hide();
C.find(q).hide();
n(C.find(k),true);
n(C.find(q),true)
}function j(I){E=c(I.currentTarget).attr("data-address-type");
C=c(".uk-address-fields-wrapper."+E);
n(C.find(q),false);
n(C.find(l),true);
var L=I.currentTarget,H="",N="",M="",K="",O="",J="";
if(L.querySelector("span.address-no")!==null){H=L.querySelector("span.address-no").innerHTML
}if(L.querySelector("span.address-street")!==null){N=L.querySelector("span.address-street").innerHTML
}M=(H+N).slice(0,-1);
if(L.querySelector("span.address-flat-no")!==null){K=L.querySelector("span.address-flat-no").innerHTML;
K=K.slice(0,-1)
}if(L.querySelector("span.address-city")!==null){O=L.querySelector("span.address-city").innerHTML
}if(L.querySelector("span.address-zip")!==null){J=L.querySelector("span.address-zip").innerHTML
}C.find(q).find('input[name="'+E+'.streetname"]')[0].value=M;
C.find(q).find('input[name="'+E+'.address2"]')[0].value=K;
C.find(q).find('input[name="'+E+'.city"]')[0].value=O;
C.find(q).find('input[name="'+E+'.zipcode"]')[0].value=J;
C.find(q).show();
C.find(l).hide();
C.find(D).hide();
C.find(g).hide()
}function v(K,J){var I=Object.keys(K);
for(var H=0;
H<I.length;
H++){var M=e.createElement("li");
M.setAttribute("class","add-list-item-"+H);
M.setAttribute("data-address-Obj",JSON.stringify(K[H].address));
M.setAttribute("data-address-type",J);
var L="";
if(K[H].address.address6!==null){L='<span class="address-flat-no">'+K[H].address.address6+",</span>"
}if(K[H].address.address2!==null){L+='<span class="address-no">'+K[H].address.address2+"</span>"
}if(K[H].address.address5!==null){L+='<span class="address-street"> '+K[H].address.address5+",</span>"
}if(K[H].address.address7!==null){L+='<span class="address-city">'+K[H].address.address7+" </span>"
}if(K[H].address.zip!==null){L+='<span class="address-zip">'+K[H].address.zip+"</span>"
}M.innerHTML=L;
C.find(x).append(M)
}C.find(x).find("li").on(s,function(N){var O=c(N.currentTarget).attr("data-address-obj");
if(!G){t(N,JSON.parse(O))
}else{j(N)
}});
C.find(g).show()
}function t(O,L){var J=c(o.ukAddressParent).data("address-list-href"),K,H,R,Q,P,I,N,M;
if(L.addCountry!==null){K=L.addCountry;
N="country="+K
}if(L.address2!==null){H=L.address2;
N+="&address2="+H
}if(L.address5!==null){R=L.address5;
N+="&address5="+R
}if(L.address6!==null){Q=L.address6;
N+="&address6="+Q
}if(L.address7!==null){P=L.address7;
N+="&address7="+P
}if(L.zip!==null){I=L.zip;
N+="&zip="+I
}M=J+"?"+N+"&_charset_=UTF-8";
f(M);
G=true
}function A(I){b.gdt.Validate.removeAllErrors();
E=c(I.currentTarget).attr("data-address-type");
C=c(".uk-address-fields-wrapper."+E);
C.find(".no-address-result ").hide();
var J=C.find(r).val(),H=C.attr("data-address-list-href"),L=H+"?zip="+J+"&_charset_=UTF-8";
if(J!==""){C.find(r).removeClass("error");
C.find(".no-address-result").hide();
C.find(g).hide();
C.find(x).find("li").remove();
C.find(D).show();
C.find(D).addClass("loader");
f(L)
}else{C.find(r).addClass("error")
}var K={event:"virtualPageview",uri:document.location.pathname};
c("body").trigger("addressSearchModalOpen",K)
}function f(H){C.find(x).empty();
C.find(D).addClass("loader");
var I={url:H,type:"GET",callback:function(J){if(J==null||J==""){C.find(".no-address-result ").show()
}else{if(J.length>0){v(J,E)
}}C.find(D).removeClass("loader")
},error:function(){return
}};
b.gdt.Utils.ajaxCall(I)
}function p(H){b.gdt.Validate.removeAllErrors();
E=c(H.currentTarget).attr("data-address-type");
C=c(".uk-address-fields-wrapper."+E);
C.find(".no-address-result ").hide();
C.find(r).removeClass("error");
C.find(".no-address-result").hide();
n(C.find(k),false);
n(C.find(l),true);
C.find(k).show();
C.find(l).hide()
}function u(){r.removeAttr("disabled","disabled");
if(c(".uk-address-fields-wrapper.shipping .uk-zip-filled-address-wrapper").find('input[name="shipping.streetname"]:disabled').val()!==""){n(c(".uk-address-fields-wrapper.shipping").find(k),false);
n(c(".uk-address-fields-wrapper.shipping").find(l),true);
c(".uk-address-fields-wrapper.shipping").find(k).show();
c(".uk-address-fields-wrapper.shipping").find(l).hide()
}else{n(C.find(l),false)
}}function F(){C=c(o.ukAddressParent),k=c(o.manualAddressBlock),l=c(o.searchAddressBlock),q=c(o.searchAddressResultBlock),r=c(o.zipCode),D=c(o.addressList),g=c(o.adressResults),x=c(o.addressListItem),h=c(o.searchByZipCTA),d=c(o.addAddressManualCTA),w=c(o.resetAddressCTA)
}function m(){h.on(s,A);
d.on(s,p);
w.on(s,y)
}function B(){F();
n(C,true);
if(C.length>0){C=c(".uk-address-fields-wrapper");
u();
m()
}}B();
return{init:B}
};
b.gdt.Checkout.ukAdressSystem=new a()
}(document,window,window.jQuery||window.Zepto));
(function(e,a,c){a.gdt=a.gdt||{};
a.gdt.Checkout=a.gdt.Checkout||{};
var b=function(){var N=c("body"),a2=c('input[name="websiteCountryCode"]').val(),q=c(".icon-plus-circle"),cQ=c("#billing"),cI=c("#shipping-address"),ah=c(".delivery-name"),bF=ah.find("input[name=deliveryType]"),z=c(".shipping-container"),b4=c("input"),X=c("#boutiques-scroll"),v=c("#shipping"),cP=c("#shipit-message"),ba=c(".shippingType"),Z=ba.find('[name="shippingType"]'),bh=c("#billing-details"),aN=c("#shipping-details"),b5=v.find(".shipping-provider-content"),a6=c(' input[name*="billingAddressSameAsShipping"], input[name="shippingAddressSameAsBillingKR"] '),cr=a6.parent().parent().find("fieldset").length>0?a6.parent().parent().find("fieldset"):a6.parent().parent().next().next(),ad=c(".supportedbanks"),bI=c(".eu-cards").parents("form"),an=ad.find("input[type=radio]"),ce=c("input[name=paymentCode]"),cp=c("#user-checkout, #user_payment, #card-payment, #user_summary, #payment-form"),aQ=c("#user-checkout"),aa=c(".form_button_submit, .payment-button"),be=c("#card-expiration-month"),aq=c("#card-expiration-year").find("option"),s=c('#user-checkout select[name="shipping.state"], #user-checkout select[name="billing.state"], #user-checkout select[name="shipping.country"]'),bJ=c(".globalcollect"),bp=c(".adyen"),bW=c('#montblanc #user_summary input[name*="termsAndCondition"]'),a9,aj,cT=c("input[name*=dob]"),K=c("#user_summary"),P=c("html").is(".ie8"),a7=c("#montblanc #user_summary .form_button_submit"),bR=c("#montblanc #user_summary span.err-msg"),cn=c('#montblanc #payment-form input[name*="termsAndCondition"], #montblanc #card-payment input[name*="termsAndCondition"]'),ck=c("#montblanc span.err-msg"),Q=c("#montblanc .montblanc-form .steps .on"),m=c("#basket"),aG=c("#basket-summery"),aE=c("#checkout-boutiquelist-filter"),bv=c(".boutiquelist-no-result"),bN=c(".boutique-list"),aK=c('.ko_kr #montblanc #user_summary input[name*="terms"], .ko_kr #montblanc #user_summary input[name*="conditionofsale"], .ko_kr #montblanc #user_summary input[name*="personalinfo"], .ko_kr #montblanc #user_summary input[name*="agreeall"]'),V=c('#user-checkout select[name="billing.country"]'),bf=c('#user-checkout input[name="billing.zipcode"]'),az=c('#user-checkout select[name="billing.country"]'),cu=c(".billingAsShippingEu").find("input:first"),bQ=c("input[name=globaleCheckoutEnabled]").val(),cF=c("input#shippingType-BTQP"),aM=c("input#shippingType-SHIPIT"),cm=c("input#invoiceType-SDI"),ai=c("input#invoiceType-PEC"),cA=c(".sdiNum"),bK=c(".pecEmail"),bD=c(".it-codice"),aI=c(".es-codice"),cl=c(".it-fiscale"),S=c(".es-fiscale"),aB=c(".it-county"),C=c(".es-county"),bM=c(".it-fiscale, .it-codice, .it-invoiceOptions, #invoiceType-SDI, #invoiceType-PEC"),aY=c(".es-fiscale, .es-codice"),ch=c("#fapiaoType-Individual"),cM=c("#fapiaoType-Company"),l=c(".fapaiaoTypeIndividual"),cq=c(".fapaiaoTypeCompany"),bm=c("#user-checkout_indiviualFapiaoName, #user-checkout_indiviualFapiaoEmailAddress"),aL=c("#user-checkout_companyFapiaoName, #user-checkout_companyFapiaoEmailAddress, #user-checkout_companyFapiaotaxNumber"),cR=bN.data("boutique-stores-ziplist"),T=c(".boutique-list li"),a5,aP,cO,x,a1,bA,bi,ca,aC,a3=false,am=false,au=false,bS=false,af,w=localStorage.getItem("isPickUpSelected"),ap,ay,b9,b2,E,bC,d,cH,W,ak,aS,cN=false,a0,bU=false,y,aA,ci,u,cc,j,o,aT,bY,L,cz=c('.taxcode_container select[name="billing.fiscale"], .taxcode_container input[name="billing.codice"] '),bV=a.gdt.Browsersize.getBreakpoint()==="desktop",ao=a.gdt.Utils.Browser.isiPad,cG=a.gdt.mulitsite,bw={billingForm:".billing-details-eu",billingStateDropDown:'[name="billing.country"]',shippingForm:".shipping-details-eu, .shipping-details-jp, .shipping-details-kr",shippingOptions:".mtb-shipping-options",shippingList:".mtb-shipping-option-list",shippingListInput:".mtb-shipping-option-list-input",disableBillingState:'select[name="billing.country"]',billPayContainer:".mtb-billpay-wrapper",billPayCheckoutContainer:".mtb-bpy-checkout-container",backButton:".send-request",listOptionWrapper:".eu-cards",boutiqueInputs:".boutique-detail input",billingFiscale:'[name="billing.fiscale"]'},aw={visuallyhidden:"mtb-visually-hidden",ipadMode:"mtb-ipad",on:"on",iconChecked:"icon-checked",mtbHide:"mtb-hide",mtbShow:"mtb-show"},b7={minLength:2,maxLength:5,distUnit:"M"},br={billingAddress:true,local:a2},R={},h,bj="click";
aA=c(bw.backButton);
var bx=aA.clone();
var D=aG.siblings("fieldset");
var cy=c("#card-payment").find(".errorMessage").length?c("#card-payment").find(".errorMessage"):c("#payment-form").find(".errorMessage").length?c("#payment-form").find(".errorMessage"):c("#user_payment").find(".errorMessage").length?c("#user_payment").find(".errorMessage"):"";
if(cy.length&&!a.gdt.Utils.Browser.isMobile){var aR=cy.clone();
cy.remove();
D.append(aR)
}if(aG.length&&(c("#user_payment").length||c("#payment-form").length||c("#card-payment").length)&&!a.gdt.Utils.Browser.isMobile){if(D.length){aA.remove();
D.append(bx)
}}function O(cW){cW.addClass(aw.on).find("h5").find("span").addClass(aw.iconChecked);
if(cW.prev("li").length>0){var cX=cW.prev("li");
O(cX)
}}if(a2&&a2.indexOf("Japan")===-1&&a2.indexOf("United States of America")===-1&&a2.indexOf("Canada")===-1&&a2.indexOf("China")===-1){if(Q.prev("li").length>0){var al=Q.prev("li");
O(al)
}a.gdt.Browsersize.setEUDeviceCookie()
}if(a2&&(a2.indexOf("United States of America")!==-1)&&(c("#user-checkout").length>0)){a.gdt.googleMapApi.loadMap()
}if(Z.length){if(w=="true"){aC="BTQP";
cF.prop("checked",true);
aM.prop("checked",false)
}else{aC="shipIt";
cF.prop("checked",false);
aM.prop("checked",true)
}}if(w=="true"){a3=(aC==="BTQP")
}else{a3=(aC==="shipIt")
}if(X.length){ar(X)
}if(ba.length){Z.on("click",cV);
b3(X,!a3);
if(aC==="BTQP"){cS();
Z.filter(function(){return this.value==="BTQP"
}).trigger("click");
setTimeout(function(){az.trigger("change")
},100)
}}b9=c(bw.billPayContainer);
b2=c(bw.billPayCheckoutContainer);
cO=c(bw.shippingOptions);
if(cO.length){bH()
}c(window).on("orientationchange resize",bO);
c(window).smartresize(bO);
function aZ(){c(".form_button_submit").addClass("mb-loader").prop("disabled",true);
ci=document.getElementById("card-number").value;
cc=document.getElementById("card-cvv").value;
j=document.getElementById("card-full-name").value;
o=document.getElementById("card-expiration-month").value;
aT=document.getElementById("card-expiration-year").value;
L=document.getElementById("generationTime").value;
document.getElementById("card-number").disabled=true;
document.getElementById("card-cvv").disabled=true;
document.getElementById("card-full-name").disabled=true;
document.getElementById("card-expiration-month").disabled=true;
document.getElementById("card-expiration-year").disabled=true;
bY=a.gdt.Validate.CreditCards.creditCardName(ci);
u=bY.name;
c("#cardType")[0].value=u;
M(ci,cc,j,o,aT,L)
}function bO(cW){clearTimeout(a0);
a0=setTimeout(function(){if(aA.length){bq(cW)
}},100)
}function b8(){if(!b9.length){return
}aS=b9.data("billpay-config");
billpayCheckout("options",aS);
billpayCheckout("run",{container:bw.billPayCheckoutContainer});
cL();
bI.on("submit",function(cW){bt();
if(b9&&cN&&!(a.gdt.Validate.validateForm(bI.attr("id")))){return false
}});
b9.on("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",bq)
}function bT(){if(!b2.hasClass("bpy")){return
}var cW=ce.filter(":checked").val()==="BILP"||false;
E=b2.find(".birthday-picker select");
d=b2.find(".bpy-input-termsOfService");
cH=b2.find("select.bpy-input-legalForm");
W=b2.find("input.bpy-input-registerNumber");
ak=b2.find("input.bpy-input-taxNumber");
b2.find("label.control-label").hide();
b2.find("div.customer-data-row").css("padding-left","0px");
b2.find("label").each(function(cY,c0){var cX=c(c0);
var cZ=cX.text();
cX.closest(".form-group").find("input.form-control").attr("placeholder",cZ).val("").focus().blur();
if(b2.find("select.bpy-input-legalForm").val()===""){cX.closest(".form-group").find("select.bpy-input-legalForm option:first-child").text(cZ)
}});
c.each(E,function(cX,cY){c(cY).attr({name:"billpaydob"+cX,required:"required",disabled:" disabled"})
});
cH.attr({name:"billpayterms",required:"required",disabled:" disabled"});
W.attr({name:"billpayterms",required:"required",disabled:" disabled"});
ak.attr({name:"billpayterms",required:"required",disabled:" disabled"});
d.attr({name:"billpayterms",required:"required",disabled:" disabled"}).after('<span class="icon-checked"></span>');
d.on("change",bq);
bU=true;
H(!cW)
}function H(cW){E.prop("disabled",cW);
d.prop("disabled",cW);
cH.prop("disabled",cW);
W.prop("disabled",cW);
ak.prop("disabled",cW);
var cY=aS.customer.billing.dayOfBirth,cX=aS.customer.billing.companyName;
if(c(".day-of-birth-group").css("display")=="none"){c(".day-of-birth-group").find("input, textarea, button, select").attr("disabled","disabled")
}else{c(".customer-data-row .form-group").find("input, textarea, button, select").attr("disabled","disabled");
b2.find("label.control-label").show();
b2.find("div.customer-data-row").css("padding-left","15px");
if(!cW){c(".day-of-birth-group").find("input, textarea, button, select").removeAttr("disabled")
}}if(!cW&&cX){cH.prop("disabled",false);
W.prop("disabled",false);
ak.prop("disabled",false)
}}function bt(){if(d){var cW=d.prop("checked");
c(".mtb-billpay-terms").val(cW)
}}function M(c4,cZ,cY,c3,c1,cW){var c0=a.adyen.createEncryption({});
var c2={number:c4,cvc:cZ,holderName:cY,expiryMonth:c3,expiryYear:c1,generationtime:cW};
var cX=c0.encrypt(c2);
c("#encryptedKey")[0].value=cX
}var bd=function(cW){R=cW?cW:""
};
function g(){if(R[0].indexOf("termsAndCondition")!==-1){a.gdt.Validate.removeErrorMessage();
cn.addClass("error");
ck.addClass("show")
}}function aV(){c(".form_button_submit").addClass("mb-loader").prop("disabled",true);
a.gdt.Validate.removeAllErrors();
if(!(a.gdt.Validate.validateForm(cp.attr("id")))){c(".form_button_submit").removeClass("mb-loader").prop("disabled",false);
if(a.adyen&&(R.length===1)){g()
}return false
}else{if((a2==="United Kingdom")&&(c(".uk-address-system").length>0)){var cW=c("input[name=shippingType]:checked").val();
var cX;
if(cW==="billingAddressSameAsShippingEU"){cX=c(".uk-address-fields-wrapper.billing")
}else{if(cW==="shipToAlternate"){cX=c(".uk-address-fields-wrapper")
}}if((cX.find(".uk-zip-filled-address-wrapper").css("display")==="none")&&(cX.find(".uk-address-search-result-wrapper").css("display")==="none")){cX.find(".find-address-by-zip").addClass("error");
cp.find(".errorMessage").addClass("show");
return false
}}}if(a.adyen&&(c("#paymentCodeCARD").is(":checked"))){aZ()
}if((a2==="Japan")){c(".form_button_submit").removeClass("mb-loader").prop("disabled",false)
}}function bB(){if((bD.length>0)&&!(bD.prop("disabled"))&&(bD.hasClass("mb-codice"))){var cW=bD.val(),cX=a.gdt.Utils.FiscalValidation.validateFiscalCode(cW);
return cX
}}function cD(cW){c(cW.target).prev().removeClass("hiddenfield").focus()
}function bg(){document.forms[0].submit()
}function cU(){if(bJ.contents()&&bJ.contents().length){bI.submit()
}}function cv(){try{var cW=window.setTimeout(function(){window.top.focus();
if(ce.length){ce.eq(0).focus()
}clearTimeout(cW)
},1000);
bq()
}catch(cX){a.gdt.Utils.Console.log("cross domain error"+cX)
}}function cS(){localStorage.setItem("showBillingAddress",JSON.stringify(br))
}function b0(){h=JSON.parse(localStorage.getItem("showBillingAddress"));
return h
}function aH(){localStorage.removeItem("showBillingAddress")
}function p(cZ){var c0=c(cZ).find("input"),cX=c(cZ).find("select");
if(c(cZ).hasClass("show")){for(var cY=c0.length-1;
cY>=0;
cY--){var cW=c(c0[cY]).attr("name");
if(cW.indexOf("address2")===-1&&cW.indexOf("city")===-1&&cW.indexOf("phone")===-1){c(c0[cY]).attr("required");
c(cX).attr("required")
}}}else{c0.removeAttr("required");
c(cX).removeAttr("required")
}}function aD(){if(cQ.hasClass("notvisible")){cQ.removeClass("notvisible").addClass("visible");
cQ.next("hr").show()
}else{cQ.removeClass("visible").addClass("notvisible");
cQ.next("hr").hide()
}}function bo(c3){var cY=c3.target?c(c3.target):c(c3),cW=cY.attr("value"),c1=c(".supportedbanks").find("input"),c2=c("."+cW+".supportedbanks"),c0=c2.find("input");
for(var cX=0;
cX<cY.length;
cX++){if(c(cY[cX]).attr("checked")){cW=c(cY[cX]).attr("value")
}}ad.addClass("opacity");
if(cW){if(ad.find("select").length>0){ad.find("select").attr("disabled","disabled")
}c2.removeClass("opacity");
if(c2.find("select").length>0){c2.find("select").removeAttr("disabled")
}c1.attr("disabled","disabled");
for(var cZ=0;
cZ<c1.length;
cZ++){if(c1[cZ].checked){c1[cZ].checked=false
}}c0.removeAttr("disabled");
aa.removeClass("disabled").removeAttr("disabled","disabled");
if(bJ.hasClass("globalcollect")){if(P){if(cW.indexOf("CARD")!==-1){bJ.addClass("show")
}else{bJ.removeClass("show")
}}}}}function a8(cX){var cW=cX.target?c(cX.target):c(cX);
ah.parent().addClass("disabled");
z.find("select").attr("disabled","disabled");
z.parent().parent().find(".form_button_submit").removeClass("disabled").removeAttr("disabled");
cW.closest("li").removeClass("disabled");
cW.closest("li").find("select").removeAttr("disabled");
if(cW.attr("id").indexOf("STDD")!==-1||cW.attr("id").indexOf("EXPD")!==-1||cW.attr("id").indexOf("deliveryType-SHIPIT")!==-1){a6.parent().show();
cr.find("input[type=text], textarea").val("")
}else{a6.parent().hide();
cr.removeClass("show");
a6.prop("checked",false)
}}function bX(cW){if(c(cW).val().length>0){c(cW).removeClass("hiddenfield").next(".icon-plus-circle").hide()
}}function aJ(cY){var cW=ce.filter(":checked");
b4=c(cY.target).length>0?c(cY.target):c(cY);
for(var cX=0;
cX<b4.length;
cX++){if(b4[cX].checked){c(b4[cX]).removeAttr("disabled").removeClass("disabled");
c(".form_button_submit").removeClass("disabled").removeAttr("disabled");
if(ah.length){a8(b4[cX])
}if(cW.val()==="CARD"){if(ad.hasClass("notvisible")){ad.removeClass("notvisible").addClass("visible")
}A(cW&&cW.val()!=="CARD")
}else{A(cW&&cW.val()!=="CBGW");
if(ad.hasClass("visible")){ad.removeClass("visible").addClass("notvisible")
}if(ad.hasClass("opacity")){ad.find("input[type=radio]").prop("checked",false)
}}if(b4[cX].value.indexOf("PPAL")!==-1){ad.find("input").removeClass("error");
ad.find("select").removeClass("error");
ad.find("input").attr("disabled",true);
ad.find("select").attr("disabled",true);
if(a2&&(a2.indexOf("United States of America")!==-1||a2.indexOf("Canada")!==-1)){c("#card-number").val("");
c("#card-cvv").val("");
c("#card-full-name").val("");
c("#card-expiration-month").val("00");
c("#card-expiration-year").val("00")
}else{ad.find("input").val("");
ad.find("select").val("00")
}}if(P&&b4[cX].value.indexOf("CARD")!==-1&&bJ.hasClass("globalcollect")){bJ.addClass("show")
}aa.removeClass("disabled").removeAttr("disabled","disabled")
}if(c(b4[cX]).hasClass("hiddenfield")){bX(b4[cX])
}}}function A(cW){ad.toggleClass("opacity",cW);
ad.find("input").removeAttr("disabled").prop("disabled",cW);
ad.find("select").removeAttr("disabled").prop("disabled",cW)
}function bn(){if(bF.length>0){bF.removeClass("error");
z.find("select").attr("disabled","disabled");
c(".form_button_submit").addClass("disabled").attr("disabled","disabled");
ah.find("input[type=radio]").on(bj,a8);
for(var cW=0;
cW<bF.length;
cW++){if(bF[cW].checked){aJ(b4)
}}}}function ag(cZ){var cY=new Date(),cX,cW=c(cZ.target).val();
if(a2.indexOf("Japan")!==-1){cX=((cY.getMonth().length)===1)?(cY.getMonth()):(cY.getMonth())
}else{cX=((cY.getMonth().length+1)===1)?(cY.getMonth()+1):(cY.getMonth()+1)
}if(cW<=parseFloat(cX)){aq.eq(0).prop("disabled",true);
aq.eq(1).prop("disabled",true);
aq.eq(2).prop("selected",true)
}else{aq.eq(0).prop("disabled",true);
aq.eq(1).prop("disabled",false)
}}function aU(){var cW=cr;
cW.toggleClass("show");
cS();
p(cW);
if(a6.attr("checked")===true&&localStorage.getItem("showBillingAddress")){aH()
}}function ae(){if(bW.is(":checked")){aa.removeClass("disabled").removeAttr("disabled","disabled")
}}function Y(){if(aK.is(":checked")){aa.removeClass("disabled").removeAttr("disabled","disabled")
}}a7.click(function(){if(bW.attr("checked")){bR.removeClass("show")
}else{bR.addClass("show")
}});
function bL(){var cW=c('input[name="shipping.zipcode"]');
if(aN.hasClass("shipping-details-eu")){if(!aN.hasClass("show")){var cW=c('input[name="billing.zipcode"]')
}}if(cW.value){ay=(cW[0].value).replace(/\s+/g,"")
}return true
}function B(){if(s.length>0){var cW=aN;
if(aN.length>0&&aN.hasClass("shipping-details-eu")){if(!aN.hasClass("show")){var cW=bh
}}}else{return true
}var cX=cW.find(s);
if(cX.length>0){if(cX[0].value!==""){ap=cX[0].value;
return true
}return true
}}function at(cY){var cZ=c(cY.target).length>0?c(cY.target).parent():c(cY).parent(),cX=cZ.attr("class");
c("."+cX).parent().addClass("disabled");
if(cZ.parent().hasClass("disabled")){cZ.parent().removeClass("disabled")
}if(cY){var cW=cY.target?cY.target.name:cY[0]?cY[0].value:"";
if(cW=="shipIt"||cW=="billingAddressSameAsShippingEU"||cW=="shipToAlternate"||cW=="deliveryType"||cW=="STDD"){if(bL()&&B()){r(cW)
}if(cW=="shipIt"){localStorage.setItem("isPickUpSelected","false");
localStorage.setItem("isBillingChecked","true");
v.removeClass("loader");
bz();
I();
bs();
U()
}}else{if(cW=="BTQP"){r(cW);
localStorage.setItem("isPickUpSelected","true");
localStorage.setItem("isBillingChecked","false");
v.removeClass("loader");
I();
bs();
U()
}}}}function cs(cX,cW){var cY=c("#shippingProvider");
if(cY.length>=1){cY.remove()
}v.addClass("loader");
v.removeClass("hide");
cX=cW?cX+cW:cX;
var cZ={url:cX,type:"GET",callback:function(c5){var c6=c(c5),c3=c6.find("input[name=deliveryType]"),c0=c6.find("input[name=deliveryType]:checked");
b5.html(c6);
N.trigger("shippingLoaded");
v.removeClass("loader");
at(c0);
c3.on(bj,at);
if(c6.is("[data-is-show-boutique]")==true){var c4=c6.data("isShowBoutique")||false,c1=a1.filter(":checked"),c2=a1.filter("#shippingType-BTQP");
if(c4===true){c2.closest("div").removeClass("hide")
}else{c2.closest("div").addClass("hide");
if(c1===c2){a1.not(c2).first().trigger("click")
}}}},error:function(c2,c0,c1){a.gdt.Utils.Console.warn("Cant post zip code to shipping html",c0+" ("+c1+")");
a.gdt.Utils.Console.log("zipCodeRequest",c2)
}};
a.gdt.Utils.ajaxCall(cZ)
}function r(c3){var c2=m.attr("data-basket-Summary-Href"),cY="";
if(c3=="shipIt"||c3=="billingAddressSameAsShippingEU"||c3=="shipToAlternate"||c3=="deliveryType"||c3=="STDD"){var c1=v.find("input[name=deliveryType]:checked");
if(c1.length){var cX=c1[0].value,cZ="provider."+cX+".deliveryPriceIncludingTax",c0=c1.parent().siblings(".delivery-cost").find('input[name="'+cZ+'"]')[0].value;
cY=c2+"?deliveryType="+cX+"&displayTax=true&deliveryPriceIncludingTax="+c0;
cY=ap?(cY+"&shipping.state="+ap):cY;
cY=ay?(cY+"&shipping.zipcode="+ay):cY
}}else{if(c3=="BTQP"){cY=c2+"?deliveryType=BTQP&displayTax=true&deliveryPriceIncludingTax=0"
}}var cW={url:cY,type:"GET",callback:function(c4,c7,c6){if(c4.indexOf('id="basket"')!==-1){var c5=c(c4);
aG.html(c5);
if(a.gdt.Utils.Browser.isMobile){c(".shipping-basket").accordion()
}N.trigger("basketLoaded")
}},error:function(c6,c4,c5){return
}};
if(cY!==""){a.gdt.Utils.ajaxCall(cW)
}}function bG(cW){if(a3){return
}cs(a9,cW.target.value)
}function aO(cX){var cW=cX?c(cX.currentTarget):ce.filter(":checked"),cY=cW&&cW.val()&&cW.val().indexOf("BILP")!==-1;
bS=cW.val().indexOf("CARD")!==-1;
if(b9){b9.toggleClass(aw.visuallyhidden,cW.val()!=="BILP")
}if(cX){a.gdt.Validate.removeAllErrors()
}if(c(".eu-cards").length){cW.closest("li").find("input, radio, select, fieldset").not('[name="paymentCode"]').prop("disabled",false);
cW.closest("li").siblings("li").find("input, radio, select, fieldset").not('[name="paymentCode"]').prop("disabled",true)
}if(E){H(!cY)
}if(cW.val().indexOf("PPAL")!==-1||cW.val().indexOf("IDAL")!==-1||cY||cW.val().indexOf("CARD")!==-1){bI.removeClass("eu")
}else{bI.addClass("eu")
}}function cL(){var cW=window.setInterval(function(){if(b2.attr("bpy-checkout-rendered")==="true"){bT();
clearInterval(cW)
}},100)
}function cC(){var cZ=ce.closest("ul"),c0=cZ.find("li")||{},cW=cZ.parent("fieldset"),cY=cW.height(),c1=16,cX=0;
c0.each(function(c2,c3){cX+=c(c3).height()+c1
});
if(N.hasClass("ipad")){cX>cY?cX:cY
}return cX
}function bq(c0){if(!aA||c0&&c0.type==="transitionend"&&c0.propertyName!=="height"){return
}var cZ=cC();
cZ=(cZ>=568?cZ-13:cZ);
if(bS&&bJ&&bJ.width()<=668){cZ=cZ+50
}aA.toggleClass(aw.ipadMode,a.gdt.Utils.Browser.isiPad&&bS);
if(a.gdt.Utils.Browser.isMobile){aA.css({top:-25,width:"100%"});
return
}var cX=c(".cardMessage").height()-20;
if(c("html").hasClass("en_nl")){aj=680
}else{aj=600
}if(bS&&cZ<aj){var cY=bJ;
var cW=cY.offset();
aA.css({position:"absolute",top:(cW.top)+142})
}else{aA.removeAttr("style")
}if(a.gdt.Utils.Browser.isiPad){aA.css({margin:"0px 0 0 0",top:(cW.top)+197});
return
}}function b1(cZ){var cY=["CA"],cW=false;
for(var cX=cY.length-1;
cX>=0;
cX--){if(cY[cX].indexOf(cZ)!==-1){cW=true
}}return cW
}function aX(cX){var cW=c(cX.target).length?c(cX.target):cX;
if(c(cW).val()&&!b1(c(cW).val())){if(c(cW).val()==="MO"){bf.attr("disabled","disabled").addClass("disabled");
bf.val("")
}else{bf.removeAttr("disabled","disabled").removeClass("disabled")
}}else{V.removeAttr("disabled","disabled").removeClass("disabled")
}}function cK(cZ){var cY=["US"],cW=false;
for(var cX=cY.length-1;
cX>=0;
cX--){if(cY[cX].indexOf(cZ)!==-1){cW=true
}}return cW
}function ct(cX){var cW=c(cX.target).length?c(cX.target):cX;
if(c(cW).val()&&!cK(c(cW).val())){if(V){V.attr("disabled","disabled").addClass("disabled")
}if(c(cW).val()==="MO"){bf.attr("disabled","disabled").addClass("disabled");
bf.val("")
}else{bf.removeAttr("disabled","disabled").removeClass("disabled")
}V.prop("selectedIndex",0)
}else{V.removeAttr("disabled","disabled").removeClass("disabled")
}}function cV(cZ){var cW=c(cZ.target),cX=(cW.val().indexOf("BTQP")!==-1),cY=c('#user-checkout select[name="billing.country"]')?c('#user-checkout select[name="billing.country"]'):"";
X.toggleClass("hide",!cX);
X.toggleClass("show",cX);
if(cX){bk(X);
bh.addClass("show");
cP.addClass("hide");
aN.addClass("hide");
bs();
U();
v.addClass("hide");
c(".send-request").find(".form_button_submit").prop("disabled",false);
if(a2&&a2.indexOf("China")!==-1){c(".send-request").find(".form_button_submit").prop("disabled",false)
}}else{if(localStorage.getItem("showBillingAddress")){bh.addClass("show");
a6.prop("checked",false)
}else{bh.removeClass("show");
a6.prop("checked",true)
}aN.removeClass("hide");
cP.removeClass("hide");
if(a2&&a2.indexOf("China")!==-1){c(".send-request").find(".form_button_submit").prop("disabled",false);
if(c('select[name="shipping.zipcode"]').val().length>0){v.removeClass("hide")
}}else{v.removeClass("hide")
}}at(cW);
a.gdt.Validate.removeAllErrors();
if(cY.length>0){aX(cY)
}b3(X,!cX)
}if(bJ.hasClass("globalcollect")){bJ.on("load",cv);
bJ.on("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",bq);
af=ce.filter(":checked");
ce.on(bj,aO);
if(af.length){aO()
}}if(bp.length>0){af=ce.filter(":checked");
ce.on(bj,aO);
if(af.length){aO()
}}if(a2&&a2.indexOf("Japan")===-1&&a2.indexOf("United States of America")===-1&&a2.indexOf("Canada")===-1&&a2.indexOf("China")===-1&&a2.indexOf("Korea")===-1){if(bQ==="false"){a9=v.data("href")+"?shipping.country="
}if(cp.length>0){if(s.prop("selectedIndex")===0){s.on("change",bG)
}else{if(s.length){cs(a9,s.val())
}else{cs(a9)
}s.on("change",bG)
}}bo(ce)
}else{if(a2&&(a2.indexOf("United States of America")!==-1||a2.indexOf("Canada")!==-1||a2.indexOf("Korea")!==-1)){var az=c('#user-checkout select[name="billing.country"]'),V=c('#user-checkout select[name="billing.state"]'),bf=c('#user-checkout input[name="billing.zipcode"]');
a9=v.data("href")+"?shipping.state=";
s=c('#user-checkout select[name="shipping.state"]');
s.on("change",bG);
if(a2.indexOf("United States of America")!==-1){az.on("change",ct)
}else{az.on("change",aX)
}if(a2.indexOf("Korea")!==-1){cs(a9,"")
}if(s.length>0){var J=s.find("option").eq(s.prop("selectedIndex"));
cs(a9,J[0].value)
}if(az.prop("selectedIndex")!==0){aX(az)
}bo(ce)
}else{bo(ce)
}}if(a2&&(a2.indexOf("China")!==-1)){a.gdt.Browsersize.setCNDeviceCookie()
}if(ad.length>0){ad.find("input[name=creditcard-type]").attr("disabled","disabled");
ad.find("select").attr("disabled","disabled");
ad.on(bj,aJ);
c(ce).on(bj,aJ)
}if(a6.length>0){a6.on(bj,aU);
if(a6.attr("checked")===true&&b0()){a6.removeAttr("checked");
cr.addClass("show")
}else{cr.removeClass("show");
a6.prop("checked",true)
}}if(be.length>0){be.on("change",ag)
}bW.on(bj,ae);
aK.on(bj,Y);
cp.on("submit",aV);
aJ(b4);
bn();
function cj(){cT.prev("span").addClass("dob");
cT.wrapAll("<span class=dob-fields />")
}cj();
cQ.addClass("notvisible");
cQ.next("hr").hide();
function cb(){if(!(a.gdt.Validate.validateForm(cp.attr("id")))){aa.removeClass("mb-loader").prop("disabled",false)
}else{aa.addClass("mb-loader").prop("disabled",true)
}if(b0()){aH()
}}if(K.length>0){K.on("submit",cb)
}if(h&&h.local.indexOf(a2)===-1){aH()
}function bH(){a5=c(bw.billingForm);
aP=c(bw.shippingForm);
x=cO.find(bw.shippingList);
a1=cO.find(bw.shippingListInput);
bi=a1.filter(":checked");
bA=cO.siblings().find(bw.boutiqueInputs);
ca=a5.find(bw.billingStateDropDown);
v.toggleClass("hide",(ca.prop("selectedIndex")===0));
v.prev("hr").remove();
aC=bi.data("input-name");
a3=(aC==="pickup");
a1.on("change",bZ);
ca.on("change",f);
bA.on("change",bl).first().trigger("change");
if(bi.length){bi.trigger("change")
}if(X.length===0){return
}bk(X)
}function bk(cW){var cX;
if(cW.data("boutiqueScrollInit")){cX=window.setTimeout(function(){cW.tinyscrollbar_update();
clearTimeout(cX)
},100)
}}function ar(cW){if(cW.data("boutiqueScrollInit")){bk(cW)
}if(cW.length&&!cW.data("boutiqueScrollInit")){cW.addClass("scrollbar-added").tinyscrollbar().data("boutiqueScrollInit",true)
}}function f(){v.toggleClass("hide loader",a3)
}function bZ(cX){var cW=c(cX.currentTarget);
aC=cW.data("input-name");
a3=(aC==="pickup");
am=(aC==="alternateAddress");
au=(aC==="billingAddress");
X.toggleClass("hide",!a3);
X.toggleClass("show",a3);
cP.toggleClass("hide",a3);
b3(X,!a3);
v.removeClass("hide");
if(ca.prop("selectedIndex")>0||a3){v.toggleClass("hide",a3)
}v.find('[name="deliveryType"]').prop("disabled",a3);
aP.toggleClass("show",am);
if(a3){bk(X)
}if(au){cP.toggleClass("hide",au)
}f();
at(cW);
b3(aP,!am);
N.trigger("shippingTypeChanged",[cX])
}function bl(){var cW=bA.filter(":checked");
if(!cW.length){return
}cW.closest("ul").siblings(".trackBoutName").attr({name:cW.data("boutiqueGivennameKey"),value:cW.data("boutiqueGivennameVal")});
cW.closest("ul").siblings(".trackBoutcity").attr({name:cW.data("boutiqueCityKey"),value:cW.data("boutiqueCityVal")})
}function b3(cW,cX){var cY=cW.find("input, select");
cY.prop("disabled",cX)
}function bc(){var cX=c(".mtb-qrcode-container .mtb-qrcode-image"),cW=cX.data("qrcodeData");
a.gdt.Util.QRCode.generateQRCode({data:cW,container:cX})
}function cJ(){var cW=c(".mtb-qrcode-time"),cY=cW.find("span"),cX=cW.data("timeDurationInMin");
a.gdt.Util.Timer.startTimer({durationInMins:cX,container:cY})
}function bu(){var cY=c(".mtb-qrcode-container .mtb-qrcode-image"),cX=cY.data("qrcodeData");
var cW=setTimeout(function(){window.location=cX;
clearTimeout(cW)
},1000)
}function ax(cW){cW.preventDefault();
window.location.reload(true)
}function aW(cW){return cW*Math.PI/180
}function bP(cW){return cW*180/Math.PI
}function aF(c1,cZ,c0,cY,cX){var cW=parseFloat(cZ)-parseFloat(cY);
var c2=(Math.sin(aW(parseFloat(c1)))*Math.sin(aW(parseFloat(c0))))+(Math.cos(aW(parseFloat(c1)))*Math.cos(aW(parseFloat(c0)))*Math.cos(aW(cW)));
c2=Math.acos(c2);
c2=bP(c2);
if(cX=="M"){c2=(c2)*60*1.1515
}if(cX=="K"){c2=(c2)*1.609344
}return c2
}function k(cY,c0){var cZ=50;
var cX=document.createElement("ul");
cX.setAttribute("class","sub-boutique-list");
if(c0!==undefined){var cW=document.createElement("li");
cW.innerHTML=T.eq(c0)[0].innerHTML;
cX.appendChild(cW)
}c.each(cR,function(c2,c3){var c4=aF(cY.latitude,cY.longitude,c3.latitude,c3.longitude,b7.distUnit);
if((c4>0)&&(cZ>c4)){var c1=document.createElement("li");
c1.innerHTML=T.eq(c2)[0].innerHTML;
cX.appendChild(c1)
}});
if(cX.children.length>0){bN.append(cX);
return true
}else{return false
}}function cf(cY){var cX=c(cY),cW=cX.next("div");
if(cW.hasClass("open")){cW.addClass("closed").removeClass("open");
cX.find(".icon-arrow-up").removeClass("icon-arrow-up").addClass("icon-arrow-down");
cX.find(".total-section").css("display","block")
}else{cW.removeClass("closed").addClass("open");
cX.find(".icon-arrow-down").removeClass("icon-arrow-down").addClass("icon-arrow-up");
cX.find(".total-section").css("display","none")
}}function t(cW,cX){if(!cW&&(cX>=b7.minLength)){bv.removeClass(aw.mtbHide).addClass(aw.mtbShow);
T.removeClass(aw.mtbHide)
}else{if(c(".sub-boutique-list").length>0){bv.removeClass(aw.mtbShow).addClass(aw.mtbHide);
T.removeClass(aw.mtbShow).addClass(aw.mtbHide)
}}}function cw(cY,c2){var c1=c2||(cY?c(cY.target).val():""),c0=new RegExp(c1,"gi"),cZ=false,cW=false;
if(c(".sub-boutique-list").length>0){c(".sub-boutique-list").remove()
}if(typeof c1!=="undefined"&&c1.length>=b7.minLength){T.addClass(aw.mtbHide);
c.each(cR,function(c3,c4){if((c4.zip).indexOf(c1)===0){if(c1.length==b7.maxLength){cZ=k(c4,c3)
}else{cZ=true;
c0.lastIndex=0;
T.eq(c3).removeClass(aw.mtbHide)
}}else{if(c1.length==b7.maxLength&&!cZ){cW=true
}}});
if(cW){var cX=new a.google.maps.Geocoder();
bN.parent().addClass("loader");
T.addClass(aw.mtbHide);
bv.removeClass(aw.mtbShow).addClass(aw.mtbHide);
cX.geocode({address:c1},function(c4,c3){if(c3===google.maps.GeocoderStatus.OK){var c5={zip:c1,latitude:c4[0].geometry.location.lat(),longitude:c4[0].geometry.location.lng()};
cZ=k(c5);
t(cZ,c1.length);
bk(X)
}else{cZ=false;
console.log("Geocode was not successful for the following reason: "+c3)
}bN.parent().removeClass("loader")
})
}}else{cZ=false;
bv.removeClass(aw.mtbShow).addClass(aw.mtbHide);
T.removeClass(aw.mtbHide)
}t(cZ,c1.length);
bk(X)
}function ac(cX){var cW=typeof(cX)==="object"?c(cX.target).val():cX;
if(cW==="P"){c('input[name="billing.codice"]').attr("maxLength","16");
c('input[name="billing.codice"]').attr("minLength","16")
}else{if(cW==="C"){c('input[name="billing.codice"]').attr("maxLength","11");
c('input[name="billing.codice"]').attr("minLength","11")
}}}if((a2==="Italy")&&(cp.find('select[name="billing.fiscale"]'))){var al=c('select[name="billing.fiscale"]');
var cd=al.val();
if(cd){ac(cd)
}al.on("change",ac)
}function av(){var cW=localStorage.getItem("SDIcomponent");
if(cW&&cW=="SDI"){cm.prop("checked",true);
cA.removeClass("hide").prop("disabled",false);
bK.addClass("hide").prop("disabled",true);
c("#invoiceType-SDI, #invoiceType-PEC").removeClass("hide").prop("disabled",false)
}else{if(cW&&cW=="PEC"){ai.prop("checked",true);
cA.addClass("hide").prop("disabled",true);
bK.removeClass("hide").prop("disabled",false);
c("#invoiceType-SDI, #invoiceType-PEC").removeClass("hide").prop("disabled",false)
}else{c("#invoiceType-SDI, #invoiceType-PEC").removeClass("hide").prop("disabled",false);
cA.addClass("hide").prop("disabled",true);
bK.addClass("hide").prop("disabled",true)
}}}function cE(cW){if(cW.checked&&cW.value=="sdi"){cA.removeClass("hide").prop("disabled",false);
bK.addClass("hide").prop("disabled",true);
localStorage.setItem("SDIcomponent","SDI")
}else{if(cW.checked&&cW.value=="pec"){cA.addClass("hide").prop("disabled",true);
bK.removeClass("hide").prop("disabled",false);
localStorage.setItem("SDIcomponent","PEC")
}}}function bs(){var cX=localStorage.getItem("isBillingChecked"),cW=c(bw.billingStateDropDown).val();
if(a2&&(cX=="true"||!cX)){if((a2.indexOf("Italy")!==-1)){bM.removeClass("hide").prop("disabled",false);
aY.addClass("hide").prop("disabled",true);
av()
}else{if((a2.indexOf("Spain")!==-1)){aY.removeClass("hide").prop("disabled",false);
bM.addClass("hide").prop("disabled",true)
}else{aY.addClass("hide").prop("disabled",true);
bM.addClass("hide").prop("disabled",true)
}}}else{if(a2&&(cX=="false")){if(c(bw.billingStateDropDown).length){if((a2.indexOf("Italy")!==-1)&&(cW||!cW)){bM.removeClass("hide").prop("disabled",false);
aY.addClass("hide").prop("disabled",true);
av()
}else{if((a2.indexOf("Spain")!==-1)&&(cW||!cW)){aY.removeClass("hide").prop("disabled",false);
bM.addClass("hide").prop("disabled",true)
}else{if((a2.indexOf("Spain")===-1)&&(a2.indexOf("Italy")===-1)&&cW==="IT"){bM.removeClass("hide").prop("disabled",false);
aY.addClass("hide").prop("disabled",true);
av()
}else{if((a2.indexOf("Spain")===-1)&&(a2.indexOf("Italy")===-1)&&cW==="ES"){aY.removeClass("hide").prop("disabled",false);
bM.addClass("hide").prop("disabled",true)
}else{aY.addClass("hide").prop("disabled",true);
bM.addClass("hide").prop("disabled",true)
}}}}}}}}function U(){var cX=localStorage.getItem("isBillingChecked"),cW=c(bw.billingStateDropDown).val();
if(a2&&(cX=="true"||!cX)){C.addClass("hide").prop("disabled",true);
aB.addClass("hide").prop("disabled",true)
}else{if(a2&&(cX=="false")){if(cW){if(cW==="IT"){aB.removeClass("hide").prop("disabled",false);
C.addClass("hide").prop("disabled",true)
}else{if(cW==="ES"){C.removeClass("hide").prop("disabled",false);
aB.addClass("hide").prop("disabled",true)
}else{C.addClass("hide").prop("disabled",true);
aB.addClass("hide").prop("disabled",true)
}}}}}}function by(cY){var cW=c(cY.currentTarget||cY.target),cX=cW.val();
bs();
U()
}function b6(cX){var cW=cX.val();
if(cW=="P"){bD.attr({maxlength:"16",minlength:"16"}).addClass("mb-codice").removeClass("mb-partita");
aI.attr({maxlength:"9",minlength:"9"}).addClass("mb-codice").removeClass("mb-partita")
}else{if(cW=="C"){bD.attr({maxlength:"11",minlength:"11"}).addClass("mb-partita").removeClass("mb-codice");
aI.attr({maxlength:"9",minlength:"9"}).addClass("mb-partita").removeClass("mb-codice")
}}}function bb(cX){var cW=c(cX.currentTarget||cX.target);
b6(cW);
bD.val("");
aI.val("")
}function co(cW){if(cW.checked){localStorage.setItem("isBillingChecked","true");
bs();
U()
}else{localStorage.setItem("isBillingChecked","false");
bs();
U()
}}function I(){var cW=localStorage.getItem("isBillingChecked");
if(cW=="false"){bh.addClass("show");
cu.prop("checked",false)
}else{bh.removeClass("show");
cu.prop("checked",true)
}}function bz(){var cW=s.val();
if(cW){cs(a9,cW)
}}function cg(cX,cW){var cY=c(cX);
if(cY.val().length>cW){cY.val(cY.val().substr(0,cW))
}}function cB(cW){if(cW.value.match(/[^a-zA-Z0-9 ]/g)){cW.value=cW.value.replace(/[^a-zA-Z0-9 ]/g,"")
}}function F(cW){if(cW.value.match(/[0-9]/)){cW.value=cW.value.replace(/[a-zA-Z._^%$#!~@,-]+/,"")
}}function n(cW){if(bD.hasClass("mb-codice")){cB(cW);
cg(cW,16)
}else{if(bD.hasClass("mb-partita")){F(cW);
cg(cW,11)
}}}function G(cW){if(aI.hasClass("mb-codice")){cB(cW);
cg(cW,9)
}else{if(aI.hasClass("mb-partita")){cB(cW);
cg(cW,9)
}}}function ab(){if(a2&&(a2.indexOf("China")!==-1)){var cW=localStorage.getItem("efapiaocomponent");
if(cW=="Individual"){ch.prop("checked",true);
bE(ch)
}else{if(cW=="Company"){cM.prop("checked",true);
bE(cM)
}else{ch.prop("checked",true);
l.removeClass("hide");
bm.prop("disabled",false);
cq.addClass("hide");
aL.prop("disabled",true)
}}}}function bE(cW){var cX=cW[0]?cW[0]:cW;
if(cX.checked&&cX.value=="01"){l.removeClass("hide");
bm.prop("disabled",false);
cq.addClass("hide");
aL.prop("disabled",true);
localStorage.setItem("efapiaocomponent","Individual")
}else{if(cX.checked&&cX.value=="02"){l.addClass("hide");
bm.prop("disabled",true);
cq.removeClass("hide");
aL.prop("disabled",false);
localStorage.setItem("efapiaocomponent","Company")
}}}function a4(){q.on(bj,cD);
cI.on(bj,aD);
c(".it-county, .it-fiscale, .es-county, .es-fiscale, .es-codice, .it-codice, .it-invoiceOptions, #invoiceType-SDI, #invoiceType-PEC, .sdiNum, .pecEmail").addClass("hide").prop("disabled",true);
c(bw.billingStateDropDown).on("change",by);
c(bw.billingFiscale).on("change",bb);
if(c(".sdi-express").length>0){c(".it-invoiceOptions").removeClass("hide").prop("disabled",false);
c("#invoiceType-SDI, #invoiceType-PEC").removeClass("hide").prop("disabled",false)
}function cX(){if(cz.val()!=""){aa.removeAttr("disabled","disabled")
}}cz.on("change",cX);
bD.on("keyup",function(){if(!bD.prop("required")){if(bD.val()!=""){bD.prop("required",true);
bD.addClass("maxRequired")
}}if((bD.hasClass("maxRequired"))&&(bD.val()=="")){bD.prop("required",false);
bD.removeClass("error");
bD.removeClass("maxRequired")
}});
bs();
U();
if(c(bw.billingStateDropDown).length){if(c("div.steps").length>0){var c0=(c('#montblanc .checkout input[name="timeoutduration"]').val())*60000,cY=setTimeout(cZ,c0);
function cZ(){cW()
}}function cW(){var c2=cG.split("/").slice(1)[0],c1={url:"/"+c2+"/shopping/fragments/checkout-timer.html",type:"GET",callback:function(c4){var c3=c(c4).find("#timeout-overlay"),c5=c3,c5=a.gdt.Utils.Template.render({data:c4,template:c5.html()});
N.addClass("country-select");
a.gdt.Lightbox.Open(c5)
}};
a.gdt.Utils.ajaxCall(c1)
}}c("#invoiceType-SDI, #invoiceType-PEC").change(function(){cE(this)
});
if(window.location.href.indexOf("order-confirmation")>-1||window.location.href.indexOf("home")>-1){localStorage.removeItem("SDIcomponent");
localStorage.removeItem("isPickUpSelected");
localStorage.removeItem("isBillingChecked");
localStorage.removeItem("efapiaocomponent")
}cA.on("keyup",function(c1){cB(this);
cg(this,7)
});
bD.on("keyup",function(c1){n(this)
});
aI.on("keyup",function(c1){G(this)
});
b6(cl);
b6(S);
cu.on("click",function(){co(this)
});
I();
if(cF.length>0){bA=c(bw.boutiqueInputs);
if(w=="true"){if(X.hasClass("show")){X.toggleClass("show")
}else{X.toggleClass("hide")
}bk(X);
bh.addClass("show");
cP.addClass("hide");
aN.addClass("hide");
cF.prop("checked",true);
v.addClass("hide");
bA.prop("disabled",false);
bs();
U();
c(".send-request").find(".form_button_submit").prop("disabled",false)
}}N.on("click",".checkout-accordion-heading",function(){cf(this)
});
v.removeClass("loader");
s.change(function(){cs(a9,this.value)
});
aE.on("keyup",a.gdt.debounce(cw,300));
if(c(".mtb-qrcode-container").length>0){if((a.gdt.isWEPAY_Upgraded=="false")||(a.gdt.isWEPAY_Upgraded==false)||(a.gdt.Browsersize.getCookie()==="desktop")){bc();
cJ();
c(".mtb-qrcode-container .btn-primary").on(bj,ax)
}else{bu()
}}}if(a2&&a2.indexOf("China")!==-1&&c('input[type="radio"]#shippingType-SHIPIT').is(":checked")){c(".send-request").find(".form_button_submit").prop("disabled",true)
}ab();
c("#fapiaoType-Individual, #fapiaoType-Company").change(function(){bE(this)
});
a4();
return{formValidate:aV,toggleShippingForm:aU,populateAddress:cs,disableBillingState:aX,opacityRadioButton:at,initBillPay:b8,submitForm:bg,validationError:bd,itFiscalValidate:bB}
};
a.gdt.Checkout=new b()
}(document,window,window.jQuery||window.Zepto));
(function(e,a,c){a.gdt=a.gdt||{};
a.gdt.Checkout=a.gdt.Checkout||{};
var b=function(){var A=c("body"),y=c('input[name="websiteCountryCode"]').val(),L=c("form"),q=c("#shipping"),d=(typeof window.ontouchstart==="undefined")?"click":"touchend",S=c("input[name=billingAddressSameAsShipping]"),I=c("input[name=paymentCode]"),C=c("input"),x=c('<span class="loader"></span>'),H=a.gdt.Utils.noWCM,h,r,o,O=c(".supportedbanks"),K=c(".CARD.supportedbanks"),M=K.find("label"),v=S.parent().next("fieldset"),j,N=c(".billing-details-jp"),g,l=c(".shipping-details-jp"),k,V=c("#jp-shipping"),w=V.find(".jp-shipping-provider-content"),p=c('form[name="confirm-registration"], form[name="confirm-add-address"], form[name="update-profile"], form[name="update-address"]');
c(".shipping-details-BTQP").hide();
c(".jp-cc-error").hide();
function t(){var W=V.find("input[name=shippingType]");
W.change(function(X){if(c(this).val()==="billingAddressSameAsShipping"||c(this).val()==="shipToAlternate"){c("#boutiques-scroll").addClass("hide");
c(".shipping-details-BTQP").hide();
c(".shipping-details-STDD").show();
c("#shipit-message").show();
if(c(this).val()==="shipToAlternate"){l.toggleClass("show",true)
}else{l.toggleClass("show",false)
}}else{c("#boutiques-scroll").removeClass("hide");
c(".shipping-details-BTQP").show();
c(".shipping-details-STDD").hide();
c("#shipit-message").hide();
c(".shipping-details-jp").removeClass("show")
}})
}function s(W){a.gdt.Validate.removeAllErrors();
if(!a.gdt.Validate.validateForm(L.attr("id"))){return
}if(!n(C)&&((v&&v.length>0||I.prop("checked")&&I.val().indexOf("CARD")!==-1)&&!a.gdt.Validate.validateForm(L.attr("id")))||(O.length&&!(O.hasClass("opacity"))&&!(a.gdt.Validate.validateForm(L.attr("id")))&&y.indexOf("Japan")===-1)){return false
}else{if(S.attr("checked")===true){a.gdt.Validate.removeAllErrors();
if(!(a.gdt.Validate.validateForm(q.attr("id")))){return false
}}}U(W)
}function D(X){var W=c(X.target)||c(X);
W.parent().next("fieldset").toggleClass("show hide")
}function n(W){var Y=false;
for(var X=W.length-1;
X>=0;
X--){if(W[X].id.indexOf("deliveryType")!==-1){Y=true
}}return Y
}function z(ai){var aj=(ai==="billing")?N:l,af=(ai==="billing"),ag=af?aj.find('[name="postalCode2"]'):aj.find('[name="shipping.postalCode2"]'),ac=af?aj.find('[name="postalCode"]'):aj.find('[name="shipping.postalCode"]'),ae=aj.find("input"),X=ae.filter('[name="'+ai+'.state"]'),Z=ae.filter('[name="'+ai+'.city"]'),aa=ae.filter('[name="'+ai+'.address"]'),ad=ae.filter('[name="'+ai+'.address2"]');
h=ac.val();
r=ag.val();
var Y="ja-jp/shopping/checkout.zipcode-address.json?zipCode=",ah=h,W=r,ab={url:Y+ah+"-"+W,type:"get",callback:function(al){var ak=c(al);
if(ak[0].address){X.val(ak[0].address.prefecture);
Z.val(ak[0].address.city);
aa.val(ak[0].address.town);
if(p.length){x.remove();
return
}if(af){V.removeClass("hide");
F()
}}else{a.gdt.Utils.Console.warn("Zipcode/Postcode does not exist.");
X.val("");
Z.val("");
aa.val("");
if(af){V.addClass("hide");
l.removeClass("show")
}}x.remove()
},error:function(am,ak,al){a.gdt.Utils.Console.warn("Cant post zip code to shipping html",ak+" ("+al+")");
a.gdt.Utils.Console.log("zipCodeRequest",am);
X.val("");
Z.val("");
aa.val("");
x.remove();
if(af){V.addClass("hide");
l.removeClass("show")
}}};
a.gdt.Utils.ajaxCall(ab)
}function F(){var aa=c("#shippingProvider"),X=V.data("href")+"?zip=",Y=N.find('[name="postalCode2"]').val(),ac=N.find('[name="postalCode"]').val(),W=ac,Z=Y;
V.addClass("loader");
V.removeClass("hide");
var ab={url:X+W+"-"+Z,type:"get",callback:function(ad){var ae=c(ad);
w.html(ae);
A.trigger("shippingLoaded");
V.removeClass("loader");
t();
V.find("input[name=shippingType]").filter(":checked").trigger("change")
},error:function(af,ad,ae){a.gdt.Utils.Console.warn("Cant post zip code to shipping html",ad+" ("+ae+")");
a.gdt.Utils.Console.log("zipCodeRequest",af)
}};
a.gdt.Utils.ajaxCall(ab)
}function T(){M.css("opacity",0.5)
}function f(X){X.stopImmediatePropagation();
var W=c(X.target).val();
c(".jp-cc-error").hide();
o="null";
if(W.length>2){W=W.replace(/[^\d]/g,"");
if(W.match("^4[0-9]{0,15}$")){o="VISA"
}else{if(W.match("^5$|^5[1-5][0-9]{0,14}$")){o="MAST"
}else{if(W.match("^3[47][0-9]{0,13}$")){o="AMEX"
}else{if(W.match("^3$|^3[068]$|^3(?:0[0-5]|[68][0-9])[0-9]{0,11}$")){o="DINE"
}else{if(W.match("^2[1]?$|^21[3]?$|^1[8]?$|^18[0]?$|^(?:2131|1800)[0-9]{0,11}$|^3[5]?$|^35[0-9]{0,14}$")){o="JCB"
}else{o="null"
}}}}}if(o==="null"){c(".jp-cc-error").show();
c(".form_button_submit").attr("disabled","disabled")
}else{c(".form_button_submit").removeAttr("disabled","disabled");
K.find("label."+o).css("opacity",1);
L.find('input[name="creditcard-type"]').val(o)
}}else{T()
}}if(y&&y.indexOf("Japan")!==-1&&H){S.prop("checked",false);
v.addClass("hide");
S.parent().show();
S.on(d,D);
if(N.length){g=N.find(".button");
g.on(d,function(W){W.preventDefault();
g.after(x);
z("billing")
});
if(N.find('[name="postalCode"]').val()!==""){F()
}k=l.find(".button");
k.on(d,function(W){W.preventDefault();
g.after(x);
z("shipping")
})
}if(p.length){N=p;
g=N.find("a.button");
g.off(d).on(d,function(W){W.preventDefault();
g.after(x);
z("billing")
})
}c(".ja_jp #user_payment #card-number").on("keydown change blur",f);
if(I.prop("checked")){T()
}I.on("change click",T);
L.on("submit",s)
}var B,m,R,J,Q,u,E=false;
j=c("#bluegateForm");
if(j.length){m=L.find("#card-number"),R=L.find("#card-expiration-month"),J=L.find("#card-expiration-year"),Q=L.find("#card-full-name"),u=L.find("#card-cvv");
window.addEventListener("message",G,false)
}function P(){B=j.contents();
B.find("#Bluegate_CreditCardNumber").val(m.val());
B.find("#Bluegate_CreditCardHolder").val(Q.val());
B.find("#Bluegate_Exp_Date").val(R.val()+""+J.val().substr(-2));
B.find("#Bluegate_CVV").val(u.val());
B.find("#Bluegate_CreditCardType").val(o)
}function U(X){if(E){return
}var W=(I.filter(":checked").val()==="CARD"&&j.length>0);
if(W&&!E){P();
B.find("form").submit();
if(X){X.preventDefault()
}}}function G(X){var W=JSON.parse(X.data);
E=true;
L.find("iframe").attr("disabled","disabled");
L.off("submit",s);
document.getElementById("card-number").disabled=true;
document.getElementById("tokenized_card").value=W.resultForm.cardPassword;
document.querySelector(".form_button_submit").click()
}return{blueGateResponse:G}
};
a.gdt.Checkout.Japan=new b()
}(document,window,window.jQuery||window.Zepto));
(function(e,a,b){a.gdt=a.gdt||{};
a.gdt.Checkout=a.gdt.Checkout||{};
var c=function(){var s=b('input[name="websiteCountryCode"]').val(),n=b("#user-checkout, #user_payment"),f=b(".payment-button"),v=b('input[name*="billingAddressSameAsShipping"]'),u=b("#ifrm"),m=b("#billing-details"),q=b("#shipping-details"),p=b("#shipping"),r=b(".shippingType"),j=b('input[name="paymentCode"]'),h,l;
function k(y){return y.replace(/\s/g,"")
}function o(){document.getElementById("card-number").value=k(document.getElementById("card-number").value);
h=a.gdt.Validate.CreditCards.creditCardName(document.getElementById("card-number").value);
l=h.value;
b("input[id="+d(h.value).toUpperCase()+"]").attr("checked",true);
u.contents().find("#Paymetric_CreditCardType").val(l);
u.contents().find("#Paymetric_CreditCardNumber").val(document.getElementById("card-number").value);
u.contents().find("#Paymetric_Exp_Month").val(document.getElementById("card-expiration-month").value);
u.contents().find("#Paymetric_Exp_Year").val(document.getElementById("card-expiration-year").value);
u.contents().find("#Paymetric_CVV").val(document.getElementById("card-cvv").value);
b("#sendCounter").val(parseInt(b("#sendCounter").val(),null)+1)
}function w(B,A,y){var z=B.indexOf(A);
if(z>0){z+=A.length;
if(B.indexOf(y.toLowerCase(),z)>z){return B.substring(z,B.indexOf(y.toLowerCase(),z))
}else{if(B.indexOf(y.toUpperCase(),z)>z){return B.substring(z,B.indexOf(y.toUpperCase(),z))
}}}return""
}function d(y){if(y==="4000"){return"visa"
}if(y==="6000"){return"disc"
}if(y==="5000"){return"mast"
}if(y==="3000"){return"amex"
}}function t(){if(b("#sendCounter").val()>0){var B=document.getElementById("ifrm").contentWindow.document.documentElement.innerHTML;
var y="Credit Card Type From Drop Down: ";
var A="Response Token: ";
var D="Expiration Month: ";
var E="Expiration Year: ";
var z="<br";
h=a.gdt.Validate.CreditCards.creditCardName(document.getElementById("card-number").value);
l=h.value;
document.getElementById("parsepaymreqdata[0]").value="true";
document.getElementById("paytypekey[0]").value="paytype1";
document.getElementById("paytype[0]").value="3";
document.getElementById("nolog_cardtype[0]").value=w(B,y,z);
document.getElementById("nolog_cardno[0]").value=w(B,A,z);
document.getElementById("nolog_cardholder[0]").value="{dynamic from server}";
document.getElementById("nolog_cardmonth[0]").value=w(B,D,z);
document.getElementById("nolog_cardyear[0]").value=w(B,E,z);
document.getElementById("cc_bin").value=document.getElementById("card-number").value.substring(0,6);
document.getElementById("ECO_CreditCardText").value=l;
if(b.trim(document.getElementById("nolog_cardtype[0]").value).length>0){d(document.getElementById("nolog_cardtype[0]").value);
if(l===document.getElementById("nolog_cardtype[0]").value){document.getElementById("nolog_cardtype[0]").value=d(document.getElementById("nolog_cardtype[0]").value);
document.getElementById("card-number").disabled=true;
document.getElementById("user_payment").submit()
}}}else{if(b("#ifrm").contents().find("body").text().indexOf("Status")!==-1){var C=document.getElementById("ifrm");
C.src=C.src
}}}function g(){if(!a.gdt.Validate.validateForm(n.attr("id"))){return false
}else{f.addClass("mb-loader").prop("disabled",true);
var y=b("input[name=paymentCode]:checked").val();
if(y==="CARD"){o();
b("#sendCounter").val(parseInt(b("#sendCounter").val(),null)+1);
b("#PayNowButton",document.getElementById("ifrm").contentWindow.document).click()
}else{document.getElementById("user_payment").submit()
}}}function x(A){var y=b(A.target),z=b('#user-checkout select[name="billing.country"]');
if(y.val().indexOf("BTQP")!==-1){a.gdt.Checkout.opacityRadioButton(y);
a.gdt.Validate.removeAllErrors();
m.addClass("show");
q.addClass("hide");
a.gdt.Checkout.disableBillingState(z);
p.addClass("hide")
}else{a.gdt.Validate.removeAllErrors();
a.gdt.Checkout.opacityRadioButton(y);
if(localStorage.getItem("showBillingAddress")){m.addClass("show");
v.prop("checked",false)
}else{m.removeClass("show");
v.prop("checked",true)
}q.removeClass("hide");
a.gdt.Checkout.disableBillingState(z);
p.removeClass("hide")
}}if(s&&(s.indexOf("United States of America")!==-1||s.indexOf("Canada")!==-1)){if(b('input[id="PayNowButton"]')){b('input[id="PayNowButton"]').hide()
}f.removeClass("mb-loader").prop("disabled",false);
b("#ifrm").on("load",t);
b(".payment-button").on("click",g);
a.gdt.Checkout.opacityRadioButton(r.find("input:checked"));
r.find("input").on("click",x)
}};
a.gdt.Checkout.US=new c()
}(document,window,window.jQuery||window.Zepto));
(function(c,a,b){a.gdt=a.gdt||{};
a.gdt.Registerform=a.gdt.Registerform||{};
var e=function(){var l,m,k=b('input[name="websiteCountryCode"]').val(),d=b('form[name="registration"]'),o=b('form[name="user_summary"]'),g=b('input[name="agreeall"]'),f='.korea-form-checkbox input[type="checkbox"]',h=b(f).length;
function j(){m=l.find('input[type="checkbox"]');
m.on("change",function(){if(b(this).attr("name")==="agreeall"){b(f).prop("checked",b(this).is(":checked"))
}else{if(b(f+":checked").length===h){g.prop("checked",true)
}else{g.prop("checked",false)
}}})
}function n(){if(k&&k.indexOf("Korea")!==-1&&(d.length>0||o.length>0)){l=d.length?d:o.length?o:"";
j()
}}return n()
};
a.gdt.Registerform.KR=new e()
}(document,window,window.jQuery||window.Zepto));
(function(e,a,c){var b=function(){var k=(typeof window.ontouchstart==="undefined")?"click":"touchend",j,K,J=c('input[name="websiteCountryCode"]').val(),X,P,m,U,f,x,G,A,aj,ai,h,n,q,I,V,L=c('.zip-address-wrapper input[name="shipping.streetname"]'),R=c('.zip-address-wrapper input[name="shipping.zipcode"]'),y=c('.zip-address-wrapper input[name="billing.streetname"]'),ae=c('.zip-address-wrapper input[name="billing.zipcode"]'),am=c(".zip-address-wrapper .shipping-old-addr"),p=c(".zip-address-wrapper .billing-old-addr"),l,E,Z,ah=".lightbox-feature-open",ar,F=false,O,N=c("body"),D=c("#lightboxPanel"),af=c('input[name="paymentCode"]'),z="payment-hidden-field",T=c(".paymentHiddenWrapper"),v=c("#order-information"),S,M,W,ac,ad=c(".korea-payment-options").data("payment-json"),t,o='<li class="address-item"><span class="marker"></span><div class="address-text">{{=it.address.zip}} {{=it.address.address5}}</div></li>',u='<li class="address-item"><span class="marker"></span><div class="address-text">{{=it.address.zip}} {{=it.address.address4}}</div></li>',al=doT.template(o),B=doT.template(u);
function w(at){at.tinyscrollbar_update()
}function ab(at){if(at.data("addressScrollInit")){w(at)
}if(at.length&&!at.data("addressScrollInit")){at.addClass("scrollbar-added").tinyscrollbar().data("addressScrollInit",true)
}}function d(){I.empty()
}function an(){aj.val("");
ai.val("");
h.val("");
G.prop("selectedIndex",0);
A.prop("selectedIndex",0);
A.find("option").slice(1).remove();
q.find("input,select").removeClass("error");
O.hide()
}function ao(au){var at=c(au.target);
M=(at.val().indexOf("addressold")!==-1);
W=(at.val().indexOf("addressnew")!==-1);
P.toggleClass("hide",M);
m.toggleClass("hide",M);
U.toggleClass("old-address",M);
x.toggleClass("hide",M);
f.toggleClass("hide",W);
l.toggleClass("hide",M);
E.toggleClass("show",M);
if(M){ai.prop("disabled",false);
h.prop("disabled",true)
}else{ai.prop("disabled",true);
h.prop("disabled",false)
}Z.hide();
an();
X.removeClass("scrollbar-added");
if(I.children("li").length){d();
ab(X)
}}function aa(at){if(M){c.each(at,function(au,av){if(av.address.zip&&av.address.address4){I.append(B(av))
}})
}else{c.each(at,function(au,av){if(av.address.zip&&av.address.address5){I.append(al(av))
}})
}}function C(){q.find("input,select").removeClass("error")
}function g(aw){var at=true;
for(var au=0;
au<aw.length;
au++){var av=c(aw[au]);
if(!av.prop("disabled")){if(!c(aw[au])[0].value){av.addClass("error");
at=false
}}}return at
}function Y(az){az.preventDefault();
var ax=c("input[name='addressType']:checked").val(),aA=(ax.indexOf("addressold")!==-1),aE=(ax.indexOf("addressnew")!==-1);
if(aA){aj=c('[name="addNewbilling.street.old"]')
}else{if(aE){aj=c('[name="addNewbilling.street.new"]')
}}var aw=q.attr("data-address-list-href"),at=aj[0].value?aj[0].value:"",aB=G[0].value?G[0].value:"",aC=A[0].value?A[0].value:"",au=false,ay,aD=q.find("input,select");
C();
if(K.filter(":checked").val().indexOf("addressold")!==-1){au=g(aj);
ay=au?{address:at,oldnew:"addressold",_charset_:"UTF-8"}:""
}else{au=g(aD);
ay=au?{address:aB+" "+aC+" "+at,_charset_:"UTF-8"}:""
}var av={url:aw,data:ay,type:"GET",callback:function(aF){if(aF.length){O.hide();
S=aF;
aa(S);
Z.show()
}else{O.show();
Z.hide()
}ab(X);
V.removeClass("loader")
},error:function(){return
}};
if(au){d();
X.addClass("scrollbar-added");
V.addClass("loader");
a.gdt.Utils.ajaxCall(av)
}}function ag(av){var au=av.target,at=au.value,aw=t[at];
A.find("option").slice(1).remove();
if(t&&aw){c.each(aw,function(ax,ay){A.append(c("<option></option>").attr("value",ay).text(ay))
})
}}function r(at){c(this).siblings().removeClass("selected-addr");
c(this).addClass("selected-addr");
F=true
}function Q(){if(F){var at=c(".selected-addr").index();
if(ar==="shipping"){R.prop("value",S[at].address.zip);
L.prop("value",S[at].address.address5);
am.html(S[at].address.address4)
}else{ae.prop("value",S[at].address.zip);
y.prop("value",S[at].address.address5);
p.html(S[at].address.address4)
}a.gdt.Lightbox.Close()
}else{return false
}}function aq(){j=c(".addressType");
K=j.find('[name="addressType"]');
X=c("#address-list-scroll");
P=c(".address-type-city");
m=c(".address-type-district");
U=c(".address-type-street");
f=c(".address-type-street-old");
x=c(".address-type-street-new");
G=c(".address-type-city select");
A=c('[name="addNewbilling.district"]');
ai=c('[name="addNewbilling.street.old"]');
h=c('[name="addNewbilling.street.new"]');
n=c(".kr-fetch-address");
q=c(".address-fields-wrapper");
I=c(".address-list-wrapper ul");
V=c(".address-list-wrapper .viewport");
O=c(".no-address-result");
l=c(".new-address-label");
E=c(".old-address-label");
Z=c(".addr-submit");
t=c(".address-fields-wrapper").data("cities-districts")
}function H(){var ay=ad.length,at=[];
c("."+z).remove();
for(var aw=0;
aw<ay;
aw++){if(ac===ad[aw].radio_option){at=ad[aw].options
}}var av=at.length;
for(var au=0;
au<av;
au++){var ax='<input class="'+z+'" type="hidden" name="'+at[au].name+'" value="'+at[au].value+'"/>';
c(ax).appendTo(T)
}}function s(){ac=af.filter(":checked").val();
af.on("change",function(){ac=c(this).val();
H()
})
}function ap(){var at=c("input[name='addressType']:checked").val(),au=(at.indexOf("addressold")!==-1),av=(at.indexOf("addressnew")!==-1);
x.toggleClass("hide",au);
f.toggleClass("hide",av);
if(M){ai.prop("disabled",false);
h.prop("disabled",true);
G.on("change",function(){h.prop("disabled",false)
})
}else{ai.prop("disabled",true);
h.prop("disabled",false)
}}function ak(){var at,au=false;
if(J&&J.indexOf("Korea")!==-1){if(v.length){v.attr("action",v.attr("action").replace("/j_security_check",""))
}if(c("#user_payment").length){s();
c(".payment-button").on("click",function(){at=document.body&&document.body.clientWidth?document.body.clientWidth:1024;
if(at<=1024){c.cookie("device","mobile",{path:"/",domain:a.gdt.domainName})
}else{au=true
}if(ac!=="BTRF"&&au&&typeof a.jsf__pay==="function"){a.jsf__pay(this.form)
}else{document.getElementById("user_payment").submit()
}});
af.removeAttr("disabled")
}}N.on(k,ah,function(aw){aw.preventDefault();
var av=c(this).attr("href"),ay={},ax=av.indexOf("register")!==-1?"register":av.indexOf("checkout")!==-1?"checkout":"";
if(c(this).hasClass("find-address-cta")){D.addClass("kr-address-modal");
if(ax==="register"){ay.event="virtualPageview"
}else{if(ax==="checkout"){ay.event="virtualPageview"
}}}else{D.removeClass("kr-address-modal")
}F=false;
if(J&&J.indexOf("Korea")!==-1){ar=c(this).data("address-type")||""
}c("body").trigger("addressSearchModalOpen",ay)
});
N.on(k,".addr-submit",Q);
N.on("lightboxContentLoaded",function(){if(J&&J.indexOf("Korea")!==-1){aq();
I.on(k,"li",r);
K.on("change",ao);
n.on(k,Y);
G.on("change",ag);
ap()
}})
}ak()
};
b()
}(document,window,window.jQuery||window.Zepto));
(function(e,a,c){a.gdt=a.gdt||{};
a.gdt.BasketAndWishlist=a.gdt.BasketAndWishlist||{};
var b=function(){var o=(typeof window.ontouchstart==="undefined")?"click":"touchend",H=".lightbox-feature-open",z=c(".paypal-basket"),j=z.find(".country-selector").find('select[name="shipping.country"]').prop("selectedIndex",1),d=z.find(".paypal-promotion-country-comp"),G=z.find(".delivery-selector"),q=z.find("#delivery-options"),B=z.find(".free-shipping-message"),g=z.find(".basket-total-Value").find("output"),p=z.find("#basket-total").find("output"),l=z.find(".product-list-cta.down").find(".paypal-checkout"),C=z.find(".paypal-express-checkout"),v=z.find(".giftwrap-checkbox input"),f=z.find("#paypal-redirect"),A=z.find("li.cta-next"),J=A.find("a.btn-primary"),w=z.find(".product-list-cta.down").find(".icon-paypal"),r=z.data("giftwrapurl"),m=z.data("paypalavailableurl"),y=z.data("deliveryopturl"),x="",F=e.body&&e.body.clientWidth?e.body.clientWidth:1024,D;
function n(K){K.addClass("error")
}function t(K){K.removeClass("error")
}function s(){f.submit()
}function E(){var K=c(this).data("index"),L=this.checked,M={url:r+L+"&cartindex="+K,type:"GET",callback:function(N){console.log(N)
},error:function(N){console.log(N);
return
}};
a.gdt.Utils.ajaxCall(M)
}function k(L){var Q=L.totalPrice,P=L.subTotalPrice;
if(L.payPalExpressParams===null){C.addClass("hide");
J.removeClass("cta-next-inactiveLink");
localStorage.setItem("isPickUpSelected","true")
}else{if(L.payPalExpressParams.code==="EPAL"){if(C.hasClass("hide")){C.removeClass("hide")
}localStorage.setItem("isPickUpSelected","false");
var N=L.payPalExpressParams.form.parameters,O="";
f.empty();
f.attr("action",L.payPalExpressParams.form.form[0]["value"]);
for(var M=0,K=N.length;
M<K;
M++){O+='<input type="hidden" name="'+N[M]["name"]+'" value="'+N[M]["value"]+'" />'
}f.append(O);
x="action="+L.payPalExpressParams.form.form[0]["value"]+"&";
C.addClass("enabled");
J.removeClass("cta-next-inactiveLink")
}}p.html(P);
g.html(Q);
D.prop("disabled",false)
}function u(P){if(D.hasClass("error")){t(D)
}C.addClass("disabled");
J.addClass("cta-next-inactiveLink");
c('.delivery-name input[type="radio"]:not(:checked)').prop("disabled",true);
x="";
var L=c(P.currentTarget||P.target),O=L.val(),M=L.data("deliverypriceincludingtax"),R=L.data("expecteddeliverydate"),N=L.data("deliverytaxvalue"),K=m+O+"&deliveryPriceIncludingTax="+M+"&expectedDeliveryDate="+R+"&deliveryTaxValue="+N,Q={url:K,type:"GET",callback:k,error:function(){return
}};
if(O!="STDD"){B.addClass("hide")
}else{B.removeClass("hide")
}a.gdt.Utils.ajaxCall(Q)
}function I(L){var N="",O=c("input[name=globaleCheckoutEnabled]").val();
if(L!==undefined){var M=typeof(L)==="object"?c(L.target).val():L;
N=y+M
}else{N=y+z.attr("data-checkout-country")
}if(j.hasClass("error")){t(j)
}q.find("ul").empty();
q.addClass("loader");
G.removeClass("hide").addClass("show");
var K={url:N,type:"GET",callback:function(Q){if(Q===null){G.removeClass("show").addClass("hide");
C.addClass("hide")
}else{var P="";
c.each(Q,function(R){P+='<li class=""><div class="delivery-name"><input type="radio" id="deliveryType-'+Q[R].chargeCode+'" name="deliveryType" data-deliveryPriceIncludingTax="'+Q[R].deliveryPriceIncludingTax+'" data-expectedDeliveryDate="'+Q[R].expectedDeliveryDate+'" data-deliveryTaxValue="'+Q[R].deliveryTaxValue+'" value="'+Q[R].chargeCode+'"><span class="radio"></span>'+Q[R].chargeDescription+'<span class="shipping-detail">'+Q[R].formattedPrice+"</span></div></li>"
});
q.find("ul").html(P);
D=c(".delivery-name").find('input[type="radio"]');
D.on("click",u);
G.removeClass("hide").addClass("show");
if(C.hasClass("hide")){C.removeClass("hide")
}}q.removeClass("loader")
},error:function(Q,P){a.gdt.Utils.Console.warn(P);
a.gdt.Utils.Console.log("delOptions",Q)
}};
if(O==="false"){a.gdt.Utils.ajaxCall(K)
}}function h(L){L.preventDefault();
var K=j.prop("selectedIndex");
if(K>0||K==undefined){var M=G.find(".delivery-name").find('input[type="radio"]:checked').val();
if(M!==undefined){if(x!==""){s()
}}else{n(D)
}}else{n(j)
}}c("body").on(o,H,function(K){K.preventDefault();
if(c(this).hasClass("personalisation-overlay")){c("#lightboxPanel").addClass("paypal-personalisation-overlay")
}else{c("#lightboxPanel").removeClass("paypal-personalisation-overlay")
}});
if(j.length>0){j.on("change",I);
if(j.val()!==""){I(j.val())
}}else{if(z.length>0){I()
}}C.on("click",h);
v.on("change",E);
if(F<=767){d.find(".shopping-bag-promotion").find(".montblanc-accordion").accordion()
}return{getDeliveryOptions:I,processCheckout:h}
};
a.gdt.BasketAndWishlist.PaypalBasket=new b()
}(document,window,window.jQuery||window.Zepto));
(function(e,a,c){a.gdt=a.gdt||{};
a.gdt.Registerform=a.gdt.Registerform||{};
var b=function(){var j=c("#tcnRegistration_country, #update-profile-info_country, #tcnNewsletter_country"),g=c("#HK-registration"),f=c("#TW-registration");
function d(){var k=j.val();
if(k==="HK"){g.show();
f.hide();
c("#HK-registration input").each(function(l){this.disabled=false
});
c("#TW-registration input").each(function(l){this.disabled=true
})
}else{if(k==="TW"){f.show();
g.hide();
c("#TW-registration input").each(function(l){this.disabled=false
});
c("#HK-registration input").each(function(l){this.disabled=true
})
}}}function h(){if(f.length>0){f.hide()
}j.on("change",d)
}return h()
};
a.gdt.Registerform.TCN=new b()
}(document,window,window.jQuery||window.Zepto));
(function(e,a,b){function c(){b("textarea").each(function(f,d){var g=b(d);
if(g.val()===g.attr("placeholder")){g.val("")
}})
}b("body").on("lightboxContentLoaded",function(){c()
});
c()
}(document,window,window.jQuery||window.Zepto));
(function(c,j,b){var k=b("form"),a=b("label.checkboxLabel"),h=b(".tablet-search .search-form label"),g=b(".tablet-search .search-form .search-results"),f=b(".mobile-search .search-form label"),e=b(".mobile-search .search-form .search-results");
k.each(function(l,m){var d=b(m);
d.attr("title",d.find(".formTitle").val())
});
a.parent("div.checkbox").prev("label.fieldLabel").remove();
h.attr("for","tab-q");
g.attr("id","tab-q");
f.attr("for","mob-q");
e.attr("id","mob-q")
}(document,window,window.jQuery||window.Zepto));
(function(D,o,f){var l=(typeof o.ontouchstart==="undefined")?"click":"touchend",u=f("body"),v=f("html"),B=f(".product-carousel"),p=u.find(".concierge").find("a"),I=f(".product-carousel .slide"),n=f(".footer-wrapper .footer-col"),k=f("form"),y=o.navigator.userAgent,m=y.indexOf("MSIE ");
u.on(l,".icon-print",function(d){d.preventDefault();
if(o.print){o.print();
u.trigger("print:product")
}});
u.on(l,'a[target="_blank"]',function(d){d.preventDefault();
o.open(f(this).attr("href"))
});
n.on(l,'a[href="#"]',function(d){d.preventDefault()
});
f(".slow.gallery").akcarousel({horizontal:true,scrollSpeed:1000,lockscroll:false,navarrows:true,hero:true,callback:function(d){var w=f(this.node).parent().find(".desktop.slidenavigation");
w.akcarousel("move",d)
}});
f(".slideshow .desktop.slidenavigation").akcarousel({horizontal:true,delay:5000,scrollSpeed:500,scrollNode:true,interruptionDelay:10000,skipbounds:true,lockscroll:true,tapnavigation:true,variablesizeslides:true,navarrows:true,callback:function(d){f(this.node).parent().find(".gallery").akcarousel("move",d)
}});
f(".mediagallery .product-gallery-container .scrollContainer").akcarousel({horizontal:true,delay:5000,scrollSpeed:500,scrollNode:true,interruptionDelay:10000,skipbounds:true,lockscroll:true,tapnavigation:true,variablesizeslides:true,navarrows:true,callback:function(d){var w=f(".product-gallery-container .desktop.slidenavigation").find(".slide").length-1;
f(this.node).parent().parent().find(".product-gallery.gallery").akcarousel("move",d);
if(d===0){f(this.node).find(".icon-gallery-left").addClass("off")
}else{f(this.node).find(".icon-gallery-left").removeClass("off")
}if(d===w){f(this.node).find(".icon-gallery-right").addClass("off")
}else{f(this.node).find(".icon-gallery-right").removeClass("off")
}}});
f("#content .product-gallery-container .scrollContainer").akcarousel({horizontal:true,delay:5000,scrollSpeed:500,scrollNode:true,interruptionDelay:10000,skipbounds:true,lockscroll:true,tapnavigation:true,variablesizeslides:true,navarrows:true,callback:function(d){f(this.node).parent().parent().find(".product-gallery.gallery").akcarousel("move",d)
}});
f(".product-gallery.gallery").akcarousel({horizontal:true,delay:5000,scrollSpeed:500,scrollNode:true,interruptionDelay:10000,navarrows:true,callback:function(d){f(".product-gallery-container .scrollContainer").akcarousel("move",d)
}});
function H(){f(".productsVariationsPanel.gallery").akcarousel({horizontal:true,delay:5000,scrollSpeed:500,scrollNode:true,interruptionDelay:10000,navarrows:true,singleSlide:true,callback:function(){f(".productsVariationsPanel").akscroller("position")
}})
}H();
f(".history .gallery").akcarousel({horizontal:true,scrollSpeed:1000,lockscroll:false,navarrows:true,callback:function(d){f(".history .tablet.slidenavigation").akcarousel("move",d)
}});
f(".history .tablet.slidenavigation").akcarousel({horizontal:true,delay:5000,scrollSpeed:500,scrollNode:true,interruptionDelay:10000,skipbounds:true,lockscroll:true,tapnavigation:true,variablesizeslides:true,callback:function(d){f(".gallery").akcarousel("move",d)
}});
function C(d){o.trackingObject.event="carouselInteraction";
o.trackingObject.pageSection="Homepage Teaser";
o.trackingObject.carouselSlideNumber=d++;
o.gdt.Tracking.MTBtracking.pushToDataLayer(o.trackingObject)
}if(B.length>0&&I.length>1){B.akcarousel({horizontal:true,delay:10000,scrollSpeed:500,scrollNode:true,navarrows:true,autoSwitch:true,interruptionDelay:3000,callback:function(d){h();
B.akcarousel("move",d);
C(d)
}});
var r=f(".product-carousel").find("a.icon-gallery-left");
var c=f(".product-carousel").find("a.icon-gallery-right");
f(r).addClass("carousel-arrow left");
f(c).addClass("carousel-arrow right");
h();
t()
}function t(){f(".product-carousel").find(".pager").children().each(function(){f(this).html("<span></span>")
})
}function h(){if(f(".slide.promo-light").hasClass("active")){f(r).css("border-color","#000");
f(c).css("border-color","#000")
}else{if(f(".slide.promo-dark").hasClass("active")){f(r).css("border-color","#fff");
f(c).css("border-color","#fff")
}}}f(".arts-and-culture .montblanc-accordion").accordion();
f(".category-products .montblanc-accordion").accordion();
f(".product-detail .montblanc-accordion").accordion();
f(".checkout-coupon .montblanc-accordion").accordion();
f(".sub-nav .montblanc-accordion").accordion();
f(".contact").accordion();
f(".shipping-basket").accordion();
f(".paypal-basket .montblanc-accordion").accordion();
f(".bookmark").bookmark();
f(".product-preview").backgroundSwap();
f(".icon-share").toggleNext();
f(".slideshow").append(f(".gallery").find(".hero"));
var b;
f(o).smartresize(function(){if(b){o.clearTimeout(b)
}b=o.setTimeout(o.srcset,50)
});
u.on("lightboxContentLoaded",function(w,d){o.srcset();
if(d){o.gdt.Lightbox.MediaGallery.init();
o.gdt.ContentGallery.contentGallery();
f("#lightbox-content .montblanc-accordion:not(.enhance)").accordion();
f("#engraving").engraving()
}if(f("#embossing").length){f("#embossing").embossing()
}});
function F(){o.srcset();
H()
}u.on("RecentlyViewd",F);
u.on("lightboxContentLoaded",function(){if(f(".mediaImage").hasClass("video")){f("body").trigger("startVideo",o.gdt.Utils.Video.setUpLightboxVideo())
}});
function e(){if(u.hasClass("media-gallery")&&u.find(".video").length>=1){o.gdt.Utils.Video.destroyLightboxVideo()
}}u.on("lightboxClose",e);
if(o.gdt.submitButtonText){f(".form_button_submit").val(o.gdt.submitButtonText)
}if(o.gdt.Utils.Browser.isOldIE&&f("input, textarea")){f(function(){f("input, textarea").placeholder()
})
}if(o.gdt.Utils.Browser.isiOS7iPhone){f("html").addClass("ios7iPhone")
}f("#recaptcha_response_field").blur(function(){var d=f(this);
if(d.val().length>0){d.removeClass("error")
}});
k.on("submit",function(J){var w=f(J.target).find("input.recaptchaTextbox, .mtb-mollom-capatcha-wrapper #captcha");
if(w.length===1){var d=f.trim(w.val());
if(d.length){w.removeClass("error")
}else{w.addClass("error");
J.preventDefault()
}}});
if(!o.gdt.Utils.Browser.isMobile){f(".pages").akpagescroll({pagination:f(".webspecials-nav"),speed:1500,pageName:".page"})
}if(f(".icon-video-play-circle")){o.gdt.Lightbox.MediaGallery.init()
}if(o.gdt.Utils.Browser.isiPad){o.gdt.Utils.Video.removeControlsIpad()
}function a(){if(p.parents("nav").hasClass("subnavigation")){o.gdt.nav.closeMobileNav()
}}if(p){p.attr("data-overlay","contact-concierge");
p.on(l,a)
}var q=f(".category-landing").length,A=f(".arts-and-culture").length,E=f(".breadcrumbnav").length,x=f(".product-promo").length,j=f(".category-landing .category-cta .promo-cta-text span.icon-link");
if((q>0)&&(E>0)&&(x>0)){f(".product-promo").addClass("breadcrumb")
}if(j.is(":empty")){j.hide()
}if((A>0)&&(E>0)){f(".arts-and-culture").addClass("breadcrumbvis")
}if(v.hasClass("ie8")){var g=document.getElementsByTagName("head")[0],z=document.createElement("style");
z.type="text/css";
z.styleSheet.cssText=":before,:after{content:none !important";
g.appendChild(z);
setTimeout(function(){g.removeChild(z)
},0)
}if(o.gdt.Utils.Browser.isAndroidPad){f("html").addClass("androidNotMob")
}if(o.gdt.Utils.Browser.isMobile){var s=f(".video-js");
s.each(function(d,J){var w=videojs(J),K;
w.on("click",function(M){var L=M.target;
K=L.paused?L.play():L.pause()
})
});
var G=f(".product-detail .montblanc-accordion");
if(G.length){G.find("h2").click();
u.scrollTop(0)
}}if(m>0||y.match(/Trident.*rv\:11\./)){f("html").addClass("ie")
}o.gdt.Tracking.MTBtracking.pushToDataLayerFromLastPage()
}(document,window,window.jQuery||window.Zepto));
(function(e,b,c){b.gdt=b.gdt||{};
b.gdt.campaign=b.gdt.campaign||{};
var a=function(){var n=(typeof window.ontouchstart==="undefined")?"click":"touchend",A={ID_FILTER_KEY:"campaignFilterCategoryKey",ID_COLLECTION_KEY:"campaignCollectionCategoryKey",ID_FILTER_TEXT:"campaignFilterCategoryName",CLASS_ACTIVE_FILTER:"mtb-campaign-filter-active",CLASS_FILTERED:"mtb-filtered-product",CLASS_HIDE:"hide",CLASS_FILTER_CLOSED:"mtb-campaign-filter-narrow-closed",UNICEF_CONTAINER:".mtb-unicef-campaign-collection",COLLECTION_LIST:".mtb-campaign-collection-list",COLLECTION_ITEM:".mtb-campaign-collection-item",COLLECTION_NO_RESULTS:".mtb-campaign-collection-no-results",FILTER_LIST:".mtb-campaign-filter-list",FILTER_ITEM:".mtb-campaign-filter-item",FILTER_LINK:".mtb-campaign-filter-link",FILTER_TEXT_CONTAINER:".mtb-campaign-filter-text",FILTER_TEXT_NARROW:".mtb-campaign-filter-text .filter-title",LOAD_MORE_BUTTON:".load-more"},k=8,E,D,y,o,B,v,s,u,H,d,m,G,l,q,r,z,g;
function F(){if(u.length){G=u.filter(function(){return c(this).hasClass(A.CLASS_ACTIVE_FILTER)
});
l=G.find(A.FILTER_LINK);
return l.data(A.ID_FILTER_KEY).trim()
}}function p(J,K){var I;
I=J.filter(function(){return c(this).data(A.ID_COLLECTION_KEY).trim()===K
});
return I
}function h(J){var I=false;
if(J.screenX&&J.screenX!==0&&J.screenY&&J.screenY!==0){I=true
}return I
}function t(J){var I=o.length;
return J.slice(I,I+k)
}function x(){var I;
B=y.filter("."+A.CLASS_HIDE);
o=y.not(B);
I=t(y);
I.removeClass(A.CLASS_HIDE);
B=y.filter("."+A.CLASS_HIDE);
o=y.not(B);
z.toggleClass(A.CLASS_HIDE,y.length);
g.toggleClass(A.CLASS_HIDE,!B.length)
}function j(J,I){l=c(J.target);
l.parent().addClass(A.CLASS_ACTIVE_FILTER).siblings().removeClass(A.CLASS_ACTIVE_FILTER);
E=F();
d.text(l.data(A.ID_FILTER_TEXT).trim());
s.addClass(A.CLASS_FILTER_CLOSED);
if(E!==D){y=p(r,E)
}else{y=r
}r.removeClass(A.CLASS_FILTERED).addClass(A.CLASS_HIDE);
y.addClass(A.CLASS_FILTERED);
x()
}function w(){s=v.find(A.FILTER_LIST);
u=s.find(A.FILTER_ITEM);
H=u.find(A.FILTER_LINK);
d=s.find(A.FILTER_TEXT_NARROW);
m=s.find(A.FILTER_TEXT_CONTAINER);
q=v.find(A.COLLECTION_LIST);
r=q.find(A.COLLECTION_ITEM);
z=q.find(A.COLLECTION_NO_RESULTS);
g=v.find(A.LOAD_MORE_BUTTON);
E=F();
if(u.length){D=u.first().find(A.FILTER_LINK).data(A.ID_FILTER_KEY).trim()
}}function f(){H.on(n,function(I){I.preventDefault();
j(I,h(I))
});
g.on(n,function(I){I.preventDefault();
x()
});
m.on(n,function(I){I.preventDefault();
c(this).parent().toggleClass(A.CLASS_FILTER_CLOSED)
})
}function C(){v=c(A.UNICEF_CONTAINER);
if(!v.length&&!v.children().length){return
}w();
f();
if(typeof l!=="undefined"){l.trigger(n)
}}C();
return{init:C}
};
b.gdt.campaign.Unicef=new a()
}(document,window,window.jQuery||window.Zepto));
var mb=mb||{};
mb.comp=mb.comp||{};
mb.util=mb.util||{};
(function(){mb.$=window.$.noConflict(true)
})();
!function(b){"function"==typeof define&&define.amd?define(["$"],b):"undefined"!=typeof exports?module.exports=b(require("$")):b(mb.$)
}(function(d){var c=window.Slick||{};
c=function(){function e(j,h){var b,g=this;
g.defaults={accessibility:!0,adaptiveHeight:!1,appendArrows:d(j),appendDots:d(j),arrows:!0,asNavFor:null,prevArrow:'<button type="button" data-role="none" class="slick-prev mb-slick-prev" aria-label="Previous" tabindex="0"><span class="mb-accessible-text">Previous</span></button>',nextArrow:'<button type="button" data-role="none" class="slick-next mb-slick-next" aria-label="Next" tabindex="0"><span class="mb-accessible-text">Next</span></button>',autoplay:!1,autoplaySpeed:3000,centerMode:!1,centerPadding:"50px",cssEase:"ease",customPaging:function(f,k){return d('<button type="button" data-role="none" class="mb-slick-button" role="button" tabindex="0" />').text(k+1)
},dots:!1,dotsClass:"slick-dots mb-slick-dots",draggable:!0,easing:"linear",edgeFriction:0.35,fade:!1,focusOnSelect:!1,infinite:!0,initialSlide:0,lazyLoad:"ondemand",mobileFirst:!1,pauseOnHover:!0,pauseOnFocus:!0,pauseOnDotsHover:!1,respondTo:"window",responsive:null,rows:1,rtl:!1,slide:"",slidesPerRow:1,slidesToShow:1,slidesToScroll:1,speed:500,swipe:!0,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,verticalSwiping:!1,waitForAnimate:!0,zIndex:1000},g.initials={animating:!1,dragging:!1,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:!1,slideOffset:0,swipeLeft:null,$list:null,touchObject:{},transformsEnabled:!1,unslicked:!1},d.extend(g,g.initials),g.activeBreakpoint=null,g.animType=null,g.animProp=null,g.breakpoints=[],g.breakpointSettings=[],g.cssTransitions=!1,g.focussed=!1,g.interrupted=!1,g.hidden="hidden",g.paused=!0,g.positionProp=null,g.respondTo=null,g.rowCount=1,g.shouldClick=!0,g.$slider=d(j),g.$slidesCache=null,g.transformType=null,g.transitionType=null,g.visibilityChange="visibilitychange",g.windowWidth=0,g.windowTimer=null,b=d(j).data("slick")||{},g.options=d.extend({},g.defaults,h,b),g.currentSlide=g.options.initialSlide,g.originalSettings=g.options,"undefined"!=typeof document.mozHidden?(g.hidden="mozHidden",g.visibilityChange="mozvisibilitychange"):"undefined"!=typeof document.webkitHidden&&(g.hidden="webkitHidden",g.visibilityChange="webkitvisibilitychange"),g.autoPlay=d.proxy(g.autoPlay,g),g.autoPlayClear=d.proxy(g.autoPlayClear,g),g.autoPlayIterator=d.proxy(g.autoPlayIterator,g),g.changeSlide=d.proxy(g.changeSlide,g),g.clickHandler=d.proxy(g.clickHandler,g),g.selectHandler=d.proxy(g.selectHandler,g),g.setPosition=d.proxy(g.setPosition,g),g.swipeHandler=d.proxy(g.swipeHandler,g),g.dragHandler=d.proxy(g.dragHandler,g),g.keyHandler=d.proxy(g.keyHandler,g),g.instanceUid=a++,g.htmlExpr=/^(?:\s*(<[\w\W]+>)[^>]*)$/,g.registerBreakpoints(),g.init(!0)
}var a=0;
return e
}(),c.prototype.activateADA=function(){var b=this;
b.$slideTrack.find(".slick-active.mb-slick-active").attr({"aria-hidden":"false"}).find("a, input, button, select").attr({tabindex:"0"})
},c.prototype.addSlide=c.prototype.slickAdd=function(a,h,g){var f=this;
if("boolean"==typeof h){g=h,h=null
}else{if(0>h||h>=f.slideCount){return !1
}}f.unload(),"number"==typeof h?0===h&&0===f.$slides.length?d(a).appendTo(f.$slideTrack):g?d(a).insertBefore(f.$slides.eq(h)):d(a).insertAfter(f.$slides.eq(h)):g===!0?d(a).prependTo(f.$slideTrack):d(a).appendTo(f.$slideTrack),f.$slides=f.$slideTrack.children(this.options.slide),f.$slideTrack.children(this.options.slide).detach(),f.$slideTrack.append(f.$slides),f.$slides.each(function(e,j){d(j).attr("data-slick-index",e)
}),f.$slidesCache=f.$slides,f.reinit()
},c.prototype.animateHeight=function(){var f=this;
if(1===f.options.slidesToShow&&f.options.adaptiveHeight===!0&&f.options.vertical===!1){var e=f.$slides.eq(f.currentSlide).outerHeight(!0);
f.$list.animate({height:e},f.options.speed)
}},c.prototype.animateSlide=function(a,h){var g={},f=this;
f.animateHeight(),f.options.rtl===!0&&f.options.vertical===!1&&(a=-a),f.transformsEnabled===!1?f.options.vertical===!1?f.$slideTrack.animate({left:a},f.options.speed,f.options.easing,h):f.$slideTrack.animate({top:a},f.options.speed,f.options.easing,h):f.cssTransitions===!1?(f.options.rtl===!0&&(f.currentLeft=-f.currentLeft),d({animStart:f.currentLeft}).animate({animStart:a},{duration:f.options.speed,easing:f.options.easing,step:function(b){b=Math.ceil(b),f.options.vertical===!1?(g[f.animType]="translate("+b+"px, 0px)",f.$slideTrack.css(g)):(g[f.animType]="translate(0px,"+b+"px)",f.$slideTrack.css(g))
},complete:function(){h&&h.call()
}})):(f.applyTransition(),a=Math.ceil(a),f.options.vertical===!1?g[f.animType]="translate3d("+a+"px, 0px, 0px)":g[f.animType]="translate3d(0px,"+a+"px, 0px)",f.$slideTrack.css(g),h&&setTimeout(function(){f.disableTransition(),h.call()
},f.options.speed))
},c.prototype.getNavTarget=function(){var a=this,e=a.options.asNavFor;
return e&&null!==e&&(e=d(e).not(a.$slider)),e
},c.prototype.asNavFor=function(a){var f=this,e=f.getNavTarget();
null!==e&&"object"==typeof e&&e.each(function(){var b=d(this).slick("getSlick");
b.unslicked||b.slideHandler(a,!0)
})
},c.prototype.applyTransition=function(f){var e=this,g={};
e.options.fade===!1?g[e.transitionType]=e.transformType+" "+e.options.speed+"ms "+e.options.cssEase:g[e.transitionType]="opacity "+e.options.speed+"ms "+e.options.cssEase,e.options.fade===!1?e.$slideTrack.css(g):e.$slides.eq(f).css(g)
},c.prototype.autoPlay=function(){var b=this;
b.autoPlayClear(),b.slideCount>b.options.slidesToShow&&(b.autoPlayTimer=setInterval(b.autoPlayIterator,b.options.autoplaySpeed))
},c.prototype.autoPlayClear=function(){var b=this;
b.autoPlayTimer&&clearInterval(b.autoPlayTimer)
},c.prototype.autoPlayIterator=function(){var f=this,e=f.currentSlide+f.options.slidesToScroll;
f.paused||f.interrupted||f.focussed||(f.options.infinite===!1&&(1===f.direction&&f.currentSlide+1===f.slideCount-1?f.direction=0:0===f.direction&&(e=f.currentSlide-f.options.slidesToScroll,f.currentSlide-1===0&&(f.direction=1))),f.slideHandler(e))
},c.prototype.buildArrows=function(){var a=this;
a.options.arrows===!0&&(a.$prevArrow=d(a.options.prevArrow).addClass("slick-arrow mb-carousel-control mb-icn-sleek_arrow_left mb-slick-arrow"),a.$nextArrow=d(a.options.nextArrow).addClass("slick-arrow mb-carousel-control mb-icn-sleek_arrow_right mb-slick-arrow "),a.slideCount>a.options.slidesToShow?(a.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),a.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),a.htmlExpr.test(a.options.prevArrow)&&a.$prevArrow.prependTo(a.options.appendArrows),a.htmlExpr.test(a.options.nextArrow)&&a.$nextArrow.appendTo(a.options.appendArrows),a.options.infinite!==!0&&a.$prevArrow.addClass("slick-disabled mb-slick-disabled").attr("aria-disabled","true")):a.$prevArrow.add(a.$nextArrow).addClass("slick-hidden").attr({"aria-disabled":"true",tabindex:"-1"}))
},c.prototype.buildDots=function(){var f,e,a=this;
if(a.options.dots===!0&&a.slideCount>a.options.slidesToShow){for(a.$slider.addClass("slick-dotted"),e=d("<ul />").addClass(a.options.dotsClass),f=0;
f<=a.getDotCount();
f+=1){e.append(d("<li class='mb-carousel-pagination-item'/>").append(a.options.customPaging.call(this,a,f)))
}a.$dots=e.appendTo(a.options.appendDots),a.$dots.find("li").first().addClass("slick-active mb-slick-active").attr("aria-hidden","false")
}},c.prototype.buildOut=function(){var a=this;
a.$slides=a.$slider.children(a.options.slide+":not(.slick-cloned)").addClass("slick-slide"),a.slideCount=a.$slides.length,a.$slides.each(function(e,f){d(f).attr("data-slick-index",e).data("originalStyling",d(f).attr("style")||"")
}),a.$slider.addClass("slick-slider"),a.$slideTrack=0===a.slideCount?d('<div class="slick-track"/>').appendTo(a.$slider):a.$slides.wrapAll('<div class="slick-track"/>').parent(),a.$list=a.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(),a.$slideTrack.css("opacity",0),(a.options.centerMode===!0||a.options.swipeToSlide===!0)&&(a.options.slidesToScroll=1),d("img[data-lazy]",a.$slider).not("[src]").addClass("slick-loading"),a.setupInfinite(),a.buildArrows(),a.buildDots(),a.updateDots(),a.setSlideClasses("number"==typeof a.currentSlide?a.currentSlide:0),a.options.draggable===!0&&a.$list.addClass("draggable")
},c.prototype.buildRows=function(){var u,t,s,r,q,p,o,v=this;
if(r=document.createDocumentFragment(),p=v.$slider.children(),v.options.rows>1){for(o=v.options.slidesPerRow*v.options.rows,q=Math.ceil(p.length/o),u=0;
q>u;
u++){var n=document.createElement("div");
for(t=0;
t<v.options.rows;
t++){var m=document.createElement("div");
for(s=0;
s<v.options.slidesPerRow;
s++){var l=u*o+(t*v.options.slidesPerRow+s);
p.get(l)&&m.appendChild(p.get(l))
}n.appendChild(m)
}r.appendChild(n)
}v.$slider.empty().append(r),v.$slider.children().children().children().css({width:100/v.options.slidesPerRow+"%",display:"inline-block"})
}},c.prototype.checkResponsive=function(r,q){var o,n,m,p=this,l=!1,k=p.$slider.width(),a=window.innerWidth||d(window).width();
if("window"===p.respondTo?m=a:"slider"===p.respondTo?m=k:"min"===p.respondTo&&(m=Math.min(a,k)),p.options.responsive&&p.options.responsive.length&&null!==p.options.responsive){n=null;
for(o in p.breakpoints){p.breakpoints.hasOwnProperty(o)&&(p.originalSettings.mobileFirst===!1?m<p.breakpoints[o]&&(n=p.breakpoints[o]):m>p.breakpoints[o]&&(n=p.breakpoints[o]))
}null!==n?null!==p.activeBreakpoint?(n!==p.activeBreakpoint||q)&&(p.activeBreakpoint=n,"unslick"===p.breakpointSettings[n]?p.unslick(n):(p.options=d.extend({},p.originalSettings,p.breakpointSettings[n]),r===!0&&(p.currentSlide=p.options.initialSlide),p.refresh(r)),l=n):(p.activeBreakpoint=n,"unslick"===p.breakpointSettings[n]?p.unslick(n):(p.options=d.extend({},p.originalSettings,p.breakpointSettings[n]),r===!0&&(p.currentSlide=p.options.initialSlide),p.refresh(r)),l=n):null!==p.activeBreakpoint&&(p.activeBreakpoint=null,p.options=p.originalSettings,r===!0&&(p.currentSlide=p.options.initialSlide),p.refresh(r),l=n),r||l===!1||p.$slider.trigger("breakpoint",[p,l])
}},c.prototype.changeSlide=function(a,p){var m,l,k,o=this,n=d(a.currentTarget);
switch(n.is("a")&&a.preventDefault(),n.is("li")||(n=n.closest("li")),k=o.slideCount%o.options.slidesToScroll!==0,m=k?0:(o.slideCount-o.currentSlide)%o.options.slidesToScroll,a.data.message){case"previous":l=0===m?o.options.slidesToScroll:o.options.slidesToShow-m,o.slideCount>o.options.slidesToShow&&o.slideHandler(o.currentSlide-l,!1,p);
break;
case"next":l=0===m?o.options.slidesToScroll:m,o.slideCount>o.options.slidesToShow&&o.slideHandler(o.currentSlide+l,!1,p);
break;
case"index":var j=0===a.data.index?0:a.data.index||n.index()*o.options.slidesToScroll;
o.slideHandler(o.checkNavigable(j),!1,p),n.children().trigger("focus");
break;
default:return
}},c.prototype.checkNavigable=function(g){var k,j,f=this;
if(k=f.getNavigableIndexes(),j=0,g>k[k.length-1]){g=k[k.length-1]
}else{for(var h in k){if(g<k[h]){g=j;
break
}j=k[h]
}}return g
},c.prototype.cleanUpEvents=function(){var a=this;
a.options.dots&&null!==a.$dots&&d("li",a.$dots).off("click.slick",a.changeSlide).off("mouseenter.slick",d.proxy(a.interrupt,a,!0)).off("mouseleave.slick",d.proxy(a.interrupt,a,!1)),a.$slider.off("focus.slick blur.slick"),a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&(a.$prevArrow&&a.$prevArrow.off("click.slick",a.changeSlide),a.$nextArrow&&a.$nextArrow.off("click.slick",a.changeSlide)),a.$list.off("touchstart.slick mousedown.slick",a.swipeHandler),a.$list.off("touchmove.slick mousemove.slick",a.swipeHandler),a.$list.off("touchend.slick mouseup.slick",a.swipeHandler),a.$list.off("touchcancel.slick mouseleave.slick",a.swipeHandler),a.$list.off("click.slick",a.clickHandler),d(document).off(a.visibilityChange,a.visibility),a.cleanUpSlideEvents(),a.options.accessibility===!0&&a.$list.off("keydown.slick",a.keyHandler),a.options.focusOnSelect===!0&&d(a.$slideTrack).children().off("click.slick",a.selectHandler),d(window).off("orientationchange.slick.slick-"+a.instanceUid,a.orientationChange),d(window).off("resize.slick.slick-"+a.instanceUid,a.resize),d("[draggable!=true]",a.$slideTrack).off("dragstart",a.preventDefault),d(window).off("load.slick.slick-"+a.instanceUid,a.setPosition),d(document).off("ready.slick.slick-"+a.instanceUid,a.setPosition)
},c.prototype.cleanUpSlideEvents=function(){var a=this;
a.$list.off("mouseenter.slick",d.proxy(a.interrupt,a,!0)),a.$list.off("mouseleave.slick",d.proxy(a.interrupt,a,!1))
},c.prototype.cleanUpRows=function(){var e,f=this;
f.options.rows>1&&(e=f.$slides.children().children(),e.removeAttr("style"),f.$slider.empty().append(e))
},c.prototype.clickHandler=function(f){var e=this;
e.shouldClick===!1&&(f.stopImmediatePropagation(),f.stopPropagation(),f.preventDefault())
},c.prototype.destroy=function(a){var e=this;
e.autoPlayClear(),e.touchObject={},e.cleanUpEvents(),d(".slick-cloned",e.$slider).detach(),e.$dots&&e.$dots.remove(),e.$prevArrow&&e.$prevArrow.length&&(e.$prevArrow.removeClass("slick-disabled mb-slick-disabled slick-arrow slick-hidden mb-slick-arrow").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),e.htmlExpr.test(e.options.prevArrow)&&e.$prevArrow.remove()),e.$nextArrow&&e.$nextArrow.length&&(e.$nextArrow.removeClass("slick-disabled mb-slick-disabled slick-arrow slick-hidden mb-slick-arrow").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),e.htmlExpr.test(e.options.nextArrow)&&e.$nextArrow.remove()),e.$slides&&(e.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current mb-slick-active").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function(){d(this).attr("style",d(this).data("originalStyling"))
}),e.$slideTrack.children(this.options.slide).detach(),e.$slideTrack.detach(),e.$list.detach(),e.$slider.append(e.$slides)),e.cleanUpRows(),e.$slider.removeClass("slick-slider"),e.$slider.removeClass("slick-initialized"),e.$slider.removeClass("slick-dotted"),e.unslicked=!0,a||e.$slider.trigger("destroy",[e])
},c.prototype.disableTransition=function(f){var e=this,g={};
g[e.transitionType]="",e.options.fade===!1?e.$slideTrack.css(g):e.$slides.eq(f).css(g)
},c.prototype.fadeSlide=function(f,e){var g=this;
g.cssTransitions===!1?(g.$slides.eq(f).css({zIndex:g.options.zIndex}),g.$slides.eq(f).animate({opacity:1},g.options.speed,g.options.easing,e)):(g.applyTransition(f),g.$slides.eq(f).css({opacity:1,zIndex:g.options.zIndex}),e&&setTimeout(function(){g.disableTransition(f),e.call()
},g.options.speed))
},c.prototype.fadeSlideOut=function(f){var e=this;
e.cssTransitions===!1?e.$slides.eq(f).animate({opacity:0,zIndex:e.options.zIndex-2},e.options.speed,e.options.easing):(e.applyTransition(f),e.$slides.eq(f).css({opacity:0,zIndex:e.options.zIndex-2}))
},c.prototype.filterSlides=c.prototype.slickFilter=function(f){var e=this;
null!==f&&(e.$slidesCache=e.$slides,e.unload(),e.$slideTrack.children(this.options.slide).detach(),e.$slidesCache.filter(f).appendTo(e.$slideTrack),e.reinit())
},c.prototype.focusHandler=function(){var a=this;
a.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick","*:not(.slick-arrow)",function(e){e.stopImmediatePropagation();
var b=d(this);
setTimeout(function(){a.options.pauseOnFocus&&(a.focussed=b.is(":focus"),a.autoPlay())
},0)
})
},c.prototype.getCurrent=c.prototype.slickCurrentSlide=function(){var b=this;
return b.currentSlide
},c.prototype.getDotCount=function(){var f=this,e=0,h=0,g=0;
if(f.options.infinite===!0){for(;
e<f.slideCount;
){++g,e=h+f.options.slidesToScroll,h+=f.options.slidesToScroll<=f.options.slidesToShow?f.options.slidesToScroll:f.options.slidesToShow
}}else{if(f.options.centerMode===!0){g=f.slideCount
}else{if(f.options.asNavFor){for(;
e<f.slideCount;
){++g,e=h+f.options.slidesToScroll,h+=f.options.slidesToScroll<=f.options.slidesToShow?f.options.slidesToScroll:f.options.slidesToShow
}}else{g=1+Math.ceil((f.slideCount-f.options.slidesToShow)/f.options.slidesToScroll)
}}}return g-1
},c.prototype.getLeft=function(h){var m,l,j,g=this,k=0;
return g.slideOffset=0,l=g.$slides.first().outerHeight(!0),g.options.infinite===!0?(g.slideCount>g.options.slidesToShow&&(g.slideOffset=g.slideWidth*g.options.slidesToShow*-1,k=l*g.options.slidesToShow*-1),g.slideCount%g.options.slidesToScroll!==0&&h+g.options.slidesToScroll>g.slideCount&&g.slideCount>g.options.slidesToShow&&(h>g.slideCount?(g.slideOffset=(g.options.slidesToShow-(h-g.slideCount))*g.slideWidth*-1,k=(g.options.slidesToShow-(h-g.slideCount))*l*-1):(g.slideOffset=g.slideCount%g.options.slidesToScroll*g.slideWidth*-1,k=g.slideCount%g.options.slidesToScroll*l*-1))):h+g.options.slidesToShow>g.slideCount&&(g.slideOffset=(h+g.options.slidesToShow-g.slideCount)*g.slideWidth,k=(h+g.options.slidesToShow-g.slideCount)*l),g.slideCount<=g.options.slidesToShow&&(g.slideOffset=0,k=0),g.options.centerMode===!0&&g.options.infinite===!0?g.slideOffset+=g.slideWidth*Math.floor(g.options.slidesToShow/2)-g.slideWidth:g.options.centerMode===!0&&(g.slideOffset=0,g.slideOffset+=g.slideWidth*Math.floor(g.options.slidesToShow/2)),m=g.options.vertical===!1?h*g.slideWidth*-1+g.slideOffset:h*l*-1+k,g.options.variableWidth===!0&&(j=g.slideCount<=g.options.slidesToShow||g.options.infinite===!1?g.$slideTrack.children(".slick-slide").eq(h):g.$slideTrack.children(".slick-slide").eq(h+g.options.slidesToShow),m=g.options.rtl===!0?j[0]?-1*(g.$slideTrack.width()-j[0].offsetLeft-j.width()):0:j[0]?-1*j[0].offsetLeft:0,g.options.centerMode===!0&&(j=g.slideCount<=g.options.slidesToShow||g.options.infinite===!1?g.$slideTrack.children(".slick-slide").eq(h):g.$slideTrack.children(".slick-slide").eq(h+g.options.slidesToShow+1),m=g.options.rtl===!0?j[0]?-1*(g.$slideTrack.width()-j[0].offsetLeft-j.width()):0:j[0]?-1*j[0].offsetLeft:0,m+=(g.$list.width()-j.outerWidth())/2)),m
},c.prototype.getOption=c.prototype.slickGetOption=function(f){var e=this;
return e.options[f]
},c.prototype.getNavigableIndexes=function(){var h,g=this,f=0,k=0,j=[];
for(g.options.infinite===!1?h=g.slideCount:(f=-1*g.options.slidesToScroll,k=-1*g.options.slidesToScroll,h=2*g.slideCount);
h>f;
){j.push(f),f=k+g.options.slidesToScroll,k+=g.options.slidesToScroll<=g.options.slidesToShow?g.options.slidesToScroll:g.options.slidesToShow
}return j
},c.prototype.getSlick=function(){return this
},c.prototype.getSlideCount=function(){var h,g,f,a=this;
return f=a.options.centerMode===!0?a.slideWidth*Math.floor(a.options.slidesToShow/2):0,a.options.swipeToSlide===!0?(a.$slideTrack.find(".slick-slide").each(function(e,b){return b.offsetLeft-f+d(b).outerWidth()/2>-1*a.swipeLeft?(g=b,!1):void 0
}),h=Math.abs(d(g).attr("data-slick-index")-a.currentSlide)||1):a.options.slidesToScroll
},c.prototype.goTo=c.prototype.slickGoTo=function(f,e){var g=this;
g.changeSlide({data:{message:"index",index:parseInt(f)}},e)
},c.prototype.init=function(a){var e=this;
d(e.$slider).hasClass("slick-initialized")||(d(e.$slider).addClass("slick-initialized"),e.buildRows(),e.buildOut(),e.setProps(),e.startLoad(),e.loadSlider(),e.initializeEvents(),e.updateArrows(),e.updateDots(),e.checkResponsive(!0),e.focusHandler()),a&&e.$slider.trigger("init",[e]),e.options.accessibility===!0&&e.initADA(),e.options.autoplay&&(e.paused=!1,e.autoPlay())
},c.prototype.initADA=function(){var a=this;
a.$slides.add(a.$slideTrack.find(".slick-cloned")).attr({"aria-hidden":"true",tabindex:"-1"}).find("a, input, button, select").attr({tabindex:"-1"}),a.$slideTrack.attr("role","listbox"),a.$slides.not(a.$slideTrack.find(".slick-cloned")).each(function(b){d(this).attr({role:"option","aria-describedby":"slick-slide"+a.instanceUid+b})
}),null!==a.$dots&&a.$dots.attr("role","tablist").find("li").each(function(b){d(this).attr({role:"presentation","aria-selected":"false","aria-controls":"navigation"+a.instanceUid+b,id:"slick-slide"+a.instanceUid+b})
}).first().attr("aria-selected","true").end().find("button").attr("role","button").end().closest("div").attr("role","toolbar"),a.activateADA()
},c.prototype.initArrowEvents=function(){var b=this;
b.options.arrows===!0&&b.slideCount>b.options.slidesToShow&&(b.$prevArrow.off("click.slick").on("click.slick",{message:"previous"},b.changeSlide),b.$nextArrow.off("click.slick").on("click.slick",{message:"next"},b.changeSlide))
},c.prototype.initDotEvents=function(){var a=this;
a.options.dots===!0&&a.slideCount>a.options.slidesToShow&&d("li",a.$dots).on("click.slick",{message:"index"},a.changeSlide),a.options.dots===!0&&a.options.pauseOnDotsHover===!0&&d("li",a.$dots).on("mouseenter.slick",d.proxy(a.interrupt,a,!0)).on("mouseleave.slick",d.proxy(a.interrupt,a,!1))
},c.prototype.initSlideEvents=function(){var a=this;
a.options.pauseOnHover&&(a.$list.on("mouseenter.slick",d.proxy(a.interrupt,a,!0)),a.$list.on("mouseleave.slick",d.proxy(a.interrupt,a,!1)))
},c.prototype.initializeEvents=function(){var a=this;
a.initArrowEvents(),a.initDotEvents(),a.initSlideEvents(),a.$list.on("touchstart.slick mousedown.slick",{action:"start"},a.swipeHandler),a.$list.on("touchmove.slick mousemove.slick",{action:"move"},a.swipeHandler),a.$list.on("touchend.slick mouseup.slick",{action:"end"},a.swipeHandler),a.$list.on("touchcancel.slick mouseleave.slick",{action:"end"},a.swipeHandler),a.$list.on("click.slick",a.clickHandler),d(document).on(a.visibilityChange,d.proxy(a.visibility,a)),a.options.accessibility===!0&&a.$list.on("keydown.slick",a.keyHandler),a.options.focusOnSelect===!0&&d(a.$slideTrack).children().on("click.slick",a.selectHandler),d(window).on("orientationchange.slick.slick-"+a.instanceUid,d.proxy(a.orientationChange,a)),d(window).on("resize.slick.slick-"+a.instanceUid,d.proxy(a.resize,a)),d("[draggable!=true]",a.$slideTrack).on("dragstart",a.preventDefault),d(window).on("load.slick.slick-"+a.instanceUid,a.setPosition),d(document).on("ready.slick.slick-"+a.instanceUid,a.setPosition)
},c.prototype.initUI=function(){var b=this;
b.options.arrows===!0&&b.slideCount>b.options.slidesToShow&&(b.$prevArrow.show(),b.$nextArrow.show()),b.options.dots===!0&&b.slideCount>b.options.slidesToShow&&b.$dots.show()
},c.prototype.keyHandler=function(f){var e=this;
f.target.tagName.match("TEXTAREA|INPUT|SELECT")||(37===f.keyCode&&e.options.accessibility===!0?e.changeSlide({data:{message:e.options.rtl===!0?"next":"previous"}}):39===f.keyCode&&e.options.accessibility===!0&&e.changeSlide({data:{message:e.options.rtl===!0?"previous":"next"}}))
},c.prototype.lazyLoad=function(){function h(b){d("img[data-lazy]",b).each(function(){var n=d(this),g=d(this).attr("data-lazy"),f=document.createElement("img");
f.onload=function(){n.animate({opacity:0},100,function(){n.attr("src",g).animate({opacity:1},200,function(){n.removeAttr("data-lazy").removeClass("slick-loading")
}),a.$slider.trigger("lazyLoaded",[a,n,g])
})
},f.onerror=function(){n.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),a.$slider.trigger("lazyLoadError",[a,n,g])
},f.src=g
})
}var m,l,k,j,a=this;
a.options.centerMode===!0?a.options.infinite===!0?(k=a.currentSlide+(a.options.slidesToShow/2+1),j=k+a.options.slidesToShow+2):(k=Math.max(0,a.currentSlide-(a.options.slidesToShow/2+1)),j=2+(a.options.slidesToShow/2+1)+a.currentSlide):(k=a.options.infinite?a.options.slidesToShow+a.currentSlide:a.currentSlide,j=Math.ceil(k+a.options.slidesToShow),a.options.fade===!0&&(k>0&&k--,j<=a.slideCount&&j++)),m=a.$slider.find(".slick-slide").slice(k,j),h(m),a.slideCount<=a.options.slidesToShow?(l=a.$slider.find(".slick-slide"),h(l)):a.currentSlide>=a.slideCount-a.options.slidesToShow?(l=a.$slider.find(".slick-cloned").slice(0,a.options.slidesToShow),h(l)):0===a.currentSlide&&(l=a.$slider.find(".slick-cloned").slice(-1*a.options.slidesToShow),h(l))
},c.prototype.loadSlider=function(){var b=this;
b.setPosition(),b.$slideTrack.css({opacity:1}),b.$slider.removeClass("slick-loading"),b.initUI(),"progressive"===b.options.lazyLoad&&b.progressiveLazyLoad()
},c.prototype.next=c.prototype.slickNext=function(){var b=this;
b.changeSlide({data:{message:"next"}})
},c.prototype.orientationChange=function(){var b=this;
b.checkResponsive(),b.setPosition()
},c.prototype.pause=c.prototype.slickPause=function(){var b=this;
b.autoPlayClear(),b.paused=!0
},c.prototype.play=c.prototype.slickPlay=function(){var b=this;
b.autoPlay(),b.options.autoplay=!0,b.paused=!1,b.focussed=!1,b.interrupted=!1
},c.prototype.postSlide=function(f){var e=this;
e.unslicked||(e.$slider.trigger("afterChange",[e,f]),e.animating=!1,e.setPosition(),e.swipeLeft=null,e.options.autoplay&&e.autoPlay(),e.options.accessibility===!0&&e.initADA())
},c.prototype.prev=c.prototype.slickPrev=function(){var b=this;
b.changeSlide({data:{message:"previous"}})
},c.prototype.preventDefault=function(b){b.preventDefault()
},c.prototype.progressiveLazyLoad=function(a){a=a||1;
var k,j,h,m=this,l=d("img[data-lazy]",m.$slider);
l.length?(k=l.first(),j=k.attr("data-lazy"),h=document.createElement("img"),h.onload=function(){k.attr("src",j).removeAttr("data-lazy").removeClass("slick-loading"),m.options.adaptiveHeight===!0&&m.setPosition(),m.$slider.trigger("lazyLoaded",[m,k,j]),m.progressiveLazyLoad()
},h.onerror=function(){3>a?setTimeout(function(){m.progressiveLazyLoad(a+1)
},500):(k.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),m.$slider.trigger("lazyLoadError",[m,k,j]),m.progressiveLazyLoad())
},h.src=j):m.$slider.trigger("allImagesLoaded",[m])
},c.prototype.refresh=function(a){var g,f,h=this;
f=h.slideCount-h.options.slidesToShow,!h.options.infinite&&h.currentSlide>f&&(h.currentSlide=f),h.slideCount<=h.options.slidesToShow&&(h.currentSlide=0),g=h.currentSlide,h.destroy(!0),d.extend(h,h.initials,{currentSlide:g}),h.init(),a||h.changeSlide({data:{message:"index",index:g}},!1)
},c.prototype.registerBreakpoints=function(){var k,j,h,a=this,g=a.options.responsive||null;
if("array"===d.type(g)&&g.length){a.respondTo=a.options.respondTo||"window";
for(k in g){if(h=a.breakpoints.length-1,j=g[k].breakpoint,g.hasOwnProperty(k)){for(;
h>=0;
){a.breakpoints[h]&&a.breakpoints[h]===j&&a.breakpoints.splice(h,1),h--
}a.breakpoints.push(j),a.breakpointSettings[j]=g[k].settings
}}a.breakpoints.sort(function(b,e){return a.options.mobileFirst?b-e:e-b
})
}},c.prototype.reinit=function(){var a=this;
a.$slides=a.$slideTrack.children(a.options.slide).addClass("slick-slide"),a.slideCount=a.$slides.length,a.currentSlide>=a.slideCount&&0!==a.currentSlide&&(a.currentSlide=a.currentSlide-a.options.slidesToScroll),a.slideCount<=a.options.slidesToShow&&(a.currentSlide=0),a.registerBreakpoints(),a.setProps(),a.setupInfinite(),a.buildArrows(),a.updateArrows(),a.initArrowEvents(),a.buildDots(),a.updateDots(),a.initDotEvents(),a.cleanUpSlideEvents(),a.initSlideEvents(),a.checkResponsive(!1,!0),a.options.focusOnSelect===!0&&d(a.$slideTrack).children().on("click.slick",a.selectHandler),a.setSlideClasses("number"==typeof a.currentSlide?a.currentSlide:0),a.setPosition(),a.focusHandler(),a.paused=!a.options.autoplay,a.autoPlay(),a.$slider.trigger("reInit",[a])
},c.prototype.resize=function(){var a=this;
d(window).width()!==a.windowWidth&&(clearTimeout(a.windowDelay),a.windowDelay=window.setTimeout(function(){a.windowWidth=d(window).width(),a.checkResponsive(),a.unslicked||a.setPosition()
},50))
},c.prototype.removeSlide=c.prototype.slickRemove=function(f,e,h){var g=this;
return"boolean"==typeof f?(e=f,f=e===!0?0:g.slideCount-1):f=e===!0?--f:f,g.slideCount<1||0>f||f>g.slideCount-1?!1:(g.unload(),h===!0?g.$slideTrack.children().remove():g.$slideTrack.children(this.options.slide).eq(f).remove(),g.$slides=g.$slideTrack.children(this.options.slide),g.$slideTrack.children(this.options.slide).detach(),g.$slideTrack.append(g.$slides),g.$slidesCache=g.$slides,void g.reinit())
},c.prototype.setCSS=function(g){var j,h,f=this,k={};
f.options.rtl===!0&&(g=-g),j="left"==f.positionProp?Math.ceil(g)+"px":"0px",h="top"==f.positionProp?Math.ceil(g)+"px":"0px",k[f.positionProp]=g,f.transformsEnabled===!1?f.$slideTrack.css(k):(k={},f.cssTransitions===!1?(k[f.animType]="translate("+j+", "+h+")",f.$slideTrack.css(k)):(k[f.animType]="translate3d("+j+", "+h+", 0px)",f.$slideTrack.css(k)))
},c.prototype.setDimensions=function(){var f=this;
f.options.vertical===!1?f.options.centerMode===!0&&f.$list.css({padding:"0px "+f.options.centerPadding}):(f.$list.height(f.$slides.first().outerHeight(!0)*f.options.slidesToShow),f.options.centerMode===!0&&f.$list.css({padding:f.options.centerPadding+" 0px"})),f.listWidth=f.$list.width(),f.listHeight=f.$list.height(),f.options.vertical===!1&&f.options.variableWidth===!1?(f.slideWidth=Math.ceil(f.listWidth/f.options.slidesToShow),f.$slideTrack.width(Math.ceil(f.slideWidth*f.$slideTrack.children(".slick-slide").length))):f.options.variableWidth===!0?f.$slideTrack.width(5000*f.slideCount):(f.slideWidth=Math.ceil(f.listWidth),f.$slideTrack.height(Math.ceil(f.$slides.first().outerHeight(!0)*f.$slideTrack.children(".slick-slide").length)));
var e=f.$slides.first().outerWidth(!0)-f.$slides.first().width();
f.options.variableWidth===!1&&f.$slideTrack.children(".slick-slide").width(f.slideWidth-e)
},c.prototype.setFade=function(){var e,a=this;
a.$slides.each(function(f,b){e=a.slideWidth*f*-1,a.options.rtl===!0?d(b).css({position:"relative",right:e,top:0,zIndex:a.options.zIndex-2,opacity:0}):d(b).css({position:"relative",left:e,top:0,zIndex:a.options.zIndex-2,opacity:0})
}),a.$slides.eq(a.currentSlide).css({zIndex:a.options.zIndex-1,opacity:1})
},c.prototype.setHeight=function(){var f=this;
if(1===f.options.slidesToShow&&f.options.adaptiveHeight===!0&&f.options.vertical===!1){var e=f.$slides.eq(f.currentSlide).outerHeight(!0);
f.$list.css("height",e)
}},c.prototype.setOption=c.prototype.slickSetOption=function(){var o,n,m,l,j,a=this,k=!1;
if("object"===d.type(arguments[0])?(m=arguments[0],k=arguments[1],j="multiple"):"string"===d.type(arguments[0])&&(m=arguments[0],l=arguments[1],k=arguments[2],"responsive"===arguments[0]&&"array"===d.type(arguments[1])?j="responsive":"undefined"!=typeof arguments[1]&&(j="single")),"single"===j){a.options[m]=l
}else{if("multiple"===j){d.each(m,function(b,e){a.options[b]=e
})
}else{if("responsive"===j){for(n in l){if("array"!==d.type(a.options.responsive)){a.options.responsive=[l[n]]
}else{for(o=a.options.responsive.length-1;
o>=0;
){a.options.responsive[o].breakpoint===l[n].breakpoint&&a.options.responsive.splice(o,1),o--
}a.options.responsive.push(l[n])
}}}}}k&&(a.unload(),a.reinit())
},c.prototype.setPosition=function(){var b=this;
b.setDimensions(),b.setHeight(),b.options.fade===!1?b.setCSS(b.getLeft(b.currentSlide)):b.setFade(),b.$slider.trigger("setPosition",[b])
},c.prototype.setProps=function(){var f=this,e=document.body.style;
f.positionProp=f.options.vertical===!0?"top":"left","top"===f.positionProp?f.$slider.addClass("slick-vertical"):f.$slider.removeClass("slick-vertical"),(void 0!==e.WebkitTransition||void 0!==e.MozTransition||void 0!==e.msTransition)&&f.options.useCSS===!0&&(f.cssTransitions=!0),f.options.fade&&("number"==typeof f.options.zIndex?f.options.zIndex<3&&(f.options.zIndex=3):f.options.zIndex=f.defaults.zIndex),void 0!==e.OTransform&&(f.animType="OTransform",f.transformType="-o-transform",f.transitionType="OTransition",void 0===e.perspectiveProperty&&void 0===e.webkitPerspective&&(f.animType=!1)),void 0!==e.MozTransform&&(f.animType="MozTransform",f.transformType="-moz-transform",f.transitionType="MozTransition",void 0===e.perspectiveProperty&&void 0===e.MozPerspective&&(f.animType=!1)),void 0!==e.webkitTransform&&(f.animType="webkitTransform",f.transformType="-webkit-transform",f.transitionType="webkitTransition",void 0===e.perspectiveProperty&&void 0===e.webkitPerspective&&(f.animType=!1)),void 0!==e.msTransform&&(f.animType="msTransform",f.transformType="-ms-transform",f.transitionType="msTransition",void 0===e.msTransform&&(f.animType=!1)),void 0!==e.transform&&f.animType!==!1&&(f.animType="transform",f.transformType="transform",f.transitionType="transition"),f.transformsEnabled=f.options.useTransform&&null!==f.animType&&f.animType!==!1
},c.prototype.setSlideClasses=function(h){var m,l,k,j,g=this;
l=g.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current mb-slick-active").attr("aria-hidden","true"),g.$slides.eq(h).addClass("slick-current"),g.options.centerMode===!0?(m=Math.floor(g.options.slidesToShow/2),g.options.infinite===!0&&(h>=m&&h<=g.slideCount-1-m?g.$slides.slice(h-m,h+m+1).addClass("slick-active mb-slick-active").attr("aria-hidden","false"):(k=g.options.slidesToShow+h,l.slice(k-m+1,k+m+2).addClass("slick-active mb-slick-active").attr("aria-hidden","false")),0===h?l.eq(l.length-1-g.options.slidesToShow).addClass("slick-center"):h===g.slideCount-1&&l.eq(g.options.slidesToShow).addClass("slick-center")),g.$slides.eq(h).addClass("slick-center")):h>=0&&h<=g.slideCount-g.options.slidesToShow?g.$slides.slice(h,h+g.options.slidesToShow).addClass("slick-active mb-slick-active").attr("aria-hidden","false"):l.length<=g.options.slidesToShow?l.addClass("slick-active mb-slick-active").attr("aria-hidden","false"):(j=g.slideCount%g.options.slidesToShow,k=g.options.infinite===!0?g.options.slidesToShow+h:h,g.options.slidesToShow==g.options.slidesToScroll&&g.slideCount-h<g.options.slidesToShow?l.slice(k-(g.options.slidesToShow-j),k+j).addClass("slick-active mb-slick-active").attr("aria-hidden","false"):l.slice(k,k+g.options.slidesToShow).addClass("slick-active mb-slick-active").attr("aria-hidden","false")),"ondemand"===g.options.lazyLoad&&g.lazyLoad()
},c.prototype.setupInfinite=function(){var h,g,f,a=this;
if(a.options.fade===!0&&(a.options.centerMode=!1),a.options.infinite===!0&&a.options.fade===!1&&(g=null,a.slideCount>a.options.slidesToShow)){for(f=a.options.centerMode===!0?a.options.slidesToShow+1:a.options.slidesToShow,h=a.slideCount;
h>a.slideCount-f;
h-=1){g=h-1,d(a.$slides[g]).clone(!0).attr("id","").attr("data-slick-index",g-a.slideCount).prependTo(a.$slideTrack).addClass("slick-cloned")
}for(h=0;
f>h;
h+=1){g=h,d(a.$slides[g]).clone(!0).attr("id","").attr("data-slick-index",g+a.slideCount).appendTo(a.$slideTrack).addClass("slick-cloned")
}a.$slideTrack.find(".slick-cloned").find("[id]").each(function(){d(this).attr("id","")
})
}},c.prototype.interrupt=function(f){var e=this;
f||e.autoPlay(),e.interrupted=f
},c.prototype.selectHandler=function(a){var h=this,g=d(a.target).is(".slick-slide")?d(a.target):d(a.target).parents(".slick-slide"),f=parseInt(g.attr("data-slick-index"));
return f||(f=0),h.slideCount<=h.options.slidesToShow?(h.setSlideClasses(f),void h.asNavFor(f)):void h.slideHandler(f)
},c.prototype.slideHandler=function(t,s,r){var q,p,o,n,k,m=null,l=this;
return s=s||!1,l.animating===!0&&l.options.waitForAnimate===!0||l.options.fade===!0&&l.currentSlide===t||l.slideCount<=l.options.slidesToShow?void 0:(s===!1&&l.asNavFor(t),q=t,m=l.getLeft(q),n=l.getLeft(l.currentSlide),l.currentLeft=null===l.swipeLeft?n:l.swipeLeft,l.options.infinite===!1&&l.options.centerMode===!1&&(0>t||t>l.getDotCount()*l.options.slidesToScroll)?void (l.options.fade===!1&&(q=l.currentSlide,r!==!0?l.animateSlide(n,function(){l.postSlide(q)
}):l.postSlide(q))):l.options.infinite===!1&&l.options.centerMode===!0&&(0>t||t>l.slideCount-l.options.slidesToScroll)?void (l.options.fade===!1&&(q=l.currentSlide,r!==!0?l.animateSlide(n,function(){l.postSlide(q)
}):l.postSlide(q))):(l.options.autoplay&&clearInterval(l.autoPlayTimer),p=0>q?l.slideCount%l.options.slidesToScroll!==0?l.slideCount-l.slideCount%l.options.slidesToScroll:l.slideCount+q:q>=l.slideCount?l.slideCount%l.options.slidesToScroll!==0?0:q-l.slideCount:q,l.animating=!0,l.$slider.trigger("beforeChange",[l,l.currentSlide,p]),o=l.currentSlide,l.currentSlide=p,l.setSlideClasses(l.currentSlide),l.options.asNavFor&&(k=l.getNavTarget(),k=k.slick("getSlick"),k.slideCount<=k.options.slidesToShow&&k.setSlideClasses(l.currentSlide)),l.updateDots(),l.updateArrows(),l.options.fade===!0?(r!==!0?(l.fadeSlideOut(o),l.fadeSlide(p,function(){l.postSlide(p)
})):l.postSlide(p),void l.animateHeight()):void (r!==!0?l.animateSlide(m,function(){l.postSlide(p)
}):l.postSlide(p))))
},c.prototype.startLoad=function(){var b=this;
b.options.arrows===!0&&b.slideCount>b.options.slidesToShow&&(b.$prevArrow.hide(),b.$nextArrow.hide()),b.options.dots===!0&&b.slideCount>b.options.slidesToShow&&b.$dots.hide(),b.$slider.addClass("slick-loading")
},c.prototype.swipeDirection=function(){var g,f,k,j,h=this;
return g=h.touchObject.startX-h.touchObject.curX,f=h.touchObject.startY-h.touchObject.curY,k=Math.atan2(f,g),j=Math.round(180*k/Math.PI),0>j&&(j=360-Math.abs(j)),45>=j&&j>=0?h.options.rtl===!1?"left":"right":360>=j&&j>=315?h.options.rtl===!1?"left":"right":j>=135&&225>=j?h.options.rtl===!1?"right":"left":h.options.verticalSwiping===!0?j>=35&&135>=j?"down":"up":"vertical"
},c.prototype.swipeEnd=function(f){var h,g,e=this;
if(e.dragging=!1,e.interrupted=!1,e.shouldClick=e.touchObject.swipeLength>10?!1:!0,void 0===e.touchObject.curX){return !1
}if(e.touchObject.edgeHit===!0&&e.$slider.trigger("edge",[e,e.swipeDirection()]),e.touchObject.swipeLength>=e.touchObject.minSwipe){switch(g=e.swipeDirection()){case"left":case"down":h=e.options.swipeToSlide?e.checkNavigable(e.currentSlide+e.getSlideCount()):e.currentSlide+e.getSlideCount(),e.currentDirection=0;
break;
case"right":case"up":h=e.options.swipeToSlide?e.checkNavigable(e.currentSlide-e.getSlideCount()):e.currentSlide-e.getSlideCount(),e.currentDirection=1
}"vertical"!=g&&(e.slideHandler(h),e.touchObject={},e.$slider.trigger("swipe",[e,g]))
}else{e.touchObject.startX!==e.touchObject.curX&&(e.slideHandler(e.currentSlide),e.touchObject={})
}},c.prototype.swipeHandler=function(f){var e=this;
if(!(e.options.swipe===!1||"ontouchend" in document&&e.options.swipe===!1||e.options.draggable===!1&&-1!==f.type.indexOf("mouse"))){switch(e.touchObject.fingerCount=f.originalEvent&&void 0!==f.originalEvent.touches?f.originalEvent.touches.length:1,e.touchObject.minSwipe=e.listWidth/e.options.touchThreshold,e.options.verticalSwiping===!0&&(e.touchObject.minSwipe=e.listHeight/e.options.touchThreshold),f.data.action){case"start":e.swipeStart(f);
break;
case"move":e.swipeMove(f);
break;
case"end":e.swipeEnd(f)
}}},c.prototype.swipeMove=function(k){var p,o,n,m,l,j=this;
return l=void 0!==k.originalEvent?k.originalEvent.touches:null,!j.dragging||l&&1!==l.length?!1:(p=j.getLeft(j.currentSlide),j.touchObject.curX=void 0!==l?l[0].pageX:k.clientX,j.touchObject.curY=void 0!==l?l[0].pageY:k.clientY,j.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(j.touchObject.curX-j.touchObject.startX,2))),j.options.verticalSwiping===!0&&(j.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(j.touchObject.curY-j.touchObject.startY,2)))),o=j.swipeDirection(),"vertical"!==o?(void 0!==k.originalEvent&&j.touchObject.swipeLength>4&&k.preventDefault(),m=(j.options.rtl===!1?1:-1)*(j.touchObject.curX>j.touchObject.startX?1:-1),j.options.verticalSwiping===!0&&(m=j.touchObject.curY>j.touchObject.startY?1:-1),n=j.touchObject.swipeLength,j.touchObject.edgeHit=!1,j.options.infinite===!1&&(0===j.currentSlide&&"right"===o||j.currentSlide>=j.getDotCount()&&"left"===o)&&(n=j.touchObject.swipeLength*j.options.edgeFriction,j.touchObject.edgeHit=!0),j.options.vertical===!1?j.swipeLeft=p+n*m:j.swipeLeft=p+n*(j.$list.height()/j.listWidth)*m,j.options.verticalSwiping===!0&&(j.swipeLeft=p+n*m),j.options.fade===!0||j.options.touchMove===!1?!1:j.animating===!0?(j.swipeLeft=null,!1):void j.setCSS(j.swipeLeft)):void 0)
},c.prototype.swipeStart=function(f){var g,e=this;
return e.interrupted=!0,1!==e.touchObject.fingerCount||e.slideCount<=e.options.slidesToShow?(e.touchObject={},!1):(void 0!==f.originalEvent&&void 0!==f.originalEvent.touches&&(g=f.originalEvent.touches[0]),e.touchObject.startX=e.touchObject.curX=void 0!==g?g.pageX:f.clientX,e.touchObject.startY=e.touchObject.curY=void 0!==g?g.pageY:f.clientY,void (e.dragging=!0))
},c.prototype.unfilterSlides=c.prototype.slickUnfilter=function(){var b=this;
null!==b.$slidesCache&&(b.unload(),b.$slideTrack.children(this.options.slide).detach(),b.$slidesCache.appendTo(b.$slideTrack),b.reinit())
},c.prototype.unload=function(){var a=this;
d(".slick-cloned",a.$slider).remove(),a.$dots&&a.$dots.remove(),a.$prevArrow&&a.htmlExpr.test(a.options.prevArrow)&&a.$prevArrow.remove(),a.$nextArrow&&a.htmlExpr.test(a.options.nextArrow)&&a.$nextArrow.remove(),a.$slides.removeClass("slick-slide slick-active slick-visible slick-current mb-slick-active").attr("aria-hidden","true").css("width","")
},c.prototype.unslick=function(f){var e=this;
e.$slider.trigger("unslick",[e,f]),e.destroy()
},c.prototype.updateArrows=function(){var e,f=this;
e=Math.floor(f.options.slidesToShow/2),f.options.arrows===!0&&f.slideCount>f.options.slidesToShow&&!f.options.infinite&&(f.$prevArrow.removeClass("slick-disabled mb-slick-disabled").attr("aria-disabled","false"),f.$nextArrow.removeClass("slick-disabled mb-slick-disabled").attr("aria-disabled","false"),0===f.currentSlide?(f.$prevArrow.addClass("slick-disabled mb-slick-disabled").attr("aria-disabled","true"),f.$nextArrow.removeClass("slick-disabled mb-slick-disabled").attr("aria-disabled","false")):f.currentSlide>=f.slideCount-f.options.slidesToShow&&f.options.centerMode===!1?(f.$nextArrow.addClass("slick-disabled mb-slick-disabled").attr("aria-disabled","true"),f.$prevArrow.removeClass("slick-disabled mb-slick-disabled").attr("aria-disabled","false")):f.currentSlide>=f.slideCount-1&&f.options.centerMode===!0&&(f.$nextArrow.addClass("slick-disabled mb-slick-disabled").attr("aria-disabled","true"),f.$prevArrow.removeClass("slick-disabled mb-slick-disabled").attr("aria-disabled","false")))
},c.prototype.updateDots=function(){var b=this;
null!==b.$dots&&(b.$dots.find("li").removeClass("slick-active mb-slick-active").attr("aria-hidden","true"),b.$dots.find("li").eq(Math.floor(b.currentSlide/b.options.slidesToScroll)).addClass("slick-active mb-slick-active").attr("aria-hidden","false"))
},c.prototype.visibility=function(){var b=this;
b.options.autoplay&&(document[b.hidden]?b.interrupted=!0:b.interrupted=!1)
},d.fn.slick=function(){var j,h,b=this,m=arguments[0],l=Array.prototype.slice.call(arguments,1),k=b.length;
for(j=0;
k>j;
j++){if("object"==typeof m||"undefined"==typeof m?b[j].slick=new c(b[j],m):h=b[j].slick[m].apply(b[j].slick,l),"undefined"!=typeof h){return h
}}return b
}
});
(function(b){var a={};
b.publish=function(d,c){a[d]&&b.each(a[d],function(){(typeof this==="function")&&this.apply(b,c||[])
})
};
b.subscribe=function(c,d){if(!a[c]){a[c]=[]
}a[c].push(d);
return[c,d]
};
b.unsubscribe=function(d){var c=d[0];
a[c]&&b.each(a[c],function(e){if(this===d[1]){a[c].splice(e,1)
}})
}
})(mb.$);
(function(b,a){typeof exports==="object"&&typeof module!=="undefined"?module.exports=a():typeof define==="function"&&define.amd?define(a):(b.videojs=a())
}(this,(function(){var ap="6.2.6";
var cg=typeof window!=="undefined"?window:typeof global!=="undefined"?global:typeof self!=="undefined"?self:{};
function ai(ff,fe){return fe={exports:{}},ff(fe,fe.exports),fe.exports
}var cy;
if(typeof window!=="undefined"){cy=window
}else{if(typeof cg!=="undefined"){cy=cg
}else{if(typeof self!=="undefined"){cy=self
}else{cy={}
}}}var bn=cy;
var aB={};
var ao=(Object.freeze||Object)({"default":aB});
var aW=(ao&&aB)||ao;
var b1=typeof cg!=="undefined"?cg:typeof window!=="undefined"?window:{};
var cJ;
if(typeof document!=="undefined"){cJ=document
}else{cJ=b1["__GLOBAL_DOCUMENT_CACHE@4"];
if(!cJ){cJ=b1["__GLOBAL_DOCUMENT_CACHE@4"]=aW
}}var cl=cJ;
var dq=bn.navigator&&bn.navigator.userAgent||"";
var eK=/AppleWebKit\/([\d.]+)/i.exec(dq);
var d5=eK?parseFloat(eK.pop()):null;
var D=/iPad/i.test(dq);
var cB=/iPhone/i.test(dq)&&!D;
var cw=/iPod/i.test(dq);
var cG=cB||D||cw;
var bN=function(){var fe=dq.match(/OS (\d+)_/i);
if(fe&&fe[1]){return fe[1]
}return null
}();
var cv=/Android/i.test(dq);
var ei=function(){var ff=dq.match(/Android (\d+)(?:\.(\d+))?(?:\.(\d+))*/i);
if(!ff){return null
}var fe=ff[1]&&parseFloat(ff[1]);
var fg=ff[2]&&parseFloat(ff[2]);
if(fe&&fg){return parseFloat(ff[1]+"."+ff[2])
}else{if(fe){return fe
}}return null
}();
var ar=cv&&/webkit/i.test(dq)&&ei<2.3;
var d6=cv&&ei<5&&d5<537;
var dZ=/Firefox/i.test(dq);
var aR=/Edge/i.test(dq);
var cO=!aR&&/Chrome/i.test(dq);
var be=function(){var fe=dq.match(/Chrome\/(\d+)/);
if(fe&&fe[1]){return parseFloat(fe[1])
}return null
}();
var e7=/MSIE\s8\.0/.test(dq);
var di=function(){var fe=/MSIE\s(\d+)\.\d/.exec(dq);
var ff=fe&&parseFloat(fe[1]);
if(!ff&&/Trident\/7.0/i.test(dq)&&/rv:11.0/.test(dq)){ff=11
}return ff
}();
var aF=/Safari/i.test(dq)&&!cO&&!cv&&!aR;
var S=aF||cG;
var eo=ew()&&("ontouchstart" in bn||bn.DocumentTouch&&bn.document instanceof bn.DocumentTouch);
var dc=ew()&&"backgroundSize" in bn.document.createElement("video").style;
var dH=(Object.freeze||Object)({IS_IPAD:D,IS_IPHONE:cB,IS_IPOD:cw,IS_IOS:cG,IOS_VERSION:bN,IS_ANDROID:cv,ANDROID_VERSION:ei,IS_OLD_ANDROID:ar,IS_NATIVE_ANDROID:d6,IS_FIREFOX:dZ,IS_EDGE:aR,IS_CHROME:cO,CHROME_VERSION:be,IS_IE8:e7,IE_VERSION:di,IS_SAFARI:aF,IS_ANY_SAFARI:S,TOUCH_ENABLED:eo,BACKGROUND_SIZE_SUPPORTED:dc});
var bK=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(fe){return typeof fe
}:function(fe){return fe&&typeof Symbol==="function"&&fe.constructor===Symbol&&fe!==Symbol.prototype?"symbol":typeof fe
};
var H=function(fe,ff){if(!(fe instanceof ff)){throw new TypeError("Cannot call a class as a function")
}};
var cY=function(ff,fe){if(typeof fe!=="function"&&fe!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof fe)
}ff.prototype=Object.create(fe&&fe.prototype,{constructor:{value:ff,enumerable:false,writable:true,configurable:true}});
if(fe){Object.setPrototypeOf?Object.setPrototypeOf(ff,fe):ff.__proto__=fe
}};
var eM=function(fe,ff){if(!fe){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
}return ff&&(typeof ff==="object"||typeof ff==="function")?ff:fe
};
var Z=function(fe,ff){fe.raw=ff;
return fe
};
var d1=Object.prototype.toString;
var b3=function b3(fe){return t(fe)?Object.keys(fe):[]
};
function bQ(fe,ff){b3(fe).forEach(function(fg){return ff(fe[fg],fg)
})
}function bd(ff,fg){var fe=arguments.length>2&&arguments[2]!==undefined?arguments[2]:0;
return b3(ff).reduce(function(fh,fi){return fg(fh,ff[fi],fi)
},fe)
}function fd(fh){for(var fe=arguments.length,ff=Array(fe>1?fe-1:0),fg=1;
fg<fe;
fg++){ff[fg-1]=arguments[fg]
}if(Object.assign){return Object.assign.apply(Object,[fh].concat(ff))
}ff.forEach(function(fi){if(!fi){return
}bQ(fi,function(fk,fj){fh[fj]=fk
})
});
return fh
}function t(fe){return !!fe&&(typeof fe==="undefined"?"undefined":bK(fe))==="object"
}function W(fe){return t(fe)&&d1.call(fe)==="[object Object]"&&fe.constructor===Object
}var v=void 0;
var cD="all";
var eE=[];
var O=function O(fi,fg){var fj=arguments.length>2&&arguments[2]!==undefined?arguments[2]:!!di&&di<11;
var ff=v.levels[cD];
var fe=new RegExp("^("+ff+")$");
if(fi!=="log"){fg.unshift(fi.toUpperCase()+":")
}if(eE){eE.push([].concat(fg))
}fg.unshift("VIDEOJS:");
var fh=bn.console&&bn.console[fi];
if(!fh||!ff||!fe.test(fi)){return
}if(fj){fg=fg.map(function(fl){if(t(fl)||Array.isArray(fl)){try{return JSON.stringify(fl)
}catch(fk){return String(fl)
}}return String(fl)
}).join(" ")
}if(!fh.apply){fh(fg)
}else{fh[Array.isArray(fg)?"apply":"call"](bn.console,fg)
}};
v=function v(){for(var fe=arguments.length,ff=Array(fe),fg=0;
fg<fe;
fg++){ff[fg]=arguments[fg]
}O("log",ff)
};
v.levels={all:"log|warn|error",error:"error",off:"",warn:"warn|error",DEFAULT:cD};
v.level=function(fe){if(typeof fe==="string"){if(!v.levels.hasOwnProperty(fe)){throw new Error('"'+fe+'" in not a valid log level')
}cD=fe
}return cD
};
v.history=function(){return eE?[].concat(eE):[]
};
v.history.clear=function(){if(eE){eE.length=0
}};
v.history.disable=function(){if(eE!==null){eE.length=0;
eE=null
}};
v.history.enable=function(){if(eE===null){eE=[]
}};
v.error=function(){for(var fe=arguments.length,fg=Array(fe),ff=0;
ff<fe;
ff++){fg[ff]=arguments[ff]
}return O("error",fg)
};
v.warn=function(){for(var fg=arguments.length,ff=Array(fg),fe=0;
fe<fg;
fe++){ff[fe]=arguments[fe]
}return O("warn",ff)
};
var c6=v;
function dM(fe){return fe.replace(/\n\r?\s*/g,"")
}var eb=function eb(fe){var fg="",ff=0;
for(;
ff<arguments.length;
ff++){fg+=dM(fe[ff])+(arguments[ff+1]||"")
}return fg
};
function b9(ff,fg){if(!ff||!fg){return""
}if(typeof bn.getComputedStyle==="function"){var fe=bn.getComputedStyle(ff);
return fe?fe[fg]:""
}return ff.currentStyle[fg]||""
}var a3=Z(["Setting attributes in the second argument of createEl()\n                has been deprecated. Use the third argument instead.\n                createEl(type, properties, attributes). Attempting to set "," to ","."],["Setting attributes in the second argument of createEl()\n                has been deprecated. Use the third argument instead.\n                createEl(type, properties, attributes). Attempting to set "," to ","."]);
function bm(fe){return typeof fe==="string"&&/\S/.test(fe)
}function eq(fe){if(/\s/.test(fe)){throw new Error("class has illegal whitespace characters")
}}function dD(fe){return new RegExp("(^|\\s)"+fe+"($|\\s)")
}function ew(){return(cl===bn.document&&typeof cl.createElement!=="undefined")
}function dx(fe){return t(fe)&&fe.nodeType===1
}function el(fe){return function(ff,fh){if(!bm(ff)){return cl[fe](null)
}if(bm(fh)){fh=cl.querySelector(fh)
}var fg=dx(fh)?fh:cl;
return fg[fe]&&fg[fe](ff)
}
}function bu(){var fg=arguments.length>0&&arguments[0]!==undefined?arguments[0]:"div";
var ff=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};
var fe=arguments.length>2&&arguments[2]!==undefined?arguments[2]:{};
var fi=arguments[3];
var fh=cl.createElement(fg);
Object.getOwnPropertyNames(ff).forEach(function(fj){var fk=ff[fj];
if(fj.indexOf("aria-")!==-1||fj==="role"||fj==="type"){c6.warn(eb(a3,fj,fk));
fh.setAttribute(fj,fk)
}else{if(fj==="textContent"){dF(fh,fk)
}else{fh[fj]=fk
}}});
Object.getOwnPropertyNames(fe).forEach(function(fj){fh.setAttribute(fj,fe[fj])
});
if(fi){ds(fh,fi)
}return fh
}function dF(fe,ff){if(typeof fe.textContent==="undefined"){fe.innerText=ff
}else{fe.textContent=ff
}return fe
}function K(ff,fe){if(fe.firstChild){fe.insertBefore(ff,fe.firstChild)
}else{fe.appendChild(ff)
}}function eL(ff,fe){eq(fe);
if(ff.classList){return ff.classList.contains(fe)
}return dD(fe).test(ff.className)
}function eB(fe,ff){if(fe.classList){fe.classList.add(ff)
}else{if(!eL(fe,ff)){fe.className=(fe.className+" "+ff).trim()
}}return fe
}function eP(ff,fe){if(ff.classList){ff.classList.remove(fe)
}else{eq(fe);
ff.className=ff.className.split(/\s+/).filter(function(fg){return fg!==fe
}).join(" ")
}return ff
}function bv(fh,ff,fe){var fg=eL(fh,ff);
if(typeof fe==="function"){fe=fe(fh,ff)
}if(typeof fe!=="boolean"){fe=!fg
}if(fe===fg){return
}if(fe){eB(fh,ff)
}else{eP(fh,ff)
}return fh
}function aG(ff,fe){Object.getOwnPropertyNames(fe).forEach(function(fg){var fh=fe[fg];
if(fh===null||typeof fh==="undefined"||fh===false){ff.removeAttribute(fg)
}else{ff.setAttribute(fg,fh===true?"":fh)
}})
}function dN(fe){var fk={};
var ff=",autoplay,controls,playsinline,loop,muted,default,defaultMuted,";
if(fe&&fe.attributes&&fe.attributes.length>0){var fh=fe.attributes;
for(var fj=fh.length-1;
fj>=0;
fj--){var fi=fh[fj].name;
var fg=fh[fj].value;
if(typeof fe[fi]==="boolean"||ff.indexOf(","+fi+",")!==-1){fg=fg!==null?true:false
}fk[fi]=fg
}}return fk
}function Y(fe,ff){return fe.getAttribute(ff)
}function j(fe,ff,fg){fe.setAttribute(ff,fg)
}function cU(fe,ff){fe.removeAttribute(ff)
}function ax(){cl.body.focus();
cl.onselectstart=function(){return false
}
}function at(){cl.onselectstart=function(){return true
}
}function bG(ff){if(ff&&ff.getBoundingClientRect&&ff.parentNode){var fg=ff.getBoundingClientRect();
var fe={};
["bottom","height","left","right","top","width"].forEach(function(fh){if(fg[fh]!==undefined){fe[fh]=fg[fh]
}});
if(!fe.height){fe.height=parseFloat(b9(ff,"height"))
}if(!fe.width){fe.width=parseFloat(b9(ff,"width"))
}return fe
}}function b(fg){var fk=void 0;
if(fg.getBoundingClientRect&&fg.parentNode){fk=fg.getBoundingClientRect()
}if(!fk){return{left:0,top:0}
}var ff=cl.documentElement;
var fl=cl.body;
var fm=ff.clientLeft||fl.clientLeft||0;
var fi=bn.pageXOffset||fl.scrollLeft;
var fh=fk.left+fi-fm;
var fj=ff.clientTop||fl.clientTop||0;
var fe=bn.pageYOffset||fl.scrollTop;
var fn=fk.top+fe-fj;
return{left:Math.round(fh),top:Math.round(fn)}
}function cR(fg,ff){var fk={};
var fj=b(fg);
var fe=fg.offsetWidth;
var fl=fg.offsetHeight;
var fm=fj.top;
var fn=fj.left;
var fh=ff.pageY;
var fi=ff.pageX;
if(ff.changedTouches){fi=ff.changedTouches[0].pageX;
fh=ff.changedTouches[0].pageY
}fk.y=Math.max(0,Math.min(1,(fm-fh+fl)/fl));
fk.x=Math.max(0,Math.min(1,(fi-fn)/fe));
return fk
}function b8(fe){return t(fe)&&fe.nodeType===3
}function dR(fe){while(fe.firstChild){fe.removeChild(fe.firstChild)
}return fe
}function a0(fe){if(typeof fe==="function"){fe=fe()
}return(Array.isArray(fe)?fe:[fe]).map(function(ff){if(typeof ff==="function"){ff=ff()
}if(dx(ff)||b8(ff)){return ff
}if(typeof ff==="string"&&/\S/.test(ff)){return cl.createTextNode(ff)
}}).filter(function(ff){return ff
})
}function ds(fe,ff){a0(ff).forEach(function(fg){return fe.appendChild(fg)
});
return fe
}function cu(fe,ff){return ds(dR(fe),ff)
}var e3=el("querySelector");
var ct=el("querySelectorAll");
var aw=(Object.freeze||Object)({isReal:ew,isEl:dx,createEl:bu,textContent:dF,prependTo:K,hasClass:eL,addClass:eB,removeClass:eP,toggleClass:bv,setAttributes:aG,getAttributes:dN,getAttribute:Y,setAttribute:j,removeAttribute:cU,blockTextSelection:ax,unblockTextSelection:at,getBoundingClientRect:bG,findPosition:b,getPointerPosition:cR,isTextNode:b8,emptyEl:dR,normalizeContent:a0,appendContent:ds,insertContent:cu,$:e3,$$:ct});
var en=1;
function cn(){return en++
}var e4={};
var cP="vdata"+new Date().getTime();
function br(fe){var ff=fe[cP];
if(!ff){ff=fe[cP]=cn()
}if(!e4[ff]){e4[ff]={}
}return e4[ff]
}function ey(fe){var ff=fe[cP];
if(!ff){return false
}return !!Object.getOwnPropertyNames(e4[ff]).length
}function F(fe){var fg=fe[cP];
if(!fg){return
}delete e4[fg];
try{delete fe[cP]
}catch(ff){if(fe.removeAttribute){fe.removeAttribute(cP)
}else{fe[cP]=null
}}}function U(ff,fe){var fg=br(ff);
if(fg.handlers[fe].length===0){delete fg.handlers[fe];
if(ff.removeEventListener){ff.removeEventListener(fe,fg.dispatcher,false)
}else{if(ff.detachEvent){ff.detachEvent("on"+fe,fg.dispatcher)
}}}if(Object.getOwnPropertyNames(fg.handlers).length<=0){delete fg.handlers;
delete fg.dispatcher;
delete fg.disabled
}if(Object.getOwnPropertyNames(fg).length===0){F(ff)
}}function dE(ff,fg,fe,fh){fe.forEach(function(fi){ff(fg,fi,fh)
})
}function dV(fi){function fk(){return true
}function fh(){return false
}if(!fi||!fi.isPropagationStopped){var ff=fi||bn.event;
fi={};
for(var fg in ff){if(fg!=="layerX"&&fg!=="layerY"&&fg!=="keyLocation"&&fg!=="webkitMovementX"&&fg!=="webkitMovementY"){if(!(fg==="returnValue"&&ff.preventDefault)){fi[fg]=ff[fg]
}}}if(!fi.target){fi.target=fi.srcElement||cl
}if(!fi.relatedTarget){fi.relatedTarget=fi.fromElement===fi.target?fi.toElement:fi.fromElement
}fi.preventDefault=function(){if(ff.preventDefault){ff.preventDefault()
}fi.returnValue=false;
ff.returnValue=false;
fi.defaultPrevented=true
};
fi.defaultPrevented=false;
fi.stopPropagation=function(){if(ff.stopPropagation){ff.stopPropagation()
}fi.cancelBubble=true;
ff.cancelBubble=true;
fi.isPropagationStopped=fk
};
fi.isPropagationStopped=fh;
fi.stopImmediatePropagation=function(){if(ff.stopImmediatePropagation){ff.stopImmediatePropagation()
}fi.isImmediatePropagationStopped=fk;
fi.stopPropagation()
};
fi.isImmediatePropagationStopped=fh;
if(fi.clientX!==null&&fi.clientX!==undefined){var fj=cl.documentElement;
var fe=cl.body;
fi.pageX=fi.clientX+(fj&&fj.scrollLeft||fe&&fe.scrollLeft||0)-(fj&&fj.clientLeft||fe&&fe.clientLeft||0);
fi.pageY=fi.clientY+(fj&&fj.scrollTop||fe&&fe.scrollTop||0)-(fj&&fj.clientTop||fe&&fe.clientTop||0)
}fi.which=fi.charCode||fi.keyCode;
if(fi.button!==null&&fi.button!==undefined){fi.button=fi.button&1?0:fi.button&4?1:fi.button&2?2:0
}}return fi
}var b0=false;
(function(){try{var ff=Object.defineProperty({},"passive",{get:function fe(){b0=true
}});
bn.addEventListener("test",null,ff)
}catch(fg){}})();
var d=["touchstart","touchmove"];
function bF(fh,fg,ff){if(Array.isArray(fg)){return dE(bF,fh,fg,ff)
}var fi=br(fh);
if(!fi.handlers){fi.handlers={}
}if(!fi.handlers[fg]){fi.handlers[fg]=[]
}if(!ff.guid){ff.guid=cn()
}fi.handlers[fg].push(ff);
if(!fi.dispatcher){fi.disabled=false;
fi.dispatcher=function(fl,fo){if(fi.disabled){return
}fl=dV(fl);
var fk=fi.handlers[fl.type];
if(fk){var fm=fk.slice(0);
for(var fj=0,fp=fm.length;
fj<fp;
fj++){if(fl.isImmediatePropagationStopped()){break
}else{try{fm[fj].call(fh,fl,fo)
}catch(fn){c6.error(fn)
}}}}}
}if(fi.handlers[fg].length===1){if(fh.addEventListener){var fe=false;
if(b0&&d.indexOf(fg)>-1){fe={passive:true}
}fh.addEventListener(fg,fi.dispatcher,fe)
}else{if(fh.attachEvent){fh.attachEvent("on"+fg,fi.dispatcher)
}}}}function dn(fi,fh,fg){if(!ey(fi)){return
}var fj=br(fi);
if(!fj.handlers){return
}if(Array.isArray(fh)){return dE(dn,fi,fh,fg)
}var fk=function fk(fm){fj.handlers[fm]=[];
U(fi,fm)
};
if(!fh){for(var ff in fj.handlers){fk(ff)
}return
}var fe=fj.handlers[fh];
if(!fe){return
}if(!fg){fk(fh);
return
}if(fg.guid){for(var fl=0;
fl<fe.length;
fl++){if(fe[fl].guid===fg.guid){fe.splice(fl--,1)
}}}U(fi,fh)
}function b2(fh,fg,fi){var fe=ey(fh)?br(fh):{};
var ff=fh.parentNode||fh.ownerDocument;
if(typeof fg==="string"){fg={type:fg,target:fh}
}fg=dV(fg);
if(fe.dispatcher){fe.dispatcher.call(fh,fg,fi)
}if(ff&&!fg.isPropagationStopped()&&fg.bubbles===true){b2.call(null,ff,fg,fi)
}else{if(!ff&&!fg.defaultPrevented){var fj=br(fg.target);
if(fg.target[fg.type]){fj.disabled=true;
if(typeof fg.target[fg.type]==="function"){fg.target[fg.type]()
}fj.disabled=false
}}}return !fg.defaultPrevented
}function bt(fh,ff,fe){if(Array.isArray(ff)){return dE(bt,fh,ff,fe)
}var fg=function fg(){dn(fh,ff,fg);
fe.apply(this,arguments)
};
fg.guid=fe.guid=fe.guid||cn();
bF(fh,ff,fg)
}var b7=(Object.freeze||Object)({fixEvent:dV,on:bF,off:dn,trigger:b2,one:bt});
var cc=false;
var ef=void 0;
var a4=function a4(){if(!ew()){return
}var fe=cl.getElementsByTagName("video");
var fl=cl.getElementsByTagName("audio");
var fm=[];
if(fe&&fe.length>0){for(var fi=0,fk=fe.length;
fi<fk;
fi++){fm.push(fe[fi])
}}if(fl&&fl.length>0){for(var fg=0,fj=fl.length;
fg<fj;
fg++){fm.push(fl[fg])
}}if(fm&&fm.length>0){for(var fn=0,ff=fm.length;
fn<ff;
fn++){var fh=fm[fn];
if(fh&&fh.getAttribute){if(fh.player===undefined){var fo=fh.getAttribute("data-setup");
if(fo!==null){ef(fh)
}}}else{bC(1);
break
}}}else{if(!cc){bC(1)
}}};
function bC(fe,ff){if(ff){ef=ff
}bn.setTimeout(a4,fe)
}if(ew()&&cl.readyState==="complete"){cc=true
}else{bt(bn,"load",function(){cc=true
})
}var m=function m(ff){var fe=cl.createElement("style");
fe.className=ff;
return fe
};
var p=function p(fe,ff){if(fe.styleSheet){fe.styleSheet.cssText=ff
}else{fe.textContent=ff
}};
var ca=function ca(ff,fh,fe){if(!fh.guid){fh.guid=cn()
}var fg=function fg(){return fh.apply(ff,arguments)
};
fg.guid=fe?fe+"_"+fh.guid:fh.guid;
return fg
};
var a6=function a6(ff,fh){var fg=Date.now();
var fe=function fe(){var fi=Date.now();
if(fi-fg>=fh){ff.apply(undefined,arguments);
fg=fi
}};
return fe
};
var bl=function bl(){};
bl.prototype.allowedEvents_={};
bl.prototype.on=function(fg,ff){var fe=this.addEventListener;
this.addEventListener=function(){};
bF(this,fg,ff);
this.addEventListener=fe
};
bl.prototype.addEventListener=bl.prototype.on;
bl.prototype.off=function(ff,fe){dn(this,ff,fe)
};
bl.prototype.removeEventListener=bl.prototype.off;
bl.prototype.one=function(fg,ff){var fe=this.addEventListener;
this.addEventListener=function(){};
bt(this,fg,ff);
this.addEventListener=fe
};
bl.prototype.trigger=function(ff){var fe=ff.type||ff;
if(typeof ff==="string"){ff={type:fe}
}ff=dV(ff);
if(this.allowedEvents_[fe]&&this["on"+fe]){this["on"+fe](ff)
}b2(this,ff)
};
bl.prototype.dispatchEvent=bl.prototype.trigger;
var du=function du(fe){return fe instanceof bl||!!fe.eventBusEl_&&["on","one","off","trigger"].every(function(ff){return typeof fe[ff]==="function"
})
};
var eA=function eA(fe){return(typeof fe==="string"&&/\S/.test(fe)||Array.isArray(fe)&&!!fe.length)
};
var aM=function aM(fe){if(!fe.nodeName&&!du(fe)){throw new Error("Invalid target; must be a DOM node or evented object.")
}};
var eQ=function eQ(fe){if(!eA(fe)){throw new Error("Invalid event type; must be a non-empty string or array.")
}};
var d3=function d3(fe){if(typeof fe!=="function"){throw new Error("Invalid listener; must be a function.")
}};
var e5=function e5(fe,ff){var fi=ff.length<3||ff[0]===fe||ff[0]===fe.eventBusEl_;
var fj=void 0;
var fg=void 0;
var fh=void 0;
if(fi){fj=fe.eventBusEl_;
if(ff.length>=3){ff.shift()
}fg=ff[0];
fh=ff[1]
}else{fj=ff[0];
fg=ff[1];
fh=ff[2]
}aM(fj);
eQ(fg);
d3(fh);
fh=ca(fe,fh);
return{isTargetingSelf:fi,target:fj,type:fg,listener:fh}
};
var bZ=function bZ(fg,fh,fe,ff){aM(fg);
if(fg.nodeName){b7[fh](fg,fe,ff)
}else{fg[fh](fe,ff)
}};
var cK={on:function aJ(){var fi=this;
for(var fn=arguments.length,fl=Array(fn),ff=0;
ff<fn;
ff++){fl[ff]=arguments[ff]
}var fk=e5(this,fl),fo=fk.isTargetingSelf,fj=fk.target,fm=fk.type,fh=fk.listener;
bZ(fj,"on",fm,fh);
if(!fo){var fe=function fe(){return fi.off(fj,fm,fh)
};
fe.guid=fh.guid;
var fg=function fg(){return fi.off("dispose",fe)
};
fg.guid=fh.guid;
bZ(this,"on","dispose",fe);
bZ(fj,"on","dispose",fg)
}},one:function bE(){var fj=this;
for(var ff=arguments.length,fk=Array(ff),fh=0;
fh<ff;
fh++){fk[fh]=arguments[fh]
}var fm=e5(this,fk),fn=fm.isTargetingSelf,fi=fm.target,fl=fm.type,fg=fm.listener;
if(fn){bZ(fi,"one",fl,fg)
}else{var fe=function fe(){for(var fq=arguments.length,fp=Array(fq),fo=0;
fo<fq;
fo++){fp[fo]=arguments[fo]
}fj.off(fi,fl,fe);
fg.apply(null,fp)
};
fe.guid=fg.guid;
bZ(fi,"one",fl,fe)
}},off:function E(fg,fe,fh){if(!fg||eA(fg)){dn(this.eventBusEl_,fg,fe)
}else{var fi=fg;
var ff=fe;
aM(fi);
eQ(ff);
d3(fh);
fh=ca(this,fh);
this.off("dispose",fh);
if(fi.nodeName){dn(fi,ff,fh);
dn(fi,"dispose",fh)
}else{if(du(fi)){fi.off(ff,fh);
fi.off("dispose",fh)
}}}},trigger:function bz(fe,ff){return b2(this.eventBusEl_,fe,ff)
}};
function aZ(fg){var fe=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};
var ff=fe.eventBusKey;
if(ff){if(!fg[ff].nodeName){throw new Error('The eventBusKey "'+ff+'" does not refer to an element.')
}fg.eventBusEl_=fg[ff]
}else{fg.eventBusEl_=bu("span",{className:"vjs-event-bus"})
}fd(fg,cK);
fg.on("dispose",function(){return fg.off()
});
return fg
}var a8={state:{},setState:function e6(fe){var fg=this;
if(typeof fe==="function"){fe=fe()
}var ff=void 0;
bQ(fe,function(fi,fh){if(fg.state[fh]!==fi){ff=ff||{};
ff[fh]={from:fg.state[fh],to:fi}
}fg.state[fh]=fi
});
if(ff&&du(this)){this.trigger({changes:ff,type:"statechanged"})
}return ff
}};
function bW(ff,fe){fd(ff,a8);
ff.state=fd({},ff.state,fe);
if(typeof ff.handleStateChanged==="function"&&du(ff)){ff.on("statechanged",ff.handleStateChanged)
}return ff
}function e8(fe){if(typeof fe!=="string"){return fe
}return fe.charAt(0).toUpperCase()+fe.slice(1)
}function dl(ff,fe){return e8(ff)===e8(fe)
}function cS(){var fe={};
for(var ff=arguments.length,fg=Array(ff),fh=0;
fh<ff;
fh++){fg[fh]=arguments[fh]
}fg.forEach(function(fi){if(!fi){return
}bQ(fi,function(fk,fj){if(!W(fk)){fe[fj]=fk;
return
}if(!W(fe[fj])){fe[fj]={}
}fe[fj]=cS(fe[fj],fk)
})
});
return fe
}var eN=function(){function fr(f5,f4,f6){H(this,fr);
if(!f5&&this.play){this.player_=f5=this
}else{this.player_=f5
}this.options_=cS({},this.options_);
f4=this.options_=cS(this.options_,f4);
this.id_=f4.id||f4.el&&f4.el.id;
if(!this.id_){var f7=f5&&f5.id&&f5.id()||"no_player";
this.id_=f7+"_component_"+cn()
}this.name_=f4.name||null;
if(f4.el){this.el_=f4.el
}else{if(f4.createEl!==false){this.el_=this.createEl()
}}aZ(this,{eventBusKey:this.el_?"el_":null});
bW(this,this.constructor.defaultState);
this.children_=[];
this.childIndex_={};
this.childNameIndex_={};
if(f4.initChildren!==false){this.initChildren()
}this.ready(f6);
if(f4.reportTouchActivity!==false){this.enableTouchActivity()
}}fr.prototype.dispose=function fF(){this.trigger({type:"dispose",bubbles:false});
if(this.children_){for(var f4=this.children_.length-1;
f4>=0;
f4--){if(this.children_[f4].dispose){this.children_[f4].dispose()
}}}this.children_=null;
this.childIndex_=null;
this.childNameIndex_=null;
if(this.el_){if(this.el_.parentNode){this.el_.parentNode.removeChild(this.el_)
}F(this.el_);
this.el_=null
}};
fr.prototype.player=function fX(){return this.player_
};
fr.prototype.options=function fE(f4){c6.warn("this.options() has been deprecated and will be moved to the constructor in 6.0");
if(!f4){return this.options_
}this.options_=cS(this.options_,f4);
return this.options_
};
fr.prototype.el=function fY(){return this.el_
};
fr.prototype.createEl=function f1(f6,f5,f4){return bu(f6,f5,f4)
};
fr.prototype.localize=function fL(f7,f9){var ga=arguments.length>2&&arguments[2]!==undefined?arguments[2]:f7;
var f4=this.player_.language&&this.player_.language();
var f5=this.player_.languages&&this.player_.languages();
var f6=f5&&f5[f4];
var gb=f4&&f4.split("-")[0];
var gc=f5&&f5[gb];
var f8=ga;
if(f6&&f6[f7]){f8=f6[f7]
}else{if(gc&&gc[f7]){f8=gc[f7]
}}if(f9){f8=f8.replace(/\{(\d+)\}/g,function(gf,ge){var gg=f9[ge-1];
var gd=gg;
if(typeof gg==="undefined"){gd=gf
}return gd
})
}return f8
};
fr.prototype.contentEl=function fA(){return this.contentEl_||this.el_
};
fr.prototype.id=function fO(){return this.id_
};
fr.prototype.name=function fs(){return this.name_
};
fr.prototype.children=function fy(){return this.children_
};
fr.prototype.getChildById=function fn(f4){return this.childIndex_[f4]
};
fr.prototype.getChild=function fh(f4){if(!f4){return
}f4=e8(f4);
return this.childNameIndex_[f4]
};
fr.prototype.addChild=function fx(f5){var gc=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};
var f7=arguments.length>2&&arguments[2]!==undefined?arguments[2]:this.children_.length;
var f9=void 0;
var f8=void 0;
if(typeof f5==="string"){f8=e8(f5);
var ga=gc.componentClass||f8;
gc.name=f8;
var f4=fr.getComponent(ga);
if(!f4){throw new Error("Component "+ga+" does not exist")
}if(typeof f4!=="function"){return null
}f9=new f4(this.player_||this,gc)
}else{f9=f5
}this.children_.splice(f7,0,f9);
if(typeof f9.id==="function"){this.childIndex_[f9.id()]=f9
}f8=f8||f9.name&&e8(f9.name());
if(f8){this.childNameIndex_[f8]=f9
}if(typeof f9.el==="function"&&f9.el()){var gb=this.contentEl().children;
var f6=gb[f7]||null;
this.contentEl().insertBefore(f9.el(),f6)
}return f9
};
fr.prototype.removeChild=function fo(f5){if(typeof f5==="string"){f5=this.getChild(f5)
}if(!f5||!this.children_){return
}var f4=false;
for(var f6=this.children_.length-1;
f6>=0;
f6--){if(this.children_[f6]===f5){f4=true;
this.children_.splice(f6,1);
break
}}if(!f4){return
}this.childIndex_[f5.id()]=null;
this.childNameIndex_[f5.name()]=null;
var f7=f5.el();
if(f7&&f7.parentNode===this.contentEl()){this.contentEl().removeChild(f5.el())
}};
fr.prototype.initChildren=function fQ(){var f9=this;
var f7=this.options_.children;
if(f7){var f4=this.options_;
var f6=function f6(gd){var gb=gd.name;
var gc=gd.opts;
if(f4[gb]!==undefined){gc=f4[gb]
}if(gc===false){return
}if(gc===true){gc={}
}gc.playerOptions=f9.options_.playerOptions;
var ga=f9.addChild(gb,gc);
if(ga){f9[gb]=ga
}};
var f5=void 0;
var f8=fr.getComponent("Tech");
if(Array.isArray(f7)){f5=f7
}else{f5=Object.keys(f7)
}f5.concat(Object.keys(this.options_).filter(function(ga){return !f5.some(function(gb){if(typeof gb==="string"){return ga===gb
}return ga===gb.name
})
})).map(function(gc){var ga=void 0;
var gb=void 0;
if(typeof gc==="string"){ga=gc;
gb=f7[ga]||f9.options_[ga]||{}
}else{ga=gc.name;
gb=gc
}return{name:ga,opts:gb}
}).filter(function(gb){var ga=fr.getComponent(gb.opts.componentClass||e8(gb.name));
return ga&&!f8.isTech(ga)
}).forEach(f6)
}};
fr.prototype.buildCSSClass=function fZ(){return""
};
fr.prototype.ready=function fk(f4){var f5=arguments.length>1&&arguments[1]!==undefined?arguments[1]:false;
if(f4){if(this.isReady_){if(f5){f4.call(this)
}else{this.setTimeout(f4,1)
}}else{this.readyQueue_=this.readyQueue_||[];
this.readyQueue_.push(f4)
}}};
fr.prototype.triggerReady=function fe(){this.isReady_=true;
this.setTimeout(function(){var f4=this.readyQueue_;
this.readyQueue_=[];
if(f4&&f4.length>0){f4.forEach(function(f5){f5.call(this)
},this)
}this.trigger("ready")
},1)
};
fr.prototype.$=function fw(f4,f5){return e3(f4,f5||this.contentEl())
};
fr.prototype.$$=function fG(f4,f5){return ct(f4,f5||this.contentEl())
};
fr.prototype.hasClass=function fz(f4){return eL(this.el_,f4)
};
fr.prototype.addClass=function fM(f4){eB(this.el_,f4)
};
fr.prototype.removeClass=function fJ(f4){eP(this.el_,f4)
};
fr.prototype.toggleClass=function fp(f5,f4){bv(this.el_,f5,f4)
};
fr.prototype.show=function fP(){this.removeClass("vjs-hidden")
};
fr.prototype.hide=function fW(){this.addClass("vjs-hidden")
};
fr.prototype.lockShowing=function f3(){this.addClass("vjs-lock-showing")
};
fr.prototype.unlockShowing=function fq(){this.removeClass("vjs-lock-showing")
};
fr.prototype.getAttribute=function fB(f4){return Y(this.el_,f4)
};
fr.prototype.setAttribute=function fT(f4,f5){j(this.el_,f4,f5)
};
fr.prototype.removeAttribute=function fI(f4){cU(this.el_,f4)
};
fr.prototype.width=function ff(f4,f5){return this.dimension("width",f4,f5)
};
fr.prototype.height=function fg(f4,f5){return this.dimension("height",f4,f5)
};
fr.prototype.dimensions=function fR(f5,f4){this.width(f5,true);
this.height(f4)
};
fr.prototype.dimension=function fU(f8,f4,f7){if(f4!==undefined){if(f4===null||f4!==f4){f4=0
}if((""+f4).indexOf("%")!==-1||(""+f4).indexOf("px")!==-1){this.el_.style[f8]=f4
}else{if(f4==="auto"){this.el_.style[f8]=""
}else{this.el_.style[f8]=f4+"px"
}}if(!f7){this.trigger("componentresize")
}return
}if(!this.el_){return 0
}var f6=this.el_.style[f8];
var f5=f6.indexOf("px");
if(f5!==-1){return parseInt(f6.slice(0,f5),10)
}return parseInt(this.el_["offset"+e8(f8)],10)
};
fr.prototype.currentDimension=function fC(f7){var f5=0;
if(f7!=="width"&&f7!=="height"){throw new Error("currentDimension only accepts width or height value")
}if(typeof bn.getComputedStyle==="function"){var f4=bn.getComputedStyle(this.el_);
f5=f4.getPropertyValue(f7)||f4[f7]
}f5=parseFloat(f5);
if(f5===0){var f6="offset"+e8(f7);
f5=this.el_[f6]
}return f5
};
fr.prototype.currentDimensions=function fl(){return{width:this.currentDimension("width"),height:this.currentDimension("height")}
};
fr.prototype.currentWidth=function fD(){return this.currentDimension("width")
};
fr.prototype.currentHeight=function fu(){return this.currentDimension("height")
};
fr.prototype.focus=function fV(){this.el_.focus()
};
fr.prototype.blur=function fv(){this.el_.blur()
};
fr.prototype.emitTapEvents=function fi(){var f5=0;
var f8=null;
var f9=10;
var f4=200;
var f7=void 0;
this.on("touchstart",function(ga){if(ga.touches.length===1){f8={pageX:ga.touches[0].pageX,pageY:ga.touches[0].pageY};
f5=new Date().getTime();
f7=true
}});
this.on("touchmove",function(gb){if(gb.touches.length>1){f7=false
}else{if(f8){var ga=gb.touches[0].pageX-f8.pageX;
var gd=gb.touches[0].pageY-f8.pageY;
var gc=Math.sqrt(ga*ga+gd*gd);
if(gc>f9){f7=false
}}}});
var f6=function f6(){f7=false
};
this.on("touchleave",f6);
this.on("touchcancel",f6);
this.on("touchend",function(gb){f8=null;
if(f7===true){var ga=new Date().getTime()-f5;
if(ga<f4){gb.preventDefault();
this.trigger("tap")
}}})
};
fr.prototype.enableTouchActivity=function fj(){if(!this.player()||!this.player().reportUserActivity){return
}var f4=ca(this.player(),this.player().reportUserActivity);
var f6=void 0;
this.on("touchstart",function(){f4();
this.clearInterval(f6);
f6=this.setInterval(f4,250)
});
var f5=function f5(f7){f4();
this.clearInterval(f6)
};
this.on("touchmove",f4);
this.on("touchend",f5);
this.on("touchcancel",f5)
};
fr.prototype.setTimeout=function fS(f4,f5){f4=ca(this,f4);
var f6=bn.setTimeout(f4,f5);
var f7=function f7(){this.clearTimeout(f6)
};
f7.guid="vjs-timeout-"+f6;
this.on("dispose",f7);
return f6
};
fr.prototype.clearTimeout=function fH(f4){bn.clearTimeout(f4);
var f5=function f5(){};
f5.guid="vjs-timeout-"+f4;
this.off("dispose",f5);
return f4
};
fr.prototype.setInterval=function fm(f5,f4){f5=ca(this,f5);
var f6=bn.setInterval(f5,f4);
var f7=function f7(){this.clearInterval(f6)
};
f7.guid="vjs-interval-"+f6;
this.on("dispose",f7);
return f6
};
fr.prototype.clearInterval=function f0(f4){bn.clearInterval(f4);
var f5=function f5(){};
f5.guid="vjs-interval-"+f4;
this.off("dispose",f5);
return f4
};
fr.prototype.requestAnimationFrame=function ft(f4){var f5=this;
if(this.supportsRaf_){f4=ca(this,f4);
var f7=bn.requestAnimationFrame(f4);
var f6=function f6(){return f5.cancelAnimationFrame(f7)
};
f6.guid="vjs-raf-"+f7;
this.on("dispose",f6);
return f7
}return this.setTimeout(f4,1000/60)
};
fr.prototype.cancelAnimationFrame=function fK(f5){if(this.supportsRaf_){bn.cancelAnimationFrame(f5);
var f4=function f4(){};
f4.guid="vjs-raf-"+f5;
this.off("dispose",f4);
return f5
}return this.clearTimeout(f5)
};
fr.registerComponent=function fN(f5,f9){if(typeof f5!=="string"||!f5){throw new Error('Illegal component name, "'+f5+'"; must be a non-empty string.')
}var f4=fr.getComponent("Tech");
var ga=f4&&f4.isTech(f9);
var f6=fr===f9||fr.prototype.isPrototypeOf(f9.prototype);
if(ga||!f6){var gb=void 0;
if(ga){gb="techs must be registered using Tech.registerTech()"
}else{gb="must be a Component subclass"
}throw new Error('Illegal component, "'+f5+'"; '+gb+".")
}f5=e8(f5);
if(!fr.components_){fr.components_={}
}var f8=fr.getComponent("Player");
if(f5==="Player"&&f8&&f8.players){var f7=f8.players;
var gc=Object.keys(f7);
if(f7&&gc.length>0&&gc.map(function(gd){return f7[gd]
}).every(Boolean)){throw new Error("Can not register Player component after player has been created.")
}}fr.components_[f5]=f9;
return f9
};
fr.getComponent=function f2(f4){if(!f4){return
}f4=e8(f4);
if(fr.components_&&fr.components_[f4]){return fr.components_[f4]
}};
return fr
}();
eN.prototype.supportsRaf_=typeof bn.requestAnimationFrame==="function"&&typeof bn.cancelAnimationFrame==="function";
eN.registerComponent("Component",eN);
function e2(fg,fe,ff){if(typeof fe!=="number"||fe<0||fe>ff){throw new Error("Failed to execute '"+fg+"' on 'TimeRanges': The index provided ("+fe+") is non-numeric or out of bounds (0-"+ff+").")
}}function cq(fh,fg,ff,fe){e2(fh,fe,ff.length-1);
return ff[fe][fg]
}function q(ff){if(ff===undefined||ff.length===0){return{length:0,start:function fg(){throw new Error("This TimeRanges object is empty")
},end:function fe(){throw new Error("This TimeRanges object is empty")
}}
}return{length:ff.length,start:cq.bind(null,"start",0,ff),end:cq.bind(null,"end",1,ff)}
}function y(ff,fe){if(Array.isArray(ff)){return q(ff)
}else{if(ff===undefined||fe===undefined){return q()
}}return q([[ff,fe]])
}function bV(fh,fi){var fe=0;
var fj=void 0;
var ff=void 0;
if(!fi){return 0
}if(!fh||!fh.length){fh=y(0,0)
}for(var fg=0;
fg<fh.length;
fg++){fj=fh.start(fg);
ff=fh.end(fg);
if(ff>fi){ff=fi
}fe+=ff-fj
}return fe/fi
}var et={};
var eW=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]];
var eY=eW[0];
var dY=void 0;
for(var eu=0;
eu<eW.length;
eu++){if(eW[eu][1] in cl){dY=eW[eu];
break
}}if(dY){for(var k=0;
k<dY.length;
k++){et[eY[k]]=dY[k]
}}function a5(fe){if(fe instanceof a5){return fe
}if(typeof fe==="number"){this.code=fe
}else{if(typeof fe==="string"){this.message=fe
}else{if(t(fe)){if(typeof fe.code==="number"){this.code=fe.code
}fd(this,fe)
}}}if(!this.message){this.message=a5.defaultMessages[this.code]||""
}}a5.prototype.code=0;
a5.prototype.message="";
a5.prototype.status=null;
a5.errorTypes=["MEDIA_ERR_CUSTOM","MEDIA_ERR_ABORTED","MEDIA_ERR_NETWORK","MEDIA_ERR_DECODE","MEDIA_ERR_SRC_NOT_SUPPORTED","MEDIA_ERR_ENCRYPTED"];
a5.defaultMessages={1:"You aborted the media playback",2:"A network error caused the media download to fail part-way.",3:"The media playback was aborted due to a corruption problem or because the media used features your browser did not support.",4:"The media could not be loaded, either because the server or network failed or because the format is not supported.",5:"The media is encrypted and we do not have the keys to decrypt it."};
for(var c1=0;
c1<a5.errorTypes.length;
c1++){a5[a5.errorTypes[c1]]=c1;
a5.prototype[a5.errorTypes[c1]]=c1
}var dX=dr;
function dr(fi,fe){var fg;
var ff=null;
try{fg=JSON.parse(fi,fe)
}catch(fh){ff=fh
}return[ff,fg]
}var eG=function eG(fe){var ff=["kind","label","language","id","inBandMetadataTrackDispatchType","mode","src"].reduce(function(fh,fi,fg){if(fe[fi]){fh[fi]=fe[fi]
}return fh
},{cues:fe.cues&&Array.prototype.map.call(fe.cues,function(fg){return{startTime:fg.startTime,endTime:fg.endTime,text:fg.text,id:fg.id}
})});
return ff
};
var cE=function cE(fe){var fg=fe.$$("track");
var fh=Array.prototype.map.call(fg,function(fi){return fi.track
});
var ff=Array.prototype.map.call(fg,function(fi){var fj=eG(fi.track);
if(fi.src){fj.src=fi.src
}return fj
});
return ff.concat(Array.prototype.filter.call(fe.textTracks(),function(fi){return fh.indexOf(fi)===-1
}).map(eG))
};
var eI=function eI(ff,fe){ff.forEach(function(fg){var fh=fe.addRemoteTextTrack(fg).track;
if(!fg.src&&fg.cues){fg.cues.forEach(function(fi){return fh.addCue(fi)
})
}});
return fe.textTracks()
};
var ea={textTracksToJson:cE,jsonToTextTracks:eI,trackToJson_:eG};
var af="vjs-modal-dialog";
var R=27;
var cA=function(fw){cY(ft,fw);
function ft(fy,fx){H(this,ft);
var fz=eM(this,fw.call(this,fy,fx));
fz.opened_=fz.hasBeenOpened_=fz.hasBeenFilled_=false;
fz.closeable(!fz.options_.uncloseable);
fz.content(fz.options_.content);
fz.contentEl_=bu("div",{className:af+"-content"},{role:"document"});
fz.descEl_=bu("p",{className:af+"-description vjs-control-text",id:fz.el().getAttribute("aria-describedby")});
dF(fz.descEl_,fz.description());
fz.el_.appendChild(fz.descEl_);
fz.el_.appendChild(fz.contentEl_);
return fz
}ft.prototype.createEl=function fv(){return fw.prototype.createEl.call(this,"div",{className:this.buildCSSClass(),tabIndex:-1},{"aria-describedby":this.id()+"_description","aria-hidden":"true","aria-label":this.label(),role:"dialog"})
};
ft.prototype.buildCSSClass=function fh(){return af+" vjs-hidden "+fw.prototype.buildCSSClass.call(this)
};
ft.prototype.handleKeyPress=function ff(fx){if(fx.which===R&&this.closeable()){this.close()
}};
ft.prototype.label=function fj(){return this.localize(this.options_.label||"Modal Window")
};
ft.prototype.description=function fs(){var fx=this.options_.description||this.localize("This is a modal window.");
if(this.closeable()){fx+=" "+this.localize("This modal can be closed by pressing the Escape key or activating the close button.")
}return fx
};
ft.prototype.open=function fn(){if(!this.opened_){var fx=this.player();
this.trigger("beforemodalopen");
this.opened_=true;
if(this.options_.fillAlways||!this.hasBeenOpened_&&!this.hasBeenFilled_){this.fill()
}this.wasPlaying_=!fx.paused();
if(this.options_.pauseOnOpen&&this.wasPlaying_){fx.pause()
}if(this.closeable()){this.on(this.el_.ownerDocument,"keydown",ca(this,this.handleKeyPress))
}fx.controls(false);
this.show();
this.conditionalFocus_();
this.el().setAttribute("aria-hidden","false");
this.trigger("modalopen");
this.hasBeenOpened_=true
}};
ft.prototype.opened=function fu(fx){if(typeof fx==="boolean"){this[fx?"open":"close"]()
}return this.opened_
};
ft.prototype.close=function fo(){if(!this.opened_){return
}var fx=this.player();
this.trigger("beforemodalclose");
this.opened_=false;
if(this.wasPlaying_&&this.options_.pauseOnOpen){fx.play()
}if(this.closeable()){this.off(this.el_.ownerDocument,"keydown",ca(this,this.handleKeyPress))
}fx.controls(true);
this.hide();
this.el().setAttribute("aria-hidden","true");
this.trigger("modalclose");
this.conditionalBlur_();
if(this.options_.temporary){this.dispose()
}};
ft.prototype.closeable=function fp(fy){if(typeof fy==="boolean"){var fz=this.closeable_=!!fy;
var fA=this.getChild("closeButton");
if(fz&&!fA){var fx=this.contentEl_;
this.contentEl_=this.el_;
fA=this.addChild("closeButton",{controlText:"Close Modal Dialog"});
this.contentEl_=fx;
this.on(fA,"close",this.close)
}if(!fz&&fA){this.off(fA,"close",this.close);
this.removeChild(fA);
fA.dispose()
}}return this.closeable_
};
ft.prototype.fill=function fr(){this.fillWith(this.content())
};
ft.prototype.fillWith=function fi(fB){var fA=this.contentEl();
var fz=fA.parentNode;
var fy=fA.nextSibling;
this.trigger("beforemodalfill");
this.hasBeenFilled_=true;
fz.removeChild(fA);
this.empty();
cu(fA,fB);
this.trigger("modalfill");
if(fy){fz.insertBefore(fA,fy)
}else{fz.appendChild(fA)
}var fx=this.getChild("closeButton");
if(fx){fz.appendChild(fx.el_)
}};
ft.prototype.empty=function fk(){this.trigger("beforemodalempty");
dR(this.contentEl());
this.trigger("modalempty")
};
ft.prototype.content=function fq(fx){if(typeof fx!=="undefined"){this.content_=fx
}return this.content_
};
ft.prototype.conditionalFocus_=function fe(){var fy=cl.activeElement;
var fx=this.player_.el_;
this.previouslyActiveEl_=null;
if(fx.contains(fy)||fx===fy){this.previouslyActiveEl_=fy;
this.focus();
this.on(cl,"keydown",this.handleKeyDown)
}};
ft.prototype.conditionalBlur_=function fm(){if(this.previouslyActiveEl_){this.previouslyActiveEl_.focus();
this.previouslyActiveEl_=null
}this.off(cl,"keydown",this.handleKeyDown)
};
ft.prototype.handleKeyDown=function fl(fz){if(fz.which!==9){return
}var fy=this.focusableEls_();
var fA=this.el_.querySelector(":focus");
var fB=void 0;
for(var fx=0;
fx<fy.length;
fx++){if(fA===fy[fx]){fB=fx;
break
}}if(cl.activeElement===this.el_){fB=0
}if(fz.shiftKey&&fB===0){fy[fy.length-1].focus();
fz.preventDefault()
}else{if(!fz.shiftKey&&fB===fy.length-1){fy[0].focus();
fz.preventDefault()
}}};
ft.prototype.focusableEls_=function fg(){var fx=this.el_.querySelectorAll("*");
return Array.prototype.filter.call(fx,function(fy){return(fy instanceof bn.HTMLAnchorElement||fy instanceof bn.HTMLAreaElement)&&fy.hasAttribute("href")||(fy instanceof bn.HTMLInputElement||fy instanceof bn.HTMLSelectElement||fy instanceof bn.HTMLTextAreaElement||fy instanceof bn.HTMLButtonElement)&&!fy.hasAttribute("disabled")||fy instanceof bn.HTMLIFrameElement||fy instanceof bn.HTMLObjectElement||fy instanceof bn.HTMLEmbedElement||fy.hasAttribute("tabindex")&&fy.getAttribute("tabindex")!==-1||fy.hasAttribute("contenteditable")
})
};
return ft
}(eN);
cA.prototype.options_={pauseOnOpen:true,temporary:true};
eN.registerComponent("ModalDialog",cA);
var c4=function(fh){cY(fi,fh);
function fi(){var fk=arguments.length>0&&arguments[0]!==undefined?arguments[0]:[];
var fm;
var fn=arguments.length>1&&arguments[1]!==undefined?arguments[1]:null;
H(this,fi);
var fp=eM(this,fh.call(this));
if(!fn){fn=fp;
if(e7){fn=cl.createElement("custom");
for(var fo in fi.prototype){if(fo!=="constructor"){fn[fo]=fi.prototype[fo]
}}}}fn.tracks_=[];
Object.defineProperty(fn,"length",{get:function fj(){return this.tracks_.length
}});
for(var fl=0;
fl<fk.length;
fl++){fn.addTrack(fk[fl])
}return fm=fn,eM(fp,fm)
}fi.prototype.addTrack=function fe(fj){var fl=this.tracks_.length;
if(!(""+fl in this)){Object.defineProperty(this,fl,{get:function fk(){return this.tracks_[fl]
}})
}if(this.tracks_.indexOf(fj)===-1){this.tracks_.push(fj);
this.trigger({track:fj,type:"addtrack"})
}};
fi.prototype.removeTrack=function fg(fm){var fk=void 0;
for(var fl=0,fj=this.length;
fl<fj;
fl++){if(this[fl]===fm){fk=this[fl];
if(fk.off){fk.off()
}this.tracks_.splice(fl,1);
break
}}if(!fk){return
}this.trigger({track:fk,type:"removetrack"})
};
fi.prototype.getTrackById=function ff(fn){var fj=null;
for(var fm=0,fl=this.length;
fm<fl;
fm++){var fk=this[fm];
if(fk.id===fn){fj=fk;
break
}}return fj
};
return fi
}(bl);
c4.prototype.allowedEvents_={change:"change",addtrack:"addtrack",removetrack:"removetrack"};
for(var dh in c4.prototype.allowedEvents_){c4.prototype["on"+dh]=null
}var cm=function cm(fg,fe){for(var ff=0;
ff<fg.length;
ff++){if(!Object.keys(fg[ff]).length||fe.id===fg[ff].id){continue
}fg[ff].enabled=false
}};
var cT=function(ff){cY(fg,ff);
function fg(){var fn,fj;
var fh=arguments.length>0&&arguments[0]!==undefined?arguments[0]:[];
H(this,fg);
var fk=void 0;
for(var fi=fh.length-1;
fi>=0;
fi--){if(fh[fi].enabled){cm(fh,fh[fi]);
break
}}if(e7){fk=cl.createElement("custom");
for(var fm in c4.prototype){if(fm!=="constructor"){fk[fm]=c4.prototype[fm]
}}for(var fl in fg.prototype){if(fl!=="constructor"){fk[fl]=fg.prototype[fl]
}}}fk=(fn=eM(this,ff.call(this,fh,fk)),fn);
fk.changing_=false;
return fj=fk,eM(fn,fj)
}fg.prototype.addTrack=function fe(fh){var fi=this;
if(fh.enabled){cm(this,fh)
}ff.prototype.addTrack.call(this,fh);
if(!fh.addEventListener){return
}fh.addEventListener("enabledchange",function(){if(fi.changing_){return
}fi.changing_=true;
cm(fi,fh);
fi.changing_=false;
fi.trigger("change")
})
};
return fg
}(c4);
var cL=function cm(fg,fe){for(var ff=0;
ff<fg.length;
ff++){if(!Object.keys(fg[ff]).length||fe.id===fg[ff].id){continue
}fg[ff].selected=false
}};
var ek=function(fg){cY(ff,fg);
function ff(){var fk,fp;
var fm=arguments.length>0&&arguments[0]!==undefined?arguments[0]:[];
H(this,ff);
var fl=void 0;
for(var fj=fm.length-1;
fj>=0;
fj--){if(fm[fj].selected){cL(fm,fm[fj]);
break
}}if(e7){fl=cl.createElement("custom");
for(var fh in c4.prototype){if(fh!=="constructor"){fl[fh]=c4.prototype[fh]
}}for(var fo in ff.prototype){if(fo!=="constructor"){fl[fo]=ff.prototype[fo]
}}}fl=(fk=eM(this,fg.call(this,fm,fl)),fk);
fl.changing_=false;
Object.defineProperty(fl,"selectedIndex",{get:function fn(){for(var fq=0;
fq<this.length;
fq++){if(this[fq].selected){return fq
}}return -1
},set:function fi(){}});
return fp=fl,eM(fk,fp)
}ff.prototype.addTrack=function fe(fh){var fi=this;
if(fh.selected){cL(this,fh)
}fg.prototype.addTrack.call(this,fh);
if(!fh.addEventListener){return
}fh.addEventListener("selectedchange",function(){if(fi.changing_){return
}fi.changing_=true;
cL(fi,fh);
fi.changing_=false;
fi.trigger("change")
})
};
return ff
}(c4);
var eC=function(fg){cY(ff,fg);
function ff(){var fm,fi;
var fh=arguments.length>0&&arguments[0]!==undefined?arguments[0]:[];
H(this,ff);
var fj=void 0;
if(e7){fj=cl.createElement("custom");
for(var fl in c4.prototype){if(fl!=="constructor"){fj[fl]=c4.prototype[fl]
}}for(var fk in ff.prototype){if(fk!=="constructor"){fj[fk]=ff.prototype[fk]
}}}fj=(fm=eM(this,fg.call(this,fh,fj)),fm);
return fi=fj,eM(fm,fi)
}ff.prototype.addTrack=function fe(fi){fg.prototype.addTrack.call(this,fi);
fi.addEventListener("modechange",ca(this,function(){this.trigger("change")
}));
var fh=["metadata","chapters"];
if(fh.indexOf(fi.kind)===-1){fi.addEventListener("modechange",ca(this,function(){this.trigger("selectedlanguagechange")
}))
}};
return ff
}(c4);
var ak=function(){function fh(){var fk=arguments.length>0&&arguments[0]!==undefined?arguments[0]:[];
H(this,fh);
var fm=this;
if(e7){fm=cl.createElement("custom");
for(var fn in fh.prototype){if(fn!=="constructor"){fm[fn]=fh.prototype[fn]
}}}fm.trackElements_=[];
Object.defineProperty(fm,"length",{get:function fi(){return this.trackElements_.length
}});
for(var fj=0,fl=fk.length;
fj<fl;
fj++){fm.addTrackElement_(fk[fj])
}if(e7){return fm
}}fh.prototype.addTrackElement_=function fg(fk){var fj=this.trackElements_.length;
if(!(""+fj in this)){Object.defineProperty(this,fj,{get:function fi(){return this.trackElements_[fj]
}})
}if(this.trackElements_.indexOf(fk)===-1){this.trackElements_.push(fk)
}};
fh.prototype.getTrackElementByTrack_=function fe(fi){var fj=void 0;
for(var fk=0,fl=this.trackElements_.length;
fk<fl;
fk++){if(fi===this.trackElements_[fk].track){fj=this.trackElements_[fk];
break
}}return fj
};
fh.prototype.removeTrackElement_=function ff(fj){for(var fi=0,fk=this.trackElements_.length;
fi<fk;
fi++){if(fj===this.trackElements_[fi]){this.trackElements_.splice(fi,1);
break
}}};
return fh
}();
var bh=function(){function fe(fi){H(this,fe);
var fj=this;
if(e7){fj=cl.createElement("custom");
for(var fk in fe.prototype){if(fk!=="constructor"){fj[fk]=fe.prototype[fk]
}}}fe.prototype.setCues_.call(fj,fi);
Object.defineProperty(fj,"length",{get:function fh(){return this.length_
}});
if(e7){return fj
}}fe.prototype.setCues_=function fg(fi){var fk=this.length||0;
var fj=0;
var fh=fi.length;
this.cues_=fi;
this.length_=fi.length;
var fl=function fl(fn){if(!(""+fn in this)){Object.defineProperty(this,""+fn,{get:function fm(){return this.cues_[fn]
}})
}};
if(fk<fh){fj=fk;
for(;
fj<fh;
fj++){fl.call(this,fj)
}}};
fe.prototype.getCueById=function ff(fl){var fi=null;
for(var fk=0,fj=this.length;
fk<fj;
fk++){var fh=this[fk];
if(fh.id===fl){fi=fh;
break
}}return fi
};
return fe
}();
var eR={alternative:"alternative",captions:"captions",main:"main",sign:"sign",subtitles:"subtitles",commentary:"commentary"};
var db={alternative:"alternative",descriptions:"descriptions",main:"main","main-desc":"main-desc",translation:"translation",commentary:"commentary"};
var eZ={subtitles:"subtitles",captions:"captions",descriptions:"descriptions",chapters:"chapters",metadata:"metadata"};
var ah={disabled:"disabled",hidden:"hidden",showing:"showing"};
var dk=function(fe){cY(ff,fe);
function ff(){var fk;
var fi=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};
H(this,ff);
var fn=eM(this,fe.call(this));
var fh=fn;
if(e7){fh=cl.createElement("custom");
for(var fm in ff.prototype){if(fm!=="constructor"){fh[fm]=ff.prototype[fm]
}}}var fg={id:fi.id||"vjs_track_"+cn(),kind:fi.kind||"",label:fi.label||"",language:fi.language||""};
var fl=function fl(fq){Object.defineProperty(fh,fq,{get:function fp(){return fg[fq]
},set:function fo(){}})
};
for(var fj in fg){fl(fj)
}return fk=fh,eM(fn,fk)
}return ff
}(bl);
var e9=function e9(fg){var fj=["protocol","hostname","port","pathname","search","hash","host"];
var ff=cl.createElement("a");
ff.href=fg;
var fe=ff.host===""&&ff.protocol!=="file:";
var fk=void 0;
if(fe){fk=cl.createElement("div");
fk.innerHTML='<a href="'+fg+'"></a>';
ff=fk.firstChild;
fk.setAttribute("style","display:none; position:absolute;");
cl.body.appendChild(fk)
}var fi={};
for(var fh=0;
fh<fj.length;
fh++){fi[fj[fh]]=ff[fj[fh]]
}if(fi.protocol==="http:"){fi.host=fi.host.replace(/:80$/,"")
}if(fi.protocol==="https:"){fi.host=fi.host.replace(/:443$/,"")
}if(fe){cl.body.removeChild(fk)
}return fi
};
var ck=function ck(fe){if(!fe.match(/^https?:\/\//)){var ff=cl.createElement("div");
ff.innerHTML='<a href="'+fe+'">x</a>';
fe=ff.firstChild.href
}return fe
};
var bD=function bD(fg){if(typeof fg==="string"){var ff=/^(\/?)([\s\S]*?)((?:\.{1,2}|[^\/]+?)(\.([^\.\/\?]+)))(?:[\/]*|[\?].*)$/i;
var fe=ff.exec(fg);
if(fe){return fe.pop().toLowerCase()
}}return""
};
var dJ=function dJ(fi){var ff=bn.location;
var fh=e9(fi);
var fe=fh.protocol===":"?ff.protocol:fh.protocol;
var fg=fe+fh.host!==ff.protocol+ff.host;
return fg
};
var dT=(Object.freeze||Object)({parseUrl:e9,getAbsoluteURL:ck,getFileExtension:bD,isCrossOrigin:dJ});
var bM=bj;
var am=Object.prototype.toString;
function bj(ff){var fe=am.call(ff);
return fe==="[object Function]"||(typeof ff==="function"&&fe!=="[object RegExp]")||(typeof window!=="undefined"&&(ff===window.setTimeout||ff===window.alert||ff===window.confirm||ff===window.prompt))
}var bL=ai(function(fg,ff){ff=fg.exports=fe;
function fe(fh){return fh.replace(/^\s*|\s*$/g,"")
}ff.left=function(fh){return fh.replace(/^\s*/,"")
};
ff.right=function(fh){return fh.replace(/\s*$/,"")
}
});
var bJ=bc;
var al=Object.prototype.toString;
var T=Object.prototype.hasOwnProperty;
function bc(fg,ff,fe){if(!bM(ff)){throw new TypeError("iterator must be a function")
}if(arguments.length<3){fe=this
}if(al.call(fg)==="[object Array]"){cd(fg,ff,fe)
}else{if(typeof fg==="string"){dz(fg,ff,fe)
}else{dp(fg,ff,fe)
}}}function cd(fi,fh,fg){for(var ff=0,fe=fi.length;
ff<fe;
ff++){if(T.call(fi,ff)){fh.call(fg,fi[ff],ff,fi)
}}}function dz(ff,fi,fh){for(var fg=0,fe=ff.length;
fg<fe;
fg++){fi.call(fh,ff.charAt(fg),fg,ff)
}}function dp(ff,fh,fg){for(var fe in ff){if(T.call(ff,fe)){fh.call(fg,ff[fe],fe,ff)
}}}var X=function(fe){return Object.prototype.toString.call(fe)==="[object Array]"
};
var eg=function(ff){if(!ff){return{}
}var fe={};
bJ(bL(ff).split("\n"),function(fj){var fg=fj.indexOf(":"),fh=bL(fj.slice(0,fg)).toLowerCase(),fi=bL(fj.slice(fg+1));
if(typeof(fe[fh])==="undefined"){fe[fh]=fi
}else{if(X(fe[fh])){fe[fh].push(fi)
}else{fe[fh]=[fe[fh],fi]
}}});
return fe
};
var dP=fa;
var c8=Object.prototype.hasOwnProperty;
function fa(){var fh={};
for(var ff=0;
ff<arguments.length;
ff++){var fg=arguments[ff];
for(var fe in fg){if(c8.call(fg,fe)){fh[fe]=fg[fe]
}}}return fh
}var dI=aV;
aV.XMLHttpRequest=bn.XMLHttpRequest||d4;
aV.XDomainRequest="withCredentials" in (new aV.XMLHttpRequest())?aV.XMLHttpRequest:bn.XDomainRequest;
dd(["get","put","post","patch","head","delete"],function(fe){aV[fe==="delete"?"del":fe]=function(fg,ff,fh){ff=s(fg,ff,fh);
ff.method=fe.toUpperCase();
return bR(ff)
}
});
function dd(fg,ff){for(var fe=0;
fe<fg.length;
fe++){ff(fg[fe])
}}function d2(ff){for(var fe in ff){if(ff.hasOwnProperty(fe)){return false
}}return true
}function s(ff,fe,fh){var fg=ff;
if(bM(fe)){fh=fe;
if(typeof ff==="string"){fg={uri:ff}
}}else{fg=dP(fe,{uri:ff})
}fg.callback=fh;
return fg
}function aV(ff,fe,fg){fe=s(ff,fe,fg);
return bR(fe)
}function bR(fh){if(typeof fh.callback==="undefined"){throw new Error("callback argument missing")
}var fe=false;
var fi=function fs(fz,fy,fx){if(!fe){fe=true;
fh.callback(fz,fy,fx)
}};
function fn(){if(fl.readyState===4){setTimeout(fk,0)
}}function fw(){var fx=undefined;
if(fl.response){fx=fl.response
}else{fx=fl.responseText||bq(fl)
}if(ft){try{fx=JSON.parse(fx)
}catch(fy){}}return fx
}function fq(fx){clearTimeout(fp);
if(!(fx instanceof Error)){fx=new Error(""+(fx||"Unknown XMLHttpRequest Error"))
}fx.statusCode=0;
return fi(fx,fu)
}function fk(){if(fr){return
}var fx;
clearTimeout(fp);
if(fh.useXDR&&fl.status===undefined){fx=200
}else{fx=(fl.status===1223?204:fl.status)
}var fy=fu;
var fz=null;
if(fx!==0){fy={body:fw(),statusCode:fx,method:fg,headers:{},url:fj,rawRequest:fl};
if(fl.getAllResponseHeaders){fy.headers=eg(fl.getAllResponseHeaders())
}}else{fz=new Error("Internal XMLHttpRequest Error")
}return fi(fz,fy,fy.body)
}var fl=fh.xhr||null;
if(!fl){if(fh.cors||fh.useXDR){fl=new aV.XDomainRequest()
}else{fl=new aV.XMLHttpRequest()
}}var fv;
var fr;
var fj=fl.url=fh.uri||fh.url;
var fg=fl.method=fh.method||"GET";
var fo=fh.body||fh.data;
var ff=fl.headers=fh.headers||{};
var fm=!!fh.sync;
var ft=false;
var fp;
var fu={body:undefined,headers:{},statusCode:0,method:fg,url:fj,rawRequest:fl};
if("json" in fh&&fh.json!==false){ft=true;
ff.accept||ff.Accept||(ff.Accept="application/json");
if(fg!=="GET"&&fg!=="HEAD"){ff["content-type"]||ff["Content-Type"]||(ff["Content-Type"]="application/json");
fo=JSON.stringify(fh.json===true?fo:fh.json)
}}fl.onreadystatechange=fn;
fl.onload=fk;
fl.onerror=fq;
fl.onprogress=function(){};
fl.onabort=function(){fr=true
};
fl.ontimeout=fq;
fl.open(fg,fj,!fm,fh.username,fh.password);
if(!fm){fl.withCredentials=!!fh.withCredentials
}if(!fm&&fh.timeout>0){fp=setTimeout(function(){if(fr){return
}fr=true;
fl.abort("timeout");
var fx=new Error("XMLHttpRequest timeout");
fx.code="ETIMEDOUT";
fq(fx)
},fh.timeout)
}if(fl.setRequestHeader){for(fv in ff){if(ff.hasOwnProperty(fv)){fl.setRequestHeader(fv,ff[fv])
}}}else{if(fh.headers&&!d2(fh.headers)){throw new Error("Headers cannot be set on an XDomainRequest object")
}}if("responseType" in fh){fl.responseType=fh.responseType
}if("beforeSend" in fh&&typeof fh.beforeSend==="function"){fh.beforeSend(fl)
}fl.send(fo||null);
return fl
}function bq(ff){if(ff.responseType==="document"){return ff.responseXML
}var fe=ff.responseXML&&ff.responseXML.documentElement.nodeName==="parsererror";
if(ff.responseType===""&&!fe){return ff.responseXML
}return null
}function d4(){}var aa=function aa(ff,fe){var fh=new bn.WebVTT.Parser(bn,bn.vttjs,bn.WebVTT.StringDecoder());
var fg=[];
fh.oncue=function(fi){fe.addCue(fi)
};
fh.onparsingerror=function(fi){fg.push(fi)
};
fh.onflush=function(){fe.trigger({type:"loadeddata",target:fe})
};
fh.parse(ff);
if(fg.length>0){if(bn.console&&bn.console.groupCollapsed){bn.console.groupCollapsed("Text Track parsing errors for "+fe.src)
}fg.forEach(function(fi){return c6.error(fi)
});
if(bn.console&&bn.console.groupEnd){bn.console.groupEnd()
}}fh.flush()
};
var g=function g(fh,fe){var fg={uri:fh};
var ff=dJ(fh);
if(ff){fg.cors=ff
}dI(fg,ca(this,function(fj,fi,fl){if(fj){return c6.error(fj,fi)
}fe.loaded_=true;
if(typeof bn.WebVTT!=="function"){if(fe.tech_){var fk=function fk(){return aa(fl,fe)
};
fe.tech_.on("vttjsloaded",fk);
fe.tech_.on("vttjserror",function(){c6.error("vttjs failed to load, stopping trying to process "+fe.src);
fe.tech_.off("vttjsloaded",fk)
})
}}else{aa(fl,fe)
}}))
};
var P=function(ff){cY(fh,ff);
function fh(){var fq,ft;
var fv=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};
H(this,fh);
if(!fv.tech){throw new Error("A tech was not provided.")
}var fl=cS(fv,{kind:eZ[fv.kind]||"subtitles",language:fv.language||fv.srclang||""});
var fp=ah[fl.mode]||"disabled";
var fk=fl["default"];
if(fl.kind==="metadata"||fl.kind==="chapters"){fp="hidden"
}var fr=(fq=eM(this,ff.call(this,fl)),fq);
fr.tech_=fl.tech;
if(e7){for(var fi in fh.prototype){if(fi!=="constructor"){fr[fi]=fh.prototype[fi]
}}}fr.cues_=[];
fr.activeCues_=[];
var fo=new bh(fr.cues_);
var fu=new bh(fr.activeCues_);
var fn=false;
var fj=ca(fr,function(){this.activeCues;
if(fn){this.trigger("cuechange");
fn=false
}});
if(fp!=="disabled"){fr.tech_.ready(function(){fr.tech_.on("timeupdate",fj)
},true)
}Object.defineProperty(fr,"default",{get:function fs(){return fk
},set:function fm(){}});
Object.defineProperty(fr,"mode",{get:function fs(){return fp
},set:function fm(fx){var fw=this;
if(!ah[fx]){return
}fp=fx;
if(fp==="showing"){this.tech_.ready(function(){fw.tech_.on("timeupdate",fj)
},true)
}this.trigger("modechange")
}});
Object.defineProperty(fr,"cues",{get:function fs(){if(!this.loaded_){return null
}return fo
},set:function fm(){}});
Object.defineProperty(fr,"activeCues",{get:function fs(){if(!this.loaded_){return null
}if(this.cues.length===0){return fu
}var fz=this.tech_.currentTime();
var fB=[];
for(var fy=0,fx=this.cues.length;
fy<fx;
fy++){var fw=this.cues[fy];
if(fw.startTime<=fz&&fw.endTime>=fz){fB.push(fw)
}else{if(fw.startTime===fw.endTime&&fw.startTime<=fz&&fw.startTime+0.5>=fz){fB.push(fw)
}}}fn=false;
if(fB.length!==this.activeCues_.length){fn=true
}else{for(var fA=0;
fA<fB.length;
fA++){if(this.activeCues_.indexOf(fB[fA])===-1){fn=true
}}}this.activeCues_=fB;
fu.setCues_(this.activeCues_);
return fu
},set:function fm(){}});
if(fl.src){fr.src=fl.src;
g(fl.src,fr)
}else{fr.loaded_=true
}return ft=fr,eM(fq,ft)
}fh.prototype.addCue=function fg(fj){var fi=fj;
if(bn.vttjs&&!(fj instanceof bn.vttjs.VTTCue)){fi=new bn.vttjs.VTTCue(fj.startTime,fj.endTime,fj.text);
for(var fm in fj){if(!(fm in fi)){fi[fm]=fj[fm]
}}fi.id=fj.id;
fi.originalCue_=fj
}var fk=this.tech_.textTracks();
for(var fl=0;
fl<fk.length;
fl++){if(fk[fl]!==this){fk[fl].removeCue(fi)
}}this.cues_.push(fi);
this.cues.setCues_(this.cues_)
};
fh.prototype.removeCue=function fe(fj){var fk=this.cues_.length;
while(fk--){var fi=this.cues_[fk];
if(fi===fj||fi.originalCue_&&fi.originalCue_===fj){this.cues_.splice(fk,1);
this.cues.setCues_(this.cues_);
break
}}};
return fh
}(dk);
P.prototype.allowedEvents_={cuechange:"cuechange"};
var ay=function(fe){cY(ff,fe);
function ff(){var fk,fn;
var fo=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};
H(this,ff);
var fi=cS(fo,{kind:db[fo.kind]||""});
var fh=(fk=eM(this,fe.call(this,fi)),fk);
var fl=false;
if(e7){for(var fg in ff.prototype){if(fg!=="constructor"){fh[fg]=ff.prototype[fg]
}}}Object.defineProperty(fh,"enabled",{get:function fm(){return fl
},set:function fj(fp){if(typeof fp!=="boolean"||fp===fl){return
}fl=fp;
this.trigger("enabledchange")
}});
if(fi.enabled){fh.enabled=fi.enabled
}fh.loaded_=true;
return fn=fh,eM(fk,fn)
}return ff
}(dk);
var ag=function(ff){cY(fe,ff);
function fe(){var fl,fn;
var fo=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};
H(this,fe);
var fi=cS(fo,{kind:eR[fo.kind]||""});
var fh=(fl=eM(this,ff.call(this,fi)),fl);
var fk=false;
if(e7){for(var fg in fe.prototype){if(fg!=="constructor"){fh[fg]=fe.prototype[fg]
}}}Object.defineProperty(fh,"selected",{get:function fm(){return fk
},set:function fj(fp){if(typeof fp!=="boolean"||fp===fk){return
}fk=fp;
this.trigger("selectedchange")
}});
if(fi.selected){fh.selected=fi.selected
}return fn=fh,eM(fl,fn)
}return fe
}(dk);
var aA=0;
var a1=1;
var bf=2;
var aT=3;
var c2=function(ff){cY(fe,ff);
function fe(){var fj=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};
H(this,fe);
var fn=eM(this,ff.call(this));
var fg=void 0;
var fl=fn;
if(e7){fl=cl.createElement("custom");
for(var fm in fe.prototype){if(fm!=="constructor"){fl[fm]=fe.prototype[fm]
}}}var fh=new P(fj);
fl.kind=fh.kind;
fl.src=fh.src;
fl.srclang=fh.language;
fl.label=fh.label;
fl["default"]=fh["default"];
Object.defineProperty(fl,"readyState",{get:function fi(){return fg
}});
Object.defineProperty(fl,"track",{get:function fi(){return fh
}});
fg=aA;
fh.addEventListener("loadeddata",function(){fg=bf;
fl.trigger({type:"load",target:fl})
});
if(e7){var fk;
return fk=fl,eM(fn,fk)
}return fn
}return fe
}(bl);
c2.prototype.allowedEvents_={load:"load"};
c2.NONE=aA;
c2.LOADING=a1;
c2.LOADED=bf;
c2.ERROR=aT;
var cZ={audio:{ListClass:cT,TrackClass:ay,capitalName:"Audio"},video:{ListClass:ek,TrackClass:ag,capitalName:"Video"},text:{ListClass:eC,TrackClass:P,capitalName:"Text"}};
Object.keys(cZ).forEach(function(fe){cZ[fe].getterName=fe+"Tracks";
cZ[fe].privateName=fe+"Tracks_"
});
var dm={remoteText:{ListClass:eC,TrackClass:P,capitalName:"RemoteText",getterName:"remoteTextTracks",privateName:"remoteTextTracks_"},remoteTextEl:{ListClass:ak,TrackClass:c2,capitalName:"RemoteTextTrackEls",getterName:"remoteTextTrackEls",privateName:"remoteTextTrackEls_"}};
var bO=cS(cZ,dm);
dm.names=Object.keys(dm);
cZ.names=Object.keys(cZ);
bO.names=[].concat(dm.names).concat(cZ.names);
var u=Object.create||(function(){function fe(){}return function(ff){if(arguments.length!==1){throw new Error("Object.create shim only accepts one parameter.")
}fe.prototype=ff;
return new fe()
}
})();
function cf(ff,fe){this.name="ParsingError";
this.code=ff.code;
this.message=fe||ff.message
}cf.prototype=u(Error.prototype);
cf.prototype.constructor=cf;
cf.Errors={BadSignature:{code:0,message:"Malformed WebVTT signature."},BadTimeStamp:{code:1,message:"Malformed time stamp."}};
function aD(fg){function ff(fj,fh,fi,fk){return(fj|0)*3600+(fh|0)*60+(fi|0)+(fk|0)/1000
}var fe=fg.match(/^(\d+):(\d{2})(:\d{2})?\.(\d{3})/);
if(!fe){return null
}if(fe[3]){return ff(fe[1],fe[2],fe[3].replace(":",""),fe[4])
}else{if(fe[1]>59){return ff(fe[1],fe[2],0,fe[4])
}else{return ff(0,fe[1],fe[2],fe[4])
}}}function bA(){this.values=u(null)
}bA.prototype={set:function(ff,fe){if(!this.get(ff)&&fe!==""){this.values[ff]=fe
}},get:function(fe,fg,ff){if(ff){return this.has(fe)?this.values[fe]:fg[ff]
}return this.has(fe)?this.values[fe]:fg
},has:function(fe){return fe in this.values
},alt:function(fg,ff,fe){for(var fh=0;
fh<fe.length;
++fh){if(ff===fe[fh]){this.set(fg,ff);
break
}}},integer:function(ff,fe){if(/^-?\d+$/.test(fe)){this.set(ff,parseInt(fe,10))
}},percent:function(fg,ff){var fe;
if((fe=ff.match(/^([\d]{1,3})(\.[\d]*)?%$/))){ff=parseFloat(ff);
if(ff>=0&&ff<=100){this.set(fg,ff);
return true
}}return false
}};
function cb(fk,fm,fi,fh){var fe=fh?fk.split(fh):[fk];
for(var fg in fe){if(typeof fe[fg]!=="string"){continue
}var fj=fe[fg].split(fi);
if(fj.length!==2){continue
}var ff=fj[0];
var fl=fj[1];
fm(ff,fl)
}}function bY(fg,fe,ff){var fk=fg;
function fi(){var fl=aD(fg);
if(fl===null){throw new cf(cf.Errors.BadTimeStamp,"Malformed timestamp: "+fk)
}fg=fg.replace(/^[^\sa-zA-Z-]+/,"");
return fl
}function fj(fm,fl){var fn=new bA();
cb(fm,function(fq,fp){switch(fq){case"region":for(var fr=ff.length-1;
fr>=0;
fr--){if(ff[fr].id===fp){fn.set(fq,ff[fr].region);
break
}}break;
case"vertical":fn.alt(fq,fp,["rl","lr"]);
break;
case"line":var fs=fp.split(","),fo=fs[0];
fn.integer(fq,fo);
fn.percent(fq,fo)?fn.set("snapToLines",false):null;
fn.alt(fq,fo,["auto"]);
if(fs.length===2){fn.alt("lineAlign",fs[1],["start","middle","end"])
}break;
case"position":fs=fp.split(",");
fn.percent(fq,fs[0]);
if(fs.length===2){fn.alt("positionAlign",fs[1],["start","middle","end"])
}break;
case"size":fn.percent(fq,fp);
break;
case"align":fn.alt(fq,fp,["start","middle","end","left","right"]);
break
}},/:/,/\s/);
fl.region=fn.get("region",null);
fl.vertical=fn.get("vertical","");
fl.line=fn.get("line","auto");
fl.lineAlign=fn.get("lineAlign","start");
fl.snapToLines=fn.get("snapToLines",true);
fl.size=fn.get("size",100);
fl.align=fn.get("align","middle");
fl.position=fn.get("position",{start:0,left:0,middle:50,end:100,right:100},fl.align);
fl.positionAlign=fn.get("positionAlign",{start:"start",left:"start",middle:"middle",end:"end",right:"end"},fl.align)
}function fh(){fg=fg.replace(/^\s+/,"")
}fh();
fe.startTime=fi();
fh();
if(fg.substr(0,3)!=="-->"){throw new cf(cf.Errors.BadTimeStamp,"Malformed time stamp (time stamps must be separated by '-->'): "+fk)
}fg=fg.substr(3);
fh();
fe.endTime=fi();
fh();
fj(fg,fe)
}var bw={"&amp;":"&","&lt;":"<","&gt;":">","&lrm;":"\u200e","&rlm;":"\u200f","&nbsp;":"\u00a0"};
var ed={c:"span",i:"i",b:"b",u:"u",ruby:"ruby",rt:"rt",v:"span",lang:"span"};
var bI={v:"title",lang:"lang"};
var dS={rt:"ruby"};
function dg(fm,fo){function fg(){if(!fo){return null
}function ft(fu){fo=fo.substr(fu.length);
return fu
}var fs=fo.match(/^([^<]*)(<[^>]+>?)?/);
return ft(fs[1]?fs[1]:fs[2])
}function ff(fs){return bw[fs]
}function fk(fs){while((fh=fs.match(/&(amp|lt|gt|lrm|rlm|nbsp);/))){fs=fs.replace(fh[0],ff)
}return fs
}function fp(ft,fs){return !dS[fs.localName]||dS[fs.localName]===ft.localName
}function fj(fw,fs){var fv=ed[fw];
if(!fv){return null
}var fu=fm.document.createElement(fv);
fu.localName=fv;
var ft=bI[fw];
if(ft&&fs){fu[ft]=fs.trim()
}return fu
}var fe=fm.document.createElement("div"),fl=fe,fr,fq=[];
while((fr=fg())!==null){if(fr[0]==="<"){if(fr[1]==="/"){if(fq.length&&fq[fq.length-1]===fr.substr(2).replace(">","")){fq.pop();
fl=fl.parentNode
}continue
}var fn=aD(fr.substr(1,fr.length-2));
var fi;
if(fn){fi=fm.document.createProcessingInstruction("timestamp",fn);
fl.appendChild(fi);
continue
}var fh=fr.match(/^<([^.\s/0-9>]+)(\.[^\s\\>]+)?([^>\\]+)?(\\?)>?$/);
if(!fh){continue
}fi=fj(fh[1],fh[3]);
if(!fi){continue
}if(!fp(fl,fi)){continue
}if(fh[2]){fi.className=fh[2].substr(1).replace("."," ")
}fq.push(fh[1]);
fl.appendChild(fi);
fl=fi;
continue
}fl.appendChild(fm.document.createTextNode(fk(fr)))
}return fe
}var eO=[[1470,1470],[1472,1472],[1475,1475],[1478,1478],[1488,1514],[1520,1524],[1544,1544],[1547,1547],[1549,1549],[1563,1563],[1566,1610],[1645,1647],[1649,1749],[1765,1766],[1774,1775],[1786,1805],[1807,1808],[1810,1839],[1869,1957],[1969,1969],[1984,2026],[2036,2037],[2042,2042],[2048,2069],[2074,2074],[2084,2084],[2088,2088],[2096,2110],[2112,2136],[2142,2142],[2208,2208],[2210,2220],[8207,8207],[64285,64285],[64287,64296],[64298,64310],[64312,64316],[64318,64318],[64320,64321],[64323,64324],[64326,64449],[64467,64829],[64848,64911],[64914,64967],[65008,65020],[65136,65140],[65142,65276],[67584,67589],[67592,67592],[67594,67637],[67639,67640],[67644,67644],[67647,67669],[67671,67679],[67840,67867],[67872,67897],[67903,67903],[67968,68023],[68030,68031],[68096,68096],[68112,68115],[68117,68119],[68121,68147],[68160,68167],[68176,68184],[68192,68223],[68352,68405],[68416,68437],[68440,68466],[68472,68479],[68608,68680],[126464,126467],[126469,126495],[126497,126498],[126500,126500],[126503,126503],[126505,126514],[126516,126519],[126521,126521],[126523,126523],[126530,126530],[126535,126535],[126537,126537],[126539,126539],[126541,126543],[126545,126546],[126548,126548],[126551,126551],[126553,126553],[126555,126555],[126557,126557],[126559,126559],[126561,126562],[126564,126564],[126567,126570],[126572,126578],[126580,126583],[126585,126588],[126590,126590],[126592,126601],[126603,126619],[126625,126627],[126629,126633],[126635,126651],[1114109,1114109]];
function em(ff){for(var fg=0;
fg<eO.length;
fg++){var fe=eO[fg];
if(ff>=fe[0]&&ff<=fe[1]){return true
}}return false
}function df(ff){var fj=[],fk="",fg;
if(!ff||!ff.childNodes){return"ltr"
}function fe(fn,fm){for(var fl=fm.childNodes.length-1;
fl>=0;
fl--){fn.push(fm.childNodes[fl])
}}function fi(fn){if(!fn||!fn.length){return null
}var fm=fn.pop(),fo=fm.textContent||fm.innerText;
if(fo){var fl=fo.match(/^.*(\n|\r)/);
if(fl){fn.length=0;
return fl[0]
}return fo
}if(fm.tagName==="ruby"){return fi(fn)
}if(fm.childNodes){fe(fn,fm);
return fi(fn)
}}fe(fj,ff);
while((fk=fi(fj))){for(var fh=0;
fh<fk.length;
fh++){fg=fk.charCodeAt(fh);
if(em(fg)){return"rtl"
}}}return"ltr"
}function c0(fe){if(typeof fe.line==="number"&&(fe.snapToLines||(fe.line>=0&&fe.line<=100))){return fe.line
}if(!fe.track||!fe.track.textTrackList||!fe.track.textTrackList.mediaElement){return -1
}var ff=fe.track,fi=ff.textTrackList,fh=0;
for(var fg=0;
fg<fi.length&&fi[fg]!==ff;
fg++){if(fi[fg].mode==="showing"){fh++
}}return ++fh*-1
}function L(){}L.prototype.applyStyles=function(fe,fg){fg=fg||this.div;
for(var ff in fe){if(fe.hasOwnProperty(ff)){fg.style[ff]=fe[ff]
}}};
L.prototype.formatStyle=function(ff,fe){return ff===0?0:ff+fe
};
function ba(fk,fe,ff){var fl=(/MSIE\s8\.0/).test(navigator.userAgent);
var fi="rgba(255, 255, 255, 1)";
var fh="rgba(0, 0, 0, 0.8)";
if(fl){fi="rgb(255, 255, 255)";
fh="rgb(0, 0, 0)"
}L.call(this);
this.cue=fe;
this.cueDiv=dg(fk,fe.text);
var fj={color:fi,backgroundColor:fh,position:"relative",left:0,right:0,top:0,bottom:0,display:"inline"};
if(!fl){fj.writingMode=fe.vertical===""?"horizontal-tb":fe.vertical==="lr"?"vertical-lr":"vertical-rl";
fj.unicodeBidi="plaintext"
}this.applyStyles(fj,this.cueDiv);
this.div=fk.document.createElement("div");
fj={textAlign:fe.align==="middle"?"center":fe.align,font:ff.font,whiteSpace:"pre-line",position:"absolute"};
if(!fl){fj.direction=df(this.cueDiv);
fj.writingMode=fe.vertical===""?"horizontal-tb":fe.vertical==="lr"?"vertical-lr":"vertical-rl".stylesunicodeBidi="plaintext"
}this.applyStyles(fj);
this.div.appendChild(this.cueDiv);
var fg=0;
switch(fe.positionAlign){case"start":fg=fe.position;
break;
case"middle":fg=fe.position-(fe.size/2);
break;
case"end":fg=fe.position-fe.size;
break
}if(fe.vertical===""){this.applyStyles({left:this.formatStyle(fg,"%"),width:this.formatStyle(fe.size,"%")})
}else{this.applyStyles({top:this.formatStyle(fg,"%"),height:this.formatStyle(fe.size,"%")})
}this.move=function(fm){this.applyStyles({top:this.formatStyle(fm.top,"px"),bottom:this.formatStyle(fm.bottom,"px"),left:this.formatStyle(fm.left,"px"),right:this.formatStyle(fm.right,"px"),height:this.formatStyle(fm.height,"px"),width:this.formatStyle(fm.width,"px")})
}
}ba.prototype=u(L.prototype);
ba.prototype.constructor=ba;
function r(fk){var fj=(/MSIE\s8\.0/).test(navigator.userAgent);
var ff,fe,fh,fi;
if(fk.div){fe=fk.div.offsetHeight;
fh=fk.div.offsetWidth;
fi=fk.div.offsetTop;
var fg=(fg=fk.div.childNodes)&&(fg=fg[0])&&fg.getClientRects&&fg.getClientRects();
fk=fk.div.getBoundingClientRect();
ff=fg?Math.max((fg[0]&&fg[0].height)||0,fk.height/fg.length):0
}this.left=fk.left;
this.right=fk.right;
this.top=fk.top||fi;
this.height=fk.height||fe;
this.bottom=fk.bottom||(fi+(fk.height||fe));
this.width=fk.width||fh;
this.lineHeight=ff!==undefined?ff:fk.lineHeight;
if(fj&&!this.lineHeight){this.lineHeight=13
}}r.prototype.move=function(ff,fe){fe=fe!==undefined?fe:this.lineHeight;
switch(ff){case"+x":this.left+=fe;
this.right+=fe;
break;
case"-x":this.left-=fe;
this.right-=fe;
break;
case"+y":this.top+=fe;
this.bottom+=fe;
break;
case"-y":this.top-=fe;
this.bottom-=fe;
break
}};
r.prototype.overlaps=function(fe){return this.left<fe.right&&this.right>fe.left&&this.top<fe.bottom&&this.bottom>fe.top
};
r.prototype.overlapsAny=function(ff){for(var fe=0;
fe<ff.length;
fe++){if(this.overlaps(ff[fe])){return true
}}return false
};
r.prototype.within=function(fe){return this.top>=fe.top&&this.bottom<=fe.bottom&&this.left>=fe.left&&this.right<=fe.right
};
r.prototype.overlapsOppositeAxis=function(fe,ff){switch(ff){case"+x":return this.left<fe.left;
case"-x":return this.right>fe.right;
case"+y":return this.top<fe.top;
case"-y":return this.bottom>fe.bottom
}};
r.prototype.intersectPercentage=function(ff){var fe=Math.max(0,Math.min(this.right,ff.right)-Math.max(this.left,ff.left)),fh=Math.max(0,Math.min(this.bottom,ff.bottom)-Math.max(this.top,ff.top)),fg=fe*fh;
return fg/(this.height*this.width)
};
r.prototype.toCSSCompatValues=function(fe){return{top:this.top-fe.top,bottom:fe.bottom-this.bottom,left:this.left-fe.left,right:fe.right-this.right,height:this.height,width:this.width}
};
r.getSimpleBoxPosition=function(fi){var fe=fi.div?fi.div.offsetHeight:fi.tagName?fi.offsetHeight:0;
var fg=fi.div?fi.div.offsetWidth:fi.tagName?fi.offsetWidth:0;
var fh=fi.div?fi.div.offsetTop:fi.tagName?fi.offsetTop:0;
fi=fi.div?fi.div.getBoundingClientRect():fi.tagName?fi.getBoundingClientRect():fi;
var ff={left:fi.left,right:fi.right,top:fi.top||fh,height:fi.height||fe,bottom:fi.bottom||(fh+(fi.height||fe)),width:fi.width||fg};
return ff
};
function I(fo,fe,ff,fp){function fq(fu,fy){var fz,fw=new r(fu),fv=1;
for(var fx=0;
fx<fy.length;
fx++){while(fu.overlapsOppositeAxis(ff,fy[fx])||(fu.within(ff)&&fu.overlapsAny(fp))){fu.move(fy[fx])
}if(fu.within(ff)){return fu
}var fA=fu.intersectPercentage(ff);
if(fv>fA){fz=new r(fu);
fv=fA
}fu=new r(fw)
}return fz||fw
}var fg=new r(fe),fk=fe.cue,fr=c0(fk),fj=[];
if(fk.snapToLines){var ft;
switch(fk.vertical){case"":fj=["+y","-y"];
ft="height";
break;
case"rl":fj=["+x","-x"];
ft="width";
break;
case"lr":fj=["-x","+x"];
ft="width";
break
}var fi=fg.lineHeight,fm=fi*Math.round(fr),fl=ff[ft]+fi,fh=fj[0];
if(Math.abs(fm)>fl){fm=fm<0?-1:1;
fm*=Math.ceil(fl/fi)*fi
}if(fr<0){fm+=fk.vertical===""?ff.height:ff.width;
fj=fj.reverse()
}fg.move(fh,fm)
}else{var fn=(fg.lineHeight/ff.height)*100;
switch(fk.lineAlign){case"middle":fr-=(fn/2);
break;
case"end":fr-=fn;
break
}switch(fk.vertical){case"":fe.applyStyles({top:fe.formatStyle(fr,"%")});
break;
case"rl":fe.applyStyles({left:fe.formatStyle(fr,"%")});
break;
case"lr":fe.applyStyles({right:fe.formatStyle(fr,"%")});
break
}fj=["+y","-x","+x","-y"];
fg=new r(fe)
}var fs=fq(fg,fj);
fe.move(fs.toCSSCompatValues(ff))
}function av(){}av.StringDecoder=function(){return{decode:function(fe){if(!fe){return""
}if(typeof fe!=="string"){throw new Error("Error - expected string data.")
}return decodeURIComponent(encodeURIComponent(fe))
}}
};
av.convertCueToDOMTree=function(fe,ff){if(!fe||!ff){return null
}return dg(fe,ff)
};
var bT=0.05;
var d7="sans-serif";
var cz="1.5%";
av.processCues=function(fl,fk,fh){if(!fl||!fk||!fh){return null
}while(fh.firstChild){fh.removeChild(fh.firstChild)
}var fg=fl.document.createElement("div");
fg.style.position="absolute";
fg.style.left="0";
fg.style.right="0";
fg.style.top="0";
fg.style.bottom="0";
fg.style.margin=cz;
fh.appendChild(fg);
function ff(fo){for(var fp=0;
fp<fo.length;
fp++){if(fo[fp].hasBeenReset||!fo[fp].displayState){return true
}}return false
}if(!ff(fk)){for(var fi=0;
fi<fk.length;
fi++){fg.appendChild(fk[fi].displayState)
}return
}var fm=[],fe=r.getSimpleBoxPosition(fg),fn=Math.round(fe.height*bT*100)/100;
var fj={font:fn+"px "+d7};
(function(){var fq,fo;
for(var fp=0;
fp<fk.length;
fp++){fo=fk[fp];
fq=new ba(fl,fo,fj);
fg.appendChild(fq.div);
I(fl,fq,fe,fm);
fo.displayState=fq.div;
fm.push(r.getSimpleBoxPosition(fq))
}})()
};
av.Parser=function(ff,fe,fg){if(!fg){fg=fe;
fe={}
}if(!fe){fe={}
}this.window=ff;
this.vttjs=fe;
this.state="INITIAL";
this.buffer="";
this.decoder=fg||new TextDecoder("utf8");
this.regionList=[]
};
av.Parser.prototype={reportOrThrowError:function(fe){if(fe instanceof cf){this.onparsingerror&&this.onparsingerror(fe)
}else{throw fe
}},parse:function(fi){var fn=this;
if(fi){fn.buffer+=fn.decoder.decode(fi,{stream:true})
}function fe(){var fq=fn.buffer;
var fr=0;
while(fr<fq.length&&fq[fr]!=="\r"&&fq[fr]!=="\n"){++fr
}var fp=fq.substr(0,fr);
if(fq[fr]==="\r"){++fr
}if(fq[fr]==="\n"){++fr
}fn.buffer=fq.substr(fr);
return fp
}function fm(fp){var fq=new bA();
cb(fp,function(ft,fs){switch(ft){case"id":fq.set(ft,fs);
break;
case"width":fq.percent(ft,fs);
break;
case"lines":fq.integer(ft,fs);
break;
case"regionanchor":case"viewportanchor":var fv=fs.split(",");
if(fv.length!==2){break
}var fu=new bA();
fu.percent("x",fv[0]);
fu.percent("y",fv[1]);
if(!fu.has("x")||!fu.has("y")){break
}fq.set(ft+"X",fu.get("x"));
fq.set(ft+"Y",fu.get("y"));
break;
case"scroll":fq.alt(ft,fs,["up"]);
break
}},/=/,/\s/);
if(fq.has("id")){var fr=new (fn.vttjs.VTTRegion||fn.window.VTTRegion)();
fr.width=fq.get("width",100);
fr.lines=fq.get("lines",3);
fr.regionAnchorX=fq.get("regionanchorX",0);
fr.regionAnchorY=fq.get("regionanchorY",100);
fr.viewportAnchorX=fq.get("viewportanchorX",0);
fr.viewportAnchorY=fq.get("viewportanchorY",100);
fr.scroll=fq.get("scroll","");
fn.onregion&&fn.onregion(fr);
fn.regionList.push({id:fq.get("id"),region:fr})
}}function fh(fp){var fq=new bA();
cb(fp,function(fs,fr){switch(fs){case"MPEGT":fq.integer(fs+"S",fr);
break;
case"LOCA":fq.set(fs+"L",aD(fr));
break
}},/[^\d]:/,/,/);
fn.ontimestampmap&&fn.ontimestampmap({MPEGTS:fq.get("MPEGTS"),LOCAL:fq.get("LOCAL")})
}function fl(fp){if(fp.match(/X-TIMESTAMP-MAP/)){cb(fp,function(fr,fq){switch(fr){case"X-TIMESTAMP-MAP":fh(fq);
break
}},/=/)
}else{cb(fp,function(fr,fq){switch(fr){case"Region":fm(fq);
break
}},/:/)
}}try{var fo;
if(fn.state==="INITIAL"){if(!/\r\n|\n/.test(fn.buffer)){return this
}fo=fe();
var fg=fo.match(/^WEBVTT([ \t].*)?$/);
if(!fg||!fg[0]){throw new cf(cf.Errors.BadSignature)
}fn.state="HEADER"
}var ff=false;
while(fn.buffer){if(!/\r\n|\n/.test(fn.buffer)){return this
}if(!ff){fo=fe()
}else{ff=false
}switch(fn.state){case"HEADER":if(/:/.test(fo)){fl(fo)
}else{if(!fo){fn.state="ID"
}}continue;
case"NOTE":if(!fo){fn.state="ID"
}continue;
case"ID":if(/^NOTE($|[ \t])/.test(fo)){fn.state="NOTE";
break
}if(!fo){continue
}fn.cue=new (fn.vttjs.VTTCue||fn.window.VTTCue)(0,0,"");
fn.state="CUE";
if(fo.indexOf("-->")===-1){fn.cue.id=fo;
continue
}case"CUE":try{bY(fo,fn.cue,fn.regionList)
}catch(fk){fn.reportOrThrowError(fk);
fn.cue=null;
fn.state="BADCUE";
continue
}fn.state="CUETEXT";
continue;
case"CUETEXT":var fj=fo.indexOf("-->")!==-1;
if(!fo||fj&&(ff=true)){fn.oncue&&fn.oncue(fn.cue);
fn.cue=null;
fn.state="ID";
continue
}if(fn.cue.text){fn.cue.text+="\n"
}fn.cue.text+=fo;
continue;
case"BADCUE":if(!fo){fn.state="ID"
}continue
}}}catch(fk){fn.reportOrThrowError(fk);
if(fn.state==="CUETEXT"&&fn.cue&&fn.oncue){fn.oncue(fn.cue)
}fn.cue=null;
fn.state=fn.state==="INITIAL"?"BADWEBVTT":"BADCUE"
}return this
},flush:function(){var fe=this;
try{fe.buffer+=fe.decoder.decode();
if(fe.cue||fe.state==="HEADER"){fe.buffer+="\n\n";
fe.parse()
}if(fe.state==="INITIAL"){throw new cf(cf.Errors.BadSignature)
}}catch(ff){fe.reportOrThrowError(ff)
}fe.onflush&&fe.onflush();
return this
}};
var b5=av;
var J="auto";
var ch={"":true,lr:true,rl:true};
var C={start:true,middle:true,end:true,left:true,right:true};
function bo(ff){if(typeof ff!=="string"){return false
}var fe=ch[ff.toLowerCase()];
return fe?ff.toLowerCase():false
}function c(fe){if(typeof fe!=="string"){return false
}var ff=C[fe.toLowerCase()];
return ff?fe.toLowerCase():false
}function ej(fh){var fe=1;
for(;
fe<arguments.length;
fe++){var fg=arguments[fe];
for(var ff in fg){fh[ff]=fg[ff]
}}return fh
}function ee(fu,fl,fs){var fp=this;
var fv=(/MSIE\s8\.0/).test(navigator.userAgent);
var fo={};
if(fv){fp=document.createElement("custom")
}else{fo.enumerable=true
}fp.hasBeenReset=false;
var fi="";
var ff=false;
var fx=fu;
var fw=fl;
var fh=fs;
var ft=null;
var fm="";
var fr=true;
var fe="auto";
var fq="start";
var fj=50;
var fg="middle";
var fk=50;
var fn="middle";
Object.defineProperty(fp,"id",ej({},fo,{get:function(){return fi
},set:function(fy){fi=""+fy
}}));
Object.defineProperty(fp,"pauseOnExit",ej({},fo,{get:function(){return ff
},set:function(fy){ff=!!fy
}}));
Object.defineProperty(fp,"startTime",ej({},fo,{get:function(){return fx
},set:function(fy){if(typeof fy!=="number"){throw new TypeError("Start time must be set to a number.")
}fx=fy;
this.hasBeenReset=true
}}));
Object.defineProperty(fp,"endTime",ej({},fo,{get:function(){return fw
},set:function(fy){if(typeof fy!=="number"){throw new TypeError("End time must be set to a number.")
}fw=fy;
this.hasBeenReset=true
}}));
Object.defineProperty(fp,"text",ej({},fo,{get:function(){return fh
},set:function(fy){fh=""+fy;
this.hasBeenReset=true
}}));
Object.defineProperty(fp,"region",ej({},fo,{get:function(){return ft
},set:function(fy){ft=fy;
this.hasBeenReset=true
}}));
Object.defineProperty(fp,"vertical",ej({},fo,{get:function(){return fm
},set:function(fz){var fy=bo(fz);
if(fy===false){throw new SyntaxError("An invalid or illegal string was specified.")
}fm=fy;
this.hasBeenReset=true
}}));
Object.defineProperty(fp,"snapToLines",ej({},fo,{get:function(){return fr
},set:function(fy){fr=!!fy;
this.hasBeenReset=true
}}));
Object.defineProperty(fp,"line",ej({},fo,{get:function(){return fe
},set:function(fy){if(typeof fy!=="number"&&fy!==J){throw new SyntaxError("An invalid number or illegal string was specified.")
}fe=fy;
this.hasBeenReset=true
}}));
Object.defineProperty(fp,"lineAlign",ej({},fo,{get:function(){return fq
},set:function(fz){var fy=c(fz);
if(!fy){throw new SyntaxError("An invalid or illegal string was specified.")
}fq=fy;
this.hasBeenReset=true
}}));
Object.defineProperty(fp,"position",ej({},fo,{get:function(){return fj
},set:function(fy){if(fy<0||fy>100){throw new Error("Position must be between 0 and 100.")
}fj=fy;
this.hasBeenReset=true
}}));
Object.defineProperty(fp,"positionAlign",ej({},fo,{get:function(){return fg
},set:function(fz){var fy=c(fz);
if(!fy){throw new SyntaxError("An invalid or illegal string was specified.")
}fg=fy;
this.hasBeenReset=true
}}));
Object.defineProperty(fp,"size",ej({},fo,{get:function(){return fk
},set:function(fy){if(fy<0||fy>100){throw new Error("Size must be between 0 and 100.")
}fk=fy;
this.hasBeenReset=true
}}));
Object.defineProperty(fp,"align",ej({},fo,{get:function(){return fn
},set:function(fz){var fy=c(fz);
if(!fy){throw new SyntaxError("An invalid or illegal string was specified.")
}fn=fy;
this.hasBeenReset=true
}}));
fp.displayState=undefined;
if(fv){return fp
}}ee.prototype.getCueAsHTML=function(){return WebVTT.convertCueToDOMTree(window,this.text)
};
var x=ee;
var ez={"":true,up:true};
function bi(ff){if(typeof ff!=="string"){return false
}var fe=ez[ff.toLowerCase()];
return fe?ff.toLowerCase():false
}function es(fe){return typeof fe==="number"&&(fe>=0&&fe<=100)
}function aj(){var fe=100;
var fk=3;
var fj=0;
var fi=100;
var fh=0;
var ff=100;
var fg="";
Object.defineProperties(this,{width:{enumerable:true,get:function(){return fe
},set:function(fl){if(!es(fl)){throw new Error("Width must be between 0 and 100.")
}fe=fl
}},lines:{enumerable:true,get:function(){return fk
},set:function(fl){if(typeof fl!=="number"){throw new TypeError("Lines must be set to a number.")
}fk=fl
}},regionAnchorY:{enumerable:true,get:function(){return fi
},set:function(fl){if(!es(fl)){throw new Error("RegionAnchorX must be between 0 and 100.")
}fi=fl
}},regionAnchorX:{enumerable:true,get:function(){return fj
},set:function(fl){if(!es(fl)){throw new Error("RegionAnchorY must be between 0 and 100.")
}fj=fl
}},viewportAnchorY:{enumerable:true,get:function(){return ff
},set:function(fl){if(!es(fl)){throw new Error("ViewportAnchorY must be between 0 and 100.")
}ff=fl
}},viewportAnchorX:{enumerable:true,get:function(){return fh
},set:function(fl){if(!es(fl)){throw new Error("ViewportAnchorX must be between 0 and 100.")
}fh=fl
}},scroll:{enumerable:true,get:function(){return fg
},set:function(fm){var fl=bi(fm);
if(fl===false){throw new SyntaxError("An invalid or illegal string was specified.")
}fg=fl
}}})
}var da=aj;
var dw=ai(function(fg){var ff=fg.exports={WebVTT:b5,VTTCue:x,VTTRegion:da};
bn.vttjs=ff;
bn.WebVTT=ff.WebVTT;
var fj=ff.VTTCue;
var fi=ff.VTTRegion;
var fh=bn.VTTCue;
var fe=bn.VTTRegion;
ff.shim=function(){bn.VTTCue=fj;
bn.VTTRegion=fi
};
ff.restore=function(){bn.VTTCue=fh;
bn.VTTRegion=fe
};
if(!bn.VTTCue){ff.shim()
}});
function ec(ff,fj,fi,fk){var fh=arguments.length>4&&arguments[4]!==undefined?arguments[4]:{};
var fg=ff.textTracks();
fh.kind=fj;
if(fi){fh.label=fi
}if(fk){fh.language=fk
}fh.tech=ff;
var fe=new bO.text.TrackClass(fh);
fg.addTrack(fe);
return fe
}var dt=function(fM){cY(fp,fM);
function fp(){var fO=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};
var fP=arguments.length>1&&arguments[1]!==undefined?arguments[1]:function(){};
H(this,fp);
fO.reportTouchActivity=false;
var fQ=eM(this,fM.call(this,null,fO,fP));
fQ.hasStarted_=false;
fQ.on("playing",function(){this.hasStarted_=true
});
fQ.on("loadstart",function(){this.hasStarted_=false
});
bO.names.forEach(function(fR){var fS=bO[fR];
if(fO&&fO[fS.getterName]){fQ[fS.privateName]=fO[fS.getterName]
}});
if(!fQ.featuresProgressEvents){fQ.manualProgressOn()
}if(!fQ.featuresTimeupdateEvents){fQ.manualTimeUpdatesOn()
}["Text","Audio","Video"].forEach(function(fR){if(fO["native"+fR+"Tracks"]===false){fQ["featuresNative"+fR+"Tracks"]=false
}});
if(fO.nativeCaptions===false||fO.nativeTextTracks===false){fQ.featuresNativeTextTracks=false
}else{if(fO.nativeCaptions===true||fO.nativeTextTracks===true){fQ.featuresNativeTextTracks=true
}}if(!fQ.featuresNativeTextTracks){fQ.emulateTextTracks()
}fQ.autoRemoteTextTracks_=new bO.text.ListClass();
fQ.initTrackListeners();
if(!fO.nativeControlsForTouch){fQ.emitTapEvents()
}if(fQ.constructor){fQ.name_=fQ.constructor.name||"Unknown Tech"
}return fQ
}fp.prototype.manualProgressOn=function ff(){this.on("durationchange",this.onDurationChange);
this.manualProgress=true;
this.one("ready",this.trackProgress)
};
fp.prototype.manualProgressOff=function fs(){this.manualProgress=false;
this.stopTrackingProgress();
this.off("durationchange",this.onDurationChange)
};
fp.prototype.trackProgress=function fm(fO){this.stopTrackingProgress();
this.progressInterval=this.setInterval(ca(this,function(){var fP=this.bufferedPercent();
if(this.bufferedPercent_!==fP){this.trigger("progress")
}this.bufferedPercent_=fP;
if(fP===1){this.stopTrackingProgress()
}}),500)
};
fp.prototype.onDurationChange=function fx(fO){this.duration_=this.duration()
};
fp.prototype.buffered=function fK(){return y(0,0)
};
fp.prototype.bufferedPercent=function fl(){return bV(this.buffered(),this.duration_)
};
fp.prototype.stopTrackingProgress=function fI(){this.clearInterval(this.progressInterval)
};
fp.prototype.manualTimeUpdatesOn=function fq(){this.manualTimeUpdates=true;
this.on("play",this.trackCurrentTime);
this.on("pause",this.stopTrackingCurrentTime)
};
fp.prototype.manualTimeUpdatesOff=function fv(){this.manualTimeUpdates=false;
this.stopTrackingCurrentTime();
this.off("play",this.trackCurrentTime);
this.off("pause",this.stopTrackingCurrentTime)
};
fp.prototype.trackCurrentTime=function fN(){if(this.currentTimeInterval){this.stopTrackingCurrentTime()
}this.currentTimeInterval=this.setInterval(function(){this.trigger({type:"timeupdate",target:this,manuallyTriggered:true})
},250)
};
fp.prototype.stopTrackingCurrentTime=function fy(){this.clearInterval(this.currentTimeInterval);
this.trigger({type:"timeupdate",target:this,manuallyTriggered:true})
};
fp.prototype.dispose=function fr(){this.clearTracks(cZ.names);
if(this.manualProgress){this.manualProgressOff()
}if(this.manualTimeUpdates){this.manualTimeUpdatesOff()
}fM.prototype.dispose.call(this)
};
fp.prototype.clearTracks=function fL(fO){var fP=this;
fO=[].concat(fO);
fO.forEach(function(fS){var fT=fP[fS+"Tracks"]()||[];
var fR=fT.length;
while(fR--){var fQ=fT[fR];
if(fS==="text"){fP.removeRemoteTextTrack(fQ)
}fT.removeTrack(fQ)
}})
};
fp.prototype.cleanupAutoTextTracks=function fH(){var fQ=this.autoRemoteTextTracks_||[];
var fP=fQ.length;
while(fP--){var fO=fQ[fP];
this.removeRemoteTextTrack(fO)
}};
fp.prototype.reset=function fE(){};
fp.prototype.error=function ft(fO){if(fO!==undefined){this.error_=new a5(fO);
this.trigger("error")
}return this.error_
};
fp.prototype.played=function fg(){if(this.hasStarted_){return y(0,0)
}return y()
};
fp.prototype.setCurrentTime=function fk(){if(this.manualTimeUpdates){this.trigger({type:"timeupdate",target:this,manuallyTriggered:true})
}};
fp.prototype.initTrackListeners=function fw(){var fO=this;
cZ.names.forEach(function(fQ){var fS=cZ[fQ];
var fR=function fR(){fO.trigger(fQ+"trackchange")
};
var fP=fO[fS.getterName]();
fP.addEventListener("removetrack",fR);
fP.addEventListener("addtrack",fR);
fO.on("dispose",function(){fP.removeEventListener("removetrack",fR);
fP.removeEventListener("addtrack",fR)
})
})
};
fp.prototype.addWebVttScript_=function fn(){var fP=this;
if(bn.WebVTT){return
}if(cl.body.contains(this.el())){if(!this.options_["vtt.js"]&&W(dw)&&Object.keys(dw).length>0){this.trigger("vttjsloaded");
return
}var fO=cl.createElement("script");
fO.src=this.options_["vtt.js"]||"https://vjs.zencdn.net/vttjs/0.12.4/vtt.min.js";
fO.onload=function(){fP.trigger("vttjsloaded")
};
fO.onerror=function(){fP.trigger("vttjserror")
};
this.on("dispose",function(){fO.onload=null;
fO.onerror=null
});
bn.WebVTT=true;
this.el().parentNode.appendChild(fO)
}else{this.ready(this.addWebVttScript_)
}};
fp.prototype.emulateTextTracks=function fG(){var fR=this;
var fQ=this.textTracks();
var fS=this.remoteTextTracks();
var fO=function fO(fV){return fQ.addTrack(fV.track)
};
var fU=function fU(fV){return fQ.removeTrack(fV.track)
};
fS.on("addtrack",fO);
fS.on("removetrack",fU);
this.addWebVttScript_();
var fT=function fT(){return fR.trigger("texttrackchange")
};
var fP=function fP(){fT();
for(var fW=0;
fW<fQ.length;
fW++){var fV=fQ[fW];
fV.removeEventListener("cuechange",fT);
if(fV.mode==="showing"){fV.addEventListener("cuechange",fT)
}}};
fP();
fQ.addEventListener("change",fP);
fQ.addEventListener("addtrack",fP);
fQ.addEventListener("removetrack",fP);
this.on("dispose",function(){fS.off("addtrack",fO);
fS.off("removetrack",fU);
fQ.removeEventListener("change",fP);
fQ.removeEventListener("addtrack",fP);
fQ.removeEventListener("removetrack",fP);
for(var fW=0;
fW<fQ.length;
fW++){var fV=fQ[fW];
fV.removeEventListener("cuechange",fT)
}})
};
fp.prototype.addTextTrack=function fz(fP,fO,fQ){if(!fP){throw new Error("TextTrack kind is required but was not provided")
}return ec(this,fP,fO,fQ)
};
fp.prototype.createRemoteTextTrack=function fD(fP){var fO=cS(fP,{tech:this});
return new dm.remoteTextEl.TrackClass(fO)
};
fp.prototype.addRemoteTextTrack=function fh(){var fO=this;
var fP=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};
var fQ=arguments[1];
var fR=this.createRemoteTextTrack(fP);
if(fQ!==true&&fQ!==false){c6.warn('Calling addRemoteTextTrack without explicitly setting the "manualCleanup" parameter to `true` is deprecated and default to `false` in future version of video.js');
fQ=true
}this.remoteTextTrackEls().addTrackElement_(fR);
this.remoteTextTracks().addTrack(fR.track);
if(fQ!==true){this.ready(function(){return fO.autoRemoteTextTracks_.addTrack(fR.track)
})
}return fR
};
fp.prototype.removeRemoteTextTrack=function fF(fO){var fP=this.remoteTextTrackEls().getTrackElementByTrack_(fO);
this.remoteTextTrackEls().removeTrackElement_(fP);
this.remoteTextTracks().removeTrack(fO);
this.autoRemoteTextTracks_.removeTrack(fO)
};
fp.prototype.getVideoPlaybackQuality=function fC(){return{}
};
fp.prototype.setPoster=function fB(){};
fp.prototype.playsinline=function fA(){};
fp.prototype.setPlaysinline=function fJ(){};
fp.prototype.canPlayType=function fu(){return""
};
fp.canPlayType=function fu(){return""
};
fp.canPlaySource=function fj(fP,fO){return fp.canPlayType(fP.type)
};
fp.isTech=function fi(fO){return fO.prototype instanceof fp||fO instanceof fp||fO===fp
};
fp.registerTech=function fo(fP,fO){if(!fp.techs_){fp.techs_={}
}if(!fp.isTech(fO)){throw new Error("Tech "+fP+" must be a Tech")
}if(!fp.canPlayType){throw new Error("Techs must have a static canPlayType method on them")
}if(!fp.canPlaySource){throw new Error("Techs must have a static canPlaySource method on them")
}fP=e8(fP);
fp.techs_[fP]=fO;
if(fP!=="Tech"){fp.defaultTechOrder_.push(fP)
}return fO
};
fp.getTech=function fe(fO){if(!fO){return
}fO=e8(fO);
if(fp.techs_&&fp.techs_[fO]){return fp.techs_[fO]
}if(bn&&bn.videojs&&bn.videojs[fO]){c6.warn("The "+fO+" tech was added to the videojs object when it should be registered using videojs.registerTech(name, tech)");
return bn.videojs[fO]
}};
return fp
}(eN);
bO.names.forEach(function(fe){var ff=bO[fe];
dt.prototype[ff.getterName]=function(){this[ff.privateName]=this[ff.privateName]||new ff.ListClass();
return this[ff.privateName]
}
});
dt.prototype.featuresVolumeControl=true;
dt.prototype.featuresFullscreenResize=false;
dt.prototype.featuresPlaybackRate=false;
dt.prototype.featuresProgressEvents=false;
dt.prototype.featuresTimeupdateEvents=false;
dt.prototype.featuresNativeTextTracks=false;
dt.withSourceHandlers=function(fe){fe.registerSourceHandler=function(fi,fh){var fg=fe.sourceHandlers;
if(!fg){fg=fe.sourceHandlers=[]
}if(fh===undefined){fh=fg.length
}fg.splice(fh,0,fi)
};
fe.canPlayType=function(fi){var fg=fe.sourceHandlers||[];
var fj=void 0;
for(var fh=0;
fh<fg.length;
fh++){fj=fg[fh].canPlayType(fi);
if(fj){return fj
}}return""
};
fe.selectSourceHandler=function(fk,fh){var fg=fe.sourceHandlers||[];
var fj=void 0;
for(var fi=0;
fi<fg.length;
fi++){fj=fg[fi].canHandleSource(fk,fh);
if(fj){return fg[fi]
}}return null
};
fe.canPlaySource=function(fh,fg){var fi=fe.selectSourceHandler(fh,fg);
if(fi){return fi.canHandleSource(fh,fg)
}return""
};
var ff=["seekable","duration"];
ff.forEach(function(fh){var fg=this[fh];
if(typeof fg!=="function"){return
}this[fh]=function(){if(this.sourceHandler_&&this.sourceHandler_[fh]){return this.sourceHandler_[fh].apply(this.sourceHandler_,arguments)
}return fg.apply(this,arguments)
}
},fe.prototype);
fe.prototype.setSource=function(fh){var fg=fe.selectSourceHandler(fh,this.options_);
if(!fg){if(fe.nativeSourceHandler){fg=fe.nativeSourceHandler
}else{c6.error("No source hander found for the current source.")
}}this.disposeSourceHandler();
this.off("dispose",this.disposeSourceHandler);
if(fg!==fe.nativeSourceHandler){this.currentSource_=fh
}this.sourceHandler_=fg.handleSource(fh,this,this.options_);
this.on("dispose",this.disposeSourceHandler)
};
fe.prototype.disposeSourceHandler=function(){if(this.currentSource_){this.clearTracks(["audio","video"]);
this.currentSource_=null
}this.cleanupAutoTextTracks();
if(this.sourceHandler_){if(this.sourceHandler_.dispose){this.sourceHandler_.dispose()
}this.sourceHandler_=null
}}
};
eN.registerComponent("Tech",dt);
dt.registerTech("Tech",dt);
dt.defaultTechOrder_=[];
var d8={};
function c7(ff,fe){d8[ff]=d8[ff]||[];
d8[ff].push(fe)
}function dA(fe,fg,ff){fe.setTimeout(function(){return aE(fg,d8[fg.type],ff,fe)
},1)
}function aH(fe,ff){fe.forEach(function(fg){return fg.setTech&&fg.setTech(ff)
})
}function G(fe,ff,fg){return fe.reduceRight(ac(fg),ff[fg]())
}function a2(ff,fg,fh,fe){return fg[fh](ff.reduce(ac(fh),fe))
}var f={buffered:1,currentTime:1,duration:1,seekable:1,played:1};
var bx={setCurrentTime:1};
function ac(fe){return function(ff,fg){if(fg[fe]){return fg[fe](ff)
}return ff
}
}function aE(){var fe=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};
var fj=arguments.length>1&&arguments[1]!==undefined?arguments[1]:[];
var fi=arguments[2];
var fk=arguments[3];
var fh=arguments.length>4&&arguments[4]!==undefined?arguments[4]:[];
var fg=arguments.length>5&&arguments[5]!==undefined?arguments[5]:false;
var fm=fj[0],ff=fj.slice(1);
if(typeof fm==="string"){aE(fe,d8[fm],fi,fk,fh,fg)
}else{if(fm){var fl=fm(fk);
fl.setSource(fd({},fe),function(fn,fo){if(fn){return aE(fe,ff,fi,fk,fh,fg)
}fh.push(fl);
aE(fo,fe.type===fo.type?ff:d8[fo.type],fi,fk,fh,fg)
})
}else{if(ff.length){aE(fe,ff,fi,fk,fh,fg)
}else{if(fg){fi(fe,fh)
}else{aE(fe,d8["*"],fi,fk,fh,true)
}}}}}var aL=function aL(ff){if(Array.isArray(ff)){var fe=[];
ff.forEach(function(fg){fg=aL(fg);
if(Array.isArray(fg)){fe=fe.concat(fg)
}else{if(t(fg)){fe.push(fg)
}}});
ff=fe
}else{if(typeof ff==="string"&&ff.trim()){ff=[{src:ff}]
}else{if(t(ff)&&typeof ff.src==="string"&&ff.src&&ff.src.trim()){ff=[ff]
}else{ff=[]
}}}return ff
};
var cN=function(fe){cY(ff,fe);
function ff(fm,fo,fl){H(this,ff);
var fn=cS({createEl:false},fo);
var fi=eM(this,fe.call(this,fm,fn,fl));
if(!fo.playerOptions.sources||fo.playerOptions.sources.length===0){for(var fh=0,fg=fo.playerOptions.techOrder;
fh<fg.length;
fh++){var fk=e8(fg[fh]);
var fj=dt.getTech(fk);
if(!fk){fj=eN.getComponent(fk)
}if(fj&&fj.isSupported()){fm.loadTech_(fk);
break
}}}else{fm.src(fo.playerOptions.sources)
}return fi
}return ff
}(eN);
eN.registerComponent("MediaLoader",cN);
var cH=function(fo){cY(fn,fo);
function fn(fr,fq){H(this,fn);
var fs=eM(this,fo.call(this,fr,fq));
fs.emitTapEvents();
fs.enable();
return fs
}fn.prototype.createEl=function ff(){var fq=arguments.length>0&&arguments[0]!==undefined?arguments[0]:"div";
var ft=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};
var fr=arguments.length>2&&arguments[2]!==undefined?arguments[2]:{};
ft=fd({innerHTML:'<span aria-hidden="true" class="vjs-icon-placeholder"></span>',className:this.buildCSSClass(),tabIndex:0},ft);
if(fq==="button"){c6.error("Creating a ClickableComponent with an HTML element of "+fq+" is not supported; use a Button instead.")
}fr=fd({role:"button","aria-live":"polite"},fr);
this.tabIndex_=ft.tabIndex;
var fs=fo.prototype.createEl.call(this,fq,ft,fr);
this.createControlTextEl(fs);
return fs
};
fn.prototype.createControlTextEl=function fh(fq){this.controlTextEl_=bu("span",{className:"vjs-control-text"});
if(fq){fq.appendChild(this.controlTextEl_)
}this.controlText(this.controlText_,fq);
return this.controlTextEl_
};
fn.prototype.controlText=function fg(fr){var fq=arguments.length>1&&arguments[1]!==undefined?arguments[1]:this.el();
if(!fr){return this.controlText_||"Need Text"
}var fs=this.localize(fr);
this.controlText_=fr;
dF(this.controlTextEl_,fs);
if(!this.nonIconControl){fq.setAttribute("title",fs)
}};
fn.prototype.buildCSSClass=function fm(){return"vjs-control vjs-button "+fo.prototype.buildCSSClass.call(this)
};
fn.prototype.enable=function fj(){if(!this.enabled_){this.enabled_=true;
this.removeClass("vjs-disabled");
this.el_.setAttribute("aria-disabled","false");
if(typeof this.tabIndex_!=="undefined"){this.el_.setAttribute("tabIndex",this.tabIndex_)
}this.on(["tap","click"],this.handleClick);
this.on("focus",this.handleFocus);
this.on("blur",this.handleBlur)
}};
fn.prototype.disable=function fi(){this.enabled_=false;
this.addClass("vjs-disabled");
this.el_.setAttribute("aria-disabled","true");
if(typeof this.tabIndex_!=="undefined"){this.el_.removeAttribute("tabIndex")
}this.off(["tap","click"],this.handleClick);
this.off("focus",this.handleFocus);
this.off("blur",this.handleBlur)
};
fn.prototype.handleClick=function fk(fq){};
fn.prototype.handleFocus=function fl(fq){bF(cl,"keydown",ca(this,this.handleKeyPress))
};
fn.prototype.handleKeyPress=function fp(fq){if(fq.which===32||fq.which===13){fq.preventDefault();
this.trigger("click")
}else{if(fo.prototype.handleKeyPress){fo.prototype.handleKeyPress.call(this,fq)
}}};
fn.prototype.handleBlur=function fe(fq){dn(cl,"keydown",ca(this,this.handleKeyPress))
};
return fn
}(eN);
eN.registerComponent("ClickableComponent",cH);
var bB=function(fj){cY(ff,fj);
function ff(fm,fl){H(this,ff);
var fn=eM(this,fj.call(this,fm,fl));
fn.update();
fm.on("posterchange",ca(fn,fn.update));
return fn
}ff.prototype.dispose=function fi(){this.player().off("posterchange",this.update);
fj.prototype.dispose.call(this)
};
ff.prototype.createEl=function fh(){var fl=bu("div",{className:"vjs-poster",tabIndex:-1});
if(!dc){this.fallbackImg_=bu("img");
fl.appendChild(this.fallbackImg_)
}return fl
};
ff.prototype.update=function fk(fm){var fl=this.player().poster();
this.setSrc(fl);
if(fl){this.show()
}else{this.hide()
}};
ff.prototype.setSrc=function fg(fl){if(this.fallbackImg_){this.fallbackImg_.src=fl
}else{var fm="";
if(fl){fm='url("'+fl+'")'
}this.el_.style.backgroundImage=fm
}};
ff.prototype.handleClick=function fe(fl){if(!this.player_.controls()){return
}if(this.player_.paused()){this.player_.play()
}else{this.player_.pause()
}};
return ff
}(cH);
eN.registerComponent("PosterImage",bB);
var by="#222";
var dW="#ccc";
var az={monospace:"monospace",sansSerif:"sans-serif",serif:"serif",monospaceSansSerif:'"Andale Mono", "Lucida Console", monospace',monospaceSerif:'"Courier New", monospace',proportionalSansSerif:"sans-serif",proportionalSerif:"serif",casual:'"Comic Sans MS", Impact, fantasy',script:'"Monotype Corsiva", cursive',smallcaps:'"Andale Mono", "Lucida Console", monospace, sans-serif'};
function ab(fe,ff){return"rgba("+parseInt(fe[1]+fe[1],16)+","+parseInt(fe[2]+fe[2],16)+","+parseInt(fe[3]+fe[3],16)+","+ff+")"
}function c9(ff,fe,fh){try{ff.style[fe]=fh
}catch(fg){return
}}var bp=function(fg){cY(fh,fg);
function fh(fn,fm,fo){H(this,fh);
var fp=eM(this,fg.call(this,fn,fm,fo));
fn.on("loadstart",ca(fp,fp.toggleDisplay));
fn.on("texttrackchange",ca(fp,fp.updateDisplay));
fn.on("loadstart",ca(fp,fp.preselectTrack));
fn.ready(ca(fp,function(){if(fn.tech_&&fn.tech_.featuresNativeTextTracks){this.hide();
return
}fn.on("fullscreenchange",ca(this,this.updateDisplay));
var fq=this.options_.playerOptions.tracks||[];
for(var fr=0;
fr<fq.length;
fr++){this.player_.addRemoteTextTrack(fq[fr],true)
}this.preselectTrack()
}));
return fp
}fh.prototype.preselectTrack=function fj(){var fq={captions:1,subtitles:1};
var fr=this.player_.textTracks();
var fp=this.player_.cache_.selectedLanguage;
var fm=void 0;
var ft=void 0;
var fs=void 0;
for(var fo=0;
fo<fr.length;
fo++){var fn=fr[fo];
if(fp&&fp.enabled&&fp.language===fn.language){if(fn.kind===fp.kind){fs=fn
}else{if(!fs){fs=fn
}}}else{if(fp&&!fp.enabled){fs=null;
fm=null;
ft=null
}else{if(fn["default"]){if(fn.kind==="descriptions"&&!fm){fm=fn
}else{if(fn.kind in fq&&!ft){ft=fn
}}}}}}if(fs){fs.mode="showing"
}else{if(ft){ft.mode="showing"
}else{if(fm){fm.mode="showing"
}}}};
fh.prototype.toggleDisplay=function fi(){if(this.player_.tech_&&this.player_.tech_.featuresNativeTextTracks){this.hide()
}else{this.show()
}};
fh.prototype.createEl=function fe(){return fg.prototype.createEl.call(this,"div",{className:"vjs-text-track-display"},{"aria-live":"off","aria-atomic":"true"})
};
fh.prototype.clearDisplay=function fk(){if(typeof bn.WebVTT==="function"){bn.WebVTT.processCues(bn,[],this.el_)
}};
fh.prototype.updateDisplay=function fl(){var fn=this.player_.textTracks();
this.clearDisplay();
var fq=null;
var fp=null;
var fo=fn.length;
while(fo--){var fm=fn[fo];
if(fm.mode==="showing"){if(fm.kind==="descriptions"){fq=fm
}else{fp=fm
}}}if(fp){if(this.getAttribute("aria-live")!=="off"){this.setAttribute("aria-live","off")
}this.updateForTrack(fp)
}else{if(fq){if(this.getAttribute("aria-live")!=="assertive"){this.setAttribute("aria-live","assertive")
}this.updateForTrack(fq)
}}};
fh.prototype.updateForTrack=function ff(fo){if(typeof bn.WebVTT!=="function"||!fo.activeCues){return
}var ft=this.player_.textTrackSettings.getValues();
var fp=[];
for(var fs=0;
fs<fo.activeCues.length;
fs++){fp.push(fo.activeCues[fs])
}bn.WebVTT.processCues(bn,fp,this.el_);
var fq=fp.length;
while(fq--){var fn=fp[fq];
if(!fn){continue
}var fm=fn.displayState;
if(ft.color){fm.firstChild.style.color=ft.color
}if(ft.textOpacity){c9(fm.firstChild,"color",ab(ft.color||"#fff",ft.textOpacity))
}if(ft.backgroundColor){fm.firstChild.style.backgroundColor=ft.backgroundColor
}if(ft.backgroundOpacity){c9(fm.firstChild,"backgroundColor",ab(ft.backgroundColor||"#000",ft.backgroundOpacity))
}if(ft.windowColor){if(ft.windowOpacity){c9(fm,"backgroundColor",ab(ft.windowColor,ft.windowOpacity))
}else{fm.style.backgroundColor=ft.windowColor
}}if(ft.edgeStyle){if(ft.edgeStyle==="dropshadow"){fm.firstChild.style.textShadow="2px 2px 3px "+by+", 2px 2px 4px "+by+", 2px 2px 5px "+by
}else{if(ft.edgeStyle==="raised"){fm.firstChild.style.textShadow="1px 1px "+by+", 2px 2px "+by+", 3px 3px "+by
}else{if(ft.edgeStyle==="depressed"){fm.firstChild.style.textShadow="1px 1px "+dW+", 0 1px "+dW+", -1px -1px "+by+", 0 -1px "+by
}else{if(ft.edgeStyle==="uniform"){fm.firstChild.style.textShadow="0 0 4px "+by+", 0 0 4px "+by+", 0 0 4px "+by+", 0 0 4px "+by
}}}}}if(ft.fontPercent&&ft.fontPercent!==1){var fr=bn.parseFloat(fm.style.fontSize);
fm.style.fontSize=fr*ft.fontPercent+"px";
fm.style.height="auto";
fm.style.top="auto";
fm.style.bottom="2px"
}if(ft.fontFamily&&ft.fontFamily!=="default"){if(ft.fontFamily==="small-caps"){fm.firstChild.style.fontVariant="small-caps"
}else{fm.firstChild.style.fontFamily=az[ft.fontFamily]
}}}};
return fh
}(eN);
eN.registerComponent("TextTrackDisplay",bp);
var aK=function(fg){cY(ff,fg);
function ff(){H(this,ff);
return eM(this,fg.apply(this,arguments))
}ff.prototype.createEl=function fe(){return fg.prototype.createEl.call(this,"div",{className:"vjs-loading-spinner",dir:"ltr"})
};
return ff
}(eN);
eN.registerComponent("LoadingSpinner",aK);
var h=function(fi){cY(ff,fi);
function ff(){H(this,ff);
return eM(this,fi.apply(this,arguments))
}ff.prototype.createEl=function fe(fl){var fo=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};
var fm=arguments.length>2&&arguments[2]!==undefined?arguments[2]:{};
fl="button";
fo=fd({innerHTML:'<span aria-hidden="true" class="vjs-icon-placeholder"></span>',className:this.buildCSSClass()},fo);
fm=fd({type:"button","aria-live":"polite"},fm);
var fn=eN.prototype.createEl.call(this,fl,fo,fm);
this.createControlTextEl(fn);
return fn
};
ff.prototype.addChild=function fk(fn){var fl=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};
var fm=this.constructor.name;
c6.warn("Adding an actionable (user controllable) child to a Button ("+fm+") is not supported; use a ClickableComponent instead.");
return eN.prototype.addChild.call(this,fn,fl)
};
ff.prototype.enable=function fh(){fi.prototype.enable.call(this);
this.el_.removeAttribute("disabled")
};
ff.prototype.disable=function fg(){fi.prototype.disable.call(this);
this.el_.setAttribute("disabled","disabled")
};
ff.prototype.handleKeyPress=function fj(fl){if(fl.which===32||fl.which===13){return
}fi.prototype.handleKeyPress.call(this,fl)
};
return ff
}(cH);
eN.registerComponent("Button",h);
var o=function(fi){cY(fe,fi);
function fe(fl,fk){H(this,fe);
var fm=eM(this,fi.call(this,fl,fk));
fm.mouseused_=false;
fm.on("mousedown",fm.handleMouseDown);
return fm
}fe.prototype.buildCSSClass=function ff(){return"vjs-big-play-button"
};
fe.prototype.handleClick=function fg(fp){var fo=this.player_.play();
if(this.mouseused_&&fp.clientX&&fp.clientY){return
}var fl=this.player_.getChild("controlBar");
var fn=fl&&fl.getChild("playToggle");
if(!fn){this.player_.focus();
return
}var fm=function fm(){return fn.focus()
};
if(fo&&fo.then){var fk=function fk(){};
fo.then(fm,fk)
}else{this.setTimeout(fm,1)
}};
fe.prototype.handleKeyPress=function fj(fk){this.mouseused_=false;
fi.prototype.handleKeyPress.call(this,fk)
};
fe.prototype.handleMouseDown=function fh(fk){this.mouseused_=true
};
return fe
}(h);
o.prototype.controlText_="Play Video";
eN.registerComponent("BigPlayButton",o);
var dB=function(fh){cY(fg,fh);
function fg(fj,fi){H(this,fg);
var fk=eM(this,fh.call(this,fj,fi));
fk.controlText(fi&&fi.controlText||fk.localize("Close"));
return fk
}fg.prototype.buildCSSClass=function fe(){return"vjs-close-button "+fh.prototype.buildCSSClass.call(this)
};
fg.prototype.handleClick=function ff(fi){this.trigger({type:"close",bubbles:false})
};
return fg
}(h);
eN.registerComponent("CloseButton",dB);
var eD=function(fj){cY(fk,fj);
function fk(fm,fl){H(this,fk);
var fn=eM(this,fj.call(this,fm,fl));
fn.on(fm,"play",fn.handlePlay);
fn.on(fm,"pause",fn.handlePause);
fn.on(fm,"ended",fn.handleEnded);
return fn
}fk.prototype.buildCSSClass=function fe(){return"vjs-play-control "+fj.prototype.buildCSSClass.call(this)
};
fk.prototype.handleClick=function ff(fl){if(this.player_.paused()){this.player_.play()
}else{this.player_.pause()
}};
fk.prototype.handlePlay=function fh(fl){this.removeClass("vjs-ended");
this.removeClass("vjs-paused");
this.addClass("vjs-playing");
this.controlText("Pause")
};
fk.prototype.handlePause=function fg(fl){this.removeClass("vjs-playing");
this.addClass("vjs-paused");
this.controlText("Play")
};
fk.prototype.handleEnded=function fi(fl){this.removeClass("vjs-playing");
this.addClass("vjs-ended");
this.controlText("Replay")
};
return fk
}(h);
eD.prototype.controlText_="Play";
eN.registerComponent("PlayToggle",eD);
function au(fk){var ff=arguments.length>1&&arguments[1]!==undefined?arguments[1]:fk;
fk=fk<0?0:fk;
var fi=Math.floor(fk%60);
var fe=Math.floor(fk/60%60);
var fh=Math.floor(fk/3600);
var fj=Math.floor(ff/60%60);
var fg=Math.floor(ff/3600);
if(isNaN(fk)||fk===Infinity){fh=fe=fi="-"
}fh=fh>0||fg>0?fh+":":"";
fe=((fh||fj>=10)&&fe<10?"0"+fe:fe)+":";
fi=fi<10?"0"+fi:fi;
return fh+fe+fi
}var dC=function(fe){cY(ff,fe);
function ff(fk,fj){H(this,ff);
var fl=eM(this,fe.call(this,fk,fj));
fl.throttledUpdateContent=a6(ca(fl,fl.updateContent),25);
fl.on(fk,"timeupdate",fl.throttledUpdateContent);
return fl
}ff.prototype.createEl=function fi(){var fj=fe.prototype.createEl.call(this,"div",{className:"vjs-current-time vjs-time-control vjs-control"});
this.contentEl_=bu("div",{className:"vjs-current-time-display"},{"aria-live":"off"},bu("span",{className:"vjs-control-text",textContent:this.localize("Current Time")}));
this.updateTextNode_();
fj.appendChild(this.contentEl_);
return fj
};
ff.prototype.updateTextNode_=function fg(){if(this.textNode_){this.contentEl_.removeChild(this.textNode_)
}this.textNode_=cl.createTextNode(" "+(this.formattedTime_||"0:00"));
this.contentEl_.appendChild(this.textNode_)
};
ff.prototype.updateContent=function fh(fk){var fl=this.player_.scrubbing()?this.player_.getCache().currentTime:this.player_.currentTime();
var fj=au(fl,this.player_.duration());
if(fj!==this.formattedTime_){this.formattedTime_=fj;
this.requestAnimationFrame(this.updateTextNode_)
}};
return ff
}(eN);
eN.registerComponent("CurrentTimeDisplay",dC);
var bk=function(fe){cY(fi,fe);
function fi(fk,fj){H(this,fi);
var fl=eM(this,fe.call(this,fk,fj));
fl.throttledUpdateContent=a6(ca(fl,fl.updateContent),25);
fl.on(fk,["durationchange","loadedmetadata","timeupdate"],fl.throttledUpdateContent);
return fl
}fi.prototype.createEl=function fh(){var fj=fe.prototype.createEl.call(this,"div",{className:"vjs-duration vjs-time-control vjs-control"});
this.contentEl_=bu("div",{className:"vjs-duration-display"},{"aria-live":"off"},bu("span",{className:"vjs-control-text",textContent:this.localize("Duration Time")}));
this.updateTextNode_();
fj.appendChild(this.contentEl_);
return fj
};
fi.prototype.updateTextNode_=function ff(){if(this.textNode_){this.contentEl_.removeChild(this.textNode_)
}this.textNode_=cl.createTextNode(" "+(this.formattedTime_||"0:00"));
this.contentEl_.appendChild(this.textNode_)
};
fi.prototype.updateContent=function fg(fj){var fk=this.player_.duration();
if(fk&&this.duration_!==fk){this.duration_=fk;
this.formattedTime_=au(fk);
this.requestAnimationFrame(this.updateTextNode_)
}};
return fi
}(eN);
eN.registerComponent("DurationDisplay",bk);
var cW=function(fg){cY(ff,fg);
function ff(){H(this,ff);
return eM(this,fg.apply(this,arguments))
}ff.prototype.createEl=function fe(){return fg.prototype.createEl.call(this,"div",{className:"vjs-time-control vjs-time-divider",innerHTML:"<div><span>/</span></div>"})
};
return ff
}(eN);
eN.registerComponent("TimeDivider",cW);
var cX=function(fe){cY(ff,fe);
function ff(fk,fj){H(this,ff);
var fl=eM(this,fe.call(this,fk,fj));
fl.throttledUpdateContent=a6(ca(fl,fl.updateContent),25);
fl.on(fk,["timeupdate","durationchange"],fl.throttledUpdateContent);
return fl
}ff.prototype.createEl=function fi(){var fj=fe.prototype.createEl.call(this,"div",{className:"vjs-remaining-time vjs-time-control vjs-control"});
this.contentEl_=bu("div",{className:"vjs-remaining-time-display"},{"aria-live":"off"},bu("span",{className:"vjs-control-text",textContent:this.localize("Remaining Time")}));
this.updateTextNode_();
fj.appendChild(this.contentEl_);
return fj
};
ff.prototype.updateTextNode_=function fg(){if(this.textNode_){this.contentEl_.removeChild(this.textNode_)
}this.textNode_=cl.createTextNode(" -"+(this.formattedTime_||"0:00"));
this.contentEl_.appendChild(this.textNode_)
};
ff.prototype.updateContent=function fh(fk){if(this.player_.duration()){var fj=au(this.player_.remainingTime());
if(fj!==this.formattedTime_){this.formattedTime_=fj;
this.requestAnimationFrame(this.updateTextNode_)
}}};
return ff
}(eN);
eN.registerComponent("RemainingTimeDisplay",cX);
var dQ=function(fe){cY(fg,fe);
function fg(fj,fi){H(this,fg);
var fk=eM(this,fe.call(this,fj,fi));
fk.updateShowing();
fk.on(fk.player(),"durationchange",fk.updateShowing);
return fk
}fg.prototype.createEl=function ff(){var fi=fe.prototype.createEl.call(this,"div",{className:"vjs-live-control vjs-control"});
this.contentEl_=bu("div",{className:"vjs-live-display",innerHTML:'<span class="vjs-control-text">'+this.localize("Stream Type")+"</span>"+this.localize("LIVE")},{"aria-live":"off"});
fi.appendChild(this.contentEl_);
return fi
};
fg.prototype.updateShowing=function fh(fi){if(this.player().duration()===Infinity){this.show()
}else{this.hide()
}};
return fg
}(eN);
eN.registerComponent("LiveDisplay",dQ);
var aP=function(fo){cY(fj,fo);
function fj(fs,fr){H(this,fj);
var ft=eM(this,fo.call(this,fs,fr));
ft.bar=ft.getChild(ft.options_.barName);
ft.vertical(!!ft.options_.vertical);
ft.on("mousedown",ft.handleMouseDown);
ft.on("touchstart",ft.handleMouseDown);
ft.on("focus",ft.handleFocus);
ft.on("blur",ft.handleBlur);
ft.on("click",ft.handleClick);
ft.on(fs,"controlsvisible",ft.update);
if(ft.playerEvent){ft.on(fs,ft.playerEvent,ft.update)
}return ft
}fj.prototype.createEl=function ff(ft){var fs=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};
var fr=arguments.length>2&&arguments[2]!==undefined?arguments[2]:{};
fs.className=fs.className+" vjs-slider";
fs=fd({tabIndex:0},fs);
fr=fd({role:"slider","aria-valuenow":0,"aria-valuemin":0,"aria-valuemax":100,tabIndex:0},fr);
return fo.prototype.createEl.call(this,ft,fs,fr)
};
fj.prototype.handleMouseDown=function fg(fr){var fs=this.bar.el_.ownerDocument;
fr.preventDefault();
ax();
this.addClass("vjs-sliding");
this.trigger("slideractive");
this.on(fs,"mousemove",this.handleMouseMove);
this.on(fs,"mouseup",this.handleMouseUp);
this.on(fs,"touchmove",this.handleMouseMove);
this.on(fs,"touchend",this.handleMouseUp);
this.handleMouseMove(fr)
};
fj.prototype.handleMouseMove=function fk(fr){};
fj.prototype.handleMouseUp=function fp(){var fr=this.bar.el_.ownerDocument;
at();
this.removeClass("vjs-sliding");
this.trigger("sliderinactive");
this.off(fr,"mousemove",this.handleMouseMove);
this.off(fr,"mouseup",this.handleMouseUp);
this.off(fr,"touchmove",this.handleMouseMove);
this.off(fr,"touchend",this.handleMouseUp);
this.update()
};
fj.prototype.update=function fi(){if(!this.el_){return
}var fs=this.getPercent();
var fu=this.bar;
if(!fu){return
}if(typeof fs!=="number"||fs!==fs||fs<0||fs===Infinity){fs=0
}var fr=(fs*100).toFixed(2)+"%";
var ft=fu.el().style;
if(this.vertical()){ft.height=fr
}else{ft.width=fr
}return fs
};
fj.prototype.calculateDistance=function fn(fs){var fr=cR(this.el_,fs);
if(this.vertical()){return fr.y
}return fr.x
};
fj.prototype.handleFocus=function fm(){this.on(this.bar.el_.ownerDocument,"keydown",this.handleKeyPress)
};
fj.prototype.handleKeyPress=function fq(fr){if(fr.which===37||fr.which===40){fr.preventDefault();
this.stepBack()
}else{if(fr.which===38||fr.which===39){fr.preventDefault();
this.stepForward()
}}};
fj.prototype.handleBlur=function fe(){this.off(this.bar.el_.ownerDocument,"keydown",this.handleKeyPress)
};
fj.prototype.handleClick=function fl(fr){fr.stopImmediatePropagation();
fr.preventDefault()
};
fj.prototype.vertical=function fh(fr){if(fr===undefined){return this.vertical_||false
}this.vertical_=!!fr;
if(this.vertical_){this.addClass("vjs-slider-vertical")
}else{this.addClass("vjs-slider-horizontal")
}};
return fj
}(eN);
eN.registerComponent("Slider",aP);
var bP=function(ff){cY(fe,ff);
function fe(fj,fi){H(this,fe);
var fk=eM(this,ff.call(this,fj,fi));
fk.partEls_=[];
fk.on(fj,"progress",fk.update);
return fk
}fe.prototype.createEl=function fg(){return ff.prototype.createEl.call(this,"div",{className:"vjs-load-progress",innerHTML:'<span class="vjs-control-text"><span>'+this.localize("Loaded")+"</span>: 0%</span>"})
};
fe.prototype.update=function fh(fi){var fn=this.player_.buffered();
var fp=this.player_.duration();
var fs=this.player_.bufferedEnd();
var fl=this.partEls_;
var fm=function fm(fv,ft){var fu=fv/ft||0;
return(fu>=1?1:fu)*100+"%"
};
this.el_.style.width=fm(fs,fp);
for(var fr=0;
fr<fn.length;
fr++){var fj=fn.start(fr);
var fo=fn.end(fr);
var fk=fl[fr];
if(!fk){fk=this.el_.appendChild(bu());
fl[fr]=fk
}fk.style.left=fm(fj,fs);
fk.style.width=fm(fo-fj,fs)
}for(var fq=fl.length;
fq>fn.length;
fq--){this.el_.removeChild(fl[fq-1])
}fl.length=fn.length
};
return fe
}(eN);
eN.registerComponent("LoadProgressBar",bP);
var V=function(fe){cY(ff,fe);
function ff(){H(this,ff);
return eM(this,fe.apply(this,arguments))
}ff.prototype.createEl=function fg(){return fe.prototype.createEl.call(this,"div",{className:"vjs-time-tooltip"})
};
ff.prototype.update=function fh(fj,fk,fm){var fi=bG(this.el_);
var fq=bG(this.player_.el());
var fl=fj.width*fk;
if(!fq||!fi){return
}var fn=fj.left-fq.left+fl;
var fp=fj.width-fl+(fq.right-fj.right);
var fo=fi.width/2;
if(fn<fo){fo+=fo-fn
}else{if(fp<fo){fo=fp
}}if(fo<0){fo=0
}else{if(fo>fi.width){fo=fi.width
}}this.el_.style.right="-"+fo+"px";
dF(this.el_,fm)
};
return ff
}(eN);
eN.registerComponent("TimeTooltip",V);
var eT=function(fg){cY(ff,fg);
function ff(){H(this,ff);
return eM(this,fg.apply(this,arguments))
}ff.prototype.createEl=function fe(){return fg.prototype.createEl.call(this,"div",{className:"vjs-play-progress vjs-slider-bar",innerHTML:'<span class="vjs-control-text"><span>'+this.localize("Progress")+"</span>: 0%</span>"})
};
ff.prototype.update=function fh(fi,fk){var fj=this;
if(this.rafId_){this.cancelAnimationFrame(this.rafId_)
}this.rafId_=this.requestAnimationFrame(function(){var fn=fj.player_.scrubbing()?fj.player_.getCache().currentTime:fj.player_.currentTime();
var fm=au(fn,fj.player_.duration());
var fl=fj.getChild("timeTooltip");
if(fl){fl.update(fi,fk,fm)
}})
};
return ff
}(eN);
eT.prototype.options_={children:[]};
if((!di||di>8)&&!cG&&!cv){eT.prototype.options_.children.push("timeTooltip")
}eN.registerComponent("PlayProgressBar",eT);
var eU=function(fg){cY(ff,fg);
function ff(fj,fi){H(this,ff);
var fk=eM(this,fg.call(this,fj,fi));
fk.update=a6(ca(fk,fk.update),25);
return fk
}ff.prototype.createEl=function fe(){return fg.prototype.createEl.call(this,"div",{className:"vjs-mouse-display"})
};
ff.prototype.update=function fh(fi,fk){var fj=this;
if(this.rafId_){this.cancelAnimationFrame(this.rafId_)
}this.rafId_=this.requestAnimationFrame(function(){var fm=fj.player_.duration();
var fl=au(fk*fm,fm);
fj.el_.style.left=fi.width*fk+"px";
fj.getChild("timeTooltip").update(fi,fk,fl)
})
};
return ff
}(eN);
eU.prototype.options_={children:["timeTooltip"]};
eN.registerComponent("MouseTimeDisplay",eU);
var bs=5;
var ep=function(fm){cY(fp,fm);
function fp(fr,fq){H(this,fp);
var fs=eM(this,fm.call(this,fr,fq));
fs.update=a6(ca(fs,fs.update),50);
fs.on(fr,["timeupdate","ended"],fs.update);
return fs
}fp.prototype.createEl=function fe(){return fm.prototype.createEl.call(this,"div",{className:"vjs-progress-holder"},{"aria-label":this.localize("Progress Bar")})
};
fp.prototype.update=function fj(){var fq=fm.prototype.update.call(this);
var fs=this.player_.duration();
var fr=this.player_.scrubbing()?this.player_.getCache().currentTime:this.player_.currentTime();
this.el_.setAttribute("aria-valuenow",(fq*100).toFixed(2));
this.el_.setAttribute("aria-valuetext",this.localize("progress bar timing: currentTime={1} duration={2}",[au(fr,fs),au(fs,fs)],"{1} of {2}"));
this.bar.update(bG(this.el_),fq);
return fq
};
fp.prototype.getPercent=function fl(){var fr=this.player_.scrubbing()?this.player_.getCache().currentTime:this.player_.currentTime();
var fq=fr/this.player_.duration();
return fq>=1?1:fq
};
fp.prototype.handleMouseDown=function ff(fq){this.player_.scrubbing(true);
this.videoWasPlaying=!this.player_.paused();
this.player_.pause();
fm.prototype.handleMouseDown.call(this,fq)
};
fp.prototype.handleMouseMove=function fk(fr){var fq=this.calculateDistance(fr)*this.player_.duration();
if(fq===this.player_.duration()){fq=fq-0.1
}this.player_.currentTime(fq)
};
fp.prototype.handleMouseUp=function fn(fq){fm.prototype.handleMouseUp.call(this,fq);
this.player_.scrubbing(false);
if(this.videoWasPlaying){this.player_.play()
}};
fp.prototype.stepForward=function fi(){this.player_.currentTime(this.player_.currentTime()+bs)
};
fp.prototype.stepBack=function fh(){this.player_.currentTime(this.player_.currentTime()-bs)
};
fp.prototype.handleAction=function fg(fq){if(this.player_.paused()){this.player_.play()
}else{this.player_.pause()
}};
fp.prototype.handleKeyPress=function fo(fq){if(fq.which===32||fq.which===13){fq.preventDefault();
this.handleAction(fq)
}else{if(fm.prototype.handleKeyPress){fm.prototype.handleKeyPress.call(this,fq)
}}};
return fp
}(aP);
ep.prototype.options_={children:["loadProgressBar","playProgressBar"],barName:"playProgressBar"};
if((!di||di>8)&&!cG&&!cv){ep.prototype.options_.children.splice(1,0,"mouseTimeDisplay")
}ep.prototype.playerEvent="timeupdate";
eN.registerComponent("SeekBar",ep);
var dG=function(fg){cY(fk,fg);
function fk(fm,fl){H(this,fk);
var fn=eM(this,fg.call(this,fm,fl));
fn.handleMouseMove=a6(ca(fn,fn.handleMouseMove),25);
fn.on(fn.el_,"mousemove",fn.handleMouseMove);
fn.throttledHandleMouseSeek=a6(ca(fn,fn.handleMouseSeek),25);
fn.on(["mousedown","touchstart"],fn.handleMouseDown);
return fn
}fk.prototype.createEl=function fi(){return fg.prototype.createEl.call(this,"div",{className:"vjs-progress-control vjs-control"})
};
fk.prototype.handleMouseMove=function fj(fp){var fo=this.getChild("seekBar");
var fq=fo.getChild("mouseTimeDisplay");
var fn=fo.el();
var fl=bG(fn);
var fm=cR(fn,fp).x;
if(fm>1){fm=1
}else{if(fm<0){fm=0
}}if(fq){fq.update(fl,fm)
}};
fk.prototype.handleMouseSeek=function ff(fm){var fl=this.getChild("seekBar");
fl.handleMouseMove(fm)
};
fk.prototype.handleMouseDown=function fh(fl){var fm=this.el_.ownerDocument;
this.on(fm,"mousemove",this.throttledHandleMouseSeek);
this.on(fm,"touchmove",this.throttledHandleMouseSeek);
this.on(fm,"mouseup",this.handleMouseUp);
this.on(fm,"touchend",this.handleMouseUp)
};
fk.prototype.handleMouseUp=function fe(fl){var fm=this.el_.ownerDocument;
this.off(fm,"mousemove",this.throttledHandleMouseSeek);
this.off(fm,"touchmove",this.throttledHandleMouseSeek);
this.off(fm,"mouseup",this.handleMouseUp);
this.off(fm,"touchend",this.handleMouseUp)
};
return fk
}(eN);
dG.prototype.options_={children:["seekBar"]};
eN.registerComponent("ProgressControl",dG);
var d9=function(fi){cY(fh,fi);
function fh(fk,fj){H(this,fh);
var fl=eM(this,fi.call(this,fk,fj));
fl.on(fk,"fullscreenchange",fl.handleFullscreenChange);
return fl
}fh.prototype.buildCSSClass=function ff(){return"vjs-fullscreen-control "+fi.prototype.buildCSSClass.call(this)
};
fh.prototype.handleFullscreenChange=function fe(fj){if(this.player_.isFullscreen()){this.controlText("Non-Fullscreen")
}else{this.controlText("Fullscreen")
}};
fh.prototype.handleClick=function fg(fj){if(!this.player_.isFullscreen()){this.player_.requestFullscreen()
}else{this.player_.exitFullscreen()
}};
return fh
}(h);
d9.prototype.controlText_="Fullscreen";
eN.registerComponent("FullscreenToggle",d9);
var bH=function bH(fe,ff){if(ff.tech_&&!ff.tech_.featuresVolumeControl){fe.addClass("vjs-hidden")
}fe.on(ff,"loadstart",function(){if(!ff.tech_.featuresVolumeControl){fe.addClass("vjs-hidden")
}else{fe.removeClass("vjs-hidden")
}})
};
var c5=function(fg){cY(ff,fg);
function ff(){H(this,ff);
return eM(this,fg.apply(this,arguments))
}ff.prototype.createEl=function fe(){return fg.prototype.createEl.call(this,"div",{className:"vjs-volume-level",innerHTML:'<span class="vjs-control-text"></span>'})
};
return ff
}(eN);
eN.registerComponent("VolumeLevel",c5);
var bb=function(fn){cY(fi,fn);
function fi(fq,fp){H(this,fi);
var fr=eM(this,fn.call(this,fq,fp));
fr.on("slideractive",fr.updateLastVolume_);
fr.on(fq,"volumechange",fr.updateARIAAttributes);
fq.ready(function(){return fr.updateARIAAttributes()
});
return fr
}fi.prototype.createEl=function fk(){return fn.prototype.createEl.call(this,"div",{className:"vjs-volume-bar vjs-slider-bar"},{"aria-label":this.localize("Volume Level"),"aria-live":"polite"})
};
fi.prototype.handleMouseMove=function fh(fp){this.checkMuted();
this.player_.volume(this.calculateDistance(fp))
};
fi.prototype.checkMuted=function fj(){if(this.player_.muted()){this.player_.muted(false)
}};
fi.prototype.getPercent=function fl(){if(this.player_.muted()){return 0
}return this.player_.volume()
};
fi.prototype.stepForward=function fg(){this.checkMuted();
this.player_.volume(this.player_.volume()+0.1)
};
fi.prototype.stepBack=function fe(){this.checkMuted();
this.player_.volume(this.player_.volume()-0.1)
};
fi.prototype.updateARIAAttributes=function fo(fq){var fp=this.player_.muted()?0:this.volumeAsPercentage_();
this.el_.setAttribute("aria-valuenow",fp);
this.el_.setAttribute("aria-valuetext",fp+"%")
};
fi.prototype.volumeAsPercentage_=function fm(){return Math.round(this.player_.volume()*100)
};
fi.prototype.updateLastVolume_=function ff(){var fp=this;
var fq=this.player_.volume();
this.one("sliderinactive",function(){if(fp.player_.volume()===0){fp.player_.lastVolume_(fq)
}})
};
return fi
}(aP);
bb.prototype.options_={children:["volumeLevel"],barName:"volumeLevel"};
bb.prototype.playerEvent="volumechange";
eN.registerComponent("VolumeBar",bb);
var aq=function(fg){cY(fj,fg);
function fj(fl){var fk=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};
H(this,fj);
fk.vertical=fk.vertical||false;
if(typeof fk.volumeBar==="undefined"||W(fk.volumeBar)){fk.volumeBar=fk.volumeBar||{};
fk.volumeBar.vertical=fk.vertical
}var fm=eM(this,fg.call(this,fl,fk));
bH(fm,fl);
fm.throttledHandleMouseMove=a6(ca(fm,fm.handleMouseMove),25);
fm.on("mousedown",fm.handleMouseDown);
fm.on("touchstart",fm.handleMouseDown);
fm.on(fm.volumeBar,["focus","slideractive"],function(){fm.volumeBar.addClass("vjs-slider-active");
fm.addClass("vjs-slider-active");
fm.trigger("slideractive")
});
fm.on(fm.volumeBar,["blur","sliderinactive"],function(){fm.volumeBar.removeClass("vjs-slider-active");
fm.removeClass("vjs-slider-active");
fm.trigger("sliderinactive")
});
return fm
}fj.prototype.createEl=function fe(){var fk="vjs-volume-horizontal";
if(this.options_.vertical){fk="vjs-volume-vertical"
}return fg.prototype.createEl.call(this,"div",{className:"vjs-volume-control vjs-control "+fk})
};
fj.prototype.handleMouseDown=function fh(fk){var fl=this.el_.ownerDocument;
this.on(fl,"mousemove",this.throttledHandleMouseMove);
this.on(fl,"touchmove",this.throttledHandleMouseMove);
this.on(fl,"mouseup",this.handleMouseUp);
this.on(fl,"touchend",this.handleMouseUp)
};
fj.prototype.handleMouseUp=function ff(fk){var fl=this.el_.ownerDocument;
this.off(fl,"mousemove",this.throttledHandleMouseMove);
this.off(fl,"touchmove",this.throttledHandleMouseMove);
this.off(fl,"mouseup",this.handleMouseUp);
this.off(fl,"touchend",this.handleMouseUp)
};
fj.prototype.handleMouseMove=function fi(fk){this.volumeBar.handleMouseMove(fk)
};
return fj
}(eN);
aq.prototype.options_={children:["volumeBar"]};
eN.registerComponent("VolumeControl",aq);
var eX=function(fi){cY(fg,fi);
function fg(fm,fl){H(this,fg);
var fn=eM(this,fi.call(this,fm,fl));
bH(fn,fm);
fn.on(fm,["loadstart","volumechange"],fn.update);
return fn
}fg.prototype.buildCSSClass=function fe(){return"vjs-mute-control "+fi.prototype.buildCSSClass.call(this)
};
fg.prototype.handleClick=function ff(fo){var fn=this.player_.volume();
var fl=this.player_.lastVolume_();
if(fn===0){var fm=fl<0.1?0.1:fl;
this.player_.volume(fm);
this.player_.muted(false)
}else{this.player_.muted(this.player_.muted()?false:true)
}};
fg.prototype.update=function fk(fl){this.updateIcon_();
this.updateControlText_()
};
fg.prototype.updateIcon_=function fh(){var fm=this.player_.volume();
var fn=3;
if(fm===0||this.player_.muted()){fn=0
}else{if(fm<0.33){fn=1
}else{if(fm<0.67){fn=2
}}}for(var fl=0;
fl<4;
fl++){eP(this.el_,"vjs-vol-"+fl)
}eB(this.el_,"vjs-vol-"+fn)
};
fg.prototype.updateControlText_=function fj(){var fl=this.player_.muted()||this.player_.volume()===0;
var fm=fl?"Unmute":"Mute";
if(this.controlText()!==fm){this.controlText(fm)
}};
return fg
}(h);
eX.prototype.controlText_="Mute";
eN.registerComponent("MuteToggle",eX);
var dL=function(fh){cY(fg,fh);
function fg(fk){var fj=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};
H(this,fg);
if(typeof fj.inline!=="undefined"){fj.inline=fj.inline
}else{fj.inline=true
}if(typeof fj.volumeControl==="undefined"||W(fj.volumeControl)){fj.volumeControl=fj.volumeControl||{};
fj.volumeControl.vertical=!fj.inline
}var fl=eM(this,fh.call(this,fk,fj));
bH(fl,fk);
fl.on(fl.volumeControl,["slideractive"],fl.sliderActive_);
fl.on(fl.muteToggle,"focus",fl.sliderActive_);
fl.on(fl.volumeControl,["sliderinactive"],fl.sliderInactive_);
fl.on(fl.muteToggle,"blur",fl.sliderInactive_);
return fl
}fg.prototype.sliderActive_=function ff(){this.addClass("vjs-slider-active")
};
fg.prototype.sliderInactive_=function fi(){this.removeClass("vjs-slider-active")
};
fg.prototype.createEl=function fe(){var fj="vjs-volume-panel-horizontal";
if(!this.options_.inline){fj="vjs-volume-panel-vertical"
}return fh.prototype.createEl.call(this,"div",{className:"vjs-volume-panel vjs-control "+fj})
};
return fg
}(eN);
dL.prototype.options_={children:["muteToggle","volumeControl"]};
eN.registerComponent("VolumePanel",dL);
var N=function(ff){cY(fh,ff);
function fh(fn,fm){H(this,fh);
var fo=eM(this,ff.call(this,fn,fm));
if(fm){fo.menuButton_=fm.menuButton
}fo.focusedChild_=-1;
fo.on("keydown",fo.handleKeyPress);
return fo
}fh.prototype.addItem=function fl(fm){this.addChild(fm);
fm.on("click",ca(this,function(fn){if(this.menuButton_){this.menuButton_.unpressButton();
if(fm.name()!=="CaptionSettingsMenuItem"){this.menuButton_.focus()
}}}))
};
fh.prototype.createEl=function fi(){var fn=this.options_.contentElType||"ul";
this.contentEl_=bu(fn,{className:"vjs-menu-content"});
this.contentEl_.setAttribute("role","menu");
var fm=ff.prototype.createEl.call(this,"div",{append:this.contentEl_,className:"vjs-menu"});
fm.appendChild(this.contentEl_);
bF(fm,"click",function(fo){fo.preventDefault();
fo.stopImmediatePropagation()
});
return fm
};
fh.prototype.handleKeyPress=function fk(fm){if(fm.which===37||fm.which===40){fm.preventDefault();
this.stepForward()
}else{if(fm.which===38||fm.which===39){fm.preventDefault();
this.stepBack()
}}};
fh.prototype.stepForward=function fg(){var fm=0;
if(this.focusedChild_!==undefined){fm=this.focusedChild_+1
}this.focus(fm)
};
fh.prototype.stepBack=function fj(){var fm=0;
if(this.focusedChild_!==undefined){fm=this.focusedChild_-1
}this.focus(fm)
};
fh.prototype.focus=function fe(){var fn=arguments.length>0&&arguments[0]!==undefined?arguments[0]:0;
var fm=this.children().slice();
var fo=fm.length&&fm[0].className&&/vjs-menu-title/.test(fm[0].className);
if(fo){fm.shift()
}if(fm.length>0){if(fn<0){fn=0
}else{if(fn>=fm.length){fn=fm.length-1
}}this.focusedChild_=fn;
fm[fn].el_.focus()
}};
return fh
}(eN);
eN.registerComponent("Menu",N);
var eh=function(fv){cY(fn,fv);
function fn(fA){var fz=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};
H(this,fn);
var fB=eM(this,fv.call(this,fA,fz));
fB.menuButton_=new h(fA,fz);
fB.menuButton_.controlText(fB.controlText_);
fB.menuButton_.el_.setAttribute("aria-haspopup","true");
var fy=h.prototype.buildCSSClass();
fB.menuButton_.el_.className=fB.buildCSSClass()+" "+fy;
fB.menuButton_.removeClass("vjs-control");
fB.addChild(fB.menuButton_);
fB.update();
fB.enabled_=true;
fB.on(fB.menuButton_,"tap",fB.handleClick);
fB.on(fB.menuButton_,"click",fB.handleClick);
fB.on(fB.menuButton_,"focus",fB.handleFocus);
fB.on(fB.menuButton_,"blur",fB.handleBlur);
fB.on("keydown",fB.handleSubmenuKeyPress);
return fB
}fn.prototype.update=function fm(){var fy=this.createMenu();
if(this.menu){this.removeChild(this.menu)
}this.menu=fy;
this.addChild(fy);
this.buttonPressed_=false;
this.menuButton_.el_.setAttribute("aria-expanded","false");
if(this.items&&this.items.length<=this.hideThreshold_){this.hide()
}else{this.show()
}};
fn.prototype.createMenu=function fl(){var fA=new N(this.player_,{menuButton:this});
this.hideThreshold_=0;
if(this.options_.title){var fz=bu("li",{className:"vjs-menu-title",innerHTML:e8(this.options_.title),tabIndex:-1});
this.hideThreshold_+=1;
fA.children_.unshift(fz);
K(fz,fA.contentEl())
}this.items=this.createItems();
if(this.items){for(var fy=0;
fy<this.items.length;
fy++){fA.addItem(this.items[fy])
}}return fA
};
fn.prototype.createItems=function fx(){};
fn.prototype.createEl=function fu(){return fv.prototype.createEl.call(this,"div",{className:this.buildWrapperCSSClass()},{})
};
fn.prototype.buildWrapperCSSClass=function fw(){var fz="vjs-menu-button";
if(this.options_.inline===true){fz+="-inline"
}else{fz+="-popup"
}var fy=h.prototype.buildCSSClass();
return"vjs-menu-button "+fz+" "+fy+" "+fv.prototype.buildCSSClass.call(this)
};
fn.prototype.buildCSSClass=function fj(){var fy="vjs-menu-button";
if(this.options_.inline===true){fy+="-inline"
}else{fy+="-popup"
}return"vjs-menu-button "+fy+" "+fv.prototype.buildCSSClass.call(this)
};
fn.prototype.controlText=function fp(fz){var fy=arguments.length>1&&arguments[1]!==undefined?arguments[1]:this.menuButton_.el();
return this.menuButton_.controlText(fz,fy)
};
fn.prototype.handleClick=function fk(fy){this.one(this.menu.contentEl(),"mouseleave",ca(this,function(fz){this.unpressButton();
this.el_.blur()
}));
if(this.buttonPressed_){this.unpressButton()
}else{this.pressButton()
}};
fn.prototype.focus=function fq(){this.menuButton_.focus()
};
fn.prototype.blur=function fr(){this.menuButton_.blur()
};
fn.prototype.handleFocus=function fi(){bF(cl,"keydown",ca(this,this.handleKeyPress))
};
fn.prototype.handleBlur=function fh(){dn(cl,"keydown",ca(this,this.handleKeyPress))
};
fn.prototype.handleKeyPress=function fe(fy){if(fy.which===27||fy.which===9){if(this.buttonPressed_){this.unpressButton()
}if(fy.which!==9){fy.preventDefault();
this.menuButton_.el_.focus()
}}else{if(fy.which===38||fy.which===40){if(!this.buttonPressed_){this.pressButton();
fy.preventDefault()
}}}};
fn.prototype.handleSubmenuKeyPress=function ft(fy){if(fy.which===27||fy.which===9){if(this.buttonPressed_){this.unpressButton()
}if(fy.which!==9){fy.preventDefault();
this.menuButton_.el_.focus()
}}};
fn.prototype.pressButton=function fg(){if(this.enabled_){this.buttonPressed_=true;
this.menu.lockShowing();
this.menuButton_.el_.setAttribute("aria-expanded","true");
this.menu.focus()
}};
fn.prototype.unpressButton=function fs(){if(this.enabled_){this.buttonPressed_=false;
this.menu.unlockShowing();
this.menuButton_.el_.setAttribute("aria-expanded","false")
}};
fn.prototype.disable=function ff(){this.unpressButton();
this.enabled_=false;
this.addClass("vjs-disabled");
this.menuButton_.disable()
};
fn.prototype.enable=function fo(){this.enabled_=true;
this.removeClass("vjs-disabled");
this.menuButton_.enable()
};
return fn
}(eN);
eN.registerComponent("MenuButton",eh);
var aY=function(ff){cY(fe,ff);
function fe(fi,fh){H(this,fe);
var fg=fh.tracks;
var fk=eM(this,ff.call(this,fi,fh));
if(fk.items.length<=1){fk.hide()
}if(!fg){return eM(fk)
}var fj=ca(fk,fk.update);
fg.addEventListener("removetrack",fj);
fg.addEventListener("addtrack",fj);
fk.player_.on("ready",fj);
fk.player_.on("dispose",function(){fg.removeEventListener("removetrack",fj);
fg.removeEventListener("addtrack",fj)
});
return fk
}return fe
}(eh);
eN.registerComponent("TrackButton",aY);
var dU=function(fi){cY(fh,fi);
function fh(fk,fj){H(this,fh);
var fl=eM(this,fi.call(this,fk,fj));
fl.selectable=fj.selectable;
fl.selected(fj.selected);
if(fl.selectable){fl.el_.setAttribute("role","menuitemcheckbox")
}else{fl.el_.setAttribute("role","menuitem")
}return fl
}fh.prototype.createEl=function fe(fl,fk,fj){this.nonIconControl=true;
return fi.prototype.createEl.call(this,"li",fd({className:"vjs-menu-item",innerHTML:'<span class="vjs-menu-item-text">'+this.localize(this.options_.label)+"</span>",tabIndex:-1},fk),fj)
};
fh.prototype.handleClick=function ff(fj){this.selected(true)
};
fh.prototype.selected=function fg(fj){if(this.selectable){if(fj){this.addClass("vjs-selected");
this.el_.setAttribute("aria-checked","true");
this.controlText(", selected")
}else{this.removeClass("vjs-selected");
this.el_.setAttribute("aria-checked","false");
this.controlText(" ")
}}};
return fh
}(cH);
eN.registerComponent("MenuItem",dU);
var ev=function(fi){cY(fh,fi);
function fh(fo,fn){H(this,fh);
var fk=fn.track;
var fm=fo.textTracks();
fn.label=fk.label||fk.language||"Unknown";
fn.selected=fk.mode==="showing";
var fq=eM(this,fi.call(this,fo,fn));
fq.track=fk;
var fl=ca(fq,fq.handleTracksChange);
var fj=ca(fq,fq.handleSelectedLanguageChange);
fo.on(["loadstart","texttrackchange"],fl);
fm.addEventListener("change",fl);
fm.addEventListener("selectedlanguagechange",fj);
fq.on("dispose",function(){fm.removeEventListener("change",fl);
fm.removeEventListener("selectedlanguagechange",fj)
});
if(fm.onchange===undefined){var fp=void 0;
fq.on(["tap","click"],function(){if(bK(bn.Event)!=="object"){try{fp=new bn.Event("change")
}catch(fr){}}if(!fp){fp=cl.createEvent("Event");
fp.initEvent("change",true,true)
}fm.dispatchEvent(fp)
})
}return fq
}fh.prototype.handleClick=function fg(fo){var fn=this.track.kind;
var fm=this.track.kinds;
var fk=this.player_.textTracks();
if(!fm){fm=[fn]
}fi.prototype.handleClick.call(this,fo);
if(!fk){return
}for(var fl=0;
fl<fk.length;
fl++){var fj=fk[fl];
if(fj===this.track&&fm.indexOf(fj.kind)>-1){if(fj.mode!=="showing"){fj.mode="showing"
}}else{if(fj.mode!=="disabled"){fj.mode="disabled"
}}}};
fh.prototype.handleTracksChange=function fe(fj){this.selected(this.track.mode==="showing")
};
fh.prototype.handleSelectedLanguageChange=function ff(fk){if(this.track.mode==="showing"){var fj=this.player_.cache_.selectedLanguage;
if(fj&&fj.enabled&&fj.language===this.track.language&&fj.kind!==this.track.kind){return
}this.player_.cache_.selectedLanguage={enabled:true,language:this.track.language,kind:this.track.kind}
}};
return fh
}(dU);
eN.registerComponent("TextTrackMenuItem",ev);
var a9=function(fh){cY(fg,fh);
function fg(fj,fi){H(this,fg);
fi.track={player:fj,kind:fi.kind,kinds:fi.kinds,"default":false,mode:"disabled"};
if(!fi.kinds){fi.kinds=[fi.kind]
}if(fi.label){fi.track.label=fi.label
}else{fi.track.label=fi.kinds.join(" and ")+" off"
}fi.selectable=true;
var fk=eM(this,fh.call(this,fj,fi));
fk.selected(true);
return fk
}fg.prototype.handleTracksChange=function fe(fn){var fk=this.player().textTracks();
var fm=true;
for(var fl=0,fj=fk.length;
fl<fj;
fl++){var fi=fk[fl];
if(this.options_.kinds.indexOf(fi.kind)>-1&&fi.mode==="showing"){fm=false;
break
}}this.selected(fm)
};
fg.prototype.handleSelectedLanguageChange=function ff(fn){var fk=this.player().textTracks();
var fm=true;
for(var fl=0,fj=fk.length;
fl<fj;
fl++){var fi=fk[fl];
if(["captions","descriptions","subtitles"].indexOf(fi.kind)>-1&&fi.mode==="showing"){fm=false;
break
}}if(fm){this.player_.cache_.selectedLanguage={enabled:false}
}};
return fg
}(ev);
eN.registerComponent("OffTextTrackMenuItem",a9);
var ad=function(fg){cY(fe,fg);
function fe(fi){var fh=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};
H(this,fe);
fh.tracks=fi.textTracks();
return eM(this,fg.call(this,fi,fh))
}fe.prototype.createItems=function ff(){var fi=arguments.length>0&&arguments[0]!==undefined?arguments[0]:[];
var fn=arguments.length>1&&arguments[1]!==undefined?arguments[1]:ev;
var fk=void 0;
if(this.label_){fk=this.label_+" off"
}fi.push(new a9(this.player_,{kinds:this.kinds_,kind:this.kind_,label:fk}));
this.hideThreshold_+=1;
var fj=this.player_.textTracks();
if(!Array.isArray(this.kinds_)){this.kinds_=[this.kind_]
}for(var fl=0;
fl<fj.length;
fl++){var fh=fj[fl];
if(this.kinds_.indexOf(fh.kind)>-1){var fm=new fn(this.player_,{track:fh,selectable:true});
fm.addClass("vjs-"+fh.kind+"-menu-item");
fi.push(fm)
}}return fi
};
return fe
}(aY);
eN.registerComponent("TextTrackButton",ad);
var dj=function(ff){cY(fg,ff);
function fg(fl,fk){H(this,fg);
var fj=fk.track;
var fi=fk.cue;
var fm=fl.currentTime();
fk.selectable=true;
fk.label=fi.text;
fk.selected=fi.startTime<=fm&&fm<fi.endTime;
var fn=eM(this,ff.call(this,fl,fk));
fn.track=fj;
fn.cue=fi;
fj.addEventListener("cuechange",ca(fn,fn.update));
return fn
}fg.prototype.handleClick=function fe(fi){ff.prototype.handleClick.call(this);
this.player_.currentTime(this.cue.startTime);
this.update(this.cue.startTime)
};
fg.prototype.update=function fh(fk){var fi=this.cue;
var fj=this.player_.currentTime();
this.selected(fi.startTime<=fj&&fj<fi.endTime)
};
return fg
}(dU);
eN.registerComponent("ChaptersTrackMenuItem",dj);
var aX=function(fn){cY(fm,fn);
function fm(fp,fo,fq){H(this,fm);
return eM(this,fn.call(this,fp,fo,fq))
}fm.prototype.buildCSSClass=function fj(){return"vjs-chapters-button "+fn.prototype.buildCSSClass.call(this)
};
fm.prototype.buildWrapperCSSClass=function fh(){return"vjs-chapters-button "+fn.prototype.buildWrapperCSSClass.call(this)
};
fm.prototype.update=function fg(fo){if(!this.track_||fo&&(fo.type==="addtrack"||fo.type==="removetrack")){this.setTrack(this.findChaptersTrack())
}fn.prototype.update.call(this)
};
fm.prototype.setTrack=function fk(fo){if(this.track_===fo){return
}if(!this.updateHandler_){this.updateHandler_=this.update.bind(this)
}if(this.track_){var fp=this.player_.remoteTextTrackEls().getTrackElementByTrack_(this.track_);
if(fp){fp.removeEventListener("load",this.updateHandler_)
}this.track_=null
}this.track_=fo;
if(this.track_){this.track_.mode="hidden";
var fq=this.player_.remoteTextTrackEls().getTrackElementByTrack_(this.track_);
if(fq){fq.addEventListener("load",this.updateHandler_)
}}};
fm.prototype.findChaptersTrack=function ff(){var fp=this.player_.textTracks()||[];
for(var fq=fp.length-1;
fq>=0;
fq--){var fo=fp[fq];
if(fo.kind===this.kind_){return fo
}}};
fm.prototype.getMenuCaption=function fe(){if(this.track_&&this.track_.label){return this.track_.label
}return this.localize(e8(this.kind_))
};
fm.prototype.createMenu=function fl(){this.options_.title=this.getMenuCaption();
return fn.prototype.createMenu.call(this)
};
fm.prototype.createItems=function fi(){var fr=[];
if(!this.track_){return fr
}var fs=this.track_.cues;
if(!fs){return fr
}for(var ft=0,fp=fs.length;
ft<fp;
ft++){var fo=fs[ft];
var fq=new dj(this.player_,{track:this.track_,cue:fo});
fr.push(fq)
}return fr
};
return fm
}(ad);
aX.prototype.kind_="chapters";
aX.prototype.controlText_="Chapters";
eN.registerComponent("ChaptersButton",aX);
var cQ=function(fi){cY(fh,fi);
function fh(fm,fl,fn){H(this,fh);
var fo=eM(this,fi.call(this,fm,fl,fn));
var fk=fm.textTracks();
var fj=ca(fo,fo.handleTracksChange);
fk.addEventListener("change",fj);
fo.on("dispose",function(){fk.removeEventListener("change",fj)
});
return fo
}fh.prototype.handleTracksChange=function fg(fo){var fl=this.player().textTracks();
var fn=false;
for(var fm=0,fk=fl.length;
fm<fk;
fm++){var fj=fl[fm];
if(fj.kind!==this.kind_&&fj.mode==="showing"){fn=true;
break
}}if(fn){this.disable()
}else{this.enable()
}};
fh.prototype.buildCSSClass=function ff(){return"vjs-descriptions-button "+fi.prototype.buildCSSClass.call(this)
};
fh.prototype.buildWrapperCSSClass=function fe(){return"vjs-descriptions-button "+fi.prototype.buildWrapperCSSClass.call(this)
};
return fh
}(ad);
cQ.prototype.kind_="descriptions";
cQ.prototype.controlText_="Descriptions";
eN.registerComponent("DescriptionsButton",cQ);
var d0=function(fh){cY(fg,fh);
function fg(fj,fi,fk){H(this,fg);
return eM(this,fh.call(this,fj,fi,fk))
}fg.prototype.buildCSSClass=function ff(){return"vjs-subtitles-button "+fh.prototype.buildCSSClass.call(this)
};
fg.prototype.buildWrapperCSSClass=function fe(){return"vjs-subtitles-button "+fh.prototype.buildWrapperCSSClass.call(this)
};
return fg
}(ad);
d0.prototype.kind_="subtitles";
d0.prototype.controlText_="Subtitles";
eN.registerComponent("SubtitlesButton",d0);
var dO=function(fg){cY(ff,fg);
function ff(fi,fh){H(this,ff);
fh.track={player:fi,kind:fh.kind,label:fh.kind+" settings",selectable:false,"default":false,mode:"disabled"};
fh.selectable=false;
fh.name="CaptionSettingsMenuItem";
var fj=eM(this,fg.call(this,fi,fh));
fj.addClass("vjs-texttrack-settings");
fj.controlText(", opens "+fh.kind+" settings dialog");
return fj
}ff.prototype.handleClick=function fe(fh){this.player().getChild("textTrackSettings").open()
};
return ff
}(ev);
eN.registerComponent("CaptionSettingsMenuItem",dO);
var c3=function(fi){cY(fh,fi);
function fh(fk,fj,fl){H(this,fh);
return eM(this,fi.call(this,fk,fj,fl))
}fh.prototype.buildCSSClass=function ff(){return"vjs-captions-button "+fi.prototype.buildCSSClass.call(this)
};
fh.prototype.buildWrapperCSSClass=function fe(){return"vjs-captions-button "+fi.prototype.buildWrapperCSSClass.call(this)
};
fh.prototype.createItems=function fg(){var fj=[];
if(!(this.player().tech_&&this.player().tech_.featuresNativeTextTracks)){fj.push(new dO(this.player_,{kind:this.kind_}));
this.hideThreshold_+=1
}return fi.prototype.createItems.call(this,fj)
};
return fh
}(ad);
c3.prototype.kind_="captions";
c3.prototype.controlText_="Captions";
eN.registerComponent("CaptionsButton",c3);
var dy=function(fg){cY(ff,fg);
function ff(){H(this,ff);
return eM(this,fg.apply(this,arguments))
}ff.prototype.createEl=function fe(fk,fj,fh){var fl='<span class="vjs-menu-item-text">'+this.localize(this.options_.label);
if(this.options_.track.kind==="captions"){fl+='\n        <span aria-hidden="true" class="vjs-icon-placeholder"></span>\n        <span class="vjs-control-text"> '+this.localize("Captions")+"</span>\n      "
}fl+="</span>";
var fi=fg.prototype.createEl.call(this,fk,fd({innerHTML:fl},fj),fh);
return fi
};
return ff
}(ev);
eN.registerComponent("SubsCapsMenuItem",dy);
var eF=function(fi){cY(fh,fi);
function fh(fk){var fj=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};
H(this,fh);
var fl=eM(this,fi.call(this,fk,fj));
fl.label_="subtitles";
if(["en","en-us","en-ca","fr-ca"].indexOf(fl.player_.language_)>-1){fl.label_="captions"
}fl.menuButton_.controlText(e8(fl.label_));
return fl
}fh.prototype.buildCSSClass=function ff(){return"vjs-subs-caps-button "+fi.prototype.buildCSSClass.call(this)
};
fh.prototype.buildWrapperCSSClass=function fe(){return"vjs-subs-caps-button "+fi.prototype.buildWrapperCSSClass.call(this)
};
fh.prototype.createItems=function fg(){var fj=[];
if(!(this.player().tech_&&this.player().tech_.featuresNativeTextTracks)){fj.push(new dO(this.player_,{kind:this.label_}));
this.hideThreshold_+=1
}fj=fi.prototype.createItems.call(this,fj,dy);
return fj
};
return fh
}(ad);
eF.prototype.kinds_=["captions","subtitles"];
eF.prototype.controlText_="Subtitles";
eN.registerComponent("SubsCapsButton",eF);
var cs=function(fh){cY(ff,fh);
function ff(fm,fl){H(this,ff);
var fi=fl.track;
var fk=fm.audioTracks();
fl.label=fi.label||fi.language||"Unknown";
fl.selected=fi.enabled;
var fn=eM(this,fh.call(this,fm,fl));
fn.track=fi;
var fj=ca(fn,fn.handleTracksChange);
fk.addEventListener("change",fj);
fn.on("dispose",function(){fk.removeEventListener("change",fj)
});
return fn
}ff.prototype.handleClick=function fg(fl){var fj=this.player_.audioTracks();
fh.prototype.handleClick.call(this,fl);
for(var fk=0;
fk<fj.length;
fk++){var fi=fj[fk];
fi.enabled=fi===this.track
}};
ff.prototype.handleTracksChange=function fe(fi){this.selected(this.track.enabled)
};
return ff
}(dU);
eN.registerComponent("AudioTrackMenuItem",cs);
var aC=function(fi){cY(fh,fi);
function fh(fk){var fj=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};
H(this,fh);
fj.tracks=fk.audioTracks();
return eM(this,fi.call(this,fk,fj))
}fh.prototype.buildCSSClass=function ff(){return"vjs-audio-button "+fi.prototype.buildCSSClass.call(this)
};
fh.prototype.buildWrapperCSSClass=function fe(){return"vjs-audio-button "+fi.prototype.buildWrapperCSSClass.call(this)
};
fh.prototype.createItems=function fg(){var fk=arguments.length>0&&arguments[0]!==undefined?arguments[0]:[];
this.hideThreshold_=1;
var fl=this.player_.audioTracks();
for(var fm=0;
fm<fl.length;
fm++){var fj=fl[fm];
fk.push(new cs(this.player_,{track:fj,selectable:true}))
}return fk
};
return fh
}(aY);
aC.prototype.controlText_="Audio Track";
eN.registerComponent("AudioTrackButton",aC);
var an=function(ff){cY(fh,ff);
function fh(fk,fj){H(this,fh);
var fi=fj.rate;
var fl=parseFloat(fi,10);
fj.label=fi;
fj.selected=fl===1;
fj.selectable=true;
var fm=eM(this,ff.call(this,fk,fj));
fm.label=fi;
fm.rate=fl;
fm.on(fk,"ratechange",fm.update);
return fm
}fh.prototype.handleClick=function fe(fi){ff.prototype.handleClick.call(this);
this.player().playbackRate(this.rate)
};
fh.prototype.update=function fg(fi){this.selected(this.player().playbackRate()===this.rate)
};
return fh
}(dU);
an.prototype.contentElType="button";
eN.registerComponent("PlaybackRateMenuItem",an);
var Q=function(fo){cY(ff,fo);
function ff(fr,fq){H(this,ff);
var fs=eM(this,fo.call(this,fr,fq));
fs.updateVisibility();
fs.updateLabel();
fs.on(fr,"loadstart",fs.updateVisibility);
fs.on(fr,"ratechange",fs.updateLabel);
return fs
}ff.prototype.createEl=function fe(){var fq=fo.prototype.createEl.call(this);
this.labelEl_=bu("div",{className:"vjs-playback-rate-value",innerHTML:"1x"});
fq.appendChild(this.labelEl_);
return fq
};
ff.prototype.buildCSSClass=function fk(){return"vjs-playback-rate "+fo.prototype.buildCSSClass.call(this)
};
ff.prototype.buildWrapperCSSClass=function fh(){return"vjs-playback-rate "+fo.prototype.buildWrapperCSSClass.call(this)
};
ff.prototype.createMenu=function fn(){var fs=new N(this.player());
var fr=this.playbackRates();
if(fr){for(var fq=fr.length-1;
fq>=0;
fq--){fs.addChild(new an(this.player(),{rate:fr[fq]+"x"}))
}}return fs
};
ff.prototype.updateARIAAttributes=function fp(){this.el().setAttribute("aria-valuenow",this.player().playbackRate())
};
ff.prototype.handleClick=function fi(fu){var fr=this.player().playbackRate();
var ft=this.playbackRates();
var fq=ft[0];
for(var fs=0;
fs<ft.length;
fs++){if(ft[fs]>fr){fq=ft[fs];
break
}}this.player().playbackRate(fq)
};
ff.prototype.playbackRates=function fm(){return this.options_.playbackRates||this.options_.playerOptions&&this.options_.playerOptions.playbackRates
};
ff.prototype.playbackRateSupported=function fj(){return this.player().tech_&&this.player().tech_.featuresPlaybackRate&&this.playbackRates()&&this.playbackRates().length>0
};
ff.prototype.updateVisibility=function fg(fq){if(this.playbackRateSupported()){this.removeClass("vjs-hidden")
}else{this.addClass("vjs-hidden")
}};
ff.prototype.updateLabel=function fl(fq){if(this.playbackRateSupported()){this.labelEl_.innerHTML=this.player().playbackRate()+"x"
}};
return ff
}(eh);
Q.prototype.controlText_="Playback Rate";
eN.registerComponent("PlaybackRateMenuButton",Q);
var eS=function(fh){cY(fg,fh);
function fg(){H(this,fg);
return eM(this,fh.apply(this,arguments))
}fg.prototype.buildCSSClass=function ff(){return"vjs-spacer "+fh.prototype.buildCSSClass.call(this)
};
fg.prototype.createEl=function fe(){return fh.prototype.createEl.call(this,"div",{className:this.buildCSSClass()})
};
return fg
}(eN);
eN.registerComponent("Spacer",eS);
var eV=function(fh){cY(fg,fh);
function fg(){H(this,fg);
return eM(this,fh.apply(this,arguments))
}fg.prototype.buildCSSClass=function ff(){return"vjs-custom-control-spacer "+fh.prototype.buildCSSClass.call(this)
};
fg.prototype.createEl=function fe(){var fi=fh.prototype.createEl.call(this,{className:this.buildCSSClass()});
fi.innerHTML="&nbsp;";
return fi
};
return fg
}(eS);
eN.registerComponent("CustomControlSpacer",eV);
var aO=function(fg){cY(ff,fg);
function ff(){H(this,ff);
return eM(this,fg.apply(this,arguments))
}ff.prototype.createEl=function fe(){return fg.prototype.createEl.call(this,"div",{className:"vjs-control-bar",dir:"ltr"},{role:"group"})
};
return ff
}(eN);
aO.prototype.options_={children:["playToggle","volumePanel","currentTimeDisplay","timeDivider","durationDisplay","progressControl","liveDisplay","remainingTimeDisplay","customControlSpacer","playbackRateMenuButton","chaptersButton","descriptionsButton","subsCapsButton","audioTrackButton","fullscreenToggle"]};
eN.registerComponent("ControlBar",aO);
var eH=function(fh){cY(ff,fh);
function ff(fj,fi){H(this,ff);
var fk=eM(this,fh.call(this,fj,fi));
fk.on(fj,"error",fk.open);
return fk
}ff.prototype.buildCSSClass=function fe(){return"vjs-error-display "+fh.prototype.buildCSSClass.call(this)
};
ff.prototype.content=function fg(){var fi=this.player().error();
return fi?this.localize(fi.message):""
};
return ff
}(cA);
eH.prototype.options_=cS(cA.prototype.options_,{pauseOnOpen:false,fillAlways:true,temporary:false,uncloseable:true});
eN.registerComponent("ErrorDisplay",eH);
var fb="vjs-text-track-settings";
var l=["#000","Black"];
var ex=["#00F","Blue"];
var cI=["#0FF","Cyan"];
var cF=["#0F0","Green"];
var aQ=["#F0F","Magenta"];
var M=["#F00","Red"];
var aU=["#FFF","White"];
var cC=["#FF0","Yellow"];
var fc=["1","Opaque"];
var a7=["0.5","Semi-Transparent"];
var ce=["0","Transparent"];
var cV={backgroundColor:{selector:".vjs-bg-color > select",id:"captions-background-color-%s",label:"Color",options:[l,aU,M,cF,ex,cC,aQ,cI]},backgroundOpacity:{selector:".vjs-bg-opacity > select",id:"captions-background-opacity-%s",label:"Transparency",options:[fc,a7,ce]},color:{selector:".vjs-fg-color > select",id:"captions-foreground-color-%s",label:"Color",options:[aU,l,M,cF,ex,cC,aQ,cI]},edgeStyle:{selector:".vjs-edge-style > select",id:"%s",label:"Text Edge Style",options:[["none","None"],["raised","Raised"],["depressed","Depressed"],["uniform","Uniform"],["dropshadow","Dropshadow"]]},fontFamily:{selector:".vjs-font-family > select",id:"captions-font-family-%s",label:"Font Family",options:[["proportionalSansSerif","Proportional Sans-Serif"],["monospaceSansSerif","Monospace Sans-Serif"],["proportionalSerif","Proportional Serif"],["monospaceSerif","Monospace Serif"],["casual","Casual"],["script","Script"],["small-caps","Small Caps"]]},fontPercent:{selector:".vjs-font-percent > select",id:"captions-font-size-%s",label:"Font Size",options:[["0.50","50%"],["0.75","75%"],["1.00","100%"],["1.25","125%"],["1.50","150%"],["1.75","175%"],["2.00","200%"],["3.00","300%"],["4.00","400%"]],"default":2,parser:function cr(fe){return fe==="1.00"?null:Number(fe)
}},textOpacity:{selector:".vjs-text-opacity > select",id:"captions-foreground-opacity-%s",label:"Transparency",options:[fc,a7]},windowColor:{selector:".vjs-window-color > select",id:"captions-window-color-%s",label:"Color"},windowOpacity:{selector:".vjs-window-opacity > select",id:"captions-window-opacity-%s",label:"Transparency",options:[ce,a7,fc]}};
cV.windowColor.options=cV.backgroundColor.options;
function B(fe,ff){if(ff){fe=ff(fe)
}if(fe&&fe!=="none"){return fe
}}function e(fe,fg){var ff=fe.options[fe.options.selectedIndex].value;
return B(ff,fg)
}function eJ(ff,fg,fh){if(!fg){return
}for(var fe=0;
fe<ff.options.length;
fe++){if(B(ff.options[fe].value,fh)===fg){ff.selectedIndex=fe;
break
}}}var cj=function(fo){cY(fg,fo);
function fg(fz,fy){H(this,fg);
fy.temporary=false;
var fA=eM(this,fo.call(this,fz,fy));
fA.updateDisplay=ca(fA,fA.updateDisplay);
fA.fill();
fA.hasBeenOpened_=fA.hasBeenFilled_=true;
fA.endDialog=bu("p",{className:"vjs-control-text",textContent:fA.localize("End of dialog window.")});
fA.el().appendChild(fA.endDialog);
fA.setDefaults();
if(fy.persistTextTrackSettings===undefined){fA.options_.persistTextTrackSettings=fA.options_.playerOptions.persistTextTrackSettings
}fA.on(fA.$(".vjs-done-button"),"click",function(){fA.saveSettings();
fA.close()
});
fA.on(fA.$(".vjs-default-button"),"click",function(){fA.setDefaults();
fA.updateDisplay()
});
bQ(cV,function(fB){fA.on(fA.$(fB.selector),"change",fA.updateDisplay)
});
if(fA.options_.persistTextTrackSettings){fA.restoreSettings()
}return fA
}fg.prototype.createElSelect_=function fq(fz){var fB=this;
var fC=arguments.length>1&&arguments[1]!==undefined?arguments[1]:"";
var fA=arguments.length>2&&arguments[2]!==undefined?arguments[2]:"label";
var fy=cV[fz];
var fD=fy.id.replace("%s",this.id_);
return["<"+fA+' id="'+fD+'" class="'+(fA==="label"?"vjs-label":"")+'">',this.localize(fy.label),"</"+fA+">",'<select aria-labelledby="'+fC+" "+fD+'">'].concat(fy.options.map(function(fF){var fE=fD+"-"+fF[1];
return['<option id="'+fE+'" value="'+fF[0]+'" ','aria-labelledby="'+fC+" "+fD+" "+fE+'">',fB.localize(fF[1]),"</option>"].join("")
})).concat("</select>").join("")
};
fg.prototype.createElFgColor_=function fv(){var fy="captions-text-legend-"+this.id_;
return['<div class="vjs-fg-color vjs-track-setting">','<span id="'+fy+'">',this.localize("Text"),"</span>",this.createElSelect_("color",fy),'<span class="vjs-text-opacity vjs-opacity">',this.createElSelect_("textOpacity",fy),"</span>","</div>"].join("")
};
fg.prototype.createElBgColor_=function fx(){var fy="captions-background-"+this.id_;
return['<div class="vjs-bg-color vjs-track-setting">','<span id="'+fy+'">',this.localize("Background"),"</span>",this.createElSelect_("backgroundColor",fy),'<span class="vjs-bg-opacity vjs-opacity">',this.createElSelect_("backgroundOpacity",fy),"</span>","</div>"].join("")
};
fg.prototype.createElWinColor_=function fr(){var fy="captions-window-"+this.id_;
return['<div class="vjs-window-color vjs-track-setting">','<span id="'+fy+'">',this.localize("Window"),"</span>",this.createElSelect_("windowColor",fy),'<span class="vjs-window-opacity vjs-opacity">',this.createElSelect_("windowOpacity",fy),"</span>","</div>"].join("")
};
fg.prototype.createElColors_=function fl(){return bu("div",{className:"vjs-track-settings-colors",innerHTML:[this.createElFgColor_(),this.createElBgColor_(),this.createElWinColor_()].join("")})
};
fg.prototype.createElFont_=function fi(){return bu("div",{className:'vjs-track-settings-font">',innerHTML:['<div class="vjs-font-percent vjs-track-setting">',this.createElSelect_("fontPercent","","legend"),"</div>",'<div class="vjs-edge-style vjs-track-setting">',this.createElSelect_("edgeStyle","","legend"),"</div>",'<div class="vjs-font-family vjs-track-setting">',this.createElSelect_("fontFamily","","legend"),"</div>"].join("")})
};
fg.prototype.createElControls_=function fh(){var fy=this.localize("restore all settings to the default values");
return bu("div",{className:"vjs-track-settings-controls",innerHTML:['<button class="vjs-default-button" title="'+fy+'">',this.localize("Reset"),'<span class="vjs-control-text"> '+fy+"</span>","</button>",'<button class="vjs-done-button">'+this.localize("Done")+"</button>"].join("")})
};
fg.prototype.content=function fs(){return[this.createElColors_(),this.createElFont_(),this.createElControls_()]
};
fg.prototype.label=function fk(){return this.localize("Caption Settings Dialog")
};
fg.prototype.description=function ft(){return this.localize("Beginning of dialog window. Escape will cancel and close the window.")
};
fg.prototype.buildCSSClass=function fj(){return fo.prototype.buildCSSClass.call(this)+" vjs-text-track-settings"
};
fg.prototype.getValues=function ff(){var fy=this;
return bd(cV,function(fz,fA,fB){var fC=e(fy.$(fA.selector),fA.parser);
if(fC!==undefined){fz[fB]=fC
}return fz
},{})
};
fg.prototype.setValues=function fu(fy){var fz=this;
bQ(cV,function(fA,fB){eJ(fz.$(fA.selector),fy[fB],fA.parser)
})
};
fg.prototype.setDefaults=function fn(){var fy=this;
bQ(cV,function(fA){var fz=fA.hasOwnProperty("default")?fA["default"]:0;
fy.$(fA.selector).selectedIndex=fz
})
};
fg.prototype.restoreSettings=function fe(){var fy=void 0;
try{fy=JSON.parse(bn.localStorage.getItem(fb))
}catch(fz){c6.warn(fz)
}if(fy){this.setValues(fy)
}};
fg.prototype.saveSettings=function fp(){if(!this.options_.persistTextTrackSettings){return
}var fy=this.getValues();
try{if(Object.keys(fy).length){bn.localStorage.setItem(fb,JSON.stringify(fy))
}else{bn.localStorage.removeItem(fb)
}}catch(fz){c6.warn(fz)
}};
fg.prototype.updateDisplay=function fw(){var fy=this.player_.getChild("textTrackDisplay");
if(fy){fy.updateDisplay()
}};
fg.prototype.conditionalBlur_=function fm(){this.previouslyActiveEl_=null;
this.off(cl,"keydown",this.handleKeyDown);
var fz=this.player_.controlBar;
var fA=fz&&fz.subsCapsButton;
var fy=fz&&fz.captionsButton;
if(fA){fA.focus()
}else{if(fy){fy.focus()
}}};
return fg
}(cA);
eN.registerComponent("TextTrackSettings",cj);
var co=Z(["Text Tracks are being loaded from another origin but the crossorigin attribute isn't used.\n            This may prevent text tracks from loading."],["Text Tracks are being loaded from another origin but the crossorigin attribute isn't used.\n            This may prevent text tracks from loading."]);
var ci=function(fn){cY(fp,fn);
function fp(fM,fL){H(this,fp);
var fH=eM(this,fn.call(this,fM,fL));
var fC=fM.source;
var fD=false;
if(fC&&(fH.el_.currentSrc!==fC.src||fM.tag&&fM.tag.initNetworkState_===3)){fH.setSource(fC)
}else{fH.handleLateInit_(fH.el_)
}if(fH.el_.hasChildNodes()){var fE=fH.el_.childNodes;
var fJ=fE.length;
var fI=[];
while(fJ--){var fF=fE[fJ];
var fK=fF.nodeName.toLowerCase();
if(fK==="track"){if(!fH.featuresNativeTextTracks){fI.push(fF)
}else{fH.remoteTextTrackEls().addTrackElement_(fF);
fH.remoteTextTracks().addTrack(fF.track);
fH.textTracks().addTrack(fF.track);
if(!fD&&!fH.el_.hasAttribute("crossorigin")&&dJ(fF.src)){fD=true
}}}}for(var fG=0;
fG<fI.length;
fG++){fH.el_.removeChild(fI[fG])
}}fH.proxyNativeTracks_();
if(fH.featuresNativeTextTracks&&fD){c6.warn(eb(co))
}fH.restoreMetadataTracksInIOSNativePlayer_();
if((eo||cB||d6)&&fM.nativeControlsForTouch===true){fH.setControls(true)
}fH.proxyWebkitFullscreen_();
fH.triggerReady();
return fH
}fp.prototype.dispose=function fB(){fp.disposeMediaElement(this.el_);
fn.prototype.dispose.call(this)
};
fp.prototype.restoreMetadataTracksInIOSNativePlayer_=function fs(){var fC=this.textTracks();
var fF=void 0;
var fE=function fE(){fF=[];
for(var fH=0;
fH<fC.length;
fH++){var fG=fC[fH];
if(fG.kind==="metadata"){fF.push({track:fG,storedMode:fG.mode})
}}};
fE();
fC.addEventListener("change",fE);
var fD=function fD(){for(var fH=0;
fH<fF.length;
fH++){var fG=fF[fH];
if(fG.track.mode==="disabled"&&fG.track.mode!==fG.storedMode){fG.track.mode=fG.storedMode
}}fC.removeEventListener("change",fD)
};
this.on("webkitbeginfullscreen",function(){fC.removeEventListener("change",fE);
fC.removeEventListener("change",fD);
fC.addEventListener("change",fD)
});
this.on("webkitendfullscreen",function(){fC.removeEventListener("change",fE);
fC.addEventListener("change",fE);
fC.removeEventListener("change",fD)
})
};
fp.prototype.proxyNativeTracks_=function fg(){var fC=this;
cZ.names.forEach(function(fD){var fH=cZ[fD];
var fE=fC.el()[fH.getterName];
var fK=fC[fH.getterName]();
if(!fC["featuresNative"+fH.capitalName+"Tracks"]||!fE||!fE.addEventListener){return
}var fI={change:function fJ(fM){fK.trigger({type:"change",target:fK,currentTarget:fK,srcElement:fK})
},addtrack:function fG(fM){fK.addTrack(fM.track)
},removetrack:function fL(fM){fK.removeTrack(fM.track)
}};
var fF=function fF(){var fO=[];
for(var fN=0;
fN<fK.length;
fN++){var fP=false;
for(var fM=0;
fM<fE.length;
fM++){if(fE[fM]===fK[fN]){fP=true;
break
}}if(!fP){fO.push(fK[fN])
}}while(fO.length){fK.removeTrack(fO.shift())
}};
Object.keys(fI).forEach(function(fM){var fN=fI[fM];
fE.addEventListener(fM,fN);
fC.on("dispose",function(fO){return fE.removeEventListener(fM,fN)
})
});
fC.on("loadstart",fF);
fC.on("dispose",function(fM){return fC.off("loadstart",fF)
})
})
};
fp.prototype.createEl=function fz(){var fG=this.options_.tag;
if(!fG||!(this.options_.playerElIngest||this.movingMediaElementInDOM)){if(fG){var fJ=fG.cloneNode(true);
if(fG.parentNode){fG.parentNode.insertBefore(fJ,fG)
}fp.disposeMediaElement(fG);
fG=fJ
}else{fG=cl.createElement("video");
var fD=this.options_.tag&&dN(this.options_.tag);
var fE=cS({},fD);
if(!eo||this.options_.nativeControlsForTouch!==true){delete fE.controls
}aG(fG,fd(fE,{id:this.options_.techId,"class":"mb-video"}))
}fG.playerId=this.options_.playerId
}if(this.options_.preload!=="undefined"){j(fG,"preload",this.options_.preload)
}var fH=["loop","muted","playsinline","autoplay"];
for(var fF=fH.length-1;
fF>=0;
fF--){var fC=fH[fF];
var fI=this.options_[fC];
if(typeof fI!=="undefined"){if(fI){j(fG,fC,fC)
}else{cU(fG,fC)
}fG[fC]=fI
}}return fG
};
fp.prototype.handleLateInit_=function fl(fD){if(fD.networkState===0||fD.networkState===3){return
}if(fD.readyState===0){var fC=false;
var fG=function fG(){fC=true
};
this.on("loadstart",fG);
var fF=function fF(){if(!fC){this.trigger("loadstart")
}};
this.on("loadedmetadata",fF);
this.ready(function(){this.off("loadstart",fG);
this.off("loadedmetadata",fF);
if(!fC){this.trigger("loadstart")
}});
return
}var fE=["loadstart"];
fE.push("loadedmetadata");
if(fD.readyState>=2){fE.push("loadeddata")
}if(fD.readyState>=3){fE.push("canplay")
}if(fD.readyState>=4){fE.push("canplaythrough")
}this.ready(function(){fE.forEach(function(fH){this.trigger(fH)
},this)
})
};
fp.prototype.setCurrentTime=function fm(fD){try{this.el_.currentTime=fD
}catch(fC){c6(fC,"Video is not ready. (Video.js)")
}};
fp.prototype.duration=function fe(){var fD=this;
if(this.el_.duration===Infinity&&cv&&cO&&this.el_.currentTime===0){var fC=function fC(){if(fD.el_.currentTime>0){if(fD.el_.duration===Infinity){fD.trigger("durationchange")
}fD.off("timeupdate",fC)
}};
this.on("timeupdate",fC);
return NaN
}return this.el_.duration||NaN
};
fp.prototype.width=function fq(){return this.el_.offsetWidth
};
fp.prototype.height=function fo(){return this.el_.offsetHeight
};
fp.prototype.proxyWebkitFullscreen_=function fi(){var fE=this;
if(!("webkitDisplayingFullscreen" in this.el_)){return
}var fD=function fD(){this.trigger("fullscreenchange",{isFullscreen:false})
};
var fC=function fC(){if("webkitPresentationMode" in this.el_&&this.el_.webkitPresentationMode!=="picture-in-picture"){this.one("webkitendfullscreen",fD);
this.trigger("fullscreenchange",{isFullscreen:true})
}};
this.on("webkitbeginfullscreen",fC);
this.on("dispose",function(){fE.off("webkitbeginfullscreen",fC);
fE.off("webkitendfullscreen",fD)
})
};
fp.prototype.supportsFullScreen=function fu(){if(typeof this.el_.webkitEnterFullScreen==="function"){var fC=bn.navigator&&bn.navigator.userAgent||"";
if(/Android/.test(fC)||!/Chrome|Mac OS X 10.5/.test(fC)){return true
}}return false
};
fp.prototype.enterFullScreen=function fv(){var fC=this.el_;
if(fC.paused&&fC.networkState<=fC.HAVE_METADATA){this.el_.play();
this.setTimeout(function(){fC.pause();
fC.webkitEnterFullScreen()
},0)
}else{fC.webkitEnterFullScreen()
}};
fp.prototype.exitFullScreen=function fh(){this.el_.webkitExitFullScreen()
};
fp.prototype.src=function fj(fC){if(fC===undefined){return this.el_.src
}this.setSrc(fC)
};
fp.prototype.reset=function fy(){fp.resetMediaElement(this.el_)
};
fp.prototype.currentSrc=function fA(){if(this.currentSource_){return this.currentSource_.src
}return this.el_.currentSrc
};
fp.prototype.setControls=function fr(fC){this.el_.controls=!!fC
};
fp.prototype.addTextTrack=function ff(fD,fC,fE){if(!this.featuresNativeTextTracks){return fn.prototype.addTextTrack.call(this,fD,fC,fE)
}return this.el_.addTextTrack(fD,fC,fE)
};
fp.prototype.createRemoteTextTrack=function fk(fC){if(!this.featuresNativeTextTracks){return fn.prototype.createRemoteTextTrack.call(this,fC)
}var fD=cl.createElement("track");
if(fC.kind){fD.kind=fC.kind
}if(fC.label){fD.label=fC.label
}if(fC.language||fC.srclang){fD.srclang=fC.language||fC.srclang
}if(fC["default"]){fD["default"]=fC["default"]
}if(fC.id){fD.id=fC.id
}if(fC.src){fD.src=fC.src
}return fD
};
fp.prototype.addRemoteTextTrack=function fw(fC,fD){var fE=fn.prototype.addRemoteTextTrack.call(this,fC,fD);
if(this.featuresNativeTextTracks){this.el().appendChild(fE)
}return fE
};
fp.prototype.removeRemoteTextTrack=function ft(fC){fn.prototype.removeRemoteTextTrack.call(this,fC);
if(this.featuresNativeTextTracks){var fD=this.$$("track");
var fE=fD.length;
while(fE--){if(fC===fD[fE]||fC===fD[fE].track){this.el().removeChild(fD[fE])
}}}};
fp.prototype.getVideoPlaybackQuality=function fx(){if(typeof this.el().getVideoPlaybackQuality==="function"){return this.el().getVideoPlaybackQuality()
}var fC={};
if(typeof this.el().webkitDroppedFrameCount!=="undefined"&&typeof this.el().webkitDecodedFrameCount!=="undefined"){fC.droppedVideoFrames=this.el().webkitDroppedFrameCount;
fC.totalVideoFrames=this.el().webkitDecodedFrameCount
}if(bn.performance&&typeof bn.performance.now==="function"){fC.creationTime=bn.performance.now()
}else{if(bn.performance&&bn.performance.timing&&typeof bn.performance.timing.navigationStart==="number"){fC.creationTime=bn.Date.now()-bn.performance.timing.navigationStart
}}return fC
};
return fp
}(dt);
if(ew()){ci.TEST_VID=cl.createElement("video");
var b6=cl.createElement("track");
b6.kind="captions";
b6.srclang="en";
b6.label="English";
ci.TEST_VID.appendChild(b6)
}ci.isSupported=function(){try{ci.TEST_VID.volume=0.5
}catch(fe){return false
}return !!(ci.TEST_VID&&ci.TEST_VID.canPlayType)
};
ci.canPlayType=function(fe){return ci.TEST_VID.canPlayType(fe)
};
ci.canPlaySource=function(ff,fe){return ci.canPlayType(ff.type)
};
ci.canControlVolume=function(){try{var fe=ci.TEST_VID.volume;
ci.TEST_VID.volume=fe/2+0.1;
return fe!==ci.TEST_VID.volume
}catch(ff){return false
}};
ci.canControlPlaybackRate=function(){if(cv&&cO&&be<58){return false
}try{var fe=ci.TEST_VID.playbackRate;
ci.TEST_VID.playbackRate=fe/2+0.1;
return fe!==ci.TEST_VID.playbackRate
}catch(ff){return false
}};
ci.supportsNativeTextTracks=function(){return S
};
ci.supportsNativeVideoTracks=function(){return !!(ci.TEST_VID&&ci.TEST_VID.videoTracks)
};
ci.supportsNativeAudioTracks=function(){return !!(ci.TEST_VID&&ci.TEST_VID.audioTracks)
};
ci.Events=["loadstart","suspend","abort","error","emptied","stalled","loadedmetadata","loadeddata","canplay","canplaythrough","playing","waiting","seeking","seeked","ended","durationchange","timeupdate","progress","play","pause","ratechange","resize","volumechange"];
ci.prototype.featuresVolumeControl=ci.canControlVolume();
ci.prototype.featuresPlaybackRate=ci.canControlPlaybackRate();
ci.prototype.movingMediaElementInDOM=!cG;
ci.prototype.featuresFullscreenResize=true;
ci.prototype.featuresProgressEvents=true;
ci.prototype.featuresTimeupdateEvents=true;
ci.prototype.featuresNativeTextTracks=ci.supportsNativeTextTracks();
ci.prototype.featuresNativeVideoTracks=ci.supportsNativeVideoTracks();
ci.prototype.featuresNativeAudioTracks=ci.supportsNativeAudioTracks();
var er=ci.TEST_VID&&ci.TEST_VID.constructor.prototype.canPlayType;
var n=/^application\/(?:x-|vnd\.apple\.)mpegurl/i;
var dK=/^video\/mp4/i;
ci.patchCanPlayType=function(){if(ei>=4&&!dZ){ci.TEST_VID.constructor.prototype.canPlayType=function(fe){if(fe&&n.test(fe)){return"maybe"
}return er.call(this,fe)
}
}else{if(ar){ci.TEST_VID.constructor.prototype.canPlayType=function(fe){if(fe&&dK.test(fe)){return"maybe"
}return er.call(this,fe)
}
}}};
ci.unpatchCanPlayType=function(){var fe=ci.TEST_VID.constructor.prototype.canPlayType;
ci.TEST_VID.constructor.prototype.canPlayType=er;
return fe
};
ci.patchCanPlayType();
ci.disposeMediaElement=function(fe){if(!fe){return
}if(fe.parentNode){fe.parentNode.removeChild(fe)
}while(fe.hasChildNodes()){fe.removeChild(fe.firstChild)
}fe.removeAttribute("src");
if(typeof fe.load==="function"){(function(){try{fe.load()
}catch(ff){}})()
}};
ci.resetMediaElement=function(fg){if(!fg){return
}var fe=fg.querySelectorAll("source");
var ff=fe.length;
while(ff--){fg.removeChild(fe[ff])
}fg.removeAttribute("src");
if(typeof fg.load==="function"){(function(){try{fg.load()
}catch(fh){}})()
}};
["muted","defaultMuted","autoplay","controls","loop","playsinline"].forEach(function(fe){ci.prototype[fe]=function(){return this.el_[fe]||this.el_.hasAttribute(fe)
}
});
["muted","defaultMuted","autoplay","loop","playsinline"].forEach(function(fe){ci.prototype["set"+e8(fe)]=function(ff){this.el_[fe]=ff;
if(ff){this.el_.setAttribute(fe,fe)
}else{this.el_.removeAttribute(fe)
}}
});
["paused","currentTime","buffered","volume","poster","preload","error","seeking","seekable","ended","playbackRate","defaultPlaybackRate","played","networkState","readyState","videoWidth","videoHeight"].forEach(function(fe){ci.prototype[fe]=function(){return this.el_[fe]
}
});
["volume","src","poster","preload","playbackRate","defaultPlaybackRate"].forEach(function(fe){ci.prototype["set"+e8(fe)]=function(ff){this.el_[fe]=ff
}
});
["pause","load","play"].forEach(function(fe){ci.prototype[fe]=function(){return this.el_[fe]()
}
});
dt.withSourceHandlers(ci);
ci.nativeSourceHandler={};
ci.nativeSourceHandler.canPlayType=function(fe){try{return ci.TEST_VID.canPlayType(fe)
}catch(ff){return""
}};
ci.nativeSourceHandler.canHandleSource=function(fg,fe){if(fg.type){return ci.nativeSourceHandler.canPlayType(fg.type)
}else{if(fg.src){var ff=bD(fg.src);
return ci.nativeSourceHandler.canPlayType("video/"+ff)
}}return""
};
ci.nativeSourceHandler.handleSource=function(fg,fe,ff){fe.setSrc(fg.src)
};
ci.nativeSourceHandler.dispose=function(){};
ci.registerSourceHandler(ci.nativeSourceHandler);
dt.registerTech("Html5",ci);
var cp=Z(["\n        Using the tech directly can be dangerous. I hope you know what you're doing.\n        See https://github.com/videojs/video.js/issues/2617 for more info.\n      "],["\n        Using the tech directly can be dangerous. I hope you know what you're doing.\n        See https://github.com/videojs/video.js/issues/2617 for more info.\n      "]);
var dv=["progress","abort","suspend","emptied","stalled","loadedmetadata","loadeddata","timeupdate","ratechange","resize","volumechange","texttrackchange"];
var w=function(gA){cY(gD,gA);
function gD(g0,gZ,gY){H(this,gD);
g0.id=g0.id||"vjs_video_"+cn();
gZ=fd(gD.getTagSettings(g0),gZ);
gZ.initChildren=false;
gZ.createEl=false;
gZ.reportTouchActivity=false;
if(!gZ.language){if(typeof g0.closest==="function"){var gR=g0.closest("[lang]");
if(gR){gZ.language=gR.getAttribute("lang")
}}else{var gV=g0;
while(gV&&gV.nodeType===1){if(dN(gV).hasOwnProperty("lang")){gZ.language=gV.getAttribute("lang");
break
}gV=gV.parentNode
}}}var gW=eM(this,gA.call(this,null,gZ,gY));
gW.isReady_=false;
if(!gW.options_||!gW.options_.techOrder||!gW.options_.techOrder.length){throw new Error("No techOrder specified. Did you overwrite videojs.options instead of just changing the properties you want to override?")
}gW.tag=g0;
gW.tagAttributes=g0&&dN(g0);
gW.language(gW.options_.language);
if(gZ.languages){var gU={};
Object.getOwnPropertyNames(gZ.languages).forEach(function(g1){gU[g1.toLowerCase()]=gZ.languages[g1]
});
gW.languages_=gU
}else{gW.languages_=gD.prototype.options_.languages
}gW.cache_={};
gW.poster_=gZ.poster||"";
gW.controls_=!!gZ.controls;
gW.cache_.lastVolume=1;
g0.controls=false;
gW.scrubbing_=false;
gW.el_=gW.createEl();
aZ(gW,{eventBusKey:"el_"});
var gX=cS(gW.options_);
if(gZ.plugins){var gT=gZ.plugins;
Object.keys(gT).forEach(function(g1){if(typeof this[g1]==="function"){this[g1](gT[g1])
}else{throw new Error('plugin "'+g1+'" does not exist')
}},gW)
}gW.options_.playerOptions=gX;
gW.middleware_=[];
gW.initChildren();
gW.isAudio(g0.nodeName.toLowerCase()==="audio");
if(gW.controls()){gW.addClass("vjs-controls-enabled")
}else{gW.addClass("vjs-controls-disabled")
}gW.el_.setAttribute("role","region");
if(gW.isAudio()){gW.el_.setAttribute("aria-label",gW.localize("Audio Player"))
}else{gW.el_.setAttribute("aria-label",gW.localize("Video Player"))
}if(gW.isAudio()){gW.addClass("vjs-audio")
}if(gW.flexNotSupported_()){gW.addClass("vjs-no-flex")
}if(!cG){gW.addClass("vjs-workinghover")
}gD.players[gW.id_]=gW;
var gS=ap.split(".")[0];
gW.addClass("vjs-v"+gS);
gW.userActive(true);
gW.reportUserActivity();
gW.listenForUserActivity_();
gW.on("fullscreenchange",gW.handleFullscreenChange_);
gW.on("stageclick",gW.handleStageClick_);
gW.changingSrc_=false;
return gW
}gD.prototype.dispose=function ft(){this.trigger("dispose");
this.off("dispose");
if(this.styleEl_&&this.styleEl_.parentNode){this.styleEl_.parentNode.removeChild(this.styleEl_)
}gD.players[this.id_]=null;
if(this.tag&&this.tag.player){this.tag.player=null
}if(this.el_&&this.el_.player){this.el_.player=null
}if(this.tech_){this.tech_.dispose()
}gA.prototype.dispose.call(this)
};
gD.prototype.createEl=function go(){var gZ=this.tag;
var gS=void 0;
var gU=this.playerElIngest_=gZ.parentNode&&gZ.parentNode.hasAttribute&&gZ.parentNode.hasAttribute("data-vjs-player");
if(gU){gS=this.el_=gZ.parentNode
}else{gS=this.el_=gA.prototype.createEl.call(this,"div")
}gZ.setAttribute("tabindex","-1");
gZ.removeAttribute("width");
gZ.removeAttribute("height");
var gX=dN(gZ);
Object.getOwnPropertyNames(gX).forEach(function(g0){if(g0==="class"){gS.className+=" "+gX[g0]
}else{gS.setAttribute(g0,gX[g0])
}});
gZ.playerId=gZ.id;
gZ.id+="_html5_api";
gZ.className="mb-video";
gZ.player=gS.player=this;
this.addClass("vjs-paused");
if(bn.VIDEOJS_NO_DYNAMIC_STYLE!==true){this.styleEl_=m("vjs-styles-dimensions");
var gR=e3(".vjs-styles-defaults");
var gV=e3("head");
gV.insertBefore(this.styleEl_,gR?gR.nextSibling:gV.firstChild)
}this.width(this.options_.width);
this.height(this.options_.height);
this.fluid(this.options_.fluid);
this.aspectRatio(this.options_.aspectRatio);
var gY=gZ.getElementsByTagName("a");
for(var gT=0;
gT<gY.length;
gT++){var gW=gY.item(gT);
eB(gW,"vjs-hidden");
gW.setAttribute("hidden","hidden")
}gZ.initNetworkState_=gZ.networkState;
if(gZ.parentNode&&!gU){gZ.parentNode.insertBefore(gS,gZ)
}K(gZ,gS);
this.children_.unshift(gZ);
this.el_.setAttribute("lang",this.language_);
this.el_=gS;
return gS
};
gD.prototype.width=function gB(gR){return this.dimension("width",gR)
};
gD.prototype.height=function fw(gR){return this.dimension("height",gR)
};
gD.prototype.dimension=function f9(gU,gT){var gS=gU+"_";
if(gT===undefined){return this[gS]||0
}if(gT===""){this[gS]=undefined
}else{var gR=parseFloat(gT);
if(isNaN(gR)){c6.error('Improper value "'+gT+'" supplied for for '+gU);
return
}this[gS]=gR
}this.updateStyleEl_()
};
gD.prototype.fluid=function fK(gR){if(gR===undefined){return !!this.fluid_
}this.fluid_=!!gR;
if(gR){this.addClass("vjs-fluid")
}else{this.removeClass("vjs-fluid")
}this.updateStyleEl_()
};
gD.prototype.aspectRatio=function gP(gR){if(gR===undefined){return this.aspectRatio_
}if(!/^\d+\:\d+$/.test(gR)){throw new Error("Improper value supplied for aspect ratio. The format should be width:height, for example 16:9.")
}this.aspectRatio_=gR;
this.fluid(true);
this.updateStyleEl_()
};
gD.prototype.updateStyleEl_=function fZ(){if(bn.VIDEOJS_NO_DYNAMIC_STYLE===true){var gT=typeof this.width_==="number"?this.width_:this.options_.width;
var gU=typeof this.height_==="number"?this.height_:this.options_.height;
var gX=this.tech_&&this.tech_.el();
if(gX){if(gT>=0){gX.width=gT
}if(gU>=0){gX.height=gU
}}return
}var gS=void 0;
var gZ=void 0;
var gY=void 0;
var gV=void 0;
if(this.aspectRatio_!==undefined&&this.aspectRatio_!=="auto"){gY=this.aspectRatio_
}else{if(this.videoWidth()>0){gY=this.videoWidth()+":"+this.videoHeight()
}else{gY="16:9"
}}var gR=gY.split(":");
var gW=gR[1]/gR[0];
if(this.width_!==undefined){gS=this.width_
}else{if(this.height_!==undefined){gS=this.height_/gW
}else{gS=this.videoWidth()||300
}}if(this.height_!==undefined){gZ=this.height_
}else{gZ=gS*gW
}if(/^[^a-zA-Z]/.test(this.id())){gV="dimensions-"+this.id()
}else{gV=this.id()+"-dimensions"
}this.addClass(gV);
p(this.styleEl_,"\n      ."+gV+" {\n        width: "+gS+"px;\n        height: "+gZ+"px;\n      }\n\n      ."+gV+".vjs-fluid {\n        padding-top: "+gW*100+"%;\n      }\n    ")
};
gD.prototype.loadTech_=function fk(gX,gV){var gS=this;
if(this.tech_){this.unloadTech_()
}var gR=e8(gX);
var gU=gX.charAt(0).toLowerCase()+gX.slice(1);
if(gR!=="Html5"&&this.tag){dt.getTech("Html5").disposeMediaElement(this.tag);
this.tag.player=null;
this.tag=null
}this.techName_=gR;
this.isReady_=false;
var gW={source:gV,nativeControlsForTouch:this.options_.nativeControlsForTouch,playerId:this.id(),techId:this.id()+"_"+gR+"_api",autoplay:this.options_.autoplay,playsinline:this.options_.playsinline,preload:this.options_.preload,loop:this.options_.loop,muted:this.options_.muted,poster:this.poster(),language:this.language(),playerElIngest:this.playerElIngest_||false,"vtt.js":this.options_["vtt.js"]};
bO.names.forEach(function(gY){var gZ=bO[gY];
gW[gZ.getterName]=gS[gZ.privateName]
});
fd(gW,this.options_[gR]);
fd(gW,this.options_[gU]);
fd(gW,this.options_[gX.toLowerCase()]);
if(this.tag){gW.tag=this.tag
}if(gV&&gV.src===this.cache_.src&&this.cache_.currentTime>0){gW.startTime=this.cache_.currentTime
}var gT=dt.getTech(gX);
if(!gT){throw new Error("No Tech named '"+gR+"' exists! '"+gR+"' should be registered using videojs.registerTech()'")
}this.tech_=new gT(gW);
this.tech_.ready(ca(this,this.handleTechReady_),true);
ea.jsonToTextTracks(this.textTracksJson_||[],this.tech_);
dv.forEach(function(gY){gS.on(gS.tech_,gY,gS["handleTech"+e8(gY)+"_"])
});
this.on(this.tech_,"loadstart",this.handleTechLoadStart_);
this.on(this.tech_,"waiting",this.handleTechWaiting_);
this.on(this.tech_,"canplay",this.handleTechCanPlay_);
this.on(this.tech_,"canplaythrough",this.handleTechCanPlayThrough_);
this.on(this.tech_,"playing",this.handleTechPlaying_);
this.on(this.tech_,"ended",this.handleTechEnded_);
this.on(this.tech_,"seeking",this.handleTechSeeking_);
this.on(this.tech_,"seeked",this.handleTechSeeked_);
this.on(this.tech_,"play",this.handleTechPlay_);
this.on(this.tech_,"firstplay",this.handleTechFirstPlay_);
this.on(this.tech_,"pause",this.handleTechPause_);
this.on(this.tech_,"durationchange",this.handleTechDurationChange_);
this.on(this.tech_,"fullscreenchange",this.handleTechFullscreenChange_);
this.on(this.tech_,"error",this.handleTechError_);
this.on(this.tech_,"loadedmetadata",this.updateStyleEl_);
this.on(this.tech_,"posterchange",this.handleTechPosterChange_);
this.on(this.tech_,"textdata",this.handleTechTextData_);
this.usingNativeControls(this.techGet_("controls"));
if(this.controls()&&!this.usingNativeControls()){this.addTechControlsListeners_()
}if(this.tech_.el().parentNode!==this.el()&&(gR!=="Html5"||!this.tag)){K(this.tech_.el(),this.el())
}if(this.tag){this.tag.player=null;
this.tag=null
}};
gD.prototype.unloadTech_=function fU(){var gR=this;
bO.names.forEach(function(gS){var gT=bO[gS];
gR[gT.privateName]=gR[gT.getterName]()
});
this.textTracksJson_=ea.textTracksToJson(this.tech_);
this.isReady_=false;
this.tech_.dispose();
this.tech_=false
};
gD.prototype.tech=function fA(gR){if(gR===undefined){c6.warn(eb(cp))
}return this.tech_
};
gD.prototype.addTechControlsListeners_=function fX(){this.removeTechControlsListeners_();
this.on(this.tech_,"mousedown",this.handleTechClick_);
this.on(this.tech_,"touchstart",this.handleTechTouchStart_);
this.on(this.tech_,"touchmove",this.handleTechTouchMove_);
this.on(this.tech_,"touchend",this.handleTechTouchEnd_);
this.on(this.tech_,"tap",this.handleTechTap_)
};
gD.prototype.removeTechControlsListeners_=function ga(){this.off(this.tech_,"tap",this.handleTechTap_);
this.off(this.tech_,"touchstart",this.handleTechTouchStart_);
this.off(this.tech_,"touchmove",this.handleTechTouchMove_);
this.off(this.tech_,"touchend",this.handleTechTouchEnd_);
this.off(this.tech_,"mousedown",this.handleTechClick_)
};
gD.prototype.handleTechReady_=function fC(){this.triggerReady();
if(this.cache_.volume){this.techCall_("setVolume",this.cache_.volume)
}this.handleTechPosterChange_();
this.handleTechDurationChange_();
if((this.src()||this.currentSrc())&&this.tag&&this.options_.autoplay&&this.paused()){try{delete this.tag.poster
}catch(gR){c6("deleting tag.poster throws in some browsers",gR)
}this.play()
}};
gD.prototype.handleTechLoadStart_=function gy(){this.removeClass("vjs-ended");
this.removeClass("vjs-seeking");
this.error(null);
if(!this.paused()){this.trigger("loadstart");
this.trigger("firstplay")
}else{this.hasStarted(false);
this.trigger("loadstart")
}};
gD.prototype.hasStarted=function f0(gR){if(gR!==undefined){if(this.hasStarted_!==gR){this.hasStarted_=gR;
if(gR){this.addClass("vjs-has-started");
this.trigger("firstplay")
}else{this.removeClass("vjs-has-started")
}}return
}return !!this.hasStarted_
};
gD.prototype.handleTechPlay_=function fe(){this.removeClass("vjs-ended");
this.removeClass("vjs-paused");
this.addClass("vjs-playing");
this.hasStarted(true);
this.trigger("play")
};
gD.prototype.handleTechWaiting_=function fu(){var gR=this;
this.addClass("vjs-waiting");
this.trigger("waiting");
this.one("timeupdate",function(){return gR.removeClass("vjs-waiting")
})
};
gD.prototype.handleTechCanPlay_=function gJ(){this.removeClass("vjs-waiting");
this.trigger("canplay")
};
gD.prototype.handleTechCanPlayThrough_=function f4(){this.removeClass("vjs-waiting");
this.trigger("canplaythrough")
};
gD.prototype.handleTechPlaying_=function gs(){this.removeClass("vjs-waiting");
this.trigger("playing")
};
gD.prototype.handleTechSeeking_=function ge(){this.addClass("vjs-seeking");
this.trigger("seeking")
};
gD.prototype.handleTechSeeked_=function fB(){this.removeClass("vjs-seeking");
this.trigger("seeked")
};
gD.prototype.handleTechFirstPlay_=function gO(){if(this.options_.starttime){c6.warn("Passing the `starttime` option to the player will be deprecated in 6.0");
this.currentTime(this.options_.starttime)
}this.addClass("vjs-has-started");
this.trigger("firstplay")
};
gD.prototype.handleTechPause_=function fg(){this.removeClass("vjs-playing");
this.addClass("vjs-paused");
this.trigger("pause")
};
gD.prototype.handleTechEnded_=function gQ(){this.addClass("vjs-ended");
if(this.options_.loop){this.currentTime(0);
this.play()
}else{if(!this.paused()){this.pause()
}}this.trigger("ended")
};
gD.prototype.handleTechDurationChange_=function gL(){this.duration(this.techGet_("duration"))
};
gD.prototype.handleTechClick_=function fp(gR){if(gR.button!==0){return
}if(this.controls()){if(this.paused()){this.play()
}else{this.pause()
}}};
gD.prototype.handleTechTap_=function fV(){this.userActive(!this.userActive())
};
gD.prototype.handleTechTouchStart_=function gm(){this.userWasActive=this.userActive()
};
gD.prototype.handleTechTouchMove_=function gC(){if(this.userWasActive){this.reportUserActivity()
}};
gD.prototype.handleTechTouchEnd_=function fy(gR){gR.preventDefault()
};
gD.prototype.handleFullscreenChange_=function fI(){if(this.isFullscreen()){this.addClass("vjs-fullscreen")
}else{this.removeClass("vjs-fullscreen")
}};
gD.prototype.handleStageClick_=function fM(){this.reportUserActivity()
};
gD.prototype.handleTechFullscreenChange_=function fl(gR,gS){if(gS){this.isFullscreen(gS.isFullscreen)
}this.trigger("fullscreenchange")
};
gD.prototype.handleTechError_=function fh(){var gR=this.tech_.error();
this.error(gR)
};
gD.prototype.handleTechTextData_=function fS(){var gR=null;
if(arguments.length>1){gR=arguments[1]
}this.trigger("textdata",gR)
};
gD.prototype.getCache=function gh(){return this.cache_
};
gD.prototype.techCall_=function gc(gS,gR){this.ready(function(){if(gS in bx){return a2(this.middleware_,this.tech_,gS,gR)
}try{if(this.tech_){this.tech_[gS](gR)
}}catch(gT){c6(gT);
throw gT
}},true)
};
gD.prototype.techGet_=function fE(gS){if(this.tech_&&this.tech_.isReady_){if(gS in f){return G(this.middleware_,this.tech_,gS)
}try{return this.tech_[gS]()
}catch(gR){if(this.tech_[gS]===undefined){c6("Video.js: "+gS+" method not defined for "+this.techName_+" playback technology.",gR)
}else{if(gR.name==="TypeError"){c6("Video.js: "+gS+" unavailable on "+this.techName_+" playback technology element.",gR);
this.tech_.isReady_=false
}else{c6(gR)
}}throw gR
}}return
};
gD.prototype.play=function fv(){if(this.changingSrc_){this.ready(function(){var gR=this.techGet_("play");
if(gR!==undefined&&typeof gR.then==="function"){gR.then(null,function(gS){})
}})
}else{if(this.isReady_&&(this.src()||this.currentSrc())){return this.techGet_("play")
}else{this.ready(function(){this.tech_.one("loadstart",function(){var gR=this.play();
if(gR!==undefined&&typeof gR.then==="function"){gR.then(null,function(gS){})
}})
})
}}};
gD.prototype.pause=function f8(){this.techCall_("pause")
};
gD.prototype.paused=function gu(){return this.techGet_("paused")===false?false:true
};
gD.prototype.played=function gK(){return this.techGet_("played")||y(0,0)
};
gD.prototype.scrubbing=function fN(gR){if(typeof gR==="undefined"){return this.scrubbing_
}this.scrubbing_=!!gR;
if(gR){this.addClass("vjs-scrubbing")
}else{this.removeClass("vjs-scrubbing")
}};
gD.prototype.currentTime=function f1(gR){if(typeof gR!=="undefined"){this.techCall_("setCurrentTime",gR);
return
}this.cache_.currentTime=this.techGet_("currentTime")||0;
return this.cache_.currentTime
};
gD.prototype.duration=function fQ(gR){if(gR===undefined){return this.cache_.duration!==undefined?this.cache_.duration:NaN
}gR=parseFloat(gR);
if(gR<0){gR=Infinity
}if(gR!==this.cache_.duration){this.cache_.duration=gR;
if(gR===Infinity){this.addClass("vjs-live")
}else{this.removeClass("vjs-live")
}this.trigger("durationchange")
}};
gD.prototype.remainingTime=function gE(){return this.duration()-this.currentTime()
};
gD.prototype.buffered=function gp(){var gR=this.techGet_("buffered");
if(!gR||!gR.length){gR=y(0,0)
}return gR
};
gD.prototype.bufferedPercent=function gr(){return bV(this.buffered(),this.duration())
};
gD.prototype.bufferedEnd=function gz(){var gS=this.buffered();
var gT=this.duration();
var gR=gS.end(gS.length-1);
if(gR>gT){gR=gT
}return gR
};
gD.prototype.volume=function fT(gR){var gS=void 0;
if(gR!==undefined){gS=Math.max(0,Math.min(1,parseFloat(gR)));
this.cache_.volume=gS;
this.techCall_("setVolume",gS);
if(gS>0){this.lastVolume_(gS)
}return
}gS=parseFloat(this.techGet_("volume"));
return isNaN(gS)?1:gS
};
gD.prototype.muted=function gM(gR){if(gR!==undefined){this.techCall_("setMuted",gR);
return
}return this.techGet_("muted")||false
};
gD.prototype.defaultMuted=function gn(gR){if(gR!==undefined){return this.techCall_("setDefaultMuted",gR)
}return this.techGet_("defaultMuted")||false
};
gD.prototype.lastVolume_=function fG(gR){if(gR!==undefined&&gR!==0){this.cache_.lastVolume=gR;
return
}return this.cache_.lastVolume
};
gD.prototype.supportsFullScreen=function gq(){return this.techGet_("supportsFullScreen")||false
};
gD.prototype.isFullscreen=function gb(gR){if(gR!==undefined){this.isFullscreen_=!!gR;
return
}return !!this.isFullscreen_
};
gD.prototype.requestFullscreen=function gd(){var gR=et;
this.isFullscreen(true);
if(gR.requestFullscreen){bF(cl,gR.fullscreenchange,ca(this,function gS(gT){this.isFullscreen(cl[gR.fullscreenElement]);
if(this.isFullscreen()===false){dn(cl,gR.fullscreenchange,gS)
}this.trigger("fullscreenchange")
}));
this.el_[gR.requestFullscreen]()
}else{if(this.tech_.supportsFullScreen()){this.techCall_("enterFullScreen")
}else{this.enterFullWindow();
this.trigger("fullscreenchange")
}}};
gD.prototype.exitFullscreen=function gt(){var gR=et;
this.isFullscreen(false);
if(gR.requestFullscreen){cl[gR.exitFullscreen]()
}else{if(this.tech_.supportsFullScreen()){this.techCall_("exitFullScreen")
}else{this.exitFullWindow();
this.trigger("fullscreenchange")
}}};
gD.prototype.enterFullWindow=function fs(){this.isFullWindow=true;
this.docOrigOverflow=cl.documentElement.style.overflow;
bF(cl,"keydown",ca(this,this.fullWindowOnEscKey));
cl.documentElement.style.overflow="hidden";
eB(cl.body,"vjs-full-window");
this.trigger("enterFullWindow")
};
gD.prototype.fullWindowOnEscKey=function fR(gR){if(gR.keyCode===27){if(this.isFullscreen()===true){this.exitFullscreen()
}else{this.exitFullWindow()
}}};
gD.prototype.exitFullWindow=function f7(){this.isFullWindow=false;
dn(cl,"keydown",this.fullWindowOnEscKey);
cl.documentElement.style.overflow=this.docOrigOverflow;
eP(cl.body,"vjs-full-window");
this.trigger("exitFullWindow")
};
gD.prototype.canPlayType=function fi(gU){var gV=void 0;
for(var gT=0,gS=this.options_.techOrder;
gT<gS.length;
gT++){var gW=gS[gT];
var gR=dt.getTech(gW);
if(!gR){gR=eN.getComponent(gW)
}if(!gR){c6.error('The "'+gW+'" tech is undefined. Skipped browser support check for that tech.');
continue
}if(gR.isSupported()){gV=gR.canPlayType(gU);
if(gV){return gV
}}}return""
};
gD.prototype.selectSource=function fH(gU){var gT=this;
var gR=this.options_.techOrder.map(function(gY){return[gY,dt.getTech(gY)]
}).filter(function(gZ){var g0=gZ[0],gY=gZ[1];
if(gY){return gY.isSupported()
}c6.error('The "'+g0+'" tech is undefined. Skipped browser support check for that tech.');
return false
});
var gX=function gX(gZ,g0,gY){var g1=void 0;
gZ.some(function(g2){return g0.some(function(g3){g1=gY(g2,g3);
if(g1){return true
}})
});
return g1
};
var gS=void 0;
var gW=function gW(gY){return function(g0,gZ){return gY(gZ,g0)
}
};
var gV=function gV(g1,gZ){var g0=g1[0],gY=g1[1];
if(gY.canPlaySource(gZ,gT.options_[g0.toLowerCase()])){return{source:gZ,tech:g0}
}};
if(this.options_.sourceOrder){gS=gX(gU,gR,gW(gV))
}else{gS=gX(gR,gU,gV)
}return gS||false
};
gD.prototype.src=function fL(gT){var gR=this;
if(typeof gT==="undefined"){return this.cache_.src
}var gS=aL(gT);
if(!gS.length){this.setTimeout(function(){this.error({code:4,message:this.localize(this.options_.notSupportedMessage)})
},0);
return
}this.cache_.sources=gS;
this.changingSrc_=true;
this.cache_.source=gS[0];
dA(this,gS[0],function(gU,gV){gR.middleware_=gV;
var gW=gR.src_(gU);
if(gW){if(gS.length>1){return gR.src(gS.slice(1))
}gR.setTimeout(function(){this.error({code:4,message:this.localize(this.options_.notSupportedMessage)})
},0);
gR.triggerReady();
return
}gR.changingSrc_=false;
gR.cache_.src=gU.src;
aH(gV,gR.tech_)
})
};
gD.prototype.src_=function gF(gS){var gR=this.selectSource([gS]);
if(!gR){return true
}if(!dl(gR.tech,this.techName_)){this.changingSrc_=true;
this.loadTech_(gR.tech,gR.source);
return false
}this.ready(function(){if(this.tech_.constructor.prototype.hasOwnProperty("setSource")){this.techCall_("setSource",gS)
}else{this.techCall_("src",gS.src)
}if(this.options_.preload==="auto"){this.load()
}if(this.options_.autoplay){this.play()
}},true);
return false
};
gD.prototype.load=function fn(){this.techCall_("load")
};
gD.prototype.reset=function f5(){this.loadTech_(this.options_.techOrder[0],null);
this.techCall_("reset")
};
gD.prototype.currentSources=function f6(){var gS=this.currentSource();
var gR=[];
if(Object.keys(gS).length!==0){gR.push(gS)
}return this.cache_.sources||gR
};
gD.prototype.currentSource=function fm(){return this.cache_.source||{}
};
gD.prototype.currentSrc=function fY(){return this.currentSource()&&this.currentSource().src||""
};
gD.prototype.currentType=function f3(){return this.currentSource()&&this.currentSource().type||""
};
gD.prototype.preload=function gG(gR){if(gR!==undefined){this.techCall_("setPreload",gR);
this.options_.preload=gR;
return
}return this.techGet_("preload")
};
gD.prototype.autoplay=function gw(gR){if(gR!==undefined){this.techCall_("setAutoplay",gR);
this.options_.autoplay=gR;
return
}return this.techGet_("autoplay",gR)
};
gD.prototype.playsinline=function gi(gR){if(gR!==undefined){this.techCall_("setPlaysinline",gR);
this.options_.playsinline=gR;
return this
}return this.techGet_("playsinline")
};
gD.prototype.loop=function gv(gR){if(gR!==undefined){this.techCall_("setLoop",gR);
this.options_.loop=gR;
return
}return this.techGet_("loop")
};
gD.prototype.poster=function gI(gR){if(gR===undefined){return this.poster_
}if(!gR){gR=""
}this.poster_=gR;
this.techCall_("setPoster",gR);
this.trigger("posterchange")
};
gD.prototype.handleTechPosterChange_=function fW(){if(!this.poster_&&this.tech_&&this.tech_.poster){this.poster_=this.tech_.poster()||"";
this.trigger("posterchange")
}};
gD.prototype.controls=function fo(gR){if(gR!==undefined){gR=!!gR;
if(this.controls_!==gR){this.controls_=gR;
if(this.usingNativeControls()){this.techCall_("setControls",gR)
}if(gR){this.removeClass("vjs-controls-disabled");
this.addClass("vjs-controls-enabled");
this.trigger("controlsenabled");
if(!this.usingNativeControls()){this.addTechControlsListeners_()
}}else{this.removeClass("vjs-controls-enabled");
this.addClass("vjs-controls-disabled");
this.trigger("controlsdisabled");
if(!this.usingNativeControls()){this.removeTechControlsListeners_()
}}}return
}return !!this.controls_
};
gD.prototype.usingNativeControls=function gl(gR){if(gR!==undefined){gR=!!gR;
if(this.usingNativeControls_!==gR){this.usingNativeControls_=gR;
if(gR){this.addClass("vjs-using-native-controls");
this.trigger("usingnativecontrols")
}else{this.removeClass("vjs-using-native-controls");
this.trigger("usingcustomcontrols")
}}return
}return !!this.usingNativeControls_
};
gD.prototype.error=function gx(gR){if(gR===undefined){return this.error_||null
}if(gR===null){this.error_=gR;
this.removeClass("vjs-error");
if(this.errorDisplay){this.errorDisplay.close()
}return
}this.error_=new a5(gR);
this.addClass("vjs-error");
c6.error("(CODE:"+this.error_.code+" "+a5.errorTypes[this.error_.code]+")",this.error_.message,this.error_);
this.trigger("error");
return
};
gD.prototype.reportUserActivity=function fJ(gR){this.userActivity_=true
};
gD.prototype.userActive=function fr(gR){if(gR!==undefined){gR=!!gR;
if(gR!==this.userActive_){this.userActive_=gR;
if(gR){this.userActivity_=true;
this.removeClass("vjs-user-inactive");
this.addClass("vjs-user-active");
this.trigger("useractive")
}else{this.userActivity_=false;
if(this.tech_){this.tech_.one("mousemove",function(gS){gS.stopPropagation();
gS.preventDefault()
})
}this.removeClass("vjs-user-active");
this.addClass("vjs-user-inactive");
this.trigger("userinactive")
}}return
}return this.userActive_
};
gD.prototype.listenForUserActivity_=function gg(){var gY=void 0;
var gT=void 0;
var gR=void 0;
var gX=ca(this,this.reportUserActivity);
var gW=function gW(gZ){if(gZ.screenX!==gT||gZ.screenY!==gR){gT=gZ.screenX;
gR=gZ.screenY;
gX()
}};
var gV=function gV(){gX();
this.clearInterval(gY);
gY=this.setInterval(gX,250)
};
var gS=function gS(gZ){gX();
this.clearInterval(gY)
};
this.on("mousedown",gV);
this.on("mousemove",gW);
this.on("mouseup",gS);
this.on("keydown",gX);
this.on("keyup",gX);
var gU=void 0;
this.setInterval(function(){if(this.userActivity_){this.userActivity_=false;
this.userActive(true);
this.clearTimeout(gU);
var gZ=this.options_.inactivityTimeout;
if(gZ>0){gU=this.setTimeout(function(){if(!this.userActivity_){this.userActive(false)
}},gZ)
}}},250)
};
gD.prototype.playbackRate=function gH(gR){if(gR!==undefined){this.techCall_("setPlaybackRate",gR);
return
}if(this.tech_&&this.tech_.featuresPlaybackRate){return this.techGet_("playbackRate")
}return 1
};
gD.prototype.defaultPlaybackRate=function fP(gR){if(gR!==undefined){return this.techCall_("setDefaultPlaybackRate",gR)
}if(this.tech_&&this.tech_.featuresPlaybackRate){return this.techGet_("defaultPlaybackRate")
}return 1
};
gD.prototype.isAudio=function fF(gR){if(gR!==undefined){this.isAudio_=!!gR;
return
}return !!this.isAudio_
};
gD.prototype.addTextTrack=function fx(gS,gR,gT){if(this.tech_){return this.tech_.addTextTrack(gS,gR,gT)
}};
gD.prototype.addRemoteTextTrack=function fq(gR,gS){if(this.tech_){return this.tech_.addRemoteTextTrack(gR,gS)
}};
gD.prototype.removeRemoteTextTrack=function gk(){var gT=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{},gS=gT.track,gR=gS===undefined?arguments[0]:gS;
if(this.tech_){return this.tech_.removeRemoteTextTrack(gR)
}};
gD.prototype.getVideoPlaybackQuality=function fz(){return this.techGet_("getVideoPlaybackQuality")
};
gD.prototype.videoWidth=function fO(){return this.tech_&&this.tech_.videoWidth&&this.tech_.videoWidth()||0
};
gD.prototype.videoHeight=function f2(){return this.tech_&&this.tech_.videoHeight&&this.tech_.videoHeight()||0
};
gD.prototype.language=function gf(gR){if(gR===undefined){return this.language_
}this.language_=String(gR).toLowerCase()
};
gD.prototype.languages=function gj(){return cS(gD.prototype.options_.languages,this.languages_)
};
gD.prototype.toJSON=function fD(){var gT=cS(this.options_);
var gS=gT.tracks;
gT.tracks=[];
for(var gU=0;
gU<gS.length;
gU++){var gR=gS[gU];
gR=cS(gR);
gR.player=undefined;
gT.tracks[gU]=gR
}return gT
};
gD.prototype.createModal=function ff(gU,gS){var gR=this;
gS=gS||{};
gS.content=gU||"";
var gT=new cA(this,gS);
this.addChild(gT);
gT.on("dispose",function(){gR.removeChild(gT)
});
gT.open();
return gT
};
gD.getTagSettings=function gN(g2){var gX={sources:[],tracks:[]};
var gZ=dN(g2);
var gY=gZ["data-setup"];
if(eL(g2,"vjs-fluid")){gZ.fluid=true
}if(gY!==null){var g1=dX(gY||"{}"),gT=g1[0],gW=g1[1];
if(gT){c6.error(gT)
}fd(gZ,gW)
}fd(gX,gZ);
if(g2.hasChildNodes()){var gS=g2.childNodes;
for(var gV=0,gU=gS.length;
gV<gU;
gV++){var gR=gS[gV];
var g0=gR.nodeName.toLowerCase();
if(g0==="source"){gX.sources.push(dN(gR))
}else{if(g0==="track"){gX.tracks.push(dN(gR))
}}}}return gX
};
gD.prototype.flexNotSupported_=function fj(){var gR=cl.createElement("i");
return !("flexBasis" in gR.style||"webkitFlexBasis" in gR.style||"mozFlexBasis" in gR.style||"msFlexBasis" in gR.style||"msFlexOrder" in gR.style)
};
return gD
}(eN);
bO.names.forEach(function(fe){var ff=bO[fe];
w.prototype[ff.getterName]=function(){if(this.tech_){return this.tech_[ff.getterName]()
}this[ff.privateName]=this[ff.privateName]||new ff.ListClass();
return this[ff.privateName]
}
});
w.players={};
var z=bn.navigator;
w.prototype.options_={techOrder:dt.defaultTechOrder_,html5:{},flash:{},inactivityTimeout:2000,playbackRates:[],children:["mediaLoader","posterImage","textTrackDisplay","loadingSpinner","bigPlayButton","controlBar","errorDisplay","textTrackSettings"],language:z&&(z.languages&&z.languages[0]||z.userLanguage||z.language)||"en",languages:{},notSupportedMessage:"No compatible source was found for this media."};
["ended","seeking","seekable","networkState","readyState"].forEach(function(fe){w.prototype[fe]=function(){return this.techGet_(fe)
}
});
dv.forEach(function(fe){w.prototype["handleTech"+e8(fe)+"_"]=function(){return this.trigger(fe)
}
});
eN.registerComponent("Player",w);
var e1="plugin";
var b4="activePlugins_";
var aS={};
var bg=function bg(fe){return aS.hasOwnProperty(fe)
};
var aI=function aI(fe){return bg(fe)?aS[fe]:undefined
};
var aN=function aN(ff,fe){ff[b4]=ff[b4]||{};
ff[b4][fe]=true
};
var bX=function bX(ff,fh,fg){var fe=(fg?"before":"")+"pluginsetup";
ff.trigger(fe,fh);
ff.trigger(fe+":"+fh.name,fh)
};
var A=function A(ff,fg){var fe=function fe(){bX(this,{name:ff,plugin:fg,instance:null},true);
var fh=fg.apply(this,arguments);
aN(this,ff);
bX(this,{name:ff,plugin:fg,instance:fh});
return fh
};
Object.keys(fg).forEach(function(fh){fe[fh]=fg[fh]
});
return fe
};
var cM=function cM(ff,fe){fe.prototype.name=ff;
return function(){bX(this,{name:ff,plugin:fe,instance:null},true);
for(var fh=arguments.length,fi=Array(fh),fj=0;
fj<fh;
fj++){fi[fj]=arguments[fj]
}var fg=new (Function.prototype.bind.apply(fe,[null].concat([this].concat(fi))))();
this[ff]=function(){return fg
};
bX(this,fg.getEventHash());
return fg
}
};
var de=function(){function fm(fo){H(this,fm);
if(this.constructor===fm){throw new Error("Plugin must be sub-classed; not directly instantiated.")
}this.player=fo;
aZ(this);
delete this.trigger;
bW(this,this.constructor.defaultState);
aN(fo,this.name);
this.dispose=ca(this,this.dispose);
fo.on("dispose",this.dispose)
}fm.prototype.getEventHash=function fk(){var fo=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};
fo.name=this.name;
fo.plugin=this.constructor;
fo.instance=this;
return fo
};
fm.prototype.trigger=function fe(fo){var fp=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};
return b2(this.eventBusEl_,fo,this.getEventHash(fp))
};
fm.prototype.handleStateChanged=function fl(fo){};
fm.prototype.dispose=function fn(){var fo=this.name,fp=this.player;
this.trigger("dispose");
this.off();
fp.off("dispose",this.dispose);
fp[b4][fo]=false;
this.player=this.state=null;
fp[fo]=cM(fo,aS[fo])
};
fm.isBasic=function ff(fo){var fp=typeof fo==="string"?aI(fo):fo;
return typeof fp==="function"&&!fm.prototype.isPrototypeOf(fp.prototype)
};
fm.registerPlugin=function fj(fo,fp){if(typeof fo!=="string"){throw new Error('Illegal plugin name, "'+fo+'", must be a string, was '+(typeof fo==="undefined"?"undefined":bK(fo))+".")
}if(bg(fo)){c6.warn('A plugin named "'+fo+'" already exists. You may want to avoid re-registering plugins!')
}else{if(w.prototype.hasOwnProperty(fo)){throw new Error('Illegal plugin name, "'+fo+'", cannot share a name with an existing player method!')
}}if(typeof fp!=="function"){throw new Error('Illegal plugin for "'+fo+'", must be a function, was '+(typeof fp==="undefined"?"undefined":bK(fp))+".")
}aS[fo]=fp;
if(fo!==e1){if(fm.isBasic(fp)){w.prototype[fo]=A(fo,fp)
}else{w.prototype[fo]=cM(fo,fp)
}}return fp
};
fm.deregisterPlugin=function fg(fo){if(fo===e1){throw new Error("Cannot de-register base plugin.")
}if(bg(fo)){delete aS[fo];
delete w.prototype[fo]
}};
fm.getPlugins=function fh(){var fp=arguments.length>0&&arguments[0]!==undefined?arguments[0]:Object.keys(aS);
var fo=void 0;
fp.forEach(function(fq){var fr=aI(fq);
if(fr){fo=fo||{};
fo[fq]=fr
}});
return fo
};
fm.getPluginVersion=function fi(fo){var fp=aI(fo);
return fp&&fp.VERSION||""
};
return fm
}();
de.getPlugin=aI;
de.BASE_PLUGIN_NAME=e1;
de.registerPlugin(e1,de);
w.prototype.usingPlugin=function(fe){return !!this[b4]&&this[b4][fe]===true
};
w.prototype.hasPlugin=function(fe){return !!bg(fe)
};
var ae=function ae(ff,fe){if(typeof fe!=="function"&&fe!==null){throw new TypeError("Super expression must either be null or a function, not "+(typeof fe==="undefined"?"undefined":bK(fe)))
}ff.prototype=Object.create(fe&&fe.prototype,{constructor:{value:ff,enumerable:false,writable:true,configurable:true}});
if(fe){ff.super_=fe
}};
var bS=function bS(fh){var ff=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};
var fi=function fi(){fh.apply(this,arguments)
};
var fe={};
if((typeof ff==="undefined"?"undefined":bK(ff))==="object"){if(ff.constructor!==Object.prototype.constructor){fi=ff.constructor
}fe=ff
}else{if(typeof ff==="function"){fi=ff
}}ae(fi,fh);
for(var fg in fe){if(fe.hasOwnProperty(fg)){fi.prototype[fg]=fe[fg]
}}return fi
};
if(typeof HTMLVideoElement==="undefined"&&ew()){cl.createElement("video");
cl.createElement("audio");
cl.createElement("track")
}function a(fk,fg,fj){var fe=void 0;
if(typeof fk==="string"){var fi=a.getPlayers();
if(fk.indexOf("#")===0){fk=fk.slice(1)
}if(fi[fk]){if(fg){c6.warn('Player "'+fk+'" is already initialised. Options will not be applied.')
}if(fj){fi[fk].ready(fj)
}return fi[fk]
}fe=e3("#"+fk)
}else{fe=fk
}if(!fe||!fe.nodeName){throw new TypeError("The element or ID supplied is not valid. (videojs)")
}if(fe.player||w.players[fe.playerId]){return fe.player||w.players[fe.playerId]
}fg=fg||{};
a.hooks("beforesetup").forEach(function(fl){var fm=fl(fe,cS(fg));
if(!t(fm)||Array.isArray(fm)){c6.error("please return an object in beforesetup hooks");
return
}fg=cS(fg,fm)
});
var ff=eN.getComponent("Player");
var fh=new ff(fe,fg,fj);
a.hooks("setup").forEach(function(fl){return fl(fh)
});
return fh
}a.hooks_={};
a.hooks=function(ff,fe){a.hooks_[ff]=a.hooks_[ff]||[];
if(fe){a.hooks_[ff]=a.hooks_[ff].concat(fe)
}return a.hooks_[ff]
};
a.hook=function(ff,fe){a.hooks(ff,fe)
};
a.removeHook=function(fg,ff){var fe=a.hooks(fg).indexOf(ff);
if(fe<=-1){return false
}a.hooks_[fg]=a.hooks_[fg].slice();
a.hooks_[fg].splice(fe,1);
return true
};
if(bn.VIDEOJS_NO_DYNAMIC_STYLE!==true&&ew()){var bU=e3(".vjs-styles-defaults");
if(!bU){bU=m("vjs-styles-defaults");
var e0=e3("head");
if(e0){e0.insertBefore(bU,e0.firstChild)
}p(bU,"\n      .video-js {\n        width: 100%;\n        height: 100%\n      }\n\n      .vjs-fluid {\n        padding-top: 56.25%\n      }\n    ")
}}bC(1,a);
a.VERSION=ap;
a.options=w.prototype.options_;
a.getPlayers=function(){return w.players
};
a.players=w.players;
a.getComponent=eN.getComponent;
a.registerComponent=function(ff,fe){if(dt.isTech(fe)){c6.warn("The "+ff+" tech was registered as a component. It should instead be registered using videojs.registerTech(name, tech)")
}eN.registerComponent.call(eN,ff,fe)
};
a.getTech=dt.getTech;
a.registerTech=dt.registerTech;
a.use=c7;
a.browser=dH;
a.TOUCH_ENABLED=eo;
a.extend=bS;
a.mergeOptions=cS;
a.bind=ca;
a.registerPlugin=de.registerPlugin;
a.plugin=function(fe,ff){c6.warn("videojs.plugin() is deprecated; use videojs.registerPlugin() instead");
return de.registerPlugin(fe,ff)
};
a.getPlugins=de.getPlugins;
a.getPlugin=de.getPlugin;
a.getPluginVersion=de.getPluginVersion;
a.addLanguage=function(ff,fg){var fe;
ff=(""+ff).toLowerCase();
a.options.languages=cS(a.options.languages,(fe={},fe[ff]=fg,fe));
return a.options.languages[ff]
};
a.log=c6;
a.createTimeRange=a.createTimeRanges=y;
a.formatTime=au;
a.parseUrl=e9;
a.isCrossOrigin=dJ;
a.EventTarget=bl;
a.on=bF;
a.one=bt;
a.off=dn;
a.trigger=b2;
a.xhr=dI;
a.TextTrack=P;
a.AudioTrack=ay;
a.VideoTrack=ag;
["isEl","isTextNode","createEl","hasClass","addClass","removeClass","toggleClass","setAttributes","getAttributes","emptyEl","appendContent","insertContent"].forEach(function(fe){a[fe]=function(){c6.warn("videojs."+fe+"() is deprecated; use videojs.dom."+fe+"() instead");
return aw[fe].apply(null,arguments)
}
});
a.computedStyle=b9;
a.dom=aw;
a.url=dT;
return a
})));
"use strict";
(function(c,b,a){a.initialise=function(e){var d=b(e),f=d.find(".mb-component[data-component-name]");
b.each(f,function(h,j){var g=b(j);
if(!g.closest(".mb-comp-defer").length){a.attempt(g.data("component-name")+".init",c.comp)(j,document,b)
}})
}
})(mb,mb.$,mb.util);
"use strict";
(function(b,a){a.attempt=function(c,f){var e;
if(typeof c!=="string"){return
}b.console=b.console||{error:function d(){}};
e=c.split(".").reduce(function(h,g){if(h&&h[g]){return h[g]
}},f||b);
return function(){try{if(e){e.apply(this,arguments)
}}catch(g){b.console.error(c,g.stack||g.toString())
}}
}
})(window,mb.util);
"use strict";
mb.util.matchmedia=function(d){var a="(max-width: 959px)",e="(max-width: 959px)",f="(min-width: 960px)";
if(d.forceWide){return{narrow:{matches:true,media:a,addListener:function b(){},removeListener:function c(){}},tablet:{matches:true,media:e,addListener:function b(){},removeListener:function c(){}},wide:{matches:true,media:f,addListener:function b(){},removeListener:function c(){}}}
}else{return{narrow:window.matchMedia(a),tablet:window.matchMedia(e),wide:window.matchMedia(f)}
}}(mb.settings||{});
"use strict";
(function(a){a.customEvents=function(){var b=typeof window.ontouchstart!=="undefined",c={INTERACTION:"click",EVENT_END:b?"touchend":"mouseup",EVENT_START:b?"touchstart":"mousedown",EVENT_LEAVE:b?"touchleave":"mouseleave",EVENT_MOVE:b?"touchmove":"mousemove",resize:"mb:resize"};
window.mbEvents=c;
return c
}()
})(mb.util);
"use strict";
(function(){mb.util.lightbox=function(g,b){var w=g("html"),v=g("body"),f={overlay:".mb-lightbox-overlay",wrapper:".mb-lightbox-wrapper",content:".mb-lightbox-content",close:".mb-lightbox-close",viewport:"#viewport",loader:".mb-loader-wrapper"},o={lightboxOpen:"mb-lightbox-open",fullscreen:"mb-lightbox-fullscreen",large:"mb-lightbox-large",hidden:"mb-hidden"},c=b.customEvents.INTERACTION;
var j=void 0,a=void 0,h=void 0,m=void 0,s=void 0,z=void 0,d=void 0,t=void 0,l=void 0;
function n(D){var C=g(D).find("[data-component-name]");
h.empty().html(D);
if(C.length){l=C.data("component-name");
b.attempt(l+".init",mb.comp)(C,document,g)
}w.addClass(o.lightboxOpen);
v.addClass(o.lightboxOpen);
t.addClass(o.hidden);
g.publish("mb:lightbox:content:set",[{target:d,pageName:l}])
}function e(){w.removeClass(o.lightboxOpen);
v.removeClass(o.lightboxOpen);
if(b.matchmedia.narrow.matches){g(f.viewport).attr("content","width=device-width, initial-scale=1")
}g.publish("mb:lightbox:close",[l]);
h.empty();
j.removeClass(o.fullscreen);
j.removeClass(o.large)
}function k(C){console.log("error",C,C.statusText)
}function q(D){g.ajax({type:D.type,url:D.url,success:function E(F){n(F)
},error:function C(){k()
}})
}function p(C){var D=""+C;
q({url:D,type:"GET"});
if(b.matchmedia.narrow.matches){g(f.viewport).attr("content","width=device-width, initial-scale=1, maximum-scale=1")
}}function A(F){t.removeClass(o.hidden);
d=F?g(F.currentTarget):{};
var C=d.prop("href")||undefined,E=d.data("lightbox-type")||undefined,D=d.data("cacheburst")||undefined;
if(C){F.preventDefault();
F.stopPropagation();
if(D){p(C+"?cacheburst="+new Date().getTime())
}else{p(C)
}g.publish("mb:lightbox:opened",[{target:d,type:E,pageName:l}])
}}function u(C,D,F){var E=C;
j=g(f.wrapper);
h=j.find(f.content);
if(typeof F==="function"){F.call()
}if(E){p(E);
v.addClass(o.lightboxOpen);
g.publish("mb:lightbox:opened",[{target:E,type:D,pageName:l}])
}}function B(D,C,E){j=g(f.wrapper);
h=j.find(f.content);
if(D.length){h.empty().html(D)
}if(typeof E==="function"){E.call()
}v.addClass(o.lightboxOpen);
g.publish("mb:lightbox:opened",[{target:"",type:C,pageName:l}])
}function y(D){var C=g(D);
s=C.find("[data-lightbox]");
s.on(c,A)
}function r(C){if(C.type==="large"){j.addClass(o.large)
}else{if(C.type==="fullscreen"){j.addClass(o.fullscreen)
}}}function x(){t=g(f.loader);
s=g("[data-lightbox]");
m=g(f.overlay);
j=g(f.wrapper);
h=j.find(f.content);
a=j.find(f.close);
z=g(f.video);
s.on(c,A);
a.on(c,e);
if(!b.matchmedia.narrow.matches){m.on(c,e).children().on(c,function(C){C.stopPropagation()
});
m.on("touchstart",e).children().on("touchstart",function(C){C.stopPropagation()
})
}g(window).on("keyup",function(D){var C=D.charCode||D.keyCode;
if(C===27){e()
}});
g.subscribe("mb:lightbox:opened",r)
}return{init:x,openLightbox:A,closeLightbox:e,content:n,reInit:y,openUrlInLightbox:u,openContentInLightBox:B}
}(mb.$,mb.util)
})();
"use strict";
(function(){mb.util.carousel=function(j){var h=j("body.mb-body"),f=void 0,e={speed:300,infinite:true,slidesToShow:1,slidesToScroll:1,centerMode:false,arrows:true,dots:true,responsive:[{breakpoint:960,settings:{arrows:false,dots:true}}]};
var b=function b(m){if(m.length){m.each(function(p){var o=m.eq(p).data("carousel-options")||'{"dots":true}',n={},q=void 0;
n=o?o:{};
q=j.extend({},e,n);
m.eq(p).slick(q)
})
}};
var g=function g(q,n){var p=q.split("."),o=p.pop();
for(var m=0;
m<p.length;
m++){n=n[p[m]]
}return n[o].apply(n)
};
var d=function d(n,m){f=n;
f.on("afterChange",function(){g(m,window)
})
};
var a=function a(n,m){f=n;
f.on("init",function(){g(m,window)
})
};
var c=function c(m){f=m;
b(f)
};
var k=function k(m){if(m.length){m.each(function(n){m.eq(n).slick("unslick")
})
}};
var l=function l(){f=h.find("[data-mb-carousel]");
b(f)
};
return{init:l,contextualInit:c,carouselCallback:d,carouselDestroy:k,carouselInitCallback:a}
}(mb.$)
})();
"use strict";
(function(){mb.util.videoplayer=function(d,b){var a={BUFFER:window.innerHeight*0.5||200};
function e(g,f){if(f.options_.autoplay&&b.IsInViewport.position(g,a.BUFFER)){if(f&&f.paused()&&f.currentSrc()!==""){f.play()
}}else{if(f&&!f.paused()){f.pause()
}}}var c=function c(){if(!window.videojs){return
}Object.keys(videojs.players).forEach(function(g){var h=videojs.players[g].el(),f=videojs.players[g];
e(h,f)
})
};
return{playInViewPortVideo:c}
}(mb.$,mb.util,window.videojs)
})();
"use strict";
(function(){mb.util.accordion=function(e){var d=e("body.mb-body"),c={accordionElem:"[data-accordion]",head:".mb-accordion-head",content:".mb-accordion-content"},a={active:"mb-active"},f="fast";
var b=function b(h,j){h.on("click",function(){e(this).toggleClass(a.active);
h.not(e(this)).removeClass(a.active);
e(this).next().slideToggle(f);
j.not(e(this).next()).slideUp(f)
})
};
var g=function g(k,l){var m=e(l),h=m.find(c.head),j=m.find(c.content);
b(h,j)
};
d.find(c.accordionElem).each(g);
return{createAccordion:b}
}(mb.$)
})();
"use strict";
(function(){mb.util.tab=function(f,c){var e={tablistitem:".mb-tab-link",tabcontent:".mb-tab-content",tablistitemlink:".mb-tab-link-anchor"},b={current:"mb-current"},h=100;
function d(j){j.find(e.tablistitemlink).on("click",function(k){k.preventDefault()
});
j.find(e.tablistitem).on("click",function(){var k=f(this).attr("data-tab");
j.find(e.tablistitem).removeClass(b.current);
j.find(e.tabcontent).fadeOut(h).removeClass(b.current);
f(this).addClass(b.current);
f("#"+k).fadeIn(h).addClass(b.current)
})
}function a(l){var j=l.find(e.tablistitem),k=l.find(e.tabcontent);
c.accordion.createAccordion(j,k)
}function g(j){var k=f(j);
if(c.matchmedia.narrow.matches){a(k)
}else{d(k)
}}return{init:g}
}(mb.$,mb.util)
})();
"use strict";
(function(){mb.util.pageload=function(d,e){var j={imgContainer:".mb-imgtoreplace",editorsPicksLink:".mb-editorpick-carousel-link"};
var m=void 0,a=void 0,f=d(".mb-breadcrumb-back-btn"),c=d("body");
var k=function k(){m.each(function(){var n=d(this).data("mobile-img");
d(this).css("background-image","url("+n+")")
})
};
var h=function h(p){var n=d(p.currentTarget),o=window.JSON.parse(n.find(".mb-tracking-content").text());
mb.util.tracking.mbCustomTracking(o)
};
var g=function g(n){n.preventDefault();
window.history.go(-1);
mb.comp.pdpfilter.backButtonHandler()
};
var b=function b(){a.on("click",h);
f.on("click",function(n){g(n)
})
};
function l(){m=c.find(j.imgContainer);
a=d(j.editorsPicksLink);
if(e.matchmedia.narrow.matches){k()
}b()
}l()
}(mb.$,mb.util)
})();
"use strict";
(function(){mb.util.tracking=function(g,f){var d=f.dataLayer||[];
var a={genericTrackingEvent:"rcms:tracking:genericEvent"};
function e(j){d.push(j);
console.log(j)
}function c(j){g.publish(a.genericTrackingEvent,j)
}function b(m){m.preventDefault();
var j=g(m.currentTarget);
var k=j.attr("href");
var l=j.attr("target");
c(j);
setTimeout(function(){f.open(k,!l?"_self":l)
},300)
}g.subscribe("mb:filter:event:tracking",function(j){e(j)
});
g.subscribe("mb:filter:sort:event:tracking",function(j){e(j)
});
function h(){console.log("load tracking")
}return{init:h,publish:c,mbCustomTracking:e,trackElement:b}
}(mb.$,window)
})();
"use strict";
(function(){mb.comp.header=function(F,m){var S=void 0,R=void 0,n=void 0,t=void 0,ad=void 0,C=void 0,o=void 0,ac=void 0,p=void 0,A=void 0,M=void 0,d=void 0,aa=void 0,J=void 0,W=void 0,N=void 0,j=void 0,K=void 0,T=void 0,Q=void 0,u=void 0,h=void 0,X=void 0,y=void 0,U=F(window),E=F(".mb-body"),Y=void 0,P=void 0,x=void 0,r=void 0,z=void 0,D=void 0;
var B={menubtn:".mb-header-menu",searchbuttonClass:".mb-header-search-icon",searchdivClass:".mb-search-wrapper",showsearchdivClass:".mb-search-wrapper-show",searchclose:".mb-search-close",menubtnopen:".mb-header-menu-open",navWrapper:".mb-header-nav-wrapper",subNavListElement:".mb-header-nav-item",subNavElement:".mb-header-subnav-links",navListElement:".mb-header-nav-links",openedSubNavElement:".mb-header-nav-item-selected",showSubMenuElement:".mb-header-show-submenu",subNavitem:".mb-header-subnav-items-wrapper",navigationNavPadding:".mb-header-nav-items-wrapper",accountName:".mb-accountName",mbLog:".mb-account-name",mbSignIn:".mb-sign-in",welcomeText:".mb-header-welcome-text",sepratorLine:".mb-user-seprator",hideNewsLetterComp:".mb-newslettter-wrapper",navOverlayDiv:".mb-header-nav-overlay",subNavContainer:".mb-header-subnav-items-container",shopNoteWrapper:".mb-header-shopnote",headerShopnote:".mb-header-shopnote .mb-shopnote",navigationWrapper:".mb-header-nav-container",navigateBackBtn:".mb-header-mobile-back-nav",navigationBottomLinks:".mb-header-nav-bottom-links",elasticSearchDiv:".mb-header-elastic-search",mainContent:'main[role="main"]',heroteaserContainer:".mb-heroteaser-container"},v={classToggle:"mb-header-menu-open",searchclassToggle:"mb-search-wrapper-show",fixedHeader:"mb-fix-header",navWrapperShow:"mb-header-nav-wrapper-show",showSubMenu:"mb-header-show-submenu",openedSubNav:"mb-header-nav-item-selected",navOverlayDivOpen:"mb-header-nav-overlay-show",showSubMenuElement:"mb-header-show-submenu",isFixedHidden:"mb-head-is-fixed-hidden",isFixedVisible:"mb-head-is-fixed-visible",isFixedPadding:"mb-main-fixed-padding",hideDiv:"mb-hidden",showSubNavBg:"mb-show-sub-nav-bg",shopNotePadding:"mb-shop-note-padding",shopNotePaddingSubNav:"mb-shop-note-padding-subnav",shopNoteWrapperShow:"mb-shopnote-show",showNote:"mb-show",loggedinuser:"mb-body-logged-in-user",searchNavCheckClass:"mb-search-nav-checkclass",addMenuGap:"mb-search-bg-gap",searchInnerPageMargin:"mb-search-overlay-inner-margin",selectedNavItem:"mb-nav-item-selected",solidBgHeader:"mb-solid-header",elasticSearchResult:"mb-elastic-search-result",elasticSearchShow:"mb-elastic-search-show",noScroll:"mb-no-scroll",mbhome:"mb-home-page",elasticSearchPanel:"mb-elastic-search-panel",elasticSearchBlackHeader:"mb-black-header"};
var I=function I(ae){if(F(B.showSubMenuElement).length){F(B.showSubMenuElement).removeClass(v.showSubMenu);
F(B.openedSubNavElement).removeClass(v.openedSubNav)
}else{ae.toggleClass(v.classToggle);
F(B.navWrapper).toggleClass(v.navWrapperShow);
F(B.navOverlayDiv).toggleClass(v.navOverlayDivOpen);
F(B.openedSubNavElement).removeClass(v.openedSubNav);
E.toggleClass(v.noScroll)
}};
var l=function l(ae,af){ae.toggleClass(v.classToggle);
F(B.subNavListElement).removeClass(v.selectedNavItem);
j.find(B.navWrapper).toggleClass(v.navWrapperShow);
j.find(B.navOverlayDiv).toggleClass(v.navOverlayDivOpen);
E.toggleClass(v.noScroll);
ad.removeClass(v.searchclassToggle);
j.removeClass(v.solidBgHeader);
j.find(B.subNavContainer).toggleClass(v.hideDiv);
af.removeClass(v.showSubMenu);
j.find(B.subNavContainer).removeClass(v.showSubNavBg)
};
var f=function f(ag){var ae=F(ag.currentTarget||ag.target),af=F(B.showSubMenuElement);
if(m.matchmedia.narrow.matches){I(ae,af)
}else{l(ae,af)
}if(y.hasClass(v.navOverlayDivOpen)){j.find(B.subNavContainer).removeClass(v.hideDiv);
j.find(B.subNavContainer).removeClass(v.showSubNavBg)
}if(ad.hasClass(v.searchNavCheckClass)){j.find(B.navOverlayDiv).addClass(v.navOverlayDivOpen);
ad.removeClass(v.searchNavCheckClass);
y.removeClass(v.addMenuGap);
E.addClass(v.noScroll);
j.find(B.subNavContainer).removeClass(v.hideDiv);
j.find(B.openedSubNavElement).removeClass(v.openedSubNav)
}if(E.hasClass(v.elasticSearchResult)){o.find("#main").removeClass("disabled")
}else{o.find("#main").addClass("disabled")
}if(o.hasClass(v.elasticSearchPanel)){if(S.hasClass(v.classToggle)){SearchLib.app.UI.getUI().hideSearchEngine();
j.find(B.navOverlayDiv).addClass(v.navOverlayDivOpen);
y.removeClass(v.addMenuGap);
j.find(B.subNavContainer).removeClass(v.hideDiv)
}}if(E.hasClass(v.elasticSearchResult)){if(S.hasClass(v.classToggle)){SearchLib.app.UI.getUI().showSearchEngine();
y.css("display","block");
y.addClass(v.navOverlayDivOpen);
y.removeClass(v.addMenuGap);
j.find(B.subNavContainer).removeClass(v.hideDiv)
}else{y.addClass(v.navOverlayDivOpen);
y.css("display","none")
}}};
var H=function H(){var ae=U.scrollTop();
if(ae<=0){j.removeClass(v.isFixedVisible);
E.find(B.mainContent).removeClass(v.isFixedPadding)
}else{j.addClass(v.isFixedVisible);
if(!E.hasClass(v.mbHome)){if(E.find(B.headerShopnote).hasClass(v.showNote)){E.find(B.mainContent).removeClass(v.isFixedPadding)
}else{E.find(B.mainContent).addClass(v.isFixedPadding)
}}}if(E.find(B.headerShopnote).hasClass(v.showNote)){if(ae>=5){if(E.find(B.shopNoteWrapper).hasClass(v.shopNoteWrapperShow)){E.removeClass(v.shopNoteWrapperShow);
E.find(B.shopNoteWrapper).removeClass(v.shopNoteWrapperShow);
aa.removeClass(v.shopNotePadding);
J.removeClass(v.shopNotePaddingSubNav);
ad.removeClass(v.searchInnerPageMargin);
o.removeClass(v.shopNoteWrapperShow)
}}if(ae<5){E.find(B.shopNoteWrapper).addClass(v.shopNoteWrapperShow);
E.addClass(v.shopNoteWrapperShow);
aa.addClass(v.shopNotePadding);
J.addClass(v.shopNotePaddingSubNav);
ad.addClass(v.searchInnerPageMargin);
o.addClass(v.shopNoteWrapperShow)
}}};
var w=function w(){F(B.subNavContainer).removeClass(v.showSubNavBg);
F(B.subNavitem).removeClass(v.showSubMenu);
F(B.subNavListElement).removeClass(v.selectedNavItem)
};
var L=function L(af){var ae=F(af.currentTarget||af.target);
af.preventDefault();
ae.parents(B.subNavitem).removeClass(v.showSubMenu)
};
var s=function s(ah){var ae=F(ah.currentTarget||ah.target),ag=ae.siblings(B.subNavitem),af=ae.parents(B.navigationWrapper).find(B.subNavContainer);
ah.preventDefault();
if(ag.length){F(B.subNavListElement).removeClass(v.selectedNavItem);
F(B.subNavitem).removeClass(v.showSubMenu);
if(!ag.hasClass(v.showSubMenu)){ae.parent(B.subNavListElement).addClass(v.selectedNavItem);
af.addClass(v.showSubNavBg);
ag.addClass(v.showSubMenu)
}}else{w()
}};
var g=function g(ag){var ae=F(ag.currentTarget),af=window.JSON.parse(ae.attr("data-tracking-content"));
mb.util.tracking.mbCustomTracking(af)
};
var O=function O(){if(ad.hasClass(v.searchclassToggle)){j.removeClass(v.solidBgHeader);
ad.removeClass(v.searchclassToggle)
}else{ad.addClass(v.searchclassToggle);
j.addClass(v.solidBgHeader)
}ad.addClass(v.searchNavCheckClass);
y.toggleClass(v.addMenuGap);
y.toggleClass(v.navOverlayDivOpen);
E.toggleClass(v.noScroll)
};
var G=function G(){if(E.find(B.headerShopnote).hasClass(v.showNote)){o.addClass(v.shopNoteWrapperShow)
}else{o.removeClass(v.shopNoteWrapperShow)
}};
var c=function c(){ad.removeClass(v.searchclassToggle);
j.removeClass(v.solidBgHeader);
y.toggleClass(v.navOverlayDivOpen);
E.toggleClass(v.noScroll)
};
var a=function a(){y.removeClass(v.navOverlayDivOpen);
p.removeClass(v.navWrapperShow);
S.removeClass(v.classToggle);
E.toggleClass(v.noScroll);
F(B.subNavListElement).removeClass(v.selectedNavItem);
if(ad.hasClass(v.searchclassToggle)){ad.removeClass(v.searchclassToggle);
j.removeClass(v.solidBgHeader)
}if(J.hasClass(v.showSubMenuElement)){J.removeClass(v.showSubMenuElement)
}if(W.hasClass(v.showSubNavBg)){W.removeClass(v.showSubNavBg)
}if(o.length){if(F(B.elasticSearchDiv).hasClass(v.elasticSearchShow)){if(E.hasClass(v.elasticSearchResult)){o.find("#main").removeClass("disabled")
}else{o.find("#main").addClass("disabled");
F(B.elasticSearchDiv).removeClass(v.elasticSearchShow);
F(B.elasticSearchDiv).removeClass(v.elasticSearchPanel)
}}}j.find(B.subNavContainer).removeClass(v.hideDiv);
y.removeClass(v.addMenuGap);
j.removeClass(v.solidBgHeader)
};
var Z=function Z(ae){if(ae.detail.mode==="page-mode"){E.addClass(v.elasticSearchResult);
E.removeClass(v.noScroll);
F(B.elasticSearchDiv).removeClass(v.elasticSearchPanel);
j.addClass(v.elasticSearchBlackHeader)
}else{E.removeClass(v.elasticSearchResult);
y.removeClass(v.addMenuGap);
y.removeClass(v.navOverlayDivOpen);
F(B.elasticSearchDiv).removeClass(v.elasticSearchShow);
o.find("#main").addClass("disabled");
F(B.elasticSearchDiv).addClass(v.elasticSearchPanel);
j.removeClass(v.elasticSearchBlackHeader)
}};
var q=function q(ae){if(ae.detail.visible===true){D.slick("slickPause");
F(B.elasticSearchDiv).addClass(v.elasticSearchShow);
F(B.elasticSearchDiv).addClass(v.elasticSearchPanel);
j.addClass(v.solidBgHeader);
E.addClass(v.noScroll);
if(ae.detail.mode==="page-mode"){E.removeClass(v.noScroll)
}}else{D.slick("slickPlay");
F(B.elasticSearchDiv).removeClass(v.elasticSearchShow);
E.removeClass(v.noScroll);
j.removeClass(v.solidBgHeader)
}if(F(B.elasticSearchDiv).hasClass(v.elasticSearchShow)){y.addClass(v.addMenuGap);
y.addClass(v.navOverlayDivOpen)
}else{y.removeClass(v.addMenuGap);
y.removeClass(v.navOverlayDivOpen)
}};
var b=function b(ae){if(ae.detail.visible===true){E.addClass(v.noScroll)
}else{E.removeClass(v.noScroll)
}};
var ab=function ab(){var ae="click mouseover";
if(m.matchmedia.narrow.matches){ae="click"
}F(B.navigationBottomLinks).on(ae,w);
S.on("click",f);
t.on("click",O);
ac.on("click",c);
F(window).on("scroll",H);
d.on(ae,s);
y.on("click",a);
aa.find("a").on("click",g);
u.on("click",g);
r.on(ae,L);
G();
window.addEventListener("WebSearch_toogle",q);
window.addEventListener("WebSearch_updateView",Z);
window.addEventListener("WebSearch_toogleFacets",b)
};
var e=function e(ag){var af=ag+"=";
var ae=document.cookie.split(";");
for(var ah=0;
ah<ae.length;
ah++){var ai=ae[ah].trim();
if(ai.indexOf(af)===0){return ai.substring(af.length,ai.length)
}}return""
};
var k=function k(ae){X=F(B.hideNewsLetterComp);
K=ae.find(B.accountName);
T=ae.find(B.mbLog);
Q=ae.find(B.mbSignIn);
u=F(B.welcomeText);
h=ae.find(B.sepratorLine);
Y=e("RCHMFrontEndCookie");
P=decodeURIComponent(Y);
if(P){x=F.parseJSON(P);
z=x.u.replace(/[+]/g," ");
K.html(z);
T.hide();
Q.show();
u.show();
h.show();
X.hide();
E.addClass(v.loggedinuser);
return
}};
var V=function V(ae){j=F(ae);
n=F(ae);
S=j.find(B.menubtn);
R=j.find(B.menubtnopen);
t=j.find(B.searchbuttonClass);
ad=j.find(B.searchdivClass);
C=j.find(B.showsearchdivClass);
ac=j.find(B.searchclose);
p=j.find(B.navWrapper);
M=F(B.subNavElement);
A=F(B.subNavListElement);
d=F(B.navListElement);
J=F(B.subNavitem);
W=F(B.subNavContainer);
y=F(B.navOverlayDiv);
aa=F(B.navigationNavPadding);
N=F(B.shopNoteWrapper);
r=F(B.navigateBackBtn);
o=F(B.elasticSearchDiv);
u=F(B.welcomeText);
D=F(B.heroteaserContainer);
ab();
k(n)
};
return{init:V,toggleMenuClass:f,mobileViewMenuHandler:I,toggleSubnav:s,elasticSearchVisibilityHandler:q,elasticSearchModeHandler:Z,toggleFilter:b,determineLoggedinUser:k}
}(mb.$,mb.util)
})();
"use strict";
(function(){mb.comp.categorytiles=function(d){var e=void 0,a=void 0;
var g={plusButton:".mb-ct-show-links-cta, .mb-ct-img-link, .mb-ct-item-link",categoryTileItem:".mb-ct-item",categoryTileLinks:".mb-ct-link-list"},j={tileToggle:"mb-ct-show-links"};
var b=function b(l){var k=d(l.currentTarget||l.target);
l.preventDefault();
if(k.closest(g.categoryTileItem).hasClass(j.tileToggle)){d(g.categoryTileItem).removeClass(j.tileToggle);
k.closest(g.categoryTileItem).removeClass(j.tileToggle)
}else{d(g.categoryTileItem).removeClass(j.tileToggle);
k.closest(g.categoryTileItem).addClass(j.tileToggle)
}};
var f=function f(m){var k=d(m.currentTarget),l=window.JSON.parse(k.find(".mb-tracking-content").text());
mb.util.tracking.mbCustomTracking(l)
};
var c=function c(){e.on("click",b);
a.find("a").on("click",f)
};
function h(k){e=d(k).find(g.plusButton);
a=d(g.categoryTileLinks);
c()
}return{init:h}
}(mb.$)
})();
"use strict";
(function(){mb.comp.pdpshare=function(c){var b=void 0;
var a={classToggle:"mb-pdp-share-menu-items-show"};
var e=function e(g){g.preventDefault();
b.toggleClass(a.classToggle)
};
var f=function f(){b.on("click",e)
};
function d(g){b=c(g);
f()
}return{init:d}
}(mb.$)
})();
"use strict";
(function(){mb.comp.compliments=function(e,b){var c=void 0,d=void 0;
var a=function a(){if(b.matchmedia.narrow.matches){b.carousel.contextualInit(d)
}};
function f(g){c=e(g),d=e(g).find(".mb-compliments-container");
a(d)
}return{init:f}
}(mb.$,mb.util)
})();
"use strict";
(function(){mb.comp.pdpimgcarousel=function(c){var b={status:".mb-pdp-carousel-pagingInfo",slickElement:".mb-pdp-carousel-div"};
var e=void 0;
var f=function f(h,j){var g=(j?j:0)+1;
if(g===1&&h.slideCount===0){c(b.status).text()
}else{c(b.status).text(g+"/"+h.slideCount)
}};
var a=function a(){e.on("init reInit afterChange",function(h,g,j){f(g,j)
})
};
function d(){e=c(b.slickElement);
a()
}return{init:d}
}(mb.$)
})();
"use strict";
(function(){mb.comp.pdpfilter=function(K,m){var M=void 0,v=void 0,T=void 0,b=void 0,W=void 0,Z=void 0,p=void 0,q=void 0,H=void 0,n=void 0,Q=void 0,B=void 0,c=void 0,l=void 0,V=void 0,o=[],f=void 0,I=void 0,h=void 0,Y=[],ae=void 0,G=void 0,t=void 0,ac=K(document),J=K("body"),F=K(window),L=void 0,x=void 0;
var E={filterBtn:".mb-filter-title",mobileFilterOptionDiv:".mb-filter",filterOptionDiv:".mb-filter-options",showAllFiltersCTA:".mb-filter-showall-link",showLessFiltersCTA:".mb-filter-showless-link",filterCheckBox:".mb-filter-checkbox",fitlerReset:".mb-reset-filter-cta",fitlerResetMobile:".mb-reset-filter-cta-mobile",sortByCTA:".mb-filter-sortby-link",sortByOptions:".mb-filter-sort-options",sortByRadioInput:'input[name="sortby"]',selectedSortByRadioInput:'input[name="sortby"]:checked',sortingOptionWrapper:".mb-view-sort-option-wrapper",filterItems:".mb-filter-items",checkedInput:'input[type="checkbox"]:checked',filterBtnMobile:".mb-filter-mobile-cta",applyFilterCta:".mb-filter-applybtn",selectedFilterCount:".mb-selected-filter-count",selectedFilterCountMobile:".mb-filter-mobile-cta-count",showHideOptionDiv:".mb-filter-item",mobileOverlay:".mb-overlay-veil",closeMobileFilterBtn:".mb-filter-close-btn",prodListWrapper:".mb-prod-list"},w={classToggle:"mb-filter-items-show",classToggleOpen:"mb-filter-title-open",classToggleMobileOpen:"mb-filter-title-mobile-open",showSortingOptions:"mb-show-sort-options",showlessFilters:"mb-show-less-filter-cta",lessFilters:"mb-less-filter",showFilters:"mb-filter-mobile-open",selectedFilterBox:"selected-filter-box",hide:"mb-hidden",noScroll:"mb-no-scroll",sortingOpened:"mb-sorting-open"},g={LOAD_COUNT:36};
var d=function d(){M.addClass(w.showFilters);
J.addClass(w.noScroll)
};
var ag=function ag(){M.removeClass(w.showFilters);
J.removeClass(w.noScroll)
};
var j=function j(aj){var ah=K(aj.currentTarget||aj.target),ai=false;
if(ah.hasClass(w.classToggleOpen)){ai=true
}ah.closest(E.filterItems).find(E.filterBtn).removeClass(w.classToggleOpen);
ah.closest(E.filterItems).find(E.filterOptionDiv).removeClass(w.classToggle);
ah.parent().siblings(E.mobileFilterOptionDiv).toggleClass(w.classToggleMobileOpen);
if(!ai){ah.toggleClass(w.classToggleOpen);
ah.siblings(E.filterOptionDiv).toggleClass(w.classToggle)
}};
var O=function O(ai){ai.preventDefault();
var ah=K(ai.currentTarget||ai.target);
ah.closest(E.sortingOptionWrapper).toggleClass(w.lessFilters);
T.find(E.filterItems).toggleClass(w.lessFilters)
};
var z=function z(ak){var al=K('button[data-filter-category="'+ak+'"]'),aj=al.next("ul").find(E.checkedInput).length,ah=al.find(E.selectedFilterCount),am=al,ai=h.find(E.selectedFilterCountMobile),an=void 0;
if(m.matchmedia.narrow.matches){an=M.find(E.checkedInput).length;
if(an===0){ai.text("")
}else{ai.text("("+an+")")
}}if(aj===0){ah.text("");
am.removeClass(w.selectedFilterBox)
}else{ah.text("("+aj+")");
am.addClass(w.selectedFilterBox)
}};
var e=function e(ah){ah.preventDefault();
M.find(E.checkedInput).trigger("click")
};
var r=function r(ah){if(!b.is(ah.target)&&b.has(ah.target).length===0){K(E.filterBtn).removeClass(w.classToggleOpen);
K(E.filterOptionDiv).removeClass(w.classToggle)
}if(!B.is(ah.target)&&B.has(ah.target).length===0){B.removeClass(w.showSortingOptions);
c.removeClass(w.sortingOpened)
}};
var y=function y(ah,al){var ai=ah.split("?");
if(ai.length>=2){var ak=encodeURIComponent(al)+"=",aj=ai[1].split(/[&;]/g);
aj.forEach(function(an,am){if(an.lastIndexOf(ak,0)!==-1){aj.splice(am,1)
}});
ah=ai[0]+"?"+aj.join("&");
return ah
}else{return ah
}};
var P=function P(ai){var ah=void 0;
ah=y(ai,"filter");
ah=ah.split("?");
return ah[1]
};
var N=function N(ah){var al=void 0,ai=window.location.href,ak=document.location.pathname,aj=void 0;
if(ah.length){aj=P(ai);
if(aj){al=aj+"&filter="+ah
}else{al="filter="+ah
}window.history.pushState({},null,"?"+al)
}else{aj=P(ai);
if(aj){al=aj;
window.history.pushState({},null,"?"+al)
}else{window.history.pushState({},null,ak)
}}};
var af=function af(ai){var ah=void 0;
ah=ai.split(",");
ah.forEach(function(ak){var aj=M.find('input[id="'+ak+'"]'),al=M.find('label[for="'+ak+'"]');
if(aj.is(":checked")){aj.prop("checked",false);
al.trigger("click")
}else{al.trigger("click")
}})
};
var ad=function ad(){var ai=void 0,aj=window.location.search.substring(1),ah=aj.split("&");
if(aj&&aj.indexOf("filter=")>-1){ah.forEach(function(ak){ai=ak.split("=");
if(ai[0]==="filter"){af(ai[1])
}})
}else{mb.comp.prodcollection.generateProductTiles(V,L,x)
}};
var A=function A(){var ai=void 0,aj=window.location.search.substring(1),ah=aj.split("&");
if(aj&&aj.indexOf("filter=")>-1){ah.forEach(function(an){ai=an.split("=");
if(ai[0]==="filter"){var ak=ai[1].split(","),al=ak[ak.length-1],am=M.find('label[for="'+al+'"]');
am.trigger("click")
}})
}};
var S=function S(ai){var ah=[];
ai.map(function(aj){ah.push(aj.values)
});
return ah
};
var D=function D(ak,al){var ah=ak.dataMap,aj=[],ai=[];
ai=S(ah);
aj=S(al);
ai=[].concat.apply([],ai);
return aj.every(function(am){return am.some(function(an){return ai.indexOf(an)!==-1
})
})
};
var u=function u(aj,ai){var ah=aj;
L=0;
x=L+g.LOAD_COUNT;
f=ah.filter(function(ak){return D(ak,ai)
});
t.empty();
mb.comp.prodcollection.generateProductTiles(f,L,x)
};
var U=function U(ai,ah,al,ak,aj){if(!ai.length){ai.push({key:ah,values:ak})
}else{ai.forEach(function(am){if(am.key===ah){am.values.push(al);
aj=true
}});
if(!aj){ai.push({key:ah,values:ak})
}}};
var R=function R(ai,ah,aj){ai.forEach(function(al,ak){if(al.key===ah&&al.values.length){var am=al.values.filter(function(an){return an!==aj[0]
});
al.values=am;
if(!al.values.length){ai.splice(ak,1)
}}})
};
var k=function k(ak){ak.preventDefault();
var am=[],aj=false,ah=K(ak.currentTarget||ak.target),ai=ah.data("filter-category"),ao=ah.attr("id");
am.push(ao);
if(ah.is(":checked")){Y.push(ao);
z(ai);
U(o,ai,ao,am,aj);
var an={event:"filterProduct",productCategory:ah.data("tracking-productcategory"),filterType:ah.data("tracking-filtertype"),filterSelected:ah.data("tracking-filterselected")};
K.publish("mb:filter:event:tracking",[an])
}else{var al=Y.indexOf(ao);
if(al>-1){Y.splice(al,1)
}z(ai);
R(o,ai,am)
}N(Y);
u(V,o)
};
var aa=function aa(ai){ai.preventDefault();
var ah=K(ai.currentTarget||ai.target);
ah.next(E.sortByOptions).toggleClass(w.showSortingOptions);
ah.toggleClass(w.sortingOpened)
};
var C=function C(ah){if(typeof f==="undefined"){ae=V
}else{ae=f
}ae.sort(function(aj,ai){if(ah==="low-high"){return aj.price.value-ai.price.value
}else{return ai.price.value-aj.price.value
}})
};
var a=function a(ai){var ah=K(ai.currentTarget||ai.target),aj=ah.val();
C(aj);
t.empty();
mb.comp.prodcollection.generateProductTiles(ae,L,x);
var ak={event:"sortProduct",productCategory:ah.data("tracking-productcategory"),sortSelected:ah.data("tracking-sortselected")};
K.publish("mb:filter:sort:event:tracking",[ak])
};
var s=function s(ah){ah.preventDefault();
ag();
e(ah)
};
var ab=function ab(){if(b.length<=5){p.addClass(w.hide)
}if(K(E.selectedSortByRadioInput).val()){C(K(E.selectedSortByRadioInput).val())
}v.on("click",j);
p.on("click",O);
q.on("click",O);
Q.on("change",k);
H.on("click",e);
n.on("click",e);
c.on("click",aa);
l.on("click",a);
h.on("click",d);
I.on("click",ag);
W.on("click",ag);
ac.on("mouseup",r);
G.on("click",s);
F.on("scroll",r)
};
var X=function X(ah){M=K(ah);
v=M.find(E.filterBtn);
Z=M.find(E.filterOptionDiv);
T=M.find(E.mobileFilterOptionDiv);
b=M.find(E.showHideOptionDiv);
p=M.find(E.showAllFiltersCTA);
q=M.find(E.showLessFiltersCTA);
H=M.find(E.fitlerReset);
n=M.find(E.fitlerResetMobile);
Q=M.find(E.filterCheckBox);
c=M.find(E.sortByCTA);
I=M.find(E.applyFilterCta);
l=K(E.sortByRadioInput);
V=mb.prodTileData.productsDetail;
h=M.find(E.filterBtnMobile);
W=M.find(E.mobileOverlay);
B=M.find(E.sortByOptions);
G=M.find(E.closeMobileFilterBtn);
t=K(E.prodListWrapper);
L=0;
x=L+g.LOAD_COUNT;
ab();
ad()
};
return{init:X,backButtonHandler:A}
}(mb.$,mb.util)
})();
"use strict";
(function(){mb.comp.productdetailtab=function(g,h){var c=void 0,m=void 0,f=void 0,d=void 0,k=void 0,b=void 0,a=void 0;
var n={tabWrapper:".mb-tabs",tablistwrapper:".mb-tabs",tabcontent:".mb-tab-content",readmorecta:".mb-content-readmore-cta",readlesscta:".mb-content-readless-cta",defaultcontentwrapper:".mb-tab-content-default",pdptabs:".mb-tab-link",mbTabFirstChild:".mb-tab-link:first-child",tabDesc:".tab-desc"},q={hide:"mb-hidden",aligntext:"mb-tab-content-align",classToggle:"mb-pdp-detail-show-desc"},p={LINE_COUNT:135};
var l=function l(s){var r=g(s.target);
r.parents(n.tabcontent).toggleClass(q.classToggle)
};
var j=function j(u){var r=g(u.currentTarget||u.target),s=r.attr("data-tab"),t=void 0;
if(s){t=g("#"+s).find(n.defaultcontentwrapper).height()
}if(t<=p.LINE_COUNT){c.hide()
}else{c.show()
}if(k.hasClass(q.classToggle)){r.parents(n.tabcontent).toggleClass(q.classToggle);
k.removeClass(q.classToggle)
}};
var e=function e(){c.on("click",l);
a.on("click",l);
m.on("click",j);
if(m.length){f.find(n.mbTabFirstChild).trigger("click")
}};
function o(r){var s=g(r);
h.tab.init(s);
c=s.find(n.readmorecta);
a=s.find(n.readlesscta);
m=s.find(n.pdptabs);
k=g(n.tabcontent);
d=g(n.defaultcontentwrapper);
f=g(n.tabWrapper);
b=g(n.mbTabFirstChild);
e()
}return{init:o}
}(mb.$,mb.util)
})();
"use strict";
(function(){mb.comp.personalisation=function(e){var d={overlay:".mb-lightbox-content",engravingform:".engraving-form",embossingform:".embossing-form",storeLocator:".mtb-store-locator",genericGallery:".content-gallery",cartPersonaliseCTA:".mb-personalise-btn",cancelLightbox:".mb-cancel-ovelay-cta",lightBoxContentWrapper:".mb-lightbox-content",formSupportedProducts:"form.save-product",continueShopping:".continue-shopping",addSupportedProductCTA:".add-bag"},j={nibSizeOpened:"mb-nib-size-opened",engravingOpened:"mb-prod-engraving-opened",embossingOpened:"mb-prod-embossing-opened",bsaodOpened:"mb-prod-bsaod-opened"};
var s=void 0,u=void 0,r=void 0,o=void 0,c=void 0,h=void 0,f=void 0,k=void 0,m=void 0,n=e(".mb-body");
var l=function l(x){x.preventDefault();
var v=e(x.currentTarget||x.target),w=v.data("href");
mb.util.lightbox.closeLightbox();
mb.util.lightbox.openUrlInLightbox(w,"large");
e.subscribe("mb:lightbox:content:set",function(){if(e(".engraving-form").length){e(".engraving-form").engraving();
n.addClass(j.engravingOpened)
}if(e(".embossing-form").length){e(".embossing-form").embossing()
}})
};
var q=function q(){mb.util.lightbox.closeLightbox()
};
var g=function g(){if(s.length){n.addClass(j.engravingOpened);
s.engraving()
}if(u.length){n.addClass(j.embossingOpened);
u.embossing()
}if(r.length){window.gdt.StoreLocator.onLightboxContentLoaded();
n.trigger("google:maps:loaded");
n.addClass(j.bsaodOpened)
}if(o.length){n.addClass(j.nibSizeOpened);
window.gdt.ContentGallery.contentGallery()
}};
var b=function b(z){var x=e(z.currentTarget||z.target),v=x.parents(d.formSupportedProducts),w=v.attr("action"),y=v.serialize();
mb.comp.pdpbuybox.makeAjxCall(w,y).done(function(A){c.empty();
c.html(A)
})
};
var a=function a(){h.on("click",b);
f.on("click",l);
k.on("click",function(v){v.preventDefault();
q()
});
m.on("click",function(v){v.preventDefault();
q()
})
};
var t=function t(){e.subscribe("mb:lightbox:close",function(){n.removeClass(j.nibSizeOpened);
n.removeClass(j.engravingOpened);
n.removeClass(j.embossingOpened);
n.removeClass(j.bsaodOpened)
})
};
var p=function p(){var v=e(d.overlay);
s=v.find(d.engravingform);
u=v.find(d.embossingform);
o=v.find(d.genericGallery);
r=v.find(d.storeLocator);
f=v.find(d.cartPersonaliseCTA);
k=v.find(d.cancelLightbox);
c=e(d.lightBoxContentWrapper);
h=e(d.addSupportedProductCTA);
m=e(d.continueShopping);
t();
g();
a()
};
return{init:p}
}(mb.$)
})();
"use strict";
(function(){mb.comp.pdpbuybox=function(h){var g={stockNotificationCta:".mb-pdp-notify-btn",addToBagCta:".mb-pdp-addtobag",nibSizeSelect:".mb-nib-size",formBuyBox:".pdp-buy-box-form",btnPersonalise:".mb-pdp-personalise",captchaErrorMsg:".mtb-aemcaptcha-error-message",captchaInputBox:".form-aemcaptcha-input",bisWrapper:".mb-stock-notification-wrapper",bisSuccessMsg:".mb-stock-success-msg",errorMsgWrapper:".mb-error-message",bisInput:".mb-pdp-backinstock",notifyLoggedinBtn:".mb-loggedin-notify-button",pdpTrackingObj:".mb-buybox-tracking-object",conciergeTracking:".mb-concierge-tracking"},n={hide:"mb-hidden"};
var A=void 0,d=void 0,c=void 0,p=void 0,e=void 0,v=void 0,z=void 0,q=void 0,m=void 0,j=void 0,x=void 0,r=void 0;
var t=function t(B){var C=/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
return C.test(B)
};
var o=function o(B,C){return h.ajax({url:B,type:"post",data:C}).fail(function(){console.log("some error during pdp box ajax call")
})
};
var s=function s(D){var C=h(D.currentTarget||D.target),B=C.find(":selected").data("eng-prod-id");
e.attr("href",B)
};
var k=function k(H){H.preventDefault();
var D=h(H.currentTarget||H.target),C=D.closest(g.formBuyBox),B=D.attr("name"),G=D.attr("value"),E=C.attr("action"),F=C.serialize()+"&"+B+"="+G;
o(E,F).done(function(I){if(I.type==="success"){q.addClass(n.hide);
j.removeClass(n.hide).text(I.message);
x.addClass(n.hide)
}else{v.removeClass(n.hide);
x.removeClass(n.hide)
}})
};
var w=function w(C){C.preventDefault();
var B=h(g.bisInput).val();
if(t(B)){x.addClass(n.hide);
k(C)
}else{v.removeClass(n.hide);
x.removeClass(n.hide)
}};
var l=function l(){m=h(".mb-addtocart-overlay .montblanc-accordion");
m.accordion();
mb.comp.personalisation.init()
};
var y=function y(H){H.preventDefault();
var D=h(H.currentTarget||H.target),B=D.attr("name"),F=D.attr("value"),C=D.closest(g.formBuyBox),G=C.attr("action"),E=C.serialize()+"&"+B+"="+F;
D.addClass("loader").prop("disabled",true);
o(G,E).done(function(J){mb.util.lightbox.openContentInLightBox(J,"large",l);
h.publish("update:basket");
D.removeClass("loader").prop("disabled",false);
var L=document.querySelector(g.pdpTrackingObj),I=L.textContent,K=window.JSON.parse(I);
mb.util.tracking.mbCustomTracking(K)
}).fail(function(I,J){console.log("error while buying product"+J);
D.removeClass("loader").prop("disabled",false);
console.log("status is:"+I)
})
};
var a=function a(E){E.preventDefault();
var D=h(E.currentTarget||E.target),F=D.data("bisnotification"),B=window.gdt.UserInteractions.data(),C=B.notifications.messages;
h.get(F).done(function(){j.empty();
j.removeClass(n.hide).text(C.success);
h(".mb-loggedin-notify-button").addClass(n.hide)
}).fail(function(){j.empty();
j.removeClass(n.hide).text(C.error)
})
};
var f=function f(D){var B=h(D.currentTarget),C=window.JSON.parse(B.attr("data-tracking-content"));
mb.util.tracking.mbCustomTracking(C)
};
var b=function b(){A.on("click",w);
d.on("click",y);
p.on("change",s);
c.on("click",a);
r.on("click",f)
};
function u(B){var C=h(B);
A=C.find(g.stockNotificationCta);
d=C.find(g.addToBagCta);
p=C.find(g.nibSizeSelect);
e=C.find(g.$ctaPersonalise);
c=C.find(g.notifyLoggedinBtn);
v=C.find(g.captchaErrorMsg);
z=C.find(g.captchaInputBox);
q=C.find(g.bisWrapper);
j=C.find(g.bisSuccessMsg);
x=q.find(g.errorMsgWrapper);
r=C.find(g.conciergeTracking);
b()
}return{init:u,reInitCompInsideOverlay:l,makeAjxCall:o}
}(mb.$)
})();
"use strict";
(function(){mb.comp.prodcollection=function(e){var h=void 0,n=mb.prodTileData,a=void 0,f=void 0,p=void 0,l=void 0,c=void 0,g=void 0,s=void 0;
var d={resultCountWrapper:".mb-prod-list-item-count",newArrivalLabel:".mb-prod-tile-label",customTag1:".mb-prod-tile-customtag1",customTag2:".mb-prod-tile-customtag2",prodListWrapper:".mb-prod-list",prodtile:".mb-prod-tile",loadMore:".mb-load-more"},m={LOAD_COUNT:36};
var j=function j(u){a=e(d.resultCountWrapper);
a.text(u)
};
var t=function t(u,v,y){var x='<p class="mb-no-result-msg">No data found</p>',w=void 0;
l=e(d.loadMore);
if(u.length){w=u.slice(v,y);
w.forEach(function(A){var z=e(".prod-tile-tmpl").html().replace("{{ productTitle }}",A.title).replace(/{{urltoproductpage}}/g,A.detailPagePath).replace("{{ productImgPath }}",A.imageResource.path+".adapt.306.306.png").replace(/{{ productSKU }}/g,A.productSKU).replace("{{ productPrice }}",A.price.displayPrice).replace("{{ data-pc }}",A.dataPc).replace("{{ data-product-vat }}",A.dataProductVat).replace("{{customTag1}}",A.customTag1).replace("{{customTag2}}",A.customTag2).replace("{{hideCustomTag1}}",A.isCustomTag1Present).replace("{{hideCustomTag2}}",A.isCustomTag2Present).replace("{{isAvailable}}",A.isAddToCartAllowed?"":"mb-hidden").replace("{{isPersonalize}}",A.isPersonalizable?"":"mb-hidden");
p.append(z);
e("div[data-prod-id="+A.productSKU+"]").find("div.mb-prod-tile-price").attr("data-fp",window.JSON.stringify(A.price.dataFp));
e("div[data-prod-id="+A.productSKU+"]").find(".mb-wishlist-link").attr({"data-tracking-productCollection":window.JSON.stringify(A.productCollection),"data-tracking-productCategory":window.JSON.stringify(A.productCategory)})
})
}else{p.append(x);
console.log("seems like a product data issue")
}if(u.length<=y){l.hide()
}else{l.show()
}c=y;
g=c+m.LOAD_COUNT;
return u
};
var q=function q(v,u,w){p=e(d.prodListWrapper);
s=t(v,u,w);
j(v.length)
};
var r=function r(){q(s,c,g)
};
var k=function k(){var u=n.productsDetail,v=window.location.search;
if(!v.length){p.empty();
q(u,c,g)
}};
var b=function b(){if(n){k()
}l.on("click",function(){r()
})
};
function o(u){h=e(u);
f=h.find(d.newArrivalLabel);
c=0;
g=c+m.LOAD_COUNT;
b()
}return{init:o,generateProductTiles:q}
}(mb.$)
})();
"use strict";
(function(){mb.comp.pdprefill=function(e){var c={refilladdtocartbtn:".mb-refill-add-btn"};
var d=void 0;
var a=function a(j,k){return e.ajax({url:j,type:"post",data:k}).fail(function(){console.log("some error during pdp box ajax call")
})
};
var b=function b(){console.log("reinit called")
};
var g=function g(n){n.preventDefault();
var k=e(n.currentTarget||n.target),j=k.closest(".save-product"),m=j.attr("action"),l=j.serialize()+"&"+n.target.name+"="+n.target.value;
k.addClass("mb-loader").prop("disabled",true);
a(m,l).done(function(o){mb.util.lightbox.openContentInLightBox(o,"large",b);
e.publish("update:basket");
k.removeClass("mb-loader").prop("disabled",false)
})
};
var h=function h(){d.on("click",g)
};
function f(j){var k=e(j);
d=k.find(c.refilladdtocartbtn);
h()
}return{init:f,reInitCompInsideOverlay:b}
}(mb.$)
})();
"use strict";
(function(){mb.comp.oftenbought=function(k){var s=k(".mb-body"),x=void 0,u=void 0,w=void 0,m=void 0,d=void 0,r=void 0,e=void 0,o=void 0,f=void 0,p=void 0;
var j={imagecarousel:".mb-generic-img-carousel-container",form:".mb-oftenbought-form",list:".mb-generic-img-carousel-container",carouselitem:".mb-generic-img-slide",addtocartbutton:".mb-generic-img-addbutton",totalprice:".mb-generic-img-total-price",checkbox:".mb-checkbox",curatedcheckbox:".mb-curated-checkbox",pricelist:".mtb-ob-price-list-input",totalpriceheading:".mb-button-heading"};
var l=function l(){x=m.filter(function(){return k(this).is(":checked")
})
};
var a=function a(){var A="";
x.each(function(C){var B=x.eq(C).data("index");
A+=B
});
return A
};
var n=function n(){var B="",A="data-price-"+a();
B=d.attr(A);
return B
};
var y=function y(A){var B=r.data("format");
B=B.replace("*",A);
r.text(B)
};
var t=function t(){var B=x.length;
var A=void 0;
if(B>=1){u.removeAttr("disabled");
A=x.eq(0).data("price");
if(B>1){A=n()
}}else{A="";
u.attr("disabled","disabled")
}w.text(A);
y(B)
};
var c=function c(){var C="",B=void 0,A=void 0;
f.each(function(){A=k(this).find(e).is(":checked");
if(A){B="1";
C+=B
}else{B="0";
C+=B
}});
return C
};
var g=function g(){var B="",A="data-price-"+c();
B=d.attr(A);
return B
};
var q=function q(){var B=o.length,A=void 0;
if(B>=1){u.removeAttr("disabled");
A=o.eq(0).data("price");
if(B>1){A=g()
}}else{A="";
u.attr("disabled","disabled")
}w.text(A);
y(B)
};
var z=function z(){o=e.filter(function(){return k(this).is(":checked")
})
};
var h=function h(){var E=void 0,B="",D="",A="",C="";
k("span.mb-tracking-content").remove();
p.find("input:checked").each(function(){B+=k(this).data("page-category")+", ";
D+=k(this).data("product-sku")+", ";
A+=k(this).data("product-category")+", ";
C+=k(this).data("product-collection")+", "
});
k('<span class="mb-tracking-content">{ "event": "addToCart", "pageCategory": "'+B+'", "productCategory": "'+A+'", "productCollection": "'+C+'", "productSKU": "'+D+'" } </span>').appendTo(".mb-generic-img-addbutton");
E=window.JSON.parse(u.find(".mb-tracking-content").text());
mb.util.tracking.mbCustomTracking(E)
};
var b=function b(){m.on("click",function(){x=m.filter(function(){return k(this).is(":checked")
});
t()
});
e.on("click",function(){z();
q()
});
u.on("click",function(){h()
})
};
function v(){var A=s.find(j.form);
w=A.find(j.totalprice);
m=A.find(j.checkbox);
e=A.find(j.curatedcheckbox);
d=A.find(j.pricelist);
u=A.find(j.addtocartbutton);
r=A.find(j.totalpriceheading);
f=A.find(j.carouselitem);
p=A.find(j.list);
l();
b();
t();
z();
q()
}return{init:v}
}(mb.$)
})();
"use strict";
(function(){mb.comp.footer=function(h,j){var d=void 0,l=void 0,g=void 0,c=h(window),f=h(document),n=void 0;
var m={menuHeading:".mb-menu-link",footerListDiv:".mb-footer-item",backToTop:".mb-backtotop-text",backToTopSticky:".mb-backtotop-icn-footer"},p={showMinusIcon:"mb-footer-show-links",classToggle:"mb-footer-list-open",stickyBackToTopHidden:"mb-backttop-icn-hidden"};
var k=function k(r){if(j.matchmedia.narrow.matches){var q=h(r.currentTarget||r.target);
q.toggleClass(p.showMinusIcon);
q.siblings(m.footerListDiv).toggleClass(p.classToggle)
}};
var b=function b(q){q.preventDefault();
h("html, body").scrollTop(0,0)
};
var a=function a(){var q=c.scrollTop(),r=f.height()-1450;
if(q<=5){n.removeClass(p.stickyBackToTopHidden)
}if(q>=r||q===0){n.addClass(p.stickyBackToTopHidden)
}else{n.removeClass(p.stickyBackToTopHidden)
}};
var e=function e(){d.on("click",k);
g.on("click",b);
h(window).on("scroll",a);
n.on("click",b)
};
function o(q){var r=h(q);
d=r.find(m.menuHeading);
l=r.find(m.footerListDiv);
g=h(m.backToTop);
n=h(m.backToTopSticky);
e()
}return{init:o}
}(mb.$,mb.util)
})();
"use strict";
(function(){mb.comp.servicemenu=function(g){var e=void 0,f=g("body"),h=void 0,k=void 0,o=void 0,c=void 0;
var m={wishListBtn:".mb-wishlist-link",wishlistHiddenField:".mb-hidden-wishlist",wishListCount:".mb-header-wishlist-count",basketCount:".mb-header-cart-count",mobileWishlistCount:".mobile-wishlist-count"},q={wishListAdded:"mb-wishlist-added",mobileWishlistAdded:"mb-mobile-wishlist-added",addLoader:"mb-loader-icn"};
var b=function b(s,r,t){return g.ajax({url:s,type:r,data:t?t:""}).fail(function(){console.log("Fail to get the AJAX response from servicemenu")
})
};
var j=function j(r,u,t){if(u==="deletefromwishlist"){var s=g("button[data-productid = "+t+"]");
s.attr("value","addtowishlist");
s.removeClass(q.wishListAdded);
r.removeClass(q.addLoader)
}else{r.attr("value","deletefromwishlist");
r.removeClass(q.addLoader);
r.addClass(q.wishListAdded)
}};
var l=function l(x){x.preventDefault();
var r=g(x.currentTarget||x.target),s=r.attr("name"),v=r.attr("value"),u=r.attr("data-productid"),w=r.parents("form").serialize()+"&"+s+"="+v,t=r.parents("form").attr("action");
x.preventDefault();
r.addClass(q.addLoader);
b(t,"post",w).done(function(){g.publish("update:wishlist");
j(r,v,u)
})
};
var n=function n(r){k.text(r.wishlist.count?r.wishlist.count:"");
c.text(r.basket.count?r.basket.count:"");
if(r.wishlist.count>0){o.addClass(q.mobileWishlistAdded)
}else{o.removeClass(q.mobileWishlistAdded)
}if(r.wishlist.items){r.wishlist.items.filter(function(s){var t=g("button[data-productid = "+s.id+"]");
t.attr("value","deletefromwishlist");
t.addClass(q.wishListAdded)
})
}};
var a=function a(){var r=window.gdt.userInteractionsUrl+"?cachebust="+new Date().getTime(),s=void 0;
b(r,"get").done(function(t){s=t;
n(s)
})
};
var d=function d(){var r=window.gdt.UserInteractions.data();
if(typeof r!=="undefined"){n(r)
}else{a()
}f.on("click",m.wishListBtn,l);
g.subscribe("update:wishlist",a);
g.subscribe("update:basket",a)
};
var p=function p(){h=g(m.wishlistHiddenField);
e=g(m.wishListBtn);
k=g(m.wishListCount);
c=g(m.basketCount);
o=g(m.mobileWishlistCount);
d()
};
return{init:p}
}(mb.$)
})();
"use strict";
(function(){mb.comp.countrySelector=function(f){var g=void 0,h=void 0,e=void 0,k=f(".mtb-countryselector-dropdown .mb-select"),b=f(".mtb-countryselector-dropdown a.shopNow");
var j={arrowDownbtn:".arrow",lightBoxWrapper:".mb-lightbox-content",arrowBtnDiv:".arrow-down",countylistWrapper:".country-list"},m={showCountryList:"show-country-list",showArrowUp:"arrow-up"};
var c=function c(o){o.preventDefault();
var n=f(o.currentTarget||o.target);
if(n.find(j.arrowBtnDiv).hasClass(m.showArrowUp)){n.find(j.countylistWrapper).addClass(m.showCountryList)
}else{e.find(j.countylistWrapper).removeClass(m.showCountryList);
n.find(j.countylistWrapper).removeClass(m.showCountryList);
e.find(j.arrowBtnDiv).removeClass(m.showArrowUp)
}n.find(j.arrowBtnDiv).toggleClass(m.showArrowUp);
n.siblings(j.countylistWrapper).toggleClass(m.showCountryList)
};
var a=function a(n){n.preventDefault();
var o=k.find(":selected");
b.attr("href",o.data("countryurl"));
b.unbind("click",false)
};
var d=function d(){g.on("click",c);
b.bind("click",false);
k.on("change",a)
};
var l=function l(){e=f(j.lightBoxWrapper);
g=e.find(j.arrowDownbtn);
h=e.find(j.arrowBtnDiv);
d()
};
return{init:l}
}(mb.$)
})();
"use strict";
(function(){mb.comp.shopnote=function(e){var h=void 0,j=void 0,a=void 0,f=void 0,c=void 0,m=void 0,g=void 0,d=e(".mb-body");
var n={shopNoteCloseBtn:".mb-shopnote-close",cookieBarCloseBtn:".mb-cookiebar-close",navigationNavPadding:".mb-header-nav-items-wrapper",subNavContainer:".mb-header-subnav-items-container",shopNoteWrapper:".mb-header-shopnote",shopNoteDiv:".mb-shopnote",headerShopnote:".mb-header-shopnote .mb-shopnote",FooterCookie:".mb-footer-cookiebar .mb-shopnote",subNavitem:".mb-header-subnav-items-wrapper",searchdivClass:".mb-search-wrapper",footerPaddingAdded:".mb-assistance-footer-wrapper",elasticSearchDiv:".mb-header-elastic-search"},q={showNote:"mb-show",shopNotePadding:"mb-shop-note-padding",shopNotePaddingSubNav:"mb-shop-note-padding-subnav",shopNoteWrapperShow:"mb-shopnote-show",cookieBarPadding:"mb-footer-cookiebar-padding",searchInnerPageMargin:"mb-search-overlay-inner-margin"},p={shopNoteCookie:"mbShopNote",footerCookie:"mbFooterCookie"};
var l=function l(r){if(r==="header"){document.cookie=p.shopNoteCookie+"= false; path=/; Domain="+window.gdt.domainName;
d.find(n.headerShopnote).removeClass(q.showNote);
d.find(n.shopNoteWrapper).removeClass(q.shopNoteWrapperShow);
d.find(n.navigationNavPadding).removeClass(q.shopNotePadding);
d.find(n.subNavitem).removeClass(q.shopNotePaddingSubNav);
d.find(n.searchdivClass).removeClass(q.searchInnerPageMargin);
g.removeClass(q.shopNoteWrapperShow);
d.removeClass(q.shopNoteWrapperShow)
}else{document.cookie=p.footerCookie+"= false; path=/;  Domain="+window.gdt.domainName;
e(n.FooterCookie).removeClass(q.showNote);
e(n.footerPaddingAdded).removeClass(q.cookieBarPadding)
}};
var k=function k(){if(document.cookie.indexOf(p.shopNoteCookie)===-1||e.cookie("mbShopNote")==="true"){document.cookie=p.shopNoteCookie+"= true; path=/; Domain="+window.gdt.domainName;
e(n.headerShopnote).addClass(q.showNote);
d.find(n.searchdivClass).addClass(q.searchInnerPageMargin)
}if(document.cookie.indexOf(p.footerCookie)===-1||e.cookie("mbFooterCookie")==="true"){document.cookie=p.footerCookie+"= true; path=/;  Domain="+window.gdt.domainName;
e(n.FooterCookie).addClass(q.showNote);
e(n.footerPaddingAdded).addClass(q.cookieBarPadding)
}if(e.cookie("mbShopNote")==="false"){d.find(n.shopNoteWrapper).removeClass(q.shopNoteWrapperShow);
d.find(n.navigationNavPadding).removeClass(q.shopNotePadding);
d.find(n.subNavitem).removeClass(q.shopNotePaddingSubNav);
d.find(n.searchdivClass).removeClass(q.searchInnerPageMargin)
}};
var b=function b(r){h=e(n.headerShopnote);
j=e(n.FooterCookie);
f=e(n.subNavitem);
a=e(n.navigationNavPadding);
c=r.find(n.searchdivClass);
m=e(n.shopNoteWrapper);
g=e(n.elasticSearchDiv);
r.on("click",n.shopNoteCloseBtn,function(){l("header")
});
r.on("click",n.cookieBarCloseBtn,function(){l("footer")
})
};
var o=function o(r){var s=e(r);
b(s);
k()
};
return{init:o}
}(mb.$)
})();
"use strict";
(function(){mb.comp.newsletter=function(f){var g=void 0,e=void 0,k=void 0,d=f("body");
var h={errorMsgSpan:".mb-validate-message",newsletterCTA:".mb-newsletter-cta",newsletterForm:".mb-newsletter-form"},l={hide:"mb-hidden"};
var a=function a(n){var m=/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
return m.test(n)
};
var c=function c(){var m=f(".mb-newsletter-textfield-dark").val();
if(!a(m)||m===""){f(h.newsletterForm).find(h.errorMsgSpan).removeClass(l.hide);
return false
}else{f(h.newsletterForm).find(h.errorMsgSpan).addClass(l.hide);
return true
}};
var b=function b(){e.on("click",c)
};
function j(m){var n=f(m);
g=n.find(h.errorMsgSpan);
e=d.find(h.newsletterCTA);
k=d.find(h.newsletterForm);
a();
b()
}return{init:j}
}(mb.$)
})();
"use strict";
(function(){mb.comp.curatedCollection=function(e){var f=void 0,h=void 0,m=void 0,l=/iPhone/i.test(navigator.userAgent),d=e("body"),o=void 0,j=e(".mb-overlay-veil");
var n={collectionImg:".mb-cucollect-cta-img",cucollectOverlay:".mb-cucollect-overlay",prodDetailLink:".mb-generic-prod-detail-link",addButton:".mb-generic-img-addbutton",overlayContainer:".mb-cucollect-overlay-container",backToTopSticky:".mb-backtotop-icn-footer"},q={toggleOverlay:"mb-hide-cucollect-overlay",samCuratedAddButton:"mb-curated-collection-addbtn",noScroll:"mb-no-scroll",stickyBackToTopHidden:"mb-backttop-icn-hidden"};
var g=function g(r){r.preventDefault();
e(n.cucollectOverlay).removeClass(q.toggleOverlay);
d.addClass(q.noScroll);
if(m.hasClass(q.toggleOverlay)===false){o.addClass(q.stickyBackToTopHidden)
}else{o.removeClass(q.stickyBackToTopHidden)
}};
var b=function b(r){r.preventDefault();
e(n.cucollectOverlay).addClass(q.toggleOverlay);
d.removeClass(q.noScroll)
};
var a=function a(){if(l){h.css("height","calc(100vh - 360px)")
}else{h.css("height","calc(100vh - 340px)");
e(n.addButton).addClass(q.samCuratedAddButton)
}};
var k=function k(t){var r=e(t.currentTarget),s=window.JSON.parse(r.find(".mb-tracking-content").text());
mb.util.tracking.mbCustomTracking(s)
};
var c=function c(){f.on("click",g);
j.on("click",b);
f.on("click",k);
e(n.cucollectOverlay).find(n.prodDetailLink).on("click",k);
e(n.cucollectOverlay).find(n.addButton).on("click",k)
};
function p(r){f=e(r).find(n.collectionImg);
h=e(n.overlayContainer);
o=e(n.backToTopSticky);
m=e(n.cucollectOverlay);
c();
a()
}return{init:p}
}(mb.$)
})();
"use strict";
(function(){mb.comp.exposedNavHeader=function(g){var h=void 0,n=void 0,d=void 0,k=void 0,e=void 0,b=void 0,l=void 0;
var m={body:".mb-body"};
var f=function f(){var r=window.pageYOffset;
if(r<=0){h.removeClass("mb-header-offscreen")
}else{if(l>r){h.removeClass("mb-header-offscreen")
}else{h.addClass("mb-header-offscreen")
}}l=r
};
var q=function q(){g(".mb-header-subnav-items-wrapper").removeClass("mb-header-show-submenu");
g(".mb-header-nav-wrapper").removeClass("mb-header-nav-wrapper-show");
g(".mb-header-menu").removeClass("mb-header-menu-open")
};
var j=function j(){n.addClass("mb-hide-search-wrapper");
d.removeClass("mb-header-nav-overlay-show")
};
var a=function a(){n.removeClass("mb-hide-search-wrapper");
d.addClass("mb-header-nav-overlay-show")
};
var o=function o(){if(n.hasClass("mb-hide-search-wrapper")){q();
a()
}else{j()
}};
var c=function c(){e.addClass("mb-exposed-nav");
b.on("scroll",f);
g(".mb-header-search-icon").on("click",o);
g(".mb-search-close, .mb-header-nav-overlay").on("click",j);
window.addEventListener("WebSearch_toogle",mb.comp.header.elasticSearchVisibilityHandler);
window.addEventListener("WebSearch_updateView",mb.comp.header.elasticSearchModeHandler);
window.addEventListener("WebSearch_toogleFacets",mb.comp.header.toggleFilter)
};
function p(r){h=g(r);
n=h.find(".mb-search-wrapper");
e=g(m.body);
b=g(window);
d=g(".mb-header-nav-overlay");
k=e.hasClass("mb-home-page");
c();
f();
mb.comp.header.determineLoggedinUser(h)
}return{init:p,closeSearchOverlay:j,openSearchOverlay:a}
}(mb.$)
})();
"use strict";
(function(){mb.comp.exposedNavigation=function(j,k){var m=void 0,n=void 0,g=void 0,c=void 0,h=void 0,l=void 0,o=void 0;
var p={body:".mb-body",showSubMenuElement:".mb-header-show-submenu",subNavContainer:".mb-header-subnav-items-container",elasticSearchDiv:".mb-header-elastic-search",elasticSearchShow:"mb-elastic-search-show"},r={elasticSearchShow:"mb-elastic-search-show"};
var b=function b(){var t=window.pageYOffset,s=m.parent(".mb-exposed-header-navigation");
if(t<=0){if(j.cookie("mbShopNote")==="true"){g.addClass("mb-shopnote-show").find(".mb-shopnote").addClass("mb-show")
}s.addClass("mb-exp-nav-transparent");
m.removeClass("mb-sticky-navigation");
j('main[role="main"]').removeClass("mb-margin-top-44")
}else{if(o>t){m.removeClass("mb-sticky-navigation");
s.removeClass("mb-sticky");
j('main[role="main"]').removeClass("mb-margin-top-44");
s.removeClass("mb-exp-nav-transparent");
g.removeClass("mb-shopnote-show").find(".mb-shopnote").removeClass("mb-show")
}else{m.addClass("mb-sticky-navigation");
s.addClass("mb-sticky");
s.removeClass("mb-exp-nav-transparent");
g.removeClass("mb-shopnote-show").find(".mb-shopnote").removeClass("mb-show");
j('main[role="main"]').addClass("mb-margin-top-44")
}}o=t
};
var d=function d(v){var s=j(v.currentTarget||v.target),t=s.find(".mb-header-subnav-items-wrapper").outerHeight(),u=t?t:0;
if(j("body").find(j(p.elasticSearchShow))){j("body").find(j(p.elasticSearchDiv)).removeClass(r.elasticSearchShow);
j("body").find(j(p.elasticSearchDiv)).find("#main").addClass("disabled")
}j(".mb-exp-subnav-bg").css("height",u+"px");
mb.comp.exposedNavHeader.closeSearchOverlay();
s.addClass("mb-nav-visible");
j(".mb-exp-subnav-bg").addClass("mb-show-backgrouond");
j(".mb-exp-nav-veil").addClass("mb-show-veil")
};
var f=function f(t){var s=j(t.currentTarget||t.target);
s.removeClass("mb-nav-visible");
j(".mb-exp-nav-veil").removeClass("mb-show-veil");
j(".mb-exp-subnav-bg").css("height",0)
};
var a=function a(u){var s=j(u.currentTarget||u.target),t=s.parent(".mb-header-subnav-section");
u.preventDefault();
t.toggleClass("mb-subnav-expanded")
};
var e=function e(){c.on("scroll",b);
if(k.matchmedia.wide.matches){j(".mb-header-nav-item").on({mouseenter:d,mouseleave:f});
j(".mb-exposed-nav-header, .mb-exp-nav-veil").on({mouseenter:function s(){j(".mb-exp-subnav-bg").removeClass("mb-show-backgrouond");
j(".mb-exp-nav-veil").removeClass("mb-show-veil")
}})
}if(k.matchmedia.narrow.matches){j(".mb-header-subnav-heading").on("click",a);
j(".mb-header-menu").on("click",function(u){var t=j(u.currentTarget||u.target);
mb.comp.exposedNavHeader.closeSearchOverlay();
mb.comp.header.mobileViewMenuHandler(t,h);
j(".mb-header-nav-overlay").removeClass("mb-header-nav-overlay-show")
});
j(".mb-header-nav-links").on("click",function(u){var t=j(u.currentTarget||u.target);
mb.comp.header.toggleSubnav(u);
t.next(".mb-header-subnav-items-wrapper").find(".mb-header-subnav-section:first").addClass("mb-subnav-expanded")
});
mb.comp.header.determineLoggedinUser(m)
}};
function q(s){m=j(s);
h=j(p.showSubMenuElement);
l=j(p.subNavContainer);
g=j(p.body);
c=j(window);
n=g.hasClass("mb-home-page");
e();
b()
}return{init:q}
}(mb.$,mb.util)
})();
(function(b,a){b(function(){a.initialise(document);
a.lightbox.init();
a.carousel.init()
})
})(mb.$,mb.util);