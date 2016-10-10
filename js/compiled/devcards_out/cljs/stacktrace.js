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
cljs.stacktrace.parse_stacktrace = (function (){var method_table__25715__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__25716__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__25717__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__25718__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__25719__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.stacktrace","parse-stacktrace"),((function (method_table__25715__auto__,prefer_table__25716__auto__,method_cache__25717__auto__,cached_hierarchy__25718__auto__,hierarchy__25719__auto__){
return (function (repl_env,st,err,opts){
return new cljs.core.Keyword(null,"ua-product","ua-product",938384227).cljs$core$IFn$_invoke$arity$1(err);
});})(method_table__25715__auto__,prefer_table__25716__auto__,method_cache__25717__auto__,cached_hierarchy__25718__auto__,hierarchy__25719__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__25719__auto__,method_table__25715__auto__,prefer_table__25716__auto__,method_cache__25717__auto__,cached_hierarchy__25718__auto__));
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
var or__24790__auto__ = new cljs.core.Keyword(null,"output-dir","output-dir",-290956991).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__24790__auto__)){
return or__24790__auto__;
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
var vec__41350 = cljs.core.reduce.call(null,((function (xs){
return (function (p__41356,p__41357){
var vec__41358 = p__41356;
var pre = cljs.core.nth.call(null,vec__41358,(0),null);
var post = cljs.core.nth.call(null,vec__41358,(1),null);
var vec__41361 = p__41357;
var x = cljs.core.nth.call(null,vec__41361,(0),null);
var i = cljs.core.nth.call(null,vec__41361,(1),null);
if((i <= (2))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pre,cljs.core.conj.call(null,post,x)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.call(null,pre,x),post], null);
}
});})(xs))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY], null),cljs.core.map.call(null,cljs.core.vector,xs,cljs.core.range.call(null,cljs.core.count.call(null,xs),(0),(-1))));
var pre = cljs.core.nth.call(null,vec__41350,(0),null);
var vec__41353 = cljs.core.nth.call(null,vec__41350,(1),null);
var line = cljs.core.nth.call(null,vec__41353,(0),null);
var column = cljs.core.nth.call(null,vec__41353,(1),null);
var file = clojure.string.join.call(null,":",pre);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__41364 = file;
if(cljs.stacktrace.starts_with_QMARK_.call(null,file,"(")){
return clojure.string.replace.call(null,G__41364,"(","");
} else {
return G__41364;
}
})(),cljs.stacktrace.parse_int.call(null,(function (){var G__41365 = line;
if(cljs.stacktrace.ends_with_QMARK_.call(null,line,")")){
return clojure.string.replace.call(null,G__41365,")","");
} else {
return G__41365;
}
})()),cljs.stacktrace.parse_int.call(null,(function (){var G__41366 = column;
if(cljs.stacktrace.ends_with_QMARK_.call(null,column,")")){
return clojure.string.replace.call(null,G__41366,")","");
} else {
return G__41366;
}
})())], null);
}
});
/**
 * Given a browser file url convert it into a relative path that can be used
 * to locate the original source.
 */
cljs.stacktrace.parse_file = (function cljs$stacktrace$parse_file(p__41367,file,p__41368){
var map__41373 = p__41367;
var map__41373__$1 = ((((!((map__41373 == null)))?((((map__41373.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41373.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41373):map__41373);
var repl_env = map__41373__$1;
var host = cljs.core.get.call(null,map__41373__$1,new cljs.core.Keyword(null,"host","host",-1558485167));
var host_port = cljs.core.get.call(null,map__41373__$1,new cljs.core.Keyword(null,"host-port","host-port",1956551772));
var port = cljs.core.get.call(null,map__41373__$1,new cljs.core.Keyword(null,"port","port",1534937262));
var map__41374 = p__41368;
var map__41374__$1 = ((((!((map__41374 == null)))?((((map__41374.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41374.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41374):map__41374);
var opts = map__41374__$1;
var asset_path = cljs.core.get.call(null,map__41374__$1,new cljs.core.Keyword(null,"asset-path","asset-path",1500889617));
var urlpat = (cljs.core.truth_(host)?cljs.stacktrace.string__GT_regex.call(null,[cljs.core.str("http://"),cljs.core.str(host),cljs.core.str(":"),cljs.core.str((function (){var or__24790__auto__ = host_port;
if(cljs.core.truth_(or__24790__auto__)){
return or__24790__auto__;
} else {
return port;
}
})()),cljs.core.str("/")].join('')):"");
var match = (cljs.core.truth_(host)?cljs.core.re_find.call(null,urlpat,file):cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"output-dir","output-dir",-290956991)));
if(cljs.core.truth_(match)){
return clojure.string.replace.call(null,clojure.string.replace.call(null,file,urlpat,""),cljs.stacktrace.string__GT_regex.call(null,[cljs.core.str("^"),cljs.core.str((function (){var or__24790__auto__ = (function (){var and__24778__auto__ = asset_path;
if(cljs.core.truth_(and__24778__auto__)){
return clojure.string.replace.call(null,asset_path,/^\//,"");
} else {
return and__24778__auto__;
}
})();
if(cljs.core.truth_(or__24790__auto__)){
return or__24790__auto__;
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
var vec__41383 = ((((1) === cljs.core.count.call(null,xs)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.first.call(null,xs)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,xs),cljs.core.last.call(null,xs)], null));
var function$ = cljs.core.nth.call(null,vec__41383,(0),null);
var flc = cljs.core.nth.call(null,vec__41383,(1),null);
var vec__41386 = cljs.stacktrace.parse_file_line_column.call(null,flc);
var file = cljs.core.nth.call(null,vec__41386,(0),null);
var line = cljs.core.nth.call(null,vec__41386,(1),null);
var column = cljs.core.nth.call(null,vec__41386,(2),null);
if(cljs.core.truth_((function (){var and__24778__auto__ = file;
if(cljs.core.truth_(and__24778__auto__)){
var and__24778__auto____$1 = function$;
if(cljs.core.truth_(and__24778__auto____$1)){
var and__24778__auto____$2 = line;
if(cljs.core.truth_(and__24778__auto____$2)){
return column;
} else {
return and__24778__auto____$2;
}
} else {
return and__24778__auto____$1;
}
} else {
return and__24778__auto__;
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
return cljs.core.vec.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,(function (p1__41391_SHARP_){
return cljs.stacktrace.chrome_st_el__GT_frame.call(null,repl_env,p1__41391_SHARP_,opts);
}),cljs.core.take_while.call(null,(function (p1__41390_SHARP_){
return !(cljs.stacktrace.starts_with_QMARK_.call(null,p1__41390_SHARP_,"    at eval"));
}),cljs.core.drop_while.call(null,(function (p1__41389_SHARP_){
return cljs.stacktrace.starts_with_QMARK_.call(null,p1__41389_SHARP_,"Error");
}),clojure.string.split_lines.call(null,st))))));
}));
cljs.stacktrace.safari_st_el__GT_frame = (function cljs$stacktrace$safari_st_el__GT_frame(repl_env,st_el,opts){
var vec__41398 = (cljs.core.truth_(cljs.core.re_find.call(null,/@/,st_el))?clojure.string.split.call(null,st_el,/@/):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,st_el], null));
var function$ = cljs.core.nth.call(null,vec__41398,(0),null);
var flc = cljs.core.nth.call(null,vec__41398,(1),null);
var vec__41401 = cljs.stacktrace.parse_file_line_column.call(null,flc);
var file = cljs.core.nth.call(null,vec__41401,(0),null);
var line = cljs.core.nth.call(null,vec__41401,(1),null);
var column = cljs.core.nth.call(null,vec__41401,(2),null);
if(cljs.core.truth_((function (){var and__24778__auto__ = file;
if(cljs.core.truth_(and__24778__auto__)){
var and__24778__auto____$1 = function$;
if(cljs.core.truth_(and__24778__auto____$1)){
var and__24778__auto____$2 = line;
if(cljs.core.truth_(and__24778__auto____$2)){
return column;
} else {
return and__24778__auto____$2;
}
} else {
return and__24778__auto____$1;
}
} else {
return and__24778__auto__;
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
return cljs.core.vec.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,(function (p1__41406_SHARP_){
return cljs.stacktrace.safari_st_el__GT_frame.call(null,repl_env,p1__41406_SHARP_,opts);
}),cljs.core.remove.call(null,clojure.string.blank_QMARK_,cljs.core.take_while.call(null,(function (p1__41405_SHARP_){
return !(cljs.stacktrace.starts_with_QMARK_.call(null,p1__41405_SHARP_,"eval code"));
}),cljs.core.drop_while.call(null,(function (p1__41404_SHARP_){
return cljs.stacktrace.starts_with_QMARK_.call(null,p1__41404_SHARP_,"Error");
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
var vec__41413 = (cljs.core.truth_(cljs.core.re_find.call(null,/@/,st_el))?clojure.string.split.call(null,st_el,/@/):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,st_el], null));
var function$ = cljs.core.nth.call(null,vec__41413,(0),null);
var flc = cljs.core.nth.call(null,vec__41413,(1),null);
var vec__41416 = cljs.stacktrace.parse_file_line_column.call(null,flc);
var file = cljs.core.nth.call(null,vec__41416,(0),null);
var line = cljs.core.nth.call(null,vec__41416,(1),null);
var column = cljs.core.nth.call(null,vec__41416,(2),null);
if(cljs.core.truth_((function (){var and__24778__auto__ = file;
if(cljs.core.truth_(and__24778__auto__)){
var and__24778__auto____$1 = function$;
if(cljs.core.truth_(and__24778__auto____$1)){
var and__24778__auto____$2 = line;
if(cljs.core.truth_(and__24778__auto____$2)){
return column;
} else {
return and__24778__auto____$2;
}
} else {
return and__24778__auto____$1;
}
} else {
return and__24778__auto__;
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
return cljs.core.vec.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,(function (p1__41421_SHARP_){
return cljs.stacktrace.firefox_st_el__GT_frame.call(null,repl_env,p1__41421_SHARP_,opts);
}),cljs.core.remove.call(null,clojure.string.blank_QMARK_,cljs.core.take_while.call(null,(function (p1__41420_SHARP_){
return cljs.core._EQ_.call(null,p1__41420_SHARP_.indexOf("> eval"),(-1));
}),cljs.core.drop_while.call(null,(function (p1__41419_SHARP_){
return cljs.stacktrace.starts_with_QMARK_.call(null,p1__41419_SHARP_,"Error");
}),clojure.string.split_lines.call(null,st)))))));
}));
cljs.core._add_method.call(null,cljs.stacktrace.parse_stacktrace,new cljs.core.Keyword(null,"rhino","rhino",1962118035),(function (repl_env,st,err,p__41422){
var map__41423 = p__41422;
var map__41423__$1 = ((((!((map__41423 == null)))?((((map__41423.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41423.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41423):map__41423);
var opts = map__41423__$1;
var output_dir = cljs.core.get.call(null,map__41423__$1,new cljs.core.Keyword(null,"output-dir","output-dir",-290956991));
var process_frame = ((function (map__41423,map__41423__$1,opts,output_dir){
return (function cljs$stacktrace$process_frame(frame_str){
if((clojure.string.blank_QMARK_.call(null,frame_str)) || (((-1) === frame_str.indexOf("\tat")))){
return null;
} else {
var vec__41443 = clojure.string.split.call(null,frame_str,/:/);
var file_side = cljs.core.nth.call(null,vec__41443,(0),null);
var line_fn_side = cljs.core.nth.call(null,vec__41443,(1),null);
var file = clojure.string.replace.call(null,file_side,/\s+at\s+/,"");
var vec__41446 = clojure.string.split.call(null,line_fn_side,/\s+/);
var line = cljs.core.nth.call(null,vec__41446,(0),null);
var function$ = cljs.core.nth.call(null,vec__41446,(1),null);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"file","file",-1269645878),clojure.string.replace.call(null,file,[cljs.core.str(output_dir),cljs.core.str("/")].join(''),""),new cljs.core.Keyword(null,"function","function",-2127255473),(cljs.core.truth_(function$)?clojure.string.replace.call(null,clojure.string.replace.call(null,function$,"(",""),")",""):null),new cljs.core.Keyword(null,"line","line",212345235),(cljs.core.truth_((function (){var and__24778__auto__ = line;
if(cljs.core.truth_(and__24778__auto__)){
return !(clojure.string.blank_QMARK_.call(null,line));
} else {
return and__24778__auto__;
}
})())?cljs.stacktrace.parse_int.call(null,line):null),new cljs.core.Keyword(null,"column","column",2078222095),(0)], null);
}
});})(map__41423,map__41423__$1,opts,output_dir))
;
return cljs.core.vec.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,process_frame,clojure.string.split.call(null,st,/\n/))));
}));
cljs.core._add_method.call(null,cljs.stacktrace.parse_stacktrace,new cljs.core.Keyword(null,"nashorn","nashorn",988299963),(function (repl_env,st,err,p__41449){
var map__41450 = p__41449;
var map__41450__$1 = ((((!((map__41450 == null)))?((((map__41450.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41450.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41450):map__41450);
var opts = map__41450__$1;
var output_dir = cljs.core.get.call(null,map__41450__$1,new cljs.core.Keyword(null,"output-dir","output-dir",-290956991));
var process_frame = ((function (map__41450,map__41450__$1,opts,output_dir){
return (function cljs$stacktrace$process_frame(frame_str){
if((clojure.string.blank_QMARK_.call(null,frame_str)) || (((-1) === frame_str.indexOf("\tat")))){
return null;
} else {
var frame_str__$1 = clojure.string.replace.call(null,frame_str,/\s+at\s+/,"");
var vec__41470 = clojure.string.split.call(null,frame_str__$1,/\s+/);
var function$ = cljs.core.nth.call(null,vec__41470,(0),null);
var file_and_line = cljs.core.nth.call(null,vec__41470,(1),null);
var vec__41473 = clojure.string.split.call(null,file_and_line,/:/);
var file_part = cljs.core.nth.call(null,vec__41473,(0),null);
var line_part = cljs.core.nth.call(null,vec__41473,(1),null);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"file","file",-1269645878),clojure.string.replace.call(null,file_part.substring((1)),[cljs.core.str(output_dir),cljs.core.str("/")].join(''),""),new cljs.core.Keyword(null,"function","function",-2127255473),function$,new cljs.core.Keyword(null,"line","line",212345235),(cljs.core.truth_((function (){var and__24778__auto__ = line_part;
if(cljs.core.truth_(and__24778__auto__)){
return !(clojure.string.blank_QMARK_.call(null,line_part));
} else {
return and__24778__auto__;
}
})())?cljs.stacktrace.parse_int.call(null,line_part.substring((0),(cljs.core.count.call(null,line_part) - (1)))):null),new cljs.core.Keyword(null,"column","column",2078222095),(0)], null);
}
});})(map__41450,map__41450__$1,opts,output_dir))
;
return cljs.core.vec.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,process_frame,clojure.string.split.call(null,st,/\n/))));
}));
cljs.core._add_method.call(null,cljs.stacktrace.parse_stacktrace,new cljs.core.Keyword(null,"nodejs","nodejs",321212524),(function (repl_env,st,err,p__41476){
var map__41477 = p__41476;
var map__41477__$1 = ((((!((map__41477 == null)))?((((map__41477.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41477.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41477):map__41477);
var opts = map__41477__$1;
var output_dir = cljs.core.get.call(null,map__41477__$1,new cljs.core.Keyword(null,"output-dir","output-dir",-290956991));
var parse_source_loc_info = ((function (map__41477,map__41477__$1,opts,output_dir){
return (function cljs$stacktrace$parse_source_loc_info(x){
if(cljs.core.truth_((function (){var and__24778__auto__ = x;
if(cljs.core.truth_(and__24778__auto__)){
return !(clojure.string.blank_QMARK_.call(null,x));
} else {
return and__24778__auto__;
}
})())){
return cljs.stacktrace.parse_int.call(null,x);
} else {
return null;
}
});})(map__41477,map__41477__$1,opts,output_dir))
;
var process_frame = ((function (map__41477,map__41477__$1,opts,output_dir){
return (function cljs$stacktrace$process_frame(frame_str){
if((clojure.string.blank_QMARK_.call(null,frame_str)) || ((cljs.core.re_find.call(null,/^\s+at/,frame_str) == null))){
return null;
} else {
var frame_str__$1 = clojure.string.replace.call(null,frame_str,/\s+at\s+/,"");
if(clojure.string.starts_with_QMARK_.call(null,frame_str__$1,"repl:")){
return null;
} else {
var parts = clojure.string.split.call(null,frame_str__$1,/\s+/);
var vec__41500 = ((((2) === cljs.core.count.call(null,parts)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,parts),cljs.core.subs.call(null,cljs.core.second.call(null,parts),(1),(cljs.core.count.call(null,cljs.core.second.call(null,parts)) - (1)))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.first.call(null,parts)], null));
var function$ = cljs.core.nth.call(null,vec__41500,(0),null);
var file_AMPERSAND_line = cljs.core.nth.call(null,vec__41500,(1),null);
var vec__41503 = clojure.string.split.call(null,file_AMPERSAND_line,/:/);
var file_part = cljs.core.nth.call(null,vec__41503,(0),null);
var line_part = cljs.core.nth.call(null,vec__41503,(1),null);
var col_part = cljs.core.nth.call(null,vec__41503,(2),null);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"file","file",-1269645878),(cljs.core.truth_(function$)?(function (){var G__41506 = file_part;
if(cljs.core.truth_(output_dir)){
return clojure.string.replace.call(null,G__41506,[cljs.core.str(output_dir),cljs.core.str("/")].join(''),"");
} else {
return G__41506;
}
})():file_part),new cljs.core.Keyword(null,"function","function",-2127255473),function$,new cljs.core.Keyword(null,"line","line",212345235),parse_source_loc_info.call(null,line_part),new cljs.core.Keyword(null,"column","column",2078222095),parse_source_loc_info.call(null,col_part)], null);
}
}
});})(map__41477,map__41477__$1,opts,output_dir))
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
return cljs.core.last.call(null,(function (){var or__24790__auto__ = cljs.core.get.call(null,columns,cljs.core.last.call(null,cljs.core.filter.call(null,((function (source_map){
return (function (p1__41507_SHARP_){
return (p1__41507_SHARP_ <= (column__$1 - (1)));
});})(source_map))
,cljs.core.sort.call(null,cljs.core.keys.call(null,columns)))));
if(cljs.core.truth_(or__24790__auto__)){
return or__24790__auto__;
} else {
return cljs.core.second.call(null,cljs.core.first.call(null,columns));
}
})());
});})(source_map))
;
var adjust = ((function (source_map){
return (function cljs$stacktrace$mapped_line_column_call_$_adjust(mapped){
return cljs.core.vec.call(null,cljs.core.map.call(null,((function (source_map){
return (function (p1__41508_SHARP_,p2__41509_SHARP_){
return p1__41508_SHARP_.call(null,p2__41509_SHARP_);
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
cljs.stacktrace.mapped_frame = (function cljs$stacktrace$mapped_frame(p__41510,sms,opts){
var map__41516 = p__41510;
var map__41516__$1 = ((((!((map__41516 == null)))?((((map__41516.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41516.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41516):map__41516);
var function$ = cljs.core.get.call(null,map__41516__$1,new cljs.core.Keyword(null,"function","function",-2127255473));
var file = cljs.core.get.call(null,map__41516__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__41516__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__41516__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var no_source_file_QMARK_ = ((cljs.core.not.call(null,file))?true:cljs.stacktrace.starts_with_QMARK_.call(null,file,"<"));
var vec__41518 = ((no_source_file_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [line,column,null], null):cljs.stacktrace.mapped_line_column_call.call(null,sms,file,line,column));
var line_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__41518,(0),null);
var column_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__41518,(1),null);
var call = cljs.core.nth.call(null,vec__41518,(2),null);
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
var args41523 = [];
var len__25865__auto___41526 = arguments.length;
var i__25866__auto___41527 = (0);
while(true){
if((i__25866__auto___41527 < len__25865__auto___41526)){
args41523.push((arguments[i__25866__auto___41527]));

var G__41528 = (i__25866__auto___41527 + (1));
i__25866__auto___41527 = G__41528;
continue;
} else {
}
break;
}

var G__41525 = args41523.length;
switch (G__41525) {
case 2:
return cljs.stacktrace.mapped_stacktrace.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.stacktrace.mapped_stacktrace.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41523.length)].join('')));

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
var mapped_frames = cljs.core.map.call(null,cljs.core.memoize.call(null,(function (p1__41521_SHARP_){
return cljs.stacktrace.mapped_frame.call(null,p1__41521_SHARP_,sms,opts);
})),stacktrace);
return cljs.core.vec.call(null,cljs.core.map.call(null,call_merge,cljs.core.map.call(null,((function (mapped_frames){
return (function (p1__41522_SHARP_){
return cljs.core.dissoc.call(null,p1__41522_SHARP_,new cljs.core.Keyword(null,"call","call",-519999866));
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
var args41530 = [];
var len__25865__auto___41543 = arguments.length;
var i__25866__auto___41544 = (0);
while(true){
if((i__25866__auto___41544 < len__25865__auto___41543)){
args41530.push((arguments[i__25866__auto___41544]));

var G__41545 = (i__25866__auto___41544 + (1));
i__25866__auto___41544 = G__41545;
continue;
} else {
}
break;
}

var G__41532 = args41530.length;
switch (G__41532) {
case 2:
return cljs.stacktrace.mapped_stacktrace_str.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.stacktrace.mapped_stacktrace_str.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41530.length)].join('')));

}
});

cljs.stacktrace.mapped_stacktrace_str.cljs$core$IFn$_invoke$arity$2 = (function (stacktrace,sms){
return cljs.stacktrace.mapped_stacktrace_str.call(null,stacktrace,sms,null);
});

cljs.stacktrace.mapped_stacktrace_str.cljs$core$IFn$_invoke$arity$3 = (function (stacktrace,sms,opts){
var sb__25776__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_41533_41547 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_41534_41548 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_41533_41547,_STAR_print_fn_STAR_41534_41548,sb__25776__auto__){
return (function (x__25777__auto__){
return sb__25776__auto__.append(x__25777__auto__);
});})(_STAR_print_newline_STAR_41533_41547,_STAR_print_fn_STAR_41534_41548,sb__25776__auto__))
;

try{var seq__41535_41549 = cljs.core.seq.call(null,cljs.stacktrace.mapped_stacktrace.call(null,stacktrace,sms,opts));
var chunk__41536_41550 = null;
var count__41537_41551 = (0);
var i__41538_41552 = (0);
while(true){
if((i__41538_41552 < count__41537_41551)){
var map__41539_41553 = cljs.core._nth.call(null,chunk__41536_41550,i__41538_41552);
var map__41539_41554__$1 = ((((!((map__41539_41553 == null)))?((((map__41539_41553.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41539_41553.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41539_41553):map__41539_41553);
var function_41555 = cljs.core.get.call(null,map__41539_41554__$1,new cljs.core.Keyword(null,"function","function",-2127255473));
var file_41556 = cljs.core.get.call(null,map__41539_41554__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line_41557 = cljs.core.get.call(null,map__41539_41554__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_41558 = cljs.core.get.call(null,map__41539_41554__$1,new cljs.core.Keyword(null,"column","column",2078222095));
cljs.core.println.call(null,"\t",[cljs.core.str((cljs.core.truth_(function_41555)?[cljs.core.str(function_41555),cljs.core.str(" ")].join(''):null)),cljs.core.str("("),cljs.core.str(file_41556),cljs.core.str((cljs.core.truth_(line_41557)?[cljs.core.str(":"),cljs.core.str(line_41557)].join(''):null)),cljs.core.str((cljs.core.truth_(column_41558)?[cljs.core.str(":"),cljs.core.str(column_41558)].join(''):null)),cljs.core.str(")")].join(''));

var G__41559 = seq__41535_41549;
var G__41560 = chunk__41536_41550;
var G__41561 = count__41537_41551;
var G__41562 = (i__41538_41552 + (1));
seq__41535_41549 = G__41559;
chunk__41536_41550 = G__41560;
count__41537_41551 = G__41561;
i__41538_41552 = G__41562;
continue;
} else {
var temp__4657__auto___41563 = cljs.core.seq.call(null,seq__41535_41549);
if(temp__4657__auto___41563){
var seq__41535_41564__$1 = temp__4657__auto___41563;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41535_41564__$1)){
var c__25601__auto___41565 = cljs.core.chunk_first.call(null,seq__41535_41564__$1);
var G__41566 = cljs.core.chunk_rest.call(null,seq__41535_41564__$1);
var G__41567 = c__25601__auto___41565;
var G__41568 = cljs.core.count.call(null,c__25601__auto___41565);
var G__41569 = (0);
seq__41535_41549 = G__41566;
chunk__41536_41550 = G__41567;
count__41537_41551 = G__41568;
i__41538_41552 = G__41569;
continue;
} else {
var map__41541_41570 = cljs.core.first.call(null,seq__41535_41564__$1);
var map__41541_41571__$1 = ((((!((map__41541_41570 == null)))?((((map__41541_41570.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41541_41570.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41541_41570):map__41541_41570);
var function_41572 = cljs.core.get.call(null,map__41541_41571__$1,new cljs.core.Keyword(null,"function","function",-2127255473));
var file_41573 = cljs.core.get.call(null,map__41541_41571__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line_41574 = cljs.core.get.call(null,map__41541_41571__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_41575 = cljs.core.get.call(null,map__41541_41571__$1,new cljs.core.Keyword(null,"column","column",2078222095));
cljs.core.println.call(null,"\t",[cljs.core.str((cljs.core.truth_(function_41572)?[cljs.core.str(function_41572),cljs.core.str(" ")].join(''):null)),cljs.core.str("("),cljs.core.str(file_41573),cljs.core.str((cljs.core.truth_(line_41574)?[cljs.core.str(":"),cljs.core.str(line_41574)].join(''):null)),cljs.core.str((cljs.core.truth_(column_41575)?[cljs.core.str(":"),cljs.core.str(column_41575)].join(''):null)),cljs.core.str(")")].join(''));

var G__41576 = cljs.core.next.call(null,seq__41535_41564__$1);
var G__41577 = null;
var G__41578 = (0);
var G__41579 = (0);
seq__41535_41549 = G__41576;
chunk__41536_41550 = G__41577;
count__41537_41551 = G__41578;
i__41538_41552 = G__41579;
continue;
}
} else {
}
}
break;
}
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_41534_41548;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_41533_41547;
}
return [cljs.core.str(sb__25776__auto__)].join('');
});

cljs.stacktrace.mapped_stacktrace_str.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=stacktrace.js.map?rel=1476131807356