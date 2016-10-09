// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.stacktrace');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('clojure.string');
if(typeof cljs.stacktrace.parse_stacktrace !== 'undefined'){
} else {
/**
 * Parse a JavaScript stacktrace string into a canonical data form. The
 *   arguments:
 * 
 *   repl-env - the repl environment, an optional map with :host and :port keys
 *           if the stacktrace includes url, not file references
 *   st       - the original stacktrace string to parse
 *   err      - an error map. :ua-product key defines the type of stacktrace parser
 *           to use, for example :chrome
 *   opts     - additional options. :output-dir maybe given in this argument if
 *           :host and :port do not apply, for example, a file path
 * 
 *   The canonical stacktrace representation can easily be mapped to a
 *   ClojureScript one see mapped-stacktrace and mapped-stacktrace-str
 */
cljs.stacktrace.parse_stacktrace = (function (){var method_table__48472__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__48473__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__48474__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__48475__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__48476__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.stacktrace","parse-stacktrace"),((function (method_table__48472__auto__,prefer_table__48473__auto__,method_cache__48474__auto__,cached_hierarchy__48475__auto__,hierarchy__48476__auto__){
return (function (repl_env,st,err,opts){
return new cljs.core.Keyword(null,"ua-product","ua-product",938384227).cljs$core$IFn$_invoke$arity$1(err);
});})(method_table__48472__auto__,prefer_table__48473__auto__,method_cache__48474__auto__,cached_hierarchy__48475__auto__,hierarchy__48476__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__48476__auto__,method_table__48472__auto__,prefer_table__48473__auto__,method_cache__48474__auto__,cached_hierarchy__48475__auto__));
})();
}
cljs.stacktrace.parse_int = (function cljs$stacktrace$parse_int(s){
return parseInt(s,(10));
});
cljs.stacktrace.starts_with_QMARK_ = (function cljs$stacktrace$starts_with_QMARK_(s0,s1){
return goog.string.startsWith(s0,s1);
});
cljs.stacktrace.ends_with_QMARK_ = (function cljs$stacktrace$ends_with_QMARK_(s0,s1){
return goog.string.endsWith(s0,s1);
});
cljs.stacktrace.string__GT_regex = (function cljs$stacktrace$string__GT_regex(s){
return (new RegExp(s));
});
cljs.stacktrace.output_directory = (function cljs$stacktrace$output_directory(opts){
var or__47547__auto__ = new cljs.core.Keyword(null,"output-dir","output-dir",-290956991).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__47547__auto__)){
return or__47547__auto__;
} else {
return "out";
}
});
cljs.core._add_method.call(null,cljs.stacktrace.parse_stacktrace,new cljs.core.Keyword(null,"default","default",-1987822328),(function (repl_env,st,err,opts){
return st;
}));
cljs.stacktrace.parse_file_line_column = (function cljs$stacktrace$parse_file_line_column(flc){
if(cljs.core.not.call(null,cljs.core.re_find.call(null,/:/,flc))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [flc,null,null], null);
} else {
var xs = clojure.string.split.call(null,flc,/:/);
var vec__77147 = cljs.core.reduce.call(null,((function (xs){
return (function (p__77153,p__77154){
var vec__77155 = p__77153;
var pre = cljs.core.nth.call(null,vec__77155,(0),null);
var post = cljs.core.nth.call(null,vec__77155,(1),null);
var vec__77158 = p__77154;
var x = cljs.core.nth.call(null,vec__77158,(0),null);
var i = cljs.core.nth.call(null,vec__77158,(1),null);
if((i <= (2))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pre,cljs.core.conj.call(null,post,x)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.call(null,pre,x),post], null);
}
});})(xs))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY], null),cljs.core.map.call(null,cljs.core.vector,xs,cljs.core.range.call(null,cljs.core.count.call(null,xs),(0),(-1))));
var pre = cljs.core.nth.call(null,vec__77147,(0),null);
var vec__77150 = cljs.core.nth.call(null,vec__77147,(1),null);
var line = cljs.core.nth.call(null,vec__77150,(0),null);
var column = cljs.core.nth.call(null,vec__77150,(1),null);
var file = clojure.string.join.call(null,":",pre);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__77161 = file;
if(cljs.stacktrace.starts_with_QMARK_.call(null,file,"(")){
return clojure.string.replace.call(null,G__77161,"(","");
} else {
return G__77161;
}
})(),cljs.stacktrace.parse_int.call(null,(function (){var G__77162 = line;
if(cljs.stacktrace.ends_with_QMARK_.call(null,line,")")){
return clojure.string.replace.call(null,G__77162,")","");
} else {
return G__77162;
}
})()),cljs.stacktrace.parse_int.call(null,(function (){var G__77163 = column;
if(cljs.stacktrace.ends_with_QMARK_.call(null,column,")")){
return clojure.string.replace.call(null,G__77163,")","");
} else {
return G__77163;
}
})())], null);
}
});
/**
 * Given a browser file url convert it into a relative path that can be used
 * to locate the original source.
 */
cljs.stacktrace.parse_file = (function cljs$stacktrace$parse_file(p__77164,file,p__77165){
var map__77170 = p__77164;
var map__77170__$1 = ((((!((map__77170 == null)))?((((map__77170.cljs$lang$protocol_mask$partition0$ & (64))) || (map__77170.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__77170):map__77170);
var repl_env = map__77170__$1;
var host = cljs.core.get.call(null,map__77170__$1,new cljs.core.Keyword(null,"host","host",-1558485167));
var host_port = cljs.core.get.call(null,map__77170__$1,new cljs.core.Keyword(null,"host-port","host-port",1956551772));
var port = cljs.core.get.call(null,map__77170__$1,new cljs.core.Keyword(null,"port","port",1534937262));
var map__77171 = p__77165;
var map__77171__$1 = ((((!((map__77171 == null)))?((((map__77171.cljs$lang$protocol_mask$partition0$ & (64))) || (map__77171.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__77171):map__77171);
var opts = map__77171__$1;
var asset_path = cljs.core.get.call(null,map__77171__$1,new cljs.core.Keyword(null,"asset-path","asset-path",1500889617));
var urlpat = (cljs.core.truth_(host)?cljs.stacktrace.string__GT_regex.call(null,[cljs.core.str("http://"),cljs.core.str(host),cljs.core.str(":"),cljs.core.str((function (){var or__47547__auto__ = host_port;
if(cljs.core.truth_(or__47547__auto__)){
return or__47547__auto__;
} else {
return port;
}
})()),cljs.core.str("/")].join('')):"");
var match = (cljs.core.truth_(host)?cljs.core.re_find.call(null,urlpat,file):cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"output-dir","output-dir",-290956991)));
if(cljs.core.truth_(match)){
return clojure.string.replace.call(null,clojure.string.replace.call(null,file,urlpat,""),cljs.stacktrace.string__GT_regex.call(null,[cljs.core.str("^"),cljs.core.str((function (){var or__47547__auto__ = (function (){var and__47535__auto__ = asset_path;
if(cljs.core.truth_(and__47535__auto__)){
return clojure.string.replace.call(null,asset_path,/^\//,"");
} else {
return and__47535__auto__;
}
})();
if(cljs.core.truth_(or__47547__auto__)){
return or__47547__auto__;
} else {
return cljs.stacktrace.output_directory.call(null,opts);
}
})()),cljs.core.str("/")].join('')),"");
} else {
var temp__4655__auto__ = new cljs.core.Keyword(null,"asset-root","asset-root",1771735072).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__4655__auto__)){
var asset_root = temp__4655__auto__;
return clojure.string.replace.call(null,file,asset_root,"");
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Could not relativize URL "),cljs.core.str(file)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"parse-stacktrace","parse-stacktrace",-38208461),new cljs.core.Keyword(null,"reason","reason",-2070751759),new cljs.core.Keyword(null,"relativize-url","relativize-url",621482324)], null));
}
}
});
cljs.stacktrace.chrome_st_el__GT_frame = (function cljs$stacktrace$chrome_st_el__GT_frame(repl_env,st_el,opts){
var xs = clojure.string.split.call(null,clojure.string.replace.call(null,st_el,/\s+at\s+/,""),/\s+/);
var vec__77180 = ((((1) === cljs.core.count.call(null,xs)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.first.call(null,xs)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,xs),cljs.core.last.call(null,xs)], null));
var function$ = cljs.core.nth.call(null,vec__77180,(0),null);
var flc = cljs.core.nth.call(null,vec__77180,(1),null);
var vec__77183 = cljs.stacktrace.parse_file_line_column.call(null,flc);
var file = cljs.core.nth.call(null,vec__77183,(0),null);
var line = cljs.core.nth.call(null,vec__77183,(1),null);
var column = cljs.core.nth.call(null,vec__77183,(2),null);
if(cljs.core.truth_((function (){var and__47535__auto__ = file;
if(cljs.core.truth_(and__47535__auto__)){
var and__47535__auto____$1 = function$;
if(cljs.core.truth_(and__47535__auto____$1)){
var and__47535__auto____$2 = line;
if(cljs.core.truth_(and__47535__auto____$2)){
return column;
} else {
return and__47535__auto____$2;
}
} else {
return and__47535__auto____$1;
}
} else {
return and__47535__auto__;
}
})())){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"file","file",-1269645878),cljs.stacktrace.parse_file.call(null,repl_env,file,opts),new cljs.core.Keyword(null,"function","function",-2127255473),clojure.string.replace.call(null,function$,/Object\./,""),new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),column], null);
} else {
if(clojure.string.blank_QMARK_.call(null,function$)){
return null;
} else {
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"file","file",-1269645878),null,new cljs.core.Keyword(null,"function","function",-2127255473),clojure.string.replace.call(null,function$,/Object\./,""),new cljs.core.Keyword(null,"line","line",212345235),null,new cljs.core.Keyword(null,"column","column",2078222095),null], null);
}
}
});
cljs.core._add_method.call(null,cljs.stacktrace.parse_stacktrace,new cljs.core.Keyword(null,"chrome","chrome",1718738387),(function (repl_env,st,err,opts){
return cljs.core.vec.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,(function (p1__77188_SHARP_){
return cljs.stacktrace.chrome_st_el__GT_frame.call(null,repl_env,p1__77188_SHARP_,opts);
}),cljs.core.take_while.call(null,(function (p1__77187_SHARP_){
return !(cljs.stacktrace.starts_with_QMARK_.call(null,p1__77187_SHARP_,"    at eval"));
}),cljs.core.drop_while.call(null,(function (p1__77186_SHARP_){
return cljs.stacktrace.starts_with_QMARK_.call(null,p1__77186_SHARP_,"Error");
}),clojure.string.split_lines.call(null,st))))));
}));
cljs.stacktrace.safari_st_el__GT_frame = (function cljs$stacktrace$safari_st_el__GT_frame(repl_env,st_el,opts){
var vec__77195 = (cljs.core.truth_(cljs.core.re_find.call(null,/@/,st_el))?clojure.string.split.call(null,st_el,/@/):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,st_el], null));
var function$ = cljs.core.nth.call(null,vec__77195,(0),null);
var flc = cljs.core.nth.call(null,vec__77195,(1),null);
var vec__77198 = cljs.stacktrace.parse_file_line_column.call(null,flc);
var file = cljs.core.nth.call(null,vec__77198,(0),null);
var line = cljs.core.nth.call(null,vec__77198,(1),null);
var column = cljs.core.nth.call(null,vec__77198,(2),null);
if(cljs.core.truth_((function (){var and__47535__auto__ = file;
if(cljs.core.truth_(and__47535__auto__)){
var and__47535__auto____$1 = function$;
if(cljs.core.truth_(and__47535__auto____$1)){
var and__47535__auto____$2 = line;
if(cljs.core.truth_(and__47535__auto____$2)){
return column;
} else {
return and__47535__auto____$2;
}
} else {
return and__47535__auto____$1;
}
} else {
return and__47535__auto__;
}
})())){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"file","file",-1269645878),cljs.stacktrace.parse_file.call(null,repl_env,file,opts),new cljs.core.Keyword(null,"function","function",-2127255473),clojure.string.trim.call(null,function$),new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),column], null);
} else {
if(clojure.string.blank_QMARK_.call(null,function$)){
return null;
} else {
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"file","file",-1269645878),null,new cljs.core.Keyword(null,"function","function",-2127255473),clojure.string.trim.call(null,function$),new cljs.core.Keyword(null,"line","line",212345235),null,new cljs.core.Keyword(null,"column","column",2078222095),null], null);
}
}
});
cljs.core._add_method.call(null,cljs.stacktrace.parse_stacktrace,new cljs.core.Keyword(null,"safari","safari",497115653),(function (repl_env,st,err,opts){
return cljs.core.vec.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,(function (p1__77203_SHARP_){
return cljs.stacktrace.safari_st_el__GT_frame.call(null,repl_env,p1__77203_SHARP_,opts);
}),cljs.core.remove.call(null,clojure.string.blank_QMARK_,cljs.core.take_while.call(null,(function (p1__77202_SHARP_){
return !(cljs.stacktrace.starts_with_QMARK_.call(null,p1__77202_SHARP_,"eval code"));
}),cljs.core.drop_while.call(null,(function (p1__77201_SHARP_){
return cljs.stacktrace.starts_with_QMARK_.call(null,p1__77201_SHARP_,"Error");
}),clojure.string.split_lines.call(null,st)))))));
}));
cljs.stacktrace.firefox_clean_function = (function cljs$stacktrace$firefox_clean_function(f){
var f__$1 = f;
var f__$2 = ((clojure.string.blank_QMARK_.call(null,f__$1))?null:((cljs.core.not_EQ_.call(null,f__$1.indexOf("</"),(-1)))?(function (){var idx = f__$1.indexOf("</");
return f__$1.substring((idx + (2)));
})():f__$1
));
return clojure.string.replace.call(null,clojure.string.replace.call(null,f__$2,/</,""),(new RegExp("\\/")),"");
});
cljs.stacktrace.firefox_st_el__GT_frame = (function cljs$stacktrace$firefox_st_el__GT_frame(repl_env,st_el,opts){
var vec__77210 = (cljs.core.truth_(cljs.core.re_find.call(null,/@/,st_el))?clojure.string.split.call(null,st_el,/@/):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,st_el], null));
var function$ = cljs.core.nth.call(null,vec__77210,(0),null);
var flc = cljs.core.nth.call(null,vec__77210,(1),null);
var vec__77213 = cljs.stacktrace.parse_file_line_column.call(null,flc);
var file = cljs.core.nth.call(null,vec__77213,(0),null);
var line = cljs.core.nth.call(null,vec__77213,(1),null);
var column = cljs.core.nth.call(null,vec__77213,(2),null);
if(cljs.core.truth_((function (){var and__47535__auto__ = file;
if(cljs.core.truth_(and__47535__auto__)){
var and__47535__auto____$1 = function$;
if(cljs.core.truth_(and__47535__auto____$1)){
var and__47535__auto____$2 = line;
if(cljs.core.truth_(and__47535__auto____$2)){
return column;
} else {
return and__47535__auto____$2;
}
} else {
return and__47535__auto____$1;
}
} else {
return and__47535__auto__;
}
})())){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"file","file",-1269645878),cljs.stacktrace.parse_file.call(null,repl_env,file,opts),new cljs.core.Keyword(null,"function","function",-2127255473),cljs.stacktrace.firefox_clean_function.call(null,function$),new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),column], null);
} else {
if(clojure.string.blank_QMARK_.call(null,function$)){
return null;
} else {
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"file","file",-1269645878),null,new cljs.core.Keyword(null,"function","function",-2127255473),cljs.stacktrace.firefox_clean_function.call(null,function$),new cljs.core.Keyword(null,"line","line",212345235),null,new cljs.core.Keyword(null,"column","column",2078222095),null], null);
}
}
});
cljs.core._add_method.call(null,cljs.stacktrace.parse_stacktrace,new cljs.core.Keyword(null,"firefox","firefox",1283768880),(function (repl_env,st,err,opts){
return cljs.core.vec.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,(function (p1__77218_SHARP_){
return cljs.stacktrace.firefox_st_el__GT_frame.call(null,repl_env,p1__77218_SHARP_,opts);
}),cljs.core.remove.call(null,clojure.string.blank_QMARK_,cljs.core.take_while.call(null,(function (p1__77217_SHARP_){
return cljs.core._EQ_.call(null,p1__77217_SHARP_.indexOf("> eval"),(-1));
}),cljs.core.drop_while.call(null,(function (p1__77216_SHARP_){
return cljs.stacktrace.starts_with_QMARK_.call(null,p1__77216_SHARP_,"Error");
}),clojure.string.split_lines.call(null,st)))))));
}));
cljs.core._add_method.call(null,cljs.stacktrace.parse_stacktrace,new cljs.core.Keyword(null,"rhino","rhino",1962118035),(function (repl_env,st,err,p__77219){
var map__77220 = p__77219;
var map__77220__$1 = ((((!((map__77220 == null)))?((((map__77220.cljs$lang$protocol_mask$partition0$ & (64))) || (map__77220.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__77220):map__77220);
var opts = map__77220__$1;
var output_dir = cljs.core.get.call(null,map__77220__$1,new cljs.core.Keyword(null,"output-dir","output-dir",-290956991));
var process_frame = ((function (map__77220,map__77220__$1,opts,output_dir){
return (function cljs$stacktrace$process_frame(frame_str){
if((clojure.string.blank_QMARK_.call(null,frame_str)) || (((-1) === frame_str.indexOf("\tat")))){
return null;
} else {
var vec__77240 = clojure.string.split.call(null,frame_str,/:/);
var file_side = cljs.core.nth.call(null,vec__77240,(0),null);
var line_fn_side = cljs.core.nth.call(null,vec__77240,(1),null);
var file = clojure.string.replace.call(null,file_side,/\s+at\s+/,"");
var vec__77243 = clojure.string.split.call(null,line_fn_side,/\s+/);
var line = cljs.core.nth.call(null,vec__77243,(0),null);
var function$ = cljs.core.nth.call(null,vec__77243,(1),null);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"file","file",-1269645878),clojure.string.replace.call(null,file,[cljs.core.str(output_dir),cljs.core.str("/")].join(''),""),new cljs.core.Keyword(null,"function","function",-2127255473),(cljs.core.truth_(function$)?clojure.string.replace.call(null,clojure.string.replace.call(null,function$,"(",""),")",""):null),new cljs.core.Keyword(null,"line","line",212345235),(cljs.core.truth_((function (){var and__47535__auto__ = line;
if(cljs.core.truth_(and__47535__auto__)){
return !(clojure.string.blank_QMARK_.call(null,line));
} else {
return and__47535__auto__;
}
})())?cljs.stacktrace.parse_int.call(null,line):null),new cljs.core.Keyword(null,"column","column",2078222095),(0)], null);
}
});})(map__77220,map__77220__$1,opts,output_dir))
;
return cljs.core.vec.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,process_frame,clojure.string.split.call(null,st,/\n/))));
}));
cljs.core._add_method.call(null,cljs.stacktrace.parse_stacktrace,new cljs.core.Keyword(null,"nashorn","nashorn",988299963),(function (repl_env,st,err,p__77246){
var map__77247 = p__77246;
var map__77247__$1 = ((((!((map__77247 == null)))?((((map__77247.cljs$lang$protocol_mask$partition0$ & (64))) || (map__77247.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__77247):map__77247);
var opts = map__77247__$1;
var output_dir = cljs.core.get.call(null,map__77247__$1,new cljs.core.Keyword(null,"output-dir","output-dir",-290956991));
var process_frame = ((function (map__77247,map__77247__$1,opts,output_dir){
return (function cljs$stacktrace$process_frame(frame_str){
if((clojure.string.blank_QMARK_.call(null,frame_str)) || (((-1) === frame_str.indexOf("\tat")))){
return null;
} else {
var frame_str__$1 = clojure.string.replace.call(null,frame_str,/\s+at\s+/,"");
var vec__77267 = clojure.string.split.call(null,frame_str__$1,/\s+/);
var function$ = cljs.core.nth.call(null,vec__77267,(0),null);
var file_and_line = cljs.core.nth.call(null,vec__77267,(1),null);
var vec__77270 = clojure.string.split.call(null,file_and_line,/:/);
var file_part = cljs.core.nth.call(null,vec__77270,(0),null);
var line_part = cljs.core.nth.call(null,vec__77270,(1),null);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"file","file",-1269645878),clojure.string.replace.call(null,file_part.substring((1)),[cljs.core.str(output_dir),cljs.core.str("/")].join(''),""),new cljs.core.Keyword(null,"function","function",-2127255473),function$,new cljs.core.Keyword(null,"line","line",212345235),(cljs.core.truth_((function (){var and__47535__auto__ = line_part;
if(cljs.core.truth_(and__47535__auto__)){
return !(clojure.string.blank_QMARK_.call(null,line_part));
} else {
return and__47535__auto__;
}
})())?cljs.stacktrace.parse_int.call(null,line_part.substring((0),(cljs.core.count.call(null,line_part) - (1)))):null),new cljs.core.Keyword(null,"column","column",2078222095),(0)], null);
}
});})(map__77247,map__77247__$1,opts,output_dir))
;
return cljs.core.vec.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,process_frame,clojure.string.split.call(null,st,/\n/))));
}));
cljs.core._add_method.call(null,cljs.stacktrace.parse_stacktrace,new cljs.core.Keyword(null,"nodejs","nodejs",321212524),(function (repl_env,st,err,p__77273){
var map__77274 = p__77273;
var map__77274__$1 = ((((!((map__77274 == null)))?((((map__77274.cljs$lang$protocol_mask$partition0$ & (64))) || (map__77274.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__77274):map__77274);
var opts = map__77274__$1;
var output_dir = cljs.core.get.call(null,map__77274__$1,new cljs.core.Keyword(null,"output-dir","output-dir",-290956991));
var parse_source_loc_info = ((function (map__77274,map__77274__$1,opts,output_dir){
return (function cljs$stacktrace$parse_source_loc_info(x){
if(cljs.core.truth_((function (){var and__47535__auto__ = x;
if(cljs.core.truth_(and__47535__auto__)){
return !(clojure.string.blank_QMARK_.call(null,x));
} else {
return and__47535__auto__;
}
})())){
return cljs.stacktrace.parse_int.call(null,x);
} else {
return null;
}
});})(map__77274,map__77274__$1,opts,output_dir))
;
var process_frame = ((function (map__77274,map__77274__$1,opts,output_dir){
return (function cljs$stacktrace$process_frame(frame_str){
if((clojure.string.blank_QMARK_.call(null,frame_str)) || ((cljs.core.re_find.call(null,/^\s+at/,frame_str) == null))){
return null;
} else {
var frame_str__$1 = clojure.string.replace.call(null,frame_str,/\s+at\s+/,"");
if(clojure.string.starts_with_QMARK_.call(null,frame_str__$1,"repl:")){
return null;
} else {
var parts = clojure.string.split.call(null,frame_str__$1,/\s+/);
var vec__77297 = ((((2) === cljs.core.count.call(null,parts)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,parts),cljs.core.subs.call(null,cljs.core.second.call(null,parts),(1),(cljs.core.count.call(null,cljs.core.second.call(null,parts)) - (1)))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.first.call(null,parts)], null));
var function$ = cljs.core.nth.call(null,vec__77297,(0),null);
var file_AMPERSAND_line = cljs.core.nth.call(null,vec__77297,(1),null);
var vec__77300 = clojure.string.split.call(null,file_AMPERSAND_line,/:/);
var file_part = cljs.core.nth.call(null,vec__77300,(0),null);
var line_part = cljs.core.nth.call(null,vec__77300,(1),null);
var col_part = cljs.core.nth.call(null,vec__77300,(2),null);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"file","file",-1269645878),(cljs.core.truth_(function$)?(function (){var G__77303 = file_part;
if(cljs.core.truth_(output_dir)){
return clojure.string.replace.call(null,G__77303,[cljs.core.str(output_dir),cljs.core.str("/")].join(''),"");
} else {
return G__77303;
}
})():file_part),new cljs.core.Keyword(null,"function","function",-2127255473),function$,new cljs.core.Keyword(null,"line","line",212345235),parse_source_loc_info.call(null,line_part),new cljs.core.Keyword(null,"column","column",2078222095),parse_source_loc_info.call(null,col_part)], null);
}
}
});})(map__77274,map__77274__$1,opts,output_dir))
;
return cljs.core.vec.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,process_frame,clojure.string.split.call(null,st,/\n/))));
}));
cljs.stacktrace.remove_ext = (function cljs$stacktrace$remove_ext(file){
return clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,file,/\.js$/,""),/\.cljs$/,""),/\.cljc$/,""),/\.clj$/,"");
});
/**
 * Given a cljs.source-map source map data structure map a generated line
 * and column back to the original line, column, and function called.
 */
cljs.stacktrace.mapped_line_column_call = (function cljs$stacktrace$mapped_line_column_call(sms,file,line,column){
var source_map = cljs.core.get.call(null,sms,cljs.core.symbol.call(null,clojure.string.replace.call(null,cljs.stacktrace.remove_ext.call(null,file),"/",".")));
var get_best_column = ((function (source_map){
return (function cljs$stacktrace$mapped_line_column_call_$_get_best_column(columns,column__$1){
return cljs.core.last.call(null,(function (){var or__47547__auto__ = cljs.core.get.call(null,columns,cljs.core.last.call(null,cljs.core.filter.call(null,((function (source_map){
return (function (p1__77304_SHARP_){
return (p1__77304_SHARP_ <= (column__$1 - (1)));
});})(source_map))
,cljs.core.sort.call(null,cljs.core.keys.call(null,columns)))));
if(cljs.core.truth_(or__47547__auto__)){
return or__47547__auto__;
} else {
return cljs.core.second.call(null,cljs.core.first.call(null,columns));
}
})());
});})(source_map))
;
var adjust = ((function (source_map){
return (function cljs$stacktrace$mapped_line_column_call_$_adjust(mapped){
return cljs.core.vec.call(null,cljs.core.map.call(null,((function (source_map){
return (function (p1__77305_SHARP_,p2__77306_SHARP_){
return p1__77305_SHARP_.call(null,p2__77306_SHARP_);
});})(source_map))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.inc,cljs.core.inc,cljs.core.identity], null),mapped));
});})(source_map))
;
var default$ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [line,column,null], null);
var temp__4655__auto__ = cljs.core.get.call(null,source_map,(line - (1)));
if(cljs.core.truth_(temp__4655__auto__)){
var columns = temp__4655__auto__;
return adjust.call(null,cljs.core.map.call(null,get_best_column.call(null,columns,column),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"col","col",-1959363084),new cljs.core.Keyword(null,"name","name",1843675177)], null)));
} else {
return default$;
}
});
/**
 * Given opts and a canonicalized JavaScript stacktrace frame, return the
 *   ClojureScript frame.
 */
cljs.stacktrace.mapped_frame = (function cljs$stacktrace$mapped_frame(p__77307,sms,opts){
var map__77313 = p__77307;
var map__77313__$1 = ((((!((map__77313 == null)))?((((map__77313.cljs$lang$protocol_mask$partition0$ & (64))) || (map__77313.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__77313):map__77313);
var function$ = cljs.core.get.call(null,map__77313__$1,new cljs.core.Keyword(null,"function","function",-2127255473));
var file = cljs.core.get.call(null,map__77313__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__77313__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__77313__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var no_source_file_QMARK_ = ((cljs.core.not.call(null,file))?true:cljs.stacktrace.starts_with_QMARK_.call(null,file,"<"));
var vec__77315 = ((no_source_file_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [line,column,null], null):cljs.stacktrace.mapped_line_column_call.call(null,sms,file,line,column));
var line_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__77315,(0),null);
var column_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__77315,(1),null);
var call = cljs.core.nth.call(null,vec__77315,(2),null);
var file_SINGLEQUOTE_ = ((no_source_file_QMARK_)?null:((cljs.stacktrace.ends_with_QMARK_.call(null,file,".js"))?[cljs.core.str(cljs.core.subs.call(null,file,(0),(cljs.core.count.call(null,file) - (3)))),cljs.core.str(".cljs")].join(''):file));
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"function","function",-2127255473),function$,new cljs.core.Keyword(null,"call","call",-519999866),call,new cljs.core.Keyword(null,"file","file",-1269645878),((no_source_file_QMARK_)?[cljs.core.str("NO_SOURCE_FILE"),cljs.core.str((cljs.core.truth_(file)?[cljs.core.str(" "),cljs.core.str(file)].join(''):null))].join(''):file_SINGLEQUOTE_),new cljs.core.Keyword(null,"line","line",212345235),line_SINGLEQUOTE_,new cljs.core.Keyword(null,"column","column",2078222095),column_SINGLEQUOTE_], null);
});
/**
 * Given a vector representing the canonicalized JavaScript stacktrace
 * return the ClojureScript stacktrace. The canonical stacktrace must be
 * in the form:
 * 
 *  [{:file <string>
 *    :function <string>
 *    :line <integer>
 *    :column <integer>}*]
 * 
 * :file must be a URL path (without protocol) relative to :output-dir or a
 * identifier delimited by angle brackets. The returned mapped stacktrace will
 * also contain :url entries to the original sources if it can be determined
 * from the classpath.
 */
cljs.stacktrace.mapped_stacktrace = (function cljs$stacktrace$mapped_stacktrace(var_args){
var args77320 = [];
var len__48622__auto___77323 = arguments.length;
var i__48623__auto___77324 = (0);
while(true){
if((i__48623__auto___77324 < len__48622__auto___77323)){
args77320.push((arguments[i__48623__auto___77324]));

var G__77325 = (i__48623__auto___77324 + (1));
i__48623__auto___77324 = G__77325;
continue;
} else {
}
break;
}

var G__77322 = args77320.length;
switch (G__77322) {
case 2:
return cljs.stacktrace.mapped_stacktrace.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.stacktrace.mapped_stacktrace.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args77320.length)].join('')));

}
});

cljs.stacktrace.mapped_stacktrace.cljs$core$IFn$_invoke$arity$2 = (function (stacktrace,sms){
return cljs.stacktrace.mapped_stacktrace.call(null,stacktrace,sms,null);
});

cljs.stacktrace.mapped_stacktrace.cljs$core$IFn$_invoke$arity$3 = (function (stacktrace,sms,opts){
var call__GT_function = (function cljs$stacktrace$call__GT_function(x){
if(cljs.core.truth_(new cljs.core.Keyword(null,"call","call",-519999866).cljs$core$IFn$_invoke$arity$1(x))){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"function","function",-2127255473)],[new cljs.core.Keyword(null,"call","call",-519999866).cljs$core$IFn$_invoke$arity$1(x)]);
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
var call_merge = (function cljs$stacktrace$call_merge(function$,call){
return cljs.core.merge_with.call(null,(function (munged_fn_name,unmunged_call_name){
if(cljs.core._EQ_.call(null,munged_fn_name,clojure.string.replace.call(null,cljs.core.munge.call(null,unmunged_call_name),".","$"))){
return unmunged_call_name;
} else {
return munged_fn_name;
}
}),function$,call);
});
var mapped_frames = cljs.core.map.call(null,cljs.core.memoize.call(null,(function (p1__77318_SHARP_){
return cljs.stacktrace.mapped_frame.call(null,p1__77318_SHARP_,sms,opts);
})),stacktrace);
return cljs.core.vec.call(null,cljs.core.map.call(null,call_merge,cljs.core.map.call(null,((function (mapped_frames){
return (function (p1__77319_SHARP_){
return cljs.core.dissoc.call(null,p1__77319_SHARP_,new cljs.core.Keyword(null,"call","call",-519999866));
});})(mapped_frames))
,mapped_frames),cljs.core.concat.call(null,cljs.core.rest.call(null,cljs.core.map.call(null,call__GT_function,mapped_frames)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY], null))));
});

cljs.stacktrace.mapped_stacktrace.cljs$lang$maxFixedArity = 3;

/**
 * Given a vector representing the canonicalized JavaScript stacktrace and a map
 *   of library names to decoded source maps, print the ClojureScript stacktrace .
 *   See mapped-stacktrace.
 */
cljs.stacktrace.mapped_stacktrace_str = (function cljs$stacktrace$mapped_stacktrace_str(var_args){
var args77327 = [];
var len__48622__auto___77340 = arguments.length;
var i__48623__auto___77341 = (0);
while(true){
if((i__48623__auto___77341 < len__48622__auto___77340)){
args77327.push((arguments[i__48623__auto___77341]));

var G__77342 = (i__48623__auto___77341 + (1));
i__48623__auto___77341 = G__77342;
continue;
} else {
}
break;
}

var G__77329 = args77327.length;
switch (G__77329) {
case 2:
return cljs.stacktrace.mapped_stacktrace_str.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.stacktrace.mapped_stacktrace_str.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args77327.length)].join('')));

}
});

cljs.stacktrace.mapped_stacktrace_str.cljs$core$IFn$_invoke$arity$2 = (function (stacktrace,sms){
return cljs.stacktrace.mapped_stacktrace_str.call(null,stacktrace,sms,null);
});

cljs.stacktrace.mapped_stacktrace_str.cljs$core$IFn$_invoke$arity$3 = (function (stacktrace,sms,opts){
var sb__48533__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_77330_77344 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_77331_77345 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_77330_77344,_STAR_print_fn_STAR_77331_77345,sb__48533__auto__){
return (function (x__48534__auto__){
return sb__48533__auto__.append(x__48534__auto__);
});})(_STAR_print_newline_STAR_77330_77344,_STAR_print_fn_STAR_77331_77345,sb__48533__auto__))
;

try{var seq__77332_77346 = cljs.core.seq.call(null,cljs.stacktrace.mapped_stacktrace.call(null,stacktrace,sms,opts));
var chunk__77333_77347 = null;
var count__77334_77348 = (0);
var i__77335_77349 = (0);
while(true){
if((i__77335_77349 < count__77334_77348)){
var map__77336_77350 = cljs.core._nth.call(null,chunk__77333_77347,i__77335_77349);
var map__77336_77351__$1 = ((((!((map__77336_77350 == null)))?((((map__77336_77350.cljs$lang$protocol_mask$partition0$ & (64))) || (map__77336_77350.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__77336_77350):map__77336_77350);
var function_77352 = cljs.core.get.call(null,map__77336_77351__$1,new cljs.core.Keyword(null,"function","function",-2127255473));
var file_77353 = cljs.core.get.call(null,map__77336_77351__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line_77354 = cljs.core.get.call(null,map__77336_77351__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_77355 = cljs.core.get.call(null,map__77336_77351__$1,new cljs.core.Keyword(null,"column","column",2078222095));
cljs.core.println.call(null,"\t",[cljs.core.str((cljs.core.truth_(function_77352)?[cljs.core.str(function_77352),cljs.core.str(" ")].join(''):null)),cljs.core.str("("),cljs.core.str(file_77353),cljs.core.str((cljs.core.truth_(line_77354)?[cljs.core.str(":"),cljs.core.str(line_77354)].join(''):null)),cljs.core.str((cljs.core.truth_(column_77355)?[cljs.core.str(":"),cljs.core.str(column_77355)].join(''):null)),cljs.core.str(")")].join(''));

var G__77356 = seq__77332_77346;
var G__77357 = chunk__77333_77347;
var G__77358 = count__77334_77348;
var G__77359 = (i__77335_77349 + (1));
seq__77332_77346 = G__77356;
chunk__77333_77347 = G__77357;
count__77334_77348 = G__77358;
i__77335_77349 = G__77359;
continue;
} else {
var temp__4657__auto___77360 = cljs.core.seq.call(null,seq__77332_77346);
if(temp__4657__auto___77360){
var seq__77332_77361__$1 = temp__4657__auto___77360;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__77332_77361__$1)){
var c__48358__auto___77362 = cljs.core.chunk_first.call(null,seq__77332_77361__$1);
var G__77363 = cljs.core.chunk_rest.call(null,seq__77332_77361__$1);
var G__77364 = c__48358__auto___77362;
var G__77365 = cljs.core.count.call(null,c__48358__auto___77362);
var G__77366 = (0);
seq__77332_77346 = G__77363;
chunk__77333_77347 = G__77364;
count__77334_77348 = G__77365;
i__77335_77349 = G__77366;
continue;
} else {
var map__77338_77367 = cljs.core.first.call(null,seq__77332_77361__$1);
var map__77338_77368__$1 = ((((!((map__77338_77367 == null)))?((((map__77338_77367.cljs$lang$protocol_mask$partition0$ & (64))) || (map__77338_77367.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__77338_77367):map__77338_77367);
var function_77369 = cljs.core.get.call(null,map__77338_77368__$1,new cljs.core.Keyword(null,"function","function",-2127255473));
var file_77370 = cljs.core.get.call(null,map__77338_77368__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line_77371 = cljs.core.get.call(null,map__77338_77368__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_77372 = cljs.core.get.call(null,map__77338_77368__$1,new cljs.core.Keyword(null,"column","column",2078222095));
cljs.core.println.call(null,"\t",[cljs.core.str((cljs.core.truth_(function_77369)?[cljs.core.str(function_77369),cljs.core.str(" ")].join(''):null)),cljs.core.str("("),cljs.core.str(file_77370),cljs.core.str((cljs.core.truth_(line_77371)?[cljs.core.str(":"),cljs.core.str(line_77371)].join(''):null)),cljs.core.str((cljs.core.truth_(column_77372)?[cljs.core.str(":"),cljs.core.str(column_77372)].join(''):null)),cljs.core.str(")")].join(''));

var G__77373 = cljs.core.next.call(null,seq__77332_77361__$1);
var G__77374 = null;
var G__77375 = (0);
var G__77376 = (0);
seq__77332_77346 = G__77373;
chunk__77333_77347 = G__77374;
count__77334_77348 = G__77375;
i__77335_77349 = G__77376;
continue;
}
} else {
}
}
break;
}
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_77331_77345;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_77330_77344;
}
return [cljs.core.str(sb__48533__auto__)].join('');
});

cljs.stacktrace.mapped_stacktrace_str.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=stacktrace.js.map?rel=1476044196508