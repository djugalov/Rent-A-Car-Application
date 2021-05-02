using Microsoft.EntityFrameworkCore;
using RentCar.BL.Contracts;
using RentCar.Data;
using RentCar.Data.DTOs;
using RentCar.Data.Models;
using RentCar.Web.Data;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RentCar.BL.Services
{
    public class RentalEventService : IRentalEventService
    {
        private readonly RentCarWebContext _context;
        private readonly IRentalEventServiceHelper _helper;
        public RentalEventService(RentCarWebContext context, IRentalEventServiceHelper helper)
        {
            _context = context;
            _helper = helper;
        }
        public async Task AddRentalEvent(Vehicle vehicle, ApplicationUser customer, BookVehicleDTO bookVehicleDTO)
        {
            var rentalEvent = new RentalEvent
            {
                Customer = customer,
                Vehicle = vehicle,
                StartDate = bookVehicleDTO.StartDate,
                EndDate = bookVehicleDTO.EndDate
            };
            rentalEvent.TotalRentalEventPrice = _helper.TotalPriceCalculator(rentalEvent);
            await _context.RentalEvents.AddAsync(rentalEvent);
            await _context.SaveChangesAsync();
        }

        public async Task CreateEvent(BookVehicleDTO bookVehicleDTO)
        {
            var vehicle = await _context.Vehicles.FirstOrDefaultAsync(x => x.ID == bookVehicleDTO.VehicleID);
            var customer = await _context.Users.FirstOrDefaultAsync(x => x.Id == bookVehicleDTO.UserID);
            if (vehicle != null && customer != null)
            {
                await AddRentalEvent(vehicle, customer, bookVehicleDTO);
                await _context.SaveChangesAsync();
            }
        }

        public async Task<IReadOnlyCollection<RentalEvent>> GetRentalEventsInDateRange(int days)
        {
            return await _context.RentalEvents.Where(x => x.StartDate >= x.StartDate.AddDays(-days)).ToListAsync();
        }
    }
}
