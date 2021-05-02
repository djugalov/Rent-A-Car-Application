using RentCar.Data;
using RentCar.Data.DTOs;
using RentCar.Data.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace RentCar.BL.Contracts
{
    public interface IRentalEventService
    {
        public Task AddRentalEvent(Vehicle vehicle, ApplicationUser customer, BookVehicleDTO bookVehicleDTO);
        public Task<IReadOnlyCollection<RentalEvent>> GetRentalEventsInDateRange(int days);
        Task CreateEvent(BookVehicleDTO bookVehicleDTO);
    }
}
