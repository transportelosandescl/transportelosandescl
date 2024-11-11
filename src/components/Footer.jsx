"use client";
import InstagramLogo from "../../public/InstagramLogo.jsx";
import LinkedinLogo from "../../public/LinkedinLogo.jsx";
import WhatsAppLogo from "../../public/WhatsAppLogo.jsx";
import TelegramLogo from "../../public/TelegramLogo.jsx";
import EmailLogo from "../../public/EmailLogo.jsx";
import TLALogo from "../../public/TLALogo.svg";
import CrylLogo from "../../public/cryl.jpg";
import { usePathname } from "next/navigation";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { useState } from "react";
import JobApplicationForm from "../components/track/JobApplicationForm";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  borderRadius: "24px",
  boxShadow: 24,
  maxHeight: "80%",
  overflowY: "scroll",
  padding: 4,
  "&::-webkit-scrollbar": {
    width: "0px",
  },
  scrollbarWidth: "none",
};

export default function Footer({ CTA = false }) {
  const [open, setOpen] = useState(false);
  const [openJobApp, setOpenJobApp] = useState(false); // Estado para el modal del formulario de trabajo
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleOpenJobApp = () => setOpenJobApp(true);
  const handleCloseJobApp = () => setOpenJobApp(false);
  const pathname = usePathname();

  return (
    <div className="w-full bg-[#F9FAFB] px-[24px] lg:px-[161px] py-[56px] flex flex-col justify-between items-center gap-[40px]">
      {/* Sección superior con mensaje */}
      {CTA && (
        <div className="w-full text-center py-8">
          <h3 className="text-[#1F2020] text-[28px] lg:text-[32px] font-bold mb-4">
            Empieza a transformar tu logística!
          </h3>
          <button className="px-8 py-3 bg-[#3B6D38] text-white rounded-lg hover:bg-[#1F2020] transition-all">
            Estamos para ayudarte
          </button>
        </div>
      )}

      {/* Sección del footer */}
      <div className="w-full flex flex-col lg:flex-row justify-between items-center py-6 border-t border-gray-300">
        {/* Logo a la izquierda */}
        <div className="mb-6 lg:mb-0">
          <Image
            src={TLALogo}
            alt="Transporte Los Andes"
            className="w-[104px] h-[44px]"
          />
        </div>

        {/* Enlaces de navegación en el centro */}
        <div className="flex items-center gap-8 text-[16px] text-[#1D1D1F] font-medium">
          {/* Enlace al cv 
          <a
            href="#"
            className="hover:text-[#3B6D38] transition-all"
            onClick={handleOpenJobApp}
          >
            Trabaja con nosotros
          </a>*/}
          {/* Enlace al correo */}
          <a
            target="_blank"
            rel="noopener"
            href="mailto:hola@transportelosandes.cl?subject=Contacto&body=Hola! Quisiera contactarme con Transporte Los Andes para..."
            className="text-[#1F2020] hover:text-[#3B6D38] transition-all duration-300 flex items-center gap-2"
          >
            <EmailLogo className="w-6 h-6" /> hola@transportelosandes.cl
          </a>
        </div>

        {/* Redes sociales */}
        <div className="flex gap-4 mt-6 lg:mt-0">
          <a
            target="_blank"
            rel="noopener"
            href="https://www.instagram.com/transportelosandes.cl/"
            className="text-[#1F2020] hover:text-[#1F2020] transition-all"
          >
            <InstagramLogo />
          </a>
          <a
            target="_blank"
            rel="noopener"
            href="https://www.linkedin.com/in/transportes-los-andes-901645312"
            className="text-[#1F2020] hover:text-[#1F2020] transition-all"
          >
            <LinkedinLogo />
          </a>
          <a
            target="_blank"
            rel="noopener"
            href="https://api.whatsapp.com/send?phone=+56991544082"
            className="text-[#1F2020] hover:text-[#1F2020] transition-all"
          >
            <WhatsAppLogo />
          </a>
          <a
            target="_blank"
            rel="noopener"
            href="https://t.me/transportelosandes.cl"
            className="text-[#1F2020] hover:text-[#1F2020] transition-all"
          >
            <TelegramLogo />
          </a>
        </div>
      </div>

      {/* Línea de Copyright */}
      <div className="w-full text-center text-[14px] text-[#6B7280] mt-8">
        <p>
          Copyright © 2024 Transporte Los Andes. Todos los derechos Reservados.
        </p>
        <div className="mt-2">
          <button
            onClick={handleOpen}
            className="text-[16px] text-[#1F2020] hover:text-[#3B6D38]  font-bold transition-all duration-300"
          >
            Términos y condiciones
          </button>{" "}
          |{" "}
          <button
            onClick={handleOpen}
            className="text-[16px] text-[#1F2020] hover:text-[#3B6D38]  font-bold transition-all duration-300"
          >
            Políticas de privacidad. 2024
          </button>
        </div>
      </div>
      {/* Desarrollado por CrylHolding */}
      <div className="mt-8 text-center">
        <a
          href="http://www.crylholding.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[12px] text-[#6B7280] hover:text-[#3B6D38] transition-all duration-300"
        >
          Desarrollado por{" "}
          <Image
            src={CrylLogo}
            alt="CrylHolding"
            className="inline-block w-[20px] h-[20px] mr-1"
          />
          CrylHolding
        </a>
      </div>
      {/* Modal de Términos y Condiciones */}
      <Modal open={open} onClose={handleClose}>
        <Box sx={style} className="w-[80%] lg:w-[600px]">
          <Box className="w-full flex justify-between items-center">
            <Image
              src={TLALogo}
              alt="Transporte Los Andes"
              className="w-[104px] h-[44px]"
            />
            <Typography
              id="modal-modal-title"
              component="h2"
              className="text-[16px] lg:text-[20px]"
            >
              Términos y Condiciones / Políticas de Privacidad
            </Typography>
            <button
              onClick={handleClose}
              className="text-[16px] lg:text-[20px] font-bold"
            >
              X
            </button>
          </Box>
          <Typography sx={{ mt: 2, fontSize: { xs: "13px", lg: "16px" } }}>
            {/* Aquí puedes poner el contenido del modal de Términos y Condiciones */}
            <div class="modal-content p-6">
              <h2 class="modal-title text-xl font-bold mb-4">
                ANEXO 1: Términos y condiciones del servicio
              </h2>

              <h3 class="text-lg font-semibold mb-2">1. Nuestro Convenio</h3>
              <p class="text-justify mb-4">
                Los términos y condiciones que se indicarán a continuación,
                constituyen el Convenio que se celebrará entre el CLIENTE, como
                remitente del envío y <strong>Transporte Los Andes</strong>.
                Este se aplica para cualquier persona que tenga interés en el
                envío, especialmente para el consignatario (persona a la que va
                dirigido el envío).
              </p>
              <p class="text-justify mb-4">
                Estos términos y condiciones también rigen para cualquier
                persona natural o jurídica, que{" "}
                <strong>Transporte Los Andes</strong> contrate para recolectar,
                transportar o entregar su envío.
              </p>
              <p class="text-justify mb-4">
                Ningún empleado de <strong>Transporte Los Andes</strong> o
                persona alguna está autorizada para modificar los términos y
                condiciones convenidos en este instrumento, ni para hacer
                ofrecimientos en nombre de <strong>Transporte Los Andes</strong>
                .
              </p>
              <p class="text-justify mb-4">
                Para todos los efectos legales y contractuales, el remitente es
                el cargador o embarcador del envío a que se refiere cada orden
                de servicio, actuando <strong>Transporte Los Andes</strong>{" "}
                únicamente a nombre y representación de éste.
              </p>

              <h3 class="text-lg font-semibold mb-2">
                2. ¿Qué significa “envío”?
              </h3>
              <p class="text-justify mb-4">
                Por envío se entienden todos los documentos, paquetes o valijas
                que viajan bajo una guía de transporte. El remitente está
                obligado a declarar el contenido del envío. El detalle del envío
                indicado por el CLIENTE en la Guía de Transporte, deberá
                corresponder exactamente al contenido de los paquetes o valijas
                enviados. El remitente deberá indemnizar a{" "}
                <strong>Transporte Los Andes</strong> y a cualquier otra
                persona, por todo daño, costo o perjuicio que sea consecuencia
                de sus indicaciones y declaraciones irregulares, inexactas o
                incompletas.
              </p>

              <h3 class="text-lg font-semibold mb-2">3. Envíos no aceptados</h3>
              <p class="text-justify mb-4">
                <strong>Transporte Los Andes</strong> rechazará como envío:
              </p>
              <ul class="list-disc list-inside text-justify mb-4">
                <li>
                  Todo aquello que esté restringido o prohibido por IATA
                  (Asociación Internacional de Transporte Aéreo) o por la ICAO
                  (Organización internacional de Aviación Civil).
                </li>
                <li>
                  Todo aquello que, entregándose cerrado, no esté correctamente
                  embalado, enfardado o encajonado.
                </li>
                <li>
                  Todo aquello que esté desprovisto de los documentos
                  indispensables para el expedito transporte del envío.
                </li>
                <li>
                  Todo aquello que se encuentre con prohibición fitosanitaria
                  vigente del Servicio Agrícola y Ganadero.
                </li>
                <li>
                  Todo aquello que estimemos no poder transportar en forma
                  segura y eficiente.
                </li>
              </ul>
              <p class="text-justify mb-4">
                En nuestros centros de servicios, el CLIENTE podrá obtener
                información más completa sobre los envíos que no aceptamos. Con
                su firma, el CLIENTE certifica que su envío no se encuentra
                dentro de los casos antes indicados.
              </p>
              <p class="text-justify mb-4">
                El CLIENTE reconoce y acepta que su envío puede ser transportado
                por vía aérea. En consecuencia, el CLIENTE no podrá encomendar
                el transporte de objetos o mercaderías peligrosas para la
                seguridad del vuelo a menos que estos sean declarados como
                corresponde y técnicamente esto sea factible.
              </p>
              <p class="text-justify mb-4">
                El incumplimiento de esta obligación, podrá hacer responsable al
                remitente de los delitos contenidos en la Legislación
                Aeronáutica.
              </p>
              <p class="text-justify mb-4">
                En todo caso, el CLIENTE será responsable por los decomisos,
                multas, sanciones y en general por todo daño o perjuicio que
                sufra <strong>Transporte Los Andes</strong> y/o terceras
                personas en razón de haberse efectuado envíos sin la
                documentación mínima o bien, por haberse omitido o falseado
                información relativa a la carga a transportar.
              </p>
              <p class="text-justify mb-4">
                <strong>Transporte Los Andes</strong> presta sus servicios con
                absoluto apego a la normativa y reglamentación legal vigente,
                incluyendo, especialmente, pero no limitando, la Ley 20.393 que
                establece la Responsabilidad Penal de Las Personas Jurídicas en
                los Delitos de Lavado de Activos, Financiamiento del Terrorismo
                y Delitos de Cohecho. En consecuencia, el CLIENTE reconoce y
                acepta que <strong>Transporte Los Andes</strong> cumple con
                dicha normativa legal y reglamentaria y se compromete a
                respetarla en sus relaciones con ésta y a no encomendar a{" "}
                <strong>Transporte Los Andes</strong> servicios relacionados a
                objetos o mercaderías que la incumplan, estando, en especial,
                prohibido enviar cualquiera de aquellos de carácter peligroso o
                especies ilícitas o cuya comercialización o transporte sea
                ilícita.
              </p>
              <p class="text-justify mb-4">
                El incumplimiento a lo dispuesto en los párrafos precedentes
                hará responsable al CLIENTE por los decomisos, multas, sanciones
                y en general por todo daño o perjuicio que sufra{" "}
                <strong>Transporte Los Andes</strong> y/o terceras personas o
                autoridades, en razón de haber efectuado envíos en
                incumplimiento a normativa legal y reglamentaria vigente y/o sin
                la documentación mínima legal y reglamentaria, o bien, por
                haberse omitido o falseado información relativa a la carga a
                transportar.
              </p>

              <h3 class="text-lg font-semibold mb-2">4. Inspección</h3>
              <p class="text-justify mb-4">
                Al recibir su envío, nos reservamos el derecho a inspeccionar lo
                enviado para comprobar el estado de las mercaderías.
              </p>

              <h3 class="text-lg font-semibold mb-2">5. Cobros</h3>
              <p class="text-justify mb-4">
                El precio por nuestros servicios que denominaremos “porte”, se
                fija en base al peso. El peso del envío se considera como el
                mayor peso resultante entre el peso físico y el peso volumétrico
                (en kilos), el que se calcula multiplicando el largo por el
                ancho por el alto de cada bulto (en centímetros) y luego
                dividiéndolo por 4.000.
              </p>
              <p class="text-justify mb-4">
                En todo caso, dicha medición será meramente referencial por lo
                que no estamos obligados a entregar mercaderías al peso, por
                cuenta o medida, salvo que ello se pacte en forma expresa en la
                correspondiente guía de transporte.
              </p>
              <p class="text-justify mb-4">
                Dentro de nuestro porte, no están incluidos los aranceles,
                impuestos, tasas u otras sumas de dinero que puedan generarse
                con producto del envío. Estos serán cobrados de forma
                independiente.
              </p>
              <p class="text-justify mb-4">
                Se deja expresa constancia que tenemos el derecho de ser pagados
                del porte y gastos efectuados por los efectos transportados, con
                preferencia a todos los demás acreedores.
              </p>

              <h3 class="text-lg font-semibold mb-2">6. Reclamos</h3>
              <p class="text-justify mb-4">
                Para generar un reclamo debido al daño, extravío, robo, demora,
                e incluso entregas erróneas, se debe tener en consideración las
                siguientes instrucciones:
              </p>
              <ul class="list-disc list-inside text-justify mb-4">
                <li>
                  Todo reclamo deberá ser ingresado completando formulario web
                  dentro del portal de clientes de{" "}
                  <strong>Transporte Los Andes</strong>.
                </li>
                <li>
                  Se debe tener en consideración que cada reclamo consta de un
                  plazo máximo de 45 días hábiles posterior a la fecha promesa
                  de entrega, para ser presentado ante una instancia de
                  indemnización. Caso contrario, estos serán rechazados por
                  incumplir el plazo. (Fuera de plazo).
                </li>
                <li>
                  De existir algún siniestro, contáctese con su Ejecutivo de
                  atención asignado o a través de nuestros canales de atención
                  disponibles en{" "}
                  <a href="http://www.transportelosandes.cl">
                    www.transportelosandes.cl
                  </a>
                  .
                </li>
              </ul>
              <h3 class="text-lg font-semibold mb-2">
                7. Nuestra responsabilidad
              </h3>
              <p class="text-justify mb-4">
                Nuestra responsabilidad se encuentra determinada por la
                normativa vigente.
              </p>
              <p class="text-justify mb-4">
                En cualquier envío, nuestra responsabilidad se regirá por las
                siguientes condiciones: Comienza con la recepción del envío por
                el personal autorizado mediante la exigencia por parte del
                CLIENTE de la correspondiente credencial de{" "}
                <strong>Transporte Los Andes</strong> y se extiende hasta la
                entrega hecha a satisfacción del consignatario o de la persona
                que reciba en su nombre en el domicilio del destino final
                ordenado por el CLIENTE.
              </p>
              <p class="text-justify mb-4">
                De esta forma, la recepción en conformidad del envío a través
                del nombre y RUT del consignatario o de la persona que reciba en
                su nombre en el domicilio del destino final ordenado por el
                CLIENTE, extingue nuestra responsabilidad, salvo que el
                consignatario en un plazo de 3 días hábiles presente al CLIENTE
                un reclamo el cual deberá ser acompañado como evidencia a{" "}
                <strong>Transporte Los Andes</strong> en el proceso señalado en
                el numeral 6 precedente. Adicionalmente,{" "}
                <strong>Transporte Los Andes</strong> añadirá a la recepción la
                evidencia de georreferencia y fotografía del momento de la
                entrega.
              </p>
              <p class="text-justify mb-4">
                Nuestra responsabilidad se limita al pago del valor de venta
                neto del bien transportado, no incluyéndose el valor comercial o
                esperado del mismo, ni de ningún otro tipo, todo lo anterior, en
                conformidad con los montos máximos de responsabilidad pactados,
                señalados a continuación:
              </p>
              <p class="text-justify mb-4">
                El monto máximo de nuestra responsabilidad asciende a $ 85.000
                (ochenta y cinco mil pesos) por orden de servicio.
              </p>
              <p class="text-justify mb-4">
                Entendemos por valor de venta neto, el que se indica en la
                correspondiente factura o boleta.
              </p>

              <h3 class="text-lg font-semibold mb-2">
                8. Cobertura de riesgo del envío
              </h3>
              <p class="text-justify mb-4">
                Si el valor de venta neto del bien transportado excede la suma
                de $ 85.000 (ochenta y cinco mil pesos) por orden de servicio,
                el CLIENTE podrá adquirir una cobertura de riesgo adicional para
                su envío. La cobertura de riesgo adicional tendrá el costo y
                estará sujeta a las condiciones señaladas en el Anexo 2 del
                presente Convenio, denominado “Condiciones Generales de Riesgo
                del Transporte de Carga y Procedimiento denuncias siniestros”.
              </p>
              <p class="text-justify mb-4">
                En el evento de que el CLIENTE transporte bienes cuyos valores
                sean superiores al monto máximo de la responsabilidad de{" "}
                <strong>Transporte Los Andes</strong>, esto es, $ 85.000, y no
                adquiera una cobertura de riesgo adicional conforme a lo
                señalado en el párrafo precedente, el CLIENTE con ello declara y
                acepta expresamente que en ningún caso su envío tendrá un valor
                superior a $ 85.000. En virtud de lo expuesto, en caso de
                pérdida total, pérdida parcial, merma o daño del envío imputable
                a <strong>Transporte Los Andes</strong>, el CLIENTE
                explícitamente acepta ser indemnizado en el menor valor
                resultante entre el valor real del contenido y el monto de $
                85.000 ya señalado.
              </p>

              <h3 class="text-lg font-semibold mb-2">9. Envíos tardíos</h3>
              <p class="text-justify mb-4">
                En el caso de que no se haya pactado expresamente y por escrito
                un plazo para entregar el envío, nos comprometemos a enviarlo en
                el primer viaje disponible al lugar de destino.
              </p>
              <p class="text-justify mb-4">
                Si hubiésemos pactado un plazo para entregar el envío, nos
                comprometemos a cumplirlo, salvo que ocurra alguna de las
                circunstancias indicadas en el número siguiente.
              </p>

              <h3 class="text-lg font-semibold mb-2">10. Fuerza mayor</h3>
              <p class="text-justify mb-4">
                No somos responsables por pérdidas, daños o atrasos que sean
                consecuencia de un caso fortuito, fuerza mayor o vicios propios
                del envío.
              </p>
              <p class="text-justify mb-4">
                Recordamos a usted que <strong>Transporte Los Andes</strong> no
                cuenta con un programa especial para el transporte de
                perecibles, productos refrigerados o similares.
              </p>

              <h3 class="text-lg font-semibold mb-2">11. Desistimiento</h3>
              <p class="text-justify mb-4">
                El CLIENTE puede desistir del envío en cualquier momento antes
                de la entrega al consignatario. En caso de que lo haga antes de
                que el envío salga de la ciudad de origen, deberá pagar el porte
                total.
              </p>
              <p class="text-justify mb-4">
                Por el contrario, si desiste una vez que el envío ya partió
                hacia su destino, deberá pagar el porte total, teniendo nosotros
                sólo la obligación de no entregarlo al consignatario en la
                medida de lo posible y devolvérselo en el más breve plazo
                posible. En este caso, el CLIENTE deberá pagar el porte total
                del envío de regreso.
              </p>

              <h3 class="text-lg font-semibold mb-2">
                12. Envíos no entregados
              </h3>
              <p class="text-justify mb-4">
                Si el envío no pudiere ser entregado, porque las indicaciones
                del consignatario indicadas en la guía de transporte fueren
                insuficientes o incorrectas, porque el consignatario se rehusare
                a recibirlo, porque el consignatario no ha podido ubicarse, o
                está ausente por un tiempo largo, el envío será devuelto al
                lugar de origen, siendo de responsabilidad del CLIENTE su
                correspondiente rastreo según las herramientas entregadas por{" "}
                <strong>Transporte Los Andes</strong> (seguimiento web).
              </p>
              <p class="text-justify mb-4">
                En todos estos casos, el CLIENTE deberá pagar el porte total del
                envío.
              </p>

              <h3 class="text-lg font-semibold mb-2">
                13. Envíos no retirados
              </h3>
              <p class="text-justify mb-4">
                En el caso de envíos no entregados y no reclamados por el
                CLIENTE dentro del plazo de 6 meses contados desde la fecha
                supuesta de arribo, se aplicará la normativa vigente, esto es,
                operará el abandono de la carga a favor de{" "}
                <strong>Transporte Los Andes</strong>, quien podrá disponer
                libremente de dicha carga a fin de costear los gastos asociados
                a su almacenaje.
              </p>

              <h3 class="text-lg font-semibold mb-2">14. Competencia</h3>
              <p class="text-justify mb-4">
                Todo lo que tenga relación con la aplicación, validez e
                interpretación del presente Convenio, será resuelto por los
                Tribunales Ordinarios de Justicia en la ciudad de Santiago,
                Chile.
              </p>

              <h3 class="text-lg font-semibold mb-2">
                Especificaciones Adicionales de nuestros Servicios
              </h3>
              <p class="text-justify mb-4">
                Los servicios de distribución tradicional ofrecidos para
                ciudades principales son: Servicio Priority, que consiste en la
                entrega al día siguiente antes de las 8:00 PM, y el servicio
                Express. Consulte a su Ejecutivo de atención asignado o a través
                de nuestros canales de atención disponibles en{" "}
                <a href="http://www.transportelosandes.cl">
                  www.transportelosandes.cl
                </a>{" "}
                los tiempos de servicio para cada una de las alternativas hacia
                un destino en particular. Destacamos que en la medida que el
                CLIENTE no especifique el tipo de servicio contratado se
                considerará para efectos tarifarios un servicio priority.
              </p>
              <p class="text-justify mb-4">
                Los servicios complementarios ofrecidos son cobro contra entrega
                (COD), devolución de mercaderías, devolución de documentos (DD),
                prueba de entrega (POD), almacenaje, pick & pack, etiquetado,
                mecanizado, mailing u otros que se diseñen especialmente para el
                CLIENTE.
              </p>
              <p class="text-justify mb-4">
                Las tarifas están definidas de acuerdo al tipo de servicio, al
                peso/volumen del envío y al origen/destino del despacho,
                considerando como origen Santiago.
              </p>
              <p class="text-justify mb-4">
                El peso del envío se considera como el mayor peso resultante
                entre el peso físico y el peso volumétrico (en kilos), el cual
                se calcula multiplicando el largo por el ancho por el alto de
                cada bulto (en centímetros) y luego dividiéndolo por 4.000.
              </p>
              <p class="text-justify mb-4">
                El CLIENTE se informará de los movimientos de sus despachos a
                través del seguimiento de las Órdenes de Servicio, guías que van
                adheridas a cada producto, bulto o pallet, según corresponda.
                Estas guías llevan un código de barras que es capturado por un
                scanner que porta el personal de{" "}
                <strong>Transporte Los Andes</strong> en cada punto del proceso
                (retiro, manifestación a destino, arribo a destino, despacho a
                reparto y entrega).
              </p>
              <p class="text-justify mb-4">
                Para realizar este seguimiento, el CLIENTE puede rastrear los
                despachos desde su propio computador por Internet (ingresando a
                la página web:{" "}
                <a href="http://www.transportelosandes.cl">
                  www.transportelosandes.cl
                </a>
                ) utilizando como referencia el número de la orden de servicio y
                así acceder a informes tanto de las entregas como de las
                excepciones en el servicio.
              </p>
              <p class="text-justify mb-4">
                De forma alternativa, el CLIENTE puede comunicarse con su
                Ejecutivo de atención asignado o a través de nuestros canales de
                atención disponibles en{" "}
                <a href="http://www.transportelosandes.cl">
                  www.transportelosandes.cl
                </a>
                , donde ejecutivas dedicadas a la localización constante de la
                carga se encargarán de proporcionarle la información que
                necesite, incluso en forma diaria.
              </p>

              <h3 class="text-lg font-semibold mb-2">
                Restricciones del Servicio
              </h3>
              <p class="text-justify mb-4">
                Es de absoluta responsabilidad del CLIENTE confeccionar las
                Órdenes de Servicio por cada uno de los envíos que encargue
                realizar a <strong>Transporte Los Andes</strong> e indicar en
                forma precisa los servicios requeridos.
              </p>
              <p class="text-justify mb-4">
                Si la carga ingresa al Hub de{" "}
                <strong>Transporte Los Andes</strong> sin la orden de servicio,
                o bien si está vacía o incompleta y/o sin etiquetas (total o
                parcial), no se asegura la entrega según matriz de tránsito, de
                acuerdo al servicio contratado. Además, se traspasarán los
                costos involucrados en este proceso.
              </p>
              <p class="text-justify mb-4">
                El servicio de entrega Priority consiste en la entrega al día
                siguiente antes de las 8:00 PM en las ciudades bases.
              </p>
              <p class="text-justify mb-4">
                El servicio de entrega Express consiste en la entrega al segundo
                día siguiente antes de las 8:00 PM entre Copiapó y Puerto Montt.
                En el caso del resto de Chile, la promesa de entrega para Arica
                es de 4 días. En Iquique, Calama y Antofagasta la promesa de
                entrega es de 3 días hacia el Sur, en Coyhaique se debe
                considerar un plazo de 7 días y para Punta Arenas de 9 días,
                todo lo anterior, salvo condiciones meteorológicas o de otro
                tipo, que impidan el desarrollo de la ruta en el tiempo
                indicado. Consulte con su Ejecutivo de Ventas asignado o a
                través de nuestros canales de atención disponibles los plazos de
                tránsito para entregas en supermercados, grandes tiendas y mall
                (abastecimiento) y servicios same day, flex, logística inversa.
              </p>
              <p class="text-justify mb-4">
                El horario definido para solicitar retiros (pick-ups) no
                regulares es entre 8:00 AM y 11:30 AM. Las solicitudes
                realizadas después de este horario estarán sujetas a
                confirmación para su retiro el mismo día. En caso de no poder
                coordinarse, se efectuará al día siguiente.
              </p>
              <p class="text-justify mb-4">
                El horario definido para realizar los retiros (pick-ups)
                regulares es, en general, entre 8:00 AM y 17:00 PM. Cualquier
                solicitud de retiro para realizar después de este horario se
                considera como pick-up tardío y debe ser coordinado a través del
                portal de clientes de <strong>Transporte Los Andes</strong> con
                su Ejecutivo de atención asignado o a través de nuestros canales
                de atención disponibles en{" "}
                <a href="http://www.transportelosandes.cl">
                  www.transportelosandes.cl
                </a>
                , el que será aceptado por <strong>Transporte Los Andes</strong>{" "}
                mediante la asignación de un Número de Retiro (condicionado a
                factibilidad técnica).
              </p>
              <p class="text-justify mb-4">
                La entrega a regiones en estos casos no se asegura para el día
                siguiente. La entrega dentro de Santiago se realiza al día
                siguiente de acuerdo al servicio contratado.
              </p>
              <p class="text-justify mb-4">
                Los embalajes de la carga a transportar deberán ser los
                adecuados al tipo de carga que el CLIENTE desea transportar. En
                tal caso <strong>Transporte Los Andes</strong> al momento de
                recibir la carga podrá negarse a transportarla aduciendo
                problemas de embalaje.
              </p>
              <p class="text-justify mb-4">
                Los servicios de entregas en supermercados, grandes tiendas y
                mall (abastecimiento) y servicios same day, flex, logística
                inversa, COD, DD, fullfilment (pick & pack) y almacenaje sólo se
                ofrecen luego de una evaluación previa que permita determinar su
                factibilidad, la tarifa asociada y el modelo operativo.
              </p>
              <p class="text-justify mb-4">
                Al momento de embarcar carga para ser enviada por vía aérea, se
                debe tener consideración especial con las denominadas
                “mercancías peligrosas”, que se definen como: Cualquier
                sustancia o producto que pueda poner en riesgo la salud, la
                seguridad, la propiedad o el medio ambiente.
              </p>

              <p class="text-justify mb-4">
                Las mercancías peligrosas han sido clasificadas por Norma
                Chilena N° 382 Of 89; de igual forma, el Grupo de Expertos de
                las Naciones Unidas ha clasificado en nueve clases de riesgo
                dichas mercancías:
              </p>
              <strong>Explosivos:</strong>
              <ul class="list-disc list-inside text-justify mb-4">
                <li>
                  Gases comprimidos(butano, hidrógeno, propano, acetileno,
                  encendedores de cigarrillos, extintores de incendios,
                  insecticidas en aerosol, plaguicidas, lacas para el pelo,
                  desodorantes en aerosol, etc.)
                </li>
                <li>
                  Líquidos inflamables (alcoholes, combustibles, acetonas,
                  pinturas, barnices, diluyentes, etc.)
                </li>
                <li>
                  Sólidos inflamables (celuloide foto, piedras de encendedor,
                  harina de pescado, algodón húmedo, virutas de metales
                  ferrosos, fósforo blanco y amarillo, aluminio en polvo, sodio,
                  etc.)
                </li>
                <li>
                  Sustancias comburentes (oxidantes) y peróxidos orgánicos
                  (nitrato de amoníaco, clorato cálcico, desmanchadores,
                  hidroperóxido de tertbutilo, etc.)
                </li>
                <li>
                  Sustancias tóxicas e infecciosas (arsénico, plaguicidas,
                  nicotina, cianuro, estricnina, virus, bacterias, ricketsias,
                  hongos, etc.)
                </li>
              </ul>
              <strong>Materiales radiactivos:</strong>
              <ul class="list-disc list-inside text-justify mb-4">
                <li>
                  Corrosivos (ácido para baterías, ácido sulfúrico, mercurio,
                  hidróxido de sodio, etc.)
                </li>
                <li>
                  Sustancias peligrosas varias (perlas poliméricas, sustancias
                  de olores penetrantes, sustancias con propiedades anestésicas
                  o nocivas, irritantes, asbestos, materiales magnetizados,
                  hielo seco, líquidos criogénicos, etc.)
                </li>
              </ul>
              <p class="text-justify mb-4">
                Cada vez que se quiera transportar alguna de estas mercancías
                vía aérea, el expedidor debe identificar, clasificar, embalar,
                etiquetar y documentar (Declaración del Expedidor de Mercancías
                Peligrosas) sus envíos.
              </p>
              <p class="text-justify mb-4">
                Si el producto está prohibido o no cumple con la reglamentación
                para el transporte aéreo, el expedidor deberá marcar las órdenes
                de servicio, boletas, facturas y bultos con la indicación{" "}
                <strong>VÍA TERRESTRE</strong>.
              </p>
              <p class="text-justify mb-4">
                Así también, este tipo de servicio tiene un periodo de revisión
                adicional en el Aeropuerto al momento de su embarque, que puede
                ser de 12 hasta 24 horas.
              </p>

              <p class="text-justify mb-4">
                Dada la complejidad de esta reglamentación, el departamento de
                Mercancías Peligrosas de <strong>Transporte Los Andes</strong>{" "}
                ofrece asesoría al respecto, realizando el levantamiento y la
                capacitación respectiva.
              </p>

              <p class="text-justify mb-4">
                El peso de cada bulto a transportar por servicio tradicional
                regular no puede exceder los 100 Kgs., el volumen no puede
                superar 1 m<sup>3</sup> y las medidas máximas, si se trata de
                carga aérea, son 1.2 metros de ancho y 0.86 metros de alto.
              </p>
              <p class="text-justify mb-4">
                Para bultos superiores a esas características se debe coordinar
                previamente el envío. Si así fuese, el CLIENTE debe avisar con
                anticipación a su Ejecutivo de atención para coordinar el envío.
                En este caso, la entrega no se asegura para el día siguiente.
              </p>

              <h3 class="text-lg font-semibold mb-2">
                Condiciones de pago de servicios
              </h3>
              <p class="text-justify mb-4">
                La factura deberá ser pagada dentro del plazo máximo de 30 días
                a contar de su entrega.
              </p>
              <p class="text-justify mb-4">
                Por ninguna medida el CLIENTE deberá rebajar del pago de los
                servicios contratados, los siniestros adeudados a la fecha y
                utilizar esa demora como una forma de presión para el plazo de
                pago de facturas por concepto de prestación de servicios.
              </p>
              <p class="text-justify mb-4">
                En el evento de incumplimiento de lo señalado en los párrafos
                precedentes, los saldos insolutos darán lugar a la aplicación
                sin más trámite del interés máximo convencional por cada día de
                atraso.
              </p>
              <p class="text-justify mb-4">
                Así también <strong>Transporte Los Andes</strong> se reserva el
                derecho de traspasar la cobranza a una empresa externa a partir
                de 90 días de vencimiento del plazo de pago por parte del
                CLIENTE.
              </p>
              <p class="text-justify mb-4">
                El valor de los servicios se reajustará semestralmente en el
                100% de la variación que haya experimentado el índice de precios
                al consumidor (IPC), determinado por el Instituto Nacional de
                Estadísticas o el organismo que lo reemplace. Podrán existir
                otros ajustes, por aumento de costos justificados por{" "}
                <strong>Transporte Los Andes</strong> y los cuales{" "}
                <strong>deberán</strong> ser informados en forma previa y
                argumentada.
              </p>
            </div>
          </Typography>
        </Box>
      </Modal>

      {/* Modal de Formulario de Trabajo */}
      <Modal open={openJobApp} onClose={handleCloseJobApp}>
        <Box sx={style} className="w-[80%] lg:w-[600px]">
          <JobApplicationForm /> {/* Aquí se renderiza tu formulario */}
        </Box>
      </Modal>
    </div>
  );
}
