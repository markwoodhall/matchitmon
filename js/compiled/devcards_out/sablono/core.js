// Compiled by ClojureScript 1.9.229 {}
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.string');
goog.require('sablono.normalize');
goog.require('sablono.util');
goog.require('sablono.interpreter');
goog.require('cljsjs.react');
goog.require('cljsjs.react.dom');
goog.require('clojure.string');
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__32152__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__32149 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var seq__32150 = cljs.core.seq.call(null,vec__32149);
var first__32151 = cljs.core.first.call(null,seq__32150);
var seq__32150__$1 = cljs.core.next.call(null,seq__32150);
var tag = first__32151;
var body = seq__32150__$1;
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__32152 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32153__i = 0, G__32153__a = new Array(arguments.length -  0);
while (G__32153__i < G__32153__a.length) {G__32153__a[G__32153__i] = arguments[G__32153__i + 0]; ++G__32153__i;}
  args = new cljs.core.IndexedSeq(G__32153__a,0);
} 
return G__32152__delegate.call(this,args);};
G__32152.cljs$lang$maxFixedArity = 0;
G__32152.cljs$lang$applyTo = (function (arglist__32154){
var args = cljs.core.seq(arglist__32154);
return G__32152__delegate(args);
});
G__32152.cljs$core$IFn$_invoke$arity$variadic = G__32152__delegate;
return G__32152;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__25570__auto__ = (function sablono$core$update_arglists_$_iter__32159(s__32160){
return (new cljs.core.LazySeq(null,(function (){
var s__32160__$1 = s__32160;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__32160__$1);
if(temp__4657__auto__){
var s__32160__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__32160__$2)){
var c__25568__auto__ = cljs.core.chunk_first.call(null,s__32160__$2);
var size__25569__auto__ = cljs.core.count.call(null,c__25568__auto__);
var b__32162 = cljs.core.chunk_buffer.call(null,size__25569__auto__);
if((function (){var i__32161 = (0);
while(true){
if((i__32161 < size__25569__auto__)){
var args = cljs.core._nth.call(null,c__25568__auto__,i__32161);
cljs.core.chunk_append.call(null,b__32162,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__32163 = (i__32161 + (1));
i__32161 = G__32163;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32162),sablono$core$update_arglists_$_iter__32159.call(null,cljs.core.chunk_rest.call(null,s__32160__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32162),null);
}
} else {
var args = cljs.core.first.call(null,s__32160__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__32159.call(null,cljs.core.rest.call(null,s__32160__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__25570__auto__.call(null,arglists);
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__25872__auto__ = [];
var len__25865__auto___32169 = arguments.length;
var i__25866__auto___32170 = (0);
while(true){
if((i__25866__auto___32170 < len__25865__auto___32169)){
args__25872__auto__.push((arguments[i__25866__auto___32170]));

var G__32171 = (i__25866__auto___32170 + (1));
i__25866__auto___32170 = G__32171;
continue;
} else {
}
break;
}

var argseq__25873__auto__ = ((((0) < args__25872__auto__.length))?(new cljs.core.IndexedSeq(args__25872__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__25873__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__25570__auto__ = (function sablono$core$iter__32165(s__32166){
return (new cljs.core.LazySeq(null,(function (){
var s__32166__$1 = s__32166;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__32166__$1);
if(temp__4657__auto__){
var s__32166__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__32166__$2)){
var c__25568__auto__ = cljs.core.chunk_first.call(null,s__32166__$2);
var size__25569__auto__ = cljs.core.count.call(null,c__25568__auto__);
var b__32168 = cljs.core.chunk_buffer.call(null,size__25569__auto__);
if((function (){var i__32167 = (0);
while(true){
if((i__32167 < size__25569__auto__)){
var style = cljs.core._nth.call(null,c__25568__auto__,i__32167);
cljs.core.chunk_append.call(null,b__32168,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__32172 = (i__32167 + (1));
i__32167 = G__32172;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32168),sablono$core$iter__32165.call(null,cljs.core.chunk_rest.call(null,s__32166__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32168),null);
}
} else {
var style = cljs.core.first.call(null,s__32166__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__32165.call(null,cljs.core.rest.call(null,s__32166__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__25570__auto__.call(null,styles);
});

sablono.core.include_css.cljs$lang$maxFixedArity = (0);

sablono.core.include_css.cljs$lang$applyTo = (function (seq32164){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32164));
});

/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",({"src": src})));
});
/**
 * Include Facebook's React JavaScript library.
 */
sablono.core.include_react = (function sablono$core$include_react(){
return sablono.core.include_js.call(null,"http://fb.me/react-0.12.2.js");
});
/**
 * Wraps some content in a HTML hyperlink with the supplied URL.
 */
sablono.core.link_to32173 = (function sablono$core$link_to32173(var_args){
var args__25872__auto__ = [];
var len__25865__auto___32176 = arguments.length;
var i__25866__auto___32177 = (0);
while(true){
if((i__25866__auto___32177 < len__25865__auto___32176)){
args__25872__auto__.push((arguments[i__25866__auto___32177]));

var G__32178 = (i__25866__auto___32177 + (1));
i__25866__auto___32177 = G__32178;
continue;
} else {
}
break;
}

var argseq__25873__auto__ = ((((1) < args__25872__auto__.length))?(new cljs.core.IndexedSeq(args__25872__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to32173.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25873__auto__);
});

sablono.core.link_to32173.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to32173.cljs$lang$maxFixedArity = (1);

sablono.core.link_to32173.cljs$lang$applyTo = (function (seq32174){
var G__32175 = cljs.core.first.call(null,seq32174);
var seq32174__$1 = cljs.core.next.call(null,seq32174);
return sablono.core.link_to32173.cljs$core$IFn$_invoke$arity$variadic(G__32175,seq32174__$1);
});


sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to32173);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to32179 = (function sablono$core$mail_to32179(var_args){
var args__25872__auto__ = [];
var len__25865__auto___32186 = arguments.length;
var i__25866__auto___32187 = (0);
while(true){
if((i__25866__auto___32187 < len__25865__auto___32186)){
args__25872__auto__.push((arguments[i__25866__auto___32187]));

var G__32188 = (i__25866__auto___32187 + (1));
i__25866__auto___32187 = G__32188;
continue;
} else {
}
break;
}

var argseq__25873__auto__ = ((((1) < args__25872__auto__.length))?(new cljs.core.IndexedSeq(args__25872__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to32179.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25873__auto__);
});

sablono.core.mail_to32179.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__32182){
var vec__32183 = p__32182;
var content = cljs.core.nth.call(null,vec__32183,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__24790__auto__ = content;
if(cljs.core.truth_(or__24790__auto__)){
return or__24790__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to32179.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to32179.cljs$lang$applyTo = (function (seq32180){
var G__32181 = cljs.core.first.call(null,seq32180);
var seq32180__$1 = cljs.core.next.call(null,seq32180);
return sablono.core.mail_to32179.cljs$core$IFn$_invoke$arity$variadic(G__32181,seq32180__$1);
});


sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to32179);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list32189 = (function sablono$core$unordered_list32189(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__25570__auto__ = (function sablono$core$unordered_list32189_$_iter__32194(s__32195){
return (new cljs.core.LazySeq(null,(function (){
var s__32195__$1 = s__32195;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__32195__$1);
if(temp__4657__auto__){
var s__32195__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__32195__$2)){
var c__25568__auto__ = cljs.core.chunk_first.call(null,s__32195__$2);
var size__25569__auto__ = cljs.core.count.call(null,c__25568__auto__);
var b__32197 = cljs.core.chunk_buffer.call(null,size__25569__auto__);
if((function (){var i__32196 = (0);
while(true){
if((i__32196 < size__25569__auto__)){
var x = cljs.core._nth.call(null,c__25568__auto__,i__32196);
cljs.core.chunk_append.call(null,b__32197,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__32198 = (i__32196 + (1));
i__32196 = G__32198;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32197),sablono$core$unordered_list32189_$_iter__32194.call(null,cljs.core.chunk_rest.call(null,s__32195__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32197),null);
}
} else {
var x = cljs.core.first.call(null,s__32195__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list32189_$_iter__32194.call(null,cljs.core.rest.call(null,s__32195__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__25570__auto__.call(null,coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list32189);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list32199 = (function sablono$core$ordered_list32199(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__25570__auto__ = (function sablono$core$ordered_list32199_$_iter__32204(s__32205){
return (new cljs.core.LazySeq(null,(function (){
var s__32205__$1 = s__32205;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__32205__$1);
if(temp__4657__auto__){
var s__32205__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__32205__$2)){
var c__25568__auto__ = cljs.core.chunk_first.call(null,s__32205__$2);
var size__25569__auto__ = cljs.core.count.call(null,c__25568__auto__);
var b__32207 = cljs.core.chunk_buffer.call(null,size__25569__auto__);
if((function (){var i__32206 = (0);
while(true){
if((i__32206 < size__25569__auto__)){
var x = cljs.core._nth.call(null,c__25568__auto__,i__32206);
cljs.core.chunk_append.call(null,b__32207,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__32208 = (i__32206 + (1));
i__32206 = G__32208;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32207),sablono$core$ordered_list32199_$_iter__32204.call(null,cljs.core.chunk_rest.call(null,s__32205__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32207),null);
}
} else {
var x = cljs.core.first.call(null,s__32205__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list32199_$_iter__32204.call(null,cljs.core.rest.call(null,s__32205__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__25570__auto__.call(null,coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list32199);
/**
 * Create an image element.
 */
sablono.core.image32209 = (function sablono$core$image32209(var_args){
var args32210 = [];
var len__25865__auto___32213 = arguments.length;
var i__25866__auto___32214 = (0);
while(true){
if((i__25866__auto___32214 < len__25865__auto___32213)){
args32210.push((arguments[i__25866__auto___32214]));

var G__32215 = (i__25866__auto___32214 + (1));
i__25866__auto___32214 = G__32215;
continue;
} else {
}
break;
}

var G__32212 = args32210.length;
switch (G__32212) {
case 1:
return sablono.core.image32209.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image32209.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32210.length)].join('')));

}
});

sablono.core.image32209.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image32209.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image32209.cljs$lang$maxFixedArity = 2;


sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image32209);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__32217_SHARP_,p2__32218_SHARP_){
return [cljs.core.str(p1__32217_SHARP_),cljs.core.str("["),cljs.core.str(p2__32218_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__32219_SHARP_,p2__32220_SHARP_){
return [cljs.core.str(p1__32219_SHARP_),cljs.core.str("-"),cljs.core.str(p2__32220_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__24790__auto__ = value;
if(cljs.core.truth_(or__24790__auto__)){
return or__24790__auto__;
} else {
return undefined;
}
})()], null)], null);
});
/**
 * Creates a color input field.
 */
sablono.core.color_field32221 = (function sablono$core$color_field32221(var_args){
var args32222 = [];
var len__25865__auto___32289 = arguments.length;
var i__25866__auto___32290 = (0);
while(true){
if((i__25866__auto___32290 < len__25865__auto___32289)){
args32222.push((arguments[i__25866__auto___32290]));

var G__32291 = (i__25866__auto___32290 + (1));
i__25866__auto___32290 = G__32291;
continue;
} else {
}
break;
}

var G__32224 = args32222.length;
switch (G__32224) {
case 1:
return sablono.core.color_field32221.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field32221.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32222.length)].join('')));

}
});

sablono.core.color_field32221.cljs$core$IFn$_invoke$arity$1 = (function (name__32136__auto__){
return sablono.core.color_field32221.call(null,name__32136__auto__,null);
});

sablono.core.color_field32221.cljs$core$IFn$_invoke$arity$2 = (function (name__32136__auto__,value__32137__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__32136__auto__,value__32137__auto__);
});

sablono.core.color_field32221.cljs$lang$maxFixedArity = 2;


sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field32221);

/**
 * Creates a date input field.
 */
sablono.core.date_field32225 = (function sablono$core$date_field32225(var_args){
var args32226 = [];
var len__25865__auto___32293 = arguments.length;
var i__25866__auto___32294 = (0);
while(true){
if((i__25866__auto___32294 < len__25865__auto___32293)){
args32226.push((arguments[i__25866__auto___32294]));

var G__32295 = (i__25866__auto___32294 + (1));
i__25866__auto___32294 = G__32295;
continue;
} else {
}
break;
}

var G__32228 = args32226.length;
switch (G__32228) {
case 1:
return sablono.core.date_field32225.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field32225.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32226.length)].join('')));

}
});

sablono.core.date_field32225.cljs$core$IFn$_invoke$arity$1 = (function (name__32136__auto__){
return sablono.core.date_field32225.call(null,name__32136__auto__,null);
});

sablono.core.date_field32225.cljs$core$IFn$_invoke$arity$2 = (function (name__32136__auto__,value__32137__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__32136__auto__,value__32137__auto__);
});

sablono.core.date_field32225.cljs$lang$maxFixedArity = 2;


sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field32225);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field32229 = (function sablono$core$datetime_field32229(var_args){
var args32230 = [];
var len__25865__auto___32297 = arguments.length;
var i__25866__auto___32298 = (0);
while(true){
if((i__25866__auto___32298 < len__25865__auto___32297)){
args32230.push((arguments[i__25866__auto___32298]));

var G__32299 = (i__25866__auto___32298 + (1));
i__25866__auto___32298 = G__32299;
continue;
} else {
}
break;
}

var G__32232 = args32230.length;
switch (G__32232) {
case 1:
return sablono.core.datetime_field32229.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field32229.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32230.length)].join('')));

}
});

sablono.core.datetime_field32229.cljs$core$IFn$_invoke$arity$1 = (function (name__32136__auto__){
return sablono.core.datetime_field32229.call(null,name__32136__auto__,null);
});

sablono.core.datetime_field32229.cljs$core$IFn$_invoke$arity$2 = (function (name__32136__auto__,value__32137__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__32136__auto__,value__32137__auto__);
});

sablono.core.datetime_field32229.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field32229);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field32233 = (function sablono$core$datetime_local_field32233(var_args){
var args32234 = [];
var len__25865__auto___32301 = arguments.length;
var i__25866__auto___32302 = (0);
while(true){
if((i__25866__auto___32302 < len__25865__auto___32301)){
args32234.push((arguments[i__25866__auto___32302]));

var G__32303 = (i__25866__auto___32302 + (1));
i__25866__auto___32302 = G__32303;
continue;
} else {
}
break;
}

var G__32236 = args32234.length;
switch (G__32236) {
case 1:
return sablono.core.datetime_local_field32233.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field32233.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32234.length)].join('')));

}
});

sablono.core.datetime_local_field32233.cljs$core$IFn$_invoke$arity$1 = (function (name__32136__auto__){
return sablono.core.datetime_local_field32233.call(null,name__32136__auto__,null);
});

sablono.core.datetime_local_field32233.cljs$core$IFn$_invoke$arity$2 = (function (name__32136__auto__,value__32137__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__32136__auto__,value__32137__auto__);
});

sablono.core.datetime_local_field32233.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field32233);

/**
 * Creates a email input field.
 */
sablono.core.email_field32237 = (function sablono$core$email_field32237(var_args){
var args32238 = [];
var len__25865__auto___32305 = arguments.length;
var i__25866__auto___32306 = (0);
while(true){
if((i__25866__auto___32306 < len__25865__auto___32305)){
args32238.push((arguments[i__25866__auto___32306]));

var G__32307 = (i__25866__auto___32306 + (1));
i__25866__auto___32306 = G__32307;
continue;
} else {
}
break;
}

var G__32240 = args32238.length;
switch (G__32240) {
case 1:
return sablono.core.email_field32237.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field32237.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32238.length)].join('')));

}
});

sablono.core.email_field32237.cljs$core$IFn$_invoke$arity$1 = (function (name__32136__auto__){
return sablono.core.email_field32237.call(null,name__32136__auto__,null);
});

sablono.core.email_field32237.cljs$core$IFn$_invoke$arity$2 = (function (name__32136__auto__,value__32137__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__32136__auto__,value__32137__auto__);
});

sablono.core.email_field32237.cljs$lang$maxFixedArity = 2;


sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field32237);

/**
 * Creates a file input field.
 */
sablono.core.file_field32241 = (function sablono$core$file_field32241(var_args){
var args32242 = [];
var len__25865__auto___32309 = arguments.length;
var i__25866__auto___32310 = (0);
while(true){
if((i__25866__auto___32310 < len__25865__auto___32309)){
args32242.push((arguments[i__25866__auto___32310]));

var G__32311 = (i__25866__auto___32310 + (1));
i__25866__auto___32310 = G__32311;
continue;
} else {
}
break;
}

var G__32244 = args32242.length;
switch (G__32244) {
case 1:
return sablono.core.file_field32241.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field32241.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32242.length)].join('')));

}
});

sablono.core.file_field32241.cljs$core$IFn$_invoke$arity$1 = (function (name__32136__auto__){
return sablono.core.file_field32241.call(null,name__32136__auto__,null);
});

sablono.core.file_field32241.cljs$core$IFn$_invoke$arity$2 = (function (name__32136__auto__,value__32137__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__32136__auto__,value__32137__auto__);
});

sablono.core.file_field32241.cljs$lang$maxFixedArity = 2;


sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field32241);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field32245 = (function sablono$core$hidden_field32245(var_args){
var args32246 = [];
var len__25865__auto___32313 = arguments.length;
var i__25866__auto___32314 = (0);
while(true){
if((i__25866__auto___32314 < len__25865__auto___32313)){
args32246.push((arguments[i__25866__auto___32314]));

var G__32315 = (i__25866__auto___32314 + (1));
i__25866__auto___32314 = G__32315;
continue;
} else {
}
break;
}

var G__32248 = args32246.length;
switch (G__32248) {
case 1:
return sablono.core.hidden_field32245.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field32245.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32246.length)].join('')));

}
});

sablono.core.hidden_field32245.cljs$core$IFn$_invoke$arity$1 = (function (name__32136__auto__){
return sablono.core.hidden_field32245.call(null,name__32136__auto__,null);
});

sablono.core.hidden_field32245.cljs$core$IFn$_invoke$arity$2 = (function (name__32136__auto__,value__32137__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__32136__auto__,value__32137__auto__);
});

sablono.core.hidden_field32245.cljs$lang$maxFixedArity = 2;


sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field32245);

/**
 * Creates a month input field.
 */
sablono.core.month_field32249 = (function sablono$core$month_field32249(var_args){
var args32250 = [];
var len__25865__auto___32317 = arguments.length;
var i__25866__auto___32318 = (0);
while(true){
if((i__25866__auto___32318 < len__25865__auto___32317)){
args32250.push((arguments[i__25866__auto___32318]));

var G__32319 = (i__25866__auto___32318 + (1));
i__25866__auto___32318 = G__32319;
continue;
} else {
}
break;
}

var G__32252 = args32250.length;
switch (G__32252) {
case 1:
return sablono.core.month_field32249.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field32249.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32250.length)].join('')));

}
});

sablono.core.month_field32249.cljs$core$IFn$_invoke$arity$1 = (function (name__32136__auto__){
return sablono.core.month_field32249.call(null,name__32136__auto__,null);
});

sablono.core.month_field32249.cljs$core$IFn$_invoke$arity$2 = (function (name__32136__auto__,value__32137__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__32136__auto__,value__32137__auto__);
});

sablono.core.month_field32249.cljs$lang$maxFixedArity = 2;


sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field32249);

/**
 * Creates a number input field.
 */
sablono.core.number_field32253 = (function sablono$core$number_field32253(var_args){
var args32254 = [];
var len__25865__auto___32321 = arguments.length;
var i__25866__auto___32322 = (0);
while(true){
if((i__25866__auto___32322 < len__25865__auto___32321)){
args32254.push((arguments[i__25866__auto___32322]));

var G__32323 = (i__25866__auto___32322 + (1));
i__25866__auto___32322 = G__32323;
continue;
} else {
}
break;
}

var G__32256 = args32254.length;
switch (G__32256) {
case 1:
return sablono.core.number_field32253.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field32253.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32254.length)].join('')));

}
});

sablono.core.number_field32253.cljs$core$IFn$_invoke$arity$1 = (function (name__32136__auto__){
return sablono.core.number_field32253.call(null,name__32136__auto__,null);
});

sablono.core.number_field32253.cljs$core$IFn$_invoke$arity$2 = (function (name__32136__auto__,value__32137__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__32136__auto__,value__32137__auto__);
});

sablono.core.number_field32253.cljs$lang$maxFixedArity = 2;


sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field32253);

/**
 * Creates a password input field.
 */
sablono.core.password_field32257 = (function sablono$core$password_field32257(var_args){
var args32258 = [];
var len__25865__auto___32325 = arguments.length;
var i__25866__auto___32326 = (0);
while(true){
if((i__25866__auto___32326 < len__25865__auto___32325)){
args32258.push((arguments[i__25866__auto___32326]));

var G__32327 = (i__25866__auto___32326 + (1));
i__25866__auto___32326 = G__32327;
continue;
} else {
}
break;
}

var G__32260 = args32258.length;
switch (G__32260) {
case 1:
return sablono.core.password_field32257.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field32257.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32258.length)].join('')));

}
});

sablono.core.password_field32257.cljs$core$IFn$_invoke$arity$1 = (function (name__32136__auto__){
return sablono.core.password_field32257.call(null,name__32136__auto__,null);
});

sablono.core.password_field32257.cljs$core$IFn$_invoke$arity$2 = (function (name__32136__auto__,value__32137__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__32136__auto__,value__32137__auto__);
});

sablono.core.password_field32257.cljs$lang$maxFixedArity = 2;


sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field32257);

/**
 * Creates a range input field.
 */
sablono.core.range_field32261 = (function sablono$core$range_field32261(var_args){
var args32262 = [];
var len__25865__auto___32329 = arguments.length;
var i__25866__auto___32330 = (0);
while(true){
if((i__25866__auto___32330 < len__25865__auto___32329)){
args32262.push((arguments[i__25866__auto___32330]));

var G__32331 = (i__25866__auto___32330 + (1));
i__25866__auto___32330 = G__32331;
continue;
} else {
}
break;
}

var G__32264 = args32262.length;
switch (G__32264) {
case 1:
return sablono.core.range_field32261.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field32261.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32262.length)].join('')));

}
});

sablono.core.range_field32261.cljs$core$IFn$_invoke$arity$1 = (function (name__32136__auto__){
return sablono.core.range_field32261.call(null,name__32136__auto__,null);
});

sablono.core.range_field32261.cljs$core$IFn$_invoke$arity$2 = (function (name__32136__auto__,value__32137__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__32136__auto__,value__32137__auto__);
});

sablono.core.range_field32261.cljs$lang$maxFixedArity = 2;


sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field32261);

/**
 * Creates a search input field.
 */
sablono.core.search_field32265 = (function sablono$core$search_field32265(var_args){
var args32266 = [];
var len__25865__auto___32333 = arguments.length;
var i__25866__auto___32334 = (0);
while(true){
if((i__25866__auto___32334 < len__25865__auto___32333)){
args32266.push((arguments[i__25866__auto___32334]));

var G__32335 = (i__25866__auto___32334 + (1));
i__25866__auto___32334 = G__32335;
continue;
} else {
}
break;
}

var G__32268 = args32266.length;
switch (G__32268) {
case 1:
return sablono.core.search_field32265.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field32265.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32266.length)].join('')));

}
});

sablono.core.search_field32265.cljs$core$IFn$_invoke$arity$1 = (function (name__32136__auto__){
return sablono.core.search_field32265.call(null,name__32136__auto__,null);
});

sablono.core.search_field32265.cljs$core$IFn$_invoke$arity$2 = (function (name__32136__auto__,value__32137__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__32136__auto__,value__32137__auto__);
});

sablono.core.search_field32265.cljs$lang$maxFixedArity = 2;


sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field32265);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field32269 = (function sablono$core$tel_field32269(var_args){
var args32270 = [];
var len__25865__auto___32337 = arguments.length;
var i__25866__auto___32338 = (0);
while(true){
if((i__25866__auto___32338 < len__25865__auto___32337)){
args32270.push((arguments[i__25866__auto___32338]));

var G__32339 = (i__25866__auto___32338 + (1));
i__25866__auto___32338 = G__32339;
continue;
} else {
}
break;
}

var G__32272 = args32270.length;
switch (G__32272) {
case 1:
return sablono.core.tel_field32269.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field32269.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32270.length)].join('')));

}
});

sablono.core.tel_field32269.cljs$core$IFn$_invoke$arity$1 = (function (name__32136__auto__){
return sablono.core.tel_field32269.call(null,name__32136__auto__,null);
});

sablono.core.tel_field32269.cljs$core$IFn$_invoke$arity$2 = (function (name__32136__auto__,value__32137__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__32136__auto__,value__32137__auto__);
});

sablono.core.tel_field32269.cljs$lang$maxFixedArity = 2;


sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field32269);

/**
 * Creates a text input field.
 */
sablono.core.text_field32273 = (function sablono$core$text_field32273(var_args){
var args32274 = [];
var len__25865__auto___32341 = arguments.length;
var i__25866__auto___32342 = (0);
while(true){
if((i__25866__auto___32342 < len__25865__auto___32341)){
args32274.push((arguments[i__25866__auto___32342]));

var G__32343 = (i__25866__auto___32342 + (1));
i__25866__auto___32342 = G__32343;
continue;
} else {
}
break;
}

var G__32276 = args32274.length;
switch (G__32276) {
case 1:
return sablono.core.text_field32273.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field32273.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32274.length)].join('')));

}
});

sablono.core.text_field32273.cljs$core$IFn$_invoke$arity$1 = (function (name__32136__auto__){
return sablono.core.text_field32273.call(null,name__32136__auto__,null);
});

sablono.core.text_field32273.cljs$core$IFn$_invoke$arity$2 = (function (name__32136__auto__,value__32137__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__32136__auto__,value__32137__auto__);
});

sablono.core.text_field32273.cljs$lang$maxFixedArity = 2;


sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field32273);

/**
 * Creates a time input field.
 */
sablono.core.time_field32277 = (function sablono$core$time_field32277(var_args){
var args32278 = [];
var len__25865__auto___32345 = arguments.length;
var i__25866__auto___32346 = (0);
while(true){
if((i__25866__auto___32346 < len__25865__auto___32345)){
args32278.push((arguments[i__25866__auto___32346]));

var G__32347 = (i__25866__auto___32346 + (1));
i__25866__auto___32346 = G__32347;
continue;
} else {
}
break;
}

var G__32280 = args32278.length;
switch (G__32280) {
case 1:
return sablono.core.time_field32277.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field32277.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32278.length)].join('')));

}
});

sablono.core.time_field32277.cljs$core$IFn$_invoke$arity$1 = (function (name__32136__auto__){
return sablono.core.time_field32277.call(null,name__32136__auto__,null);
});

sablono.core.time_field32277.cljs$core$IFn$_invoke$arity$2 = (function (name__32136__auto__,value__32137__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__32136__auto__,value__32137__auto__);
});

sablono.core.time_field32277.cljs$lang$maxFixedArity = 2;


sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field32277);

/**
 * Creates a url input field.
 */
sablono.core.url_field32281 = (function sablono$core$url_field32281(var_args){
var args32282 = [];
var len__25865__auto___32349 = arguments.length;
var i__25866__auto___32350 = (0);
while(true){
if((i__25866__auto___32350 < len__25865__auto___32349)){
args32282.push((arguments[i__25866__auto___32350]));

var G__32351 = (i__25866__auto___32350 + (1));
i__25866__auto___32350 = G__32351;
continue;
} else {
}
break;
}

var G__32284 = args32282.length;
switch (G__32284) {
case 1:
return sablono.core.url_field32281.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field32281.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32282.length)].join('')));

}
});

sablono.core.url_field32281.cljs$core$IFn$_invoke$arity$1 = (function (name__32136__auto__){
return sablono.core.url_field32281.call(null,name__32136__auto__,null);
});

sablono.core.url_field32281.cljs$core$IFn$_invoke$arity$2 = (function (name__32136__auto__,value__32137__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__32136__auto__,value__32137__auto__);
});

sablono.core.url_field32281.cljs$lang$maxFixedArity = 2;


sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field32281);

/**
 * Creates a week input field.
 */
sablono.core.week_field32285 = (function sablono$core$week_field32285(var_args){
var args32286 = [];
var len__25865__auto___32353 = arguments.length;
var i__25866__auto___32354 = (0);
while(true){
if((i__25866__auto___32354 < len__25865__auto___32353)){
args32286.push((arguments[i__25866__auto___32354]));

var G__32355 = (i__25866__auto___32354 + (1));
i__25866__auto___32354 = G__32355;
continue;
} else {
}
break;
}

var G__32288 = args32286.length;
switch (G__32288) {
case 1:
return sablono.core.week_field32285.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field32285.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32286.length)].join('')));

}
});

sablono.core.week_field32285.cljs$core$IFn$_invoke$arity$1 = (function (name__32136__auto__){
return sablono.core.week_field32285.call(null,name__32136__auto__,null);
});

sablono.core.week_field32285.cljs$core$IFn$_invoke$arity$2 = (function (name__32136__auto__,value__32137__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__32136__auto__,value__32137__auto__);
});

sablono.core.week_field32285.cljs$lang$maxFixedArity = 2;


sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field32285);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box32357 = (function sablono$core$check_box32357(var_args){
var args32358 = [];
var len__25865__auto___32361 = arguments.length;
var i__25866__auto___32362 = (0);
while(true){
if((i__25866__auto___32362 < len__25865__auto___32361)){
args32358.push((arguments[i__25866__auto___32362]));

var G__32363 = (i__25866__auto___32362 + (1));
i__25866__auto___32362 = G__32363;
continue;
} else {
}
break;
}

var G__32360 = args32358.length;
switch (G__32360) {
case 1:
return sablono.core.check_box32357.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box32357.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box32357.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32358.length)].join('')));

}
});

sablono.core.check_box32357.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box32357.call(null,name,null);
});

sablono.core.check_box32357.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box32357.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box32357.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__24790__auto__ = value;
if(cljs.core.truth_(or__24790__auto__)){
return or__24790__auto__;
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box32357.cljs$lang$maxFixedArity = 3;


sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box32357);
/**
 * Creates a radio button.
 */
sablono.core.radio_button32365 = (function sablono$core$radio_button32365(var_args){
var args32366 = [];
var len__25865__auto___32369 = arguments.length;
var i__25866__auto___32370 = (0);
while(true){
if((i__25866__auto___32370 < len__25865__auto___32369)){
args32366.push((arguments[i__25866__auto___32370]));

var G__32371 = (i__25866__auto___32370 + (1));
i__25866__auto___32370 = G__32371;
continue;
} else {
}
break;
}

var G__32368 = args32366.length;
switch (G__32368) {
case 1:
return sablono.core.radio_button32365.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button32365.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button32365.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32366.length)].join('')));

}
});

sablono.core.radio_button32365.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button32365.call(null,group,null);
});

sablono.core.radio_button32365.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button32365.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button32365.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__24790__auto__ = value;
if(cljs.core.truth_(or__24790__auto__)){
return or__24790__auto__;
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button32365.cljs$lang$maxFixedArity = 3;


sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button32365);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options32373 = (function sablono$core$select_options32373(coll){
var iter__25570__auto__ = (function sablono$core$select_options32373_$_iter__32390(s__32391){
return (new cljs.core.LazySeq(null,(function (){
var s__32391__$1 = s__32391;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__32391__$1);
if(temp__4657__auto__){
var s__32391__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__32391__$2)){
var c__25568__auto__ = cljs.core.chunk_first.call(null,s__32391__$2);
var size__25569__auto__ = cljs.core.count.call(null,c__25568__auto__);
var b__32393 = cljs.core.chunk_buffer.call(null,size__25569__auto__);
if((function (){var i__32392 = (0);
while(true){
if((i__32392 < size__25569__auto__)){
var x = cljs.core._nth.call(null,c__25568__auto__,i__32392);
cljs.core.chunk_append.call(null,b__32393,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__32400 = x;
var text = cljs.core.nth.call(null,vec__32400,(0),null);
var val = cljs.core.nth.call(null,vec__32400,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__32400,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options32373.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__32406 = (i__32392 + (1));
i__32392 = G__32406;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32393),sablono$core$select_options32373_$_iter__32390.call(null,cljs.core.chunk_rest.call(null,s__32391__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32393),null);
}
} else {
var x = cljs.core.first.call(null,s__32391__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__32403 = x;
var text = cljs.core.nth.call(null,vec__32403,(0),null);
var val = cljs.core.nth.call(null,vec__32403,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__32403,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options32373.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options32373_$_iter__32390.call(null,cljs.core.rest.call(null,s__32391__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__25570__auto__.call(null,coll);
});

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options32373);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down32407 = (function sablono$core$drop_down32407(var_args){
var args32408 = [];
var len__25865__auto___32411 = arguments.length;
var i__25866__auto___32412 = (0);
while(true){
if((i__25866__auto___32412 < len__25865__auto___32411)){
args32408.push((arguments[i__25866__auto___32412]));

var G__32413 = (i__25866__auto___32412 + (1));
i__25866__auto___32412 = G__32413;
continue;
} else {
}
break;
}

var G__32410 = args32408.length;
switch (G__32410) {
case 2:
return sablono.core.drop_down32407.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down32407.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32408.length)].join('')));

}
});

sablono.core.drop_down32407.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down32407.call(null,name,options,null);
});

sablono.core.drop_down32407.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down32407.cljs$lang$maxFixedArity = 3;


sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down32407);
/**
 * Creates a text area element.
 */
sablono.core.text_area32415 = (function sablono$core$text_area32415(var_args){
var args32416 = [];
var len__25865__auto___32419 = arguments.length;
var i__25866__auto___32420 = (0);
while(true){
if((i__25866__auto___32420 < len__25865__auto___32419)){
args32416.push((arguments[i__25866__auto___32420]));

var G__32421 = (i__25866__auto___32420 + (1));
i__25866__auto___32420 = G__32421;
continue;
} else {
}
break;
}

var G__32418 = args32416.length;
switch (G__32418) {
case 1:
return sablono.core.text_area32415.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area32415.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32416.length)].join('')));

}
});

sablono.core.text_area32415.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area32415.call(null,name,null);
});

sablono.core.text_area32415.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__24790__auto__ = value;
if(cljs.core.truth_(or__24790__auto__)){
return or__24790__auto__;
} else {
return undefined;
}
})()], null)], null);
});

sablono.core.text_area32415.cljs$lang$maxFixedArity = 2;


sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area32415);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label32423 = (function sablono$core$label32423(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label32423);
/**
 * Creates a submit button.
 */
sablono.core.submit_button32424 = (function sablono$core$submit_button32424(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button32424);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button32425 = (function sablono$core$reset_button32425(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button32425);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to32426 = (function sablono$core$form_to32426(var_args){
var args__25872__auto__ = [];
var len__25865__auto___32433 = arguments.length;
var i__25866__auto___32434 = (0);
while(true){
if((i__25866__auto___32434 < len__25865__auto___32433)){
args__25872__auto__.push((arguments[i__25866__auto___32434]));

var G__32435 = (i__25866__auto___32434 + (1));
i__25866__auto___32434 = G__32435;
continue;
} else {
}
break;
}

var argseq__25873__auto__ = ((((1) < args__25872__auto__.length))?(new cljs.core.IndexedSeq(args__25872__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to32426.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25873__auto__);
});

sablono.core.form_to32426.cljs$core$IFn$_invoke$arity$variadic = (function (p__32429,body){
var vec__32430 = p__32429;
var method = cljs.core.nth.call(null,vec__32430,(0),null);
var action = cljs.core.nth.call(null,vec__32430,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to32426.cljs$lang$maxFixedArity = (1);

sablono.core.form_to32426.cljs$lang$applyTo = (function (seq32427){
var G__32428 = cljs.core.first.call(null,seq32427);
var seq32427__$1 = cljs.core.next.call(null,seq32427);
return sablono.core.form_to32426.cljs$core$IFn$_invoke$arity$variadic(G__32428,seq32427__$1);
});


sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to32426);

//# sourceMappingURL=core.js.map?rel=1476131797914