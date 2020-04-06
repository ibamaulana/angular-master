export interface Profile {
    id: number;
    name: string;
    phone: number;
    email: string;
    date: string;
    province: {
      id:number,
      name:string,
    },
    city: {
      id:number,
      name:string,
    },
    street: string;
    postalcode: number;
  }