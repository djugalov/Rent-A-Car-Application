using RentCar.Data.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace RentCar.BL.Contracts
{
    public interface IUserRentalService
    {
        public Task<IReadOnlyCollection<RentalEvent>> GetCustomersRentalEventsForTimeRange(string customerId, int days);
    }
}
