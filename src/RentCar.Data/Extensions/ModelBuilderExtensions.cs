using Microsoft.EntityFrameworkCore;
using RentCar.Data.Models;
using System;

namespace RentCar.Data.Extensions
{
    public static class ModelBuilderExtensions
    {
        public static void Seed(this ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Vehicle>().HasData(
                new Vehicle
                {
                    ID = Guid.NewGuid(),
                    Brand = "Tesla",
                    Model = "Model 3",
                    ConstructionDate = new DateTime(2019, 10, 11),
                    FuelType = Models.Enums.FuelType.Electric,
                    VehicleType = Models.Enums.VehicleType.Estate,
                    NumberOfSeats = 5,
                    IsAvailable = true,
                    ImageLink = "https://wallpaperaccess.com/full/486526.jpg",
                    PricePerDay = 120,
                    IsDeleted = false
                },
                new Vehicle
                {
                    ID = Guid.NewGuid(),
                    Brand = "Maserati",
                    Model = "Ghibli-Hybrid",
                    ConstructionDate = new DateTime(2018, 9, 18),
                    FuelType = Models.Enums.FuelType.Electric,
                    VehicleType = Models.Enums.VehicleType.Luxury,
                    NumberOfSeats = 5,
                    IsAvailable = true,
                    ImageLink = "https://s7g10.scene7.com/is/image/maserati/dealers/no/Ghibli-Hybrid/169/Ghibli_Grey_3-4_front_passenger_side.jpg?$1920x2000$&fit=constrain",
                    PricePerDay = 350,
                    IsDeleted = false
                },
                new Vehicle
                {
                    ID= Guid.NewGuid(),
                    Brand = "Renault",
                    Model = "Megane",
                    ConstructionDate = new DateTime(2018, 3, 18),
                    FuelType = Models.Enums.FuelType.Diesel,
                    VehicleType = Models.Enums.VehicleType.Economy,
                    NumberOfSeats = 5,
                    IsAvailable = true,
                    ImageLink = "https://s1.1zoom.me/b5762/92/Renault_2018_Megane_R.S._280_Cup_Orange_Metallic_552519_1920x1080.jpg",
                    PricePerDay = 100,
                    IsDeleted = false
                },
                new Vehicle
                {
                    ID = Guid.NewGuid(),
                    Brand = "Citroen",
                    Model = "Berlingo",
                    ConstructionDate = new DateTime(2014, 4, 12),
                    FuelType = Models.Enums.FuelType.Petrol,
                    VehicleType = Models.Enums.VehicleType.Cargo,
                    NumberOfSeats = 7,
                    IsAvailable = true, 
                    ImageLink = "https://lh3.googleusercontent.com/proxy/bfaRcEj3vGe79vb1hvkG80AVq91dsfNqJGwFti5B2AwSddnMQBpQxrMOVcgsucHH9UhE02KDa_r9excWXOhOkXNTYcu9DI7EGm5f9Gx6maoRQUJNakxFkl8ebz-dZxuPvMMW8sNOyQGEGY6bxWAkcljPFlcgHUArVSGuTiJxNP_Ks2OtXBPE",
                    PricePerDay = 45,
                    IsDeleted = false
                });
        }
    }
}
