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
if(typeof matchit.devcards.t_matchit$devcards96333 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
matchit.devcards.t_matchit$devcards96333 = (function (meta96334){
this.meta96334 = meta96334;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
matchit.devcards.t_matchit$devcards96333.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_96335,meta96334__$1){
var self__ = this;
var _96335__$1 = this;
return (new matchit.devcards.t_matchit$devcards96333(meta96334__$1));
});

matchit.devcards.t_matchit$devcards96333.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_96335){
var self__ = this;
var _96335__$1 = this;
return self__.meta96334;
});

matchit.devcards.t_matchit$devcards96333.prototype.devcards$core$IDevcardOptions$ = true;

matchit.devcards.t_matchit$devcards96333.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__60975__auto__,devcard_opts__60976__auto__){
var self__ = this;
var this__60975__auto____$1 = this;
return cljs.core.assoc.call(null,devcard_opts__60976__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__60994__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [matchit.core.matchitmon,matchit.devcards.default_board], null);
if(cljs.core.fn_QMARK_.call(null,v__60994__auto__)){
return ((function (v__60994__auto__,this__60975__auto____$1){
return (function (data_atom__60995__auto__,owner__60996__auto__){
return reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__60994__auto__,data_atom__60995__auto__,owner__60996__auto__], null));
});
;})(v__60994__auto__,this__60975__auto____$1))
} else {
return reagent.core.as_element.call(null,v__60994__auto__);
}
})(),new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map.call(null,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__60976__auto__))));
});

matchit.devcards.t_matchit$devcards96333.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta96334","meta96334",-2107881234,null)], null);
});

matchit.devcards.t_matchit$devcards96333.cljs$lang$type = true;

matchit.devcards.t_matchit$devcards96333.cljs$lang$ctorStr = "matchit.devcards/t_matchit$devcards96333";

matchit.devcards.t_matchit$devcards96333.cljs$lang$ctorPrWriter = (function (this__48153__auto__,writer__48154__auto__,opt__48155__auto__){
return cljs.core._write.call(null,writer__48154__auto__,"matchit.devcards/t_matchit$devcards96333");
});

matchit.devcards.__GT_t_matchit$devcards96333 = (function matchit$devcards$__GT_t_matchit$devcards96333(meta96334){
return (new matchit.devcards.t_matchit$devcards96333(meta96334));
});

}

return (new matchit.devcards.t_matchit$devcards96333(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),matchit.devcards.default_board,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"history","history",-247395220),true,new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
if(typeof matchit.devcards.default_board_tile_revealed !== 'undefined'){
} else {
matchit.devcards.default_board_tile_revealed = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"board","board",-1907017633),matchit.core.reveal.call(null,(1),matchit.core.board.call(null,(4))),new cljs.core.Keyword(null,"height","height",1025178622),(600),new cljs.core.Keyword(null,"width","width",-384071477),(900)], null));
}
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"matchit.devcards","matchit.devcards",-1078331193),new cljs.core.Keyword(null,"default-matchitmon-tile-revealed","default-matchitmon-tile-revealed",-1157566807)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"default-matchitmon-tile-revealed",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"A default mathictmon board with a tile revealed.",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if(typeof matchit.devcards.t_matchit$devcards96336 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
matchit.devcards.t_matchit$devcards96336 = (function (meta96337){
this.meta96337 = meta96337;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
matchit.devcards.t_matchit$devcards96336.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_96338,meta96337__$1){
var self__ = this;
var _96338__$1 = this;
return (new matchit.devcards.t_matchit$devcards96336(meta96337__$1));
});

matchit.devcards.t_matchit$devcards96336.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_96338){
var self__ = this;
var _96338__$1 = this;
return self__.meta96337;
});

matchit.devcards.t_matchit$devcards96336.prototype.devcards$core$IDevcardOptions$ = true;

matchit.devcards.t_matchit$devcards96336.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__60975__auto__,devcard_opts__60976__auto__){
var self__ = this;
var this__60975__auto____$1 = this;
return cljs.core.assoc.call(null,devcard_opts__60976__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__60994__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [matchit.core.matchitmon,matchit.devcards.default_board_tile_revealed], null);
if(cljs.core.fn_QMARK_.call(null,v__60994__auto__)){
return ((function (v__60994__auto__,this__60975__auto____$1){
return (function (data_atom__60995__auto__,owner__60996__auto__){
return reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__60994__auto__,data_atom__60995__auto__,owner__60996__auto__], null));
});
;})(v__60994__auto__,this__60975__auto____$1))
} else {
return reagent.core.as_element.call(null,v__60994__auto__);
}
})(),new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map.call(null,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__60976__auto__))));
});

matchit.devcards.t_matchit$devcards96336.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta96337","meta96337",636766961,null)], null);
});

matchit.devcards.t_matchit$devcards96336.cljs$lang$type = true;

matchit.devcards.t_matchit$devcards96336.cljs$lang$ctorStr = "matchit.devcards/t_matchit$devcards96336";

matchit.devcards.t_matchit$devcards96336.cljs$lang$ctorPrWriter = (function (this__48153__auto__,writer__48154__auto__,opt__48155__auto__){
return cljs.core._write.call(null,writer__48154__auto__,"matchit.devcards/t_matchit$devcards96336");
});

matchit.devcards.__GT_t_matchit$devcards96336 = (function matchit$devcards$__GT_t_matchit$devcards96336(meta96337){
return (new matchit.devcards.t_matchit$devcards96336(meta96337));
});

}

return (new matchit.devcards.t_matchit$devcards96336(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),matchit.devcards.default_board_tile_revealed,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"history","history",-247395220),true,new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
if(typeof matchit.devcards.default_board_all_tiles_revealed !== 'undefined'){
} else {
matchit.devcards.default_board_all_tiles_revealed = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"board","board",-1907017633),matchit.core.reveal.call(null,matchit.core.board.call(null,(4))),new cljs.core.Keyword(null,"height","height",1025178622),(600),new cljs.core.Keyword(null,"width","width",-384071477),(900)], null));
}
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"matchit.devcards","matchit.devcards",-1078331193),new cljs.core.Keyword(null,"default-matchitmon-all-tiles-revealed","default-matchitmon-all-tiles-revealed",1956587102)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"default-matchitmon-all-tiles-revealed",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"A default mathictmon board with all tiles revealed.",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if(typeof matchit.devcards.t_matchit$devcards96339 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
matchit.devcards.t_matchit$devcards96339 = (function (meta96340){
this.meta96340 = meta96340;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
matchit.devcards.t_matchit$devcards96339.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_96341,meta96340__$1){
var self__ = this;
var _96341__$1 = this;
return (new matchit.devcards.t_matchit$devcards96339(meta96340__$1));
});

matchit.devcards.t_matchit$devcards96339.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_96341){
var self__ = this;
var _96341__$1 = this;
return self__.meta96340;
});

matchit.devcards.t_matchit$devcards96339.prototype.devcards$core$IDevcardOptions$ = true;

matchit.devcards.t_matchit$devcards96339.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__60975__auto__,devcard_opts__60976__auto__){
var self__ = this;
var this__60975__auto____$1 = this;
return cljs.core.assoc.call(null,devcard_opts__60976__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__60994__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [matchit.core.matchitmon,matchit.devcards.default_board_all_tiles_revealed], null);
if(cljs.core.fn_QMARK_.call(null,v__60994__auto__)){
return ((function (v__60994__auto__,this__60975__auto____$1){
return (function (data_atom__60995__auto__,owner__60996__auto__){
return reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__60994__auto__,data_atom__60995__auto__,owner__60996__auto__], null));
});
;})(v__60994__auto__,this__60975__auto____$1))
} else {
return reagent.core.as_element.call(null,v__60994__auto__);
}
})(),new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map.call(null,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__60976__auto__))));
});

matchit.devcards.t_matchit$devcards96339.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta96340","meta96340",-528671824,null)], null);
});

matchit.devcards.t_matchit$devcards96339.cljs$lang$type = true;

matchit.devcards.t_matchit$devcards96339.cljs$lang$ctorStr = "matchit.devcards/t_matchit$devcards96339";

matchit.devcards.t_matchit$devcards96339.cljs$lang$ctorPrWriter = (function (this__48153__auto__,writer__48154__auto__,opt__48155__auto__){
return cljs.core._write.call(null,writer__48154__auto__,"matchit.devcards/t_matchit$devcards96339");
});

matchit.devcards.__GT_t_matchit$devcards96339 = (function matchit$devcards$__GT_t_matchit$devcards96339(meta96340){
return (new matchit.devcards.t_matchit$devcards96339(meta96340));
});

}

return (new matchit.devcards.t_matchit$devcards96339(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),matchit.devcards.default_board_all_tiles_revealed,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"history","history",-247395220),true,new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
if(typeof matchit.devcards.large_board !== 'undefined'){
} else {
matchit.devcards.large_board = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"board","board",-1907017633),matchit.core.board.call(null,((10) * (2))),new cljs.core.Keyword(null,"height","height",1025178622),(600),new cljs.core.Keyword(null,"width","width",-384071477),(900)], null));
}
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"matchit.devcards","matchit.devcards",-1078331193),new cljs.core.Keyword(null,"large-matchitmon","large-matchitmon",-1976174169)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"large-matchitmon",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"A large matchitmon board",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if(typeof matchit.devcards.t_matchit$devcards96342 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
matchit.devcards.t_matchit$devcards96342 = (function (meta96343){
this.meta96343 = meta96343;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
matchit.devcards.t_matchit$devcards96342.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_96344,meta96343__$1){
var self__ = this;
var _96344__$1 = this;
return (new matchit.devcards.t_matchit$devcards96342(meta96343__$1));
});

matchit.devcards.t_matchit$devcards96342.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_96344){
var self__ = this;
var _96344__$1 = this;
return self__.meta96343;
});

matchit.devcards.t_matchit$devcards96342.prototype.devcards$core$IDevcardOptions$ = true;

matchit.devcards.t_matchit$devcards96342.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__60975__auto__,devcard_opts__60976__auto__){
var self__ = this;
var this__60975__auto____$1 = this;
return cljs.core.assoc.call(null,devcard_opts__60976__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__60994__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [matchit.core.matchitmon,matchit.devcards.large_board], null);
if(cljs.core.fn_QMARK_.call(null,v__60994__auto__)){
return ((function (v__60994__auto__,this__60975__auto____$1){
return (function (data_atom__60995__auto__,owner__60996__auto__){
return reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__60994__auto__,data_atom__60995__auto__,owner__60996__auto__], null));
});
;})(v__60994__auto__,this__60975__auto____$1))
} else {
return reagent.core.as_element.call(null,v__60994__auto__);
}
})(),new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map.call(null,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__60976__auto__))));
});

matchit.devcards.t_matchit$devcards96342.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta96343","meta96343",431927673,null)], null);
});

matchit.devcards.t_matchit$devcards96342.cljs$lang$type = true;

matchit.devcards.t_matchit$devcards96342.cljs$lang$ctorStr = "matchit.devcards/t_matchit$devcards96342";

matchit.devcards.t_matchit$devcards96342.cljs$lang$ctorPrWriter = (function (this__48153__auto__,writer__48154__auto__,opt__48155__auto__){
return cljs.core._write.call(null,writer__48154__auto__,"matchit.devcards/t_matchit$devcards96342");
});

matchit.devcards.__GT_t_matchit$devcards96342 = (function matchit$devcards$__GT_t_matchit$devcards96342(meta96343){
return (new matchit.devcards.t_matchit$devcards96342(meta96343));
});

}

return (new matchit.devcards.t_matchit$devcards96342(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),matchit.devcards.large_board,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"history","history",-247395220),true,new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"matchit.devcards","matchit.devcards",-1078331193),new cljs.core.Keyword(null,"revealing-a-tile","revealing-a-tile",1820042137)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"revealing-a-tile",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),devcards.core.test_card.call(null,(function (){
var new_board = matchit.core.board.call(null,(2));
var reveal_tile_id = (1);
var board_with_reveal = matchit.core.reveal.call(null,reveal_tile_id,new_board);
var tile = cljs.core.first.call(null,cljs.core.filter.call(null,((function (new_board,reveal_tile_id,board_with_reveal){
return (function (p1__96345_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__96345_SHARP_),reveal_tile_id);
});})(new_board,reveal_tile_id,board_with_reveal))
,board_with_reveal));
try{var value__87351__auto__ = new cljs.core.Keyword(null,"revealed?","revealed?",726959164).cljs$core$IFn$_invoke$arity$1(tile);
if(cljs.core.truth_(value__87351__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Keyword(null,"revealed?","revealed?",726959164),new cljs.core.Symbol(null,"tile","tile",-1896302903,null)),new cljs.core.Keyword(null,"actual","actual",107306363),value__87351__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Keyword(null,"revealed?","revealed?",726959164),new cljs.core.Symbol(null,"tile","tile",-1896302903,null)),new cljs.core.Keyword(null,"actual","actual",107306363),value__87351__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return value__87351__auto__;
}catch (e96346){var t__87386__auto__ = e96346;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Keyword(null,"revealed?","revealed?",726959164),new cljs.core.Symbol(null,"tile","tile",-1896302903,null)),new cljs.core.Keyword(null,"actual","actual",107306363),t__87386__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
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
return (function (p1__96345_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__96345_SHARP_),reveal_tile_id);
});})(new_board,reveal_tile_id,board_with_reveal))
,board_with_reveal));
try{var value__87351__auto__ = new cljs.core.Keyword(null,"revealed?","revealed?",726959164).cljs$core$IFn$_invoke$arity$1(tile);
if(cljs.core.truth_(value__87351__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Keyword(null,"revealed?","revealed?",726959164),new cljs.core.Symbol(null,"tile","tile",-1896302903,null)),new cljs.core.Keyword(null,"actual","actual",107306363),value__87351__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Keyword(null,"revealed?","revealed?",726959164),new cljs.core.Symbol(null,"tile","tile",-1896302903,null)),new cljs.core.Keyword(null,"actual","actual",107306363),value__87351__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return value__87351__auto__;
}catch (e96347){var t__87386__auto__ = e96347;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Keyword(null,"revealed?","revealed?",726959164),new cljs.core.Symbol(null,"tile","tile",-1896302903,null)),new cljs.core.Keyword(null,"actual","actual",107306363),t__87386__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});

matchit.devcards.revealing_a_tile.cljs$lang$var = new cljs.core.Var(function(){return matchit.devcards.revealing_a_tile;},new cljs.core.Symbol("matchit.devcards","revealing-a-tile","matchit.devcards/revealing-a-tile",1954756308,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[cljs.core.with_meta(new cljs.core.Symbol(null,"matchit.devcards","matchit.devcards",562200334,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691),true], null)),new cljs.core.Symbol(null,"revealing-a-tile","revealing-a-tile",-834393632,null),"src/matchit/devcards.cljs",26,1,40,40,cljs.core.List.EMPTY,null,(cljs.core.truth_(matchit.devcards.revealing_a_tile)?matchit.devcards.revealing_a_tile.cljs$lang$test:null)]));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"matchit.devcards","matchit.devcards",-1078331193),new cljs.core.Keyword(null,"hiding-a-tile","hiding-a-tile",341546454)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"hiding-a-tile",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),devcards.core.test_card.call(null,(function (){
var new_board = matchit.core.board.call(null,(2));
var reveal_tile_id = (1);
var board_with_reveal = matchit.core.reveal.call(null,reveal_tile_id,new_board);
var board_with_hide = matchit.core.hide.call(null,reveal_tile_id,board_with_reveal);
var tile = cljs.core.first.call(null,cljs.core.filter.call(null,((function (new_board,reveal_tile_id,board_with_reveal,board_with_hide){
return (function (p1__96348_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__96348_SHARP_),reveal_tile_id);
});})(new_board,reveal_tile_id,board_with_reveal,board_with_hide))
,board_with_hide));
try{var values__87348__auto__ = (function (){var x__48381__auto__ = new cljs.core.Keyword(null,"revealed?","revealed?",726959164).cljs$core$IFn$_invoke$arity$1(tile);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__48381__auto__);
})();
var result__87349__auto__ = cljs.core.apply.call(null,cljs.core.not,values__87348__auto__);
if(cljs.core.truth_(result__87349__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Keyword(null,"revealed?","revealed?",726959164),new cljs.core.Symbol(null,"tile","tile",-1896302903,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core.not,values__87348__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Keyword(null,"revealed?","revealed?",726959164),new cljs.core.Symbol(null,"tile","tile",-1896302903,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__48381__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"not","not",1044554643,null),values__87348__auto__);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__48381__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__87349__auto__;
}catch (e96349){var t__87386__auto__ = e96349;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Keyword(null,"revealed?","revealed?",726959164),new cljs.core.Symbol(null,"tile","tile",-1896302903,null))),new cljs.core.Keyword(null,"actual","actual",107306363),t__87386__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}})),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));

matchit.devcards.hiding_a_tile = (function matchit$devcards$hiding_a_tile(){
return cljs.test.test_var.call(null,matchit$devcards$hiding_a_tile.cljs$lang$var);
});
matchit.devcards.hiding_a_tile.cljs$lang$test = (function (){
var new_board = matchit.core.board.call(null,(2));
var reveal_tile_id = (1);
var board_with_reveal = matchit.core.reveal.call(null,reveal_tile_id,new_board);
var board_with_hide = matchit.core.hide.call(null,reveal_tile_id,board_with_reveal);
var tile = cljs.core.first.call(null,cljs.core.filter.call(null,((function (new_board,reveal_tile_id,board_with_reveal,board_with_hide){
return (function (p1__96348_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__96348_SHARP_),reveal_tile_id);
});})(new_board,reveal_tile_id,board_with_reveal,board_with_hide))
,board_with_hide));
try{var values__87348__auto__ = (function (){var x__48381__auto__ = new cljs.core.Keyword(null,"revealed?","revealed?",726959164).cljs$core$IFn$_invoke$arity$1(tile);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__48381__auto__);
})();
var result__87349__auto__ = cljs.core.apply.call(null,cljs.core.not,values__87348__auto__);
if(cljs.core.truth_(result__87349__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Keyword(null,"revealed?","revealed?",726959164),new cljs.core.Symbol(null,"tile","tile",-1896302903,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core.not,values__87348__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Keyword(null,"revealed?","revealed?",726959164),new cljs.core.Symbol(null,"tile","tile",-1896302903,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__48381__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"not","not",1044554643,null),values__87348__auto__);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__48381__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__87349__auto__;
}catch (e96350){var t__87386__auto__ = e96350;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Keyword(null,"revealed?","revealed?",726959164),new cljs.core.Symbol(null,"tile","tile",-1896302903,null))),new cljs.core.Keyword(null,"actual","actual",107306363),t__87386__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});

matchit.devcards.hiding_a_tile.cljs$lang$var = new cljs.core.Var(function(){return matchit.devcards.hiding_a_tile;},new cljs.core.Symbol("matchit.devcards","hiding-a-tile","matchit.devcards/hiding-a-tile",-34002175,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[cljs.core.with_meta(new cljs.core.Symbol(null,"matchit.devcards","matchit.devcards",562200334,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691),true], null)),new cljs.core.Symbol(null,"hiding-a-tile","hiding-a-tile",1982077981,null),"src/matchit/devcards.cljs",23,1,47,47,cljs.core.List.EMPTY,null,(cljs.core.truth_(matchit.devcards.hiding_a_tile)?matchit.devcards.hiding_a_tile.cljs$lang$test:null)]));

//# sourceMappingURL=devcards.js.map?rel=1476048421054