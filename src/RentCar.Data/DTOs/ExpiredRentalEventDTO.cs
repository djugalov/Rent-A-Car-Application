using System;

namespace RentCar.Data.DTOs
{
    public class ExpiredRentalEventDTO
    {
        public Guid VehicleID { get; set; }
        public string VehicleDescription { get; set; }
        public DateTime RentalEventStartDate { get; set; }
        public DateTime RentalEventEndDate { get; set; }
    }
}
