// Compiled by ClojureScript 1.9.229 {}
goog.provide('matchit.core');
goog.require('cljs.core');
goog.require('reagent.core');
cljs.core.enable_console_print_BANG_.call(null);
matchit.core.__GT_row = (function matchit$core$__GT_row(row,tiles){
return cljs.core.map_indexed.call(null,(function (p1__96295_SHARP_,p2__96294_SHARP_){
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,p2__96294_SHARP_,new cljs.core.Keyword(null,"x","x",2099068185),p1__96295_SHARP_),new cljs.core.Keyword(null,"y","y",-1757859776),row);
}),tiles);
});
matchit.core.__GT_id = (function matchit$core$__GT_id(index,tile){
return cljs.core.assoc.call(null,tile,new cljs.core.Keyword(null,"id","id",-1388402092),index);
});
matchit.core.board = (function matchit$core$board(row_count){
var tiles = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"face","face",-1356480717),new cljs.core.Keyword(null,"pikachu","pikachu",-894755128),new cljs.core.Keyword(null,"image","image",-58725096),"img/pikachu.png"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"face","face",-1356480717),new cljs.core.Keyword(null,"charmander","charmander",587552886),new cljs.core.Keyword(null,"image","image",-58725096),"img/charmander.png"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"face","face",-1356480717),new cljs.core.Keyword(null,"squirtle","squirtle",1575599776),new cljs.core.Keyword(null,"image","image",-58725096),"img/squirtle.png"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"face","face",-1356480717),new cljs.core.Keyword(null,"abra","abra",1601601579),new cljs.core.Keyword(null,"image","image",-58725096),"img/abra.png"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"face","face",-1356480717),new cljs.core.Keyword(null,"bulbasaur","bulbasaur",371203505),new cljs.core.Keyword(null,"image","image",-58725096),"img/bulbasaur.png"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"face","face",-1356480717),new cljs.core.Keyword(null,"piplup","piplup",-444562908),new cljs.core.Keyword(null,"image","image",-58725096),"img/piplup.png"], null)], null);
var rows = cljs.core.repeat.call(null,row_count,tiles);
return cljs.core.map_indexed.call(null,matchit.core.__GT_id,cljs.core.flatten.call(null,cljs.core.map.call(null,((function (tiles,rows){
return (function (p1__96296_SHARP_){
return matchit.core.__GT_row.call(null,p1__96296_SHARP_,cljs.core.shuffle.call(null,cljs.core.nth.call(null,rows,p1__96296_SHARP_)));
});})(tiles,rows))
,cljs.core.range.call(null,(0),row_count))));
});
if(typeof matchit.core.app_state !== 'undefined'){
} else {
matchit.core.app_state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"board","board",-1907017633),matchit.core.board.call(null,(4)),new cljs.core.Keyword(null,"width","width",-384071477),(900),new cljs.core.Keyword(null,"height","height",1025178622),(600)], null));
}
matchit.core.reveal = (function matchit$core$reveal(var_args){
var args96299 = [];
var len__48622__auto___96302 = arguments.length;
var i__48623__auto___96303 = (0);
while(true){
if((i__48623__auto___96303 < len__48622__auto___96302)){
args96299.push((arguments[i__48623__auto___96303]));

var G__96304 = (i__48623__auto___96303 + (1));
i__48623__auto___96303 = G__96304;
continue;
} else {
}
break;
}

var G__96301 = args96299.length;
switch (G__96301) {
case 1:
return matchit.core.reveal.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return matchit.core.reveal.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args96299.length)].join('')));

}
});

matchit.core.reveal.cljs$core$IFn$_invoke$arity$1 = (function (board){
return cljs.core.map.call(null,(function (p1__96297_SHARP_){
return cljs.core.assoc.call(null,p1__96297_SHARP_,new cljs.core.Keyword(null,"revealed?","revealed?",726959164),true);
}),board);
});

matchit.core.reveal.cljs$core$IFn$_invoke$arity$2 = (function (id,board){
var by_id = (function (p1__96298_SHARP_){
return cljs.core._EQ_.call(null,id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__96298_SHARP_));
});
var tile = cljs.core.first.call(null,cljs.core.filter.call(null,by_id,board));
var removed = cljs.core.remove.call(null,by_id,board);
return cljs.core.cons.call(null,cljs.core.assoc.call(null,tile,new cljs.core.Keyword(null,"revealed?","revealed?",726959164),true),removed);
});

matchit.core.reveal.cljs$lang$maxFixedArity = 2;

matchit.core.hide = (function matchit$core$hide(id,board){
var by_id = (function (p1__96306_SHARP_){
return cljs.core._EQ_.call(null,id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__96306_SHARP_));
});
var tile = cljs.core.first.call(null,cljs.core.filter.call(null,by_id,board));
var not_revealed_by_face = ((function (by_id,tile){
return (function (p1__96307_SHARP_){
return (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"face","face",-1356480717).cljs$core$IFn$_invoke$arity$1(tile),new cljs.core.Keyword(null,"face","face",-1356480717).cljs$core$IFn$_invoke$arity$1(p1__96307_SHARP_))) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"revealed?","revealed?",726959164).cljs$core$IFn$_invoke$arity$1(p1__96307_SHARP_)));
});})(by_id,tile))
;
var removed = cljs.core.remove.call(null,by_id,board);
var all_revealed_QMARK_ = cljs.core.empty_QMARK_.call(null,cljs.core.filter.call(null,not_revealed_by_face,removed));
return cljs.core.cons.call(null,cljs.core.assoc.call(null,tile,new cljs.core.Keyword(null,"revealed?","revealed?",726959164),all_revealed_QMARK_),removed);
});
matchit.core.hidden = (function matchit$core$hidden(app,p__96308){
var map__96311 = p__96308;
var map__96311__$1 = ((((!((map__96311 == null)))?((((map__96311.cljs$lang$protocol_mask$partition0$ & (64))) || (map__96311.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__96311):map__96311);
var x = cljs.core.get.call(null,map__96311__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__96311__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var id = cljs.core.get.call(null,map__96311__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var disable_click_QMARK_ = cljs.core.get.call(null,map__96311__$1,new cljs.core.Keyword(null,"disable-click?","disable-click?",-1186799869));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"fill","fill",883462889),"grey",new cljs.core.Keyword(null,"width","width",-384071477),0.9,new cljs.core.Keyword(null,"height","height",1025178622),0.9,new cljs.core.Keyword(null,"key","key",-1516042587),id,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((cljs.core.not.call(null,disable_click_QMARK_))?((function (map__96311,map__96311__$1,x,y,id,disable_click_QMARK_){
return (function matchit$core$hidden_$_hidden_click(e){
cljs.core.swap_BANG_.call(null,app,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633)], null),cljs.core.partial.call(null,matchit.core.reveal,id));

return setInterval(((function (map__96311,map__96311__$1,x,y,id,disable_click_QMARK_){
return (function (){
return cljs.core.swap_BANG_.call(null,app,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633)], null),cljs.core.partial.call(null,matchit.core.hide,id));
});})(map__96311,map__96311__$1,x,y,id,disable_click_QMARK_))
,(6000));
});})(map__96311,map__96311__$1,x,y,id,disable_click_QMARK_))
:((function (map__96311,map__96311__$1,x,y,id,disable_click_QMARK_){
return (function (){
return cljs.core.List.EMPTY;
});})(map__96311,map__96311__$1,x,y,id,disable_click_QMARK_))
)], null)], null);
});
matchit.core.visible = (function matchit$core$visible(p__96313){
var map__96316 = p__96313;
var map__96316__$1 = ((((!((map__96316 == null)))?((((map__96316.cljs$lang$protocol_mask$partition0$ & (64))) || (map__96316.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__96316):map__96316);
var x = cljs.core.get.call(null,map__96316__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__96316__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var id = cljs.core.get.call(null,map__96316__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var image = cljs.core.get.call(null,map__96316__$1,new cljs.core.Keyword(null,"image","image",-58725096));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"image","image",-58725096),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"href","href",-793805698),image,new cljs.core.Keyword(null,"width","width",-384071477),0.9,new cljs.core.Keyword(null,"height","height",1025178622),0.9,new cljs.core.Keyword(null,"key","key",-1516042587),id,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y], null)], null);
});
matchit.core.view_box = (function matchit$core$view_box(width,height,cols,rows){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"view-box","view-box",-1792199155),[cljs.core.str("0 0 "),cljs.core.str(cols),cljs.core.str(" "),cljs.core.str(rows)].join(''),new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"height","height",1025178622),height], null)], null);
});
matchit.core.matchitmon = (function matchit$core$matchitmon(app){
var map__96324 = cljs.core.deref.call(null,app);
var map__96324__$1 = ((((!((map__96324 == null)))?((((map__96324.cljs$lang$protocol_mask$partition0$ & (64))) || (map__96324.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__96324):map__96324);
var height = cljs.core.get.call(null,map__96324__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var width = cljs.core.get.call(null,map__96324__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var board = cljs.core.get.call(null,map__96324__$1,new cljs.core.Keyword(null,"board","board",-1907017633));
return cljs.core.into.call(null,matchit.core.view_box.call(null,width,height,(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.max_key,new cljs.core.Keyword(null,"x","x",2099068185),board)) + (1)),(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.max_key,new cljs.core.Keyword(null,"y","y",-1757859776),board)) + (1))),(function (){var iter__48327__auto__ = ((function (map__96324,map__96324__$1,height,width,board){
return (function matchit$core$matchitmon_$_iter__96326(s__96327){
return (new cljs.core.LazySeq(null,((function (map__96324,map__96324__$1,height,width,board){
return (function (){
var s__96327__$1 = s__96327;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__96327__$1);
if(temp__4657__auto__){
var s__96327__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__96327__$2)){
var c__48325__auto__ = cljs.core.chunk_first.call(null,s__96327__$2);
var size__48326__auto__ = cljs.core.count.call(null,c__48325__auto__);
var b__96329 = cljs.core.chunk_buffer.call(null,size__48326__auto__);
if((function (){var i__96328 = (0);
while(true){
if((i__96328 < size__48326__auto__)){
var tile = cljs.core._nth.call(null,c__48325__auto__,i__96328);
cljs.core.chunk_append.call(null,b__96329,(cljs.core.truth_(new cljs.core.Keyword(null,"revealed?","revealed?",726959164).cljs$core$IFn$_invoke$arity$1(tile))?matchit.core.visible.call(null,tile):matchit.core.hidden.call(null,app,tile)));

var G__96330 = (i__96328 + (1));
i__96328 = G__96330;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__96329),matchit$core$matchitmon_$_iter__96326.call(null,cljs.core.chunk_rest.call(null,s__96327__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__96329),null);
}
} else {
var tile = cljs.core.first.call(null,s__96327__$2);
return cljs.core.cons.call(null,(cljs.core.truth_(new cljs.core.Keyword(null,"revealed?","revealed?",726959164).cljs$core$IFn$_invoke$arity$1(tile))?matchit.core.visible.call(null,tile):matchit.core.hidden.call(null,app,tile)),matchit$core$matchitmon_$_iter__96326.call(null,cljs.core.rest.call(null,s__96327__$2)));
}
} else {
return null;
}
break;
}
});})(map__96324,map__96324__$1,height,width,board))
,null,null));
});})(map__96324,map__96324__$1,height,width,board))
;
return iter__48327__auto__.call(null,board);
})());
});
reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [matchit.core.matchitmon,matchit.core.app_state], null),document.getElementById("app"));
matchit.core.on_js_reload = (function matchit$core$on_js_reload(){
return null;
});

//# sourceMappingURL=core.js.map?rel=1476048420963