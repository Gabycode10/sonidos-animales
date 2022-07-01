function startClassification()
{
  navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/9w1TrGCgz/model.json', modelReady);
}

function modelReady(){
  classifier.classify( gotResults);
}

function gotResults(error, results) {
  if (error) {
    console.error(error);
  } else {
    console.log(results);
    random_number_r = Math.floor(Math.random() * 255) + 1;
    random_number_g = Math.floor(Math.random() * 255) + 1;
    random_number_b = Math.floor(Math.random() * 255) + 1;

    document.getElementById("result_label").innerHTML = 'Escucho:  '+ results[0].label;
    document.getElementById("result_confidence").innerHTML = 'Presición:  '+ (results[0].confidence*100).toFixed(2)+" %";
    document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
    document.getElementById("result_confidence").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";

    img1=document.getElementById('alien1')
    img2=document.getElementById('alien2')
    img3=document.getElementById('alien3')
    img4=document.getElementById('alien4')

    if (results[0].label == "Ruido de fondo") {
      img1.src = 'gif caballo.jpe';
      img2.src = 'perro.jpe';
      img3.src = 'gato.jpe';
      img4.src = 'pajarito.jpe';
    } else if (results[0].label == "perro") {
      img1.src = 'caballo.jpe';
      img2.src = 'gif perro.jpe';
      img3.src = 'gato.jpe';
      img4.src = 'pajarito.jpe';
    } else if (results[0].label == "gato") {
      img1.src = 'caballo.jpe';
      img2.src = 'perro.jpe';
      img3.src = 'gif gato.jpe';
      img4.src = 'pajarito.jpe';
    }else if (results[0].label == "pajarito"){
      img1.src = 'caballo.jpe';
      img2.src = 'perro.jpe';
      img3.src = 'gato.jpe';
      img4.src = 'gif pajaro.jpe';
    }
  }
}
