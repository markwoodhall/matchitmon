// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__36959){
var map__36984 = p__36959;
var map__36984__$1 = ((((!((map__36984 == null)))?((((map__36984.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36984.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36984):map__36984);
var m = map__36984__$1;
var n = cljs.core.get.call(null,map__36984__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__36984__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__36986_37008 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36987_37009 = null;
var count__36988_37010 = (0);
var i__36989_37011 = (0);
while(true){
if((i__36989_37011 < count__36988_37010)){
var f_37012 = cljs.core._nth.call(null,chunk__36987_37009,i__36989_37011);
cljs.core.println.call(null,"  ",f_37012);

var G__37013 = seq__36986_37008;
var G__37014 = chunk__36987_37009;
var G__37015 = count__36988_37010;
var G__37016 = (i__36989_37011 + (1));
seq__36986_37008 = G__37013;
chunk__36987_37009 = G__37014;
count__36988_37010 = G__37015;
i__36989_37011 = G__37016;
continue;
} else {
var temp__4657__auto___37017 = cljs.core.seq.call(null,seq__36986_37008);
if(temp__4657__auto___37017){
var seq__36986_37018__$1 = temp__4657__auto___37017;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36986_37018__$1)){
var c__25601__auto___37019 = cljs.core.chunk_first.call(null,seq__36986_37018__$1);
var G__37020 = cljs.core.chunk_rest.call(null,seq__36986_37018__$1);
var G__37021 = c__25601__auto___37019;
var G__37022 = cljs.core.count.call(null,c__25601__auto___37019);
var G__37023 = (0);
seq__36986_37008 = G__37020;
chunk__36987_37009 = G__37021;
count__36988_37010 = G__37022;
i__36989_37011 = G__37023;
continue;
} else {
var f_37024 = cljs.core.first.call(null,seq__36986_37018__$1);
cljs.core.println.call(null,"  ",f_37024);

var G__37025 = cljs.core.next.call(null,seq__36986_37018__$1);
var G__37026 = null;
var G__37027 = (0);
var G__37028 = (0);
seq__36986_37008 = G__37025;
chunk__36987_37009 = G__37026;
count__36988_37010 = G__37027;
i__36989_37011 = G__37028;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_37029 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__24790__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__24790__auto__)){
return or__24790__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_37029);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_37029)))?cljs.core.second.call(null,arglists_37029):arglists_37029));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__36990_37030 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36991_37031 = null;
var count__36992_37032 = (0);
var i__36993_37033 = (0);
while(true){
if((i__36993_37033 < count__36992_37032)){
var vec__36994_37034 = cljs.core._nth.call(null,chunk__36991_37031,i__36993_37033);
var name_37035 = cljs.core.nth.call(null,vec__36994_37034,(0),null);
var map__36997_37036 = cljs.core.nth.call(null,vec__36994_37034,(1),null);
var map__36997_37037__$1 = ((((!((map__36997_37036 == null)))?((((map__36997_37036.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36997_37036.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36997_37036):map__36997_37036);
var doc_37038 = cljs.core.get.call(null,map__36997_37037__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_37039 = cljs.core.get.call(null,map__36997_37037__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_37035);

cljs.core.println.call(null," ",arglists_37039);

if(cljs.core.truth_(doc_37038)){
cljs.core.println.call(null," ",doc_37038);
} else {
}

var G__37040 = seq__36990_37030;
var G__37041 = chunk__36991_37031;
var G__37042 = count__36992_37032;
var G__37043 = (i__36993_37033 + (1));
seq__36990_37030 = G__37040;
chunk__36991_37031 = G__37041;
count__36992_37032 = G__37042;
i__36993_37033 = G__37043;
continue;
} else {
var temp__4657__auto___37044 = cljs.core.seq.call(null,seq__36990_37030);
if(temp__4657__auto___37044){
var seq__36990_37045__$1 = temp__4657__auto___37044;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36990_37045__$1)){
var c__25601__auto___37046 = cljs.core.chunk_first.call(null,seq__36990_37045__$1);
var G__37047 = cljs.core.chunk_rest.call(null,seq__36990_37045__$1);
var G__37048 = c__25601__auto___37046;
var G__37049 = cljs.core.count.call(null,c__25601__auto___37046);
var G__37050 = (0);
seq__36990_37030 = G__37047;
chunk__36991_37031 = G__37048;
count__36992_37032 = G__37049;
i__36993_37033 = G__37050;
continue;
} else {
var vec__36999_37051 = cljs.core.first.call(null,seq__36990_37045__$1);
var name_37052 = cljs.core.nth.call(null,vec__36999_37051,(0),null);
var map__37002_37053 = cljs.core.nth.call(null,vec__36999_37051,(1),null);
var map__37002_37054__$1 = ((((!((map__37002_37053 == null)))?((((map__37002_37053.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37002_37053.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37002_37053):map__37002_37053);
var doc_37055 = cljs.core.get.call(null,map__37002_37054__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_37056 = cljs.core.get.call(null,map__37002_37054__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_37052);

cljs.core.println.call(null," ",arglists_37056);

if(cljs.core.truth_(doc_37055)){
cljs.core.println.call(null," ",doc_37055);
} else {
}

var G__37057 = cljs.core.next.call(null,seq__36990_37045__$1);
var G__37058 = null;
var G__37059 = (0);
var G__37060 = (0);
seq__36990_37030 = G__37057;
chunk__36991_37031 = G__37058;
count__36992_37032 = G__37059;
i__36993_37033 = G__37060;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__37004 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__37005 = null;
var count__37006 = (0);
var i__37007 = (0);
while(true){
if((i__37007 < count__37006)){
var role = cljs.core._nth.call(null,chunk__37005,i__37007);
var temp__4657__auto___37061__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___37061__$1)){
var spec_37062 = temp__4657__auto___37061__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_37062));
} else {
}

var G__37063 = seq__37004;
var G__37064 = chunk__37005;
var G__37065 = count__37006;
var G__37066 = (i__37007 + (1));
seq__37004 = G__37063;
chunk__37005 = G__37064;
count__37006 = G__37065;
i__37007 = G__37066;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__37004);
if(temp__4657__auto____$1){
var seq__37004__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37004__$1)){
var c__25601__auto__ = cljs.core.chunk_first.call(null,seq__37004__$1);
var G__37067 = cljs.core.chunk_rest.call(null,seq__37004__$1);
var G__37068 = c__25601__auto__;
var G__37069 = cljs.core.count.call(null,c__25601__auto__);
var G__37070 = (0);
seq__37004 = G__37067;
chunk__37005 = G__37068;
count__37006 = G__37069;
i__37007 = G__37070;
continue;
} else {
var role = cljs.core.first.call(null,seq__37004__$1);
var temp__4657__auto___37071__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___37071__$2)){
var spec_37072 = temp__4657__auto___37071__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_37072));
} else {
}

var G__37073 = cljs.core.next.call(null,seq__37004__$1);
var G__37074 = null;
var G__37075 = (0);
var G__37076 = (0);
seq__37004 = G__37073;
chunk__37005 = G__37074;
count__37006 = G__37075;
i__37007 = G__37076;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1476131802402