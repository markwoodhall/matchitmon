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
var args27008 = [];
var len__25865__auto___27014 = arguments.length;
var i__25866__auto___27015 = (0);
while(true){
if((i__25866__auto___27015 < len__25865__auto___27014)){
args27008.push((arguments[i__25866__auto___27015]));

var G__27016 = (i__25866__auto___27015 + (1));
i__25866__auto___27015 = G__27016;
continue;
} else {
}
break;
}

var G__27010 = args27008.length;
switch (G__27010) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27008.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async27011 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27011 = (function (f,blockable,meta27012){
this.f = f;
this.blockable = blockable;
this.meta27012 = meta27012;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27011.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27013,meta27012__$1){
var self__ = this;
var _27013__$1 = this;
return (new cljs.core.async.t_cljs$core$async27011(self__.f,self__.blockable,meta27012__$1));
});

cljs.core.async.t_cljs$core$async27011.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27013){
var self__ = this;
var _27013__$1 = this;
return self__.meta27012;
});

cljs.core.async.t_cljs$core$async27011.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async27011.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async27011.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async27011.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async27011.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta27012","meta27012",1384417383,null)], null);
});

cljs.core.async.t_cljs$core$async27011.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27011.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27011";

cljs.core.async.t_cljs$core$async27011.cljs$lang$ctorPrWriter = (function (this__25396__auto__,writer__25397__auto__,opt__25398__auto__){
return cljs.core._write.call(null,writer__25397__auto__,"cljs.core.async/t_cljs$core$async27011");
});

cljs.core.async.__GT_t_cljs$core$async27011 = (function cljs$core$async$__GT_t_cljs$core$async27011(f__$1,blockable__$1,meta27012){
return (new cljs.core.async.t_cljs$core$async27011(f__$1,blockable__$1,meta27012));
});

}

return (new cljs.core.async.t_cljs$core$async27011(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args27020 = [];
var len__25865__auto___27023 = arguments.length;
var i__25866__auto___27024 = (0);
while(true){
if((i__25866__auto___27024 < len__25865__auto___27023)){
args27020.push((arguments[i__25866__auto___27024]));

var G__27025 = (i__25866__auto___27024 + (1));
i__25866__auto___27024 = G__27025;
continue;
} else {
}
break;
}

var G__27022 = args27020.length;
switch (G__27022) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27020.length)].join('')));

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
var args27027 = [];
var len__25865__auto___27030 = arguments.length;
var i__25866__auto___27031 = (0);
while(true){
if((i__25866__auto___27031 < len__25865__auto___27030)){
args27027.push((arguments[i__25866__auto___27031]));

var G__27032 = (i__25866__auto___27031 + (1));
i__25866__auto___27031 = G__27032;
continue;
} else {
}
break;
}

var G__27029 = args27027.length;
switch (G__27029) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27027.length)].join('')));

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
var args27034 = [];
var len__25865__auto___27037 = arguments.length;
var i__25866__auto___27038 = (0);
while(true){
if((i__25866__auto___27038 < len__25865__auto___27037)){
args27034.push((arguments[i__25866__auto___27038]));

var G__27039 = (i__25866__auto___27038 + (1));
i__25866__auto___27038 = G__27039;
continue;
} else {
}
break;
}

var G__27036 = args27034.length;
switch (G__27036) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27034.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_27041 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_27041);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_27041,ret){
return (function (){
return fn1.call(null,val_27041);
});})(val_27041,ret))
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
var args27042 = [];
var len__25865__auto___27045 = arguments.length;
var i__25866__auto___27046 = (0);
while(true){
if((i__25866__auto___27046 < len__25865__auto___27045)){
args27042.push((arguments[i__25866__auto___27046]));

var G__27047 = (i__25866__auto___27046 + (1));
i__25866__auto___27046 = G__27047;
continue;
} else {
}
break;
}

var G__27044 = args27042.length;
switch (G__27044) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27042.length)].join('')));

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
var n__25705__auto___27049 = n;
var x_27050 = (0);
while(true){
if((x_27050 < n__25705__auto___27049)){
(a[x_27050] = (0));

var G__27051 = (x_27050 + (1));
x_27050 = G__27051;
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

var G__27052 = (i + (1));
i = G__27052;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async27056 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27056 = (function (alt_flag,flag,meta27057){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta27057 = meta27057;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27056.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_27058,meta27057__$1){
var self__ = this;
var _27058__$1 = this;
return (new cljs.core.async.t_cljs$core$async27056(self__.alt_flag,self__.flag,meta27057__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async27056.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_27058){
var self__ = this;
var _27058__$1 = this;
return self__.meta27057;
});})(flag))
;

cljs.core.async.t_cljs$core$async27056.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async27056.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async27056.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async27056.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async27056.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta27057","meta27057",1008337986,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async27056.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27056.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27056";

cljs.core.async.t_cljs$core$async27056.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__25396__auto__,writer__25397__auto__,opt__25398__auto__){
return cljs.core._write.call(null,writer__25397__auto__,"cljs.core.async/t_cljs$core$async27056");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async27056 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async27056(alt_flag__$1,flag__$1,meta27057){
return (new cljs.core.async.t_cljs$core$async27056(alt_flag__$1,flag__$1,meta27057));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async27056(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async27062 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27062 = (function (alt_handler,flag,cb,meta27063){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta27063 = meta27063;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27062.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27064,meta27063__$1){
var self__ = this;
var _27064__$1 = this;
return (new cljs.core.async.t_cljs$core$async27062(self__.alt_handler,self__.flag,self__.cb,meta27063__$1));
});

cljs.core.async.t_cljs$core$async27062.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27064){
var self__ = this;
var _27064__$1 = this;
return self__.meta27063;
});

cljs.core.async.t_cljs$core$async27062.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async27062.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async27062.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async27062.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async27062.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta27063","meta27063",2131616568,null)], null);
});

cljs.core.async.t_cljs$core$async27062.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27062.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27062";

cljs.core.async.t_cljs$core$async27062.cljs$lang$ctorPrWriter = (function (this__25396__auto__,writer__25397__auto__,opt__25398__auto__){
return cljs.core._write.call(null,writer__25397__auto__,"cljs.core.async/t_cljs$core$async27062");
});

cljs.core.async.__GT_t_cljs$core$async27062 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async27062(alt_handler__$1,flag__$1,cb__$1,meta27063){
return (new cljs.core.async.t_cljs$core$async27062(alt_handler__$1,flag__$1,cb__$1,meta27063));
});

}

return (new cljs.core.async.t_cljs$core$async27062(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__27065_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27065_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__27066_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27066_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__24790__auto__ = wport;
if(cljs.core.truth_(or__24790__auto__)){
return or__24790__auto__;
} else {
return port;
}
})()], null));
} else {
var G__27067 = (i + (1));
i = G__27067;
continue;
}
} else {
return null;
}
break;
}
})();
var or__24790__auto__ = ret;
if(cljs.core.truth_(or__24790__auto__)){
return or__24790__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__24778__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__24778__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__24778__auto__;
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
var args__25872__auto__ = [];
var len__25865__auto___27073 = arguments.length;
var i__25866__auto___27074 = (0);
while(true){
if((i__25866__auto___27074 < len__25865__auto___27073)){
args__25872__auto__.push((arguments[i__25866__auto___27074]));

var G__27075 = (i__25866__auto___27074 + (1));
i__25866__auto___27074 = G__27075;
continue;
} else {
}
break;
}

var argseq__25873__auto__ = ((((1) < args__25872__auto__.length))?(new cljs.core.IndexedSeq(args__25872__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25873__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__27070){
var map__27071 = p__27070;
var map__27071__$1 = ((((!((map__27071 == null)))?((((map__27071.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27071.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27071):map__27071);
var opts = map__27071__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq27068){
var G__27069 = cljs.core.first.call(null,seq27068);
var seq27068__$1 = cljs.core.next.call(null,seq27068);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__27069,seq27068__$1);
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
var args27076 = [];
var len__25865__auto___27126 = arguments.length;
var i__25866__auto___27127 = (0);
while(true){
if((i__25866__auto___27127 < len__25865__auto___27126)){
args27076.push((arguments[i__25866__auto___27127]));

var G__27128 = (i__25866__auto___27127 + (1));
i__25866__auto___27127 = G__27128;
continue;
} else {
}
break;
}

var G__27078 = args27076.length;
switch (G__27078) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27076.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__26963__auto___27130 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26963__auto___27130){
return (function (){
var f__26964__auto__ = (function (){var switch__26851__auto__ = ((function (c__26963__auto___27130){
return (function (state_27102){
var state_val_27103 = (state_27102[(1)]);
if((state_val_27103 === (7))){
var inst_27098 = (state_27102[(2)]);
var state_27102__$1 = state_27102;
var statearr_27104_27131 = state_27102__$1;
(statearr_27104_27131[(2)] = inst_27098);

(statearr_27104_27131[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27103 === (1))){
var state_27102__$1 = state_27102;
var statearr_27105_27132 = state_27102__$1;
(statearr_27105_27132[(2)] = null);

(statearr_27105_27132[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27103 === (4))){
var inst_27081 = (state_27102[(7)]);
var inst_27081__$1 = (state_27102[(2)]);
var inst_27082 = (inst_27081__$1 == null);
var state_27102__$1 = (function (){var statearr_27106 = state_27102;
(statearr_27106[(7)] = inst_27081__$1);

return statearr_27106;
})();
if(cljs.core.truth_(inst_27082)){
var statearr_27107_27133 = state_27102__$1;
(statearr_27107_27133[(1)] = (5));

} else {
var statearr_27108_27134 = state_27102__$1;
(statearr_27108_27134[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27103 === (13))){
var state_27102__$1 = state_27102;
var statearr_27109_27135 = state_27102__$1;
(statearr_27109_27135[(2)] = null);

(statearr_27109_27135[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27103 === (6))){
var inst_27081 = (state_27102[(7)]);
var state_27102__$1 = state_27102;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27102__$1,(11),to,inst_27081);
} else {
if((state_val_27103 === (3))){
var inst_27100 = (state_27102[(2)]);
var state_27102__$1 = state_27102;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27102__$1,inst_27100);
} else {
if((state_val_27103 === (12))){
var state_27102__$1 = state_27102;
var statearr_27110_27136 = state_27102__$1;
(statearr_27110_27136[(2)] = null);

(statearr_27110_27136[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27103 === (2))){
var state_27102__$1 = state_27102;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27102__$1,(4),from);
} else {
if((state_val_27103 === (11))){
var inst_27091 = (state_27102[(2)]);
var state_27102__$1 = state_27102;
if(cljs.core.truth_(inst_27091)){
var statearr_27111_27137 = state_27102__$1;
(statearr_27111_27137[(1)] = (12));

} else {
var statearr_27112_27138 = state_27102__$1;
(statearr_27112_27138[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27103 === (9))){
var state_27102__$1 = state_27102;
var statearr_27113_27139 = state_27102__$1;
(statearr_27113_27139[(2)] = null);

(statearr_27113_27139[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27103 === (5))){
var state_27102__$1 = state_27102;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27114_27140 = state_27102__$1;
(statearr_27114_27140[(1)] = (8));

} else {
var statearr_27115_27141 = state_27102__$1;
(statearr_27115_27141[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27103 === (14))){
var inst_27096 = (state_27102[(2)]);
var state_27102__$1 = state_27102;
var statearr_27116_27142 = state_27102__$1;
(statearr_27116_27142[(2)] = inst_27096);

(statearr_27116_27142[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27103 === (10))){
var inst_27088 = (state_27102[(2)]);
var state_27102__$1 = state_27102;
var statearr_27117_27143 = state_27102__$1;
(statearr_27117_27143[(2)] = inst_27088);

(statearr_27117_27143[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27103 === (8))){
var inst_27085 = cljs.core.async.close_BANG_.call(null,to);
var state_27102__$1 = state_27102;
var statearr_27118_27144 = state_27102__$1;
(statearr_27118_27144[(2)] = inst_27085);

(statearr_27118_27144[(1)] = (10));


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
});})(c__26963__auto___27130))
;
return ((function (switch__26851__auto__,c__26963__auto___27130){
return (function() {
var cljs$core$async$state_machine__26852__auto__ = null;
var cljs$core$async$state_machine__26852__auto____0 = (function (){
var statearr_27122 = [null,null,null,null,null,null,null,null];
(statearr_27122[(0)] = cljs$core$async$state_machine__26852__auto__);

(statearr_27122[(1)] = (1));

return statearr_27122;
});
var cljs$core$async$state_machine__26852__auto____1 = (function (state_27102){
while(true){
var ret_value__26853__auto__ = (function (){try{while(true){
var result__26854__auto__ = switch__26851__auto__.call(null,state_27102);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26854__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26854__auto__;
}
break;
}
}catch (e27123){if((e27123 instanceof Object)){
var ex__26855__auto__ = e27123;
var statearr_27124_27145 = state_27102;
(statearr_27124_27145[(5)] = ex__26855__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27102);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27123;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27146 = state_27102;
state_27102 = G__27146;
continue;
} else {
return ret_value__26853__auto__;
}
break;
}
});
cljs$core$async$state_machine__26852__auto__ = function(state_27102){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26852__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26852__auto____1.call(this,state_27102);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26852__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26852__auto____0;
cljs$core$async$state_machine__26852__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26852__auto____1;
return cljs$core$async$state_machine__26852__auto__;
})()
;})(switch__26851__auto__,c__26963__auto___27130))
})();
var state__26965__auto__ = (function (){var statearr_27125 = f__26964__auto__.call(null);
(statearr_27125[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26963__auto___27130);

return statearr_27125;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26965__auto__);
});})(c__26963__auto___27130))
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
return (function (p__27334){
var vec__27335 = p__27334;
var v = cljs.core.nth.call(null,vec__27335,(0),null);
var p = cljs.core.nth.call(null,vec__27335,(1),null);
var job = vec__27335;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__26963__auto___27521 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26963__auto___27521,res,vec__27335,v,p,job,jobs,results){
return (function (){
var f__26964__auto__ = (function (){var switch__26851__auto__ = ((function (c__26963__auto___27521,res,vec__27335,v,p,job,jobs,results){
return (function (state_27342){
var state_val_27343 = (state_27342[(1)]);
if((state_val_27343 === (1))){
var state_27342__$1 = state_27342;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27342__$1,(2),res,v);
} else {
if((state_val_27343 === (2))){
var inst_27339 = (state_27342[(2)]);
var inst_27340 = cljs.core.async.close_BANG_.call(null,res);
var state_27342__$1 = (function (){var statearr_27344 = state_27342;
(statearr_27344[(7)] = inst_27339);

return statearr_27344;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27342__$1,inst_27340);
} else {
return null;
}
}
});})(c__26963__auto___27521,res,vec__27335,v,p,job,jobs,results))
;
return ((function (switch__26851__auto__,c__26963__auto___27521,res,vec__27335,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26852__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26852__auto____0 = (function (){
var statearr_27348 = [null,null,null,null,null,null,null,null];
(statearr_27348[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26852__auto__);

(statearr_27348[(1)] = (1));

return statearr_27348;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26852__auto____1 = (function (state_27342){
while(true){
var ret_value__26853__auto__ = (function (){try{while(true){
var result__26854__auto__ = switch__26851__auto__.call(null,state_27342);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26854__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26854__auto__;
}
break;
}
}catch (e27349){if((e27349 instanceof Object)){
var ex__26855__auto__ = e27349;
var statearr_27350_27522 = state_27342;
(statearr_27350_27522[(5)] = ex__26855__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27342);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27349;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27523 = state_27342;
state_27342 = G__27523;
continue;
} else {
return ret_value__26853__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26852__auto__ = function(state_27342){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26852__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26852__auto____1.call(this,state_27342);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26852__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26852__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26852__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26852__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26852__auto__;
})()
;})(switch__26851__auto__,c__26963__auto___27521,res,vec__27335,v,p,job,jobs,results))
})();
var state__26965__auto__ = (function (){var statearr_27351 = f__26964__auto__.call(null);
(statearr_27351[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26963__auto___27521);

return statearr_27351;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26965__auto__);
});})(c__26963__auto___27521,res,vec__27335,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__27352){
var vec__27353 = p__27352;
var v = cljs.core.nth.call(null,vec__27353,(0),null);
var p = cljs.core.nth.call(null,vec__27353,(1),null);
var job = vec__27353;
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
var n__25705__auto___27524 = n;
var __27525 = (0);
while(true){
if((__27525 < n__25705__auto___27524)){
var G__27356_27526 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__27356_27526) {
case "compute":
var c__26963__auto___27528 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__27525,c__26963__auto___27528,G__27356_27526,n__25705__auto___27524,jobs,results,process,async){
return (function (){
var f__26964__auto__ = (function (){var switch__26851__auto__ = ((function (__27525,c__26963__auto___27528,G__27356_27526,n__25705__auto___27524,jobs,results,process,async){
return (function (state_27369){
var state_val_27370 = (state_27369[(1)]);
if((state_val_27370 === (1))){
var state_27369__$1 = state_27369;
var statearr_27371_27529 = state_27369__$1;
(statearr_27371_27529[(2)] = null);

(statearr_27371_27529[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27370 === (2))){
var state_27369__$1 = state_27369;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27369__$1,(4),jobs);
} else {
if((state_val_27370 === (3))){
var inst_27367 = (state_27369[(2)]);
var state_27369__$1 = state_27369;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27369__$1,inst_27367);
} else {
if((state_val_27370 === (4))){
var inst_27359 = (state_27369[(2)]);
var inst_27360 = process.call(null,inst_27359);
var state_27369__$1 = state_27369;
if(cljs.core.truth_(inst_27360)){
var statearr_27372_27530 = state_27369__$1;
(statearr_27372_27530[(1)] = (5));

} else {
var statearr_27373_27531 = state_27369__$1;
(statearr_27373_27531[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27370 === (5))){
var state_27369__$1 = state_27369;
var statearr_27374_27532 = state_27369__$1;
(statearr_27374_27532[(2)] = null);

(statearr_27374_27532[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27370 === (6))){
var state_27369__$1 = state_27369;
var statearr_27375_27533 = state_27369__$1;
(statearr_27375_27533[(2)] = null);

(statearr_27375_27533[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27370 === (7))){
var inst_27365 = (state_27369[(2)]);
var state_27369__$1 = state_27369;
var statearr_27376_27534 = state_27369__$1;
(statearr_27376_27534[(2)] = inst_27365);

(statearr_27376_27534[(1)] = (3));


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
});})(__27525,c__26963__auto___27528,G__27356_27526,n__25705__auto___27524,jobs,results,process,async))
;
return ((function (__27525,switch__26851__auto__,c__26963__auto___27528,G__27356_27526,n__25705__auto___27524,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26852__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26852__auto____0 = (function (){
var statearr_27380 = [null,null,null,null,null,null,null];
(statearr_27380[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26852__auto__);

(statearr_27380[(1)] = (1));

return statearr_27380;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26852__auto____1 = (function (state_27369){
while(true){
var ret_value__26853__auto__ = (function (){try{while(true){
var result__26854__auto__ = switch__26851__auto__.call(null,state_27369);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26854__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26854__auto__;
}
break;
}
}catch (e27381){if((e27381 instanceof Object)){
var ex__26855__auto__ = e27381;
var statearr_27382_27535 = state_27369;
(statearr_27382_27535[(5)] = ex__26855__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27369);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27381;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27536 = state_27369;
state_27369 = G__27536;
continue;
} else {
return ret_value__26853__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26852__auto__ = function(state_27369){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26852__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26852__auto____1.call(this,state_27369);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26852__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26852__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26852__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26852__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26852__auto__;
})()
;})(__27525,switch__26851__auto__,c__26963__auto___27528,G__27356_27526,n__25705__auto___27524,jobs,results,process,async))
})();
var state__26965__auto__ = (function (){var statearr_27383 = f__26964__auto__.call(null);
(statearr_27383[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26963__auto___27528);

return statearr_27383;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26965__auto__);
});})(__27525,c__26963__auto___27528,G__27356_27526,n__25705__auto___27524,jobs,results,process,async))
);


break;
case "async":
var c__26963__auto___27537 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__27525,c__26963__auto___27537,G__27356_27526,n__25705__auto___27524,jobs,results,process,async){
return (function (){
var f__26964__auto__ = (function (){var switch__26851__auto__ = ((function (__27525,c__26963__auto___27537,G__27356_27526,n__25705__auto___27524,jobs,results,process,async){
return (function (state_27396){
var state_val_27397 = (state_27396[(1)]);
if((state_val_27397 === (1))){
var state_27396__$1 = state_27396;
var statearr_27398_27538 = state_27396__$1;
(statearr_27398_27538[(2)] = null);

(statearr_27398_27538[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27397 === (2))){
var state_27396__$1 = state_27396;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27396__$1,(4),jobs);
} else {
if((state_val_27397 === (3))){
var inst_27394 = (state_27396[(2)]);
var state_27396__$1 = state_27396;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27396__$1,inst_27394);
} else {
if((state_val_27397 === (4))){
var inst_27386 = (state_27396[(2)]);
var inst_27387 = async.call(null,inst_27386);
var state_27396__$1 = state_27396;
if(cljs.core.truth_(inst_27387)){
var statearr_27399_27539 = state_27396__$1;
(statearr_27399_27539[(1)] = (5));

} else {
var statearr_27400_27540 = state_27396__$1;
(statearr_27400_27540[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27397 === (5))){
var state_27396__$1 = state_27396;
var statearr_27401_27541 = state_27396__$1;
(statearr_27401_27541[(2)] = null);

(statearr_27401_27541[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27397 === (6))){
var state_27396__$1 = state_27396;
var statearr_27402_27542 = state_27396__$1;
(statearr_27402_27542[(2)] = null);

(statearr_27402_27542[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27397 === (7))){
var inst_27392 = (state_27396[(2)]);
var state_27396__$1 = state_27396;
var statearr_27403_27543 = state_27396__$1;
(statearr_27403_27543[(2)] = inst_27392);

(statearr_27403_27543[(1)] = (3));


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
});})(__27525,c__26963__auto___27537,G__27356_27526,n__25705__auto___27524,jobs,results,process,async))
;
return ((function (__27525,switch__26851__auto__,c__26963__auto___27537,G__27356_27526,n__25705__auto___27524,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26852__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26852__auto____0 = (function (){
var statearr_27407 = [null,null,null,null,null,null,null];
(statearr_27407[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26852__auto__);

(statearr_27407[(1)] = (1));

return statearr_27407;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26852__auto____1 = (function (state_27396){
while(true){
var ret_value__26853__auto__ = (function (){try{while(true){
var result__26854__auto__ = switch__26851__auto__.call(null,state_27396);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26854__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26854__auto__;
}
break;
}
}catch (e27408){if((e27408 instanceof Object)){
var ex__26855__auto__ = e27408;
var statearr_27409_27544 = state_27396;
(statearr_27409_27544[(5)] = ex__26855__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27396);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27408;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27545 = state_27396;
state_27396 = G__27545;
continue;
} else {
return ret_value__26853__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26852__auto__ = function(state_27396){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26852__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26852__auto____1.call(this,state_27396);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26852__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26852__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26852__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26852__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26852__auto__;
})()
;})(__27525,switch__26851__auto__,c__26963__auto___27537,G__27356_27526,n__25705__auto___27524,jobs,results,process,async))
})();
var state__26965__auto__ = (function (){var statearr_27410 = f__26964__auto__.call(null);
(statearr_27410[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26963__auto___27537);

return statearr_27410;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26965__auto__);
});})(__27525,c__26963__auto___27537,G__27356_27526,n__25705__auto___27524,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__27546 = (__27525 + (1));
__27525 = G__27546;
continue;
} else {
}
break;
}

var c__26963__auto___27547 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26963__auto___27547,jobs,results,process,async){
return (function (){
var f__26964__auto__ = (function (){var switch__26851__auto__ = ((function (c__26963__auto___27547,jobs,results,process,async){
return (function (state_27432){
var state_val_27433 = (state_27432[(1)]);
if((state_val_27433 === (1))){
var state_27432__$1 = state_27432;
var statearr_27434_27548 = state_27432__$1;
(statearr_27434_27548[(2)] = null);

(statearr_27434_27548[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27433 === (2))){
var state_27432__$1 = state_27432;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27432__$1,(4),from);
} else {
if((state_val_27433 === (3))){
var inst_27430 = (state_27432[(2)]);
var state_27432__$1 = state_27432;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27432__$1,inst_27430);
} else {
if((state_val_27433 === (4))){
var inst_27413 = (state_27432[(7)]);
var inst_27413__$1 = (state_27432[(2)]);
var inst_27414 = (inst_27413__$1 == null);
var state_27432__$1 = (function (){var statearr_27435 = state_27432;
(statearr_27435[(7)] = inst_27413__$1);

return statearr_27435;
})();
if(cljs.core.truth_(inst_27414)){
var statearr_27436_27549 = state_27432__$1;
(statearr_27436_27549[(1)] = (5));

} else {
var statearr_27437_27550 = state_27432__$1;
(statearr_27437_27550[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27433 === (5))){
var inst_27416 = cljs.core.async.close_BANG_.call(null,jobs);
var state_27432__$1 = state_27432;
var statearr_27438_27551 = state_27432__$1;
(statearr_27438_27551[(2)] = inst_27416);

(statearr_27438_27551[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27433 === (6))){
var inst_27413 = (state_27432[(7)]);
var inst_27418 = (state_27432[(8)]);
var inst_27418__$1 = cljs.core.async.chan.call(null,(1));
var inst_27419 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27420 = [inst_27413,inst_27418__$1];
var inst_27421 = (new cljs.core.PersistentVector(null,2,(5),inst_27419,inst_27420,null));
var state_27432__$1 = (function (){var statearr_27439 = state_27432;
(statearr_27439[(8)] = inst_27418__$1);

return statearr_27439;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27432__$1,(8),jobs,inst_27421);
} else {
if((state_val_27433 === (7))){
var inst_27428 = (state_27432[(2)]);
var state_27432__$1 = state_27432;
var statearr_27440_27552 = state_27432__$1;
(statearr_27440_27552[(2)] = inst_27428);

(statearr_27440_27552[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27433 === (8))){
var inst_27418 = (state_27432[(8)]);
var inst_27423 = (state_27432[(2)]);
var state_27432__$1 = (function (){var statearr_27441 = state_27432;
(statearr_27441[(9)] = inst_27423);

return statearr_27441;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27432__$1,(9),results,inst_27418);
} else {
if((state_val_27433 === (9))){
var inst_27425 = (state_27432[(2)]);
var state_27432__$1 = (function (){var statearr_27442 = state_27432;
(statearr_27442[(10)] = inst_27425);

return statearr_27442;
})();
var statearr_27443_27553 = state_27432__$1;
(statearr_27443_27553[(2)] = null);

(statearr_27443_27553[(1)] = (2));


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
});})(c__26963__auto___27547,jobs,results,process,async))
;
return ((function (switch__26851__auto__,c__26963__auto___27547,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26852__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26852__auto____0 = (function (){
var statearr_27447 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27447[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26852__auto__);

(statearr_27447[(1)] = (1));

return statearr_27447;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26852__auto____1 = (function (state_27432){
while(true){
var ret_value__26853__auto__ = (function (){try{while(true){
var result__26854__auto__ = switch__26851__auto__.call(null,state_27432);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26854__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26854__auto__;
}
break;
}
}catch (e27448){if((e27448 instanceof Object)){
var ex__26855__auto__ = e27448;
var statearr_27449_27554 = state_27432;
(statearr_27449_27554[(5)] = ex__26855__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27432);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27448;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27555 = state_27432;
state_27432 = G__27555;
continue;
} else {
return ret_value__26853__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26852__auto__ = function(state_27432){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26852__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26852__auto____1.call(this,state_27432);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26852__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26852__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26852__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26852__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26852__auto__;
})()
;})(switch__26851__auto__,c__26963__auto___27547,jobs,results,process,async))
})();
var state__26965__auto__ = (function (){var statearr_27450 = f__26964__auto__.call(null);
(statearr_27450[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26963__auto___27547);

return statearr_27450;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26965__auto__);
});})(c__26963__auto___27547,jobs,results,process,async))
);


var c__26963__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26963__auto__,jobs,results,process,async){
return (function (){
var f__26964__auto__ = (function (){var switch__26851__auto__ = ((function (c__26963__auto__,jobs,results,process,async){
return (function (state_27488){
var state_val_27489 = (state_27488[(1)]);
if((state_val_27489 === (7))){
var inst_27484 = (state_27488[(2)]);
var state_27488__$1 = state_27488;
var statearr_27490_27556 = state_27488__$1;
(statearr_27490_27556[(2)] = inst_27484);

(statearr_27490_27556[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27489 === (20))){
var state_27488__$1 = state_27488;
var statearr_27491_27557 = state_27488__$1;
(statearr_27491_27557[(2)] = null);

(statearr_27491_27557[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27489 === (1))){
var state_27488__$1 = state_27488;
var statearr_27492_27558 = state_27488__$1;
(statearr_27492_27558[(2)] = null);

(statearr_27492_27558[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27489 === (4))){
var inst_27453 = (state_27488[(7)]);
var inst_27453__$1 = (state_27488[(2)]);
var inst_27454 = (inst_27453__$1 == null);
var state_27488__$1 = (function (){var statearr_27493 = state_27488;
(statearr_27493[(7)] = inst_27453__$1);

return statearr_27493;
})();
if(cljs.core.truth_(inst_27454)){
var statearr_27494_27559 = state_27488__$1;
(statearr_27494_27559[(1)] = (5));

} else {
var statearr_27495_27560 = state_27488__$1;
(statearr_27495_27560[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27489 === (15))){
var inst_27466 = (state_27488[(8)]);
var state_27488__$1 = state_27488;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27488__$1,(18),to,inst_27466);
} else {
if((state_val_27489 === (21))){
var inst_27479 = (state_27488[(2)]);
var state_27488__$1 = state_27488;
var statearr_27496_27561 = state_27488__$1;
(statearr_27496_27561[(2)] = inst_27479);

(statearr_27496_27561[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27489 === (13))){
var inst_27481 = (state_27488[(2)]);
var state_27488__$1 = (function (){var statearr_27497 = state_27488;
(statearr_27497[(9)] = inst_27481);

return statearr_27497;
})();
var statearr_27498_27562 = state_27488__$1;
(statearr_27498_27562[(2)] = null);

(statearr_27498_27562[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27489 === (6))){
var inst_27453 = (state_27488[(7)]);
var state_27488__$1 = state_27488;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27488__$1,(11),inst_27453);
} else {
if((state_val_27489 === (17))){
var inst_27474 = (state_27488[(2)]);
var state_27488__$1 = state_27488;
if(cljs.core.truth_(inst_27474)){
var statearr_27499_27563 = state_27488__$1;
(statearr_27499_27563[(1)] = (19));

} else {
var statearr_27500_27564 = state_27488__$1;
(statearr_27500_27564[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27489 === (3))){
var inst_27486 = (state_27488[(2)]);
var state_27488__$1 = state_27488;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27488__$1,inst_27486);
} else {
if((state_val_27489 === (12))){
var inst_27463 = (state_27488[(10)]);
var state_27488__$1 = state_27488;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27488__$1,(14),inst_27463);
} else {
if((state_val_27489 === (2))){
var state_27488__$1 = state_27488;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27488__$1,(4),results);
} else {
if((state_val_27489 === (19))){
var state_27488__$1 = state_27488;
var statearr_27501_27565 = state_27488__$1;
(statearr_27501_27565[(2)] = null);

(statearr_27501_27565[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27489 === (11))){
var inst_27463 = (state_27488[(2)]);
var state_27488__$1 = (function (){var statearr_27502 = state_27488;
(statearr_27502[(10)] = inst_27463);

return statearr_27502;
})();
var statearr_27503_27566 = state_27488__$1;
(statearr_27503_27566[(2)] = null);

(statearr_27503_27566[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27489 === (9))){
var state_27488__$1 = state_27488;
var statearr_27504_27567 = state_27488__$1;
(statearr_27504_27567[(2)] = null);

(statearr_27504_27567[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27489 === (5))){
var state_27488__$1 = state_27488;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27505_27568 = state_27488__$1;
(statearr_27505_27568[(1)] = (8));

} else {
var statearr_27506_27569 = state_27488__$1;
(statearr_27506_27569[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27489 === (14))){
var inst_27468 = (state_27488[(11)]);
var inst_27466 = (state_27488[(8)]);
var inst_27466__$1 = (state_27488[(2)]);
var inst_27467 = (inst_27466__$1 == null);
var inst_27468__$1 = cljs.core.not.call(null,inst_27467);
var state_27488__$1 = (function (){var statearr_27507 = state_27488;
(statearr_27507[(11)] = inst_27468__$1);

(statearr_27507[(8)] = inst_27466__$1);

return statearr_27507;
})();
if(inst_27468__$1){
var statearr_27508_27570 = state_27488__$1;
(statearr_27508_27570[(1)] = (15));

} else {
var statearr_27509_27571 = state_27488__$1;
(statearr_27509_27571[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27489 === (16))){
var inst_27468 = (state_27488[(11)]);
var state_27488__$1 = state_27488;
var statearr_27510_27572 = state_27488__$1;
(statearr_27510_27572[(2)] = inst_27468);

(statearr_27510_27572[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27489 === (10))){
var inst_27460 = (state_27488[(2)]);
var state_27488__$1 = state_27488;
var statearr_27511_27573 = state_27488__$1;
(statearr_27511_27573[(2)] = inst_27460);

(statearr_27511_27573[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27489 === (18))){
var inst_27471 = (state_27488[(2)]);
var state_27488__$1 = state_27488;
var statearr_27512_27574 = state_27488__$1;
(statearr_27512_27574[(2)] = inst_27471);

(statearr_27512_27574[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27489 === (8))){
var inst_27457 = cljs.core.async.close_BANG_.call(null,to);
var state_27488__$1 = state_27488;
var statearr_27513_27575 = state_27488__$1;
(statearr_27513_27575[(2)] = inst_27457);

(statearr_27513_27575[(1)] = (10));


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
});})(c__26963__auto__,jobs,results,process,async))
;
return ((function (switch__26851__auto__,c__26963__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26852__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26852__auto____0 = (function (){
var statearr_27517 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27517[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26852__auto__);

(statearr_27517[(1)] = (1));

return statearr_27517;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26852__auto____1 = (function (state_27488){
while(true){
var ret_value__26853__auto__ = (function (){try{while(true){
var result__26854__auto__ = switch__26851__auto__.call(null,state_27488);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26854__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26854__auto__;
}
break;
}
}catch (e27518){if((e27518 instanceof Object)){
var ex__26855__auto__ = e27518;
var statearr_27519_27576 = state_27488;
(statearr_27519_27576[(5)] = ex__26855__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27488);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27518;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27577 = state_27488;
state_27488 = G__27577;
continue;
} else {
return ret_value__26853__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26852__auto__ = function(state_27488){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26852__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26852__auto____1.call(this,state_27488);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26852__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26852__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26852__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26852__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26852__auto__;
})()
;})(switch__26851__auto__,c__26963__auto__,jobs,results,process,async))
})();
var state__26965__auto__ = (function (){var statearr_27520 = f__26964__auto__.call(null);
(statearr_27520[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26963__auto__);

return statearr_27520;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26965__auto__);
});})(c__26963__auto__,jobs,results,process,async))
);

return c__26963__auto__;
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
var args27578 = [];
var len__25865__auto___27581 = arguments.length;
var i__25866__auto___27582 = (0);
while(true){
if((i__25866__auto___27582 < len__25865__auto___27581)){
args27578.push((arguments[i__25866__auto___27582]));

var G__27583 = (i__25866__auto___27582 + (1));
i__25866__auto___27582 = G__27583;
continue;
} else {
}
break;
}

var G__27580 = args27578.length;
switch (G__27580) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27578.length)].join('')));

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
var args27585 = [];
var len__25865__auto___27588 = arguments.length;
var i__25866__auto___27589 = (0);
while(true){
if((i__25866__auto___27589 < len__25865__auto___27588)){
args27585.push((arguments[i__25866__auto___27589]));

var G__27590 = (i__25866__auto___27589 + (1));
i__25866__auto___27589 = G__27590;
continue;
} else {
}
break;
}

var G__27587 = args27585.length;
switch (G__27587) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27585.length)].join('')));

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
var args27592 = [];
var len__25865__auto___27645 = arguments.length;
var i__25866__auto___27646 = (0);
while(true){
if((i__25866__auto___27646 < len__25865__auto___27645)){
args27592.push((arguments[i__25866__auto___27646]));

var G__27647 = (i__25866__auto___27646 + (1));
i__25866__auto___27646 = G__27647;
continue;
} else {
}
break;
}

var G__27594 = args27592.length;
switch (G__27594) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27592.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__26963__auto___27649 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26963__auto___27649,tc,fc){
return (function (){
var f__26964__auto__ = (function (){var switch__26851__auto__ = ((function (c__26963__auto___27649,tc,fc){
return (function (state_27620){
var state_val_27621 = (state_27620[(1)]);
if((state_val_27621 === (7))){
var inst_27616 = (state_27620[(2)]);
var state_27620__$1 = state_27620;
var statearr_27622_27650 = state_27620__$1;
(statearr_27622_27650[(2)] = inst_27616);

(statearr_27622_27650[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27621 === (1))){
var state_27620__$1 = state_27620;
var statearr_27623_27651 = state_27620__$1;
(statearr_27623_27651[(2)] = null);

(statearr_27623_27651[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27621 === (4))){
var inst_27597 = (state_27620[(7)]);
var inst_27597__$1 = (state_27620[(2)]);
var inst_27598 = (inst_27597__$1 == null);
var state_27620__$1 = (function (){var statearr_27624 = state_27620;
(statearr_27624[(7)] = inst_27597__$1);

return statearr_27624;
})();
if(cljs.core.truth_(inst_27598)){
var statearr_27625_27652 = state_27620__$1;
(statearr_27625_27652[(1)] = (5));

} else {
var statearr_27626_27653 = state_27620__$1;
(statearr_27626_27653[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27621 === (13))){
var state_27620__$1 = state_27620;
var statearr_27627_27654 = state_27620__$1;
(statearr_27627_27654[(2)] = null);

(statearr_27627_27654[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27621 === (6))){
var inst_27597 = (state_27620[(7)]);
var inst_27603 = p.call(null,inst_27597);
var state_27620__$1 = state_27620;
if(cljs.core.truth_(inst_27603)){
var statearr_27628_27655 = state_27620__$1;
(statearr_27628_27655[(1)] = (9));

} else {
var statearr_27629_27656 = state_27620__$1;
(statearr_27629_27656[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27621 === (3))){
var inst_27618 = (state_27620[(2)]);
var state_27620__$1 = state_27620;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27620__$1,inst_27618);
} else {
if((state_val_27621 === (12))){
var state_27620__$1 = state_27620;
var statearr_27630_27657 = state_27620__$1;
(statearr_27630_27657[(2)] = null);

(statearr_27630_27657[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27621 === (2))){
var state_27620__$1 = state_27620;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27620__$1,(4),ch);
} else {
if((state_val_27621 === (11))){
var inst_27597 = (state_27620[(7)]);
var inst_27607 = (state_27620[(2)]);
var state_27620__$1 = state_27620;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27620__$1,(8),inst_27607,inst_27597);
} else {
if((state_val_27621 === (9))){
var state_27620__$1 = state_27620;
var statearr_27631_27658 = state_27620__$1;
(statearr_27631_27658[(2)] = tc);

(statearr_27631_27658[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27621 === (5))){
var inst_27600 = cljs.core.async.close_BANG_.call(null,tc);
var inst_27601 = cljs.core.async.close_BANG_.call(null,fc);
var state_27620__$1 = (function (){var statearr_27632 = state_27620;
(statearr_27632[(8)] = inst_27600);

return statearr_27632;
})();
var statearr_27633_27659 = state_27620__$1;
(statearr_27633_27659[(2)] = inst_27601);

(statearr_27633_27659[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27621 === (14))){
var inst_27614 = (state_27620[(2)]);
var state_27620__$1 = state_27620;
var statearr_27634_27660 = state_27620__$1;
(statearr_27634_27660[(2)] = inst_27614);

(statearr_27634_27660[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27621 === (10))){
var state_27620__$1 = state_27620;
var statearr_27635_27661 = state_27620__$1;
(statearr_27635_27661[(2)] = fc);

(statearr_27635_27661[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27621 === (8))){
var inst_27609 = (state_27620[(2)]);
var state_27620__$1 = state_27620;
if(cljs.core.truth_(inst_27609)){
var statearr_27636_27662 = state_27620__$1;
(statearr_27636_27662[(1)] = (12));

} else {
var statearr_27637_27663 = state_27620__$1;
(statearr_27637_27663[(1)] = (13));

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
});})(c__26963__auto___27649,tc,fc))
;
return ((function (switch__26851__auto__,c__26963__auto___27649,tc,fc){
return (function() {
var cljs$core$async$state_machine__26852__auto__ = null;
var cljs$core$async$state_machine__26852__auto____0 = (function (){
var statearr_27641 = [null,null,null,null,null,null,null,null,null];
(statearr_27641[(0)] = cljs$core$async$state_machine__26852__auto__);

(statearr_27641[(1)] = (1));

return statearr_27641;
});
var cljs$core$async$state_machine__26852__auto____1 = (function (state_27620){
while(true){
var ret_value__26853__auto__ = (function (){try{while(true){
var result__26854__auto__ = switch__26851__auto__.call(null,state_27620);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26854__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26854__auto__;
}
break;
}
}catch (e27642){if((e27642 instanceof Object)){
var ex__26855__auto__ = e27642;
var statearr_27643_27664 = state_27620;
(statearr_27643_27664[(5)] = ex__26855__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27620);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27642;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27665 = state_27620;
state_27620 = G__27665;
continue;
} else {
return ret_value__26853__auto__;
}
break;
}
});
cljs$core$async$state_machine__26852__auto__ = function(state_27620){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26852__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26852__auto____1.call(this,state_27620);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26852__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26852__auto____0;
cljs$core$async$state_machine__26852__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26852__auto____1;
return cljs$core$async$state_machine__26852__auto__;
})()
;})(switch__26851__auto__,c__26963__auto___27649,tc,fc))
})();
var state__26965__auto__ = (function (){var statearr_27644 = f__26964__auto__.call(null);
(statearr_27644[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26963__auto___27649);

return statearr_27644;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26965__auto__);
});})(c__26963__auto___27649,tc,fc))
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
var c__26963__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26963__auto__){
return (function (){
var f__26964__auto__ = (function (){var switch__26851__auto__ = ((function (c__26963__auto__){
return (function (state_27729){
var state_val_27730 = (state_27729[(1)]);
if((state_val_27730 === (7))){
var inst_27725 = (state_27729[(2)]);
var state_27729__$1 = state_27729;
var statearr_27731_27752 = state_27729__$1;
(statearr_27731_27752[(2)] = inst_27725);

(statearr_27731_27752[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27730 === (1))){
var inst_27709 = init;
var state_27729__$1 = (function (){var statearr_27732 = state_27729;
(statearr_27732[(7)] = inst_27709);

return statearr_27732;
})();
var statearr_27733_27753 = state_27729__$1;
(statearr_27733_27753[(2)] = null);

(statearr_27733_27753[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27730 === (4))){
var inst_27712 = (state_27729[(8)]);
var inst_27712__$1 = (state_27729[(2)]);
var inst_27713 = (inst_27712__$1 == null);
var state_27729__$1 = (function (){var statearr_27734 = state_27729;
(statearr_27734[(8)] = inst_27712__$1);

return statearr_27734;
})();
if(cljs.core.truth_(inst_27713)){
var statearr_27735_27754 = state_27729__$1;
(statearr_27735_27754[(1)] = (5));

} else {
var statearr_27736_27755 = state_27729__$1;
(statearr_27736_27755[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27730 === (6))){
var inst_27716 = (state_27729[(9)]);
var inst_27709 = (state_27729[(7)]);
var inst_27712 = (state_27729[(8)]);
var inst_27716__$1 = f.call(null,inst_27709,inst_27712);
var inst_27717 = cljs.core.reduced_QMARK_.call(null,inst_27716__$1);
var state_27729__$1 = (function (){var statearr_27737 = state_27729;
(statearr_27737[(9)] = inst_27716__$1);

return statearr_27737;
})();
if(inst_27717){
var statearr_27738_27756 = state_27729__$1;
(statearr_27738_27756[(1)] = (8));

} else {
var statearr_27739_27757 = state_27729__$1;
(statearr_27739_27757[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27730 === (3))){
var inst_27727 = (state_27729[(2)]);
var state_27729__$1 = state_27729;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27729__$1,inst_27727);
} else {
if((state_val_27730 === (2))){
var state_27729__$1 = state_27729;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27729__$1,(4),ch);
} else {
if((state_val_27730 === (9))){
var inst_27716 = (state_27729[(9)]);
var inst_27709 = inst_27716;
var state_27729__$1 = (function (){var statearr_27740 = state_27729;
(statearr_27740[(7)] = inst_27709);

return statearr_27740;
})();
var statearr_27741_27758 = state_27729__$1;
(statearr_27741_27758[(2)] = null);

(statearr_27741_27758[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27730 === (5))){
var inst_27709 = (state_27729[(7)]);
var state_27729__$1 = state_27729;
var statearr_27742_27759 = state_27729__$1;
(statearr_27742_27759[(2)] = inst_27709);

(statearr_27742_27759[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27730 === (10))){
var inst_27723 = (state_27729[(2)]);
var state_27729__$1 = state_27729;
var statearr_27743_27760 = state_27729__$1;
(statearr_27743_27760[(2)] = inst_27723);

(statearr_27743_27760[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27730 === (8))){
var inst_27716 = (state_27729[(9)]);
var inst_27719 = cljs.core.deref.call(null,inst_27716);
var state_27729__$1 = state_27729;
var statearr_27744_27761 = state_27729__$1;
(statearr_27744_27761[(2)] = inst_27719);

(statearr_27744_27761[(1)] = (10));


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
});})(c__26963__auto__))
;
return ((function (switch__26851__auto__,c__26963__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__26852__auto__ = null;
var cljs$core$async$reduce_$_state_machine__26852__auto____0 = (function (){
var statearr_27748 = [null,null,null,null,null,null,null,null,null,null];
(statearr_27748[(0)] = cljs$core$async$reduce_$_state_machine__26852__auto__);

(statearr_27748[(1)] = (1));

return statearr_27748;
});
var cljs$core$async$reduce_$_state_machine__26852__auto____1 = (function (state_27729){
while(true){
var ret_value__26853__auto__ = (function (){try{while(true){
var result__26854__auto__ = switch__26851__auto__.call(null,state_27729);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26854__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26854__auto__;
}
break;
}
}catch (e27749){if((e27749 instanceof Object)){
var ex__26855__auto__ = e27749;
var statearr_27750_27762 = state_27729;
(statearr_27750_27762[(5)] = ex__26855__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27729);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27749;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27763 = state_27729;
state_27729 = G__27763;
continue;
} else {
return ret_value__26853__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__26852__auto__ = function(state_27729){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__26852__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__26852__auto____1.call(this,state_27729);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__26852__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__26852__auto____0;
cljs$core$async$reduce_$_state_machine__26852__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__26852__auto____1;
return cljs$core$async$reduce_$_state_machine__26852__auto__;
})()
;})(switch__26851__auto__,c__26963__auto__))
})();
var state__26965__auto__ = (function (){var statearr_27751 = f__26964__auto__.call(null);
(statearr_27751[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26963__auto__);

return statearr_27751;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26965__auto__);
});})(c__26963__auto__))
);

return c__26963__auto__;
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
var args27764 = [];
var len__25865__auto___27816 = arguments.length;
var i__25866__auto___27817 = (0);
while(true){
if((i__25866__auto___27817 < len__25865__auto___27816)){
args27764.push((arguments[i__25866__auto___27817]));

var G__27818 = (i__25866__auto___27817 + (1));
i__25866__auto___27817 = G__27818;
continue;
} else {
}
break;
}

var G__27766 = args27764.length;
switch (G__27766) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27764.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__26963__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26963__auto__){
return (function (){
var f__26964__auto__ = (function (){var switch__26851__auto__ = ((function (c__26963__auto__){
return (function (state_27791){
var state_val_27792 = (state_27791[(1)]);
if((state_val_27792 === (7))){
var inst_27773 = (state_27791[(2)]);
var state_27791__$1 = state_27791;
var statearr_27793_27820 = state_27791__$1;
(statearr_27793_27820[(2)] = inst_27773);

(statearr_27793_27820[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27792 === (1))){
var inst_27767 = cljs.core.seq.call(null,coll);
var inst_27768 = inst_27767;
var state_27791__$1 = (function (){var statearr_27794 = state_27791;
(statearr_27794[(7)] = inst_27768);

return statearr_27794;
})();
var statearr_27795_27821 = state_27791__$1;
(statearr_27795_27821[(2)] = null);

(statearr_27795_27821[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27792 === (4))){
var inst_27768 = (state_27791[(7)]);
var inst_27771 = cljs.core.first.call(null,inst_27768);
var state_27791__$1 = state_27791;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27791__$1,(7),ch,inst_27771);
} else {
if((state_val_27792 === (13))){
var inst_27785 = (state_27791[(2)]);
var state_27791__$1 = state_27791;
var statearr_27796_27822 = state_27791__$1;
(statearr_27796_27822[(2)] = inst_27785);

(statearr_27796_27822[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27792 === (6))){
var inst_27776 = (state_27791[(2)]);
var state_27791__$1 = state_27791;
if(cljs.core.truth_(inst_27776)){
var statearr_27797_27823 = state_27791__$1;
(statearr_27797_27823[(1)] = (8));

} else {
var statearr_27798_27824 = state_27791__$1;
(statearr_27798_27824[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27792 === (3))){
var inst_27789 = (state_27791[(2)]);
var state_27791__$1 = state_27791;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27791__$1,inst_27789);
} else {
if((state_val_27792 === (12))){
var state_27791__$1 = state_27791;
var statearr_27799_27825 = state_27791__$1;
(statearr_27799_27825[(2)] = null);

(statearr_27799_27825[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27792 === (2))){
var inst_27768 = (state_27791[(7)]);
var state_27791__$1 = state_27791;
if(cljs.core.truth_(inst_27768)){
var statearr_27800_27826 = state_27791__$1;
(statearr_27800_27826[(1)] = (4));

} else {
var statearr_27801_27827 = state_27791__$1;
(statearr_27801_27827[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27792 === (11))){
var inst_27782 = cljs.core.async.close_BANG_.call(null,ch);
var state_27791__$1 = state_27791;
var statearr_27802_27828 = state_27791__$1;
(statearr_27802_27828[(2)] = inst_27782);

(statearr_27802_27828[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27792 === (9))){
var state_27791__$1 = state_27791;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27803_27829 = state_27791__$1;
(statearr_27803_27829[(1)] = (11));

} else {
var statearr_27804_27830 = state_27791__$1;
(statearr_27804_27830[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27792 === (5))){
var inst_27768 = (state_27791[(7)]);
var state_27791__$1 = state_27791;
var statearr_27805_27831 = state_27791__$1;
(statearr_27805_27831[(2)] = inst_27768);

(statearr_27805_27831[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27792 === (10))){
var inst_27787 = (state_27791[(2)]);
var state_27791__$1 = state_27791;
var statearr_27806_27832 = state_27791__$1;
(statearr_27806_27832[(2)] = inst_27787);

(statearr_27806_27832[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27792 === (8))){
var inst_27768 = (state_27791[(7)]);
var inst_27778 = cljs.core.next.call(null,inst_27768);
var inst_27768__$1 = inst_27778;
var state_27791__$1 = (function (){var statearr_27807 = state_27791;
(statearr_27807[(7)] = inst_27768__$1);

return statearr_27807;
})();
var statearr_27808_27833 = state_27791__$1;
(statearr_27808_27833[(2)] = null);

(statearr_27808_27833[(1)] = (2));


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
});})(c__26963__auto__))
;
return ((function (switch__26851__auto__,c__26963__auto__){
return (function() {
var cljs$core$async$state_machine__26852__auto__ = null;
var cljs$core$async$state_machine__26852__auto____0 = (function (){
var statearr_27812 = [null,null,null,null,null,null,null,null];
(statearr_27812[(0)] = cljs$core$async$state_machine__26852__auto__);

(statearr_27812[(1)] = (1));

return statearr_27812;
});
var cljs$core$async$state_machine__26852__auto____1 = (function (state_27791){
while(true){
var ret_value__26853__auto__ = (function (){try{while(true){
var result__26854__auto__ = switch__26851__auto__.call(null,state_27791);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26854__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26854__auto__;
}
break;
}
}catch (e27813){if((e27813 instanceof Object)){
var ex__26855__auto__ = e27813;
var statearr_27814_27834 = state_27791;
(statearr_27814_27834[(5)] = ex__26855__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27791);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27813;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27835 = state_27791;
state_27791 = G__27835;
continue;
} else {
return ret_value__26853__auto__;
}
break;
}
});
cljs$core$async$state_machine__26852__auto__ = function(state_27791){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26852__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26852__auto____1.call(this,state_27791);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26852__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26852__auto____0;
cljs$core$async$state_machine__26852__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26852__auto____1;
return cljs$core$async$state_machine__26852__auto__;
})()
;})(switch__26851__auto__,c__26963__auto__))
})();
var state__26965__auto__ = (function (){var statearr_27815 = f__26964__auto__.call(null);
(statearr_27815[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26963__auto__);

return statearr_27815;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26965__auto__);
});})(c__26963__auto__))
);

return c__26963__auto__;
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
var x__25453__auto__ = (((_ == null))?null:_);
var m__25454__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__25453__auto__)]);
if(!((m__25454__auto__ == null))){
return m__25454__auto__.call(null,_);
} else {
var m__25454__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__25454__auto____$1 == null))){
return m__25454__auto____$1.call(null,_);
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
var x__25453__auto__ = (((m == null))?null:m);
var m__25454__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__25453__auto__)]);
if(!((m__25454__auto__ == null))){
return m__25454__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__25454__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__25454__auto____$1 == null))){
return m__25454__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__25453__auto__ = (((m == null))?null:m);
var m__25454__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__25453__auto__)]);
if(!((m__25454__auto__ == null))){
return m__25454__auto__.call(null,m,ch);
} else {
var m__25454__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__25454__auto____$1 == null))){
return m__25454__auto____$1.call(null,m,ch);
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
var x__25453__auto__ = (((m == null))?null:m);
var m__25454__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__25453__auto__)]);
if(!((m__25454__auto__ == null))){
return m__25454__auto__.call(null,m);
} else {
var m__25454__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__25454__auto____$1 == null))){
return m__25454__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async28061 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28061 = (function (mult,ch,cs,meta28062){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta28062 = meta28062;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28061.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_28063,meta28062__$1){
var self__ = this;
var _28063__$1 = this;
return (new cljs.core.async.t_cljs$core$async28061(self__.mult,self__.ch,self__.cs,meta28062__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async28061.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_28063){
var self__ = this;
var _28063__$1 = this;
return self__.meta28062;
});})(cs))
;

cljs.core.async.t_cljs$core$async28061.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async28061.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async28061.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async28061.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28061.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28061.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28061.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta28062","meta28062",2037030123,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async28061.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28061.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28061";

cljs.core.async.t_cljs$core$async28061.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__25396__auto__,writer__25397__auto__,opt__25398__auto__){
return cljs.core._write.call(null,writer__25397__auto__,"cljs.core.async/t_cljs$core$async28061");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async28061 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async28061(mult__$1,ch__$1,cs__$1,meta28062){
return (new cljs.core.async.t_cljs$core$async28061(mult__$1,ch__$1,cs__$1,meta28062));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async28061(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__26963__auto___28286 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26963__auto___28286,cs,m,dchan,dctr,done){
return (function (){
var f__26964__auto__ = (function (){var switch__26851__auto__ = ((function (c__26963__auto___28286,cs,m,dchan,dctr,done){
return (function (state_28198){
var state_val_28199 = (state_28198[(1)]);
if((state_val_28199 === (7))){
var inst_28194 = (state_28198[(2)]);
var state_28198__$1 = state_28198;
var statearr_28200_28287 = state_28198__$1;
(statearr_28200_28287[(2)] = inst_28194);

(statearr_28200_28287[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28199 === (20))){
var inst_28097 = (state_28198[(7)]);
var inst_28109 = cljs.core.first.call(null,inst_28097);
var inst_28110 = cljs.core.nth.call(null,inst_28109,(0),null);
var inst_28111 = cljs.core.nth.call(null,inst_28109,(1),null);
var state_28198__$1 = (function (){var statearr_28201 = state_28198;
(statearr_28201[(8)] = inst_28110);

return statearr_28201;
})();
if(cljs.core.truth_(inst_28111)){
var statearr_28202_28288 = state_28198__$1;
(statearr_28202_28288[(1)] = (22));

} else {
var statearr_28203_28289 = state_28198__$1;
(statearr_28203_28289[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28199 === (27))){
var inst_28139 = (state_28198[(9)]);
var inst_28141 = (state_28198[(10)]);
var inst_28146 = (state_28198[(11)]);
var inst_28066 = (state_28198[(12)]);
var inst_28146__$1 = cljs.core._nth.call(null,inst_28139,inst_28141);
var inst_28147 = cljs.core.async.put_BANG_.call(null,inst_28146__$1,inst_28066,done);
var state_28198__$1 = (function (){var statearr_28204 = state_28198;
(statearr_28204[(11)] = inst_28146__$1);

return statearr_28204;
})();
if(cljs.core.truth_(inst_28147)){
var statearr_28205_28290 = state_28198__$1;
(statearr_28205_28290[(1)] = (30));

} else {
var statearr_28206_28291 = state_28198__$1;
(statearr_28206_28291[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28199 === (1))){
var state_28198__$1 = state_28198;
var statearr_28207_28292 = state_28198__$1;
(statearr_28207_28292[(2)] = null);

(statearr_28207_28292[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28199 === (24))){
var inst_28097 = (state_28198[(7)]);
var inst_28116 = (state_28198[(2)]);
var inst_28117 = cljs.core.next.call(null,inst_28097);
var inst_28075 = inst_28117;
var inst_28076 = null;
var inst_28077 = (0);
var inst_28078 = (0);
var state_28198__$1 = (function (){var statearr_28208 = state_28198;
(statearr_28208[(13)] = inst_28076);

(statearr_28208[(14)] = inst_28075);

(statearr_28208[(15)] = inst_28077);

(statearr_28208[(16)] = inst_28116);

(statearr_28208[(17)] = inst_28078);

return statearr_28208;
})();
var statearr_28209_28293 = state_28198__$1;
(statearr_28209_28293[(2)] = null);

(statearr_28209_28293[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28199 === (39))){
var state_28198__$1 = state_28198;
var statearr_28213_28294 = state_28198__$1;
(statearr_28213_28294[(2)] = null);

(statearr_28213_28294[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28199 === (4))){
var inst_28066 = (state_28198[(12)]);
var inst_28066__$1 = (state_28198[(2)]);
var inst_28067 = (inst_28066__$1 == null);
var state_28198__$1 = (function (){var statearr_28214 = state_28198;
(statearr_28214[(12)] = inst_28066__$1);

return statearr_28214;
})();
if(cljs.core.truth_(inst_28067)){
var statearr_28215_28295 = state_28198__$1;
(statearr_28215_28295[(1)] = (5));

} else {
var statearr_28216_28296 = state_28198__$1;
(statearr_28216_28296[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28199 === (15))){
var inst_28076 = (state_28198[(13)]);
var inst_28075 = (state_28198[(14)]);
var inst_28077 = (state_28198[(15)]);
var inst_28078 = (state_28198[(17)]);
var inst_28093 = (state_28198[(2)]);
var inst_28094 = (inst_28078 + (1));
var tmp28210 = inst_28076;
var tmp28211 = inst_28075;
var tmp28212 = inst_28077;
var inst_28075__$1 = tmp28211;
var inst_28076__$1 = tmp28210;
var inst_28077__$1 = tmp28212;
var inst_28078__$1 = inst_28094;
var state_28198__$1 = (function (){var statearr_28217 = state_28198;
(statearr_28217[(13)] = inst_28076__$1);

(statearr_28217[(14)] = inst_28075__$1);

(statearr_28217[(18)] = inst_28093);

(statearr_28217[(15)] = inst_28077__$1);

(statearr_28217[(17)] = inst_28078__$1);

return statearr_28217;
})();
var statearr_28218_28297 = state_28198__$1;
(statearr_28218_28297[(2)] = null);

(statearr_28218_28297[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28199 === (21))){
var inst_28120 = (state_28198[(2)]);
var state_28198__$1 = state_28198;
var statearr_28222_28298 = state_28198__$1;
(statearr_28222_28298[(2)] = inst_28120);

(statearr_28222_28298[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28199 === (31))){
var inst_28146 = (state_28198[(11)]);
var inst_28150 = done.call(null,null);
var inst_28151 = cljs.core.async.untap_STAR_.call(null,m,inst_28146);
var state_28198__$1 = (function (){var statearr_28223 = state_28198;
(statearr_28223[(19)] = inst_28150);

return statearr_28223;
})();
var statearr_28224_28299 = state_28198__$1;
(statearr_28224_28299[(2)] = inst_28151);

(statearr_28224_28299[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28199 === (32))){
var inst_28139 = (state_28198[(9)]);
var inst_28140 = (state_28198[(20)]);
var inst_28141 = (state_28198[(10)]);
var inst_28138 = (state_28198[(21)]);
var inst_28153 = (state_28198[(2)]);
var inst_28154 = (inst_28141 + (1));
var tmp28219 = inst_28139;
var tmp28220 = inst_28140;
var tmp28221 = inst_28138;
var inst_28138__$1 = tmp28221;
var inst_28139__$1 = tmp28219;
var inst_28140__$1 = tmp28220;
var inst_28141__$1 = inst_28154;
var state_28198__$1 = (function (){var statearr_28225 = state_28198;
(statearr_28225[(9)] = inst_28139__$1);

(statearr_28225[(20)] = inst_28140__$1);

(statearr_28225[(10)] = inst_28141__$1);

(statearr_28225[(22)] = inst_28153);

(statearr_28225[(21)] = inst_28138__$1);

return statearr_28225;
})();
var statearr_28226_28300 = state_28198__$1;
(statearr_28226_28300[(2)] = null);

(statearr_28226_28300[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28199 === (40))){
var inst_28166 = (state_28198[(23)]);
var inst_28170 = done.call(null,null);
var inst_28171 = cljs.core.async.untap_STAR_.call(null,m,inst_28166);
var state_28198__$1 = (function (){var statearr_28227 = state_28198;
(statearr_28227[(24)] = inst_28170);

return statearr_28227;
})();
var statearr_28228_28301 = state_28198__$1;
(statearr_28228_28301[(2)] = inst_28171);

(statearr_28228_28301[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28199 === (33))){
var inst_28157 = (state_28198[(25)]);
var inst_28159 = cljs.core.chunked_seq_QMARK_.call(null,inst_28157);
var state_28198__$1 = state_28198;
if(inst_28159){
var statearr_28229_28302 = state_28198__$1;
(statearr_28229_28302[(1)] = (36));

} else {
var statearr_28230_28303 = state_28198__$1;
(statearr_28230_28303[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28199 === (13))){
var inst_28087 = (state_28198[(26)]);
var inst_28090 = cljs.core.async.close_BANG_.call(null,inst_28087);
var state_28198__$1 = state_28198;
var statearr_28231_28304 = state_28198__$1;
(statearr_28231_28304[(2)] = inst_28090);

(statearr_28231_28304[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28199 === (22))){
var inst_28110 = (state_28198[(8)]);
var inst_28113 = cljs.core.async.close_BANG_.call(null,inst_28110);
var state_28198__$1 = state_28198;
var statearr_28232_28305 = state_28198__$1;
(statearr_28232_28305[(2)] = inst_28113);

(statearr_28232_28305[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28199 === (36))){
var inst_28157 = (state_28198[(25)]);
var inst_28161 = cljs.core.chunk_first.call(null,inst_28157);
var inst_28162 = cljs.core.chunk_rest.call(null,inst_28157);
var inst_28163 = cljs.core.count.call(null,inst_28161);
var inst_28138 = inst_28162;
var inst_28139 = inst_28161;
var inst_28140 = inst_28163;
var inst_28141 = (0);
var state_28198__$1 = (function (){var statearr_28233 = state_28198;
(statearr_28233[(9)] = inst_28139);

(statearr_28233[(20)] = inst_28140);

(statearr_28233[(10)] = inst_28141);

(statearr_28233[(21)] = inst_28138);

return statearr_28233;
})();
var statearr_28234_28306 = state_28198__$1;
(statearr_28234_28306[(2)] = null);

(statearr_28234_28306[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28199 === (41))){
var inst_28157 = (state_28198[(25)]);
var inst_28173 = (state_28198[(2)]);
var inst_28174 = cljs.core.next.call(null,inst_28157);
var inst_28138 = inst_28174;
var inst_28139 = null;
var inst_28140 = (0);
var inst_28141 = (0);
var state_28198__$1 = (function (){var statearr_28235 = state_28198;
(statearr_28235[(9)] = inst_28139);

(statearr_28235[(20)] = inst_28140);

(statearr_28235[(10)] = inst_28141);

(statearr_28235[(27)] = inst_28173);

(statearr_28235[(21)] = inst_28138);

return statearr_28235;
})();
var statearr_28236_28307 = state_28198__$1;
(statearr_28236_28307[(2)] = null);

(statearr_28236_28307[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28199 === (43))){
var state_28198__$1 = state_28198;
var statearr_28237_28308 = state_28198__$1;
(statearr_28237_28308[(2)] = null);

(statearr_28237_28308[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28199 === (29))){
var inst_28182 = (state_28198[(2)]);
var state_28198__$1 = state_28198;
var statearr_28238_28309 = state_28198__$1;
(statearr_28238_28309[(2)] = inst_28182);

(statearr_28238_28309[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28199 === (44))){
var inst_28191 = (state_28198[(2)]);
var state_28198__$1 = (function (){var statearr_28239 = state_28198;
(statearr_28239[(28)] = inst_28191);

return statearr_28239;
})();
var statearr_28240_28310 = state_28198__$1;
(statearr_28240_28310[(2)] = null);

(statearr_28240_28310[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28199 === (6))){
var inst_28130 = (state_28198[(29)]);
var inst_28129 = cljs.core.deref.call(null,cs);
var inst_28130__$1 = cljs.core.keys.call(null,inst_28129);
var inst_28131 = cljs.core.count.call(null,inst_28130__$1);
var inst_28132 = cljs.core.reset_BANG_.call(null,dctr,inst_28131);
var inst_28137 = cljs.core.seq.call(null,inst_28130__$1);
var inst_28138 = inst_28137;
var inst_28139 = null;
var inst_28140 = (0);
var inst_28141 = (0);
var state_28198__$1 = (function (){var statearr_28241 = state_28198;
(statearr_28241[(9)] = inst_28139);

(statearr_28241[(30)] = inst_28132);

(statearr_28241[(29)] = inst_28130__$1);

(statearr_28241[(20)] = inst_28140);

(statearr_28241[(10)] = inst_28141);

(statearr_28241[(21)] = inst_28138);

return statearr_28241;
})();
var statearr_28242_28311 = state_28198__$1;
(statearr_28242_28311[(2)] = null);

(statearr_28242_28311[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28199 === (28))){
var inst_28157 = (state_28198[(25)]);
var inst_28138 = (state_28198[(21)]);
var inst_28157__$1 = cljs.core.seq.call(null,inst_28138);
var state_28198__$1 = (function (){var statearr_28243 = state_28198;
(statearr_28243[(25)] = inst_28157__$1);

return statearr_28243;
})();
if(inst_28157__$1){
var statearr_28244_28312 = state_28198__$1;
(statearr_28244_28312[(1)] = (33));

} else {
var statearr_28245_28313 = state_28198__$1;
(statearr_28245_28313[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28199 === (25))){
var inst_28140 = (state_28198[(20)]);
var inst_28141 = (state_28198[(10)]);
var inst_28143 = (inst_28141 < inst_28140);
var inst_28144 = inst_28143;
var state_28198__$1 = state_28198;
if(cljs.core.truth_(inst_28144)){
var statearr_28246_28314 = state_28198__$1;
(statearr_28246_28314[(1)] = (27));

} else {
var statearr_28247_28315 = state_28198__$1;
(statearr_28247_28315[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28199 === (34))){
var state_28198__$1 = state_28198;
var statearr_28248_28316 = state_28198__$1;
(statearr_28248_28316[(2)] = null);

(statearr_28248_28316[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28199 === (17))){
var state_28198__$1 = state_28198;
var statearr_28249_28317 = state_28198__$1;
(statearr_28249_28317[(2)] = null);

(statearr_28249_28317[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28199 === (3))){
var inst_28196 = (state_28198[(2)]);
var state_28198__$1 = state_28198;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28198__$1,inst_28196);
} else {
if((state_val_28199 === (12))){
var inst_28125 = (state_28198[(2)]);
var state_28198__$1 = state_28198;
var statearr_28250_28318 = state_28198__$1;
(statearr_28250_28318[(2)] = inst_28125);

(statearr_28250_28318[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28199 === (2))){
var state_28198__$1 = state_28198;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28198__$1,(4),ch);
} else {
if((state_val_28199 === (23))){
var state_28198__$1 = state_28198;
var statearr_28251_28319 = state_28198__$1;
(statearr_28251_28319[(2)] = null);

(statearr_28251_28319[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28199 === (35))){
var inst_28180 = (state_28198[(2)]);
var state_28198__$1 = state_28198;
var statearr_28252_28320 = state_28198__$1;
(statearr_28252_28320[(2)] = inst_28180);

(statearr_28252_28320[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28199 === (19))){
var inst_28097 = (state_28198[(7)]);
var inst_28101 = cljs.core.chunk_first.call(null,inst_28097);
var inst_28102 = cljs.core.chunk_rest.call(null,inst_28097);
var inst_28103 = cljs.core.count.call(null,inst_28101);
var inst_28075 = inst_28102;
var inst_28076 = inst_28101;
var inst_28077 = inst_28103;
var inst_28078 = (0);
var state_28198__$1 = (function (){var statearr_28253 = state_28198;
(statearr_28253[(13)] = inst_28076);

(statearr_28253[(14)] = inst_28075);

(statearr_28253[(15)] = inst_28077);

(statearr_28253[(17)] = inst_28078);

return statearr_28253;
})();
var statearr_28254_28321 = state_28198__$1;
(statearr_28254_28321[(2)] = null);

(statearr_28254_28321[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28199 === (11))){
var inst_28097 = (state_28198[(7)]);
var inst_28075 = (state_28198[(14)]);
var inst_28097__$1 = cljs.core.seq.call(null,inst_28075);
var state_28198__$1 = (function (){var statearr_28255 = state_28198;
(statearr_28255[(7)] = inst_28097__$1);

return statearr_28255;
})();
if(inst_28097__$1){
var statearr_28256_28322 = state_28198__$1;
(statearr_28256_28322[(1)] = (16));

} else {
var statearr_28257_28323 = state_28198__$1;
(statearr_28257_28323[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28199 === (9))){
var inst_28127 = (state_28198[(2)]);
var state_28198__$1 = state_28198;
var statearr_28258_28324 = state_28198__$1;
(statearr_28258_28324[(2)] = inst_28127);

(statearr_28258_28324[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28199 === (5))){
var inst_28073 = cljs.core.deref.call(null,cs);
var inst_28074 = cljs.core.seq.call(null,inst_28073);
var inst_28075 = inst_28074;
var inst_28076 = null;
var inst_28077 = (0);
var inst_28078 = (0);
var state_28198__$1 = (function (){var statearr_28259 = state_28198;
(statearr_28259[(13)] = inst_28076);

(statearr_28259[(14)] = inst_28075);

(statearr_28259[(15)] = inst_28077);

(statearr_28259[(17)] = inst_28078);

return statearr_28259;
})();
var statearr_28260_28325 = state_28198__$1;
(statearr_28260_28325[(2)] = null);

(statearr_28260_28325[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28199 === (14))){
var state_28198__$1 = state_28198;
var statearr_28261_28326 = state_28198__$1;
(statearr_28261_28326[(2)] = null);

(statearr_28261_28326[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28199 === (45))){
var inst_28188 = (state_28198[(2)]);
var state_28198__$1 = state_28198;
var statearr_28262_28327 = state_28198__$1;
(statearr_28262_28327[(2)] = inst_28188);

(statearr_28262_28327[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28199 === (26))){
var inst_28130 = (state_28198[(29)]);
var inst_28184 = (state_28198[(2)]);
var inst_28185 = cljs.core.seq.call(null,inst_28130);
var state_28198__$1 = (function (){var statearr_28263 = state_28198;
(statearr_28263[(31)] = inst_28184);

return statearr_28263;
})();
if(inst_28185){
var statearr_28264_28328 = state_28198__$1;
(statearr_28264_28328[(1)] = (42));

} else {
var statearr_28265_28329 = state_28198__$1;
(statearr_28265_28329[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28199 === (16))){
var inst_28097 = (state_28198[(7)]);
var inst_28099 = cljs.core.chunked_seq_QMARK_.call(null,inst_28097);
var state_28198__$1 = state_28198;
if(inst_28099){
var statearr_28266_28330 = state_28198__$1;
(statearr_28266_28330[(1)] = (19));

} else {
var statearr_28267_28331 = state_28198__$1;
(statearr_28267_28331[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28199 === (38))){
var inst_28177 = (state_28198[(2)]);
var state_28198__$1 = state_28198;
var statearr_28268_28332 = state_28198__$1;
(statearr_28268_28332[(2)] = inst_28177);

(statearr_28268_28332[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28199 === (30))){
var state_28198__$1 = state_28198;
var statearr_28269_28333 = state_28198__$1;
(statearr_28269_28333[(2)] = null);

(statearr_28269_28333[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28199 === (10))){
var inst_28076 = (state_28198[(13)]);
var inst_28078 = (state_28198[(17)]);
var inst_28086 = cljs.core._nth.call(null,inst_28076,inst_28078);
var inst_28087 = cljs.core.nth.call(null,inst_28086,(0),null);
var inst_28088 = cljs.core.nth.call(null,inst_28086,(1),null);
var state_28198__$1 = (function (){var statearr_28270 = state_28198;
(statearr_28270[(26)] = inst_28087);

return statearr_28270;
})();
if(cljs.core.truth_(inst_28088)){
var statearr_28271_28334 = state_28198__$1;
(statearr_28271_28334[(1)] = (13));

} else {
var statearr_28272_28335 = state_28198__$1;
(statearr_28272_28335[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28199 === (18))){
var inst_28123 = (state_28198[(2)]);
var state_28198__$1 = state_28198;
var statearr_28273_28336 = state_28198__$1;
(statearr_28273_28336[(2)] = inst_28123);

(statearr_28273_28336[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28199 === (42))){
var state_28198__$1 = state_28198;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28198__$1,(45),dchan);
} else {
if((state_val_28199 === (37))){
var inst_28166 = (state_28198[(23)]);
var inst_28157 = (state_28198[(25)]);
var inst_28066 = (state_28198[(12)]);
var inst_28166__$1 = cljs.core.first.call(null,inst_28157);
var inst_28167 = cljs.core.async.put_BANG_.call(null,inst_28166__$1,inst_28066,done);
var state_28198__$1 = (function (){var statearr_28274 = state_28198;
(statearr_28274[(23)] = inst_28166__$1);

return statearr_28274;
})();
if(cljs.core.truth_(inst_28167)){
var statearr_28275_28337 = state_28198__$1;
(statearr_28275_28337[(1)] = (39));

} else {
var statearr_28276_28338 = state_28198__$1;
(statearr_28276_28338[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28199 === (8))){
var inst_28077 = (state_28198[(15)]);
var inst_28078 = (state_28198[(17)]);
var inst_28080 = (inst_28078 < inst_28077);
var inst_28081 = inst_28080;
var state_28198__$1 = state_28198;
if(cljs.core.truth_(inst_28081)){
var statearr_28277_28339 = state_28198__$1;
(statearr_28277_28339[(1)] = (10));

} else {
var statearr_28278_28340 = state_28198__$1;
(statearr_28278_28340[(1)] = (11));

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
});})(c__26963__auto___28286,cs,m,dchan,dctr,done))
;
return ((function (switch__26851__auto__,c__26963__auto___28286,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__26852__auto__ = null;
var cljs$core$async$mult_$_state_machine__26852__auto____0 = (function (){
var statearr_28282 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28282[(0)] = cljs$core$async$mult_$_state_machine__26852__auto__);

(statearr_28282[(1)] = (1));

return statearr_28282;
});
var cljs$core$async$mult_$_state_machine__26852__auto____1 = (function (state_28198){
while(true){
var ret_value__26853__auto__ = (function (){try{while(true){
var result__26854__auto__ = switch__26851__auto__.call(null,state_28198);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26854__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26854__auto__;
}
break;
}
}catch (e28283){if((e28283 instanceof Object)){
var ex__26855__auto__ = e28283;
var statearr_28284_28341 = state_28198;
(statearr_28284_28341[(5)] = ex__26855__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28198);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28283;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28342 = state_28198;
state_28198 = G__28342;
continue;
} else {
return ret_value__26853__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__26852__auto__ = function(state_28198){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__26852__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__26852__auto____1.call(this,state_28198);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__26852__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__26852__auto____0;
cljs$core$async$mult_$_state_machine__26852__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__26852__auto____1;
return cljs$core$async$mult_$_state_machine__26852__auto__;
})()
;})(switch__26851__auto__,c__26963__auto___28286,cs,m,dchan,dctr,done))
})();
var state__26965__auto__ = (function (){var statearr_28285 = f__26964__auto__.call(null);
(statearr_28285[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26963__auto___28286);

return statearr_28285;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26965__auto__);
});})(c__26963__auto___28286,cs,m,dchan,dctr,done))
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
var args28343 = [];
var len__25865__auto___28346 = arguments.length;
var i__25866__auto___28347 = (0);
while(true){
if((i__25866__auto___28347 < len__25865__auto___28346)){
args28343.push((arguments[i__25866__auto___28347]));

var G__28348 = (i__25866__auto___28347 + (1));
i__25866__auto___28347 = G__28348;
continue;
} else {
}
break;
}

var G__28345 = args28343.length;
switch (G__28345) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28343.length)].join('')));

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
var x__25453__auto__ = (((m == null))?null:m);
var m__25454__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__25453__auto__)]);
if(!((m__25454__auto__ == null))){
return m__25454__auto__.call(null,m,ch);
} else {
var m__25454__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__25454__auto____$1 == null))){
return m__25454__auto____$1.call(null,m,ch);
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
var x__25453__auto__ = (((m == null))?null:m);
var m__25454__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__25453__auto__)]);
if(!((m__25454__auto__ == null))){
return m__25454__auto__.call(null,m,ch);
} else {
var m__25454__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__25454__auto____$1 == null))){
return m__25454__auto____$1.call(null,m,ch);
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
var x__25453__auto__ = (((m == null))?null:m);
var m__25454__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__25453__auto__)]);
if(!((m__25454__auto__ == null))){
return m__25454__auto__.call(null,m);
} else {
var m__25454__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__25454__auto____$1 == null))){
return m__25454__auto____$1.call(null,m);
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
var x__25453__auto__ = (((m == null))?null:m);
var m__25454__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__25453__auto__)]);
if(!((m__25454__auto__ == null))){
return m__25454__auto__.call(null,m,state_map);
} else {
var m__25454__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__25454__auto____$1 == null))){
return m__25454__auto____$1.call(null,m,state_map);
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
var x__25453__auto__ = (((m == null))?null:m);
var m__25454__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__25453__auto__)]);
if(!((m__25454__auto__ == null))){
return m__25454__auto__.call(null,m,mode);
} else {
var m__25454__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__25454__auto____$1 == null))){
return m__25454__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__25872__auto__ = [];
var len__25865__auto___28360 = arguments.length;
var i__25866__auto___28361 = (0);
while(true){
if((i__25866__auto___28361 < len__25865__auto___28360)){
args__25872__auto__.push((arguments[i__25866__auto___28361]));

var G__28362 = (i__25866__auto___28361 + (1));
i__25866__auto___28361 = G__28362;
continue;
} else {
}
break;
}

var argseq__25873__auto__ = ((((3) < args__25872__auto__.length))?(new cljs.core.IndexedSeq(args__25872__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__25873__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__28354){
var map__28355 = p__28354;
var map__28355__$1 = ((((!((map__28355 == null)))?((((map__28355.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28355.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28355):map__28355);
var opts = map__28355__$1;
var statearr_28357_28363 = state;
(statearr_28357_28363[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__28355,map__28355__$1,opts){
return (function (val){
var statearr_28358_28364 = state;
(statearr_28358_28364[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__28355,map__28355__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_28359_28365 = state;
(statearr_28359_28365[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq28350){
var G__28351 = cljs.core.first.call(null,seq28350);
var seq28350__$1 = cljs.core.next.call(null,seq28350);
var G__28352 = cljs.core.first.call(null,seq28350__$1);
var seq28350__$2 = cljs.core.next.call(null,seq28350__$1);
var G__28353 = cljs.core.first.call(null,seq28350__$2);
var seq28350__$3 = cljs.core.next.call(null,seq28350__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__28351,G__28352,G__28353,seq28350__$3);
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
if(typeof cljs.core.async.t_cljs$core$async28531 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28531 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta28532){
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
this.meta28532 = meta28532;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28531.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_28533,meta28532__$1){
var self__ = this;
var _28533__$1 = this;
return (new cljs.core.async.t_cljs$core$async28531(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta28532__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28531.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_28533){
var self__ = this;
var _28533__$1 = this;
return self__.meta28532;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28531.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async28531.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28531.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async28531.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28531.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28531.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28531.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28531.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async28531.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta28532","meta28532",1067193561,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28531.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28531.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28531";

cljs.core.async.t_cljs$core$async28531.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__25396__auto__,writer__25397__auto__,opt__25398__auto__){
return cljs.core._write.call(null,writer__25397__auto__,"cljs.core.async/t_cljs$core$async28531");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async28531 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async28531(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta28532){
return (new cljs.core.async.t_cljs$core$async28531(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta28532));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async28531(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__26963__auto___28696 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26963__auto___28696,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__26964__auto__ = (function (){var switch__26851__auto__ = ((function (c__26963__auto___28696,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_28633){
var state_val_28634 = (state_28633[(1)]);
if((state_val_28634 === (7))){
var inst_28549 = (state_28633[(2)]);
var state_28633__$1 = state_28633;
var statearr_28635_28697 = state_28633__$1;
(statearr_28635_28697[(2)] = inst_28549);

(statearr_28635_28697[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28634 === (20))){
var inst_28561 = (state_28633[(7)]);
var state_28633__$1 = state_28633;
var statearr_28636_28698 = state_28633__$1;
(statearr_28636_28698[(2)] = inst_28561);

(statearr_28636_28698[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28634 === (27))){
var state_28633__$1 = state_28633;
var statearr_28637_28699 = state_28633__$1;
(statearr_28637_28699[(2)] = null);

(statearr_28637_28699[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28634 === (1))){
var inst_28537 = (state_28633[(8)]);
var inst_28537__$1 = calc_state.call(null);
var inst_28539 = (inst_28537__$1 == null);
var inst_28540 = cljs.core.not.call(null,inst_28539);
var state_28633__$1 = (function (){var statearr_28638 = state_28633;
(statearr_28638[(8)] = inst_28537__$1);

return statearr_28638;
})();
if(inst_28540){
var statearr_28639_28700 = state_28633__$1;
(statearr_28639_28700[(1)] = (2));

} else {
var statearr_28640_28701 = state_28633__$1;
(statearr_28640_28701[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28634 === (24))){
var inst_28607 = (state_28633[(9)]);
var inst_28584 = (state_28633[(10)]);
var inst_28593 = (state_28633[(11)]);
var inst_28607__$1 = inst_28584.call(null,inst_28593);
var state_28633__$1 = (function (){var statearr_28641 = state_28633;
(statearr_28641[(9)] = inst_28607__$1);

return statearr_28641;
})();
if(cljs.core.truth_(inst_28607__$1)){
var statearr_28642_28702 = state_28633__$1;
(statearr_28642_28702[(1)] = (29));

} else {
var statearr_28643_28703 = state_28633__$1;
(statearr_28643_28703[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28634 === (4))){
var inst_28552 = (state_28633[(2)]);
var state_28633__$1 = state_28633;
if(cljs.core.truth_(inst_28552)){
var statearr_28644_28704 = state_28633__$1;
(statearr_28644_28704[(1)] = (8));

} else {
var statearr_28645_28705 = state_28633__$1;
(statearr_28645_28705[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28634 === (15))){
var inst_28578 = (state_28633[(2)]);
var state_28633__$1 = state_28633;
if(cljs.core.truth_(inst_28578)){
var statearr_28646_28706 = state_28633__$1;
(statearr_28646_28706[(1)] = (19));

} else {
var statearr_28647_28707 = state_28633__$1;
(statearr_28647_28707[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28634 === (21))){
var inst_28583 = (state_28633[(12)]);
var inst_28583__$1 = (state_28633[(2)]);
var inst_28584 = cljs.core.get.call(null,inst_28583__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_28585 = cljs.core.get.call(null,inst_28583__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_28586 = cljs.core.get.call(null,inst_28583__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_28633__$1 = (function (){var statearr_28648 = state_28633;
(statearr_28648[(13)] = inst_28585);

(statearr_28648[(10)] = inst_28584);

(statearr_28648[(12)] = inst_28583__$1);

return statearr_28648;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_28633__$1,(22),inst_28586);
} else {
if((state_val_28634 === (31))){
var inst_28615 = (state_28633[(2)]);
var state_28633__$1 = state_28633;
if(cljs.core.truth_(inst_28615)){
var statearr_28649_28708 = state_28633__$1;
(statearr_28649_28708[(1)] = (32));

} else {
var statearr_28650_28709 = state_28633__$1;
(statearr_28650_28709[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28634 === (32))){
var inst_28592 = (state_28633[(14)]);
var state_28633__$1 = state_28633;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28633__$1,(35),out,inst_28592);
} else {
if((state_val_28634 === (33))){
var inst_28583 = (state_28633[(12)]);
var inst_28561 = inst_28583;
var state_28633__$1 = (function (){var statearr_28651 = state_28633;
(statearr_28651[(7)] = inst_28561);

return statearr_28651;
})();
var statearr_28652_28710 = state_28633__$1;
(statearr_28652_28710[(2)] = null);

(statearr_28652_28710[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28634 === (13))){
var inst_28561 = (state_28633[(7)]);
var inst_28568 = inst_28561.cljs$lang$protocol_mask$partition0$;
var inst_28569 = (inst_28568 & (64));
var inst_28570 = inst_28561.cljs$core$ISeq$;
var inst_28571 = (inst_28569) || (inst_28570);
var state_28633__$1 = state_28633;
if(cljs.core.truth_(inst_28571)){
var statearr_28653_28711 = state_28633__$1;
(statearr_28653_28711[(1)] = (16));

} else {
var statearr_28654_28712 = state_28633__$1;
(statearr_28654_28712[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28634 === (22))){
var inst_28592 = (state_28633[(14)]);
var inst_28593 = (state_28633[(11)]);
var inst_28591 = (state_28633[(2)]);
var inst_28592__$1 = cljs.core.nth.call(null,inst_28591,(0),null);
var inst_28593__$1 = cljs.core.nth.call(null,inst_28591,(1),null);
var inst_28594 = (inst_28592__$1 == null);
var inst_28595 = cljs.core._EQ_.call(null,inst_28593__$1,change);
var inst_28596 = (inst_28594) || (inst_28595);
var state_28633__$1 = (function (){var statearr_28655 = state_28633;
(statearr_28655[(14)] = inst_28592__$1);

(statearr_28655[(11)] = inst_28593__$1);

return statearr_28655;
})();
if(cljs.core.truth_(inst_28596)){
var statearr_28656_28713 = state_28633__$1;
(statearr_28656_28713[(1)] = (23));

} else {
var statearr_28657_28714 = state_28633__$1;
(statearr_28657_28714[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28634 === (36))){
var inst_28583 = (state_28633[(12)]);
var inst_28561 = inst_28583;
var state_28633__$1 = (function (){var statearr_28658 = state_28633;
(statearr_28658[(7)] = inst_28561);

return statearr_28658;
})();
var statearr_28659_28715 = state_28633__$1;
(statearr_28659_28715[(2)] = null);

(statearr_28659_28715[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28634 === (29))){
var inst_28607 = (state_28633[(9)]);
var state_28633__$1 = state_28633;
var statearr_28660_28716 = state_28633__$1;
(statearr_28660_28716[(2)] = inst_28607);

(statearr_28660_28716[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28634 === (6))){
var state_28633__$1 = state_28633;
var statearr_28661_28717 = state_28633__$1;
(statearr_28661_28717[(2)] = false);

(statearr_28661_28717[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28634 === (28))){
var inst_28603 = (state_28633[(2)]);
var inst_28604 = calc_state.call(null);
var inst_28561 = inst_28604;
var state_28633__$1 = (function (){var statearr_28662 = state_28633;
(statearr_28662[(15)] = inst_28603);

(statearr_28662[(7)] = inst_28561);

return statearr_28662;
})();
var statearr_28663_28718 = state_28633__$1;
(statearr_28663_28718[(2)] = null);

(statearr_28663_28718[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28634 === (25))){
var inst_28629 = (state_28633[(2)]);
var state_28633__$1 = state_28633;
var statearr_28664_28719 = state_28633__$1;
(statearr_28664_28719[(2)] = inst_28629);

(statearr_28664_28719[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28634 === (34))){
var inst_28627 = (state_28633[(2)]);
var state_28633__$1 = state_28633;
var statearr_28665_28720 = state_28633__$1;
(statearr_28665_28720[(2)] = inst_28627);

(statearr_28665_28720[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28634 === (17))){
var state_28633__$1 = state_28633;
var statearr_28666_28721 = state_28633__$1;
(statearr_28666_28721[(2)] = false);

(statearr_28666_28721[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28634 === (3))){
var state_28633__$1 = state_28633;
var statearr_28667_28722 = state_28633__$1;
(statearr_28667_28722[(2)] = false);

(statearr_28667_28722[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28634 === (12))){
var inst_28631 = (state_28633[(2)]);
var state_28633__$1 = state_28633;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28633__$1,inst_28631);
} else {
if((state_val_28634 === (2))){
var inst_28537 = (state_28633[(8)]);
var inst_28542 = inst_28537.cljs$lang$protocol_mask$partition0$;
var inst_28543 = (inst_28542 & (64));
var inst_28544 = inst_28537.cljs$core$ISeq$;
var inst_28545 = (inst_28543) || (inst_28544);
var state_28633__$1 = state_28633;
if(cljs.core.truth_(inst_28545)){
var statearr_28668_28723 = state_28633__$1;
(statearr_28668_28723[(1)] = (5));

} else {
var statearr_28669_28724 = state_28633__$1;
(statearr_28669_28724[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28634 === (23))){
var inst_28592 = (state_28633[(14)]);
var inst_28598 = (inst_28592 == null);
var state_28633__$1 = state_28633;
if(cljs.core.truth_(inst_28598)){
var statearr_28670_28725 = state_28633__$1;
(statearr_28670_28725[(1)] = (26));

} else {
var statearr_28671_28726 = state_28633__$1;
(statearr_28671_28726[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28634 === (35))){
var inst_28618 = (state_28633[(2)]);
var state_28633__$1 = state_28633;
if(cljs.core.truth_(inst_28618)){
var statearr_28672_28727 = state_28633__$1;
(statearr_28672_28727[(1)] = (36));

} else {
var statearr_28673_28728 = state_28633__$1;
(statearr_28673_28728[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28634 === (19))){
var inst_28561 = (state_28633[(7)]);
var inst_28580 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28561);
var state_28633__$1 = state_28633;
var statearr_28674_28729 = state_28633__$1;
(statearr_28674_28729[(2)] = inst_28580);

(statearr_28674_28729[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28634 === (11))){
var inst_28561 = (state_28633[(7)]);
var inst_28565 = (inst_28561 == null);
var inst_28566 = cljs.core.not.call(null,inst_28565);
var state_28633__$1 = state_28633;
if(inst_28566){
var statearr_28675_28730 = state_28633__$1;
(statearr_28675_28730[(1)] = (13));

} else {
var statearr_28676_28731 = state_28633__$1;
(statearr_28676_28731[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28634 === (9))){
var inst_28537 = (state_28633[(8)]);
var state_28633__$1 = state_28633;
var statearr_28677_28732 = state_28633__$1;
(statearr_28677_28732[(2)] = inst_28537);

(statearr_28677_28732[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28634 === (5))){
var state_28633__$1 = state_28633;
var statearr_28678_28733 = state_28633__$1;
(statearr_28678_28733[(2)] = true);

(statearr_28678_28733[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28634 === (14))){
var state_28633__$1 = state_28633;
var statearr_28679_28734 = state_28633__$1;
(statearr_28679_28734[(2)] = false);

(statearr_28679_28734[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28634 === (26))){
var inst_28593 = (state_28633[(11)]);
var inst_28600 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_28593);
var state_28633__$1 = state_28633;
var statearr_28680_28735 = state_28633__$1;
(statearr_28680_28735[(2)] = inst_28600);

(statearr_28680_28735[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28634 === (16))){
var state_28633__$1 = state_28633;
var statearr_28681_28736 = state_28633__$1;
(statearr_28681_28736[(2)] = true);

(statearr_28681_28736[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28634 === (38))){
var inst_28623 = (state_28633[(2)]);
var state_28633__$1 = state_28633;
var statearr_28682_28737 = state_28633__$1;
(statearr_28682_28737[(2)] = inst_28623);

(statearr_28682_28737[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28634 === (30))){
var inst_28585 = (state_28633[(13)]);
var inst_28584 = (state_28633[(10)]);
var inst_28593 = (state_28633[(11)]);
var inst_28610 = cljs.core.empty_QMARK_.call(null,inst_28584);
var inst_28611 = inst_28585.call(null,inst_28593);
var inst_28612 = cljs.core.not.call(null,inst_28611);
var inst_28613 = (inst_28610) && (inst_28612);
var state_28633__$1 = state_28633;
var statearr_28683_28738 = state_28633__$1;
(statearr_28683_28738[(2)] = inst_28613);

(statearr_28683_28738[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28634 === (10))){
var inst_28537 = (state_28633[(8)]);
var inst_28557 = (state_28633[(2)]);
var inst_28558 = cljs.core.get.call(null,inst_28557,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_28559 = cljs.core.get.call(null,inst_28557,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_28560 = cljs.core.get.call(null,inst_28557,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_28561 = inst_28537;
var state_28633__$1 = (function (){var statearr_28684 = state_28633;
(statearr_28684[(16)] = inst_28560);

(statearr_28684[(17)] = inst_28559);

(statearr_28684[(7)] = inst_28561);

(statearr_28684[(18)] = inst_28558);

return statearr_28684;
})();
var statearr_28685_28739 = state_28633__$1;
(statearr_28685_28739[(2)] = null);

(statearr_28685_28739[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28634 === (18))){
var inst_28575 = (state_28633[(2)]);
var state_28633__$1 = state_28633;
var statearr_28686_28740 = state_28633__$1;
(statearr_28686_28740[(2)] = inst_28575);

(statearr_28686_28740[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28634 === (37))){
var state_28633__$1 = state_28633;
var statearr_28687_28741 = state_28633__$1;
(statearr_28687_28741[(2)] = null);

(statearr_28687_28741[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28634 === (8))){
var inst_28537 = (state_28633[(8)]);
var inst_28554 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28537);
var state_28633__$1 = state_28633;
var statearr_28688_28742 = state_28633__$1;
(statearr_28688_28742[(2)] = inst_28554);

(statearr_28688_28742[(1)] = (10));


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
});})(c__26963__auto___28696,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__26851__auto__,c__26963__auto___28696,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__26852__auto__ = null;
var cljs$core$async$mix_$_state_machine__26852__auto____0 = (function (){
var statearr_28692 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28692[(0)] = cljs$core$async$mix_$_state_machine__26852__auto__);

(statearr_28692[(1)] = (1));

return statearr_28692;
});
var cljs$core$async$mix_$_state_machine__26852__auto____1 = (function (state_28633){
while(true){
var ret_value__26853__auto__ = (function (){try{while(true){
var result__26854__auto__ = switch__26851__auto__.call(null,state_28633);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26854__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26854__auto__;
}
break;
}
}catch (e28693){if((e28693 instanceof Object)){
var ex__26855__auto__ = e28693;
var statearr_28694_28743 = state_28633;
(statearr_28694_28743[(5)] = ex__26855__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28633);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28693;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28744 = state_28633;
state_28633 = G__28744;
continue;
} else {
return ret_value__26853__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__26852__auto__ = function(state_28633){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__26852__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__26852__auto____1.call(this,state_28633);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__26852__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__26852__auto____0;
cljs$core$async$mix_$_state_machine__26852__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__26852__auto____1;
return cljs$core$async$mix_$_state_machine__26852__auto__;
})()
;})(switch__26851__auto__,c__26963__auto___28696,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__26965__auto__ = (function (){var statearr_28695 = f__26964__auto__.call(null);
(statearr_28695[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26963__auto___28696);

return statearr_28695;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26965__auto__);
});})(c__26963__auto___28696,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__25453__auto__ = (((p == null))?null:p);
var m__25454__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__25453__auto__)]);
if(!((m__25454__auto__ == null))){
return m__25454__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__25454__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__25454__auto____$1 == null))){
return m__25454__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__25453__auto__ = (((p == null))?null:p);
var m__25454__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__25453__auto__)]);
if(!((m__25454__auto__ == null))){
return m__25454__auto__.call(null,p,v,ch);
} else {
var m__25454__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__25454__auto____$1 == null))){
return m__25454__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args28745 = [];
var len__25865__auto___28748 = arguments.length;
var i__25866__auto___28749 = (0);
while(true){
if((i__25866__auto___28749 < len__25865__auto___28748)){
args28745.push((arguments[i__25866__auto___28749]));

var G__28750 = (i__25866__auto___28749 + (1));
i__25866__auto___28749 = G__28750;
continue;
} else {
}
break;
}

var G__28747 = args28745.length;
switch (G__28747) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28745.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__25453__auto__ = (((p == null))?null:p);
var m__25454__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__25453__auto__)]);
if(!((m__25454__auto__ == null))){
return m__25454__auto__.call(null,p);
} else {
var m__25454__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__25454__auto____$1 == null))){
return m__25454__auto____$1.call(null,p);
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
var x__25453__auto__ = (((p == null))?null:p);
var m__25454__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__25453__auto__)]);
if(!((m__25454__auto__ == null))){
return m__25454__auto__.call(null,p,v);
} else {
var m__25454__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__25454__auto____$1 == null))){
return m__25454__auto____$1.call(null,p,v);
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
var args28753 = [];
var len__25865__auto___28878 = arguments.length;
var i__25866__auto___28879 = (0);
while(true){
if((i__25866__auto___28879 < len__25865__auto___28878)){
args28753.push((arguments[i__25866__auto___28879]));

var G__28880 = (i__25866__auto___28879 + (1));
i__25866__auto___28879 = G__28880;
continue;
} else {
}
break;
}

var G__28755 = args28753.length;
switch (G__28755) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28753.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__24790__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__24790__auto__)){
return or__24790__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__24790__auto__,mults){
return (function (p1__28752_SHARP_){
if(cljs.core.truth_(p1__28752_SHARP_.call(null,topic))){
return p1__28752_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__28752_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__24790__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async28756 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28756 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta28757){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta28757 = meta28757;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28756.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_28758,meta28757__$1){
var self__ = this;
var _28758__$1 = this;
return (new cljs.core.async.t_cljs$core$async28756(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta28757__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28756.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_28758){
var self__ = this;
var _28758__$1 = this;
return self__.meta28757;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28756.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async28756.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28756.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async28756.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28756.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async28756.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28756.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28756.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta28757","meta28757",487521364,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28756.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28756.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28756";

cljs.core.async.t_cljs$core$async28756.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__25396__auto__,writer__25397__auto__,opt__25398__auto__){
return cljs.core._write.call(null,writer__25397__auto__,"cljs.core.async/t_cljs$core$async28756");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async28756 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async28756(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta28757){
return (new cljs.core.async.t_cljs$core$async28756(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta28757));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async28756(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__26963__auto___28882 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26963__auto___28882,mults,ensure_mult,p){
return (function (){
var f__26964__auto__ = (function (){var switch__26851__auto__ = ((function (c__26963__auto___28882,mults,ensure_mult,p){
return (function (state_28830){
var state_val_28831 = (state_28830[(1)]);
if((state_val_28831 === (7))){
var inst_28826 = (state_28830[(2)]);
var state_28830__$1 = state_28830;
var statearr_28832_28883 = state_28830__$1;
(statearr_28832_28883[(2)] = inst_28826);

(statearr_28832_28883[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28831 === (20))){
var state_28830__$1 = state_28830;
var statearr_28833_28884 = state_28830__$1;
(statearr_28833_28884[(2)] = null);

(statearr_28833_28884[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28831 === (1))){
var state_28830__$1 = state_28830;
var statearr_28834_28885 = state_28830__$1;
(statearr_28834_28885[(2)] = null);

(statearr_28834_28885[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28831 === (24))){
var inst_28809 = (state_28830[(7)]);
var inst_28818 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_28809);
var state_28830__$1 = state_28830;
var statearr_28835_28886 = state_28830__$1;
(statearr_28835_28886[(2)] = inst_28818);

(statearr_28835_28886[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28831 === (4))){
var inst_28761 = (state_28830[(8)]);
var inst_28761__$1 = (state_28830[(2)]);
var inst_28762 = (inst_28761__$1 == null);
var state_28830__$1 = (function (){var statearr_28836 = state_28830;
(statearr_28836[(8)] = inst_28761__$1);

return statearr_28836;
})();
if(cljs.core.truth_(inst_28762)){
var statearr_28837_28887 = state_28830__$1;
(statearr_28837_28887[(1)] = (5));

} else {
var statearr_28838_28888 = state_28830__$1;
(statearr_28838_28888[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28831 === (15))){
var inst_28803 = (state_28830[(2)]);
var state_28830__$1 = state_28830;
var statearr_28839_28889 = state_28830__$1;
(statearr_28839_28889[(2)] = inst_28803);

(statearr_28839_28889[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28831 === (21))){
var inst_28823 = (state_28830[(2)]);
var state_28830__$1 = (function (){var statearr_28840 = state_28830;
(statearr_28840[(9)] = inst_28823);

return statearr_28840;
})();
var statearr_28841_28890 = state_28830__$1;
(statearr_28841_28890[(2)] = null);

(statearr_28841_28890[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28831 === (13))){
var inst_28785 = (state_28830[(10)]);
var inst_28787 = cljs.core.chunked_seq_QMARK_.call(null,inst_28785);
var state_28830__$1 = state_28830;
if(inst_28787){
var statearr_28842_28891 = state_28830__$1;
(statearr_28842_28891[(1)] = (16));

} else {
var statearr_28843_28892 = state_28830__$1;
(statearr_28843_28892[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28831 === (22))){
var inst_28815 = (state_28830[(2)]);
var state_28830__$1 = state_28830;
if(cljs.core.truth_(inst_28815)){
var statearr_28844_28893 = state_28830__$1;
(statearr_28844_28893[(1)] = (23));

} else {
var statearr_28845_28894 = state_28830__$1;
(statearr_28845_28894[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28831 === (6))){
var inst_28809 = (state_28830[(7)]);
var inst_28811 = (state_28830[(11)]);
var inst_28761 = (state_28830[(8)]);
var inst_28809__$1 = topic_fn.call(null,inst_28761);
var inst_28810 = cljs.core.deref.call(null,mults);
var inst_28811__$1 = cljs.core.get.call(null,inst_28810,inst_28809__$1);
var state_28830__$1 = (function (){var statearr_28846 = state_28830;
(statearr_28846[(7)] = inst_28809__$1);

(statearr_28846[(11)] = inst_28811__$1);

return statearr_28846;
})();
if(cljs.core.truth_(inst_28811__$1)){
var statearr_28847_28895 = state_28830__$1;
(statearr_28847_28895[(1)] = (19));

} else {
var statearr_28848_28896 = state_28830__$1;
(statearr_28848_28896[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28831 === (25))){
var inst_28820 = (state_28830[(2)]);
var state_28830__$1 = state_28830;
var statearr_28849_28897 = state_28830__$1;
(statearr_28849_28897[(2)] = inst_28820);

(statearr_28849_28897[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28831 === (17))){
var inst_28785 = (state_28830[(10)]);
var inst_28794 = cljs.core.first.call(null,inst_28785);
var inst_28795 = cljs.core.async.muxch_STAR_.call(null,inst_28794);
var inst_28796 = cljs.core.async.close_BANG_.call(null,inst_28795);
var inst_28797 = cljs.core.next.call(null,inst_28785);
var inst_28771 = inst_28797;
var inst_28772 = null;
var inst_28773 = (0);
var inst_28774 = (0);
var state_28830__$1 = (function (){var statearr_28850 = state_28830;
(statearr_28850[(12)] = inst_28773);

(statearr_28850[(13)] = inst_28796);

(statearr_28850[(14)] = inst_28771);

(statearr_28850[(15)] = inst_28774);

(statearr_28850[(16)] = inst_28772);

return statearr_28850;
})();
var statearr_28851_28898 = state_28830__$1;
(statearr_28851_28898[(2)] = null);

(statearr_28851_28898[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28831 === (3))){
var inst_28828 = (state_28830[(2)]);
var state_28830__$1 = state_28830;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28830__$1,inst_28828);
} else {
if((state_val_28831 === (12))){
var inst_28805 = (state_28830[(2)]);
var state_28830__$1 = state_28830;
var statearr_28852_28899 = state_28830__$1;
(statearr_28852_28899[(2)] = inst_28805);

(statearr_28852_28899[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28831 === (2))){
var state_28830__$1 = state_28830;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28830__$1,(4),ch);
} else {
if((state_val_28831 === (23))){
var state_28830__$1 = state_28830;
var statearr_28853_28900 = state_28830__$1;
(statearr_28853_28900[(2)] = null);

(statearr_28853_28900[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28831 === (19))){
var inst_28811 = (state_28830[(11)]);
var inst_28761 = (state_28830[(8)]);
var inst_28813 = cljs.core.async.muxch_STAR_.call(null,inst_28811);
var state_28830__$1 = state_28830;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28830__$1,(22),inst_28813,inst_28761);
} else {
if((state_val_28831 === (11))){
var inst_28771 = (state_28830[(14)]);
var inst_28785 = (state_28830[(10)]);
var inst_28785__$1 = cljs.core.seq.call(null,inst_28771);
var state_28830__$1 = (function (){var statearr_28854 = state_28830;
(statearr_28854[(10)] = inst_28785__$1);

return statearr_28854;
})();
if(inst_28785__$1){
var statearr_28855_28901 = state_28830__$1;
(statearr_28855_28901[(1)] = (13));

} else {
var statearr_28856_28902 = state_28830__$1;
(statearr_28856_28902[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28831 === (9))){
var inst_28807 = (state_28830[(2)]);
var state_28830__$1 = state_28830;
var statearr_28857_28903 = state_28830__$1;
(statearr_28857_28903[(2)] = inst_28807);

(statearr_28857_28903[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28831 === (5))){
var inst_28768 = cljs.core.deref.call(null,mults);
var inst_28769 = cljs.core.vals.call(null,inst_28768);
var inst_28770 = cljs.core.seq.call(null,inst_28769);
var inst_28771 = inst_28770;
var inst_28772 = null;
var inst_28773 = (0);
var inst_28774 = (0);
var state_28830__$1 = (function (){var statearr_28858 = state_28830;
(statearr_28858[(12)] = inst_28773);

(statearr_28858[(14)] = inst_28771);

(statearr_28858[(15)] = inst_28774);

(statearr_28858[(16)] = inst_28772);

return statearr_28858;
})();
var statearr_28859_28904 = state_28830__$1;
(statearr_28859_28904[(2)] = null);

(statearr_28859_28904[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28831 === (14))){
var state_28830__$1 = state_28830;
var statearr_28863_28905 = state_28830__$1;
(statearr_28863_28905[(2)] = null);

(statearr_28863_28905[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28831 === (16))){
var inst_28785 = (state_28830[(10)]);
var inst_28789 = cljs.core.chunk_first.call(null,inst_28785);
var inst_28790 = cljs.core.chunk_rest.call(null,inst_28785);
var inst_28791 = cljs.core.count.call(null,inst_28789);
var inst_28771 = inst_28790;
var inst_28772 = inst_28789;
var inst_28773 = inst_28791;
var inst_28774 = (0);
var state_28830__$1 = (function (){var statearr_28864 = state_28830;
(statearr_28864[(12)] = inst_28773);

(statearr_28864[(14)] = inst_28771);

(statearr_28864[(15)] = inst_28774);

(statearr_28864[(16)] = inst_28772);

return statearr_28864;
})();
var statearr_28865_28906 = state_28830__$1;
(statearr_28865_28906[(2)] = null);

(statearr_28865_28906[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28831 === (10))){
var inst_28773 = (state_28830[(12)]);
var inst_28771 = (state_28830[(14)]);
var inst_28774 = (state_28830[(15)]);
var inst_28772 = (state_28830[(16)]);
var inst_28779 = cljs.core._nth.call(null,inst_28772,inst_28774);
var inst_28780 = cljs.core.async.muxch_STAR_.call(null,inst_28779);
var inst_28781 = cljs.core.async.close_BANG_.call(null,inst_28780);
var inst_28782 = (inst_28774 + (1));
var tmp28860 = inst_28773;
var tmp28861 = inst_28771;
var tmp28862 = inst_28772;
var inst_28771__$1 = tmp28861;
var inst_28772__$1 = tmp28862;
var inst_28773__$1 = tmp28860;
var inst_28774__$1 = inst_28782;
var state_28830__$1 = (function (){var statearr_28866 = state_28830;
(statearr_28866[(12)] = inst_28773__$1);

(statearr_28866[(14)] = inst_28771__$1);

(statearr_28866[(15)] = inst_28774__$1);

(statearr_28866[(16)] = inst_28772__$1);

(statearr_28866[(17)] = inst_28781);

return statearr_28866;
})();
var statearr_28867_28907 = state_28830__$1;
(statearr_28867_28907[(2)] = null);

(statearr_28867_28907[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28831 === (18))){
var inst_28800 = (state_28830[(2)]);
var state_28830__$1 = state_28830;
var statearr_28868_28908 = state_28830__$1;
(statearr_28868_28908[(2)] = inst_28800);

(statearr_28868_28908[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28831 === (8))){
var inst_28773 = (state_28830[(12)]);
var inst_28774 = (state_28830[(15)]);
var inst_28776 = (inst_28774 < inst_28773);
var inst_28777 = inst_28776;
var state_28830__$1 = state_28830;
if(cljs.core.truth_(inst_28777)){
var statearr_28869_28909 = state_28830__$1;
(statearr_28869_28909[(1)] = (10));

} else {
var statearr_28870_28910 = state_28830__$1;
(statearr_28870_28910[(1)] = (11));

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
});})(c__26963__auto___28882,mults,ensure_mult,p))
;
return ((function (switch__26851__auto__,c__26963__auto___28882,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__26852__auto__ = null;
var cljs$core$async$state_machine__26852__auto____0 = (function (){
var statearr_28874 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28874[(0)] = cljs$core$async$state_machine__26852__auto__);

(statearr_28874[(1)] = (1));

return statearr_28874;
});
var cljs$core$async$state_machine__26852__auto____1 = (function (state_28830){
while(true){
var ret_value__26853__auto__ = (function (){try{while(true){
var result__26854__auto__ = switch__26851__auto__.call(null,state_28830);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26854__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26854__auto__;
}
break;
}
}catch (e28875){if((e28875 instanceof Object)){
var ex__26855__auto__ = e28875;
var statearr_28876_28911 = state_28830;
(statearr_28876_28911[(5)] = ex__26855__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28830);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28875;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28912 = state_28830;
state_28830 = G__28912;
continue;
} else {
return ret_value__26853__auto__;
}
break;
}
});
cljs$core$async$state_machine__26852__auto__ = function(state_28830){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26852__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26852__auto____1.call(this,state_28830);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26852__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26852__auto____0;
cljs$core$async$state_machine__26852__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26852__auto____1;
return cljs$core$async$state_machine__26852__auto__;
})()
;})(switch__26851__auto__,c__26963__auto___28882,mults,ensure_mult,p))
})();
var state__26965__auto__ = (function (){var statearr_28877 = f__26964__auto__.call(null);
(statearr_28877[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26963__auto___28882);

return statearr_28877;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26965__auto__);
});})(c__26963__auto___28882,mults,ensure_mult,p))
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
var args28913 = [];
var len__25865__auto___28916 = arguments.length;
var i__25866__auto___28917 = (0);
while(true){
if((i__25866__auto___28917 < len__25865__auto___28916)){
args28913.push((arguments[i__25866__auto___28917]));

var G__28918 = (i__25866__auto___28917 + (1));
i__25866__auto___28917 = G__28918;
continue;
} else {
}
break;
}

var G__28915 = args28913.length;
switch (G__28915) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28913.length)].join('')));

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
var args28920 = [];
var len__25865__auto___28923 = arguments.length;
var i__25866__auto___28924 = (0);
while(true){
if((i__25866__auto___28924 < len__25865__auto___28923)){
args28920.push((arguments[i__25866__auto___28924]));

var G__28925 = (i__25866__auto___28924 + (1));
i__25866__auto___28924 = G__28925;
continue;
} else {
}
break;
}

var G__28922 = args28920.length;
switch (G__28922) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28920.length)].join('')));

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
var args28927 = [];
var len__25865__auto___28998 = arguments.length;
var i__25866__auto___28999 = (0);
while(true){
if((i__25866__auto___28999 < len__25865__auto___28998)){
args28927.push((arguments[i__25866__auto___28999]));

var G__29000 = (i__25866__auto___28999 + (1));
i__25866__auto___28999 = G__29000;
continue;
} else {
}
break;
}

var G__28929 = args28927.length;
switch (G__28929) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28927.length)].join('')));

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
var c__26963__auto___29002 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26963__auto___29002,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__26964__auto__ = (function (){var switch__26851__auto__ = ((function (c__26963__auto___29002,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_28968){
var state_val_28969 = (state_28968[(1)]);
if((state_val_28969 === (7))){
var state_28968__$1 = state_28968;
var statearr_28970_29003 = state_28968__$1;
(statearr_28970_29003[(2)] = null);

(statearr_28970_29003[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28969 === (1))){
var state_28968__$1 = state_28968;
var statearr_28971_29004 = state_28968__$1;
(statearr_28971_29004[(2)] = null);

(statearr_28971_29004[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28969 === (4))){
var inst_28932 = (state_28968[(7)]);
var inst_28934 = (inst_28932 < cnt);
var state_28968__$1 = state_28968;
if(cljs.core.truth_(inst_28934)){
var statearr_28972_29005 = state_28968__$1;
(statearr_28972_29005[(1)] = (6));

} else {
var statearr_28973_29006 = state_28968__$1;
(statearr_28973_29006[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28969 === (15))){
var inst_28964 = (state_28968[(2)]);
var state_28968__$1 = state_28968;
var statearr_28974_29007 = state_28968__$1;
(statearr_28974_29007[(2)] = inst_28964);

(statearr_28974_29007[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28969 === (13))){
var inst_28957 = cljs.core.async.close_BANG_.call(null,out);
var state_28968__$1 = state_28968;
var statearr_28975_29008 = state_28968__$1;
(statearr_28975_29008[(2)] = inst_28957);

(statearr_28975_29008[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28969 === (6))){
var state_28968__$1 = state_28968;
var statearr_28976_29009 = state_28968__$1;
(statearr_28976_29009[(2)] = null);

(statearr_28976_29009[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28969 === (3))){
var inst_28966 = (state_28968[(2)]);
var state_28968__$1 = state_28968;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28968__$1,inst_28966);
} else {
if((state_val_28969 === (12))){
var inst_28954 = (state_28968[(8)]);
var inst_28954__$1 = (state_28968[(2)]);
var inst_28955 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_28954__$1);
var state_28968__$1 = (function (){var statearr_28977 = state_28968;
(statearr_28977[(8)] = inst_28954__$1);

return statearr_28977;
})();
if(cljs.core.truth_(inst_28955)){
var statearr_28978_29010 = state_28968__$1;
(statearr_28978_29010[(1)] = (13));

} else {
var statearr_28979_29011 = state_28968__$1;
(statearr_28979_29011[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28969 === (2))){
var inst_28931 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_28932 = (0);
var state_28968__$1 = (function (){var statearr_28980 = state_28968;
(statearr_28980[(9)] = inst_28931);

(statearr_28980[(7)] = inst_28932);

return statearr_28980;
})();
var statearr_28981_29012 = state_28968__$1;
(statearr_28981_29012[(2)] = null);

(statearr_28981_29012[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28969 === (11))){
var inst_28932 = (state_28968[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_28968,(10),Object,null,(9));
var inst_28941 = chs__$1.call(null,inst_28932);
var inst_28942 = done.call(null,inst_28932);
var inst_28943 = cljs.core.async.take_BANG_.call(null,inst_28941,inst_28942);
var state_28968__$1 = state_28968;
var statearr_28982_29013 = state_28968__$1;
(statearr_28982_29013[(2)] = inst_28943);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28968__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28969 === (9))){
var inst_28932 = (state_28968[(7)]);
var inst_28945 = (state_28968[(2)]);
var inst_28946 = (inst_28932 + (1));
var inst_28932__$1 = inst_28946;
var state_28968__$1 = (function (){var statearr_28983 = state_28968;
(statearr_28983[(7)] = inst_28932__$1);

(statearr_28983[(10)] = inst_28945);

return statearr_28983;
})();
var statearr_28984_29014 = state_28968__$1;
(statearr_28984_29014[(2)] = null);

(statearr_28984_29014[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28969 === (5))){
var inst_28952 = (state_28968[(2)]);
var state_28968__$1 = (function (){var statearr_28985 = state_28968;
(statearr_28985[(11)] = inst_28952);

return statearr_28985;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28968__$1,(12),dchan);
} else {
if((state_val_28969 === (14))){
var inst_28954 = (state_28968[(8)]);
var inst_28959 = cljs.core.apply.call(null,f,inst_28954);
var state_28968__$1 = state_28968;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28968__$1,(16),out,inst_28959);
} else {
if((state_val_28969 === (16))){
var inst_28961 = (state_28968[(2)]);
var state_28968__$1 = (function (){var statearr_28986 = state_28968;
(statearr_28986[(12)] = inst_28961);

return statearr_28986;
})();
var statearr_28987_29015 = state_28968__$1;
(statearr_28987_29015[(2)] = null);

(statearr_28987_29015[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28969 === (10))){
var inst_28936 = (state_28968[(2)]);
var inst_28937 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_28968__$1 = (function (){var statearr_28988 = state_28968;
(statearr_28988[(13)] = inst_28936);

return statearr_28988;
})();
var statearr_28989_29016 = state_28968__$1;
(statearr_28989_29016[(2)] = inst_28937);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28968__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28969 === (8))){
var inst_28950 = (state_28968[(2)]);
var state_28968__$1 = state_28968;
var statearr_28990_29017 = state_28968__$1;
(statearr_28990_29017[(2)] = inst_28950);

(statearr_28990_29017[(1)] = (5));


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
});})(c__26963__auto___29002,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__26851__auto__,c__26963__auto___29002,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__26852__auto__ = null;
var cljs$core$async$state_machine__26852__auto____0 = (function (){
var statearr_28994 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28994[(0)] = cljs$core$async$state_machine__26852__auto__);

(statearr_28994[(1)] = (1));

return statearr_28994;
});
var cljs$core$async$state_machine__26852__auto____1 = (function (state_28968){
while(true){
var ret_value__26853__auto__ = (function (){try{while(true){
var result__26854__auto__ = switch__26851__auto__.call(null,state_28968);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26854__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26854__auto__;
}
break;
}
}catch (e28995){if((e28995 instanceof Object)){
var ex__26855__auto__ = e28995;
var statearr_28996_29018 = state_28968;
(statearr_28996_29018[(5)] = ex__26855__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28968);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28995;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29019 = state_28968;
state_28968 = G__29019;
continue;
} else {
return ret_value__26853__auto__;
}
break;
}
});
cljs$core$async$state_machine__26852__auto__ = function(state_28968){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26852__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26852__auto____1.call(this,state_28968);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26852__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26852__auto____0;
cljs$core$async$state_machine__26852__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26852__auto____1;
return cljs$core$async$state_machine__26852__auto__;
})()
;})(switch__26851__auto__,c__26963__auto___29002,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__26965__auto__ = (function (){var statearr_28997 = f__26964__auto__.call(null);
(statearr_28997[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26963__auto___29002);

return statearr_28997;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26965__auto__);
});})(c__26963__auto___29002,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args29021 = [];
var len__25865__auto___29079 = arguments.length;
var i__25866__auto___29080 = (0);
while(true){
if((i__25866__auto___29080 < len__25865__auto___29079)){
args29021.push((arguments[i__25866__auto___29080]));

var G__29081 = (i__25866__auto___29080 + (1));
i__25866__auto___29080 = G__29081;
continue;
} else {
}
break;
}

var G__29023 = args29021.length;
switch (G__29023) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29021.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__26963__auto___29083 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26963__auto___29083,out){
return (function (){
var f__26964__auto__ = (function (){var switch__26851__auto__ = ((function (c__26963__auto___29083,out){
return (function (state_29055){
var state_val_29056 = (state_29055[(1)]);
if((state_val_29056 === (7))){
var inst_29034 = (state_29055[(7)]);
var inst_29035 = (state_29055[(8)]);
var inst_29034__$1 = (state_29055[(2)]);
var inst_29035__$1 = cljs.core.nth.call(null,inst_29034__$1,(0),null);
var inst_29036 = cljs.core.nth.call(null,inst_29034__$1,(1),null);
var inst_29037 = (inst_29035__$1 == null);
var state_29055__$1 = (function (){var statearr_29057 = state_29055;
(statearr_29057[(7)] = inst_29034__$1);

(statearr_29057[(8)] = inst_29035__$1);

(statearr_29057[(9)] = inst_29036);

return statearr_29057;
})();
if(cljs.core.truth_(inst_29037)){
var statearr_29058_29084 = state_29055__$1;
(statearr_29058_29084[(1)] = (8));

} else {
var statearr_29059_29085 = state_29055__$1;
(statearr_29059_29085[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29056 === (1))){
var inst_29024 = cljs.core.vec.call(null,chs);
var inst_29025 = inst_29024;
var state_29055__$1 = (function (){var statearr_29060 = state_29055;
(statearr_29060[(10)] = inst_29025);

return statearr_29060;
})();
var statearr_29061_29086 = state_29055__$1;
(statearr_29061_29086[(2)] = null);

(statearr_29061_29086[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29056 === (4))){
var inst_29025 = (state_29055[(10)]);
var state_29055__$1 = state_29055;
return cljs.core.async.ioc_alts_BANG_.call(null,state_29055__$1,(7),inst_29025);
} else {
if((state_val_29056 === (6))){
var inst_29051 = (state_29055[(2)]);
var state_29055__$1 = state_29055;
var statearr_29062_29087 = state_29055__$1;
(statearr_29062_29087[(2)] = inst_29051);

(statearr_29062_29087[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29056 === (3))){
var inst_29053 = (state_29055[(2)]);
var state_29055__$1 = state_29055;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29055__$1,inst_29053);
} else {
if((state_val_29056 === (2))){
var inst_29025 = (state_29055[(10)]);
var inst_29027 = cljs.core.count.call(null,inst_29025);
var inst_29028 = (inst_29027 > (0));
var state_29055__$1 = state_29055;
if(cljs.core.truth_(inst_29028)){
var statearr_29064_29088 = state_29055__$1;
(statearr_29064_29088[(1)] = (4));

} else {
var statearr_29065_29089 = state_29055__$1;
(statearr_29065_29089[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29056 === (11))){
var inst_29025 = (state_29055[(10)]);
var inst_29044 = (state_29055[(2)]);
var tmp29063 = inst_29025;
var inst_29025__$1 = tmp29063;
var state_29055__$1 = (function (){var statearr_29066 = state_29055;
(statearr_29066[(11)] = inst_29044);

(statearr_29066[(10)] = inst_29025__$1);

return statearr_29066;
})();
var statearr_29067_29090 = state_29055__$1;
(statearr_29067_29090[(2)] = null);

(statearr_29067_29090[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29056 === (9))){
var inst_29035 = (state_29055[(8)]);
var state_29055__$1 = state_29055;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29055__$1,(11),out,inst_29035);
} else {
if((state_val_29056 === (5))){
var inst_29049 = cljs.core.async.close_BANG_.call(null,out);
var state_29055__$1 = state_29055;
var statearr_29068_29091 = state_29055__$1;
(statearr_29068_29091[(2)] = inst_29049);

(statearr_29068_29091[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29056 === (10))){
var inst_29047 = (state_29055[(2)]);
var state_29055__$1 = state_29055;
var statearr_29069_29092 = state_29055__$1;
(statearr_29069_29092[(2)] = inst_29047);

(statearr_29069_29092[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29056 === (8))){
var inst_29034 = (state_29055[(7)]);
var inst_29035 = (state_29055[(8)]);
var inst_29025 = (state_29055[(10)]);
var inst_29036 = (state_29055[(9)]);
var inst_29039 = (function (){var cs = inst_29025;
var vec__29030 = inst_29034;
var v = inst_29035;
var c = inst_29036;
return ((function (cs,vec__29030,v,c,inst_29034,inst_29035,inst_29025,inst_29036,state_val_29056,c__26963__auto___29083,out){
return (function (p1__29020_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__29020_SHARP_);
});
;})(cs,vec__29030,v,c,inst_29034,inst_29035,inst_29025,inst_29036,state_val_29056,c__26963__auto___29083,out))
})();
var inst_29040 = cljs.core.filterv.call(null,inst_29039,inst_29025);
var inst_29025__$1 = inst_29040;
var state_29055__$1 = (function (){var statearr_29070 = state_29055;
(statearr_29070[(10)] = inst_29025__$1);

return statearr_29070;
})();
var statearr_29071_29093 = state_29055__$1;
(statearr_29071_29093[(2)] = null);

(statearr_29071_29093[(1)] = (2));


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
});})(c__26963__auto___29083,out))
;
return ((function (switch__26851__auto__,c__26963__auto___29083,out){
return (function() {
var cljs$core$async$state_machine__26852__auto__ = null;
var cljs$core$async$state_machine__26852__auto____0 = (function (){
var statearr_29075 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29075[(0)] = cljs$core$async$state_machine__26852__auto__);

(statearr_29075[(1)] = (1));

return statearr_29075;
});
var cljs$core$async$state_machine__26852__auto____1 = (function (state_29055){
while(true){
var ret_value__26853__auto__ = (function (){try{while(true){
var result__26854__auto__ = switch__26851__auto__.call(null,state_29055);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26854__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26854__auto__;
}
break;
}
}catch (e29076){if((e29076 instanceof Object)){
var ex__26855__auto__ = e29076;
var statearr_29077_29094 = state_29055;
(statearr_29077_29094[(5)] = ex__26855__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29055);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29076;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29095 = state_29055;
state_29055 = G__29095;
continue;
} else {
return ret_value__26853__auto__;
}
break;
}
});
cljs$core$async$state_machine__26852__auto__ = function(state_29055){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26852__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26852__auto____1.call(this,state_29055);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26852__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26852__auto____0;
cljs$core$async$state_machine__26852__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26852__auto____1;
return cljs$core$async$state_machine__26852__auto__;
})()
;})(switch__26851__auto__,c__26963__auto___29083,out))
})();
var state__26965__auto__ = (function (){var statearr_29078 = f__26964__auto__.call(null);
(statearr_29078[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26963__auto___29083);

return statearr_29078;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26965__auto__);
});})(c__26963__auto___29083,out))
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
var args29096 = [];
var len__25865__auto___29145 = arguments.length;
var i__25866__auto___29146 = (0);
while(true){
if((i__25866__auto___29146 < len__25865__auto___29145)){
args29096.push((arguments[i__25866__auto___29146]));

var G__29147 = (i__25866__auto___29146 + (1));
i__25866__auto___29146 = G__29147;
continue;
} else {
}
break;
}

var G__29098 = args29096.length;
switch (G__29098) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29096.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__26963__auto___29149 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26963__auto___29149,out){
return (function (){
var f__26964__auto__ = (function (){var switch__26851__auto__ = ((function (c__26963__auto___29149,out){
return (function (state_29122){
var state_val_29123 = (state_29122[(1)]);
if((state_val_29123 === (7))){
var inst_29104 = (state_29122[(7)]);
var inst_29104__$1 = (state_29122[(2)]);
var inst_29105 = (inst_29104__$1 == null);
var inst_29106 = cljs.core.not.call(null,inst_29105);
var state_29122__$1 = (function (){var statearr_29124 = state_29122;
(statearr_29124[(7)] = inst_29104__$1);

return statearr_29124;
})();
if(inst_29106){
var statearr_29125_29150 = state_29122__$1;
(statearr_29125_29150[(1)] = (8));

} else {
var statearr_29126_29151 = state_29122__$1;
(statearr_29126_29151[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29123 === (1))){
var inst_29099 = (0);
var state_29122__$1 = (function (){var statearr_29127 = state_29122;
(statearr_29127[(8)] = inst_29099);

return statearr_29127;
})();
var statearr_29128_29152 = state_29122__$1;
(statearr_29128_29152[(2)] = null);

(statearr_29128_29152[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29123 === (4))){
var state_29122__$1 = state_29122;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29122__$1,(7),ch);
} else {
if((state_val_29123 === (6))){
var inst_29117 = (state_29122[(2)]);
var state_29122__$1 = state_29122;
var statearr_29129_29153 = state_29122__$1;
(statearr_29129_29153[(2)] = inst_29117);

(statearr_29129_29153[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29123 === (3))){
var inst_29119 = (state_29122[(2)]);
var inst_29120 = cljs.core.async.close_BANG_.call(null,out);
var state_29122__$1 = (function (){var statearr_29130 = state_29122;
(statearr_29130[(9)] = inst_29119);

return statearr_29130;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29122__$1,inst_29120);
} else {
if((state_val_29123 === (2))){
var inst_29099 = (state_29122[(8)]);
var inst_29101 = (inst_29099 < n);
var state_29122__$1 = state_29122;
if(cljs.core.truth_(inst_29101)){
var statearr_29131_29154 = state_29122__$1;
(statearr_29131_29154[(1)] = (4));

} else {
var statearr_29132_29155 = state_29122__$1;
(statearr_29132_29155[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29123 === (11))){
var inst_29099 = (state_29122[(8)]);
var inst_29109 = (state_29122[(2)]);
var inst_29110 = (inst_29099 + (1));
var inst_29099__$1 = inst_29110;
var state_29122__$1 = (function (){var statearr_29133 = state_29122;
(statearr_29133[(10)] = inst_29109);

(statearr_29133[(8)] = inst_29099__$1);

return statearr_29133;
})();
var statearr_29134_29156 = state_29122__$1;
(statearr_29134_29156[(2)] = null);

(statearr_29134_29156[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29123 === (9))){
var state_29122__$1 = state_29122;
var statearr_29135_29157 = state_29122__$1;
(statearr_29135_29157[(2)] = null);

(statearr_29135_29157[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29123 === (5))){
var state_29122__$1 = state_29122;
var statearr_29136_29158 = state_29122__$1;
(statearr_29136_29158[(2)] = null);

(statearr_29136_29158[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29123 === (10))){
var inst_29114 = (state_29122[(2)]);
var state_29122__$1 = state_29122;
var statearr_29137_29159 = state_29122__$1;
(statearr_29137_29159[(2)] = inst_29114);

(statearr_29137_29159[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29123 === (8))){
var inst_29104 = (state_29122[(7)]);
var state_29122__$1 = state_29122;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29122__$1,(11),out,inst_29104);
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
});})(c__26963__auto___29149,out))
;
return ((function (switch__26851__auto__,c__26963__auto___29149,out){
return (function() {
var cljs$core$async$state_machine__26852__auto__ = null;
var cljs$core$async$state_machine__26852__auto____0 = (function (){
var statearr_29141 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29141[(0)] = cljs$core$async$state_machine__26852__auto__);

(statearr_29141[(1)] = (1));

return statearr_29141;
});
var cljs$core$async$state_machine__26852__auto____1 = (function (state_29122){
while(true){
var ret_value__26853__auto__ = (function (){try{while(true){
var result__26854__auto__ = switch__26851__auto__.call(null,state_29122);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26854__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26854__auto__;
}
break;
}
}catch (e29142){if((e29142 instanceof Object)){
var ex__26855__auto__ = e29142;
var statearr_29143_29160 = state_29122;
(statearr_29143_29160[(5)] = ex__26855__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29122);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29142;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29161 = state_29122;
state_29122 = G__29161;
continue;
} else {
return ret_value__26853__auto__;
}
break;
}
});
cljs$core$async$state_machine__26852__auto__ = function(state_29122){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26852__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26852__auto____1.call(this,state_29122);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26852__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26852__auto____0;
cljs$core$async$state_machine__26852__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26852__auto____1;
return cljs$core$async$state_machine__26852__auto__;
})()
;})(switch__26851__auto__,c__26963__auto___29149,out))
})();
var state__26965__auto__ = (function (){var statearr_29144 = f__26964__auto__.call(null);
(statearr_29144[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26963__auto___29149);

return statearr_29144;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26965__auto__);
});})(c__26963__auto___29149,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async29169 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29169 = (function (map_LT_,f,ch,meta29170){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta29170 = meta29170;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29169.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29171,meta29170__$1){
var self__ = this;
var _29171__$1 = this;
return (new cljs.core.async.t_cljs$core$async29169(self__.map_LT_,self__.f,self__.ch,meta29170__$1));
});

cljs.core.async.t_cljs$core$async29169.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29171){
var self__ = this;
var _29171__$1 = this;
return self__.meta29170;
});

cljs.core.async.t_cljs$core$async29169.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async29169.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29169.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29169.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async29169.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async29172 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29172 = (function (map_LT_,f,ch,meta29170,_,fn1,meta29173){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta29170 = meta29170;
this._ = _;
this.fn1 = fn1;
this.meta29173 = meta29173;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29172.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_29174,meta29173__$1){
var self__ = this;
var _29174__$1 = this;
return (new cljs.core.async.t_cljs$core$async29172(self__.map_LT_,self__.f,self__.ch,self__.meta29170,self__._,self__.fn1,meta29173__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async29172.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_29174){
var self__ = this;
var _29174__$1 = this;
return self__.meta29173;
});})(___$1))
;

cljs.core.async.t_cljs$core$async29172.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async29172.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async29172.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async29172.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__29162_SHARP_){
return f1.call(null,(((p1__29162_SHARP_ == null))?null:self__.f.call(null,p1__29162_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async29172.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29170","meta29170",-945651366,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async29169","cljs.core.async/t_cljs$core$async29169",-1250856194,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta29173","meta29173",-475214031,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async29172.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29172.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29172";

cljs.core.async.t_cljs$core$async29172.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__25396__auto__,writer__25397__auto__,opt__25398__auto__){
return cljs.core._write.call(null,writer__25397__auto__,"cljs.core.async/t_cljs$core$async29172");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async29172 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async29172(map_LT___$1,f__$1,ch__$1,meta29170__$1,___$2,fn1__$1,meta29173){
return (new cljs.core.async.t_cljs$core$async29172(map_LT___$1,f__$1,ch__$1,meta29170__$1,___$2,fn1__$1,meta29173));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async29172(self__.map_LT_,self__.f,self__.ch,self__.meta29170,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__24778__auto__ = ret;
if(cljs.core.truth_(and__24778__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__24778__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async29169.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async29169.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async29169.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29170","meta29170",-945651366,null)], null);
});

cljs.core.async.t_cljs$core$async29169.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29169.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29169";

cljs.core.async.t_cljs$core$async29169.cljs$lang$ctorPrWriter = (function (this__25396__auto__,writer__25397__auto__,opt__25398__auto__){
return cljs.core._write.call(null,writer__25397__auto__,"cljs.core.async/t_cljs$core$async29169");
});

cljs.core.async.__GT_t_cljs$core$async29169 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async29169(map_LT___$1,f__$1,ch__$1,meta29170){
return (new cljs.core.async.t_cljs$core$async29169(map_LT___$1,f__$1,ch__$1,meta29170));
});

}

return (new cljs.core.async.t_cljs$core$async29169(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async29178 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29178 = (function (map_GT_,f,ch,meta29179){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta29179 = meta29179;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29178.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29180,meta29179__$1){
var self__ = this;
var _29180__$1 = this;
return (new cljs.core.async.t_cljs$core$async29178(self__.map_GT_,self__.f,self__.ch,meta29179__$1));
});

cljs.core.async.t_cljs$core$async29178.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29180){
var self__ = this;
var _29180__$1 = this;
return self__.meta29179;
});

cljs.core.async.t_cljs$core$async29178.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async29178.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29178.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async29178.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async29178.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async29178.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async29178.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29179","meta29179",-352304873,null)], null);
});

cljs.core.async.t_cljs$core$async29178.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29178.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29178";

cljs.core.async.t_cljs$core$async29178.cljs$lang$ctorPrWriter = (function (this__25396__auto__,writer__25397__auto__,opt__25398__auto__){
return cljs.core._write.call(null,writer__25397__auto__,"cljs.core.async/t_cljs$core$async29178");
});

cljs.core.async.__GT_t_cljs$core$async29178 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async29178(map_GT___$1,f__$1,ch__$1,meta29179){
return (new cljs.core.async.t_cljs$core$async29178(map_GT___$1,f__$1,ch__$1,meta29179));
});

}

return (new cljs.core.async.t_cljs$core$async29178(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async29184 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29184 = (function (filter_GT_,p,ch,meta29185){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta29185 = meta29185;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29184.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29186,meta29185__$1){
var self__ = this;
var _29186__$1 = this;
return (new cljs.core.async.t_cljs$core$async29184(self__.filter_GT_,self__.p,self__.ch,meta29185__$1));
});

cljs.core.async.t_cljs$core$async29184.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29186){
var self__ = this;
var _29186__$1 = this;
return self__.meta29185;
});

cljs.core.async.t_cljs$core$async29184.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async29184.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29184.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29184.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async29184.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async29184.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async29184.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async29184.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29185","meta29185",2011108794,null)], null);
});

cljs.core.async.t_cljs$core$async29184.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29184.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29184";

cljs.core.async.t_cljs$core$async29184.cljs$lang$ctorPrWriter = (function (this__25396__auto__,writer__25397__auto__,opt__25398__auto__){
return cljs.core._write.call(null,writer__25397__auto__,"cljs.core.async/t_cljs$core$async29184");
});

cljs.core.async.__GT_t_cljs$core$async29184 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async29184(filter_GT___$1,p__$1,ch__$1,meta29185){
return (new cljs.core.async.t_cljs$core$async29184(filter_GT___$1,p__$1,ch__$1,meta29185));
});

}

return (new cljs.core.async.t_cljs$core$async29184(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args29187 = [];
var len__25865__auto___29231 = arguments.length;
var i__25866__auto___29232 = (0);
while(true){
if((i__25866__auto___29232 < len__25865__auto___29231)){
args29187.push((arguments[i__25866__auto___29232]));

var G__29233 = (i__25866__auto___29232 + (1));
i__25866__auto___29232 = G__29233;
continue;
} else {
}
break;
}

var G__29189 = args29187.length;
switch (G__29189) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29187.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__26963__auto___29235 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26963__auto___29235,out){
return (function (){
var f__26964__auto__ = (function (){var switch__26851__auto__ = ((function (c__26963__auto___29235,out){
return (function (state_29210){
var state_val_29211 = (state_29210[(1)]);
if((state_val_29211 === (7))){
var inst_29206 = (state_29210[(2)]);
var state_29210__$1 = state_29210;
var statearr_29212_29236 = state_29210__$1;
(statearr_29212_29236[(2)] = inst_29206);

(statearr_29212_29236[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29211 === (1))){
var state_29210__$1 = state_29210;
var statearr_29213_29237 = state_29210__$1;
(statearr_29213_29237[(2)] = null);

(statearr_29213_29237[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29211 === (4))){
var inst_29192 = (state_29210[(7)]);
var inst_29192__$1 = (state_29210[(2)]);
var inst_29193 = (inst_29192__$1 == null);
var state_29210__$1 = (function (){var statearr_29214 = state_29210;
(statearr_29214[(7)] = inst_29192__$1);

return statearr_29214;
})();
if(cljs.core.truth_(inst_29193)){
var statearr_29215_29238 = state_29210__$1;
(statearr_29215_29238[(1)] = (5));

} else {
var statearr_29216_29239 = state_29210__$1;
(statearr_29216_29239[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29211 === (6))){
var inst_29192 = (state_29210[(7)]);
var inst_29197 = p.call(null,inst_29192);
var state_29210__$1 = state_29210;
if(cljs.core.truth_(inst_29197)){
var statearr_29217_29240 = state_29210__$1;
(statearr_29217_29240[(1)] = (8));

} else {
var statearr_29218_29241 = state_29210__$1;
(statearr_29218_29241[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29211 === (3))){
var inst_29208 = (state_29210[(2)]);
var state_29210__$1 = state_29210;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29210__$1,inst_29208);
} else {
if((state_val_29211 === (2))){
var state_29210__$1 = state_29210;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29210__$1,(4),ch);
} else {
if((state_val_29211 === (11))){
var inst_29200 = (state_29210[(2)]);
var state_29210__$1 = state_29210;
var statearr_29219_29242 = state_29210__$1;
(statearr_29219_29242[(2)] = inst_29200);

(statearr_29219_29242[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29211 === (9))){
var state_29210__$1 = state_29210;
var statearr_29220_29243 = state_29210__$1;
(statearr_29220_29243[(2)] = null);

(statearr_29220_29243[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29211 === (5))){
var inst_29195 = cljs.core.async.close_BANG_.call(null,out);
var state_29210__$1 = state_29210;
var statearr_29221_29244 = state_29210__$1;
(statearr_29221_29244[(2)] = inst_29195);

(statearr_29221_29244[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29211 === (10))){
var inst_29203 = (state_29210[(2)]);
var state_29210__$1 = (function (){var statearr_29222 = state_29210;
(statearr_29222[(8)] = inst_29203);

return statearr_29222;
})();
var statearr_29223_29245 = state_29210__$1;
(statearr_29223_29245[(2)] = null);

(statearr_29223_29245[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29211 === (8))){
var inst_29192 = (state_29210[(7)]);
var state_29210__$1 = state_29210;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29210__$1,(11),out,inst_29192);
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
});})(c__26963__auto___29235,out))
;
return ((function (switch__26851__auto__,c__26963__auto___29235,out){
return (function() {
var cljs$core$async$state_machine__26852__auto__ = null;
var cljs$core$async$state_machine__26852__auto____0 = (function (){
var statearr_29227 = [null,null,null,null,null,null,null,null,null];
(statearr_29227[(0)] = cljs$core$async$state_machine__26852__auto__);

(statearr_29227[(1)] = (1));

return statearr_29227;
});
var cljs$core$async$state_machine__26852__auto____1 = (function (state_29210){
while(true){
var ret_value__26853__auto__ = (function (){try{while(true){
var result__26854__auto__ = switch__26851__auto__.call(null,state_29210);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26854__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26854__auto__;
}
break;
}
}catch (e29228){if((e29228 instanceof Object)){
var ex__26855__auto__ = e29228;
var statearr_29229_29246 = state_29210;
(statearr_29229_29246[(5)] = ex__26855__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29210);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29228;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29247 = state_29210;
state_29210 = G__29247;
continue;
} else {
return ret_value__26853__auto__;
}
break;
}
});
cljs$core$async$state_machine__26852__auto__ = function(state_29210){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26852__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26852__auto____1.call(this,state_29210);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26852__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26852__auto____0;
cljs$core$async$state_machine__26852__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26852__auto____1;
return cljs$core$async$state_machine__26852__auto__;
})()
;})(switch__26851__auto__,c__26963__auto___29235,out))
})();
var state__26965__auto__ = (function (){var statearr_29230 = f__26964__auto__.call(null);
(statearr_29230[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26963__auto___29235);

return statearr_29230;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26965__auto__);
});})(c__26963__auto___29235,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args29248 = [];
var len__25865__auto___29251 = arguments.length;
var i__25866__auto___29252 = (0);
while(true){
if((i__25866__auto___29252 < len__25865__auto___29251)){
args29248.push((arguments[i__25866__auto___29252]));

var G__29253 = (i__25866__auto___29252 + (1));
i__25866__auto___29252 = G__29253;
continue;
} else {
}
break;
}

var G__29250 = args29248.length;
switch (G__29250) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29248.length)].join('')));

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
var c__26963__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26963__auto__){
return (function (){
var f__26964__auto__ = (function (){var switch__26851__auto__ = ((function (c__26963__auto__){
return (function (state_29420){
var state_val_29421 = (state_29420[(1)]);
if((state_val_29421 === (7))){
var inst_29416 = (state_29420[(2)]);
var state_29420__$1 = state_29420;
var statearr_29422_29463 = state_29420__$1;
(statearr_29422_29463[(2)] = inst_29416);

(statearr_29422_29463[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29421 === (20))){
var inst_29386 = (state_29420[(7)]);
var inst_29397 = (state_29420[(2)]);
var inst_29398 = cljs.core.next.call(null,inst_29386);
var inst_29372 = inst_29398;
var inst_29373 = null;
var inst_29374 = (0);
var inst_29375 = (0);
var state_29420__$1 = (function (){var statearr_29423 = state_29420;
(statearr_29423[(8)] = inst_29374);

(statearr_29423[(9)] = inst_29397);

(statearr_29423[(10)] = inst_29372);

(statearr_29423[(11)] = inst_29375);

(statearr_29423[(12)] = inst_29373);

return statearr_29423;
})();
var statearr_29424_29464 = state_29420__$1;
(statearr_29424_29464[(2)] = null);

(statearr_29424_29464[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29421 === (1))){
var state_29420__$1 = state_29420;
var statearr_29425_29465 = state_29420__$1;
(statearr_29425_29465[(2)] = null);

(statearr_29425_29465[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29421 === (4))){
var inst_29361 = (state_29420[(13)]);
var inst_29361__$1 = (state_29420[(2)]);
var inst_29362 = (inst_29361__$1 == null);
var state_29420__$1 = (function (){var statearr_29426 = state_29420;
(statearr_29426[(13)] = inst_29361__$1);

return statearr_29426;
})();
if(cljs.core.truth_(inst_29362)){
var statearr_29427_29466 = state_29420__$1;
(statearr_29427_29466[(1)] = (5));

} else {
var statearr_29428_29467 = state_29420__$1;
(statearr_29428_29467[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29421 === (15))){
var state_29420__$1 = state_29420;
var statearr_29432_29468 = state_29420__$1;
(statearr_29432_29468[(2)] = null);

(statearr_29432_29468[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29421 === (21))){
var state_29420__$1 = state_29420;
var statearr_29433_29469 = state_29420__$1;
(statearr_29433_29469[(2)] = null);

(statearr_29433_29469[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29421 === (13))){
var inst_29374 = (state_29420[(8)]);
var inst_29372 = (state_29420[(10)]);
var inst_29375 = (state_29420[(11)]);
var inst_29373 = (state_29420[(12)]);
var inst_29382 = (state_29420[(2)]);
var inst_29383 = (inst_29375 + (1));
var tmp29429 = inst_29374;
var tmp29430 = inst_29372;
var tmp29431 = inst_29373;
var inst_29372__$1 = tmp29430;
var inst_29373__$1 = tmp29431;
var inst_29374__$1 = tmp29429;
var inst_29375__$1 = inst_29383;
var state_29420__$1 = (function (){var statearr_29434 = state_29420;
(statearr_29434[(8)] = inst_29374__$1);

(statearr_29434[(10)] = inst_29372__$1);

(statearr_29434[(11)] = inst_29375__$1);

(statearr_29434[(14)] = inst_29382);

(statearr_29434[(12)] = inst_29373__$1);

return statearr_29434;
})();
var statearr_29435_29470 = state_29420__$1;
(statearr_29435_29470[(2)] = null);

(statearr_29435_29470[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29421 === (22))){
var state_29420__$1 = state_29420;
var statearr_29436_29471 = state_29420__$1;
(statearr_29436_29471[(2)] = null);

(statearr_29436_29471[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29421 === (6))){
var inst_29361 = (state_29420[(13)]);
var inst_29370 = f.call(null,inst_29361);
var inst_29371 = cljs.core.seq.call(null,inst_29370);
var inst_29372 = inst_29371;
var inst_29373 = null;
var inst_29374 = (0);
var inst_29375 = (0);
var state_29420__$1 = (function (){var statearr_29437 = state_29420;
(statearr_29437[(8)] = inst_29374);

(statearr_29437[(10)] = inst_29372);

(statearr_29437[(11)] = inst_29375);

(statearr_29437[(12)] = inst_29373);

return statearr_29437;
})();
var statearr_29438_29472 = state_29420__$1;
(statearr_29438_29472[(2)] = null);

(statearr_29438_29472[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29421 === (17))){
var inst_29386 = (state_29420[(7)]);
var inst_29390 = cljs.core.chunk_first.call(null,inst_29386);
var inst_29391 = cljs.core.chunk_rest.call(null,inst_29386);
var inst_29392 = cljs.core.count.call(null,inst_29390);
var inst_29372 = inst_29391;
var inst_29373 = inst_29390;
var inst_29374 = inst_29392;
var inst_29375 = (0);
var state_29420__$1 = (function (){var statearr_29439 = state_29420;
(statearr_29439[(8)] = inst_29374);

(statearr_29439[(10)] = inst_29372);

(statearr_29439[(11)] = inst_29375);

(statearr_29439[(12)] = inst_29373);

return statearr_29439;
})();
var statearr_29440_29473 = state_29420__$1;
(statearr_29440_29473[(2)] = null);

(statearr_29440_29473[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29421 === (3))){
var inst_29418 = (state_29420[(2)]);
var state_29420__$1 = state_29420;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29420__$1,inst_29418);
} else {
if((state_val_29421 === (12))){
var inst_29406 = (state_29420[(2)]);
var state_29420__$1 = state_29420;
var statearr_29441_29474 = state_29420__$1;
(statearr_29441_29474[(2)] = inst_29406);

(statearr_29441_29474[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29421 === (2))){
var state_29420__$1 = state_29420;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29420__$1,(4),in$);
} else {
if((state_val_29421 === (23))){
var inst_29414 = (state_29420[(2)]);
var state_29420__$1 = state_29420;
var statearr_29442_29475 = state_29420__$1;
(statearr_29442_29475[(2)] = inst_29414);

(statearr_29442_29475[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29421 === (19))){
var inst_29401 = (state_29420[(2)]);
var state_29420__$1 = state_29420;
var statearr_29443_29476 = state_29420__$1;
(statearr_29443_29476[(2)] = inst_29401);

(statearr_29443_29476[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29421 === (11))){
var inst_29372 = (state_29420[(10)]);
var inst_29386 = (state_29420[(7)]);
var inst_29386__$1 = cljs.core.seq.call(null,inst_29372);
var state_29420__$1 = (function (){var statearr_29444 = state_29420;
(statearr_29444[(7)] = inst_29386__$1);

return statearr_29444;
})();
if(inst_29386__$1){
var statearr_29445_29477 = state_29420__$1;
(statearr_29445_29477[(1)] = (14));

} else {
var statearr_29446_29478 = state_29420__$1;
(statearr_29446_29478[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29421 === (9))){
var inst_29408 = (state_29420[(2)]);
var inst_29409 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_29420__$1 = (function (){var statearr_29447 = state_29420;
(statearr_29447[(15)] = inst_29408);

return statearr_29447;
})();
if(cljs.core.truth_(inst_29409)){
var statearr_29448_29479 = state_29420__$1;
(statearr_29448_29479[(1)] = (21));

} else {
var statearr_29449_29480 = state_29420__$1;
(statearr_29449_29480[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29421 === (5))){
var inst_29364 = cljs.core.async.close_BANG_.call(null,out);
var state_29420__$1 = state_29420;
var statearr_29450_29481 = state_29420__$1;
(statearr_29450_29481[(2)] = inst_29364);

(statearr_29450_29481[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29421 === (14))){
var inst_29386 = (state_29420[(7)]);
var inst_29388 = cljs.core.chunked_seq_QMARK_.call(null,inst_29386);
var state_29420__$1 = state_29420;
if(inst_29388){
var statearr_29451_29482 = state_29420__$1;
(statearr_29451_29482[(1)] = (17));

} else {
var statearr_29452_29483 = state_29420__$1;
(statearr_29452_29483[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29421 === (16))){
var inst_29404 = (state_29420[(2)]);
var state_29420__$1 = state_29420;
var statearr_29453_29484 = state_29420__$1;
(statearr_29453_29484[(2)] = inst_29404);

(statearr_29453_29484[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29421 === (10))){
var inst_29375 = (state_29420[(11)]);
var inst_29373 = (state_29420[(12)]);
var inst_29380 = cljs.core._nth.call(null,inst_29373,inst_29375);
var state_29420__$1 = state_29420;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29420__$1,(13),out,inst_29380);
} else {
if((state_val_29421 === (18))){
var inst_29386 = (state_29420[(7)]);
var inst_29395 = cljs.core.first.call(null,inst_29386);
var state_29420__$1 = state_29420;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29420__$1,(20),out,inst_29395);
} else {
if((state_val_29421 === (8))){
var inst_29374 = (state_29420[(8)]);
var inst_29375 = (state_29420[(11)]);
var inst_29377 = (inst_29375 < inst_29374);
var inst_29378 = inst_29377;
var state_29420__$1 = state_29420;
if(cljs.core.truth_(inst_29378)){
var statearr_29454_29485 = state_29420__$1;
(statearr_29454_29485[(1)] = (10));

} else {
var statearr_29455_29486 = state_29420__$1;
(statearr_29455_29486[(1)] = (11));

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
});})(c__26963__auto__))
;
return ((function (switch__26851__auto__,c__26963__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__26852__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__26852__auto____0 = (function (){
var statearr_29459 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29459[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__26852__auto__);

(statearr_29459[(1)] = (1));

return statearr_29459;
});
var cljs$core$async$mapcat_STAR__$_state_machine__26852__auto____1 = (function (state_29420){
while(true){
var ret_value__26853__auto__ = (function (){try{while(true){
var result__26854__auto__ = switch__26851__auto__.call(null,state_29420);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26854__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26854__auto__;
}
break;
}
}catch (e29460){if((e29460 instanceof Object)){
var ex__26855__auto__ = e29460;
var statearr_29461_29487 = state_29420;
(statearr_29461_29487[(5)] = ex__26855__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29420);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29460;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29488 = state_29420;
state_29420 = G__29488;
continue;
} else {
return ret_value__26853__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__26852__auto__ = function(state_29420){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__26852__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__26852__auto____1.call(this,state_29420);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__26852__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__26852__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__26852__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__26852__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__26852__auto__;
})()
;})(switch__26851__auto__,c__26963__auto__))
})();
var state__26965__auto__ = (function (){var statearr_29462 = f__26964__auto__.call(null);
(statearr_29462[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26963__auto__);

return statearr_29462;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26965__auto__);
});})(c__26963__auto__))
);

return c__26963__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args29489 = [];
var len__25865__auto___29492 = arguments.length;
var i__25866__auto___29493 = (0);
while(true){
if((i__25866__auto___29493 < len__25865__auto___29492)){
args29489.push((arguments[i__25866__auto___29493]));

var G__29494 = (i__25866__auto___29493 + (1));
i__25866__auto___29493 = G__29494;
continue;
} else {
}
break;
}

var G__29491 = args29489.length;
switch (G__29491) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29489.length)].join('')));

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
var args29496 = [];
var len__25865__auto___29499 = arguments.length;
var i__25866__auto___29500 = (0);
while(true){
if((i__25866__auto___29500 < len__25865__auto___29499)){
args29496.push((arguments[i__25866__auto___29500]));

var G__29501 = (i__25866__auto___29500 + (1));
i__25866__auto___29500 = G__29501;
continue;
} else {
}
break;
}

var G__29498 = args29496.length;
switch (G__29498) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29496.length)].join('')));

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
var args29503 = [];
var len__25865__auto___29554 = arguments.length;
var i__25866__auto___29555 = (0);
while(true){
if((i__25866__auto___29555 < len__25865__auto___29554)){
args29503.push((arguments[i__25866__auto___29555]));

var G__29556 = (i__25866__auto___29555 + (1));
i__25866__auto___29555 = G__29556;
continue;
} else {
}
break;
}

var G__29505 = args29503.length;
switch (G__29505) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29503.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__26963__auto___29558 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26963__auto___29558,out){
return (function (){
var f__26964__auto__ = (function (){var switch__26851__auto__ = ((function (c__26963__auto___29558,out){
return (function (state_29529){
var state_val_29530 = (state_29529[(1)]);
if((state_val_29530 === (7))){
var inst_29524 = (state_29529[(2)]);
var state_29529__$1 = state_29529;
var statearr_29531_29559 = state_29529__$1;
(statearr_29531_29559[(2)] = inst_29524);

(statearr_29531_29559[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29530 === (1))){
var inst_29506 = null;
var state_29529__$1 = (function (){var statearr_29532 = state_29529;
(statearr_29532[(7)] = inst_29506);

return statearr_29532;
})();
var statearr_29533_29560 = state_29529__$1;
(statearr_29533_29560[(2)] = null);

(statearr_29533_29560[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29530 === (4))){
var inst_29509 = (state_29529[(8)]);
var inst_29509__$1 = (state_29529[(2)]);
var inst_29510 = (inst_29509__$1 == null);
var inst_29511 = cljs.core.not.call(null,inst_29510);
var state_29529__$1 = (function (){var statearr_29534 = state_29529;
(statearr_29534[(8)] = inst_29509__$1);

return statearr_29534;
})();
if(inst_29511){
var statearr_29535_29561 = state_29529__$1;
(statearr_29535_29561[(1)] = (5));

} else {
var statearr_29536_29562 = state_29529__$1;
(statearr_29536_29562[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29530 === (6))){
var state_29529__$1 = state_29529;
var statearr_29537_29563 = state_29529__$1;
(statearr_29537_29563[(2)] = null);

(statearr_29537_29563[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29530 === (3))){
var inst_29526 = (state_29529[(2)]);
var inst_29527 = cljs.core.async.close_BANG_.call(null,out);
var state_29529__$1 = (function (){var statearr_29538 = state_29529;
(statearr_29538[(9)] = inst_29526);

return statearr_29538;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29529__$1,inst_29527);
} else {
if((state_val_29530 === (2))){
var state_29529__$1 = state_29529;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29529__$1,(4),ch);
} else {
if((state_val_29530 === (11))){
var inst_29509 = (state_29529[(8)]);
var inst_29518 = (state_29529[(2)]);
var inst_29506 = inst_29509;
var state_29529__$1 = (function (){var statearr_29539 = state_29529;
(statearr_29539[(10)] = inst_29518);

(statearr_29539[(7)] = inst_29506);

return statearr_29539;
})();
var statearr_29540_29564 = state_29529__$1;
(statearr_29540_29564[(2)] = null);

(statearr_29540_29564[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29530 === (9))){
var inst_29509 = (state_29529[(8)]);
var state_29529__$1 = state_29529;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29529__$1,(11),out,inst_29509);
} else {
if((state_val_29530 === (5))){
var inst_29509 = (state_29529[(8)]);
var inst_29506 = (state_29529[(7)]);
var inst_29513 = cljs.core._EQ_.call(null,inst_29509,inst_29506);
var state_29529__$1 = state_29529;
if(inst_29513){
var statearr_29542_29565 = state_29529__$1;
(statearr_29542_29565[(1)] = (8));

} else {
var statearr_29543_29566 = state_29529__$1;
(statearr_29543_29566[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29530 === (10))){
var inst_29521 = (state_29529[(2)]);
var state_29529__$1 = state_29529;
var statearr_29544_29567 = state_29529__$1;
(statearr_29544_29567[(2)] = inst_29521);

(statearr_29544_29567[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29530 === (8))){
var inst_29506 = (state_29529[(7)]);
var tmp29541 = inst_29506;
var inst_29506__$1 = tmp29541;
var state_29529__$1 = (function (){var statearr_29545 = state_29529;
(statearr_29545[(7)] = inst_29506__$1);

return statearr_29545;
})();
var statearr_29546_29568 = state_29529__$1;
(statearr_29546_29568[(2)] = null);

(statearr_29546_29568[(1)] = (2));


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
});})(c__26963__auto___29558,out))
;
return ((function (switch__26851__auto__,c__26963__auto___29558,out){
return (function() {
var cljs$core$async$state_machine__26852__auto__ = null;
var cljs$core$async$state_machine__26852__auto____0 = (function (){
var statearr_29550 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29550[(0)] = cljs$core$async$state_machine__26852__auto__);

(statearr_29550[(1)] = (1));

return statearr_29550;
});
var cljs$core$async$state_machine__26852__auto____1 = (function (state_29529){
while(true){
var ret_value__26853__auto__ = (function (){try{while(true){
var result__26854__auto__ = switch__26851__auto__.call(null,state_29529);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26854__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26854__auto__;
}
break;
}
}catch (e29551){if((e29551 instanceof Object)){
var ex__26855__auto__ = e29551;
var statearr_29552_29569 = state_29529;
(statearr_29552_29569[(5)] = ex__26855__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29529);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29551;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29570 = state_29529;
state_29529 = G__29570;
continue;
} else {
return ret_value__26853__auto__;
}
break;
}
});
cljs$core$async$state_machine__26852__auto__ = function(state_29529){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26852__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26852__auto____1.call(this,state_29529);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26852__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26852__auto____0;
cljs$core$async$state_machine__26852__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26852__auto____1;
return cljs$core$async$state_machine__26852__auto__;
})()
;})(switch__26851__auto__,c__26963__auto___29558,out))
})();
var state__26965__auto__ = (function (){var statearr_29553 = f__26964__auto__.call(null);
(statearr_29553[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26963__auto___29558);

return statearr_29553;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26965__auto__);
});})(c__26963__auto___29558,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args29571 = [];
var len__25865__auto___29641 = arguments.length;
var i__25866__auto___29642 = (0);
while(true){
if((i__25866__auto___29642 < len__25865__auto___29641)){
args29571.push((arguments[i__25866__auto___29642]));

var G__29643 = (i__25866__auto___29642 + (1));
i__25866__auto___29642 = G__29643;
continue;
} else {
}
break;
}

var G__29573 = args29571.length;
switch (G__29573) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29571.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__26963__auto___29645 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26963__auto___29645,out){
return (function (){
var f__26964__auto__ = (function (){var switch__26851__auto__ = ((function (c__26963__auto___29645,out){
return (function (state_29611){
var state_val_29612 = (state_29611[(1)]);
if((state_val_29612 === (7))){
var inst_29607 = (state_29611[(2)]);
var state_29611__$1 = state_29611;
var statearr_29613_29646 = state_29611__$1;
(statearr_29613_29646[(2)] = inst_29607);

(statearr_29613_29646[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29612 === (1))){
var inst_29574 = (new Array(n));
var inst_29575 = inst_29574;
var inst_29576 = (0);
var state_29611__$1 = (function (){var statearr_29614 = state_29611;
(statearr_29614[(7)] = inst_29575);

(statearr_29614[(8)] = inst_29576);

return statearr_29614;
})();
var statearr_29615_29647 = state_29611__$1;
(statearr_29615_29647[(2)] = null);

(statearr_29615_29647[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29612 === (4))){
var inst_29579 = (state_29611[(9)]);
var inst_29579__$1 = (state_29611[(2)]);
var inst_29580 = (inst_29579__$1 == null);
var inst_29581 = cljs.core.not.call(null,inst_29580);
var state_29611__$1 = (function (){var statearr_29616 = state_29611;
(statearr_29616[(9)] = inst_29579__$1);

return statearr_29616;
})();
if(inst_29581){
var statearr_29617_29648 = state_29611__$1;
(statearr_29617_29648[(1)] = (5));

} else {
var statearr_29618_29649 = state_29611__$1;
(statearr_29618_29649[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29612 === (15))){
var inst_29601 = (state_29611[(2)]);
var state_29611__$1 = state_29611;
var statearr_29619_29650 = state_29611__$1;
(statearr_29619_29650[(2)] = inst_29601);

(statearr_29619_29650[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29612 === (13))){
var state_29611__$1 = state_29611;
var statearr_29620_29651 = state_29611__$1;
(statearr_29620_29651[(2)] = null);

(statearr_29620_29651[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29612 === (6))){
var inst_29576 = (state_29611[(8)]);
var inst_29597 = (inst_29576 > (0));
var state_29611__$1 = state_29611;
if(cljs.core.truth_(inst_29597)){
var statearr_29621_29652 = state_29611__$1;
(statearr_29621_29652[(1)] = (12));

} else {
var statearr_29622_29653 = state_29611__$1;
(statearr_29622_29653[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29612 === (3))){
var inst_29609 = (state_29611[(2)]);
var state_29611__$1 = state_29611;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29611__$1,inst_29609);
} else {
if((state_val_29612 === (12))){
var inst_29575 = (state_29611[(7)]);
var inst_29599 = cljs.core.vec.call(null,inst_29575);
var state_29611__$1 = state_29611;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29611__$1,(15),out,inst_29599);
} else {
if((state_val_29612 === (2))){
var state_29611__$1 = state_29611;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29611__$1,(4),ch);
} else {
if((state_val_29612 === (11))){
var inst_29591 = (state_29611[(2)]);
var inst_29592 = (new Array(n));
var inst_29575 = inst_29592;
var inst_29576 = (0);
var state_29611__$1 = (function (){var statearr_29623 = state_29611;
(statearr_29623[(7)] = inst_29575);

(statearr_29623[(10)] = inst_29591);

(statearr_29623[(8)] = inst_29576);

return statearr_29623;
})();
var statearr_29624_29654 = state_29611__$1;
(statearr_29624_29654[(2)] = null);

(statearr_29624_29654[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29612 === (9))){
var inst_29575 = (state_29611[(7)]);
var inst_29589 = cljs.core.vec.call(null,inst_29575);
var state_29611__$1 = state_29611;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29611__$1,(11),out,inst_29589);
} else {
if((state_val_29612 === (5))){
var inst_29575 = (state_29611[(7)]);
var inst_29579 = (state_29611[(9)]);
var inst_29576 = (state_29611[(8)]);
var inst_29584 = (state_29611[(11)]);
var inst_29583 = (inst_29575[inst_29576] = inst_29579);
var inst_29584__$1 = (inst_29576 + (1));
var inst_29585 = (inst_29584__$1 < n);
var state_29611__$1 = (function (){var statearr_29625 = state_29611;
(statearr_29625[(12)] = inst_29583);

(statearr_29625[(11)] = inst_29584__$1);

return statearr_29625;
})();
if(cljs.core.truth_(inst_29585)){
var statearr_29626_29655 = state_29611__$1;
(statearr_29626_29655[(1)] = (8));

} else {
var statearr_29627_29656 = state_29611__$1;
(statearr_29627_29656[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29612 === (14))){
var inst_29604 = (state_29611[(2)]);
var inst_29605 = cljs.core.async.close_BANG_.call(null,out);
var state_29611__$1 = (function (){var statearr_29629 = state_29611;
(statearr_29629[(13)] = inst_29604);

return statearr_29629;
})();
var statearr_29630_29657 = state_29611__$1;
(statearr_29630_29657[(2)] = inst_29605);

(statearr_29630_29657[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29612 === (10))){
var inst_29595 = (state_29611[(2)]);
var state_29611__$1 = state_29611;
var statearr_29631_29658 = state_29611__$1;
(statearr_29631_29658[(2)] = inst_29595);

(statearr_29631_29658[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29612 === (8))){
var inst_29575 = (state_29611[(7)]);
var inst_29584 = (state_29611[(11)]);
var tmp29628 = inst_29575;
var inst_29575__$1 = tmp29628;
var inst_29576 = inst_29584;
var state_29611__$1 = (function (){var statearr_29632 = state_29611;
(statearr_29632[(7)] = inst_29575__$1);

(statearr_29632[(8)] = inst_29576);

return statearr_29632;
})();
var statearr_29633_29659 = state_29611__$1;
(statearr_29633_29659[(2)] = null);

(statearr_29633_29659[(1)] = (2));


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
});})(c__26963__auto___29645,out))
;
return ((function (switch__26851__auto__,c__26963__auto___29645,out){
return (function() {
var cljs$core$async$state_machine__26852__auto__ = null;
var cljs$core$async$state_machine__26852__auto____0 = (function (){
var statearr_29637 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29637[(0)] = cljs$core$async$state_machine__26852__auto__);

(statearr_29637[(1)] = (1));

return statearr_29637;
});
var cljs$core$async$state_machine__26852__auto____1 = (function (state_29611){
while(true){
var ret_value__26853__auto__ = (function (){try{while(true){
var result__26854__auto__ = switch__26851__auto__.call(null,state_29611);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26854__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26854__auto__;
}
break;
}
}catch (e29638){if((e29638 instanceof Object)){
var ex__26855__auto__ = e29638;
var statearr_29639_29660 = state_29611;
(statearr_29639_29660[(5)] = ex__26855__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29611);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29638;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29661 = state_29611;
state_29611 = G__29661;
continue;
} else {
return ret_value__26853__auto__;
}
break;
}
});
cljs$core$async$state_machine__26852__auto__ = function(state_29611){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26852__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26852__auto____1.call(this,state_29611);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26852__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26852__auto____0;
cljs$core$async$state_machine__26852__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26852__auto____1;
return cljs$core$async$state_machine__26852__auto__;
})()
;})(switch__26851__auto__,c__26963__auto___29645,out))
})();
var state__26965__auto__ = (function (){var statearr_29640 = f__26964__auto__.call(null);
(statearr_29640[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26963__auto___29645);

return statearr_29640;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26965__auto__);
});})(c__26963__auto___29645,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args29662 = [];
var len__25865__auto___29736 = arguments.length;
var i__25866__auto___29737 = (0);
while(true){
if((i__25866__auto___29737 < len__25865__auto___29736)){
args29662.push((arguments[i__25866__auto___29737]));

var G__29738 = (i__25866__auto___29737 + (1));
i__25866__auto___29737 = G__29738;
continue;
} else {
}
break;
}

var G__29664 = args29662.length;
switch (G__29664) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29662.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__26963__auto___29740 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26963__auto___29740,out){
return (function (){
var f__26964__auto__ = (function (){var switch__26851__auto__ = ((function (c__26963__auto___29740,out){
return (function (state_29706){
var state_val_29707 = (state_29706[(1)]);
if((state_val_29707 === (7))){
var inst_29702 = (state_29706[(2)]);
var state_29706__$1 = state_29706;
var statearr_29708_29741 = state_29706__$1;
(statearr_29708_29741[(2)] = inst_29702);

(statearr_29708_29741[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29707 === (1))){
var inst_29665 = [];
var inst_29666 = inst_29665;
var inst_29667 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_29706__$1 = (function (){var statearr_29709 = state_29706;
(statearr_29709[(7)] = inst_29666);

(statearr_29709[(8)] = inst_29667);

return statearr_29709;
})();
var statearr_29710_29742 = state_29706__$1;
(statearr_29710_29742[(2)] = null);

(statearr_29710_29742[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29707 === (4))){
var inst_29670 = (state_29706[(9)]);
var inst_29670__$1 = (state_29706[(2)]);
var inst_29671 = (inst_29670__$1 == null);
var inst_29672 = cljs.core.not.call(null,inst_29671);
var state_29706__$1 = (function (){var statearr_29711 = state_29706;
(statearr_29711[(9)] = inst_29670__$1);

return statearr_29711;
})();
if(inst_29672){
var statearr_29712_29743 = state_29706__$1;
(statearr_29712_29743[(1)] = (5));

} else {
var statearr_29713_29744 = state_29706__$1;
(statearr_29713_29744[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29707 === (15))){
var inst_29696 = (state_29706[(2)]);
var state_29706__$1 = state_29706;
var statearr_29714_29745 = state_29706__$1;
(statearr_29714_29745[(2)] = inst_29696);

(statearr_29714_29745[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29707 === (13))){
var state_29706__$1 = state_29706;
var statearr_29715_29746 = state_29706__$1;
(statearr_29715_29746[(2)] = null);

(statearr_29715_29746[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29707 === (6))){
var inst_29666 = (state_29706[(7)]);
var inst_29691 = inst_29666.length;
var inst_29692 = (inst_29691 > (0));
var state_29706__$1 = state_29706;
if(cljs.core.truth_(inst_29692)){
var statearr_29716_29747 = state_29706__$1;
(statearr_29716_29747[(1)] = (12));

} else {
var statearr_29717_29748 = state_29706__$1;
(statearr_29717_29748[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29707 === (3))){
var inst_29704 = (state_29706[(2)]);
var state_29706__$1 = state_29706;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29706__$1,inst_29704);
} else {
if((state_val_29707 === (12))){
var inst_29666 = (state_29706[(7)]);
var inst_29694 = cljs.core.vec.call(null,inst_29666);
var state_29706__$1 = state_29706;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29706__$1,(15),out,inst_29694);
} else {
if((state_val_29707 === (2))){
var state_29706__$1 = state_29706;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29706__$1,(4),ch);
} else {
if((state_val_29707 === (11))){
var inst_29674 = (state_29706[(10)]);
var inst_29670 = (state_29706[(9)]);
var inst_29684 = (state_29706[(2)]);
var inst_29685 = [];
var inst_29686 = inst_29685.push(inst_29670);
var inst_29666 = inst_29685;
var inst_29667 = inst_29674;
var state_29706__$1 = (function (){var statearr_29718 = state_29706;
(statearr_29718[(7)] = inst_29666);

(statearr_29718[(11)] = inst_29684);

(statearr_29718[(8)] = inst_29667);

(statearr_29718[(12)] = inst_29686);

return statearr_29718;
})();
var statearr_29719_29749 = state_29706__$1;
(statearr_29719_29749[(2)] = null);

(statearr_29719_29749[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29707 === (9))){
var inst_29666 = (state_29706[(7)]);
var inst_29682 = cljs.core.vec.call(null,inst_29666);
var state_29706__$1 = state_29706;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29706__$1,(11),out,inst_29682);
} else {
if((state_val_29707 === (5))){
var inst_29674 = (state_29706[(10)]);
var inst_29667 = (state_29706[(8)]);
var inst_29670 = (state_29706[(9)]);
var inst_29674__$1 = f.call(null,inst_29670);
var inst_29675 = cljs.core._EQ_.call(null,inst_29674__$1,inst_29667);
var inst_29676 = cljs.core.keyword_identical_QMARK_.call(null,inst_29667,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_29677 = (inst_29675) || (inst_29676);
var state_29706__$1 = (function (){var statearr_29720 = state_29706;
(statearr_29720[(10)] = inst_29674__$1);

return statearr_29720;
})();
if(cljs.core.truth_(inst_29677)){
var statearr_29721_29750 = state_29706__$1;
(statearr_29721_29750[(1)] = (8));

} else {
var statearr_29722_29751 = state_29706__$1;
(statearr_29722_29751[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29707 === (14))){
var inst_29699 = (state_29706[(2)]);
var inst_29700 = cljs.core.async.close_BANG_.call(null,out);
var state_29706__$1 = (function (){var statearr_29724 = state_29706;
(statearr_29724[(13)] = inst_29699);

return statearr_29724;
})();
var statearr_29725_29752 = state_29706__$1;
(statearr_29725_29752[(2)] = inst_29700);

(statearr_29725_29752[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29707 === (10))){
var inst_29689 = (state_29706[(2)]);
var state_29706__$1 = state_29706;
var statearr_29726_29753 = state_29706__$1;
(statearr_29726_29753[(2)] = inst_29689);

(statearr_29726_29753[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29707 === (8))){
var inst_29666 = (state_29706[(7)]);
var inst_29674 = (state_29706[(10)]);
var inst_29670 = (state_29706[(9)]);
var inst_29679 = inst_29666.push(inst_29670);
var tmp29723 = inst_29666;
var inst_29666__$1 = tmp29723;
var inst_29667 = inst_29674;
var state_29706__$1 = (function (){var statearr_29727 = state_29706;
(statearr_29727[(14)] = inst_29679);

(statearr_29727[(7)] = inst_29666__$1);

(statearr_29727[(8)] = inst_29667);

return statearr_29727;
})();
var statearr_29728_29754 = state_29706__$1;
(statearr_29728_29754[(2)] = null);

(statearr_29728_29754[(1)] = (2));


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
});})(c__26963__auto___29740,out))
;
return ((function (switch__26851__auto__,c__26963__auto___29740,out){
return (function() {
var cljs$core$async$state_machine__26852__auto__ = null;
var cljs$core$async$state_machine__26852__auto____0 = (function (){
var statearr_29732 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29732[(0)] = cljs$core$async$state_machine__26852__auto__);

(statearr_29732[(1)] = (1));

return statearr_29732;
});
var cljs$core$async$state_machine__26852__auto____1 = (function (state_29706){
while(true){
var ret_value__26853__auto__ = (function (){try{while(true){
var result__26854__auto__ = switch__26851__auto__.call(null,state_29706);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26854__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26854__auto__;
}
break;
}
}catch (e29733){if((e29733 instanceof Object)){
var ex__26855__auto__ = e29733;
var statearr_29734_29755 = state_29706;
(statearr_29734_29755[(5)] = ex__26855__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29706);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29733;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26853__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29756 = state_29706;
state_29706 = G__29756;
continue;
} else {
return ret_value__26853__auto__;
}
break;
}
});
cljs$core$async$state_machine__26852__auto__ = function(state_29706){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26852__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26852__auto____1.call(this,state_29706);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26852__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26852__auto____0;
cljs$core$async$state_machine__26852__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26852__auto____1;
return cljs$core$async$state_machine__26852__auto__;
})()
;})(switch__26851__auto__,c__26963__auto___29740,out))
})();
var state__26965__auto__ = (function (){var statearr_29735 = f__26964__auto__.call(null);
(statearr_29735[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26963__auto___29740);

return statearr_29735;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26965__auto__);
});})(c__26963__auto___29740,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1476131795278