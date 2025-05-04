export interface TopicType {
    title: string;
    slug: string;
    number: number;
}

export interface CoursesType {
    title: string;
    slug: string;
    number: number;
    topics?: TopicType[];
}




export const COURSES: CoursesType[] = [
    {
        title: 'Proceso de contratación - Primer contacto y entrevista',
        slug: 'proceso-contratacion-entrevista-primer-contacto',
        number: 1,
        topics: [
            {
                title: "Cómo es la primer toma de contacto",
                slug: "como-es-la-primer-toma-de-contacto",
                number: 1
            },
            {
                title: "Preguntas frecuentes con reclutadores",
                slug: "preguntas-frecuentes-con-reclutadores",
                number: 2
            },
            {
                title: "Errores comunes durante la primer entrevista",
                slug: "errores-comunes-durante-la-primer-entrevista",
                number: 3
            },
            {
                title: "¿Qué es lo que se piden para desarrollador web (front-end y Full Stack)?",
                slug: "que-es-lo-que-se-piden-para-desarrollador-web-front-end-y-full-stack",
                number: 4
            },
            {
                title: "¿Qué es lo que se pide para desarrollador Back End?",
                slug: "que-es-lo-que-se-pide-para-desarrollador-back-end",
                number: 5
            },
            {
                title: "¿Qué es lo que se pide para desarrollador Movil?",
                slug: "que-es-lo-que-se-pide-para-desarrollador-movil",
                number: 6
            }
        ]
    },
    {
        title: 'Pruebas Técnicas - Live Coding',
        slug: 'pruebas-tecnicas-live-coding',
        number: 2,
    },
    {
        title: 'Pruebas Técnicas - Take Home',
        slug: 'pruebas-tecnicas-take-home',
        number: 3,
    },
    {
        title: 'Preparar Búsqueda Empleo',
        slug: 'preparar-busqueda-empleo',
        number: 4,
    },
]

