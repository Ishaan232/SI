function setup(){
    canvas=createCanvas(280,280);
    canvas.center();
    background("white");
    canvas.mouseReleased(C);
    anoyc=window.speechSynthesis;
}
function preload(){
    x=ml5.imageClassifier('DoodleNet');

}
function ganoyc(){
    background("white");
}
function draw(){
    strokeWeight(13);
    stroke(0);
    if (mouseIsPressed){
    line(pmouseX,pmouseY,mouseX,mouseY);
    }
}
function C(){
    x.classify(canvas,gotresult);
}
function gotresult(error,result){
    if(error){
        console.log(error);
    }
    else{
        console.log(result);
        document.getElementById("aid").innerHTML="label: "+result[0].label;
        document.getElementById("idk").innerHTML="Confidence: "+Math.round(result[0].confidence*100)+"%";
        y=new SpeechSynthesisUtterance(result[0].label);
        anoyc.speak(y)
    }
}