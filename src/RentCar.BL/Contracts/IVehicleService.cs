using RentCar.Data.DTOs;
using RentCar.Data.Models;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace RentCar.BL.Contracts
{
    public interface IVehicleService
    {
        public Task<Vehicle> AddVehicle(AddNewVehicleDTO addNewVehicleDTO);
        public Task<Vehicle> GetVehicleById(Guid id);
        public Task<IReadOnlyCollection<Vehicle>> GetAllVehicles();
        public Task<IReadOnlyCollection<Vehicle>> GetAllAvailableVehicles();
        public Task<Guid> BookVehicle(BookVehicleDTO bookVehicleDTO);
        public Task<Vehicle> EditVehicle(EditVehicleDTO editVehicleDTO);
        public Task<Guid> DeleteVehicle(Guid vehicleID);
        public Task<Guid> MarkAsAvailable(Guid id);
    }
}
