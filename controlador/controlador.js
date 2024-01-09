const body = document.body
let contenedor_principal = mkObj(body,"contenedor_principal","contenedor_principal")
    let header = mkObj(contenedor_principal,"header","header")
        let contenedor_img_header = mkObj(header,"contenedor_img_header","contenedor_img_header")

            // let text_img_header = mkObj(contenedor_img_header,"img_header","img_header","C̵̗͇̳̬͎͂̅͊̿̚a҈̱͚̍͌̈́n̶̩̠͙͇̜͆̆̆̽̚c̷̲̯̦̙͚̅̍̄e̶̤̲͛̅̄͐̾l̷͈͇͉̅̽̃̃e̶͈̳̲͗̆͂̃ͅṙ̴̗͔͓̣͔̄̅͆í̶̜̭̘͒̇̊ḁ̷̭̒̔͗̇̈́")
            let img_header = mkObjImg(contenedor_img_header,"img_header","img_header","./vista/img/mundo_logo.png")

        let contenedor_menu_header = mkObj(header,"contenedor_menu_header","contenedor_menu_header")
            let menu_header = mkObjImg(contenedor_menu_header,"menu_header","menu_header","./vista/img/menu.png")
            let pestaña_menu_header = mkObj(header,"pestaña_menu_header","pestaña_menu_header")
                let header_opcion_inicio = mkText(pestaña_menu_header,"header_opcion","header_opcion_inicio","Portal de Inicio")
                let header_opcion_login = mkText(pestaña_menu_header,"header_opcion","header_opcion_login","Ingresar/Registrar")
                let header_opcion_crear_agenda = mkText(pestaña_menu_header,"header_opcion","header_opcion_crear_agenda","Crear Agenda")
                let header_opcion_informacion = mkText(pestaña_menu_header,"header_opcion","header_opcion_informacion","Completa tu información")
                let header_opcion_cerrar_sesion = mkText(pestaña_menu_header,"header_opcion","header_opcion_cerrar_sesion","Cerrar Sesión")
                header_opcion_crear_agenda.style.display="none"
                header_opcion_informacion.style.display="none"
                header_opcion_cerrar_sesion.style.display="none"
    placerMenu(menu_header,pestaña_menu_header)

    let cuerpo = mkObj(contenedor_principal,"cuerpo","cuerpo")


    contenidoInicio()
function contenidoInicio() {

    cuerpo.innerHTML=""

    let cuerpo_inicio = mkObj(cuerpo,"cuerpo","cuerpo_inicio")

        let texto_contenido = mkTextList(cuerpo_inicio,"texto_contenido","texto_contenido",
            "Un Mundo de Cancelería",
            "Adapta tu espacio con elegantes soluciones que combinan funcionalidad y diseño.",
            "Profesionalismo en los detalles: encuentra la cancelería perfecta para complementar tu hogar u oficina.",
            "Explora nuestra amplia experiencia en diseño y fabricación.",
        )/*;cuerpo.style.flexDirection="column";*/;
        let array_p_texto_contenido = texto_contenido.querySelectorAll("p")
        // console.log(array_p_texto_contenido)
        array_p_texto_contenido.forEach(element => {
            insertSpan(element,"elegantes soluciones","var(--colorBlueLetra)")
            insertSpan(element,"mejoramiento comunitario","var(--colorBlueLetra)")
            insertSpan(element,"encuentra la cancelería","var(--colorBlueLetra)")
            insertSpan(element,"diseño y fabricación","var(--colorBlueLetra)")
            // console.log(element)
        });
        // // insertSpan(p_texto_contenido,"")





        // let seccion_acceso = mkTextList(cuerpo_inicio,"seccion_acceso","seccion_acceso",
        //     "Acceso",
        //     "Registrate y comienza a buscar raices relacionadas a un proyecto en común"
        // )

        // let seccion_acceso = mkText(cuerpo_inicio,"texto_contenido","texto_contenido",
        //     "Accede o registrate y comienza a buscar medios para fortalecer tu iniciativa."
        // )

        // let img_ir_login = mkObjImg(cuerpo_inicio,"img_ir_login","img_ir_login",
        //     "./vista/img/aluminio.png"
        // )
        // ! SERVIDOR
        // verificarInicioDeSesion()
        //     .then(response=>{
        //         console.log(response)
        //         seccion_acceso.style.display="none"
        //         img_ir_login.style.display="none"
        //     })

        //     img_ir_login.addEventListener("mouseup",function () {
        //         contenidoLogin()
        //     })

        let img_canceleria_inicio = mkObjImg(cuerpo_inicio,"img_canceleria_inicio","img_canceleria_inicio","./vista/img/aluminio.png")
            img_canceleria_inicio.style.position="relative"
            let hipercapa_img_canceleria_inicio = mkObj(img_canceleria_inicio,"hipercapa_","hipercapa_img_canceleria_inicio")
                hipercapa_img_canceleria_inicio.style.position="absolute"
                hipercapa_img_canceleria_inicio.style.zIndex="9"

                let cuerpo_hipercapa = mkObj(hipercapa_img_canceleria_inicio,"cuerpo_hipercapa","cuerpo_hipercapa")
                    let header_hipercapa = mkTextList(cuerpo_hipercapa,"header_hipercapa","header_hipercapa",
                        "Adapta tus espacios.",
                        "Mejora tus fachadas con diseños atractivos."
                    )

        let texto_contenido_ = mkTextList(cuerpo_inicio, "texto_contenido", "texto_contenido",
            "Diseños personalizados",
            "Más que cristales, un diseño cómodo y atractivo personalizado a tus necesidades.",
            "En nuestro catálogo, encontrarás una amplia variedad de diseños exclusivos para adaptarnos a tu estilo único.",
            "Desde elegantes patrones hasta opciones minimalistas, cada pieza de nuestra cancelería está diseñada para impresionar y satisfacer tus gustos más exigentes.",
            "Haz de tu espacio un reflejo auténtico de tu personalidad con nuestra cancelería única y personalizada.",
            "¿Tienes una idea específica en mente? Trabajaremos estrechamente contigo para convertir tu visión en una realidad tangible.",
            "La fusión perfecta entre estética y funcionalidad: nuestros diseños personalizados no solo son hermosos, sino también altamente prácticos y eficientes.",
        )/*;cuerpo.style.flexDirection="column";*/;
        let array_p_texto_contenido_ = texto_contenido_.querySelectorAll("p")
        // console.log(array_p_texto_contenido)
        array_p_texto_contenido_.forEach(element => {
            insertSpan(element,"un diseño cómodo y atractivo personalizado","var(--colorBlueLetra)")
            insertSpan(element,"encontrarás una amplia variedad","var(--colorBlueLetra)")
            insertSpan(element,"elegantes patrones hasta opciones minimalistas","var(--colorBlueLetra)")
            insertSpan(element,"diseños exclusivos","var(--colorBlueLetra)")
            insertSpan(element,"Haz de tu espacio un reflejo auténtico","var(--colorBlueLetra)")
            insertSpan(element,"¿Tienes una idea específica en mente?","var(--colorBlueLetra)")
            insertSpan(element,"fusión perfecta entre estética y funcionalidad","var(--colorBlueLetra)")
            // console.log(element)
        });
        
        

        let contenido_img_canceleria_inicio = mkObj(cuerpo_inicio,"contenido_img_canceleria_inicio")
        contenido_img_canceleria_inicio.style.position="relative"

            let img_office_world = mkObjImg(contenido_img_canceleria_inicio,"img_office_world","img_office_world","./vista/img/cristal_perimetral.png")
            img_office_world.style.position="absolute"


            let text_ = mkTextList(contenido_img_canceleria_inicio,"text_","text_",
                "Transforma tu espacio con elegancia: la cancelería que refleja tu estilo.",
                "Innovación y diseño en cada detalle, descubre la excelencia de nuestra cancelería.",
                "La seguridad nunca se vio tan bien. Protege tu hogar con nuestra exclusiva cancelería.",
                // "Abre las puertas a la belleza y funcionalidad con nuestra amplia gama de cancelería.",
                // "Descubre el equilibrio perfecto entre estética y resistencia en nuestra cancelería de alta calidad.",
                // "Diseño que perdura, calidad que se siente. Así es nuestra cancelería de vanguardia.",
                // "La armonía entre forma y función: descubre nuestra colección única de cancelería premium.",
                // "Más que ventanas y puertas, creamos conexiones con estilo. Vive la experiencia de nuestra cancelería exclusiva.",
                // "Atrévete a destacar con nuestra cancelería personalizada. Tu espacio, tu expresión.",
                "La seguridad nunca pasa desapercibida. Descubre nuestra cancelería que combina estilo y protección a la perfección."
            )
            text_.style.position="absolute"
            text_.style.display="none"

        let array_text_ = text_.querySelectorAll("p")

        array_text_.forEach(element => {
            insertSpan(element,"Transforma tu espacio","var(--colorBlueLetra)")
            insertSpan(element,"excelencia de nuestra cancelería","var(--colorBlueLetra)")
            // insertSpan(element,"Abre las puertas","var(--colorBlueLetra)")
            // insertSpan(element,"Más que ventanas","var(--colorBlueLetra)")
            
        });

        // img_office_world.style.left="33.33%"

            // let img_canceleria_inicio_ = mkObjImg(contenido_img_canceleria_inicio,"img_canceleria_inicio","img_canceleria_inicio","./vista/img/aluminio.png")
                
            let img_animacion_cancelería_puerta = mkObjImg(contenido_img_canceleria_inicio, "img_animacion_cancelería_puerta", "img_animacion_cancelería_puerta", "./vista/img/cancel_max_format.png");
            let img_animacion_cancelería_puerta_ = mkObjImg(contenido_img_canceleria_inicio, "img_animacion_cancelería_puerta", "img_animacion_cancelería_puerta_", "./vista/img/cancel_max_format_.png");
            
            // Agrega estilos de transición para las imágenes
            img_animacion_cancelería_puerta.style.transition = "transform 0.5s ease";
            img_animacion_cancelería_puerta_.style.transition = "transform 0.5s ease";
            
            contenido_img_canceleria_inicio.addEventListener("mouseenter", function () {
                console.log(contenido_img_canceleria_inicio);
                img_animacion_cancelería_puerta.style.transform = "translateX(-75%)";
                img_animacion_cancelería_puerta_.style.transform = "translateX(75%)";
                text_.style.display = "flex";
            });
            
            contenido_img_canceleria_inicio.addEventListener("mouseleave", function () {
                console.log(contenido_img_canceleria_inicio);
                img_animacion_cancelería_puerta.style.transform = "translateX(0)";
                img_animacion_cancelería_puerta_.style.transform = "translateX(0)";
                text_.style.display = "none";
            });
            

            // let img_cancel_baño = mkObjImg(cuerpo_inicio,"img_office_world","img_office_world","./vista/img/cancel_baño.png")
            // let img_canceleria_terraza = mkObjImg(cuerpo_inicio,"img_office_world","img_office_world","./vista/img/cancelería_terraza.png")

            let contenido_etiquetas_canceleria = mkObj(cuerpo_inicio,"contenido_etiquetas_canceleria","contenido_etiquetas_canceleria")

                let etiqueta_canceleria_baños = etiquetaCanceleria(contenido_etiquetas_canceleria,"etiqueta_canceleria","etiqueta_canceleria_baños","Baños","./vista/img/cancel_baño.png","Decora tus baños con un estilo minimalista.")

                let etiqueta_canceleria_terrazas = etiquetaCanceleria(contenido_etiquetas_canceleria, "etiqueta_canceleria", "etiqueta_canceleria_terrazas", "Terrazas", "./vista/img/cancelería_terraza.png", "Añade un diseño atractivo para tus terrazas.");

                let etiqueta_canceleria_oficinas = etiquetaCanceleria(contenido_etiquetas_canceleria, "etiqueta_canceleria", "etiqueta_canceleria_oficinas", "Oficinas", "./vista/img/cancel_oficina.png", "Renueva tu oficina con disenos modernos.");

                let etiqueta_canceleria_domos = etiquetaCanceleria(contenido_etiquetas_canceleria, "etiqueta_canceleria", "etiqueta_canceleria_domos", "Domos", "./vista/img/cancel_domo.png", "Domos atractivos sobre habitación, patio y/o jardin.");

                let etiqueta_canceleria_hogar = etiquetaCanceleria(contenido_etiquetas_canceleria, "etiqueta_canceleria", "etiqueta_canceleria_hogar", "Hogar", "./vista/img/cancel_hogar.png", "Remodela los interiores de tus espacios.");

                function etiquetaCanceleria(nodo,clase,id,titulo,img_ruta,descripcion) {
                    nodo?true:"";clase?true:"";id?true:"";titulo?true:"";img_ruta?true:"";descripcion?true:"";
                    
                    let obj_temp = mkObj(nodo,"cont_"+""+clase,"cont_"+""+id)
                    obj_temp.style.flexDirection="column"

                        let header_temp = mkObj(obj_temp,"header_"+clase,"header_"+id)
                            let header_temp_titulo = mkText(header_temp,"header_temp_titulo"+clase,"header_temp_titulo"+id,titulo)

                        let cuerpo_temp = mkObj(obj_temp,"cuerpo_"+clase,"cuerpo_"+id)
                            let cuerpo_temp_imagen = mkObjImg(cuerpo_temp,"cuerpo_temp_imagen"+clase,"cuerpo_temp_imagen"+id,img_ruta)

                        let footer_temp = mkObj(obj_temp,"footer_"+clase,"footer_"+id)
                            let footer_temp_descripcion = mkText(footer_temp,"footer_temp_descripcion"+clase,"footer_temp_descripcion"+id,descripcion)

                    obj_temp.addEventListener("mouseup",function () {
                        console.log(obj_temp)
                        let hc = document.querySelectorAll(".hipercapa_")
                        if (hc) {
                            hc.forEach(element => {
                                // console.log(hc)
                                element.remove()
                            });
                        }
                        let hipercapa_temp = mkObj(contenedor_principal,"hipercapa_"+clase,"hipercapa_"+id)
                        hipercapa_temp.style.position="absolute"
                        hipercapa_temp.style.zIndex="255"
                            let ventana_enviar_cotizacion = mkObj(hipercapa_temp,"ventana_enviar_cotizacion","ventana_enviar_cotizacion_"+id)
                                let ventana_enviar_cotizacion_header = mkObj(ventana_enviar_cotizacion,"ventana_enviar_cotizacion_header","ventana_enviar_cotizacion_header"+id)
                                    let ventana_enviar_cotizacion_header_titulo = mkText(ventana_enviar_cotizacion_header,"ventana_enviar_cotizacion_header_titulo","ventana_enviar_cotizacion_header_titulo"+id,"Solicitar Cotización de Cancelería "+titulo)
                                let ventana_enviar_cotizacion_cuerpo = mkObj(ventana_enviar_cotizacion,"ventana_enviar_cotizacion_cuerpo","ventana_enviar_cotizacion_cuerpo"+id)
                                    let ventana_enviar_cotizacion_cuerpo_fila_producto = mkObj(ventana_enviar_cotizacion_cuerpo,"ventana_enviar_cotizacion_cuerpo_fila","ventana_enviar_cotizacion_cuerpo_fila_"+id)
                                        let ventana_enviar_cotizacion_cuerpo_fila_img = mkObjImg(ventana_enviar_cotizacion_cuerpo_fila_producto,"ventana_enviar_cotizacion_cuerpo_fila_img","ventana_enviar_cotizacion_cuerpo_fila_img"+id,img_ruta)
                                        let ventana_enviar_cotizacion_cuerpo_fila_descripcion = mkText(ventana_enviar_cotizacion_cuerpo_fila_producto,"ventana_enviar_cotizacion_cuerpo_fila_descripcion","ventana_enviar_cotizacion_cuerpo_fila_descripcion"+id,titulo+"<br>"+descripcion)
                                            let img_whatsapp = mkObjImg(ventana_enviar_cotizacion_cuerpo_fila_descripcion,"img_contacto","img_whatsapp","./vista/img/whatsapp.png")

                                                img_whatsapp.addEventListener("mouseup",function () {
                                                    window.open(`https://wa.me/5528215430?text=Hola,%20quiero%20cotizar%20una%20Cancelería%20para%20${titulo}.`, '_blank');
                                                    
                                                })

                                let ventana_enviar_cotizacion_footer = mkObj(ventana_enviar_cotizacion,"ventana_enviar_cotizacion_footer","ventana_enviar_cotizacion_footer"+id)
                                    let ventana_enviar_cotizacion_footer_contactos = mkTextList(ventana_enviar_cotizacion_footer,"ventana_enviar_cotizacion_footer_contactos","ventana_enviar_cotizacion_footer_contactos"+id,
                                        "Teléfono: 5528215430",
                                        "Correo Electrónico: unmundodecanceleria@hotmail.com"
                                    )

                                // Agregar evento para manipular el historial al cerrar la ventana
                                window.addEventListener("popstate", function () {
                                    if (hipercapa_temp) {
                                        hipercapa_temp.remove();
                                    }
                                });

                                // Modificar el historial al abrir la ventana
                                history.pushState({ action: "open" }, null, "cotizacion"); // Puedes personalizar la URL según tu necesidad

                    })

                    return obj_temp
                }
                

        let footer_principal = mkObj(contenedor_principal,"footer_principal","footer_principal")
        footer_principal.addEventListener("mouseenter",function () {
            footer_principal.style.height="420px"
        })
        footer_principal.addEventListener("mouseleave",function () {
            footer_principal.style.height="70px"
        })

            let img_whatsapp = mkObjImg(footer_principal,"img_contacto","img_whatsapp","./vista/img/whatsapp.png")

                img_whatsapp.addEventListener("mouseup",function () {
                    window.open(`https://wa.me/5528215430?text=Hola,%20quiero%20cotizar%20un%20producto.`, '_blank');
                })

            let img_gmail = mkObjImg(footer_principal,"img_contacto","img_gmail","./vista/img/gmail.png")



return cuerpo_inicio
}
