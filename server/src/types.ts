export enum USER_ROLES{
   NORMAL = "NORMAL",
   ADMIN = "ADMIN"
}

export type user = {
   id: string
   email: string
   password: string
   name: string
   nickname: string
   role: USER_ROLES
   cep:string
   numero:string
   complemento:string
}

export type userAddress = {
   street: string
   neighborhood: string
   city: string
   state: string
}
