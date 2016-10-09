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
var G__69018__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__69015 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var seq__69016 = cljs.core.seq.call(null,vec__69015);
var first__69017 = cljs.core.first.call(null,seq__69016);
var seq__69016__$1 = cljs.core.next.call(null,seq__69016);
var tag = first__69017;
var body = seq__69016__$1;
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__69018 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__69019__i = 0, G__69019__a = new Array(arguments.length -  0);
while (G__69019__i < G__69019__a.length) {G__69019__a[G__69019__i] = arguments[G__69019__i + 0]; ++G__69019__i;}
  args = new cljs.core.IndexedSeq(G__69019__a,0);
} 
return G__69018__delegate.call(this,args);};
G__69018.cljs$lang$maxFixedArity = 0;
G__69018.cljs$lang$applyTo = (function (arglist__69020){
var args = cljs.core.seq(arglist__69020);
return G__69018__delegate(args);
});
G__69018.cljs$core$IFn$_invoke$arity$variadic = G__69018__delegate;
return G__69018;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__48327__auto__ = (function sablono$core$update_arglists_$_iter__69025(s__69026){
return (new cljs.core.LazySeq(null,(function (){
var s__69026__$1 = s__69026;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__69026__$1);
if(temp__4657__auto__){
var s__69026__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__69026__$2)){
var c__48325__auto__ = cljs.core.chunk_first.call(null,s__69026__$2);
var size__48326__auto__ = cljs.core.count.call(null,c__48325__auto__);
var b__69028 = cljs.core.chunk_buffer.call(null,size__48326__auto__);
if((function (){var i__69027 = (0);
while(true){
if((i__69027 < size__48326__auto__)){
var args = cljs.core._nth.call(null,c__48325__auto__,i__69027);
cljs.core.chunk_append.call(null,b__69028,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__69029 = (i__69027 + (1));
i__69027 = G__69029;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__69028),sablono$core$update_arglists_$_iter__69025.call(null,cljs.core.chunk_rest.call(null,s__69026__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__69028),null);
}
} else {
var args = cljs.core.first.call(null,s__69026__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__69025.call(null,cljs.core.rest.call(null,s__69026__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__48327__auto__.call(null,arglists);
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__48629__auto__ = [];
var len__48622__auto___69035 = arguments.length;
var i__48623__auto___69036 = (0);
while(true){
if((i__48623__auto___69036 < len__48622__auto___69035)){
args__48629__auto__.push((arguments[i__48623__auto___69036]));

var G__69037 = (i__48623__auto___69036 + (1));
i__48623__auto___69036 = G__69037;
continue;
} else {
}
break;
}

var argseq__48630__auto__ = ((((0) < args__48629__auto__.length))?(new cljs.core.IndexedSeq(args__48629__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__48630__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__48327__auto__ = (function sablono$core$iter__69031(s__69032){
return (new cljs.core.LazySeq(null,(function (){
var s__69032__$1 = s__69032;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__69032__$1);
if(temp__4657__auto__){
var s__69032__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__69032__$2)){
var c__48325__auto__ = cljs.core.chunk_first.call(null,s__69032__$2);
var size__48326__auto__ = cljs.core.count.call(null,c__48325__auto__);
var b__69034 = cljs.core.chunk_buffer.call(null,size__48326__auto__);
if((function (){var i__69033 = (0);
while(true){
if((i__69033 < size__48326__auto__)){
var style = cljs.core._nth.call(null,c__48325__auto__,i__69033);
cljs.core.chunk_append.call(null,b__69034,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__69038 = (i__69033 + (1));
i__69033 = G__69038;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__69034),sablono$core$iter__69031.call(null,cljs.core.chunk_rest.call(null,s__69032__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__69034),null);
}
} else {
var style = cljs.core.first.call(null,s__69032__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__69031.call(null,cljs.core.rest.call(null,s__69032__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__48327__auto__.call(null,styles);
});

sablono.core.include_css.cljs$lang$maxFixedArity = (0);

sablono.core.include_css.cljs$lang$applyTo = (function (seq69030){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq69030));
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
sablono.core.link_to69039 = (function sablono$core$link_to69039(var_args){
var args__48629__auto__ = [];
var len__48622__auto___69042 = arguments.length;
var i__48623__auto___69043 = (0);
while(true){
if((i__48623__auto___69043 < len__48622__auto___69042)){
args__48629__auto__.push((arguments[i__48623__auto___69043]));

var G__69044 = (i__48623__auto___69043 + (1));
i__48623__auto___69043 = G__69044;
continue;
} else {
}
break;
}

var argseq__48630__auto__ = ((((1) < args__48629__auto__.length))?(new cljs.core.IndexedSeq(args__48629__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to69039.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__48630__auto__);
});

sablono.core.link_to69039.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to69039.cljs$lang$maxFixedArity = (1);

sablono.core.link_to69039.cljs$lang$applyTo = (function (seq69040){
var G__69041 = cljs.core.first.call(null,seq69040);
var seq69040__$1 = cljs.core.next.call(null,seq69040);
return sablono.core.link_to69039.cljs$core$IFn$_invoke$arity$variadic(G__69041,seq69040__$1);
});


sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to69039);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to69045 = (function sablono$core$mail_to69045(var_args){
var args__48629__auto__ = [];
var len__48622__auto___69052 = arguments.length;
var i__48623__auto___69053 = (0);
while(true){
if((i__48623__auto___69053 < len__48622__auto___69052)){
args__48629__auto__.push((arguments[i__48623__auto___69053]));

var G__69054 = (i__48623__auto___69053 + (1));
i__48623__auto___69053 = G__69054;
continue;
} else {
}
break;
}

var argseq__48630__auto__ = ((((1) < args__48629__auto__.length))?(new cljs.core.IndexedSeq(args__48629__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to69045.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__48630__auto__);
});

sablono.core.mail_to69045.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__69048){
var vec__69049 = p__69048;
var content = cljs.core.nth.call(null,vec__69049,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__47547__auto__ = content;
if(cljs.core.truth_(or__47547__auto__)){
return or__47547__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to69045.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to69045.cljs$lang$applyTo = (function (seq69046){
var G__69047 = cljs.core.first.call(null,seq69046);
var seq69046__$1 = cljs.core.next.call(null,seq69046);
return sablono.core.mail_to69045.cljs$core$IFn$_invoke$arity$variadic(G__69047,seq69046__$1);
});


sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to69045);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list69055 = (function sablono$core$unordered_list69055(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__48327__auto__ = (function sablono$core$unordered_list69055_$_iter__69060(s__69061){
return (new cljs.core.LazySeq(null,(function (){
var s__69061__$1 = s__69061;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__69061__$1);
if(temp__4657__auto__){
var s__69061__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__69061__$2)){
var c__48325__auto__ = cljs.core.chunk_first.call(null,s__69061__$2);
var size__48326__auto__ = cljs.core.count.call(null,c__48325__auto__);
var b__69063 = cljs.core.chunk_buffer.call(null,size__48326__auto__);
if((function (){var i__69062 = (0);
while(true){
if((i__69062 < size__48326__auto__)){
var x = cljs.core._nth.call(null,c__48325__auto__,i__69062);
cljs.core.chunk_append.call(null,b__69063,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__69064 = (i__69062 + (1));
i__69062 = G__69064;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__69063),sablono$core$unordered_list69055_$_iter__69060.call(null,cljs.core.chunk_rest.call(null,s__69061__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__69063),null);
}
} else {
var x = cljs.core.first.call(null,s__69061__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list69055_$_iter__69060.call(null,cljs.core.rest.call(null,s__69061__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__48327__auto__.call(null,coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list69055);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list69065 = (function sablono$core$ordered_list69065(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__48327__auto__ = (function sablono$core$ordered_list69065_$_iter__69070(s__69071){
return (new cljs.core.LazySeq(null,(function (){
var s__69071__$1 = s__69071;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__69071__$1);
if(temp__4657__auto__){
var s__69071__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__69071__$2)){
var c__48325__auto__ = cljs.core.chunk_first.call(null,s__69071__$2);
var size__48326__auto__ = cljs.core.count.call(null,c__48325__auto__);
var b__69073 = cljs.core.chunk_buffer.call(null,size__48326__auto__);
if((function (){var i__69072 = (0);
while(true){
if((i__69072 < size__48326__auto__)){
var x = cljs.core._nth.call(null,c__48325__auto__,i__69072);
cljs.core.chunk_append.call(null,b__69073,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__69074 = (i__69072 + (1));
i__69072 = G__69074;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__69073),sablono$core$ordered_list69065_$_iter__69070.call(null,cljs.core.chunk_rest.call(null,s__69071__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__69073),null);
}
} else {
var x = cljs.core.first.call(null,s__69071__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list69065_$_iter__69070.call(null,cljs.core.rest.call(null,s__69071__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__48327__auto__.call(null,coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list69065);
/**
 * Create an image element.
 */
sablono.core.image69075 = (function sablono$core$image69075(var_args){
var args69076 = [];
var len__48622__auto___69079 = arguments.length;
var i__48623__auto___69080 = (0);
while(true){
if((i__48623__auto___69080 < len__48622__auto___69079)){
args69076.push((arguments[i__48623__auto___69080]));

var G__69081 = (i__48623__auto___69080 + (1));
i__48623__auto___69080 = G__69081;
continue;
} else {
}
break;
}

var G__69078 = args69076.length;
switch (G__69078) {
case 1:
return sablono.core.image69075.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image69075.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args69076.length)].join('')));

}
});

sablono.core.image69075.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image69075.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image69075.cljs$lang$maxFixedArity = 2;


sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image69075);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__69083_SHARP_,p2__69084_SHARP_){
return [cljs.core.str(p1__69083_SHARP_),cljs.core.str("["),cljs.core.str(p2__69084_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__69085_SHARP_,p2__69086_SHARP_){
return [cljs.core.str(p1__69085_SHARP_),cljs.core.str("-"),cljs.core.str(p2__69086_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__47547__auto__ = value;
if(cljs.core.truth_(or__47547__auto__)){
return or__47547__auto__;
} else {
return undefined;
}
})()], null)], null);
});
/**
 * Creates a color input field.
 */
sablono.core.color_field69087 = (function sablono$core$color_field69087(var_args){
var args69088 = [];
var len__48622__auto___69155 = arguments.length;
var i__48623__auto___69156 = (0);
while(true){
if((i__48623__auto___69156 < len__48622__auto___69155)){
args69088.push((arguments[i__48623__auto___69156]));

var G__69157 = (i__48623__auto___69156 + (1));
i__48623__auto___69156 = G__69157;
continue;
} else {
}
break;
}

var G__69090 = args69088.length;
switch (G__69090) {
case 1:
return sablono.core.color_field69087.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field69087.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args69088.length)].join('')));

}
});

sablono.core.color_field69087.cljs$core$IFn$_invoke$arity$1 = (function (name__59183__auto__){
return sablono.core.color_field69087.call(null,name__59183__auto__,null);
});

sablono.core.color_field69087.cljs$core$IFn$_invoke$arity$2 = (function (name__59183__auto__,value__59184__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__59183__auto__,value__59184__auto__);
});

sablono.core.color_field69087.cljs$lang$maxFixedArity = 2;


sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field69087);

/**
 * Creates a date input field.
 */
sablono.core.date_field69091 = (function sablono$core$date_field69091(var_args){
var args69092 = [];
var len__48622__auto___69159 = arguments.length;
var i__48623__auto___69160 = (0);
while(true){
if((i__48623__auto___69160 < len__48622__auto___69159)){
args69092.push((arguments[i__48623__auto___69160]));

var G__69161 = (i__48623__auto___69160 + (1));
i__48623__auto___69160 = G__69161;
continue;
} else {
}
break;
}

var G__69094 = args69092.length;
switch (G__69094) {
case 1:
return sablono.core.date_field69091.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field69091.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args69092.length)].join('')));

}
});

sablono.core.date_field69091.cljs$core$IFn$_invoke$arity$1 = (function (name__59183__auto__){
return sablono.core.date_field69091.call(null,name__59183__auto__,null);
});

sablono.core.date_field69091.cljs$core$IFn$_invoke$arity$2 = (function (name__59183__auto__,value__59184__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__59183__auto__,value__59184__auto__);
});

sablono.core.date_field69091.cljs$lang$maxFixedArity = 2;


sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field69091);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field69095 = (function sablono$core$datetime_field69095(var_args){
var args69096 = [];
var len__48622__auto___69163 = arguments.length;
var i__48623__auto___69164 = (0);
while(true){
if((i__48623__auto___69164 < len__48622__auto___69163)){
args69096.push((arguments[i__48623__auto___69164]));

var G__69165 = (i__48623__auto___69164 + (1));
i__48623__auto___69164 = G__69165;
continue;
} else {
}
break;
}

var G__69098 = args69096.length;
switch (G__69098) {
case 1:
return sablono.core.datetime_field69095.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field69095.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args69096.length)].join('')));

}
});

sablono.core.datetime_field69095.cljs$core$IFn$_invoke$arity$1 = (function (name__59183__auto__){
return sablono.core.datetime_field69095.call(null,name__59183__auto__,null);
});

sablono.core.datetime_field69095.cljs$core$IFn$_invoke$arity$2 = (function (name__59183__auto__,value__59184__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__59183__auto__,value__59184__auto__);
});

sablono.core.datetime_field69095.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field69095);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field69099 = (function sablono$core$datetime_local_field69099(var_args){
var args69100 = [];
var len__48622__auto___69167 = arguments.length;
var i__48623__auto___69168 = (0);
while(true){
if((i__48623__auto___69168 < len__48622__auto___69167)){
args69100.push((arguments[i__48623__auto___69168]));

var G__69169 = (i__48623__auto___69168 + (1));
i__48623__auto___69168 = G__69169;
continue;
} else {
}
break;
}

var G__69102 = args69100.length;
switch (G__69102) {
case 1:
return sablono.core.datetime_local_field69099.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field69099.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args69100.length)].join('')));

}
});

sablono.core.datetime_local_field69099.cljs$core$IFn$_invoke$arity$1 = (function (name__59183__auto__){
return sablono.core.datetime_local_field69099.call(null,name__59183__auto__,null);
});

sablono.core.datetime_local_field69099.cljs$core$IFn$_invoke$arity$2 = (function (name__59183__auto__,value__59184__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__59183__auto__,value__59184__auto__);
});

sablono.core.datetime_local_field69099.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field69099);

/**
 * Creates a email input field.
 */
sablono.core.email_field69103 = (function sablono$core$email_field69103(var_args){
var args69104 = [];
var len__48622__auto___69171 = arguments.length;
var i__48623__auto___69172 = (0);
while(true){
if((i__48623__auto___69172 < len__48622__auto___69171)){
args69104.push((arguments[i__48623__auto___69172]));

var G__69173 = (i__48623__auto___69172 + (1));
i__48623__auto___69172 = G__69173;
continue;
} else {
}
break;
}

var G__69106 = args69104.length;
switch (G__69106) {
case 1:
return sablono.core.email_field69103.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field69103.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args69104.length)].join('')));

}
});

sablono.core.email_field69103.cljs$core$IFn$_invoke$arity$1 = (function (name__59183__auto__){
return sablono.core.email_field69103.call(null,name__59183__auto__,null);
});

sablono.core.email_field69103.cljs$core$IFn$_invoke$arity$2 = (function (name__59183__auto__,value__59184__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__59183__auto__,value__59184__auto__);
});

sablono.core.email_field69103.cljs$lang$maxFixedArity = 2;


sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field69103);

/**
 * Creates a file input field.
 */
sablono.core.file_field69107 = (function sablono$core$file_field69107(var_args){
var args69108 = [];
var len__48622__auto___69175 = arguments.length;
var i__48623__auto___69176 = (0);
while(true){
if((i__48623__auto___69176 < len__48622__auto___69175)){
args69108.push((arguments[i__48623__auto___69176]));

var G__69177 = (i__48623__auto___69176 + (1));
i__48623__auto___69176 = G__69177;
continue;
} else {
}
break;
}

var G__69110 = args69108.length;
switch (G__69110) {
case 1:
return sablono.core.file_field69107.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field69107.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args69108.length)].join('')));

}
});

sablono.core.file_field69107.cljs$core$IFn$_invoke$arity$1 = (function (name__59183__auto__){
return sablono.core.file_field69107.call(null,name__59183__auto__,null);
});

sablono.core.file_field69107.cljs$core$IFn$_invoke$arity$2 = (function (name__59183__auto__,value__59184__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__59183__auto__,value__59184__auto__);
});

sablono.core.file_field69107.cljs$lang$maxFixedArity = 2;


sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field69107);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field69111 = (function sablono$core$hidden_field69111(var_args){
var args69112 = [];
var len__48622__auto___69179 = arguments.length;
var i__48623__auto___69180 = (0);
while(true){
if((i__48623__auto___69180 < len__48622__auto___69179)){
args69112.push((arguments[i__48623__auto___69180]));

var G__69181 = (i__48623__auto___69180 + (1));
i__48623__auto___69180 = G__69181;
continue;
} else {
}
break;
}

var G__69114 = args69112.length;
switch (G__69114) {
case 1:
return sablono.core.hidden_field69111.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field69111.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args69112.length)].join('')));

}
});

sablono.core.hidden_field69111.cljs$core$IFn$_invoke$arity$1 = (function (name__59183__auto__){
return sablono.core.hidden_field69111.call(null,name__59183__auto__,null);
});

sablono.core.hidden_field69111.cljs$core$IFn$_invoke$arity$2 = (function (name__59183__auto__,value__59184__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__59183__auto__,value__59184__auto__);
});

sablono.core.hidden_field69111.cljs$lang$maxFixedArity = 2;


sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field69111);

/**
 * Creates a month input field.
 */
sablono.core.month_field69115 = (function sablono$core$month_field69115(var_args){
var args69116 = [];
var len__48622__auto___69183 = arguments.length;
var i__48623__auto___69184 = (0);
while(true){
if((i__48623__auto___69184 < len__48622__auto___69183)){
args69116.push((arguments[i__48623__auto___69184]));

var G__69185 = (i__48623__auto___69184 + (1));
i__48623__auto___69184 = G__69185;
continue;
} else {
}
break;
}

var G__69118 = args69116.length;
switch (G__69118) {
case 1:
return sablono.core.month_field69115.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field69115.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args69116.length)].join('')));

}
});

sablono.core.month_field69115.cljs$core$IFn$_invoke$arity$1 = (function (name__59183__auto__){
return sablono.core.month_field69115.call(null,name__59183__auto__,null);
});

sablono.core.month_field69115.cljs$core$IFn$_invoke$arity$2 = (function (name__59183__auto__,value__59184__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__59183__auto__,value__59184__auto__);
});

sablono.core.month_field69115.cljs$lang$maxFixedArity = 2;


sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field69115);

/**
 * Creates a number input field.
 */
sablono.core.number_field69119 = (function sablono$core$number_field69119(var_args){
var args69120 = [];
var len__48622__auto___69187 = arguments.length;
var i__48623__auto___69188 = (0);
while(true){
if((i__48623__auto___69188 < len__48622__auto___69187)){
args69120.push((arguments[i__48623__auto___69188]));

var G__69189 = (i__48623__auto___69188 + (1));
i__48623__auto___69188 = G__69189;
continue;
} else {
}
break;
}

var G__69122 = args69120.length;
switch (G__69122) {
case 1:
return sablono.core.number_field69119.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field69119.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args69120.length)].join('')));

}
});

sablono.core.number_field69119.cljs$core$IFn$_invoke$arity$1 = (function (name__59183__auto__){
return sablono.core.number_field69119.call(null,name__59183__auto__,null);
});

sablono.core.number_field69119.cljs$core$IFn$_invoke$arity$2 = (function (name__59183__auto__,value__59184__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__59183__auto__,value__59184__auto__);
});

sablono.core.number_field69119.cljs$lang$maxFixedArity = 2;


sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field69119);

/**
 * Creates a password input field.
 */
sablono.core.password_field69123 = (function sablono$core$password_field69123(var_args){
var args69124 = [];
var len__48622__auto___69191 = arguments.length;
var i__48623__auto___69192 = (0);
while(true){
if((i__48623__auto___69192 < len__48622__auto___69191)){
args69124.push((arguments[i__48623__auto___69192]));

var G__69193 = (i__48623__auto___69192 + (1));
i__48623__auto___69192 = G__69193;
continue;
} else {
}
break;
}

var G__69126 = args69124.length;
switch (G__69126) {
case 1:
return sablono.core.password_field69123.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field69123.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args69124.length)].join('')));

}
});

sablono.core.password_field69123.cljs$core$IFn$_invoke$arity$1 = (function (name__59183__auto__){
return sablono.core.password_field69123.call(null,name__59183__auto__,null);
});

sablono.core.password_field69123.cljs$core$IFn$_invoke$arity$2 = (function (name__59183__auto__,value__59184__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__59183__auto__,value__59184__auto__);
});

sablono.core.password_field69123.cljs$lang$maxFixedArity = 2;


sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field69123);

/**
 * Creates a range input field.
 */
sablono.core.range_field69127 = (function sablono$core$range_field69127(var_args){
var args69128 = [];
var len__48622__auto___69195 = arguments.length;
var i__48623__auto___69196 = (0);
while(true){
if((i__48623__auto___69196 < len__48622__auto___69195)){
args69128.push((arguments[i__48623__auto___69196]));

var G__69197 = (i__48623__auto___69196 + (1));
i__48623__auto___69196 = G__69197;
continue;
} else {
}
break;
}

var G__69130 = args69128.length;
switch (G__69130) {
case 1:
return sablono.core.range_field69127.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field69127.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args69128.length)].join('')));

}
});

sablono.core.range_field69127.cljs$core$IFn$_invoke$arity$1 = (function (name__59183__auto__){
return sablono.core.range_field69127.call(null,name__59183__auto__,null);
});

sablono.core.range_field69127.cljs$core$IFn$_invoke$arity$2 = (function (name__59183__auto__,value__59184__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__59183__auto__,value__59184__auto__);
});

sablono.core.range_field69127.cljs$lang$maxFixedArity = 2;


sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field69127);

/**
 * Creates a search input field.
 */
sablono.core.search_field69131 = (function sablono$core$search_field69131(var_args){
var args69132 = [];
var len__48622__auto___69199 = arguments.length;
var i__48623__auto___69200 = (0);
while(true){
if((i__48623__auto___69200 < len__48622__auto___69199)){
args69132.push((arguments[i__48623__auto___69200]));

var G__69201 = (i__48623__auto___69200 + (1));
i__48623__auto___69200 = G__69201;
continue;
} else {
}
break;
}

var G__69134 = args69132.length;
switch (G__69134) {
case 1:
return sablono.core.search_field69131.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field69131.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args69132.length)].join('')));

}
});

sablono.core.search_field69131.cljs$core$IFn$_invoke$arity$1 = (function (name__59183__auto__){
return sablono.core.search_field69131.call(null,name__59183__auto__,null);
});

sablono.core.search_field69131.cljs$core$IFn$_invoke$arity$2 = (function (name__59183__auto__,value__59184__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__59183__auto__,value__59184__auto__);
});

sablono.core.search_field69131.cljs$lang$maxFixedArity = 2;


sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field69131);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field69135 = (function sablono$core$tel_field69135(var_args){
var args69136 = [];
var len__48622__auto___69203 = arguments.length;
var i__48623__auto___69204 = (0);
while(true){
if((i__48623__auto___69204 < len__48622__auto___69203)){
args69136.push((arguments[i__48623__auto___69204]));

var G__69205 = (i__48623__auto___69204 + (1));
i__48623__auto___69204 = G__69205;
continue;
} else {
}
break;
}

var G__69138 = args69136.length;
switch (G__69138) {
case 1:
return sablono.core.tel_field69135.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field69135.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args69136.length)].join('')));

}
});

sablono.core.tel_field69135.cljs$core$IFn$_invoke$arity$1 = (function (name__59183__auto__){
return sablono.core.tel_field69135.call(null,name__59183__auto__,null);
});

sablono.core.tel_field69135.cljs$core$IFn$_invoke$arity$2 = (function (name__59183__auto__,value__59184__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__59183__auto__,value__59184__auto__);
});

sablono.core.tel_field69135.cljs$lang$maxFixedArity = 2;


sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field69135);

/**
 * Creates a text input field.
 */
sablono.core.text_field69139 = (function sablono$core$text_field69139(var_args){
var args69140 = [];
var len__48622__auto___69207 = arguments.length;
var i__48623__auto___69208 = (0);
while(true){
if((i__48623__auto___69208 < len__48622__auto___69207)){
args69140.push((arguments[i__48623__auto___69208]));

var G__69209 = (i__48623__auto___69208 + (1));
i__48623__auto___69208 = G__69209;
continue;
} else {
}
break;
}

var G__69142 = args69140.length;
switch (G__69142) {
case 1:
return sablono.core.text_field69139.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field69139.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args69140.length)].join('')));

}
});

sablono.core.text_field69139.cljs$core$IFn$_invoke$arity$1 = (function (name__59183__auto__){
return sablono.core.text_field69139.call(null,name__59183__auto__,null);
});

sablono.core.text_field69139.cljs$core$IFn$_invoke$arity$2 = (function (name__59183__auto__,value__59184__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__59183__auto__,value__59184__auto__);
});

sablono.core.text_field69139.cljs$lang$maxFixedArity = 2;


sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field69139);

/**
 * Creates a time input field.
 */
sablono.core.time_field69143 = (function sablono$core$time_field69143(var_args){
var args69144 = [];
var len__48622__auto___69211 = arguments.length;
var i__48623__auto___69212 = (0);
while(true){
if((i__48623__auto___69212 < len__48622__auto___69211)){
args69144.push((arguments[i__48623__auto___69212]));

var G__69213 = (i__48623__auto___69212 + (1));
i__48623__auto___69212 = G__69213;
continue;
} else {
}
break;
}

var G__69146 = args69144.length;
switch (G__69146) {
case 1:
return sablono.core.time_field69143.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field69143.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args69144.length)].join('')));

}
});

sablono.core.time_field69143.cljs$core$IFn$_invoke$arity$1 = (function (name__59183__auto__){
return sablono.core.time_field69143.call(null,name__59183__auto__,null);
});

sablono.core.time_field69143.cljs$core$IFn$_invoke$arity$2 = (function (name__59183__auto__,value__59184__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__59183__auto__,value__59184__auto__);
});

sablono.core.time_field69143.cljs$lang$maxFixedArity = 2;


sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field69143);

/**
 * Creates a url input field.
 */
sablono.core.url_field69147 = (function sablono$core$url_field69147(var_args){
var args69148 = [];
var len__48622__auto___69215 = arguments.length;
var i__48623__auto___69216 = (0);
while(true){
if((i__48623__auto___69216 < len__48622__auto___69215)){
args69148.push((arguments[i__48623__auto___69216]));

var G__69217 = (i__48623__auto___69216 + (1));
i__48623__auto___69216 = G__69217;
continue;
} else {
}
break;
}

var G__69150 = args69148.length;
switch (G__69150) {
case 1:
return sablono.core.url_field69147.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field69147.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args69148.length)].join('')));

}
});

sablono.core.url_field69147.cljs$core$IFn$_invoke$arity$1 = (function (name__59183__auto__){
return sablono.core.url_field69147.call(null,name__59183__auto__,null);
});

sablono.core.url_field69147.cljs$core$IFn$_invoke$arity$2 = (function (name__59183__auto__,value__59184__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__59183__auto__,value__59184__auto__);
});

sablono.core.url_field69147.cljs$lang$maxFixedArity = 2;


sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field69147);

/**
 * Creates a week input field.
 */
sablono.core.week_field69151 = (function sablono$core$week_field69151(var_args){
var args69152 = [];
var len__48622__auto___69219 = arguments.length;
var i__48623__auto___69220 = (0);
while(true){
if((i__48623__auto___69220 < len__48622__auto___69219)){
args69152.push((arguments[i__48623__auto___69220]));

var G__69221 = (i__48623__auto___69220 + (1));
i__48623__auto___69220 = G__69221;
continue;
} else {
}
break;
}

var G__69154 = args69152.length;
switch (G__69154) {
case 1:
return sablono.core.week_field69151.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field69151.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args69152.length)].join('')));

}
});

sablono.core.week_field69151.cljs$core$IFn$_invoke$arity$1 = (function (name__59183__auto__){
return sablono.core.week_field69151.call(null,name__59183__auto__,null);
});

sablono.core.week_field69151.cljs$core$IFn$_invoke$arity$2 = (function (name__59183__auto__,value__59184__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__59183__auto__,value__59184__auto__);
});

sablono.core.week_field69151.cljs$lang$maxFixedArity = 2;


sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field69151);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box69223 = (function sablono$core$check_box69223(var_args){
var args69224 = [];
var len__48622__auto___69227 = arguments.length;
var i__48623__auto___69228 = (0);
while(true){
if((i__48623__auto___69228 < len__48622__auto___69227)){
args69224.push((arguments[i__48623__auto___69228]));

var G__69229 = (i__48623__auto___69228 + (1));
i__48623__auto___69228 = G__69229;
continue;
} else {
}
break;
}

var G__69226 = args69224.length;
switch (G__69226) {
case 1:
return sablono.core.check_box69223.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box69223.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box69223.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args69224.length)].join('')));

}
});

sablono.core.check_box69223.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box69223.call(null,name,null);
});

sablono.core.check_box69223.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box69223.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box69223.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__47547__auto__ = value;
if(cljs.core.truth_(or__47547__auto__)){
return or__47547__auto__;
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box69223.cljs$lang$maxFixedArity = 3;


sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box69223);
/**
 * Creates a radio button.
 */
sablono.core.radio_button69231 = (function sablono$core$radio_button69231(var_args){
var args69232 = [];
var len__48622__auto___69235 = arguments.length;
var i__48623__auto___69236 = (0);
while(true){
if((i__48623__auto___69236 < len__48622__auto___69235)){
args69232.push((arguments[i__48623__auto___69236]));

var G__69237 = (i__48623__auto___69236 + (1));
i__48623__auto___69236 = G__69237;
continue;
} else {
}
break;
}

var G__69234 = args69232.length;
switch (G__69234) {
case 1:
return sablono.core.radio_button69231.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button69231.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button69231.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args69232.length)].join('')));

}
});

sablono.core.radio_button69231.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button69231.call(null,group,null);
});

sablono.core.radio_button69231.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button69231.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button69231.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__47547__auto__ = value;
if(cljs.core.truth_(or__47547__auto__)){
return or__47547__auto__;
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button69231.cljs$lang$maxFixedArity = 3;


sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button69231);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options69239 = (function sablono$core$select_options69239(coll){
var iter__48327__auto__ = (function sablono$core$select_options69239_$_iter__69256(s__69257){
return (new cljs.core.LazySeq(null,(function (){
var s__69257__$1 = s__69257;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__69257__$1);
if(temp__4657__auto__){
var s__69257__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__69257__$2)){
var c__48325__auto__ = cljs.core.chunk_first.call(null,s__69257__$2);
var size__48326__auto__ = cljs.core.count.call(null,c__48325__auto__);
var b__69259 = cljs.core.chunk_buffer.call(null,size__48326__auto__);
if((function (){var i__69258 = (0);
while(true){
if((i__69258 < size__48326__auto__)){
var x = cljs.core._nth.call(null,c__48325__auto__,i__69258);
cljs.core.chunk_append.call(null,b__69259,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__69266 = x;
var text = cljs.core.nth.call(null,vec__69266,(0),null);
var val = cljs.core.nth.call(null,vec__69266,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__69266,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options69239.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__69272 = (i__69258 + (1));
i__69258 = G__69272;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__69259),sablono$core$select_options69239_$_iter__69256.call(null,cljs.core.chunk_rest.call(null,s__69257__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__69259),null);
}
} else {
var x = cljs.core.first.call(null,s__69257__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__69269 = x;
var text = cljs.core.nth.call(null,vec__69269,(0),null);
var val = cljs.core.nth.call(null,vec__69269,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__69269,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options69239.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options69239_$_iter__69256.call(null,cljs.core.rest.call(null,s__69257__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__48327__auto__.call(null,coll);
});

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options69239);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down69273 = (function sablono$core$drop_down69273(var_args){
var args69274 = [];
var len__48622__auto___69277 = arguments.length;
var i__48623__auto___69278 = (0);
while(true){
if((i__48623__auto___69278 < len__48622__auto___69277)){
args69274.push((arguments[i__48623__auto___69278]));

var G__69279 = (i__48623__auto___69278 + (1));
i__48623__auto___69278 = G__69279;
continue;
} else {
}
break;
}

var G__69276 = args69274.length;
switch (G__69276) {
case 2:
return sablono.core.drop_down69273.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down69273.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args69274.length)].join('')));

}
});

sablono.core.drop_down69273.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down69273.call(null,name,options,null);
});

sablono.core.drop_down69273.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down69273.cljs$lang$maxFixedArity = 3;


sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down69273);
/**
 * Creates a text area element.
 */
sablono.core.text_area69281 = (function sablono$core$text_area69281(var_args){
var args69282 = [];
var len__48622__auto___69285 = arguments.length;
var i__48623__auto___69286 = (0);
while(true){
if((i__48623__auto___69286 < len__48622__auto___69285)){
args69282.push((arguments[i__48623__auto___69286]));

var G__69287 = (i__48623__auto___69286 + (1));
i__48623__auto___69286 = G__69287;
continue;
} else {
}
break;
}

var G__69284 = args69282.length;
switch (G__69284) {
case 1:
return sablono.core.text_area69281.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area69281.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args69282.length)].join('')));

}
});

sablono.core.text_area69281.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area69281.call(null,name,null);
});

sablono.core.text_area69281.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__47547__auto__ = value;
if(cljs.core.truth_(or__47547__auto__)){
return or__47547__auto__;
} else {
return undefined;
}
})()], null)], null);
});

sablono.core.text_area69281.cljs$lang$maxFixedArity = 2;


sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area69281);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label69289 = (function sablono$core$label69289(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label69289);
/**
 * Creates a submit button.
 */
sablono.core.submit_button69290 = (function sablono$core$submit_button69290(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button69290);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button69291 = (function sablono$core$reset_button69291(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button69291);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to69292 = (function sablono$core$form_to69292(var_args){
var args__48629__auto__ = [];
var len__48622__auto___69299 = arguments.length;
var i__48623__auto___69300 = (0);
while(true){
if((i__48623__auto___69300 < len__48622__auto___69299)){
args__48629__auto__.push((arguments[i__48623__auto___69300]));

var G__69301 = (i__48623__auto___69300 + (1));
i__48623__auto___69300 = G__69301;
continue;
} else {
}
break;
}

var argseq__48630__auto__ = ((((1) < args__48629__auto__.length))?(new cljs.core.IndexedSeq(args__48629__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to69292.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__48630__auto__);
});

sablono.core.form_to69292.cljs$core$IFn$_invoke$arity$variadic = (function (p__69295,body){
var vec__69296 = p__69295;
var method = cljs.core.nth.call(null,vec__69296,(0),null);
var action = cljs.core.nth.call(null,vec__69296,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to69292.cljs$lang$maxFixedArity = (1);

sablono.core.form_to69292.cljs$lang$applyTo = (function (seq69293){
var G__69294 = cljs.core.first.call(null,seq69293);
var seq69293__$1 = cljs.core.next.call(null,seq69293);
return sablono.core.form_to69292.cljs$core$IFn$_invoke$arity$variadic(G__69294,seq69293__$1);
});


sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to69292);

//# sourceMappingURL=core.js.map?rel=1476044187640