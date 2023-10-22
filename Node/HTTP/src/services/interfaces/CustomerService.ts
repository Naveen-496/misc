import { Customer } from "../../models/Customer";

export interface CustomerService {
  save(customer: Customer): Promise<Customer>;
  update(customer: Customer): Promise<Customer>;
  findById(customerId: string): Promise<Customer>;
  deleteById(customerId: string): Promise<void>;
  findAll(): Promise< Customer[]>;
}
