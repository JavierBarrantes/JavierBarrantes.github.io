
(( ) =>{
    const cards=document.getElementsByClassName("section--card")
    for (const e in cards) {
        const info=cards[e].innerHTML
        cards[e].innerHTML=`<div class="setion__card"> 
        <img class="section__img" src="/Multimedia/Imagenes/producto${e}.jpg" alt="" data-img-mostrar="${e}">
                                </div> ${info}`
    }
    let arreglo=[
        {img:'/Multimedia/Imagenes/producto0.jpg'},
        {img:'/Multimedia/Imagenes/producto1.jpg'},
        {img:'/Multimedia/Imagenes/producto2.jpg'},
        {img:'/Multimedia/Imagenes/producto3.jpg'},
        {img:'/Multimedia/Imagenes/producto4.jpg'},
        {img:'/Multimedia/Imagenes/producto5.jpg'},
          
    ]
   let cont=0 /* contador para manjear el slide*/
   const slide=document.querySelector('.slideShow')
   const modal=document.querySelector('.modal')
   const productos=document.querySelectorAll('.section__img')
   const img_slide=document.querySelector('.slideShow img')
   const galeria=document.getElementsByClassName('img2')
   slide.addEventListener('click',function (event) {
       let atras=slide.querySelector('.atras'),
     adelante=slide.querySelector('.adelante'),
     img=slide.querySelector('img'),
     targ=event.target
     if(targ==atras){
        if(cont>0){
            img.src=arreglo[cont-1].img
            cont--
            }
        else{
            img.src=arreglo[arreglo.length-1].img
            cont=arreglo.length-1
        }
        }else if(targ==adelante){
            if(cont < arreglo.length-1){
                img.src=arreglo[cont+1].img
                cont++
            }else{  
                img.src=arreglo[0].img
                cont=0
            }
        }
   })
     Array.from(productos).forEach(img=>{
       img.addEventListener('click',event =>{
                /* img_slide.setAttribute(src=arreglo[imagenSlect].img)*/
                const imagenSlect=+event.target.dataset.imgMostrar
                img_slide.src=arreglo[imagenSlect].img
                cont = imagenSlect
                modal.style.opacity=1
                modal.style.visibility='visible'})
   })
   document.querySelector('.btn-cerrar').addEventListener('click',()=>{
    modal.style.opacity=0
    modal.style.visibility='hidden'
   })
    document.querySelector('.modal').addEventListener('click',()=>{
        modal.style.opacity=0
        modal.style.visibility='hidden'
    })

 })();

 

