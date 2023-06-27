import Image from 'next/image'
import ClockIcon from "@heroicons/react/20/solid/ClockIcon";
import MapPinIcon from "@heroicons/react/20/solid/MapPinIcon";
import TruckIcon from "@heroicons/react/20/solid/TruckIcon";
// import EnvelopeIcon from "@heroicons/react/20/solid/EnvelopeIcon";
// import PhoneIcon from "@heroicons/react/20/solid/PhoneIcon";

import Link from 'next/link'

export default function Home () {
  return (
    <>
      <div className="fixed bottom-3 right-3 md:bottom-10 md:right-10 z-50 hover:animate-pulse flex items-center cursor-pointer" >
        <Link href="https://api.whatsapp.com/send?phone=593984660469" target="_blank" rel="noopener noreferrer">
          <div className="flex">
            <p className="bg-white p-3 rounded-full">Contáctanos ahora!</p>
            <Image src="/icons8-whatsapp.svg" width={50} height={50} alt="whatsapp" />
          </div>
        </Link>
      </div>
      <section id="inicio">
        <div className="h-screen">
          <div className="contentimage">
            <video
              className="object-center object-cover h-full w-full"
              src="/video.mp4"
              autoPlay
              muted
              loop
            />
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center w-full h-full">
            <div className="w-full flex justify-center">
              <div>
                <h2 className="text-2xl font-bold">Laboratorio de Análisis Clínico</h2>
                <div className="flex flex-row flex-wrap">
                  <h2 className="font-['ethnocentric'] text-6xl text-indigo-700">Micro</h2>
                  <h2 className="font-['ethnocentric'] text-6xl text-lime-800">biolac</h2>
                </div>
              </div>
            </div>
            <div className="w-full flex justify-center pt-5 items-center">
              <button className="bg-indigo-700 hover:bg-indigo-300 hover:text-indigo-950 text-white transition-colors duration-500 px-5 py-3 font-medium lg:text-xl rounded-full">Resultados en línea</button>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className=" bg-gradient-radial from-cyan-300 to-white to-80%">
          <div className="flex flex-wrap justify-center lg:text-lg text-white">
            <div className="md:m-5 m-2 flex flex-col rounded-md text-center p-5 bg-indigo-400 hover:bg-indigo-600 w-[220px] transition-colors duration-500">
              <ClockIcon className="h-20 w-20 mx-auto top-1" />
              <div className="my-auto">
                <h2 className="font-medium text-lg">Horario de Atención</h2>
                <p className="font-medium">Lunes a Viernes</p>
                <p>7:00 am - 6:30 pm</p>
                <p className="font-medium">Sábado</p>
                <p>7:00 am - 1:00 pm</p>
              </div>
            </div>
            <div className="md:m-5 m-2 flex flex-col rounded-md text-center p-5 bg-indigo-400 hover:bg-indigo-600 w-[220px] transition-colors duration-500">
              <MapPinIcon className="h-20 w-20 mx-auto top-1" />
              <div className="my-auto">
                <h2 className="font-medium text-lg">Dirección</h2>
                <p>Local 1 Oviedo 8-26 y Olmedo, Planta baja de los Consultorios Médicos del Norte Imbabura, Ibarra. </p>
                <p>Ecuador</p>
              </div>
            </div>
            <div className="md:m-5 m-2 flex flex-col rounded-md text-center p-5 bg-indigo-400 hover:bg-indigo-600 w-[220px] transition-colors duration-500">
              <TruckIcon className="h-20 w-20 mx-auto top-1" />
              <div className="my-auto">
                <h2 className="font-medium text-lg">Servicio a Domicilio</h2>
                <p>Te visitamos en la comodidad de tu hogar para la toma de muestras.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="text-blue-800 bg-gradient-radial from-blue-200 from-20% via-cyan-200 via-35% to-white to-80%">
        <div className="flex flex-wrap-reverse justify-center space-x-10 pt-20">
          <div className="flex flex-col items-center justify-center md:w-1/2">
            <h1 className="text-2xl font-bold">Exámenes COVID-19</h1>
            <br />
            <p>Ahora más que nunca es importante tener seguridad que nos encontramos en perfecta condiciones de salud, por eso en Microbiolac te ofrecemos las pruebas para la detección de COVID-19.</p>
            <br />
            <p>Contamos con:</p>
            <ul className="list-disc list-inside">
              <li>Pruebas rápidas IgG e IgM</li>
              <li>Prueba de Anticuerpos cuantitativos IgG e IgM</li>
              <li>RT-PCR - hisopado nasofaríngeo</li>
              <li>Anticuerpos neutralizandos - post vacuna</li>
            </ul>
          </div>
          <Image
            className="rounded-md"
            src="/images/Covid19.jpg"
            width={615}
            height={542} alt="covid19"
          />
        </div>
      </section >
      <section id="nosotros" className="text-blue-800 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-100 to-white pt-10">
        <div className="flex flex-wrap justify-center space-x-10 pt-20">
          <Image
            className="rounded-md"
            src="/images/laboratorio_clinico.jpg"
            width={615}
            height={542} alt="pipeta"
          />
          <div className="flex flex-col items-center justify-center md:w-1/2">
            <h1 className="text-2xl font-bold">Somos Gente</h1>
            <h1 className="text-2xl font-bold">Somos Salud</h1>
            <br />
            <p className="px-5">En MICROBIOLAC nos dedicamos a la prestación de servicios profesionales de la salud innovando cada día en la atención a la salud con calidad, contribuyendo al mejoramiento de las condiciones de vida de la comunidad y el entorno empresarial.  Contamos con un equipo altamente calificado y una infraestructura que le permite una valoración médica integral y entrega de resultado de laboratorio confiables.</p>
          </div>
        </div>
        <div className="flex flex-wrap justify-center space-x-10 pt-20">
          <div className="flex flex-col items-center justify-center md:w-1/3">
            <h1 className="text-2xl font-bold">Misión</h1>
            <br />
            <p className="px-5">Prestar servicios de salud integrales, con altos estándares de calidad, con excelencia y calidad humana en la atención médica comprometida con el mejoramiento continuo para lograr la satisfacción y confianza de nuestros pacientes, siempre preocupados de la salud.</p>
          </div>
          <div className="flex flex-col items-center justify-center md:w-1/3">
            <h1 className="text-2xl font-bold">Visión</h1>
            <br />
            <p className="px-5">Ser un establecimiento de la salud reconocido por sus altos estándares de calidad y servicio al cliente, garantizando la seguridad del usuario y brindando confiabilidad y oportunidad en los resultados de laboratorio.</p>
          </div>
        </div>
      </section>
      <section id="servicios" className="text-blue-800 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-100 to-white">
        <div className="container m-auto">
          <h1 className="text-4xl font-bold text-center pt-20">Nuestros Servicios</h1>
          <div className="flex flex-wrap justify-center mx-10">
            <div className="p-10 w-full md:w-1/2 flex flex-col items-center justify-center">
              <h1 className="text-2xl font-bold">Atención al cliente</h1>
              <br />
              <Image src="/images/tomademuestra.png" width={450} height={300} alt="tomademuestra" />
              <br />
              <p>Nuestro personal esta capacitado para brindar una atención profesional y personalizada a cada uno de nuestros pacientes.</p>
            </div>
            <div className="p-10 w-full md:w-1/2 flex flex-col items-center justify-center">
              <h1 className="text-2xl font-bold text-center">Toma de muestras a domicilio</h1>
              <br />
              <Image src="/images/domicilio.jpg" width={450} height={300} alt="domicilio" />
              <br />
              <p>Nuestro personal acudirá a su su domicilio, con todas las normas de bioseguridad, para realizar las tomas de muestras. Nos acomodamos a su horario.</p>
            </div>
            <div className="p-10 w-full md:w-1/2 flex flex-col items-center justify-center">
              <h1 className="text-2xl font-bold">Convenios</h1>
              <br />
              <Image src="/images/convenio.jpg" width={450} height={300} alt="convenio" />
              <br />
              <p>Laboratorio de Análisis Clínico Microbiolac tiene convenios con centros médicos privados y públicos en medicina interna, ginecología, traumatología y endocrinología, entre otras.</p>
            </div>
            <div className="p-10 w-full md:w-1/2 flex flex-col items-center justify-center">
              <h1 className="text-2xl font-bold">Salud Ocupacional</h1>
              <br />
              <Image src="/images/ocupacional.jpg" width={450} height={300} alt="ocupacional" />
              <br />
              <p>Realizamos todos los exámenes, para las fichas ocupacionales indicadas por el Ministerio de Trabajo, empresas privadas, colegios y escuelas.</p>
            </div>
            <div className="p-10 w-full md:w-1/2 flex flex-col items-center justify-center">
              <h1 className="text-2xl font-bold">Ecografía y Rayos X</h1>
              <br />
              <Image src="/images/RAYOSX-540x460.png" width={540} height={460} alt="rayosx" />
              <br />
              <p>Ofrecemos servicios de rayos X y ecografía para ayudar a nuestros pacientes a obtener diagnósticos precisos y rápidos. Nuestro equipo de profesionales altamente capacitados utiliza tecnología avanzada para garantizar que nuestros pacientes reciban la mejor atención posible. Ya sea que necesite una radiografía para detectar una fractura o una ecografía para detectar problemas en los órganos internos del cuerpo, estamos aquí para ayudarlo.</p>
            </div>
            <div className="p-10 w-full md:w-1/2 flex flex-col items-center justify-center">
              <h1 className="text-2xl font-bold">Medicina General y Servicios de Enfermería</h1>
              <br />
              <Image src="/images/medicinayenfermeria.webp" width={450} height={300} alt="ocupacional" />
              <br />
              <p>Nuestro equipo de profesionales altamente capacitados utiliza tecnología avanzada para garantizar que nuestros pacientes reciban la mejor atención posible. Ya sea que necesite un chequeo médico anual o servicios de enfermería, estamos aquí para ayudarlo.</p>
            </div>
            <div className="p-10 w-full md:w-1/2 flex flex-col items-center justify-center">
              <h1 className="text-2xl font-bold">Planificación Familiar</h1>
              <br />
              <Image src="/images/planificacionfamiliar-1200x791.jpg" width={450} height={300} alt="ocupacional" />
              <br />
              <p>Ofrecemos servicios de planificación familiar para ayudar a nuestros pacientes a tomar decisiones informadas sobre su salud sexual y reproductiva.</p>
            </div>
          </div>
        </div>
      </section>
      {/* <section id="">
        <div className="flex flex-col justify-center">
          <h1 className="text-center text-4xl font-bold py-10">¿Por qué elegir Laboratorio de Análisis Clínico Microbiolac?</h1>
          <div className="flex flex-wrap">
            <div className="w-[450px] h-[300px] bg-gray-500 justify-center text-center">
              <p>Imagen</p>
            </div>
            <div className="flex flex-col justify-center text-center w-[450px] h-[300px]">
              <div>
                <h2 className="font-bold text-2xl">Tecnología de Punta</h2>
                <br />
                <p>Contamos con equipos de última generación para garantizar la calidad de nuestros resultados.</p>
              </div>
            </div>
            <div className="w-[450px] h-[300px] bg-gray-500 justify-center text-center">
              <p>Imagen</p>
            </div>
            <div className="flex flex-col justify-center text-center w-[450px] h-[300px]">
              <div>
                <h2 className="font-bold text-2xl">Precisión en los Resultados</h2>
                <br />
                <p>Realizamos estrictos controles de calidad internos y externos con laboratorios de referencia.  De esta manera garatizamos la precisión en los resultados entregados.</p>
              </div>
            </div>
            <div className="w-[450px] h-[300px] bg-gray-500 justify-center text-center">
              <p>Imagen</p>
            </div>
            <div className="flex flex-col justify-center text-center w-[450px] h-[300px]">
              <div>
                <h2 className="font-bold text-2xl">Personal Calificado</h2>
                <br />
                <p>Nuestro personal está altamente calificado para brindar un servicio de calidad y confiable.</p>
              </div>
            </div>
            <div className="w-[450px] h-[300px] bg-gray-500 justify-center text-center">
              <p>Imagen</p>
            </div>
            <div className="flex flex-col justify-center text-center w-[450px] h-[300px]">
              <div>
                <h2 className="font-bold text-2xl">Atención Personalizada</h2>
                <br />
                <p>Brindamos una atención personalizada a cada uno de nuestros pacientes.</p>
              </div>
            </div>
            <div className="wc-[450px] h-[300px] bg-gray-500 justify-center text-center">
              <p>Imagen</p>
            </div>
          </div>
        </div>
      </section> */}
      <section id="contacto">
        <div className="h-screen">
          <div className="absolute -z-10 w-full">
            <Image
              className="fondox"
              src="/images/contactenos.jpg"
              alt="principal"
              width={1024}
              height={683}
            />
          </div>
          <div className="flex items-end justify-center pt-10 h-[90%] text-blue-800">
            <div className="flex items-center">
              <div className="flex justify-center items-center px-10">
                {/* <div className="flex rounded-full bg-lime-700 h-10 w-10 justify-center items-center">
                  <EnvelopeIcon className="text-white h-7 w-7 justify-center items-center" />
                </div> */}
                <h1 className="text-3xl font-bold ml-10">microbiolac@gmail.com</h1>
              </div>
              <div className="flex justify-center items-center px-10">
                {/* <div className="flex rounded-full bg-lime-700 h-10 w-10 justify-center items-center">
                  <PhoneIcon className="text-white h-7 w-7 justify-center items-center" />
                </div> */}
                <h1 className="text-3xl font-bold ml-10">062601408 - 0984660469</h1>
              </div>
              <br />
              <div className="map-responsive px-10">
                <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3989.743790812831!2d-78.12184958524671!3d0.35020789974449423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMMKwMjEnMDAuOCJOIDc4wrAwNycxMC44Ilc!5e0!3m2!1ses-419!2sec!4v1687793315557!5m2!1ses-419!2sec" width="300" height="200" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
              </div>
            </div>
            <div>
              <a href="http://es.web-counter.net" title="contador de visitas"><Image src="http://www.web-counter.net/count_20091204.php?c=UxUjMBub7bE" style="border:0;padding:0;margin:0;" alt="contador de visitas" /></a><br /><font size="1" face="Arial"><a href="http://us.web-counter.net" title="click counter">click counter</a><br /><a href="http://es.web-counter.net" title="contador de visitas">contador de visitas</a></font>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}