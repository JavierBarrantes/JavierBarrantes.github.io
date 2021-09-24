let cont=0 /* contador para manjear el slide*/
const slide=document.querySelector('.slideShow')
const modal=document.querySelector('.modal')
const img_slide=document.querySelector('.slideShow img')
const galeria=document.getElementsByClassName('img2')
let arreglo=[
    {img:'/Multimedia/Imagenes/img0.JPG'},
    {img:'/Multimedia/Imagenes/img1.JPG'},
    {img:'/Multimedia/Imagenes/img2.JPG'},
    {img:'/Multimedia/Imagenes/img3.JPG'},
    {img:'/Multimedia/Imagenes/img4.JPG'},
    {img:'/Multimedia/Imagenes/img5.JPG'},
    {img:'/Multimedia/Imagenes/img6.JPG'},
    {img:'/Multimedia/Imagenes/img7.JPG'},
    {img:'/Multimedia/Imagenes/img8.JPG'},
    {img:'/Multimedia/Imagenes/img9.JPG'},
    {img:'/Multimedia/Imagenes/img10.JPG'},
    {img:'/Multimedia/Imagenes/img11.JPG'},
    {img:'/Multimedia/Imagenes/img12.JPG'},
    {img:'/Multimedia/Imagenes/img13.JPG'},
    {img:'/Multimedia/Imagenes/img14.JPG'},
    {img:'/Multimedia/Imagenes/img15.JPG'},
    {img:'/Multimedia/Imagenes/img16.JPG'},
    {img:'/Multimedia/Imagenes/img17.JPG'},
    {img:'/Multimedia/Imagenes/img18.JPG'},
    {img:'/Multimedia/Imagenes/img19.JPG'},
    {img:'/Multimedia/Imagenes/img20.JPG'},
    {img:'/Multimedia/Imagenes/img21.JPG'},
    {img:'/Multimedia/Imagenes/img22.JPG'},
    {img:'/Multimedia/Imagenes/img23.JPG'},
    {img:'/Multimedia/Imagenes/img24.JPG'},
]
console.log(arreglo.length)
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
  Array.from(galeria).forEach(img=>{
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