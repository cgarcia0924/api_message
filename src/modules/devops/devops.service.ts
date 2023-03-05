import { Injectable } from '@nestjs/common';

@Injectable()
export class DevopsService {
    private _message: any[];
    constructor() {
        this._message = []
    }
    createMessage(message: string, to: string, from: string, timeToLifeSec: string) {
        let content = {
            message,
            to,
            from,
            timeToLifeSec
        }
        this._message.push(content);
        console.log("Nombre: ", this._message)
        const datas = { message: "Hello " + this._message[this._message.length - 1].to + " your message will be send" };
        return datas;
    }    
}
