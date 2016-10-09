// Compiled by ClojureScript 1.9.229 {}
goog.provide('devcards.core');
goog.require('cljs.core');
goog.require('devcards.util.edn_renderer');
goog.require('devcards.util.utils');
goog.require('devcards.system');
goog.require('cljs.core.async');
goog.require('cljs.test');
goog.require('devcards.util.markdown');
goog.require('sablono.core');
goog.require('clojure.string');
cljs.core.enable_console_print_BANG_.call(null);
if(typeof devcards.core.devcard_event_chan !== 'undefined'){
} else {
devcards.core.devcard_event_chan = cljs.core.async.chan.call(null);
}
/**
 * Make a react Symbol the same way as React 0.14
 */
devcards.core.react_element_type_symbol = (function (){var or__47547__auto__ = (function (){var and__47535__auto__ = typeof Symbol !== 'undefined';
if(and__47535__auto__){
var and__47535__auto____$1 = cljs.core.fn_QMARK_.call(null,Symbol);
if(and__47535__auto____$1){
var and__47535__auto____$2 = (Symbol["for"]);
if(cljs.core.truth_(and__47535__auto____$2)){
return (Symbol["for"]).call(null,"react.element");
} else {
return and__47535__auto____$2;
}
} else {
return and__47535__auto____$1;
}
} else {
return and__47535__auto__;
}
})();
if(cljs.core.truth_(or__47547__auto__)){
return or__47547__auto__;
} else {
return (60103);
}
})();
/**
 * This event doesn't need to be fired for the system to run. It will just render
 * a little faster on reload if it is fired. Figwheel isn't required to run devcards.
 */
devcards.core.register_figwheel_listeners_BANG_ = (function devcards$core$register_figwheel_listeners_BANG_(){
if(typeof devcards.core.register_listeners_fig !== 'undefined'){
return null;
} else {
devcards.core.register_listeners_fig = (function (){
document.body.addEventListener("figwheel.js-reload",(function (p1__69933_SHARP_){
return cljs.core.async.put_BANG_.call(null,devcards.core.devcard_event_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"jsreload","jsreload",331693051),p1__69933_SHARP_.detail], null));
}));

return true;
})()
;
}
});
devcards.core.assert_options_map = (function devcards$core$assert_options_map(m){
if(!(((m == null)) || (cljs.core.map_QMARK_.call(null,m)))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"propagated-errors","propagated-errors",1359777293),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"message","message",-406056002),"should be a Map or nil.",new cljs.core.Keyword(null,"value","value",305978217),m], null)], null)], null);
} else {
return m;
}
});
devcards.core.start_devcard_ui_BANG__STAR_ = (function devcards$core$start_devcard_ui_BANG__STAR_(var_args){
var args69934 = [];
var len__48622__auto___69937 = arguments.length;
var i__48623__auto___69938 = (0);
while(true){
if((i__48623__auto___69938 < len__48622__auto___69937)){
args69934.push((arguments[i__48623__auto___69938]));

var G__69939 = (i__48623__auto___69938 + (1));
i__48623__auto___69938 = G__69939;
continue;
} else {
}
break;
}

var G__69936 = args69934.length;
switch (G__69936) {
case 0:
return devcards.core.start_devcard_ui_BANG__STAR_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return devcards.core.start_devcard_ui_BANG__STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args69934.length)].join('')));

}
});

devcards.core.start_devcard_ui_BANG__STAR_.cljs$core$IFn$_invoke$arity$0 = (function (){
return devcards.core.start_devcard_ui_BANG__STAR_.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

devcards.core.start_devcard_ui_BANG__STAR_.cljs$core$IFn$_invoke$arity$1 = (function (options){
if((cljs.core.map_QMARK_.call(null,options)) && (cljs.core.map_QMARK_.call(null,new cljs.core.Keyword(null,"default-card-options","default-card-options",1708667352).cljs$core$IFn$_invoke$arity$1(options)))){
cljs.core.swap_BANG_.call(null,devcards.system.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"base-card-options","base-card-options",141017756)], null),(function (opts){
return cljs.core.merge.call(null,opts,new cljs.core.Keyword(null,"default-card-options","default-card-options",1708667352).cljs$core$IFn$_invoke$arity$1(options));
}));
} else {
}

devcards.system.start_ui.call(null,devcards.core.devcard_event_chan);

return devcards.core.register_figwheel_listeners_BANG_.call(null);
});

devcards.core.start_devcard_ui_BANG__STAR_.cljs$lang$maxFixedArity = 1;

devcards.core.card_QMARK_ = (function devcards$core$card_QMARK_(c){
var and__47535__auto__ = cljs.core.map_QMARK_.call(null,c);
if(and__47535__auto__){
var map__69947 = c;
var map__69947__$1 = ((((!((map__69947 == null)))?((((map__69947.cljs$lang$protocol_mask$partition0$ & (64))) || (map__69947.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__69947):map__69947);
var path = cljs.core.get.call(null,map__69947__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var func = cljs.core.get.call(null,map__69947__$1,new cljs.core.Keyword(null,"func","func",-238706040));
cljs.core.vector_QMARK_.call(null,path);

cljs.core.not_empty.call(null,path);

cljs.core.every_QMARK_.call(null,cljs.core.keyword_QMARK_,path);

return cljs.core.fn_QMARK_.call(null,func);
} else {
return and__47535__auto__;
}
});
devcards.core.register_card = (function devcards$core$register_card(c){
if(cljs.core.truth_(devcards.core.card_QMARK_.call(null,c))){
} else {
throw (new Error("Assert failed: (card? c)"));
}


return cljs.core.async.put_BANG_.call(null,devcards.core.devcard_event_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"register-card","register-card",-1375971588),c], null));
});
devcards.core.react_raw = (function devcards$core$react_raw(raw_html_str){

return React.DOM.div(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str(cljs.core.hash.call(null,raw_html_str))].join(''),new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"__html","__html",674048345),raw_html_str], null)], null)));
});

devcards.core.get_hljs = (function devcards$core$get_hljs(){
return (goog.global["hljs"]);
});
devcards.core.highlight_node = (function devcards$core$highlight_node(this$){
var temp__4657__auto__ = devcards.core.ref__GT_node.call(null,this$,"code-ref");
if(cljs.core.truth_(temp__4657__auto__)){
var node = temp__4657__auto__;
var temp__4657__auto____$1 = devcards.core.get_hljs.call(null);
if(cljs.core.truth_(temp__4657__auto____$1)){
var hljs = temp__4657__auto____$1;
var temp__4657__auto____$2 = (hljs["highlightBlock"]);
if(cljs.core.truth_(temp__4657__auto____$2)){
var highlight_block = temp__4657__auto____$2;
return highlight_block.call(null,node);
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
var base__59529__auto___69953 = ({"componentDidMount": (function (){
var this$ = this;
return devcards.core.highlight_node.call(null,this$);
}), "componentDidUpdate": (function (){
var this$ = this;
return devcards.core.highlight_node.call(null,this$);
}), "render": (function (){
var this$ = this;
return React.createElement("pre",({"className": (cljs.core.truth_(devcards.core.get_hljs.call(null))?"com-rigsomelight-devcards-code-highlighting":""), "key": cljs.core.hash.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"code","code",1586293142)))}),React.createElement("code",({"className": (function (){var or__47547__auto__ = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"lang","lang",-1819677104));
if(cljs.core.truth_(or__47547__auto__)){
return or__47547__auto__;
} else {
return "";
}
})(), "ref": "code-ref"}),sablono.interpreter.interpret.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"code","code",1586293142)))));
})});
if(typeof devcards.core.CodeHighlight !== 'undefined'){
} else {
devcards.core.CodeHighlight = React.createClass(base__59529__auto___69953);
}

var seq__69949_69954 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.name,cljs.core.list(new cljs.core.Symbol("cljs-react-reload.core","shouldComponentUpdate","cljs-react-reload.core/shouldComponentUpdate",-526191550,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillReceiveProps","cljs-react-reload.core/componentWillReceiveProps",-1087108864,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillMount","cljs-react-reload.core/componentWillMount",-1529759893,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidMount","cljs-react-reload.core/componentDidMount",-2035273110,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUpdate","cljs-react-reload.core/componentWillUpdate",-453323386,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidUpdate","cljs-react-reload.core/componentDidUpdate",-6660227,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUnmount","cljs-react-reload.core/componentWillUnmount",-1549767430,null),new cljs.core.Symbol("cljs-react-reload.core","render","cljs-react-reload.core/render",298414516,null))));
var chunk__69950_69955 = null;
var count__69951_69956 = (0);
var i__69952_69957 = (0);
while(true){
if((i__69952_69957 < count__69951_69956)){
var property__59530__auto___69958 = cljs.core._nth.call(null,chunk__69950_69955,i__69952_69957);
if(cljs.core.truth_((base__59529__auto___69953[property__59530__auto___69958]))){
(devcards.core.CodeHighlight.prototype[property__59530__auto___69958] = (base__59529__auto___69953[property__59530__auto___69958]));
} else {
}

var G__69959 = seq__69949_69954;
var G__69960 = chunk__69950_69955;
var G__69961 = count__69951_69956;
var G__69962 = (i__69952_69957 + (1));
seq__69949_69954 = G__69959;
chunk__69950_69955 = G__69960;
count__69951_69956 = G__69961;
i__69952_69957 = G__69962;
continue;
} else {
var temp__4657__auto___69963 = cljs.core.seq.call(null,seq__69949_69954);
if(temp__4657__auto___69963){
var seq__69949_69964__$1 = temp__4657__auto___69963;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__69949_69964__$1)){
var c__48358__auto___69965 = cljs.core.chunk_first.call(null,seq__69949_69964__$1);
var G__69966 = cljs.core.chunk_rest.call(null,seq__69949_69964__$1);
var G__69967 = c__48358__auto___69965;
var G__69968 = cljs.core.count.call(null,c__48358__auto___69965);
var G__69969 = (0);
seq__69949_69954 = G__69966;
chunk__69950_69955 = G__69967;
count__69951_69956 = G__69968;
i__69952_69957 = G__69969;
continue;
} else {
var property__59530__auto___69970 = cljs.core.first.call(null,seq__69949_69964__$1);
if(cljs.core.truth_((base__59529__auto___69953[property__59530__auto___69970]))){
(devcards.core.CodeHighlight.prototype[property__59530__auto___69970] = (base__59529__auto___69953[property__59530__auto___69970]));
} else {
}

var G__69971 = cljs.core.next.call(null,seq__69949_69964__$1);
var G__69972 = null;
var G__69973 = (0);
var G__69974 = (0);
seq__69949_69954 = G__69971;
chunk__69950_69955 = G__69972;
count__69951_69956 = G__69973;
i__69952_69957 = G__69974;
continue;
}
} else {
}
}
break;
}
devcards.core.code_highlight = (function devcards$core$code_highlight(code_str,lang){
return React.createElement(devcards.core.CodeHighlight,({"code": code_str, "lang": lang}));
});
if(typeof devcards.core.markdown_block__GT_react !== 'undefined'){
} else {
devcards.core.markdown_block__GT_react = (function (){var method_table__48472__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__48473__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__48474__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__48475__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__48476__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"devcards.core","markdown-block->react"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__48476__auto__,method_table__48472__auto__,prefer_table__48473__auto__,method_cache__48474__auto__,cached_hierarchy__48475__auto__));
})();
}
cljs.core._add_method.call(null,devcards.core.markdown_block__GT_react,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__69975){
var map__69976 = p__69975;
var map__69976__$1 = ((((!((map__69976 == null)))?((((map__69976.cljs$lang$protocol_mask$partition0$ & (64))) || (map__69976.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__69976):map__69976);
var content = cljs.core.get.call(null,map__69976__$1,new cljs.core.Keyword(null,"content","content",15833224));
return devcards.core.react_raw.call(null,devcards.util.markdown.markdown_to_html.call(null,content));
}));
cljs.core._add_method.call(null,devcards.core.markdown_block__GT_react,new cljs.core.Keyword(null,"code-block","code-block",-2113425141),(function (p__69978){
var map__69979 = p__69978;
var map__69979__$1 = ((((!((map__69979 == null)))?((((map__69979.cljs$lang$protocol_mask$partition0$ & (64))) || (map__69979.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__69979):map__69979);
var block = map__69979__$1;
var content = cljs.core.get.call(null,map__69979__$1,new cljs.core.Keyword(null,"content","content",15833224));
return React.createElement(devcards.core.CodeHighlight,({"code": new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(block), "lang": new cljs.core.Keyword(null,"lang","lang",-1819677104).cljs$core$IFn$_invoke$arity$1(block)}));
}));
devcards.core.markdown__GT_react = (function devcards$core$markdown__GT_react(var_args){
var args__48629__auto__ = [];
var len__48622__auto___69982 = arguments.length;
var i__48623__auto___69983 = (0);
while(true){
if((i__48623__auto___69983 < len__48622__auto___69982)){
args__48629__auto__.push((arguments[i__48623__auto___69983]));

var G__69984 = (i__48623__auto___69983 + (1));
i__48623__auto___69983 = G__69984;
continue;
} else {
}
break;
}

var argseq__48630__auto__ = ((((0) < args__48629__auto__.length))?(new cljs.core.IndexedSeq(args__48629__auto__.slice((0)),(0),null)):null);
return devcards.core.markdown__GT_react.cljs$core$IFn$_invoke$arity$variadic(argseq__48630__auto__);
});

devcards.core.markdown__GT_react.cljs$core$IFn$_invoke$arity$variadic = (function (strs){
var strs__$1 = cljs.core.map.call(null,(function (x){
if(typeof x === 'string'){
return x;
} else {
if(cljs.core.truth_(devcards.core.react_element_QMARK_.call(null,x))){
return null;
} else {
return [cljs.core.str("```clojure\n"),cljs.core.str(devcards.util.utils.pprint_code.call(null,x)),cljs.core.str("```\n")].join('');
}
}
}),strs);
if(cljs.core.every_QMARK_.call(null,cljs.core.string_QMARK_,strs__$1)){
var blocks = cljs.core.mapcat.call(null,devcards.util.markdown.parse_out_blocks,strs__$1);
return React.createElement("div",({"key": "devcards-markdown-block", "className": "com-rigsomelight-devcards-markdown com-rigsomelight-devcards-typog"}),sablono.interpreter.interpret.call(null,cljs.core.map_indexed.call(null,((function (blocks,strs__$1){
return (function (i,data){
return React.createElement("div",({"key": i}),sablono.interpreter.interpret.call(null,devcards.core.markdown_block__GT_react.call(null,data)));
});})(blocks,strs__$1))
,blocks)));
} else {
var message = "Devcards Error: Didn't pass a seq of strings to less-sensitive-markdown.\n You are probably trying to pass react to markdown instead of strings. (defcard-doc (doc ...)) won't work.";
console.error(message);

return React.createElement("div",({"style": ({"color": "#a94442"}), "key": "devcards-markdown-error"}),sablono.interpreter.interpret.call(null,message));
}
});

devcards.core.markdown__GT_react.cljs$lang$maxFixedArity = (0);

devcards.core.markdown__GT_react.cljs$lang$applyTo = (function (seq69981){
return devcards.core.markdown__GT_react.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq69981));
});

devcards.core.naked_card = (function devcards$core$naked_card(children,card){
var classname = cljs.core.get_in.call(null,card,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"classname","classname",777390796)], null));
var padding_QMARK_ = cljs.core.get_in.call(null,card,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"padding","padding",1660304693)], null));
return React.createElement("div",({"key": "devcards_naked-card", "className": (function (){var G__69986 = devcards.system.devcards_rendered_card_class;
var G__69986__$1 = (cljs.core.truth_(padding_QMARK_)?[cljs.core.str(G__69986),cljs.core.str(" com-rigsomelight-devcards-devcard-padding")].join(''):G__69986);
if(cljs.core.truth_(cljs.core.not_empty.call(null,classname))){
return [cljs.core.str(G__69986__$1),cljs.core.str(" "),cljs.core.str(classname)].join('');
} else {
return G__69986__$1;
}
})()}),sablono.interpreter.interpret.call(null,children));
});
devcards.core.frame = (function devcards$core$frame(var_args){
var args69987 = [];
var len__48622__auto___69995 = arguments.length;
var i__48623__auto___69996 = (0);
while(true){
if((i__48623__auto___69996 < len__48622__auto___69995)){
args69987.push((arguments[i__48623__auto___69996]));

var G__69997 = (i__48623__auto___69996 + (1));
i__48623__auto___69996 = G__69997;
continue;
} else {
}
break;
}

var G__69989 = args69987.length;
switch (G__69989) {
case 1:
return devcards.core.frame.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return devcards.core.frame.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args69987.length)].join('')));

}
});

devcards.core.frame.cljs$core$IFn$_invoke$arity$1 = (function (children){
return devcards.core.frame.call(null,children,cljs.core.PersistentArrayMap.EMPTY);
});

devcards.core.frame.cljs$core$IFn$_invoke$arity$2 = (function (children,card){
var map__69990 = card;
var map__69990__$1 = ((((!((map__69990 == null)))?((((map__69990.cljs$lang$protocol_mask$partition0$ & (64))) || (map__69990.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__69990):map__69990);
var path = cljs.core.get.call(null,map__69990__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var options = cljs.core.get.call(null,map__69990__$1,new cljs.core.Keyword(null,"options","options",99638489));
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"hidden","hidden",-312506092).cljs$core$IFn$_invoke$arity$1(options))){
if(new cljs.core.Keyword(null,"heading","heading",-1312171873).cljs$core$IFn$_invoke$arity$1(options) === false){
return React.createElement("div",({"key": cljs.core.prn_str.call(null,path), "className": sablono.util.join_classes.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("com-rigsomelight-devcards-card-base-no-pad "),cljs.core.str((cljs.core.truth_(new cljs.core.Keyword(null,"hide-border","hide-border",1463657151).cljs$core$IFn$_invoke$arity$1(options))?" com-rigsomelight-devcards-card-hide-border":null))].join('')], null))}),sablono.interpreter.interpret.call(null,devcards.core.naked_card.call(null,children,card)));
} else {
return React.createElement("div",({"key": cljs.core.prn_str.call(null,path), "className": "com-rigsomelight-devcards-base com-rigsomelight-devcards-card-base-no-pad"}),React.createElement("div",({"key": "devcards_frame-normal-body", "className": "com-rigsomelight-devcards-panel-heading com-rigsomelight-devcards-typog"}),(cljs.core.truth_(path)?sablono.interpreter.interpret.call(null,React.createElement("a",({"href": "#", "onClick": devcards.system.prevent__GT_.call(null,((function (map__69990,map__69990__$1,path,options){
return (function (){
return devcards.system.set_current_path_BANG_.call(null,devcards.system.app_state,path);
});})(map__69990,map__69990__$1,path,options))
)}),sablono.interpreter.interpret.call(null,cljs.core.name.call(null,cljs.core.last.call(null,path)))," ")):sablono.interpreter.interpret.call(null,(function (){var attrs69992 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(card);
return cljs.core.apply.call(null,React.createElement,"span",((cljs.core.map_QMARK_.call(null,attrs69992))?sablono.interpreter.attributes.call(null,attrs69992):null),((cljs.core.map_QMARK_.call(null,attrs69992))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs69992)], null)));
})()))),sablono.interpreter.interpret.call(null,devcards.core.naked_card.call(null,children,card)));
}
} else {
return React.createElement("span",null);
}
});

devcards.core.frame.cljs$lang$maxFixedArity = 2;


/**
 * @interface
 */
devcards.core.IDevcardOptions = function(){};

devcards.core._devcard_options = (function devcards$core$_devcard_options(this$,devcard_opts){
if((!((this$ == null))) && (!((this$.devcards$core$IDevcardOptions$_devcard_options$arity$2 == null)))){
return this$.devcards$core$IDevcardOptions$_devcard_options$arity$2(this$,devcard_opts);
} else {
var x__48210__auto__ = (((this$ == null))?null:this$);
var m__48211__auto__ = (devcards.core._devcard_options[goog.typeOf(x__48210__auto__)]);
if(!((m__48211__auto__ == null))){
return m__48211__auto__.call(null,this$,devcard_opts);
} else {
var m__48211__auto____$1 = (devcards.core._devcard_options["_"]);
if(!((m__48211__auto____$1 == null))){
return m__48211__auto____$1.call(null,this$,devcard_opts);
} else {
throw cljs.core.missing_protocol.call(null,"IDevcardOptions.-devcard-options",this$);
}
}
}
});


/**
 * @interface
 */
devcards.core.IDevcard = function(){};

devcards.core._devcard = (function devcards$core$_devcard(this$,devcard_opts){
if((!((this$ == null))) && (!((this$.devcards$core$IDevcard$_devcard$arity$2 == null)))){
return this$.devcards$core$IDevcard$_devcard$arity$2(this$,devcard_opts);
} else {
var x__48210__auto__ = (((this$ == null))?null:this$);
var m__48211__auto__ = (devcards.core._devcard[goog.typeOf(x__48210__auto__)]);
if(!((m__48211__auto__ == null))){
return m__48211__auto__.call(null,this$,devcard_opts);
} else {
var m__48211__auto____$1 = (devcards.core._devcard["_"]);
if(!((m__48211__auto____$1 == null))){
return m__48211__auto____$1.call(null,this$,devcard_opts);
} else {
throw cljs.core.missing_protocol.call(null,"IDevcard.-devcard",this$);
}
}
}
});

devcards.core.ref__GT_node = (function devcards$core$ref__GT_node(this$,ref){
var temp__4657__auto__ = (this$.refs[ref]);
if(cljs.core.truth_(temp__4657__auto__)){
var comp = temp__4657__auto__;
return ReactDOM.findDOMNode(comp);
} else {
return null;
}
});
devcards.core.get_props = (function devcards$core$get_props(this$,k){
return (this$.props[cljs.core.name.call(null,k)]);
});
devcards.core.get_state = (function devcards$core$get_state(this$,k){
if(cljs.core.truth_(this$.state)){
return (this$.state[cljs.core.name.call(null,k)]);
} else {
return null;
}
});
var base__59529__auto___70004 = ({"shouldComponentUpdate": (function (next_props,b){
var this$ = this;
var update_QMARK_ = cljs.core._EQ_.call(null,(next_props["change_count"]),devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"change_count","change_count",-533812109)));
return update_QMARK_;
}), "render": (function (){
var this$ = this;
var attrs69999 = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"children_thunk","children_thunk",-1161306645));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs69999))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-dont-update"], null)], null),attrs69999)):({"className": "com-rigsomelight-dont-update"})),((cljs.core.map_QMARK_.call(null,attrs69999))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs69999)], null)));
})});
if(typeof devcards.core.DontUpdate !== 'undefined'){
} else {
devcards.core.DontUpdate = React.createClass(base__59529__auto___70004);
}

var seq__70000_70005 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.name,cljs.core.list(new cljs.core.Symbol("cljs-react-reload.core","shouldComponentUpdate","cljs-react-reload.core/shouldComponentUpdate",-526191550,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillReceiveProps","cljs-react-reload.core/componentWillReceiveProps",-1087108864,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillMount","cljs-react-reload.core/componentWillMount",-1529759893,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidMount","cljs-react-reload.core/componentDidMount",-2035273110,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUpdate","cljs-react-reload.core/componentWillUpdate",-453323386,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidUpdate","cljs-react-reload.core/componentDidUpdate",-6660227,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUnmount","cljs-react-reload.core/componentWillUnmount",-1549767430,null),new cljs.core.Symbol("cljs-react-reload.core","render","cljs-react-reload.core/render",298414516,null))));
var chunk__70001_70006 = null;
var count__70002_70007 = (0);
var i__70003_70008 = (0);
while(true){
if((i__70003_70008 < count__70002_70007)){
var property__59530__auto___70009 = cljs.core._nth.call(null,chunk__70001_70006,i__70003_70008);
if(cljs.core.truth_((base__59529__auto___70004[property__59530__auto___70009]))){
(devcards.core.DontUpdate.prototype[property__59530__auto___70009] = (base__59529__auto___70004[property__59530__auto___70009]));
} else {
}

var G__70010 = seq__70000_70005;
var G__70011 = chunk__70001_70006;
var G__70012 = count__70002_70007;
var G__70013 = (i__70003_70008 + (1));
seq__70000_70005 = G__70010;
chunk__70001_70006 = G__70011;
count__70002_70007 = G__70012;
i__70003_70008 = G__70013;
continue;
} else {
var temp__4657__auto___70014 = cljs.core.seq.call(null,seq__70000_70005);
if(temp__4657__auto___70014){
var seq__70000_70015__$1 = temp__4657__auto___70014;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__70000_70015__$1)){
var c__48358__auto___70016 = cljs.core.chunk_first.call(null,seq__70000_70015__$1);
var G__70017 = cljs.core.chunk_rest.call(null,seq__70000_70015__$1);
var G__70018 = c__48358__auto___70016;
var G__70019 = cljs.core.count.call(null,c__48358__auto___70016);
var G__70020 = (0);
seq__70000_70005 = G__70017;
chunk__70001_70006 = G__70018;
count__70002_70007 = G__70019;
i__70003_70008 = G__70020;
continue;
} else {
var property__59530__auto___70021 = cljs.core.first.call(null,seq__70000_70015__$1);
if(cljs.core.truth_((base__59529__auto___70004[property__59530__auto___70021]))){
(devcards.core.DontUpdate.prototype[property__59530__auto___70021] = (base__59529__auto___70004[property__59530__auto___70021]));
} else {
}

var G__70022 = cljs.core.next.call(null,seq__70000_70015__$1);
var G__70023 = null;
var G__70024 = (0);
var G__70025 = (0);
seq__70000_70005 = G__70022;
chunk__70001_70006 = G__70023;
count__70002_70007 = G__70024;
i__70003_70008 = G__70025;
continue;
}
} else {
}
}
break;
}
devcards.core.dont_update = (function devcards$core$dont_update(change_count,children_thunk){
return React.createElement(devcards.core.DontUpdate,({"change_count": change_count, "children_thunk": children_thunk}));
});
devcards.core.wrangle_inital_data = (function devcards$core$wrangle_inital_data(this$){
var data = (function (){var or__47547__auto__ = new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804).cljs$core$IFn$_invoke$arity$1(devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"card","card",-1430355152)));
if(cljs.core.truth_(or__47547__auto__)){
return or__47547__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
if(((!((data == null)))?((((data.cljs$lang$protocol_mask$partition1$ & (16384))) || (data.cljs$core$IAtom$))?true:(((!data.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,data):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,data))){
return data;
} else {
return cljs.core.atom.call(null,data);
}
});
devcards.core.get_data_atom = (cljs.core.truth_(devcards.util.utils.html_env_QMARK_.call(null))?(function (this$){
return devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
}):(function (this$){
return devcards.core.wrangle_inital_data.call(null,this$);
}));
devcards.core.default_derive_main = (function devcards$core$default_derive_main(parent_elem,card,data_atom,change_count){
var options = new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(card);
var main_obj_SINGLEQUOTE_ = (function (){var m = new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742).cljs$core$IFn$_invoke$arity$1(card);
if(cljs.core.fn_QMARK_.call(null,m)){
return m.call(null,data_atom,parent_elem);
} else {
return m;
}
})();
var main_obj = (((!((main_obj_SINGLEQUOTE_ == null))) && (cljs.core.not.call(null,devcards.core.react_element_QMARK_.call(null,main_obj_SINGLEQUOTE_))))?devcards.core.code_highlight.call(null,devcards.util.utils.pprint_code.call(null,main_obj_SINGLEQUOTE_),"clojure"):main_obj_SINGLEQUOTE_);
if(new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308).cljs$core$IFn$_invoke$arity$1(options) === false){
return devcards.core.dont_update.call(null,change_count,main_obj);
} else {
return main_obj;
}
});
devcards.core.render_all_card_elements = (function devcards$core$render_all_card_elements(main,data_atom,card){
var options = new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(card);
var hist_ctl = (cljs.core.truth_(new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(options))?devcards.core.hist_recorder_STAR_.call(null,data_atom):null);
var document = (function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"documentation","documentation",1889593999).cljs$core$IFn$_invoke$arity$1(card);
if(cljs.core.truth_(temp__4657__auto__)){
var docu = temp__4657__auto__;
return devcards.core.markdown__GT_react.call(null,docu);
} else {
return null;
}
})();
var edn = (cljs.core.truth_(new cljs.core.Keyword(null,"inspect-data","inspect-data",640452006).cljs$core$IFn$_invoke$arity$1(options))?devcards.util.edn_renderer.html_edn.call(null,cljs.core.deref.call(null,data_atom)):null);
var card__$1 = (((typeof main === 'string') || ((main == null)))?cljs.core.assoc_in.call(null,card,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"hide-border","hide-border",1463657151)], null),true):card);
var main__$1 = React.createElement("div",({"key": "devcards-main-section"}),sablono.interpreter.interpret.call(null,main));
var children = cljs.core.keep.call(null,cljs.core.identity,(function (){var x__48381__auto__ = document;
return cljs.core._conj.call(null,(function (){var x__48381__auto____$1 = main__$1;
return cljs.core._conj.call(null,(function (){var x__48381__auto____$2 = hist_ctl;
return cljs.core._conj.call(null,(function (){var x__48381__auto____$3 = edn;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__48381__auto____$3);
})(),x__48381__auto____$2);
})(),x__48381__auto____$1);
})(),x__48381__auto__);
})());
if(cljs.core.truth_(new cljs.core.Keyword(null,"frame","frame",-1711082588).cljs$core$IFn$_invoke$arity$1(options))){
return devcards.core.frame.call(null,children,card__$1);
} else {
return React.createElement("div",({"className": "com-rigsomelight-devcards-frameless"}),sablono.interpreter.interpret.call(null,children));
}
});
var base__59529__auto___70032 = ({"getInitialState": (function (){
return ({"unique_id": cljs.core.gensym.call(null,new cljs.core.Symbol(null,"devcards-base-","devcards-base-",-1457268595,null)), "state_change_count": (0)});
}), "componentDidUpdate": (function (_,___$1){
var this$ = this;
var atom = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
var card = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"card","card",-1430355152));
var options = new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(card);
if(cljs.core.truth_(new cljs.core.Keyword(null,"static-state","static-state",-1049492012).cljs$core$IFn$_invoke$arity$1(options))){
var initial_data = new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804).cljs$core$IFn$_invoke$arity$1(card);
var data = (cljs.core.truth_(devcards.core.atom_like_QMARK_.call(null,initial_data))?cljs.core.deref.call(null,initial_data):initial_data);
if(cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,atom),data)){
return cljs.core.reset_BANG_.call(null,atom,data);
} else {
return null;
}
} else {
return null;
}
}), "componentWillMount": (cljs.core.truth_(devcards.util.utils.html_env_QMARK_.call(null))?(function (){
var this$ = this;
return this$.setState((function (){var or__47547__auto__ = (function (){var and__47535__auto__ = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
if(cljs.core.truth_(and__47535__auto__)){
return this$.state;
} else {
return and__47535__auto__;
}
})();
if(cljs.core.truth_(or__47547__auto__)){
return or__47547__auto__;
} else {
return ({"data_atom": devcards.core.wrangle_inital_data.call(null,this$)});
}
})());
}):(function (){
return null;
})), "componentWillUnmount": (function (){
var this$ = this;
var data_atom = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
var id = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"unique_id","unique_id",-796578329));
if(cljs.core.truth_((function (){var and__47535__auto__ = data_atom;
if(cljs.core.truth_(and__47535__auto__)){
return id;
} else {
return and__47535__auto__;
}
})())){
return cljs.core.remove_watch.call(null,data_atom,id);
} else {
return null;
}
}), "componentDidMount": (cljs.core.truth_(devcards.util.utils.html_env_QMARK_.call(null))?(function (){
var this$ = this;
var temp__4657__auto__ = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
if(cljs.core.truth_(temp__4657__auto__)){
var data_atom = temp__4657__auto__;
var temp__4657__auto____$1 = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"unique_id","unique_id",-796578329));
if(cljs.core.truth_(temp__4657__auto____$1)){
var id = temp__4657__auto____$1;
return cljs.core.add_watch.call(null,data_atom,id,((function (id,temp__4657__auto____$1,data_atom,temp__4657__auto__,this$){
return (function (_,___$1,___$2,___$3){
return this$.setState(({"state_change_count": (devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"state_change_count","state_change_count",-135095612)) + (1))}));
});})(id,temp__4657__auto____$1,data_atom,temp__4657__auto__,this$))
);
} else {
return null;
}
} else {
return null;
}
}):(function (){
return null;
})), "render": (function (){
var this$ = this;
var data_atom = devcards.core.get_data_atom.call(null,this$);
var card = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"card","card",-1430355152));
var change_count = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"state_change_count","state_change_count",-135095612));
var main = devcards.core.default_derive_main.call(null,this$,card,data_atom,change_count);
return devcards.core.render_all_card_elements.call(null,main,data_atom,card);
})});
if(typeof devcards.core.DevcardBase !== 'undefined'){
} else {
devcards.core.DevcardBase = React.createClass(base__59529__auto___70032);
}

var seq__70028_70033 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.name,cljs.core.list(new cljs.core.Symbol("cljs-react-reload.core","shouldComponentUpdate","cljs-react-reload.core/shouldComponentUpdate",-526191550,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillReceiveProps","cljs-react-reload.core/componentWillReceiveProps",-1087108864,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillMount","cljs-react-reload.core/componentWillMount",-1529759893,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidMount","cljs-react-reload.core/componentDidMount",-2035273110,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUpdate","cljs-react-reload.core/componentWillUpdate",-453323386,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidUpdate","cljs-react-reload.core/componentDidUpdate",-6660227,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUnmount","cljs-react-reload.core/componentWillUnmount",-1549767430,null),new cljs.core.Symbol("cljs-react-reload.core","render","cljs-react-reload.core/render",298414516,null))));
var chunk__70029_70034 = null;
var count__70030_70035 = (0);
var i__70031_70036 = (0);
while(true){
if((i__70031_70036 < count__70030_70035)){
var property__59530__auto___70037 = cljs.core._nth.call(null,chunk__70029_70034,i__70031_70036);
if(cljs.core.truth_((base__59529__auto___70032[property__59530__auto___70037]))){
(devcards.core.DevcardBase.prototype[property__59530__auto___70037] = (base__59529__auto___70032[property__59530__auto___70037]));
} else {
}

var G__70038 = seq__70028_70033;
var G__70039 = chunk__70029_70034;
var G__70040 = count__70030_70035;
var G__70041 = (i__70031_70036 + (1));
seq__70028_70033 = G__70038;
chunk__70029_70034 = G__70039;
count__70030_70035 = G__70040;
i__70031_70036 = G__70041;
continue;
} else {
var temp__4657__auto___70042 = cljs.core.seq.call(null,seq__70028_70033);
if(temp__4657__auto___70042){
var seq__70028_70043__$1 = temp__4657__auto___70042;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__70028_70043__$1)){
var c__48358__auto___70044 = cljs.core.chunk_first.call(null,seq__70028_70043__$1);
var G__70045 = cljs.core.chunk_rest.call(null,seq__70028_70043__$1);
var G__70046 = c__48358__auto___70044;
var G__70047 = cljs.core.count.call(null,c__48358__auto___70044);
var G__70048 = (0);
seq__70028_70033 = G__70045;
chunk__70029_70034 = G__70046;
count__70030_70035 = G__70047;
i__70031_70036 = G__70048;
continue;
} else {
var property__59530__auto___70049 = cljs.core.first.call(null,seq__70028_70043__$1);
if(cljs.core.truth_((base__59529__auto___70032[property__59530__auto___70049]))){
(devcards.core.DevcardBase.prototype[property__59530__auto___70049] = (base__59529__auto___70032[property__59530__auto___70049]));
} else {
}

var G__70050 = cljs.core.next.call(null,seq__70028_70043__$1);
var G__70051 = null;
var G__70052 = (0);
var G__70053 = (0);
seq__70028_70033 = G__70050;
chunk__70029_70034 = G__70051;
count__70030_70035 = G__70052;
i__70031_70036 = G__70053;
continue;
}
} else {
}
}
break;
}
devcards.core.render_into_dom = (cljs.core.truth_(devcards.util.utils.html_env_QMARK_.call(null))?(function (this$){
var temp__4657__auto__ = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"node_fn","node_fn",1182818791));
if(cljs.core.truth_(temp__4657__auto__)){
var node_fn = temp__4657__auto__;
var temp__4657__auto____$1 = devcards.core.ref__GT_node.call(null,this$,devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"unique_id","unique_id",-796578329)));
if(cljs.core.truth_(temp__4657__auto____$1)){
var node = temp__4657__auto____$1;
return node_fn.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504)),node);
} else {
return null;
}
} else {
return null;
}
}):cljs.core.identity);
var base__59529__auto___70058 = ({"getInitialState": (function (){
return ({"unique_id": [cljs.core.str(cljs.core.gensym.call(null,new cljs.core.Symbol(null,"devcards-dom-component-","devcards-dom-component-",-730322144,null)))].join('')});
}), "componentDidUpdate": (function (prevP,prevS){
var this$ = this;
if(cljs.core.truth_((function (){var and__47535__auto__ = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"node_fn","node_fn",1182818791));
if(cljs.core.truth_(and__47535__auto__)){
return cljs.core.not_EQ_.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"node_fn","node_fn",1182818791)),(prevP["node_fn"]));
} else {
return and__47535__auto__;
}
})())){
return devcards.core.render_into_dom.call(null,this$);
} else {
return null;
}
}), "componentWillUnmount": (function (){
var this$ = this;
var temp__4657__auto__ = devcards.core.ref__GT_node.call(null,this$,devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"unique_id","unique_id",-796578329)));
if(cljs.core.truth_(temp__4657__auto__)){
var node = temp__4657__auto__;
return ReactDOM.unmountComponentAtNode(node);
} else {
return null;
}
}), "componentDidMount": (function (){
var this$ = this;
return devcards.core.render_into_dom.call(null,this$);
}), "render": (cljs.core.truth_(devcards.util.utils.html_env_QMARK_.call(null))?(function (){
var this$ = this;
return React.DOM.div(({"className": "com-rigsomelight-devcards-dom-node", "ref": devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"unique_id","unique_id",-796578329))}),"Card has not mounted DOM node.");
}):(function (){
return React.DOM.div("Card has not mounted DOM node.");
}))});
if(typeof devcards.core.DomComponent !== 'undefined'){
} else {
devcards.core.DomComponent = React.createClass(base__59529__auto___70058);
}

var seq__70054_70059 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.name,cljs.core.list(new cljs.core.Symbol("cljs-react-reload.core","shouldComponentUpdate","cljs-react-reload.core/shouldComponentUpdate",-526191550,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillReceiveProps","cljs-react-reload.core/componentWillReceiveProps",-1087108864,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillMount","cljs-react-reload.core/componentWillMount",-1529759893,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidMount","cljs-react-reload.core/componentDidMount",-2035273110,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUpdate","cljs-react-reload.core/componentWillUpdate",-453323386,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidUpdate","cljs-react-reload.core/componentDidUpdate",-6660227,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUnmount","cljs-react-reload.core/componentWillUnmount",-1549767430,null),new cljs.core.Symbol("cljs-react-reload.core","render","cljs-react-reload.core/render",298414516,null))));
var chunk__70055_70060 = null;
var count__70056_70061 = (0);
var i__70057_70062 = (0);
while(true){
if((i__70057_70062 < count__70056_70061)){
var property__59530__auto___70063 = cljs.core._nth.call(null,chunk__70055_70060,i__70057_70062);
if(cljs.core.truth_((base__59529__auto___70058[property__59530__auto___70063]))){
(devcards.core.DomComponent.prototype[property__59530__auto___70063] = (base__59529__auto___70058[property__59530__auto___70063]));
} else {
}

var G__70064 = seq__70054_70059;
var G__70065 = chunk__70055_70060;
var G__70066 = count__70056_70061;
var G__70067 = (i__70057_70062 + (1));
seq__70054_70059 = G__70064;
chunk__70055_70060 = G__70065;
count__70056_70061 = G__70066;
i__70057_70062 = G__70067;
continue;
} else {
var temp__4657__auto___70068 = cljs.core.seq.call(null,seq__70054_70059);
if(temp__4657__auto___70068){
var seq__70054_70069__$1 = temp__4657__auto___70068;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__70054_70069__$1)){
var c__48358__auto___70070 = cljs.core.chunk_first.call(null,seq__70054_70069__$1);
var G__70071 = cljs.core.chunk_rest.call(null,seq__70054_70069__$1);
var G__70072 = c__48358__auto___70070;
var G__70073 = cljs.core.count.call(null,c__48358__auto___70070);
var G__70074 = (0);
seq__70054_70059 = G__70071;
chunk__70055_70060 = G__70072;
count__70056_70061 = G__70073;
i__70057_70062 = G__70074;
continue;
} else {
var property__59530__auto___70075 = cljs.core.first.call(null,seq__70054_70069__$1);
if(cljs.core.truth_((base__59529__auto___70058[property__59530__auto___70075]))){
(devcards.core.DomComponent.prototype[property__59530__auto___70075] = (base__59529__auto___70058[property__59530__auto___70075]));
} else {
}

var G__70076 = cljs.core.next.call(null,seq__70054_70069__$1);
var G__70077 = null;
var G__70078 = (0);
var G__70079 = (0);
seq__70054_70059 = G__70076;
chunk__70055_70060 = G__70077;
count__70056_70061 = G__70078;
i__70057_70062 = G__70079;
continue;
}
} else {
}
}
break;
}
devcards.core.booler_QMARK_ = (function devcards$core$booler_QMARK_(key,opts){
var x = cljs.core.get.call(null,opts,key);
var or__47547__auto__ = x === true;
if(or__47547__auto__){
return or__47547__auto__;
} else {
var or__47547__auto____$1 = x === false;
if(or__47547__auto____$1){
return or__47547__auto____$1;
} else {
var or__47547__auto____$2 = (x == null);
if(or__47547__auto____$2){
return or__47547__auto____$2;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),key,new cljs.core.Keyword(null,"message","message",-406056002),"should be boolean or nil",new cljs.core.Keyword(null,"value","value",305978217),x], null);
}
}
}
});
devcards.core.stringer_QMARK_ = (function devcards$core$stringer_QMARK_(key,opts){
var x = cljs.core.get.call(null,opts,key);
var or__47547__auto__ = typeof x === 'string';
if(or__47547__auto__){
return or__47547__auto__;
} else {
var or__47547__auto____$1 = (x == null);
if(or__47547__auto____$1){
return or__47547__auto____$1;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),key,new cljs.core.Keyword(null,"message","message",-406056002),"should be string or nil",new cljs.core.Keyword(null,"value","value",305978217),x], null);
}
}
});
devcards.core.react_element_QMARK_ = (function devcards$core$react_element_QMARK_(main_obj){
var or__47547__auto__ = (main_obj["_isReactElement"]);
if(cljs.core.truth_(or__47547__auto__)){
return or__47547__auto__;
} else {
return cljs.core._EQ_.call(null,devcards.core.react_element_type_symbol,(main_obj["$$typeof"]));
}
});
devcards.core.validate_card_options = (function devcards$core$validate_card_options(opts){
if(cljs.core.map_QMARK_.call(null,opts)){
var propagated_errors = cljs.core.get_in.call(null,opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"propagated-errors","propagated-errors",1359777293)], null));
return cljs.core.filter.call(null,((function (propagated_errors){
return (function (p1__70080_SHARP_){
return !(p1__70080_SHARP_ === true);
});})(propagated_errors))
,(function (){var map__70089 = opts;
var map__70089__$1 = ((((!((map__70089 == null)))?((((map__70089.cljs$lang$protocol_mask$partition0$ & (64))) || (map__70089.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__70089):map__70089);
var name = cljs.core.get.call(null,map__70089__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var main_obj = cljs.core.get.call(null,map__70089__$1,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742));
var initial_data = cljs.core.get.call(null,map__70089__$1,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804));
var options = cljs.core.get.call(null,map__70089__$1,new cljs.core.Keyword(null,"options","options",99638489));
return cljs.core.concat.call(null,propagated_errors,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__47547__auto__ = cljs.core.map_QMARK_.call(null,options);
if(or__47547__auto__){
return or__47547__auto__;
} else {
var or__47547__auto____$1 = (options == null);
if(or__47547__auto____$1){
return or__47547__auto____$1;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"message","message",-406056002),"should be a Map or nil",new cljs.core.Keyword(null,"value","value",305978217),options], null);
}
}
})(),devcards.core.stringer_QMARK_.call(null,new cljs.core.Keyword(null,"name","name",1843675177),opts),devcards.core.stringer_QMARK_.call(null,new cljs.core.Keyword(null,"documentation","documentation",1889593999),opts),(function (){var or__47547__auto__ = (initial_data == null);
if(or__47547__auto__){
return or__47547__auto__;
} else {
var or__47547__auto____$1 = cljs.core.vector_QMARK_.call(null,initial_data);
if(or__47547__auto____$1){
return or__47547__auto____$1;
} else {
var or__47547__auto____$2 = cljs.core.map_QMARK_.call(null,initial_data);
if(or__47547__auto____$2){
return or__47547__auto____$2;
} else {
var or__47547__auto____$3 = ((!((initial_data == null)))?((((initial_data.cljs$lang$protocol_mask$partition1$ & (16384))) || (initial_data.cljs$core$IAtom$))?true:(((!initial_data.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,initial_data):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,initial_data));
if(or__47547__auto____$3){
return or__47547__auto____$3;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),new cljs.core.Keyword(null,"message","message",-406056002),"should be an Atom or a Map or nil.",new cljs.core.Keyword(null,"value","value",305978217),initial_data], null);
}
}
}
}
})()], null),cljs.core.mapv.call(null,((function (map__70089,map__70089__$1,name,main_obj,initial_data,options,propagated_errors){
return (function (p1__70081_SHARP_){
return devcards.core.booler_QMARK_.call(null,p1__70081_SHARP_,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(opts));
});})(map__70089,map__70089__$1,name,main_obj,initial_data,options,propagated_errors))
,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"frame","frame",-1711082588),new cljs.core.Keyword(null,"heading","heading",-1312171873),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"inspect-data","inspect-data",640452006),new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),new cljs.core.Keyword(null,"history","history",-247395220),new cljs.core.Keyword(null,"static-state","static-state",-1049492012)], null)));
})());
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"message","message",-406056002),"Card should be a Map.",new cljs.core.Keyword(null,"value","value",305978217),opts], null)], null);
}
});
devcards.core.error_line = (function devcards$core$error_line(e){
return React.createElement("div",({"style": ({"color": "#a94442", "display": "flex", "margin": "0.5em 0px"})}),sablono.interpreter.interpret.call(null,React.createElement("code",({"style": ({"flex": "1 100px", "marginRight": "10px"})}),sablono.interpreter.interpret.call(null,(cljs.core.truth_(new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(e))?cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(e)):null)))),React.createElement("span",({"style": ({"flex": "3 100px", "marginRight": "10px"})}),sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(e))),React.createElement("span",({"style": ({"flex": "1 100px"})})," Received: ",(function (){var attrs70097 = cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(e));
return cljs.core.apply.call(null,React.createElement,"code",((cljs.core.map_QMARK_.call(null,attrs70097))?sablono.interpreter.attributes.call(null,attrs70097):null),((cljs.core.map_QMARK_.call(null,attrs70097))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs70097)], null)));
})()));
});
devcards.core.render_errors = (function devcards$core$render_errors(opts,errors){
return React.createElement("div",({"className": "com-rigsomelight-devcards-card-base-no-pad"}),(function (){var attrs70101 = [cljs.core.str((((cljs.core.map_QMARK_.call(null,opts)) && (typeof new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(opts) === 'string'))?[cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(opts)),cljs.core.str(": ")].join(''):null)),cljs.core.str("Devcard received bad options")].join('');
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs70101))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-panel-heading","com-rigsomelight-devcards-fail"], null)], null),attrs70101)):({"className": "com-rigsomelight-devcards-panel-heading com-rigsomelight-devcards-fail"})),((cljs.core.map_QMARK_.call(null,attrs70101))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs70101)], null)));
})(),sablono.interpreter.interpret.call(null,devcards.core.naked_card.call(null,React.createElement("div",null,(function (){var attrs70102 = cljs.core.map.call(null,devcards.core.error_line,errors);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs70102))?sablono.interpreter.attributes.call(null,attrs70102):null),((cljs.core.map_QMARK_.call(null,attrs70102))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs70102)], null)));
})(),sablono.interpreter.interpret.call(null,((cljs.core.map_QMARK_.call(null,opts))?(function (){var attrs70103 = devcards.util.edn_renderer.html_edn.call(null,cljs.core.update_in.call(null,opts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"propagated-errors","propagated-errors",1359777293)));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs70103))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-padding-top-border"], null)], null),attrs70103)):({"className": "com-rigsomelight-devcards-padding-top-border"})),((cljs.core.map_QMARK_.call(null,attrs70103))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs70103)], null)));
})():null))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",1660304693),true], null)], null))));
});
devcards.core.add_environment_defaults = (function devcards$core$add_environment_defaults(card_options){
return cljs.core.update_in.call(null,card_options,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489)], null),(function (p1__70104_SHARP_){
return cljs.core.merge.call(null,new cljs.core.Keyword(null,"base-card-options","base-card-options",141017756).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,devcards.system.app_state)),p1__70104_SHARP_);
}));
});
devcards.core.card_with_errors = (function devcards$core$card_with_errors(card_options){
var errors = devcards.core.validate_card_options.call(null,card_options);
if(cljs.core.truth_(cljs.core.not_empty.call(null,errors))){
return devcards.core.render_errors.call(null,card_options,errors);
} else {
return React.createElement(devcards.core.DevcardBase,({"card": devcards.core.add_environment_defaults.call(null,card_options)}));
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
 * @implements {devcards.core.IDevcardOptions}
*/
devcards.core.IdentiyOptions = (function (obj,__meta,__extmap,__hash){
this.obj = obj;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
devcards.core.IdentiyOptions.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__48169__auto__,k__48170__auto__){
var self__ = this;
var this__48169__auto____$1 = this;
return cljs.core._lookup.call(null,this__48169__auto____$1,k__48170__auto__,null);
});

devcards.core.IdentiyOptions.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__48171__auto__,k70106,else__48172__auto__){
var self__ = this;
var this__48171__auto____$1 = this;
var G__70108 = (((k70106 instanceof cljs.core.Keyword))?k70106.fqn:null);
switch (G__70108) {
case "obj":
return self__.obj;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k70106,else__48172__auto__);

}
});

devcards.core.IdentiyOptions.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__48183__auto__,writer__48184__auto__,opts__48185__auto__){
var self__ = this;
var this__48183__auto____$1 = this;
var pr_pair__48186__auto__ = ((function (this__48183__auto____$1){
return (function (keyval__48187__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__48184__auto__,cljs.core.pr_writer,""," ","",opts__48185__auto__,keyval__48187__auto__);
});})(this__48183__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__48184__auto__,pr_pair__48186__auto__,"#devcards.core.IdentiyOptions{",", ","}",opts__48185__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj],null))], null),self__.__extmap));
});

devcards.core.IdentiyOptions.prototype.cljs$core$IIterable$ = true;

devcards.core.IdentiyOptions.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__70105){
var self__ = this;
var G__70105__$1 = this;
return (new cljs.core.RecordIter((0),G__70105__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj","obj",981763962)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

devcards.core.IdentiyOptions.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__48167__auto__){
var self__ = this;
var this__48167__auto____$1 = this;
return self__.__meta;
});

devcards.core.IdentiyOptions.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__48163__auto__){
var self__ = this;
var this__48163__auto____$1 = this;
return (new devcards.core.IdentiyOptions(self__.obj,self__.__meta,self__.__extmap,self__.__hash));
});

devcards.core.IdentiyOptions.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__48173__auto__){
var self__ = this;
var this__48173__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

devcards.core.IdentiyOptions.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__48164__auto__){
var self__ = this;
var this__48164__auto____$1 = this;
var h__47982__auto__ = self__.__hash;
if(!((h__47982__auto__ == null))){
return h__47982__auto__;
} else {
var h__47982__auto____$1 = cljs.core.hash_imap.call(null,this__48164__auto____$1);
self__.__hash = h__47982__auto____$1;

return h__47982__auto____$1;
}
});

devcards.core.IdentiyOptions.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__48165__auto__,other__48166__auto__){
var self__ = this;
var this__48165__auto____$1 = this;
if(cljs.core.truth_((function (){var and__47535__auto__ = other__48166__auto__;
if(cljs.core.truth_(and__47535__auto__)){
var and__47535__auto____$1 = (this__48165__auto____$1.constructor === other__48166__auto__.constructor);
if(and__47535__auto____$1){
return cljs.core.equiv_map.call(null,this__48165__auto____$1,other__48166__auto__);
} else {
return and__47535__auto____$1;
}
} else {
return and__47535__auto__;
}
})())){
return true;
} else {
return false;
}
});

devcards.core.IdentiyOptions.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__48178__auto__,k__48179__auto__){
var self__ = this;
var this__48178__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"obj","obj",981763962),null], null), null),k__48179__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__48178__auto____$1),self__.__meta),k__48179__auto__);
} else {
return (new devcards.core.IdentiyOptions(self__.obj,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__48179__auto__)),null));
}
});

devcards.core.IdentiyOptions.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__48176__auto__,k__48177__auto__,G__70105){
var self__ = this;
var this__48176__auto____$1 = this;
var pred__70109 = cljs.core.keyword_identical_QMARK_;
var expr__70110 = k__48177__auto__;
if(cljs.core.truth_(pred__70109.call(null,new cljs.core.Keyword(null,"obj","obj",981763962),expr__70110))){
return (new devcards.core.IdentiyOptions(G__70105,self__.__meta,self__.__extmap,null));
} else {
return (new devcards.core.IdentiyOptions(self__.obj,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__48177__auto__,G__70105),null));
}
});

devcards.core.IdentiyOptions.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__48181__auto__){
var self__ = this;
var this__48181__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj],null))], null),self__.__extmap));
});

devcards.core.IdentiyOptions.prototype.devcards$core$IDevcardOptions$ = true;

devcards.core.IdentiyOptions.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,opts){
var self__ = this;
var this$__$1 = this;
return opts;
});

devcards.core.IdentiyOptions.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__48168__auto__,G__70105){
var self__ = this;
var this__48168__auto____$1 = this;
return (new devcards.core.IdentiyOptions(self__.obj,G__70105,self__.__extmap,self__.__hash));
});

devcards.core.IdentiyOptions.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__48174__auto__,entry__48175__auto__){
var self__ = this;
var this__48174__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__48175__auto__)){
return cljs.core._assoc.call(null,this__48174__auto____$1,cljs.core._nth.call(null,entry__48175__auto__,(0)),cljs.core._nth.call(null,entry__48175__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__48174__auto____$1,entry__48175__auto__);
}
});

devcards.core.IdentiyOptions.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"obj","obj",-1672671807,null)], null);
});

devcards.core.IdentiyOptions.cljs$lang$type = true;

devcards.core.IdentiyOptions.cljs$lang$ctorPrSeq = (function (this__48203__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"devcards.core/IdentiyOptions");
});

devcards.core.IdentiyOptions.cljs$lang$ctorPrWriter = (function (this__48203__auto__,writer__48204__auto__){
return cljs.core._write.call(null,writer__48204__auto__,"devcards.core/IdentiyOptions");
});

devcards.core.__GT_IdentiyOptions = (function devcards$core$__GT_IdentiyOptions(obj){
return (new devcards.core.IdentiyOptions(obj,null,null,null));
});

devcards.core.map__GT_IdentiyOptions = (function devcards$core$map__GT_IdentiyOptions(G__70107){
return (new devcards.core.IdentiyOptions(new cljs.core.Keyword(null,"obj","obj",981763962).cljs$core$IFn$_invoke$arity$1(G__70107),null,cljs.core.dissoc.call(null,G__70107,new cljs.core.Keyword(null,"obj","obj",981763962)),null));
});

devcards.core.atom_like_options = (function devcards$core$atom_like_options(main_obj,p__70113){
var map__70116 = p__70113;
var map__70116__$1 = ((((!((map__70116 == null)))?((((map__70116.cljs$lang$protocol_mask$partition0$ & (64))) || (map__70116.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__70116):map__70116);
var devcard_opts = map__70116__$1;
var options = cljs.core.get.call(null,map__70116__$1,new cljs.core.Keyword(null,"options","options",99638489));
return cljs.core.assoc.call(null,devcard_opts,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),((function (map__70116,map__70116__$1,devcard_opts,options){
return (function (data_atom,_){
return devcards.util.edn_renderer.html_edn.call(null,cljs.core.deref.call(null,data_atom));
});})(map__70116,map__70116__$1,devcard_opts,options))
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),main_obj,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"history","history",-247395220),true], null),devcards.core.assert_options_map.call(null,options)));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
 * @implements {devcards.core.IDevcardOptions}
*/
devcards.core.AtomLikeOptions = (function (obj,__meta,__extmap,__hash){
this.obj = obj;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
devcards.core.AtomLikeOptions.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__48169__auto__,k__48170__auto__){
var self__ = this;
var this__48169__auto____$1 = this;
return cljs.core._lookup.call(null,this__48169__auto____$1,k__48170__auto__,null);
});

devcards.core.AtomLikeOptions.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__48171__auto__,k70119,else__48172__auto__){
var self__ = this;
var this__48171__auto____$1 = this;
var G__70121 = (((k70119 instanceof cljs.core.Keyword))?k70119.fqn:null);
switch (G__70121) {
case "obj":
return self__.obj;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k70119,else__48172__auto__);

}
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__48183__auto__,writer__48184__auto__,opts__48185__auto__){
var self__ = this;
var this__48183__auto____$1 = this;
var pr_pair__48186__auto__ = ((function (this__48183__auto____$1){
return (function (keyval__48187__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__48184__auto__,cljs.core.pr_writer,""," ","",opts__48185__auto__,keyval__48187__auto__);
});})(this__48183__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__48184__auto__,pr_pair__48186__auto__,"#devcards.core.AtomLikeOptions{",", ","}",opts__48185__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj],null))], null),self__.__extmap));
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IIterable$ = true;

devcards.core.AtomLikeOptions.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__70118){
var self__ = this;
var G__70118__$1 = this;
return (new cljs.core.RecordIter((0),G__70118__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj","obj",981763962)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__48167__auto__){
var self__ = this;
var this__48167__auto____$1 = this;
return self__.__meta;
});

devcards.core.AtomLikeOptions.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__48163__auto__){
var self__ = this;
var this__48163__auto____$1 = this;
return (new devcards.core.AtomLikeOptions(self__.obj,self__.__meta,self__.__extmap,self__.__hash));
});

devcards.core.AtomLikeOptions.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__48173__auto__){
var self__ = this;
var this__48173__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__48164__auto__){
var self__ = this;
var this__48164__auto____$1 = this;
var h__47982__auto__ = self__.__hash;
if(!((h__47982__auto__ == null))){
return h__47982__auto__;
} else {
var h__47982__auto____$1 = cljs.core.hash_imap.call(null,this__48164__auto____$1);
self__.__hash = h__47982__auto____$1;

return h__47982__auto____$1;
}
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__48165__auto__,other__48166__auto__){
var self__ = this;
var this__48165__auto____$1 = this;
if(cljs.core.truth_((function (){var and__47535__auto__ = other__48166__auto__;
if(cljs.core.truth_(and__47535__auto__)){
var and__47535__auto____$1 = (this__48165__auto____$1.constructor === other__48166__auto__.constructor);
if(and__47535__auto____$1){
return cljs.core.equiv_map.call(null,this__48165__auto____$1,other__48166__auto__);
} else {
return and__47535__auto____$1;
}
} else {
return and__47535__auto__;
}
})())){
return true;
} else {
return false;
}
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__48178__auto__,k__48179__auto__){
var self__ = this;
var this__48178__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"obj","obj",981763962),null], null), null),k__48179__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__48178__auto____$1),self__.__meta),k__48179__auto__);
} else {
return (new devcards.core.AtomLikeOptions(self__.obj,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__48179__auto__)),null));
}
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__48176__auto__,k__48177__auto__,G__70118){
var self__ = this;
var this__48176__auto____$1 = this;
var pred__70122 = cljs.core.keyword_identical_QMARK_;
var expr__70123 = k__48177__auto__;
if(cljs.core.truth_(pred__70122.call(null,new cljs.core.Keyword(null,"obj","obj",981763962),expr__70123))){
return (new devcards.core.AtomLikeOptions(G__70118,self__.__meta,self__.__extmap,null));
} else {
return (new devcards.core.AtomLikeOptions(self__.obj,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__48177__auto__,G__70118),null));
}
});

devcards.core.AtomLikeOptions.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__48181__auto__){
var self__ = this;
var this__48181__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj],null))], null),self__.__extmap));
});

devcards.core.AtomLikeOptions.prototype.devcards$core$IDevcardOptions$ = true;

devcards.core.AtomLikeOptions.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,opts){
var self__ = this;
var this$__$1 = this;
return devcards.core.atom_like_options.call(null,self__.obj,opts);
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__48168__auto__,G__70118){
var self__ = this;
var this__48168__auto____$1 = this;
return (new devcards.core.AtomLikeOptions(self__.obj,G__70118,self__.__extmap,self__.__hash));
});

devcards.core.AtomLikeOptions.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__48174__auto__,entry__48175__auto__){
var self__ = this;
var this__48174__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__48175__auto__)){
return cljs.core._assoc.call(null,this__48174__auto____$1,cljs.core._nth.call(null,entry__48175__auto__,(0)),cljs.core._nth.call(null,entry__48175__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__48174__auto____$1,entry__48175__auto__);
}
});

devcards.core.AtomLikeOptions.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"obj","obj",-1672671807,null)], null);
});

devcards.core.AtomLikeOptions.cljs$lang$type = true;

devcards.core.AtomLikeOptions.cljs$lang$ctorPrSeq = (function (this__48203__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"devcards.core/AtomLikeOptions");
});

devcards.core.AtomLikeOptions.cljs$lang$ctorPrWriter = (function (this__48203__auto__,writer__48204__auto__){
return cljs.core._write.call(null,writer__48204__auto__,"devcards.core/AtomLikeOptions");
});

devcards.core.__GT_AtomLikeOptions = (function devcards$core$__GT_AtomLikeOptions(obj){
return (new devcards.core.AtomLikeOptions(obj,null,null,null));
});

devcards.core.map__GT_AtomLikeOptions = (function devcards$core$map__GT_AtomLikeOptions(G__70120){
return (new devcards.core.AtomLikeOptions(new cljs.core.Keyword(null,"obj","obj",981763962).cljs$core$IFn$_invoke$arity$1(G__70120),null,cljs.core.dissoc.call(null,G__70120,new cljs.core.Keyword(null,"obj","obj",981763962)),null));
});

devcards.core.edn_like_options = (function devcards$core$edn_like_options(main_obj,devcard_opts){
return cljs.core.assoc.call(null,devcard_opts,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),devcards.util.edn_renderer.html_edn.call(null,((((!((main_obj == null)))?((((main_obj.cljs$lang$protocol_mask$partition0$ & (32768))) || (main_obj.cljs$core$IDeref$))?true:(((!main_obj.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,main_obj):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,main_obj)))?cljs.core.deref.call(null,main_obj):main_obj)));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
 * @implements {devcards.core.IDevcardOptions}
*/
devcards.core.EdnLikeOptions = (function (obj,__meta,__extmap,__hash){
this.obj = obj;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
devcards.core.EdnLikeOptions.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__48169__auto__,k__48170__auto__){
var self__ = this;
var this__48169__auto____$1 = this;
return cljs.core._lookup.call(null,this__48169__auto____$1,k__48170__auto__,null);
});

devcards.core.EdnLikeOptions.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__48171__auto__,k70129,else__48172__auto__){
var self__ = this;
var this__48171__auto____$1 = this;
var G__70131 = (((k70129 instanceof cljs.core.Keyword))?k70129.fqn:null);
switch (G__70131) {
case "obj":
return self__.obj;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k70129,else__48172__auto__);

}
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__48183__auto__,writer__48184__auto__,opts__48185__auto__){
var self__ = this;
var this__48183__auto____$1 = this;
var pr_pair__48186__auto__ = ((function (this__48183__auto____$1){
return (function (keyval__48187__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__48184__auto__,cljs.core.pr_writer,""," ","",opts__48185__auto__,keyval__48187__auto__);
});})(this__48183__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__48184__auto__,pr_pair__48186__auto__,"#devcards.core.EdnLikeOptions{",", ","}",opts__48185__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj],null))], null),self__.__extmap));
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IIterable$ = true;

devcards.core.EdnLikeOptions.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__70128){
var self__ = this;
var G__70128__$1 = this;
return (new cljs.core.RecordIter((0),G__70128__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj","obj",981763962)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__48167__auto__){
var self__ = this;
var this__48167__auto____$1 = this;
return self__.__meta;
});

devcards.core.EdnLikeOptions.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__48163__auto__){
var self__ = this;
var this__48163__auto____$1 = this;
return (new devcards.core.EdnLikeOptions(self__.obj,self__.__meta,self__.__extmap,self__.__hash));
});

devcards.core.EdnLikeOptions.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__48173__auto__){
var self__ = this;
var this__48173__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__48164__auto__){
var self__ = this;
var this__48164__auto____$1 = this;
var h__47982__auto__ = self__.__hash;
if(!((h__47982__auto__ == null))){
return h__47982__auto__;
} else {
var h__47982__auto____$1 = cljs.core.hash_imap.call(null,this__48164__auto____$1);
self__.__hash = h__47982__auto____$1;

return h__47982__auto____$1;
}
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__48165__auto__,other__48166__auto__){
var self__ = this;
var this__48165__auto____$1 = this;
if(cljs.core.truth_((function (){var and__47535__auto__ = other__48166__auto__;
if(cljs.core.truth_(and__47535__auto__)){
var and__47535__auto____$1 = (this__48165__auto____$1.constructor === other__48166__auto__.constructor);
if(and__47535__auto____$1){
return cljs.core.equiv_map.call(null,this__48165__auto____$1,other__48166__auto__);
} else {
return and__47535__auto____$1;
}
} else {
return and__47535__auto__;
}
})())){
return true;
} else {
return false;
}
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__48178__auto__,k__48179__auto__){
var self__ = this;
var this__48178__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"obj","obj",981763962),null], null), null),k__48179__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__48178__auto____$1),self__.__meta),k__48179__auto__);
} else {
return (new devcards.core.EdnLikeOptions(self__.obj,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__48179__auto__)),null));
}
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__48176__auto__,k__48177__auto__,G__70128){
var self__ = this;
var this__48176__auto____$1 = this;
var pred__70132 = cljs.core.keyword_identical_QMARK_;
var expr__70133 = k__48177__auto__;
if(cljs.core.truth_(pred__70132.call(null,new cljs.core.Keyword(null,"obj","obj",981763962),expr__70133))){
return (new devcards.core.EdnLikeOptions(G__70128,self__.__meta,self__.__extmap,null));
} else {
return (new devcards.core.EdnLikeOptions(self__.obj,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__48177__auto__,G__70128),null));
}
});

devcards.core.EdnLikeOptions.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__48181__auto__){
var self__ = this;
var this__48181__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj],null))], null),self__.__extmap));
});

devcards.core.EdnLikeOptions.prototype.devcards$core$IDevcardOptions$ = true;

devcards.core.EdnLikeOptions.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var self__ = this;
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,self__.obj,devcard_opts);
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__48168__auto__,G__70128){
var self__ = this;
var this__48168__auto____$1 = this;
return (new devcards.core.EdnLikeOptions(self__.obj,G__70128,self__.__extmap,self__.__hash));
});

devcards.core.EdnLikeOptions.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__48174__auto__,entry__48175__auto__){
var self__ = this;
var this__48174__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__48175__auto__)){
return cljs.core._assoc.call(null,this__48174__auto____$1,cljs.core._nth.call(null,entry__48175__auto__,(0)),cljs.core._nth.call(null,entry__48175__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__48174__auto____$1,entry__48175__auto__);
}
});

devcards.core.EdnLikeOptions.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"obj","obj",-1672671807,null)], null);
});

devcards.core.EdnLikeOptions.cljs$lang$type = true;

devcards.core.EdnLikeOptions.cljs$lang$ctorPrSeq = (function (this__48203__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"devcards.core/EdnLikeOptions");
});

devcards.core.EdnLikeOptions.cljs$lang$ctorPrWriter = (function (this__48203__auto__,writer__48204__auto__){
return cljs.core._write.call(null,writer__48204__auto__,"devcards.core/EdnLikeOptions");
});

devcards.core.__GT_EdnLikeOptions = (function devcards$core$__GT_EdnLikeOptions(obj){
return (new devcards.core.EdnLikeOptions(obj,null,null,null));
});

devcards.core.map__GT_EdnLikeOptions = (function devcards$core$map__GT_EdnLikeOptions(G__70130){
return (new devcards.core.EdnLikeOptions(new cljs.core.Keyword(null,"obj","obj",981763962).cljs$core$IFn$_invoke$arity$1(G__70130),null,cljs.core.dissoc.call(null,G__70130,new cljs.core.Keyword(null,"obj","obj",981763962)),null));
});

devcards.core.atom_like_QMARK_ = (function devcards$core$atom_like_QMARK_(x){
var and__47535__auto__ = ((!((x == null)))?((((x.cljs$lang$protocol_mask$partition1$ & (2))) || (x.cljs$core$IWatchable$))?true:(((!x.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,x):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,x));
if(and__47535__auto__){
if(!((x == null))){
if(((x.cljs$lang$protocol_mask$partition0$ & (32768))) || (x.cljs$core$IDeref$)){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,x);
}
} else {
return and__47535__auto__;
}
});
devcards.core.edn_like_QMARK_ = (function devcards$core$edn_like_QMARK_(x){
if(!((x == null))){
if(((x.cljs$lang$protocol_mask$partition0$ & (32768))) || (x.cljs$core$IDeref$)){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,x);
}
});
devcards.core.coerce_to_devcards_options = (function devcards$core$coerce_to_devcards_options(main_obj){
if(((!((main_obj == null)))?(((false) || (main_obj.devcards$core$IDevcardOptions$))?true:(((!main_obj.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,devcards.core.IDevcardOptions,main_obj):false)):cljs.core.native_satisfies_QMARK_.call(null,devcards.core.IDevcardOptions,main_obj))){
return main_obj;
} else {
if(cljs.core.truth_(devcards.core.atom_like_QMARK_.call(null,main_obj))){
return (new devcards.core.AtomLikeOptions(main_obj,null,null,null));
} else {
if(cljs.core.truth_(devcards.core.edn_like_QMARK_.call(null,main_obj))){
return (new devcards.core.EdnLikeOptions(main_obj,null,null,null));
} else {
return (new devcards.core.IdentiyOptions(main_obj,null,null,null));

}
}
}
});
devcards.core.card_base = (function devcards$core$card_base(opts){
var opts__$1 = cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(devcards.system._STAR_devcard_data_STAR_));
if((function (){var G__70147 = new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742).cljs$core$IFn$_invoke$arity$1(opts__$1);
if(!((G__70147 == null))){
if((false) || (G__70147.devcards$core$IDevcard$)){
return true;
} else {
if((!G__70147.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devcards.core.IDevcard,G__70147);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devcards.core.IDevcard,G__70147);
}
})()){
return devcards.core._devcard.call(null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742).cljs$core$IFn$_invoke$arity$1(opts__$1),opts__$1);
} else {
return devcards.core.card_with_errors.call(null,devcards.core._devcard_options.call(null,devcards.core.coerce_to_devcards_options.call(null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742).cljs$core$IFn$_invoke$arity$1(opts__$1)),opts__$1));
}
});
devcards.core.dom_node_STAR_ = (function devcards$core$dom_node_STAR_(node_fn){
return (function (data_atom,owner){
return React.createElement(devcards.core.DomComponent,({"node_fn": node_fn, "data_atom": data_atom}));
});
});
(devcards.core.IDevcardOptions["string"] = true);

(devcards.core._devcard_options["string"] = (function (this$,devcard_opts){
return cljs.core.update_in.call(null,devcard_opts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742)], null),devcards.core.markdown__GT_react);
}));
cljs.core.PersistentArrayMap.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.PersistentArrayMap.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,this$__$1,devcard_opts);
});
cljs.core.PersistentVector.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.PersistentVector.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,this$__$1,devcard_opts);
});
cljs.core.PersistentHashSet.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.PersistentHashSet.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,this$__$1,devcard_opts);
});
cljs.core.List.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.List.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,this$__$1,devcard_opts);
});
cljs.core.LazySeq.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.LazySeq.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,this$__$1,devcard_opts);
});
cljs.core.Cons.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.Cons.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,this$__$1,devcard_opts);
});
cljs.core.EmptyList.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.EmptyList.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,this$__$1,devcard_opts);
});
cljs.core.Atom.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.Atom.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.atom_like_options.call(null,this$__$1,devcard_opts);
});
devcards.core.can_go_back = (function devcards$core$can_go_back(this$){
var map__70150 = cljs.core.deref.call(null,devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013)));
var map__70150__$1 = ((((!((map__70150 == null)))?((((map__70150.cljs$lang$protocol_mask$partition0$ & (64))) || (map__70150.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__70150):map__70150);
var history = cljs.core.get.call(null,map__70150__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var pointer = cljs.core.get.call(null,map__70150__$1,new cljs.core.Keyword(null,"pointer","pointer",85071187));
return ((pointer + (1)) < cljs.core.count.call(null,history));
});
devcards.core.can_go_forward = (function devcards$core$can_go_forward(this$){
return (new cljs.core.Keyword(null,"pointer","pointer",85071187).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013)))) > (0));
});
devcards.core.in_time_machine_QMARK_ = (function devcards$core$in_time_machine_QMARK_(this$){
return !((new cljs.core.Keyword(null,"pointer","pointer",85071187).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013)))) === (0)));
});
devcards.core.back_in_history_BANG_ = (function devcards$core$back_in_history_BANG_(this$){
var history_atom = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013));
var map__70154 = cljs.core.deref.call(null,history_atom);
var map__70154__$1 = ((((!((map__70154 == null)))?((((map__70154.cljs$lang$protocol_mask$partition0$ & (64))) || (map__70154.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__70154):map__70154);
var history = cljs.core.get.call(null,map__70154__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var pointer = cljs.core.get.call(null,map__70154__$1,new cljs.core.Keyword(null,"pointer","pointer",85071187));
if(cljs.core.truth_(devcards.core.can_go_back.call(null,this$))){
cljs.core.swap_BANG_.call(null,history_atom,cljs.core.assoc,new cljs.core.Keyword(null,"pointer","pointer",85071187),(pointer + (1)),new cljs.core.Keyword(null,"ignore-click","ignore-click",-875855927),true);

cljs.core.reset_BANG_.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504)),cljs.core.nth.call(null,history,(pointer + (1))));

return this$.forceUpdate();
} else {
return null;
}
});
devcards.core.forward_in_history_BANG_ = (function devcards$core$forward_in_history_BANG_(this$){
var history_atom = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013));
var map__70158 = cljs.core.deref.call(null,history_atom);
var map__70158__$1 = ((((!((map__70158 == null)))?((((map__70158.cljs$lang$protocol_mask$partition0$ & (64))) || (map__70158.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__70158):map__70158);
var history = cljs.core.get.call(null,map__70158__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var pointer = cljs.core.get.call(null,map__70158__$1,new cljs.core.Keyword(null,"pointer","pointer",85071187));
if(cljs.core.truth_(devcards.core.can_go_forward.call(null,this$))){
cljs.core.swap_BANG_.call(null,history_atom,cljs.core.assoc,new cljs.core.Keyword(null,"pointer","pointer",85071187),(pointer - (1)),new cljs.core.Keyword(null,"ignore-click","ignore-click",-875855927),true);

cljs.core.reset_BANG_.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504)),cljs.core.nth.call(null,history,(pointer - (1))));

return this$.forceUpdate();
} else {
return null;
}
});
devcards.core.continue_on_BANG_ = (function devcards$core$continue_on_BANG_(this$){
var history_atom = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013));
var map__70162 = cljs.core.deref.call(null,history_atom);
var map__70162__$1 = ((((!((map__70162 == null)))?((((map__70162.cljs$lang$protocol_mask$partition0$ & (64))) || (map__70162.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__70162):map__70162);
var history = cljs.core.get.call(null,map__70162__$1,new cljs.core.Keyword(null,"history","history",-247395220));
if(cljs.core.truth_(devcards.core.can_go_forward.call(null,this$))){
cljs.core.swap_BANG_.call(null,history_atom,cljs.core.assoc,new cljs.core.Keyword(null,"pointer","pointer",85071187),(0),new cljs.core.Keyword(null,"ignore-click","ignore-click",-875855927),true);

cljs.core.reset_BANG_.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504)),cljs.core.first.call(null,history));

return this$.forceUpdate();
} else {
return null;
}
});
devcards.core.HistoryComponent = React.createClass(({"getInitialState": (function (){
return ({"unique_id": [cljs.core.str(cljs.core.gensym.call(null,new cljs.core.Symbol(null,"devcards-history-runner-","devcards-history-runner-",-1709703043,null)))].join(''), "history_atom": cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"pointer","pointer",85071187),(0)], null))});
}), "componentWillMount": (function (){
var this$ = this;
return cljs.core.swap_BANG_.call(null,devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013)),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"history","history",-247395220)], null),(function (){var x__48381__auto__ = cljs.core.deref.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__48381__auto__);
})());
}), "componentDidMount": (function (){
var this$ = this;
var data_atom = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
var id = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"unique_id","unique_id",-796578329));
var history_atom = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013));
if(cljs.core.truth_((function (){var and__47535__auto__ = data_atom;
if(cljs.core.truth_(and__47535__auto__)){
return id;
} else {
return and__47535__auto__;
}
})())){
return cljs.core.add_watch.call(null,data_atom,id,((function (data_atom,id,history_atom,this$){
return (function (_,___$1,___$2,n){
if(cljs.core.truth_(devcards.core.in_time_machine_QMARK_.call(null,this$))){
return cljs.core.swap_BANG_.call(null,history_atom,((function (data_atom,id,history_atom,this$){
return (function (p__70164){
var map__70165 = p__70164;
var map__70165__$1 = ((((!((map__70165 == null)))?((((map__70165.cljs$lang$protocol_mask$partition0$ & (64))) || (map__70165.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__70165):map__70165);
var ha = map__70165__$1;
var pointer = cljs.core.get.call(null,map__70165__$1,new cljs.core.Keyword(null,"pointer","pointer",85071187));
var history = cljs.core.get.call(null,map__70165__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var ignore_click = cljs.core.get.call(null,map__70165__$1,new cljs.core.Keyword(null,"ignore-click","ignore-click",-875855927));
if(cljs.core.truth_(ignore_click)){
return cljs.core.assoc.call(null,ha,new cljs.core.Keyword(null,"ignore-click","ignore-click",-875855927),false);
} else {
return cljs.core.assoc.call(null,ha,new cljs.core.Keyword(null,"history","history",-247395220),(function (){var abridged_hist = cljs.core.drop.call(null,pointer,history);
if(cljs.core.not_EQ_.call(null,n,cljs.core.first.call(null,abridged_hist))){
return cljs.core.cons.call(null,n,abridged_hist);
} else {
return abridged_hist;
}
})(),new cljs.core.Keyword(null,"pointer","pointer",85071187),(0));
}
});})(data_atom,id,history_atom,this$))
);
} else {
return cljs.core.swap_BANG_.call(null,history_atom,cljs.core.assoc,new cljs.core.Keyword(null,"history","history",-247395220),(function (){var hist = new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,history_atom));
if(cljs.core.not_EQ_.call(null,n,cljs.core.first.call(null,hist))){
return cljs.core.cons.call(null,n,hist);
} else {
return hist;
}
})(),new cljs.core.Keyword(null,"ignore-click","ignore-click",-875855927),false);
}
});})(data_atom,id,history_atom,this$))
);
} else {
return null;
}
}), "render": (function (){
var this$ = this;
if(cljs.core.truth_((function (){var or__47547__auto__ = devcards.core.can_go_back.call(null,this$);
if(cljs.core.truth_(or__47547__auto__)){
return or__47547__auto__;
} else {
return devcards.core.can_go_forward.call(null,this$);
}
})())){
return React.createElement("div",({"style": ({"display": (cljs.core.truth_((function (){var or__47547__auto__ = devcards.core.can_go_back.call(null,this$);
if(cljs.core.truth_(or__47547__auto__)){
return or__47547__auto__;
} else {
return devcards.core.can_go_forward.call(null,this$);
}
})())?"block":"none")}), "className": "com-rigsomelight-devcards-history-control-bar"}),(function (){var action = ((function (this$){
return (function (e){
e.preventDefault();

return devcards.core.back_in_history_BANG_.call(null,this$);
});})(this$))
;
return sablono.interpreter.interpret.call(null,React.createElement("button",({"style": ({"visibility": (cljs.core.truth_(devcards.core.can_go_back.call(null,this$))?"visible":"hidden")}), "href": "#", "onClick": action, "onTouchEnd": action}),React.createElement("span",({"className": "com-rigsomelight-devcards-history-control-left"}),"")));
})(),(function (){var action = ((function (this$){
return (function (e){
e.preventDefault();

var data_atom = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
return cljs.core.reset_BANG_.call(null,data_atom,cljs.core.deref.call(null,data_atom));
});})(this$))
;
return sablono.interpreter.interpret.call(null,React.createElement("button",({"style": ({"visibility": (cljs.core.truth_(devcards.core.can_go_forward.call(null,this$))?"visible":"hidden")}), "onClick": action, "onTouchEnd": action}),React.createElement("span",({"className": "com-rigsomelight-devcards-history-stop"}),"")));
})(),(function (){var action = ((function (this$){
return (function (e){
e.preventDefault();

return devcards.core.forward_in_history_BANG_.call(null,this$);
});})(this$))
;
return sablono.interpreter.interpret.call(null,React.createElement("button",({"style": ({"visibility": (cljs.core.truth_(devcards.core.can_go_forward.call(null,this$))?"visible":"hidden")}), "onClick": action, "onTouchEnd": action}),React.createElement("span",({"className": "com-rigsomelight-devcards-history-control-right"}),"")));
})(),(function (){var listener = ((function (this$){
return (function (e){
e.preventDefault();

return devcards.core.continue_on_BANG_.call(null,this$);
});})(this$))
;
return sablono.interpreter.interpret.call(null,React.createElement("button",({"style": ({"visibility": (cljs.core.truth_(devcards.core.can_go_forward.call(null,this$))?"visible":"hidden")}), "onClick": listener, "onTouchEnd": listener}),React.createElement("span",({"className": "com-rigsomelight-devcards-history-control-small-arrow"})),React.createElement("span",({"className": "com-rigsomelight-devcards-history-control-small-arrow"})),React.createElement("span",({"className": "com-rigsomelight-devcards-history-control-block"}))));
})());
} else {
return null;
}
})}));
devcards.core.hist_recorder_STAR_ = (function devcards$core$hist_recorder_STAR_(data_atom){
return React.createElement(devcards.core.HistoryComponent,({"data_atom": data_atom, "key": "devcards-history-control-bar"}));
});
devcards.core.collect_test = (function devcards$core$collect_test(m){
return cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_devcards_collect_tests","_devcards_collect_tests",-1114031206)], null),cljs.core.conj,cljs.core.merge.call(null,cljs.core.select_keys.call(null,cljs.test.get_current_env.call(null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null)),m));
});
cljs.core._add_method.call(null,cljs.test.report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_devcards_test_card_reporter","_devcards_test_card_reporter",-1561437805),new cljs.core.Keyword(null,"pass","pass",1574159993)], null),(function (m){
cljs.test.inc_report_counter_BANG_.call(null,new cljs.core.Keyword(null,"pass","pass",1574159993));

devcards.core.collect_test.call(null,m);

return m;
}));
cljs.core._add_method.call(null,cljs.test.report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_devcards_test_card_reporter","_devcards_test_card_reporter",-1561437805),new cljs.core.Keyword(null,"fail","fail",1706214930)], null),(function (m){
cljs.test.inc_report_counter_BANG_.call(null,new cljs.core.Keyword(null,"fail","fail",1706214930));

devcards.core.collect_test.call(null,m);

return m;
}));
cljs.core._add_method.call(null,cljs.test.report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_devcards_test_card_reporter","_devcards_test_card_reporter",-1561437805),new cljs.core.Keyword(null,"error","error",-978969032)], null),(function (m){
cljs.test.inc_report_counter_BANG_.call(null,new cljs.core.Keyword(null,"error","error",-978969032));

devcards.core.collect_test.call(null,m);

return m;
}));
cljs.core._add_method.call(null,cljs.test.report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_devcards_test_card_reporter","_devcards_test_card_reporter",-1561437805),new cljs.core.Keyword(null,"test-doc","test-doc",1730699463)], null),(function (m){
devcards.core.collect_test.call(null,m);

return m;
}));
devcards.core.run_test_block = (function devcards$core$run_test_block(f){
var _STAR_current_env_STAR_70180 = cljs.test._STAR_current_env_STAR_;
cljs.test._STAR_current_env_STAR_ = cljs.core.assoc.call(null,cljs.test.empty_env.call(null),new cljs.core.Keyword(null,"reporter","reporter",-805360621),new cljs.core.Keyword(null,"_devcards_test_card_reporter","_devcards_test_card_reporter",-1561437805));

try{f.call(null);

return cljs.test.get_current_env.call(null);
}finally {cljs.test._STAR_current_env_STAR_ = _STAR_current_env_STAR_70180;
}});
if(typeof devcards.core.test_render !== 'undefined'){
} else {
devcards.core.test_render = (function (){var method_table__48472__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__48473__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__48474__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__48475__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__48476__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"devcards.core","test-render"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__48476__auto__,method_table__48472__auto__,prefer_table__48473__auto__,method_cache__48474__auto__,cached_hierarchy__48475__auto__));
})();
}
cljs.core._add_method.call(null,devcards.core.test_render,new cljs.core.Keyword(null,"default","default",-1987822328),(function (m){
var attrs70181 = cljs.core.prn_str.call(null,m);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs70181))?sablono.interpreter.attributes.call(null,attrs70181):null),((cljs.core.map_QMARK_.call(null,attrs70181))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs70181)], null)));
}));
devcards.core.display_message = (function devcards$core$display_message(p__70182,body){
var map__70186 = p__70182;
var map__70186__$1 = ((((!((map__70186 == null)))?((((map__70186.cljs$lang$protocol_mask$partition0$ & (64))) || (map__70186.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__70186):map__70186);
var message = cljs.core.get.call(null,map__70186__$1,new cljs.core.Keyword(null,"message","message",-406056002));
if(cljs.core.truth_(message)){
return React.createElement("div",null,(function (){var attrs70188 = message;
return cljs.core.apply.call(null,React.createElement,"span",((cljs.core.map_QMARK_.call(null,attrs70188))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-test-message"], null)], null),attrs70188)):({"className": "com-rigsomelight-devcards-test-message"})),((cljs.core.map_QMARK_.call(null,attrs70188))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs70188)], null)));
})(),sablono.interpreter.interpret.call(null,body));
} else {
return body;
}
});
devcards.core.render_pass_fail = (function devcards$core$render_pass_fail(p__70189){
var map__70197 = p__70189;
var map__70197__$1 = ((((!((map__70197 == null)))?((((map__70197.cljs$lang$protocol_mask$partition0$ & (64))) || (map__70197.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__70197):map__70197);
var m = map__70197__$1;
var expected = cljs.core.get.call(null,map__70197__$1,new cljs.core.Keyword(null,"expected","expected",1583670997));
var actual = cljs.core.get.call(null,map__70197__$1,new cljs.core.Keyword(null,"actual","actual",107306363));
var type = cljs.core.get.call(null,map__70197__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return devcards.core.display_message.call(null,m,(function (){var attrs70199 = React.createElement(devcards.core.CodeHighlight,({"code": devcards.util.utils.pprint_code.call(null,expected), "lang": "clojure"}));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs70199))?sablono.interpreter.attributes.call(null,attrs70199):null),((cljs.core.map_QMARK_.call(null,attrs70199))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,((cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"fail","fail",1706214930)))?React.createElement("div",({"style": ({"marginTop": "5px"})}),React.createElement("div",({"style": ({"position": "absolute", "fontSize": "0.9em"})}),"\u25B6"),React.createElement("div",({"style": ({"marginLeft": "20px"})}),sablono.interpreter.interpret.call(null,React.createElement(devcards.core.CodeHighlight,({"code": devcards.util.utils.pprint_code.call(null,actual), "lang": "clojure"}))))):null))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs70199),sablono.interpreter.interpret.call(null,((cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"fail","fail",1706214930)))?React.createElement("div",({"style": ({"marginTop": "5px"})}),React.createElement("div",({"style": ({"position": "absolute", "fontSize": "0.9em"})}),"\u25B6"),React.createElement("div",({"style": ({"marginLeft": "20px"})}),sablono.interpreter.interpret.call(null,React.createElement(devcards.core.CodeHighlight,({"code": devcards.util.utils.pprint_code.call(null,actual), "lang": "clojure"}))))):null))], null)));
})());
});
cljs.core._add_method.call(null,devcards.core.test_render,new cljs.core.Keyword(null,"pass","pass",1574159993),(function (m){
return devcards.core.render_pass_fail.call(null,m);
}));
cljs.core._add_method.call(null,devcards.core.test_render,new cljs.core.Keyword(null,"fail","fail",1706214930),(function (m){
return devcards.core.render_pass_fail.call(null,m);
}));
cljs.core._add_method.call(null,devcards.core.test_render,new cljs.core.Keyword(null,"error","error",-978969032),(function (m){
return devcards.core.display_message.call(null,m,React.createElement("div",null,React.createElement("strong",null,"Error: "),(function (){var attrs70206 = [cljs.core.str(new cljs.core.Keyword(null,"actual","actual",107306363).cljs$core$IFn$_invoke$arity$1(m))].join('');
return cljs.core.apply.call(null,React.createElement,"code",((cljs.core.map_QMARK_.call(null,attrs70206))?sablono.interpreter.attributes.call(null,attrs70206):null),((cljs.core.map_QMARK_.call(null,attrs70206))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs70206)], null)));
})()));
}));
cljs.core._add_method.call(null,devcards.core.test_render,new cljs.core.Keyword(null,"test-doc","test-doc",1730699463),(function (m){
var attrs70207 = devcards.core.markdown__GT_react.call(null,new cljs.core.Keyword(null,"documentation","documentation",1889593999).cljs$core$IFn$_invoke$arity$1(m));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs70207))?sablono.interpreter.attributes.call(null,attrs70207):null),((cljs.core.map_QMARK_.call(null,attrs70207))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs70207)], null)));
}));
cljs.core._add_method.call(null,devcards.core.test_render,new cljs.core.Keyword(null,"context","context",-830191113),(function (p__70208){
var map__70209 = p__70208;
var map__70209__$1 = ((((!((map__70209 == null)))?((((map__70209.cljs$lang$protocol_mask$partition0$ & (64))) || (map__70209.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__70209):map__70209);
var testing_contexts = cljs.core.get.call(null,map__70209__$1,new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523));
var attrs70211 = cljs.core.interpose.call(null," / ",cljs.core.concat.call(null,cljs.core.map_indexed.call(null,((function (map__70209,map__70209__$1,testing_contexts){
return (function (i,t){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),i,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#bbb"], null)], null),t," "], null);
});})(map__70209,map__70209__$1,testing_contexts))
,cljs.core.reverse.call(null,cljs.core.rest.call(null,testing_contexts))),(function (){var x__48381__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(-1)], null),cljs.core.first.call(null,testing_contexts)], null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__48381__auto__);
})()));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs70211))?sablono.interpreter.attributes.call(null,attrs70211):null),((cljs.core.map_QMARK_.call(null,attrs70211))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs70211)], null)));
}));
devcards.core.test_doc = (function devcards$core$test_doc(s){
return cljs.test.report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"test-doc","test-doc",1730699463),new cljs.core.Keyword(null,"documentation","documentation",1889593999),s], null));
});
devcards.core.test_renderer = (function devcards$core$test_renderer(t,i){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.pr_str.call(null,t,i),new cljs.core.Keyword(null,"className","className",-1983287057),[cljs.core.str("com-rigsomelight-devcards-test-line com-rigsomelight-devcards-"),cljs.core.str(cljs.core.name.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(t)))].join('')], null),devcards.core.test_render.call(null,t)], null);
});
devcards.core.layout_tests = (function devcards$core$layout_tests(tests){
var attrs70220 = new cljs.core.Keyword(null,"html-list","html-list",-2067090601).cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.call(null,(function (p__70221,p__70222){
var map__70223 = p__70221;
var map__70223__$1 = ((((!((map__70223 == null)))?((((map__70223.cljs$lang$protocol_mask$partition0$ & (64))) || (map__70223.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__70223):map__70223);
var last_context = cljs.core.get.call(null,map__70223__$1,new cljs.core.Keyword(null,"last-context","last-context",-820617548));
var html_list = cljs.core.get.call(null,map__70223__$1,new cljs.core.Keyword(null,"html-list","html-list",-2067090601));
var vec__70224 = p__70222;
var i = cljs.core.nth.call(null,vec__70224,(0),null);
var t = cljs.core.nth.call(null,vec__70224,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"last-context","last-context",-820617548),new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523).cljs$core$IFn$_invoke$arity$1(t),new cljs.core.Keyword(null,"html-list","html-list",-2067090601),(function (){var res = (function (){var x__48381__auto__ = devcards.core.test_renderer.call(null,t,i);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__48381__auto__);
})();
var res__$1 = ((cljs.core._EQ_.call(null,last_context,new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523).cljs$core$IFn$_invoke$arity$1(t)))?res:(cljs.core.truth_(cljs.core.not_empty.call(null,new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523).cljs$core$IFn$_invoke$arity$1(t)))?cljs.core.cons.call(null,devcards.core.test_renderer.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"context","context",-830191113)], null),cljs.core.select_keys.call(null,t,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null))),i),res):res));
return cljs.core.concat.call(null,html_list,res__$1);
})()], null);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.map_indexed.call(null,cljs.core.vector,cljs.core.reverse.call(null,tests))));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs70220))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-test-card"], null)], null),attrs70220)):({"className": "com-rigsomelight-devcards-test-card"})),((cljs.core.map_QMARK_.call(null,attrs70220))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs70220)], null)));
});
devcards.core.render_tests = (function devcards$core$render_tests(this$,path,test_summary){
var error_QMARK_ = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(test_summary);
var tests = new cljs.core.Keyword(null,"_devcards_collect_tests","_devcards_collect_tests",-1114031206).cljs$core$IFn$_invoke$arity$1(test_summary);
var some_tests = cljs.core.filter.call(null,((function (error_QMARK_,tests){
return (function (p__70240){
var map__70241 = p__70240;
var map__70241__$1 = ((((!((map__70241 == null)))?((((map__70241.cljs$lang$protocol_mask$partition0$ & (64))) || (map__70241.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__70241):map__70241);
var type = cljs.core.get.call(null,map__70241__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return cljs.core.not_EQ_.call(null,type,new cljs.core.Keyword(null,"test-doc","test-doc",1730699463));
});})(error_QMARK_,tests))
,new cljs.core.Keyword(null,"_devcards_collect_tests","_devcards_collect_tests",-1114031206).cljs$core$IFn$_invoke$arity$1(test_summary));
var total_tests = cljs.core.count.call(null,some_tests);
var map__70239 = new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242).cljs$core$IFn$_invoke$arity$1(test_summary);
var map__70239__$1 = ((((!((map__70239 == null)))?((((map__70239.cljs$lang$protocol_mask$partition0$ & (64))) || (map__70239.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__70239):map__70239);
var fail = cljs.core.get.call(null,map__70239__$1,new cljs.core.Keyword(null,"fail","fail",1706214930));
var pass = cljs.core.get.call(null,map__70239__$1,new cljs.core.Keyword(null,"pass","pass",1574159993));
var error = cljs.core.get.call(null,map__70239__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var error__$1 = (cljs.core.truth_(error_QMARK_)?(error + (1)):error);
return React.createElement("div",({"className": "com-rigsomelight-devcards-base com-rigsomelight-devcards-card-base-no-pad com-rigsomelight-devcards-typog"}),React.createElement("div",({"className": "com-rigsomelight-devcards-panel-heading"}),React.createElement("a",({"href": "#", "onClick": devcards.system.prevent__GT_.call(null,((function (error_QMARK_,tests,some_tests,total_tests,map__70239,map__70239__$1,fail,pass,error,error__$1){
return (function (){
return devcards.system.set_current_path_BANG_.call(null,devcards.system.app_state,path);
});})(error_QMARK_,tests,some_tests,total_tests,map__70239,map__70239__$1,fail,pass,error,error__$1))
)}),sablono.interpreter.interpret.call(null,(cljs.core.truth_(path)?[cljs.core.str(cljs.core.name.call(null,cljs.core.last.call(null,path)))].join(''):null))),React.createElement("button",({"style": ({"float": "right", "margin": "3px 3px"}), "onClick": devcards.system.prevent__GT_.call(null,((function (error_QMARK_,tests,some_tests,total_tests,map__70239,map__70239__$1,fail,pass,error,error__$1){
return (function (){
return this$.setState(({"filter": cljs.core.identity}));
});})(error_QMARK_,tests,some_tests,total_tests,map__70239,map__70239__$1,fail,pass,error,error__$1))
), "className": "com-rigsomelight-devcards-badge"}),sablono.interpreter.interpret.call(null,total_tests)),sablono.interpreter.interpret.call(null,((((fail + error__$1) === (0)))?null:React.createElement("button",({"style": ({"float": "right", "backgroundColor": "#F7918E", "color": "#fff", "margin": "3px 3px"}), "onClick": devcards.system.prevent__GT_.call(null,((function (error_QMARK_,tests,some_tests,total_tests,map__70239,map__70239__$1,fail,pass,error,error__$1){
return (function (){
return this$.setState(({"filter": ((function (error_QMARK_,tests,some_tests,total_tests,map__70239,map__70239__$1,fail,pass,error,error__$1){
return (function (p__70244){
var map__70245 = p__70244;
var map__70245__$1 = ((((!((map__70245 == null)))?((((map__70245.cljs$lang$protocol_mask$partition0$ & (64))) || (map__70245.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__70245):map__70245);
var type = cljs.core.get.call(null,map__70245__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fail","fail",1706214930),null,new cljs.core.Keyword(null,"error","error",-978969032),null], null), null).call(null,type);
});})(error_QMARK_,tests,some_tests,total_tests,map__70239,map__70239__$1,fail,pass,error,error__$1))
}));
});})(error_QMARK_,tests,some_tests,total_tests,map__70239,map__70239__$1,fail,pass,error,error__$1))
), "className": "com-rigsomelight-devcards-badge"}),sablono.interpreter.interpret.call(null,[cljs.core.str((fail + error__$1))].join(''))))),sablono.interpreter.interpret.call(null,((((pass == null)) || ((pass === (0))))?null:React.createElement("button",({"style": ({"float": "right", "backgroundColor": "#92C648", "color": "#fff", "margin": "3px 3px"}), "onClick": devcards.system.prevent__GT_.call(null,((function (error_QMARK_,tests,some_tests,total_tests,map__70239,map__70239__$1,fail,pass,error,error__$1){
return (function (){
return this$.setState(({"filter": ((function (error_QMARK_,tests,some_tests,total_tests,map__70239,map__70239__$1,fail,pass,error,error__$1){
return (function (p__70247){
var map__70248 = p__70247;
var map__70248__$1 = ((((!((map__70248 == null)))?((((map__70248.cljs$lang$protocol_mask$partition0$ & (64))) || (map__70248.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__70248):map__70248);
var type = cljs.core.get.call(null,map__70248__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"pass","pass",1574159993));
});})(error_QMARK_,tests,some_tests,total_tests,map__70239,map__70239__$1,fail,pass,error,error__$1))
}));
});})(error_QMARK_,tests,some_tests,total_tests,map__70239,map__70239__$1,fail,pass,error,error__$1))
), "className": "com-rigsomelight-devcards-badge"}),sablono.interpreter.interpret.call(null,pass))))),React.createElement("div",({"className": devcards.system.devcards_rendered_card_class}),sablono.interpreter.interpret.call(null,devcards.core.layout_tests.call(null,cljs.core.filter.call(null,(function (){var or__47547__auto__ = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"filter","filter",-948537934));
if(cljs.core.truth_(or__47547__auto__)){
return or__47547__auto__;
} else {
return cljs.core.identity;
}
})(),tests)))));
});
devcards.core.test_timeout = (800);
if(typeof devcards.core.test_channel !== 'undefined'){
} else {
devcards.core.test_channel = cljs.core.async.chan.call(null);
}
devcards.core.run_card_tests = (function devcards$core$run_card_tests(test_thunks){
var out = cljs.core.async.chan.call(null);
var test_env = cljs.core.assoc.call(null,cljs.test.empty_env.call(null),new cljs.core.Keyword(null,"reporter","reporter",-805360621),new cljs.core.Keyword(null,"_devcards_test_card_reporter","_devcards_test_card_reporter",-1561437805));
cljs.test.set_env_BANG_.call(null,test_env);

var tests = cljs.core.concat.call(null,test_thunks,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (out,test_env){
return (function (){
cljs.core.async.put_BANG_.call(null,out,cljs.test.get_current_env.call(null));

return cljs.core.async.close_BANG_.call(null,out);
});})(out,test_env))
], null));
cljs.core.prn.call(null,"Running tests!!");

cljs.test.run_block.call(null,tests);

return out;
});
if(typeof devcards.core.test_loop !== 'undefined'){
} else {
devcards.core.test_loop = (function (){var c__49719__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__49719__auto__){
return (function (){
var f__49720__auto__ = (function (){var switch__49607__auto__ = ((function (c__49719__auto__){
return (function (state_70338){
var state_val_70339 = (state_70338[(1)]);
if((state_val_70339 === (7))){
var state_70338__$1 = state_70338;
var statearr_70340_70389 = state_70338__$1;
(statearr_70340_70389[(2)] = false);

(statearr_70340_70389[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70339 === (20))){
var inst_70277 = (state_70338[(7)]);
var inst_70296 = cljs.core.apply.call(null,cljs.core.hash_map,inst_70277);
var state_70338__$1 = state_70338;
var statearr_70341_70390 = state_70338__$1;
(statearr_70341_70390[(2)] = inst_70296);

(statearr_70341_70390[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70339 === (27))){
var inst_70301 = (state_70338[(8)]);
var inst_70313 = (state_70338[(9)]);
var inst_70317 = inst_70301.call(null,inst_70313);
var state_70338__$1 = state_70338;
var statearr_70342_70391 = state_70338__$1;
(statearr_70342_70391[(2)] = inst_70317);

(statearr_70342_70391[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70339 === (1))){
var state_70338__$1 = state_70338;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_70338__$1,(2),devcards.core.test_channel);
} else {
if((state_val_70339 === (24))){
var state_70338__$1 = state_70338;
var statearr_70343_70392 = state_70338__$1;
(statearr_70343_70392[(2)] = null);

(statearr_70343_70392[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70339 === (4))){
var state_70338__$1 = state_70338;
var statearr_70344_70393 = state_70338__$1;
(statearr_70344_70393[(2)] = false);

(statearr_70344_70393[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70339 === (15))){
var state_70338__$1 = state_70338;
var statearr_70345_70394 = state_70338__$1;
(statearr_70345_70394[(2)] = false);

(statearr_70345_70394[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70339 === (21))){
var inst_70277 = (state_70338[(7)]);
var state_70338__$1 = state_70338;
var statearr_70346_70395 = state_70338__$1;
(statearr_70346_70395[(2)] = inst_70277);

(statearr_70346_70395[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70339 === (13))){
var inst_70336 = (state_70338[(2)]);
var state_70338__$1 = state_70338;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_70338__$1,inst_70336);
} else {
if((state_val_70339 === (22))){
var inst_70300 = (state_70338[(10)]);
var inst_70299 = (state_70338[(2)]);
var inst_70300__$1 = cljs.core.get.call(null,inst_70299,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var inst_70301 = cljs.core.get.call(null,inst_70299,new cljs.core.Keyword(null,"callback","callback",-705136228));
var state_70338__$1 = (function (){var statearr_70347 = state_70338;
(statearr_70347[(8)] = inst_70301);

(statearr_70347[(10)] = inst_70300__$1);

return statearr_70347;
})();
if(cljs.core.truth_(inst_70300__$1)){
var statearr_70348_70396 = state_70338__$1;
(statearr_70348_70396[(1)] = (23));

} else {
var statearr_70349_70397 = state_70338__$1;
(statearr_70349_70397[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70339 === (29))){
var inst_70327 = (state_70338[(2)]);
var inst_70328 = cljs.test.clear_env_BANG_.call(null);
var state_70338__$1 = (function (){var statearr_70350 = state_70338;
(statearr_70350[(11)] = inst_70328);

(statearr_70350[(12)] = inst_70327);

return statearr_70350;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_70338__$1,(30),devcards.core.test_channel);
} else {
if((state_val_70339 === (6))){
var state_70338__$1 = state_70338;
var statearr_70351_70398 = state_70338__$1;
(statearr_70351_70398[(2)] = true);

(statearr_70351_70398[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70339 === (28))){
var inst_70301 = (state_70338[(8)]);
var inst_70319 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"actual","actual",107306363)];
var inst_70320 = [new cljs.core.Keyword(null,"error","error",-978969032),"Tests timed out. Please check Dev Console for Exceptions"];
var inst_70321 = cljs.core.PersistentHashMap.fromArrays(inst_70319,inst_70320);
var inst_70322 = devcards.core.collect_test.call(null,inst_70321);
var inst_70323 = cljs.test.get_current_env.call(null);
var inst_70324 = cljs.core.assoc.call(null,inst_70323,new cljs.core.Keyword(null,"error","error",-978969032),"Execution timed out!");
var inst_70325 = inst_70301.call(null,inst_70324);
var state_70338__$1 = (function (){var statearr_70352 = state_70338;
(statearr_70352[(13)] = inst_70322);

return statearr_70352;
})();
var statearr_70353_70399 = state_70338__$1;
(statearr_70353_70399[(2)] = inst_70325);

(statearr_70353_70399[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70339 === (25))){
var inst_70334 = (state_70338[(2)]);
var state_70338__$1 = state_70338;
var statearr_70354_70400 = state_70338__$1;
(statearr_70354_70400[(2)] = inst_70334);

(statearr_70354_70400[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70339 === (17))){
var state_70338__$1 = state_70338;
var statearr_70355_70401 = state_70338__$1;
(statearr_70355_70401[(2)] = true);

(statearr_70355_70401[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70339 === (3))){
var inst_70254 = (state_70338[(14)]);
var inst_70259 = inst_70254.cljs$lang$protocol_mask$partition0$;
var inst_70260 = (inst_70259 & (64));
var inst_70261 = inst_70254.cljs$core$ISeq$;
var inst_70262 = (inst_70260) || (inst_70261);
var state_70338__$1 = state_70338;
if(cljs.core.truth_(inst_70262)){
var statearr_70356_70402 = state_70338__$1;
(statearr_70356_70402[(1)] = (6));

} else {
var statearr_70357_70403 = state_70338__$1;
(statearr_70357_70403[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70339 === (12))){
var inst_70277 = (state_70338[(7)]);
var inst_70281 = (inst_70277 == null);
var inst_70282 = cljs.core.not.call(null,inst_70281);
var state_70338__$1 = state_70338;
if(inst_70282){
var statearr_70358_70404 = state_70338__$1;
(statearr_70358_70404[(1)] = (14));

} else {
var statearr_70359_70405 = state_70338__$1;
(statearr_70359_70405[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70339 === (2))){
var inst_70254 = (state_70338[(14)]);
var inst_70254__$1 = (state_70338[(2)]);
var inst_70256 = (inst_70254__$1 == null);
var inst_70257 = cljs.core.not.call(null,inst_70256);
var state_70338__$1 = (function (){var statearr_70360 = state_70338;
(statearr_70360[(14)] = inst_70254__$1);

return statearr_70360;
})();
if(inst_70257){
var statearr_70361_70406 = state_70338__$1;
(statearr_70361_70406[(1)] = (3));

} else {
var statearr_70362_70407 = state_70338__$1;
(statearr_70362_70407[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70339 === (23))){
var inst_70306 = (state_70338[(15)]);
var inst_70300 = (state_70338[(10)]);
var inst_70306__$1 = cljs.core.async.timeout.call(null,devcards.core.test_timeout);
var inst_70307 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_70308 = devcards.core.run_card_tests.call(null,inst_70300);
var inst_70309 = [inst_70308,inst_70306__$1];
var inst_70310 = (new cljs.core.PersistentVector(null,2,(5),inst_70307,inst_70309,null));
var state_70338__$1 = (function (){var statearr_70363 = state_70338;
(statearr_70363[(15)] = inst_70306__$1);

return statearr_70363;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_70338__$1,(26),inst_70310);
} else {
if((state_val_70339 === (19))){
var inst_70291 = (state_70338[(2)]);
var state_70338__$1 = state_70338;
var statearr_70364_70408 = state_70338__$1;
(statearr_70364_70408[(2)] = inst_70291);

(statearr_70364_70408[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70339 === (11))){
var inst_70254 = (state_70338[(14)]);
var inst_70274 = (state_70338[(2)]);
var inst_70275 = cljs.core.get.call(null,inst_70274,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var inst_70276 = cljs.core.get.call(null,inst_70274,new cljs.core.Keyword(null,"callback","callback",-705136228));
var inst_70277 = inst_70254;
var state_70338__$1 = (function (){var statearr_70365 = state_70338;
(statearr_70365[(7)] = inst_70277);

(statearr_70365[(16)] = inst_70276);

(statearr_70365[(17)] = inst_70275);

return statearr_70365;
})();
var statearr_70366_70409 = state_70338__$1;
(statearr_70366_70409[(2)] = null);

(statearr_70366_70409[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70339 === (9))){
var inst_70254 = (state_70338[(14)]);
var inst_70271 = cljs.core.apply.call(null,cljs.core.hash_map,inst_70254);
var state_70338__$1 = state_70338;
var statearr_70367_70410 = state_70338__$1;
(statearr_70367_70410[(2)] = inst_70271);

(statearr_70367_70410[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70339 === (5))){
var inst_70269 = (state_70338[(2)]);
var state_70338__$1 = state_70338;
if(cljs.core.truth_(inst_70269)){
var statearr_70368_70411 = state_70338__$1;
(statearr_70368_70411[(1)] = (9));

} else {
var statearr_70369_70412 = state_70338__$1;
(statearr_70369_70412[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70339 === (14))){
var inst_70277 = (state_70338[(7)]);
var inst_70284 = inst_70277.cljs$lang$protocol_mask$partition0$;
var inst_70285 = (inst_70284 & (64));
var inst_70286 = inst_70277.cljs$core$ISeq$;
var inst_70287 = (inst_70285) || (inst_70286);
var state_70338__$1 = state_70338;
if(cljs.core.truth_(inst_70287)){
var statearr_70370_70413 = state_70338__$1;
(statearr_70370_70413[(1)] = (17));

} else {
var statearr_70371_70414 = state_70338__$1;
(statearr_70371_70414[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70339 === (26))){
var inst_70306 = (state_70338[(15)]);
var inst_70312 = (state_70338[(2)]);
var inst_70313 = cljs.core.nth.call(null,inst_70312,(0),null);
var inst_70314 = cljs.core.nth.call(null,inst_70312,(1),null);
var inst_70315 = cljs.core.not_EQ_.call(null,inst_70314,inst_70306);
var state_70338__$1 = (function (){var statearr_70372 = state_70338;
(statearr_70372[(9)] = inst_70313);

return statearr_70372;
})();
if(inst_70315){
var statearr_70373_70415 = state_70338__$1;
(statearr_70373_70415[(1)] = (27));

} else {
var statearr_70374_70416 = state_70338__$1;
(statearr_70374_70416[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70339 === (16))){
var inst_70294 = (state_70338[(2)]);
var state_70338__$1 = state_70338;
if(cljs.core.truth_(inst_70294)){
var statearr_70375_70417 = state_70338__$1;
(statearr_70375_70417[(1)] = (20));

} else {
var statearr_70376_70418 = state_70338__$1;
(statearr_70376_70418[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70339 === (30))){
var inst_70330 = (state_70338[(2)]);
var inst_70277 = inst_70330;
var state_70338__$1 = (function (){var statearr_70377 = state_70338;
(statearr_70377[(7)] = inst_70277);

return statearr_70377;
})();
var statearr_70378_70419 = state_70338__$1;
(statearr_70378_70419[(2)] = null);

(statearr_70378_70419[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70339 === (10))){
var inst_70254 = (state_70338[(14)]);
var state_70338__$1 = state_70338;
var statearr_70379_70420 = state_70338__$1;
(statearr_70379_70420[(2)] = inst_70254);

(statearr_70379_70420[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70339 === (18))){
var state_70338__$1 = state_70338;
var statearr_70380_70421 = state_70338__$1;
(statearr_70380_70421[(2)] = false);

(statearr_70380_70421[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70339 === (8))){
var inst_70266 = (state_70338[(2)]);
var state_70338__$1 = state_70338;
var statearr_70381_70422 = state_70338__$1;
(statearr_70381_70422[(2)] = inst_70266);

(statearr_70381_70422[(1)] = (5));


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
});})(c__49719__auto__))
;
return ((function (switch__49607__auto__,c__49719__auto__){
return (function() {
var devcards$core$state_machine__49608__auto__ = null;
var devcards$core$state_machine__49608__auto____0 = (function (){
var statearr_70385 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_70385[(0)] = devcards$core$state_machine__49608__auto__);

(statearr_70385[(1)] = (1));

return statearr_70385;
});
var devcards$core$state_machine__49608__auto____1 = (function (state_70338){
while(true){
var ret_value__49609__auto__ = (function (){try{while(true){
var result__49610__auto__ = switch__49607__auto__.call(null,state_70338);
if(cljs.core.keyword_identical_QMARK_.call(null,result__49610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49610__auto__;
}
break;
}
}catch (e70386){if((e70386 instanceof Object)){
var ex__49611__auto__ = e70386;
var statearr_70387_70423 = state_70338;
(statearr_70387_70423[(5)] = ex__49611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_70338);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e70386;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__49609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__70424 = state_70338;
state_70338 = G__70424;
continue;
} else {
return ret_value__49609__auto__;
}
break;
}
});
devcards$core$state_machine__49608__auto__ = function(state_70338){
switch(arguments.length){
case 0:
return devcards$core$state_machine__49608__auto____0.call(this);
case 1:
return devcards$core$state_machine__49608__auto____1.call(this,state_70338);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
devcards$core$state_machine__49608__auto__.cljs$core$IFn$_invoke$arity$0 = devcards$core$state_machine__49608__auto____0;
devcards$core$state_machine__49608__auto__.cljs$core$IFn$_invoke$arity$1 = devcards$core$state_machine__49608__auto____1;
return devcards$core$state_machine__49608__auto__;
})()
;})(switch__49607__auto__,c__49719__auto__))
})();
var state__49721__auto__ = (function (){var statearr_70388 = f__49720__auto__.call(null);
(statearr_70388[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__49719__auto__);

return statearr_70388;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__49721__auto__);
});})(c__49719__auto__))
);

return c__49719__auto__;
})();
}
devcards.core.test_card_test_run = (function devcards$core$test_card_test_run(this$,tests){
return cljs.core.async.put_BANG_.call(null,devcards.core.test_channel,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tests","tests",-1041085625),tests,new cljs.core.Keyword(null,"callback","callback",-705136228),(function (results){
return this$.setState(({"test_results": results}));
})], null));
});
var base__59529__auto___70429 = ({"componentWillMount": (function (){
var this$ = this;
var temp__4657__auto__ = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"test_thunks","test_thunks",304669805));
if(cljs.core.truth_(temp__4657__auto__)){
var test_thunks = temp__4657__auto__;
return devcards.core.test_card_test_run.call(null,this$,test_thunks);
} else {
return null;
}
}), "componentWillReceiveProps": (function (next_props){
var this$ = this;
var temp__4657__auto__ = (next_props[cljs.core.name.call(null,new cljs.core.Keyword(null,"test_thunks","test_thunks",304669805))]);
if(cljs.core.truth_(temp__4657__auto__)){
var test_thunks = temp__4657__auto__;
return devcards.core.test_card_test_run.call(null,this$,test_thunks);
} else {
return null;
}
}), "render": (function (){
var this$ = this;
var test_summary = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"test_results","test_results",1062111317));
var path = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"path","path",-188191168));
return devcards.core.render_tests.call(null,this$,path,test_summary);
})});
if(typeof devcards.core.TestDevcard !== 'undefined'){
} else {
devcards.core.TestDevcard = React.createClass(base__59529__auto___70429);
}

var seq__70425_70430 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.name,cljs.core.list(new cljs.core.Symbol("cljs-react-reload.core","shouldComponentUpdate","cljs-react-reload.core/shouldComponentUpdate",-526191550,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillReceiveProps","cljs-react-reload.core/componentWillReceiveProps",-1087108864,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillMount","cljs-react-reload.core/componentWillMount",-1529759893,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidMount","cljs-react-reload.core/componentDidMount",-2035273110,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUpdate","cljs-react-reload.core/componentWillUpdate",-453323386,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidUpdate","cljs-react-reload.core/componentDidUpdate",-6660227,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUnmount","cljs-react-reload.core/componentWillUnmount",-1549767430,null),new cljs.core.Symbol("cljs-react-reload.core","render","cljs-react-reload.core/render",298414516,null))));
var chunk__70426_70431 = null;
var count__70427_70432 = (0);
var i__70428_70433 = (0);
while(true){
if((i__70428_70433 < count__70427_70432)){
var property__59530__auto___70434 = cljs.core._nth.call(null,chunk__70426_70431,i__70428_70433);
if(cljs.core.truth_((base__59529__auto___70429[property__59530__auto___70434]))){
(devcards.core.TestDevcard.prototype[property__59530__auto___70434] = (base__59529__auto___70429[property__59530__auto___70434]));
} else {
}

var G__70435 = seq__70425_70430;
var G__70436 = chunk__70426_70431;
var G__70437 = count__70427_70432;
var G__70438 = (i__70428_70433 + (1));
seq__70425_70430 = G__70435;
chunk__70426_70431 = G__70436;
count__70427_70432 = G__70437;
i__70428_70433 = G__70438;
continue;
} else {
var temp__4657__auto___70439 = cljs.core.seq.call(null,seq__70425_70430);
if(temp__4657__auto___70439){
var seq__70425_70440__$1 = temp__4657__auto___70439;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__70425_70440__$1)){
var c__48358__auto___70441 = cljs.core.chunk_first.call(null,seq__70425_70440__$1);
var G__70442 = cljs.core.chunk_rest.call(null,seq__70425_70440__$1);
var G__70443 = c__48358__auto___70441;
var G__70444 = cljs.core.count.call(null,c__48358__auto___70441);
var G__70445 = (0);
seq__70425_70430 = G__70442;
chunk__70426_70431 = G__70443;
count__70427_70432 = G__70444;
i__70428_70433 = G__70445;
continue;
} else {
var property__59530__auto___70446 = cljs.core.first.call(null,seq__70425_70440__$1);
if(cljs.core.truth_((base__59529__auto___70429[property__59530__auto___70446]))){
(devcards.core.TestDevcard.prototype[property__59530__auto___70446] = (base__59529__auto___70429[property__59530__auto___70446]));
} else {
}

var G__70447 = cljs.core.next.call(null,seq__70425_70440__$1);
var G__70448 = null;
var G__70449 = (0);
var G__70450 = (0);
seq__70425_70430 = G__70447;
chunk__70426_70431 = G__70448;
count__70427_70432 = G__70449;
i__70428_70433 = G__70450;
continue;
}
} else {
}
}
break;
}
devcards.core.test_card = (function devcards$core$test_card(var_args){
var args__48629__auto__ = [];
var len__48622__auto___70455 = arguments.length;
var i__48623__auto___70456 = (0);
while(true){
if((i__48623__auto___70456 < len__48622__auto___70455)){
args__48629__auto__.push((arguments[i__48623__auto___70456]));

var G__70457 = (i__48623__auto___70456 + (1));
i__48623__auto___70456 = G__70457;
continue;
} else {
}
break;
}

var argseq__48630__auto__ = ((((0) < args__48629__auto__.length))?(new cljs.core.IndexedSeq(args__48629__auto__.slice((0)),(0),null)):null);
return devcards.core.test_card.cljs$core$IFn$_invoke$arity$variadic(argseq__48630__auto__);
});

devcards.core.test_card.cljs$core$IFn$_invoke$arity$variadic = (function (test_thunks){
if(typeof devcards.core.t_devcards$core70452 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {devcards.core.IDevcard}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
devcards.core.t_devcards$core70452 = (function (test_thunks,meta70453){
this.test_thunks = test_thunks;
this.meta70453 = meta70453;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
devcards.core.t_devcards$core70452.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_70454,meta70453__$1){
var self__ = this;
var _70454__$1 = this;
return (new devcards.core.t_devcards$core70452(self__.test_thunks,meta70453__$1));
});

devcards.core.t_devcards$core70452.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_70454){
var self__ = this;
var _70454__$1 = this;
return self__.meta70453;
});

devcards.core.t_devcards$core70452.prototype.devcards$core$IDevcard$ = true;

devcards.core.t_devcards$core70452.prototype.devcards$core$IDevcard$_devcard$arity$2 = (function (this$,devcard_opts){
var self__ = this;
var this$__$1 = this;
var path = new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(devcards.system._STAR_devcard_data_STAR_);
return React.createElement(devcards.core.TestDevcard,({"test_thunks": self__.test_thunks, "path": path}));
});

devcards.core.t_devcards$core70452.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"test-thunks","test-thunks",2032684042,null),new cljs.core.Symbol(null,"meta70453","meta70453",914338236,null)], null);
});

devcards.core.t_devcards$core70452.cljs$lang$type = true;

devcards.core.t_devcards$core70452.cljs$lang$ctorStr = "devcards.core/t_devcards$core70452";

devcards.core.t_devcards$core70452.cljs$lang$ctorPrWriter = (function (this__48153__auto__,writer__48154__auto__,opt__48155__auto__){
return cljs.core._write.call(null,writer__48154__auto__,"devcards.core/t_devcards$core70452");
});

devcards.core.__GT_t_devcards$core70452 = (function devcards$core$__GT_t_devcards$core70452(test_thunks__$1,meta70453){
return (new devcards.core.t_devcards$core70452(test_thunks__$1,meta70453));
});

}

return (new devcards.core.t_devcards$core70452(test_thunks,cljs.core.PersistentArrayMap.EMPTY));
});

devcards.core.test_card.cljs$lang$maxFixedArity = (0);

devcards.core.test_card.cljs$lang$applyTo = (function (seq70451){
return devcards.core.test_card.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq70451));
});

devcards.core.get_front_matter = (function devcards$core$get_front_matter(munged_namespace){
return cljs.core.reduce.call(null,cljs.core.aget,goog.global,cljs.core.concat.call(null,clojure.string.split.call(null,cljs.core.name.call(null,munged_namespace),"."),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["front_matter"], null)));
});
devcards.core.get_cards_for_ns = (function devcards$core$get_cards_for_ns(ns_symbol){
var temp__4657__auto__ = new cljs.core.Keyword(null,"cards","cards",169174038).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,devcards.system.app_state));
if(cljs.core.truth_(temp__4657__auto__)){
var cards = temp__4657__auto__;
var temp__4657__auto____$1 = cljs.core.get_in.call(null,cards,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,ns_symbol)], null));
if(cljs.core.truth_(temp__4657__auto____$1)){
var card = temp__4657__auto____$1;
return card;
} else {
return null;
}
} else {
return null;
}
});
devcards.core.load_data_from_channel_BANG_ = (function devcards$core$load_data_from_channel_BANG_(){
return devcards.system.load_data_from_channel_BANG_.call(null,devcards.core.devcard_event_chan);
});
goog.exportSymbol('devcards.core.load_data_from_channel_BANG_', devcards.core.load_data_from_channel_BANG_);
devcards.core.merge_front_matter_options_BANG_ = (function devcards$core$merge_front_matter_options_BANG_(ns_symbol){
var temp__4657__auto__ = new cljs.core.Keyword(null,"base-card-options","base-card-options",141017756).cljs$core$IFn$_invoke$arity$1(devcards.core.get_front_matter.call(null,cljs.core.name.call(null,ns_symbol)));
if(cljs.core.truth_(temp__4657__auto__)){
var base_card_options = temp__4657__auto__;
cljs.core.println.call(null,"Adding base card options!",cljs.core.prn_str.call(null,base_card_options));

return cljs.core.swap_BANG_.call(null,devcards.system.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"base-card-options","base-card-options",141017756)], null),((function (base_card_options,temp__4657__auto__){
return (function (opts){
return cljs.core.merge.call(null,opts,base_card_options);
});})(base_card_options,temp__4657__auto__))
);
} else {
return null;
}
});
goog.exportSymbol('devcards.core.merge_front_matter_options_BANG_', devcards.core.merge_front_matter_options_BANG_);
devcards.core.render_namespace_to_string = (function devcards$core$render_namespace_to_string(ns_symbol){
var temp__4657__auto__ = devcards.core.get_cards_for_ns.call(null,ns_symbol);
if(cljs.core.truth_(temp__4657__auto__)){
var card = temp__4657__auto__;
devcards.core.merge_front_matter_options_BANG_.call(null,ns_symbol);

return [cljs.core.str("<div id=\"com-rigsomelight-devcards-main\">"),cljs.core.str(React.renderToString((function (){var attrs70459 = devcards.system.render_cards.call(null,devcards.system.display_cards.call(null,card),devcards.system.app_state);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs70459))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-base","com-rigsomelight-devcards-string-render"], null)], null),attrs70459)):({"className": "com-rigsomelight-devcards-base com-rigsomelight-devcards-string-render"})),((cljs.core.map_QMARK_.call(null,attrs70459))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs70459)], null)));
})())),cljs.core.str("</div>")].join('');
} else {
return null;
}
});
goog.exportSymbol('devcards.core.render_namespace_to_string', devcards.core.render_namespace_to_string);
devcards.core.render_ns = (function devcards$core$render_ns(ns_symbol,app_state){
var temp__4657__auto__ = devcards.core.get_cards_for_ns.call(null,ns_symbol);
if(cljs.core.truth_(temp__4657__auto__)){
var card = temp__4657__auto__;
return React.render((function (){var attrs70461 = devcards.system.render_cards.call(null,devcards.system.display_cards.call(null,card),app_state);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs70461))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-base","com-rigsomelight-devcards-string-render"], null)], null),attrs70461)):({"className": "com-rigsomelight-devcards-base com-rigsomelight-devcards-string-render"})),((cljs.core.map_QMARK_.call(null,attrs70461))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs70461)], null)));
})(),devcards.system.devcards_app_node.call(null));
} else {
return null;
}
});
devcards.core.mount_namespace = (function devcards$core$mount_namespace(ns_symbol){
devcards.core.merge_front_matter_options_BANG_.call(null,ns_symbol);

var c__49719__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__49719__auto__){
return (function (){
var f__49720__auto__ = (function (){var switch__49607__auto__ = ((function (c__49719__auto__){
return (function (state_70491){
var state_val_70492 = (state_70491[(1)]);
if((state_val_70492 === (1))){
var inst_70482 = devcards.core.load_data_from_channel_BANG_.call(null);
var state_70491__$1 = state_70491;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_70491__$1,(2),inst_70482);
} else {
if((state_val_70492 === (2))){
var inst_70484 = (state_70491[(2)]);
var inst_70485 = cljs.core.async.timeout.call(null,(100));
var state_70491__$1 = (function (){var statearr_70493 = state_70491;
(statearr_70493[(7)] = inst_70484);

return statearr_70493;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_70491__$1,(3),inst_70485);
} else {
if((state_val_70492 === (3))){
var inst_70487 = (state_70491[(2)]);
var inst_70488 = (function (){return ((function (inst_70487,state_val_70492,c__49719__auto__){
return (function (){
return devcards.core.render_ns.call(null,ns_symbol,devcards.system.app_state);
});
;})(inst_70487,state_val_70492,c__49719__auto__))
})();
var inst_70489 = setTimeout(inst_70488,(0));
var state_70491__$1 = (function (){var statearr_70494 = state_70491;
(statearr_70494[(8)] = inst_70487);

return statearr_70494;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_70491__$1,inst_70489);
} else {
return null;
}
}
}
});})(c__49719__auto__))
;
return ((function (switch__49607__auto__,c__49719__auto__){
return (function() {
var devcards$core$mount_namespace_$_state_machine__49608__auto__ = null;
var devcards$core$mount_namespace_$_state_machine__49608__auto____0 = (function (){
var statearr_70498 = [null,null,null,null,null,null,null,null,null];
(statearr_70498[(0)] = devcards$core$mount_namespace_$_state_machine__49608__auto__);

(statearr_70498[(1)] = (1));

return statearr_70498;
});
var devcards$core$mount_namespace_$_state_machine__49608__auto____1 = (function (state_70491){
while(true){
var ret_value__49609__auto__ = (function (){try{while(true){
var result__49610__auto__ = switch__49607__auto__.call(null,state_70491);
if(cljs.core.keyword_identical_QMARK_.call(null,result__49610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49610__auto__;
}
break;
}
}catch (e70499){if((e70499 instanceof Object)){
var ex__49611__auto__ = e70499;
var statearr_70500_70502 = state_70491;
(statearr_70500_70502[(5)] = ex__49611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_70491);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e70499;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__49609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__70503 = state_70491;
state_70491 = G__70503;
continue;
} else {
return ret_value__49609__auto__;
}
break;
}
});
devcards$core$mount_namespace_$_state_machine__49608__auto__ = function(state_70491){
switch(arguments.length){
case 0:
return devcards$core$mount_namespace_$_state_machine__49608__auto____0.call(this);
case 1:
return devcards$core$mount_namespace_$_state_machine__49608__auto____1.call(this,state_70491);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
devcards$core$mount_namespace_$_state_machine__49608__auto__.cljs$core$IFn$_invoke$arity$0 = devcards$core$mount_namespace_$_state_machine__49608__auto____0;
devcards$core$mount_namespace_$_state_machine__49608__auto__.cljs$core$IFn$_invoke$arity$1 = devcards$core$mount_namespace_$_state_machine__49608__auto____1;
return devcards$core$mount_namespace_$_state_machine__49608__auto__;
})()
;})(switch__49607__auto__,c__49719__auto__))
})();
var state__49721__auto__ = (function (){var statearr_70501 = f__49720__auto__.call(null);
(statearr_70501[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__49719__auto__);

return statearr_70501;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__49721__auto__);
});})(c__49719__auto__))
);

return c__49719__auto__;
});
goog.exportSymbol('devcards.core.mount_namespace', devcards.core.mount_namespace);
devcards.core.mount_namespace_live = (function devcards$core$mount_namespace_live(ns_symbol){
devcards.core.merge_front_matter_options_BANG_.call(null,ns_symbol);

return devcards.system.start_ui_with_renderer.call(null,devcards.core.devcard_event_chan,cljs.core.partial.call(null,devcards.core.render_ns,ns_symbol));
});
goog.exportSymbol('devcards.core.mount_namespace_live', devcards.core.mount_namespace_live);

//# sourceMappingURL=core.js.map?rel=1476044188730