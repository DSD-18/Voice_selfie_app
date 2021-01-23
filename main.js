var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start(){
    console.log("insidestartfunction");
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}
recognition.onresult=function(event){
    console.log(event);
    var content=event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML = content; 
   if(content == "take my selfie"){
    speak();
   }
}
function speak(){
    var synth=window.speechSynthesis;
    speak_data="Taking your selfie in 5 seconds";
    var utterthis=new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterthis);
    Webcam.attach(camera);
    setTimeout(function(){
        take_snap_shot();
        save();
    },5000);
}
webcam.set({
    width:360,height:250,
    image_format:"jpeg",
    jpeg_quality:90
});
camera=document.getElementById("camera");

function take_snap_shot(){
    Webcam.snap(function(image){
        document.getElementById("result").innerHTML="<img id='selfie' src='"+image+"'> ";
    });
}

function save(){
    link = document.getElementById("link");
    image = document.getElementById("selfie").src;
    link.href = image;
    link.click();
}