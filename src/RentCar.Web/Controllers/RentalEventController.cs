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
    public class RentalEventController : Controller
    {
        private readonly IRentalEventService _rentalEventService;
        public RentalEventController(IRentalEventService rentalEventService)
        {
            _rentalEventService = rentalEventService;
        }

        [HttpGet]
        public async Task<IReadOnlyCollection<RentalEvent>> GetRentalEventsInDateRange(int days) => await _rentalEventService.GetRentalEventsInDateRange(days);

        [HttpGet]
        public async Task<ActionResult<IReadOnlyCollection<ExpiredRentalEventDTO>>> GetExpiredRentalEvents()
        {
            var expiredRentalEvents = await _rentalEventService.GetExpiredRentalEvents();

            return Ok(expiredRentalEvents);
        }
        [HttpPost]
        public IActionResult AddRentalEvent(BookVehicleDTO bookVehicleDTO)
        {

            return Ok(_rentalEventService.CreateEvent(bookVehicleDTO));
        }
    }
}
