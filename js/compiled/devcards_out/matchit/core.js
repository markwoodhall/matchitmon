// Compiled by ClojureScript 1.9.229 {}
goog.provide('matchit.core');
goog.require('cljs.core');
goog.require('reagent.core');
cljs.core.enable_console_print_BANG_.call(null);
matchit.core.__GT_row = (function matchit$core$__GT_row(row,tiles){
return cljs.core.map_indexed.call(null,(function (p1__34279_SHARP_,p2__34278_SHARP_){
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,p2__34278_SHARP_,new cljs.core.Keyword(null,"x","x",2099068185),p1__34279_SHARP_),new cljs.core.Keyword(null,"y","y",-1757859776),row);
}),tiles);
});
matchit.core.__GT_id = (function matchit$core$__GT_id(index,tile){
return cljs.core.assoc.call(null,tile,new cljs.core.Keyword(null,"id","id",-1388402092),index);
});
matchit.core.board = (function matchit$core$board(row_count){
var tiles = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"face","face",-1356480717),new cljs.core.Keyword(null,"pikachu","pikachu",-894755128),new cljs.core.Keyword(null,"image","image",-58725096),"img/pikachu.png"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"face","face",-1356480717),new cljs.core.Keyword(null,"charmander","charmander",587552886),new cljs.core.Keyword(null,"image","image",-58725096),"img/charmander.png"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"face","face",-1356480717),new cljs.core.Keyword(null,"squirtle","squirtle",1575599776),new cljs.core.Keyword(null,"image","image",-58725096),"img/squirtle.png"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"face","face",-1356480717),new cljs.core.Keyword(null,"abra","abra",1601601579),new cljs.core.Keyword(null,"image","image",-58725096),"img/abra.png"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"face","face",-1356480717),new cljs.core.Keyword(null,"bulbasaur","bulbasaur",371203505),new cljs.core.Keyword(null,"image","image",-58725096),"img/bulbasaur.png"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"face","face",-1356480717),new cljs.core.Keyword(null,"piplup","piplup",-444562908),new cljs.core.Keyword(null,"image","image",-58725096),"img/piplup.png"], null)], null);
var rows = cljs.core.repeat.call(null,row_count,tiles);
return cljs.core.map_indexed.call(null,matchit.core.__GT_id,cljs.core.flatten.call(null,cljs.core.map.call(null,((function (tiles,rows){
return (function (p1__34280_SHARP_){
return matchit.core.__GT_row.call(null,p1__34280_SHARP_,cljs.core.shuffle.call(null,cljs.core.nth.call(null,rows,p1__34280_SHARP_)));
});})(tiles,rows))
,cljs.core.range.call(null,(0),row_count))));
});
if(typeof matchit.core.app_state !== 'undefined'){
} else {
matchit.core.app_state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"board","board",-1907017633),matchit.core.board.call(null,(4)),new cljs.core.Keyword(null,"width","width",-384071477),(900),new cljs.core.Keyword(null,"height","height",1025178622),(600)], null));
}
matchit.core.reveal = (function matchit$core$reveal(var_args){
var args34283 = [];
var len__25865__auto___34286 = arguments.length;
var i__25866__auto___34287 = (0);
while(true){
if((i__25866__auto___34287 < len__25865__auto___34286)){
args34283.push((arguments[i__25866__auto___34287]));

var G__34288 = (i__25866__auto___34287 + (1));
i__25866__auto___34287 = G__34288;
continue;
} else {
}
break;
}

var G__34285 = args34283.length;
switch (G__34285) {
case 1:
return matchit.core.reveal.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return matchit.core.reveal.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34283.length)].join('')));

}
});

matchit.core.reveal.cljs$core$IFn$_invoke$arity$1 = (function (board){
return cljs.core.map.call(null,(function (p1__34281_SHARP_){
return cljs.core.assoc.call(null,p1__34281_SHARP_,new cljs.core.Keyword(null,"revealed?","revealed?",726959164),true);
}),board);
});

matchit.core.reveal.cljs$core$IFn$_invoke$arity$2 = (function (id,board){
var by_id = (function (p1__34282_SHARP_){
return cljs.core._EQ_.call(null,id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__34282_SHARP_));
});
var tile = cljs.core.first.call(null,cljs.core.filter.call(null,by_id,board));
var removed = cljs.core.remove.call(null,by_id,board);
return cljs.core.cons.call(null,cljs.core.assoc.call(null,tile,new cljs.core.Keyword(null,"revealed?","revealed?",726959164),true),removed);
});

matchit.core.reveal.cljs$lang$maxFixedArity = 2;

matchit.core.hide = (function matchit$core$hide(id,board){
var by_id = (function (p1__34290_SHARP_){
return cljs.core._EQ_.call(null,id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__34290_SHARP_));
});
var tile = cljs.core.first.call(null,cljs.core.filter.call(null,by_id,board));
var not_revealed_by_face = ((function (by_id,tile){
return (function (p1__34291_SHARP_){
return (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"face","face",-1356480717).cljs$core$IFn$_invoke$arity$1(tile),new cljs.core.Keyword(null,"face","face",-1356480717).cljs$core$IFn$_invoke$arity$1(p1__34291_SHARP_))) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"revealed?","revealed?",726959164).cljs$core$IFn$_invoke$arity$1(p1__34291_SHARP_)));
});})(by_id,tile))
;
var removed = cljs.core.remove.call(null,by_id,board);
var all_revealed_QMARK_ = cljs.core.empty_QMARK_.call(null,cljs.core.filter.call(null,not_revealed_by_face,removed));
return cljs.core.cons.call(null,cljs.core.assoc.call(null,tile,new cljs.core.Keyword(null,"revealed?","revealed?",726959164),all_revealed_QMARK_),removed);
});
matchit.core.hidden = (function matchit$core$hidden(app,p__34292){
var map__34295 = p__34292;
var map__34295__$1 = ((((!((map__34295 == null)))?((((map__34295.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34295.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34295):map__34295);
var x = cljs.core.get.call(null,map__34295__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__34295__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var id = cljs.core.get.call(null,map__34295__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var disable_click_QMARK_ = cljs.core.get.call(null,map__34295__$1,new cljs.core.Keyword(null,"disable-click?","disable-click?",-1186799869));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"fill","fill",883462889),"grey",new cljs.core.Keyword(null,"width","width",-384071477),0.9,new cljs.core.Keyword(null,"height","height",1025178622),0.9,new cljs.core.Keyword(null,"key","key",-1516042587),id,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((cljs.core.not.call(null,disable_click_QMARK_))?((function (map__34295,map__34295__$1,x,y,id,disable_click_QMARK_){
return (function matchit$core$hidden_$_hidden_click(e){
cljs.core.swap_BANG_.call(null,app,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633)], null),cljs.core.partial.call(null,matchit.core.reveal,id));

return setInterval(((function (map__34295,map__34295__$1,x,y,id,disable_click_QMARK_){
return (function (){
return cljs.core.swap_BANG_.call(null,app,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633)], null),cljs.core.partial.call(null,matchit.core.hide,id));
});})(map__34295,map__34295__$1,x,y,id,disable_click_QMARK_))
,(6000));
});})(map__34295,map__34295__$1,x,y,id,disable_click_QMARK_))
:((function (map__34295,map__34295__$1,x,y,id,disable_click_QMARK_){
return (function (){
return cljs.core.List.EMPTY;
});})(map__34295,map__34295__$1,x,y,id,disable_click_QMARK_))
)], null)], null);
});
matchit.core.visible = (function matchit$core$visible(p__34297){
var map__34300 = p__34297;
var map__34300__$1 = ((((!((map__34300 == null)))?((((map__34300.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34300.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34300):map__34300);
var x = cljs.core.get.call(null,map__34300__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__34300__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var id = cljs.core.get.call(null,map__34300__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var image = cljs.core.get.call(null,map__34300__$1,new cljs.core.Keyword(null,"image","image",-58725096));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"image","image",-58725096),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"href","href",-793805698),image,new cljs.core.Keyword(null,"width","width",-384071477),0.9,new cljs.core.Keyword(null,"height","height",1025178622),0.9,new cljs.core.Keyword(null,"key","key",-1516042587),id,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y], null)], null);
});
matchit.core.view_box = (function matchit$core$view_box(width,height,cols,rows){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"view-box","view-box",-1792199155),[cljs.core.str("0 0 "),cljs.core.str(cols),cljs.core.str(" "),cljs.core.str(rows)].join(''),new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"height","height",1025178622),height], null)], null);
});
matchit.core.matchitmon = (function matchit$core$matchitmon(app){
var map__34308 = cljs.core.deref.call(null,app);
var map__34308__$1 = ((((!((map__34308 == null)))?((((map__34308.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34308.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34308):map__34308);
var height = cljs.core.get.call(null,map__34308__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var width = cljs.core.get.call(null,map__34308__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var board = cljs.core.get.call(null,map__34308__$1,new cljs.core.Keyword(null,"board","board",-1907017633));
return cljs.core.into.call(null,matchit.core.view_box.call(null,width,height,(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.max_key,new cljs.core.Keyword(null,"x","x",2099068185),board)) + (1)),(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.max_key,new cljs.core.Keyword(null,"y","y",-1757859776),board)) + (1))),(function (){var iter__25570__auto__ = ((function (map__34308,map__34308__$1,height,width,board){
return (function matchit$core$matchitmon_$_iter__34310(s__34311){
return (new cljs.core.LazySeq(null,((function (map__34308,map__34308__$1,height,width,board){
return (function (){
var s__34311__$1 = s__34311;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__34311__$1);
if(temp__4657__auto__){
var s__34311__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__34311__$2)){
var c__25568__auto__ = cljs.core.chunk_first.call(null,s__34311__$2);
var size__25569__auto__ = cljs.core.count.call(null,c__25568__auto__);
var b__34313 = cljs.core.chunk_buffer.call(null,size__25569__auto__);
if((function (){var i__34312 = (0);
while(true){
if((i__34312 < size__25569__auto__)){
var tile = cljs.core._nth.call(null,c__25568__auto__,i__34312);
cljs.core.chunk_append.call(null,b__34313,(cljs.core.truth_(new cljs.core.Keyword(null,"revealed?","revealed?",726959164).cljs$core$IFn$_invoke$arity$1(tile))?matchit.core.visible.call(null,tile):matchit.core.hidden.call(null,app,tile)));

var G__34314 = (i__34312 + (1));
i__34312 = G__34314;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34313),matchit$core$matchitmon_$_iter__34310.call(null,cljs.core.chunk_rest.call(null,s__34311__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34313),null);
}
} else {
var tile = cljs.core.first.call(null,s__34311__$2);
return cljs.core.cons.call(null,(cljs.core.truth_(new cljs.core.Keyword(null,"revealed?","revealed?",726959164).cljs$core$IFn$_invoke$arity$1(tile))?matchit.core.visible.call(null,tile):matchit.core.hidden.call(null,app,tile)),matchit$core$matchitmon_$_iter__34310.call(null,cljs.core.rest.call(null,s__34311__$2)));
}
} else {
return null;
}
break;
}
});})(map__34308,map__34308__$1,height,width,board))
,null,null));
});})(map__34308,map__34308__$1,height,width,board))
;
return iter__25570__auto__.call(null,board);
})());
});
reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [matchit.core.matchitmon,matchit.core.app_state], null),document.getElementById("app"));
matchit.core.on_js_reload = (function matchit$core$on_js_reload(){
return null;
});

//# sourceMappingURL=core.js.map?rel=1476131800033