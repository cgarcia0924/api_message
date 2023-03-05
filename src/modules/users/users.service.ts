import { Injectable } from '@nestjs/common';
import { UsersDto } from './dto/users-dto';


@Injectable()
export class UsersService {
    private _users: UsersDto[];
    constructor(
    ) {
        // Inicializamos el array de usuarios
        this._users = [];
    }
    /**
     * Crea un usuario
     */
    createUser(user: UsersDto) {
        const userFound = this._users.find(u => u.email == user.email);
        if (!userFound) {
            this._users.push(user);
            return true;
        } else {
            return false;
        }
    }
    /**
     * Busca el usuario por su email
     * @param email 
     * @returns 
     */
    findUserbyEmail(email: string,  ) {
        return this._users.find(u => u.email == email)
    }
}
