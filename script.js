let element=document.getElementById("text");
const recognition=new (window.speechRecognition || window.webkitSpeechRecognition);
function recStart(){
recognition.lang="en-GB";
recognition.continuous=true;

recognition.onresult=(event)=>{
for(const result of event.results){
element.innerText=result[0].transcript;
}
};
recognition.start();
}

const recBtn=document.getElementById("rec-start-btn");
recBtn.onclick=recStart;

function recStop(){
alert("speech recognition stopped");
recognition.stop();
}

const stopBtn=document.getElementById("rec-stop-btn");
stopBtn.onclick=recStop;