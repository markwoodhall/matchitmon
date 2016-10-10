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
var G__29860__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__29860 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29861__i = 0, G__29861__a = new Array(arguments.length -  0);
while (G__29861__i < G__29861__a.length) {G__29861__a[G__29861__i] = arguments[G__29861__i + 0]; ++G__29861__i;}
  args = new cljs.core.IndexedSeq(G__29861__a,0);
} 
return G__29860__delegate.call(this,args);};
G__29860.cljs$lang$maxFixedArity = 0;
G__29860.cljs$lang$applyTo = (function (arglist__29862){
var args = cljs.core.seq(arglist__29862);
return G__29860__delegate(args);
});
G__29860.cljs$core$IFn$_invoke$arity$variadic = G__29860__delegate;
return G__29860;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__29863__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__29863 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29864__i = 0, G__29864__a = new Array(arguments.length -  0);
while (G__29864__i < G__29864__a.length) {G__29864__a[G__29864__i] = arguments[G__29864__i + 0]; ++G__29864__i;}
  args = new cljs.core.IndexedSeq(G__29864__a,0);
} 
return G__29863__delegate.call(this,args);};
G__29863.cljs$lang$maxFixedArity = 0;
G__29863.cljs$lang$applyTo = (function (arglist__29865){
var args = cljs.core.seq(arglist__29865);
return G__29863__delegate(args);
});
G__29863.cljs$core$IFn$_invoke$arity$variadic = G__29863__delegate;
return G__29863;
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

//# sourceMappingURL=debug.js.map?rel=1476131795458