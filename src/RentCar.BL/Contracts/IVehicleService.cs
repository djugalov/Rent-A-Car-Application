using RentCar.Data.DTOs;
using RentCar.Data.Models;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace RentCar.BL.Contracts
{
    public interface IVehicleService
    {
        public Task<Guid> AddVehicle(AddNewVehicleDTO addNewVehicleDTO);
        public Task<Vehicle> GetVehicleById(Guid id);
        public Task<IReadOnlyCollection<Vehicle>> GetAllVehicles();
        public Task<Guid> BookVehicle(BookVehicleDTO bookVehicleDTO);
        public Task<Guid> EditVehicle(EditVehicleDTO editVehicleDTO);
        public Task<Guid> DeleteVehicle(Guid vehicleID);
    }
}
