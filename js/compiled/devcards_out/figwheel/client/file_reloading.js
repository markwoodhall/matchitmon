// Compiled by ClojureScript 1.9.229 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__47547__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__47547__auto__){
return or__47547__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__47547__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__47547__auto__)){
return or__47547__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__70960_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__70960_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__70965 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__70966 = null;
var count__70967 = (0);
var i__70968 = (0);
while(true){
if((i__70968 < count__70967)){
var n = cljs.core._nth.call(null,chunk__70966,i__70968);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__70969 = seq__70965;
var G__70970 = chunk__70966;
var G__70971 = count__70967;
var G__70972 = (i__70968 + (1));
seq__70965 = G__70969;
chunk__70966 = G__70970;
count__70967 = G__70971;
i__70968 = G__70972;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__70965);
if(temp__4657__auto__){
var seq__70965__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__70965__$1)){
var c__48358__auto__ = cljs.core.chunk_first.call(null,seq__70965__$1);
var G__70973 = cljs.core.chunk_rest.call(null,seq__70965__$1);
var G__70974 = c__48358__auto__;
var G__70975 = cljs.core.count.call(null,c__48358__auto__);
var G__70976 = (0);
seq__70965 = G__70973;
chunk__70966 = G__70974;
count__70967 = G__70975;
i__70968 = G__70976;
continue;
} else {
var n = cljs.core.first.call(null,seq__70965__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__70977 = cljs.core.next.call(null,seq__70965__$1);
var G__70978 = null;
var G__70979 = (0);
var G__70980 = (0);
seq__70965 = G__70977;
chunk__70966 = G__70978;
count__70967 = G__70979;
i__70968 = G__70980;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__71031_71042 = cljs.core.seq.call(null,deps);
var chunk__71032_71043 = null;
var count__71033_71044 = (0);
var i__71034_71045 = (0);
while(true){
if((i__71034_71045 < count__71033_71044)){
var dep_71046 = cljs.core._nth.call(null,chunk__71032_71043,i__71034_71045);
topo_sort_helper_STAR_.call(null,dep_71046,(depth + (1)),state);

var G__71047 = seq__71031_71042;
var G__71048 = chunk__71032_71043;
var G__71049 = count__71033_71044;
var G__71050 = (i__71034_71045 + (1));
seq__71031_71042 = G__71047;
chunk__71032_71043 = G__71048;
count__71033_71044 = G__71049;
i__71034_71045 = G__71050;
continue;
} else {
var temp__4657__auto___71051 = cljs.core.seq.call(null,seq__71031_71042);
if(temp__4657__auto___71051){
var seq__71031_71052__$1 = temp__4657__auto___71051;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__71031_71052__$1)){
var c__48358__auto___71053 = cljs.core.chunk_first.call(null,seq__71031_71052__$1);
var G__71054 = cljs.core.chunk_rest.call(null,seq__71031_71052__$1);
var G__71055 = c__48358__auto___71053;
var G__71056 = cljs.core.count.call(null,c__48358__auto___71053);
var G__71057 = (0);
seq__71031_71042 = G__71054;
chunk__71032_71043 = G__71055;
count__71033_71044 = G__71056;
i__71034_71045 = G__71057;
continue;
} else {
var dep_71058 = cljs.core.first.call(null,seq__71031_71052__$1);
topo_sort_helper_STAR_.call(null,dep_71058,(depth + (1)),state);

var G__71059 = cljs.core.next.call(null,seq__71031_71052__$1);
var G__71060 = null;
var G__71061 = (0);
var G__71062 = (0);
seq__71031_71042 = G__71059;
chunk__71032_71043 = G__71060;
count__71033_71044 = G__71061;
i__71034_71045 = G__71062;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__71035){
var vec__71039 = p__71035;
var seq__71040 = cljs.core.seq.call(null,vec__71039);
var first__71041 = cljs.core.first.call(null,seq__71040);
var seq__71040__$1 = cljs.core.next.call(null,seq__71040);
var x = first__71041;
var xs = seq__71040__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__71039,seq__71040,first__71041,seq__71040__$1,x,xs,get_deps__$1){
return (function (p1__70981_SHARP_){
return clojure.set.difference.call(null,p1__70981_SHARP_,x);
});})(vec__71039,seq__71040,first__71041,seq__71040__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__71075 = cljs.core.seq.call(null,provides);
var chunk__71076 = null;
var count__71077 = (0);
var i__71078 = (0);
while(true){
if((i__71078 < count__71077)){
var prov = cljs.core._nth.call(null,chunk__71076,i__71078);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__71079_71087 = cljs.core.seq.call(null,requires);
var chunk__71080_71088 = null;
var count__71081_71089 = (0);
var i__71082_71090 = (0);
while(true){
if((i__71082_71090 < count__71081_71089)){
var req_71091 = cljs.core._nth.call(null,chunk__71080_71088,i__71082_71090);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_71091,prov);

var G__71092 = seq__71079_71087;
var G__71093 = chunk__71080_71088;
var G__71094 = count__71081_71089;
var G__71095 = (i__71082_71090 + (1));
seq__71079_71087 = G__71092;
chunk__71080_71088 = G__71093;
count__71081_71089 = G__71094;
i__71082_71090 = G__71095;
continue;
} else {
var temp__4657__auto___71096 = cljs.core.seq.call(null,seq__71079_71087);
if(temp__4657__auto___71096){
var seq__71079_71097__$1 = temp__4657__auto___71096;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__71079_71097__$1)){
var c__48358__auto___71098 = cljs.core.chunk_first.call(null,seq__71079_71097__$1);
var G__71099 = cljs.core.chunk_rest.call(null,seq__71079_71097__$1);
var G__71100 = c__48358__auto___71098;
var G__71101 = cljs.core.count.call(null,c__48358__auto___71098);
var G__71102 = (0);
seq__71079_71087 = G__71099;
chunk__71080_71088 = G__71100;
count__71081_71089 = G__71101;
i__71082_71090 = G__71102;
continue;
} else {
var req_71103 = cljs.core.first.call(null,seq__71079_71097__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_71103,prov);

var G__71104 = cljs.core.next.call(null,seq__71079_71097__$1);
var G__71105 = null;
var G__71106 = (0);
var G__71107 = (0);
seq__71079_71087 = G__71104;
chunk__71080_71088 = G__71105;
count__71081_71089 = G__71106;
i__71082_71090 = G__71107;
continue;
}
} else {
}
}
break;
}

var G__71108 = seq__71075;
var G__71109 = chunk__71076;
var G__71110 = count__71077;
var G__71111 = (i__71078 + (1));
seq__71075 = G__71108;
chunk__71076 = G__71109;
count__71077 = G__71110;
i__71078 = G__71111;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__71075);
if(temp__4657__auto__){
var seq__71075__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__71075__$1)){
var c__48358__auto__ = cljs.core.chunk_first.call(null,seq__71075__$1);
var G__71112 = cljs.core.chunk_rest.call(null,seq__71075__$1);
var G__71113 = c__48358__auto__;
var G__71114 = cljs.core.count.call(null,c__48358__auto__);
var G__71115 = (0);
seq__71075 = G__71112;
chunk__71076 = G__71113;
count__71077 = G__71114;
i__71078 = G__71115;
continue;
} else {
var prov = cljs.core.first.call(null,seq__71075__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__71083_71116 = cljs.core.seq.call(null,requires);
var chunk__71084_71117 = null;
var count__71085_71118 = (0);
var i__71086_71119 = (0);
while(true){
if((i__71086_71119 < count__71085_71118)){
var req_71120 = cljs.core._nth.call(null,chunk__71084_71117,i__71086_71119);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_71120,prov);

var G__71121 = seq__71083_71116;
var G__71122 = chunk__71084_71117;
var G__71123 = count__71085_71118;
var G__71124 = (i__71086_71119 + (1));
seq__71083_71116 = G__71121;
chunk__71084_71117 = G__71122;
count__71085_71118 = G__71123;
i__71086_71119 = G__71124;
continue;
} else {
var temp__4657__auto___71125__$1 = cljs.core.seq.call(null,seq__71083_71116);
if(temp__4657__auto___71125__$1){
var seq__71083_71126__$1 = temp__4657__auto___71125__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__71083_71126__$1)){
var c__48358__auto___71127 = cljs.core.chunk_first.call(null,seq__71083_71126__$1);
var G__71128 = cljs.core.chunk_rest.call(null,seq__71083_71126__$1);
var G__71129 = c__48358__auto___71127;
var G__71130 = cljs.core.count.call(null,c__48358__auto___71127);
var G__71131 = (0);
seq__71083_71116 = G__71128;
chunk__71084_71117 = G__71129;
count__71085_71118 = G__71130;
i__71086_71119 = G__71131;
continue;
} else {
var req_71132 = cljs.core.first.call(null,seq__71083_71126__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_71132,prov);

var G__71133 = cljs.core.next.call(null,seq__71083_71126__$1);
var G__71134 = null;
var G__71135 = (0);
var G__71136 = (0);
seq__71083_71116 = G__71133;
chunk__71084_71117 = G__71134;
count__71085_71118 = G__71135;
i__71086_71119 = G__71136;
continue;
}
} else {
}
}
break;
}

var G__71137 = cljs.core.next.call(null,seq__71075__$1);
var G__71138 = null;
var G__71139 = (0);
var G__71140 = (0);
seq__71075 = G__71137;
chunk__71076 = G__71138;
count__71077 = G__71139;
i__71078 = G__71140;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__71145_71149 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__71146_71150 = null;
var count__71147_71151 = (0);
var i__71148_71152 = (0);
while(true){
if((i__71148_71152 < count__71147_71151)){
var ns_71153 = cljs.core._nth.call(null,chunk__71146_71150,i__71148_71152);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_71153);

var G__71154 = seq__71145_71149;
var G__71155 = chunk__71146_71150;
var G__71156 = count__71147_71151;
var G__71157 = (i__71148_71152 + (1));
seq__71145_71149 = G__71154;
chunk__71146_71150 = G__71155;
count__71147_71151 = G__71156;
i__71148_71152 = G__71157;
continue;
} else {
var temp__4657__auto___71158 = cljs.core.seq.call(null,seq__71145_71149);
if(temp__4657__auto___71158){
var seq__71145_71159__$1 = temp__4657__auto___71158;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__71145_71159__$1)){
var c__48358__auto___71160 = cljs.core.chunk_first.call(null,seq__71145_71159__$1);
var G__71161 = cljs.core.chunk_rest.call(null,seq__71145_71159__$1);
var G__71162 = c__48358__auto___71160;
var G__71163 = cljs.core.count.call(null,c__48358__auto___71160);
var G__71164 = (0);
seq__71145_71149 = G__71161;
chunk__71146_71150 = G__71162;
count__71147_71151 = G__71163;
i__71148_71152 = G__71164;
continue;
} else {
var ns_71165 = cljs.core.first.call(null,seq__71145_71159__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_71165);

var G__71166 = cljs.core.next.call(null,seq__71145_71159__$1);
var G__71167 = null;
var G__71168 = (0);
var G__71169 = (0);
seq__71145_71149 = G__71166;
chunk__71146_71150 = G__71167;
count__71147_71151 = G__71168;
i__71148_71152 = G__71169;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__47547__auto__ = goog.require__;
if(cljs.core.truth_(or__47547__auto__)){
return or__47547__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__71170__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__71170 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__71171__i = 0, G__71171__a = new Array(arguments.length -  0);
while (G__71171__i < G__71171__a.length) {G__71171__a[G__71171__i] = arguments[G__71171__i + 0]; ++G__71171__i;}
  args = new cljs.core.IndexedSeq(G__71171__a,0);
} 
return G__71170__delegate.call(this,args);};
G__71170.cljs$lang$maxFixedArity = 0;
G__71170.cljs$lang$applyTo = (function (arglist__71172){
var args = cljs.core.seq(arglist__71172);
return G__71170__delegate(args);
});
G__71170.cljs$core$IFn$_invoke$arity$variadic = G__71170__delegate;
return G__71170;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__71174 = cljs.core._EQ_;
var expr__71175 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__71174.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__71175))){
var path_parts = ((function (pred__71174,expr__71175){
return (function (p1__71173_SHARP_){
return clojure.string.split.call(null,p1__71173_SHARP_,/[\/\\]/);
});})(pred__71174,expr__71175))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__71174,expr__71175){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e71177){if((e71177 instanceof Error)){
var e = e71177;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e71177;

}
}})());
});
;})(path_parts,sep,root,pred__71174,expr__71175))
} else {
if(cljs.core.truth_(pred__71174.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__71175))){
return ((function (pred__71174,expr__71175){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred,pred__71174,expr__71175){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__71174,expr__71175))
);

return deferred.addErrback(((function (deferred,pred__71174,expr__71175){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__71174,expr__71175))
);
});
;})(pred__71174,expr__71175))
} else {
return ((function (pred__71174,expr__71175){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__71174,expr__71175))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__71178,callback){
var map__71181 = p__71178;
var map__71181__$1 = ((((!((map__71181 == null)))?((((map__71181.cljs$lang$protocol_mask$partition0$ & (64))) || (map__71181.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__71181):map__71181);
var file_msg = map__71181__$1;
var request_url = cljs.core.get.call(null,map__71181__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__71181,map__71181__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__71181,map__71181__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__49719__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__49719__auto__){
return (function (){
var f__49720__auto__ = (function (){var switch__49607__auto__ = ((function (c__49719__auto__){
return (function (state_71205){
var state_val_71206 = (state_71205[(1)]);
if((state_val_71206 === (7))){
var inst_71201 = (state_71205[(2)]);
var state_71205__$1 = state_71205;
var statearr_71207_71227 = state_71205__$1;
(statearr_71207_71227[(2)] = inst_71201);

(statearr_71207_71227[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71206 === (1))){
var state_71205__$1 = state_71205;
var statearr_71208_71228 = state_71205__$1;
(statearr_71208_71228[(2)] = null);

(statearr_71208_71228[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71206 === (4))){
var inst_71185 = (state_71205[(7)]);
var inst_71185__$1 = (state_71205[(2)]);
var state_71205__$1 = (function (){var statearr_71209 = state_71205;
(statearr_71209[(7)] = inst_71185__$1);

return statearr_71209;
})();
if(cljs.core.truth_(inst_71185__$1)){
var statearr_71210_71229 = state_71205__$1;
(statearr_71210_71229[(1)] = (5));

} else {
var statearr_71211_71230 = state_71205__$1;
(statearr_71211_71230[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71206 === (6))){
var state_71205__$1 = state_71205;
var statearr_71212_71231 = state_71205__$1;
(statearr_71212_71231[(2)] = null);

(statearr_71212_71231[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71206 === (3))){
var inst_71203 = (state_71205[(2)]);
var state_71205__$1 = state_71205;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_71205__$1,inst_71203);
} else {
if((state_val_71206 === (2))){
var state_71205__$1 = state_71205;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_71205__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_71206 === (11))){
var inst_71197 = (state_71205[(2)]);
var state_71205__$1 = (function (){var statearr_71213 = state_71205;
(statearr_71213[(8)] = inst_71197);

return statearr_71213;
})();
var statearr_71214_71232 = state_71205__$1;
(statearr_71214_71232[(2)] = null);

(statearr_71214_71232[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71206 === (9))){
var inst_71191 = (state_71205[(9)]);
var inst_71189 = (state_71205[(10)]);
var inst_71193 = inst_71191.call(null,inst_71189);
var state_71205__$1 = state_71205;
var statearr_71215_71233 = state_71205__$1;
(statearr_71215_71233[(2)] = inst_71193);

(statearr_71215_71233[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71206 === (5))){
var inst_71185 = (state_71205[(7)]);
var inst_71187 = figwheel.client.file_reloading.blocking_load.call(null,inst_71185);
var state_71205__$1 = state_71205;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_71205__$1,(8),inst_71187);
} else {
if((state_val_71206 === (10))){
var inst_71189 = (state_71205[(10)]);
var inst_71195 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_71189);
var state_71205__$1 = state_71205;
var statearr_71216_71234 = state_71205__$1;
(statearr_71216_71234[(2)] = inst_71195);

(statearr_71216_71234[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71206 === (8))){
var inst_71191 = (state_71205[(9)]);
var inst_71185 = (state_71205[(7)]);
var inst_71189 = (state_71205[(2)]);
var inst_71190 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_71191__$1 = cljs.core.get.call(null,inst_71190,inst_71185);
var state_71205__$1 = (function (){var statearr_71217 = state_71205;
(statearr_71217[(9)] = inst_71191__$1);

(statearr_71217[(10)] = inst_71189);

return statearr_71217;
})();
if(cljs.core.truth_(inst_71191__$1)){
var statearr_71218_71235 = state_71205__$1;
(statearr_71218_71235[(1)] = (9));

} else {
var statearr_71219_71236 = state_71205__$1;
(statearr_71219_71236[(1)] = (10));

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
});})(c__49719__auto__))
;
return ((function (switch__49607__auto__,c__49719__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__49608__auto__ = null;
var figwheel$client$file_reloading$state_machine__49608__auto____0 = (function (){
var statearr_71223 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_71223[(0)] = figwheel$client$file_reloading$state_machine__49608__auto__);

(statearr_71223[(1)] = (1));

return statearr_71223;
});
var figwheel$client$file_reloading$state_machine__49608__auto____1 = (function (state_71205){
while(true){
var ret_value__49609__auto__ = (function (){try{while(true){
var result__49610__auto__ = switch__49607__auto__.call(null,state_71205);
if(cljs.core.keyword_identical_QMARK_.call(null,result__49610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49610__auto__;
}
break;
}
}catch (e71224){if((e71224 instanceof Object)){
var ex__49611__auto__ = e71224;
var statearr_71225_71237 = state_71205;
(statearr_71225_71237[(5)] = ex__49611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_71205);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e71224;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__49609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__71238 = state_71205;
state_71205 = G__71238;
continue;
} else {
return ret_value__49609__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__49608__auto__ = function(state_71205){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__49608__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__49608__auto____1.call(this,state_71205);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__49608__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__49608__auto____0;
figwheel$client$file_reloading$state_machine__49608__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__49608__auto____1;
return figwheel$client$file_reloading$state_machine__49608__auto__;
})()
;})(switch__49607__auto__,c__49719__auto__))
})();
var state__49721__auto__ = (function (){var statearr_71226 = f__49720__auto__.call(null);
(statearr_71226[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__49719__auto__);

return statearr_71226;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__49721__auto__);
});})(c__49719__auto__))
);

return c__49719__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__71239,callback){
var map__71242 = p__71239;
var map__71242__$1 = ((((!((map__71242 == null)))?((((map__71242.cljs$lang$protocol_mask$partition0$ & (64))) || (map__71242.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__71242):map__71242);
var file_msg = map__71242__$1;
var namespace = cljs.core.get.call(null,map__71242__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__71242,map__71242__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__71242,map__71242__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__71244){
var map__71247 = p__71244;
var map__71247__$1 = ((((!((map__71247 == null)))?((((map__71247.cljs$lang$protocol_mask$partition0$ & (64))) || (map__71247.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__71247):map__71247);
var file_msg = map__71247__$1;
var namespace = cljs.core.get.call(null,map__71247__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__47535__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__47535__auto__){
var or__47547__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__47547__auto__)){
return or__47547__auto__;
} else {
var or__47547__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__47547__auto____$1)){
return or__47547__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__47535__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__71249,callback){
var map__71252 = p__71249;
var map__71252__$1 = ((((!((map__71252 == null)))?((((map__71252.cljs$lang$protocol_mask$partition0$ & (64))) || (map__71252.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__71252):map__71252);
var file_msg = map__71252__$1;
var request_url = cljs.core.get.call(null,map__71252__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__71252__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__49719__auto___71356 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__49719__auto___71356,out){
return (function (){
var f__49720__auto__ = (function (){var switch__49607__auto__ = ((function (c__49719__auto___71356,out){
return (function (state_71338){
var state_val_71339 = (state_71338[(1)]);
if((state_val_71339 === (1))){
var inst_71312 = cljs.core.seq.call(null,files);
var inst_71313 = cljs.core.first.call(null,inst_71312);
var inst_71314 = cljs.core.next.call(null,inst_71312);
var inst_71315 = files;
var state_71338__$1 = (function (){var statearr_71340 = state_71338;
(statearr_71340[(7)] = inst_71314);

(statearr_71340[(8)] = inst_71315);

(statearr_71340[(9)] = inst_71313);

return statearr_71340;
})();
var statearr_71341_71357 = state_71338__$1;
(statearr_71341_71357[(2)] = null);

(statearr_71341_71357[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71339 === (2))){
var inst_71321 = (state_71338[(10)]);
var inst_71315 = (state_71338[(8)]);
var inst_71320 = cljs.core.seq.call(null,inst_71315);
var inst_71321__$1 = cljs.core.first.call(null,inst_71320);
var inst_71322 = cljs.core.next.call(null,inst_71320);
var inst_71323 = (inst_71321__$1 == null);
var inst_71324 = cljs.core.not.call(null,inst_71323);
var state_71338__$1 = (function (){var statearr_71342 = state_71338;
(statearr_71342[(10)] = inst_71321__$1);

(statearr_71342[(11)] = inst_71322);

return statearr_71342;
})();
if(inst_71324){
var statearr_71343_71358 = state_71338__$1;
(statearr_71343_71358[(1)] = (4));

} else {
var statearr_71344_71359 = state_71338__$1;
(statearr_71344_71359[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71339 === (3))){
var inst_71336 = (state_71338[(2)]);
var state_71338__$1 = state_71338;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_71338__$1,inst_71336);
} else {
if((state_val_71339 === (4))){
var inst_71321 = (state_71338[(10)]);
var inst_71326 = figwheel.client.file_reloading.reload_js_file.call(null,inst_71321);
var state_71338__$1 = state_71338;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_71338__$1,(7),inst_71326);
} else {
if((state_val_71339 === (5))){
var inst_71332 = cljs.core.async.close_BANG_.call(null,out);
var state_71338__$1 = state_71338;
var statearr_71345_71360 = state_71338__$1;
(statearr_71345_71360[(2)] = inst_71332);

(statearr_71345_71360[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71339 === (6))){
var inst_71334 = (state_71338[(2)]);
var state_71338__$1 = state_71338;
var statearr_71346_71361 = state_71338__$1;
(statearr_71346_71361[(2)] = inst_71334);

(statearr_71346_71361[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71339 === (7))){
var inst_71322 = (state_71338[(11)]);
var inst_71328 = (state_71338[(2)]);
var inst_71329 = cljs.core.async.put_BANG_.call(null,out,inst_71328);
var inst_71315 = inst_71322;
var state_71338__$1 = (function (){var statearr_71347 = state_71338;
(statearr_71347[(8)] = inst_71315);

(statearr_71347[(12)] = inst_71329);

return statearr_71347;
})();
var statearr_71348_71362 = state_71338__$1;
(statearr_71348_71362[(2)] = null);

(statearr_71348_71362[(1)] = (2));


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
});})(c__49719__auto___71356,out))
;
return ((function (switch__49607__auto__,c__49719__auto___71356,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__49608__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__49608__auto____0 = (function (){
var statearr_71352 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_71352[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__49608__auto__);

(statearr_71352[(1)] = (1));

return statearr_71352;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__49608__auto____1 = (function (state_71338){
while(true){
var ret_value__49609__auto__ = (function (){try{while(true){
var result__49610__auto__ = switch__49607__auto__.call(null,state_71338);
if(cljs.core.keyword_identical_QMARK_.call(null,result__49610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49610__auto__;
}
break;
}
}catch (e71353){if((e71353 instanceof Object)){
var ex__49611__auto__ = e71353;
var statearr_71354_71363 = state_71338;
(statearr_71354_71363[(5)] = ex__49611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_71338);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e71353;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__49609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__71364 = state_71338;
state_71338 = G__71364;
continue;
} else {
return ret_value__49609__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__49608__auto__ = function(state_71338){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__49608__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__49608__auto____1.call(this,state_71338);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__49608__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__49608__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__49608__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__49608__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__49608__auto__;
})()
;})(switch__49607__auto__,c__49719__auto___71356,out))
})();
var state__49721__auto__ = (function (){var statearr_71355 = f__49720__auto__.call(null);
(statearr_71355[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__49719__auto___71356);

return statearr_71355;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__49721__auto__);
});})(c__49719__auto___71356,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__71365,opts){
var map__71369 = p__71365;
var map__71369__$1 = ((((!((map__71369 == null)))?((((map__71369.cljs$lang$protocol_mask$partition0$ & (64))) || (map__71369.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__71369):map__71369);
var eval_body__$1 = cljs.core.get.call(null,map__71369__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__71369__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__47535__auto__ = eval_body__$1;
if(cljs.core.truth_(and__47535__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__47535__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e71371){var e = e71371;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__71372_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__71372_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__71381){
var vec__71382 = p__71381;
var k = cljs.core.nth.call(null,vec__71382,(0),null);
var v = cljs.core.nth.call(null,vec__71382,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__71385){
var vec__71386 = p__71385;
var k = cljs.core.nth.call(null,vec__71386,(0),null);
var v = cljs.core.nth.call(null,vec__71386,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__71392,p__71393){
var map__71640 = p__71392;
var map__71640__$1 = ((((!((map__71640 == null)))?((((map__71640.cljs$lang$protocol_mask$partition0$ & (64))) || (map__71640.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__71640):map__71640);
var opts = map__71640__$1;
var before_jsload = cljs.core.get.call(null,map__71640__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__71640__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__71640__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__71641 = p__71393;
var map__71641__$1 = ((((!((map__71641 == null)))?((((map__71641.cljs$lang$protocol_mask$partition0$ & (64))) || (map__71641.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__71641):map__71641);
var msg = map__71641__$1;
var files = cljs.core.get.call(null,map__71641__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__71641__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__71641__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__49719__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__49719__auto__,map__71640,map__71640__$1,opts,before_jsload,on_jsload,reload_dependents,map__71641,map__71641__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__49720__auto__ = (function (){var switch__49607__auto__ = ((function (c__49719__auto__,map__71640,map__71640__$1,opts,before_jsload,on_jsload,reload_dependents,map__71641,map__71641__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_71794){
var state_val_71795 = (state_71794[(1)]);
if((state_val_71795 === (7))){
var inst_71658 = (state_71794[(7)]);
var inst_71657 = (state_71794[(8)]);
var inst_71655 = (state_71794[(9)]);
var inst_71656 = (state_71794[(10)]);
var inst_71663 = cljs.core._nth.call(null,inst_71656,inst_71658);
var inst_71664 = figwheel.client.file_reloading.eval_body.call(null,inst_71663,opts);
var inst_71665 = (inst_71658 + (1));
var tmp71796 = inst_71657;
var tmp71797 = inst_71655;
var tmp71798 = inst_71656;
var inst_71655__$1 = tmp71797;
var inst_71656__$1 = tmp71798;
var inst_71657__$1 = tmp71796;
var inst_71658__$1 = inst_71665;
var state_71794__$1 = (function (){var statearr_71799 = state_71794;
(statearr_71799[(7)] = inst_71658__$1);

(statearr_71799[(11)] = inst_71664);

(statearr_71799[(8)] = inst_71657__$1);

(statearr_71799[(9)] = inst_71655__$1);

(statearr_71799[(10)] = inst_71656__$1);

return statearr_71799;
})();
var statearr_71800_71886 = state_71794__$1;
(statearr_71800_71886[(2)] = null);

(statearr_71800_71886[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71795 === (20))){
var inst_71698 = (state_71794[(12)]);
var inst_71706 = figwheel.client.file_reloading.sort_files.call(null,inst_71698);
var state_71794__$1 = state_71794;
var statearr_71801_71887 = state_71794__$1;
(statearr_71801_71887[(2)] = inst_71706);

(statearr_71801_71887[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71795 === (27))){
var state_71794__$1 = state_71794;
var statearr_71802_71888 = state_71794__$1;
(statearr_71802_71888[(2)] = null);

(statearr_71802_71888[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71795 === (1))){
var inst_71647 = (state_71794[(13)]);
var inst_71644 = before_jsload.call(null,files);
var inst_71645 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_71646 = (function (){return ((function (inst_71647,inst_71644,inst_71645,state_val_71795,c__49719__auto__,map__71640,map__71640__$1,opts,before_jsload,on_jsload,reload_dependents,map__71641,map__71641__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__71389_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__71389_SHARP_);
});
;})(inst_71647,inst_71644,inst_71645,state_val_71795,c__49719__auto__,map__71640,map__71640__$1,opts,before_jsload,on_jsload,reload_dependents,map__71641,map__71641__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_71647__$1 = cljs.core.filter.call(null,inst_71646,files);
var inst_71648 = cljs.core.not_empty.call(null,inst_71647__$1);
var state_71794__$1 = (function (){var statearr_71803 = state_71794;
(statearr_71803[(14)] = inst_71645);

(statearr_71803[(13)] = inst_71647__$1);

(statearr_71803[(15)] = inst_71644);

return statearr_71803;
})();
if(cljs.core.truth_(inst_71648)){
var statearr_71804_71889 = state_71794__$1;
(statearr_71804_71889[(1)] = (2));

} else {
var statearr_71805_71890 = state_71794__$1;
(statearr_71805_71890[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71795 === (24))){
var state_71794__$1 = state_71794;
var statearr_71806_71891 = state_71794__$1;
(statearr_71806_71891[(2)] = null);

(statearr_71806_71891[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71795 === (39))){
var inst_71748 = (state_71794[(16)]);
var state_71794__$1 = state_71794;
var statearr_71807_71892 = state_71794__$1;
(statearr_71807_71892[(2)] = inst_71748);

(statearr_71807_71892[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71795 === (46))){
var inst_71789 = (state_71794[(2)]);
var state_71794__$1 = state_71794;
var statearr_71808_71893 = state_71794__$1;
(statearr_71808_71893[(2)] = inst_71789);

(statearr_71808_71893[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71795 === (4))){
var inst_71692 = (state_71794[(2)]);
var inst_71693 = cljs.core.List.EMPTY;
var inst_71694 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_71693);
var inst_71695 = (function (){return ((function (inst_71692,inst_71693,inst_71694,state_val_71795,c__49719__auto__,map__71640,map__71640__$1,opts,before_jsload,on_jsload,reload_dependents,map__71641,map__71641__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__71390_SHARP_){
var and__47535__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__71390_SHARP_);
if(cljs.core.truth_(and__47535__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__71390_SHARP_));
} else {
return and__47535__auto__;
}
});
;})(inst_71692,inst_71693,inst_71694,state_val_71795,c__49719__auto__,map__71640,map__71640__$1,opts,before_jsload,on_jsload,reload_dependents,map__71641,map__71641__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_71696 = cljs.core.filter.call(null,inst_71695,files);
var inst_71697 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_71698 = cljs.core.concat.call(null,inst_71696,inst_71697);
var state_71794__$1 = (function (){var statearr_71809 = state_71794;
(statearr_71809[(17)] = inst_71692);

(statearr_71809[(18)] = inst_71694);

(statearr_71809[(12)] = inst_71698);

return statearr_71809;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_71810_71894 = state_71794__$1;
(statearr_71810_71894[(1)] = (16));

} else {
var statearr_71811_71895 = state_71794__$1;
(statearr_71811_71895[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71795 === (15))){
var inst_71682 = (state_71794[(2)]);
var state_71794__$1 = state_71794;
var statearr_71812_71896 = state_71794__$1;
(statearr_71812_71896[(2)] = inst_71682);

(statearr_71812_71896[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71795 === (21))){
var inst_71708 = (state_71794[(19)]);
var inst_71708__$1 = (state_71794[(2)]);
var inst_71709 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_71708__$1);
var state_71794__$1 = (function (){var statearr_71813 = state_71794;
(statearr_71813[(19)] = inst_71708__$1);

return statearr_71813;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_71794__$1,(22),inst_71709);
} else {
if((state_val_71795 === (31))){
var inst_71792 = (state_71794[(2)]);
var state_71794__$1 = state_71794;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_71794__$1,inst_71792);
} else {
if((state_val_71795 === (32))){
var inst_71748 = (state_71794[(16)]);
var inst_71753 = inst_71748.cljs$lang$protocol_mask$partition0$;
var inst_71754 = (inst_71753 & (64));
var inst_71755 = inst_71748.cljs$core$ISeq$;
var inst_71756 = (inst_71754) || (inst_71755);
var state_71794__$1 = state_71794;
if(cljs.core.truth_(inst_71756)){
var statearr_71814_71897 = state_71794__$1;
(statearr_71814_71897[(1)] = (35));

} else {
var statearr_71815_71898 = state_71794__$1;
(statearr_71815_71898[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71795 === (40))){
var inst_71769 = (state_71794[(20)]);
var inst_71768 = (state_71794[(2)]);
var inst_71769__$1 = cljs.core.get.call(null,inst_71768,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_71770 = cljs.core.get.call(null,inst_71768,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_71771 = cljs.core.not_empty.call(null,inst_71769__$1);
var state_71794__$1 = (function (){var statearr_71816 = state_71794;
(statearr_71816[(20)] = inst_71769__$1);

(statearr_71816[(21)] = inst_71770);

return statearr_71816;
})();
if(cljs.core.truth_(inst_71771)){
var statearr_71817_71899 = state_71794__$1;
(statearr_71817_71899[(1)] = (41));

} else {
var statearr_71818_71900 = state_71794__$1;
(statearr_71818_71900[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71795 === (33))){
var state_71794__$1 = state_71794;
var statearr_71819_71901 = state_71794__$1;
(statearr_71819_71901[(2)] = false);

(statearr_71819_71901[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71795 === (13))){
var inst_71668 = (state_71794[(22)]);
var inst_71672 = cljs.core.chunk_first.call(null,inst_71668);
var inst_71673 = cljs.core.chunk_rest.call(null,inst_71668);
var inst_71674 = cljs.core.count.call(null,inst_71672);
var inst_71655 = inst_71673;
var inst_71656 = inst_71672;
var inst_71657 = inst_71674;
var inst_71658 = (0);
var state_71794__$1 = (function (){var statearr_71820 = state_71794;
(statearr_71820[(7)] = inst_71658);

(statearr_71820[(8)] = inst_71657);

(statearr_71820[(9)] = inst_71655);

(statearr_71820[(10)] = inst_71656);

return statearr_71820;
})();
var statearr_71821_71902 = state_71794__$1;
(statearr_71821_71902[(2)] = null);

(statearr_71821_71902[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71795 === (22))){
var inst_71708 = (state_71794[(19)]);
var inst_71711 = (state_71794[(23)]);
var inst_71716 = (state_71794[(24)]);
var inst_71712 = (state_71794[(25)]);
var inst_71711__$1 = (state_71794[(2)]);
var inst_71712__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_71711__$1);
var inst_71713 = (function (){var all_files = inst_71708;
var res_SINGLEQUOTE_ = inst_71711__$1;
var res = inst_71712__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_71708,inst_71711,inst_71716,inst_71712,inst_71711__$1,inst_71712__$1,state_val_71795,c__49719__auto__,map__71640,map__71640__$1,opts,before_jsload,on_jsload,reload_dependents,map__71641,map__71641__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__71391_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__71391_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_71708,inst_71711,inst_71716,inst_71712,inst_71711__$1,inst_71712__$1,state_val_71795,c__49719__auto__,map__71640,map__71640__$1,opts,before_jsload,on_jsload,reload_dependents,map__71641,map__71641__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_71714 = cljs.core.filter.call(null,inst_71713,inst_71711__$1);
var inst_71715 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_71716__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_71715);
var inst_71717 = cljs.core.not_empty.call(null,inst_71716__$1);
var state_71794__$1 = (function (){var statearr_71822 = state_71794;
(statearr_71822[(26)] = inst_71714);

(statearr_71822[(23)] = inst_71711__$1);

(statearr_71822[(24)] = inst_71716__$1);

(statearr_71822[(25)] = inst_71712__$1);

return statearr_71822;
})();
if(cljs.core.truth_(inst_71717)){
var statearr_71823_71903 = state_71794__$1;
(statearr_71823_71903[(1)] = (23));

} else {
var statearr_71824_71904 = state_71794__$1;
(statearr_71824_71904[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71795 === (36))){
var state_71794__$1 = state_71794;
var statearr_71825_71905 = state_71794__$1;
(statearr_71825_71905[(2)] = false);

(statearr_71825_71905[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71795 === (41))){
var inst_71769 = (state_71794[(20)]);
var inst_71773 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_71774 = cljs.core.map.call(null,inst_71773,inst_71769);
var inst_71775 = cljs.core.pr_str.call(null,inst_71774);
var inst_71776 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_71775)].join('');
var inst_71777 = figwheel.client.utils.log.call(null,inst_71776);
var state_71794__$1 = state_71794;
var statearr_71826_71906 = state_71794__$1;
(statearr_71826_71906[(2)] = inst_71777);

(statearr_71826_71906[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71795 === (43))){
var inst_71770 = (state_71794[(21)]);
var inst_71780 = (state_71794[(2)]);
var inst_71781 = cljs.core.not_empty.call(null,inst_71770);
var state_71794__$1 = (function (){var statearr_71827 = state_71794;
(statearr_71827[(27)] = inst_71780);

return statearr_71827;
})();
if(cljs.core.truth_(inst_71781)){
var statearr_71828_71907 = state_71794__$1;
(statearr_71828_71907[(1)] = (44));

} else {
var statearr_71829_71908 = state_71794__$1;
(statearr_71829_71908[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71795 === (29))){
var inst_71714 = (state_71794[(26)]);
var inst_71748 = (state_71794[(16)]);
var inst_71708 = (state_71794[(19)]);
var inst_71711 = (state_71794[(23)]);
var inst_71716 = (state_71794[(24)]);
var inst_71712 = (state_71794[(25)]);
var inst_71744 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_71747 = (function (){var all_files = inst_71708;
var res_SINGLEQUOTE_ = inst_71711;
var res = inst_71712;
var files_not_loaded = inst_71714;
var dependencies_that_loaded = inst_71716;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_71714,inst_71748,inst_71708,inst_71711,inst_71716,inst_71712,inst_71744,state_val_71795,c__49719__auto__,map__71640,map__71640__$1,opts,before_jsload,on_jsload,reload_dependents,map__71641,map__71641__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__71746){
var map__71830 = p__71746;
var map__71830__$1 = ((((!((map__71830 == null)))?((((map__71830.cljs$lang$protocol_mask$partition0$ & (64))) || (map__71830.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__71830):map__71830);
var namespace = cljs.core.get.call(null,map__71830__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_71714,inst_71748,inst_71708,inst_71711,inst_71716,inst_71712,inst_71744,state_val_71795,c__49719__auto__,map__71640,map__71640__$1,opts,before_jsload,on_jsload,reload_dependents,map__71641,map__71641__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_71748__$1 = cljs.core.group_by.call(null,inst_71747,inst_71714);
var inst_71750 = (inst_71748__$1 == null);
var inst_71751 = cljs.core.not.call(null,inst_71750);
var state_71794__$1 = (function (){var statearr_71832 = state_71794;
(statearr_71832[(28)] = inst_71744);

(statearr_71832[(16)] = inst_71748__$1);

return statearr_71832;
})();
if(inst_71751){
var statearr_71833_71909 = state_71794__$1;
(statearr_71833_71909[(1)] = (32));

} else {
var statearr_71834_71910 = state_71794__$1;
(statearr_71834_71910[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71795 === (44))){
var inst_71770 = (state_71794[(21)]);
var inst_71783 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_71770);
var inst_71784 = cljs.core.pr_str.call(null,inst_71783);
var inst_71785 = [cljs.core.str("not required: "),cljs.core.str(inst_71784)].join('');
var inst_71786 = figwheel.client.utils.log.call(null,inst_71785);
var state_71794__$1 = state_71794;
var statearr_71835_71911 = state_71794__$1;
(statearr_71835_71911[(2)] = inst_71786);

(statearr_71835_71911[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71795 === (6))){
var inst_71689 = (state_71794[(2)]);
var state_71794__$1 = state_71794;
var statearr_71836_71912 = state_71794__$1;
(statearr_71836_71912[(2)] = inst_71689);

(statearr_71836_71912[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71795 === (28))){
var inst_71714 = (state_71794[(26)]);
var inst_71741 = (state_71794[(2)]);
var inst_71742 = cljs.core.not_empty.call(null,inst_71714);
var state_71794__$1 = (function (){var statearr_71837 = state_71794;
(statearr_71837[(29)] = inst_71741);

return statearr_71837;
})();
if(cljs.core.truth_(inst_71742)){
var statearr_71838_71913 = state_71794__$1;
(statearr_71838_71913[(1)] = (29));

} else {
var statearr_71839_71914 = state_71794__$1;
(statearr_71839_71914[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71795 === (25))){
var inst_71712 = (state_71794[(25)]);
var inst_71728 = (state_71794[(2)]);
var inst_71729 = cljs.core.not_empty.call(null,inst_71712);
var state_71794__$1 = (function (){var statearr_71840 = state_71794;
(statearr_71840[(30)] = inst_71728);

return statearr_71840;
})();
if(cljs.core.truth_(inst_71729)){
var statearr_71841_71915 = state_71794__$1;
(statearr_71841_71915[(1)] = (26));

} else {
var statearr_71842_71916 = state_71794__$1;
(statearr_71842_71916[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71795 === (34))){
var inst_71763 = (state_71794[(2)]);
var state_71794__$1 = state_71794;
if(cljs.core.truth_(inst_71763)){
var statearr_71843_71917 = state_71794__$1;
(statearr_71843_71917[(1)] = (38));

} else {
var statearr_71844_71918 = state_71794__$1;
(statearr_71844_71918[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71795 === (17))){
var state_71794__$1 = state_71794;
var statearr_71845_71919 = state_71794__$1;
(statearr_71845_71919[(2)] = recompile_dependents);

(statearr_71845_71919[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71795 === (3))){
var state_71794__$1 = state_71794;
var statearr_71846_71920 = state_71794__$1;
(statearr_71846_71920[(2)] = null);

(statearr_71846_71920[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71795 === (12))){
var inst_71685 = (state_71794[(2)]);
var state_71794__$1 = state_71794;
var statearr_71847_71921 = state_71794__$1;
(statearr_71847_71921[(2)] = inst_71685);

(statearr_71847_71921[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71795 === (2))){
var inst_71647 = (state_71794[(13)]);
var inst_71654 = cljs.core.seq.call(null,inst_71647);
var inst_71655 = inst_71654;
var inst_71656 = null;
var inst_71657 = (0);
var inst_71658 = (0);
var state_71794__$1 = (function (){var statearr_71848 = state_71794;
(statearr_71848[(7)] = inst_71658);

(statearr_71848[(8)] = inst_71657);

(statearr_71848[(9)] = inst_71655);

(statearr_71848[(10)] = inst_71656);

return statearr_71848;
})();
var statearr_71849_71922 = state_71794__$1;
(statearr_71849_71922[(2)] = null);

(statearr_71849_71922[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71795 === (23))){
var inst_71714 = (state_71794[(26)]);
var inst_71708 = (state_71794[(19)]);
var inst_71711 = (state_71794[(23)]);
var inst_71716 = (state_71794[(24)]);
var inst_71712 = (state_71794[(25)]);
var inst_71719 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_71721 = (function (){var all_files = inst_71708;
var res_SINGLEQUOTE_ = inst_71711;
var res = inst_71712;
var files_not_loaded = inst_71714;
var dependencies_that_loaded = inst_71716;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_71714,inst_71708,inst_71711,inst_71716,inst_71712,inst_71719,state_val_71795,c__49719__auto__,map__71640,map__71640__$1,opts,before_jsload,on_jsload,reload_dependents,map__71641,map__71641__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__71720){
var map__71850 = p__71720;
var map__71850__$1 = ((((!((map__71850 == null)))?((((map__71850.cljs$lang$protocol_mask$partition0$ & (64))) || (map__71850.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__71850):map__71850);
var request_url = cljs.core.get.call(null,map__71850__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_71714,inst_71708,inst_71711,inst_71716,inst_71712,inst_71719,state_val_71795,c__49719__auto__,map__71640,map__71640__$1,opts,before_jsload,on_jsload,reload_dependents,map__71641,map__71641__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_71722 = cljs.core.reverse.call(null,inst_71716);
var inst_71723 = cljs.core.map.call(null,inst_71721,inst_71722);
var inst_71724 = cljs.core.pr_str.call(null,inst_71723);
var inst_71725 = figwheel.client.utils.log.call(null,inst_71724);
var state_71794__$1 = (function (){var statearr_71852 = state_71794;
(statearr_71852[(31)] = inst_71719);

return statearr_71852;
})();
var statearr_71853_71923 = state_71794__$1;
(statearr_71853_71923[(2)] = inst_71725);

(statearr_71853_71923[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71795 === (35))){
var state_71794__$1 = state_71794;
var statearr_71854_71924 = state_71794__$1;
(statearr_71854_71924[(2)] = true);

(statearr_71854_71924[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71795 === (19))){
var inst_71698 = (state_71794[(12)]);
var inst_71704 = figwheel.client.file_reloading.expand_files.call(null,inst_71698);
var state_71794__$1 = state_71794;
var statearr_71855_71925 = state_71794__$1;
(statearr_71855_71925[(2)] = inst_71704);

(statearr_71855_71925[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71795 === (11))){
var state_71794__$1 = state_71794;
var statearr_71856_71926 = state_71794__$1;
(statearr_71856_71926[(2)] = null);

(statearr_71856_71926[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71795 === (9))){
var inst_71687 = (state_71794[(2)]);
var state_71794__$1 = state_71794;
var statearr_71857_71927 = state_71794__$1;
(statearr_71857_71927[(2)] = inst_71687);

(statearr_71857_71927[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71795 === (5))){
var inst_71658 = (state_71794[(7)]);
var inst_71657 = (state_71794[(8)]);
var inst_71660 = (inst_71658 < inst_71657);
var inst_71661 = inst_71660;
var state_71794__$1 = state_71794;
if(cljs.core.truth_(inst_71661)){
var statearr_71858_71928 = state_71794__$1;
(statearr_71858_71928[(1)] = (7));

} else {
var statearr_71859_71929 = state_71794__$1;
(statearr_71859_71929[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71795 === (14))){
var inst_71668 = (state_71794[(22)]);
var inst_71677 = cljs.core.first.call(null,inst_71668);
var inst_71678 = figwheel.client.file_reloading.eval_body.call(null,inst_71677,opts);
var inst_71679 = cljs.core.next.call(null,inst_71668);
var inst_71655 = inst_71679;
var inst_71656 = null;
var inst_71657 = (0);
var inst_71658 = (0);
var state_71794__$1 = (function (){var statearr_71860 = state_71794;
(statearr_71860[(32)] = inst_71678);

(statearr_71860[(7)] = inst_71658);

(statearr_71860[(8)] = inst_71657);

(statearr_71860[(9)] = inst_71655);

(statearr_71860[(10)] = inst_71656);

return statearr_71860;
})();
var statearr_71861_71930 = state_71794__$1;
(statearr_71861_71930[(2)] = null);

(statearr_71861_71930[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71795 === (45))){
var state_71794__$1 = state_71794;
var statearr_71862_71931 = state_71794__$1;
(statearr_71862_71931[(2)] = null);

(statearr_71862_71931[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71795 === (26))){
var inst_71714 = (state_71794[(26)]);
var inst_71708 = (state_71794[(19)]);
var inst_71711 = (state_71794[(23)]);
var inst_71716 = (state_71794[(24)]);
var inst_71712 = (state_71794[(25)]);
var inst_71731 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_71733 = (function (){var all_files = inst_71708;
var res_SINGLEQUOTE_ = inst_71711;
var res = inst_71712;
var files_not_loaded = inst_71714;
var dependencies_that_loaded = inst_71716;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_71714,inst_71708,inst_71711,inst_71716,inst_71712,inst_71731,state_val_71795,c__49719__auto__,map__71640,map__71640__$1,opts,before_jsload,on_jsload,reload_dependents,map__71641,map__71641__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__71732){
var map__71863 = p__71732;
var map__71863__$1 = ((((!((map__71863 == null)))?((((map__71863.cljs$lang$protocol_mask$partition0$ & (64))) || (map__71863.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__71863):map__71863);
var namespace = cljs.core.get.call(null,map__71863__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__71863__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_71714,inst_71708,inst_71711,inst_71716,inst_71712,inst_71731,state_val_71795,c__49719__auto__,map__71640,map__71640__$1,opts,before_jsload,on_jsload,reload_dependents,map__71641,map__71641__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_71734 = cljs.core.map.call(null,inst_71733,inst_71712);
var inst_71735 = cljs.core.pr_str.call(null,inst_71734);
var inst_71736 = figwheel.client.utils.log.call(null,inst_71735);
var inst_71737 = (function (){var all_files = inst_71708;
var res_SINGLEQUOTE_ = inst_71711;
var res = inst_71712;
var files_not_loaded = inst_71714;
var dependencies_that_loaded = inst_71716;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_71714,inst_71708,inst_71711,inst_71716,inst_71712,inst_71731,inst_71733,inst_71734,inst_71735,inst_71736,state_val_71795,c__49719__auto__,map__71640,map__71640__$1,opts,before_jsload,on_jsload,reload_dependents,map__71641,map__71641__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_71714,inst_71708,inst_71711,inst_71716,inst_71712,inst_71731,inst_71733,inst_71734,inst_71735,inst_71736,state_val_71795,c__49719__auto__,map__71640,map__71640__$1,opts,before_jsload,on_jsload,reload_dependents,map__71641,map__71641__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_71738 = setTimeout(inst_71737,(10));
var state_71794__$1 = (function (){var statearr_71865 = state_71794;
(statearr_71865[(33)] = inst_71736);

(statearr_71865[(34)] = inst_71731);

return statearr_71865;
})();
var statearr_71866_71932 = state_71794__$1;
(statearr_71866_71932[(2)] = inst_71738);

(statearr_71866_71932[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71795 === (16))){
var state_71794__$1 = state_71794;
var statearr_71867_71933 = state_71794__$1;
(statearr_71867_71933[(2)] = reload_dependents);

(statearr_71867_71933[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71795 === (38))){
var inst_71748 = (state_71794[(16)]);
var inst_71765 = cljs.core.apply.call(null,cljs.core.hash_map,inst_71748);
var state_71794__$1 = state_71794;
var statearr_71868_71934 = state_71794__$1;
(statearr_71868_71934[(2)] = inst_71765);

(statearr_71868_71934[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71795 === (30))){
var state_71794__$1 = state_71794;
var statearr_71869_71935 = state_71794__$1;
(statearr_71869_71935[(2)] = null);

(statearr_71869_71935[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71795 === (10))){
var inst_71668 = (state_71794[(22)]);
var inst_71670 = cljs.core.chunked_seq_QMARK_.call(null,inst_71668);
var state_71794__$1 = state_71794;
if(inst_71670){
var statearr_71870_71936 = state_71794__$1;
(statearr_71870_71936[(1)] = (13));

} else {
var statearr_71871_71937 = state_71794__$1;
(statearr_71871_71937[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71795 === (18))){
var inst_71702 = (state_71794[(2)]);
var state_71794__$1 = state_71794;
if(cljs.core.truth_(inst_71702)){
var statearr_71872_71938 = state_71794__$1;
(statearr_71872_71938[(1)] = (19));

} else {
var statearr_71873_71939 = state_71794__$1;
(statearr_71873_71939[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71795 === (42))){
var state_71794__$1 = state_71794;
var statearr_71874_71940 = state_71794__$1;
(statearr_71874_71940[(2)] = null);

(statearr_71874_71940[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71795 === (37))){
var inst_71760 = (state_71794[(2)]);
var state_71794__$1 = state_71794;
var statearr_71875_71941 = state_71794__$1;
(statearr_71875_71941[(2)] = inst_71760);

(statearr_71875_71941[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71795 === (8))){
var inst_71668 = (state_71794[(22)]);
var inst_71655 = (state_71794[(9)]);
var inst_71668__$1 = cljs.core.seq.call(null,inst_71655);
var state_71794__$1 = (function (){var statearr_71876 = state_71794;
(statearr_71876[(22)] = inst_71668__$1);

return statearr_71876;
})();
if(inst_71668__$1){
var statearr_71877_71942 = state_71794__$1;
(statearr_71877_71942[(1)] = (10));

} else {
var statearr_71878_71943 = state_71794__$1;
(statearr_71878_71943[(1)] = (11));

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
});})(c__49719__auto__,map__71640,map__71640__$1,opts,before_jsload,on_jsload,reload_dependents,map__71641,map__71641__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__49607__auto__,c__49719__auto__,map__71640,map__71640__$1,opts,before_jsload,on_jsload,reload_dependents,map__71641,map__71641__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__49608__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__49608__auto____0 = (function (){
var statearr_71882 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_71882[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__49608__auto__);

(statearr_71882[(1)] = (1));

return statearr_71882;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__49608__auto____1 = (function (state_71794){
while(true){
var ret_value__49609__auto__ = (function (){try{while(true){
var result__49610__auto__ = switch__49607__auto__.call(null,state_71794);
if(cljs.core.keyword_identical_QMARK_.call(null,result__49610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49610__auto__;
}
break;
}
}catch (e71883){if((e71883 instanceof Object)){
var ex__49611__auto__ = e71883;
var statearr_71884_71944 = state_71794;
(statearr_71884_71944[(5)] = ex__49611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_71794);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e71883;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__49609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__71945 = state_71794;
state_71794 = G__71945;
continue;
} else {
return ret_value__49609__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__49608__auto__ = function(state_71794){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__49608__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__49608__auto____1.call(this,state_71794);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__49608__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__49608__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__49608__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__49608__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__49608__auto__;
})()
;})(switch__49607__auto__,c__49719__auto__,map__71640,map__71640__$1,opts,before_jsload,on_jsload,reload_dependents,map__71641,map__71641__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__49721__auto__ = (function (){var statearr_71885 = f__49720__auto__.call(null);
(statearr_71885[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__49719__auto__);

return statearr_71885;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__49721__auto__);
});})(c__49719__auto__,map__71640,map__71640__$1,opts,before_jsload,on_jsload,reload_dependents,map__71641,map__71641__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__49719__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__71948,link){
var map__71951 = p__71948;
var map__71951__$1 = ((((!((map__71951 == null)))?((((map__71951.cljs$lang$protocol_mask$partition0$ & (64))) || (map__71951.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__71951):map__71951);
var file = cljs.core.get.call(null,map__71951__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__71951,map__71951__$1,file){
return (function (p1__71946_SHARP_,p2__71947_SHARP_){
if(cljs.core._EQ_.call(null,p1__71946_SHARP_,p2__71947_SHARP_)){
return p1__71946_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__71951,map__71951__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__71957){
var map__71958 = p__71957;
var map__71958__$1 = ((((!((map__71958 == null)))?((((map__71958.cljs$lang$protocol_mask$partition0$ & (64))) || (map__71958.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__71958):map__71958);
var match_length = cljs.core.get.call(null,map__71958__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__71958__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__71953_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__71953_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args71960 = [];
var len__48622__auto___71963 = arguments.length;
var i__48623__auto___71964 = (0);
while(true){
if((i__48623__auto___71964 < len__48622__auto___71963)){
args71960.push((arguments[i__48623__auto___71964]));

var G__71965 = (i__48623__auto___71964 + (1));
i__48623__auto___71964 = G__71965;
continue;
} else {
}
break;
}

var G__71962 = args71960.length;
switch (G__71962) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args71960.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__71967_SHARP_,p2__71968_SHARP_){
return cljs.core.assoc.call(null,p1__71967_SHARP_,cljs.core.get.call(null,p2__71968_SHARP_,key),p2__71968_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__71969){
var map__71972 = p__71969;
var map__71972__$1 = ((((!((map__71972 == null)))?((((map__71972.cljs$lang$protocol_mask$partition0$ & (64))) || (map__71972.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__71972):map__71972);
var f_data = map__71972__$1;
var file = cljs.core.get.call(null,map__71972__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__71974,p__71975){
var map__71984 = p__71974;
var map__71984__$1 = ((((!((map__71984 == null)))?((((map__71984.cljs$lang$protocol_mask$partition0$ & (64))) || (map__71984.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__71984):map__71984);
var opts = map__71984__$1;
var on_cssload = cljs.core.get.call(null,map__71984__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__71985 = p__71975;
var map__71985__$1 = ((((!((map__71985 == null)))?((((map__71985.cljs$lang$protocol_mask$partition0$ & (64))) || (map__71985.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__71985):map__71985);
var files_msg = map__71985__$1;
var files = cljs.core.get.call(null,map__71985__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__71988_71992 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
var chunk__71989_71993 = null;
var count__71990_71994 = (0);
var i__71991_71995 = (0);
while(true){
if((i__71991_71995 < count__71990_71994)){
var f_71996 = cljs.core._nth.call(null,chunk__71989_71993,i__71991_71995);
figwheel.client.file_reloading.reload_css_file.call(null,f_71996);

var G__71997 = seq__71988_71992;
var G__71998 = chunk__71989_71993;
var G__71999 = count__71990_71994;
var G__72000 = (i__71991_71995 + (1));
seq__71988_71992 = G__71997;
chunk__71989_71993 = G__71998;
count__71990_71994 = G__71999;
i__71991_71995 = G__72000;
continue;
} else {
var temp__4657__auto___72001 = cljs.core.seq.call(null,seq__71988_71992);
if(temp__4657__auto___72001){
var seq__71988_72002__$1 = temp__4657__auto___72001;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__71988_72002__$1)){
var c__48358__auto___72003 = cljs.core.chunk_first.call(null,seq__71988_72002__$1);
var G__72004 = cljs.core.chunk_rest.call(null,seq__71988_72002__$1);
var G__72005 = c__48358__auto___72003;
var G__72006 = cljs.core.count.call(null,c__48358__auto___72003);
var G__72007 = (0);
seq__71988_71992 = G__72004;
chunk__71989_71993 = G__72005;
count__71990_71994 = G__72006;
i__71991_71995 = G__72007;
continue;
} else {
var f_72008 = cljs.core.first.call(null,seq__71988_72002__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_72008);

var G__72009 = cljs.core.next.call(null,seq__71988_72002__$1);
var G__72010 = null;
var G__72011 = (0);
var G__72012 = (0);
seq__71988_71992 = G__72009;
chunk__71989_71993 = G__72010;
count__71990_71994 = G__72011;
i__71991_71995 = G__72012;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__71984,map__71984__$1,opts,on_cssload,map__71985,map__71985__$1,files_msg,files){
return (function (){
figwheel.client.file_reloading.on_cssload_custom_event.call(null,files);

return on_cssload.call(null,files);
});})(map__71984,map__71984__$1,opts,on_cssload,map__71985,map__71985__$1,files_msg,files))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1476044190147