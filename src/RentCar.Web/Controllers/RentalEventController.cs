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
            try
            {
                var expiredRentalEvents = await _rentalEventService.GetExpiredRentalEvents();
                return Ok(expiredRentalEvents);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        } 
        [HttpPost]
        public IActionResult AddRentalEvent(BookVehicleDTO bookVehicleDTO)
        {
            try
            {
                return Ok(_rentalEventService.CreateEvent(bookVehicleDTO));
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }
    }
}
