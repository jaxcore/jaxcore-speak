(this["webpackJsonpjaxcore-say-full-example"]=this["webpackJsonpjaxcore-say-full-example"]||[]).push([[0],{10:function(e,t){e.exports={Jack:{name:"Jack",engine:"espeak",default:{amplitude:100,wordgap:0,pitch:10,speed:180,variant:"m2"},high:{pitch:50},low:{pitch:0},slow:{speed:120},fast:{speed:250}},Pris:{name:"Pris",phoneticName:"Priss",engine:"espeak",default:{amplitude:100,wordgap:0,pitch:47,speed:130,variant:"f5"},high:{pitch:80},low:{pitch:20},slow:{speed:100},fast:{speed:200}},Roy:{name:"Roy",engine:"espeak",default:{amplitude:100,wordgap:0,pitch:35,speed:180,variant:"m1"},high:{pitch:3},low:{pitch:5},slow:{speed:100},fast:{speed:200}},Scotty:{name:"Scotty",engine:"espeak",default:{amplitude:100,wordgap:0,pitch:35,speed:200,variant:"m3"},high:{pitch:3},low:{pitch:5},slow:{speed:100},fast:{speed:230}},Xenu:{name:"Xenu",phoneticName:"zee-new",engine:"espeak",default:{amplitude:100,wordgap:1,pitch:35,speed:170,variant:"klatt3"},high:{pitch:65},low:{pitch:0},slow:{speed:100},fast:{speed:200}},Cylon:{name:"Cylon",engine:"espeak",default:{amplitude:100,wordgap:1,pitch:35,speed:170,variant:"whisperf"},high:{pitch:65,speed:150},low:{pitch:0,speed:140},slow:{pitch:20,speed:100,wordgap:1},fast:{speed:200,wordgap:0}},Leon:{name:"Leon",phoneticName:"Leeon",engine:"espeak",default:{amplitude:100,wordgap:0,pitch:40,speed:150,variant:"m7"},high:{pitch:55},low:{pitch:5},slow:{speed:100},fast:{speed:200}},Rachel:{name:"Rachel",engine:"espeak",default:{amplitude:100,wordgap:0,pitch:60,speed:150,variant:"f2"},high:{pitch:75},low:{pitch:40},slow:{speed:100},fast:{speed:200}},Zhora:{name:"Zhora",engine:"espeak",default:{amplitude:100,wordgap:0,pitch:60,speed:150,variant:"f4"},high:{pitch:75},low:{pitch:40},slow:{speed:100},fast:{speed:200}},Sam:{name:"Sam",engine:"sam",default:{speed:64,pitch:64,throat:128,mouth:128},high:{pitch:50},low:{pitch:110},slow:{speed:100},fast:{speed:40}},Elf:{name:"Elf",engine:"sam",default:{speed:72,pitch:64,throat:110,mouth:160},high:{pitch:50},low:{pitch:110},slow:{speed:100},fast:{speed:40}},Robo:{name:"Robo",engine:"sam",default:{speed:82,pitch:60,throat:190,mouth:190},high:{pitch:40},low:{pitch:100},slow:{speed:120},fast:{speed:50}},Granny:{name:"Granny",engine:"sam",default:{speed:82,pitch:35,throat:145,mouth:145},high:{pitch:25},low:{pitch:120},slow:{speed:130},fast:{speed:40}}}},24:function(e,t,a){"use strict";(function(e){var n=a(1),i=a(6),o=a(3),s=a(2),r=a(8),l=a(4),p=a(0),u=a.n(p),c=a(7),h=a.n(c),d=a(25);e.Say=h.a,h.a.addProfile({"Custom ESpeak Voice":{name:"Custom ESpeak Voice",engine:"espeak",default:{amplitude:100,wordgap:1,pitch:40,speed:150,variant:"m7"},high:{pitch:55},low:{pitch:5},slow:{speed:100},fast:{speed:200}}}),h.a.addProfile({"Custom SAM Voice":{name:"Custom SAM Voice",engine:"sam",default:{speed:82,pitch:72,throat:110,mouth:105},high:{pitch:50},low:{pitch:100},slow:{speed:130},fast:{speed:60}}}),h.a.setWorkers({espeak:"webworkers/espeak-all-worker.js",sam:"webworkers/sam-worker.js"});var f=new h.a({language:"en"});e.sayVoice=f;var g=function(t){function a(){var t;return Object(n.a)(this,a),(t=Object(o.a)(this,Object(s.a)(a).call(this))).canvasRef=u.a.createRef(),t.state={profile:"Jack",speed:"default",pitch:"default",text:"",language:"en/en",languageEnabled:!0,spoken:[{profile:"Jack",speed:"default",pitch:"default",text:"Hello World",language:"en/en"}],spokenIndex:null,code:"",viewCode:!1},e.app=Object(r.a)(t),t}return Object(l.a)(a,t),Object(i.a)(a,[{key:"componentDidMount",value:function(){this.updateCode(),this.monoScope=new d.a(this.canvasRef.current),f.setVisualizer(this.monoScope)}},{key:"render",value:function(){var e=this;return u.a.createElement("div",null,u.a.createElement("h2",null,"Say"),u.a.createElement("div",null,u.a.createElement("canvas",{ref:this.canvasRef,width:"300",height:"300"})),u.a.createElement("div",null,"Voice: ",this.renderProfileSelect()),u.a.createElement("div",null,"Speed: ",this.renderSpeedSelect()),u.a.createElement("div",null,"Pitch: ",this.renderPitchSelect()),u.a.createElement("div",null,"Language: ",this.renderLanguageSelect()),u.a.createElement("div",null,u.a.createElement("input",{size:"40",placeholder:"Type something then press Enter",onKeyUp:function(t){return e.onKeyUp(t)},onChange:function(t){return e.onChangeText(t)},value:this.state.text}),u.a.createElement("button",{onClick:function(t){return e.sayText(!0)}},"Say")),u.a.createElement("ul",null,this.state.spoken.map((function(t,a){return u.a.createElement("li",{key:a},u.a.createElement("a",{href:"/",onClick:function(t){return e.clickSpoken(t,a)}},t.text)," (",t.profile," ",t.speed," ",t.pitch,")")}))),u.a.createElement("div",null,u.a.createElement("button",{onClick:function(t){return e.clear()}},"Clear")),u.a.createElement("br",null),u.a.createElement("div",null,u.a.createElement("button",{onClick:function(t){return e.setState({viewCode:!e.state.viewCode})}},this.state.viewCode?"Hide Code":"View Code")),this.renderCode())}},{key:"renderCode",value:function(){if(this.state.viewCode)return u.a.createElement("pre",null,this.state.code)}},{key:"clear",value:function(e){this.setState({spoken:[]})}},{key:"clickSpoken",value:function(e,t){var a=this;e.preventDefault();var n=this.state.spoken[t];this.sayIndex(t);var i="espeak"===h.a.profiles[n.profile].engine;this.setState({text:n.text,profile:n.profile,speed:n.speed,pitch:n.pitch,language:n.language,languageEnabled:i},(function(){a.updateCode(t)}))}},{key:"onKeyUp",value:function(e){if(13===e.keyCode)return e.preventDefault(),void this.sayText();this.updateCode(),console.log("keydown",e)}},{key:"renderLanguageSelect",value:function(){var e=this;if(this.state.languageEnabled){var t=[];for(var a in h.a.languageIds)t.push(u.a.createElement("option",{key:a,value:a},h.a.languageIds[a]));return u.a.createElement("select",{onChange:function(t){return e.selectLanguage(t)},value:this.state.language},t)}return"none"}},{key:"selectLanguage",value:function(e){var t=this,a=e.target.options[e.target.selectedIndex].value;this.setState({language:a},(function(){t.updateCode()}))}},{key:"updateCode",value:function(e,t){"undefined"===typeof e&&(e=null);var a=this.generateCode(e);this.setState({code:a},t)}},{key:"renderSpeedSelect",value:function(){var e=this;return u.a.createElement("select",{onChange:function(t){return e.selectSpeed(t)},value:this.state.speed},u.a.createElement("option",{value:"default"},"default"),u.a.createElement("option",{value:"fast"},"fast"),u.a.createElement("option",{value:"slow"},"slow"))}},{key:"renderPitchSelect",value:function(){var e=this;return u.a.createElement("select",{onChange:function(t){return e.selectPitch(t)},value:this.state.pitch},u.a.createElement("option",{value:"default"},"default"),u.a.createElement("option",{value:"low"},"low"),u.a.createElement("option",{value:"high"},"high"))}},{key:"selectPitch",value:function(e){var t=this,a=e.target.options[e.target.selectedIndex].value;this.setState({pitch:a},(function(){t.updateCode()}))}},{key:"selectSpeed",value:function(e){var t=this,a=e.target.options[e.target.selectedIndex].value;this.setState({speed:a},(function(){t.updateCode()}))}},{key:"renderProfileSelect",value:function(){var e=this,t=[];for(var a in f.profiles)"espeak"===h.a.profiles[a].engine&&t.push(u.a.createElement("option",{key:a,value:a},a));var n=[];for(var i in f.profiles)"sam"===h.a.profiles[i].engine&&n.push(u.a.createElement("option",{key:i,value:i},i));return u.a.createElement("select",{onChange:function(t){return e.selectProfile(t)},value:this.state.profile},u.a.createElement("optgroup",{label:"- ESpeak Voices -"},t),u.a.createElement("optgroup",{label:"- SAM Voices -"},n))}},{key:"selectProfile",value:function(e){var t=this,a=e.target.options[e.target.selectedIndex].value,n="espeak"===h.a.profiles[a].engine;this.setState({profile:a,languageEnabled:n},(function(){t.updateCode()}))}},{key:"sayText",value:function(e){var t=this,a=this.state.text;if(0!==a.length){var n=this.state.profile,i=this.state.speed,o=this.state.pitch,s=this.state.language,r={text:a,speed:i,pitch:o,language:s,profile:n},l=this.state.spoken[this.state.spoken.length-1],p=!1;l&&l.text===a&&l.speed===i&&l.pitch===o&&l.language===s&&l.profile===n&&(p=!0);var u,c=this.state.spoken;p?u=this.state.spoken.length-1:(u=this.state.spoken.length,c.push(r)),e||(a=""),this.setState({spoken:c,spokenIndex:u,text:a},(function(){t.updateCode(),t.sayIndex(u)}))}}},{key:"sayIndex",value:function(e){var t=this,a=this.state.spoken[e],n=[];h.a.profiles[a.profile].phoneticName&&n.push([a.profile,h.a.profiles[a.profile].phoneticName]);var i={profile:a.profile,language:a.language,replacements:n};"default"!==a.speed&&(i[a.speed]=!0),"default"!==a.pitch&&(i[a.pitch]=!0),this.colors={Jack:"255,0,0",Pris:"255,255,0",Roy:"0,255,0",Xenu:"255,0,255",Cylon:"128,128,128",Leon:"128,0,0",Rachel:"128,128,0",Zhora:"0,128,0",Sam:"0,128,128",Elf:"128,0,128",Robo:"255,0,128",Granny:"255,128,0"};var o=this.colors[a.profile]||"0,0,255";this.monoScope.theme.strokeColor="rgb("+o+")",this.monoScope.theme.clipColor="black",this.monoScope.theme.fillColor="rgba("+o+",0.2)",this.monoScope.theme.dotColor="rgb("+o+")",console.log("Say: started"),this.setState({isSpeaking:!0},(function(){f.say(a.text,i).then((function(){console.log("Say: stopped"),t.setState({isSpeaking:!1})}))}))}},{key:"onChangeText",value:function(e){var t=this;this.setState({text:e.target.value},(function(){t.updateCode()}))}},{key:"generateCode",value:function(e){var t;t=null===e||0===this.state.spoken.length?this.state:this.state.spoken[e];var a=h.a.getLanguageId(t.language),n="";"Custom ESpeak Voice"===t.profile?n='Say.addProfile({\n\t"Custom ESpeak Voice": {\n\t\t"name": "Custom ESpeak Voice",\n\t\t"engine": "espeak",\n\t\t"default": {\n\t\t\tamplitude: 100,\n\t\t\twordgap: 1,\n\t\t\tpitch: 40,\n\t\t\tspeed: 150,\n\t\t\tvariant: \'m7\'\n\t\t},\n\t\t"high": {\n\t\t\tpitch: 55\n\t\t},\n\t\t"low": {\n\t\t\tpitch: 5\n\t\t},\n\t\t"slow": {\n\t\t\tspeed: 100\n\t\t},\n\t\t"fast": {\n\t\t\tspeed: 200\n\t\t}\n\t}\n});\n':"Custom SAM Voice"===t.profile&&(n='Say.addProfile({\n\t"Custom SAM Voice": {\n\t\t"name": "Custom SAM Voice",\n\t\t"engine": "sam",\n\t\t"default": {\n\t\t\tspeed: 82,\n\t\t\tpitch: 72,\n\t\t\tthroat: 110,\n\t\t\tmouth: 105\n\t\t},\n\t\t"high": {\n\t\t\tpitch: 50\n\t\t},\n\t\t"low": {\n\t\t\tpitch: 100\n\t\t},\n\t\t"slow": {\n\t\t\tspeed: 130\n\t\t},\n\t\t"fast": {\n\t\t\tspeed: 60\n\t\t}\n\t}\n});\n');var i="";"espeak"===h.a.profiles[t.profile].engine&&(i='\tlanguage: "'+t.language+'"\n');var o='import Speak from "jaxcore-speak";\n'+("en/en"===a?"Say.setWorkers({\n\t'espeak': 'webworkers/espeak-en-worker.js',\n\t'sam': 'webworkers/sam-worker.js'\n});\n":"Say.setWorkers({\n\t'espeak': 'webworkers/espeak-all-worker.js',\n\t'sam': 'webworkers/sam-worker.js'\n});\n")+n+'var voice = new Say({\n\tprofile: "'+t.profile+'",\n'+i+"});\n";if("default"===t.speed&&"default"===t.pitch)o+='voice.say("'+t.text+'");';else{var s=[];"default"!==t.speed&&s.push("  "+t.speed+": true"),"default"!==t.pitch&&s.push("  "+t.pitch+": true"),o+='voice.say("'+t.text+'", {\n'+s.join(",\n")+"\n});"}return o}}]),a}(p.Component);t.a=g}).call(this,a(15))},29:function(e,t,a){e.exports=a(48)},34:function(e,t,a){},48:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),o=a(23),s=a.n(o),r=(a(34),a(24));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(i.a.createElement(r.a,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},49:function(e,t,a){"use strict";a.r(t);var n=a(1),i=a(6),o=a(3),s=a(2),r=a(4),p=a(5),u=a.n(p),c=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(o.a)(this,Object(s.a)(t).call(this)))._queue=[],a.speaker=e,a}return Object(r.a)(t,e),Object(i.a)(t,[{key:"clearQueue",value:function(){this._queue=[]}},{key:"queue",value:function(e){this._queue.push(e),this._speakNext()}},{key:"_speakNext",value:function(){var e=this;if(!this.isSpeaking){var t=this._queue.shift();t?(this.isSpeaking=!0,this.speaker.getWorkerAudioData(t.text,t.options,(function(a,n){t.onStart&&t.onStart(t),t.scope.loadAudioData(a,n,(function(){t.onStop&&setTimeout((function(){t.onStop(t)}),1),e._onEnded()}))}))):this.emit("finish")}}},{key:"_onEnded",value:function(){this.isSpeaking=!1,this._speakNext()}}]),t}(u.a),h=a(10),d=a.n(h),f=function(e){function t(e){var a;for(var i in Object(n.a)(this,t),e||(e={}),(a=Object(o.a)(this,Object(s.a)(t).call(this))).lang=null,a.profiles={},a.defaultProfile=null,d.a)a.addProfile(d.a[i]);return e.profile?a.setProfile(e.profile):a.setProfile("Jack"),"espeak"===a.profile.engine&&e.language&&a.setLanguage(e.language),a.lang||a.setLanguage("en_us"),e.visualizer&&a.setVisualizer(e.visualizer),a}return Object(r.a)(t,e),Object(i.a)(t,[{key:"setVisualizer",value:function(e){this.visualizer=e}},{key:"setLanguage",value:function(e){this.lang=t.getLanguageId(e)}},{key:"processOptions",value:function(e){e||(e={});var a=e.profile?e.profile:this.defaultProfile,n=this.profiles[a].default,i=Object.assign({},n);return e.slow&&(i.speed=this.profiles[a].slow.speed),e.fast&&(i.speed=this.profiles[a].fast.speed),e.low&&(i.pitch=this.profiles[a].low.pitch),e.high&&(i.pitch=this.profiles[a].high.pitch),e.pitch&&(i.pitch=this.profiles[a].pitch.pitch),e.speed&&(i.speed=this.profiles[a].speed.speed),e.language?i.voice=t.getLanguageId(e.language):i.voice=this.lang,e.delay&&(i.delay=e.delay),i}},{key:"say",value:function(e,t){var a=this;return t=t||{},this.visualizer?new Promise((function(n){a.getWorkerAudioData(e,t,(function(e,t){a.visualizer.loadAudioData(e,t,n)}))})):new Promise((function(n){a.getWorkerAudioData(e,t,(function(e,t){t.connect(e.destination),t.onended=function(){t.connect(e.destination),e.close(),n()},t.start(0)}))}))}},{key:"getWorkerAudioData",value:function(e,a,n){e=e.toLowerCase(),a.profile||(a.profile=this.defaultProfile||"Jack");var i,o=this.profiles[a.profile].engine;if("sam"===o)i=t.workers.sam;else if("espeak"===o)if("string"===typeof t.workers.espeak)i=t.workers.espeak;else if(t.workers.espeak.length){var s=a.language;s.startsWith("en-")&&(s="en/"+l);for(var r=0;r<t.workers.espeak.length;r++)if(t.workers.espeak[r].language===s){i=t.workers.espeak[r].path;break}}if(!i)throw new Error("no worker path for this language");var p=new Worker(i);p.addEventListener("message",(function(e){if(console.log("received from worker:",e.data),e.data.rawdata){var t;if(window.AudioContext)t=new window.AudioContext;else{if(!window.webkitAudioContext)throw new Error("no AudioContext");console.log("creating webkitAudioContext"),t=new window.webkitAudioContext}if(!t)return void console.log("no audioContext 2");if(!t.createBufferSource)return void console.log("no createBufferSource");var a=t.createBufferSource();if("sam"===o){for(var i=e.data.rawdata,s=t.createBuffer(1,i.length,22050),r=s.getChannelData(0),l=0;l<i.length;l++)r[l]=i[l];a.buffer=s,console.log("returning sam"),n(t,a)}else t.decodeAudioData(e.data.rawdata,(function(e){a.buffer=e,console.log("returning espeak"),n(t,a)}),(function(e){console.log("error",e)}))}}),!1);var u=this.processOptions(a);p.postMessage({cmd:"speak",text:e,options:u})}},{key:"replacementsFor",value:function(e,t){return t.forEach((function(t){var a=t[0],n=t[1];e=e.replace(new RegExp(a,"gi"),n)})),e}},{key:"addProfile",value:function(e){["high","low","fast","slow"].forEach((function(t){if("default"!==t&&"name"!==t){var a=Object.assign({},e.default);for(var n in e[t])a[n]=e[t][n];e[t]=a}})),this.profiles[e.name]=e}},{key:"setProfile",value:function(e){return this.defaultProfile=e,this.profile=d.a[e],this}}]),t}(u.a);f.variants=["f1","f2","f3","f4","f5","m1","m2","m3","m4","m5","m6","m7","croak","klatt","klatt2","klatt3","whisper","whisperf"],f.profiles=d.a,f.languageIds={ca:"Catalan",cs:"Czech",de:"German",el:"Greek","en/en":"English","en/en-n":"English (N)","en/en-rp":"English (RP)","en/en-sc":"English (Scottish)","en/en-us":"English (US)","en/en-wm":"English (WM)",eo:"Esperanto",es:"Spanish","es-la":"Spanish (Latin America)",fi:"Finnish",fr:"French",hu:"Hungarian",it:"Italian",kn:"Kannada",la:"Latin",lv:"Latvian",nl:"Dutch",pl:"Polish",pt:"Portuguese (Brazil)","pt-pt":"Portuguese, European",ro:"Romanian",sk:"Slovak",sv:"Swedish",tr:"Turkish",zh:"Chinese (Mandarin)","zh-yue":"Chinese (Cantonese)"},f.getLanguageId=function(e){return e.indexOf("_")>-1&&(e=e.replace("_","-")),e.startsWith("en")&&-1===e.indexOf("/")&&(e="en/"+e),e},f.addProfile=function(e){for(var t in e)f.profiles[t]=e[t]},f.setWorkers=function(e){f.workers=e};var g=new c(new f);f.queue=g.queue.bind(g),f.clearQueue=g.clearQueue.bind(g),f.on=g.on.bind(g),f.once=g.once.bind(g);t.default=f},7:function(e,t,a){e.exports=a(49)}},[[29,1,2]]]);
//# sourceMappingURL=main.9f93b62d.chunk.js.map