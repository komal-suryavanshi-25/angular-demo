import { Service } from '@angular/core';

@Service()
export class Users {

    getUsers(){
       const users=[{
            firstName:"Komal",
            lastName:"Suryavanshi"
        },
        {
            firstName:"Rohan",
            lastName:"Kadam"
        }

    ]
    return users;
    }


}
