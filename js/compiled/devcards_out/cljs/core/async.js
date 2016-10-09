// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args64530 = [];
var len__48622__auto___64536 = arguments.length;
var i__48623__auto___64537 = (0);
while(true){
if((i__48623__auto___64537 < len__48622__auto___64536)){
args64530.push((arguments[i__48623__auto___64537]));

var G__64538 = (i__48623__auto___64537 + (1));
i__48623__auto___64537 = G__64538;
continue;
} else {
}
break;
}

var G__64532 = args64530.length;
switch (G__64532) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args64530.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async64533 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async64533 = (function (f,blockable,meta64534){
this.f = f;
this.blockable = blockable;
this.meta64534 = meta64534;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async64533.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_64535,meta64534__$1){
var self__ = this;
var _64535__$1 = this;
return (new cljs.core.async.t_cljs$core$async64533(self__.f,self__.blockable,meta64534__$1));
});

cljs.core.async.t_cljs$core$async64533.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_64535){
var self__ = this;
var _64535__$1 = this;
return self__.meta64534;
});

cljs.core.async.t_cljs$core$async64533.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async64533.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async64533.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async64533.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async64533.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta64534","meta64534",467790520,null)], null);
});

cljs.core.async.t_cljs$core$async64533.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async64533.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async64533";

cljs.core.async.t_cljs$core$async64533.cljs$lang$ctorPrWriter = (function (this__48153__auto__,writer__48154__auto__,opt__48155__auto__){
return cljs.core._write.call(null,writer__48154__auto__,"cljs.core.async/t_cljs$core$async64533");
});

cljs.core.async.__GT_t_cljs$core$async64533 = (function cljs$core$async$__GT_t_cljs$core$async64533(f__$1,blockable__$1,meta64534){
return (new cljs.core.async.t_cljs$core$async64533(f__$1,blockable__$1,meta64534));
});

}

return (new cljs.core.async.t_cljs$core$async64533(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args64542 = [];
var len__48622__auto___64545 = arguments.length;
var i__48623__auto___64546 = (0);
while(true){
if((i__48623__auto___64546 < len__48622__auto___64545)){
args64542.push((arguments[i__48623__auto___64546]));

var G__64547 = (i__48623__auto___64546 + (1));
i__48623__auto___64546 = G__64547;
continue;
} else {
}
break;
}

var G__64544 = args64542.length;
switch (G__64544) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args64542.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args64549 = [];
var len__48622__auto___64552 = arguments.length;
var i__48623__auto___64553 = (0);
while(true){
if((i__48623__auto___64553 < len__48622__auto___64552)){
args64549.push((arguments[i__48623__auto___64553]));

var G__64554 = (i__48623__auto___64553 + (1));
i__48623__auto___64553 = G__64554;
continue;
} else {
}
break;
}

var G__64551 = args64549.length;
switch (G__64551) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args64549.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args64556 = [];
var len__48622__auto___64559 = arguments.length;
var i__48623__auto___64560 = (0);
while(true){
if((i__48623__auto___64560 < len__48622__auto___64559)){
args64556.push((arguments[i__48623__auto___64560]));

var G__64561 = (i__48623__auto___64560 + (1));
i__48623__auto___64560 = G__64561;
continue;
} else {
}
break;
}

var G__64558 = args64556.length;
switch (G__64558) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args64556.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_64563 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_64563);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_64563,ret){
return (function (){
return fn1.call(null,val_64563);
});})(val_64563,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args64564 = [];
var len__48622__auto___64567 = arguments.length;
var i__48623__auto___64568 = (0);
while(true){
if((i__48623__auto___64568 < len__48622__auto___64567)){
args64564.push((arguments[i__48623__auto___64568]));

var G__64569 = (i__48623__auto___64568 + (1));
i__48623__auto___64568 = G__64569;
continue;
} else {
}
break;
}

var G__64566 = args64564.length;
switch (G__64566) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args64564.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__48462__auto___64571 = n;
var x_64572 = (0);
while(true){
if((x_64572 < n__48462__auto___64571)){
(a[x_64572] = (0));

var G__64573 = (x_64572 + (1));
x_64572 = G__64573;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__64574 = (i + (1));
i = G__64574;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async64578 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async64578 = (function (alt_flag,flag,meta64579){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta64579 = meta64579;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async64578.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_64580,meta64579__$1){
var self__ = this;
var _64580__$1 = this;
return (new cljs.core.async.t_cljs$core$async64578(self__.alt_flag,self__.flag,meta64579__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async64578.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_64580){
var self__ = this;
var _64580__$1 = this;
return self__.meta64579;
});})(flag))
;

cljs.core.async.t_cljs$core$async64578.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async64578.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async64578.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async64578.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async64578.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta64579","meta64579",201657232,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async64578.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async64578.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async64578";

cljs.core.async.t_cljs$core$async64578.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__48153__auto__,writer__48154__auto__,opt__48155__auto__){
return cljs.core._write.call(null,writer__48154__auto__,"cljs.core.async/t_cljs$core$async64578");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async64578 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async64578(alt_flag__$1,flag__$1,meta64579){
return (new cljs.core.async.t_cljs$core$async64578(alt_flag__$1,flag__$1,meta64579));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async64578(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async64584 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async64584 = (function (alt_handler,flag,cb,meta64585){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta64585 = meta64585;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async64584.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_64586,meta64585__$1){
var self__ = this;
var _64586__$1 = this;
return (new cljs.core.async.t_cljs$core$async64584(self__.alt_handler,self__.flag,self__.cb,meta64585__$1));
});

cljs.core.async.t_cljs$core$async64584.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_64586){
var self__ = this;
var _64586__$1 = this;
return self__.meta64585;
});

cljs.core.async.t_cljs$core$async64584.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async64584.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async64584.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async64584.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async64584.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta64585","meta64585",-1708112997,null)], null);
});

cljs.core.async.t_cljs$core$async64584.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async64584.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async64584";

cljs.core.async.t_cljs$core$async64584.cljs$lang$ctorPrWriter = (function (this__48153__auto__,writer__48154__auto__,opt__48155__auto__){
return cljs.core._write.call(null,writer__48154__auto__,"cljs.core.async/t_cljs$core$async64584");
});

cljs.core.async.__GT_t_cljs$core$async64584 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async64584(alt_handler__$1,flag__$1,cb__$1,meta64585){
return (new cljs.core.async.t_cljs$core$async64584(alt_handler__$1,flag__$1,cb__$1,meta64585));
});

}

return (new cljs.core.async.t_cljs$core$async64584(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__64587_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__64587_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__64588_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__64588_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__47547__auto__ = wport;
if(cljs.core.truth_(or__47547__auto__)){
return or__47547__auto__;
} else {
return port;
}
})()], null));
} else {
var G__64589 = (i + (1));
i = G__64589;
continue;
}
} else {
return null;
}
break;
}
})();
var or__47547__auto__ = ret;
if(cljs.core.truth_(or__47547__auto__)){
return or__47547__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__47535__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__47535__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__47535__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__48629__auto__ = [];
var len__48622__auto___64595 = arguments.length;
var i__48623__auto___64596 = (0);
while(true){
if((i__48623__auto___64596 < len__48622__auto___64595)){
args__48629__auto__.push((arguments[i__48623__auto___64596]));

var G__64597 = (i__48623__auto___64596 + (1));
i__48623__auto___64596 = G__64597;
continue;
} else {
}
break;
}

var argseq__48630__auto__ = ((((1) < args__48629__auto__.length))?(new cljs.core.IndexedSeq(args__48629__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__48630__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__64592){
var map__64593 = p__64592;
var map__64593__$1 = ((((!((map__64593 == null)))?((((map__64593.cljs$lang$protocol_mask$partition0$ & (64))) || (map__64593.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__64593):map__64593);
var opts = map__64593__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq64590){
var G__64591 = cljs.core.first.call(null,seq64590);
var seq64590__$1 = cljs.core.next.call(null,seq64590);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__64591,seq64590__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args64598 = [];
var len__48622__auto___64648 = arguments.length;
var i__48623__auto___64649 = (0);
while(true){
if((i__48623__auto___64649 < len__48622__auto___64648)){
args64598.push((arguments[i__48623__auto___64649]));

var G__64650 = (i__48623__auto___64649 + (1));
i__48623__auto___64649 = G__64650;
continue;
} else {
}
break;
}

var G__64600 = args64598.length;
switch (G__64600) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args64598.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__49719__auto___64652 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__49719__auto___64652){
return (function (){
var f__49720__auto__ = (function (){var switch__49607__auto__ = ((function (c__49719__auto___64652){
return (function (state_64624){
var state_val_64625 = (state_64624[(1)]);
if((state_val_64625 === (7))){
var inst_64620 = (state_64624[(2)]);
var state_64624__$1 = state_64624;
var statearr_64626_64653 = state_64624__$1;
(statearr_64626_64653[(2)] = inst_64620);

(statearr_64626_64653[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64625 === (1))){
var state_64624__$1 = state_64624;
var statearr_64627_64654 = state_64624__$1;
(statearr_64627_64654[(2)] = null);

(statearr_64627_64654[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64625 === (4))){
var inst_64603 = (state_64624[(7)]);
var inst_64603__$1 = (state_64624[(2)]);
var inst_64604 = (inst_64603__$1 == null);
var state_64624__$1 = (function (){var statearr_64628 = state_64624;
(statearr_64628[(7)] = inst_64603__$1);

return statearr_64628;
})();
if(cljs.core.truth_(inst_64604)){
var statearr_64629_64655 = state_64624__$1;
(statearr_64629_64655[(1)] = (5));

} else {
var statearr_64630_64656 = state_64624__$1;
(statearr_64630_64656[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64625 === (13))){
var state_64624__$1 = state_64624;
var statearr_64631_64657 = state_64624__$1;
(statearr_64631_64657[(2)] = null);

(statearr_64631_64657[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64625 === (6))){
var inst_64603 = (state_64624[(7)]);
var state_64624__$1 = state_64624;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_64624__$1,(11),to,inst_64603);
} else {
if((state_val_64625 === (3))){
var inst_64622 = (state_64624[(2)]);
var state_64624__$1 = state_64624;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_64624__$1,inst_64622);
} else {
if((state_val_64625 === (12))){
var state_64624__$1 = state_64624;
var statearr_64632_64658 = state_64624__$1;
(statearr_64632_64658[(2)] = null);

(statearr_64632_64658[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64625 === (2))){
var state_64624__$1 = state_64624;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_64624__$1,(4),from);
} else {
if((state_val_64625 === (11))){
var inst_64613 = (state_64624[(2)]);
var state_64624__$1 = state_64624;
if(cljs.core.truth_(inst_64613)){
var statearr_64633_64659 = state_64624__$1;
(statearr_64633_64659[(1)] = (12));

} else {
var statearr_64634_64660 = state_64624__$1;
(statearr_64634_64660[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64625 === (9))){
var state_64624__$1 = state_64624;
var statearr_64635_64661 = state_64624__$1;
(statearr_64635_64661[(2)] = null);

(statearr_64635_64661[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64625 === (5))){
var state_64624__$1 = state_64624;
if(cljs.core.truth_(close_QMARK_)){
var statearr_64636_64662 = state_64624__$1;
(statearr_64636_64662[(1)] = (8));

} else {
var statearr_64637_64663 = state_64624__$1;
(statearr_64637_64663[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64625 === (14))){
var inst_64618 = (state_64624[(2)]);
var state_64624__$1 = state_64624;
var statearr_64638_64664 = state_64624__$1;
(statearr_64638_64664[(2)] = inst_64618);

(statearr_64638_64664[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64625 === (10))){
var inst_64610 = (state_64624[(2)]);
var state_64624__$1 = state_64624;
var statearr_64639_64665 = state_64624__$1;
(statearr_64639_64665[(2)] = inst_64610);

(statearr_64639_64665[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64625 === (8))){
var inst_64607 = cljs.core.async.close_BANG_.call(null,to);
var state_64624__$1 = state_64624;
var statearr_64640_64666 = state_64624__$1;
(statearr_64640_64666[(2)] = inst_64607);

(statearr_64640_64666[(1)] = (10));


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
});})(c__49719__auto___64652))
;
return ((function (switch__49607__auto__,c__49719__auto___64652){
return (function() {
var cljs$core$async$state_machine__49608__auto__ = null;
var cljs$core$async$state_machine__49608__auto____0 = (function (){
var statearr_64644 = [null,null,null,null,null,null,null,null];
(statearr_64644[(0)] = cljs$core$async$state_machine__49608__auto__);

(statearr_64644[(1)] = (1));

return statearr_64644;
});
var cljs$core$async$state_machine__49608__auto____1 = (function (state_64624){
while(true){
var ret_value__49609__auto__ = (function (){try{while(true){
var result__49610__auto__ = switch__49607__auto__.call(null,state_64624);
if(cljs.core.keyword_identical_QMARK_.call(null,result__49610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49610__auto__;
}
break;
}
}catch (e64645){if((e64645 instanceof Object)){
var ex__49611__auto__ = e64645;
var statearr_64646_64667 = state_64624;
(statearr_64646_64667[(5)] = ex__49611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_64624);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e64645;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__49609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64668 = state_64624;
state_64624 = G__64668;
continue;
} else {
return ret_value__49609__auto__;
}
break;
}
});
cljs$core$async$state_machine__49608__auto__ = function(state_64624){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__49608__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__49608__auto____1.call(this,state_64624);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__49608__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__49608__auto____0;
cljs$core$async$state_machine__49608__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__49608__auto____1;
return cljs$core$async$state_machine__49608__auto__;
})()
;})(switch__49607__auto__,c__49719__auto___64652))
})();
var state__49721__auto__ = (function (){var statearr_64647 = f__49720__auto__.call(null);
(statearr_64647[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__49719__auto___64652);

return statearr_64647;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__49721__auto__);
});})(c__49719__auto___64652))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__64856){
var vec__64857 = p__64856;
var v = cljs.core.nth.call(null,vec__64857,(0),null);
var p = cljs.core.nth.call(null,vec__64857,(1),null);
var job = vec__64857;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__49719__auto___65043 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__49719__auto___65043,res,vec__64857,v,p,job,jobs,results){
return (function (){
var f__49720__auto__ = (function (){var switch__49607__auto__ = ((function (c__49719__auto___65043,res,vec__64857,v,p,job,jobs,results){
return (function (state_64864){
var state_val_64865 = (state_64864[(1)]);
if((state_val_64865 === (1))){
var state_64864__$1 = state_64864;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_64864__$1,(2),res,v);
} else {
if((state_val_64865 === (2))){
var inst_64861 = (state_64864[(2)]);
var inst_64862 = cljs.core.async.close_BANG_.call(null,res);
var state_64864__$1 = (function (){var statearr_64866 = state_64864;
(statearr_64866[(7)] = inst_64861);

return statearr_64866;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_64864__$1,inst_64862);
} else {
return null;
}
}
});})(c__49719__auto___65043,res,vec__64857,v,p,job,jobs,results))
;
return ((function (switch__49607__auto__,c__49719__auto___65043,res,vec__64857,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__49608__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__49608__auto____0 = (function (){
var statearr_64870 = [null,null,null,null,null,null,null,null];
(statearr_64870[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__49608__auto__);

(statearr_64870[(1)] = (1));

return statearr_64870;
});
var cljs$core$async$pipeline_STAR__$_state_machine__49608__auto____1 = (function (state_64864){
while(true){
var ret_value__49609__auto__ = (function (){try{while(true){
var result__49610__auto__ = switch__49607__auto__.call(null,state_64864);
if(cljs.core.keyword_identical_QMARK_.call(null,result__49610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49610__auto__;
}
break;
}
}catch (e64871){if((e64871 instanceof Object)){
var ex__49611__auto__ = e64871;
var statearr_64872_65044 = state_64864;
(statearr_64872_65044[(5)] = ex__49611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_64864);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e64871;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__49609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65045 = state_64864;
state_64864 = G__65045;
continue;
} else {
return ret_value__49609__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__49608__auto__ = function(state_64864){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__49608__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__49608__auto____1.call(this,state_64864);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__49608__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__49608__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__49608__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__49608__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__49608__auto__;
})()
;})(switch__49607__auto__,c__49719__auto___65043,res,vec__64857,v,p,job,jobs,results))
})();
var state__49721__auto__ = (function (){var statearr_64873 = f__49720__auto__.call(null);
(statearr_64873[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__49719__auto___65043);

return statearr_64873;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__49721__auto__);
});})(c__49719__auto___65043,res,vec__64857,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__64874){
var vec__64875 = p__64874;
var v = cljs.core.nth.call(null,vec__64875,(0),null);
var p = cljs.core.nth.call(null,vec__64875,(1),null);
var job = vec__64875;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__48462__auto___65046 = n;
var __65047 = (0);
while(true){
if((__65047 < n__48462__auto___65046)){
var G__64878_65048 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__64878_65048) {
case "compute":
var c__49719__auto___65050 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__65047,c__49719__auto___65050,G__64878_65048,n__48462__auto___65046,jobs,results,process,async){
return (function (){
var f__49720__auto__ = (function (){var switch__49607__auto__ = ((function (__65047,c__49719__auto___65050,G__64878_65048,n__48462__auto___65046,jobs,results,process,async){
return (function (state_64891){
var state_val_64892 = (state_64891[(1)]);
if((state_val_64892 === (1))){
var state_64891__$1 = state_64891;
var statearr_64893_65051 = state_64891__$1;
(statearr_64893_65051[(2)] = null);

(statearr_64893_65051[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64892 === (2))){
var state_64891__$1 = state_64891;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_64891__$1,(4),jobs);
} else {
if((state_val_64892 === (3))){
var inst_64889 = (state_64891[(2)]);
var state_64891__$1 = state_64891;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_64891__$1,inst_64889);
} else {
if((state_val_64892 === (4))){
var inst_64881 = (state_64891[(2)]);
var inst_64882 = process.call(null,inst_64881);
var state_64891__$1 = state_64891;
if(cljs.core.truth_(inst_64882)){
var statearr_64894_65052 = state_64891__$1;
(statearr_64894_65052[(1)] = (5));

} else {
var statearr_64895_65053 = state_64891__$1;
(statearr_64895_65053[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64892 === (5))){
var state_64891__$1 = state_64891;
var statearr_64896_65054 = state_64891__$1;
(statearr_64896_65054[(2)] = null);

(statearr_64896_65054[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64892 === (6))){
var state_64891__$1 = state_64891;
var statearr_64897_65055 = state_64891__$1;
(statearr_64897_65055[(2)] = null);

(statearr_64897_65055[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64892 === (7))){
var inst_64887 = (state_64891[(2)]);
var state_64891__$1 = state_64891;
var statearr_64898_65056 = state_64891__$1;
(statearr_64898_65056[(2)] = inst_64887);

(statearr_64898_65056[(1)] = (3));


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
});})(__65047,c__49719__auto___65050,G__64878_65048,n__48462__auto___65046,jobs,results,process,async))
;
return ((function (__65047,switch__49607__auto__,c__49719__auto___65050,G__64878_65048,n__48462__auto___65046,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__49608__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__49608__auto____0 = (function (){
var statearr_64902 = [null,null,null,null,null,null,null];
(statearr_64902[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__49608__auto__);

(statearr_64902[(1)] = (1));

return statearr_64902;
});
var cljs$core$async$pipeline_STAR__$_state_machine__49608__auto____1 = (function (state_64891){
while(true){
var ret_value__49609__auto__ = (function (){try{while(true){
var result__49610__auto__ = switch__49607__auto__.call(null,state_64891);
if(cljs.core.keyword_identical_QMARK_.call(null,result__49610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49610__auto__;
}
break;
}
}catch (e64903){if((e64903 instanceof Object)){
var ex__49611__auto__ = e64903;
var statearr_64904_65057 = state_64891;
(statearr_64904_65057[(5)] = ex__49611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_64891);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e64903;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__49609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65058 = state_64891;
state_64891 = G__65058;
continue;
} else {
return ret_value__49609__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__49608__auto__ = function(state_64891){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__49608__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__49608__auto____1.call(this,state_64891);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__49608__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__49608__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__49608__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__49608__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__49608__auto__;
})()
;})(__65047,switch__49607__auto__,c__49719__auto___65050,G__64878_65048,n__48462__auto___65046,jobs,results,process,async))
})();
var state__49721__auto__ = (function (){var statearr_64905 = f__49720__auto__.call(null);
(statearr_64905[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__49719__auto___65050);

return statearr_64905;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__49721__auto__);
});})(__65047,c__49719__auto___65050,G__64878_65048,n__48462__auto___65046,jobs,results,process,async))
);


break;
case "async":
var c__49719__auto___65059 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__65047,c__49719__auto___65059,G__64878_65048,n__48462__auto___65046,jobs,results,process,async){
return (function (){
var f__49720__auto__ = (function (){var switch__49607__auto__ = ((function (__65047,c__49719__auto___65059,G__64878_65048,n__48462__auto___65046,jobs,results,process,async){
return (function (state_64918){
var state_val_64919 = (state_64918[(1)]);
if((state_val_64919 === (1))){
var state_64918__$1 = state_64918;
var statearr_64920_65060 = state_64918__$1;
(statearr_64920_65060[(2)] = null);

(statearr_64920_65060[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64919 === (2))){
var state_64918__$1 = state_64918;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_64918__$1,(4),jobs);
} else {
if((state_val_64919 === (3))){
var inst_64916 = (state_64918[(2)]);
var state_64918__$1 = state_64918;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_64918__$1,inst_64916);
} else {
if((state_val_64919 === (4))){
var inst_64908 = (state_64918[(2)]);
var inst_64909 = async.call(null,inst_64908);
var state_64918__$1 = state_64918;
if(cljs.core.truth_(inst_64909)){
var statearr_64921_65061 = state_64918__$1;
(statearr_64921_65061[(1)] = (5));

} else {
var statearr_64922_65062 = state_64918__$1;
(statearr_64922_65062[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64919 === (5))){
var state_64918__$1 = state_64918;
var statearr_64923_65063 = state_64918__$1;
(statearr_64923_65063[(2)] = null);

(statearr_64923_65063[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64919 === (6))){
var state_64918__$1 = state_64918;
var statearr_64924_65064 = state_64918__$1;
(statearr_64924_65064[(2)] = null);

(statearr_64924_65064[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64919 === (7))){
var inst_64914 = (state_64918[(2)]);
var state_64918__$1 = state_64918;
var statearr_64925_65065 = state_64918__$1;
(statearr_64925_65065[(2)] = inst_64914);

(statearr_64925_65065[(1)] = (3));


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
});})(__65047,c__49719__auto___65059,G__64878_65048,n__48462__auto___65046,jobs,results,process,async))
;
return ((function (__65047,switch__49607__auto__,c__49719__auto___65059,G__64878_65048,n__48462__auto___65046,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__49608__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__49608__auto____0 = (function (){
var statearr_64929 = [null,null,null,null,null,null,null];
(statearr_64929[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__49608__auto__);

(statearr_64929[(1)] = (1));

return statearr_64929;
});
var cljs$core$async$pipeline_STAR__$_state_machine__49608__auto____1 = (function (state_64918){
while(true){
var ret_value__49609__auto__ = (function (){try{while(true){
var result__49610__auto__ = switch__49607__auto__.call(null,state_64918);
if(cljs.core.keyword_identical_QMARK_.call(null,result__49610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49610__auto__;
}
break;
}
}catch (e64930){if((e64930 instanceof Object)){
var ex__49611__auto__ = e64930;
var statearr_64931_65066 = state_64918;
(statearr_64931_65066[(5)] = ex__49611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_64918);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e64930;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__49609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65067 = state_64918;
state_64918 = G__65067;
continue;
} else {
return ret_value__49609__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__49608__auto__ = function(state_64918){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__49608__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__49608__auto____1.call(this,state_64918);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__49608__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__49608__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__49608__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__49608__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__49608__auto__;
})()
;})(__65047,switch__49607__auto__,c__49719__auto___65059,G__64878_65048,n__48462__auto___65046,jobs,results,process,async))
})();
var state__49721__auto__ = (function (){var statearr_64932 = f__49720__auto__.call(null);
(statearr_64932[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__49719__auto___65059);

return statearr_64932;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__49721__auto__);
});})(__65047,c__49719__auto___65059,G__64878_65048,n__48462__auto___65046,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__65068 = (__65047 + (1));
__65047 = G__65068;
continue;
} else {
}
break;
}

var c__49719__auto___65069 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__49719__auto___65069,jobs,results,process,async){
return (function (){
var f__49720__auto__ = (function (){var switch__49607__auto__ = ((function (c__49719__auto___65069,jobs,results,process,async){
return (function (state_64954){
var state_val_64955 = (state_64954[(1)]);
if((state_val_64955 === (1))){
var state_64954__$1 = state_64954;
var statearr_64956_65070 = state_64954__$1;
(statearr_64956_65070[(2)] = null);

(statearr_64956_65070[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64955 === (2))){
var state_64954__$1 = state_64954;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_64954__$1,(4),from);
} else {
if((state_val_64955 === (3))){
var inst_64952 = (state_64954[(2)]);
var state_64954__$1 = state_64954;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_64954__$1,inst_64952);
} else {
if((state_val_64955 === (4))){
var inst_64935 = (state_64954[(7)]);
var inst_64935__$1 = (state_64954[(2)]);
var inst_64936 = (inst_64935__$1 == null);
var state_64954__$1 = (function (){var statearr_64957 = state_64954;
(statearr_64957[(7)] = inst_64935__$1);

return statearr_64957;
})();
if(cljs.core.truth_(inst_64936)){
var statearr_64958_65071 = state_64954__$1;
(statearr_64958_65071[(1)] = (5));

} else {
var statearr_64959_65072 = state_64954__$1;
(statearr_64959_65072[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64955 === (5))){
var inst_64938 = cljs.core.async.close_BANG_.call(null,jobs);
var state_64954__$1 = state_64954;
var statearr_64960_65073 = state_64954__$1;
(statearr_64960_65073[(2)] = inst_64938);

(statearr_64960_65073[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64955 === (6))){
var inst_64935 = (state_64954[(7)]);
var inst_64940 = (state_64954[(8)]);
var inst_64940__$1 = cljs.core.async.chan.call(null,(1));
var inst_64941 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_64942 = [inst_64935,inst_64940__$1];
var inst_64943 = (new cljs.core.PersistentVector(null,2,(5),inst_64941,inst_64942,null));
var state_64954__$1 = (function (){var statearr_64961 = state_64954;
(statearr_64961[(8)] = inst_64940__$1);

return statearr_64961;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_64954__$1,(8),jobs,inst_64943);
} else {
if((state_val_64955 === (7))){
var inst_64950 = (state_64954[(2)]);
var state_64954__$1 = state_64954;
var statearr_64962_65074 = state_64954__$1;
(statearr_64962_65074[(2)] = inst_64950);

(statearr_64962_65074[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64955 === (8))){
var inst_64940 = (state_64954[(8)]);
var inst_64945 = (state_64954[(2)]);
var state_64954__$1 = (function (){var statearr_64963 = state_64954;
(statearr_64963[(9)] = inst_64945);

return statearr_64963;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_64954__$1,(9),results,inst_64940);
} else {
if((state_val_64955 === (9))){
var inst_64947 = (state_64954[(2)]);
var state_64954__$1 = (function (){var statearr_64964 = state_64954;
(statearr_64964[(10)] = inst_64947);

return statearr_64964;
})();
var statearr_64965_65075 = state_64954__$1;
(statearr_64965_65075[(2)] = null);

(statearr_64965_65075[(1)] = (2));


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
});})(c__49719__auto___65069,jobs,results,process,async))
;
return ((function (switch__49607__auto__,c__49719__auto___65069,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__49608__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__49608__auto____0 = (function (){
var statearr_64969 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_64969[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__49608__auto__);

(statearr_64969[(1)] = (1));

return statearr_64969;
});
var cljs$core$async$pipeline_STAR__$_state_machine__49608__auto____1 = (function (state_64954){
while(true){
var ret_value__49609__auto__ = (function (){try{while(true){
var result__49610__auto__ = switch__49607__auto__.call(null,state_64954);
if(cljs.core.keyword_identical_QMARK_.call(null,result__49610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49610__auto__;
}
break;
}
}catch (e64970){if((e64970 instanceof Object)){
var ex__49611__auto__ = e64970;
var statearr_64971_65076 = state_64954;
(statearr_64971_65076[(5)] = ex__49611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_64954);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e64970;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__49609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65077 = state_64954;
state_64954 = G__65077;
continue;
} else {
return ret_value__49609__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__49608__auto__ = function(state_64954){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__49608__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__49608__auto____1.call(this,state_64954);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__49608__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__49608__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__49608__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__49608__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__49608__auto__;
})()
;})(switch__49607__auto__,c__49719__auto___65069,jobs,results,process,async))
})();
var state__49721__auto__ = (function (){var statearr_64972 = f__49720__auto__.call(null);
(statearr_64972[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__49719__auto___65069);

return statearr_64972;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__49721__auto__);
});})(c__49719__auto___65069,jobs,results,process,async))
);


var c__49719__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__49719__auto__,jobs,results,process,async){
return (function (){
var f__49720__auto__ = (function (){var switch__49607__auto__ = ((function (c__49719__auto__,jobs,results,process,async){
return (function (state_65010){
var state_val_65011 = (state_65010[(1)]);
if((state_val_65011 === (7))){
var inst_65006 = (state_65010[(2)]);
var state_65010__$1 = state_65010;
var statearr_65012_65078 = state_65010__$1;
(statearr_65012_65078[(2)] = inst_65006);

(statearr_65012_65078[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65011 === (20))){
var state_65010__$1 = state_65010;
var statearr_65013_65079 = state_65010__$1;
(statearr_65013_65079[(2)] = null);

(statearr_65013_65079[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65011 === (1))){
var state_65010__$1 = state_65010;
var statearr_65014_65080 = state_65010__$1;
(statearr_65014_65080[(2)] = null);

(statearr_65014_65080[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65011 === (4))){
var inst_64975 = (state_65010[(7)]);
var inst_64975__$1 = (state_65010[(2)]);
var inst_64976 = (inst_64975__$1 == null);
var state_65010__$1 = (function (){var statearr_65015 = state_65010;
(statearr_65015[(7)] = inst_64975__$1);

return statearr_65015;
})();
if(cljs.core.truth_(inst_64976)){
var statearr_65016_65081 = state_65010__$1;
(statearr_65016_65081[(1)] = (5));

} else {
var statearr_65017_65082 = state_65010__$1;
(statearr_65017_65082[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65011 === (15))){
var inst_64988 = (state_65010[(8)]);
var state_65010__$1 = state_65010;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_65010__$1,(18),to,inst_64988);
} else {
if((state_val_65011 === (21))){
var inst_65001 = (state_65010[(2)]);
var state_65010__$1 = state_65010;
var statearr_65018_65083 = state_65010__$1;
(statearr_65018_65083[(2)] = inst_65001);

(statearr_65018_65083[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65011 === (13))){
var inst_65003 = (state_65010[(2)]);
var state_65010__$1 = (function (){var statearr_65019 = state_65010;
(statearr_65019[(9)] = inst_65003);

return statearr_65019;
})();
var statearr_65020_65084 = state_65010__$1;
(statearr_65020_65084[(2)] = null);

(statearr_65020_65084[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65011 === (6))){
var inst_64975 = (state_65010[(7)]);
var state_65010__$1 = state_65010;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_65010__$1,(11),inst_64975);
} else {
if((state_val_65011 === (17))){
var inst_64996 = (state_65010[(2)]);
var state_65010__$1 = state_65010;
if(cljs.core.truth_(inst_64996)){
var statearr_65021_65085 = state_65010__$1;
(statearr_65021_65085[(1)] = (19));

} else {
var statearr_65022_65086 = state_65010__$1;
(statearr_65022_65086[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65011 === (3))){
var inst_65008 = (state_65010[(2)]);
var state_65010__$1 = state_65010;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_65010__$1,inst_65008);
} else {
if((state_val_65011 === (12))){
var inst_64985 = (state_65010[(10)]);
var state_65010__$1 = state_65010;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_65010__$1,(14),inst_64985);
} else {
if((state_val_65011 === (2))){
var state_65010__$1 = state_65010;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_65010__$1,(4),results);
} else {
if((state_val_65011 === (19))){
var state_65010__$1 = state_65010;
var statearr_65023_65087 = state_65010__$1;
(statearr_65023_65087[(2)] = null);

(statearr_65023_65087[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65011 === (11))){
var inst_64985 = (state_65010[(2)]);
var state_65010__$1 = (function (){var statearr_65024 = state_65010;
(statearr_65024[(10)] = inst_64985);

return statearr_65024;
})();
var statearr_65025_65088 = state_65010__$1;
(statearr_65025_65088[(2)] = null);

(statearr_65025_65088[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65011 === (9))){
var state_65010__$1 = state_65010;
var statearr_65026_65089 = state_65010__$1;
(statearr_65026_65089[(2)] = null);

(statearr_65026_65089[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65011 === (5))){
var state_65010__$1 = state_65010;
if(cljs.core.truth_(close_QMARK_)){
var statearr_65027_65090 = state_65010__$1;
(statearr_65027_65090[(1)] = (8));

} else {
var statearr_65028_65091 = state_65010__$1;
(statearr_65028_65091[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65011 === (14))){
var inst_64988 = (state_65010[(8)]);
var inst_64990 = (state_65010[(11)]);
var inst_64988__$1 = (state_65010[(2)]);
var inst_64989 = (inst_64988__$1 == null);
var inst_64990__$1 = cljs.core.not.call(null,inst_64989);
var state_65010__$1 = (function (){var statearr_65029 = state_65010;
(statearr_65029[(8)] = inst_64988__$1);

(statearr_65029[(11)] = inst_64990__$1);

return statearr_65029;
})();
if(inst_64990__$1){
var statearr_65030_65092 = state_65010__$1;
(statearr_65030_65092[(1)] = (15));

} else {
var statearr_65031_65093 = state_65010__$1;
(statearr_65031_65093[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65011 === (16))){
var inst_64990 = (state_65010[(11)]);
var state_65010__$1 = state_65010;
var statearr_65032_65094 = state_65010__$1;
(statearr_65032_65094[(2)] = inst_64990);

(statearr_65032_65094[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65011 === (10))){
var inst_64982 = (state_65010[(2)]);
var state_65010__$1 = state_65010;
var statearr_65033_65095 = state_65010__$1;
(statearr_65033_65095[(2)] = inst_64982);

(statearr_65033_65095[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65011 === (18))){
var inst_64993 = (state_65010[(2)]);
var state_65010__$1 = state_65010;
var statearr_65034_65096 = state_65010__$1;
(statearr_65034_65096[(2)] = inst_64993);

(statearr_65034_65096[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65011 === (8))){
var inst_64979 = cljs.core.async.close_BANG_.call(null,to);
var state_65010__$1 = state_65010;
var statearr_65035_65097 = state_65010__$1;
(statearr_65035_65097[(2)] = inst_64979);

(statearr_65035_65097[(1)] = (10));


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
});})(c__49719__auto__,jobs,results,process,async))
;
return ((function (switch__49607__auto__,c__49719__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__49608__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__49608__auto____0 = (function (){
var statearr_65039 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_65039[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__49608__auto__);

(statearr_65039[(1)] = (1));

return statearr_65039;
});
var cljs$core$async$pipeline_STAR__$_state_machine__49608__auto____1 = (function (state_65010){
while(true){
var ret_value__49609__auto__ = (function (){try{while(true){
var result__49610__auto__ = switch__49607__auto__.call(null,state_65010);
if(cljs.core.keyword_identical_QMARK_.call(null,result__49610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49610__auto__;
}
break;
}
}catch (e65040){if((e65040 instanceof Object)){
var ex__49611__auto__ = e65040;
var statearr_65041_65098 = state_65010;
(statearr_65041_65098[(5)] = ex__49611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_65010);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e65040;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__49609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65099 = state_65010;
state_65010 = G__65099;
continue;
} else {
return ret_value__49609__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__49608__auto__ = function(state_65010){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__49608__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__49608__auto____1.call(this,state_65010);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__49608__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__49608__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__49608__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__49608__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__49608__auto__;
})()
;})(switch__49607__auto__,c__49719__auto__,jobs,results,process,async))
})();
var state__49721__auto__ = (function (){var statearr_65042 = f__49720__auto__.call(null);
(statearr_65042[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__49719__auto__);

return statearr_65042;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__49721__auto__);
});})(c__49719__auto__,jobs,results,process,async))
);

return c__49719__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args65100 = [];
var len__48622__auto___65103 = arguments.length;
var i__48623__auto___65104 = (0);
while(true){
if((i__48623__auto___65104 < len__48622__auto___65103)){
args65100.push((arguments[i__48623__auto___65104]));

var G__65105 = (i__48623__auto___65104 + (1));
i__48623__auto___65104 = G__65105;
continue;
} else {
}
break;
}

var G__65102 = args65100.length;
switch (G__65102) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args65100.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args65107 = [];
var len__48622__auto___65110 = arguments.length;
var i__48623__auto___65111 = (0);
while(true){
if((i__48623__auto___65111 < len__48622__auto___65110)){
args65107.push((arguments[i__48623__auto___65111]));

var G__65112 = (i__48623__auto___65111 + (1));
i__48623__auto___65111 = G__65112;
continue;
} else {
}
break;
}

var G__65109 = args65107.length;
switch (G__65109) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args65107.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args65114 = [];
var len__48622__auto___65167 = arguments.length;
var i__48623__auto___65168 = (0);
while(true){
if((i__48623__auto___65168 < len__48622__auto___65167)){
args65114.push((arguments[i__48623__auto___65168]));

var G__65169 = (i__48623__auto___65168 + (1));
i__48623__auto___65168 = G__65169;
continue;
} else {
}
break;
}

var G__65116 = args65114.length;
switch (G__65116) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args65114.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__49719__auto___65171 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__49719__auto___65171,tc,fc){
return (function (){
var f__49720__auto__ = (function (){var switch__49607__auto__ = ((function (c__49719__auto___65171,tc,fc){
return (function (state_65142){
var state_val_65143 = (state_65142[(1)]);
if((state_val_65143 === (7))){
var inst_65138 = (state_65142[(2)]);
var state_65142__$1 = state_65142;
var statearr_65144_65172 = state_65142__$1;
(statearr_65144_65172[(2)] = inst_65138);

(statearr_65144_65172[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65143 === (1))){
var state_65142__$1 = state_65142;
var statearr_65145_65173 = state_65142__$1;
(statearr_65145_65173[(2)] = null);

(statearr_65145_65173[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65143 === (4))){
var inst_65119 = (state_65142[(7)]);
var inst_65119__$1 = (state_65142[(2)]);
var inst_65120 = (inst_65119__$1 == null);
var state_65142__$1 = (function (){var statearr_65146 = state_65142;
(statearr_65146[(7)] = inst_65119__$1);

return statearr_65146;
})();
if(cljs.core.truth_(inst_65120)){
var statearr_65147_65174 = state_65142__$1;
(statearr_65147_65174[(1)] = (5));

} else {
var statearr_65148_65175 = state_65142__$1;
(statearr_65148_65175[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65143 === (13))){
var state_65142__$1 = state_65142;
var statearr_65149_65176 = state_65142__$1;
(statearr_65149_65176[(2)] = null);

(statearr_65149_65176[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65143 === (6))){
var inst_65119 = (state_65142[(7)]);
var inst_65125 = p.call(null,inst_65119);
var state_65142__$1 = state_65142;
if(cljs.core.truth_(inst_65125)){
var statearr_65150_65177 = state_65142__$1;
(statearr_65150_65177[(1)] = (9));

} else {
var statearr_65151_65178 = state_65142__$1;
(statearr_65151_65178[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65143 === (3))){
var inst_65140 = (state_65142[(2)]);
var state_65142__$1 = state_65142;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_65142__$1,inst_65140);
} else {
if((state_val_65143 === (12))){
var state_65142__$1 = state_65142;
var statearr_65152_65179 = state_65142__$1;
(statearr_65152_65179[(2)] = null);

(statearr_65152_65179[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65143 === (2))){
var state_65142__$1 = state_65142;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_65142__$1,(4),ch);
} else {
if((state_val_65143 === (11))){
var inst_65119 = (state_65142[(7)]);
var inst_65129 = (state_65142[(2)]);
var state_65142__$1 = state_65142;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_65142__$1,(8),inst_65129,inst_65119);
} else {
if((state_val_65143 === (9))){
var state_65142__$1 = state_65142;
var statearr_65153_65180 = state_65142__$1;
(statearr_65153_65180[(2)] = tc);

(statearr_65153_65180[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65143 === (5))){
var inst_65122 = cljs.core.async.close_BANG_.call(null,tc);
var inst_65123 = cljs.core.async.close_BANG_.call(null,fc);
var state_65142__$1 = (function (){var statearr_65154 = state_65142;
(statearr_65154[(8)] = inst_65122);

return statearr_65154;
})();
var statearr_65155_65181 = state_65142__$1;
(statearr_65155_65181[(2)] = inst_65123);

(statearr_65155_65181[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65143 === (14))){
var inst_65136 = (state_65142[(2)]);
var state_65142__$1 = state_65142;
var statearr_65156_65182 = state_65142__$1;
(statearr_65156_65182[(2)] = inst_65136);

(statearr_65156_65182[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65143 === (10))){
var state_65142__$1 = state_65142;
var statearr_65157_65183 = state_65142__$1;
(statearr_65157_65183[(2)] = fc);

(statearr_65157_65183[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65143 === (8))){
var inst_65131 = (state_65142[(2)]);
var state_65142__$1 = state_65142;
if(cljs.core.truth_(inst_65131)){
var statearr_65158_65184 = state_65142__$1;
(statearr_65158_65184[(1)] = (12));

} else {
var statearr_65159_65185 = state_65142__$1;
(statearr_65159_65185[(1)] = (13));

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
});})(c__49719__auto___65171,tc,fc))
;
return ((function (switch__49607__auto__,c__49719__auto___65171,tc,fc){
return (function() {
var cljs$core$async$state_machine__49608__auto__ = null;
var cljs$core$async$state_machine__49608__auto____0 = (function (){
var statearr_65163 = [null,null,null,null,null,null,null,null,null];
(statearr_65163[(0)] = cljs$core$async$state_machine__49608__auto__);

(statearr_65163[(1)] = (1));

return statearr_65163;
});
var cljs$core$async$state_machine__49608__auto____1 = (function (state_65142){
while(true){
var ret_value__49609__auto__ = (function (){try{while(true){
var result__49610__auto__ = switch__49607__auto__.call(null,state_65142);
if(cljs.core.keyword_identical_QMARK_.call(null,result__49610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49610__auto__;
}
break;
}
}catch (e65164){if((e65164 instanceof Object)){
var ex__49611__auto__ = e65164;
var statearr_65165_65186 = state_65142;
(statearr_65165_65186[(5)] = ex__49611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_65142);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e65164;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__49609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65187 = state_65142;
state_65142 = G__65187;
continue;
} else {
return ret_value__49609__auto__;
}
break;
}
});
cljs$core$async$state_machine__49608__auto__ = function(state_65142){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__49608__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__49608__auto____1.call(this,state_65142);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__49608__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__49608__auto____0;
cljs$core$async$state_machine__49608__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__49608__auto____1;
return cljs$core$async$state_machine__49608__auto__;
})()
;})(switch__49607__auto__,c__49719__auto___65171,tc,fc))
})();
var state__49721__auto__ = (function (){var statearr_65166 = f__49720__auto__.call(null);
(statearr_65166[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__49719__auto___65171);

return statearr_65166;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__49721__auto__);
});})(c__49719__auto___65171,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__49719__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__49719__auto__){
return (function (){
var f__49720__auto__ = (function (){var switch__49607__auto__ = ((function (c__49719__auto__){
return (function (state_65251){
var state_val_65252 = (state_65251[(1)]);
if((state_val_65252 === (7))){
var inst_65247 = (state_65251[(2)]);
var state_65251__$1 = state_65251;
var statearr_65253_65274 = state_65251__$1;
(statearr_65253_65274[(2)] = inst_65247);

(statearr_65253_65274[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65252 === (1))){
var inst_65231 = init;
var state_65251__$1 = (function (){var statearr_65254 = state_65251;
(statearr_65254[(7)] = inst_65231);

return statearr_65254;
})();
var statearr_65255_65275 = state_65251__$1;
(statearr_65255_65275[(2)] = null);

(statearr_65255_65275[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65252 === (4))){
var inst_65234 = (state_65251[(8)]);
var inst_65234__$1 = (state_65251[(2)]);
var inst_65235 = (inst_65234__$1 == null);
var state_65251__$1 = (function (){var statearr_65256 = state_65251;
(statearr_65256[(8)] = inst_65234__$1);

return statearr_65256;
})();
if(cljs.core.truth_(inst_65235)){
var statearr_65257_65276 = state_65251__$1;
(statearr_65257_65276[(1)] = (5));

} else {
var statearr_65258_65277 = state_65251__$1;
(statearr_65258_65277[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65252 === (6))){
var inst_65234 = (state_65251[(8)]);
var inst_65238 = (state_65251[(9)]);
var inst_65231 = (state_65251[(7)]);
var inst_65238__$1 = f.call(null,inst_65231,inst_65234);
var inst_65239 = cljs.core.reduced_QMARK_.call(null,inst_65238__$1);
var state_65251__$1 = (function (){var statearr_65259 = state_65251;
(statearr_65259[(9)] = inst_65238__$1);

return statearr_65259;
})();
if(inst_65239){
var statearr_65260_65278 = state_65251__$1;
(statearr_65260_65278[(1)] = (8));

} else {
var statearr_65261_65279 = state_65251__$1;
(statearr_65261_65279[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65252 === (3))){
var inst_65249 = (state_65251[(2)]);
var state_65251__$1 = state_65251;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_65251__$1,inst_65249);
} else {
if((state_val_65252 === (2))){
var state_65251__$1 = state_65251;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_65251__$1,(4),ch);
} else {
if((state_val_65252 === (9))){
var inst_65238 = (state_65251[(9)]);
var inst_65231 = inst_65238;
var state_65251__$1 = (function (){var statearr_65262 = state_65251;
(statearr_65262[(7)] = inst_65231);

return statearr_65262;
})();
var statearr_65263_65280 = state_65251__$1;
(statearr_65263_65280[(2)] = null);

(statearr_65263_65280[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65252 === (5))){
var inst_65231 = (state_65251[(7)]);
var state_65251__$1 = state_65251;
var statearr_65264_65281 = state_65251__$1;
(statearr_65264_65281[(2)] = inst_65231);

(statearr_65264_65281[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65252 === (10))){
var inst_65245 = (state_65251[(2)]);
var state_65251__$1 = state_65251;
var statearr_65265_65282 = state_65251__$1;
(statearr_65265_65282[(2)] = inst_65245);

(statearr_65265_65282[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65252 === (8))){
var inst_65238 = (state_65251[(9)]);
var inst_65241 = cljs.core.deref.call(null,inst_65238);
var state_65251__$1 = state_65251;
var statearr_65266_65283 = state_65251__$1;
(statearr_65266_65283[(2)] = inst_65241);

(statearr_65266_65283[(1)] = (10));


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
});})(c__49719__auto__))
;
return ((function (switch__49607__auto__,c__49719__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__49608__auto__ = null;
var cljs$core$async$reduce_$_state_machine__49608__auto____0 = (function (){
var statearr_65270 = [null,null,null,null,null,null,null,null,null,null];
(statearr_65270[(0)] = cljs$core$async$reduce_$_state_machine__49608__auto__);

(statearr_65270[(1)] = (1));

return statearr_65270;
});
var cljs$core$async$reduce_$_state_machine__49608__auto____1 = (function (state_65251){
while(true){
var ret_value__49609__auto__ = (function (){try{while(true){
var result__49610__auto__ = switch__49607__auto__.call(null,state_65251);
if(cljs.core.keyword_identical_QMARK_.call(null,result__49610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49610__auto__;
}
break;
}
}catch (e65271){if((e65271 instanceof Object)){
var ex__49611__auto__ = e65271;
var statearr_65272_65284 = state_65251;
(statearr_65272_65284[(5)] = ex__49611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_65251);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e65271;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__49609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65285 = state_65251;
state_65251 = G__65285;
continue;
} else {
return ret_value__49609__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__49608__auto__ = function(state_65251){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__49608__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__49608__auto____1.call(this,state_65251);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__49608__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__49608__auto____0;
cljs$core$async$reduce_$_state_machine__49608__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__49608__auto____1;
return cljs$core$async$reduce_$_state_machine__49608__auto__;
})()
;})(switch__49607__auto__,c__49719__auto__))
})();
var state__49721__auto__ = (function (){var statearr_65273 = f__49720__auto__.call(null);
(statearr_65273[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__49719__auto__);

return statearr_65273;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__49721__auto__);
});})(c__49719__auto__))
);

return c__49719__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args65286 = [];
var len__48622__auto___65338 = arguments.length;
var i__48623__auto___65339 = (0);
while(true){
if((i__48623__auto___65339 < len__48622__auto___65338)){
args65286.push((arguments[i__48623__auto___65339]));

var G__65340 = (i__48623__auto___65339 + (1));
i__48623__auto___65339 = G__65340;
continue;
} else {
}
break;
}

var G__65288 = args65286.length;
switch (G__65288) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args65286.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__49719__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__49719__auto__){
return (function (){
var f__49720__auto__ = (function (){var switch__49607__auto__ = ((function (c__49719__auto__){
return (function (state_65313){
var state_val_65314 = (state_65313[(1)]);
if((state_val_65314 === (7))){
var inst_65295 = (state_65313[(2)]);
var state_65313__$1 = state_65313;
var statearr_65315_65342 = state_65313__$1;
(statearr_65315_65342[(2)] = inst_65295);

(statearr_65315_65342[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65314 === (1))){
var inst_65289 = cljs.core.seq.call(null,coll);
var inst_65290 = inst_65289;
var state_65313__$1 = (function (){var statearr_65316 = state_65313;
(statearr_65316[(7)] = inst_65290);

return statearr_65316;
})();
var statearr_65317_65343 = state_65313__$1;
(statearr_65317_65343[(2)] = null);

(statearr_65317_65343[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65314 === (4))){
var inst_65290 = (state_65313[(7)]);
var inst_65293 = cljs.core.first.call(null,inst_65290);
var state_65313__$1 = state_65313;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_65313__$1,(7),ch,inst_65293);
} else {
if((state_val_65314 === (13))){
var inst_65307 = (state_65313[(2)]);
var state_65313__$1 = state_65313;
var statearr_65318_65344 = state_65313__$1;
(statearr_65318_65344[(2)] = inst_65307);

(statearr_65318_65344[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65314 === (6))){
var inst_65298 = (state_65313[(2)]);
var state_65313__$1 = state_65313;
if(cljs.core.truth_(inst_65298)){
var statearr_65319_65345 = state_65313__$1;
(statearr_65319_65345[(1)] = (8));

} else {
var statearr_65320_65346 = state_65313__$1;
(statearr_65320_65346[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65314 === (3))){
var inst_65311 = (state_65313[(2)]);
var state_65313__$1 = state_65313;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_65313__$1,inst_65311);
} else {
if((state_val_65314 === (12))){
var state_65313__$1 = state_65313;
var statearr_65321_65347 = state_65313__$1;
(statearr_65321_65347[(2)] = null);

(statearr_65321_65347[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65314 === (2))){
var inst_65290 = (state_65313[(7)]);
var state_65313__$1 = state_65313;
if(cljs.core.truth_(inst_65290)){
var statearr_65322_65348 = state_65313__$1;
(statearr_65322_65348[(1)] = (4));

} else {
var statearr_65323_65349 = state_65313__$1;
(statearr_65323_65349[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65314 === (11))){
var inst_65304 = cljs.core.async.close_BANG_.call(null,ch);
var state_65313__$1 = state_65313;
var statearr_65324_65350 = state_65313__$1;
(statearr_65324_65350[(2)] = inst_65304);

(statearr_65324_65350[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65314 === (9))){
var state_65313__$1 = state_65313;
if(cljs.core.truth_(close_QMARK_)){
var statearr_65325_65351 = state_65313__$1;
(statearr_65325_65351[(1)] = (11));

} else {
var statearr_65326_65352 = state_65313__$1;
(statearr_65326_65352[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65314 === (5))){
var inst_65290 = (state_65313[(7)]);
var state_65313__$1 = state_65313;
var statearr_65327_65353 = state_65313__$1;
(statearr_65327_65353[(2)] = inst_65290);

(statearr_65327_65353[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65314 === (10))){
var inst_65309 = (state_65313[(2)]);
var state_65313__$1 = state_65313;
var statearr_65328_65354 = state_65313__$1;
(statearr_65328_65354[(2)] = inst_65309);

(statearr_65328_65354[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65314 === (8))){
var inst_65290 = (state_65313[(7)]);
var inst_65300 = cljs.core.next.call(null,inst_65290);
var inst_65290__$1 = inst_65300;
var state_65313__$1 = (function (){var statearr_65329 = state_65313;
(statearr_65329[(7)] = inst_65290__$1);

return statearr_65329;
})();
var statearr_65330_65355 = state_65313__$1;
(statearr_65330_65355[(2)] = null);

(statearr_65330_65355[(1)] = (2));


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
});})(c__49719__auto__))
;
return ((function (switch__49607__auto__,c__49719__auto__){
return (function() {
var cljs$core$async$state_machine__49608__auto__ = null;
var cljs$core$async$state_machine__49608__auto____0 = (function (){
var statearr_65334 = [null,null,null,null,null,null,null,null];
(statearr_65334[(0)] = cljs$core$async$state_machine__49608__auto__);

(statearr_65334[(1)] = (1));

return statearr_65334;
});
var cljs$core$async$state_machine__49608__auto____1 = (function (state_65313){
while(true){
var ret_value__49609__auto__ = (function (){try{while(true){
var result__49610__auto__ = switch__49607__auto__.call(null,state_65313);
if(cljs.core.keyword_identical_QMARK_.call(null,result__49610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49610__auto__;
}
break;
}
}catch (e65335){if((e65335 instanceof Object)){
var ex__49611__auto__ = e65335;
var statearr_65336_65356 = state_65313;
(statearr_65336_65356[(5)] = ex__49611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_65313);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e65335;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__49609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65357 = state_65313;
state_65313 = G__65357;
continue;
} else {
return ret_value__49609__auto__;
}
break;
}
});
cljs$core$async$state_machine__49608__auto__ = function(state_65313){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__49608__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__49608__auto____1.call(this,state_65313);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__49608__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__49608__auto____0;
cljs$core$async$state_machine__49608__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__49608__auto____1;
return cljs$core$async$state_machine__49608__auto__;
})()
;})(switch__49607__auto__,c__49719__auto__))
})();
var state__49721__auto__ = (function (){var statearr_65337 = f__49720__auto__.call(null);
(statearr_65337[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__49719__auto__);

return statearr_65337;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__49721__auto__);
});})(c__49719__auto__))
);

return c__49719__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__48210__auto__ = (((_ == null))?null:_);
var m__48211__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__48210__auto__)]);
if(!((m__48211__auto__ == null))){
return m__48211__auto__.call(null,_);
} else {
var m__48211__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__48211__auto____$1 == null))){
return m__48211__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__48210__auto__ = (((m == null))?null:m);
var m__48211__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__48210__auto__)]);
if(!((m__48211__auto__ == null))){
return m__48211__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__48211__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__48211__auto____$1 == null))){
return m__48211__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__48210__auto__ = (((m == null))?null:m);
var m__48211__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__48210__auto__)]);
if(!((m__48211__auto__ == null))){
return m__48211__auto__.call(null,m,ch);
} else {
var m__48211__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__48211__auto____$1 == null))){
return m__48211__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__48210__auto__ = (((m == null))?null:m);
var m__48211__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__48210__auto__)]);
if(!((m__48211__auto__ == null))){
return m__48211__auto__.call(null,m);
} else {
var m__48211__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__48211__auto____$1 == null))){
return m__48211__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async65583 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async65583 = (function (mult,ch,cs,meta65584){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta65584 = meta65584;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async65583.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_65585,meta65584__$1){
var self__ = this;
var _65585__$1 = this;
return (new cljs.core.async.t_cljs$core$async65583(self__.mult,self__.ch,self__.cs,meta65584__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async65583.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_65585){
var self__ = this;
var _65585__$1 = this;
return self__.meta65584;
});})(cs))
;

cljs.core.async.t_cljs$core$async65583.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async65583.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async65583.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async65583.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async65583.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async65583.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async65583.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta65584","meta65584",-1301772870,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async65583.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async65583.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async65583";

cljs.core.async.t_cljs$core$async65583.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__48153__auto__,writer__48154__auto__,opt__48155__auto__){
return cljs.core._write.call(null,writer__48154__auto__,"cljs.core.async/t_cljs$core$async65583");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async65583 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async65583(mult__$1,ch__$1,cs__$1,meta65584){
return (new cljs.core.async.t_cljs$core$async65583(mult__$1,ch__$1,cs__$1,meta65584));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async65583(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__49719__auto___65808 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__49719__auto___65808,cs,m,dchan,dctr,done){
return (function (){
var f__49720__auto__ = (function (){var switch__49607__auto__ = ((function (c__49719__auto___65808,cs,m,dchan,dctr,done){
return (function (state_65720){
var state_val_65721 = (state_65720[(1)]);
if((state_val_65721 === (7))){
var inst_65716 = (state_65720[(2)]);
var state_65720__$1 = state_65720;
var statearr_65722_65809 = state_65720__$1;
(statearr_65722_65809[(2)] = inst_65716);

(statearr_65722_65809[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65721 === (20))){
var inst_65619 = (state_65720[(7)]);
var inst_65631 = cljs.core.first.call(null,inst_65619);
var inst_65632 = cljs.core.nth.call(null,inst_65631,(0),null);
var inst_65633 = cljs.core.nth.call(null,inst_65631,(1),null);
var state_65720__$1 = (function (){var statearr_65723 = state_65720;
(statearr_65723[(8)] = inst_65632);

return statearr_65723;
})();
if(cljs.core.truth_(inst_65633)){
var statearr_65724_65810 = state_65720__$1;
(statearr_65724_65810[(1)] = (22));

} else {
var statearr_65725_65811 = state_65720__$1;
(statearr_65725_65811[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65721 === (27))){
var inst_65661 = (state_65720[(9)]);
var inst_65588 = (state_65720[(10)]);
var inst_65663 = (state_65720[(11)]);
var inst_65668 = (state_65720[(12)]);
var inst_65668__$1 = cljs.core._nth.call(null,inst_65661,inst_65663);
var inst_65669 = cljs.core.async.put_BANG_.call(null,inst_65668__$1,inst_65588,done);
var state_65720__$1 = (function (){var statearr_65726 = state_65720;
(statearr_65726[(12)] = inst_65668__$1);

return statearr_65726;
})();
if(cljs.core.truth_(inst_65669)){
var statearr_65727_65812 = state_65720__$1;
(statearr_65727_65812[(1)] = (30));

} else {
var statearr_65728_65813 = state_65720__$1;
(statearr_65728_65813[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65721 === (1))){
var state_65720__$1 = state_65720;
var statearr_65729_65814 = state_65720__$1;
(statearr_65729_65814[(2)] = null);

(statearr_65729_65814[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65721 === (24))){
var inst_65619 = (state_65720[(7)]);
var inst_65638 = (state_65720[(2)]);
var inst_65639 = cljs.core.next.call(null,inst_65619);
var inst_65597 = inst_65639;
var inst_65598 = null;
var inst_65599 = (0);
var inst_65600 = (0);
var state_65720__$1 = (function (){var statearr_65730 = state_65720;
(statearr_65730[(13)] = inst_65598);

(statearr_65730[(14)] = inst_65599);

(statearr_65730[(15)] = inst_65638);

(statearr_65730[(16)] = inst_65597);

(statearr_65730[(17)] = inst_65600);

return statearr_65730;
})();
var statearr_65731_65815 = state_65720__$1;
(statearr_65731_65815[(2)] = null);

(statearr_65731_65815[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65721 === (39))){
var state_65720__$1 = state_65720;
var statearr_65735_65816 = state_65720__$1;
(statearr_65735_65816[(2)] = null);

(statearr_65735_65816[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65721 === (4))){
var inst_65588 = (state_65720[(10)]);
var inst_65588__$1 = (state_65720[(2)]);
var inst_65589 = (inst_65588__$1 == null);
var state_65720__$1 = (function (){var statearr_65736 = state_65720;
(statearr_65736[(10)] = inst_65588__$1);

return statearr_65736;
})();
if(cljs.core.truth_(inst_65589)){
var statearr_65737_65817 = state_65720__$1;
(statearr_65737_65817[(1)] = (5));

} else {
var statearr_65738_65818 = state_65720__$1;
(statearr_65738_65818[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65721 === (15))){
var inst_65598 = (state_65720[(13)]);
var inst_65599 = (state_65720[(14)]);
var inst_65597 = (state_65720[(16)]);
var inst_65600 = (state_65720[(17)]);
var inst_65615 = (state_65720[(2)]);
var inst_65616 = (inst_65600 + (1));
var tmp65732 = inst_65598;
var tmp65733 = inst_65599;
var tmp65734 = inst_65597;
var inst_65597__$1 = tmp65734;
var inst_65598__$1 = tmp65732;
var inst_65599__$1 = tmp65733;
var inst_65600__$1 = inst_65616;
var state_65720__$1 = (function (){var statearr_65739 = state_65720;
(statearr_65739[(13)] = inst_65598__$1);

(statearr_65739[(18)] = inst_65615);

(statearr_65739[(14)] = inst_65599__$1);

(statearr_65739[(16)] = inst_65597__$1);

(statearr_65739[(17)] = inst_65600__$1);

return statearr_65739;
})();
var statearr_65740_65819 = state_65720__$1;
(statearr_65740_65819[(2)] = null);

(statearr_65740_65819[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65721 === (21))){
var inst_65642 = (state_65720[(2)]);
var state_65720__$1 = state_65720;
var statearr_65744_65820 = state_65720__$1;
(statearr_65744_65820[(2)] = inst_65642);

(statearr_65744_65820[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65721 === (31))){
var inst_65668 = (state_65720[(12)]);
var inst_65672 = done.call(null,null);
var inst_65673 = cljs.core.async.untap_STAR_.call(null,m,inst_65668);
var state_65720__$1 = (function (){var statearr_65745 = state_65720;
(statearr_65745[(19)] = inst_65672);

return statearr_65745;
})();
var statearr_65746_65821 = state_65720__$1;
(statearr_65746_65821[(2)] = inst_65673);

(statearr_65746_65821[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65721 === (32))){
var inst_65660 = (state_65720[(20)]);
var inst_65661 = (state_65720[(9)]);
var inst_65662 = (state_65720[(21)]);
var inst_65663 = (state_65720[(11)]);
var inst_65675 = (state_65720[(2)]);
var inst_65676 = (inst_65663 + (1));
var tmp65741 = inst_65660;
var tmp65742 = inst_65661;
var tmp65743 = inst_65662;
var inst_65660__$1 = tmp65741;
var inst_65661__$1 = tmp65742;
var inst_65662__$1 = tmp65743;
var inst_65663__$1 = inst_65676;
var state_65720__$1 = (function (){var statearr_65747 = state_65720;
(statearr_65747[(20)] = inst_65660__$1);

(statearr_65747[(9)] = inst_65661__$1);

(statearr_65747[(21)] = inst_65662__$1);

(statearr_65747[(11)] = inst_65663__$1);

(statearr_65747[(22)] = inst_65675);

return statearr_65747;
})();
var statearr_65748_65822 = state_65720__$1;
(statearr_65748_65822[(2)] = null);

(statearr_65748_65822[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65721 === (40))){
var inst_65688 = (state_65720[(23)]);
var inst_65692 = done.call(null,null);
var inst_65693 = cljs.core.async.untap_STAR_.call(null,m,inst_65688);
var state_65720__$1 = (function (){var statearr_65749 = state_65720;
(statearr_65749[(24)] = inst_65692);

return statearr_65749;
})();
var statearr_65750_65823 = state_65720__$1;
(statearr_65750_65823[(2)] = inst_65693);

(statearr_65750_65823[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65721 === (33))){
var inst_65679 = (state_65720[(25)]);
var inst_65681 = cljs.core.chunked_seq_QMARK_.call(null,inst_65679);
var state_65720__$1 = state_65720;
if(inst_65681){
var statearr_65751_65824 = state_65720__$1;
(statearr_65751_65824[(1)] = (36));

} else {
var statearr_65752_65825 = state_65720__$1;
(statearr_65752_65825[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65721 === (13))){
var inst_65609 = (state_65720[(26)]);
var inst_65612 = cljs.core.async.close_BANG_.call(null,inst_65609);
var state_65720__$1 = state_65720;
var statearr_65753_65826 = state_65720__$1;
(statearr_65753_65826[(2)] = inst_65612);

(statearr_65753_65826[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65721 === (22))){
var inst_65632 = (state_65720[(8)]);
var inst_65635 = cljs.core.async.close_BANG_.call(null,inst_65632);
var state_65720__$1 = state_65720;
var statearr_65754_65827 = state_65720__$1;
(statearr_65754_65827[(2)] = inst_65635);

(statearr_65754_65827[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65721 === (36))){
var inst_65679 = (state_65720[(25)]);
var inst_65683 = cljs.core.chunk_first.call(null,inst_65679);
var inst_65684 = cljs.core.chunk_rest.call(null,inst_65679);
var inst_65685 = cljs.core.count.call(null,inst_65683);
var inst_65660 = inst_65684;
var inst_65661 = inst_65683;
var inst_65662 = inst_65685;
var inst_65663 = (0);
var state_65720__$1 = (function (){var statearr_65755 = state_65720;
(statearr_65755[(20)] = inst_65660);

(statearr_65755[(9)] = inst_65661);

(statearr_65755[(21)] = inst_65662);

(statearr_65755[(11)] = inst_65663);

return statearr_65755;
})();
var statearr_65756_65828 = state_65720__$1;
(statearr_65756_65828[(2)] = null);

(statearr_65756_65828[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65721 === (41))){
var inst_65679 = (state_65720[(25)]);
var inst_65695 = (state_65720[(2)]);
var inst_65696 = cljs.core.next.call(null,inst_65679);
var inst_65660 = inst_65696;
var inst_65661 = null;
var inst_65662 = (0);
var inst_65663 = (0);
var state_65720__$1 = (function (){var statearr_65757 = state_65720;
(statearr_65757[(20)] = inst_65660);

(statearr_65757[(9)] = inst_65661);

(statearr_65757[(21)] = inst_65662);

(statearr_65757[(11)] = inst_65663);

(statearr_65757[(27)] = inst_65695);

return statearr_65757;
})();
var statearr_65758_65829 = state_65720__$1;
(statearr_65758_65829[(2)] = null);

(statearr_65758_65829[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65721 === (43))){
var state_65720__$1 = state_65720;
var statearr_65759_65830 = state_65720__$1;
(statearr_65759_65830[(2)] = null);

(statearr_65759_65830[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65721 === (29))){
var inst_65704 = (state_65720[(2)]);
var state_65720__$1 = state_65720;
var statearr_65760_65831 = state_65720__$1;
(statearr_65760_65831[(2)] = inst_65704);

(statearr_65760_65831[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65721 === (44))){
var inst_65713 = (state_65720[(2)]);
var state_65720__$1 = (function (){var statearr_65761 = state_65720;
(statearr_65761[(28)] = inst_65713);

return statearr_65761;
})();
var statearr_65762_65832 = state_65720__$1;
(statearr_65762_65832[(2)] = null);

(statearr_65762_65832[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65721 === (6))){
var inst_65652 = (state_65720[(29)]);
var inst_65651 = cljs.core.deref.call(null,cs);
var inst_65652__$1 = cljs.core.keys.call(null,inst_65651);
var inst_65653 = cljs.core.count.call(null,inst_65652__$1);
var inst_65654 = cljs.core.reset_BANG_.call(null,dctr,inst_65653);
var inst_65659 = cljs.core.seq.call(null,inst_65652__$1);
var inst_65660 = inst_65659;
var inst_65661 = null;
var inst_65662 = (0);
var inst_65663 = (0);
var state_65720__$1 = (function (){var statearr_65763 = state_65720;
(statearr_65763[(20)] = inst_65660);

(statearr_65763[(30)] = inst_65654);

(statearr_65763[(9)] = inst_65661);

(statearr_65763[(21)] = inst_65662);

(statearr_65763[(11)] = inst_65663);

(statearr_65763[(29)] = inst_65652__$1);

return statearr_65763;
})();
var statearr_65764_65833 = state_65720__$1;
(statearr_65764_65833[(2)] = null);

(statearr_65764_65833[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65721 === (28))){
var inst_65660 = (state_65720[(20)]);
var inst_65679 = (state_65720[(25)]);
var inst_65679__$1 = cljs.core.seq.call(null,inst_65660);
var state_65720__$1 = (function (){var statearr_65765 = state_65720;
(statearr_65765[(25)] = inst_65679__$1);

return statearr_65765;
})();
if(inst_65679__$1){
var statearr_65766_65834 = state_65720__$1;
(statearr_65766_65834[(1)] = (33));

} else {
var statearr_65767_65835 = state_65720__$1;
(statearr_65767_65835[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65721 === (25))){
var inst_65662 = (state_65720[(21)]);
var inst_65663 = (state_65720[(11)]);
var inst_65665 = (inst_65663 < inst_65662);
var inst_65666 = inst_65665;
var state_65720__$1 = state_65720;
if(cljs.core.truth_(inst_65666)){
var statearr_65768_65836 = state_65720__$1;
(statearr_65768_65836[(1)] = (27));

} else {
var statearr_65769_65837 = state_65720__$1;
(statearr_65769_65837[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65721 === (34))){
var state_65720__$1 = state_65720;
var statearr_65770_65838 = state_65720__$1;
(statearr_65770_65838[(2)] = null);

(statearr_65770_65838[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65721 === (17))){
var state_65720__$1 = state_65720;
var statearr_65771_65839 = state_65720__$1;
(statearr_65771_65839[(2)] = null);

(statearr_65771_65839[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65721 === (3))){
var inst_65718 = (state_65720[(2)]);
var state_65720__$1 = state_65720;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_65720__$1,inst_65718);
} else {
if((state_val_65721 === (12))){
var inst_65647 = (state_65720[(2)]);
var state_65720__$1 = state_65720;
var statearr_65772_65840 = state_65720__$1;
(statearr_65772_65840[(2)] = inst_65647);

(statearr_65772_65840[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65721 === (2))){
var state_65720__$1 = state_65720;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_65720__$1,(4),ch);
} else {
if((state_val_65721 === (23))){
var state_65720__$1 = state_65720;
var statearr_65773_65841 = state_65720__$1;
(statearr_65773_65841[(2)] = null);

(statearr_65773_65841[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65721 === (35))){
var inst_65702 = (state_65720[(2)]);
var state_65720__$1 = state_65720;
var statearr_65774_65842 = state_65720__$1;
(statearr_65774_65842[(2)] = inst_65702);

(statearr_65774_65842[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65721 === (19))){
var inst_65619 = (state_65720[(7)]);
var inst_65623 = cljs.core.chunk_first.call(null,inst_65619);
var inst_65624 = cljs.core.chunk_rest.call(null,inst_65619);
var inst_65625 = cljs.core.count.call(null,inst_65623);
var inst_65597 = inst_65624;
var inst_65598 = inst_65623;
var inst_65599 = inst_65625;
var inst_65600 = (0);
var state_65720__$1 = (function (){var statearr_65775 = state_65720;
(statearr_65775[(13)] = inst_65598);

(statearr_65775[(14)] = inst_65599);

(statearr_65775[(16)] = inst_65597);

(statearr_65775[(17)] = inst_65600);

return statearr_65775;
})();
var statearr_65776_65843 = state_65720__$1;
(statearr_65776_65843[(2)] = null);

(statearr_65776_65843[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65721 === (11))){
var inst_65619 = (state_65720[(7)]);
var inst_65597 = (state_65720[(16)]);
var inst_65619__$1 = cljs.core.seq.call(null,inst_65597);
var state_65720__$1 = (function (){var statearr_65777 = state_65720;
(statearr_65777[(7)] = inst_65619__$1);

return statearr_65777;
})();
if(inst_65619__$1){
var statearr_65778_65844 = state_65720__$1;
(statearr_65778_65844[(1)] = (16));

} else {
var statearr_65779_65845 = state_65720__$1;
(statearr_65779_65845[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65721 === (9))){
var inst_65649 = (state_65720[(2)]);
var state_65720__$1 = state_65720;
var statearr_65780_65846 = state_65720__$1;
(statearr_65780_65846[(2)] = inst_65649);

(statearr_65780_65846[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65721 === (5))){
var inst_65595 = cljs.core.deref.call(null,cs);
var inst_65596 = cljs.core.seq.call(null,inst_65595);
var inst_65597 = inst_65596;
var inst_65598 = null;
var inst_65599 = (0);
var inst_65600 = (0);
var state_65720__$1 = (function (){var statearr_65781 = state_65720;
(statearr_65781[(13)] = inst_65598);

(statearr_65781[(14)] = inst_65599);

(statearr_65781[(16)] = inst_65597);

(statearr_65781[(17)] = inst_65600);

return statearr_65781;
})();
var statearr_65782_65847 = state_65720__$1;
(statearr_65782_65847[(2)] = null);

(statearr_65782_65847[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65721 === (14))){
var state_65720__$1 = state_65720;
var statearr_65783_65848 = state_65720__$1;
(statearr_65783_65848[(2)] = null);

(statearr_65783_65848[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65721 === (45))){
var inst_65710 = (state_65720[(2)]);
var state_65720__$1 = state_65720;
var statearr_65784_65849 = state_65720__$1;
(statearr_65784_65849[(2)] = inst_65710);

(statearr_65784_65849[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65721 === (26))){
var inst_65652 = (state_65720[(29)]);
var inst_65706 = (state_65720[(2)]);
var inst_65707 = cljs.core.seq.call(null,inst_65652);
var state_65720__$1 = (function (){var statearr_65785 = state_65720;
(statearr_65785[(31)] = inst_65706);

return statearr_65785;
})();
if(inst_65707){
var statearr_65786_65850 = state_65720__$1;
(statearr_65786_65850[(1)] = (42));

} else {
var statearr_65787_65851 = state_65720__$1;
(statearr_65787_65851[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65721 === (16))){
var inst_65619 = (state_65720[(7)]);
var inst_65621 = cljs.core.chunked_seq_QMARK_.call(null,inst_65619);
var state_65720__$1 = state_65720;
if(inst_65621){
var statearr_65788_65852 = state_65720__$1;
(statearr_65788_65852[(1)] = (19));

} else {
var statearr_65789_65853 = state_65720__$1;
(statearr_65789_65853[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65721 === (38))){
var inst_65699 = (state_65720[(2)]);
var state_65720__$1 = state_65720;
var statearr_65790_65854 = state_65720__$1;
(statearr_65790_65854[(2)] = inst_65699);

(statearr_65790_65854[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65721 === (30))){
var state_65720__$1 = state_65720;
var statearr_65791_65855 = state_65720__$1;
(statearr_65791_65855[(2)] = null);

(statearr_65791_65855[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65721 === (10))){
var inst_65598 = (state_65720[(13)]);
var inst_65600 = (state_65720[(17)]);
var inst_65608 = cljs.core._nth.call(null,inst_65598,inst_65600);
var inst_65609 = cljs.core.nth.call(null,inst_65608,(0),null);
var inst_65610 = cljs.core.nth.call(null,inst_65608,(1),null);
var state_65720__$1 = (function (){var statearr_65792 = state_65720;
(statearr_65792[(26)] = inst_65609);

return statearr_65792;
})();
if(cljs.core.truth_(inst_65610)){
var statearr_65793_65856 = state_65720__$1;
(statearr_65793_65856[(1)] = (13));

} else {
var statearr_65794_65857 = state_65720__$1;
(statearr_65794_65857[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65721 === (18))){
var inst_65645 = (state_65720[(2)]);
var state_65720__$1 = state_65720;
var statearr_65795_65858 = state_65720__$1;
(statearr_65795_65858[(2)] = inst_65645);

(statearr_65795_65858[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65721 === (42))){
var state_65720__$1 = state_65720;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_65720__$1,(45),dchan);
} else {
if((state_val_65721 === (37))){
var inst_65588 = (state_65720[(10)]);
var inst_65679 = (state_65720[(25)]);
var inst_65688 = (state_65720[(23)]);
var inst_65688__$1 = cljs.core.first.call(null,inst_65679);
var inst_65689 = cljs.core.async.put_BANG_.call(null,inst_65688__$1,inst_65588,done);
var state_65720__$1 = (function (){var statearr_65796 = state_65720;
(statearr_65796[(23)] = inst_65688__$1);

return statearr_65796;
})();
if(cljs.core.truth_(inst_65689)){
var statearr_65797_65859 = state_65720__$1;
(statearr_65797_65859[(1)] = (39));

} else {
var statearr_65798_65860 = state_65720__$1;
(statearr_65798_65860[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65721 === (8))){
var inst_65599 = (state_65720[(14)]);
var inst_65600 = (state_65720[(17)]);
var inst_65602 = (inst_65600 < inst_65599);
var inst_65603 = inst_65602;
var state_65720__$1 = state_65720;
if(cljs.core.truth_(inst_65603)){
var statearr_65799_65861 = state_65720__$1;
(statearr_65799_65861[(1)] = (10));

} else {
var statearr_65800_65862 = state_65720__$1;
(statearr_65800_65862[(1)] = (11));

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
});})(c__49719__auto___65808,cs,m,dchan,dctr,done))
;
return ((function (switch__49607__auto__,c__49719__auto___65808,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__49608__auto__ = null;
var cljs$core$async$mult_$_state_machine__49608__auto____0 = (function (){
var statearr_65804 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_65804[(0)] = cljs$core$async$mult_$_state_machine__49608__auto__);

(statearr_65804[(1)] = (1));

return statearr_65804;
});
var cljs$core$async$mult_$_state_machine__49608__auto____1 = (function (state_65720){
while(true){
var ret_value__49609__auto__ = (function (){try{while(true){
var result__49610__auto__ = switch__49607__auto__.call(null,state_65720);
if(cljs.core.keyword_identical_QMARK_.call(null,result__49610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49610__auto__;
}
break;
}
}catch (e65805){if((e65805 instanceof Object)){
var ex__49611__auto__ = e65805;
var statearr_65806_65863 = state_65720;
(statearr_65806_65863[(5)] = ex__49611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_65720);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e65805;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__49609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65864 = state_65720;
state_65720 = G__65864;
continue;
} else {
return ret_value__49609__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__49608__auto__ = function(state_65720){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__49608__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__49608__auto____1.call(this,state_65720);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__49608__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__49608__auto____0;
cljs$core$async$mult_$_state_machine__49608__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__49608__auto____1;
return cljs$core$async$mult_$_state_machine__49608__auto__;
})()
;})(switch__49607__auto__,c__49719__auto___65808,cs,m,dchan,dctr,done))
})();
var state__49721__auto__ = (function (){var statearr_65807 = f__49720__auto__.call(null);
(statearr_65807[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__49719__auto___65808);

return statearr_65807;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__49721__auto__);
});})(c__49719__auto___65808,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args65865 = [];
var len__48622__auto___65868 = arguments.length;
var i__48623__auto___65869 = (0);
while(true){
if((i__48623__auto___65869 < len__48622__auto___65868)){
args65865.push((arguments[i__48623__auto___65869]));

var G__65870 = (i__48623__auto___65869 + (1));
i__48623__auto___65869 = G__65870;
continue;
} else {
}
break;
}

var G__65867 = args65865.length;
switch (G__65867) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args65865.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__48210__auto__ = (((m == null))?null:m);
var m__48211__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__48210__auto__)]);
if(!((m__48211__auto__ == null))){
return m__48211__auto__.call(null,m,ch);
} else {
var m__48211__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__48211__auto____$1 == null))){
return m__48211__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__48210__auto__ = (((m == null))?null:m);
var m__48211__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__48210__auto__)]);
if(!((m__48211__auto__ == null))){
return m__48211__auto__.call(null,m,ch);
} else {
var m__48211__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__48211__auto____$1 == null))){
return m__48211__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__48210__auto__ = (((m == null))?null:m);
var m__48211__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__48210__auto__)]);
if(!((m__48211__auto__ == null))){
return m__48211__auto__.call(null,m);
} else {
var m__48211__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__48211__auto____$1 == null))){
return m__48211__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__48210__auto__ = (((m == null))?null:m);
var m__48211__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__48210__auto__)]);
if(!((m__48211__auto__ == null))){
return m__48211__auto__.call(null,m,state_map);
} else {
var m__48211__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__48211__auto____$1 == null))){
return m__48211__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__48210__auto__ = (((m == null))?null:m);
var m__48211__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__48210__auto__)]);
if(!((m__48211__auto__ == null))){
return m__48211__auto__.call(null,m,mode);
} else {
var m__48211__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__48211__auto____$1 == null))){
return m__48211__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__48629__auto__ = [];
var len__48622__auto___65882 = arguments.length;
var i__48623__auto___65883 = (0);
while(true){
if((i__48623__auto___65883 < len__48622__auto___65882)){
args__48629__auto__.push((arguments[i__48623__auto___65883]));

var G__65884 = (i__48623__auto___65883 + (1));
i__48623__auto___65883 = G__65884;
continue;
} else {
}
break;
}

var argseq__48630__auto__ = ((((3) < args__48629__auto__.length))?(new cljs.core.IndexedSeq(args__48629__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__48630__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__65876){
var map__65877 = p__65876;
var map__65877__$1 = ((((!((map__65877 == null)))?((((map__65877.cljs$lang$protocol_mask$partition0$ & (64))) || (map__65877.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__65877):map__65877);
var opts = map__65877__$1;
var statearr_65879_65885 = state;
(statearr_65879_65885[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__65877,map__65877__$1,opts){
return (function (val){
var statearr_65880_65886 = state;
(statearr_65880_65886[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__65877,map__65877__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_65881_65887 = state;
(statearr_65881_65887[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq65872){
var G__65873 = cljs.core.first.call(null,seq65872);
var seq65872__$1 = cljs.core.next.call(null,seq65872);
var G__65874 = cljs.core.first.call(null,seq65872__$1);
var seq65872__$2 = cljs.core.next.call(null,seq65872__$1);
var G__65875 = cljs.core.first.call(null,seq65872__$2);
var seq65872__$3 = cljs.core.next.call(null,seq65872__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__65873,G__65874,G__65875,seq65872__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async66053 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async66053 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta66054){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta66054 = meta66054;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async66053.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_66055,meta66054__$1){
var self__ = this;
var _66055__$1 = this;
return (new cljs.core.async.t_cljs$core$async66053(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta66054__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async66053.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_66055){
var self__ = this;
var _66055__$1 = this;
return self__.meta66054;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async66053.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async66053.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async66053.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async66053.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async66053.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async66053.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async66053.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async66053.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async66053.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta66054","meta66054",-849198897,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async66053.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async66053.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async66053";

cljs.core.async.t_cljs$core$async66053.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__48153__auto__,writer__48154__auto__,opt__48155__auto__){
return cljs.core._write.call(null,writer__48154__auto__,"cljs.core.async/t_cljs$core$async66053");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async66053 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async66053(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta66054){
return (new cljs.core.async.t_cljs$core$async66053(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta66054));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async66053(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__49719__auto___66218 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__49719__auto___66218,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__49720__auto__ = (function (){var switch__49607__auto__ = ((function (c__49719__auto___66218,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_66155){
var state_val_66156 = (state_66155[(1)]);
if((state_val_66156 === (7))){
var inst_66071 = (state_66155[(2)]);
var state_66155__$1 = state_66155;
var statearr_66157_66219 = state_66155__$1;
(statearr_66157_66219[(2)] = inst_66071);

(statearr_66157_66219[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66156 === (20))){
var inst_66083 = (state_66155[(7)]);
var state_66155__$1 = state_66155;
var statearr_66158_66220 = state_66155__$1;
(statearr_66158_66220[(2)] = inst_66083);

(statearr_66158_66220[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66156 === (27))){
var state_66155__$1 = state_66155;
var statearr_66159_66221 = state_66155__$1;
(statearr_66159_66221[(2)] = null);

(statearr_66159_66221[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66156 === (1))){
var inst_66059 = (state_66155[(8)]);
var inst_66059__$1 = calc_state.call(null);
var inst_66061 = (inst_66059__$1 == null);
var inst_66062 = cljs.core.not.call(null,inst_66061);
var state_66155__$1 = (function (){var statearr_66160 = state_66155;
(statearr_66160[(8)] = inst_66059__$1);

return statearr_66160;
})();
if(inst_66062){
var statearr_66161_66222 = state_66155__$1;
(statearr_66161_66222[(1)] = (2));

} else {
var statearr_66162_66223 = state_66155__$1;
(statearr_66162_66223[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66156 === (24))){
var inst_66106 = (state_66155[(9)]);
var inst_66129 = (state_66155[(10)]);
var inst_66115 = (state_66155[(11)]);
var inst_66129__$1 = inst_66106.call(null,inst_66115);
var state_66155__$1 = (function (){var statearr_66163 = state_66155;
(statearr_66163[(10)] = inst_66129__$1);

return statearr_66163;
})();
if(cljs.core.truth_(inst_66129__$1)){
var statearr_66164_66224 = state_66155__$1;
(statearr_66164_66224[(1)] = (29));

} else {
var statearr_66165_66225 = state_66155__$1;
(statearr_66165_66225[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66156 === (4))){
var inst_66074 = (state_66155[(2)]);
var state_66155__$1 = state_66155;
if(cljs.core.truth_(inst_66074)){
var statearr_66166_66226 = state_66155__$1;
(statearr_66166_66226[(1)] = (8));

} else {
var statearr_66167_66227 = state_66155__$1;
(statearr_66167_66227[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66156 === (15))){
var inst_66100 = (state_66155[(2)]);
var state_66155__$1 = state_66155;
if(cljs.core.truth_(inst_66100)){
var statearr_66168_66228 = state_66155__$1;
(statearr_66168_66228[(1)] = (19));

} else {
var statearr_66169_66229 = state_66155__$1;
(statearr_66169_66229[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66156 === (21))){
var inst_66105 = (state_66155[(12)]);
var inst_66105__$1 = (state_66155[(2)]);
var inst_66106 = cljs.core.get.call(null,inst_66105__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_66107 = cljs.core.get.call(null,inst_66105__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_66108 = cljs.core.get.call(null,inst_66105__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_66155__$1 = (function (){var statearr_66170 = state_66155;
(statearr_66170[(13)] = inst_66107);

(statearr_66170[(9)] = inst_66106);

(statearr_66170[(12)] = inst_66105__$1);

return statearr_66170;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_66155__$1,(22),inst_66108);
} else {
if((state_val_66156 === (31))){
var inst_66137 = (state_66155[(2)]);
var state_66155__$1 = state_66155;
if(cljs.core.truth_(inst_66137)){
var statearr_66171_66230 = state_66155__$1;
(statearr_66171_66230[(1)] = (32));

} else {
var statearr_66172_66231 = state_66155__$1;
(statearr_66172_66231[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66156 === (32))){
var inst_66114 = (state_66155[(14)]);
var state_66155__$1 = state_66155;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_66155__$1,(35),out,inst_66114);
} else {
if((state_val_66156 === (33))){
var inst_66105 = (state_66155[(12)]);
var inst_66083 = inst_66105;
var state_66155__$1 = (function (){var statearr_66173 = state_66155;
(statearr_66173[(7)] = inst_66083);

return statearr_66173;
})();
var statearr_66174_66232 = state_66155__$1;
(statearr_66174_66232[(2)] = null);

(statearr_66174_66232[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66156 === (13))){
var inst_66083 = (state_66155[(7)]);
var inst_66090 = inst_66083.cljs$lang$protocol_mask$partition0$;
var inst_66091 = (inst_66090 & (64));
var inst_66092 = inst_66083.cljs$core$ISeq$;
var inst_66093 = (inst_66091) || (inst_66092);
var state_66155__$1 = state_66155;
if(cljs.core.truth_(inst_66093)){
var statearr_66175_66233 = state_66155__$1;
(statearr_66175_66233[(1)] = (16));

} else {
var statearr_66176_66234 = state_66155__$1;
(statearr_66176_66234[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66156 === (22))){
var inst_66114 = (state_66155[(14)]);
var inst_66115 = (state_66155[(11)]);
var inst_66113 = (state_66155[(2)]);
var inst_66114__$1 = cljs.core.nth.call(null,inst_66113,(0),null);
var inst_66115__$1 = cljs.core.nth.call(null,inst_66113,(1),null);
var inst_66116 = (inst_66114__$1 == null);
var inst_66117 = cljs.core._EQ_.call(null,inst_66115__$1,change);
var inst_66118 = (inst_66116) || (inst_66117);
var state_66155__$1 = (function (){var statearr_66177 = state_66155;
(statearr_66177[(14)] = inst_66114__$1);

(statearr_66177[(11)] = inst_66115__$1);

return statearr_66177;
})();
if(cljs.core.truth_(inst_66118)){
var statearr_66178_66235 = state_66155__$1;
(statearr_66178_66235[(1)] = (23));

} else {
var statearr_66179_66236 = state_66155__$1;
(statearr_66179_66236[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66156 === (36))){
var inst_66105 = (state_66155[(12)]);
var inst_66083 = inst_66105;
var state_66155__$1 = (function (){var statearr_66180 = state_66155;
(statearr_66180[(7)] = inst_66083);

return statearr_66180;
})();
var statearr_66181_66237 = state_66155__$1;
(statearr_66181_66237[(2)] = null);

(statearr_66181_66237[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66156 === (29))){
var inst_66129 = (state_66155[(10)]);
var state_66155__$1 = state_66155;
var statearr_66182_66238 = state_66155__$1;
(statearr_66182_66238[(2)] = inst_66129);

(statearr_66182_66238[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66156 === (6))){
var state_66155__$1 = state_66155;
var statearr_66183_66239 = state_66155__$1;
(statearr_66183_66239[(2)] = false);

(statearr_66183_66239[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66156 === (28))){
var inst_66125 = (state_66155[(2)]);
var inst_66126 = calc_state.call(null);
var inst_66083 = inst_66126;
var state_66155__$1 = (function (){var statearr_66184 = state_66155;
(statearr_66184[(7)] = inst_66083);

(statearr_66184[(15)] = inst_66125);

return statearr_66184;
})();
var statearr_66185_66240 = state_66155__$1;
(statearr_66185_66240[(2)] = null);

(statearr_66185_66240[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66156 === (25))){
var inst_66151 = (state_66155[(2)]);
var state_66155__$1 = state_66155;
var statearr_66186_66241 = state_66155__$1;
(statearr_66186_66241[(2)] = inst_66151);

(statearr_66186_66241[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66156 === (34))){
var inst_66149 = (state_66155[(2)]);
var state_66155__$1 = state_66155;
var statearr_66187_66242 = state_66155__$1;
(statearr_66187_66242[(2)] = inst_66149);

(statearr_66187_66242[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66156 === (17))){
var state_66155__$1 = state_66155;
var statearr_66188_66243 = state_66155__$1;
(statearr_66188_66243[(2)] = false);

(statearr_66188_66243[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66156 === (3))){
var state_66155__$1 = state_66155;
var statearr_66189_66244 = state_66155__$1;
(statearr_66189_66244[(2)] = false);

(statearr_66189_66244[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66156 === (12))){
var inst_66153 = (state_66155[(2)]);
var state_66155__$1 = state_66155;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_66155__$1,inst_66153);
} else {
if((state_val_66156 === (2))){
var inst_66059 = (state_66155[(8)]);
var inst_66064 = inst_66059.cljs$lang$protocol_mask$partition0$;
var inst_66065 = (inst_66064 & (64));
var inst_66066 = inst_66059.cljs$core$ISeq$;
var inst_66067 = (inst_66065) || (inst_66066);
var state_66155__$1 = state_66155;
if(cljs.core.truth_(inst_66067)){
var statearr_66190_66245 = state_66155__$1;
(statearr_66190_66245[(1)] = (5));

} else {
var statearr_66191_66246 = state_66155__$1;
(statearr_66191_66246[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66156 === (23))){
var inst_66114 = (state_66155[(14)]);
var inst_66120 = (inst_66114 == null);
var state_66155__$1 = state_66155;
if(cljs.core.truth_(inst_66120)){
var statearr_66192_66247 = state_66155__$1;
(statearr_66192_66247[(1)] = (26));

} else {
var statearr_66193_66248 = state_66155__$1;
(statearr_66193_66248[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66156 === (35))){
var inst_66140 = (state_66155[(2)]);
var state_66155__$1 = state_66155;
if(cljs.core.truth_(inst_66140)){
var statearr_66194_66249 = state_66155__$1;
(statearr_66194_66249[(1)] = (36));

} else {
var statearr_66195_66250 = state_66155__$1;
(statearr_66195_66250[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66156 === (19))){
var inst_66083 = (state_66155[(7)]);
var inst_66102 = cljs.core.apply.call(null,cljs.core.hash_map,inst_66083);
var state_66155__$1 = state_66155;
var statearr_66196_66251 = state_66155__$1;
(statearr_66196_66251[(2)] = inst_66102);

(statearr_66196_66251[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66156 === (11))){
var inst_66083 = (state_66155[(7)]);
var inst_66087 = (inst_66083 == null);
var inst_66088 = cljs.core.not.call(null,inst_66087);
var state_66155__$1 = state_66155;
if(inst_66088){
var statearr_66197_66252 = state_66155__$1;
(statearr_66197_66252[(1)] = (13));

} else {
var statearr_66198_66253 = state_66155__$1;
(statearr_66198_66253[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66156 === (9))){
var inst_66059 = (state_66155[(8)]);
var state_66155__$1 = state_66155;
var statearr_66199_66254 = state_66155__$1;
(statearr_66199_66254[(2)] = inst_66059);

(statearr_66199_66254[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66156 === (5))){
var state_66155__$1 = state_66155;
var statearr_66200_66255 = state_66155__$1;
(statearr_66200_66255[(2)] = true);

(statearr_66200_66255[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66156 === (14))){
var state_66155__$1 = state_66155;
var statearr_66201_66256 = state_66155__$1;
(statearr_66201_66256[(2)] = false);

(statearr_66201_66256[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66156 === (26))){
var inst_66115 = (state_66155[(11)]);
var inst_66122 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_66115);
var state_66155__$1 = state_66155;
var statearr_66202_66257 = state_66155__$1;
(statearr_66202_66257[(2)] = inst_66122);

(statearr_66202_66257[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66156 === (16))){
var state_66155__$1 = state_66155;
var statearr_66203_66258 = state_66155__$1;
(statearr_66203_66258[(2)] = true);

(statearr_66203_66258[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66156 === (38))){
var inst_66145 = (state_66155[(2)]);
var state_66155__$1 = state_66155;
var statearr_66204_66259 = state_66155__$1;
(statearr_66204_66259[(2)] = inst_66145);

(statearr_66204_66259[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66156 === (30))){
var inst_66107 = (state_66155[(13)]);
var inst_66106 = (state_66155[(9)]);
var inst_66115 = (state_66155[(11)]);
var inst_66132 = cljs.core.empty_QMARK_.call(null,inst_66106);
var inst_66133 = inst_66107.call(null,inst_66115);
var inst_66134 = cljs.core.not.call(null,inst_66133);
var inst_66135 = (inst_66132) && (inst_66134);
var state_66155__$1 = state_66155;
var statearr_66205_66260 = state_66155__$1;
(statearr_66205_66260[(2)] = inst_66135);

(statearr_66205_66260[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66156 === (10))){
var inst_66059 = (state_66155[(8)]);
var inst_66079 = (state_66155[(2)]);
var inst_66080 = cljs.core.get.call(null,inst_66079,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_66081 = cljs.core.get.call(null,inst_66079,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_66082 = cljs.core.get.call(null,inst_66079,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_66083 = inst_66059;
var state_66155__$1 = (function (){var statearr_66206 = state_66155;
(statearr_66206[(7)] = inst_66083);

(statearr_66206[(16)] = inst_66081);

(statearr_66206[(17)] = inst_66082);

(statearr_66206[(18)] = inst_66080);

return statearr_66206;
})();
var statearr_66207_66261 = state_66155__$1;
(statearr_66207_66261[(2)] = null);

(statearr_66207_66261[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66156 === (18))){
var inst_66097 = (state_66155[(2)]);
var state_66155__$1 = state_66155;
var statearr_66208_66262 = state_66155__$1;
(statearr_66208_66262[(2)] = inst_66097);

(statearr_66208_66262[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66156 === (37))){
var state_66155__$1 = state_66155;
var statearr_66209_66263 = state_66155__$1;
(statearr_66209_66263[(2)] = null);

(statearr_66209_66263[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66156 === (8))){
var inst_66059 = (state_66155[(8)]);
var inst_66076 = cljs.core.apply.call(null,cljs.core.hash_map,inst_66059);
var state_66155__$1 = state_66155;
var statearr_66210_66264 = state_66155__$1;
(statearr_66210_66264[(2)] = inst_66076);

(statearr_66210_66264[(1)] = (10));


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
});})(c__49719__auto___66218,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__49607__auto__,c__49719__auto___66218,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__49608__auto__ = null;
var cljs$core$async$mix_$_state_machine__49608__auto____0 = (function (){
var statearr_66214 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_66214[(0)] = cljs$core$async$mix_$_state_machine__49608__auto__);

(statearr_66214[(1)] = (1));

return statearr_66214;
});
var cljs$core$async$mix_$_state_machine__49608__auto____1 = (function (state_66155){
while(true){
var ret_value__49609__auto__ = (function (){try{while(true){
var result__49610__auto__ = switch__49607__auto__.call(null,state_66155);
if(cljs.core.keyword_identical_QMARK_.call(null,result__49610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49610__auto__;
}
break;
}
}catch (e66215){if((e66215 instanceof Object)){
var ex__49611__auto__ = e66215;
var statearr_66216_66265 = state_66155;
(statearr_66216_66265[(5)] = ex__49611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_66155);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e66215;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__49609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__66266 = state_66155;
state_66155 = G__66266;
continue;
} else {
return ret_value__49609__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__49608__auto__ = function(state_66155){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__49608__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__49608__auto____1.call(this,state_66155);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__49608__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__49608__auto____0;
cljs$core$async$mix_$_state_machine__49608__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__49608__auto____1;
return cljs$core$async$mix_$_state_machine__49608__auto__;
})()
;})(switch__49607__auto__,c__49719__auto___66218,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__49721__auto__ = (function (){var statearr_66217 = f__49720__auto__.call(null);
(statearr_66217[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__49719__auto___66218);

return statearr_66217;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__49721__auto__);
});})(c__49719__auto___66218,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__48210__auto__ = (((p == null))?null:p);
var m__48211__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__48210__auto__)]);
if(!((m__48211__auto__ == null))){
return m__48211__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__48211__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__48211__auto____$1 == null))){
return m__48211__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__48210__auto__ = (((p == null))?null:p);
var m__48211__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__48210__auto__)]);
if(!((m__48211__auto__ == null))){
return m__48211__auto__.call(null,p,v,ch);
} else {
var m__48211__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__48211__auto____$1 == null))){
return m__48211__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args66267 = [];
var len__48622__auto___66270 = arguments.length;
var i__48623__auto___66271 = (0);
while(true){
if((i__48623__auto___66271 < len__48622__auto___66270)){
args66267.push((arguments[i__48623__auto___66271]));

var G__66272 = (i__48623__auto___66271 + (1));
i__48623__auto___66271 = G__66272;
continue;
} else {
}
break;
}

var G__66269 = args66267.length;
switch (G__66269) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args66267.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__48210__auto__ = (((p == null))?null:p);
var m__48211__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__48210__auto__)]);
if(!((m__48211__auto__ == null))){
return m__48211__auto__.call(null,p);
} else {
var m__48211__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__48211__auto____$1 == null))){
return m__48211__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__48210__auto__ = (((p == null))?null:p);
var m__48211__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__48210__auto__)]);
if(!((m__48211__auto__ == null))){
return m__48211__auto__.call(null,p,v);
} else {
var m__48211__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__48211__auto____$1 == null))){
return m__48211__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args66275 = [];
var len__48622__auto___66400 = arguments.length;
var i__48623__auto___66401 = (0);
while(true){
if((i__48623__auto___66401 < len__48622__auto___66400)){
args66275.push((arguments[i__48623__auto___66401]));

var G__66402 = (i__48623__auto___66401 + (1));
i__48623__auto___66401 = G__66402;
continue;
} else {
}
break;
}

var G__66277 = args66275.length;
switch (G__66277) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args66275.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__47547__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__47547__auto__)){
return or__47547__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__47547__auto__,mults){
return (function (p1__66274_SHARP_){
if(cljs.core.truth_(p1__66274_SHARP_.call(null,topic))){
return p1__66274_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__66274_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__47547__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async66278 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async66278 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta66279){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta66279 = meta66279;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async66278.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_66280,meta66279__$1){
var self__ = this;
var _66280__$1 = this;
return (new cljs.core.async.t_cljs$core$async66278(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta66279__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async66278.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_66280){
var self__ = this;
var _66280__$1 = this;
return self__.meta66279;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async66278.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async66278.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async66278.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async66278.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async66278.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async66278.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async66278.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async66278.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta66279","meta66279",-183079571,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async66278.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async66278.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async66278";

cljs.core.async.t_cljs$core$async66278.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__48153__auto__,writer__48154__auto__,opt__48155__auto__){
return cljs.core._write.call(null,writer__48154__auto__,"cljs.core.async/t_cljs$core$async66278");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async66278 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async66278(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta66279){
return (new cljs.core.async.t_cljs$core$async66278(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta66279));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async66278(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__49719__auto___66404 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__49719__auto___66404,mults,ensure_mult,p){
return (function (){
var f__49720__auto__ = (function (){var switch__49607__auto__ = ((function (c__49719__auto___66404,mults,ensure_mult,p){
return (function (state_66352){
var state_val_66353 = (state_66352[(1)]);
if((state_val_66353 === (7))){
var inst_66348 = (state_66352[(2)]);
var state_66352__$1 = state_66352;
var statearr_66354_66405 = state_66352__$1;
(statearr_66354_66405[(2)] = inst_66348);

(statearr_66354_66405[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66353 === (20))){
var state_66352__$1 = state_66352;
var statearr_66355_66406 = state_66352__$1;
(statearr_66355_66406[(2)] = null);

(statearr_66355_66406[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66353 === (1))){
var state_66352__$1 = state_66352;
var statearr_66356_66407 = state_66352__$1;
(statearr_66356_66407[(2)] = null);

(statearr_66356_66407[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66353 === (24))){
var inst_66331 = (state_66352[(7)]);
var inst_66340 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_66331);
var state_66352__$1 = state_66352;
var statearr_66357_66408 = state_66352__$1;
(statearr_66357_66408[(2)] = inst_66340);

(statearr_66357_66408[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66353 === (4))){
var inst_66283 = (state_66352[(8)]);
var inst_66283__$1 = (state_66352[(2)]);
var inst_66284 = (inst_66283__$1 == null);
var state_66352__$1 = (function (){var statearr_66358 = state_66352;
(statearr_66358[(8)] = inst_66283__$1);

return statearr_66358;
})();
if(cljs.core.truth_(inst_66284)){
var statearr_66359_66409 = state_66352__$1;
(statearr_66359_66409[(1)] = (5));

} else {
var statearr_66360_66410 = state_66352__$1;
(statearr_66360_66410[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66353 === (15))){
var inst_66325 = (state_66352[(2)]);
var state_66352__$1 = state_66352;
var statearr_66361_66411 = state_66352__$1;
(statearr_66361_66411[(2)] = inst_66325);

(statearr_66361_66411[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66353 === (21))){
var inst_66345 = (state_66352[(2)]);
var state_66352__$1 = (function (){var statearr_66362 = state_66352;
(statearr_66362[(9)] = inst_66345);

return statearr_66362;
})();
var statearr_66363_66412 = state_66352__$1;
(statearr_66363_66412[(2)] = null);

(statearr_66363_66412[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66353 === (13))){
var inst_66307 = (state_66352[(10)]);
var inst_66309 = cljs.core.chunked_seq_QMARK_.call(null,inst_66307);
var state_66352__$1 = state_66352;
if(inst_66309){
var statearr_66364_66413 = state_66352__$1;
(statearr_66364_66413[(1)] = (16));

} else {
var statearr_66365_66414 = state_66352__$1;
(statearr_66365_66414[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66353 === (22))){
var inst_66337 = (state_66352[(2)]);
var state_66352__$1 = state_66352;
if(cljs.core.truth_(inst_66337)){
var statearr_66366_66415 = state_66352__$1;
(statearr_66366_66415[(1)] = (23));

} else {
var statearr_66367_66416 = state_66352__$1;
(statearr_66367_66416[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66353 === (6))){
var inst_66333 = (state_66352[(11)]);
var inst_66331 = (state_66352[(7)]);
var inst_66283 = (state_66352[(8)]);
var inst_66331__$1 = topic_fn.call(null,inst_66283);
var inst_66332 = cljs.core.deref.call(null,mults);
var inst_66333__$1 = cljs.core.get.call(null,inst_66332,inst_66331__$1);
var state_66352__$1 = (function (){var statearr_66368 = state_66352;
(statearr_66368[(11)] = inst_66333__$1);

(statearr_66368[(7)] = inst_66331__$1);

return statearr_66368;
})();
if(cljs.core.truth_(inst_66333__$1)){
var statearr_66369_66417 = state_66352__$1;
(statearr_66369_66417[(1)] = (19));

} else {
var statearr_66370_66418 = state_66352__$1;
(statearr_66370_66418[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66353 === (25))){
var inst_66342 = (state_66352[(2)]);
var state_66352__$1 = state_66352;
var statearr_66371_66419 = state_66352__$1;
(statearr_66371_66419[(2)] = inst_66342);

(statearr_66371_66419[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66353 === (17))){
var inst_66307 = (state_66352[(10)]);
var inst_66316 = cljs.core.first.call(null,inst_66307);
var inst_66317 = cljs.core.async.muxch_STAR_.call(null,inst_66316);
var inst_66318 = cljs.core.async.close_BANG_.call(null,inst_66317);
var inst_66319 = cljs.core.next.call(null,inst_66307);
var inst_66293 = inst_66319;
var inst_66294 = null;
var inst_66295 = (0);
var inst_66296 = (0);
var state_66352__$1 = (function (){var statearr_66372 = state_66352;
(statearr_66372[(12)] = inst_66295);

(statearr_66372[(13)] = inst_66318);

(statearr_66372[(14)] = inst_66296);

(statearr_66372[(15)] = inst_66293);

(statearr_66372[(16)] = inst_66294);

return statearr_66372;
})();
var statearr_66373_66420 = state_66352__$1;
(statearr_66373_66420[(2)] = null);

(statearr_66373_66420[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66353 === (3))){
var inst_66350 = (state_66352[(2)]);
var state_66352__$1 = state_66352;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_66352__$1,inst_66350);
} else {
if((state_val_66353 === (12))){
var inst_66327 = (state_66352[(2)]);
var state_66352__$1 = state_66352;
var statearr_66374_66421 = state_66352__$1;
(statearr_66374_66421[(2)] = inst_66327);

(statearr_66374_66421[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66353 === (2))){
var state_66352__$1 = state_66352;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_66352__$1,(4),ch);
} else {
if((state_val_66353 === (23))){
var state_66352__$1 = state_66352;
var statearr_66375_66422 = state_66352__$1;
(statearr_66375_66422[(2)] = null);

(statearr_66375_66422[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66353 === (19))){
var inst_66333 = (state_66352[(11)]);
var inst_66283 = (state_66352[(8)]);
var inst_66335 = cljs.core.async.muxch_STAR_.call(null,inst_66333);
var state_66352__$1 = state_66352;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_66352__$1,(22),inst_66335,inst_66283);
} else {
if((state_val_66353 === (11))){
var inst_66307 = (state_66352[(10)]);
var inst_66293 = (state_66352[(15)]);
var inst_66307__$1 = cljs.core.seq.call(null,inst_66293);
var state_66352__$1 = (function (){var statearr_66376 = state_66352;
(statearr_66376[(10)] = inst_66307__$1);

return statearr_66376;
})();
if(inst_66307__$1){
var statearr_66377_66423 = state_66352__$1;
(statearr_66377_66423[(1)] = (13));

} else {
var statearr_66378_66424 = state_66352__$1;
(statearr_66378_66424[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66353 === (9))){
var inst_66329 = (state_66352[(2)]);
var state_66352__$1 = state_66352;
var statearr_66379_66425 = state_66352__$1;
(statearr_66379_66425[(2)] = inst_66329);

(statearr_66379_66425[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66353 === (5))){
var inst_66290 = cljs.core.deref.call(null,mults);
var inst_66291 = cljs.core.vals.call(null,inst_66290);
var inst_66292 = cljs.core.seq.call(null,inst_66291);
var inst_66293 = inst_66292;
var inst_66294 = null;
var inst_66295 = (0);
var inst_66296 = (0);
var state_66352__$1 = (function (){var statearr_66380 = state_66352;
(statearr_66380[(12)] = inst_66295);

(statearr_66380[(14)] = inst_66296);

(statearr_66380[(15)] = inst_66293);

(statearr_66380[(16)] = inst_66294);

return statearr_66380;
})();
var statearr_66381_66426 = state_66352__$1;
(statearr_66381_66426[(2)] = null);

(statearr_66381_66426[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66353 === (14))){
var state_66352__$1 = state_66352;
var statearr_66385_66427 = state_66352__$1;
(statearr_66385_66427[(2)] = null);

(statearr_66385_66427[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66353 === (16))){
var inst_66307 = (state_66352[(10)]);
var inst_66311 = cljs.core.chunk_first.call(null,inst_66307);
var inst_66312 = cljs.core.chunk_rest.call(null,inst_66307);
var inst_66313 = cljs.core.count.call(null,inst_66311);
var inst_66293 = inst_66312;
var inst_66294 = inst_66311;
var inst_66295 = inst_66313;
var inst_66296 = (0);
var state_66352__$1 = (function (){var statearr_66386 = state_66352;
(statearr_66386[(12)] = inst_66295);

(statearr_66386[(14)] = inst_66296);

(statearr_66386[(15)] = inst_66293);

(statearr_66386[(16)] = inst_66294);

return statearr_66386;
})();
var statearr_66387_66428 = state_66352__$1;
(statearr_66387_66428[(2)] = null);

(statearr_66387_66428[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66353 === (10))){
var inst_66295 = (state_66352[(12)]);
var inst_66296 = (state_66352[(14)]);
var inst_66293 = (state_66352[(15)]);
var inst_66294 = (state_66352[(16)]);
var inst_66301 = cljs.core._nth.call(null,inst_66294,inst_66296);
var inst_66302 = cljs.core.async.muxch_STAR_.call(null,inst_66301);
var inst_66303 = cljs.core.async.close_BANG_.call(null,inst_66302);
var inst_66304 = (inst_66296 + (1));
var tmp66382 = inst_66295;
var tmp66383 = inst_66293;
var tmp66384 = inst_66294;
var inst_66293__$1 = tmp66383;
var inst_66294__$1 = tmp66384;
var inst_66295__$1 = tmp66382;
var inst_66296__$1 = inst_66304;
var state_66352__$1 = (function (){var statearr_66388 = state_66352;
(statearr_66388[(12)] = inst_66295__$1);

(statearr_66388[(17)] = inst_66303);

(statearr_66388[(14)] = inst_66296__$1);

(statearr_66388[(15)] = inst_66293__$1);

(statearr_66388[(16)] = inst_66294__$1);

return statearr_66388;
})();
var statearr_66389_66429 = state_66352__$1;
(statearr_66389_66429[(2)] = null);

(statearr_66389_66429[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66353 === (18))){
var inst_66322 = (state_66352[(2)]);
var state_66352__$1 = state_66352;
var statearr_66390_66430 = state_66352__$1;
(statearr_66390_66430[(2)] = inst_66322);

(statearr_66390_66430[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66353 === (8))){
var inst_66295 = (state_66352[(12)]);
var inst_66296 = (state_66352[(14)]);
var inst_66298 = (inst_66296 < inst_66295);
var inst_66299 = inst_66298;
var state_66352__$1 = state_66352;
if(cljs.core.truth_(inst_66299)){
var statearr_66391_66431 = state_66352__$1;
(statearr_66391_66431[(1)] = (10));

} else {
var statearr_66392_66432 = state_66352__$1;
(statearr_66392_66432[(1)] = (11));

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
});})(c__49719__auto___66404,mults,ensure_mult,p))
;
return ((function (switch__49607__auto__,c__49719__auto___66404,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__49608__auto__ = null;
var cljs$core$async$state_machine__49608__auto____0 = (function (){
var statearr_66396 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_66396[(0)] = cljs$core$async$state_machine__49608__auto__);

(statearr_66396[(1)] = (1));

return statearr_66396;
});
var cljs$core$async$state_machine__49608__auto____1 = (function (state_66352){
while(true){
var ret_value__49609__auto__ = (function (){try{while(true){
var result__49610__auto__ = switch__49607__auto__.call(null,state_66352);
if(cljs.core.keyword_identical_QMARK_.call(null,result__49610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49610__auto__;
}
break;
}
}catch (e66397){if((e66397 instanceof Object)){
var ex__49611__auto__ = e66397;
var statearr_66398_66433 = state_66352;
(statearr_66398_66433[(5)] = ex__49611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_66352);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e66397;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__49609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__66434 = state_66352;
state_66352 = G__66434;
continue;
} else {
return ret_value__49609__auto__;
}
break;
}
});
cljs$core$async$state_machine__49608__auto__ = function(state_66352){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__49608__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__49608__auto____1.call(this,state_66352);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__49608__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__49608__auto____0;
cljs$core$async$state_machine__49608__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__49608__auto____1;
return cljs$core$async$state_machine__49608__auto__;
})()
;})(switch__49607__auto__,c__49719__auto___66404,mults,ensure_mult,p))
})();
var state__49721__auto__ = (function (){var statearr_66399 = f__49720__auto__.call(null);
(statearr_66399[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__49719__auto___66404);

return statearr_66399;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__49721__auto__);
});})(c__49719__auto___66404,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args66435 = [];
var len__48622__auto___66438 = arguments.length;
var i__48623__auto___66439 = (0);
while(true){
if((i__48623__auto___66439 < len__48622__auto___66438)){
args66435.push((arguments[i__48623__auto___66439]));

var G__66440 = (i__48623__auto___66439 + (1));
i__48623__auto___66439 = G__66440;
continue;
} else {
}
break;
}

var G__66437 = args66435.length;
switch (G__66437) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args66435.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args66442 = [];
var len__48622__auto___66445 = arguments.length;
var i__48623__auto___66446 = (0);
while(true){
if((i__48623__auto___66446 < len__48622__auto___66445)){
args66442.push((arguments[i__48623__auto___66446]));

var G__66447 = (i__48623__auto___66446 + (1));
i__48623__auto___66446 = G__66447;
continue;
} else {
}
break;
}

var G__66444 = args66442.length;
switch (G__66444) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args66442.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args66449 = [];
var len__48622__auto___66520 = arguments.length;
var i__48623__auto___66521 = (0);
while(true){
if((i__48623__auto___66521 < len__48622__auto___66520)){
args66449.push((arguments[i__48623__auto___66521]));

var G__66522 = (i__48623__auto___66521 + (1));
i__48623__auto___66521 = G__66522;
continue;
} else {
}
break;
}

var G__66451 = args66449.length;
switch (G__66451) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args66449.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__49719__auto___66524 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__49719__auto___66524,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__49720__auto__ = (function (){var switch__49607__auto__ = ((function (c__49719__auto___66524,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_66490){
var state_val_66491 = (state_66490[(1)]);
if((state_val_66491 === (7))){
var state_66490__$1 = state_66490;
var statearr_66492_66525 = state_66490__$1;
(statearr_66492_66525[(2)] = null);

(statearr_66492_66525[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66491 === (1))){
var state_66490__$1 = state_66490;
var statearr_66493_66526 = state_66490__$1;
(statearr_66493_66526[(2)] = null);

(statearr_66493_66526[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66491 === (4))){
var inst_66454 = (state_66490[(7)]);
var inst_66456 = (inst_66454 < cnt);
var state_66490__$1 = state_66490;
if(cljs.core.truth_(inst_66456)){
var statearr_66494_66527 = state_66490__$1;
(statearr_66494_66527[(1)] = (6));

} else {
var statearr_66495_66528 = state_66490__$1;
(statearr_66495_66528[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66491 === (15))){
var inst_66486 = (state_66490[(2)]);
var state_66490__$1 = state_66490;
var statearr_66496_66529 = state_66490__$1;
(statearr_66496_66529[(2)] = inst_66486);

(statearr_66496_66529[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66491 === (13))){
var inst_66479 = cljs.core.async.close_BANG_.call(null,out);
var state_66490__$1 = state_66490;
var statearr_66497_66530 = state_66490__$1;
(statearr_66497_66530[(2)] = inst_66479);

(statearr_66497_66530[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66491 === (6))){
var state_66490__$1 = state_66490;
var statearr_66498_66531 = state_66490__$1;
(statearr_66498_66531[(2)] = null);

(statearr_66498_66531[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66491 === (3))){
var inst_66488 = (state_66490[(2)]);
var state_66490__$1 = state_66490;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_66490__$1,inst_66488);
} else {
if((state_val_66491 === (12))){
var inst_66476 = (state_66490[(8)]);
var inst_66476__$1 = (state_66490[(2)]);
var inst_66477 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_66476__$1);
var state_66490__$1 = (function (){var statearr_66499 = state_66490;
(statearr_66499[(8)] = inst_66476__$1);

return statearr_66499;
})();
if(cljs.core.truth_(inst_66477)){
var statearr_66500_66532 = state_66490__$1;
(statearr_66500_66532[(1)] = (13));

} else {
var statearr_66501_66533 = state_66490__$1;
(statearr_66501_66533[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66491 === (2))){
var inst_66453 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_66454 = (0);
var state_66490__$1 = (function (){var statearr_66502 = state_66490;
(statearr_66502[(7)] = inst_66454);

(statearr_66502[(9)] = inst_66453);

return statearr_66502;
})();
var statearr_66503_66534 = state_66490__$1;
(statearr_66503_66534[(2)] = null);

(statearr_66503_66534[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66491 === (11))){
var inst_66454 = (state_66490[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_66490,(10),Object,null,(9));
var inst_66463 = chs__$1.call(null,inst_66454);
var inst_66464 = done.call(null,inst_66454);
var inst_66465 = cljs.core.async.take_BANG_.call(null,inst_66463,inst_66464);
var state_66490__$1 = state_66490;
var statearr_66504_66535 = state_66490__$1;
(statearr_66504_66535[(2)] = inst_66465);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_66490__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66491 === (9))){
var inst_66454 = (state_66490[(7)]);
var inst_66467 = (state_66490[(2)]);
var inst_66468 = (inst_66454 + (1));
var inst_66454__$1 = inst_66468;
var state_66490__$1 = (function (){var statearr_66505 = state_66490;
(statearr_66505[(7)] = inst_66454__$1);

(statearr_66505[(10)] = inst_66467);

return statearr_66505;
})();
var statearr_66506_66536 = state_66490__$1;
(statearr_66506_66536[(2)] = null);

(statearr_66506_66536[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66491 === (5))){
var inst_66474 = (state_66490[(2)]);
var state_66490__$1 = (function (){var statearr_66507 = state_66490;
(statearr_66507[(11)] = inst_66474);

return statearr_66507;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_66490__$1,(12),dchan);
} else {
if((state_val_66491 === (14))){
var inst_66476 = (state_66490[(8)]);
var inst_66481 = cljs.core.apply.call(null,f,inst_66476);
var state_66490__$1 = state_66490;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_66490__$1,(16),out,inst_66481);
} else {
if((state_val_66491 === (16))){
var inst_66483 = (state_66490[(2)]);
var state_66490__$1 = (function (){var statearr_66508 = state_66490;
(statearr_66508[(12)] = inst_66483);

return statearr_66508;
})();
var statearr_66509_66537 = state_66490__$1;
(statearr_66509_66537[(2)] = null);

(statearr_66509_66537[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66491 === (10))){
var inst_66458 = (state_66490[(2)]);
var inst_66459 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_66490__$1 = (function (){var statearr_66510 = state_66490;
(statearr_66510[(13)] = inst_66458);

return statearr_66510;
})();
var statearr_66511_66538 = state_66490__$1;
(statearr_66511_66538[(2)] = inst_66459);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_66490__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66491 === (8))){
var inst_66472 = (state_66490[(2)]);
var state_66490__$1 = state_66490;
var statearr_66512_66539 = state_66490__$1;
(statearr_66512_66539[(2)] = inst_66472);

(statearr_66512_66539[(1)] = (5));


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
});})(c__49719__auto___66524,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__49607__auto__,c__49719__auto___66524,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__49608__auto__ = null;
var cljs$core$async$state_machine__49608__auto____0 = (function (){
var statearr_66516 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_66516[(0)] = cljs$core$async$state_machine__49608__auto__);

(statearr_66516[(1)] = (1));

return statearr_66516;
});
var cljs$core$async$state_machine__49608__auto____1 = (function (state_66490){
while(true){
var ret_value__49609__auto__ = (function (){try{while(true){
var result__49610__auto__ = switch__49607__auto__.call(null,state_66490);
if(cljs.core.keyword_identical_QMARK_.call(null,result__49610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49610__auto__;
}
break;
}
}catch (e66517){if((e66517 instanceof Object)){
var ex__49611__auto__ = e66517;
var statearr_66518_66540 = state_66490;
(statearr_66518_66540[(5)] = ex__49611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_66490);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e66517;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__49609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__66541 = state_66490;
state_66490 = G__66541;
continue;
} else {
return ret_value__49609__auto__;
}
break;
}
});
cljs$core$async$state_machine__49608__auto__ = function(state_66490){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__49608__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__49608__auto____1.call(this,state_66490);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__49608__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__49608__auto____0;
cljs$core$async$state_machine__49608__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__49608__auto____1;
return cljs$core$async$state_machine__49608__auto__;
})()
;})(switch__49607__auto__,c__49719__auto___66524,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__49721__auto__ = (function (){var statearr_66519 = f__49720__auto__.call(null);
(statearr_66519[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__49719__auto___66524);

return statearr_66519;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__49721__auto__);
});})(c__49719__auto___66524,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args66543 = [];
var len__48622__auto___66601 = arguments.length;
var i__48623__auto___66602 = (0);
while(true){
if((i__48623__auto___66602 < len__48622__auto___66601)){
args66543.push((arguments[i__48623__auto___66602]));

var G__66603 = (i__48623__auto___66602 + (1));
i__48623__auto___66602 = G__66603;
continue;
} else {
}
break;
}

var G__66545 = args66543.length;
switch (G__66545) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args66543.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__49719__auto___66605 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__49719__auto___66605,out){
return (function (){
var f__49720__auto__ = (function (){var switch__49607__auto__ = ((function (c__49719__auto___66605,out){
return (function (state_66577){
var state_val_66578 = (state_66577[(1)]);
if((state_val_66578 === (7))){
var inst_66556 = (state_66577[(7)]);
var inst_66557 = (state_66577[(8)]);
var inst_66556__$1 = (state_66577[(2)]);
var inst_66557__$1 = cljs.core.nth.call(null,inst_66556__$1,(0),null);
var inst_66558 = cljs.core.nth.call(null,inst_66556__$1,(1),null);
var inst_66559 = (inst_66557__$1 == null);
var state_66577__$1 = (function (){var statearr_66579 = state_66577;
(statearr_66579[(7)] = inst_66556__$1);

(statearr_66579[(9)] = inst_66558);

(statearr_66579[(8)] = inst_66557__$1);

return statearr_66579;
})();
if(cljs.core.truth_(inst_66559)){
var statearr_66580_66606 = state_66577__$1;
(statearr_66580_66606[(1)] = (8));

} else {
var statearr_66581_66607 = state_66577__$1;
(statearr_66581_66607[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66578 === (1))){
var inst_66546 = cljs.core.vec.call(null,chs);
var inst_66547 = inst_66546;
var state_66577__$1 = (function (){var statearr_66582 = state_66577;
(statearr_66582[(10)] = inst_66547);

return statearr_66582;
})();
var statearr_66583_66608 = state_66577__$1;
(statearr_66583_66608[(2)] = null);

(statearr_66583_66608[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66578 === (4))){
var inst_66547 = (state_66577[(10)]);
var state_66577__$1 = state_66577;
return cljs.core.async.ioc_alts_BANG_.call(null,state_66577__$1,(7),inst_66547);
} else {
if((state_val_66578 === (6))){
var inst_66573 = (state_66577[(2)]);
var state_66577__$1 = state_66577;
var statearr_66584_66609 = state_66577__$1;
(statearr_66584_66609[(2)] = inst_66573);

(statearr_66584_66609[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66578 === (3))){
var inst_66575 = (state_66577[(2)]);
var state_66577__$1 = state_66577;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_66577__$1,inst_66575);
} else {
if((state_val_66578 === (2))){
var inst_66547 = (state_66577[(10)]);
var inst_66549 = cljs.core.count.call(null,inst_66547);
var inst_66550 = (inst_66549 > (0));
var state_66577__$1 = state_66577;
if(cljs.core.truth_(inst_66550)){
var statearr_66586_66610 = state_66577__$1;
(statearr_66586_66610[(1)] = (4));

} else {
var statearr_66587_66611 = state_66577__$1;
(statearr_66587_66611[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66578 === (11))){
var inst_66547 = (state_66577[(10)]);
var inst_66566 = (state_66577[(2)]);
var tmp66585 = inst_66547;
var inst_66547__$1 = tmp66585;
var state_66577__$1 = (function (){var statearr_66588 = state_66577;
(statearr_66588[(10)] = inst_66547__$1);

(statearr_66588[(11)] = inst_66566);

return statearr_66588;
})();
var statearr_66589_66612 = state_66577__$1;
(statearr_66589_66612[(2)] = null);

(statearr_66589_66612[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66578 === (9))){
var inst_66557 = (state_66577[(8)]);
var state_66577__$1 = state_66577;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_66577__$1,(11),out,inst_66557);
} else {
if((state_val_66578 === (5))){
var inst_66571 = cljs.core.async.close_BANG_.call(null,out);
var state_66577__$1 = state_66577;
var statearr_66590_66613 = state_66577__$1;
(statearr_66590_66613[(2)] = inst_66571);

(statearr_66590_66613[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66578 === (10))){
var inst_66569 = (state_66577[(2)]);
var state_66577__$1 = state_66577;
var statearr_66591_66614 = state_66577__$1;
(statearr_66591_66614[(2)] = inst_66569);

(statearr_66591_66614[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66578 === (8))){
var inst_66547 = (state_66577[(10)]);
var inst_66556 = (state_66577[(7)]);
var inst_66558 = (state_66577[(9)]);
var inst_66557 = (state_66577[(8)]);
var inst_66561 = (function (){var cs = inst_66547;
var vec__66552 = inst_66556;
var v = inst_66557;
var c = inst_66558;
return ((function (cs,vec__66552,v,c,inst_66547,inst_66556,inst_66558,inst_66557,state_val_66578,c__49719__auto___66605,out){
return (function (p1__66542_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__66542_SHARP_);
});
;})(cs,vec__66552,v,c,inst_66547,inst_66556,inst_66558,inst_66557,state_val_66578,c__49719__auto___66605,out))
})();
var inst_66562 = cljs.core.filterv.call(null,inst_66561,inst_66547);
var inst_66547__$1 = inst_66562;
var state_66577__$1 = (function (){var statearr_66592 = state_66577;
(statearr_66592[(10)] = inst_66547__$1);

return statearr_66592;
})();
var statearr_66593_66615 = state_66577__$1;
(statearr_66593_66615[(2)] = null);

(statearr_66593_66615[(1)] = (2));


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
});})(c__49719__auto___66605,out))
;
return ((function (switch__49607__auto__,c__49719__auto___66605,out){
return (function() {
var cljs$core$async$state_machine__49608__auto__ = null;
var cljs$core$async$state_machine__49608__auto____0 = (function (){
var statearr_66597 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_66597[(0)] = cljs$core$async$state_machine__49608__auto__);

(statearr_66597[(1)] = (1));

return statearr_66597;
});
var cljs$core$async$state_machine__49608__auto____1 = (function (state_66577){
while(true){
var ret_value__49609__auto__ = (function (){try{while(true){
var result__49610__auto__ = switch__49607__auto__.call(null,state_66577);
if(cljs.core.keyword_identical_QMARK_.call(null,result__49610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49610__auto__;
}
break;
}
}catch (e66598){if((e66598 instanceof Object)){
var ex__49611__auto__ = e66598;
var statearr_66599_66616 = state_66577;
(statearr_66599_66616[(5)] = ex__49611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_66577);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e66598;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__49609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__66617 = state_66577;
state_66577 = G__66617;
continue;
} else {
return ret_value__49609__auto__;
}
break;
}
});
cljs$core$async$state_machine__49608__auto__ = function(state_66577){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__49608__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__49608__auto____1.call(this,state_66577);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__49608__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__49608__auto____0;
cljs$core$async$state_machine__49608__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__49608__auto____1;
return cljs$core$async$state_machine__49608__auto__;
})()
;})(switch__49607__auto__,c__49719__auto___66605,out))
})();
var state__49721__auto__ = (function (){var statearr_66600 = f__49720__auto__.call(null);
(statearr_66600[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__49719__auto___66605);

return statearr_66600;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__49721__auto__);
});})(c__49719__auto___66605,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args66618 = [];
var len__48622__auto___66667 = arguments.length;
var i__48623__auto___66668 = (0);
while(true){
if((i__48623__auto___66668 < len__48622__auto___66667)){
args66618.push((arguments[i__48623__auto___66668]));

var G__66669 = (i__48623__auto___66668 + (1));
i__48623__auto___66668 = G__66669;
continue;
} else {
}
break;
}

var G__66620 = args66618.length;
switch (G__66620) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args66618.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__49719__auto___66671 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__49719__auto___66671,out){
return (function (){
var f__49720__auto__ = (function (){var switch__49607__auto__ = ((function (c__49719__auto___66671,out){
return (function (state_66644){
var state_val_66645 = (state_66644[(1)]);
if((state_val_66645 === (7))){
var inst_66626 = (state_66644[(7)]);
var inst_66626__$1 = (state_66644[(2)]);
var inst_66627 = (inst_66626__$1 == null);
var inst_66628 = cljs.core.not.call(null,inst_66627);
var state_66644__$1 = (function (){var statearr_66646 = state_66644;
(statearr_66646[(7)] = inst_66626__$1);

return statearr_66646;
})();
if(inst_66628){
var statearr_66647_66672 = state_66644__$1;
(statearr_66647_66672[(1)] = (8));

} else {
var statearr_66648_66673 = state_66644__$1;
(statearr_66648_66673[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66645 === (1))){
var inst_66621 = (0);
var state_66644__$1 = (function (){var statearr_66649 = state_66644;
(statearr_66649[(8)] = inst_66621);

return statearr_66649;
})();
var statearr_66650_66674 = state_66644__$1;
(statearr_66650_66674[(2)] = null);

(statearr_66650_66674[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66645 === (4))){
var state_66644__$1 = state_66644;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_66644__$1,(7),ch);
} else {
if((state_val_66645 === (6))){
var inst_66639 = (state_66644[(2)]);
var state_66644__$1 = state_66644;
var statearr_66651_66675 = state_66644__$1;
(statearr_66651_66675[(2)] = inst_66639);

(statearr_66651_66675[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66645 === (3))){
var inst_66641 = (state_66644[(2)]);
var inst_66642 = cljs.core.async.close_BANG_.call(null,out);
var state_66644__$1 = (function (){var statearr_66652 = state_66644;
(statearr_66652[(9)] = inst_66641);

return statearr_66652;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_66644__$1,inst_66642);
} else {
if((state_val_66645 === (2))){
var inst_66621 = (state_66644[(8)]);
var inst_66623 = (inst_66621 < n);
var state_66644__$1 = state_66644;
if(cljs.core.truth_(inst_66623)){
var statearr_66653_66676 = state_66644__$1;
(statearr_66653_66676[(1)] = (4));

} else {
var statearr_66654_66677 = state_66644__$1;
(statearr_66654_66677[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66645 === (11))){
var inst_66621 = (state_66644[(8)]);
var inst_66631 = (state_66644[(2)]);
var inst_66632 = (inst_66621 + (1));
var inst_66621__$1 = inst_66632;
var state_66644__$1 = (function (){var statearr_66655 = state_66644;
(statearr_66655[(8)] = inst_66621__$1);

(statearr_66655[(10)] = inst_66631);

return statearr_66655;
})();
var statearr_66656_66678 = state_66644__$1;
(statearr_66656_66678[(2)] = null);

(statearr_66656_66678[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66645 === (9))){
var state_66644__$1 = state_66644;
var statearr_66657_66679 = state_66644__$1;
(statearr_66657_66679[(2)] = null);

(statearr_66657_66679[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66645 === (5))){
var state_66644__$1 = state_66644;
var statearr_66658_66680 = state_66644__$1;
(statearr_66658_66680[(2)] = null);

(statearr_66658_66680[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66645 === (10))){
var inst_66636 = (state_66644[(2)]);
var state_66644__$1 = state_66644;
var statearr_66659_66681 = state_66644__$1;
(statearr_66659_66681[(2)] = inst_66636);

(statearr_66659_66681[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66645 === (8))){
var inst_66626 = (state_66644[(7)]);
var state_66644__$1 = state_66644;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_66644__$1,(11),out,inst_66626);
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
});})(c__49719__auto___66671,out))
;
return ((function (switch__49607__auto__,c__49719__auto___66671,out){
return (function() {
var cljs$core$async$state_machine__49608__auto__ = null;
var cljs$core$async$state_machine__49608__auto____0 = (function (){
var statearr_66663 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_66663[(0)] = cljs$core$async$state_machine__49608__auto__);

(statearr_66663[(1)] = (1));

return statearr_66663;
});
var cljs$core$async$state_machine__49608__auto____1 = (function (state_66644){
while(true){
var ret_value__49609__auto__ = (function (){try{while(true){
var result__49610__auto__ = switch__49607__auto__.call(null,state_66644);
if(cljs.core.keyword_identical_QMARK_.call(null,result__49610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49610__auto__;
}
break;
}
}catch (e66664){if((e66664 instanceof Object)){
var ex__49611__auto__ = e66664;
var statearr_66665_66682 = state_66644;
(statearr_66665_66682[(5)] = ex__49611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_66644);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e66664;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__49609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__66683 = state_66644;
state_66644 = G__66683;
continue;
} else {
return ret_value__49609__auto__;
}
break;
}
});
cljs$core$async$state_machine__49608__auto__ = function(state_66644){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__49608__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__49608__auto____1.call(this,state_66644);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__49608__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__49608__auto____0;
cljs$core$async$state_machine__49608__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__49608__auto____1;
return cljs$core$async$state_machine__49608__auto__;
})()
;})(switch__49607__auto__,c__49719__auto___66671,out))
})();
var state__49721__auto__ = (function (){var statearr_66666 = f__49720__auto__.call(null);
(statearr_66666[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__49719__auto___66671);

return statearr_66666;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__49721__auto__);
});})(c__49719__auto___66671,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async66691 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async66691 = (function (map_LT_,f,ch,meta66692){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta66692 = meta66692;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async66691.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_66693,meta66692__$1){
var self__ = this;
var _66693__$1 = this;
return (new cljs.core.async.t_cljs$core$async66691(self__.map_LT_,self__.f,self__.ch,meta66692__$1));
});

cljs.core.async.t_cljs$core$async66691.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_66693){
var self__ = this;
var _66693__$1 = this;
return self__.meta66692;
});

cljs.core.async.t_cljs$core$async66691.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async66691.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async66691.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async66691.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async66691.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async66694 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async66694 = (function (map_LT_,f,ch,meta66692,_,fn1,meta66695){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta66692 = meta66692;
this._ = _;
this.fn1 = fn1;
this.meta66695 = meta66695;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async66694.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_66696,meta66695__$1){
var self__ = this;
var _66696__$1 = this;
return (new cljs.core.async.t_cljs$core$async66694(self__.map_LT_,self__.f,self__.ch,self__.meta66692,self__._,self__.fn1,meta66695__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async66694.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_66696){
var self__ = this;
var _66696__$1 = this;
return self__.meta66695;
});})(___$1))
;

cljs.core.async.t_cljs$core$async66694.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async66694.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async66694.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async66694.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__66684_SHARP_){
return f1.call(null,(((p1__66684_SHARP_ == null))?null:self__.f.call(null,p1__66684_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async66694.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta66692","meta66692",-906968855,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async66691","cljs.core.async/t_cljs$core$async66691",1406670913,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta66695","meta66695",1809746992,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async66694.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async66694.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async66694";

cljs.core.async.t_cljs$core$async66694.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__48153__auto__,writer__48154__auto__,opt__48155__auto__){
return cljs.core._write.call(null,writer__48154__auto__,"cljs.core.async/t_cljs$core$async66694");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async66694 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async66694(map_LT___$1,f__$1,ch__$1,meta66692__$1,___$2,fn1__$1,meta66695){
return (new cljs.core.async.t_cljs$core$async66694(map_LT___$1,f__$1,ch__$1,meta66692__$1,___$2,fn1__$1,meta66695));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async66694(self__.map_LT_,self__.f,self__.ch,self__.meta66692,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__47535__auto__ = ret;
if(cljs.core.truth_(and__47535__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__47535__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async66691.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async66691.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async66691.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta66692","meta66692",-906968855,null)], null);
});

cljs.core.async.t_cljs$core$async66691.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async66691.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async66691";

cljs.core.async.t_cljs$core$async66691.cljs$lang$ctorPrWriter = (function (this__48153__auto__,writer__48154__auto__,opt__48155__auto__){
return cljs.core._write.call(null,writer__48154__auto__,"cljs.core.async/t_cljs$core$async66691");
});

cljs.core.async.__GT_t_cljs$core$async66691 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async66691(map_LT___$1,f__$1,ch__$1,meta66692){
return (new cljs.core.async.t_cljs$core$async66691(map_LT___$1,f__$1,ch__$1,meta66692));
});

}

return (new cljs.core.async.t_cljs$core$async66691(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async66700 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async66700 = (function (map_GT_,f,ch,meta66701){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta66701 = meta66701;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async66700.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_66702,meta66701__$1){
var self__ = this;
var _66702__$1 = this;
return (new cljs.core.async.t_cljs$core$async66700(self__.map_GT_,self__.f,self__.ch,meta66701__$1));
});

cljs.core.async.t_cljs$core$async66700.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_66702){
var self__ = this;
var _66702__$1 = this;
return self__.meta66701;
});

cljs.core.async.t_cljs$core$async66700.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async66700.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async66700.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async66700.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async66700.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async66700.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async66700.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta66701","meta66701",-1542394688,null)], null);
});

cljs.core.async.t_cljs$core$async66700.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async66700.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async66700";

cljs.core.async.t_cljs$core$async66700.cljs$lang$ctorPrWriter = (function (this__48153__auto__,writer__48154__auto__,opt__48155__auto__){
return cljs.core._write.call(null,writer__48154__auto__,"cljs.core.async/t_cljs$core$async66700");
});

cljs.core.async.__GT_t_cljs$core$async66700 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async66700(map_GT___$1,f__$1,ch__$1,meta66701){
return (new cljs.core.async.t_cljs$core$async66700(map_GT___$1,f__$1,ch__$1,meta66701));
});

}

return (new cljs.core.async.t_cljs$core$async66700(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async66706 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async66706 = (function (filter_GT_,p,ch,meta66707){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta66707 = meta66707;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async66706.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_66708,meta66707__$1){
var self__ = this;
var _66708__$1 = this;
return (new cljs.core.async.t_cljs$core$async66706(self__.filter_GT_,self__.p,self__.ch,meta66707__$1));
});

cljs.core.async.t_cljs$core$async66706.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_66708){
var self__ = this;
var _66708__$1 = this;
return self__.meta66707;
});

cljs.core.async.t_cljs$core$async66706.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async66706.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async66706.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async66706.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async66706.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async66706.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async66706.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async66706.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta66707","meta66707",1137670841,null)], null);
});

cljs.core.async.t_cljs$core$async66706.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async66706.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async66706";

cljs.core.async.t_cljs$core$async66706.cljs$lang$ctorPrWriter = (function (this__48153__auto__,writer__48154__auto__,opt__48155__auto__){
return cljs.core._write.call(null,writer__48154__auto__,"cljs.core.async/t_cljs$core$async66706");
});

cljs.core.async.__GT_t_cljs$core$async66706 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async66706(filter_GT___$1,p__$1,ch__$1,meta66707){
return (new cljs.core.async.t_cljs$core$async66706(filter_GT___$1,p__$1,ch__$1,meta66707));
});

}

return (new cljs.core.async.t_cljs$core$async66706(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args66709 = [];
var len__48622__auto___66753 = arguments.length;
var i__48623__auto___66754 = (0);
while(true){
if((i__48623__auto___66754 < len__48622__auto___66753)){
args66709.push((arguments[i__48623__auto___66754]));

var G__66755 = (i__48623__auto___66754 + (1));
i__48623__auto___66754 = G__66755;
continue;
} else {
}
break;
}

var G__66711 = args66709.length;
switch (G__66711) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args66709.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__49719__auto___66757 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__49719__auto___66757,out){
return (function (){
var f__49720__auto__ = (function (){var switch__49607__auto__ = ((function (c__49719__auto___66757,out){
return (function (state_66732){
var state_val_66733 = (state_66732[(1)]);
if((state_val_66733 === (7))){
var inst_66728 = (state_66732[(2)]);
var state_66732__$1 = state_66732;
var statearr_66734_66758 = state_66732__$1;
(statearr_66734_66758[(2)] = inst_66728);

(statearr_66734_66758[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66733 === (1))){
var state_66732__$1 = state_66732;
var statearr_66735_66759 = state_66732__$1;
(statearr_66735_66759[(2)] = null);

(statearr_66735_66759[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66733 === (4))){
var inst_66714 = (state_66732[(7)]);
var inst_66714__$1 = (state_66732[(2)]);
var inst_66715 = (inst_66714__$1 == null);
var state_66732__$1 = (function (){var statearr_66736 = state_66732;
(statearr_66736[(7)] = inst_66714__$1);

return statearr_66736;
})();
if(cljs.core.truth_(inst_66715)){
var statearr_66737_66760 = state_66732__$1;
(statearr_66737_66760[(1)] = (5));

} else {
var statearr_66738_66761 = state_66732__$1;
(statearr_66738_66761[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66733 === (6))){
var inst_66714 = (state_66732[(7)]);
var inst_66719 = p.call(null,inst_66714);
var state_66732__$1 = state_66732;
if(cljs.core.truth_(inst_66719)){
var statearr_66739_66762 = state_66732__$1;
(statearr_66739_66762[(1)] = (8));

} else {
var statearr_66740_66763 = state_66732__$1;
(statearr_66740_66763[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66733 === (3))){
var inst_66730 = (state_66732[(2)]);
var state_66732__$1 = state_66732;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_66732__$1,inst_66730);
} else {
if((state_val_66733 === (2))){
var state_66732__$1 = state_66732;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_66732__$1,(4),ch);
} else {
if((state_val_66733 === (11))){
var inst_66722 = (state_66732[(2)]);
var state_66732__$1 = state_66732;
var statearr_66741_66764 = state_66732__$1;
(statearr_66741_66764[(2)] = inst_66722);

(statearr_66741_66764[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66733 === (9))){
var state_66732__$1 = state_66732;
var statearr_66742_66765 = state_66732__$1;
(statearr_66742_66765[(2)] = null);

(statearr_66742_66765[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66733 === (5))){
var inst_66717 = cljs.core.async.close_BANG_.call(null,out);
var state_66732__$1 = state_66732;
var statearr_66743_66766 = state_66732__$1;
(statearr_66743_66766[(2)] = inst_66717);

(statearr_66743_66766[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66733 === (10))){
var inst_66725 = (state_66732[(2)]);
var state_66732__$1 = (function (){var statearr_66744 = state_66732;
(statearr_66744[(8)] = inst_66725);

return statearr_66744;
})();
var statearr_66745_66767 = state_66732__$1;
(statearr_66745_66767[(2)] = null);

(statearr_66745_66767[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66733 === (8))){
var inst_66714 = (state_66732[(7)]);
var state_66732__$1 = state_66732;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_66732__$1,(11),out,inst_66714);
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
});})(c__49719__auto___66757,out))
;
return ((function (switch__49607__auto__,c__49719__auto___66757,out){
return (function() {
var cljs$core$async$state_machine__49608__auto__ = null;
var cljs$core$async$state_machine__49608__auto____0 = (function (){
var statearr_66749 = [null,null,null,null,null,null,null,null,null];
(statearr_66749[(0)] = cljs$core$async$state_machine__49608__auto__);

(statearr_66749[(1)] = (1));

return statearr_66749;
});
var cljs$core$async$state_machine__49608__auto____1 = (function (state_66732){
while(true){
var ret_value__49609__auto__ = (function (){try{while(true){
var result__49610__auto__ = switch__49607__auto__.call(null,state_66732);
if(cljs.core.keyword_identical_QMARK_.call(null,result__49610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49610__auto__;
}
break;
}
}catch (e66750){if((e66750 instanceof Object)){
var ex__49611__auto__ = e66750;
var statearr_66751_66768 = state_66732;
(statearr_66751_66768[(5)] = ex__49611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_66732);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e66750;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__49609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__66769 = state_66732;
state_66732 = G__66769;
continue;
} else {
return ret_value__49609__auto__;
}
break;
}
});
cljs$core$async$state_machine__49608__auto__ = function(state_66732){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__49608__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__49608__auto____1.call(this,state_66732);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__49608__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__49608__auto____0;
cljs$core$async$state_machine__49608__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__49608__auto____1;
return cljs$core$async$state_machine__49608__auto__;
})()
;})(switch__49607__auto__,c__49719__auto___66757,out))
})();
var state__49721__auto__ = (function (){var statearr_66752 = f__49720__auto__.call(null);
(statearr_66752[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__49719__auto___66757);

return statearr_66752;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__49721__auto__);
});})(c__49719__auto___66757,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args66770 = [];
var len__48622__auto___66773 = arguments.length;
var i__48623__auto___66774 = (0);
while(true){
if((i__48623__auto___66774 < len__48622__auto___66773)){
args66770.push((arguments[i__48623__auto___66774]));

var G__66775 = (i__48623__auto___66774 + (1));
i__48623__auto___66774 = G__66775;
continue;
} else {
}
break;
}

var G__66772 = args66770.length;
switch (G__66772) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args66770.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__49719__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__49719__auto__){
return (function (){
var f__49720__auto__ = (function (){var switch__49607__auto__ = ((function (c__49719__auto__){
return (function (state_66942){
var state_val_66943 = (state_66942[(1)]);
if((state_val_66943 === (7))){
var inst_66938 = (state_66942[(2)]);
var state_66942__$1 = state_66942;
var statearr_66944_66985 = state_66942__$1;
(statearr_66944_66985[(2)] = inst_66938);

(statearr_66944_66985[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66943 === (20))){
var inst_66908 = (state_66942[(7)]);
var inst_66919 = (state_66942[(2)]);
var inst_66920 = cljs.core.next.call(null,inst_66908);
var inst_66894 = inst_66920;
var inst_66895 = null;
var inst_66896 = (0);
var inst_66897 = (0);
var state_66942__$1 = (function (){var statearr_66945 = state_66942;
(statearr_66945[(8)] = inst_66919);

(statearr_66945[(9)] = inst_66897);

(statearr_66945[(10)] = inst_66895);

(statearr_66945[(11)] = inst_66894);

(statearr_66945[(12)] = inst_66896);

return statearr_66945;
})();
var statearr_66946_66986 = state_66942__$1;
(statearr_66946_66986[(2)] = null);

(statearr_66946_66986[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66943 === (1))){
var state_66942__$1 = state_66942;
var statearr_66947_66987 = state_66942__$1;
(statearr_66947_66987[(2)] = null);

(statearr_66947_66987[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66943 === (4))){
var inst_66883 = (state_66942[(13)]);
var inst_66883__$1 = (state_66942[(2)]);
var inst_66884 = (inst_66883__$1 == null);
var state_66942__$1 = (function (){var statearr_66948 = state_66942;
(statearr_66948[(13)] = inst_66883__$1);

return statearr_66948;
})();
if(cljs.core.truth_(inst_66884)){
var statearr_66949_66988 = state_66942__$1;
(statearr_66949_66988[(1)] = (5));

} else {
var statearr_66950_66989 = state_66942__$1;
(statearr_66950_66989[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66943 === (15))){
var state_66942__$1 = state_66942;
var statearr_66954_66990 = state_66942__$1;
(statearr_66954_66990[(2)] = null);

(statearr_66954_66990[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66943 === (21))){
var state_66942__$1 = state_66942;
var statearr_66955_66991 = state_66942__$1;
(statearr_66955_66991[(2)] = null);

(statearr_66955_66991[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66943 === (13))){
var inst_66897 = (state_66942[(9)]);
var inst_66895 = (state_66942[(10)]);
var inst_66894 = (state_66942[(11)]);
var inst_66896 = (state_66942[(12)]);
var inst_66904 = (state_66942[(2)]);
var inst_66905 = (inst_66897 + (1));
var tmp66951 = inst_66895;
var tmp66952 = inst_66894;
var tmp66953 = inst_66896;
var inst_66894__$1 = tmp66952;
var inst_66895__$1 = tmp66951;
var inst_66896__$1 = tmp66953;
var inst_66897__$1 = inst_66905;
var state_66942__$1 = (function (){var statearr_66956 = state_66942;
(statearr_66956[(9)] = inst_66897__$1);

(statearr_66956[(10)] = inst_66895__$1);

(statearr_66956[(11)] = inst_66894__$1);

(statearr_66956[(14)] = inst_66904);

(statearr_66956[(12)] = inst_66896__$1);

return statearr_66956;
})();
var statearr_66957_66992 = state_66942__$1;
(statearr_66957_66992[(2)] = null);

(statearr_66957_66992[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66943 === (22))){
var state_66942__$1 = state_66942;
var statearr_66958_66993 = state_66942__$1;
(statearr_66958_66993[(2)] = null);

(statearr_66958_66993[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66943 === (6))){
var inst_66883 = (state_66942[(13)]);
var inst_66892 = f.call(null,inst_66883);
var inst_66893 = cljs.core.seq.call(null,inst_66892);
var inst_66894 = inst_66893;
var inst_66895 = null;
var inst_66896 = (0);
var inst_66897 = (0);
var state_66942__$1 = (function (){var statearr_66959 = state_66942;
(statearr_66959[(9)] = inst_66897);

(statearr_66959[(10)] = inst_66895);

(statearr_66959[(11)] = inst_66894);

(statearr_66959[(12)] = inst_66896);

return statearr_66959;
})();
var statearr_66960_66994 = state_66942__$1;
(statearr_66960_66994[(2)] = null);

(statearr_66960_66994[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66943 === (17))){
var inst_66908 = (state_66942[(7)]);
var inst_66912 = cljs.core.chunk_first.call(null,inst_66908);
var inst_66913 = cljs.core.chunk_rest.call(null,inst_66908);
var inst_66914 = cljs.core.count.call(null,inst_66912);
var inst_66894 = inst_66913;
var inst_66895 = inst_66912;
var inst_66896 = inst_66914;
var inst_66897 = (0);
var state_66942__$1 = (function (){var statearr_66961 = state_66942;
(statearr_66961[(9)] = inst_66897);

(statearr_66961[(10)] = inst_66895);

(statearr_66961[(11)] = inst_66894);

(statearr_66961[(12)] = inst_66896);

return statearr_66961;
})();
var statearr_66962_66995 = state_66942__$1;
(statearr_66962_66995[(2)] = null);

(statearr_66962_66995[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66943 === (3))){
var inst_66940 = (state_66942[(2)]);
var state_66942__$1 = state_66942;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_66942__$1,inst_66940);
} else {
if((state_val_66943 === (12))){
var inst_66928 = (state_66942[(2)]);
var state_66942__$1 = state_66942;
var statearr_66963_66996 = state_66942__$1;
(statearr_66963_66996[(2)] = inst_66928);

(statearr_66963_66996[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66943 === (2))){
var state_66942__$1 = state_66942;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_66942__$1,(4),in$);
} else {
if((state_val_66943 === (23))){
var inst_66936 = (state_66942[(2)]);
var state_66942__$1 = state_66942;
var statearr_66964_66997 = state_66942__$1;
(statearr_66964_66997[(2)] = inst_66936);

(statearr_66964_66997[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66943 === (19))){
var inst_66923 = (state_66942[(2)]);
var state_66942__$1 = state_66942;
var statearr_66965_66998 = state_66942__$1;
(statearr_66965_66998[(2)] = inst_66923);

(statearr_66965_66998[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66943 === (11))){
var inst_66908 = (state_66942[(7)]);
var inst_66894 = (state_66942[(11)]);
var inst_66908__$1 = cljs.core.seq.call(null,inst_66894);
var state_66942__$1 = (function (){var statearr_66966 = state_66942;
(statearr_66966[(7)] = inst_66908__$1);

return statearr_66966;
})();
if(inst_66908__$1){
var statearr_66967_66999 = state_66942__$1;
(statearr_66967_66999[(1)] = (14));

} else {
var statearr_66968_67000 = state_66942__$1;
(statearr_66968_67000[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66943 === (9))){
var inst_66930 = (state_66942[(2)]);
var inst_66931 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_66942__$1 = (function (){var statearr_66969 = state_66942;
(statearr_66969[(15)] = inst_66930);

return statearr_66969;
})();
if(cljs.core.truth_(inst_66931)){
var statearr_66970_67001 = state_66942__$1;
(statearr_66970_67001[(1)] = (21));

} else {
var statearr_66971_67002 = state_66942__$1;
(statearr_66971_67002[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66943 === (5))){
var inst_66886 = cljs.core.async.close_BANG_.call(null,out);
var state_66942__$1 = state_66942;
var statearr_66972_67003 = state_66942__$1;
(statearr_66972_67003[(2)] = inst_66886);

(statearr_66972_67003[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66943 === (14))){
var inst_66908 = (state_66942[(7)]);
var inst_66910 = cljs.core.chunked_seq_QMARK_.call(null,inst_66908);
var state_66942__$1 = state_66942;
if(inst_66910){
var statearr_66973_67004 = state_66942__$1;
(statearr_66973_67004[(1)] = (17));

} else {
var statearr_66974_67005 = state_66942__$1;
(statearr_66974_67005[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66943 === (16))){
var inst_66926 = (state_66942[(2)]);
var state_66942__$1 = state_66942;
var statearr_66975_67006 = state_66942__$1;
(statearr_66975_67006[(2)] = inst_66926);

(statearr_66975_67006[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66943 === (10))){
var inst_66897 = (state_66942[(9)]);
var inst_66895 = (state_66942[(10)]);
var inst_66902 = cljs.core._nth.call(null,inst_66895,inst_66897);
var state_66942__$1 = state_66942;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_66942__$1,(13),out,inst_66902);
} else {
if((state_val_66943 === (18))){
var inst_66908 = (state_66942[(7)]);
var inst_66917 = cljs.core.first.call(null,inst_66908);
var state_66942__$1 = state_66942;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_66942__$1,(20),out,inst_66917);
} else {
if((state_val_66943 === (8))){
var inst_66897 = (state_66942[(9)]);
var inst_66896 = (state_66942[(12)]);
var inst_66899 = (inst_66897 < inst_66896);
var inst_66900 = inst_66899;
var state_66942__$1 = state_66942;
if(cljs.core.truth_(inst_66900)){
var statearr_66976_67007 = state_66942__$1;
(statearr_66976_67007[(1)] = (10));

} else {
var statearr_66977_67008 = state_66942__$1;
(statearr_66977_67008[(1)] = (11));

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
});})(c__49719__auto__))
;
return ((function (switch__49607__auto__,c__49719__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__49608__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__49608__auto____0 = (function (){
var statearr_66981 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_66981[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__49608__auto__);

(statearr_66981[(1)] = (1));

return statearr_66981;
});
var cljs$core$async$mapcat_STAR__$_state_machine__49608__auto____1 = (function (state_66942){
while(true){
var ret_value__49609__auto__ = (function (){try{while(true){
var result__49610__auto__ = switch__49607__auto__.call(null,state_66942);
if(cljs.core.keyword_identical_QMARK_.call(null,result__49610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49610__auto__;
}
break;
}
}catch (e66982){if((e66982 instanceof Object)){
var ex__49611__auto__ = e66982;
var statearr_66983_67009 = state_66942;
(statearr_66983_67009[(5)] = ex__49611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_66942);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e66982;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__49609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__67010 = state_66942;
state_66942 = G__67010;
continue;
} else {
return ret_value__49609__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__49608__auto__ = function(state_66942){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__49608__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__49608__auto____1.call(this,state_66942);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__49608__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__49608__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__49608__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__49608__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__49608__auto__;
})()
;})(switch__49607__auto__,c__49719__auto__))
})();
var state__49721__auto__ = (function (){var statearr_66984 = f__49720__auto__.call(null);
(statearr_66984[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__49719__auto__);

return statearr_66984;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__49721__auto__);
});})(c__49719__auto__))
);

return c__49719__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args67011 = [];
var len__48622__auto___67014 = arguments.length;
var i__48623__auto___67015 = (0);
while(true){
if((i__48623__auto___67015 < len__48622__auto___67014)){
args67011.push((arguments[i__48623__auto___67015]));

var G__67016 = (i__48623__auto___67015 + (1));
i__48623__auto___67015 = G__67016;
continue;
} else {
}
break;
}

var G__67013 = args67011.length;
switch (G__67013) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args67011.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args67018 = [];
var len__48622__auto___67021 = arguments.length;
var i__48623__auto___67022 = (0);
while(true){
if((i__48623__auto___67022 < len__48622__auto___67021)){
args67018.push((arguments[i__48623__auto___67022]));

var G__67023 = (i__48623__auto___67022 + (1));
i__48623__auto___67022 = G__67023;
continue;
} else {
}
break;
}

var G__67020 = args67018.length;
switch (G__67020) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args67018.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args67025 = [];
var len__48622__auto___67076 = arguments.length;
var i__48623__auto___67077 = (0);
while(true){
if((i__48623__auto___67077 < len__48622__auto___67076)){
args67025.push((arguments[i__48623__auto___67077]));

var G__67078 = (i__48623__auto___67077 + (1));
i__48623__auto___67077 = G__67078;
continue;
} else {
}
break;
}

var G__67027 = args67025.length;
switch (G__67027) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args67025.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__49719__auto___67080 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__49719__auto___67080,out){
return (function (){
var f__49720__auto__ = (function (){var switch__49607__auto__ = ((function (c__49719__auto___67080,out){
return (function (state_67051){
var state_val_67052 = (state_67051[(1)]);
if((state_val_67052 === (7))){
var inst_67046 = (state_67051[(2)]);
var state_67051__$1 = state_67051;
var statearr_67053_67081 = state_67051__$1;
(statearr_67053_67081[(2)] = inst_67046);

(statearr_67053_67081[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67052 === (1))){
var inst_67028 = null;
var state_67051__$1 = (function (){var statearr_67054 = state_67051;
(statearr_67054[(7)] = inst_67028);

return statearr_67054;
})();
var statearr_67055_67082 = state_67051__$1;
(statearr_67055_67082[(2)] = null);

(statearr_67055_67082[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67052 === (4))){
var inst_67031 = (state_67051[(8)]);
var inst_67031__$1 = (state_67051[(2)]);
var inst_67032 = (inst_67031__$1 == null);
var inst_67033 = cljs.core.not.call(null,inst_67032);
var state_67051__$1 = (function (){var statearr_67056 = state_67051;
(statearr_67056[(8)] = inst_67031__$1);

return statearr_67056;
})();
if(inst_67033){
var statearr_67057_67083 = state_67051__$1;
(statearr_67057_67083[(1)] = (5));

} else {
var statearr_67058_67084 = state_67051__$1;
(statearr_67058_67084[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67052 === (6))){
var state_67051__$1 = state_67051;
var statearr_67059_67085 = state_67051__$1;
(statearr_67059_67085[(2)] = null);

(statearr_67059_67085[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67052 === (3))){
var inst_67048 = (state_67051[(2)]);
var inst_67049 = cljs.core.async.close_BANG_.call(null,out);
var state_67051__$1 = (function (){var statearr_67060 = state_67051;
(statearr_67060[(9)] = inst_67048);

return statearr_67060;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_67051__$1,inst_67049);
} else {
if((state_val_67052 === (2))){
var state_67051__$1 = state_67051;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_67051__$1,(4),ch);
} else {
if((state_val_67052 === (11))){
var inst_67031 = (state_67051[(8)]);
var inst_67040 = (state_67051[(2)]);
var inst_67028 = inst_67031;
var state_67051__$1 = (function (){var statearr_67061 = state_67051;
(statearr_67061[(10)] = inst_67040);

(statearr_67061[(7)] = inst_67028);

return statearr_67061;
})();
var statearr_67062_67086 = state_67051__$1;
(statearr_67062_67086[(2)] = null);

(statearr_67062_67086[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67052 === (9))){
var inst_67031 = (state_67051[(8)]);
var state_67051__$1 = state_67051;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_67051__$1,(11),out,inst_67031);
} else {
if((state_val_67052 === (5))){
var inst_67028 = (state_67051[(7)]);
var inst_67031 = (state_67051[(8)]);
var inst_67035 = cljs.core._EQ_.call(null,inst_67031,inst_67028);
var state_67051__$1 = state_67051;
if(inst_67035){
var statearr_67064_67087 = state_67051__$1;
(statearr_67064_67087[(1)] = (8));

} else {
var statearr_67065_67088 = state_67051__$1;
(statearr_67065_67088[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67052 === (10))){
var inst_67043 = (state_67051[(2)]);
var state_67051__$1 = state_67051;
var statearr_67066_67089 = state_67051__$1;
(statearr_67066_67089[(2)] = inst_67043);

(statearr_67066_67089[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67052 === (8))){
var inst_67028 = (state_67051[(7)]);
var tmp67063 = inst_67028;
var inst_67028__$1 = tmp67063;
var state_67051__$1 = (function (){var statearr_67067 = state_67051;
(statearr_67067[(7)] = inst_67028__$1);

return statearr_67067;
})();
var statearr_67068_67090 = state_67051__$1;
(statearr_67068_67090[(2)] = null);

(statearr_67068_67090[(1)] = (2));


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
});})(c__49719__auto___67080,out))
;
return ((function (switch__49607__auto__,c__49719__auto___67080,out){
return (function() {
var cljs$core$async$state_machine__49608__auto__ = null;
var cljs$core$async$state_machine__49608__auto____0 = (function (){
var statearr_67072 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_67072[(0)] = cljs$core$async$state_machine__49608__auto__);

(statearr_67072[(1)] = (1));

return statearr_67072;
});
var cljs$core$async$state_machine__49608__auto____1 = (function (state_67051){
while(true){
var ret_value__49609__auto__ = (function (){try{while(true){
var result__49610__auto__ = switch__49607__auto__.call(null,state_67051);
if(cljs.core.keyword_identical_QMARK_.call(null,result__49610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49610__auto__;
}
break;
}
}catch (e67073){if((e67073 instanceof Object)){
var ex__49611__auto__ = e67073;
var statearr_67074_67091 = state_67051;
(statearr_67074_67091[(5)] = ex__49611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_67051);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e67073;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__49609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__67092 = state_67051;
state_67051 = G__67092;
continue;
} else {
return ret_value__49609__auto__;
}
break;
}
});
cljs$core$async$state_machine__49608__auto__ = function(state_67051){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__49608__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__49608__auto____1.call(this,state_67051);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__49608__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__49608__auto____0;
cljs$core$async$state_machine__49608__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__49608__auto____1;
return cljs$core$async$state_machine__49608__auto__;
})()
;})(switch__49607__auto__,c__49719__auto___67080,out))
})();
var state__49721__auto__ = (function (){var statearr_67075 = f__49720__auto__.call(null);
(statearr_67075[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__49719__auto___67080);

return statearr_67075;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__49721__auto__);
});})(c__49719__auto___67080,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args67093 = [];
var len__48622__auto___67163 = arguments.length;
var i__48623__auto___67164 = (0);
while(true){
if((i__48623__auto___67164 < len__48622__auto___67163)){
args67093.push((arguments[i__48623__auto___67164]));

var G__67165 = (i__48623__auto___67164 + (1));
i__48623__auto___67164 = G__67165;
continue;
} else {
}
break;
}

var G__67095 = args67093.length;
switch (G__67095) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args67093.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__49719__auto___67167 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__49719__auto___67167,out){
return (function (){
var f__49720__auto__ = (function (){var switch__49607__auto__ = ((function (c__49719__auto___67167,out){
return (function (state_67133){
var state_val_67134 = (state_67133[(1)]);
if((state_val_67134 === (7))){
var inst_67129 = (state_67133[(2)]);
var state_67133__$1 = state_67133;
var statearr_67135_67168 = state_67133__$1;
(statearr_67135_67168[(2)] = inst_67129);

(statearr_67135_67168[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67134 === (1))){
var inst_67096 = (new Array(n));
var inst_67097 = inst_67096;
var inst_67098 = (0);
var state_67133__$1 = (function (){var statearr_67136 = state_67133;
(statearr_67136[(7)] = inst_67097);

(statearr_67136[(8)] = inst_67098);

return statearr_67136;
})();
var statearr_67137_67169 = state_67133__$1;
(statearr_67137_67169[(2)] = null);

(statearr_67137_67169[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67134 === (4))){
var inst_67101 = (state_67133[(9)]);
var inst_67101__$1 = (state_67133[(2)]);
var inst_67102 = (inst_67101__$1 == null);
var inst_67103 = cljs.core.not.call(null,inst_67102);
var state_67133__$1 = (function (){var statearr_67138 = state_67133;
(statearr_67138[(9)] = inst_67101__$1);

return statearr_67138;
})();
if(inst_67103){
var statearr_67139_67170 = state_67133__$1;
(statearr_67139_67170[(1)] = (5));

} else {
var statearr_67140_67171 = state_67133__$1;
(statearr_67140_67171[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67134 === (15))){
var inst_67123 = (state_67133[(2)]);
var state_67133__$1 = state_67133;
var statearr_67141_67172 = state_67133__$1;
(statearr_67141_67172[(2)] = inst_67123);

(statearr_67141_67172[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67134 === (13))){
var state_67133__$1 = state_67133;
var statearr_67142_67173 = state_67133__$1;
(statearr_67142_67173[(2)] = null);

(statearr_67142_67173[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67134 === (6))){
var inst_67098 = (state_67133[(8)]);
var inst_67119 = (inst_67098 > (0));
var state_67133__$1 = state_67133;
if(cljs.core.truth_(inst_67119)){
var statearr_67143_67174 = state_67133__$1;
(statearr_67143_67174[(1)] = (12));

} else {
var statearr_67144_67175 = state_67133__$1;
(statearr_67144_67175[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67134 === (3))){
var inst_67131 = (state_67133[(2)]);
var state_67133__$1 = state_67133;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_67133__$1,inst_67131);
} else {
if((state_val_67134 === (12))){
var inst_67097 = (state_67133[(7)]);
var inst_67121 = cljs.core.vec.call(null,inst_67097);
var state_67133__$1 = state_67133;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_67133__$1,(15),out,inst_67121);
} else {
if((state_val_67134 === (2))){
var state_67133__$1 = state_67133;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_67133__$1,(4),ch);
} else {
if((state_val_67134 === (11))){
var inst_67113 = (state_67133[(2)]);
var inst_67114 = (new Array(n));
var inst_67097 = inst_67114;
var inst_67098 = (0);
var state_67133__$1 = (function (){var statearr_67145 = state_67133;
(statearr_67145[(7)] = inst_67097);

(statearr_67145[(8)] = inst_67098);

(statearr_67145[(10)] = inst_67113);

return statearr_67145;
})();
var statearr_67146_67176 = state_67133__$1;
(statearr_67146_67176[(2)] = null);

(statearr_67146_67176[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67134 === (9))){
var inst_67097 = (state_67133[(7)]);
var inst_67111 = cljs.core.vec.call(null,inst_67097);
var state_67133__$1 = state_67133;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_67133__$1,(11),out,inst_67111);
} else {
if((state_val_67134 === (5))){
var inst_67097 = (state_67133[(7)]);
var inst_67098 = (state_67133[(8)]);
var inst_67106 = (state_67133[(11)]);
var inst_67101 = (state_67133[(9)]);
var inst_67105 = (inst_67097[inst_67098] = inst_67101);
var inst_67106__$1 = (inst_67098 + (1));
var inst_67107 = (inst_67106__$1 < n);
var state_67133__$1 = (function (){var statearr_67147 = state_67133;
(statearr_67147[(12)] = inst_67105);

(statearr_67147[(11)] = inst_67106__$1);

return statearr_67147;
})();
if(cljs.core.truth_(inst_67107)){
var statearr_67148_67177 = state_67133__$1;
(statearr_67148_67177[(1)] = (8));

} else {
var statearr_67149_67178 = state_67133__$1;
(statearr_67149_67178[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67134 === (14))){
var inst_67126 = (state_67133[(2)]);
var inst_67127 = cljs.core.async.close_BANG_.call(null,out);
var state_67133__$1 = (function (){var statearr_67151 = state_67133;
(statearr_67151[(13)] = inst_67126);

return statearr_67151;
})();
var statearr_67152_67179 = state_67133__$1;
(statearr_67152_67179[(2)] = inst_67127);

(statearr_67152_67179[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67134 === (10))){
var inst_67117 = (state_67133[(2)]);
var state_67133__$1 = state_67133;
var statearr_67153_67180 = state_67133__$1;
(statearr_67153_67180[(2)] = inst_67117);

(statearr_67153_67180[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67134 === (8))){
var inst_67097 = (state_67133[(7)]);
var inst_67106 = (state_67133[(11)]);
var tmp67150 = inst_67097;
var inst_67097__$1 = tmp67150;
var inst_67098 = inst_67106;
var state_67133__$1 = (function (){var statearr_67154 = state_67133;
(statearr_67154[(7)] = inst_67097__$1);

(statearr_67154[(8)] = inst_67098);

return statearr_67154;
})();
var statearr_67155_67181 = state_67133__$1;
(statearr_67155_67181[(2)] = null);

(statearr_67155_67181[(1)] = (2));


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
});})(c__49719__auto___67167,out))
;
return ((function (switch__49607__auto__,c__49719__auto___67167,out){
return (function() {
var cljs$core$async$state_machine__49608__auto__ = null;
var cljs$core$async$state_machine__49608__auto____0 = (function (){
var statearr_67159 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_67159[(0)] = cljs$core$async$state_machine__49608__auto__);

(statearr_67159[(1)] = (1));

return statearr_67159;
});
var cljs$core$async$state_machine__49608__auto____1 = (function (state_67133){
while(true){
var ret_value__49609__auto__ = (function (){try{while(true){
var result__49610__auto__ = switch__49607__auto__.call(null,state_67133);
if(cljs.core.keyword_identical_QMARK_.call(null,result__49610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49610__auto__;
}
break;
}
}catch (e67160){if((e67160 instanceof Object)){
var ex__49611__auto__ = e67160;
var statearr_67161_67182 = state_67133;
(statearr_67161_67182[(5)] = ex__49611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_67133);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e67160;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__49609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__67183 = state_67133;
state_67133 = G__67183;
continue;
} else {
return ret_value__49609__auto__;
}
break;
}
});
cljs$core$async$state_machine__49608__auto__ = function(state_67133){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__49608__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__49608__auto____1.call(this,state_67133);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__49608__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__49608__auto____0;
cljs$core$async$state_machine__49608__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__49608__auto____1;
return cljs$core$async$state_machine__49608__auto__;
})()
;})(switch__49607__auto__,c__49719__auto___67167,out))
})();
var state__49721__auto__ = (function (){var statearr_67162 = f__49720__auto__.call(null);
(statearr_67162[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__49719__auto___67167);

return statearr_67162;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__49721__auto__);
});})(c__49719__auto___67167,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args67184 = [];
var len__48622__auto___67258 = arguments.length;
var i__48623__auto___67259 = (0);
while(true){
if((i__48623__auto___67259 < len__48622__auto___67258)){
args67184.push((arguments[i__48623__auto___67259]));

var G__67260 = (i__48623__auto___67259 + (1));
i__48623__auto___67259 = G__67260;
continue;
} else {
}
break;
}

var G__67186 = args67184.length;
switch (G__67186) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args67184.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__49719__auto___67262 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__49719__auto___67262,out){
return (function (){
var f__49720__auto__ = (function (){var switch__49607__auto__ = ((function (c__49719__auto___67262,out){
return (function (state_67228){
var state_val_67229 = (state_67228[(1)]);
if((state_val_67229 === (7))){
var inst_67224 = (state_67228[(2)]);
var state_67228__$1 = state_67228;
var statearr_67230_67263 = state_67228__$1;
(statearr_67230_67263[(2)] = inst_67224);

(statearr_67230_67263[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67229 === (1))){
var inst_67187 = [];
var inst_67188 = inst_67187;
var inst_67189 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_67228__$1 = (function (){var statearr_67231 = state_67228;
(statearr_67231[(7)] = inst_67188);

(statearr_67231[(8)] = inst_67189);

return statearr_67231;
})();
var statearr_67232_67264 = state_67228__$1;
(statearr_67232_67264[(2)] = null);

(statearr_67232_67264[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67229 === (4))){
var inst_67192 = (state_67228[(9)]);
var inst_67192__$1 = (state_67228[(2)]);
var inst_67193 = (inst_67192__$1 == null);
var inst_67194 = cljs.core.not.call(null,inst_67193);
var state_67228__$1 = (function (){var statearr_67233 = state_67228;
(statearr_67233[(9)] = inst_67192__$1);

return statearr_67233;
})();
if(inst_67194){
var statearr_67234_67265 = state_67228__$1;
(statearr_67234_67265[(1)] = (5));

} else {
var statearr_67235_67266 = state_67228__$1;
(statearr_67235_67266[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67229 === (15))){
var inst_67218 = (state_67228[(2)]);
var state_67228__$1 = state_67228;
var statearr_67236_67267 = state_67228__$1;
(statearr_67236_67267[(2)] = inst_67218);

(statearr_67236_67267[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67229 === (13))){
var state_67228__$1 = state_67228;
var statearr_67237_67268 = state_67228__$1;
(statearr_67237_67268[(2)] = null);

(statearr_67237_67268[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67229 === (6))){
var inst_67188 = (state_67228[(7)]);
var inst_67213 = inst_67188.length;
var inst_67214 = (inst_67213 > (0));
var state_67228__$1 = state_67228;
if(cljs.core.truth_(inst_67214)){
var statearr_67238_67269 = state_67228__$1;
(statearr_67238_67269[(1)] = (12));

} else {
var statearr_67239_67270 = state_67228__$1;
(statearr_67239_67270[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67229 === (3))){
var inst_67226 = (state_67228[(2)]);
var state_67228__$1 = state_67228;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_67228__$1,inst_67226);
} else {
if((state_val_67229 === (12))){
var inst_67188 = (state_67228[(7)]);
var inst_67216 = cljs.core.vec.call(null,inst_67188);
var state_67228__$1 = state_67228;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_67228__$1,(15),out,inst_67216);
} else {
if((state_val_67229 === (2))){
var state_67228__$1 = state_67228;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_67228__$1,(4),ch);
} else {
if((state_val_67229 === (11))){
var inst_67196 = (state_67228[(10)]);
var inst_67192 = (state_67228[(9)]);
var inst_67206 = (state_67228[(2)]);
var inst_67207 = [];
var inst_67208 = inst_67207.push(inst_67192);
var inst_67188 = inst_67207;
var inst_67189 = inst_67196;
var state_67228__$1 = (function (){var statearr_67240 = state_67228;
(statearr_67240[(11)] = inst_67206);

(statearr_67240[(7)] = inst_67188);

(statearr_67240[(8)] = inst_67189);

(statearr_67240[(12)] = inst_67208);

return statearr_67240;
})();
var statearr_67241_67271 = state_67228__$1;
(statearr_67241_67271[(2)] = null);

(statearr_67241_67271[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67229 === (9))){
var inst_67188 = (state_67228[(7)]);
var inst_67204 = cljs.core.vec.call(null,inst_67188);
var state_67228__$1 = state_67228;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_67228__$1,(11),out,inst_67204);
} else {
if((state_val_67229 === (5))){
var inst_67196 = (state_67228[(10)]);
var inst_67189 = (state_67228[(8)]);
var inst_67192 = (state_67228[(9)]);
var inst_67196__$1 = f.call(null,inst_67192);
var inst_67197 = cljs.core._EQ_.call(null,inst_67196__$1,inst_67189);
var inst_67198 = cljs.core.keyword_identical_QMARK_.call(null,inst_67189,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_67199 = (inst_67197) || (inst_67198);
var state_67228__$1 = (function (){var statearr_67242 = state_67228;
(statearr_67242[(10)] = inst_67196__$1);

return statearr_67242;
})();
if(cljs.core.truth_(inst_67199)){
var statearr_67243_67272 = state_67228__$1;
(statearr_67243_67272[(1)] = (8));

} else {
var statearr_67244_67273 = state_67228__$1;
(statearr_67244_67273[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67229 === (14))){
var inst_67221 = (state_67228[(2)]);
var inst_67222 = cljs.core.async.close_BANG_.call(null,out);
var state_67228__$1 = (function (){var statearr_67246 = state_67228;
(statearr_67246[(13)] = inst_67221);

return statearr_67246;
})();
var statearr_67247_67274 = state_67228__$1;
(statearr_67247_67274[(2)] = inst_67222);

(statearr_67247_67274[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67229 === (10))){
var inst_67211 = (state_67228[(2)]);
var state_67228__$1 = state_67228;
var statearr_67248_67275 = state_67228__$1;
(statearr_67248_67275[(2)] = inst_67211);

(statearr_67248_67275[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67229 === (8))){
var inst_67188 = (state_67228[(7)]);
var inst_67196 = (state_67228[(10)]);
var inst_67192 = (state_67228[(9)]);
var inst_67201 = inst_67188.push(inst_67192);
var tmp67245 = inst_67188;
var inst_67188__$1 = tmp67245;
var inst_67189 = inst_67196;
var state_67228__$1 = (function (){var statearr_67249 = state_67228;
(statearr_67249[(7)] = inst_67188__$1);

(statearr_67249[(14)] = inst_67201);

(statearr_67249[(8)] = inst_67189);

return statearr_67249;
})();
var statearr_67250_67276 = state_67228__$1;
(statearr_67250_67276[(2)] = null);

(statearr_67250_67276[(1)] = (2));


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
});})(c__49719__auto___67262,out))
;
return ((function (switch__49607__auto__,c__49719__auto___67262,out){
return (function() {
var cljs$core$async$state_machine__49608__auto__ = null;
var cljs$core$async$state_machine__49608__auto____0 = (function (){
var statearr_67254 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_67254[(0)] = cljs$core$async$state_machine__49608__auto__);

(statearr_67254[(1)] = (1));

return statearr_67254;
});
var cljs$core$async$state_machine__49608__auto____1 = (function (state_67228){
while(true){
var ret_value__49609__auto__ = (function (){try{while(true){
var result__49610__auto__ = switch__49607__auto__.call(null,state_67228);
if(cljs.core.keyword_identical_QMARK_.call(null,result__49610__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49610__auto__;
}
break;
}
}catch (e67255){if((e67255 instanceof Object)){
var ex__49611__auto__ = e67255;
var statearr_67256_67277 = state_67228;
(statearr_67256_67277[(5)] = ex__49611__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_67228);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e67255;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__49609__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__67278 = state_67228;
state_67228 = G__67278;
continue;
} else {
return ret_value__49609__auto__;
}
break;
}
});
cljs$core$async$state_machine__49608__auto__ = function(state_67228){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__49608__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__49608__auto____1.call(this,state_67228);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__49608__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__49608__auto____0;
cljs$core$async$state_machine__49608__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__49608__auto____1;
return cljs$core$async$state_machine__49608__auto__;
})()
;})(switch__49607__auto__,c__49719__auto___67262,out))
})();
var state__49721__auto__ = (function (){var statearr_67257 = f__49720__auto__.call(null);
(statearr_67257[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__49719__auto___67262);

return statearr_67257;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__49721__auto__);
});})(c__49719__auto___67262,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1476044185334