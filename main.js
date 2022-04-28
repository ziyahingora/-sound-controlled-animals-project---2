function startClassifition()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.startClassifier('https://teachablemachine.withgoogle.com/models/FI6sOCMNG/model.json',modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}