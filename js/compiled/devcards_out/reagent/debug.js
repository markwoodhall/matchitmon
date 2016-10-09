// Compiled by ClojureScript 1.9.229 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__67283__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__67283 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__67284__i = 0, G__67284__a = new Array(arguments.length -  0);
while (G__67284__i < G__67284__a.length) {G__67284__a[G__67284__i] = arguments[G__67284__i + 0]; ++G__67284__i;}
  args = new cljs.core.IndexedSeq(G__67284__a,0);
} 
return G__67283__delegate.call(this,args);};
G__67283.cljs$lang$maxFixedArity = 0;
G__67283.cljs$lang$applyTo = (function (arglist__67285){
var args = cljs.core.seq(arglist__67285);
return G__67283__delegate(args);
});
G__67283.cljs$core$IFn$_invoke$arity$variadic = G__67283__delegate;
return G__67283;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__67286__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__67286 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__67287__i = 0, G__67287__a = new Array(arguments.length -  0);
while (G__67287__i < G__67287__a.length) {G__67287__a[G__67287__i] = arguments[G__67287__i + 0]; ++G__67287__i;}
  args = new cljs.core.IndexedSeq(G__67287__a,0);
} 
return G__67286__delegate.call(this,args);};
G__67286.cljs$lang$maxFixedArity = 0;
G__67286.cljs$lang$applyTo = (function (arglist__67288){
var args = cljs.core.seq(arglist__67288);
return G__67286__delegate(args);
});
G__67286.cljs$core$IFn$_invoke$arity$variadic = G__67286__delegate;
return G__67286;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map?rel=1476044185452