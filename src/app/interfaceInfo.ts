export interface Cv {
    usuario: Usuario[];
    carousel: Carousel[];
    tarjeta: Tarjeta[];
    sobreMi: SobreMi[];
    educacion: Educacion[];
    habilidades: Habilidad[];
    proyectos: Proyecto[];
}
export interface Usuario {
    id?: number;
    correo: string;
    clave: string
}
export interface Carousel {
    id?: number;
    img: string;
    img2: string;
    img3: string
}
export interface Tarjeta {
    id?: number;
    img: string;
    name: string;
    role: string
}
export interface SobreMi {
    id?: number;
    descripcion: string
}
export interface Educacion {
    id?: number;
    img: string;
    title: string;
    school: string;
    descripcion: string
}

export interface Habilidad {
    id?: number;
    img: string;
    nombre: string
}

export interface Proyecto {
    id?: number;
    img: string;
    title: string;
    descripcion: string;
    finalizacion: string
}