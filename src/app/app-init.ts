import {DataService} from './sklep/service/data.service';
import {OrderService} from './sklep/service/order.service';

export class AppInit {
}

export function initializeCategories(dataService: DataService) {
  return (): Promise<any> => {
    dataService.getProducts();
    dataService.getAllCategories();
    return dataService.getAllSubcategories();
  };
}

export function initializeProducts(dataService: DataService) {
  return (): Promise<any> => {
    return dataService.getProducts();
  };
}

export function initializeOrderTypes(orderService: OrderService) {
  return (): Promise<any> => {
    orderService.getAllPaymentTypes();
    orderService.getAllOrderStatuses();
    return orderService.getAllDeliveryTypes();
  };
}


