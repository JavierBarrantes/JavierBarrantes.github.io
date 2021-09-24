let cont=0 /* contador para manjear el slide*/
const slide=document.querySelector('.slideShow')
const modal=document.querySelector('.modal')
const img_slide=document.querySelector('.slideShow img')
const galeria=document.getElementsByClassName('img2')
let arreglo=[
    {img:'/Multimedia/Imagenes/img0.jpg'},
    {img:'/Multimedia/Imagenes/img1.JPG'},
    {img:'/Multimedia/Imagenes/img2.jpg'},
    {img:'/Multimedia/Imagenes/img3.jpg'},
    {img:'/Multimedia/Imagenes/img4.jpg'},
    {img:'/Multimedia/Imagenes/img5.jpg'},
    {img:'/Multimedia/Imagenes/img6.jpg'},
    {img:'/Multimedia/Imagenes/img7.jpg'},
    {img:'/Multimedia/Imagenes/img8.jpg'},
    {img:'/Multimedia/Imagenes/img9.jpg'},
    {img:'/Multimedia/Imagenes/img10.jpg'},
    {img:'/Multimedia/Imagenes/img11.jpg'},
    {img:'/Multimedia/Imagenes/img12.jpg'},
    {img:'/Multimedia/Imagenes/img13.jpg'},
    {img:'/Multimedia/Imagenes/img14.jpg'},
    {img:'/Multimedia/Imagenes/img15.jpg'},
    {img:'/Multimedia/Imagenes/img16.jpg'},
    {img:'/Multimedia/Imagenes/img17.jpg'},
    {img:'/Multimedia/Imagenes/img18.jpg'},
    {img:'/Multimedia/Imagenes/img19.jpg'},
    {img:'/Multimedia/Imagenes/img20.jpg'},
    {img:'/Multimedia/Imagenes/img21.jpg'},
    {img:'/Multimedia/Imagenes/img22.jpg'},
    {img:'/Multimedia/Imagenes/img23.jpg'},
    {img:'/Multimedia/Imagenes/img24.jpg'},
]

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
