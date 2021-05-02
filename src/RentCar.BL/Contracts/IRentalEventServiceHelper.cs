using RentCar.Data.Models;

namespace RentCar.BL.Contracts
{
    public interface IRentalEventServiceHelper
    {
        public decimal TotalPriceCalculator(RentalEvent rentalEvent);
    }
}
