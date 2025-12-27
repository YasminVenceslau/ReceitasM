export type ListaDeTextos = string[];

export interface BlocosDeTexto {
    [titulo: string]: ListaDeTextos | undefined;
}

export interface TempoPreparo {
    [etapa: string]: string;
}

export interface Receita {
    id: number;
    nome: string;
    categoria: string;
    tags: string[];

    forma?: string;
    Panela?: string;
    rendimento?: string;

    tempo_preparo?: TempoPreparo;

    ingredientes?: BlocosDeTexto;
    modo_preparo?: BlocosDeTexto;

    finalizacao?: string[];
}


