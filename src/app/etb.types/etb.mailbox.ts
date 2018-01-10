export class Mail {
    constructor(
        public id: number,
        public from: string,
        public to: string,
        public subject: string,
        public date: Date,
        public content: string
    ) { }
}

export class Box {
    constructor(
        public value: string,
        public label: string,
        public emails: Mail[]
    ) { }
}