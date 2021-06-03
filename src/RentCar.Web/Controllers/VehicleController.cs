using Microsoft.AspNetCore.Mvc;
using RentCar.BL.Contracts;
using RentCar.Data.DTOs;
using RentCar.Data.Models;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace RentCar.Web.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class VehicleController : Controller
    {
        private readonly IVehicleService _service;
        public VehicleController(IVehicleService service)
        {
            _service = service;
        }
        [HttpGet]
        public async Task<Vehicle> GetVehicleByID(Guid id) => await _service.GetVehicleById(id);
        [HttpGet]
        public async Task<IReadOnlyCollection<Vehicle>> GetAllVehicles() => await _service.GetAllVehicles();
        [HttpGet]
        public async Task<IReadOnlyCollection<Vehicle>> GetAllAvailableVehicles() => await _service.GetAllAvailableVehicles();
        //TO DO change return type to Vehicle
        [HttpPost]
        public async Task<Vehicle> AddVehicle(AddNewVehicleDTO addNewVehicleDTO) => await _service.AddVehicle(addNewVehicleDTO);
        [HttpPost]
        public async Task<Guid> MarkAsAvailable(BaseDTO baseDto) => await _service.MarkAsAvailable(baseDto.ID);
        [HttpPost]
        public async Task<Guid> BookVehicle(BookVehicleDTO bookVehicleDTO) => await _service.BookVehicle(bookVehicleDTO);
        [HttpPost]
        public async Task<Vehicle> EditVehicle(EditVehicleDTO editVehicleDTO) => await _service.EditVehicle(editVehicleDTO);
        [HttpPost]
        public async Task<Guid> DeleteVehicle(BaseDTO baseDeleteDTO) => await _service.DeleteVehicle(baseDeleteDTO.ID);
    }
}
