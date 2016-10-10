// Compiled by ClojureScript 1.9.229 {}
goog.provide('matchit.devcards');
goog.require('cljs.core');
goog.require('matchit.core');
goog.require('devcards.core');
goog.require('cljs.test');
goog.require('reagent.core');
cljs.core.enable_console_print_BANG_.call(null);
if(typeof matchit.devcards.default_board !== 'undefined'){
} else {
matchit.devcards.default_board = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"board","board",-1907017633),matchit.core.board.call(null,(4)),new cljs.core.Keyword(null,"height","height",1025178622),(600),new cljs.core.Keyword(null,"width","width",-384071477),(900)], null));
}
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"matchit.devcards","matchit.devcards",-1078331193),new cljs.core.Keyword(null,"default-matchitmon","default-matchitmon",1592582128)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"default-matchitmon",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"A default matchitmon board is 6x4, there are 4 instances of each unique pokemon tile, if all 4 are revealed\n  at the same time then they will stay revealed, otherwise after 6 seconds each one will be hidden again.",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if(typeof matchit.devcards.t_matchit$devcards34500 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
matchit.devcards.t_matchit$devcards34500 = (function (meta34501){
this.meta34501 = meta34501;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
matchit.devcards.t_matchit$devcards34500.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34502,meta34501__$1){
var self__ = this;
var _34502__$1 = this;
return (new matchit.devcards.t_matchit$devcards34500(meta34501__$1));
});

matchit.devcards.t_matchit$devcards34500.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34502){
var self__ = this;
var _34502__$1 = this;
return self__.meta34501;
});

matchit.devcards.t_matchit$devcards34500.prototype.devcards$core$IDevcardOptions$ = true;

matchit.devcards.t_matchit$devcards34500.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__34398__auto__,devcard_opts__34399__auto__){
var self__ = this;
var this__34398__auto____$1 = this;
return cljs.core.assoc.call(null,devcard_opts__34399__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__34417__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [matchit.core.matchitmon,matchit.devcards.default_board], null);
if(cljs.core.fn_QMARK_.call(null,v__34417__auto__)){
return ((function (v__34417__auto__,this__34398__auto____$1){
return (function (data_atom__34418__auto__,owner__34419__auto__){
return reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__34417__auto__,data_atom__34418__auto__,owner__34419__auto__], null));
});
;})(v__34417__auto__,this__34398__auto____$1))
} else {
return reagent.core.as_element.call(null,v__34417__auto__);
}
})(),new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map.call(null,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__34399__auto__))));
});

matchit.devcards.t_matchit$devcards34500.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta34501","meta34501",2035110828,null)], null);
});

matchit.devcards.t_matchit$devcards34500.cljs$lang$type = true;

matchit.devcards.t_matchit$devcards34500.cljs$lang$ctorStr = "matchit.devcards/t_matchit$devcards34500";

matchit.devcards.t_matchit$devcards34500.cljs$lang$ctorPrWriter = (function (this__25396__auto__,writer__25397__auto__,opt__25398__auto__){
return cljs.core._write.call(null,writer__25397__auto__,"matchit.devcards/t_matchit$devcards34500");
});

matchit.devcards.__GT_t_matchit$devcards34500 = (function matchit$devcards$__GT_t_matchit$devcards34500(meta34501){
return (new matchit.devcards.t_matchit$devcards34500(meta34501));
});

}

return (new matchit.devcards.t_matchit$devcards34500(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),matchit.devcards.default_board,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"history","history",-247395220),true,new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
if(typeof matchit.devcards.default_board_tile_revealed !== 'undefined'){
} else {
matchit.devcards.default_board_tile_revealed = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"board","board",-1907017633),matchit.core.reveal.call(null,(1),matchit.core.board.call(null,(4))),new cljs.core.Keyword(null,"height","height",1025178622),(600),new cljs.core.Keyword(null,"width","width",-384071477),(900)], null));
}
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"matchit.devcards","matchit.devcards",-1078331193),new cljs.core.Keyword(null,"default-matchitmon-tile-revealed","default-matchitmon-tile-revealed",-1157566807)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"default-matchitmon-tile-revealed",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"A default mathictmon board with a tile revealed.",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if(typeof matchit.devcards.t_matchit$devcards34503 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
matchit.devcards.t_matchit$devcards34503 = (function (meta34504){
this.meta34504 = meta34504;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
matchit.devcards.t_matchit$devcards34503.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34505,meta34504__$1){
var self__ = this;
var _34505__$1 = this;
return (new matchit.devcards.t_matchit$devcards34503(meta34504__$1));
});

matchit.devcards.t_matchit$devcards34503.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34505){
var self__ = this;
var _34505__$1 = this;
return self__.meta34504;
});

matchit.devcards.t_matchit$devcards34503.prototype.devcards$core$IDevcardOptions$ = true;

matchit.devcards.t_matchit$devcards34503.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__34398__auto__,devcard_opts__34399__auto__){
var self__ = this;
var this__34398__auto____$1 = this;
return cljs.core.assoc.call(null,devcard_opts__34399__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__34417__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [matchit.core.matchitmon,matchit.devcards.default_board_tile_revealed], null);
if(cljs.core.fn_QMARK_.call(null,v__34417__auto__)){
return ((function (v__34417__auto__,this__34398__auto____$1){
return (function (data_atom__34418__auto__,owner__34419__auto__){
return reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__34417__auto__,data_atom__34418__auto__,owner__34419__auto__], null));
});
;})(v__34417__auto__,this__34398__auto____$1))
} else {
return reagent.core.as_element.call(null,v__34417__auto__);
}
})(),new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map.call(null,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__34399__auto__))));
});

matchit.devcards.t_matchit$devcards34503.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta34504","meta34504",1197927960,null)], null);
});

matchit.devcards.t_matchit$devcards34503.cljs$lang$type = true;

matchit.devcards.t_matchit$devcards34503.cljs$lang$ctorStr = "matchit.devcards/t_matchit$devcards34503";

matchit.devcards.t_matchit$devcards34503.cljs$lang$ctorPrWriter = (function (this__25396__auto__,writer__25397__auto__,opt__25398__auto__){
return cljs.core._write.call(null,writer__25397__auto__,"matchit.devcards/t_matchit$devcards34503");
});

matchit.devcards.__GT_t_matchit$devcards34503 = (function matchit$devcards$__GT_t_matchit$devcards34503(meta34504){
return (new matchit.devcards.t_matchit$devcards34503(meta34504));
});

}

return (new matchit.devcards.t_matchit$devcards34503(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),matchit.devcards.default_board_tile_revealed,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"history","history",-247395220),true,new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
if(typeof matchit.devcards.default_board_all_tiles_revealed !== 'undefined'){
} else {
matchit.devcards.default_board_all_tiles_revealed = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"board","board",-1907017633),matchit.core.reveal.call(null,matchit.core.board.call(null,(4))),new cljs.core.Keyword(null,"height","height",1025178622),(600),new cljs.core.Keyword(null,"width","width",-384071477),(900)], null));
}
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"matchit.devcards","matchit.devcards",-1078331193),new cljs.core.Keyword(null,"default-matchitmon-all-tiles-revealed","default-matchitmon-all-tiles-revealed",1956587102)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"default-matchitmon-all-tiles-revealed",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"A default mathictmon board with all tiles revealed.",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if(typeof matchit.devcards.t_matchit$devcards34506 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
matchit.devcards.t_matchit$devcards34506 = (function (meta34507){
this.meta34507 = meta34507;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
matchit.devcards.t_matchit$devcards34506.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34508,meta34507__$1){
var self__ = this;
var _34508__$1 = this;
return (new matchit.devcards.t_matchit$devcards34506(meta34507__$1));
});

matchit.devcards.t_matchit$devcards34506.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34508){
var self__ = this;
var _34508__$1 = this;
return self__.meta34507;
});

matchit.devcards.t_matchit$devcards34506.prototype.devcards$core$IDevcardOptions$ = true;

matchit.devcards.t_matchit$devcards34506.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__34398__auto__,devcard_opts__34399__auto__){
var self__ = this;
var this__34398__auto____$1 = this;
return cljs.core.assoc.call(null,devcard_opts__34399__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__34417__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [matchit.core.matchitmon,matchit.devcards.default_board_all_tiles_revealed], null);
if(cljs.core.fn_QMARK_.call(null,v__34417__auto__)){
return ((function (v__34417__auto__,this__34398__auto____$1){
return (function (data_atom__34418__auto__,owner__34419__auto__){
return reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__34417__auto__,data_atom__34418__auto__,owner__34419__auto__], null));
});
;})(v__34417__auto__,this__34398__auto____$1))
} else {
return reagent.core.as_element.call(null,v__34417__auto__);
}
})(),new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map.call(null,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__34399__auto__))));
});

matchit.devcards.t_matchit$devcards34506.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta34507","meta34507",-97039610,null)], null);
});

matchit.devcards.t_matchit$devcards34506.cljs$lang$type = true;

matchit.devcards.t_matchit$devcards34506.cljs$lang$ctorStr = "matchit.devcards/t_matchit$devcards34506";

matchit.devcards.t_matchit$devcards34506.cljs$lang$ctorPrWriter = (function (this__25396__auto__,writer__25397__auto__,opt__25398__auto__){
return cljs.core._write.call(null,writer__25397__auto__,"matchit.devcards/t_matchit$devcards34506");
});

matchit.devcards.__GT_t_matchit$devcards34506 = (function matchit$devcards$__GT_t_matchit$devcards34506(meta34507){
return (new matchit.devcards.t_matchit$devcards34506(meta34507));
});

}

return (new matchit.devcards.t_matchit$devcards34506(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),matchit.devcards.default_board_all_tiles_revealed,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"history","history",-247395220),true,new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
if(typeof matchit.devcards.large_board !== 'undefined'){
} else {
matchit.devcards.large_board = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"board","board",-1907017633),matchit.core.board.call(null,((10) * (2))),new cljs.core.Keyword(null,"height","height",1025178622),(600),new cljs.core.Keyword(null,"width","width",-384071477),(900)], null));
}
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"matchit.devcards","matchit.devcards",-1078331193),new cljs.core.Keyword(null,"large-matchitmon","large-matchitmon",-1976174169)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"large-matchitmon",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"A large matchitmon board",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if(typeof matchit.devcards.t_matchit$devcards34509 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
matchit.devcards.t_matchit$devcards34509 = (function (meta34510){
this.meta34510 = meta34510;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
matchit.devcards.t_matchit$devcards34509.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34511,meta34510__$1){
var self__ = this;
var _34511__$1 = this;
return (new matchit.devcards.t_matchit$devcards34509(meta34510__$1));
});

matchit.devcards.t_matchit$devcards34509.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34511){
var self__ = this;
var _34511__$1 = this;
return self__.meta34510;
});

matchit.devcards.t_matchit$devcards34509.prototype.devcards$core$IDevcardOptions$ = true;

matchit.devcards.t_matchit$devcards34509.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__34398__auto__,devcard_opts__34399__auto__){
var self__ = this;
var this__34398__auto____$1 = this;
return cljs.core.assoc.call(null,devcard_opts__34399__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__34417__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [matchit.core.matchitmon,matchit.devcards.large_board], null);
if(cljs.core.fn_QMARK_.call(null,v__34417__auto__)){
return ((function (v__34417__auto__,this__34398__auto____$1){
return (function (data_atom__34418__auto__,owner__34419__auto__){
return reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__34417__auto__,data_atom__34418__auto__,owner__34419__auto__], null));
});
;})(v__34417__auto__,this__34398__auto____$1))
} else {
return reagent.core.as_element.call(null,v__34417__auto__);
}
})(),new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map.call(null,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__34399__auto__))));
});

matchit.devcards.t_matchit$devcards34509.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta34510","meta34510",-1134538924,null)], null);
});

matchit.devcards.t_matchit$devcards34509.cljs$lang$type = true;

matchit.devcards.t_matchit$devcards34509.cljs$lang$ctorStr = "matchit.devcards/t_matchit$devcards34509";

matchit.devcards.t_matchit$devcards34509.cljs$lang$ctorPrWriter = (function (this__25396__auto__,writer__25397__auto__,opt__25398__auto__){
return cljs.core._write.call(null,writer__25397__auto__,"matchit.devcards/t_matchit$devcards34509");
});

matchit.devcards.__GT_t_matchit$devcards34509 = (function matchit$devcards$__GT_t_matchit$devcards34509(meta34510){
return (new matchit.devcards.t_matchit$devcards34509(meta34510));
});

}

return (new matchit.devcards.t_matchit$devcards34509(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),matchit.devcards.large_board,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"history","history",-247395220),true,new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"matchit.devcards","matchit.devcards",-1078331193),new cljs.core.Keyword(null,"creating-a-board","creating-a-board",-721306190)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"creating-a-board",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),devcards.core.test_card.call(null,(function (){
return devcards.core.test_doc.call(null,"Creating boards.");
}),(function (){
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"A new board should have no revealed tiles.");

try{try{var values__32991__auto__ = cljs.core._conj.call(null,(function (){var x__25624__auto__ = cljs.core.count.call(null,cljs.core.filter.call(null,(function (p1__34512_SHARP_){
return new cljs.core.Keyword(null,"revealed?","revealed?",726959164).cljs$core$IFn$_invoke$arity$1(p1__34512_SHARP_);
}),matchit.core.board.call(null,(4))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25624__auto__);
})(),(0));
var result__32992__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__32991__auto__);
if(cljs.core.truth_(result__32992__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(0),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),cljs.core.list(new cljs.core.Symbol(null,"filter","filter",691993593,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__34512#","p1__34512#",-489341347,null)], null),cljs.core.list(new cljs.core.Keyword(null,"revealed?","revealed?",726959164),new cljs.core.Symbol(null,"p1__34512#","p1__34512#",-489341347,null))),cljs.core.list(new cljs.core.Symbol(null,"board","board",-266486106,null),(4))))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__32991__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(0),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),cljs.core.list(new cljs.core.Symbol(null,"filter","filter",691993593,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__34512#","p1__34512#",-489341347,null)], null),cljs.core.list(new cljs.core.Keyword(null,"revealed?","revealed?",726959164),new cljs.core.Symbol(null,"p1__34512#","p1__34512#",-489341347,null))),cljs.core.list(new cljs.core.Symbol(null,"board","board",-266486106,null),(4))))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__25624__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__32991__auto__);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25624__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__32992__auto__;
}catch (e34514){var t__33029__auto__ = e34514;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(0),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),cljs.core.list(new cljs.core.Symbol(null,"filter","filter",691993593,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__34512#","p1__34512#",-489341347,null)], null),cljs.core.list(new cljs.core.Keyword(null,"revealed?","revealed?",726959164),new cljs.core.Symbol(null,"p1__34512#","p1__34512#",-489341347,null))),cljs.core.list(new cljs.core.Symbol(null,"board","board",-266486106,null),(4))))),new cljs.core.Keyword(null,"actual","actual",107306363),t__33029__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}}finally {cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}}),(function (){
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"A new board shoud have tiles with incremental ids.");

try{try{var values__32991__auto__ = (function (){var x__25624__auto__ = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(2),(3),(4),(5)], null);
return cljs.core._conj.call(null,(function (){var x__25624__auto____$1 = cljs.core.map.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),matchit.core.board.call(null,(1)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25624__auto____$1);
})(),x__25624__auto__);
})();
var result__32992__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__32991__auto__);
if(cljs.core.truth_(result__32992__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(2),(3),(4),(5)], null),cljs.core.list(new cljs.core.Symbol(null,"map","map",-1282745308,null),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.list(new cljs.core.Symbol(null,"board","board",-266486106,null),(1)))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__32991__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(2),(3),(4),(5)], null),cljs.core.list(new cljs.core.Symbol(null,"map","map",-1282745308,null),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.list(new cljs.core.Symbol(null,"board","board",-266486106,null),(1)))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__25624__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__32991__auto__);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25624__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__32992__auto__;
}catch (e34515){var t__33029__auto__ = e34515;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(2),(3),(4),(5)], null),cljs.core.list(new cljs.core.Symbol(null,"map","map",-1282745308,null),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.list(new cljs.core.Symbol(null,"board","board",-266486106,null),(1)))),new cljs.core.Keyword(null,"actual","actual",107306363),t__33029__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}}finally {cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}}),(function (){
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"A new board shoud have tiles with incremental x and y positions.");

try{try{var values__32991__auto__ = (function (){var x__25624__auto__ = new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(1),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(2),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(3),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(4),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(5),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(1)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(1),new cljs.core.Keyword(null,"y","y",-1757859776),(1)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(2),new cljs.core.Keyword(null,"y","y",-1757859776),(1)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(3),new cljs.core.Keyword(null,"y","y",-1757859776),(1)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(4),new cljs.core.Keyword(null,"y","y",-1757859776),(1)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(5),new cljs.core.Keyword(null,"y","y",-1757859776),(1)], null)], null);
return cljs.core._conj.call(null,(function (){var x__25624__auto____$1 = cljs.core.map.call(null,((function (x__25624__auto__){
return (function (p1__34513_SHARP_){
return cljs.core.select_keys.call(null,p1__34513_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null));
});})(x__25624__auto__))
,matchit.core.board.call(null,(2)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25624__auto____$1);
})(),x__25624__auto__);
})();
var result__32992__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__32991__auto__);
if(cljs.core.truth_(result__32992__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(1),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(2),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(3),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(4),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(5),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(1)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(1),new cljs.core.Keyword(null,"y","y",-1757859776),(1)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(2),new cljs.core.Keyword(null,"y","y",-1757859776),(1)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(3),new cljs.core.Keyword(null,"y","y",-1757859776),(1)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(4),new cljs.core.Keyword(null,"y","y",-1757859776),(1)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(5),new cljs.core.Keyword(null,"y","y",-1757859776),(1)], null)], null),cljs.core.list(new cljs.core.Symbol(null,"map","map",-1282745308,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__34513#","p1__34513#",-1499366340,null)], null),cljs.core.list(new cljs.core.Symbol(null,"select-keys","select-keys",-708556589,null),new cljs.core.Symbol(null,"p1__34513#","p1__34513#",-1499366340,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null))),cljs.core.list(new cljs.core.Symbol(null,"board","board",-266486106,null),(2)))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__32991__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(1),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(2),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(3),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(4),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(5),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(1)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(1),new cljs.core.Keyword(null,"y","y",-1757859776),(1)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(2),new cljs.core.Keyword(null,"y","y",-1757859776),(1)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(3),new cljs.core.Keyword(null,"y","y",-1757859776),(1)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(4),new cljs.core.Keyword(null,"y","y",-1757859776),(1)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(5),new cljs.core.Keyword(null,"y","y",-1757859776),(1)], null)], null),cljs.core.list(new cljs.core.Symbol(null,"map","map",-1282745308,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__34513#","p1__34513#",-1499366340,null)], null),cljs.core.list(new cljs.core.Symbol(null,"select-keys","select-keys",-708556589,null),new cljs.core.Symbol(null,"p1__34513#","p1__34513#",-1499366340,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null))),cljs.core.list(new cljs.core.Symbol(null,"board","board",-266486106,null),(2)))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__25624__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__32991__auto__);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25624__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__32992__auto__;
}catch (e34516){var t__33029__auto__ = e34516;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(1),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(2),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(3),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(4),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(5),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(1)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(1),new cljs.core.Keyword(null,"y","y",-1757859776),(1)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(2),new cljs.core.Keyword(null,"y","y",-1757859776),(1)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(3),new cljs.core.Keyword(null,"y","y",-1757859776),(1)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(4),new cljs.core.Keyword(null,"y","y",-1757859776),(1)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(5),new cljs.core.Keyword(null,"y","y",-1757859776),(1)], null)], null),cljs.core.list(new cljs.core.Symbol(null,"map","map",-1282745308,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__34513#","p1__34513#",-1499366340,null)], null),cljs.core.list(new cljs.core.Symbol(null,"select-keys","select-keys",-708556589,null),new cljs.core.Symbol(null,"p1__34513#","p1__34513#",-1499366340,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null))),cljs.core.list(new cljs.core.Symbol(null,"board","board",-266486106,null),(2)))),new cljs.core.Keyword(null,"actual","actual",107306363),t__33029__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}}finally {cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}}),(function (){
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"A new board with 1 row should result in a unique board 80% of the time.");

try{try{var values__32991__auto__ = cljs.core._conj.call(null,(function (){var x__25624__auto__ = cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.repeatedly.call(null,(100),(function (){
return matchit.core.board.call(null,(1));
}))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25624__auto__);
})(),(80));
var result__32992__auto__ = cljs.core.apply.call(null,cljs.core._LT__EQ_,values__32991__auto__);
if(cljs.core.truth_(result__32992__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"<=","<=",1244895369,null),(80),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),cljs.core.list(new cljs.core.Symbol(null,"set","set",1945134081,null),cljs.core.list(new cljs.core.Symbol(null,"repeatedly","repeatedly",1199964457,null),(100),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"board","board",-266486106,null),(1))))))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._LT__EQ_,values__32991__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"<=","<=",1244895369,null),(80),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),cljs.core.list(new cljs.core.Symbol(null,"set","set",1945134081,null),cljs.core.list(new cljs.core.Symbol(null,"repeatedly","repeatedly",1199964457,null),(100),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"board","board",-266486106,null),(1))))))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__25624__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"<=","<=",1244895369,null),values__32991__auto__);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25624__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__32992__auto__;
}catch (e34517){var t__33029__auto__ = e34517;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"<=","<=",1244895369,null),(80),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),cljs.core.list(new cljs.core.Symbol(null,"set","set",1945134081,null),cljs.core.list(new cljs.core.Symbol(null,"repeatedly","repeatedly",1199964457,null),(100),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"board","board",-266486106,null),(1))))))),new cljs.core.Keyword(null,"actual","actual",107306363),t__33029__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}}finally {cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}}),(function (){
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"A new board with 2 rows should result in a unique board 99% of the time.");

try{try{var values__32991__auto__ = cljs.core._conj.call(null,(function (){var x__25624__auto__ = cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.repeatedly.call(null,(100),(function (){
return matchit.core.board.call(null,(2));
}))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25624__auto__);
})(),(99));
var result__32992__auto__ = cljs.core.apply.call(null,cljs.core._LT__EQ_,values__32991__auto__);
if(cljs.core.truth_(result__32992__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"<=","<=",1244895369,null),(99),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),cljs.core.list(new cljs.core.Symbol(null,"set","set",1945134081,null),cljs.core.list(new cljs.core.Symbol(null,"repeatedly","repeatedly",1199964457,null),(100),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"board","board",-266486106,null),(2))))))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._LT__EQ_,values__32991__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"<=","<=",1244895369,null),(99),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),cljs.core.list(new cljs.core.Symbol(null,"set","set",1945134081,null),cljs.core.list(new cljs.core.Symbol(null,"repeatedly","repeatedly",1199964457,null),(100),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"board","board",-266486106,null),(2))))))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__25624__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"<=","<=",1244895369,null),values__32991__auto__);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25624__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__32992__auto__;
}catch (e34518){var t__33029__auto__ = e34518;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"<=","<=",1244895369,null),(99),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),cljs.core.list(new cljs.core.Symbol(null,"set","set",1945134081,null),cljs.core.list(new cljs.core.Symbol(null,"repeatedly","repeatedly",1199964457,null),(100),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"board","board",-266486106,null),(2))))))),new cljs.core.Keyword(null,"actual","actual",107306363),t__33029__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}}finally {cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}})),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));

matchit.devcards.creating_a_board = (function matchit$devcards$creating_a_board(){
return cljs.test.test_var.call(null,matchit$devcards$creating_a_board.cljs$lang$var);
});
matchit.devcards.creating_a_board.cljs$lang$test = (function (){

cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"A new board should have no revealed tiles.");

try{try{var values__32991__auto___34524 = cljs.core._conj.call(null,(function (){var x__25624__auto__ = cljs.core.count.call(null,cljs.core.filter.call(null,(function (p1__34512_SHARP_){
return new cljs.core.Keyword(null,"revealed?","revealed?",726959164).cljs$core$IFn$_invoke$arity$1(p1__34512_SHARP_);
}),matchit.core.board.call(null,(4))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25624__auto__);
})(),(0));
var result__32992__auto___34525 = cljs.core.apply.call(null,cljs.core._EQ_,values__32991__auto___34524);
if(cljs.core.truth_(result__32992__auto___34525)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(0),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),cljs.core.list(new cljs.core.Symbol(null,"filter","filter",691993593,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__34512#","p1__34512#",-489341347,null)], null),cljs.core.list(new cljs.core.Keyword(null,"revealed?","revealed?",726959164),new cljs.core.Symbol(null,"p1__34512#","p1__34512#",-489341347,null))),cljs.core.list(new cljs.core.Symbol(null,"board","board",-266486106,null),(4))))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__32991__auto___34524),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(0),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),cljs.core.list(new cljs.core.Symbol(null,"filter","filter",691993593,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__34512#","p1__34512#",-489341347,null)], null),cljs.core.list(new cljs.core.Keyword(null,"revealed?","revealed?",726959164),new cljs.core.Symbol(null,"p1__34512#","p1__34512#",-489341347,null))),cljs.core.list(new cljs.core.Symbol(null,"board","board",-266486106,null),(4))))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__25624__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__32991__auto___34524);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25624__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e34519){var t__33029__auto___34526 = e34519;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(0),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),cljs.core.list(new cljs.core.Symbol(null,"filter","filter",691993593,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__34512#","p1__34512#",-489341347,null)], null),cljs.core.list(new cljs.core.Keyword(null,"revealed?","revealed?",726959164),new cljs.core.Symbol(null,"p1__34512#","p1__34512#",-489341347,null))),cljs.core.list(new cljs.core.Symbol(null,"board","board",-266486106,null),(4))))),new cljs.core.Keyword(null,"actual","actual",107306363),t__33029__auto___34526,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}}finally {cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"A new board shoud have tiles with incremental ids.");

try{try{var values__32991__auto___34527 = (function (){var x__25624__auto__ = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(2),(3),(4),(5)], null);
return cljs.core._conj.call(null,(function (){var x__25624__auto____$1 = cljs.core.map.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),matchit.core.board.call(null,(1)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25624__auto____$1);
})(),x__25624__auto__);
})();
var result__32992__auto___34528 = cljs.core.apply.call(null,cljs.core._EQ_,values__32991__auto___34527);
if(cljs.core.truth_(result__32992__auto___34528)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(2),(3),(4),(5)], null),cljs.core.list(new cljs.core.Symbol(null,"map","map",-1282745308,null),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.list(new cljs.core.Symbol(null,"board","board",-266486106,null),(1)))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__32991__auto___34527),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(2),(3),(4),(5)], null),cljs.core.list(new cljs.core.Symbol(null,"map","map",-1282745308,null),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.list(new cljs.core.Symbol(null,"board","board",-266486106,null),(1)))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__25624__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__32991__auto___34527);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25624__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e34520){var t__33029__auto___34529 = e34520;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(2),(3),(4),(5)], null),cljs.core.list(new cljs.core.Symbol(null,"map","map",-1282745308,null),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.list(new cljs.core.Symbol(null,"board","board",-266486106,null),(1)))),new cljs.core.Keyword(null,"actual","actual",107306363),t__33029__auto___34529,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}}finally {cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"A new board shoud have tiles with incremental x and y positions.");

try{try{var values__32991__auto___34530 = (function (){var x__25624__auto__ = new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(1),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(2),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(3),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(4),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(5),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(1)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(1),new cljs.core.Keyword(null,"y","y",-1757859776),(1)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(2),new cljs.core.Keyword(null,"y","y",-1757859776),(1)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(3),new cljs.core.Keyword(null,"y","y",-1757859776),(1)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(4),new cljs.core.Keyword(null,"y","y",-1757859776),(1)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(5),new cljs.core.Keyword(null,"y","y",-1757859776),(1)], null)], null);
return cljs.core._conj.call(null,(function (){var x__25624__auto____$1 = cljs.core.map.call(null,((function (x__25624__auto__){
return (function (p1__34513_SHARP_){
return cljs.core.select_keys.call(null,p1__34513_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null));
});})(x__25624__auto__))
,matchit.core.board.call(null,(2)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25624__auto____$1);
})(),x__25624__auto__);
})();
var result__32992__auto___34531 = cljs.core.apply.call(null,cljs.core._EQ_,values__32991__auto___34530);
if(cljs.core.truth_(result__32992__auto___34531)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(1),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(2),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(3),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(4),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(5),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(1)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(1),new cljs.core.Keyword(null,"y","y",-1757859776),(1)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(2),new cljs.core.Keyword(null,"y","y",-1757859776),(1)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(3),new cljs.core.Keyword(null,"y","y",-1757859776),(1)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(4),new cljs.core.Keyword(null,"y","y",-1757859776),(1)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(5),new cljs.core.Keyword(null,"y","y",-1757859776),(1)], null)], null),cljs.core.list(new cljs.core.Symbol(null,"map","map",-1282745308,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__34513#","p1__34513#",-1499366340,null)], null),cljs.core.list(new cljs.core.Symbol(null,"select-keys","select-keys",-708556589,null),new cljs.core.Symbol(null,"p1__34513#","p1__34513#",-1499366340,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null))),cljs.core.list(new cljs.core.Symbol(null,"board","board",-266486106,null),(2)))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__32991__auto___34530),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(1),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(2),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(3),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(4),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(5),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(1)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(1),new cljs.core.Keyword(null,"y","y",-1757859776),(1)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(2),new cljs.core.Keyword(null,"y","y",-1757859776),(1)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(3),new cljs.core.Keyword(null,"y","y",-1757859776),(1)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(4),new cljs.core.Keyword(null,"y","y",-1757859776),(1)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(5),new cljs.core.Keyword(null,"y","y",-1757859776),(1)], null)], null),cljs.core.list(new cljs.core.Symbol(null,"map","map",-1282745308,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__34513#","p1__34513#",-1499366340,null)], null),cljs.core.list(new cljs.core.Symbol(null,"select-keys","select-keys",-708556589,null),new cljs.core.Symbol(null,"p1__34513#","p1__34513#",-1499366340,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null))),cljs.core.list(new cljs.core.Symbol(null,"board","board",-266486106,null),(2)))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__25624__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__32991__auto___34530);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25624__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e34521){var t__33029__auto___34532 = e34521;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(1),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(2),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(3),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(4),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(5),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(1)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(1),new cljs.core.Keyword(null,"y","y",-1757859776),(1)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(2),new cljs.core.Keyword(null,"y","y",-1757859776),(1)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(3),new cljs.core.Keyword(null,"y","y",-1757859776),(1)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(4),new cljs.core.Keyword(null,"y","y",-1757859776),(1)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(5),new cljs.core.Keyword(null,"y","y",-1757859776),(1)], null)], null),cljs.core.list(new cljs.core.Symbol(null,"map","map",-1282745308,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__34513#","p1__34513#",-1499366340,null)], null),cljs.core.list(new cljs.core.Symbol(null,"select-keys","select-keys",-708556589,null),new cljs.core.Symbol(null,"p1__34513#","p1__34513#",-1499366340,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null))),cljs.core.list(new cljs.core.Symbol(null,"board","board",-266486106,null),(2)))),new cljs.core.Keyword(null,"actual","actual",107306363),t__33029__auto___34532,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}}finally {cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"A new board with 1 row should result in a unique board 80% of the time.");

try{try{var values__32991__auto___34533 = cljs.core._conj.call(null,(function (){var x__25624__auto__ = cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.repeatedly.call(null,(100),(function (){
return matchit.core.board.call(null,(1));
}))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25624__auto__);
})(),(80));
var result__32992__auto___34534 = cljs.core.apply.call(null,cljs.core._LT__EQ_,values__32991__auto___34533);
if(cljs.core.truth_(result__32992__auto___34534)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"<=","<=",1244895369,null),(80),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),cljs.core.list(new cljs.core.Symbol(null,"set","set",1945134081,null),cljs.core.list(new cljs.core.Symbol(null,"repeatedly","repeatedly",1199964457,null),(100),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"board","board",-266486106,null),(1))))))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._LT__EQ_,values__32991__auto___34533),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"<=","<=",1244895369,null),(80),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),cljs.core.list(new cljs.core.Symbol(null,"set","set",1945134081,null),cljs.core.list(new cljs.core.Symbol(null,"repeatedly","repeatedly",1199964457,null),(100),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"board","board",-266486106,null),(1))))))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__25624__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"<=","<=",1244895369,null),values__32991__auto___34533);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25624__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e34522){var t__33029__auto___34535 = e34522;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"<=","<=",1244895369,null),(80),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),cljs.core.list(new cljs.core.Symbol(null,"set","set",1945134081,null),cljs.core.list(new cljs.core.Symbol(null,"repeatedly","repeatedly",1199964457,null),(100),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"board","board",-266486106,null),(1))))))),new cljs.core.Keyword(null,"actual","actual",107306363),t__33029__auto___34535,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}}finally {cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"A new board with 2 rows should result in a unique board 99% of the time.");

try{try{var values__32991__auto__ = cljs.core._conj.call(null,(function (){var x__25624__auto__ = cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.repeatedly.call(null,(100),(function (){
return matchit.core.board.call(null,(2));
}))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25624__auto__);
})(),(99));
var result__32992__auto__ = cljs.core.apply.call(null,cljs.core._LT__EQ_,values__32991__auto__);
if(cljs.core.truth_(result__32992__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"<=","<=",1244895369,null),(99),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),cljs.core.list(new cljs.core.Symbol(null,"set","set",1945134081,null),cljs.core.list(new cljs.core.Symbol(null,"repeatedly","repeatedly",1199964457,null),(100),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"board","board",-266486106,null),(2))))))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._LT__EQ_,values__32991__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"<=","<=",1244895369,null),(99),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),cljs.core.list(new cljs.core.Symbol(null,"set","set",1945134081,null),cljs.core.list(new cljs.core.Symbol(null,"repeatedly","repeatedly",1199964457,null),(100),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"board","board",-266486106,null),(2))))))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__25624__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"<=","<=",1244895369,null),values__32991__auto__);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25624__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__32992__auto__;
}catch (e34523){var t__33029__auto__ = e34523;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"<=","<=",1244895369,null),(99),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),cljs.core.list(new cljs.core.Symbol(null,"set","set",1945134081,null),cljs.core.list(new cljs.core.Symbol(null,"repeatedly","repeatedly",1199964457,null),(100),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"board","board",-266486106,null),(2))))))),new cljs.core.Keyword(null,"actual","actual",107306363),t__33029__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}}finally {cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}});

matchit.devcards.creating_a_board.cljs$lang$var = new cljs.core.Var(function(){return matchit.devcards.creating_a_board;},new cljs.core.Symbol("matchit.devcards","creating-a-board","matchit.devcards/creating-a-board",-1425057075,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[cljs.core.with_meta(new cljs.core.Symbol(null,"matchit.devcards","matchit.devcards",562200334,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691),true], null)),new cljs.core.Symbol(null,"creating-a-board","creating-a-board",919225337,null),"/d/code/personal/matchitmon/src/matchit/devcards.cljs",26,1,40,40,cljs.core.List.EMPTY,null,(cljs.core.truth_(matchit.devcards.creating_a_board)?matchit.devcards.creating_a_board.cljs$lang$test:null)]));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"matchit.devcards","matchit.devcards",-1078331193),new cljs.core.Keyword(null,"revealing-a-tile","revealing-a-tile",1820042137)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"revealing-a-tile",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),devcards.core.test_card.call(null,(function (){
return devcards.core.test_doc.call(null,"Revealing a tile should set `:revealed? true`.");
}),(function (){
var new_board = matchit.core.board.call(null,(2));
var reveal_tile_id = (1);
var board_with_reveal = matchit.core.reveal.call(null,reveal_tile_id,new_board);
var tile = cljs.core.first.call(null,cljs.core.filter.call(null,((function (new_board,reveal_tile_id,board_with_reveal){
return (function (p1__34536_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__34536_SHARP_),reveal_tile_id);
});})(new_board,reveal_tile_id,board_with_reveal))
,board_with_reveal));
try{var value__32994__auto__ = new cljs.core.Keyword(null,"revealed?","revealed?",726959164).cljs$core$IFn$_invoke$arity$1(tile);
if(cljs.core.truth_(value__32994__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Keyword(null,"revealed?","revealed?",726959164),new cljs.core.Symbol(null,"tile","tile",-1896302903,null)),new cljs.core.Keyword(null,"actual","actual",107306363),value__32994__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Keyword(null,"revealed?","revealed?",726959164),new cljs.core.Symbol(null,"tile","tile",-1896302903,null)),new cljs.core.Keyword(null,"actual","actual",107306363),value__32994__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return value__32994__auto__;
}catch (e34537){var t__33029__auto__ = e34537;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Keyword(null,"revealed?","revealed?",726959164),new cljs.core.Symbol(null,"tile","tile",-1896302903,null)),new cljs.core.Keyword(null,"actual","actual",107306363),t__33029__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}})),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));

matchit.devcards.revealing_a_tile = (function matchit$devcards$revealing_a_tile(){
return cljs.test.test_var.call(null,matchit$devcards$revealing_a_tile.cljs$lang$var);
});
matchit.devcards.revealing_a_tile.cljs$lang$test = (function (){

var new_board = matchit.core.board.call(null,(2));
var reveal_tile_id = (1);
var board_with_reveal = matchit.core.reveal.call(null,reveal_tile_id,new_board);
var tile = cljs.core.first.call(null,cljs.core.filter.call(null,((function (new_board,reveal_tile_id,board_with_reveal){
return (function (p1__34536_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__34536_SHARP_),reveal_tile_id);
});})(new_board,reveal_tile_id,board_with_reveal))
,board_with_reveal));
try{var value__32994__auto__ = new cljs.core.Keyword(null,"revealed?","revealed?",726959164).cljs$core$IFn$_invoke$arity$1(tile);
if(cljs.core.truth_(value__32994__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Keyword(null,"revealed?","revealed?",726959164),new cljs.core.Symbol(null,"tile","tile",-1896302903,null)),new cljs.core.Keyword(null,"actual","actual",107306363),value__32994__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Keyword(null,"revealed?","revealed?",726959164),new cljs.core.Symbol(null,"tile","tile",-1896302903,null)),new cljs.core.Keyword(null,"actual","actual",107306363),value__32994__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return value__32994__auto__;
}catch (e34538){var t__33029__auto__ = e34538;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Keyword(null,"revealed?","revealed?",726959164),new cljs.core.Symbol(null,"tile","tile",-1896302903,null)),new cljs.core.Keyword(null,"actual","actual",107306363),t__33029__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});

matchit.devcards.revealing_a_tile.cljs$lang$var = new cljs.core.Var(function(){return matchit.devcards.revealing_a_tile;},new cljs.core.Symbol("matchit.devcards","revealing-a-tile","matchit.devcards/revealing-a-tile",1954756308,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[cljs.core.with_meta(new cljs.core.Symbol(null,"matchit.devcards","matchit.devcards",562200334,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691),true], null)),new cljs.core.Symbol(null,"revealing-a-tile","revealing-a-tile",-834393632,null),"/d/code/personal/matchitmon/src/matchit/devcards.cljs",26,1,60,60,cljs.core.List.EMPTY,null,(cljs.core.truth_(matchit.devcards.revealing_a_tile)?matchit.devcards.revealing_a_tile.cljs$lang$test:null)]));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"matchit.devcards","matchit.devcards",-1078331193),new cljs.core.Keyword(null,"hiding-a-tile","hiding-a-tile",341546454)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"hiding-a-tile",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),devcards.core.test_card.call(null,(function (){
return devcards.core.test_doc.call(null,"Hiding a tile should set `:revealed? false`.");
}),(function (){
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"Hiding a tile when no others with the same face are revealed.");

try{var new_board = matchit.core.board.call(null,(2));
var reveal_tile_id = (1);
var board_with_reveal = matchit.core.reveal.call(null,reveal_tile_id,new_board);
var board_with_hide = matchit.core.hide.call(null,reveal_tile_id,board_with_reveal);
var tile = cljs.core.first.call(null,cljs.core.filter.call(null,((function (new_board,reveal_tile_id,board_with_reveal,board_with_hide){
return (function (p1__34539_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__34539_SHARP_),reveal_tile_id);
});})(new_board,reveal_tile_id,board_with_reveal,board_with_hide))
,board_with_hide));
try{var values__32991__auto__ = (function (){var x__25624__auto__ = new cljs.core.Keyword(null,"revealed?","revealed?",726959164).cljs$core$IFn$_invoke$arity$1(tile);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25624__auto__);
})();
var result__32992__auto__ = cljs.core.apply.call(null,cljs.core.not,values__32991__auto__);
if(cljs.core.truth_(result__32992__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Keyword(null,"revealed?","revealed?",726959164),new cljs.core.Symbol(null,"tile","tile",-1896302903,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core.not,values__32991__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Keyword(null,"revealed?","revealed?",726959164),new cljs.core.Symbol(null,"tile","tile",-1896302903,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__25624__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"not","not",1044554643,null),values__32991__auto__);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25624__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__32992__auto__;
}catch (e34540){var t__33029__auto__ = e34540;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Keyword(null,"revealed?","revealed?",726959164),new cljs.core.Symbol(null,"tile","tile",-1896302903,null))),new cljs.core.Keyword(null,"actual","actual",107306363),t__33029__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}}finally {cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}})),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));

matchit.devcards.hiding_a_tile = (function matchit$devcards$hiding_a_tile(){
return cljs.test.test_var.call(null,matchit$devcards$hiding_a_tile.cljs$lang$var);
});
matchit.devcards.hiding_a_tile.cljs$lang$test = (function (){

cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"Hiding a tile when no others with the same face are revealed.");

try{var new_board = matchit.core.board.call(null,(2));
var reveal_tile_id = (1);
var board_with_reveal = matchit.core.reveal.call(null,reveal_tile_id,new_board);
var board_with_hide = matchit.core.hide.call(null,reveal_tile_id,board_with_reveal);
var tile = cljs.core.first.call(null,cljs.core.filter.call(null,((function (new_board,reveal_tile_id,board_with_reveal,board_with_hide){
return (function (p1__34539_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__34539_SHARP_),reveal_tile_id);
});})(new_board,reveal_tile_id,board_with_reveal,board_with_hide))
,board_with_hide));
try{var values__32991__auto__ = (function (){var x__25624__auto__ = new cljs.core.Keyword(null,"revealed?","revealed?",726959164).cljs$core$IFn$_invoke$arity$1(tile);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25624__auto__);
})();
var result__32992__auto__ = cljs.core.apply.call(null,cljs.core.not,values__32991__auto__);
if(cljs.core.truth_(result__32992__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Keyword(null,"revealed?","revealed?",726959164),new cljs.core.Symbol(null,"tile","tile",-1896302903,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core.not,values__32991__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Keyword(null,"revealed?","revealed?",726959164),new cljs.core.Symbol(null,"tile","tile",-1896302903,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__25624__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"not","not",1044554643,null),values__32991__auto__);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25624__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__32992__auto__;
}catch (e34541){var t__33029__auto__ = e34541;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Keyword(null,"revealed?","revealed?",726959164),new cljs.core.Symbol(null,"tile","tile",-1896302903,null))),new cljs.core.Keyword(null,"actual","actual",107306363),t__33029__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}}finally {cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}});

matchit.devcards.hiding_a_tile.cljs$lang$var = new cljs.core.Var(function(){return matchit.devcards.hiding_a_tile;},new cljs.core.Symbol("matchit.devcards","hiding-a-tile","matchit.devcards/hiding-a-tile",-34002175,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[cljs.core.with_meta(new cljs.core.Symbol(null,"matchit.devcards","matchit.devcards",562200334,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691),true], null)),new cljs.core.Symbol(null,"hiding-a-tile","hiding-a-tile",1982077981,null),"/d/code/personal/matchitmon/src/matchit/devcards.cljs",23,1,68,68,cljs.core.List.EMPTY,null,(cljs.core.truth_(matchit.devcards.hiding_a_tile)?matchit.devcards.hiding_a_tile.cljs$lang$test:null)]));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"matchit.devcards","matchit.devcards",-1078331193),new cljs.core.Keyword(null,"hiding-a-tile-with-related-reveals","hiding-a-tile-with-related-reveals",-887836886)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"hiding-a-tile-with-related-reveals",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),devcards.core.test_card.call(null,(function (){
return devcards.core.test_doc.call(null,"Hiding a tile should leave `:revealed? true`.");
}),(function (){
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"Hiding a tile when all others with the same face are revealed.");

try{var new_board = matchit.core.board.call(null,(2));
var same_face_tiles = cljs.core.map.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.filter.call(null,((function (new_board){
return (function (p1__34542_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"face","face",-1356480717).cljs$core$IFn$_invoke$arity$1(p1__34542_SHARP_),new cljs.core.Keyword(null,"pikachu","pikachu",-894755128));
});})(new_board))
,new_board));
var board_with_reveals = matchit.core.reveal.call(null,cljs.core.first.call(null,same_face_tiles),new_board);
var board_with_reveals__$1 = matchit.core.reveal.call(null,cljs.core.last.call(null,same_face_tiles),board_with_reveals);
var board_with_hide = matchit.core.hide.call(null,cljs.core.last.call(null,same_face_tiles),board_with_reveals__$1);
var tile = cljs.core.first.call(null,cljs.core.filter.call(null,((function (new_board,same_face_tiles,board_with_reveals,board_with_reveals__$1,board_with_hide){
return (function (p1__34543_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__34543_SHARP_),cljs.core.last.call(null,same_face_tiles));
});})(new_board,same_face_tiles,board_with_reveals,board_with_reveals__$1,board_with_hide))
,board_with_hide));
try{var value__32994__auto__ = new cljs.core.Keyword(null,"revealed?","revealed?",726959164).cljs$core$IFn$_invoke$arity$1(tile);
if(cljs.core.truth_(value__32994__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Keyword(null,"revealed?","revealed?",726959164),new cljs.core.Symbol(null,"tile","tile",-1896302903,null)),new cljs.core.Keyword(null,"actual","actual",107306363),value__32994__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Keyword(null,"revealed?","revealed?",726959164),new cljs.core.Symbol(null,"tile","tile",-1896302903,null)),new cljs.core.Keyword(null,"actual","actual",107306363),value__32994__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return value__32994__auto__;
}catch (e34544){var t__33029__auto__ = e34544;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Keyword(null,"revealed?","revealed?",726959164),new cljs.core.Symbol(null,"tile","tile",-1896302903,null)),new cljs.core.Keyword(null,"actual","actual",107306363),t__33029__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}}finally {cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}})),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));

matchit.devcards.hiding_a_tile_with_related_reveals = (function matchit$devcards$hiding_a_tile_with_related_reveals(){
return cljs.test.test_var.call(null,matchit$devcards$hiding_a_tile_with_related_reveals.cljs$lang$var);
});
matchit.devcards.hiding_a_tile_with_related_reveals.cljs$lang$test = (function (){

cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"Hiding a tile when all others with the same face are revealed.");

try{var new_board = matchit.core.board.call(null,(2));
var same_face_tiles = cljs.core.map.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.filter.call(null,((function (new_board){
return (function (p1__34542_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"face","face",-1356480717).cljs$core$IFn$_invoke$arity$1(p1__34542_SHARP_),new cljs.core.Keyword(null,"pikachu","pikachu",-894755128));
});})(new_board))
,new_board));
var board_with_reveals = matchit.core.reveal.call(null,cljs.core.first.call(null,same_face_tiles),new_board);
var board_with_reveals__$1 = matchit.core.reveal.call(null,cljs.core.last.call(null,same_face_tiles),board_with_reveals);
var board_with_hide = matchit.core.hide.call(null,cljs.core.last.call(null,same_face_tiles),board_with_reveals__$1);
var tile = cljs.core.first.call(null,cljs.core.filter.call(null,((function (new_board,same_face_tiles,board_with_reveals,board_with_reveals__$1,board_with_hide){
return (function (p1__34543_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__34543_SHARP_),cljs.core.last.call(null,same_face_tiles));
});})(new_board,same_face_tiles,board_with_reveals,board_with_reveals__$1,board_with_hide))
,board_with_hide));
try{var value__32994__auto__ = new cljs.core.Keyword(null,"revealed?","revealed?",726959164).cljs$core$IFn$_invoke$arity$1(tile);
if(cljs.core.truth_(value__32994__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Keyword(null,"revealed?","revealed?",726959164),new cljs.core.Symbol(null,"tile","tile",-1896302903,null)),new cljs.core.Keyword(null,"actual","actual",107306363),value__32994__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Keyword(null,"revealed?","revealed?",726959164),new cljs.core.Symbol(null,"tile","tile",-1896302903,null)),new cljs.core.Keyword(null,"actual","actual",107306363),value__32994__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return value__32994__auto__;
}catch (e34545){var t__33029__auto__ = e34545;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Keyword(null,"revealed?","revealed?",726959164),new cljs.core.Symbol(null,"tile","tile",-1896302903,null)),new cljs.core.Keyword(null,"actual","actual",107306363),t__33029__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}}finally {cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}});

matchit.devcards.hiding_a_tile_with_related_reveals.cljs$lang$var = new cljs.core.Var(function(){return matchit.devcards.hiding_a_tile_with_related_reveals;},new cljs.core.Symbol("matchit.devcards","hiding-a-tile-with-related-reveals","matchit.devcards/hiding-a-tile-with-related-reveals",-1164039571,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[cljs.core.with_meta(new cljs.core.Symbol(null,"matchit.devcards","matchit.devcards",562200334,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691),true], null)),new cljs.core.Symbol(null,"hiding-a-tile-with-related-reveals","hiding-a-tile-with-related-reveals",752694641,null),"/d/code/personal/matchitmon/src/matchit/devcards.cljs",44,1,78,78,cljs.core.List.EMPTY,null,(cljs.core.truth_(matchit.devcards.hiding_a_tile_with_related_reveals)?matchit.devcards.hiding_a_tile_with_related_reveals.cljs$lang$test:null)]));

//# sourceMappingURL=devcards.js.map?rel=1476131800303