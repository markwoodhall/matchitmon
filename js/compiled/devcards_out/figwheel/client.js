// Compiled by ClojureScript 1.9.229 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
goog.require('cljs.reader');
figwheel.client._figwheel_version_ = "0.5.8";
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var args73600 = [];
var len__48622__auto___73603 = arguments.length;
var i__48623__auto___73604 = (0);
while(true){
if((i__48623__auto___73604 < len__48622__auto___73603)){
args73600.push((arguments[i__48623__auto___73604]));

var G__73605 = (i__48623__auto___73604 + (1));
i__48623__auto___73604 = G__73605;
continue;
} else {
}
break;
}

var G__73602 = args73600.length;
switch (G__73602) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args73600.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),args], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__48629__auto__ = [];
var len__48622__auto___73608 = arguments.length;
var i__48623__auto___73609 = (0);
while(true){
if((i__48623__auto___73609 < len__48622__auto___73608)){
args__48629__auto__.push((arguments[i__48623__auto___73609]));

var G__73610 = (i__48623__auto___73609 + (1));
i__48623__auto___73609 = G__73610;
continue;
} else {
}
break;
}

var argseq__48630__auto__ = ((((0) < args__48629__auto__.length))?(new cljs.core.IndexedSeq(args__48629__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__48630__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq73607){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq73607));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__48629__auto__ = [];
var len__48622__auto___73612 = arguments.length;
var i__48623__auto___73613 = (0);
while(true){
if((i__48623__auto___73613 < len__48622__auto___73612)){
args__48629__auto__.push((arguments[i__48623__auto___73613]));

var G__73614 = (i__48623__auto___73613 + (1));
i__48623__auto___73613 = G__73614;
continue;
} else {
}
break;
}

var argseq__48630__auto__ = ((((0) < args__48629__auto__.length))?(new cljs.core.IndexedSeq(args__48629__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__48630__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq73611){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq73611));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__73615 = cljs.core._EQ_;
var expr__73616 = (function (){var or__47547__auto__ = (function (){try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
return localStorage.getItem("figwheel_autoload");
} else {
return null;
}
}catch (e73619){if((e73619 instanceof Error)){
var e = e73619;
return false;
} else {
throw e73619;

}
}})();
if(cljs.core.truth_(or__47547__auto__)){
return or__47547__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__73615.call(null,"true",expr__73616))){
return true;
} else {
if(cljs.core.truth_(pred__73615.call(null,"false",expr__73616))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__73616)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
} else {
}

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
}catch (e73621){if((e73621 instanceof Error)){
var e = e73621;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e73621;

}
}} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__73622){
var map__73625 = p__73622;
var map__73625__$1 = ((((!((map__73625 == null)))?((((map__73625.cljs$lang$protocol_mask$partition0$ & (64))) || (map__73625.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__73625):map__73625);
var message = cljs.core.get.call(null,map__73625__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__73625__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__47547__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__47547__auto__)){
return or__47547__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__47535__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__47535__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__47535__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__49719__auto___73787 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__49719__auto___73787,ch){
return (function (){
var f__49720__auto__ = (function (){var switch__49607__auto__ = ((function (c__49719__auto___73787,ch){
return (function (state_73756){
var state_val_73757 = (state_73756[(1)]);
if((state_val_73757 === (7))){
var inst_73752 = (state_73756[(2)]);
var state_73756__$1 = state_73756;
var statearr_73758_73788 = state_73756__$1;
(statearr_73758_73788[(2)] = inst_73752);

(statearr_73758_73788[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73757 === (1))){
var state_73756__$1 = state_73756;
var statearr_73759_73789 = state_73756__$1;
(statearr_73759_73789[(2)] = null);

(statearr_73759_73789[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73757 === (4))){
var inst_73709 = (state_73756[(7)]);
var inst_73709__$1 = (state_73756[(2)]);
var state_73756__$1 = (function (){var statearr_73760 = state_73756;
(statearr_73760[(7)] = inst_73709__$1);

return statearr_73760;
})();
if(cljs.core.truth_(inst_73709__$1)){
var statearr_73761_73790 = state_73756__$1;
(statearr_73761_73790[(1)] = (5));

} else {
var statearr_73762_73791 = state_73756__$1;
(statearr_73762_73791[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73757 === (15))){
var inst_73716 = (state_73756[(8)]);
var inst_73731 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_73716);
var inst_73732 = cljs.core.first.call(null,inst_73731);
var inst_73733 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_73732);
var inst_73734 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_73733)].join('');
var inst_73735 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_73734);
var state_73756__$1 = state_73756;
var statearr_73763_73792 = state_73756__$1;
(statearr_73763_73792[(2)] = inst_73735);

(statearr_73763_73792[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73757 === (13))){
var inst_73740 = (state_73756[(2)]);
var state_73756__$1 = state_73756;
var statearr_73764_73793 = state_73756__$1;
(statearr_73764_73793[(2)] = inst_73740);

(statearr_73764_73793[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73757 === (6))){
var state_73756__$1 = state_73756;
var statearr_73765_73794 = state_73756__$1;
(statearr_73765_73794[(2)] = null);

(statearr_73765_73794[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73757 === (17))){
var inst_73738 = (state_73756[(2)]);
var state_73756__$1 = state_73756;
var statearr_73766_73795 = state_73756__$1;
(statearr_73766_73795[(2)] = inst_73738);

(statearr_73766_73795[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73757 === (3))){
var inst_73754 = (state_73756[(2)]);
var state_73756__$1 = state_73756;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_73756__$1,inst_73754);
} else {
if((state_val_73757 === (12))){
var inst_73715 = (state_73756[(9)]);
var inst_73729 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_73715,opts);
var state_73756__$1 = state_73756;
if(cljs.core.truth_(inst_73729)){
var statearr_73767_73796 = state_73756__$1;
(statearr_73767_73796[(1)] = (15));

} else {
var statearr_73768_73797 = state_73756__$1;
(statearr_73768_73797[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73757 === (2))){
var state_73756__$1 = state_73756;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_73756__$1,(4),ch);
} else {
if((state_val_73757 === (11))){
var inst_73716 = (state_73756[(8)]);
var inst_73721 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_73722 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_73716);
var inst_73723 = cljs.core.async.timeout.call(null,(1000));
var inst_73724 = [inst_73722,inst_73723];
var inst_73725 = (new cljs.core.PersistentVector(null,2,(5),inst_73721,inst_73724,null));
var state_73756__$1 = state_73756;
return cljs.core.async.ioc_alts_BANG_.call(null,state_73756__$1,(14),inst_73725);
} else {
if((state_val_73757 === (9))){
var inst_73716 = (state_73756[(8)]);
var inst_73742 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_73743 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_73716);
var inst_73744 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_73743);
var inst_73745 = [cljs.core.str("Not loading: "),cljs.core.str(inst_73744)].join('');
var inst_73746 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_73745);
var state_73756__$1 = (function (){var statearr_73769 = state_73756;
(statearr_73769[(10)] = inst_73742);

return statearr_73769;
})();
var statearr_73770_73798 = state_73756__$1;
(statearr_73770_73798[(2)] = inst_73746);

(statearr_73770_73798[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73757 === (5))){
var inst_73709 = (state_73756[(7)]);
var inst_73711 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_73712 = (new cljs.core.PersistentArrayMap(null,2,inst_73711,null));
var inst_73713 = (new cljs.core.PersistentHashSet(null,inst_73712,null));
var inst_73714 = figwheel.client.focus_msgs.call(null,inst_73713,inst_73709);
var inst_73715 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_73714);
var inst_73716 = cljs.core.first.call(null,inst_73714);
var inst_73717 = figwheel.client.autoload_QMARK_.call(null);
var state_73756__$1 = (function (){var statearr_73771 = state_73756;
(statearr_73771[(9)] = inst_73715);

(statearr_73771[(8)] = inst_73716);

return statearr_73771;
})();
if(cljs.core.truth_(inst_73717)){
var statearr_73772_73799 = state_73756__$1;
(statearr_73772_73799[(1)] = (8));

} else {
var statearr_73773_73800 = state_73756__$1;
(statearr_73773_73800[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73757 === (14))){
var inst_73727 = (state_73756[(2)]);
var state_73756__$1 = state_73756;
var statearr_73774_73801 = state_73756__$1;
(statearr_73774_73801[(2)] = inst_73727);

(statearr_73774_73801[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73757 === (16))){
var state_73756__$1 = state_73756;
var statearr_73775_73802 = state_73756__$1;
(statearr_73775_73802[(2)] = null);

(statearr_73775_73802[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73757 === (10))){
var inst_73748 = (state_73756[(2)]);
var state_73756__$1 = (function (){var statearr_73776 = state_73756;
(statearr_73776[(11)] = inst_73748);

return statearr_73776;
})();
var statearr_73777_73803 = state_73756__$1;
(statearr_73777_73803[(2)] = null);

(statearr_73777_73803[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73757 === (8))){
var inst_73715 = (state_73756[(9)]);
var inst_73719 = figwheel.client.reload_file_state_QMARK_.call(null,inst_73715,opts);
var state_73756__$1 = state_73756;
if(cljs.core.truth_(inst_73719)){
var statearr_73778_73804 = state_73756__$1;
(statearr_73778_73804[(1)] = (11));

} else {
var statearr_73779_73805 = state_73756__$1;
(statearr_73779_73805[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__49719__auto___73787,ch))
;
return ((function (switch__49607__auto__,c__49719__auto___73787,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__49608__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__49608__auto____0 = (function (){
var statearr_73783 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_73783[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__49608__auto__);

(statearr_73783[(1)] = (1));

return statearr_73783;
});
var figwheel$client$file_reloader_plugin_$_state_machine__49608__auto____1 = (function (state_73756){
while(true){
var ret_value__49609__auto__ = (function (){try{while(true){
var result__49610__auto__ = switch__49607__auto__.call(null,state_73756);
if(cljs.core.keyword_identical_QMARK_.call(null,result__49610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49610__auto__;
}
break;
}
}catch (e73784){if((e73784 instanceof Object)){
var ex__49611__auto__ = e73784;
var statearr_73785_73806 = state_73756;
(statearr_73785_73806[(5)] = ex__49611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_73756);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e73784;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__49609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__73807 = state_73756;
state_73756 = G__73807;
continue;
} else {
return ret_value__49609__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__49608__auto__ = function(state_73756){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__49608__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__49608__auto____1.call(this,state_73756);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__49608__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__49608__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__49608__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__49608__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__49608__auto__;
})()
;})(switch__49607__auto__,c__49719__auto___73787,ch))
})();
var state__49721__auto__ = (function (){var statearr_73786 = f__49720__auto__.call(null);
(statearr_73786[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__49719__auto___73787);

return statearr_73786;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__49721__auto__);
});})(c__49719__auto___73787,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__73808_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__73808_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_73811 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_73811){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e73810){if((e73810 instanceof Error)){
var e = e73810;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_73811], null));
} else {
var e = e73810;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_73811))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__73812){
var map__73821 = p__73812;
var map__73821__$1 = ((((!((map__73821 == null)))?((((map__73821.cljs$lang$protocol_mask$partition0$ & (64))) || (map__73821.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__73821):map__73821);
var opts = map__73821__$1;
var build_id = cljs.core.get.call(null,map__73821__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__73821,map__73821__$1,opts,build_id){
return (function (p__73823){
var vec__73824 = p__73823;
var seq__73825 = cljs.core.seq.call(null,vec__73824);
var first__73826 = cljs.core.first.call(null,seq__73825);
var seq__73825__$1 = cljs.core.next.call(null,seq__73825);
var map__73827 = first__73826;
var map__73827__$1 = ((((!((map__73827 == null)))?((((map__73827.cljs$lang$protocol_mask$partition0$ & (64))) || (map__73827.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__73827):map__73827);
var msg = map__73827__$1;
var msg_name = cljs.core.get.call(null,map__73827__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__73825__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__73824,seq__73825,first__73826,seq__73825__$1,map__73827,map__73827__$1,msg,msg_name,_,map__73821,map__73821__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__73824,seq__73825,first__73826,seq__73825__$1,map__73827,map__73827__$1,msg,msg_name,_,map__73821,map__73821__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__73821,map__73821__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__73835){
var vec__73836 = p__73835;
var seq__73837 = cljs.core.seq.call(null,vec__73836);
var first__73838 = cljs.core.first.call(null,seq__73837);
var seq__73837__$1 = cljs.core.next.call(null,seq__73837);
var map__73839 = first__73838;
var map__73839__$1 = ((((!((map__73839 == null)))?((((map__73839.cljs$lang$protocol_mask$partition0$ & (64))) || (map__73839.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__73839):map__73839);
var msg = map__73839__$1;
var msg_name = cljs.core.get.call(null,map__73839__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__73837__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__73841){
var map__73853 = p__73841;
var map__73853__$1 = ((((!((map__73853 == null)))?((((map__73853.cljs$lang$protocol_mask$partition0$ & (64))) || (map__73853.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__73853):map__73853);
var on_compile_warning = cljs.core.get.call(null,map__73853__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__73853__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__73853,map__73853__$1,on_compile_warning,on_compile_fail){
return (function (p__73855){
var vec__73856 = p__73855;
var seq__73857 = cljs.core.seq.call(null,vec__73856);
var first__73858 = cljs.core.first.call(null,seq__73857);
var seq__73857__$1 = cljs.core.next.call(null,seq__73857);
var map__73859 = first__73858;
var map__73859__$1 = ((((!((map__73859 == null)))?((((map__73859.cljs$lang$protocol_mask$partition0$ & (64))) || (map__73859.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__73859):map__73859);
var msg = map__73859__$1;
var msg_name = cljs.core.get.call(null,map__73859__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__73857__$1;
var pred__73861 = cljs.core._EQ_;
var expr__73862 = msg_name;
if(cljs.core.truth_(pred__73861.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__73862))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__73861.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__73862))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__73853,map__73853__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__49719__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__49719__auto__,msg_hist,msg_names,msg){
return (function (){
var f__49720__auto__ = (function (){var switch__49607__auto__ = ((function (c__49719__auto__,msg_hist,msg_names,msg){
return (function (state_74090){
var state_val_74091 = (state_74090[(1)]);
if((state_val_74091 === (7))){
var inst_74010 = (state_74090[(2)]);
var state_74090__$1 = state_74090;
if(cljs.core.truth_(inst_74010)){
var statearr_74092_74142 = state_74090__$1;
(statearr_74092_74142[(1)] = (8));

} else {
var statearr_74093_74143 = state_74090__$1;
(statearr_74093_74143[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74091 === (20))){
var inst_74084 = (state_74090[(2)]);
var state_74090__$1 = state_74090;
var statearr_74094_74144 = state_74090__$1;
(statearr_74094_74144[(2)] = inst_74084);

(statearr_74094_74144[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74091 === (27))){
var inst_74080 = (state_74090[(2)]);
var state_74090__$1 = state_74090;
var statearr_74095_74145 = state_74090__$1;
(statearr_74095_74145[(2)] = inst_74080);

(statearr_74095_74145[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74091 === (1))){
var inst_74003 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_74090__$1 = state_74090;
if(cljs.core.truth_(inst_74003)){
var statearr_74096_74146 = state_74090__$1;
(statearr_74096_74146[(1)] = (2));

} else {
var statearr_74097_74147 = state_74090__$1;
(statearr_74097_74147[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74091 === (24))){
var inst_74082 = (state_74090[(2)]);
var state_74090__$1 = state_74090;
var statearr_74098_74148 = state_74090__$1;
(statearr_74098_74148[(2)] = inst_74082);

(statearr_74098_74148[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74091 === (4))){
var inst_74088 = (state_74090[(2)]);
var state_74090__$1 = state_74090;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_74090__$1,inst_74088);
} else {
if((state_val_74091 === (15))){
var inst_74086 = (state_74090[(2)]);
var state_74090__$1 = state_74090;
var statearr_74099_74149 = state_74090__$1;
(statearr_74099_74149[(2)] = inst_74086);

(statearr_74099_74149[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74091 === (21))){
var inst_74039 = (state_74090[(2)]);
var inst_74040 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_74041 = figwheel.client.auto_jump_to_error.call(null,opts,inst_74040);
var state_74090__$1 = (function (){var statearr_74100 = state_74090;
(statearr_74100[(7)] = inst_74039);

return statearr_74100;
})();
var statearr_74101_74150 = state_74090__$1;
(statearr_74101_74150[(2)] = inst_74041);

(statearr_74101_74150[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74091 === (31))){
var inst_74069 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_74090__$1 = state_74090;
if(cljs.core.truth_(inst_74069)){
var statearr_74102_74151 = state_74090__$1;
(statearr_74102_74151[(1)] = (34));

} else {
var statearr_74103_74152 = state_74090__$1;
(statearr_74103_74152[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74091 === (32))){
var inst_74078 = (state_74090[(2)]);
var state_74090__$1 = state_74090;
var statearr_74104_74153 = state_74090__$1;
(statearr_74104_74153[(2)] = inst_74078);

(statearr_74104_74153[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74091 === (33))){
var inst_74065 = (state_74090[(2)]);
var inst_74066 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_74067 = figwheel.client.auto_jump_to_error.call(null,opts,inst_74066);
var state_74090__$1 = (function (){var statearr_74105 = state_74090;
(statearr_74105[(8)] = inst_74065);

return statearr_74105;
})();
var statearr_74106_74154 = state_74090__$1;
(statearr_74106_74154[(2)] = inst_74067);

(statearr_74106_74154[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74091 === (13))){
var inst_74024 = figwheel.client.heads_up.clear.call(null);
var state_74090__$1 = state_74090;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_74090__$1,(16),inst_74024);
} else {
if((state_val_74091 === (22))){
var inst_74045 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_74046 = figwheel.client.heads_up.append_warning_message.call(null,inst_74045);
var state_74090__$1 = state_74090;
var statearr_74107_74155 = state_74090__$1;
(statearr_74107_74155[(2)] = inst_74046);

(statearr_74107_74155[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74091 === (36))){
var inst_74076 = (state_74090[(2)]);
var state_74090__$1 = state_74090;
var statearr_74108_74156 = state_74090__$1;
(statearr_74108_74156[(2)] = inst_74076);

(statearr_74108_74156[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74091 === (29))){
var inst_74056 = (state_74090[(2)]);
var inst_74057 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_74058 = figwheel.client.auto_jump_to_error.call(null,opts,inst_74057);
var state_74090__$1 = (function (){var statearr_74109 = state_74090;
(statearr_74109[(9)] = inst_74056);

return statearr_74109;
})();
var statearr_74110_74157 = state_74090__$1;
(statearr_74110_74157[(2)] = inst_74058);

(statearr_74110_74157[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74091 === (6))){
var inst_74005 = (state_74090[(10)]);
var state_74090__$1 = state_74090;
var statearr_74111_74158 = state_74090__$1;
(statearr_74111_74158[(2)] = inst_74005);

(statearr_74111_74158[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74091 === (28))){
var inst_74052 = (state_74090[(2)]);
var inst_74053 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_74054 = figwheel.client.heads_up.display_warning.call(null,inst_74053);
var state_74090__$1 = (function (){var statearr_74112 = state_74090;
(statearr_74112[(11)] = inst_74052);

return statearr_74112;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_74090__$1,(29),inst_74054);
} else {
if((state_val_74091 === (25))){
var inst_74050 = figwheel.client.heads_up.clear.call(null);
var state_74090__$1 = state_74090;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_74090__$1,(28),inst_74050);
} else {
if((state_val_74091 === (34))){
var inst_74071 = figwheel.client.heads_up.flash_loaded.call(null);
var state_74090__$1 = state_74090;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_74090__$1,(37),inst_74071);
} else {
if((state_val_74091 === (17))){
var inst_74030 = (state_74090[(2)]);
var inst_74031 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_74032 = figwheel.client.auto_jump_to_error.call(null,opts,inst_74031);
var state_74090__$1 = (function (){var statearr_74113 = state_74090;
(statearr_74113[(12)] = inst_74030);

return statearr_74113;
})();
var statearr_74114_74159 = state_74090__$1;
(statearr_74114_74159[(2)] = inst_74032);

(statearr_74114_74159[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74091 === (3))){
var inst_74022 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_74090__$1 = state_74090;
if(cljs.core.truth_(inst_74022)){
var statearr_74115_74160 = state_74090__$1;
(statearr_74115_74160[(1)] = (13));

} else {
var statearr_74116_74161 = state_74090__$1;
(statearr_74116_74161[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74091 === (12))){
var inst_74018 = (state_74090[(2)]);
var state_74090__$1 = state_74090;
var statearr_74117_74162 = state_74090__$1;
(statearr_74117_74162[(2)] = inst_74018);

(statearr_74117_74162[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74091 === (2))){
var inst_74005 = (state_74090[(10)]);
var inst_74005__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_74090__$1 = (function (){var statearr_74118 = state_74090;
(statearr_74118[(10)] = inst_74005__$1);

return statearr_74118;
})();
if(cljs.core.truth_(inst_74005__$1)){
var statearr_74119_74163 = state_74090__$1;
(statearr_74119_74163[(1)] = (5));

} else {
var statearr_74120_74164 = state_74090__$1;
(statearr_74120_74164[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74091 === (23))){
var inst_74048 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_74090__$1 = state_74090;
if(cljs.core.truth_(inst_74048)){
var statearr_74121_74165 = state_74090__$1;
(statearr_74121_74165[(1)] = (25));

} else {
var statearr_74122_74166 = state_74090__$1;
(statearr_74122_74166[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74091 === (35))){
var state_74090__$1 = state_74090;
var statearr_74123_74167 = state_74090__$1;
(statearr_74123_74167[(2)] = null);

(statearr_74123_74167[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74091 === (19))){
var inst_74043 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_74090__$1 = state_74090;
if(cljs.core.truth_(inst_74043)){
var statearr_74124_74168 = state_74090__$1;
(statearr_74124_74168[(1)] = (22));

} else {
var statearr_74125_74169 = state_74090__$1;
(statearr_74125_74169[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74091 === (11))){
var inst_74014 = (state_74090[(2)]);
var state_74090__$1 = state_74090;
var statearr_74126_74170 = state_74090__$1;
(statearr_74126_74170[(2)] = inst_74014);

(statearr_74126_74170[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74091 === (9))){
var inst_74016 = figwheel.client.heads_up.clear.call(null);
var state_74090__$1 = state_74090;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_74090__$1,(12),inst_74016);
} else {
if((state_val_74091 === (5))){
var inst_74007 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_74090__$1 = state_74090;
var statearr_74127_74171 = state_74090__$1;
(statearr_74127_74171[(2)] = inst_74007);

(statearr_74127_74171[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74091 === (14))){
var inst_74034 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_74090__$1 = state_74090;
if(cljs.core.truth_(inst_74034)){
var statearr_74128_74172 = state_74090__$1;
(statearr_74128_74172[(1)] = (18));

} else {
var statearr_74129_74173 = state_74090__$1;
(statearr_74129_74173[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74091 === (26))){
var inst_74060 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_74090__$1 = state_74090;
if(cljs.core.truth_(inst_74060)){
var statearr_74130_74174 = state_74090__$1;
(statearr_74130_74174[(1)] = (30));

} else {
var statearr_74131_74175 = state_74090__$1;
(statearr_74131_74175[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74091 === (16))){
var inst_74026 = (state_74090[(2)]);
var inst_74027 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_74028 = figwheel.client.heads_up.display_exception.call(null,inst_74027);
var state_74090__$1 = (function (){var statearr_74132 = state_74090;
(statearr_74132[(13)] = inst_74026);

return statearr_74132;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_74090__$1,(17),inst_74028);
} else {
if((state_val_74091 === (30))){
var inst_74062 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_74063 = figwheel.client.heads_up.display_warning.call(null,inst_74062);
var state_74090__$1 = state_74090;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_74090__$1,(33),inst_74063);
} else {
if((state_val_74091 === (10))){
var inst_74020 = (state_74090[(2)]);
var state_74090__$1 = state_74090;
var statearr_74133_74176 = state_74090__$1;
(statearr_74133_74176[(2)] = inst_74020);

(statearr_74133_74176[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74091 === (18))){
var inst_74036 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_74037 = figwheel.client.heads_up.display_exception.call(null,inst_74036);
var state_74090__$1 = state_74090;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_74090__$1,(21),inst_74037);
} else {
if((state_val_74091 === (37))){
var inst_74073 = (state_74090[(2)]);
var state_74090__$1 = state_74090;
var statearr_74134_74177 = state_74090__$1;
(statearr_74134_74177[(2)] = inst_74073);

(statearr_74134_74177[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74091 === (8))){
var inst_74012 = figwheel.client.heads_up.flash_loaded.call(null);
var state_74090__$1 = state_74090;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_74090__$1,(11),inst_74012);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__49719__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__49607__auto__,c__49719__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__49608__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__49608__auto____0 = (function (){
var statearr_74138 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_74138[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__49608__auto__);

(statearr_74138[(1)] = (1));

return statearr_74138;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__49608__auto____1 = (function (state_74090){
while(true){
var ret_value__49609__auto__ = (function (){try{while(true){
var result__49610__auto__ = switch__49607__auto__.call(null,state_74090);
if(cljs.core.keyword_identical_QMARK_.call(null,result__49610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49610__auto__;
}
break;
}
}catch (e74139){if((e74139 instanceof Object)){
var ex__49611__auto__ = e74139;
var statearr_74140_74178 = state_74090;
(statearr_74140_74178[(5)] = ex__49611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_74090);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e74139;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__49609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__74179 = state_74090;
state_74090 = G__74179;
continue;
} else {
return ret_value__49609__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__49608__auto__ = function(state_74090){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__49608__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__49608__auto____1.call(this,state_74090);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__49608__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__49608__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__49608__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__49608__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__49608__auto__;
})()
;})(switch__49607__auto__,c__49719__auto__,msg_hist,msg_names,msg))
})();
var state__49721__auto__ = (function (){var statearr_74141 = f__49720__auto__.call(null);
(statearr_74141[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__49719__auto__);

return statearr_74141;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__49721__auto__);
});})(c__49719__auto__,msg_hist,msg_names,msg))
);

return c__49719__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__49719__auto___74242 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__49719__auto___74242,ch){
return (function (){
var f__49720__auto__ = (function (){var switch__49607__auto__ = ((function (c__49719__auto___74242,ch){
return (function (state_74225){
var state_val_74226 = (state_74225[(1)]);
if((state_val_74226 === (1))){
var state_74225__$1 = state_74225;
var statearr_74227_74243 = state_74225__$1;
(statearr_74227_74243[(2)] = null);

(statearr_74227_74243[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74226 === (2))){
var state_74225__$1 = state_74225;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_74225__$1,(4),ch);
} else {
if((state_val_74226 === (3))){
var inst_74223 = (state_74225[(2)]);
var state_74225__$1 = state_74225;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_74225__$1,inst_74223);
} else {
if((state_val_74226 === (4))){
var inst_74213 = (state_74225[(7)]);
var inst_74213__$1 = (state_74225[(2)]);
var state_74225__$1 = (function (){var statearr_74228 = state_74225;
(statearr_74228[(7)] = inst_74213__$1);

return statearr_74228;
})();
if(cljs.core.truth_(inst_74213__$1)){
var statearr_74229_74244 = state_74225__$1;
(statearr_74229_74244[(1)] = (5));

} else {
var statearr_74230_74245 = state_74225__$1;
(statearr_74230_74245[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74226 === (5))){
var inst_74213 = (state_74225[(7)]);
var inst_74215 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_74213);
var state_74225__$1 = state_74225;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_74225__$1,(8),inst_74215);
} else {
if((state_val_74226 === (6))){
var state_74225__$1 = state_74225;
var statearr_74231_74246 = state_74225__$1;
(statearr_74231_74246[(2)] = null);

(statearr_74231_74246[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74226 === (7))){
var inst_74221 = (state_74225[(2)]);
var state_74225__$1 = state_74225;
var statearr_74232_74247 = state_74225__$1;
(statearr_74232_74247[(2)] = inst_74221);

(statearr_74232_74247[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74226 === (8))){
var inst_74217 = (state_74225[(2)]);
var state_74225__$1 = (function (){var statearr_74233 = state_74225;
(statearr_74233[(8)] = inst_74217);

return statearr_74233;
})();
var statearr_74234_74248 = state_74225__$1;
(statearr_74234_74248[(2)] = null);

(statearr_74234_74248[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__49719__auto___74242,ch))
;
return ((function (switch__49607__auto__,c__49719__auto___74242,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__49608__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__49608__auto____0 = (function (){
var statearr_74238 = [null,null,null,null,null,null,null,null,null];
(statearr_74238[(0)] = figwheel$client$heads_up_plugin_$_state_machine__49608__auto__);

(statearr_74238[(1)] = (1));

return statearr_74238;
});
var figwheel$client$heads_up_plugin_$_state_machine__49608__auto____1 = (function (state_74225){
while(true){
var ret_value__49609__auto__ = (function (){try{while(true){
var result__49610__auto__ = switch__49607__auto__.call(null,state_74225);
if(cljs.core.keyword_identical_QMARK_.call(null,result__49610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49610__auto__;
}
break;
}
}catch (e74239){if((e74239 instanceof Object)){
var ex__49611__auto__ = e74239;
var statearr_74240_74249 = state_74225;
(statearr_74240_74249[(5)] = ex__49611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_74225);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e74239;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__49609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__74250 = state_74225;
state_74225 = G__74250;
continue;
} else {
return ret_value__49609__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__49608__auto__ = function(state_74225){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__49608__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__49608__auto____1.call(this,state_74225);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__49608__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__49608__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__49608__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__49608__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__49608__auto__;
})()
;})(switch__49607__auto__,c__49719__auto___74242,ch))
})();
var state__49721__auto__ = (function (){var statearr_74241 = f__49720__auto__.call(null);
(statearr_74241[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__49719__auto___74242);

return statearr_74241;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__49721__auto__);
});})(c__49719__auto___74242,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__49719__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__49719__auto__){
return (function (){
var f__49720__auto__ = (function (){var switch__49607__auto__ = ((function (c__49719__auto__){
return (function (state_74271){
var state_val_74272 = (state_74271[(1)]);
if((state_val_74272 === (1))){
var inst_74266 = cljs.core.async.timeout.call(null,(3000));
var state_74271__$1 = state_74271;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_74271__$1,(2),inst_74266);
} else {
if((state_val_74272 === (2))){
var inst_74268 = (state_74271[(2)]);
var inst_74269 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_74271__$1 = (function (){var statearr_74273 = state_74271;
(statearr_74273[(7)] = inst_74268);

return statearr_74273;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_74271__$1,inst_74269);
} else {
return null;
}
}
});})(c__49719__auto__))
;
return ((function (switch__49607__auto__,c__49719__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__49608__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__49608__auto____0 = (function (){
var statearr_74277 = [null,null,null,null,null,null,null,null];
(statearr_74277[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__49608__auto__);

(statearr_74277[(1)] = (1));

return statearr_74277;
});
var figwheel$client$enforce_project_plugin_$_state_machine__49608__auto____1 = (function (state_74271){
while(true){
var ret_value__49609__auto__ = (function (){try{while(true){
var result__49610__auto__ = switch__49607__auto__.call(null,state_74271);
if(cljs.core.keyword_identical_QMARK_.call(null,result__49610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49610__auto__;
}
break;
}
}catch (e74278){if((e74278 instanceof Object)){
var ex__49611__auto__ = e74278;
var statearr_74279_74281 = state_74271;
(statearr_74279_74281[(5)] = ex__49611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_74271);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e74278;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__49609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__74282 = state_74271;
state_74271 = G__74282;
continue;
} else {
return ret_value__49609__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__49608__auto__ = function(state_74271){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__49608__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__49608__auto____1.call(this,state_74271);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__49608__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__49608__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__49608__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__49608__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__49608__auto__;
})()
;})(switch__49607__auto__,c__49719__auto__))
})();
var state__49721__auto__ = (function (){var statearr_74280 = f__49720__auto__.call(null);
(statearr_74280[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__49719__auto__);

return statearr_74280;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__49721__auto__);
});})(c__49719__auto__))
);

return c__49719__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__4657__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__4657__auto__)){
var figwheel_version = temp__4657__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__49719__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__49719__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__49720__auto__ = (function (){var switch__49607__auto__ = ((function (c__49719__auto__,figwheel_version,temp__4657__auto__){
return (function (state_74305){
var state_val_74306 = (state_74305[(1)]);
if((state_val_74306 === (1))){
var inst_74299 = cljs.core.async.timeout.call(null,(2000));
var state_74305__$1 = state_74305;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_74305__$1,(2),inst_74299);
} else {
if((state_val_74306 === (2))){
var inst_74301 = (state_74305[(2)]);
var inst_74302 = [cljs.core.str("Figwheel Client Version <strong>"),cljs.core.str(figwheel.client._figwheel_version_),cljs.core.str("</strong> is not equal to "),cljs.core.str("Figwheel Sidecar Version <strong>"),cljs.core.str(figwheel_version),cljs.core.str("</strong>"),cljs.core.str(".  Shutting down Websocket Connection!"),cljs.core.str("<h4>To fix try:</h4>"),cljs.core.str("<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>"),cljs.core.str("<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>"),cljs.core.str("<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>")].join('');
var inst_74303 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_74302);
var state_74305__$1 = (function (){var statearr_74307 = state_74305;
(statearr_74307[(7)] = inst_74301);

return statearr_74307;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_74305__$1,inst_74303);
} else {
return null;
}
}
});})(c__49719__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__49607__auto__,c__49719__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__49608__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__49608__auto____0 = (function (){
var statearr_74311 = [null,null,null,null,null,null,null,null];
(statearr_74311[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__49608__auto__);

(statearr_74311[(1)] = (1));

return statearr_74311;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__49608__auto____1 = (function (state_74305){
while(true){
var ret_value__49609__auto__ = (function (){try{while(true){
var result__49610__auto__ = switch__49607__auto__.call(null,state_74305);
if(cljs.core.keyword_identical_QMARK_.call(null,result__49610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49610__auto__;
}
break;
}
}catch (e74312){if((e74312 instanceof Object)){
var ex__49611__auto__ = e74312;
var statearr_74313_74315 = state_74305;
(statearr_74313_74315[(5)] = ex__49611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_74305);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e74312;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__49609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__74316 = state_74305;
state_74305 = G__74316;
continue;
} else {
return ret_value__49609__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__49608__auto__ = function(state_74305){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__49608__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__49608__auto____1.call(this,state_74305);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__49608__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__49608__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__49608__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__49608__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__49608__auto__;
})()
;})(switch__49607__auto__,c__49719__auto__,figwheel_version,temp__4657__auto__))
})();
var state__49721__auto__ = (function (){var statearr_74314 = f__49720__auto__.call(null);
(statearr_74314[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__49719__auto__);

return statearr_74314;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__49721__auto__);
});})(c__49719__auto__,figwheel_version,temp__4657__auto__))
);

return c__49719__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__74317){
var map__74321 = p__74317;
var map__74321__$1 = ((((!((map__74321 == null)))?((((map__74321.cljs$lang$protocol_mask$partition0$ & (64))) || (map__74321.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__74321):map__74321);
var file = cljs.core.get.call(null,map__74321__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__74321__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__74321__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__74323 = "";
var G__74323__$1 = (cljs.core.truth_(file)?[cljs.core.str(G__74323),cljs.core.str("file "),cljs.core.str(file)].join(''):G__74323);
var G__74323__$2 = (cljs.core.truth_(line)?[cljs.core.str(G__74323__$1),cljs.core.str(" at line "),cljs.core.str(line)].join(''):G__74323__$1);
if(cljs.core.truth_((function (){var and__47535__auto__ = line;
if(cljs.core.truth_(and__47535__auto__)){
return column;
} else {
return and__47535__auto__;
}
})())){
return [cljs.core.str(G__74323__$2),cljs.core.str(", column "),cljs.core.str(column)].join('');
} else {
return G__74323__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__74324){
var map__74331 = p__74324;
var map__74331__$1 = ((((!((map__74331 == null)))?((((map__74331.cljs$lang$protocol_mask$partition0$ & (64))) || (map__74331.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__74331):map__74331);
var ed = map__74331__$1;
var formatted_exception = cljs.core.get.call(null,map__74331__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__74331__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__74331__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__74333_74337 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__74334_74338 = null;
var count__74335_74339 = (0);
var i__74336_74340 = (0);
while(true){
if((i__74336_74340 < count__74335_74339)){
var msg_74341 = cljs.core._nth.call(null,chunk__74334_74338,i__74336_74340);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_74341);

var G__74342 = seq__74333_74337;
var G__74343 = chunk__74334_74338;
var G__74344 = count__74335_74339;
var G__74345 = (i__74336_74340 + (1));
seq__74333_74337 = G__74342;
chunk__74334_74338 = G__74343;
count__74335_74339 = G__74344;
i__74336_74340 = G__74345;
continue;
} else {
var temp__4657__auto___74346 = cljs.core.seq.call(null,seq__74333_74337);
if(temp__4657__auto___74346){
var seq__74333_74347__$1 = temp__4657__auto___74346;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__74333_74347__$1)){
var c__48358__auto___74348 = cljs.core.chunk_first.call(null,seq__74333_74347__$1);
var G__74349 = cljs.core.chunk_rest.call(null,seq__74333_74347__$1);
var G__74350 = c__48358__auto___74348;
var G__74351 = cljs.core.count.call(null,c__48358__auto___74348);
var G__74352 = (0);
seq__74333_74337 = G__74349;
chunk__74334_74338 = G__74350;
count__74335_74339 = G__74351;
i__74336_74340 = G__74352;
continue;
} else {
var msg_74353 = cljs.core.first.call(null,seq__74333_74347__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_74353);

var G__74354 = cljs.core.next.call(null,seq__74333_74347__$1);
var G__74355 = null;
var G__74356 = (0);
var G__74357 = (0);
seq__74333_74337 = G__74354;
chunk__74334_74338 = G__74355;
count__74335_74339 = G__74356;
i__74336_74340 = G__74357;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on "),cljs.core.str(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__74358){
var map__74361 = p__74358;
var map__74361__$1 = ((((!((map__74361 == null)))?((((map__74361.cljs$lang$protocol_mask$partition0$ & (64))) || (map__74361.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__74361):map__74361);
var w = map__74361__$1;
var message = cljs.core.get.call(null,map__74361__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message)),cljs.core.str(" in "),cljs.core.str(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/compiled/devcards_out/figwheel/client.cljs",33,1,336,336,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/compiled/devcards_out/figwheel/client.cljs",30,1,328,328,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__47535__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__47535__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__47535__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__74373 = cljs.core.seq.call(null,plugins);
var chunk__74374 = null;
var count__74375 = (0);
var i__74376 = (0);
while(true){
if((i__74376 < count__74375)){
var vec__74377 = cljs.core._nth.call(null,chunk__74374,i__74376);
var k = cljs.core.nth.call(null,vec__74377,(0),null);
var plugin = cljs.core.nth.call(null,vec__74377,(1),null);
if(cljs.core.truth_(plugin)){
var pl_74383 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__74373,chunk__74374,count__74375,i__74376,pl_74383,vec__74377,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_74383.call(null,msg_hist);
});})(seq__74373,chunk__74374,count__74375,i__74376,pl_74383,vec__74377,k,plugin))
);
} else {
}

var G__74384 = seq__74373;
var G__74385 = chunk__74374;
var G__74386 = count__74375;
var G__74387 = (i__74376 + (1));
seq__74373 = G__74384;
chunk__74374 = G__74385;
count__74375 = G__74386;
i__74376 = G__74387;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__74373);
if(temp__4657__auto__){
var seq__74373__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__74373__$1)){
var c__48358__auto__ = cljs.core.chunk_first.call(null,seq__74373__$1);
var G__74388 = cljs.core.chunk_rest.call(null,seq__74373__$1);
var G__74389 = c__48358__auto__;
var G__74390 = cljs.core.count.call(null,c__48358__auto__);
var G__74391 = (0);
seq__74373 = G__74388;
chunk__74374 = G__74389;
count__74375 = G__74390;
i__74376 = G__74391;
continue;
} else {
var vec__74380 = cljs.core.first.call(null,seq__74373__$1);
var k = cljs.core.nth.call(null,vec__74380,(0),null);
var plugin = cljs.core.nth.call(null,vec__74380,(1),null);
if(cljs.core.truth_(plugin)){
var pl_74392 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__74373,chunk__74374,count__74375,i__74376,pl_74392,vec__74380,k,plugin,seq__74373__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_74392.call(null,msg_hist);
});})(seq__74373,chunk__74374,count__74375,i__74376,pl_74392,vec__74380,k,plugin,seq__74373__$1,temp__4657__auto__))
);
} else {
}

var G__74393 = cljs.core.next.call(null,seq__74373__$1);
var G__74394 = null;
var G__74395 = (0);
var G__74396 = (0);
seq__74373 = G__74393;
chunk__74374 = G__74394;
count__74375 = G__74395;
i__74376 = G__74396;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args74397 = [];
var len__48622__auto___74404 = arguments.length;
var i__48623__auto___74405 = (0);
while(true){
if((i__48623__auto___74405 < len__48622__auto___74404)){
args74397.push((arguments[i__48623__auto___74405]));

var G__74406 = (i__48623__auto___74405 + (1));
i__48623__auto___74405 = G__74406;
continue;
} else {
}
break;
}

var G__74399 = args74397.length;
switch (G__74399) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args74397.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__74400_74408 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__74401_74409 = null;
var count__74402_74410 = (0);
var i__74403_74411 = (0);
while(true){
if((i__74403_74411 < count__74402_74410)){
var msg_74412 = cljs.core._nth.call(null,chunk__74401_74409,i__74403_74411);
figwheel.client.socket.handle_incoming_message.call(null,msg_74412);

var G__74413 = seq__74400_74408;
var G__74414 = chunk__74401_74409;
var G__74415 = count__74402_74410;
var G__74416 = (i__74403_74411 + (1));
seq__74400_74408 = G__74413;
chunk__74401_74409 = G__74414;
count__74402_74410 = G__74415;
i__74403_74411 = G__74416;
continue;
} else {
var temp__4657__auto___74417 = cljs.core.seq.call(null,seq__74400_74408);
if(temp__4657__auto___74417){
var seq__74400_74418__$1 = temp__4657__auto___74417;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__74400_74418__$1)){
var c__48358__auto___74419 = cljs.core.chunk_first.call(null,seq__74400_74418__$1);
var G__74420 = cljs.core.chunk_rest.call(null,seq__74400_74418__$1);
var G__74421 = c__48358__auto___74419;
var G__74422 = cljs.core.count.call(null,c__48358__auto___74419);
var G__74423 = (0);
seq__74400_74408 = G__74420;
chunk__74401_74409 = G__74421;
count__74402_74410 = G__74422;
i__74403_74411 = G__74423;
continue;
} else {
var msg_74424 = cljs.core.first.call(null,seq__74400_74418__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_74424);

var G__74425 = cljs.core.next.call(null,seq__74400_74418__$1);
var G__74426 = null;
var G__74427 = (0);
var G__74428 = (0);
seq__74400_74408 = G__74425;
chunk__74401_74409 = G__74426;
count__74402_74410 = G__74427;
i__74403_74411 = G__74428;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__48629__auto__ = [];
var len__48622__auto___74433 = arguments.length;
var i__48623__auto___74434 = (0);
while(true){
if((i__48623__auto___74434 < len__48622__auto___74433)){
args__48629__auto__.push((arguments[i__48623__auto___74434]));

var G__74435 = (i__48623__auto___74434 + (1));
i__48623__auto___74434 = G__74435;
continue;
} else {
}
break;
}

var argseq__48630__auto__ = ((((0) < args__48629__auto__.length))?(new cljs.core.IndexedSeq(args__48629__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__48630__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__74430){
var map__74431 = p__74430;
var map__74431__$1 = ((((!((map__74431 == null)))?((((map__74431.cljs$lang$protocol_mask$partition0$ & (64))) || (map__74431.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__74431):map__74431);
var opts = map__74431__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq74429){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq74429));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e74437){if((e74437 instanceof Error)){
var e = e74437;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e74437;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__74441){
var map__74442 = p__74441;
var map__74442__$1 = ((((!((map__74442 == null)))?((((map__74442.cljs$lang$protocol_mask$partition0$ & (64))) || (map__74442.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__74442):map__74442);
var msg_name = cljs.core.get.call(null,map__74442__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1476044192505