// Compiled by ClojureScript 1.9.229 {}
goog.provide('devtools.formatters.templating');
goog.require('cljs.core');
goog.require('cljs.pprint');
goog.require('clojure.walk');
goog.require('devtools.util');
goog.require('devtools.protocols');
goog.require('devtools.formatters.helpers');
goog.require('devtools.formatters.state');
goog.require('clojure.string');
devtools.formatters.templating.mark_as_group_BANG_ = (function devtools$formatters$templating$mark_as_group_BANG_(value){
var x40904_40905 = value;
x40904_40905.devtools$protocols$IGroup$ = true;


return value;
});
devtools.formatters.templating.group_QMARK_ = (function devtools$formatters$templating$group_QMARK_(value){
if(!((value == null))){
if((false) || (value.devtools$protocols$IGroup$)){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.IGroup,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.IGroup,value);
}
});
devtools.formatters.templating.mark_as_template_BANG_ = (function devtools$formatters$templating$mark_as_template_BANG_(value){
var x40909_40910 = value;
x40909_40910.devtools$protocols$ITemplate$ = true;


return value;
});
devtools.formatters.templating.template_QMARK_ = (function devtools$formatters$templating$template_QMARK_(value){
if(!((value == null))){
if((false) || (value.devtools$protocols$ITemplate$)){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ITemplate,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ITemplate,value);
}
});
devtools.formatters.templating.mark_as_surrogate_BANG_ = (function devtools$formatters$templating$mark_as_surrogate_BANG_(value){
var x40914_40915 = value;
x40914_40915.devtools$protocols$ISurrogate$ = true;


return value;
});
devtools.formatters.templating.surrogate_QMARK_ = (function devtools$formatters$templating$surrogate_QMARK_(value){
if(!((value == null))){
if((false) || (value.devtools$protocols$ISurrogate$)){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ISurrogate,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ISurrogate,value);
}
});
devtools.formatters.templating.reference_QMARK_ = (function devtools$formatters$templating$reference_QMARK_(value){
var and__24778__auto__ = devtools.formatters.templating.group_QMARK_.call(null,value);
if(cljs.core.truth_(and__24778__auto__)){
return cljs.core._EQ_.call(null,(value[(0)]),"object");
} else {
return and__24778__auto__;
}
});
devtools.formatters.templating.make_group = (function devtools$formatters$templating$make_group(var_args){
var args__25872__auto__ = [];
var len__25865__auto___40923 = arguments.length;
var i__25866__auto___40924 = (0);
while(true){
if((i__25866__auto___40924 < len__25865__auto___40923)){
args__25872__auto__.push((arguments[i__25866__auto___40924]));

var G__40925 = (i__25866__auto___40924 + (1));
i__25866__auto___40924 = G__40925;
continue;
} else {
}
break;
}

var argseq__25873__auto__ = ((((0) < args__25872__auto__.length))?(new cljs.core.IndexedSeq(args__25872__auto__.slice((0)),(0),null)):null);
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__25873__auto__);
});

devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (items){
var group = devtools.formatters.templating.mark_as_group_BANG_.call(null,[]);
var seq__40919_40926 = cljs.core.seq.call(null,items);
var chunk__40920_40927 = null;
var count__40921_40928 = (0);
var i__40922_40929 = (0);
while(true){
if((i__40922_40929 < count__40921_40928)){
var item_40930 = cljs.core._nth.call(null,chunk__40920_40927,i__40922_40929);
if(cljs.core.some_QMARK_.call(null,item_40930)){
if(cljs.core.coll_QMARK_.call(null,item_40930)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_40930)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_40930));
}
} else {
}

var G__40931 = seq__40919_40926;
var G__40932 = chunk__40920_40927;
var G__40933 = count__40921_40928;
var G__40934 = (i__40922_40929 + (1));
seq__40919_40926 = G__40931;
chunk__40920_40927 = G__40932;
count__40921_40928 = G__40933;
i__40922_40929 = G__40934;
continue;
} else {
var temp__4657__auto___40935 = cljs.core.seq.call(null,seq__40919_40926);
if(temp__4657__auto___40935){
var seq__40919_40936__$1 = temp__4657__auto___40935;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40919_40936__$1)){
var c__25601__auto___40937 = cljs.core.chunk_first.call(null,seq__40919_40936__$1);
var G__40938 = cljs.core.chunk_rest.call(null,seq__40919_40936__$1);
var G__40939 = c__25601__auto___40937;
var G__40940 = cljs.core.count.call(null,c__25601__auto___40937);
var G__40941 = (0);
seq__40919_40926 = G__40938;
chunk__40920_40927 = G__40939;
count__40921_40928 = G__40940;
i__40922_40929 = G__40941;
continue;
} else {
var item_40942 = cljs.core.first.call(null,seq__40919_40936__$1);
if(cljs.core.some_QMARK_.call(null,item_40942)){
if(cljs.core.coll_QMARK_.call(null,item_40942)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_40942)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_40942));
}
} else {
}

var G__40943 = cljs.core.next.call(null,seq__40919_40936__$1);
var G__40944 = null;
var G__40945 = (0);
var G__40946 = (0);
seq__40919_40926 = G__40943;
chunk__40920_40927 = G__40944;
count__40921_40928 = G__40945;
i__40922_40929 = G__40946;
continue;
}
} else {
}
}
break;
}

return group;
});

devtools.formatters.templating.make_group.cljs$lang$maxFixedArity = (0);

devtools.formatters.templating.make_group.cljs$lang$applyTo = (function (seq40918){
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40918));
});

devtools.formatters.templating.make_template = (function devtools$formatters$templating$make_template(var_args){
var args__25872__auto__ = [];
var len__25865__auto___40954 = arguments.length;
var i__25866__auto___40955 = (0);
while(true){
if((i__25866__auto___40955 < len__25865__auto___40954)){
args__25872__auto__.push((arguments[i__25866__auto___40955]));

var G__40956 = (i__25866__auto___40955 + (1));
i__25866__auto___40955 = G__40956;
continue;
} else {
}
break;
}

var argseq__25873__auto__ = ((((2) < args__25872__auto__.length))?(new cljs.core.IndexedSeq(args__25872__auto__.slice((2)),(0),null)):null);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25873__auto__);
});

devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (tag,style,children){
var tag__$1 = devtools.formatters.helpers.pref.call(null,tag);
var style__$1 = devtools.formatters.helpers.pref.call(null,style);
var template = devtools.formatters.templating.mark_as_template_BANG_.call(null,[tag__$1,((cljs.core.empty_QMARK_.call(null,style__$1))?({}):({"style": style__$1}))]);
var seq__40950_40957 = cljs.core.seq.call(null,children);
var chunk__40951_40958 = null;
var count__40952_40959 = (0);
var i__40953_40960 = (0);
while(true){
if((i__40953_40960 < count__40952_40959)){
var child_40961 = cljs.core._nth.call(null,chunk__40951_40958,i__40953_40960);
if(cljs.core.some_QMARK_.call(null,child_40961)){
if(cljs.core.coll_QMARK_.call(null,child_40961)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_40961))));
} else {
var temp__4655__auto___40962 = devtools.formatters.helpers.pref.call(null,child_40961);
if(cljs.core.truth_(temp__4655__auto___40962)){
var child_value_40963 = temp__4655__auto___40962;
template.push(child_value_40963);
} else {
}
}
} else {
}

var G__40964 = seq__40950_40957;
var G__40965 = chunk__40951_40958;
var G__40966 = count__40952_40959;
var G__40967 = (i__40953_40960 + (1));
seq__40950_40957 = G__40964;
chunk__40951_40958 = G__40965;
count__40952_40959 = G__40966;
i__40953_40960 = G__40967;
continue;
} else {
var temp__4657__auto___40968 = cljs.core.seq.call(null,seq__40950_40957);
if(temp__4657__auto___40968){
var seq__40950_40969__$1 = temp__4657__auto___40968;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40950_40969__$1)){
var c__25601__auto___40970 = cljs.core.chunk_first.call(null,seq__40950_40969__$1);
var G__40971 = cljs.core.chunk_rest.call(null,seq__40950_40969__$1);
var G__40972 = c__25601__auto___40970;
var G__40973 = cljs.core.count.call(null,c__25601__auto___40970);
var G__40974 = (0);
seq__40950_40957 = G__40971;
chunk__40951_40958 = G__40972;
count__40952_40959 = G__40973;
i__40953_40960 = G__40974;
continue;
} else {
var child_40975 = cljs.core.first.call(null,seq__40950_40969__$1);
if(cljs.core.some_QMARK_.call(null,child_40975)){
if(cljs.core.coll_QMARK_.call(null,child_40975)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_40975))));
} else {
var temp__4655__auto___40976 = devtools.formatters.helpers.pref.call(null,child_40975);
if(cljs.core.truth_(temp__4655__auto___40976)){
var child_value_40977 = temp__4655__auto___40976;
template.push(child_value_40977);
} else {
}
}
} else {
}

var G__40978 = cljs.core.next.call(null,seq__40950_40969__$1);
var G__40979 = null;
var G__40980 = (0);
var G__40981 = (0);
seq__40950_40957 = G__40978;
chunk__40951_40958 = G__40979;
count__40952_40959 = G__40980;
i__40953_40960 = G__40981;
continue;
}
} else {
}
}
break;
}

return template;
});

devtools.formatters.templating.make_template.cljs$lang$maxFixedArity = (2);

devtools.formatters.templating.make_template.cljs$lang$applyTo = (function (seq40947){
var G__40948 = cljs.core.first.call(null,seq40947);
var seq40947__$1 = cljs.core.next.call(null,seq40947);
var G__40949 = cljs.core.first.call(null,seq40947__$1);
var seq40947__$2 = cljs.core.next.call(null,seq40947__$1);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic(G__40948,G__40949,seq40947__$2);
});

devtools.formatters.templating.concat_templates_BANG_ = (function devtools$formatters$templating$concat_templates_BANG_(var_args){
var args__25872__auto__ = [];
var len__25865__auto___40984 = arguments.length;
var i__25866__auto___40985 = (0);
while(true){
if((i__25866__auto___40985 < len__25865__auto___40984)){
args__25872__auto__.push((arguments[i__25866__auto___40985]));

var G__40986 = (i__25866__auto___40985 + (1));
i__25866__auto___40985 = G__40986;
continue;
} else {
}
break;
}

var argseq__25873__auto__ = ((((1) < args__25872__auto__.length))?(new cljs.core.IndexedSeq(args__25872__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25873__auto__);
});

devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,templates){
return devtools.formatters.templating.mark_as_template_BANG_.call(null,goog.object.get(template,"concat").apply(template,cljs.core.into_array.call(null,cljs.core.map.call(null,cljs.core.into_array,cljs.core.keep.call(null,devtools.formatters.helpers.pref,templates)))));
});

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$applyTo = (function (seq40982){
var G__40983 = cljs.core.first.call(null,seq40982);
var seq40982__$1 = cljs.core.next.call(null,seq40982);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__40983,seq40982__$1);
});

devtools.formatters.templating.extend_template_BANG_ = (function devtools$formatters$templating$extend_template_BANG_(var_args){
var args__25872__auto__ = [];
var len__25865__auto___40989 = arguments.length;
var i__25866__auto___40990 = (0);
while(true){
if((i__25866__auto___40990 < len__25865__auto___40989)){
args__25872__auto__.push((arguments[i__25866__auto___40990]));

var G__40991 = (i__25866__auto___40990 + (1));
i__25866__auto___40990 = G__40991;
continue;
} else {
}
break;
}

var argseq__25873__auto__ = ((((1) < args__25872__auto__.length))?(new cljs.core.IndexedSeq(args__25872__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25873__auto__);
});

devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,args){
return devtools.formatters.templating.concat_templates_BANG_.call(null,template,args);
});

devtools.formatters.templating.extend_template_BANG_.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.extend_template_BANG_.cljs$lang$applyTo = (function (seq40987){
var G__40988 = cljs.core.first.call(null,seq40987);
var seq40987__$1 = cljs.core.next.call(null,seq40987);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__40988,seq40987__$1);
});

devtools.formatters.templating.make_surrogate = (function devtools$formatters$templating$make_surrogate(var_args){
var args40992 = [];
var len__25865__auto___40997 = arguments.length;
var i__25866__auto___40998 = (0);
while(true){
if((i__25866__auto___40998 < len__25865__auto___40997)){
args40992.push((arguments[i__25866__auto___40998]));

var G__40999 = (i__25866__auto___40998 + (1));
i__25866__auto___40998 = G__40999;
continue;
} else {
}
break;
}

var G__40994 = args40992.length;
switch (G__40994) {
case 1:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40992.length)].join('')));

}
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$1 = (function (object){
return devtools.formatters.templating.make_surrogate.call(null,object,null);
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$2 = (function (object,header){
return devtools.formatters.templating.make_surrogate.call(null,object,header,null);
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$3 = (function (object,header,body){
return devtools.formatters.templating.make_surrogate.call(null,object,header,body,(0));
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$4 = (function (object,header,body,start_index){
return devtools.formatters.templating.mark_as_surrogate_BANG_.call(null,(function (){var obj40996 = {"target":object,"header":header,"body":body,"startIndex":(function (){var or__24790__auto__ = start_index;
if(cljs.core.truth_(or__24790__auto__)){
return or__24790__auto__;
} else {
return (0);
}
})()};
return obj40996;
})());
});

devtools.formatters.templating.make_surrogate.cljs$lang$maxFixedArity = 4;

devtools.formatters.templating.get_surrogate_target = (function devtools$formatters$templating$get_surrogate_target(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return goog.object.get(surrogate,"target");
});
devtools.formatters.templating.get_surrogate_header = (function devtools$formatters$templating$get_surrogate_header(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return goog.object.get(surrogate,"header");
});
devtools.formatters.templating.get_surrogate_body = (function devtools$formatters$templating$get_surrogate_body(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return goog.object.get(surrogate,"body");
});
devtools.formatters.templating.get_surrogate_start_index = (function devtools$formatters$templating$get_surrogate_start_index(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return goog.object.get(surrogate,"startIndex");
});
devtools.formatters.templating.make_reference = (function devtools$formatters$templating$make_reference(var_args){
var args__25872__auto__ = [];
var len__25865__auto___41007 = arguments.length;
var i__25866__auto___41008 = (0);
while(true){
if((i__25866__auto___41008 < len__25865__auto___41007)){
args__25872__auto__.push((arguments[i__25866__auto___41008]));

var G__41009 = (i__25866__auto___41008 + (1));
i__25866__auto___41008 = G__41009;
continue;
} else {
}
break;
}

var argseq__25873__auto__ = ((((1) < args__25872__auto__.length))?(new cljs.core.IndexedSeq(args__25872__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25873__auto__);
});

devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__41003){
var vec__41004 = p__41003;
var state_override_fn = cljs.core.nth.call(null,vec__41004,(0),null);
if(((state_override_fn == null)) || (cljs.core.fn_QMARK_.call(null,state_override_fn))){
} else {
throw (new Error("Assert failed: (or (nil? state-override-fn) (fn? state-override-fn))"));
}

if((object == null)){
return devtools.formatters.templating.make_template.call(null,new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"nil-style","nil-style",-1505044832),new cljs.core.Keyword(null,"nil-label","nil-label",-587789203));
} else {
var sub_state = ((cljs.core.some_QMARK_.call(null,state_override_fn))?state_override_fn.call(null,devtools.formatters.state.get_current_state.call(null)):devtools.formatters.state.get_current_state.call(null));
return devtools.formatters.templating.make_group.call(null,"object",({"object": object, "config": sub_state}));
}
});

devtools.formatters.templating.make_reference.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.make_reference.cljs$lang$applyTo = (function (seq41001){
var G__41002 = cljs.core.first.call(null,seq41001);
var seq41001__$1 = cljs.core.next.call(null,seq41001);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic(G__41002,seq41001__$1);
});

devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating.pprint_str = (function devtools$formatters$templating$pprint_str(markup){
var sb__25776__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_41013_41016 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_41014_41017 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_41013_41016,_STAR_print_fn_STAR_41014_41017,sb__25776__auto__){
return (function (x__25777__auto__){
return sb__25776__auto__.append(x__25777__auto__);
});})(_STAR_print_newline_STAR_41013_41016,_STAR_print_fn_STAR_41014_41017,sb__25776__auto__))
;

try{var _STAR_print_level_STAR_41015_41018 = cljs.core._STAR_print_level_STAR_;
cljs.core._STAR_print_level_STAR_ = (300);

try{cljs.pprint.pprint.call(null,markup);
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_41015_41018;
}}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_41014_41017;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_41013_41016;
}
return [cljs.core.str(sb__25776__auto__)].join('');
});
devtools.formatters.templating.print_preview = (function devtools$formatters$templating$print_preview(markup){
var _STAR_print_level_STAR_41020 = cljs.core._STAR_print_level_STAR_;
cljs.core._STAR_print_level_STAR_ = (1);

try{return cljs.core.pr_str.call(null,markup);
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_41020;
}});
devtools.formatters.templating.add_stack_separators = (function devtools$formatters$templating$add_stack_separators(stack){
return cljs.core.interpose.call(null,"-------------",stack);
});
devtools.formatters.templating.replace_fns_with_markers = (function devtools$formatters$templating$replace_fns_with_markers(stack){
var f = (function (v){
if(cljs.core.fn_QMARK_.call(null,v)){
return "##fn##";
} else {
return v;
}
});
return clojure.walk.prewalk.call(null,f,stack);
});
devtools.formatters.templating.pprint_render_calls = (function devtools$formatters$templating$pprint_render_calls(stack){
return cljs.core.map.call(null,devtools.formatters.templating.pprint_str,stack);
});
devtools.formatters.templating.pprint_render_stack = (function devtools$formatters$templating$pprint_render_stack(stack){
return clojure.string.join.call(null,"\n",devtools.formatters.templating.add_stack_separators.call(null,devtools.formatters.templating.pprint_render_calls.call(null,devtools.formatters.templating.replace_fns_with_markers.call(null,cljs.core.reverse.call(null,stack)))));
});
devtools.formatters.templating.pprint_render_path = (function devtools$formatters$templating$pprint_render_path(path){
return devtools.formatters.templating.pprint_str.call(null,path);
});
devtools.formatters.templating.assert_markup_error = (function devtools$formatters$templating$assert_markup_error(msg){
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str(msg),cljs.core.str("\n"),cljs.core.str("Render path: "),cljs.core.str(devtools.formatters.templating.pprint_render_path.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_)),cljs.core.str("\n"),cljs.core.str("Render stack:\n"),cljs.core.str(devtools.formatters.templating.pprint_render_stack.call(null,devtools.formatters.templating._STAR_current_render_stack_STAR_))].join('')),cljs.core.str("\n"),cljs.core.str("false")].join('')));

});
devtools.formatters.templating.surrogate_markup_QMARK_ = (function devtools$formatters$templating$surrogate_markup_QMARK_(markup){
return (cljs.core.sequential_QMARK_.call(null,markup)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,markup),"surrogate"));
});
devtools.formatters.templating.render_special = (function devtools$formatters$templating$render_special(name,args){
var G__41022 = name;
switch (G__41022) {
case "surrogate":
var obj = cljs.core.first.call(null,args);
var converted_args = cljs.core.map.call(null,devtools.formatters.templating.render_json_ml_STAR_,cljs.core.rest.call(null,args));
return cljs.core.apply.call(null,devtools.formatters.templating.make_surrogate,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [obj], null),converted_args));

break;
case "reference":
var obj = cljs.core.first.call(null,args);
var converted_obj = (cljs.core.truth_(devtools.formatters.templating.surrogate_markup_QMARK_.call(null,obj))?devtools.formatters.templating.render_json_ml_STAR_.call(null,obj):obj);
return cljs.core.apply.call(null,devtools.formatters.templating.make_reference,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [converted_obj], null),cljs.core.rest.call(null,args)));

break;
default:
return devtools.formatters.templating.assert_markup_error.call(null,[cljs.core.str("no matching special tag name: '"),cljs.core.str(name),cljs.core.str("'")].join(''));

}
});
devtools.formatters.templating.emptyish_QMARK_ = (function devtools$formatters$templating$emptyish_QMARK_(v){
if((cljs.core.seqable_QMARK_.call(null,v)) || (cljs.core.array_QMARK_.call(null,v)) || (typeof v === 'string')){
return cljs.core.empty_QMARK_.call(null,v);
} else {
return false;
}
});
devtools.formatters.templating.render_subtree = (function devtools$formatters$templating$render_subtree(tag,children){
var vec__41027 = tag;
var html_tag = cljs.core.nth.call(null,vec__41027,(0),null);
var style = cljs.core.nth.call(null,vec__41027,(1),null);
return cljs.core.apply.call(null,devtools.formatters.templating.make_template,html_tag,style,cljs.core.map.call(null,devtools.formatters.templating.render_json_ml_STAR_,cljs.core.remove.call(null,devtools.formatters.templating.emptyish_QMARK_,cljs.core.map.call(null,devtools.formatters.helpers.pref,children))));
});
devtools.formatters.templating.render_json_ml_STAR_ = (function devtools$formatters$templating$render_json_ml_STAR_(markup){
if(!(cljs.core.sequential_QMARK_.call(null,markup))){
return markup;
} else {
var _STAR_current_render_path_STAR_41031 = devtools.formatters.templating._STAR_current_render_path_STAR_;
devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_,cljs.core.first.call(null,markup));

try{var tag = devtools.formatters.helpers.pref.call(null,cljs.core.first.call(null,markup));
if(typeof tag === 'string'){
return devtools.formatters.templating.render_special.call(null,tag,cljs.core.rest.call(null,markup));
} else {
if(cljs.core.sequential_QMARK_.call(null,tag)){
return devtools.formatters.templating.render_subtree.call(null,tag,cljs.core.rest.call(null,markup));
} else {
return devtools.formatters.templating.assert_markup_error.call(null,[cljs.core.str("invalid json-ml markup at "),cljs.core.str(devtools.formatters.templating.print_preview.call(null,markup)),cljs.core.str(":")].join(''));

}
}
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_41031;
}}
});
devtools.formatters.templating.render_json_ml = (function devtools$formatters$templating$render_json_ml(markup){
var _STAR_current_render_stack_STAR_41034 = devtools.formatters.templating._STAR_current_render_stack_STAR_;
var _STAR_current_render_path_STAR_41035 = devtools.formatters.templating._STAR_current_render_path_STAR_;
devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_stack_STAR_,markup);

devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_,"<render-json-ml>");

try{return devtools.formatters.templating.render_json_ml_STAR_.call(null,markup);
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_41035;

devtools.formatters.templating._STAR_current_render_stack_STAR_ = _STAR_current_render_stack_STAR_41034;
}});
devtools.formatters.templating.assert_failed_markup_rendering = (function devtools$formatters$templating$assert_failed_markup_rendering(initial_value,value){
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("result of markup rendering must be a template,\n"),cljs.core.str("resolved to "),cljs.core.str(devtools.formatters.templating.pprint_str.call(null,value)),cljs.core.str("initial value: "),cljs.core.str(devtools.formatters.templating.pprint_str.call(null,initial_value))].join('')),cljs.core.str("\n"),cljs.core.str("false")].join('')));

});
devtools.formatters.templating.render_markup_STAR_ = (function devtools$formatters$templating$render_markup_STAR_(initial_value,value){
while(true){
if(cljs.core.fn_QMARK_.call(null,value)){
var G__41036 = initial_value;
var G__41037 = value.call(null);
initial_value = G__41036;
value = G__41037;
continue;
} else {
if((value instanceof cljs.core.Keyword)){
var G__41038 = initial_value;
var G__41039 = devtools.formatters.helpers.pref.call(null,value);
initial_value = G__41038;
value = G__41039;
continue;
} else {
if(cljs.core.sequential_QMARK_.call(null,value)){
var G__41040 = initial_value;
var G__41041 = devtools.formatters.templating.render_json_ml.call(null,value);
initial_value = G__41040;
value = G__41041;
continue;
} else {
if(cljs.core.truth_(devtools.formatters.templating.template_QMARK_.call(null,value))){
return value;
} else {
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,value))){
return value;
} else {
if(cljs.core.truth_(devtools.formatters.templating.reference_QMARK_.call(null,value))){
return value;
} else {
return devtools.formatters.templating.assert_failed_markup_rendering.call(null,initial_value,value);

}
}
}
}
}
}
break;
}
});
devtools.formatters.templating.render_markup = (function devtools$formatters$templating$render_markup(value){
return devtools.formatters.templating.render_markup_STAR_.call(null,value,value);
});

//# sourceMappingURL=templating.js.map?rel=1476131806684