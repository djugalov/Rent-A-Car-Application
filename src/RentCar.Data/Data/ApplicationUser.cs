using Microsoft.AspNetCore.Identity;
using RentCar.Data.Models;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace RentCar.Data
{
    // Add profile data for application users by adding properties to the ApplicationUser class
    public class ApplicationUser : IdentityUser
    {
        public ApplicationUser()
        {
            RentalEvents = new HashSet<RentalEvent>();
        }
        [Column("first_name")]
        public string FirstName { get; set; }
        [Column("middle_name")]
        public string MiddleName { get; set; }
        [Column("last_name")]
        public string LastName { get; set; }
        [Column("address")]
        public string Address { get; set; }
        [Column("is_vip")]
        public bool IsVip { get; set; }
        [Column("is_deleted")]
        public bool IsDeleted { get; set; }
        public virtual ICollection<RentalEvent> RentalEvents { get; set; }

        public string GetFullName() => $"{FirstName} {MiddleName} {LastName}";
    }
}
