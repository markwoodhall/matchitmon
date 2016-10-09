// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__73029){
var map__73054 = p__73029;
var map__73054__$1 = ((((!((map__73054 == null)))?((((map__73054.cljs$lang$protocol_mask$partition0$ & (64))) || (map__73054.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__73054):map__73054);
var m = map__73054__$1;
var n = cljs.core.get.call(null,map__73054__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__73054__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__73056_73078 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__73057_73079 = null;
var count__73058_73080 = (0);
var i__73059_73081 = (0);
while(true){
if((i__73059_73081 < count__73058_73080)){
var f_73082 = cljs.core._nth.call(null,chunk__73057_73079,i__73059_73081);
cljs.core.println.call(null,"  ",f_73082);

var G__73083 = seq__73056_73078;
var G__73084 = chunk__73057_73079;
var G__73085 = count__73058_73080;
var G__73086 = (i__73059_73081 + (1));
seq__73056_73078 = G__73083;
chunk__73057_73079 = G__73084;
count__73058_73080 = G__73085;
i__73059_73081 = G__73086;
continue;
} else {
var temp__4657__auto___73087 = cljs.core.seq.call(null,seq__73056_73078);
if(temp__4657__auto___73087){
var seq__73056_73088__$1 = temp__4657__auto___73087;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__73056_73088__$1)){
var c__48358__auto___73089 = cljs.core.chunk_first.call(null,seq__73056_73088__$1);
var G__73090 = cljs.core.chunk_rest.call(null,seq__73056_73088__$1);
var G__73091 = c__48358__auto___73089;
var G__73092 = cljs.core.count.call(null,c__48358__auto___73089);
var G__73093 = (0);
seq__73056_73078 = G__73090;
chunk__73057_73079 = G__73091;
count__73058_73080 = G__73092;
i__73059_73081 = G__73093;
continue;
} else {
var f_73094 = cljs.core.first.call(null,seq__73056_73088__$1);
cljs.core.println.call(null,"  ",f_73094);

var G__73095 = cljs.core.next.call(null,seq__73056_73088__$1);
var G__73096 = null;
var G__73097 = (0);
var G__73098 = (0);
seq__73056_73078 = G__73095;
chunk__73057_73079 = G__73096;
count__73058_73080 = G__73097;
i__73059_73081 = G__73098;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_73099 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__47547__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__47547__auto__)){
return or__47547__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_73099);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_73099)))?cljs.core.second.call(null,arglists_73099):arglists_73099));
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
var seq__73060_73100 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__73061_73101 = null;
var count__73062_73102 = (0);
var i__73063_73103 = (0);
while(true){
if((i__73063_73103 < count__73062_73102)){
var vec__73064_73104 = cljs.core._nth.call(null,chunk__73061_73101,i__73063_73103);
var name_73105 = cljs.core.nth.call(null,vec__73064_73104,(0),null);
var map__73067_73106 = cljs.core.nth.call(null,vec__73064_73104,(1),null);
var map__73067_73107__$1 = ((((!((map__73067_73106 == null)))?((((map__73067_73106.cljs$lang$protocol_mask$partition0$ & (64))) || (map__73067_73106.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__73067_73106):map__73067_73106);
var doc_73108 = cljs.core.get.call(null,map__73067_73107__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_73109 = cljs.core.get.call(null,map__73067_73107__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_73105);

cljs.core.println.call(null," ",arglists_73109);

if(cljs.core.truth_(doc_73108)){
cljs.core.println.call(null," ",doc_73108);
} else {
}

var G__73110 = seq__73060_73100;
var G__73111 = chunk__73061_73101;
var G__73112 = count__73062_73102;
var G__73113 = (i__73063_73103 + (1));
seq__73060_73100 = G__73110;
chunk__73061_73101 = G__73111;
count__73062_73102 = G__73112;
i__73063_73103 = G__73113;
continue;
} else {
var temp__4657__auto___73114 = cljs.core.seq.call(null,seq__73060_73100);
if(temp__4657__auto___73114){
var seq__73060_73115__$1 = temp__4657__auto___73114;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__73060_73115__$1)){
var c__48358__auto___73116 = cljs.core.chunk_first.call(null,seq__73060_73115__$1);
var G__73117 = cljs.core.chunk_rest.call(null,seq__73060_73115__$1);
var G__73118 = c__48358__auto___73116;
var G__73119 = cljs.core.count.call(null,c__48358__auto___73116);
var G__73120 = (0);
seq__73060_73100 = G__73117;
chunk__73061_73101 = G__73118;
count__73062_73102 = G__73119;
i__73063_73103 = G__73120;
continue;
} else {
var vec__73069_73121 = cljs.core.first.call(null,seq__73060_73115__$1);
var name_73122 = cljs.core.nth.call(null,vec__73069_73121,(0),null);
var map__73072_73123 = cljs.core.nth.call(null,vec__73069_73121,(1),null);
var map__73072_73124__$1 = ((((!((map__73072_73123 == null)))?((((map__73072_73123.cljs$lang$protocol_mask$partition0$ & (64))) || (map__73072_73123.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__73072_73123):map__73072_73123);
var doc_73125 = cljs.core.get.call(null,map__73072_73124__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_73126 = cljs.core.get.call(null,map__73072_73124__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_73122);

cljs.core.println.call(null," ",arglists_73126);

if(cljs.core.truth_(doc_73125)){
cljs.core.println.call(null," ",doc_73125);
} else {
}

var G__73127 = cljs.core.next.call(null,seq__73060_73115__$1);
var G__73128 = null;
var G__73129 = (0);
var G__73130 = (0);
seq__73060_73100 = G__73127;
chunk__73061_73101 = G__73128;
count__73062_73102 = G__73129;
i__73063_73103 = G__73130;
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

var seq__73074 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__73075 = null;
var count__73076 = (0);
var i__73077 = (0);
while(true){
if((i__73077 < count__73076)){
var role = cljs.core._nth.call(null,chunk__73075,i__73077);
var temp__4657__auto___73131__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___73131__$1)){
var spec_73132 = temp__4657__auto___73131__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_73132));
} else {
}

var G__73133 = seq__73074;
var G__73134 = chunk__73075;
var G__73135 = count__73076;
var G__73136 = (i__73077 + (1));
seq__73074 = G__73133;
chunk__73075 = G__73134;
count__73076 = G__73135;
i__73077 = G__73136;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__73074);
if(temp__4657__auto____$1){
var seq__73074__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__73074__$1)){
var c__48358__auto__ = cljs.core.chunk_first.call(null,seq__73074__$1);
var G__73137 = cljs.core.chunk_rest.call(null,seq__73074__$1);
var G__73138 = c__48358__auto__;
var G__73139 = cljs.core.count.call(null,c__48358__auto__);
var G__73140 = (0);
seq__73074 = G__73137;
chunk__73075 = G__73138;
count__73076 = G__73139;
i__73077 = G__73140;
continue;
} else {
var role = cljs.core.first.call(null,seq__73074__$1);
var temp__4657__auto___73141__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___73141__$2)){
var spec_73142 = temp__4657__auto___73141__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_73142));
} else {
}

var G__73143 = cljs.core.next.call(null,seq__73074__$1);
var G__73144 = null;
var G__73145 = (0);
var G__73146 = (0);
seq__73074 = G__73143;
chunk__73075 = G__73144;
count__73076 = G__73145;
i__73077 = G__73146;
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

//# sourceMappingURL=repl.js.map?rel=1476044191632