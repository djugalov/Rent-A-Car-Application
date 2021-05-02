using System;

namespace RentCar.Data.DTOs
{
    public class BookVehicleDTO
    {
        public Guid VehicleID { get; set; }
        public string UserID { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
    }
}
