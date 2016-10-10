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
var or__24790__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__24790__auto__){
return or__24790__auto__;
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
var or__24790__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__24790__auto__)){
return or__24790__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__34607_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__34607_SHARP_));
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
var seq__34612 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__34613 = null;
var count__34614 = (0);
var i__34615 = (0);
while(true){
if((i__34615 < count__34614)){
var n = cljs.core._nth.call(null,chunk__34613,i__34615);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__34616 = seq__34612;
var G__34617 = chunk__34613;
var G__34618 = count__34614;
var G__34619 = (i__34615 + (1));
seq__34612 = G__34616;
chunk__34613 = G__34617;
count__34614 = G__34618;
i__34615 = G__34619;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__34612);
if(temp__4657__auto__){
var seq__34612__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34612__$1)){
var c__25601__auto__ = cljs.core.chunk_first.call(null,seq__34612__$1);
var G__34620 = cljs.core.chunk_rest.call(null,seq__34612__$1);
var G__34621 = c__25601__auto__;
var G__34622 = cljs.core.count.call(null,c__25601__auto__);
var G__34623 = (0);
seq__34612 = G__34620;
chunk__34613 = G__34621;
count__34614 = G__34622;
i__34615 = G__34623;
continue;
} else {
var n = cljs.core.first.call(null,seq__34612__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__34624 = cljs.core.next.call(null,seq__34612__$1);
var G__34625 = null;
var G__34626 = (0);
var G__34627 = (0);
seq__34612 = G__34624;
chunk__34613 = G__34625;
count__34614 = G__34626;
i__34615 = G__34627;
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

var seq__34678_34689 = cljs.core.seq.call(null,deps);
var chunk__34679_34690 = null;
var count__34680_34691 = (0);
var i__34681_34692 = (0);
while(true){
if((i__34681_34692 < count__34680_34691)){
var dep_34693 = cljs.core._nth.call(null,chunk__34679_34690,i__34681_34692);
topo_sort_helper_STAR_.call(null,dep_34693,(depth + (1)),state);

var G__34694 = seq__34678_34689;
var G__34695 = chunk__34679_34690;
var G__34696 = count__34680_34691;
var G__34697 = (i__34681_34692 + (1));
seq__34678_34689 = G__34694;
chunk__34679_34690 = G__34695;
count__34680_34691 = G__34696;
i__34681_34692 = G__34697;
continue;
} else {
var temp__4657__auto___34698 = cljs.core.seq.call(null,seq__34678_34689);
if(temp__4657__auto___34698){
var seq__34678_34699__$1 = temp__4657__auto___34698;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34678_34699__$1)){
var c__25601__auto___34700 = cljs.core.chunk_first.call(null,seq__34678_34699__$1);
var G__34701 = cljs.core.chunk_rest.call(null,seq__34678_34699__$1);
var G__34702 = c__25601__auto___34700;
var G__34703 = cljs.core.count.call(null,c__25601__auto___34700);
var G__34704 = (0);
seq__34678_34689 = G__34701;
chunk__34679_34690 = G__34702;
count__34680_34691 = G__34703;
i__34681_34692 = G__34704;
continue;
} else {
var dep_34705 = cljs.core.first.call(null,seq__34678_34699__$1);
topo_sort_helper_STAR_.call(null,dep_34705,(depth + (1)),state);

var G__34706 = cljs.core.next.call(null,seq__34678_34699__$1);
var G__34707 = null;
var G__34708 = (0);
var G__34709 = (0);
seq__34678_34689 = G__34706;
chunk__34679_34690 = G__34707;
count__34680_34691 = G__34708;
i__34681_34692 = G__34709;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__34682){
var vec__34686 = p__34682;
var seq__34687 = cljs.core.seq.call(null,vec__34686);
var first__34688 = cljs.core.first.call(null,seq__34687);
var seq__34687__$1 = cljs.core.next.call(null,seq__34687);
var x = first__34688;
var xs = seq__34687__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__34686,seq__34687,first__34688,seq__34687__$1,x,xs,get_deps__$1){
return (function (p1__34628_SHARP_){
return clojure.set.difference.call(null,p1__34628_SHARP_,x);
});})(vec__34686,seq__34687,first__34688,seq__34687__$1,x,xs,get_deps__$1))
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
var seq__34722 = cljs.core.seq.call(null,provides);
var chunk__34723 = null;
var count__34724 = (0);
var i__34725 = (0);
while(true){
if((i__34725 < count__34724)){
var prov = cljs.core._nth.call(null,chunk__34723,i__34725);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__34726_34734 = cljs.core.seq.call(null,requires);
var chunk__34727_34735 = null;
var count__34728_34736 = (0);
var i__34729_34737 = (0);
while(true){
if((i__34729_34737 < count__34728_34736)){
var req_34738 = cljs.core._nth.call(null,chunk__34727_34735,i__34729_34737);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34738,prov);

var G__34739 = seq__34726_34734;
var G__34740 = chunk__34727_34735;
var G__34741 = count__34728_34736;
var G__34742 = (i__34729_34737 + (1));
seq__34726_34734 = G__34739;
chunk__34727_34735 = G__34740;
count__34728_34736 = G__34741;
i__34729_34737 = G__34742;
continue;
} else {
var temp__4657__auto___34743 = cljs.core.seq.call(null,seq__34726_34734);
if(temp__4657__auto___34743){
var seq__34726_34744__$1 = temp__4657__auto___34743;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34726_34744__$1)){
var c__25601__auto___34745 = cljs.core.chunk_first.call(null,seq__34726_34744__$1);
var G__34746 = cljs.core.chunk_rest.call(null,seq__34726_34744__$1);
var G__34747 = c__25601__auto___34745;
var G__34748 = cljs.core.count.call(null,c__25601__auto___34745);
var G__34749 = (0);
seq__34726_34734 = G__34746;
chunk__34727_34735 = G__34747;
count__34728_34736 = G__34748;
i__34729_34737 = G__34749;
continue;
} else {
var req_34750 = cljs.core.first.call(null,seq__34726_34744__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34750,prov);

var G__34751 = cljs.core.next.call(null,seq__34726_34744__$1);
var G__34752 = null;
var G__34753 = (0);
var G__34754 = (0);
seq__34726_34734 = G__34751;
chunk__34727_34735 = G__34752;
count__34728_34736 = G__34753;
i__34729_34737 = G__34754;
continue;
}
} else {
}
}
break;
}

var G__34755 = seq__34722;
var G__34756 = chunk__34723;
var G__34757 = count__34724;
var G__34758 = (i__34725 + (1));
seq__34722 = G__34755;
chunk__34723 = G__34756;
count__34724 = G__34757;
i__34725 = G__34758;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__34722);
if(temp__4657__auto__){
var seq__34722__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34722__$1)){
var c__25601__auto__ = cljs.core.chunk_first.call(null,seq__34722__$1);
var G__34759 = cljs.core.chunk_rest.call(null,seq__34722__$1);
var G__34760 = c__25601__auto__;
var G__34761 = cljs.core.count.call(null,c__25601__auto__);
var G__34762 = (0);
seq__34722 = G__34759;
chunk__34723 = G__34760;
count__34724 = G__34761;
i__34725 = G__34762;
continue;
} else {
var prov = cljs.core.first.call(null,seq__34722__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__34730_34763 = cljs.core.seq.call(null,requires);
var chunk__34731_34764 = null;
var count__34732_34765 = (0);
var i__34733_34766 = (0);
while(true){
if((i__34733_34766 < count__34732_34765)){
var req_34767 = cljs.core._nth.call(null,chunk__34731_34764,i__34733_34766);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34767,prov);

var G__34768 = seq__34730_34763;
var G__34769 = chunk__34731_34764;
var G__34770 = count__34732_34765;
var G__34771 = (i__34733_34766 + (1));
seq__34730_34763 = G__34768;
chunk__34731_34764 = G__34769;
count__34732_34765 = G__34770;
i__34733_34766 = G__34771;
continue;
} else {
var temp__4657__auto___34772__$1 = cljs.core.seq.call(null,seq__34730_34763);
if(temp__4657__auto___34772__$1){
var seq__34730_34773__$1 = temp__4657__auto___34772__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34730_34773__$1)){
var c__25601__auto___34774 = cljs.core.chunk_first.call(null,seq__34730_34773__$1);
var G__34775 = cljs.core.chunk_rest.call(null,seq__34730_34773__$1);
var G__34776 = c__25601__auto___34774;
var G__34777 = cljs.core.count.call(null,c__25601__auto___34774);
var G__34778 = (0);
seq__34730_34763 = G__34775;
chunk__34731_34764 = G__34776;
count__34732_34765 = G__34777;
i__34733_34766 = G__34778;
continue;
} else {
var req_34779 = cljs.core.first.call(null,seq__34730_34773__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34779,prov);

var G__34780 = cljs.core.next.call(null,seq__34730_34773__$1);
var G__34781 = null;
var G__34782 = (0);
var G__34783 = (0);
seq__34730_34763 = G__34780;
chunk__34731_34764 = G__34781;
count__34732_34765 = G__34782;
i__34733_34766 = G__34783;
continue;
}
} else {
}
}
break;
}

var G__34784 = cljs.core.next.call(null,seq__34722__$1);
var G__34785 = null;
var G__34786 = (0);
var G__34787 = (0);
seq__34722 = G__34784;
chunk__34723 = G__34785;
count__34724 = G__34786;
i__34725 = G__34787;
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
var seq__34792_34796 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__34793_34797 = null;
var count__34794_34798 = (0);
var i__34795_34799 = (0);
while(true){
if((i__34795_34799 < count__34794_34798)){
var ns_34800 = cljs.core._nth.call(null,chunk__34793_34797,i__34795_34799);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_34800);

var G__34801 = seq__34792_34796;
var G__34802 = chunk__34793_34797;
var G__34803 = count__34794_34798;
var G__34804 = (i__34795_34799 + (1));
seq__34792_34796 = G__34801;
chunk__34793_34797 = G__34802;
count__34794_34798 = G__34803;
i__34795_34799 = G__34804;
continue;
} else {
var temp__4657__auto___34805 = cljs.core.seq.call(null,seq__34792_34796);
if(temp__4657__auto___34805){
var seq__34792_34806__$1 = temp__4657__auto___34805;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34792_34806__$1)){
var c__25601__auto___34807 = cljs.core.chunk_first.call(null,seq__34792_34806__$1);
var G__34808 = cljs.core.chunk_rest.call(null,seq__34792_34806__$1);
var G__34809 = c__25601__auto___34807;
var G__34810 = cljs.core.count.call(null,c__25601__auto___34807);
var G__34811 = (0);
seq__34792_34796 = G__34808;
chunk__34793_34797 = G__34809;
count__34794_34798 = G__34810;
i__34795_34799 = G__34811;
continue;
} else {
var ns_34812 = cljs.core.first.call(null,seq__34792_34806__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_34812);

var G__34813 = cljs.core.next.call(null,seq__34792_34806__$1);
var G__34814 = null;
var G__34815 = (0);
var G__34816 = (0);
seq__34792_34796 = G__34813;
chunk__34793_34797 = G__34814;
count__34794_34798 = G__34815;
i__34795_34799 = G__34816;
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
goog.require_figwheel_backup_ = (function (){var or__24790__auto__ = goog.require__;
if(cljs.core.truth_(or__24790__auto__)){
return or__24790__auto__;
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
var G__34817__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__34817 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34818__i = 0, G__34818__a = new Array(arguments.length -  0);
while (G__34818__i < G__34818__a.length) {G__34818__a[G__34818__i] = arguments[G__34818__i + 0]; ++G__34818__i;}
  args = new cljs.core.IndexedSeq(G__34818__a,0);
} 
return G__34817__delegate.call(this,args);};
G__34817.cljs$lang$maxFixedArity = 0;
G__34817.cljs$lang$applyTo = (function (arglist__34819){
var args = cljs.core.seq(arglist__34819);
return G__34817__delegate(args);
});
G__34817.cljs$core$IFn$_invoke$arity$variadic = G__34817__delegate;
return G__34817;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__34821 = cljs.core._EQ_;
var expr__34822 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__34821.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__34822))){
var path_parts = ((function (pred__34821,expr__34822){
return (function (p1__34820_SHARP_){
return clojure.string.split.call(null,p1__34820_SHARP_,/[\/\\]/);
});})(pred__34821,expr__34822))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__34821,expr__34822){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e34824){if((e34824 instanceof Error)){
var e = e34824;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e34824;

}
}})());
});
;})(path_parts,sep,root,pred__34821,expr__34822))
} else {
if(cljs.core.truth_(pred__34821.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__34822))){
return ((function (pred__34821,expr__34822){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred,pred__34821,expr__34822){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__34821,expr__34822))
);

return deferred.addErrback(((function (deferred,pred__34821,expr__34822){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__34821,expr__34822))
);
});
;})(pred__34821,expr__34822))
} else {
return ((function (pred__34821,expr__34822){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__34821,expr__34822))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__34825,callback){
var map__34828 = p__34825;
var map__34828__$1 = ((((!((map__34828 == null)))?((((map__34828.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34828.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34828):map__34828);
var file_msg = map__34828__$1;
var request_url = cljs.core.get.call(null,map__34828__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__34828,map__34828__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__34828,map__34828__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__26963__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26963__auto__){
return (function (){
var f__26964__auto__ = (function (){var switch__26851__auto__ = ((function (c__26963__auto__){
return (function (state_34852){
var state_val_34853 = (state_34852[(1)]);
if((state_val_34853 === (7))){
var inst_34848 = (state_34852[(2)]);
var state_34852__$1 = state_34852;
var statearr_34854_34874 = state_34852__$1;
(statearr_34854_34874[(2)] = inst_34848);

(statearr_34854_34874[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34853 === (1))){
var state_34852__$1 = state_34852;
var statearr_34855_34875 = state_34852__$1;
(statearr_34855_34875[(2)] = null);

(statearr_34855_34875[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34853 === (4))){
var inst_34832 = (state_34852[(7)]);
var inst_34832__$1 = (state_34852[(2)]);
var state_34852__$1 = (function (){var statearr_34856 = state_34852;
(statearr_34856[(7)] = inst_34832__$1);

return statearr_34856;
})();
if(cljs.core.truth_(inst_34832__$1)){
var statearr_34857_34876 = state_34852__$1;
(statearr_34857_34876[(1)] = (5));

} else {
var statearr_34858_34877 = state_34852__$1;
(statearr_34858_34877[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34853 === (6))){
var state_34852__$1 = state_34852;
var statearr_34859_34878 = state_34852__$1;
(statearr_34859_34878[(2)] = null);

(statearr_34859_34878[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34853 === (3))){
var inst_34850 = (state_34852[(2)]);
var state_34852__$1 = state_34852;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34852__$1,inst_34850);
} else {
if((state_val_34853 === (2))){
var state_34852__$1 = state_34852;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34852__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_34853 === (11))){
var inst_34844 = (state_34852[(2)]);
var state_34852__$1 = (function (){var statearr_34860 = state_34852;
(statearr_34860[(8)] = inst_34844);

return statearr_34860;
})();
var statearr_34861_34879 = state_34852__$1;
(statearr_34861_34879[(2)] = null);

(statearr_34861_34879[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34853 === (9))){
var inst_34836 = (state_34852[(9)]);
var inst_34838 = (state_34852[(10)]);
var inst_34840 = inst_34838.call(null,inst_34836);
var state_34852__$1 = state_34852;
var statearr_34862_34880 = state_34852__$1;
(statearr_34862_34880[(2)] = inst_34840);

(statearr_34862_34880[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34853 === (5))){
var inst_34832 = (state_34852[(7)]);
var inst_34834 = figwheel.client.file_reloading.blocking_load.call(null,inst_34832);
var state_34852__$1 = state_34852;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34852__$1,(8),inst_34834);
} else {
if((state_val_34853 === (10))){
var inst_34836 = (state_34852[(9)]);
var inst_34842 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_34836);
var state_34852__$1 = state_34852;
var statearr_34863_34881 = state_34852__$1;
(statearr_34863_34881[(2)] = inst_34842);

(statearr_34863_34881[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34853 === (8))){
var inst_34838 = (state_34852[(10)]);
var inst_34832 = (state_34852[(7)]);
var inst_34836 = (state_34852[(2)]);
var inst_34837 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_34838__$1 = cljs.core.get.call(null,inst_34837,inst_34832);
var state_34852__$1 = (function (){var statearr_34864 = state_34852;
(statearr_34864[(9)] = inst_34836);

(statearr_34864[(10)] = inst_34838__$1);

return statearr_34864;
})();
if(cljs.core.truth_(inst_34838__$1)){
var statearr_34865_34882 = state_34852__$1;
(statearr_34865_34882[(1)] = (9));

} else {
var statearr_34866_34883 = state_34852__$1;
(statearr_34866_34883[(1)] = (10));

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
});})(c__26963__auto__))
;
return ((function (switch__26851__auto__,c__26963__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__26852__auto__ = null;
var figwheel$client$file_reloading$state_machine__26852__auto____0 = (function (){
var statearr_34870 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34870[(0)] = figwheel$client$file_reloading$state_machine__26852__auto__);

(statearr_34870[(1)] = (1));

return statearr_34870;
});
var figwheel$client$file_reloading$state_machine__26852__auto____1 = (function (state_34852){
while(true){
var ret_value__26853__auto__ = (function (){try{while(true){
var result__26854__auto__ = switch__26851__auto__.call(null,state_34852);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26854__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26854__auto__;
}
break;
}
}catch (e34871){if((e34871 instanceof Object)){
var ex__26855__auto__ = e34871;
var statearr_34872_34884 = state_34852;
(statearr_34872_34884[(5)] = ex__26855__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34852);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34871;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34885 = state_34852;
state_34852 = G__34885;
continue;
} else {
return ret_value__26853__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__26852__auto__ = function(state_34852){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__26852__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__26852__auto____1.call(this,state_34852);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__26852__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__26852__auto____0;
figwheel$client$file_reloading$state_machine__26852__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__26852__auto____1;
return figwheel$client$file_reloading$state_machine__26852__auto__;
})()
;})(switch__26851__auto__,c__26963__auto__))
})();
var state__26965__auto__ = (function (){var statearr_34873 = f__26964__auto__.call(null);
(statearr_34873[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26963__auto__);

return statearr_34873;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26965__auto__);
});})(c__26963__auto__))
);

return c__26963__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__34886,callback){
var map__34889 = p__34886;
var map__34889__$1 = ((((!((map__34889 == null)))?((((map__34889.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34889.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34889):map__34889);
var file_msg = map__34889__$1;
var namespace = cljs.core.get.call(null,map__34889__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__34889,map__34889__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__34889,map__34889__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__34891){
var map__34894 = p__34891;
var map__34894__$1 = ((((!((map__34894 == null)))?((((map__34894.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34894.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34894):map__34894);
var file_msg = map__34894__$1;
var namespace = cljs.core.get.call(null,map__34894__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__24778__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__24778__auto__){
var or__24790__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__24790__auto__)){
return or__24790__auto__;
} else {
var or__24790__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__24790__auto____$1)){
return or__24790__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__24778__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__34896,callback){
var map__34899 = p__34896;
var map__34899__$1 = ((((!((map__34899 == null)))?((((map__34899.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34899.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34899):map__34899);
var file_msg = map__34899__$1;
var request_url = cljs.core.get.call(null,map__34899__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__34899__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__26963__auto___35003 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26963__auto___35003,out){
return (function (){
var f__26964__auto__ = (function (){var switch__26851__auto__ = ((function (c__26963__auto___35003,out){
return (function (state_34985){
var state_val_34986 = (state_34985[(1)]);
if((state_val_34986 === (1))){
var inst_34959 = cljs.core.seq.call(null,files);
var inst_34960 = cljs.core.first.call(null,inst_34959);
var inst_34961 = cljs.core.next.call(null,inst_34959);
var inst_34962 = files;
var state_34985__$1 = (function (){var statearr_34987 = state_34985;
(statearr_34987[(7)] = inst_34962);

(statearr_34987[(8)] = inst_34960);

(statearr_34987[(9)] = inst_34961);

return statearr_34987;
})();
var statearr_34988_35004 = state_34985__$1;
(statearr_34988_35004[(2)] = null);

(statearr_34988_35004[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34986 === (2))){
var inst_34962 = (state_34985[(7)]);
var inst_34968 = (state_34985[(10)]);
var inst_34967 = cljs.core.seq.call(null,inst_34962);
var inst_34968__$1 = cljs.core.first.call(null,inst_34967);
var inst_34969 = cljs.core.next.call(null,inst_34967);
var inst_34970 = (inst_34968__$1 == null);
var inst_34971 = cljs.core.not.call(null,inst_34970);
var state_34985__$1 = (function (){var statearr_34989 = state_34985;
(statearr_34989[(11)] = inst_34969);

(statearr_34989[(10)] = inst_34968__$1);

return statearr_34989;
})();
if(inst_34971){
var statearr_34990_35005 = state_34985__$1;
(statearr_34990_35005[(1)] = (4));

} else {
var statearr_34991_35006 = state_34985__$1;
(statearr_34991_35006[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34986 === (3))){
var inst_34983 = (state_34985[(2)]);
var state_34985__$1 = state_34985;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34985__$1,inst_34983);
} else {
if((state_val_34986 === (4))){
var inst_34968 = (state_34985[(10)]);
var inst_34973 = figwheel.client.file_reloading.reload_js_file.call(null,inst_34968);
var state_34985__$1 = state_34985;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34985__$1,(7),inst_34973);
} else {
if((state_val_34986 === (5))){
var inst_34979 = cljs.core.async.close_BANG_.call(null,out);
var state_34985__$1 = state_34985;
var statearr_34992_35007 = state_34985__$1;
(statearr_34992_35007[(2)] = inst_34979);

(statearr_34992_35007[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34986 === (6))){
var inst_34981 = (state_34985[(2)]);
var state_34985__$1 = state_34985;
var statearr_34993_35008 = state_34985__$1;
(statearr_34993_35008[(2)] = inst_34981);

(statearr_34993_35008[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34986 === (7))){
var inst_34969 = (state_34985[(11)]);
var inst_34975 = (state_34985[(2)]);
var inst_34976 = cljs.core.async.put_BANG_.call(null,out,inst_34975);
var inst_34962 = inst_34969;
var state_34985__$1 = (function (){var statearr_34994 = state_34985;
(statearr_34994[(7)] = inst_34962);

(statearr_34994[(12)] = inst_34976);

return statearr_34994;
})();
var statearr_34995_35009 = state_34985__$1;
(statearr_34995_35009[(2)] = null);

(statearr_34995_35009[(1)] = (2));


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
});})(c__26963__auto___35003,out))
;
return ((function (switch__26851__auto__,c__26963__auto___35003,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__26852__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__26852__auto____0 = (function (){
var statearr_34999 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34999[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__26852__auto__);

(statearr_34999[(1)] = (1));

return statearr_34999;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__26852__auto____1 = (function (state_34985){
while(true){
var ret_value__26853__auto__ = (function (){try{while(true){
var result__26854__auto__ = switch__26851__auto__.call(null,state_34985);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26854__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26854__auto__;
}
break;
}
}catch (e35000){if((e35000 instanceof Object)){
var ex__26855__auto__ = e35000;
var statearr_35001_35010 = state_34985;
(statearr_35001_35010[(5)] = ex__26855__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34985);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35000;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35011 = state_34985;
state_34985 = G__35011;
continue;
} else {
return ret_value__26853__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__26852__auto__ = function(state_34985){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__26852__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__26852__auto____1.call(this,state_34985);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__26852__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__26852__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__26852__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__26852__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__26852__auto__;
})()
;})(switch__26851__auto__,c__26963__auto___35003,out))
})();
var state__26965__auto__ = (function (){var statearr_35002 = f__26964__auto__.call(null);
(statearr_35002[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26963__auto___35003);

return statearr_35002;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26965__auto__);
});})(c__26963__auto___35003,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__35012,opts){
var map__35016 = p__35012;
var map__35016__$1 = ((((!((map__35016 == null)))?((((map__35016.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35016.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35016):map__35016);
var eval_body__$1 = cljs.core.get.call(null,map__35016__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__35016__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__24778__auto__ = eval_body__$1;
if(cljs.core.truth_(and__24778__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__24778__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e35018){var e = e35018;
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
return (function (p1__35019_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__35019_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__35028){
var vec__35029 = p__35028;
var k = cljs.core.nth.call(null,vec__35029,(0),null);
var v = cljs.core.nth.call(null,vec__35029,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__35032){
var vec__35033 = p__35032;
var k = cljs.core.nth.call(null,vec__35033,(0),null);
var v = cljs.core.nth.call(null,vec__35033,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__35039,p__35040){
var map__35287 = p__35039;
var map__35287__$1 = ((((!((map__35287 == null)))?((((map__35287.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35287.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35287):map__35287);
var opts = map__35287__$1;
var before_jsload = cljs.core.get.call(null,map__35287__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__35287__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__35287__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__35288 = p__35040;
var map__35288__$1 = ((((!((map__35288 == null)))?((((map__35288.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35288.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35288):map__35288);
var msg = map__35288__$1;
var files = cljs.core.get.call(null,map__35288__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__35288__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__35288__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__26963__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26963__auto__,map__35287,map__35287__$1,opts,before_jsload,on_jsload,reload_dependents,map__35288,map__35288__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__26964__auto__ = (function (){var switch__26851__auto__ = ((function (c__26963__auto__,map__35287,map__35287__$1,opts,before_jsload,on_jsload,reload_dependents,map__35288,map__35288__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_35441){
var state_val_35442 = (state_35441[(1)]);
if((state_val_35442 === (7))){
var inst_35303 = (state_35441[(7)]);
var inst_35305 = (state_35441[(8)]);
var inst_35302 = (state_35441[(9)]);
var inst_35304 = (state_35441[(10)]);
var inst_35310 = cljs.core._nth.call(null,inst_35303,inst_35305);
var inst_35311 = figwheel.client.file_reloading.eval_body.call(null,inst_35310,opts);
var inst_35312 = (inst_35305 + (1));
var tmp35443 = inst_35303;
var tmp35444 = inst_35302;
var tmp35445 = inst_35304;
var inst_35302__$1 = tmp35444;
var inst_35303__$1 = tmp35443;
var inst_35304__$1 = tmp35445;
var inst_35305__$1 = inst_35312;
var state_35441__$1 = (function (){var statearr_35446 = state_35441;
(statearr_35446[(11)] = inst_35311);

(statearr_35446[(7)] = inst_35303__$1);

(statearr_35446[(8)] = inst_35305__$1);

(statearr_35446[(9)] = inst_35302__$1);

(statearr_35446[(10)] = inst_35304__$1);

return statearr_35446;
})();
var statearr_35447_35533 = state_35441__$1;
(statearr_35447_35533[(2)] = null);

(statearr_35447_35533[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35442 === (20))){
var inst_35345 = (state_35441[(12)]);
var inst_35353 = figwheel.client.file_reloading.sort_files.call(null,inst_35345);
var state_35441__$1 = state_35441;
var statearr_35448_35534 = state_35441__$1;
(statearr_35448_35534[(2)] = inst_35353);

(statearr_35448_35534[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35442 === (27))){
var state_35441__$1 = state_35441;
var statearr_35449_35535 = state_35441__$1;
(statearr_35449_35535[(2)] = null);

(statearr_35449_35535[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35442 === (1))){
var inst_35294 = (state_35441[(13)]);
var inst_35291 = before_jsload.call(null,files);
var inst_35292 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_35293 = (function (){return ((function (inst_35294,inst_35291,inst_35292,state_val_35442,c__26963__auto__,map__35287,map__35287__$1,opts,before_jsload,on_jsload,reload_dependents,map__35288,map__35288__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__35036_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__35036_SHARP_);
});
;})(inst_35294,inst_35291,inst_35292,state_val_35442,c__26963__auto__,map__35287,map__35287__$1,opts,before_jsload,on_jsload,reload_dependents,map__35288,map__35288__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35294__$1 = cljs.core.filter.call(null,inst_35293,files);
var inst_35295 = cljs.core.not_empty.call(null,inst_35294__$1);
var state_35441__$1 = (function (){var statearr_35450 = state_35441;
(statearr_35450[(14)] = inst_35292);

(statearr_35450[(15)] = inst_35291);

(statearr_35450[(13)] = inst_35294__$1);

return statearr_35450;
})();
if(cljs.core.truth_(inst_35295)){
var statearr_35451_35536 = state_35441__$1;
(statearr_35451_35536[(1)] = (2));

} else {
var statearr_35452_35537 = state_35441__$1;
(statearr_35452_35537[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35442 === (24))){
var state_35441__$1 = state_35441;
var statearr_35453_35538 = state_35441__$1;
(statearr_35453_35538[(2)] = null);

(statearr_35453_35538[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35442 === (39))){
var inst_35395 = (state_35441[(16)]);
var state_35441__$1 = state_35441;
var statearr_35454_35539 = state_35441__$1;
(statearr_35454_35539[(2)] = inst_35395);

(statearr_35454_35539[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35442 === (46))){
var inst_35436 = (state_35441[(2)]);
var state_35441__$1 = state_35441;
var statearr_35455_35540 = state_35441__$1;
(statearr_35455_35540[(2)] = inst_35436);

(statearr_35455_35540[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35442 === (4))){
var inst_35339 = (state_35441[(2)]);
var inst_35340 = cljs.core.List.EMPTY;
var inst_35341 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_35340);
var inst_35342 = (function (){return ((function (inst_35339,inst_35340,inst_35341,state_val_35442,c__26963__auto__,map__35287,map__35287__$1,opts,before_jsload,on_jsload,reload_dependents,map__35288,map__35288__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__35037_SHARP_){
var and__24778__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__35037_SHARP_);
if(cljs.core.truth_(and__24778__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__35037_SHARP_));
} else {
return and__24778__auto__;
}
});
;})(inst_35339,inst_35340,inst_35341,state_val_35442,c__26963__auto__,map__35287,map__35287__$1,opts,before_jsload,on_jsload,reload_dependents,map__35288,map__35288__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35343 = cljs.core.filter.call(null,inst_35342,files);
var inst_35344 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_35345 = cljs.core.concat.call(null,inst_35343,inst_35344);
var state_35441__$1 = (function (){var statearr_35456 = state_35441;
(statearr_35456[(17)] = inst_35341);

(statearr_35456[(12)] = inst_35345);

(statearr_35456[(18)] = inst_35339);

return statearr_35456;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_35457_35541 = state_35441__$1;
(statearr_35457_35541[(1)] = (16));

} else {
var statearr_35458_35542 = state_35441__$1;
(statearr_35458_35542[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35442 === (15))){
var inst_35329 = (state_35441[(2)]);
var state_35441__$1 = state_35441;
var statearr_35459_35543 = state_35441__$1;
(statearr_35459_35543[(2)] = inst_35329);

(statearr_35459_35543[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35442 === (21))){
var inst_35355 = (state_35441[(19)]);
var inst_35355__$1 = (state_35441[(2)]);
var inst_35356 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_35355__$1);
var state_35441__$1 = (function (){var statearr_35460 = state_35441;
(statearr_35460[(19)] = inst_35355__$1);

return statearr_35460;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35441__$1,(22),inst_35356);
} else {
if((state_val_35442 === (31))){
var inst_35439 = (state_35441[(2)]);
var state_35441__$1 = state_35441;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35441__$1,inst_35439);
} else {
if((state_val_35442 === (32))){
var inst_35395 = (state_35441[(16)]);
var inst_35400 = inst_35395.cljs$lang$protocol_mask$partition0$;
var inst_35401 = (inst_35400 & (64));
var inst_35402 = inst_35395.cljs$core$ISeq$;
var inst_35403 = (inst_35401) || (inst_35402);
var state_35441__$1 = state_35441;
if(cljs.core.truth_(inst_35403)){
var statearr_35461_35544 = state_35441__$1;
(statearr_35461_35544[(1)] = (35));

} else {
var statearr_35462_35545 = state_35441__$1;
(statearr_35462_35545[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35442 === (40))){
var inst_35416 = (state_35441[(20)]);
var inst_35415 = (state_35441[(2)]);
var inst_35416__$1 = cljs.core.get.call(null,inst_35415,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_35417 = cljs.core.get.call(null,inst_35415,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_35418 = cljs.core.not_empty.call(null,inst_35416__$1);
var state_35441__$1 = (function (){var statearr_35463 = state_35441;
(statearr_35463[(20)] = inst_35416__$1);

(statearr_35463[(21)] = inst_35417);

return statearr_35463;
})();
if(cljs.core.truth_(inst_35418)){
var statearr_35464_35546 = state_35441__$1;
(statearr_35464_35546[(1)] = (41));

} else {
var statearr_35465_35547 = state_35441__$1;
(statearr_35465_35547[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35442 === (33))){
var state_35441__$1 = state_35441;
var statearr_35466_35548 = state_35441__$1;
(statearr_35466_35548[(2)] = false);

(statearr_35466_35548[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35442 === (13))){
var inst_35315 = (state_35441[(22)]);
var inst_35319 = cljs.core.chunk_first.call(null,inst_35315);
var inst_35320 = cljs.core.chunk_rest.call(null,inst_35315);
var inst_35321 = cljs.core.count.call(null,inst_35319);
var inst_35302 = inst_35320;
var inst_35303 = inst_35319;
var inst_35304 = inst_35321;
var inst_35305 = (0);
var state_35441__$1 = (function (){var statearr_35467 = state_35441;
(statearr_35467[(7)] = inst_35303);

(statearr_35467[(8)] = inst_35305);

(statearr_35467[(9)] = inst_35302);

(statearr_35467[(10)] = inst_35304);

return statearr_35467;
})();
var statearr_35468_35549 = state_35441__$1;
(statearr_35468_35549[(2)] = null);

(statearr_35468_35549[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35442 === (22))){
var inst_35355 = (state_35441[(19)]);
var inst_35359 = (state_35441[(23)]);
var inst_35358 = (state_35441[(24)]);
var inst_35363 = (state_35441[(25)]);
var inst_35358__$1 = (state_35441[(2)]);
var inst_35359__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_35358__$1);
var inst_35360 = (function (){var all_files = inst_35355;
var res_SINGLEQUOTE_ = inst_35358__$1;
var res = inst_35359__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_35355,inst_35359,inst_35358,inst_35363,inst_35358__$1,inst_35359__$1,state_val_35442,c__26963__auto__,map__35287,map__35287__$1,opts,before_jsload,on_jsload,reload_dependents,map__35288,map__35288__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__35038_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__35038_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_35355,inst_35359,inst_35358,inst_35363,inst_35358__$1,inst_35359__$1,state_val_35442,c__26963__auto__,map__35287,map__35287__$1,opts,before_jsload,on_jsload,reload_dependents,map__35288,map__35288__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35361 = cljs.core.filter.call(null,inst_35360,inst_35358__$1);
var inst_35362 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_35363__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_35362);
var inst_35364 = cljs.core.not_empty.call(null,inst_35363__$1);
var state_35441__$1 = (function (){var statearr_35469 = state_35441;
(statearr_35469[(23)] = inst_35359__$1);

(statearr_35469[(26)] = inst_35361);

(statearr_35469[(24)] = inst_35358__$1);

(statearr_35469[(25)] = inst_35363__$1);

return statearr_35469;
})();
if(cljs.core.truth_(inst_35364)){
var statearr_35470_35550 = state_35441__$1;
(statearr_35470_35550[(1)] = (23));

} else {
var statearr_35471_35551 = state_35441__$1;
(statearr_35471_35551[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35442 === (36))){
var state_35441__$1 = state_35441;
var statearr_35472_35552 = state_35441__$1;
(statearr_35472_35552[(2)] = false);

(statearr_35472_35552[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35442 === (41))){
var inst_35416 = (state_35441[(20)]);
var inst_35420 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_35421 = cljs.core.map.call(null,inst_35420,inst_35416);
var inst_35422 = cljs.core.pr_str.call(null,inst_35421);
var inst_35423 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_35422)].join('');
var inst_35424 = figwheel.client.utils.log.call(null,inst_35423);
var state_35441__$1 = state_35441;
var statearr_35473_35553 = state_35441__$1;
(statearr_35473_35553[(2)] = inst_35424);

(statearr_35473_35553[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35442 === (43))){
var inst_35417 = (state_35441[(21)]);
var inst_35427 = (state_35441[(2)]);
var inst_35428 = cljs.core.not_empty.call(null,inst_35417);
var state_35441__$1 = (function (){var statearr_35474 = state_35441;
(statearr_35474[(27)] = inst_35427);

return statearr_35474;
})();
if(cljs.core.truth_(inst_35428)){
var statearr_35475_35554 = state_35441__$1;
(statearr_35475_35554[(1)] = (44));

} else {
var statearr_35476_35555 = state_35441__$1;
(statearr_35476_35555[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35442 === (29))){
var inst_35355 = (state_35441[(19)]);
var inst_35395 = (state_35441[(16)]);
var inst_35359 = (state_35441[(23)]);
var inst_35361 = (state_35441[(26)]);
var inst_35358 = (state_35441[(24)]);
var inst_35363 = (state_35441[(25)]);
var inst_35391 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_35394 = (function (){var all_files = inst_35355;
var res_SINGLEQUOTE_ = inst_35358;
var res = inst_35359;
var files_not_loaded = inst_35361;
var dependencies_that_loaded = inst_35363;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35355,inst_35395,inst_35359,inst_35361,inst_35358,inst_35363,inst_35391,state_val_35442,c__26963__auto__,map__35287,map__35287__$1,opts,before_jsload,on_jsload,reload_dependents,map__35288,map__35288__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__35393){
var map__35477 = p__35393;
var map__35477__$1 = ((((!((map__35477 == null)))?((((map__35477.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35477.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35477):map__35477);
var namespace = cljs.core.get.call(null,map__35477__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35355,inst_35395,inst_35359,inst_35361,inst_35358,inst_35363,inst_35391,state_val_35442,c__26963__auto__,map__35287,map__35287__$1,opts,before_jsload,on_jsload,reload_dependents,map__35288,map__35288__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35395__$1 = cljs.core.group_by.call(null,inst_35394,inst_35361);
var inst_35397 = (inst_35395__$1 == null);
var inst_35398 = cljs.core.not.call(null,inst_35397);
var state_35441__$1 = (function (){var statearr_35479 = state_35441;
(statearr_35479[(16)] = inst_35395__$1);

(statearr_35479[(28)] = inst_35391);

return statearr_35479;
})();
if(inst_35398){
var statearr_35480_35556 = state_35441__$1;
(statearr_35480_35556[(1)] = (32));

} else {
var statearr_35481_35557 = state_35441__$1;
(statearr_35481_35557[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35442 === (44))){
var inst_35417 = (state_35441[(21)]);
var inst_35430 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_35417);
var inst_35431 = cljs.core.pr_str.call(null,inst_35430);
var inst_35432 = [cljs.core.str("not required: "),cljs.core.str(inst_35431)].join('');
var inst_35433 = figwheel.client.utils.log.call(null,inst_35432);
var state_35441__$1 = state_35441;
var statearr_35482_35558 = state_35441__$1;
(statearr_35482_35558[(2)] = inst_35433);

(statearr_35482_35558[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35442 === (6))){
var inst_35336 = (state_35441[(2)]);
var state_35441__$1 = state_35441;
var statearr_35483_35559 = state_35441__$1;
(statearr_35483_35559[(2)] = inst_35336);

(statearr_35483_35559[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35442 === (28))){
var inst_35361 = (state_35441[(26)]);
var inst_35388 = (state_35441[(2)]);
var inst_35389 = cljs.core.not_empty.call(null,inst_35361);
var state_35441__$1 = (function (){var statearr_35484 = state_35441;
(statearr_35484[(29)] = inst_35388);

return statearr_35484;
})();
if(cljs.core.truth_(inst_35389)){
var statearr_35485_35560 = state_35441__$1;
(statearr_35485_35560[(1)] = (29));

} else {
var statearr_35486_35561 = state_35441__$1;
(statearr_35486_35561[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35442 === (25))){
var inst_35359 = (state_35441[(23)]);
var inst_35375 = (state_35441[(2)]);
var inst_35376 = cljs.core.not_empty.call(null,inst_35359);
var state_35441__$1 = (function (){var statearr_35487 = state_35441;
(statearr_35487[(30)] = inst_35375);

return statearr_35487;
})();
if(cljs.core.truth_(inst_35376)){
var statearr_35488_35562 = state_35441__$1;
(statearr_35488_35562[(1)] = (26));

} else {
var statearr_35489_35563 = state_35441__$1;
(statearr_35489_35563[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35442 === (34))){
var inst_35410 = (state_35441[(2)]);
var state_35441__$1 = state_35441;
if(cljs.core.truth_(inst_35410)){
var statearr_35490_35564 = state_35441__$1;
(statearr_35490_35564[(1)] = (38));

} else {
var statearr_35491_35565 = state_35441__$1;
(statearr_35491_35565[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35442 === (17))){
var state_35441__$1 = state_35441;
var statearr_35492_35566 = state_35441__$1;
(statearr_35492_35566[(2)] = recompile_dependents);

(statearr_35492_35566[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35442 === (3))){
var state_35441__$1 = state_35441;
var statearr_35493_35567 = state_35441__$1;
(statearr_35493_35567[(2)] = null);

(statearr_35493_35567[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35442 === (12))){
var inst_35332 = (state_35441[(2)]);
var state_35441__$1 = state_35441;
var statearr_35494_35568 = state_35441__$1;
(statearr_35494_35568[(2)] = inst_35332);

(statearr_35494_35568[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35442 === (2))){
var inst_35294 = (state_35441[(13)]);
var inst_35301 = cljs.core.seq.call(null,inst_35294);
var inst_35302 = inst_35301;
var inst_35303 = null;
var inst_35304 = (0);
var inst_35305 = (0);
var state_35441__$1 = (function (){var statearr_35495 = state_35441;
(statearr_35495[(7)] = inst_35303);

(statearr_35495[(8)] = inst_35305);

(statearr_35495[(9)] = inst_35302);

(statearr_35495[(10)] = inst_35304);

return statearr_35495;
})();
var statearr_35496_35569 = state_35441__$1;
(statearr_35496_35569[(2)] = null);

(statearr_35496_35569[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35442 === (23))){
var inst_35355 = (state_35441[(19)]);
var inst_35359 = (state_35441[(23)]);
var inst_35361 = (state_35441[(26)]);
var inst_35358 = (state_35441[(24)]);
var inst_35363 = (state_35441[(25)]);
var inst_35366 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_35368 = (function (){var all_files = inst_35355;
var res_SINGLEQUOTE_ = inst_35358;
var res = inst_35359;
var files_not_loaded = inst_35361;
var dependencies_that_loaded = inst_35363;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35355,inst_35359,inst_35361,inst_35358,inst_35363,inst_35366,state_val_35442,c__26963__auto__,map__35287,map__35287__$1,opts,before_jsload,on_jsload,reload_dependents,map__35288,map__35288__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__35367){
var map__35497 = p__35367;
var map__35497__$1 = ((((!((map__35497 == null)))?((((map__35497.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35497.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35497):map__35497);
var request_url = cljs.core.get.call(null,map__35497__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35355,inst_35359,inst_35361,inst_35358,inst_35363,inst_35366,state_val_35442,c__26963__auto__,map__35287,map__35287__$1,opts,before_jsload,on_jsload,reload_dependents,map__35288,map__35288__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35369 = cljs.core.reverse.call(null,inst_35363);
var inst_35370 = cljs.core.map.call(null,inst_35368,inst_35369);
var inst_35371 = cljs.core.pr_str.call(null,inst_35370);
var inst_35372 = figwheel.client.utils.log.call(null,inst_35371);
var state_35441__$1 = (function (){var statearr_35499 = state_35441;
(statearr_35499[(31)] = inst_35366);

return statearr_35499;
})();
var statearr_35500_35570 = state_35441__$1;
(statearr_35500_35570[(2)] = inst_35372);

(statearr_35500_35570[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35442 === (35))){
var state_35441__$1 = state_35441;
var statearr_35501_35571 = state_35441__$1;
(statearr_35501_35571[(2)] = true);

(statearr_35501_35571[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35442 === (19))){
var inst_35345 = (state_35441[(12)]);
var inst_35351 = figwheel.client.file_reloading.expand_files.call(null,inst_35345);
var state_35441__$1 = state_35441;
var statearr_35502_35572 = state_35441__$1;
(statearr_35502_35572[(2)] = inst_35351);

(statearr_35502_35572[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35442 === (11))){
var state_35441__$1 = state_35441;
var statearr_35503_35573 = state_35441__$1;
(statearr_35503_35573[(2)] = null);

(statearr_35503_35573[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35442 === (9))){
var inst_35334 = (state_35441[(2)]);
var state_35441__$1 = state_35441;
var statearr_35504_35574 = state_35441__$1;
(statearr_35504_35574[(2)] = inst_35334);

(statearr_35504_35574[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35442 === (5))){
var inst_35305 = (state_35441[(8)]);
var inst_35304 = (state_35441[(10)]);
var inst_35307 = (inst_35305 < inst_35304);
var inst_35308 = inst_35307;
var state_35441__$1 = state_35441;
if(cljs.core.truth_(inst_35308)){
var statearr_35505_35575 = state_35441__$1;
(statearr_35505_35575[(1)] = (7));

} else {
var statearr_35506_35576 = state_35441__$1;
(statearr_35506_35576[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35442 === (14))){
var inst_35315 = (state_35441[(22)]);
var inst_35324 = cljs.core.first.call(null,inst_35315);
var inst_35325 = figwheel.client.file_reloading.eval_body.call(null,inst_35324,opts);
var inst_35326 = cljs.core.next.call(null,inst_35315);
var inst_35302 = inst_35326;
var inst_35303 = null;
var inst_35304 = (0);
var inst_35305 = (0);
var state_35441__$1 = (function (){var statearr_35507 = state_35441;
(statearr_35507[(32)] = inst_35325);

(statearr_35507[(7)] = inst_35303);

(statearr_35507[(8)] = inst_35305);

(statearr_35507[(9)] = inst_35302);

(statearr_35507[(10)] = inst_35304);

return statearr_35507;
})();
var statearr_35508_35577 = state_35441__$1;
(statearr_35508_35577[(2)] = null);

(statearr_35508_35577[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35442 === (45))){
var state_35441__$1 = state_35441;
var statearr_35509_35578 = state_35441__$1;
(statearr_35509_35578[(2)] = null);

(statearr_35509_35578[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35442 === (26))){
var inst_35355 = (state_35441[(19)]);
var inst_35359 = (state_35441[(23)]);
var inst_35361 = (state_35441[(26)]);
var inst_35358 = (state_35441[(24)]);
var inst_35363 = (state_35441[(25)]);
var inst_35378 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_35380 = (function (){var all_files = inst_35355;
var res_SINGLEQUOTE_ = inst_35358;
var res = inst_35359;
var files_not_loaded = inst_35361;
var dependencies_that_loaded = inst_35363;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35355,inst_35359,inst_35361,inst_35358,inst_35363,inst_35378,state_val_35442,c__26963__auto__,map__35287,map__35287__$1,opts,before_jsload,on_jsload,reload_dependents,map__35288,map__35288__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__35379){
var map__35510 = p__35379;
var map__35510__$1 = ((((!((map__35510 == null)))?((((map__35510.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35510.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35510):map__35510);
var namespace = cljs.core.get.call(null,map__35510__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__35510__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35355,inst_35359,inst_35361,inst_35358,inst_35363,inst_35378,state_val_35442,c__26963__auto__,map__35287,map__35287__$1,opts,before_jsload,on_jsload,reload_dependents,map__35288,map__35288__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35381 = cljs.core.map.call(null,inst_35380,inst_35359);
var inst_35382 = cljs.core.pr_str.call(null,inst_35381);
var inst_35383 = figwheel.client.utils.log.call(null,inst_35382);
var inst_35384 = (function (){var all_files = inst_35355;
var res_SINGLEQUOTE_ = inst_35358;
var res = inst_35359;
var files_not_loaded = inst_35361;
var dependencies_that_loaded = inst_35363;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35355,inst_35359,inst_35361,inst_35358,inst_35363,inst_35378,inst_35380,inst_35381,inst_35382,inst_35383,state_val_35442,c__26963__auto__,map__35287,map__35287__$1,opts,before_jsload,on_jsload,reload_dependents,map__35288,map__35288__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35355,inst_35359,inst_35361,inst_35358,inst_35363,inst_35378,inst_35380,inst_35381,inst_35382,inst_35383,state_val_35442,c__26963__auto__,map__35287,map__35287__$1,opts,before_jsload,on_jsload,reload_dependents,map__35288,map__35288__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35385 = setTimeout(inst_35384,(10));
var state_35441__$1 = (function (){var statearr_35512 = state_35441;
(statearr_35512[(33)] = inst_35383);

(statearr_35512[(34)] = inst_35378);

return statearr_35512;
})();
var statearr_35513_35579 = state_35441__$1;
(statearr_35513_35579[(2)] = inst_35385);

(statearr_35513_35579[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35442 === (16))){
var state_35441__$1 = state_35441;
var statearr_35514_35580 = state_35441__$1;
(statearr_35514_35580[(2)] = reload_dependents);

(statearr_35514_35580[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35442 === (38))){
var inst_35395 = (state_35441[(16)]);
var inst_35412 = cljs.core.apply.call(null,cljs.core.hash_map,inst_35395);
var state_35441__$1 = state_35441;
var statearr_35515_35581 = state_35441__$1;
(statearr_35515_35581[(2)] = inst_35412);

(statearr_35515_35581[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35442 === (30))){
var state_35441__$1 = state_35441;
var statearr_35516_35582 = state_35441__$1;
(statearr_35516_35582[(2)] = null);

(statearr_35516_35582[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35442 === (10))){
var inst_35315 = (state_35441[(22)]);
var inst_35317 = cljs.core.chunked_seq_QMARK_.call(null,inst_35315);
var state_35441__$1 = state_35441;
if(inst_35317){
var statearr_35517_35583 = state_35441__$1;
(statearr_35517_35583[(1)] = (13));

} else {
var statearr_35518_35584 = state_35441__$1;
(statearr_35518_35584[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35442 === (18))){
var inst_35349 = (state_35441[(2)]);
var state_35441__$1 = state_35441;
if(cljs.core.truth_(inst_35349)){
var statearr_35519_35585 = state_35441__$1;
(statearr_35519_35585[(1)] = (19));

} else {
var statearr_35520_35586 = state_35441__$1;
(statearr_35520_35586[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35442 === (42))){
var state_35441__$1 = state_35441;
var statearr_35521_35587 = state_35441__$1;
(statearr_35521_35587[(2)] = null);

(statearr_35521_35587[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35442 === (37))){
var inst_35407 = (state_35441[(2)]);
var state_35441__$1 = state_35441;
var statearr_35522_35588 = state_35441__$1;
(statearr_35522_35588[(2)] = inst_35407);

(statearr_35522_35588[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35442 === (8))){
var inst_35302 = (state_35441[(9)]);
var inst_35315 = (state_35441[(22)]);
var inst_35315__$1 = cljs.core.seq.call(null,inst_35302);
var state_35441__$1 = (function (){var statearr_35523 = state_35441;
(statearr_35523[(22)] = inst_35315__$1);

return statearr_35523;
})();
if(inst_35315__$1){
var statearr_35524_35589 = state_35441__$1;
(statearr_35524_35589[(1)] = (10));

} else {
var statearr_35525_35590 = state_35441__$1;
(statearr_35525_35590[(1)] = (11));

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
});})(c__26963__auto__,map__35287,map__35287__$1,opts,before_jsload,on_jsload,reload_dependents,map__35288,map__35288__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__26851__auto__,c__26963__auto__,map__35287,map__35287__$1,opts,before_jsload,on_jsload,reload_dependents,map__35288,map__35288__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__26852__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__26852__auto____0 = (function (){
var statearr_35529 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35529[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__26852__auto__);

(statearr_35529[(1)] = (1));

return statearr_35529;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__26852__auto____1 = (function (state_35441){
while(true){
var ret_value__26853__auto__ = (function (){try{while(true){
var result__26854__auto__ = switch__26851__auto__.call(null,state_35441);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26854__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26854__auto__;
}
break;
}
}catch (e35530){if((e35530 instanceof Object)){
var ex__26855__auto__ = e35530;
var statearr_35531_35591 = state_35441;
(statearr_35531_35591[(5)] = ex__26855__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35441);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35530;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35592 = state_35441;
state_35441 = G__35592;
continue;
} else {
return ret_value__26853__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__26852__auto__ = function(state_35441){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__26852__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__26852__auto____1.call(this,state_35441);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__26852__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__26852__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__26852__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__26852__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__26852__auto__;
})()
;})(switch__26851__auto__,c__26963__auto__,map__35287,map__35287__$1,opts,before_jsload,on_jsload,reload_dependents,map__35288,map__35288__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__26965__auto__ = (function (){var statearr_35532 = f__26964__auto__.call(null);
(statearr_35532[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26963__auto__);

return statearr_35532;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26965__auto__);
});})(c__26963__auto__,map__35287,map__35287__$1,opts,before_jsload,on_jsload,reload_dependents,map__35288,map__35288__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__26963__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__35595,link){
var map__35598 = p__35595;
var map__35598__$1 = ((((!((map__35598 == null)))?((((map__35598.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35598.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35598):map__35598);
var file = cljs.core.get.call(null,map__35598__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__35598,map__35598__$1,file){
return (function (p1__35593_SHARP_,p2__35594_SHARP_){
if(cljs.core._EQ_.call(null,p1__35593_SHARP_,p2__35594_SHARP_)){
return p1__35593_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__35598,map__35598__$1,file))
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
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__35604){
var map__35605 = p__35604;
var map__35605__$1 = ((((!((map__35605 == null)))?((((map__35605.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35605.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35605):map__35605);
var match_length = cljs.core.get.call(null,map__35605__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__35605__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__35600_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__35600_SHARP_);
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
var args35607 = [];
var len__25865__auto___35610 = arguments.length;
var i__25866__auto___35611 = (0);
while(true){
if((i__25866__auto___35611 < len__25865__auto___35610)){
args35607.push((arguments[i__25866__auto___35611]));

var G__35612 = (i__25866__auto___35611 + (1));
i__25866__auto___35611 = G__35612;
continue;
} else {
}
break;
}

var G__35609 = args35607.length;
switch (G__35609) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35607.length)].join('')));

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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__35614_SHARP_,p2__35615_SHARP_){
return cljs.core.assoc.call(null,p1__35614_SHARP_,cljs.core.get.call(null,p2__35615_SHARP_,key),p2__35615_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__35616){
var map__35619 = p__35616;
var map__35619__$1 = ((((!((map__35619 == null)))?((((map__35619.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35619.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35619):map__35619);
var f_data = map__35619__$1;
var file = cljs.core.get.call(null,map__35619__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__35621,p__35622){
var map__35631 = p__35621;
var map__35631__$1 = ((((!((map__35631 == null)))?((((map__35631.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35631.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35631):map__35631);
var opts = map__35631__$1;
var on_cssload = cljs.core.get.call(null,map__35631__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__35632 = p__35622;
var map__35632__$1 = ((((!((map__35632 == null)))?((((map__35632.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35632.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35632):map__35632);
var files_msg = map__35632__$1;
var files = cljs.core.get.call(null,map__35632__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__35635_35639 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
var chunk__35636_35640 = null;
var count__35637_35641 = (0);
var i__35638_35642 = (0);
while(true){
if((i__35638_35642 < count__35637_35641)){
var f_35643 = cljs.core._nth.call(null,chunk__35636_35640,i__35638_35642);
figwheel.client.file_reloading.reload_css_file.call(null,f_35643);

var G__35644 = seq__35635_35639;
var G__35645 = chunk__35636_35640;
var G__35646 = count__35637_35641;
var G__35647 = (i__35638_35642 + (1));
seq__35635_35639 = G__35644;
chunk__35636_35640 = G__35645;
count__35637_35641 = G__35646;
i__35638_35642 = G__35647;
continue;
} else {
var temp__4657__auto___35648 = cljs.core.seq.call(null,seq__35635_35639);
if(temp__4657__auto___35648){
var seq__35635_35649__$1 = temp__4657__auto___35648;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35635_35649__$1)){
var c__25601__auto___35650 = cljs.core.chunk_first.call(null,seq__35635_35649__$1);
var G__35651 = cljs.core.chunk_rest.call(null,seq__35635_35649__$1);
var G__35652 = c__25601__auto___35650;
var G__35653 = cljs.core.count.call(null,c__25601__auto___35650);
var G__35654 = (0);
seq__35635_35639 = G__35651;
chunk__35636_35640 = G__35652;
count__35637_35641 = G__35653;
i__35638_35642 = G__35654;
continue;
} else {
var f_35655 = cljs.core.first.call(null,seq__35635_35649__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_35655);

var G__35656 = cljs.core.next.call(null,seq__35635_35649__$1);
var G__35657 = null;
var G__35658 = (0);
var G__35659 = (0);
seq__35635_35639 = G__35656;
chunk__35636_35640 = G__35657;
count__35637_35641 = G__35658;
i__35638_35642 = G__35659;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__35631,map__35631__$1,opts,on_cssload,map__35632,map__35632__$1,files_msg,files){
return (function (){
figwheel.client.file_reloading.on_cssload_custom_event.call(null,files);

return on_cssload.call(null,files);
});})(map__35631,map__35631__$1,opts,on_cssload,map__35632,map__35632__$1,files_msg,files))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1476131800813