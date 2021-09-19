var SpeechRecognition=window.webkitSpeechRecognition;
var recognition= new SpeechRecognition();
function start() {
 document.getElementById("textbox").innerHTML="";
 recognition.start();
}
recognition.onresult=function (event) {
console.log(event);
var Content=event.results[0][0].transcript;
document.getElementById("textbox").innerHTML=Content;
console.log(Content);
if (Content=="take my selfie") {
    speak();
   }

}
function speak() {
    var synth=window.speechSynthesis;
// var speakData=document.getElementById("textbox").value;
var speakData="taking your selfie in 5 seconds";
    var utterThis= new SpeechSynthesisUtterance(speakData);
    synth.speak(utterThis);
    Webcam.attach(camera);
    setTimeout(function(){
        Snapshot();
        save();
    }, 5000);
}
Webcam.set({
    width: 320,
    height: 240,
    image_format: 'png',
    jpeg_quality: 90
 });
camera=document.getElementById("camera");
function Snapshot() {
    Webcam.snap(function (data_uri) {
      document.getElementById("result").innerHTML="<img id='selfie' src='"+data_uri+"'>";
    });
}
function save() { 
image = document.getElementById("selfie").src ;
 link = document.getElementById("link");
 link.href = image;
 link.click(); }