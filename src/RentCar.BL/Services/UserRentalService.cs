using Microsoft.EntityFrameworkCore;
using RentCar.BL.Contracts;
using RentCar.Data.Models;
using RentCar.Web.Data;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RentCar.BL.Services
{
    public class UserRentalService : IUserRentalService
    {
        private readonly RentCarWebContext _context;
        public UserRentalService(RentCarWebContext context)
        {
            _context = context;
        }

        public async Task<IReadOnlyCollection<RentalEvent>> GetCustomersRentalEventsForTimeRange(string customerId, int days)
        {
            var customer = await _context.Users.Include(x =>x.RentalEvents).FirstOrDefaultAsync(x => x.Id == customerId);
            return customer.RentalEvents.Where(x => x.StartDate >= x.StartDate.AddDays(-days)).ToList();
        }
    }
}
