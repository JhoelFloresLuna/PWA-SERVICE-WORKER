console.log("Hola mundo desde app");
console.log(window.location.href);
document.getElementById('img-show').style.display = 'none';
if(navigator.serviceWorker){
    console.log("Bien");
    navigator.serviceWorker.register('/sw.js')
}else{
    console.log("No funciona");
}


let btn = document.querySelector('#btn-fetch')

const lanzarFetch = async() => {
    document.getElementById("btn-fetch").disabled = true;
    document.getElementById('img-show').style.display = 'block';
    const {answer, image} =  await fetch('https://yesno.wtf/api').then(res => res.json())
    console.log(image);
    document.getElementById("img-fetch").src=image
    document.getElementById("btn-fetch").disabled = false;
}