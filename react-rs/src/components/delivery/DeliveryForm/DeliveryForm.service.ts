export interface IDeliveryFormData {
  fullName: string;
  zipCode: string;
  birthDate: string;
  deliveryDate: string;
  country: string;
  state: string;
  agreePersonalData: boolean;
  needExtraPresents: boolean;
  gender: string;
  notifications: string;
  avatar: File | null;
}
