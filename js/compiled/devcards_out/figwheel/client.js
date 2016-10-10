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
var args37530 = [];
var len__25865__auto___37533 = arguments.length;
var i__25866__auto___37534 = (0);
while(true){
if((i__25866__auto___37534 < len__25865__auto___37533)){
args37530.push((arguments[i__25866__auto___37534]));

var G__37535 = (i__25866__auto___37534 + (1));
i__25866__auto___37534 = G__37535;
continue;
} else {
}
break;
}

var G__37532 = args37530.length;
switch (G__37532) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37530.length)].join('')));

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
var args__25872__auto__ = [];
var len__25865__auto___37538 = arguments.length;
var i__25866__auto___37539 = (0);
while(true){
if((i__25866__auto___37539 < len__25865__auto___37538)){
args__25872__auto__.push((arguments[i__25866__auto___37539]));

var G__37540 = (i__25866__auto___37539 + (1));
i__25866__auto___37539 = G__37540;
continue;
} else {
}
break;
}

var argseq__25873__auto__ = ((((0) < args__25872__auto__.length))?(new cljs.core.IndexedSeq(args__25872__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__25873__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq37537){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37537));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__25872__auto__ = [];
var len__25865__auto___37542 = arguments.length;
var i__25866__auto___37543 = (0);
while(true){
if((i__25866__auto___37543 < len__25865__auto___37542)){
args__25872__auto__.push((arguments[i__25866__auto___37543]));

var G__37544 = (i__25866__auto___37543 + (1));
i__25866__auto___37543 = G__37544;
continue;
} else {
}
break;
}

var argseq__25873__auto__ = ((((0) < args__25872__auto__.length))?(new cljs.core.IndexedSeq(args__25872__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__25873__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq37541){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37541));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__37545 = cljs.core._EQ_;
var expr__37546 = (function (){var or__24790__auto__ = (function (){try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
return localStorage.getItem("figwheel_autoload");
} else {
return null;
}
}catch (e37549){if((e37549 instanceof Error)){
var e = e37549;
return false;
} else {
throw e37549;

}
}})();
if(cljs.core.truth_(or__24790__auto__)){
return or__24790__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__37545.call(null,"true",expr__37546))){
return true;
} else {
if(cljs.core.truth_(pred__37545.call(null,"false",expr__37546))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__37546)].join('')));
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
}catch (e37551){if((e37551 instanceof Error)){
var e = e37551;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e37551;

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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__37552){
var map__37555 = p__37552;
var map__37555__$1 = ((((!((map__37555 == null)))?((((map__37555.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37555.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37555):map__37555);
var message = cljs.core.get.call(null,map__37555__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__37555__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__24790__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__24790__auto__)){
return or__24790__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__24778__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__24778__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__24778__auto__;
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
var c__26963__auto___37717 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26963__auto___37717,ch){
return (function (){
var f__26964__auto__ = (function (){var switch__26851__auto__ = ((function (c__26963__auto___37717,ch){
return (function (state_37686){
var state_val_37687 = (state_37686[(1)]);
if((state_val_37687 === (7))){
var inst_37682 = (state_37686[(2)]);
var state_37686__$1 = state_37686;
var statearr_37688_37718 = state_37686__$1;
(statearr_37688_37718[(2)] = inst_37682);

(statearr_37688_37718[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37687 === (1))){
var state_37686__$1 = state_37686;
var statearr_37689_37719 = state_37686__$1;
(statearr_37689_37719[(2)] = null);

(statearr_37689_37719[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37687 === (4))){
var inst_37639 = (state_37686[(7)]);
var inst_37639__$1 = (state_37686[(2)]);
var state_37686__$1 = (function (){var statearr_37690 = state_37686;
(statearr_37690[(7)] = inst_37639__$1);

return statearr_37690;
})();
if(cljs.core.truth_(inst_37639__$1)){
var statearr_37691_37720 = state_37686__$1;
(statearr_37691_37720[(1)] = (5));

} else {
var statearr_37692_37721 = state_37686__$1;
(statearr_37692_37721[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37687 === (15))){
var inst_37646 = (state_37686[(8)]);
var inst_37661 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_37646);
var inst_37662 = cljs.core.first.call(null,inst_37661);
var inst_37663 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_37662);
var inst_37664 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_37663)].join('');
var inst_37665 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_37664);
var state_37686__$1 = state_37686;
var statearr_37693_37722 = state_37686__$1;
(statearr_37693_37722[(2)] = inst_37665);

(statearr_37693_37722[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37687 === (13))){
var inst_37670 = (state_37686[(2)]);
var state_37686__$1 = state_37686;
var statearr_37694_37723 = state_37686__$1;
(statearr_37694_37723[(2)] = inst_37670);

(statearr_37694_37723[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37687 === (6))){
var state_37686__$1 = state_37686;
var statearr_37695_37724 = state_37686__$1;
(statearr_37695_37724[(2)] = null);

(statearr_37695_37724[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37687 === (17))){
var inst_37668 = (state_37686[(2)]);
var state_37686__$1 = state_37686;
var statearr_37696_37725 = state_37686__$1;
(statearr_37696_37725[(2)] = inst_37668);

(statearr_37696_37725[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37687 === (3))){
var inst_37684 = (state_37686[(2)]);
var state_37686__$1 = state_37686;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37686__$1,inst_37684);
} else {
if((state_val_37687 === (12))){
var inst_37645 = (state_37686[(9)]);
var inst_37659 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_37645,opts);
var state_37686__$1 = state_37686;
if(cljs.core.truth_(inst_37659)){
var statearr_37697_37726 = state_37686__$1;
(statearr_37697_37726[(1)] = (15));

} else {
var statearr_37698_37727 = state_37686__$1;
(statearr_37698_37727[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37687 === (2))){
var state_37686__$1 = state_37686;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37686__$1,(4),ch);
} else {
if((state_val_37687 === (11))){
var inst_37646 = (state_37686[(8)]);
var inst_37651 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_37652 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_37646);
var inst_37653 = cljs.core.async.timeout.call(null,(1000));
var inst_37654 = [inst_37652,inst_37653];
var inst_37655 = (new cljs.core.PersistentVector(null,2,(5),inst_37651,inst_37654,null));
var state_37686__$1 = state_37686;
return cljs.core.async.ioc_alts_BANG_.call(null,state_37686__$1,(14),inst_37655);
} else {
if((state_val_37687 === (9))){
var inst_37646 = (state_37686[(8)]);
var inst_37672 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_37673 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_37646);
var inst_37674 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_37673);
var inst_37675 = [cljs.core.str("Not loading: "),cljs.core.str(inst_37674)].join('');
var inst_37676 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_37675);
var state_37686__$1 = (function (){var statearr_37699 = state_37686;
(statearr_37699[(10)] = inst_37672);

return statearr_37699;
})();
var statearr_37700_37728 = state_37686__$1;
(statearr_37700_37728[(2)] = inst_37676);

(statearr_37700_37728[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37687 === (5))){
var inst_37639 = (state_37686[(7)]);
var inst_37641 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_37642 = (new cljs.core.PersistentArrayMap(null,2,inst_37641,null));
var inst_37643 = (new cljs.core.PersistentHashSet(null,inst_37642,null));
var inst_37644 = figwheel.client.focus_msgs.call(null,inst_37643,inst_37639);
var inst_37645 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_37644);
var inst_37646 = cljs.core.first.call(null,inst_37644);
var inst_37647 = figwheel.client.autoload_QMARK_.call(null);
var state_37686__$1 = (function (){var statearr_37701 = state_37686;
(statearr_37701[(8)] = inst_37646);

(statearr_37701[(9)] = inst_37645);

return statearr_37701;
})();
if(cljs.core.truth_(inst_37647)){
var statearr_37702_37729 = state_37686__$1;
(statearr_37702_37729[(1)] = (8));

} else {
var statearr_37703_37730 = state_37686__$1;
(statearr_37703_37730[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37687 === (14))){
var inst_37657 = (state_37686[(2)]);
var state_37686__$1 = state_37686;
var statearr_37704_37731 = state_37686__$1;
(statearr_37704_37731[(2)] = inst_37657);

(statearr_37704_37731[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37687 === (16))){
var state_37686__$1 = state_37686;
var statearr_37705_37732 = state_37686__$1;
(statearr_37705_37732[(2)] = null);

(statearr_37705_37732[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37687 === (10))){
var inst_37678 = (state_37686[(2)]);
var state_37686__$1 = (function (){var statearr_37706 = state_37686;
(statearr_37706[(11)] = inst_37678);

return statearr_37706;
})();
var statearr_37707_37733 = state_37686__$1;
(statearr_37707_37733[(2)] = null);

(statearr_37707_37733[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37687 === (8))){
var inst_37645 = (state_37686[(9)]);
var inst_37649 = figwheel.client.reload_file_state_QMARK_.call(null,inst_37645,opts);
var state_37686__$1 = state_37686;
if(cljs.core.truth_(inst_37649)){
var statearr_37708_37734 = state_37686__$1;
(statearr_37708_37734[(1)] = (11));

} else {
var statearr_37709_37735 = state_37686__$1;
(statearr_37709_37735[(1)] = (12));

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
});})(c__26963__auto___37717,ch))
;
return ((function (switch__26851__auto__,c__26963__auto___37717,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__26852__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__26852__auto____0 = (function (){
var statearr_37713 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37713[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__26852__auto__);

(statearr_37713[(1)] = (1));

return statearr_37713;
});
var figwheel$client$file_reloader_plugin_$_state_machine__26852__auto____1 = (function (state_37686){
while(true){
var ret_value__26853__auto__ = (function (){try{while(true){
var result__26854__auto__ = switch__26851__auto__.call(null,state_37686);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26854__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26854__auto__;
}
break;
}
}catch (e37714){if((e37714 instanceof Object)){
var ex__26855__auto__ = e37714;
var statearr_37715_37736 = state_37686;
(statearr_37715_37736[(5)] = ex__26855__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37686);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37714;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37737 = state_37686;
state_37686 = G__37737;
continue;
} else {
return ret_value__26853__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__26852__auto__ = function(state_37686){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__26852__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__26852__auto____1.call(this,state_37686);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__26852__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__26852__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__26852__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__26852__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__26852__auto__;
})()
;})(switch__26851__auto__,c__26963__auto___37717,ch))
})();
var state__26965__auto__ = (function (){var statearr_37716 = f__26964__auto__.call(null);
(statearr_37716[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26963__auto___37717);

return statearr_37716;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26965__auto__);
});})(c__26963__auto___37717,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__37738_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__37738_SHARP_));
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
var base_path_37741 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_37741){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e37740){if((e37740 instanceof Error)){
var e = e37740;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_37741], null));
} else {
var e = e37740;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_37741))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__37742){
var map__37751 = p__37742;
var map__37751__$1 = ((((!((map__37751 == null)))?((((map__37751.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37751.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37751):map__37751);
var opts = map__37751__$1;
var build_id = cljs.core.get.call(null,map__37751__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__37751,map__37751__$1,opts,build_id){
return (function (p__37753){
var vec__37754 = p__37753;
var seq__37755 = cljs.core.seq.call(null,vec__37754);
var first__37756 = cljs.core.first.call(null,seq__37755);
var seq__37755__$1 = cljs.core.next.call(null,seq__37755);
var map__37757 = first__37756;
var map__37757__$1 = ((((!((map__37757 == null)))?((((map__37757.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37757.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37757):map__37757);
var msg = map__37757__$1;
var msg_name = cljs.core.get.call(null,map__37757__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__37755__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__37754,seq__37755,first__37756,seq__37755__$1,map__37757,map__37757__$1,msg,msg_name,_,map__37751,map__37751__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__37754,seq__37755,first__37756,seq__37755__$1,map__37757,map__37757__$1,msg,msg_name,_,map__37751,map__37751__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__37751,map__37751__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__37765){
var vec__37766 = p__37765;
var seq__37767 = cljs.core.seq.call(null,vec__37766);
var first__37768 = cljs.core.first.call(null,seq__37767);
var seq__37767__$1 = cljs.core.next.call(null,seq__37767);
var map__37769 = first__37768;
var map__37769__$1 = ((((!((map__37769 == null)))?((((map__37769.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37769.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37769):map__37769);
var msg = map__37769__$1;
var msg_name = cljs.core.get.call(null,map__37769__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__37767__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__37771){
var map__37783 = p__37771;
var map__37783__$1 = ((((!((map__37783 == null)))?((((map__37783.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37783.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37783):map__37783);
var on_compile_warning = cljs.core.get.call(null,map__37783__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__37783__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__37783,map__37783__$1,on_compile_warning,on_compile_fail){
return (function (p__37785){
var vec__37786 = p__37785;
var seq__37787 = cljs.core.seq.call(null,vec__37786);
var first__37788 = cljs.core.first.call(null,seq__37787);
var seq__37787__$1 = cljs.core.next.call(null,seq__37787);
var map__37789 = first__37788;
var map__37789__$1 = ((((!((map__37789 == null)))?((((map__37789.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37789.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37789):map__37789);
var msg = map__37789__$1;
var msg_name = cljs.core.get.call(null,map__37789__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__37787__$1;
var pred__37791 = cljs.core._EQ_;
var expr__37792 = msg_name;
if(cljs.core.truth_(pred__37791.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__37792))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__37791.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__37792))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__37783,map__37783__$1,on_compile_warning,on_compile_fail))
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
var c__26963__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26963__auto__,msg_hist,msg_names,msg){
return (function (){
var f__26964__auto__ = (function (){var switch__26851__auto__ = ((function (c__26963__auto__,msg_hist,msg_names,msg){
return (function (state_38020){
var state_val_38021 = (state_38020[(1)]);
if((state_val_38021 === (7))){
var inst_37940 = (state_38020[(2)]);
var state_38020__$1 = state_38020;
if(cljs.core.truth_(inst_37940)){
var statearr_38022_38072 = state_38020__$1;
(statearr_38022_38072[(1)] = (8));

} else {
var statearr_38023_38073 = state_38020__$1;
(statearr_38023_38073[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38021 === (20))){
var inst_38014 = (state_38020[(2)]);
var state_38020__$1 = state_38020;
var statearr_38024_38074 = state_38020__$1;
(statearr_38024_38074[(2)] = inst_38014);

(statearr_38024_38074[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38021 === (27))){
var inst_38010 = (state_38020[(2)]);
var state_38020__$1 = state_38020;
var statearr_38025_38075 = state_38020__$1;
(statearr_38025_38075[(2)] = inst_38010);

(statearr_38025_38075[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38021 === (1))){
var inst_37933 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_38020__$1 = state_38020;
if(cljs.core.truth_(inst_37933)){
var statearr_38026_38076 = state_38020__$1;
(statearr_38026_38076[(1)] = (2));

} else {
var statearr_38027_38077 = state_38020__$1;
(statearr_38027_38077[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38021 === (24))){
var inst_38012 = (state_38020[(2)]);
var state_38020__$1 = state_38020;
var statearr_38028_38078 = state_38020__$1;
(statearr_38028_38078[(2)] = inst_38012);

(statearr_38028_38078[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38021 === (4))){
var inst_38018 = (state_38020[(2)]);
var state_38020__$1 = state_38020;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38020__$1,inst_38018);
} else {
if((state_val_38021 === (15))){
var inst_38016 = (state_38020[(2)]);
var state_38020__$1 = state_38020;
var statearr_38029_38079 = state_38020__$1;
(statearr_38029_38079[(2)] = inst_38016);

(statearr_38029_38079[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38021 === (21))){
var inst_37969 = (state_38020[(2)]);
var inst_37970 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37971 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37970);
var state_38020__$1 = (function (){var statearr_38030 = state_38020;
(statearr_38030[(7)] = inst_37969);

return statearr_38030;
})();
var statearr_38031_38080 = state_38020__$1;
(statearr_38031_38080[(2)] = inst_37971);

(statearr_38031_38080[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38021 === (31))){
var inst_37999 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_38020__$1 = state_38020;
if(cljs.core.truth_(inst_37999)){
var statearr_38032_38081 = state_38020__$1;
(statearr_38032_38081[(1)] = (34));

} else {
var statearr_38033_38082 = state_38020__$1;
(statearr_38033_38082[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38021 === (32))){
var inst_38008 = (state_38020[(2)]);
var state_38020__$1 = state_38020;
var statearr_38034_38083 = state_38020__$1;
(statearr_38034_38083[(2)] = inst_38008);

(statearr_38034_38083[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38021 === (33))){
var inst_37995 = (state_38020[(2)]);
var inst_37996 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37997 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37996);
var state_38020__$1 = (function (){var statearr_38035 = state_38020;
(statearr_38035[(8)] = inst_37995);

return statearr_38035;
})();
var statearr_38036_38084 = state_38020__$1;
(statearr_38036_38084[(2)] = inst_37997);

(statearr_38036_38084[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38021 === (13))){
var inst_37954 = figwheel.client.heads_up.clear.call(null);
var state_38020__$1 = state_38020;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38020__$1,(16),inst_37954);
} else {
if((state_val_38021 === (22))){
var inst_37975 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37976 = figwheel.client.heads_up.append_warning_message.call(null,inst_37975);
var state_38020__$1 = state_38020;
var statearr_38037_38085 = state_38020__$1;
(statearr_38037_38085[(2)] = inst_37976);

(statearr_38037_38085[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38021 === (36))){
var inst_38006 = (state_38020[(2)]);
var state_38020__$1 = state_38020;
var statearr_38038_38086 = state_38020__$1;
(statearr_38038_38086[(2)] = inst_38006);

(statearr_38038_38086[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38021 === (29))){
var inst_37986 = (state_38020[(2)]);
var inst_37987 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37988 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37987);
var state_38020__$1 = (function (){var statearr_38039 = state_38020;
(statearr_38039[(9)] = inst_37986);

return statearr_38039;
})();
var statearr_38040_38087 = state_38020__$1;
(statearr_38040_38087[(2)] = inst_37988);

(statearr_38040_38087[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38021 === (6))){
var inst_37935 = (state_38020[(10)]);
var state_38020__$1 = state_38020;
var statearr_38041_38088 = state_38020__$1;
(statearr_38041_38088[(2)] = inst_37935);

(statearr_38041_38088[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38021 === (28))){
var inst_37982 = (state_38020[(2)]);
var inst_37983 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37984 = figwheel.client.heads_up.display_warning.call(null,inst_37983);
var state_38020__$1 = (function (){var statearr_38042 = state_38020;
(statearr_38042[(11)] = inst_37982);

return statearr_38042;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38020__$1,(29),inst_37984);
} else {
if((state_val_38021 === (25))){
var inst_37980 = figwheel.client.heads_up.clear.call(null);
var state_38020__$1 = state_38020;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38020__$1,(28),inst_37980);
} else {
if((state_val_38021 === (34))){
var inst_38001 = figwheel.client.heads_up.flash_loaded.call(null);
var state_38020__$1 = state_38020;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38020__$1,(37),inst_38001);
} else {
if((state_val_38021 === (17))){
var inst_37960 = (state_38020[(2)]);
var inst_37961 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37962 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37961);
var state_38020__$1 = (function (){var statearr_38043 = state_38020;
(statearr_38043[(12)] = inst_37960);

return statearr_38043;
})();
var statearr_38044_38089 = state_38020__$1;
(statearr_38044_38089[(2)] = inst_37962);

(statearr_38044_38089[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38021 === (3))){
var inst_37952 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_38020__$1 = state_38020;
if(cljs.core.truth_(inst_37952)){
var statearr_38045_38090 = state_38020__$1;
(statearr_38045_38090[(1)] = (13));

} else {
var statearr_38046_38091 = state_38020__$1;
(statearr_38046_38091[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38021 === (12))){
var inst_37948 = (state_38020[(2)]);
var state_38020__$1 = state_38020;
var statearr_38047_38092 = state_38020__$1;
(statearr_38047_38092[(2)] = inst_37948);

(statearr_38047_38092[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38021 === (2))){
var inst_37935 = (state_38020[(10)]);
var inst_37935__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_38020__$1 = (function (){var statearr_38048 = state_38020;
(statearr_38048[(10)] = inst_37935__$1);

return statearr_38048;
})();
if(cljs.core.truth_(inst_37935__$1)){
var statearr_38049_38093 = state_38020__$1;
(statearr_38049_38093[(1)] = (5));

} else {
var statearr_38050_38094 = state_38020__$1;
(statearr_38050_38094[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38021 === (23))){
var inst_37978 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_38020__$1 = state_38020;
if(cljs.core.truth_(inst_37978)){
var statearr_38051_38095 = state_38020__$1;
(statearr_38051_38095[(1)] = (25));

} else {
var statearr_38052_38096 = state_38020__$1;
(statearr_38052_38096[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38021 === (35))){
var state_38020__$1 = state_38020;
var statearr_38053_38097 = state_38020__$1;
(statearr_38053_38097[(2)] = null);

(statearr_38053_38097[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38021 === (19))){
var inst_37973 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_38020__$1 = state_38020;
if(cljs.core.truth_(inst_37973)){
var statearr_38054_38098 = state_38020__$1;
(statearr_38054_38098[(1)] = (22));

} else {
var statearr_38055_38099 = state_38020__$1;
(statearr_38055_38099[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38021 === (11))){
var inst_37944 = (state_38020[(2)]);
var state_38020__$1 = state_38020;
var statearr_38056_38100 = state_38020__$1;
(statearr_38056_38100[(2)] = inst_37944);

(statearr_38056_38100[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38021 === (9))){
var inst_37946 = figwheel.client.heads_up.clear.call(null);
var state_38020__$1 = state_38020;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38020__$1,(12),inst_37946);
} else {
if((state_val_38021 === (5))){
var inst_37937 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_38020__$1 = state_38020;
var statearr_38057_38101 = state_38020__$1;
(statearr_38057_38101[(2)] = inst_37937);

(statearr_38057_38101[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38021 === (14))){
var inst_37964 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_38020__$1 = state_38020;
if(cljs.core.truth_(inst_37964)){
var statearr_38058_38102 = state_38020__$1;
(statearr_38058_38102[(1)] = (18));

} else {
var statearr_38059_38103 = state_38020__$1;
(statearr_38059_38103[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38021 === (26))){
var inst_37990 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_38020__$1 = state_38020;
if(cljs.core.truth_(inst_37990)){
var statearr_38060_38104 = state_38020__$1;
(statearr_38060_38104[(1)] = (30));

} else {
var statearr_38061_38105 = state_38020__$1;
(statearr_38061_38105[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38021 === (16))){
var inst_37956 = (state_38020[(2)]);
var inst_37957 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37958 = figwheel.client.heads_up.display_exception.call(null,inst_37957);
var state_38020__$1 = (function (){var statearr_38062 = state_38020;
(statearr_38062[(13)] = inst_37956);

return statearr_38062;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38020__$1,(17),inst_37958);
} else {
if((state_val_38021 === (30))){
var inst_37992 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37993 = figwheel.client.heads_up.display_warning.call(null,inst_37992);
var state_38020__$1 = state_38020;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38020__$1,(33),inst_37993);
} else {
if((state_val_38021 === (10))){
var inst_37950 = (state_38020[(2)]);
var state_38020__$1 = state_38020;
var statearr_38063_38106 = state_38020__$1;
(statearr_38063_38106[(2)] = inst_37950);

(statearr_38063_38106[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38021 === (18))){
var inst_37966 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37967 = figwheel.client.heads_up.display_exception.call(null,inst_37966);
var state_38020__$1 = state_38020;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38020__$1,(21),inst_37967);
} else {
if((state_val_38021 === (37))){
var inst_38003 = (state_38020[(2)]);
var state_38020__$1 = state_38020;
var statearr_38064_38107 = state_38020__$1;
(statearr_38064_38107[(2)] = inst_38003);

(statearr_38064_38107[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38021 === (8))){
var inst_37942 = figwheel.client.heads_up.flash_loaded.call(null);
var state_38020__$1 = state_38020;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38020__$1,(11),inst_37942);
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
});})(c__26963__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__26851__auto__,c__26963__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26852__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26852__auto____0 = (function (){
var statearr_38068 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38068[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26852__auto__);

(statearr_38068[(1)] = (1));

return statearr_38068;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26852__auto____1 = (function (state_38020){
while(true){
var ret_value__26853__auto__ = (function (){try{while(true){
var result__26854__auto__ = switch__26851__auto__.call(null,state_38020);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26854__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26854__auto__;
}
break;
}
}catch (e38069){if((e38069 instanceof Object)){
var ex__26855__auto__ = e38069;
var statearr_38070_38108 = state_38020;
(statearr_38070_38108[(5)] = ex__26855__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38020);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38069;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38109 = state_38020;
state_38020 = G__38109;
continue;
} else {
return ret_value__26853__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26852__auto__ = function(state_38020){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26852__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26852__auto____1.call(this,state_38020);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26852__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26852__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26852__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26852__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26852__auto__;
})()
;})(switch__26851__auto__,c__26963__auto__,msg_hist,msg_names,msg))
})();
var state__26965__auto__ = (function (){var statearr_38071 = f__26964__auto__.call(null);
(statearr_38071[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26963__auto__);

return statearr_38071;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26965__auto__);
});})(c__26963__auto__,msg_hist,msg_names,msg))
);

return c__26963__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__26963__auto___38172 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26963__auto___38172,ch){
return (function (){
var f__26964__auto__ = (function (){var switch__26851__auto__ = ((function (c__26963__auto___38172,ch){
return (function (state_38155){
var state_val_38156 = (state_38155[(1)]);
if((state_val_38156 === (1))){
var state_38155__$1 = state_38155;
var statearr_38157_38173 = state_38155__$1;
(statearr_38157_38173[(2)] = null);

(statearr_38157_38173[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38156 === (2))){
var state_38155__$1 = state_38155;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38155__$1,(4),ch);
} else {
if((state_val_38156 === (3))){
var inst_38153 = (state_38155[(2)]);
var state_38155__$1 = state_38155;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38155__$1,inst_38153);
} else {
if((state_val_38156 === (4))){
var inst_38143 = (state_38155[(7)]);
var inst_38143__$1 = (state_38155[(2)]);
var state_38155__$1 = (function (){var statearr_38158 = state_38155;
(statearr_38158[(7)] = inst_38143__$1);

return statearr_38158;
})();
if(cljs.core.truth_(inst_38143__$1)){
var statearr_38159_38174 = state_38155__$1;
(statearr_38159_38174[(1)] = (5));

} else {
var statearr_38160_38175 = state_38155__$1;
(statearr_38160_38175[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38156 === (5))){
var inst_38143 = (state_38155[(7)]);
var inst_38145 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_38143);
var state_38155__$1 = state_38155;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38155__$1,(8),inst_38145);
} else {
if((state_val_38156 === (6))){
var state_38155__$1 = state_38155;
var statearr_38161_38176 = state_38155__$1;
(statearr_38161_38176[(2)] = null);

(statearr_38161_38176[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38156 === (7))){
var inst_38151 = (state_38155[(2)]);
var state_38155__$1 = state_38155;
var statearr_38162_38177 = state_38155__$1;
(statearr_38162_38177[(2)] = inst_38151);

(statearr_38162_38177[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38156 === (8))){
var inst_38147 = (state_38155[(2)]);
var state_38155__$1 = (function (){var statearr_38163 = state_38155;
(statearr_38163[(8)] = inst_38147);

return statearr_38163;
})();
var statearr_38164_38178 = state_38155__$1;
(statearr_38164_38178[(2)] = null);

(statearr_38164_38178[(1)] = (2));


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
});})(c__26963__auto___38172,ch))
;
return ((function (switch__26851__auto__,c__26963__auto___38172,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__26852__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__26852__auto____0 = (function (){
var statearr_38168 = [null,null,null,null,null,null,null,null,null];
(statearr_38168[(0)] = figwheel$client$heads_up_plugin_$_state_machine__26852__auto__);

(statearr_38168[(1)] = (1));

return statearr_38168;
});
var figwheel$client$heads_up_plugin_$_state_machine__26852__auto____1 = (function (state_38155){
while(true){
var ret_value__26853__auto__ = (function (){try{while(true){
var result__26854__auto__ = switch__26851__auto__.call(null,state_38155);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26854__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26854__auto__;
}
break;
}
}catch (e38169){if((e38169 instanceof Object)){
var ex__26855__auto__ = e38169;
var statearr_38170_38179 = state_38155;
(statearr_38170_38179[(5)] = ex__26855__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38155);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38169;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38180 = state_38155;
state_38155 = G__38180;
continue;
} else {
return ret_value__26853__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__26852__auto__ = function(state_38155){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__26852__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__26852__auto____1.call(this,state_38155);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__26852__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__26852__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__26852__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__26852__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__26852__auto__;
})()
;})(switch__26851__auto__,c__26963__auto___38172,ch))
})();
var state__26965__auto__ = (function (){var statearr_38171 = f__26964__auto__.call(null);
(statearr_38171[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26963__auto___38172);

return statearr_38171;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26965__auto__);
});})(c__26963__auto___38172,ch))
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
var c__26963__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26963__auto__){
return (function (){
var f__26964__auto__ = (function (){var switch__26851__auto__ = ((function (c__26963__auto__){
return (function (state_38201){
var state_val_38202 = (state_38201[(1)]);
if((state_val_38202 === (1))){
var inst_38196 = cljs.core.async.timeout.call(null,(3000));
var state_38201__$1 = state_38201;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38201__$1,(2),inst_38196);
} else {
if((state_val_38202 === (2))){
var inst_38198 = (state_38201[(2)]);
var inst_38199 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_38201__$1 = (function (){var statearr_38203 = state_38201;
(statearr_38203[(7)] = inst_38198);

return statearr_38203;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38201__$1,inst_38199);
} else {
return null;
}
}
});})(c__26963__auto__))
;
return ((function (switch__26851__auto__,c__26963__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__26852__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__26852__auto____0 = (function (){
var statearr_38207 = [null,null,null,null,null,null,null,null];
(statearr_38207[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__26852__auto__);

(statearr_38207[(1)] = (1));

return statearr_38207;
});
var figwheel$client$enforce_project_plugin_$_state_machine__26852__auto____1 = (function (state_38201){
while(true){
var ret_value__26853__auto__ = (function (){try{while(true){
var result__26854__auto__ = switch__26851__auto__.call(null,state_38201);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26854__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26854__auto__;
}
break;
}
}catch (e38208){if((e38208 instanceof Object)){
var ex__26855__auto__ = e38208;
var statearr_38209_38211 = state_38201;
(statearr_38209_38211[(5)] = ex__26855__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38201);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38208;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38212 = state_38201;
state_38201 = G__38212;
continue;
} else {
return ret_value__26853__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__26852__auto__ = function(state_38201){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__26852__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__26852__auto____1.call(this,state_38201);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__26852__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__26852__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__26852__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__26852__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__26852__auto__;
})()
;})(switch__26851__auto__,c__26963__auto__))
})();
var state__26965__auto__ = (function (){var statearr_38210 = f__26964__auto__.call(null);
(statearr_38210[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26963__auto__);

return statearr_38210;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26965__auto__);
});})(c__26963__auto__))
);

return c__26963__auto__;
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
var c__26963__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26963__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__26964__auto__ = (function (){var switch__26851__auto__ = ((function (c__26963__auto__,figwheel_version,temp__4657__auto__){
return (function (state_38235){
var state_val_38236 = (state_38235[(1)]);
if((state_val_38236 === (1))){
var inst_38229 = cljs.core.async.timeout.call(null,(2000));
var state_38235__$1 = state_38235;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38235__$1,(2),inst_38229);
} else {
if((state_val_38236 === (2))){
var inst_38231 = (state_38235[(2)]);
var inst_38232 = [cljs.core.str("Figwheel Client Version <strong>"),cljs.core.str(figwheel.client._figwheel_version_),cljs.core.str("</strong> is not equal to "),cljs.core.str("Figwheel Sidecar Version <strong>"),cljs.core.str(figwheel_version),cljs.core.str("</strong>"),cljs.core.str(".  Shutting down Websocket Connection!"),cljs.core.str("<h4>To fix try:</h4>"),cljs.core.str("<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>"),cljs.core.str("<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>"),cljs.core.str("<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>")].join('');
var inst_38233 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_38232);
var state_38235__$1 = (function (){var statearr_38237 = state_38235;
(statearr_38237[(7)] = inst_38231);

return statearr_38237;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38235__$1,inst_38233);
} else {
return null;
}
}
});})(c__26963__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__26851__auto__,c__26963__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26852__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26852__auto____0 = (function (){
var statearr_38241 = [null,null,null,null,null,null,null,null];
(statearr_38241[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26852__auto__);

(statearr_38241[(1)] = (1));

return statearr_38241;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26852__auto____1 = (function (state_38235){
while(true){
var ret_value__26853__auto__ = (function (){try{while(true){
var result__26854__auto__ = switch__26851__auto__.call(null,state_38235);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26854__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26854__auto__;
}
break;
}
}catch (e38242){if((e38242 instanceof Object)){
var ex__26855__auto__ = e38242;
var statearr_38243_38245 = state_38235;
(statearr_38243_38245[(5)] = ex__26855__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38235);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38242;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38246 = state_38235;
state_38235 = G__38246;
continue;
} else {
return ret_value__26853__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26852__auto__ = function(state_38235){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26852__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26852__auto____1.call(this,state_38235);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26852__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26852__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26852__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26852__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26852__auto__;
})()
;})(switch__26851__auto__,c__26963__auto__,figwheel_version,temp__4657__auto__))
})();
var state__26965__auto__ = (function (){var statearr_38244 = f__26964__auto__.call(null);
(statearr_38244[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26963__auto__);

return statearr_38244;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26965__auto__);
});})(c__26963__auto__,figwheel_version,temp__4657__auto__))
);

return c__26963__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__38247){
var map__38251 = p__38247;
var map__38251__$1 = ((((!((map__38251 == null)))?((((map__38251.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38251.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38251):map__38251);
var file = cljs.core.get.call(null,map__38251__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__38251__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__38251__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__38253 = "";
var G__38253__$1 = (cljs.core.truth_(file)?[cljs.core.str(G__38253),cljs.core.str("file "),cljs.core.str(file)].join(''):G__38253);
var G__38253__$2 = (cljs.core.truth_(line)?[cljs.core.str(G__38253__$1),cljs.core.str(" at line "),cljs.core.str(line)].join(''):G__38253__$1);
if(cljs.core.truth_((function (){var and__24778__auto__ = line;
if(cljs.core.truth_(and__24778__auto__)){
return column;
} else {
return and__24778__auto__;
}
})())){
return [cljs.core.str(G__38253__$2),cljs.core.str(", column "),cljs.core.str(column)].join('');
} else {
return G__38253__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__38254){
var map__38261 = p__38254;
var map__38261__$1 = ((((!((map__38261 == null)))?((((map__38261.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38261.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38261):map__38261);
var ed = map__38261__$1;
var formatted_exception = cljs.core.get.call(null,map__38261__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__38261__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__38261__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__38263_38267 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__38264_38268 = null;
var count__38265_38269 = (0);
var i__38266_38270 = (0);
while(true){
if((i__38266_38270 < count__38265_38269)){
var msg_38271 = cljs.core._nth.call(null,chunk__38264_38268,i__38266_38270);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_38271);

var G__38272 = seq__38263_38267;
var G__38273 = chunk__38264_38268;
var G__38274 = count__38265_38269;
var G__38275 = (i__38266_38270 + (1));
seq__38263_38267 = G__38272;
chunk__38264_38268 = G__38273;
count__38265_38269 = G__38274;
i__38266_38270 = G__38275;
continue;
} else {
var temp__4657__auto___38276 = cljs.core.seq.call(null,seq__38263_38267);
if(temp__4657__auto___38276){
var seq__38263_38277__$1 = temp__4657__auto___38276;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38263_38277__$1)){
var c__25601__auto___38278 = cljs.core.chunk_first.call(null,seq__38263_38277__$1);
var G__38279 = cljs.core.chunk_rest.call(null,seq__38263_38277__$1);
var G__38280 = c__25601__auto___38278;
var G__38281 = cljs.core.count.call(null,c__25601__auto___38278);
var G__38282 = (0);
seq__38263_38267 = G__38279;
chunk__38264_38268 = G__38280;
count__38265_38269 = G__38281;
i__38266_38270 = G__38282;
continue;
} else {
var msg_38283 = cljs.core.first.call(null,seq__38263_38277__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_38283);

var G__38284 = cljs.core.next.call(null,seq__38263_38277__$1);
var G__38285 = null;
var G__38286 = (0);
var G__38287 = (0);
seq__38263_38267 = G__38284;
chunk__38264_38268 = G__38285;
count__38265_38269 = G__38286;
i__38266_38270 = G__38287;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__38288){
var map__38291 = p__38288;
var map__38291__$1 = ((((!((map__38291 == null)))?((((map__38291.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38291.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38291):map__38291);
var w = map__38291__$1;
var message = cljs.core.get.call(null,map__38291__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
if(cljs.core.truth_((function (){var and__24778__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__24778__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__24778__auto__;
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
var seq__38303 = cljs.core.seq.call(null,plugins);
var chunk__38304 = null;
var count__38305 = (0);
var i__38306 = (0);
while(true){
if((i__38306 < count__38305)){
var vec__38307 = cljs.core._nth.call(null,chunk__38304,i__38306);
var k = cljs.core.nth.call(null,vec__38307,(0),null);
var plugin = cljs.core.nth.call(null,vec__38307,(1),null);
if(cljs.core.truth_(plugin)){
var pl_38313 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__38303,chunk__38304,count__38305,i__38306,pl_38313,vec__38307,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_38313.call(null,msg_hist);
});})(seq__38303,chunk__38304,count__38305,i__38306,pl_38313,vec__38307,k,plugin))
);
} else {
}

var G__38314 = seq__38303;
var G__38315 = chunk__38304;
var G__38316 = count__38305;
var G__38317 = (i__38306 + (1));
seq__38303 = G__38314;
chunk__38304 = G__38315;
count__38305 = G__38316;
i__38306 = G__38317;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__38303);
if(temp__4657__auto__){
var seq__38303__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38303__$1)){
var c__25601__auto__ = cljs.core.chunk_first.call(null,seq__38303__$1);
var G__38318 = cljs.core.chunk_rest.call(null,seq__38303__$1);
var G__38319 = c__25601__auto__;
var G__38320 = cljs.core.count.call(null,c__25601__auto__);
var G__38321 = (0);
seq__38303 = G__38318;
chunk__38304 = G__38319;
count__38305 = G__38320;
i__38306 = G__38321;
continue;
} else {
var vec__38310 = cljs.core.first.call(null,seq__38303__$1);
var k = cljs.core.nth.call(null,vec__38310,(0),null);
var plugin = cljs.core.nth.call(null,vec__38310,(1),null);
if(cljs.core.truth_(plugin)){
var pl_38322 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__38303,chunk__38304,count__38305,i__38306,pl_38322,vec__38310,k,plugin,seq__38303__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_38322.call(null,msg_hist);
});})(seq__38303,chunk__38304,count__38305,i__38306,pl_38322,vec__38310,k,plugin,seq__38303__$1,temp__4657__auto__))
);
} else {
}

var G__38323 = cljs.core.next.call(null,seq__38303__$1);
var G__38324 = null;
var G__38325 = (0);
var G__38326 = (0);
seq__38303 = G__38323;
chunk__38304 = G__38324;
count__38305 = G__38325;
i__38306 = G__38326;
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
var args38327 = [];
var len__25865__auto___38334 = arguments.length;
var i__25866__auto___38335 = (0);
while(true){
if((i__25866__auto___38335 < len__25865__auto___38334)){
args38327.push((arguments[i__25866__auto___38335]));

var G__38336 = (i__25866__auto___38335 + (1));
i__25866__auto___38335 = G__38336;
continue;
} else {
}
break;
}

var G__38329 = args38327.length;
switch (G__38329) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38327.length)].join('')));

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

var seq__38330_38338 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__38331_38339 = null;
var count__38332_38340 = (0);
var i__38333_38341 = (0);
while(true){
if((i__38333_38341 < count__38332_38340)){
var msg_38342 = cljs.core._nth.call(null,chunk__38331_38339,i__38333_38341);
figwheel.client.socket.handle_incoming_message.call(null,msg_38342);

var G__38343 = seq__38330_38338;
var G__38344 = chunk__38331_38339;
var G__38345 = count__38332_38340;
var G__38346 = (i__38333_38341 + (1));
seq__38330_38338 = G__38343;
chunk__38331_38339 = G__38344;
count__38332_38340 = G__38345;
i__38333_38341 = G__38346;
continue;
} else {
var temp__4657__auto___38347 = cljs.core.seq.call(null,seq__38330_38338);
if(temp__4657__auto___38347){
var seq__38330_38348__$1 = temp__4657__auto___38347;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38330_38348__$1)){
var c__25601__auto___38349 = cljs.core.chunk_first.call(null,seq__38330_38348__$1);
var G__38350 = cljs.core.chunk_rest.call(null,seq__38330_38348__$1);
var G__38351 = c__25601__auto___38349;
var G__38352 = cljs.core.count.call(null,c__25601__auto___38349);
var G__38353 = (0);
seq__38330_38338 = G__38350;
chunk__38331_38339 = G__38351;
count__38332_38340 = G__38352;
i__38333_38341 = G__38353;
continue;
} else {
var msg_38354 = cljs.core.first.call(null,seq__38330_38348__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_38354);

var G__38355 = cljs.core.next.call(null,seq__38330_38348__$1);
var G__38356 = null;
var G__38357 = (0);
var G__38358 = (0);
seq__38330_38338 = G__38355;
chunk__38331_38339 = G__38356;
count__38332_38340 = G__38357;
i__38333_38341 = G__38358;
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
var args__25872__auto__ = [];
var len__25865__auto___38363 = arguments.length;
var i__25866__auto___38364 = (0);
while(true){
if((i__25866__auto___38364 < len__25865__auto___38363)){
args__25872__auto__.push((arguments[i__25866__auto___38364]));

var G__38365 = (i__25866__auto___38364 + (1));
i__25866__auto___38364 = G__38365;
continue;
} else {
}
break;
}

var argseq__25873__auto__ = ((((0) < args__25872__auto__.length))?(new cljs.core.IndexedSeq(args__25872__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__25873__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__38360){
var map__38361 = p__38360;
var map__38361__$1 = ((((!((map__38361 == null)))?((((map__38361.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38361.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38361):map__38361);
var opts = map__38361__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq38359){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38359));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e38367){if((e38367 instanceof Error)){
var e = e38367;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e38367;

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
return (function (p__38371){
var map__38372 = p__38371;
var map__38372__$1 = ((((!((map__38372 == null)))?((((map__38372.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38372.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38372):map__38372);
var msg_name = cljs.core.get.call(null,map__38372__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1476131803292