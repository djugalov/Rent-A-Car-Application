using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace RentCar.Data.Models
{
    public class RentalEvent
    {
        [Key]
        [Column("id")]
        public Guid ID { get; set; }
        [Column("start_date")]
        public DateTime StartDate { get; set; }
        [Column("end_date")]
        public DateTime EndDate { get; set; }
        [Column("total_rental_event_price", TypeName ="decimal(5, 2)")]
        public decimal TotalRentalEventPrice { get; set; }
        [ForeignKey("customer_id")]
        public virtual ApplicationUser Customer { get; set; }
        [ForeignKey("vehicle_id")]
        public virtual Vehicle Vehicle { get; set; }
    }
}
