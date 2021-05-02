using Microsoft.Extensions.DependencyInjection;
using RentCar.BL.AutoMapperMappings;
using RentCar.BL.Contracts;
using RentCar.BL.Helpers;
using RentCar.BL.Services;

namespace RentCar.BL.Extensions 
{ 
    public static class ServiceCollectionExtensions
    {
        public static IServiceCollection AddVehicleService(this IServiceCollection services) => services.AddScoped<IVehicleService, VehicleService>();
        public static IServiceCollection AddRentalEventService(this IServiceCollection services) => services.AddScoped<IRentalEventService, RentalEventService>();
        public static IServiceCollection AddUserRentalService(this IServiceCollection services) => services.AddScoped<IUserRentalService, UserRentalService>();
        public static IServiceCollection AddUserService(this IServiceCollection services) => services.AddScoped<IUserService, UserService>();
        public static IServiceCollection AddRentalEventServiceHelper(this IServiceCollection services) => services.AddScoped<IRentalEventServiceHelper, RentalEventServiceHelper>();
        public static IServiceCollection AddAutoMapperService(this IServiceCollection services) => services.AddAutoMapper(typeof(MappingProfile));
    }
}
