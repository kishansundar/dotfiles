var gn=Object.create;var q=Object.defineProperty,xn=Object.defineProperties,yn=Object.getOwnPropertyDescriptor,bn=Object.getOwnPropertyDescriptors,wn=Object.getOwnPropertyNames,Ee=Object.getOwnPropertySymbols,vn=Object.getPrototypeOf,Te=Object.prototype.hasOwnProperty,En=Object.prototype.propertyIsEnumerable;var Ie=(e,t,n)=>t in e?q(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,f=(e,t)=>{for(var n in t||(t={}))Te.call(t,n)&&Ie(e,n,t[n]);if(Ee)for(var n of Ee(t))En.call(t,n)&&Ie(e,n,t[n]);return e},w=(e,t)=>xn(e,bn(t)),Pe=e=>q(e,"__esModule",{value:!0});var c=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),In=(e,t)=>{for(var n in t)q(e,n,{get:t[n],enumerable:!0})},Ge=(e,t,n,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of wn(t))!Te.call(e,s)&&(n||s!=="default")&&q(e,s,{get:()=>t[s],enumerable:!(r=yn(t,s))||r.enumerable});return e},Ce=(e,t)=>Ge(Pe(q(e!=null?gn(vn(e)):{},"default",!t&&e&&e.__esModule?{get:()=>e.default,enumerable:!0}:{value:e,enumerable:!0})),e),Tn=(e=>(t,n)=>e&&e.get(t)||(n=Ge(Pe({}),t,1),e&&e.set(t,n),n))(typeof WeakMap!="undefined"?new WeakMap:0);var Ne=c((Es,qe)=>{qe.exports=Oe;Oe.sync=Gn;var Ae=require("fs");function Pn(e,t){var n=t.pathExt!==void 0?t.pathExt:process.env.PATHEXT;if(!n||(n=n.split(";"),n.indexOf("")!==-1))return!0;for(var r=0;r<n.length;r++){var s=n[r].toLowerCase();if(s&&e.substr(-s.length).toLowerCase()===s)return!0}return!1}function Re(e,t,n){return!e.isSymbolicLink()&&!e.isFile()?!1:Pn(t,n)}function Oe(e,t,n){Ae.stat(e,function(r,s){n(r,r?!1:Re(s,e,t))})}function Gn(e,t){return Re(Ae.statSync(e),e,t)}});var Le=c((Is,Be)=>{Be.exports=$e;$e.sync=Cn;var _e=require("fs");function $e(e,t,n){_e.stat(e,function(r,s){n(r,r?!1:ke(s,t))})}function Cn(e,t){return ke(_e.statSync(e),t)}function ke(e,t){return e.isFile()&&An(e,t)}function An(e,t){var n=e.mode,r=e.uid,s=e.gid,o=t.uid!==void 0?t.uid:process.getuid&&process.getuid(),i=t.gid!==void 0?t.gid:process.getgid&&process.getgid(),a=parseInt("100",8),d=parseInt("010",8),l=parseInt("001",8),p=a|d,S=n&l||n&d&&s===i||n&a&&r===o||n&p&&o===0;return S}});var je=c((Ps,Me)=>{var Ts=require("fs"),j;process.platform==="win32"||global.TESTING_WINDOWS?j=Ne():j=Le();Me.exports=Z;Z.sync=Rn;function Z(e,t,n){if(typeof t=="function"&&(n=t,t={}),!n){if(typeof Promise!="function")throw new TypeError("callback not provided");return new Promise(function(r,s){Z(e,t||{},function(o,i){o?s(o):r(i)})})}j(e,t||{},function(r,s){r&&(r.code==="EACCES"||t&&t.ignoreErrors)&&(r=null,s=!1),n(r,s)})}function Rn(e,t){try{return j.sync(e,t||{})}catch(n){if(t&&t.ignoreErrors||n.code==="EACCES")return!1;throw n}}});var We=c((Gs,Ke)=>{var I=process.platform==="win32"||process.env.OSTYPE==="cygwin"||process.env.OSTYPE==="msys",Fe=require("path"),On=I?";":":",Ue=je(),De=e=>Object.assign(new Error(`not found: ${e}`),{code:"ENOENT"}),He=(e,t)=>{let n=t.colon||On,r=e.match(/\//)||I&&e.match(/\\/)?[""]:[...I?[process.cwd()]:[],...(t.path||process.env.PATH||"").split(n)],s=I?t.pathExt||process.env.PATHEXT||".EXE;.CMD;.BAT;.COM":"",o=I?s.split(n):[""];return I&&e.indexOf(".")!==-1&&o[0]!==""&&o.unshift(""),{pathEnv:r,pathExt:o,pathExtExe:s}},Xe=(e,t,n)=>{typeof t=="function"&&(n=t,t={}),t||(t={});let{pathEnv:r,pathExt:s,pathExtExe:o}=He(e,t),i=[],a=l=>new Promise((p,S)=>{if(l===r.length)return t.all&&i.length?p(i):S(De(e));let h=r[l],g=/^".*"$/.test(h)?h.slice(1,-1):h,x=Fe.join(g,e),y=!g&&/^\.[\\\/]/.test(e)?e.slice(0,2)+x:x;p(d(y,l,0))}),d=(l,p,S)=>new Promise((h,g)=>{if(S===s.length)return h(a(p+1));let x=s[S];Ue(l+x,{pathExt:o},(y,E)=>{if(!y&&E)if(t.all)i.push(l+x);else return h(l+x);return h(d(l,p,S+1))})});return n?a(0).then(l=>n(null,l),n):a(0)},qn=(e,t)=>{t=t||{};let{pathEnv:n,pathExt:r,pathExtExe:s}=He(e,t),o=[];for(let i=0;i<n.length;i++){let a=n[i],d=/^".*"$/.test(a)?a.slice(1,-1):a,l=Fe.join(d,e),p=!d&&/^\.[\\\/]/.test(e)?e.slice(0,2)+l:l;for(let S=0;S<r.length;S++){let h=p+r[S];try{if(Ue.sync(h,{pathExt:s}))if(t.all)o.push(h);else return h}catch{}}}if(t.all&&o.length)return o;if(t.nothrow)return null;throw De(e)};Ke.exports=Xe;Xe.sync=qn});var ee=c((Cs,J)=>{"use strict";var ze=(e={})=>{let t=e.env||process.env;return(e.platform||process.platform)!=="win32"?"PATH":Object.keys(t).reverse().find(r=>r.toUpperCase()==="PATH")||"Path"};J.exports=ze;J.exports.default=ze});var Ze=c((As,Qe)=>{"use strict";var Ve=require("path"),Nn=We(),_n=ee();function Ye(e,t){let n=e.options.env||process.env,r=process.cwd(),s=e.options.cwd!=null,o=s&&process.chdir!==void 0&&!process.chdir.disabled;if(o)try{process.chdir(e.options.cwd)}catch{}let i;try{i=Nn.sync(e.command,{path:n[_n({env:n})],pathExt:t?Ve.delimiter:void 0})}catch{}finally{o&&process.chdir(r)}return i&&(i=Ve.resolve(s?e.options.cwd:"",i)),i}function $n(e){return Ye(e)||Ye(e,!0)}Qe.exports=$n});var Je=c((Rs,ne)=>{"use strict";var te=/([()\][%!^"`<>&|;, *?])/g;function kn(e){return e=e.replace(te,"^$1"),e}function Bn(e,t){return e=`${e}`,e=e.replace(/(\\*)"/g,'$1$1\\"'),e=e.replace(/(\\*)$/,"$1$1"),e=`"${e}"`,e=e.replace(te,"^$1"),t&&(e=e.replace(te,"^$1")),e}ne.exports.command=kn;ne.exports.argument=Bn});var tt=c((Os,et)=>{"use strict";et.exports=/^#!(.*)/});var rt=c((qs,nt)=>{"use strict";var Ln=tt();nt.exports=(e="")=>{let t=e.match(Ln);if(!t)return null;let[n,r]=t[0].replace(/#! ?/,"").split(" "),s=n.split("/").pop();return s==="env"?r:r?`${s} ${r}`:s}});var ot=c((Ns,st)=>{"use strict";var re=require("fs"),Mn=rt();function jn(e){let n=Buffer.alloc(150),r;try{r=re.openSync(e,"r"),re.readSync(r,n,0,150,0),re.closeSync(r)}catch{}return Mn(n.toString())}st.exports=jn});var ut=c((_s,ct)=>{"use strict";var Fn=require("path"),it=Ze(),at=Je(),Un=ot(),Dn=process.platform==="win32",Hn=/\.(?:com|exe)$/i,Xn=/node_modules[\\/].bin[\\/][^\\/]+\.cmd$/i;function Kn(e){e.file=it(e);let t=e.file&&Un(e.file);return t?(e.args.unshift(e.file),e.command=t,it(e)):e.file}function Wn(e){if(!Dn)return e;let t=Kn(e),n=!Hn.test(t);if(e.options.forceShell||n){let r=Xn.test(t);e.command=Fn.normalize(e.command),e.command=at.command(e.command),e.args=e.args.map(o=>at.argument(o,r));let s=[e.command].concat(e.args).join(" ");e.args=["/d","/s","/c",`"${s}"`],e.command=process.env.comspec||"cmd.exe",e.options.windowsVerbatimArguments=!0}return e}function zn(e,t,n){t&&!Array.isArray(t)&&(n=t,t=null),t=t?t.slice(0):[],n=Object.assign({},n);let r={command:e,args:t,options:n,file:void 0,original:{command:e,args:t}};return n.shell?r:Wn(r)}ct.exports=zn});var ft=c(($s,lt)=>{"use strict";var se=process.platform==="win32";function oe(e,t){return Object.assign(new Error(`${t} ${e.command} ENOENT`),{code:"ENOENT",errno:"ENOENT",syscall:`${t} ${e.command}`,path:e.command,spawnargs:e.args})}function Vn(e,t){if(!se)return;let n=e.emit;e.emit=function(r,s){if(r==="exit"){let o=dt(s,t,"spawn");if(o)return n.call(e,"error",o)}return n.apply(e,arguments)}}function dt(e,t){return se&&e===1&&!t.file?oe(t.original,"spawn"):null}function Yn(e,t){return se&&e===1&&!t.file?oe(t.original,"spawnSync"):null}lt.exports={hookChildProcess:Vn,verifyENOENT:dt,verifyENOENTSync:Yn,notFoundError:oe}});var ht=c((ks,T)=>{"use strict";var pt=require("child_process"),ie=ut(),ae=ft();function mt(e,t,n){let r=ie(e,t,n),s=pt.spawn(r.command,r.args,r.options);return ae.hookChildProcess(s,r),s}function Qn(e,t,n){let r=ie(e,t,n),s=pt.spawnSync(r.command,r.args,r.options);return s.error=s.error||ae.verifyENOENTSync(s.status,r),s}T.exports=mt;T.exports.spawn=mt;T.exports.sync=Qn;T.exports._parse=ie;T.exports._enoent=ae});var gt=c((Bs,St)=>{"use strict";St.exports=e=>{let t=typeof e=="string"?`
`:`
`.charCodeAt(),n=typeof e=="string"?"\r":"\r".charCodeAt();return e[e.length-1]===t&&(e=e.slice(0,e.length-1)),e[e.length-1]===n&&(e=e.slice(0,e.length-1)),e}});var bt=c((Ls,_)=>{"use strict";var N=require("path"),xt=ee(),yt=e=>{e=f({cwd:process.cwd(),path:process.env[xt()],execPath:process.execPath},e);let t,n=N.resolve(e.cwd),r=[];for(;t!==n;)r.push(N.join(n,"node_modules/.bin")),t=n,n=N.resolve(n,"..");let s=N.resolve(e.cwd,e.execPath,"..");return r.push(s),r.concat(e.path).join(N.delimiter)};_.exports=yt;_.exports.default=yt;_.exports.env=e=>{e=f({env:process.env},e);let t=f({},e.env),n=xt({env:t});return e.path=t[n],t[n]=_.exports(e),t}});var vt=c((Ms,ce)=>{"use strict";var wt=(e,t)=>{for(let n of Reflect.ownKeys(t))Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n));return e};ce.exports=wt;ce.exports.default=wt});var It=c((js,U)=>{"use strict";var Zn=vt(),F=new WeakMap,Et=(e,t={})=>{if(typeof e!="function")throw new TypeError("Expected a function");let n,r=0,s=e.displayName||e.name||"<anonymous>",o=function(...i){if(F.set(o,++r),r===1)n=e.apply(this,i),e=null;else if(t.throw===!0)throw new Error(`Function \`${s}\` can only be called once`);return n};return Zn(o,e),F.set(o,r),o};U.exports=Et;U.exports.default=Et;U.exports.callCount=e=>{if(!F.has(e))throw new Error(`The given function \`${e.name}\` is not wrapped by the \`onetime\` package`);return F.get(e)}});var Tt=c(D=>{"use strict";Object.defineProperty(D,"__esModule",{value:!0});D.SIGNALS=void 0;var Jn=[{name:"SIGHUP",number:1,action:"terminate",description:"Terminal closed",standard:"posix"},{name:"SIGINT",number:2,action:"terminate",description:"User interruption with CTRL-C",standard:"ansi"},{name:"SIGQUIT",number:3,action:"core",description:"User interruption with CTRL-\\",standard:"posix"},{name:"SIGILL",number:4,action:"core",description:"Invalid machine instruction",standard:"ansi"},{name:"SIGTRAP",number:5,action:"core",description:"Debugger breakpoint",standard:"posix"},{name:"SIGABRT",number:6,action:"core",description:"Aborted",standard:"ansi"},{name:"SIGIOT",number:6,action:"core",description:"Aborted",standard:"bsd"},{name:"SIGBUS",number:7,action:"core",description:"Bus error due to misaligned, non-existing address or paging error",standard:"bsd"},{name:"SIGEMT",number:7,action:"terminate",description:"Command should be emulated but is not implemented",standard:"other"},{name:"SIGFPE",number:8,action:"core",description:"Floating point arithmetic error",standard:"ansi"},{name:"SIGKILL",number:9,action:"terminate",description:"Forced termination",standard:"posix",forced:!0},{name:"SIGUSR1",number:10,action:"terminate",description:"Application-specific signal",standard:"posix"},{name:"SIGSEGV",number:11,action:"core",description:"Segmentation fault",standard:"ansi"},{name:"SIGUSR2",number:12,action:"terminate",description:"Application-specific signal",standard:"posix"},{name:"SIGPIPE",number:13,action:"terminate",description:"Broken pipe or socket",standard:"posix"},{name:"SIGALRM",number:14,action:"terminate",description:"Timeout or timer",standard:"posix"},{name:"SIGTERM",number:15,action:"terminate",description:"Termination",standard:"ansi"},{name:"SIGSTKFLT",number:16,action:"terminate",description:"Stack is empty or overflowed",standard:"other"},{name:"SIGCHLD",number:17,action:"ignore",description:"Child process terminated, paused or unpaused",standard:"posix"},{name:"SIGCLD",number:17,action:"ignore",description:"Child process terminated, paused or unpaused",standard:"other"},{name:"SIGCONT",number:18,action:"unpause",description:"Unpaused",standard:"posix",forced:!0},{name:"SIGSTOP",number:19,action:"pause",description:"Paused",standard:"posix",forced:!0},{name:"SIGTSTP",number:20,action:"pause",description:'Paused using CTRL-Z or "suspend"',standard:"posix"},{name:"SIGTTIN",number:21,action:"pause",description:"Background process cannot read terminal input",standard:"posix"},{name:"SIGBREAK",number:21,action:"terminate",description:"User interruption with CTRL-BREAK",standard:"other"},{name:"SIGTTOU",number:22,action:"pause",description:"Background process cannot write to terminal output",standard:"posix"},{name:"SIGURG",number:23,action:"ignore",description:"Socket received out-of-band data",standard:"bsd"},{name:"SIGXCPU",number:24,action:"core",description:"Process timed out",standard:"bsd"},{name:"SIGXFSZ",number:25,action:"core",description:"File too big",standard:"bsd"},{name:"SIGVTALRM",number:26,action:"terminate",description:"Timeout or timer",standard:"bsd"},{name:"SIGPROF",number:27,action:"terminate",description:"Timeout or timer",standard:"bsd"},{name:"SIGWINCH",number:28,action:"ignore",description:"Terminal window size changed",standard:"bsd"},{name:"SIGIO",number:29,action:"terminate",description:"I/O is available",standard:"other"},{name:"SIGPOLL",number:29,action:"terminate",description:"Watched event",standard:"other"},{name:"SIGINFO",number:29,action:"ignore",description:"Request for process information",standard:"other"},{name:"SIGPWR",number:30,action:"terminate",description:"Device running out of power",standard:"systemv"},{name:"SIGSYS",number:31,action:"core",description:"Invalid system call",standard:"other"},{name:"SIGUNUSED",number:31,action:"terminate",description:"Invalid system call",standard:"other"}];D.SIGNALS=Jn});var ue=c(P=>{"use strict";Object.defineProperty(P,"__esModule",{value:!0});P.SIGRTMAX=P.getRealtimeSignals=void 0;var er=function(){let e=Gt-Pt+1;return Array.from({length:e},tr)};P.getRealtimeSignals=er;var tr=function(e,t){return{name:`SIGRT${t+1}`,number:Pt+t,action:"terminate",description:"Application-specific signal (realtime)",standard:"posix"}},Pt=34,Gt=64;P.SIGRTMAX=Gt});var Ct=c(H=>{"use strict";Object.defineProperty(H,"__esModule",{value:!0});H.getSignals=void 0;var nr=require("os"),rr=Tt(),sr=ue(),or=function(){let e=(0,sr.getRealtimeSignals)();return[...rr.SIGNALS,...e].map(ir)};H.getSignals=or;var ir=function({name:e,number:t,description:n,action:r,forced:s=!1,standard:o}){let{signals:{[e]:i}}=nr.constants,a=i!==void 0;return{name:e,number:a?i:t,description:n,supported:a,action:r,forced:s,standard:o}}});var Rt=c(G=>{"use strict";Object.defineProperty(G,"__esModule",{value:!0});G.signalsByNumber=G.signalsByName=void 0;var ar=require("os"),At=Ct(),cr=ue(),ur=function(){return(0,At.getSignals)().reduce(dr,{})},dr=function(e,{name:t,number:n,description:r,supported:s,action:o,forced:i,standard:a}){return w(f({},e),{[t]:{name:t,number:n,description:r,supported:s,action:o,forced:i,standard:a}})},lr=ur();G.signalsByName=lr;var fr=function(){let e=(0,At.getSignals)(),t=cr.SIGRTMAX+1,n=Array.from({length:t},(r,s)=>pr(s,e));return Object.assign({},...n)},pr=function(e,t){let n=mr(e,t);if(n===void 0)return{};let{name:r,description:s,supported:o,action:i,forced:a,standard:d}=n;return{[e]:{name:r,number:e,description:s,supported:o,action:i,forced:a,standard:d}}},mr=function(e,t){let n=t.find(({name:r})=>ar.constants.signals[r]===e);return n!==void 0?n:t.find(r=>r.number===e)},hr=fr();G.signalsByNumber=hr});var qt=c((Xs,Ot)=>{"use strict";var{signalsByName:Sr}=Rt(),gr=({timedOut:e,timeout:t,errorCode:n,signal:r,signalDescription:s,exitCode:o,isCanceled:i})=>e?`timed out after ${t} milliseconds`:i?"was canceled":n!==void 0?`failed with ${n}`:r!==void 0?`was killed with ${r} (${s})`:o!==void 0?`failed with exit code ${o}`:"failed",xr=({stdout:e,stderr:t,all:n,error:r,signal:s,exitCode:o,command:i,escapedCommand:a,timedOut:d,isCanceled:l,killed:p,parsed:{options:{timeout:S}}})=>{o=o===null?void 0:o,s=s===null?void 0:s;let h=s===void 0?void 0:Sr[s].description,g=r&&r.code,y=`Command ${gr({timedOut:d,timeout:S,errorCode:g,signal:s,signalDescription:h,exitCode:o,isCanceled:l})}: ${i}`,E=Object.prototype.toString.call(r)==="[object Error]",L=E?`${y}
${r.message}`:y,M=[L,t,e].filter(Boolean).join(`
`);return E?(r.originalMessage=r.message,r.message=M):r=new Error(M),r.shortMessage=L,r.command=i,r.escapedCommand=a,r.exitCode=o,r.signal=s,r.signalDescription=h,r.stdout=e,r.stderr=t,n!==void 0&&(r.all=n),"bufferedData"in r&&delete r.bufferedData,r.failed=!0,r.timedOut=Boolean(d),r.isCanceled=l,r.killed=p&&!d,r};Ot.exports=xr});var _t=c((Ks,de)=>{"use strict";var X=["stdin","stdout","stderr"],yr=e=>X.some(t=>e[t]!==void 0),Nt=e=>{if(!e)return;let{stdio:t}=e;if(t===void 0)return X.map(r=>e[r]);if(yr(e))throw new Error(`It's not possible to provide \`stdio\` in combination with one of ${X.map(r=>`\`${r}\``).join(", ")}`);if(typeof t=="string")return t;if(!Array.isArray(t))throw new TypeError(`Expected \`stdio\` to be of type \`string\` or \`Array\`, got \`${typeof t}\``);let n=Math.max(t.length,X.length);return Array.from({length:n},(r,s)=>t[s])};de.exports=Nt;de.exports.node=e=>{let t=Nt(e);return t==="ipc"?"ipc":t===void 0||typeof t=="string"?[t,t,t,"ipc"]:t.includes("ipc")?t:[...t,"ipc"]}});var $t=c((Ws,K)=>{K.exports=["SIGABRT","SIGALRM","SIGHUP","SIGINT","SIGTERM"];process.platform!=="win32"&&K.exports.push("SIGVTALRM","SIGXCPU","SIGXFSZ","SIGUSR2","SIGTRAP","SIGSYS","SIGQUIT","SIGIOT");process.platform==="linux"&&K.exports.push("SIGIO","SIGPOLL","SIGPWR","SIGSTKFLT","SIGUNUSED")});var jt=c((zs,R)=>{var u=global.process;typeof u!="object"||!u?R.exports=function(){}:(kt=require("assert"),C=$t(),Bt=/^win/i.test(u.platform),$=require("events"),typeof $!="function"&&($=$.EventEmitter),u.__signal_exit_emitter__?m=u.__signal_exit_emitter__:(m=u.__signal_exit_emitter__=new $,m.count=0,m.emitted={}),m.infinite||(m.setMaxListeners(1/0),m.infinite=!0),R.exports=function(e,t){if(global.process===u){kt.equal(typeof e,"function","a callback must be provided for exit handler"),A===!1&&le();var n="exit";t&&t.alwaysLast&&(n="afterexit");var r=function(){m.removeListener(n,e),m.listeners("exit").length===0&&m.listeners("afterexit").length===0&&W()};return m.on(n,e),r}},W=function(){!A||global.process!==u||(A=!1,C.forEach(function(t){try{u.removeListener(t,z[t])}catch{}}),u.emit=V,u.reallyExit=fe,m.count-=1)},R.exports.unload=W,v=function(t,n,r){m.emitted[t]||(m.emitted[t]=!0,m.emit(t,n,r))},z={},C.forEach(function(e){z[e]=function(){if(u===global.process){var n=u.listeners(e);n.length===m.count&&(W(),v("exit",null,e),v("afterexit",null,e),Bt&&e==="SIGHUP"&&(e="SIGINT"),u.kill(u.pid,e))}}}),R.exports.signals=function(){return C},A=!1,le=function(){A||u!==global.process||(A=!0,m.count+=1,C=C.filter(function(t){try{return u.on(t,z[t]),!0}catch{return!1}}),u.emit=Mt,u.reallyExit=Lt)},R.exports.load=le,fe=u.reallyExit,Lt=function(t){u===global.process&&(u.exitCode=t||0,v("exit",u.exitCode,null),v("afterexit",u.exitCode,null),fe.call(u,u.exitCode))},V=u.emit,Mt=function(t,n){if(t==="exit"&&u===global.process){n!==void 0&&(u.exitCode=n);var r=V.apply(this,arguments);return v("exit",u.exitCode,null),v("afterexit",u.exitCode,null),r}else return V.apply(this,arguments)});var kt,C,Bt,$,m,W,v,z,A,le,fe,Lt,V,Mt});var Ut=c((Vs,Ft)=>{"use strict";var br=require("os"),wr=jt(),vr=1e3*5,Er=(e,t="SIGTERM",n={})=>{let r=e(t);return Ir(e,t,n,r),r},Ir=(e,t,n,r)=>{if(!Tr(t,n,r))return;let s=Gr(n),o=setTimeout(()=>{e("SIGKILL")},s);o.unref&&o.unref()},Tr=(e,{forceKillAfterTimeout:t},n)=>Pr(e)&&t!==!1&&n,Pr=e=>e===br.constants.signals.SIGTERM||typeof e=="string"&&e.toUpperCase()==="SIGTERM",Gr=({forceKillAfterTimeout:e=!0})=>{if(e===!0)return vr;if(!Number.isFinite(e)||e<0)throw new TypeError(`Expected the \`forceKillAfterTimeout\` option to be a non-negative integer, got \`${e}\` (${typeof e})`);return e},Cr=(e,t)=>{e.kill()&&(t.isCanceled=!0)},Ar=(e,t,n)=>{e.kill(t),n(Object.assign(new Error("Timed out"),{timedOut:!0,signal:t}))},Rr=(e,{timeout:t,killSignal:n="SIGTERM"},r)=>{if(t===0||t===void 0)return r;let s,o=new Promise((a,d)=>{s=setTimeout(()=>{Ar(e,n,d)},t)}),i=r.finally(()=>{clearTimeout(s)});return Promise.race([o,i])},Or=({timeout:e})=>{if(e!==void 0&&(!Number.isFinite(e)||e<0))throw new TypeError(`Expected the \`timeout\` option to be a non-negative integer, got \`${e}\` (${typeof e})`)},qr=async(e,{cleanup:t,detached:n},r)=>{if(!t||n)return r;let s=wr(()=>{e.kill()});return r.finally(()=>{s()})};Ft.exports={spawnedKill:Er,spawnedCancel:Cr,setupTimeout:Rr,validateTimeout:Or,setExitHandler:qr}});var Ht=c((Ys,Dt)=>{"use strict";var b=e=>e!==null&&typeof e=="object"&&typeof e.pipe=="function";b.writable=e=>b(e)&&e.writable!==!1&&typeof e._write=="function"&&typeof e._writableState=="object";b.readable=e=>b(e)&&e.readable!==!1&&typeof e._read=="function"&&typeof e._readableState=="object";b.duplex=e=>b.writable(e)&&b.readable(e);b.transform=e=>b.duplex(e)&&typeof e._transform=="function";Dt.exports=b});var Kt=c((Qs,Xt)=>{"use strict";var{PassThrough:Nr}=require("stream");Xt.exports=e=>{e=f({},e);let{array:t}=e,{encoding:n}=e,r=n==="buffer",s=!1;t?s=!(n||r):n=n||"utf8",r&&(n=null);let o=new Nr({objectMode:s});n&&o.setEncoding(n);let i=0,a=[];return o.on("data",d=>{a.push(d),s?i=a.length:i+=d.length}),o.getBufferedValue=()=>t?a:r?Buffer.concat(a,i):a.join(""),o.getBufferedLength=()=>i,o}});var Wt=c((Zs,k)=>{"use strict";var{constants:_r}=require("buffer"),$r=require("stream"),{promisify:kr}=require("util"),Br=Kt(),Lr=kr($r.pipeline),pe=class extends Error{constructor(){super("maxBuffer exceeded");this.name="MaxBufferError"}};async function me(e,t){if(!e)throw new Error("Expected a stream");t=f({maxBuffer:1/0},t);let{maxBuffer:n}=t,r=Br(t);return await new Promise((s,o)=>{let i=a=>{a&&r.getBufferedLength()<=_r.MAX_LENGTH&&(a.bufferedData=r.getBufferedValue()),o(a)};(async()=>{try{await Lr(e,r),s()}catch(a){i(a)}})(),r.on("data",()=>{r.getBufferedLength()>n&&i(new pe)})}),r.getBufferedValue()}k.exports=me;k.exports.buffer=(e,t)=>me(e,w(f({},t),{encoding:"buffer"}));k.exports.array=(e,t)=>me(e,w(f({},t),{array:!0}));k.exports.MaxBufferError=pe});var Vt=c((Js,zt)=>{"use strict";var{PassThrough:Mr}=require("stream");zt.exports=function(){var e=[],t=new Mr({objectMode:!0});return t.setMaxListeners(0),t.add=n,t.isEmpty=r,t.on("unpipe",s),Array.prototype.slice.call(arguments).forEach(n),t;function n(o){return Array.isArray(o)?(o.forEach(n),this):(e.push(o),o.once("end",s.bind(null,o)),o.once("error",t.emit.bind(t,"error")),o.pipe(t,{end:!1}),this)}function r(){return e.length==0}function s(o){e=e.filter(function(i){return i!==o}),!e.length&&t.readable&&t.end()}}});var Jt=c((eo,Zt)=>{"use strict";var Qt=Ht(),Yt=Wt(),jr=Vt(),Fr=(e,t)=>{t===void 0||e.stdin===void 0||(Qt(t)?t.pipe(e.stdin):e.stdin.end(t))},Ur=(e,{all:t})=>{if(!t||!e.stdout&&!e.stderr)return;let n=jr();return e.stdout&&n.add(e.stdout),e.stderr&&n.add(e.stderr),n},he=async(e,t)=>{if(!!e){e.destroy();try{return await t}catch(n){return n.bufferedData}}},Se=(e,{encoding:t,buffer:n,maxBuffer:r})=>{if(!(!e||!n))return t?Yt(e,{encoding:t,maxBuffer:r}):Yt.buffer(e,{maxBuffer:r})},Dr=async({stdout:e,stderr:t,all:n},{encoding:r,buffer:s,maxBuffer:o},i)=>{let a=Se(e,{encoding:r,buffer:s,maxBuffer:o}),d=Se(t,{encoding:r,buffer:s,maxBuffer:o}),l=Se(n,{encoding:r,buffer:s,maxBuffer:o*2});try{return await Promise.all([i,a,d,l])}catch(p){return Promise.all([{error:p,signal:p.signal,timedOut:p.timedOut},he(e,a),he(t,d),he(n,l)])}},Hr=({input:e})=>{if(Qt(e))throw new TypeError("The `input` option cannot be a stream in sync mode")};Zt.exports={handleInput:Fr,makeAllStream:Ur,getSpawnedResult:Dr,validateInputSync:Hr}});var tn=c((to,en)=>{"use strict";var Xr=(async()=>{})().constructor.prototype,Kr=["then","catch","finally"].map(e=>[e,Reflect.getOwnPropertyDescriptor(Xr,e)]),Wr=(e,t)=>{for(let[n,r]of Kr){let s=typeof t=="function"?(...o)=>Reflect.apply(r.value,t(),o):r.value.bind(t);Reflect.defineProperty(e,n,w(f({},r),{value:s}))}return e},zr=e=>new Promise((t,n)=>{e.on("exit",(r,s)=>{t({exitCode:r,signal:s})}),e.on("error",r=>{n(r)}),e.stdin&&e.stdin.on("error",r=>{n(r)})});en.exports={mergePromise:Wr,getSpawnedPromise:zr}});var sn=c((no,rn)=>{"use strict";var nn=(e,t=[])=>Array.isArray(t)?[e,...t]:[e],Vr=/^[\w.-]+$/,Yr=/"/g,Qr=e=>typeof e!="string"||Vr.test(e)?e:`"${e.replace(Yr,'\\"')}"`,Zr=(e,t)=>nn(e,t).join(" "),Jr=(e,t)=>nn(e,t).map(n=>Qr(n)).join(" "),es=/ +/g,ts=e=>{let t=[];for(let n of e.trim().split(es)){let r=t[t.length-1];r&&r.endsWith("\\")?t[t.length-1]=`${r.slice(0,-1)} ${n}`:t.push(n)}return t};rn.exports={joinCommand:Zr,getEscapedCommand:Jr,parseCommand:ts}});var fn=c((ro,O)=>{"use strict";var ns=require("path"),ge=require("child_process"),rs=ht(),ss=gt(),os=bt(),is=It(),Y=qt(),an=_t(),{spawnedKill:as,spawnedCancel:cs,setupTimeout:us,validateTimeout:ds,setExitHandler:ls}=Ut(),{handleInput:fs,getSpawnedResult:ps,makeAllStream:ms,validateInputSync:hs}=Jt(),{mergePromise:on,getSpawnedPromise:Ss}=tn(),{joinCommand:cn,parseCommand:un,getEscapedCommand:dn}=sn(),gs=1e3*1e3*100,xs=({env:e,extendEnv:t,preferLocal:n,localDir:r,execPath:s})=>{let o=t?f(f({},process.env),e):e;return n?os.env({env:o,cwd:r,execPath:s}):o},ln=(e,t,n={})=>{let r=rs._parse(e,t,n);return e=r.command,t=r.args,n=r.options,n=f({maxBuffer:gs,buffer:!0,stripFinalNewline:!0,extendEnv:!0,preferLocal:!1,localDir:n.cwd||process.cwd(),execPath:process.execPath,encoding:"utf8",reject:!0,cleanup:!0,all:!1,windowsHide:!0},n),n.env=xs(n),n.stdio=an(n),process.platform==="win32"&&ns.basename(e,".exe")==="cmd"&&t.unshift("/q"),{file:e,args:t,options:n,parsed:r}},B=(e,t,n)=>typeof t!="string"&&!Buffer.isBuffer(t)?n===void 0?void 0:"":e.stripFinalNewline?ss(t):t,Q=(e,t,n)=>{let r=ln(e,t,n),s=cn(e,t),o=dn(e,t);ds(r.options);let i;try{i=ge.spawn(r.file,r.args,r.options)}catch(g){let x=new ge.ChildProcess,y=Promise.reject(Y({error:g,stdout:"",stderr:"",all:"",command:s,escapedCommand:o,parsed:r,timedOut:!1,isCanceled:!1,killed:!1}));return on(x,y)}let a=Ss(i),d=us(i,r.options,a),l=ls(i,r.options,d),p={isCanceled:!1};i.kill=as.bind(null,i.kill.bind(i)),i.cancel=cs.bind(null,i,p);let h=is(async()=>{let[{error:g,exitCode:x,signal:y,timedOut:E},L,M,Sn]=await ps(i,r.options,l),ye=B(r.options,L),be=B(r.options,M),we=B(r.options,Sn);if(g||x!==0||y!==null){let ve=Y({error:g,exitCode:x,signal:y,stdout:ye,stderr:be,all:we,command:s,escapedCommand:o,parsed:r,timedOut:E,isCanceled:p.isCanceled,killed:i.killed});if(!r.options.reject)return ve;throw ve}return{command:s,escapedCommand:o,exitCode:0,stdout:ye,stderr:be,all:we,failed:!1,timedOut:!1,isCanceled:!1,killed:!1}});return fs(i,r.options.input),i.all=ms(i,r.options),on(i,h)};O.exports=Q;O.exports.sync=(e,t,n)=>{let r=ln(e,t,n),s=cn(e,t),o=dn(e,t);hs(r.options);let i;try{i=ge.spawnSync(r.file,r.args,r.options)}catch(l){throw Y({error:l,stdout:"",stderr:"",all:"",command:s,escapedCommand:o,parsed:r,timedOut:!1,isCanceled:!1,killed:!1})}let a=B(r.options,i.stdout,i.error),d=B(r.options,i.stderr,i.error);if(i.error||i.status!==0||i.signal!==null){let l=Y({stdout:a,stderr:d,error:i.error,signal:i.signal,exitCode:i.status,command:s,escapedCommand:o,parsed:r,timedOut:i.error&&i.error.code==="ETIMEDOUT",isCanceled:!1,killed:i.signal!==null});if(!r.options.reject)return l;throw l}return{command:s,escapedCommand:o,exitCode:0,stdout:a,stderr:d,failed:!1,timedOut:!1,isCanceled:!1,killed:!1}};O.exports.command=(e,t)=>{let[n,...r]=un(e);return Q(n,r,t)};O.exports.commandSync=(e,t)=>{let[n,...r]=un(e);return Q.sync(n,r,t)};O.exports.node=(e,t,n={})=>{t&&!Array.isArray(t)&&typeof t=="object"&&(n=t,t=[]);let r=an.node(n),s=process.execArgv.filter(a=>!a.startsWith("--inspect")),{nodePath:o=process.execPath,nodeOptions:i=s}=n;return Q(o,[...i,e,...Array.isArray(t)?t:[]],w(f({},n),{stdin:void 0,stdout:void 0,stderr:void 0,stdio:r,shell:!1}))}});var ws={};In(ws,{default:()=>bs});var xe=require("@raycast/api");var pn=Ce(require("node:process"),1),mn=Ce(fn(),1);async function hn(e){if(pn.default.platform!=="darwin")throw new Error("macOS only");let{stdout:t}=await(0,mn.default)("osascript",["-e",e]);return t}var ys=async()=>{try{await hn('do shell script "pgrep caffeinate"'),await(0,xe.showHUD)("Your Mac is caffeinated")}catch{await(0,xe.showHUD)("Your Mac is decaffeinated")}},bs=ys;module.exports=Tn(ws);0&&(module.exports={});
