export class Atendimento{
    constructor(
        public id?:number,
        public nome?:string,
        public prioridade?:boolean,
        public removida?: boolean,
        public atendida?: boolean
    ) {

    }
}