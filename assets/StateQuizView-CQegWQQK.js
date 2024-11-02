import{_ as l,c as r,a as e,w as h,f as d,t as a,b as c,o}from"./index-DVYY-dB1.js";const m={data(){return{states:[{name:"California",path:"M100,100 L150,150 L200,100 L150,50 Z",viewBox:"0 0 300 200"},{name:"Texas",path:"M50,150 L100,200 L150,150 L100,100 Z",viewBox:"0 0 300 200"},{name:"Florida",path:"M200,50 L250,100 L300,50 L250,0 Z",viewBox:"0 0 300 200"}],currentState:null,userGuess:"",guessSubmitted:!1,isCorrect:!1,score:0,quizOver:!1,totalStates:0,usedStates:[]}},mounted(){this.totalStates=this.states.length,this.nextState()},methods:{submitGuess(){this.guessSubmitted=!0,this.isCorrect=this.userGuess.trim().toLowerCase()===this.currentState.name.toLowerCase(),this.isCorrect&&this.score++,this.usedStates.push(this.currentState)},nextState(){if(this.states.length===0){this.quizOver=!0;return}const n=Math.floor(Math.random()*this.states.length);this.currentState=this.states.splice(n,1)[0],this.userGuess="",this.guessSubmitted=!1,this.isCorrect=!1},resetQuiz(){this.states=this.states.concat(this.usedStates),this.usedStates=[],this.score=0,this.quizOver=!1,this.totalStates=this.states.length,this.nextState()}}},S={class:"state-quiz"},v={key:0},f={class:"state-image"},_=["viewBox"],g=["d"],p={class:"guess-input"},b=["disabled"],x=["disabled"],k={key:0,class:"feedback"},w={key:0},C={key:1},L={key:1};function B(n,s,z,G,t,u){return o(),r("div",S,[s[5]||(s[5]=e("h2",null,"Gissa delstaten utifrån dess kontur",-1)),t.quizOver?(o(),r("div",L,[s[4]||(s[4]=e("h3",null,"Du har gissat på alla delstater!",-1)),e("p",null,"Du fick "+a(t.score)+" av "+a(t.totalStates)+" rätt.",1),e("button",{onClick:s[3]||(s[3]=(...i)=>u.resetQuiz&&u.resetQuiz(...i))},"Börja om")])):(o(),r("div",v,[e("div",f,[(o(),r("svg",{viewBox:t.currentState.viewBox,xmlns:"http://www.w3.org/2000/svg",width:"300",height:"200"},[e("path",{d:t.currentState.path,fill:"#cccccc",stroke:"#333333"},null,8,g)],8,_))]),e("div",p,[h(e("input",{"onUpdate:modelValue":s[0]||(s[0]=i=>t.userGuess=i),placeholder:"Skriv namnet på delstaten",disabled:t.guessSubmitted},null,8,b),[[d,t.userGuess]]),e("button",{onClick:s[1]||(s[1]=(...i)=>u.submitGuess&&u.submitGuess(...i)),disabled:t.guessSubmitted}," Skicka in gissning ",8,x)]),t.guessSubmitted?(o(),r("div",k,[t.isCorrect?(o(),r("p",w,"Rätt! Det är "+a(t.currentState.name)+".",1)):(o(),r("p",C,"Fel. Rätt svar är "+a(t.currentState.name)+".",1)),e("button",{onClick:s[2]||(s[2]=(...i)=>u.nextState&&u.nextState(...i))},"Nästa delstat")])):c("",!0)]))])}const M=l(m,[["render",B]]);export{M as default};
