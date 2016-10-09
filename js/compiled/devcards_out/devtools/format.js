// Compiled by ClojureScript 1.9.229 {}
goog.provide('devtools.format');
goog.require('cljs.core');

/**
 * @interface
 */
devtools.format.IDevtoolsFormat = function(){};

devtools.format._header = (function devtools$format$_header(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_header$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_header$arity$1(value);
} else {
var x__48210__auto__ = (((value == null))?null:value);
var m__48211__auto__ = (devtools.format._header[goog.typeOf(x__48210__auto__)]);
if(!((m__48211__auto__ == null))){
return m__48211__auto__.call(null,value);
} else {
var m__48211__auto____$1 = (devtools.format._header["_"]);
if(!((m__48211__auto____$1 == null))){
return m__48211__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-header",value);
}
}
}
});

devtools.format._has_body = (function devtools$format$_has_body(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_has_body$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_has_body$arity$1(value);
} else {
var x__48210__auto__ = (((value == null))?null:value);
var m__48211__auto__ = (devtools.format._has_body[goog.typeOf(x__48210__auto__)]);
if(!((m__48211__auto__ == null))){
return m__48211__auto__.call(null,value);
} else {
var m__48211__auto____$1 = (devtools.format._has_body["_"]);
if(!((m__48211__auto____$1 == null))){
return m__48211__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-has-body",value);
}
}
}
});

devtools.format._body = (function devtools$format$_body(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_body$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_body$arity$1(value);
} else {
var x__48210__auto__ = (((value == null))?null:value);
var m__48211__auto__ = (devtools.format._body[goog.typeOf(x__48210__auto__)]);
if(!((m__48211__auto__ == null))){
return m__48211__auto__.call(null,value);
} else {
var m__48211__auto____$1 = (devtools.format._body["_"]);
if(!((m__48211__auto____$1 == null))){
return m__48211__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-body",value);
}
}
}
});

devtools.format.setup_BANG_ = (function devtools$format$setup_BANG_(){
if(cljs.core.truth_(devtools.format._STAR_setup_done_STAR_)){
return null;
} else {
devtools.format._STAR_setup_done_STAR_ = true;

devtools.format.make_template_fn = (function (){var temp__4657__auto__ = goog.object.get(window,"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__61557__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__61557__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__61557__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__61557__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__61556__auto__ = temp__4657__auto____$2;
return goog.object.get(o__61556__auto__,"make_template");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_group_fn = (function (){var temp__4657__auto__ = goog.object.get(window,"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__61557__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__61557__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__61557__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__61557__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__61556__auto__ = temp__4657__auto____$2;
return goog.object.get(o__61556__auto__,"make_group");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_reference_fn = (function (){var temp__4657__auto__ = goog.object.get(window,"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__61557__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__61557__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__61557__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__61557__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__61556__auto__ = temp__4657__auto____$2;
return goog.object.get(o__61556__auto__,"make_reference");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_surrogate_fn = (function (){var temp__4657__auto__ = goog.object.get(window,"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__61557__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__61557__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__61557__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__61557__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__61556__auto__ = temp__4657__auto____$2;
return goog.object.get(o__61556__auto__,"make_surrogate");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.render_markup_fn = (function (){var temp__4657__auto__ = goog.object.get(window,"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__61557__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__61557__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__61557__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__61557__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__61556__auto__ = temp__4657__auto____$2;
return goog.object.get(o__61556__auto__,"render_markup");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_header_GT__fn = (function (){var temp__4657__auto__ = goog.object.get(window,"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__61557__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__61557__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__61557__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__61557__auto____$1,"markup");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__61556__auto__ = temp__4657__auto____$2;
return goog.object.get(o__61556__auto__,"_LT_header_GT_");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_standard_body_GT__fn = (function (){var temp__4657__auto__ = goog.object.get(window,"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__61557__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__61557__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__61557__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__61557__auto____$1,"markup");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__61556__auto__ = temp__4657__auto____$2;
return goog.object.get(o__61556__auto__,"_LT_standard_body_GT_");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

if(cljs.core.truth_(devtools.format.make_template_fn)){
} else {
throw (new Error("Assert failed: make-template-fn"));
}

if(cljs.core.truth_(devtools.format.make_group_fn)){
} else {
throw (new Error("Assert failed: make-group-fn"));
}

if(cljs.core.truth_(devtools.format.make_reference_fn)){
} else {
throw (new Error("Assert failed: make-reference-fn"));
}

if(cljs.core.truth_(devtools.format.make_surrogate_fn)){
} else {
throw (new Error("Assert failed: make-surrogate-fn"));
}

if(cljs.core.truth_(devtools.format.render_markup_fn)){
} else {
throw (new Error("Assert failed: render-markup-fn"));
}

if(cljs.core.truth_(devtools.format._LT_header_GT__fn)){
} else {
throw (new Error("Assert failed: <header>-fn"));
}

if(cljs.core.truth_(devtools.format._LT_standard_body_GT__fn)){
return null;
} else {
throw (new Error("Assert failed: <standard-body>-fn"));
}
}
});
devtools.format.render_markup = (function devtools$format$render_markup(var_args){
var args__48629__auto__ = [];
var len__48622__auto___74741 = arguments.length;
var i__48623__auto___74742 = (0);
while(true){
if((i__48623__auto___74742 < len__48622__auto___74741)){
args__48629__auto__.push((arguments[i__48623__auto___74742]));

var G__74743 = (i__48623__auto___74742 + (1));
i__48623__auto___74742 = G__74743;
continue;
} else {
}
break;
}

var argseq__48630__auto__ = ((((0) < args__48629__auto__.length))?(new cljs.core.IndexedSeq(args__48629__auto__.slice((0)),(0),null)):null);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(argseq__48630__auto__);
});

devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.render_markup_fn,args);
});

devtools.format.render_markup.cljs$lang$maxFixedArity = (0);

devtools.format.render_markup.cljs$lang$applyTo = (function (seq74740){
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq74740));
});

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__48629__auto__ = [];
var len__48622__auto___74745 = arguments.length;
var i__48623__auto___74746 = (0);
while(true){
if((i__48623__auto___74746 < len__48622__auto___74745)){
args__48629__auto__.push((arguments[i__48623__auto___74746]));

var G__74747 = (i__48623__auto___74746 + (1));
i__48623__auto___74746 = G__74747;
continue;
} else {
}
break;
}

var argseq__48630__auto__ = ((((0) < args__48629__auto__.length))?(new cljs.core.IndexedSeq(args__48629__auto__.slice((0)),(0),null)):null);
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(argseq__48630__auto__);
});

devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.make_template.cljs$lang$maxFixedArity = (0);

devtools.format.make_template.cljs$lang$applyTo = (function (seq74744){
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq74744));
});

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__48629__auto__ = [];
var len__48622__auto___74749 = arguments.length;
var i__48623__auto___74750 = (0);
while(true){
if((i__48623__auto___74750 < len__48622__auto___74749)){
args__48629__auto__.push((arguments[i__48623__auto___74750]));

var G__74751 = (i__48623__auto___74750 + (1));
i__48623__auto___74750 = G__74751;
continue;
} else {
}
break;
}

var argseq__48630__auto__ = ((((0) < args__48629__auto__.length))?(new cljs.core.IndexedSeq(args__48629__auto__.slice((0)),(0),null)):null);
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__48630__auto__);
});

devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.make_group.cljs$lang$maxFixedArity = (0);

devtools.format.make_group.cljs$lang$applyTo = (function (seq74748){
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq74748));
});

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__48629__auto__ = [];
var len__48622__auto___74753 = arguments.length;
var i__48623__auto___74754 = (0);
while(true){
if((i__48623__auto___74754 < len__48622__auto___74753)){
args__48629__auto__.push((arguments[i__48623__auto___74754]));

var G__74755 = (i__48623__auto___74754 + (1));
i__48623__auto___74754 = G__74755;
continue;
} else {
}
break;
}

var argseq__48630__auto__ = ((((0) < args__48629__auto__.length))?(new cljs.core.IndexedSeq(args__48629__auto__.slice((0)),(0),null)):null);
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__48630__auto__);
});

devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.make_surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq74752){
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq74752));
});

devtools.format.template = (function devtools$format$template(var_args){
var args__48629__auto__ = [];
var len__48622__auto___74757 = arguments.length;
var i__48623__auto___74758 = (0);
while(true){
if((i__48623__auto___74758 < len__48622__auto___74757)){
args__48629__auto__.push((arguments[i__48623__auto___74758]));

var G__74759 = (i__48623__auto___74758 + (1));
i__48623__auto___74758 = G__74759;
continue;
} else {
}
break;
}

var argseq__48630__auto__ = ((((0) < args__48629__auto__.length))?(new cljs.core.IndexedSeq(args__48629__auto__.slice((0)),(0),null)):null);
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(argseq__48630__auto__);
});

devtools.format.template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.template.cljs$lang$maxFixedArity = (0);

devtools.format.template.cljs$lang$applyTo = (function (seq74756){
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq74756));
});

devtools.format.group = (function devtools$format$group(var_args){
var args__48629__auto__ = [];
var len__48622__auto___74761 = arguments.length;
var i__48623__auto___74762 = (0);
while(true){
if((i__48623__auto___74762 < len__48622__auto___74761)){
args__48629__auto__.push((arguments[i__48623__auto___74762]));

var G__74763 = (i__48623__auto___74762 + (1));
i__48623__auto___74762 = G__74763;
continue;
} else {
}
break;
}

var argseq__48630__auto__ = ((((0) < args__48629__auto__.length))?(new cljs.core.IndexedSeq(args__48629__auto__.slice((0)),(0),null)):null);
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(argseq__48630__auto__);
});

devtools.format.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.group.cljs$lang$maxFixedArity = (0);

devtools.format.group.cljs$lang$applyTo = (function (seq74760){
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq74760));
});

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__48629__auto__ = [];
var len__48622__auto___74765 = arguments.length;
var i__48623__auto___74766 = (0);
while(true){
if((i__48623__auto___74766 < len__48622__auto___74765)){
args__48629__auto__.push((arguments[i__48623__auto___74766]));

var G__74767 = (i__48623__auto___74766 + (1));
i__48623__auto___74766 = G__74767;
continue;
} else {
}
break;
}

var argseq__48630__auto__ = ((((0) < args__48629__auto__.length))?(new cljs.core.IndexedSeq(args__48629__auto__.slice((0)),(0),null)):null);
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__48630__auto__);
});

devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.surrogate.cljs$lang$applyTo = (function (seq74764){
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq74764));
});

devtools.format.reference = (function devtools$format$reference(var_args){
var args__48629__auto__ = [];
var len__48622__auto___74775 = arguments.length;
var i__48623__auto___74776 = (0);
while(true){
if((i__48623__auto___74776 < len__48622__auto___74775)){
args__48629__auto__.push((arguments[i__48623__auto___74776]));

var G__74777 = (i__48623__auto___74776 + (1));
i__48623__auto___74776 = G__74777;
continue;
} else {
}
break;
}

var argseq__48630__auto__ = ((((1) < args__48629__auto__.length))?(new cljs.core.IndexedSeq(args__48629__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__48630__auto__);
});

devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__74771){
var vec__74772 = p__74771;
var state_override = cljs.core.nth.call(null,vec__74772,(0),null);
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,((function (vec__74772,state_override){
return (function (p1__74768_SHARP_){
return cljs.core.merge.call(null,p1__74768_SHARP_,state_override);
});})(vec__74772,state_override))
], null));
});

devtools.format.reference.cljs$lang$maxFixedArity = (1);

devtools.format.reference.cljs$lang$applyTo = (function (seq74769){
var G__74770 = cljs.core.first.call(null,seq74769);
var seq74769__$1 = cljs.core.next.call(null,seq74769);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic(G__74770,seq74769__$1);
});

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_.call(null);

return devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615),devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955),devtools.format.make_reference_fn.call(null,target)));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__48629__auto__ = [];
var len__48622__auto___74779 = arguments.length;
var i__48623__auto___74780 = (0);
while(true){
if((i__48623__auto___74780 < len__48622__auto___74779)){
args__48629__auto__.push((arguments[i__48623__auto___74780]));

var G__74781 = (i__48623__auto___74780 + (1));
i__48623__auto___74780 = G__74781;
continue;
} else {
}
break;
}

var argseq__48630__auto__ = ((((0) < args__48629__auto__.length))?(new cljs.core.IndexedSeq(args__48629__auto__.slice((0)),(0),null)):null);
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(argseq__48630__auto__);
});

devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_header_GT__fn,args));
});

devtools.format.build_header.cljs$lang$maxFixedArity = (0);

devtools.format.build_header.cljs$lang$applyTo = (function (seq74778){
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq74778));
});

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__48629__auto__ = [];
var len__48622__auto___74784 = arguments.length;
var i__48623__auto___74785 = (0);
while(true){
if((i__48623__auto___74785 < len__48622__auto___74784)){
args__48629__auto__.push((arguments[i__48623__auto___74785]));

var G__74786 = (i__48623__auto___74785 + (1));
i__48623__auto___74785 = G__74786;
continue;
} else {
}
break;
}

var argseq__48630__auto__ = ((((1) < args__48629__auto__.length))?(new cljs.core.IndexedSeq(args__48629__auto__.slice((1)),(0),null)):null);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__48630__auto__);
});

devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic = (function (lines,rest){
devtools.format.setup_BANG_.call(null);

var args = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.call(null,(function (x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}),lines)], null),rest);
return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_standard_body_GT__fn,args));
});

devtools.format.standard_body_template.cljs$lang$maxFixedArity = (1);

devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq74782){
var G__74783 = cljs.core.first.call(null,seq74782);
var seq74782__$1 = cljs.core.next.call(null,seq74782);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic(G__74783,seq74782__$1);
});


//# sourceMappingURL=format.js.map?rel=1476044192883