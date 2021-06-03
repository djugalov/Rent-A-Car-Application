using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using RentCar.Web.Data;
using System;
using System.Linq;

namespace RentCar.Data.Data
{
    public class AdminSeeder
    {
        private readonly RentCarWebContext _context;

        public AdminSeeder(RentCarWebContext context)
        {
            _context = context;
        }

        public async void SeedAdminUser()
        {
            var user = new ApplicationUser
            {
                UserName = "admin@test.demo",
                NormalizedUserName = "admin@test.demo",
                Email = "admin@test.demo",
                NormalizedEmail = "admin@test.demo",
                EmailConfirmed = true,
                LockoutEnabled = false,
                SecurityStamp = Guid.NewGuid().ToString(),
                FirstName = "Admin",
                MiddleName = "Test",
                LastName = "Demo",
                PhoneNumber = "132545234",
                Address = "Fake Street 18",
                IsAdmin = true,
                IsVip = false,
                IsDeleted = false
            };

            if (!_context.Users.Any(u => u.UserName == user.UserName))
            {
                var password = new PasswordHasher<ApplicationUser>();
                var hashed = password.HashPassword(user, "Admin1!");
                user.PasswordHash = hashed;
                var userStore = new UserStore<ApplicationUser>(_context);
                await userStore.CreateAsync(user);
            }

            await _context.SaveChangesAsync();
        }
    }
}
