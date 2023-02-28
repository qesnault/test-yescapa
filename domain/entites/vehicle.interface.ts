export interface VehicleInterface {
    id: number,
    title: string,
    starting_price: number,
    review_average: number,
    review_count: number,
    vehicle_type: string;
    vehicle_beds: number;
    vehicle_seats: number;
    vehicle_location_city: string;
    vehicle_location_zipcode: string;
    vehicle_owner_first_name: string;
    vehicle_owner_language: string;
    vehicle_owner_picture_url: string;
    url: string;
    pictures: string[];
}
