var xn=Object.create;var N=Object.defineProperty,wn=Object.defineProperties,bn=Object.getOwnPropertyDescriptor,vn=Object.getOwnPropertyDescriptors,En=Object.getOwnPropertyNames,Te=Object.getOwnPropertySymbols,In=Object.getPrototypeOf,Ce=Object.prototype.hasOwnProperty,Tn=Object.prototype.propertyIsEnumerable;var Pe=(e,t,n)=>t in e?N(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,f=(e,t)=>{for(var n in t||(t={}))Ce.call(t,n)&&Pe(e,n,t[n]);if(Te)for(var n of Te(t))Tn.call(t,n)&&Pe(e,n,t[n]);return e},v=(e,t)=>wn(e,vn(t)),Ge=e=>N(e,"__esModule",{value:!0});var c=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),Pn=(e,t)=>{for(var n in t)N(e,n,{get:t[n],enumerable:!0})},Ae=(e,t,n,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of En(t))!Ce.call(e,s)&&(n||s!=="default")&&N(e,s,{get:()=>t[s],enumerable:!(r=bn(t,s))||r.enumerable});return e},Re=(e,t)=>Ae(Ge(N(e!=null?xn(In(e)):{},"default",!t&&e&&e.__esModule?{get:()=>e.default,enumerable:!0}:{value:e,enumerable:!0})),e),Cn=(e=>(t,n)=>e&&e.get(t)||(n=Ae(Ge({}),t,1),e&&e.set(t,n),n))(typeof WeakMap!="undefined"?new WeakMap:0);var $e=c((Cs,_e)=>{_e.exports=Ne;Ne.sync=An;var Oe=require("fs");function Gn(e,t){var n=t.pathExt!==void 0?t.pathExt:process.env.PATHEXT;if(!n||(n=n.split(";"),n.indexOf("")!==-1))return!0;for(var r=0;r<n.length;r++){var s=n[r].toLowerCase();if(s&&e.substr(-s.length).toLowerCase()===s)return!0}return!1}function qe(e,t,n){return!e.isSymbolicLink()&&!e.isFile()?!1:Gn(t,n)}function Ne(e,t,n){Oe.stat(e,function(r,s){n(r,r?!1:qe(s,e,t))})}function An(e,t){return qe(Oe.statSync(e),e,t)}});var Le=c((Gs,Fe)=>{Fe.exports=ke;ke.sync=Rn;var Me=require("fs");function ke(e,t,n){Me.stat(e,function(r,s){n(r,r?!1:Be(s,t))})}function Rn(e,t){return Be(Me.statSync(e),t)}function Be(e,t){return e.isFile()&&On(e,t)}function On(e,t){var n=e.mode,r=e.uid,s=e.gid,o=t.uid!==void 0?t.uid:process.getuid&&process.getuid(),i=t.gid!==void 0?t.gid:process.getgid&&process.getgid(),a=parseInt("100",8),l=parseInt("010",8),d=parseInt("001",8),p=a|l,y=n&d||n&l&&s===i||n&a&&r===o||n&p&&o===0;return y}});var Ue=c((Rs,je)=>{var As=require("fs"),j;process.platform==="win32"||global.TESTING_WINDOWS?j=$e():j=Le();je.exports=J;J.sync=qn;function J(e,t,n){if(typeof t=="function"&&(n=t,t={}),!n){if(typeof Promise!="function")throw new TypeError("callback not provided");return new Promise(function(r,s){J(e,t||{},function(o,i){o?s(o):r(i)})})}j(e,t||{},function(r,s){r&&(r.code==="EACCES"||t&&t.ignoreErrors)&&(r=null,s=!1),n(r,s)})}function qn(e,t){try{return j.sync(e,t||{})}catch(n){if(t&&t.ignoreErrors||n.code==="EACCES")return!1;throw n}}});var ze=c((Os,We)=>{var T=process.platform==="win32"||process.env.OSTYPE==="cygwin"||process.env.OSTYPE==="msys",De=require("path"),Nn=T?";":":",He=Ue(),Xe=e=>Object.assign(new Error(`not found: ${e}`),{code:"ENOENT"}),Ke=(e,t)=>{let n=t.colon||Nn,r=e.match(/\//)||T&&e.match(/\\/)?[""]:[...T?[process.cwd()]:[],...(t.path||process.env.PATH||"").split(n)],s=T?t.pathExt||process.env.PATHEXT||".EXE;.CMD;.BAT;.COM":"",o=T?s.split(n):[""];return T&&e.indexOf(".")!==-1&&o[0]!==""&&o.unshift(""),{pathEnv:r,pathExt:o,pathExtExe:s}},Ve=(e,t,n)=>{typeof t=="function"&&(n=t,t={}),t||(t={});let{pathEnv:r,pathExt:s,pathExtExe:o}=Ke(e,t),i=[],a=d=>new Promise((p,y)=>{if(d===r.length)return t.all&&i.length?p(i):y(Xe(e));let S=r[d],g=/^".*"$/.test(S)?S.slice(1,-1):S,x=De.join(g,e),w=!g&&/^\.[\\\/]/.test(e)?e.slice(0,2)+x:x;p(l(w,d,0))}),l=(d,p,y)=>new Promise((S,g)=>{if(y===s.length)return S(a(p+1));let x=s[y];He(d+x,{pathExt:o},(w,I)=>{if(!w&&I)if(t.all)i.push(d+x);else return S(d+x);return S(l(d,p,y+1))})});return n?a(0).then(d=>n(null,d),n):a(0)},_n=(e,t)=>{t=t||{};let{pathEnv:n,pathExt:r,pathExtExe:s}=Ke(e,t),o=[];for(let i=0;i<n.length;i++){let a=n[i],l=/^".*"$/.test(a)?a.slice(1,-1):a,d=De.join(l,e),p=!l&&/^\.[\\\/]/.test(e)?e.slice(0,2)+d:d;for(let y=0;y<r.length;y++){let S=p+r[y];try{if(He.sync(S,{pathExt:s}))if(t.all)o.push(S);else return S}catch{}}}if(t.all&&o.length)return o;if(t.nothrow)return null;throw Xe(e)};We.exports=Ve;Ve.sync=_n});var te=c((qs,ee)=>{"use strict";var Ye=(e={})=>{let t=e.env||process.env;return(e.platform||process.platform)!=="win32"?"PATH":Object.keys(t).reverse().find(r=>r.toUpperCase()==="PATH")||"Path"};ee.exports=Ye;ee.exports.default=Ye});var et=c((Ns,Je)=>{"use strict";var Qe=require("path"),$n=ze(),Mn=te();function Ze(e,t){let n=e.options.env||process.env,r=process.cwd(),s=e.options.cwd!=null,o=s&&process.chdir!==void 0&&!process.chdir.disabled;if(o)try{process.chdir(e.options.cwd)}catch{}let i;try{i=$n.sync(e.command,{path:n[Mn({env:n})],pathExt:t?Qe.delimiter:void 0})}catch{}finally{o&&process.chdir(r)}return i&&(i=Qe.resolve(s?e.options.cwd:"",i)),i}function kn(e){return Ze(e)||Ze(e,!0)}Je.exports=kn});var tt=c((_s,re)=>{"use strict";var ne=/([()\][%!^"`<>&|;, *?])/g;function Bn(e){return e=e.replace(ne,"^$1"),e}function Fn(e,t){return e=`${e}`,e=e.replace(/(\\*)"/g,'$1$1\\"'),e=e.replace(/(\\*)$/,"$1$1"),e=`"${e}"`,e=e.replace(ne,"^$1"),t&&(e=e.replace(ne,"^$1")),e}re.exports.command=Bn;re.exports.argument=Fn});var rt=c(($s,nt)=>{"use strict";nt.exports=/^#!(.*)/});var ot=c((Ms,st)=>{"use strict";var Ln=rt();st.exports=(e="")=>{let t=e.match(Ln);if(!t)return null;let[n,r]=t[0].replace(/#! ?/,"").split(" "),s=n.split("/").pop();return s==="env"?r:r?`${s} ${r}`:s}});var at=c((ks,it)=>{"use strict";var se=require("fs"),jn=ot();function Un(e){let n=Buffer.alloc(150),r;try{r=se.openSync(e,"r"),se.readSync(r,n,0,150,0),se.closeSync(r)}catch{}return jn(n.toString())}it.exports=Un});var dt=c((Bs,lt)=>{"use strict";var Dn=require("path"),ct=et(),ut=tt(),Hn=at(),Xn=process.platform==="win32",Kn=/\.(?:com|exe)$/i,Vn=/node_modules[\\/].bin[\\/][^\\/]+\.cmd$/i;function Wn(e){e.file=ct(e);let t=e.file&&Hn(e.file);return t?(e.args.unshift(e.file),e.command=t,ct(e)):e.file}function zn(e){if(!Xn)return e;let t=Wn(e),n=!Kn.test(t);if(e.options.forceShell||n){let r=Vn.test(t);e.command=Dn.normalize(e.command),e.command=ut.command(e.command),e.args=e.args.map(o=>ut.argument(o,r));let s=[e.command].concat(e.args).join(" ");e.args=["/d","/s","/c",`"${s}"`],e.command=process.env.comspec||"cmd.exe",e.options.windowsVerbatimArguments=!0}return e}function Yn(e,t,n){t&&!Array.isArray(t)&&(n=t,t=null),t=t?t.slice(0):[],n=Object.assign({},n);let r={command:e,args:t,options:n,file:void 0,original:{command:e,args:t}};return n.shell?r:zn(r)}lt.exports=Yn});var mt=c((Fs,pt)=>{"use strict";var oe=process.platform==="win32";function ie(e,t){return Object.assign(new Error(`${t} ${e.command} ENOENT`),{code:"ENOENT",errno:"ENOENT",syscall:`${t} ${e.command}`,path:e.command,spawnargs:e.args})}function Qn(e,t){if(!oe)return;let n=e.emit;e.emit=function(r,s){if(r==="exit"){let o=ft(s,t,"spawn");if(o)return n.call(e,"error",o)}return n.apply(e,arguments)}}function ft(e,t){return oe&&e===1&&!t.file?ie(t.original,"spawn"):null}function Zn(e,t){return oe&&e===1&&!t.file?ie(t.original,"spawnSync"):null}pt.exports={hookChildProcess:Qn,verifyENOENT:ft,verifyENOENTSync:Zn,notFoundError:ie}});var yt=c((Ls,P)=>{"use strict";var ht=require("child_process"),ae=dt(),ce=mt();function St(e,t,n){let r=ae(e,t,n),s=ht.spawn(r.command,r.args,r.options);return ce.hookChildProcess(s,r),s}function Jn(e,t,n){let r=ae(e,t,n),s=ht.spawnSync(r.command,r.args,r.options);return s.error=s.error||ce.verifyENOENTSync(s.status,r),s}P.exports=St;P.exports.spawn=St;P.exports.sync=Jn;P.exports._parse=ae;P.exports._enoent=ce});var xt=c((js,gt)=>{"use strict";gt.exports=e=>{let t=typeof e=="string"?`
`:`
`.charCodeAt(),n=typeof e=="string"?"\r":"\r".charCodeAt();return e[e.length-1]===t&&(e=e.slice(0,e.length-1)),e[e.length-1]===n&&(e=e.slice(0,e.length-1)),e}});var vt=c((Us,$)=>{"use strict";var _=require("path"),wt=te(),bt=e=>{e=f({cwd:process.cwd(),path:process.env[wt()],execPath:process.execPath},e);let t,n=_.resolve(e.cwd),r=[];for(;t!==n;)r.push(_.join(n,"node_modules/.bin")),t=n,n=_.resolve(n,"..");let s=_.resolve(e.cwd,e.execPath,"..");return r.push(s),r.concat(e.path).join(_.delimiter)};$.exports=bt;$.exports.default=bt;$.exports.env=e=>{e=f({env:process.env},e);let t=f({},e.env),n=wt({env:t});return e.path=t[n],t[n]=$.exports(e),t}});var It=c((Ds,ue)=>{"use strict";var Et=(e,t)=>{for(let n of Reflect.ownKeys(t))Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n));return e};ue.exports=Et;ue.exports.default=Et});var Pt=c((Hs,D)=>{"use strict";var er=It(),U=new WeakMap,Tt=(e,t={})=>{if(typeof e!="function")throw new TypeError("Expected a function");let n,r=0,s=e.displayName||e.name||"<anonymous>",o=function(...i){if(U.set(o,++r),r===1)n=e.apply(this,i),e=null;else if(t.throw===!0)throw new Error(`Function \`${s}\` can only be called once`);return n};return er(o,e),U.set(o,r),o};D.exports=Tt;D.exports.default=Tt;D.exports.callCount=e=>{if(!U.has(e))throw new Error(`The given function \`${e.name}\` is not wrapped by the \`onetime\` package`);return U.get(e)}});var Ct=c(H=>{"use strict";Object.defineProperty(H,"__esModule",{value:!0});H.SIGNALS=void 0;var tr=[{name:"SIGHUP",number:1,action:"terminate",description:"Terminal closed",standard:"posix"},{name:"SIGINT",number:2,action:"terminate",description:"User interruption with CTRL-C",standard:"ansi"},{name:"SIGQUIT",number:3,action:"core",description:"User interruption with CTRL-\\",standard:"posix"},{name:"SIGILL",number:4,action:"core",description:"Invalid machine instruction",standard:"ansi"},{name:"SIGTRAP",number:5,action:"core",description:"Debugger breakpoint",standard:"posix"},{name:"SIGABRT",number:6,action:"core",description:"Aborted",standard:"ansi"},{name:"SIGIOT",number:6,action:"core",description:"Aborted",standard:"bsd"},{name:"SIGBUS",number:7,action:"core",description:"Bus error due to misaligned, non-existing address or paging error",standard:"bsd"},{name:"SIGEMT",number:7,action:"terminate",description:"Command should be emulated but is not implemented",standard:"other"},{name:"SIGFPE",number:8,action:"core",description:"Floating point arithmetic error",standard:"ansi"},{name:"SIGKILL",number:9,action:"terminate",description:"Forced termination",standard:"posix",forced:!0},{name:"SIGUSR1",number:10,action:"terminate",description:"Application-specific signal",standard:"posix"},{name:"SIGSEGV",number:11,action:"core",description:"Segmentation fault",standard:"ansi"},{name:"SIGUSR2",number:12,action:"terminate",description:"Application-specific signal",standard:"posix"},{name:"SIGPIPE",number:13,action:"terminate",description:"Broken pipe or socket",standard:"posix"},{name:"SIGALRM",number:14,action:"terminate",description:"Timeout or timer",standard:"posix"},{name:"SIGTERM",number:15,action:"terminate",description:"Termination",standard:"ansi"},{name:"SIGSTKFLT",number:16,action:"terminate",description:"Stack is empty or overflowed",standard:"other"},{name:"SIGCHLD",number:17,action:"ignore",description:"Child process terminated, paused or unpaused",standard:"posix"},{name:"SIGCLD",number:17,action:"ignore",description:"Child process terminated, paused or unpaused",standard:"other"},{name:"SIGCONT",number:18,action:"unpause",description:"Unpaused",standard:"posix",forced:!0},{name:"SIGSTOP",number:19,action:"pause",description:"Paused",standard:"posix",forced:!0},{name:"SIGTSTP",number:20,action:"pause",description:'Paused using CTRL-Z or "suspend"',standard:"posix"},{name:"SIGTTIN",number:21,action:"pause",description:"Background process cannot read terminal input",standard:"posix"},{name:"SIGBREAK",number:21,action:"terminate",description:"User interruption with CTRL-BREAK",standard:"other"},{name:"SIGTTOU",number:22,action:"pause",description:"Background process cannot write to terminal output",standard:"posix"},{name:"SIGURG",number:23,action:"ignore",description:"Socket received out-of-band data",standard:"bsd"},{name:"SIGXCPU",number:24,action:"core",description:"Process timed out",standard:"bsd"},{name:"SIGXFSZ",number:25,action:"core",description:"File too big",standard:"bsd"},{name:"SIGVTALRM",number:26,action:"terminate",description:"Timeout or timer",standard:"bsd"},{name:"SIGPROF",number:27,action:"terminate",description:"Timeout or timer",standard:"bsd"},{name:"SIGWINCH",number:28,action:"ignore",description:"Terminal window size changed",standard:"bsd"},{name:"SIGIO",number:29,action:"terminate",description:"I/O is available",standard:"other"},{name:"SIGPOLL",number:29,action:"terminate",description:"Watched event",standard:"other"},{name:"SIGINFO",number:29,action:"ignore",description:"Request for process information",standard:"other"},{name:"SIGPWR",number:30,action:"terminate",description:"Device running out of power",standard:"systemv"},{name:"SIGSYS",number:31,action:"core",description:"Invalid system call",standard:"other"},{name:"SIGUNUSED",number:31,action:"terminate",description:"Invalid system call",standard:"other"}];H.SIGNALS=tr});var le=c(C=>{"use strict";Object.defineProperty(C,"__esModule",{value:!0});C.SIGRTMAX=C.getRealtimeSignals=void 0;var nr=function(){let e=At-Gt+1;return Array.from({length:e},rr)};C.getRealtimeSignals=nr;var rr=function(e,t){return{name:`SIGRT${t+1}`,number:Gt+t,action:"terminate",description:"Application-specific signal (realtime)",standard:"posix"}},Gt=34,At=64;C.SIGRTMAX=At});var Rt=c(X=>{"use strict";Object.defineProperty(X,"__esModule",{value:!0});X.getSignals=void 0;var sr=require("os"),or=Ct(),ir=le(),ar=function(){let e=(0,ir.getRealtimeSignals)();return[...or.SIGNALS,...e].map(cr)};X.getSignals=ar;var cr=function({name:e,number:t,description:n,action:r,forced:s=!1,standard:o}){let{signals:{[e]:i}}=sr.constants,a=i!==void 0;return{name:e,number:a?i:t,description:n,supported:a,action:r,forced:s,standard:o}}});var qt=c(G=>{"use strict";Object.defineProperty(G,"__esModule",{value:!0});G.signalsByNumber=G.signalsByName=void 0;var ur=require("os"),Ot=Rt(),lr=le(),dr=function(){return(0,Ot.getSignals)().reduce(fr,{})},fr=function(e,{name:t,number:n,description:r,supported:s,action:o,forced:i,standard:a}){return v(f({},e),{[t]:{name:t,number:n,description:r,supported:s,action:o,forced:i,standard:a}})},pr=dr();G.signalsByName=pr;var mr=function(){let e=(0,Ot.getSignals)(),t=lr.SIGRTMAX+1,n=Array.from({length:t},(r,s)=>hr(s,e));return Object.assign({},...n)},hr=function(e,t){let n=Sr(e,t);if(n===void 0)return{};let{name:r,description:s,supported:o,action:i,forced:a,standard:l}=n;return{[e]:{name:r,number:e,description:s,supported:o,action:i,forced:a,standard:l}}},Sr=function(e,t){let n=t.find(({name:r})=>ur.constants.signals[r]===e);return n!==void 0?n:t.find(r=>r.number===e)},yr=mr();G.signalsByNumber=yr});var _t=c((zs,Nt)=>{"use strict";var{signalsByName:gr}=qt(),xr=({timedOut:e,timeout:t,errorCode:n,signal:r,signalDescription:s,exitCode:o,isCanceled:i})=>e?`timed out after ${t} milliseconds`:i?"was canceled":n!==void 0?`failed with ${n}`:r!==void 0?`was killed with ${r} (${s})`:o!==void 0?`failed with exit code ${o}`:"failed",wr=({stdout:e,stderr:t,all:n,error:r,signal:s,exitCode:o,command:i,escapedCommand:a,timedOut:l,isCanceled:d,killed:p,parsed:{options:{timeout:y}}})=>{o=o===null?void 0:o,s=s===null?void 0:s;let S=s===void 0?void 0:gr[s].description,g=r&&r.code,w=`Command ${xr({timedOut:l,timeout:y,errorCode:g,signal:s,signalDescription:S,exitCode:o,isCanceled:d})}: ${i}`,I=Object.prototype.toString.call(r)==="[object Error]",F=I?`${w}
${r.message}`:w,L=[F,t,e].filter(Boolean).join(`
`);return I?(r.originalMessage=r.message,r.message=L):r=new Error(L),r.shortMessage=F,r.command=i,r.escapedCommand=a,r.exitCode=o,r.signal=s,r.signalDescription=S,r.stdout=e,r.stderr=t,n!==void 0&&(r.all=n),"bufferedData"in r&&delete r.bufferedData,r.failed=!0,r.timedOut=Boolean(l),r.isCanceled=d,r.killed=p&&!l,r};Nt.exports=wr});var Mt=c((Ys,de)=>{"use strict";var K=["stdin","stdout","stderr"],br=e=>K.some(t=>e[t]!==void 0),$t=e=>{if(!e)return;let{stdio:t}=e;if(t===void 0)return K.map(r=>e[r]);if(br(e))throw new Error(`It's not possible to provide \`stdio\` in combination with one of ${K.map(r=>`\`${r}\``).join(", ")}`);if(typeof t=="string")return t;if(!Array.isArray(t))throw new TypeError(`Expected \`stdio\` to be of type \`string\` or \`Array\`, got \`${typeof t}\``);let n=Math.max(t.length,K.length);return Array.from({length:n},(r,s)=>t[s])};de.exports=$t;de.exports.node=e=>{let t=$t(e);return t==="ipc"?"ipc":t===void 0||typeof t=="string"?[t,t,t,"ipc"]:t.includes("ipc")?t:[...t,"ipc"]}});var kt=c((Qs,V)=>{V.exports=["SIGABRT","SIGALRM","SIGHUP","SIGINT","SIGTERM"];process.platform!=="win32"&&V.exports.push("SIGVTALRM","SIGXCPU","SIGXFSZ","SIGUSR2","SIGTRAP","SIGSYS","SIGQUIT","SIGIOT");process.platform==="linux"&&V.exports.push("SIGIO","SIGPOLL","SIGPWR","SIGSTKFLT","SIGUNUSED")});var Ut=c((Zs,O)=>{var u=global.process;typeof u!="object"||!u?O.exports=function(){}:(Bt=require("assert"),A=kt(),Ft=/^win/i.test(u.platform),M=require("events"),typeof M!="function"&&(M=M.EventEmitter),u.__signal_exit_emitter__?m=u.__signal_exit_emitter__:(m=u.__signal_exit_emitter__=new M,m.count=0,m.emitted={}),m.infinite||(m.setMaxListeners(1/0),m.infinite=!0),O.exports=function(e,t){if(global.process===u){Bt.equal(typeof e,"function","a callback must be provided for exit handler"),R===!1&&fe();var n="exit";t&&t.alwaysLast&&(n="afterexit");var r=function(){m.removeListener(n,e),m.listeners("exit").length===0&&m.listeners("afterexit").length===0&&W()};return m.on(n,e),r}},W=function(){!R||global.process!==u||(R=!1,A.forEach(function(t){try{u.removeListener(t,z[t])}catch{}}),u.emit=Y,u.reallyExit=pe,m.count-=1)},O.exports.unload=W,E=function(t,n,r){m.emitted[t]||(m.emitted[t]=!0,m.emit(t,n,r))},z={},A.forEach(function(e){z[e]=function(){if(u===global.process){var n=u.listeners(e);n.length===m.count&&(W(),E("exit",null,e),E("afterexit",null,e),Ft&&e==="SIGHUP"&&(e="SIGINT"),u.kill(u.pid,e))}}}),O.exports.signals=function(){return A},R=!1,fe=function(){R||u!==global.process||(R=!0,m.count+=1,A=A.filter(function(t){try{return u.on(t,z[t]),!0}catch{return!1}}),u.emit=jt,u.reallyExit=Lt)},O.exports.load=fe,pe=u.reallyExit,Lt=function(t){u===global.process&&(u.exitCode=t||0,E("exit",u.exitCode,null),E("afterexit",u.exitCode,null),pe.call(u,u.exitCode))},Y=u.emit,jt=function(t,n){if(t==="exit"&&u===global.process){n!==void 0&&(u.exitCode=n);var r=Y.apply(this,arguments);return E("exit",u.exitCode,null),E("afterexit",u.exitCode,null),r}else return Y.apply(this,arguments)});var Bt,A,Ft,M,m,W,E,z,R,fe,pe,Lt,Y,jt});var Ht=c((Js,Dt)=>{"use strict";var vr=require("os"),Er=Ut(),Ir=1e3*5,Tr=(e,t="SIGTERM",n={})=>{let r=e(t);return Pr(e,t,n,r),r},Pr=(e,t,n,r)=>{if(!Cr(t,n,r))return;let s=Ar(n),o=setTimeout(()=>{e("SIGKILL")},s);o.unref&&o.unref()},Cr=(e,{forceKillAfterTimeout:t},n)=>Gr(e)&&t!==!1&&n,Gr=e=>e===vr.constants.signals.SIGTERM||typeof e=="string"&&e.toUpperCase()==="SIGTERM",Ar=({forceKillAfterTimeout:e=!0})=>{if(e===!0)return Ir;if(!Number.isFinite(e)||e<0)throw new TypeError(`Expected the \`forceKillAfterTimeout\` option to be a non-negative integer, got \`${e}\` (${typeof e})`);return e},Rr=(e,t)=>{e.kill()&&(t.isCanceled=!0)},Or=(e,t,n)=>{e.kill(t),n(Object.assign(new Error("Timed out"),{timedOut:!0,signal:t}))},qr=(e,{timeout:t,killSignal:n="SIGTERM"},r)=>{if(t===0||t===void 0)return r;let s,o=new Promise((a,l)=>{s=setTimeout(()=>{Or(e,n,l)},t)}),i=r.finally(()=>{clearTimeout(s)});return Promise.race([o,i])},Nr=({timeout:e})=>{if(e!==void 0&&(!Number.isFinite(e)||e<0))throw new TypeError(`Expected the \`timeout\` option to be a non-negative integer, got \`${e}\` (${typeof e})`)},_r=async(e,{cleanup:t,detached:n},r)=>{if(!t||n)return r;let s=Er(()=>{e.kill()});return r.finally(()=>{s()})};Dt.exports={spawnedKill:Tr,spawnedCancel:Rr,setupTimeout:qr,validateTimeout:Nr,setExitHandler:_r}});var Kt=c((eo,Xt)=>{"use strict";var b=e=>e!==null&&typeof e=="object"&&typeof e.pipe=="function";b.writable=e=>b(e)&&e.writable!==!1&&typeof e._write=="function"&&typeof e._writableState=="object";b.readable=e=>b(e)&&e.readable!==!1&&typeof e._read=="function"&&typeof e._readableState=="object";b.duplex=e=>b.writable(e)&&b.readable(e);b.transform=e=>b.duplex(e)&&typeof e._transform=="function";Xt.exports=b});var Wt=c((to,Vt)=>{"use strict";var{PassThrough:$r}=require("stream");Vt.exports=e=>{e=f({},e);let{array:t}=e,{encoding:n}=e,r=n==="buffer",s=!1;t?s=!(n||r):n=n||"utf8",r&&(n=null);let o=new $r({objectMode:s});n&&o.setEncoding(n);let i=0,a=[];return o.on("data",l=>{a.push(l),s?i=a.length:i+=l.length}),o.getBufferedValue=()=>t?a:r?Buffer.concat(a,i):a.join(""),o.getBufferedLength=()=>i,o}});var zt=c((no,k)=>{"use strict";var{constants:Mr}=require("buffer"),kr=require("stream"),{promisify:Br}=require("util"),Fr=Wt(),Lr=Br(kr.pipeline),me=class extends Error{constructor(){super("maxBuffer exceeded");this.name="MaxBufferError"}};async function he(e,t){if(!e)throw new Error("Expected a stream");t=f({maxBuffer:1/0},t);let{maxBuffer:n}=t,r=Fr(t);return await new Promise((s,o)=>{let i=a=>{a&&r.getBufferedLength()<=Mr.MAX_LENGTH&&(a.bufferedData=r.getBufferedValue()),o(a)};(async()=>{try{await Lr(e,r),s()}catch(a){i(a)}})(),r.on("data",()=>{r.getBufferedLength()>n&&i(new me)})}),r.getBufferedValue()}k.exports=he;k.exports.buffer=(e,t)=>he(e,v(f({},t),{encoding:"buffer"}));k.exports.array=(e,t)=>he(e,v(f({},t),{array:!0}));k.exports.MaxBufferError=me});var Qt=c((ro,Yt)=>{"use strict";var{PassThrough:jr}=require("stream");Yt.exports=function(){var e=[],t=new jr({objectMode:!0});return t.setMaxListeners(0),t.add=n,t.isEmpty=r,t.on("unpipe",s),Array.prototype.slice.call(arguments).forEach(n),t;function n(o){return Array.isArray(o)?(o.forEach(n),this):(e.push(o),o.once("end",s.bind(null,o)),o.once("error",t.emit.bind(t,"error")),o.pipe(t,{end:!1}),this)}function r(){return e.length==0}function s(o){e=e.filter(function(i){return i!==o}),!e.length&&t.readable&&t.end()}}});var tn=c((so,en)=>{"use strict";var Jt=Kt(),Zt=zt(),Ur=Qt(),Dr=(e,t)=>{t===void 0||e.stdin===void 0||(Jt(t)?t.pipe(e.stdin):e.stdin.end(t))},Hr=(e,{all:t})=>{if(!t||!e.stdout&&!e.stderr)return;let n=Ur();return e.stdout&&n.add(e.stdout),e.stderr&&n.add(e.stderr),n},Se=async(e,t)=>{if(!!e){e.destroy();try{return await t}catch(n){return n.bufferedData}}},ye=(e,{encoding:t,buffer:n,maxBuffer:r})=>{if(!(!e||!n))return t?Zt(e,{encoding:t,maxBuffer:r}):Zt.buffer(e,{maxBuffer:r})},Xr=async({stdout:e,stderr:t,all:n},{encoding:r,buffer:s,maxBuffer:o},i)=>{let a=ye(e,{encoding:r,buffer:s,maxBuffer:o}),l=ye(t,{encoding:r,buffer:s,maxBuffer:o}),d=ye(n,{encoding:r,buffer:s,maxBuffer:o*2});try{return await Promise.all([i,a,l,d])}catch(p){return Promise.all([{error:p,signal:p.signal,timedOut:p.timedOut},Se(e,a),Se(t,l),Se(n,d)])}},Kr=({input:e})=>{if(Jt(e))throw new TypeError("The `input` option cannot be a stream in sync mode")};en.exports={handleInput:Dr,makeAllStream:Hr,getSpawnedResult:Xr,validateInputSync:Kr}});var rn=c((oo,nn)=>{"use strict";var Vr=(async()=>{})().constructor.prototype,Wr=["then","catch","finally"].map(e=>[e,Reflect.getOwnPropertyDescriptor(Vr,e)]),zr=(e,t)=>{for(let[n,r]of Wr){let s=typeof t=="function"?(...o)=>Reflect.apply(r.value,t(),o):r.value.bind(t);Reflect.defineProperty(e,n,v(f({},r),{value:s}))}return e},Yr=e=>new Promise((t,n)=>{e.on("exit",(r,s)=>{t({exitCode:r,signal:s})}),e.on("error",r=>{n(r)}),e.stdin&&e.stdin.on("error",r=>{n(r)})});nn.exports={mergePromise:zr,getSpawnedPromise:Yr}});var an=c((io,on)=>{"use strict";var sn=(e,t=[])=>Array.isArray(t)?[e,...t]:[e],Qr=/^[\w.-]+$/,Zr=/"/g,Jr=e=>typeof e!="string"||Qr.test(e)?e:`"${e.replace(Zr,'\\"')}"`,es=(e,t)=>sn(e,t).join(" "),ts=(e,t)=>sn(e,t).map(n=>Jr(n)).join(" "),ns=/ +/g,rs=e=>{let t=[];for(let n of e.trim().split(ns)){let r=t[t.length-1];r&&r.endsWith("\\")?t[t.length-1]=`${r.slice(0,-1)} ${n}`:t.push(n)}return t};on.exports={joinCommand:es,getEscapedCommand:ts,parseCommand:rs}});var mn=c((ao,q)=>{"use strict";var ss=require("path"),ge=require("child_process"),os=yt(),is=xt(),as=vt(),cs=Pt(),Q=_t(),un=Mt(),{spawnedKill:us,spawnedCancel:ls,setupTimeout:ds,validateTimeout:fs,setExitHandler:ps}=Ht(),{handleInput:ms,getSpawnedResult:hs,makeAllStream:Ss,validateInputSync:ys}=tn(),{mergePromise:cn,getSpawnedPromise:gs}=rn(),{joinCommand:ln,parseCommand:dn,getEscapedCommand:fn}=an(),xs=1e3*1e3*100,ws=({env:e,extendEnv:t,preferLocal:n,localDir:r,execPath:s})=>{let o=t?f(f({},process.env),e):e;return n?as.env({env:o,cwd:r,execPath:s}):o},pn=(e,t,n={})=>{let r=os._parse(e,t,n);return e=r.command,t=r.args,n=r.options,n=f({maxBuffer:xs,buffer:!0,stripFinalNewline:!0,extendEnv:!0,preferLocal:!1,localDir:n.cwd||process.cwd(),execPath:process.execPath,encoding:"utf8",reject:!0,cleanup:!0,all:!1,windowsHide:!0},n),n.env=ws(n),n.stdio=un(n),process.platform==="win32"&&ss.basename(e,".exe")==="cmd"&&t.unshift("/q"),{file:e,args:t,options:n,parsed:r}},B=(e,t,n)=>typeof t!="string"&&!Buffer.isBuffer(t)?n===void 0?void 0:"":e.stripFinalNewline?is(t):t,Z=(e,t,n)=>{let r=pn(e,t,n),s=ln(e,t),o=fn(e,t);fs(r.options);let i;try{i=ge.spawn(r.file,r.args,r.options)}catch(g){let x=new ge.ChildProcess,w=Promise.reject(Q({error:g,stdout:"",stderr:"",all:"",command:s,escapedCommand:o,parsed:r,timedOut:!1,isCanceled:!1,killed:!1}));return cn(x,w)}let a=gs(i),l=ds(i,r.options,a),d=ps(i,r.options,l),p={isCanceled:!1};i.kill=us.bind(null,i.kill.bind(i)),i.cancel=ls.bind(null,i,p);let S=cs(async()=>{let[{error:g,exitCode:x,signal:w,timedOut:I},F,L,gn]=await hs(i,r.options,d),be=B(r.options,F),ve=B(r.options,L),Ee=B(r.options,gn);if(g||x!==0||w!==null){let Ie=Q({error:g,exitCode:x,signal:w,stdout:be,stderr:ve,all:Ee,command:s,escapedCommand:o,parsed:r,timedOut:I,isCanceled:p.isCanceled,killed:i.killed});if(!r.options.reject)return Ie;throw Ie}return{command:s,escapedCommand:o,exitCode:0,stdout:be,stderr:ve,all:Ee,failed:!1,timedOut:!1,isCanceled:!1,killed:!1}});return ms(i,r.options.input),i.all=Ss(i,r.options),cn(i,S)};q.exports=Z;q.exports.sync=(e,t,n)=>{let r=pn(e,t,n),s=ln(e,t),o=fn(e,t);ys(r.options);let i;try{i=ge.spawnSync(r.file,r.args,r.options)}catch(d){throw Q({error:d,stdout:"",stderr:"",all:"",command:s,escapedCommand:o,parsed:r,timedOut:!1,isCanceled:!1,killed:!1})}let a=B(r.options,i.stdout,i.error),l=B(r.options,i.stderr,i.error);if(i.error||i.status!==0||i.signal!==null){let d=Q({stdout:a,stderr:l,error:i.error,signal:i.signal,exitCode:i.status,command:s,escapedCommand:o,parsed:r,timedOut:i.error&&i.error.code==="ETIMEDOUT",isCanceled:!1,killed:i.signal!==null});if(!r.options.reject)return d;throw d}return{command:s,escapedCommand:o,exitCode:0,stdout:a,stderr:l,failed:!1,timedOut:!1,isCanceled:!1,killed:!1}};q.exports.command=(e,t)=>{let[n,...r]=dn(e);return Z(n,r,t)};q.exports.commandSync=(e,t)=>{let[n,...r]=dn(e);return Z.sync(n,r,t)};q.exports.node=(e,t,n={})=>{t&&!Array.isArray(t)&&typeof t=="object"&&(n=t,t=[]);let r=un.node(n),s=process.execArgv.filter(a=>!a.startsWith("--inspect")),{nodePath:o=process.execPath,nodeOptions:i=s}=n;return Z(o,[...i,e,...Array.isArray(t)?t:[]],v(f({},n),{stdin:void 0,stdout:void 0,stderr:void 0,stdio:r,shell:!1}))}});var Ts={};Pn(Ts,{default:()=>Is});var h=require("@raycast/api");var we=require("@raycast/api");var hn=Re(require("node:process"),1),Sn=Re(mn(),1);async function xe(e){if(hn.default.platform!=="darwin")throw new Error("macOS only");let{stdout:t}=await(0,Sn.default)("osascript",["-e",e]);return t}var bs=async e=>{try{await xe('do shell script "pgrep caffeinate"'),await(0,we.showHUD)("Your Mac is already caffeinated")}catch{xe(`do shell script "caffeinate -di${e?` ${e}`:""}"`),await(0,we.showHUD)("Your Mac is caffeinated")}},yn=bs;var vs={seconds:1,minutes:60,hours:60*60},Es=()=>_jsx(h.Form,{actions:_jsx(h.ActionPanel,null,_jsx(h.SubmitFormAction,{title:"Caffeinate",onSubmit:async({time:t,unit:n})=>{let r=Number.parseFloat(t);if(Number.isNaN(r)){await(0,h.showToast)(h.ToastStyle.Failure,"Invalid time");return}let s=vs[n]??1;await yn(`-t ${r*s}`),(0,h.popToRoot)()}}))},_jsx(h.Form.TextField,{id:"time",title:"Duration"}),_jsx(h.Form.Dropdown,{id:"unit",title:"Duration Unit",defaultValue:"minutes"},_jsx(h.Form.Dropdown.Item,{value:"seconds",title:"Seconds"}),_jsx(h.Form.Dropdown.Item,{value:"minutes",title:"Minutes"}),_jsx(h.Form.Dropdown.Item,{value:"hours",title:"Hours"}))),Is=Es;module.exports=Cn(Ts);0&&(module.exports={});
