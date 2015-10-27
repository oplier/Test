/*
 * CSE Deliver Modules - storage.2
 * Copyright 2013, Qubit Products
 * http://www.qubitproducts.com
 */
window.__qubit.amd.define("deliver-modules/storage/storage.2",[],function(){function a(a,b){b=b||{};var c=b.storageType||"sessionStorage",d="__qubit"+a,e=window[c];e[d]=e[d]||"{}";var f={get:function(a){try{var b=JSON.parse(e[d]);return b[a]}catch(c){}},set:function(a,b){try{var c=JSON.parse(e[d]);return c[a]=b,e[d]=JSON.stringify(c),!0}catch(f){return!1}},unset:function(a){try{var b=JSON.parse(e[d]);return b[a]?(delete b[a],e[d]=JSON.stringify(b),!0):!0}catch(c){return!1}},all:function(){var a;try{a=JSON.parse(e[d])}catch(b){a=null}return a},remove:function(){return e.removeItem(d)}};return f}return a});