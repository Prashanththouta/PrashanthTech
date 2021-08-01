export interface PhoneNo {
    PhoneNo: number;
    Type: PhoneNoTye;
}

export enum PhoneNoTye {
    Primary = 'Primary',
    Secondary = 'Secondary'
}