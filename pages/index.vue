<template>
  <div>
    <div class="w-full flex flex-col px-4">
      <div class="w-full py-4">
        <img class="mx-auto max-w-full" src="~/assets/img/header.png" alt="">
      </div>
      <div class="w-10/12 mx-auto py-4 text-center mb-5">
        <h1 class="text-5xl text-xempa mb-5">Pide tu calaverita</h1>
        <p class="text-white">
          ¡Hola! Soy Jaime Santoyo, a.k.a. <a class="hover:underline" href="https://twitter.com/cygenta" target="_blank">@cygenta.</a>, o “Jaime el de las calaveritas” y traigo un diseño que te quiero compartir para que lo personalices con tu nombre y tu color favorito.
        </p>
      </div>
      <div class="w-full flex flex-row flex-wrap mb-5">
        <div class="w-full md:w-1/2 px-5 mb-5">
          <Calaverita :color="color" :name="name" ref="calaverita" />
        </div>
        <div class="w-full md:w-1/2 mb-5">
          <div class="flex flex-row mb-10">
            <div class="w-20">
              <img class="min-w-20" src="~/assets/img/step01.png" alt="">
            </div>
            <div class="text-white pl-2">
              <h6 class="font-heading font-bold">Nombre:</h6>
              <div class="font-body font-normal mb-1">Ingresa el nombre o nickname que quieres que lleve tu calaverita</div>
              <input class="text-center shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" name="name" id="name" maxlength="20" v-model="name" placeholder="Escribe tu nombre">
            </div>
          </div>
          <div class="flex flex-row mb-10">
            <div class="w-20">
              <img class="min-w-20" src="~/assets/img/step02.png" alt="">
            </div>
            <div class="text-white pl-2">
              <h6 class="font-heading font-bold">Color:</h6>
              <div class="font-body font-normal mb-1">Da clic en el recuadro de color y selecciona tu recuadro favorito</div>
              <input type="color" name="color" id="color" v-model="color">
            </div>
          </div>
          <div class="flex flex-row mb-10">
            <div class="w-20">
              <img class="min-w-20" src="~/assets/img/step03.png" alt="">
            </div>
            <div class="text-white pl-2">
              <h6 class="font-heading font-bold">Comparte con tus amigos:</h6>
              <div class="font-body font-normal mb-1">*Compartir es tan lindo, que debería ser obligatorio. <br> Personaliza tu calaverita y presúmela con tu amigos</div>
              <div class="flex justify-start">
                <ShareNetwork
                    network="facebook"
                    url="http://calaveritas.lifeonmars.com.mx"
                    title="Pide tu calaverita"
                    description="Crea tu avatar de calaverita personalizada para Día de Muertos."
                    quote="¡Mira mi nuevo avatar de #DíaDeMuertos! Personaliza tu #calaverita diseñada por @cygenta en: calaveritas.lifeonmars.com.mx!"
                    tags="DíaDeMuertos,calaverita"
                    class="cursor-pointer mt-4 mr-5 inline-flex items-center justify-center px-4 py-2 text-base leading-5 rounded-md border font-medium shadow-sm transition ease-in-out duration-150 focus:outline-none focus:shadow-outline bg-fb border-fb text-gray-100 hover:bg-blue-500 hover:border-indigo-400 hover:text-gray-100"
                  >
                    <svg class="mr-1" width="20" height="20" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="facebook-f" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" class=""></path></svg>
                    Compartir
                </ShareNetwork>
                <ShareNetwork
                    network="twitter"
                    url="http://calaveritas.lifeonmars.com.mx"
                    title="¡Mira mi nuevo avatar de #DíaDeMuertos! Personaliza tu #calaverita diseñada por @cygenta en: "
                    description="Crea tu avatar de calaverita personalizada para Día de Muertos."
                    quote="¡Mira mi nuevo avatar de #DíaDeMuertos! Personaliza tu #calaverita diseñada por @cygenta en: calaveritas.lifeonmars.com.mx!"
                    tags="DíaDeMuertos,calaverita"
                    class="cursor-pointer mt-4 inline-flex items-center justify-center px-4 py-2 text-base leading-5 rounded-md border font-medium shadow-sm transition ease-in-out duration-150 focus:outline-none focus:shadow-outline bg-tw border-tw text-gray-100 hover:bg-blue-600 hover:border-blue-500 hover:text-gray-100"
                  >
                    <svg class="mr-1" width="20" height="20" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="twitter" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" class=""></path></svg>
                    Tweet
                </ShareNetwork>
              </div>
            </div>
          </div>
          <div class="flex flex-row mb-10">
            <div class="w-20">
              <img class="min-w-20" src="~/assets/img/step04.png" alt="">
            </div>
            <div class="text-white pl-2">
              <h6 class="font-heading font-bold">¿Me das para mi calaverita?</h6>
              <div class="font-body font-normal mb-1">(Opcional)</div>
                <a
                  href="https://www.paypal.com/donate/?hosted_button_id=VD6Y7KC32NLUA"
                  target="_blank"
                  class="mt-4 inline-flex items-center justify-center px-4 py-2 text-base leading-5 rounded-md border font-medium shadow-sm transition ease-in-out duration-150 focus:outline-none focus:shadow-outline bg-orange-400 border-orange-400 text-gray-900 hover:bg-orange-500 hover:border-orange-500 hover:text-gray-100"
                >
                  Donar con 
                  <svg class="h-5 ml-3" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 566.93 137.35"><defs></defs><title>paypal-seeklogo.com</title><path class="clscalaverita-1" d="M192.95,386.87h38.74c20.8,0,28.63,10.53,27.42,26-2,25.54-17.44,39.67-37.92,39.67H210.85c-2.81,0-4.7,1.86-5.46,6.9L201,488.74c-0.29,1.9-1.29,3-2.79,3.15H173.87c-2.29,0-3.1-1.75-2.5-5.54l14.84-93.93C186.79,388.66,188.85,386.87,192.95,386.87Z" transform="translate(-143.48 -354.54)"/><path class="clscalaverita-2" d="M361.14,385.13c13.07,0,25.13,7.09,23.48,24.76-2,21-13.25,32.62-31,32.67H338.11c-2.23,0-3.31,1.82-3.89,5.55l-3,19.07c-0.45,2.88-1.93,4.3-4.11,4.3H312.68c-2.3,0-3.1-1.47-2.59-4.76L322,390.29c0.59-3.76,2-5.16,4.57-5.16h34.54Zm-23.5,40.92h11.75c7.35-.28,12.23-5.37,12.72-14.55,0.3-5.67-3.53-9.73-9.62-9.7l-11.06.05-3.79,24.2h0Zm86.21,39.58c1.32-1.2,2.66-1.82,2.47-.34l-0.47,3.54c-0.24,1.85.49,2.83,2.21,2.83h12.82c2.16,0,3.21-.87,3.74-4.21l7.9-49.58c0.4-2.49-.21-3.71-2.1-3.71H436.32c-1.27,0-1.89.71-2.22,2.65l-0.52,3.05c-0.27,1.59-1,1.87-1.68.27-2.39-5.66-8.49-8.2-17-8-19.77.41-33.1,15.42-34.53,34.66-1.1,14.88,9.56,26.57,23.62,26.57,10.2,0,14.76-3,19.9-7.7h0ZM413.11,458c-8.51,0-14.44-6.79-13.21-15.11s9.19-15.11,17.7-15.11,14.44,6.79,13.21,15.11S421.63,458,413.11,458h0Zm64.5-44h-13c-2.68,0-3.77,2-2.92,4.46l16.14,47.26L462,488.21c-1.33,1.88-.3,3.59,1.57,3.59h14.61a4.47,4.47,0,0,0,4.34-2.13l49.64-71.2c1.53-2.19.81-4.49-1.7-4.49H516.63c-2.37,0-3.32.94-4.68,2.91l-20.7,30L482,416.82C481.46,415,480.11,414,477.62,414Z" transform="translate(-143.48 -354.54)"/><path class="clscalaverita-1" d="M583.8,385.13c13.07,0,25.13,7.09,23.48,24.76-2,21-13.25,32.62-31,32.67H560.78c-2.23,0-3.31,1.82-3.89,5.55l-3,19.07c-0.45,2.88-1.93,4.3-4.11,4.3H535.35c-2.3,0-3.1-1.47-2.59-4.76l11.93-76.45c0.59-3.76,2-5.16,4.57-5.16H583.8Zm-23.5,40.92h11.75c7.35-.28,12.23-5.37,12.72-14.55,0.3-5.67-3.53-9.73-9.62-9.7l-11.06.05-3.79,24.2h0Zm86.21,39.58c1.32-1.2,2.66-1.82,2.47-.34l-0.47,3.54c-0.24,1.85.49,2.83,2.21,2.83h12.82c2.16,0,3.21-.87,3.74-4.21l7.9-49.58c0.4-2.49-.21-3.71-2.1-3.71H659c-1.27,0-1.89.71-2.22,2.65l-0.52,3.05c-0.27,1.59-1,1.87-1.68.27-2.39-5.66-8.49-8.2-17-8-19.77.41-33.1,15.42-34.53,34.66-1.1,14.88,9.56,26.57,23.62,26.57,10.2,0,14.76-3,19.9-7.7h0ZM635.78,458c-8.51,0-14.44-6.79-13.21-15.11s9.19-15.11,17.7-15.11,14.44,6.79,13.21,15.11S644.29,458,635.78,458h0Zm59.13,13.74h-14.8a1.75,1.75,0,0,1-1.81-2l13-82.36a2.55,2.55,0,0,1,2.46-2h14.8a1.75,1.75,0,0,1,1.81,2l-13,82.36A2.55,2.55,0,0,1,694.91,471.76Z" transform="translate(-143.48 -354.54)"/><path class="clscalaverita-2" d="M168.72,354.54h38.78c10.92,0,23.88.35,32.54,8,5.79,5.11,8.83,13.24,8.13,22-2.38,29.61-20.09,46.2-43.85,46.2H185.2c-3.26,0-5.41,2.16-6.33,8l-5.34,34c-0.35,2.2-1.3,3.5-3,3.66H146.6c-2.65,0-3.59-2-2.9-6.42L160.9,361C161.59,356.62,164,354.54,168.72,354.54Z" transform="translate(-143.48 -354.54)"/><path class="clscalaverita-3" d="M179.43,435.29l6.77-42.87c0.59-3.76,2.65-5.56,6.75-5.56h38.74c6.41,0,11.6,1,15.66,2.85-3.89,26.36-20.94,41-43.26,41H185C182.44,430.72,180.56,432,179.43,435.29Z" transform="translate(-143.48 -354.54)"/></svg>
                </a>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full flex flex-row flex-wrap mb-5">
        <div class="w-full">
          <div class="mb-6 text-center">
            <button
              @click="download"
              target="_blank"
              class="mt-4 mb-4 inline-flex items-center justify-center px-4 py-2 text-base leading-5 rounded-md border font-heading font-bold shadow-sm transition ease-in-out duration-150 focus:outline-none focus:shadow-outline bg-orange-400 border-orange-400 text-gray-900 hover:bg-orange-500 hover:border-orange-500 hover:text-gray-800"
            >
              Descarga tu calaverita
            </button>
            <p class="text-white">
              * Comparte antes de descargar
            </p>
          </div>
        </div>
      </div>
      <div class="w-full flex flex-row flex-wrap mb-5">
        <div class="hidden md:block md:w-1/3">
          <img class="h-48" src="~/assets/img/flowers-l.png" alt="">
        </div>
        <div class="w-full md:w-1/3">
          <p class="text-center text-white py-20">
            El muerto a la sepultura y el vivo a la travesura
          </p>
        </div>
        <div class="hidden md:block md:w-1/3 text-right">
          <img class="h-48 ml-auto" src="~/assets/img/flowers-r.png" alt="">
        </div>
      </div>
    </div>
    <footer class="w-full flex flex-row mb-1 pt-10 bg-prp text-white text-sm">
        <div class="w-1/2 text-center">
           Copyright © 2020. Diseño por <a class="hover:underline" href="https://twitter.com/cygenta" target="_blank">@cygenta.</a>
        </div>
        <div class="w-1/2 text-center">
          Hecho con amor por <a class="hover:underline" href="https://twitter.com/lifeonmarsmex" target="_blank">@LifeonMarsMx.</a>
        </div>
    </footer>
  </div>
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
  background: url('../assets/img/pattern.jpg');
}

.clscalaverita-1{fill:#009ee3;}
.clscalaverita-1,.clscalaverita-2,.clscalaverita-3{fill-rule:evenodd;}
.clscalaverita-2{fill:#113984;}
.clscalaverita-3{fill:#172c70;}
</style>
