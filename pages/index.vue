<template>
  <div> <!--Principal-->
    <div class="w-full flex flex-col align-middle "> <!--Body-->
      <div class="w-full "> <!--Header-->
        <img class="mx-auto max-w-full" src="~/assets/img/header01.png" alt="Adorno día de muertos">
      </div> <!--Header-->
      <div class="w-10/12 mx-auto py-4 text-center mb-5"> <!--Encabezado-->
        <h1 class="text-6xl text-xempa mb-5 font-heading">Pide tu calaverita</h1>
        <p class="text-white font-body text-base">
          ¡Hola! Soy Jaime Santoyo, a.k.a. <a class="hover:underline" href="https://twitter.com/cygenta" target="_blank">@cygenta.</a>, Te comparto uno de mis diseños para que lo personalices con tu nombre y colores favoritos.
        </p>
      </div> <!--Encabezado-->
      <div class="w-full flex flex-row flex-wrap mb-2"> <!--Steps-->
        <div class="w-full md:w-1/2 px-5 mb-5"> <!--Personalizables-->
          <Calaverita :color="color" :name="name" ref="calaverita" />
        </div> <!--Personalizables-->
        <div class="w-full md:w-1/2 mb-5" > <!--Column Steps-->
          <div class="flex flex-row mt-10 mb-24 md:mr-4"> <!--Nickname-->
            <div class="w-20">
              <img class="min-w-20" src="~/assets/img/number1.png" alt="Paso 1">
            </div>
            <div class="pl-2">
              <h6 class="font-body font-bold text-xempa">Nombre:</h6>
              <div class="font-body font-normal mb-1 text-white">Ingresa el nombre o nickname que quieres que lleve tu calaverita</div>
              <input class="text-center shadow appearance-none border rounded md:w-full w-5/6 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" name="name" id="name" maxlength="20" v-model="name" placeholder="Escribe tu nombre">
            </div> 
          </div> <!--Nickname-->
          <div class="flex flex-row mb-24"> <!--Color-->
            <div class="w-20"> 
              <img class="min-w-20" src="~/assets/img/number2.png" alt="Paso 2">
            </div> 
            <div class="pl-2"> 
              <h6 class="font-body font-bold text-xempa">Color:</h6>
              <div class="font-body font-normal mb-1 text-white ">
                Da click en el recuadro y escoge tu color favorito.
              </div>
              <input type="color" name="color" id="color" v-model="color">
            </div> 
          </div> <!--Color-->
          <div class="flex flex-row mb-10"> <!--Download-->
            <div class="w-20"> 
              <img class="min-w-20" src="~/assets/img/number3.png" alt="Paso 3">
            </div>
            <div class="flex justify-start mt-4"> <!--Button-->
              <div>
                <button
                    @click="download"
                    target="_blank"
                    class="mt-4 ml-4 inline-flex items-center justify-center px-4 py-2 text-base rounded-md border font-body shadow-sm transition ease-in-out duration-150 focus:outline-none focus:shadow-outline bg-button border-button text-white hover:bg-xempa hover:border-xempa hover:text-gray-800">
                    Descarga tu calaverita
                  </button>
              </div>
            </div>
          </div>
        </div> <!--Column Steps-->
      </div> <!--Steps-->
      <div class="w-2/3 mx-auto py-4 text-center mb-5">
        <h6 class="font-heading text-4xl mb-3 text-xempa">¿Cómo surgió esta tradición?</h6>
        <p class="text-white text-lg">Llevo 12 años haciendo avatares de calaveritas. Es algo que disfruto mucho, porque alegra a otras personas también.<br>
        Originalmente, hago el diseño del año y algunas muestras una a una. Pero llegué a un punto en el que tuve que personalizar más de 1,000. Por lo que a partir del 2020, lancé este sitio junto con mis amigos de @LifeOnMarsMx. </p> 
        <p class="text-white text-lg mt-5">Compártelo con tus amigos o familiares para que todos tengan la suya.</p>
      </div> 
      <div class="w-full flex flex-row flex-wrap mb-5 text-lg"> 
        <div class="w-full"> 
          <div class="mb-6 text-center"> 
            <p class="text-white">
              Y ya de paso</p>
              <p class="text-white font-black">¿Me das para mi calaverita?
            </p>
            <a
                  href="https://www.paypal.com/donate/?hosted_button_id=VD6Y7KC32NLUA"
                  target="_blank"
                  class="mt-4 inline-flex items-center justify-center px-4 py-2 text-base leading-5 rounded-md border font-medium shadow-sm transition ease-in-out duration-150 focus:outline-none focus:shadow-outline bg-orange-400 border-orange-400 text-gray-900 hover:bg-orange-500 hover:border-orange-500 hover:text-gray-100"
                >
                  Donar con 
                  <svg class="h-5 ml-3" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 566.93 137.35"><defs></defs><title>paypal-seeklogo.com</title><path class="clscalaverita-1" d="M192.95,386.87h38.74c20.8,0,28.63,10.53,27.42,26-2,25.54-17.44,39.67-37.92,39.67H210.85c-2.81,0-4.7,1.86-5.46,6.9L201,488.74c-0.29,1.9-1.29,3-2.79,3.15H173.87c-2.29,0-3.1-1.75-2.5-5.54l14.84-93.93C186.79,388.66,188.85,386.87,192.95,386.87Z" transform="translate(-143.48 -354.54)"/><path class="clscalaverita-2" d="M361.14,385.13c13.07,0,25.13,7.09,23.48,24.76-2,21-13.25,32.62-31,32.67H338.11c-2.23,0-3.31,1.82-3.89,5.55l-3,19.07c-0.45,2.88-1.93,4.3-4.11,4.3H312.68c-2.3,0-3.1-1.47-2.59-4.76L322,390.29c0.59-3.76,2-5.16,4.57-5.16h34.54Zm-23.5,40.92h11.75c7.35-.28,12.23-5.37,12.72-14.55,0.3-5.67-3.53-9.73-9.62-9.7l-11.06.05-3.79,24.2h0Zm86.21,39.58c1.32-1.2,2.66-1.82,2.47-.34l-0.47,3.54c-0.24,1.85.49,2.83,2.21,2.83h12.82c2.16,0,3.21-.87,3.74-4.21l7.9-49.58c0.4-2.49-.21-3.71-2.1-3.71H436.32c-1.27,0-1.89.71-2.22,2.65l-0.52,3.05c-0.27,1.59-1,1.87-1.68.27-2.39-5.66-8.49-8.2-17-8-19.77.41-33.1,15.42-34.53,34.66-1.1,14.88,9.56,26.57,23.62,26.57,10.2,0,14.76-3,19.9-7.7h0ZM413.11,458c-8.51,0-14.44-6.79-13.21-15.11s9.19-15.11,17.7-15.11,14.44,6.79,13.21,15.11S421.63,458,413.11,458h0Zm64.5-44h-13c-2.68,0-3.77,2-2.92,4.46l16.14,47.26L462,488.21c-1.33,1.88-.3,3.59,1.57,3.59h14.61a4.47,4.47,0,0,0,4.34-2.13l49.64-71.2c1.53-2.19.81-4.49-1.7-4.49H516.63c-2.37,0-3.32.94-4.68,2.91l-20.7,30L482,416.82C481.46,415,480.11,414,477.62,414Z" transform="translate(-143.48 -354.54)"/><path class="clscalaverita-1" d="M583.8,385.13c13.07,0,25.13,7.09,23.48,24.76-2,21-13.25,32.62-31,32.67H560.78c-2.23,0-3.31,1.82-3.89,5.55l-3,19.07c-0.45,2.88-1.93,4.3-4.11,4.3H535.35c-2.3,0-3.1-1.47-2.59-4.76l11.93-76.45c0.59-3.76,2-5.16,4.57-5.16H583.8Zm-23.5,40.92h11.75c7.35-.28,12.23-5.37,12.72-14.55,0.3-5.67-3.53-9.73-9.62-9.7l-11.06.05-3.79,24.2h0Zm86.21,39.58c1.32-1.2,2.66-1.82,2.47-.34l-0.47,3.54c-0.24,1.85.49,2.83,2.21,2.83h12.82c2.16,0,3.21-.87,3.74-4.21l7.9-49.58c0.4-2.49-.21-3.71-2.1-3.71H659c-1.27,0-1.89.71-2.22,2.65l-0.52,3.05c-0.27,1.59-1,1.87-1.68.27-2.39-5.66-8.49-8.2-17-8-19.77.41-33.1,15.42-34.53,34.66-1.1,14.88,9.56,26.57,23.62,26.57,10.2,0,14.76-3,19.9-7.7h0ZM635.78,458c-8.51,0-14.44-6.79-13.21-15.11s9.19-15.11,17.7-15.11,14.44,6.79,13.21,15.11S644.29,458,635.78,458h0Zm59.13,13.74h-14.8a1.75,1.75,0,0,1-1.81-2l13-82.36a2.55,2.55,0,0,1,2.46-2h14.8a1.75,1.75,0,0,1,1.81,2l-13,82.36A2.55,2.55,0,0,1,694.91,471.76Z" transform="translate(-143.48 -354.54)"/><path class="clscalaverita-2" d="M168.72,354.54h38.78c10.92,0,23.88.35,32.54,8,5.79,5.11,8.83,13.24,8.13,22-2.38,29.61-20.09,46.2-43.85,46.2H185.2c-3.26,0-5.41,2.16-6.33,8l-5.34,34c-0.35,2.2-1.3,3.5-3,3.66H146.6c-2.65,0-3.59-2-2.9-6.42L160.9,361C161.59,356.62,164,354.54,168.72,354.54Z" transform="translate(-143.48 -354.54)"/><path class="clscalaverita-3" d="M179.43,435.29l6.77-42.87c0.59-3.76,2.65-5.56,6.75-5.56h38.74c6.41,0,11.6,1,15.66,2.85-3.89,26.36-20.94,41-43.26,41H185C182.44,430.72,180.56,432,179.43,435.29Z" transform="translate(-143.48 -354.54)"/></svg>
                </a>
                <div class="flex justify-center"> <!--Compartir-->
                <ShareNetwork
                    network="facebook"
                    url="http://calaveritas.lifeonmars.com.mx"
                    title="Pide tu calaverita"
                    description="Crea tu avatar de calaverita personalizada para Día de Muertos."
                    quote="¡Mira mi nuevo avatar de #DíaDeMuertos! Personaliza tu #calaverita diseñada por @cygenta en: calaveritas.lifeonmars.com.mx!"
                    tags="DíaDeMuertos,calaverita"
                    class="cursor-pointer mt-6 mx-4 text-gray-100"
                  >
                    <svg id="icon_fb" data-name="icon fb" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 249.33 249.49" width="3rem"><defs><style>.cls-fb-1{fill:#fefefe;}.cls-fb-2{fill:#1877f1;}</style></defs><title>fb_icon</title><ellipse id="fb" class="cls-fb-1" cx="124.95" cy="124.99" rx="123" ry="124.5"/><path id="fb-2" data-name="fb" class="cls-fb-2" d="M356.05,74.47V54c1-2,.74-4.21,1.05-6.32C362,14,377.68-13.6,404.61-34.39c28.44-22,60.8-29.9,96.23-24.43a118.31,118.31,0,0,1,66.32,33.29C597,3.85,609.38,39.63,604.25,81.12c-3.21,25.94-14.17,48.59-32,67.76a123.1,123.1,0,0,1-69.81,38.2c-1.86.34-2.27,0-2.27-1.86q.09-41.4,0-82.81c0-1.68.4-2.18,2.13-2.16,8,.1,15.91,0,23.87,0,3.33,0,3.25,0,3.73-3.32,1.49-10.09,2.95-20.17,4.63-30.22.38-2.21-.11-2.56-2.14-2.55-10.07.09-20.14,0-30.2.08-1.6,0-2-.44-2-2,.08-7.14-.09-14.29.06-21.43.24-11.12,5.76-18,16.84-19.13,5.75-.59,11.51-.2,17.27-.28,1.41,0,2-.27,2-1.85q-.12-13.65,0-27.28c0-1.37-.51-1.86-1.76-2-11.51-1.41-23-2.94-34.64-1.51-9.31,1.15-17.73,4.44-24.67,10.91-9.81,9.14-13.52,20.91-13.92,33.88-.29,9.49-.11,19,0,28.49,0,1.85-.5,2.28-2.3,2.26-9.09-.1-18.18,0-27.28-.08-1.66,0-2.19.36-2.18,2.11q.13,16,0,31.91c0,1.77.56,2.11,2.2,2.1,9-.08,18,0,27-.09,2,0,2.52.5,2.52,2.53q-.1,41-.05,82.07v2.57c-2.19-.39-4.19-.69-6.15-1.11a123.06,123.06,0,0,1-60.68-32.12,123.17,123.17,0,0,1-36.56-68.59C357.22,81.89,357.29,78.07,356.05,74.47Z" transform="translate(-356.05 60.49)"/></svg>
                </ShareNetwork>
                <ShareNetwork
                    network="twitter"
                    url="http://calaveritas.lifeonmars.com.mx"
                    title="¡Mira mi nuevo avatar de #DíaDeMuertos! Personaliza tu #calaverita diseñada por @cygenta en: "
                    description="Crea tu avatar de calaverita personalizada para Día de Muertos."
                    quote="¡Mira mi nuevo avatar de #DíaDeMuertos! Personaliza tu #calaverita diseñada por @cygenta en: calaveritas.lifeonmars.com.mx!"
                    tags="DíaDeMuertos,calaverita"
                    class="cursor-pointer mt-6 mx-4 text-gray-100"
                  >
                    <svg id="TT_icon" data-name="TT icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 245.87 246.43" width="3rem"><defs><style>.cls-tw-1{fill:#04a9f3;}.cls-tw-2{fill:#fefefe;}</style></defs><title>Sin título-1</title><path class="cls-tw-1" d="M-137.83,320.92h-19.69c-2-1-4.3-.76-6.47-1.07-26.8-3.87-50-15.07-69.39-34A120.9,120.9,0,0,1-269,216.25c-.41-2.7-.23-5.52-1.33-8.12V188c1.08-2.52.88-5.26,1.31-7.88,6.22-38.19,25.56-68,58.89-87.45,40.83-23.81,83.13-24.32,124.11-.76C-47,114.35-26.59,149.43-24.63,194.51c1.22,28.08-7,53.73-23.82,76.29q-30.45,40.82-81,48.81C-132.24,320.05-135.13,319.89-137.83,320.92Zm68.92-171.69c-5.3,2-10.63,3.77-16.44,4.1a34.45,34.45,0,0,0,13-17.46,71.52,71.52,0,0,1-18.21,7.35,3.76,3.76,0,0,1-4-1,32.59,32.59,0,0,0-48.42,4.3,32.2,32.2,0,0,0-6,24.7c.29,1.92-.08,2.4-2,2.07-2.44-.42-4.95-.42-7.38-.83-20.87-3.5-38.69-12.78-53.24-28.21-1.45-1.53-2.84-3.11-4.38-4.8a31.34,31.34,0,0,0-4.35,18.62c.79,10.08,5.39,18.18,14,24.74a27.22,27.22,0,0,1-12.38-2.93c-1.7-.83-2-.44-1.86,1.3a32.36,32.36,0,0,0,11.79,23.28c3.89,3.32,8.45,5.39,13.91,6.91a36.65,36.65,0,0,1-14.28.65,32.47,32.47,0,0,0,11.46,16c5.39,4.09,11.58,6.15,18.86,6.69-14.24,10.76-29.84,14.86-47,13.86a11.1,11.1,0,0,0,2.17,1.55,90.86,90.86,0,0,0,41.62,12.46c17.63.91,34.6-2,49.94-10.85,32-18.55,47.43-47,48.12-83.66a4.44,4.44,0,0,1,1.93-3.94,54.49,54.49,0,0,0,13.47-14.48c.11-.11.32-.26.3-.31C-68.46,149-68.69,149.12-68.91,149.23Z" transform="translate(270.38 -74.49)"/><path class="cls-tw-2" d="M-68.82,149.27a54.82,54.82,0,0,1-13.47,14.48,4.47,4.47,0,0,0-1.94,3.94c-.68,36.69-16.09,65.11-48.12,83.66-15.33,8.88-32.31,11.76-49.94,10.85a90.85,90.85,0,0,1-41.61-12.46,10.86,10.86,0,0,1-2.18-1.55c17.17,1,32.76-3.09,47-13.86-7.27-.54-13.46-2.59-18.86-6.69a32.45,32.45,0,0,1-11.45-16,36.67,36.67,0,0,0,14.28-.65c-5.46-1.52-10-3.59-13.91-6.91a32.36,32.36,0,0,1-11.79-23.28c-.12-1.74.15-2.13,1.86-1.29a27.27,27.27,0,0,0,12.37,2.92c-8.6-6.56-13.21-14.66-14-24.74a31.29,31.29,0,0,1,4.35-18.62c1.54,1.69,2.93,3.27,4.37,4.81,14.55,15.42,32.37,24.7,53.24,28.2,2.44.41,5,.41,7.39.83,1.93.33,2.29-.15,2-2.07a32.16,32.16,0,0,1,6.05-24.7,32.58,32.58,0,0,1,48.42-4.29,3.77,3.77,0,0,0,4,1,71.45,71.45,0,0,0,18.2-7.35,34.46,34.46,0,0,1-13,17.47c5.82-.33,11.15-2.14,16.44-4.11Z" transform="translate(270.38 -74.49)"/></svg>
                </ShareNetwork>
              </div>
          </div> 
        </div> 
      </div> 
    </div> <!--Body-->
    <footer class="w-full flex flex-row bg-prp text-white text-sm align-middle py-3"> <!--Footer-->
        <div class="w-1/2 text-center">
           Copyright © 2020. Diseño por <a class="hover:underline" href="https://twitter.com/cygenta" target="_blank">@cygenta.</a>
        </div>
        <div class="w-1/2 text-center align-middle">
          Hecho con amor por <a class="hover:underline" href="https://twitter.com/lifeonmarsmex" target="_blank">@LifeonMarsMx.</a>
        </div>
    </footer> <!--Footer-->
  </div> <!--Principal-->
</template>

<script>
export default {
  data() {
    return {
      color: '#FFAC1A',
      name: ''
    }
  },
  methods:{
    download() {
      this.$ga.event('Calaverita', 'Download', 'Download calaverita')
      this.$refs.calaverita.download();
    }
  }
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/

body {
  background: url('../assets/img/pattern02.png') repeat, 
  linear-gradient(180deg, rgba(60,3,74,1) , rgba(92,21,61,1) , rgba(120,38,48,1) , rgba(255,122,0,1));
}


.clscalaverita-1{fill:#009ee3;}
.clscalaverita-1,.clscalaverita-2,.clscalaverita-3{fill-rule:evenodd;}
.clscalaverita-2{fill:#113984;}
.clscalaverita-3{fill:#172c70;}
</style>
