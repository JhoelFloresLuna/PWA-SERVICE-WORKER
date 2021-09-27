// console.log("SW WORKING too:)");
const URL= 'https://yesno.wtf/api'
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
        const response = fetch('./img/3.png')
        //console.log('es una imagen');
        event.respondWith(response)
    }

    if(event.request.url.includes('https://')){
        console.log('entro al fetch');
        const response = fetch(event.request.url)
        //console.log('es una imagen');
        
        //event.respondWith(new Response(`{text:'hecho'}`, {headers:{'Content-Type':'text/json'}}))
       
        /* const {answer, image} = await lanzarFetch(event.request.url)
        console.log(event.request.url);
        console.log(image);
        event.respondWith(image) */
        /* console.log(image);
         */
    }
    


    
    /* if(event.request.url.includes('style.css')){
        const newResponse = new Response(`{body{
            background-color: rgb(58, 156, 124) !important;
            color:rgb(15, 143, 143);
        }}`, {headers:{'Content-Type':'text/css'}})
        event.respondWith(newResponse)

    } */
    
})