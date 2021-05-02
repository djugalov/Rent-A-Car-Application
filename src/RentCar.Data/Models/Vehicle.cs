using RentCar.Data.Models.Enums;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace RentCar.Data.Models
{
    public class Vehicle
    {
        public Vehicle()
        {
            RentalEvents = new HashSet<RentalEvent>();
        }
        [Key]
        [Column("id")]
        public Guid ID { get; set; }
        [Column("brand")]
        public string Brand { get; set; }
        [Column("model")]
        public string Model { get; set; }
        [Column("construction_date")]
        public DateTime ConstructionDate { get; set; }
        [Column("number_of_seats")]
        public byte NumberOfSeats { get; set; }
        [Column("image_link")]
        public string ImageLink { get; set; }
        [Column("price_per_day", TypeName = "decimal(5, 2)")]
        public decimal PricePerDay { get; set; }
        [Column("is_available")]
        public bool IsAvailable { get; set; }
        [Column("fuel_type")]
        public FuelType FuelType { get; set; }
        [Column("vehicle_type")]
        public VehicleType VehicleType { get; set; }
        [Column("is_deleted")]
        public bool IsDeleted { get; set; }
        public virtual ICollection<RentalEvent> RentalEvents { get; set; }
    }
}
