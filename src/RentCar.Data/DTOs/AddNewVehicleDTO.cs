using RentCar.Data.Models.Enums;
using System;

namespace RentCar.Data.DTOs
{
    public class AddNewVehicleDTO
    {
        public string Brand { get; set; }
        public string Model { get; set; }
        public DateTime ConstructionDate { get; set; }
        public byte NumberOfSeats { get; set; }
        public string ImageLink { get; set; } = null;
        public FuelType FuelType { get; set; }
        public VehicleType VehicleType { get; set; }
    }
}
