using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using RentCar.Data;
using RentCar.Data.Extensions;
using RentCar.Data.Models;

namespace RentCar.Web.Data
{
    public class RentCarWebContext : IdentityDbContext<ApplicationUser>
    {
        public RentCarWebContext(DbContextOptions<RentCarWebContext> options)
            : base(options)
        {
        }

        public DbSet<Vehicle> Vehicles { get; set; }
        public DbSet<RentalEvent> RentalEvents { get; set; }
        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
            builder.Seed();
        }
    }
}
