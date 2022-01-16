using AutoMapper;
using Microsoft.EntityFrameworkCore;
using RentCar.BL.Contracts;
using RentCar.Data.DTOs;
using RentCar.Data.Models;
using RentCar.Utils.Constants;
using RentCar.Web.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RentCar.BL.Services
{
    public class VehicleService : IVehicleService
    {
        private readonly RentCarWebContext _context;
        private readonly IRentalEventService _rentalEventService;
        private readonly IUserRentalService _userRentalService;
        private readonly IMapper _mapper;
        public VehicleService(IMapper mapper, RentCarWebContext context, IRentalEventService rentalEventService, IUserRentalService userRental)
        {
            _mapper = mapper;
            _context = context;
            _rentalEventService = rentalEventService;
            _userRentalService = userRental;
        }
        public async Task<Vehicle> AddVehicle(AddNewVehicleDTO addNewVehicleDTO)
        {
            var vehicle = _mapper.Map<Vehicle>(addNewVehicleDTO);

            await _context.Vehicles.AddAsync(vehicle);

            await _context.SaveChangesAsync();

            return vehicle;
        }

        public async Task<Guid> MarkAsAvailable(Guid id)
        {
            var vehicle = await _context.Vehicles.FirstOrDefaultAsync(x => x.ID == id);

            if (vehicle != null)
            {
                vehicle.UpdateAvailability();

                vehicle.RentalEvents.Select(x => x.IsActive = false);
            }
            _context.SaveChanges();

            return vehicle.ID;
        }

        public async Task<Guid> BookVehicle(BookVehicleDTO bookVehicleDTO)
        {
            var vehicle = await _context.Vehicles.FirstOrDefaultAsync(x => x.ID == bookVehicleDTO.VehicleID && x.IsAvailable);

            var customer = await _context.Users.FirstOrDefaultAsync(x => x.Id == bookVehicleDTO.UserID);

            if (vehicle != null && customer != null)
            {
                vehicle.IsAvailable = false;

                await _rentalEventService.AddRentalEvent(vehicle, customer, bookVehicleDTO);

                var userRentalsForVip = await _userRentalService.GetCustomersRentalEventsForTimeRange(customer.Id, Constants.RentalEventDaysForVip);

                if (userRentalsForVip.Count >= Constants.MinRentalEventsForVip)
                {
                    customer.IsVip = true;
                }

                await _context.SaveChangesAsync();

                return vehicle.ID;
            }

            return default;
        }

        public async Task<Vehicle> EditVehicle(EditVehicleDTO editVehicleDTO)
        {
            var vehicle = await _context.Vehicles.AsNoTracking().FirstOrDefaultAsync(x => x.ID == editVehicleDTO.ID);

            if (vehicle != null)
            {
                var editedVehicle = _mapper.Map<Vehicle>(editVehicleDTO);

                _context.Vehicles.Update(editedVehicle);

                _context.SaveChanges();

                return editedVehicle;
            }

            return null;
        }

        public async Task<IReadOnlyCollection<Vehicle>> GetAllVehicles()
        {
            return await _context.Vehicles.Where(x => !x.IsDeleted).ToListAsync();
        }

        public async Task<Vehicle> GetVehicleById(Guid id)
        {
            var vehicle = await _context.Vehicles.FindAsync(id);

            if (vehicle == null)
            {
                return null;
            }

            return vehicle;
        }
        public async Task<Guid> DeleteVehicle(Guid vehicleID)
        {
            var vehicle = await _context.Vehicles.FirstOrDefaultAsync(x => x.ID == vehicleID);

            if (vehicle != null)
            {
                vehicle.IsDeleted = true;

                await _context.SaveChangesAsync();
            }

            return vehicle.ID;
        }

        public async Task<IReadOnlyCollection<Vehicle>> GetAllAvailableVehicles()
        {
            return await _context.Vehicles.Where(x => x.IsAvailable && !x.IsDeleted).ToListAsync();
        }
    }
}
