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
var x76723_76724 = value;
x76723_76724.devtools$protocols$IGroup$ = true;


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
var x76728_76729 = value;
x76728_76729.devtools$protocols$ITemplate$ = true;


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
var x76733_76734 = value;
x76733_76734.devtools$protocols$ISurrogate$ = true;


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
var and__47535__auto__ = devtools.formatters.templating.group_QMARK_.call(null,value);
if(cljs.core.truth_(and__47535__auto__)){
return cljs.core._EQ_.call(null,(value[(0)]),"object");
} else {
return and__47535__auto__;
}
});
devtools.formatters.templating.make_group = (function devtools$formatters$templating$make_group(var_args){
var args__48629__auto__ = [];
var len__48622__auto___76742 = arguments.length;
var i__48623__auto___76743 = (0);
while(true){
if((i__48623__auto___76743 < len__48622__auto___76742)){
args__48629__auto__.push((arguments[i__48623__auto___76743]));

var G__76744 = (i__48623__auto___76743 + (1));
i__48623__auto___76743 = G__76744;
continue;
} else {
}
break;
}

var argseq__48630__auto__ = ((((0) < args__48629__auto__.length))?(new cljs.core.IndexedSeq(args__48629__auto__.slice((0)),(0),null)):null);
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__48630__auto__);
});

devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (items){
var group = devtools.formatters.templating.mark_as_group_BANG_.call(null,[]);
var seq__76738_76745 = cljs.core.seq.call(null,items);
var chunk__76739_76746 = null;
var count__76740_76747 = (0);
var i__76741_76748 = (0);
while(true){
if((i__76741_76748 < count__76740_76747)){
var item_76749 = cljs.core._nth.call(null,chunk__76739_76746,i__76741_76748);
if(cljs.core.some_QMARK_.call(null,item_76749)){
if(cljs.core.coll_QMARK_.call(null,item_76749)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_76749)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_76749));
}
} else {
}

var G__76750 = seq__76738_76745;
var G__76751 = chunk__76739_76746;
var G__76752 = count__76740_76747;
var G__76753 = (i__76741_76748 + (1));
seq__76738_76745 = G__76750;
chunk__76739_76746 = G__76751;
count__76740_76747 = G__76752;
i__76741_76748 = G__76753;
continue;
} else {
var temp__4657__auto___76754 = cljs.core.seq.call(null,seq__76738_76745);
if(temp__4657__auto___76754){
var seq__76738_76755__$1 = temp__4657__auto___76754;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__76738_76755__$1)){
var c__48358__auto___76756 = cljs.core.chunk_first.call(null,seq__76738_76755__$1);
var G__76757 = cljs.core.chunk_rest.call(null,seq__76738_76755__$1);
var G__76758 = c__48358__auto___76756;
var G__76759 = cljs.core.count.call(null,c__48358__auto___76756);
var G__76760 = (0);
seq__76738_76745 = G__76757;
chunk__76739_76746 = G__76758;
count__76740_76747 = G__76759;
i__76741_76748 = G__76760;
continue;
} else {
var item_76761 = cljs.core.first.call(null,seq__76738_76755__$1);
if(cljs.core.some_QMARK_.call(null,item_76761)){
if(cljs.core.coll_QMARK_.call(null,item_76761)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_76761)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_76761));
}
} else {
}

var G__76762 = cljs.core.next.call(null,seq__76738_76755__$1);
var G__76763 = null;
var G__76764 = (0);
var G__76765 = (0);
seq__76738_76745 = G__76762;
chunk__76739_76746 = G__76763;
count__76740_76747 = G__76764;
i__76741_76748 = G__76765;
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

devtools.formatters.templating.make_group.cljs$lang$applyTo = (function (seq76737){
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq76737));
});

devtools.formatters.templating.make_template = (function devtools$formatters$templating$make_template(var_args){
var args__48629__auto__ = [];
var len__48622__auto___76773 = arguments.length;
var i__48623__auto___76774 = (0);
while(true){
if((i__48623__auto___76774 < len__48622__auto___76773)){
args__48629__auto__.push((arguments[i__48623__auto___76774]));

var G__76775 = (i__48623__auto___76774 + (1));
i__48623__auto___76774 = G__76775;
continue;
} else {
}
break;
}

var argseq__48630__auto__ = ((((2) < args__48629__auto__.length))?(new cljs.core.IndexedSeq(args__48629__auto__.slice((2)),(0),null)):null);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__48630__auto__);
});

devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (tag,style,children){
var tag__$1 = devtools.formatters.helpers.pref.call(null,tag);
var style__$1 = devtools.formatters.helpers.pref.call(null,style);
var template = devtools.formatters.templating.mark_as_template_BANG_.call(null,[tag__$1,((cljs.core.empty_QMARK_.call(null,style__$1))?({}):({"style": style__$1}))]);
var seq__76769_76776 = cljs.core.seq.call(null,children);
var chunk__76770_76777 = null;
var count__76771_76778 = (0);
var i__76772_76779 = (0);
while(true){
if((i__76772_76779 < count__76771_76778)){
var child_76780 = cljs.core._nth.call(null,chunk__76770_76777,i__76772_76779);
if(cljs.core.some_QMARK_.call(null,child_76780)){
if(cljs.core.coll_QMARK_.call(null,child_76780)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_76780))));
} else {
var temp__4655__auto___76781 = devtools.formatters.helpers.pref.call(null,child_76780);
if(cljs.core.truth_(temp__4655__auto___76781)){
var child_value_76782 = temp__4655__auto___76781;
template.push(child_value_76782);
} else {
}
}
} else {
}

var G__76783 = seq__76769_76776;
var G__76784 = chunk__76770_76777;
var G__76785 = count__76771_76778;
var G__76786 = (i__76772_76779 + (1));
seq__76769_76776 = G__76783;
chunk__76770_76777 = G__76784;
count__76771_76778 = G__76785;
i__76772_76779 = G__76786;
continue;
} else {
var temp__4657__auto___76787 = cljs.core.seq.call(null,seq__76769_76776);
if(temp__4657__auto___76787){
var seq__76769_76788__$1 = temp__4657__auto___76787;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__76769_76788__$1)){
var c__48358__auto___76789 = cljs.core.chunk_first.call(null,seq__76769_76788__$1);
var G__76790 = cljs.core.chunk_rest.call(null,seq__76769_76788__$1);
var G__76791 = c__48358__auto___76789;
var G__76792 = cljs.core.count.call(null,c__48358__auto___76789);
var G__76793 = (0);
seq__76769_76776 = G__76790;
chunk__76770_76777 = G__76791;
count__76771_76778 = G__76792;
i__76772_76779 = G__76793;
continue;
} else {
var child_76794 = cljs.core.first.call(null,seq__76769_76788__$1);
if(cljs.core.some_QMARK_.call(null,child_76794)){
if(cljs.core.coll_QMARK_.call(null,child_76794)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_76794))));
} else {
var temp__4655__auto___76795 = devtools.formatters.helpers.pref.call(null,child_76794);
if(cljs.core.truth_(temp__4655__auto___76795)){
var child_value_76796 = temp__4655__auto___76795;
template.push(child_value_76796);
} else {
}
}
} else {
}

var G__76797 = cljs.core.next.call(null,seq__76769_76788__$1);
var G__76798 = null;
var G__76799 = (0);
var G__76800 = (0);
seq__76769_76776 = G__76797;
chunk__76770_76777 = G__76798;
count__76771_76778 = G__76799;
i__76772_76779 = G__76800;
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

devtools.formatters.templating.make_template.cljs$lang$applyTo = (function (seq76766){
var G__76767 = cljs.core.first.call(null,seq76766);
var seq76766__$1 = cljs.core.next.call(null,seq76766);
var G__76768 = cljs.core.first.call(null,seq76766__$1);
var seq76766__$2 = cljs.core.next.call(null,seq76766__$1);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic(G__76767,G__76768,seq76766__$2);
});

devtools.formatters.templating.concat_templates_BANG_ = (function devtools$formatters$templating$concat_templates_BANG_(var_args){
var args__48629__auto__ = [];
var len__48622__auto___76803 = arguments.length;
var i__48623__auto___76804 = (0);
while(true){
if((i__48623__auto___76804 < len__48622__auto___76803)){
args__48629__auto__.push((arguments[i__48623__auto___76804]));

var G__76805 = (i__48623__auto___76804 + (1));
i__48623__auto___76804 = G__76805;
continue;
} else {
}
break;
}

var argseq__48630__auto__ = ((((1) < args__48629__auto__.length))?(new cljs.core.IndexedSeq(args__48629__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__48630__auto__);
});

devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,templates){
return devtools.formatters.templating.mark_as_template_BANG_.call(null,goog.object.get(template,"concat").apply(template,cljs.core.into_array.call(null,cljs.core.map.call(null,cljs.core.into_array,cljs.core.keep.call(null,devtools.formatters.helpers.pref,templates)))));
});

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$applyTo = (function (seq76801){
var G__76802 = cljs.core.first.call(null,seq76801);
var seq76801__$1 = cljs.core.next.call(null,seq76801);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__76802,seq76801__$1);
});

devtools.formatters.templating.extend_template_BANG_ = (function devtools$formatters$templating$extend_template_BANG_(var_args){
var args__48629__auto__ = [];
var len__48622__auto___76808 = arguments.length;
var i__48623__auto___76809 = (0);
while(true){
if((i__48623__auto___76809 < len__48622__auto___76808)){
args__48629__auto__.push((arguments[i__48623__auto___76809]));

var G__76810 = (i__48623__auto___76809 + (1));
i__48623__auto___76809 = G__76810;
continue;
} else {
}
break;
}

var argseq__48630__auto__ = ((((1) < args__48629__auto__.length))?(new cljs.core.IndexedSeq(args__48629__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__48630__auto__);
});

devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,args){
return devtools.formatters.templating.concat_templates_BANG_.call(null,template,args);
});

devtools.formatters.templating.extend_template_BANG_.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.extend_template_BANG_.cljs$lang$applyTo = (function (seq76806){
var G__76807 = cljs.core.first.call(null,seq76806);
var seq76806__$1 = cljs.core.next.call(null,seq76806);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__76807,seq76806__$1);
});

devtools.formatters.templating.make_surrogate = (function devtools$formatters$templating$make_surrogate(var_args){
var args76811 = [];
var len__48622__auto___76816 = arguments.length;
var i__48623__auto___76817 = (0);
while(true){
if((i__48623__auto___76817 < len__48622__auto___76816)){
args76811.push((arguments[i__48623__auto___76817]));

var G__76818 = (i__48623__auto___76817 + (1));
i__48623__auto___76817 = G__76818;
continue;
} else {
}
break;
}

var G__76813 = args76811.length;
switch (G__76813) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args76811.length)].join('')));

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
return devtools.formatters.templating.mark_as_surrogate_BANG_.call(null,(function (){var obj76815 = {"target":object,"header":header,"body":body,"startIndex":(function (){var or__47547__auto__ = start_index;
if(cljs.core.truth_(or__47547__auto__)){
return or__47547__auto__;
} else {
return (0);
}
})()};
return obj76815;
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
var args__48629__auto__ = [];
var len__48622__auto___76826 = arguments.length;
var i__48623__auto___76827 = (0);
while(true){
if((i__48623__auto___76827 < len__48622__auto___76826)){
args__48629__auto__.push((arguments[i__48623__auto___76827]));

var G__76828 = (i__48623__auto___76827 + (1));
i__48623__auto___76827 = G__76828;
continue;
} else {
}
break;
}

var argseq__48630__auto__ = ((((1) < args__48629__auto__.length))?(new cljs.core.IndexedSeq(args__48629__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__48630__auto__);
});

devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__76822){
var vec__76823 = p__76822;
var state_override_fn = cljs.core.nth.call(null,vec__76823,(0),null);
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

devtools.formatters.templating.make_reference.cljs$lang$applyTo = (function (seq76820){
var G__76821 = cljs.core.first.call(null,seq76820);
var seq76820__$1 = cljs.core.next.call(null,seq76820);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic(G__76821,seq76820__$1);
});

devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating.pprint_str = (function devtools$formatters$templating$pprint_str(markup){
var sb__48533__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_76832_76835 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_76833_76836 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_76832_76835,_STAR_print_fn_STAR_76833_76836,sb__48533__auto__){
return (function (x__48534__auto__){
return sb__48533__auto__.append(x__48534__auto__);
});})(_STAR_print_newline_STAR_76832_76835,_STAR_print_fn_STAR_76833_76836,sb__48533__auto__))
;

try{var _STAR_print_level_STAR_76834_76837 = cljs.core._STAR_print_level_STAR_;
cljs.core._STAR_print_level_STAR_ = (300);

try{cljs.pprint.pprint.call(null,markup);
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_76834_76837;
}}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_76833_76836;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_76832_76835;
}
return [cljs.core.str(sb__48533__auto__)].join('');
});
devtools.formatters.templating.print_preview = (function devtools$formatters$templating$print_preview(markup){
var _STAR_print_level_STAR_76839 = cljs.core._STAR_print_level_STAR_;
cljs.core._STAR_print_level_STAR_ = (1);

try{return cljs.core.pr_str.call(null,markup);
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_76839;
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
var G__76841 = name;
switch (G__76841) {
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
var vec__76846 = tag;
var html_tag = cljs.core.nth.call(null,vec__76846,(0),null);
var style = cljs.core.nth.call(null,vec__76846,(1),null);
return cljs.core.apply.call(null,devtools.formatters.templating.make_template,html_tag,style,cljs.core.map.call(null,devtools.formatters.templating.render_json_ml_STAR_,cljs.core.remove.call(null,devtools.formatters.templating.emptyish_QMARK_,cljs.core.map.call(null,devtools.formatters.helpers.pref,children))));
});
devtools.formatters.templating.render_json_ml_STAR_ = (function devtools$formatters$templating$render_json_ml_STAR_(markup){
if(!(cljs.core.sequential_QMARK_.call(null,markup))){
return markup;
} else {
var _STAR_current_render_path_STAR_76850 = devtools.formatters.templating._STAR_current_render_path_STAR_;
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
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_76850;
}}
});
devtools.formatters.templating.render_json_ml = (function devtools$formatters$templating$render_json_ml(markup){
var _STAR_current_render_stack_STAR_76853 = devtools.formatters.templating._STAR_current_render_stack_STAR_;
var _STAR_current_render_path_STAR_76854 = devtools.formatters.templating._STAR_current_render_path_STAR_;
devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_stack_STAR_,markup);

devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_,"<render-json-ml>");

try{return devtools.formatters.templating.render_json_ml_STAR_.call(null,markup);
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_76854;

devtools.formatters.templating._STAR_current_render_stack_STAR_ = _STAR_current_render_stack_STAR_76853;
}});
devtools.formatters.templating.assert_failed_markup_rendering = (function devtools$formatters$templating$assert_failed_markup_rendering(initial_value,value){
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("result of markup rendering must be a template,\n"),cljs.core.str("resolved to "),cljs.core.str(devtools.formatters.templating.pprint_str.call(null,value)),cljs.core.str("initial value: "),cljs.core.str(devtools.formatters.templating.pprint_str.call(null,initial_value))].join('')),cljs.core.str("\n"),cljs.core.str("false")].join('')));

});
devtools.formatters.templating.render_markup_STAR_ = (function devtools$formatters$templating$render_markup_STAR_(initial_value,value){
while(true){
if(cljs.core.fn_QMARK_.call(null,value)){
var G__76855 = initial_value;
var G__76856 = value.call(null);
initial_value = G__76855;
value = G__76856;
continue;
} else {
if((value instanceof cljs.core.Keyword)){
var G__76857 = initial_value;
var G__76858 = devtools.formatters.helpers.pref.call(null,value);
initial_value = G__76857;
value = G__76858;
continue;
} else {
if(cljs.core.sequential_QMARK_.call(null,value)){
var G__76859 = initial_value;
var G__76860 = devtools.formatters.templating.render_json_ml.call(null,value);
initial_value = G__76859;
value = G__76860;
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

//# sourceMappingURL=templating.js.map?rel=1476044195830