// Compiled by ClojureScript 1.9.229 {}
goog.provide('devcards.util.utils');
goog.require('cljs.core');
goog.require('cljs.pprint');
devcards.util.utils.html_env_QMARK_ = (function devcards$util$utils$html_env_QMARK_(){
var temp__4655__auto__ = goog.global.document;
if(cljs.core.truth_(temp__4655__auto__)){
var doc = temp__4655__auto__;
return (doc["write"]);
} else {
return null;
}
});
devcards.util.utils.node_env_QMARK_ = (function devcards$util$utils$node_env_QMARK_(){
return !((goog.nodeGlobalRequire == null));
});
devcards.util.utils.pprint_str = (function devcards$util$utils$pprint_str(obj){
try{var sb__25776__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_31532_31534 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_31533_31535 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_31532_31534,_STAR_print_fn_STAR_31533_31535,sb__25776__auto__){
return (function (x__25777__auto__){
return sb__25776__auto__.append(x__25777__auto__);
});})(_STAR_print_newline_STAR_31532_31534,_STAR_print_fn_STAR_31533_31535,sb__25776__auto__))
;

try{cljs.pprint.pprint.call(null,obj);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_31533_31535;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_31532_31534;
}
return [cljs.core.str(sb__25776__auto__)].join('');
}catch (e31530){if((e31530 instanceof Error)){
var e1 = e31530;
try{return obj.toString();
}catch (e31531){if((e31531 instanceof Error)){
var e2 = e31531;
return [cljs.core.str("<<Un-printable Type>>")].join('');
} else {
throw e31531;

}
}} else {
throw e31530;

}
}});
devcards.util.utils.pprint_code = (function devcards$util$utils$pprint_code(code){
var _STAR_print_pprint_dispatch_STAR_31537 = cljs.pprint._STAR_print_pprint_dispatch_STAR_;
cljs.pprint._STAR_print_pprint_dispatch_STAR_ = cljs.pprint.code_dispatch;

try{return devcards.util.utils.pprint_str.call(null,code);
}finally {cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR_31537;
}});

//# sourceMappingURL=utils.js.map?rel=1476131797348