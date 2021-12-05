// console.log("SW WORKING too:)");
const URL = self.location.href
let ruta=''
URL.startsWith('https:')?ruta='/FLGJ-PWA-U2-P1/':ruta="/"

self.addEventListener('install',(event) => {
    console.log('SW instalado');
    
})

const lanzarFetch = async(URL) => {
    //document.getElementById("btn-fetch").disabled = true;
    const response =  await fetch(URL).then(res => res.json())
    //document.getElementById("btn-fetch").disabled = false;
    return response
}

self.addEventListener('activate',(event) => {
    console.log('SW: activado y controlando');
})

self.addEventListener('fetch', (event) => {
    //console.log({event});
    const fetchURL=event.request.url
    //console.log(event.request.url);
    //console.log(event);event
    if(event.request.url.includes('.png')){
        const response = fetch(`${ruta}img/gato.png`)
        //console.log('es una imagen');
        event.respondWith(response)
    }

  

    
    if(event.request.url.includes('style.css')){
        let response = new Response(`
        body{
            background-color:#5499a1 !important;
            color: #d0dadb;
        },`,{
            headers: {
                'Content-Type': 'text/css'
            }
        })
        event.respondWith(response)
    }
    
})