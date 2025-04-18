export interface CoursesType {
    title: string;
    slug: string;
    number: number;
}


export const COURSES : CoursesType[]  = [
    {
        title: 'Proceso de Contratación - Entrevista Primer Contacto',
        slug: 'proceso-contratacion-entrevista-primer-contacto',
        number: 1,
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

