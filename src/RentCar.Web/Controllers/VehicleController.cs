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
        [HttpPost]
        public async Task<Guid> AddVehicle(AddNewVehicleDTO addNewVehicleDTO) => await _service.AddVehicle(addNewVehicleDTO);
        [HttpPost]
        public async Task<Guid> BookVehicle(BookVehicleDTO bookVehicleDTO) => await _service.BookVehicle(bookVehicleDTO);
        [HttpPost]
        public async Task<Guid> EditVehicle(EditVehicleDTO editVehicleDTO) => await _service.EditVehicle(editVehicleDTO);
        [HttpPost]
        public async Task<Guid> DeleteVehicle(Guid id) => await _service.DeleteVehicle(id);
    }
}
