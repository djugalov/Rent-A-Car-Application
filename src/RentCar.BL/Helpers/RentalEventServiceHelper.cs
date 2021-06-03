using RentCar.BL.Contracts;
using RentCar.Data.Models;
using RentCar.Utils.Constants;
using System;

namespace RentCar.BL.Helpers
{
    public class RentalEventServiceHelper : IRentalEventServiceHelper
    {
        public decimal TotalPriceCalculator(RentalEvent rentalEvent)
        {
            var daysRented = (rentalEvent.EndDate - rentalEvent.StartDate).TotalDays;
            if (daysRented == 0)
            {
                daysRented = 1;
            }
            var basePrice = GetBasePrice(daysRented, rentalEvent.Vehicle.PricePerDay);
            var discount = GetDiscountPercentage(daysRented, rentalEvent.Customer.IsVip);
            return GetDiscountedPrice(basePrice, discount);
        }

        private decimal GetBasePrice(double daysRented, decimal pricePerDay) => (int)Math.Round(daysRented) * pricePerDay;

        private decimal GetDiscountedPrice(decimal basePrice, int discountPercentage) => basePrice - basePrice * discountPercentage / 100;

        private int GetDiscountPercentage(double daysRented, bool isVip)
        {
            if (isVip)
            {
                return Constants.VipLevelPercentageDiscount;
            }
            if (daysRented > 3)
            {
                return Constants.BrozeLevelPercentageDiscount;
            }
            if (daysRented > 5)
            {
                return Constants.SilverLevelPercentageDiscount;
            }
            if (daysRented > 10)
            {
                return Constants.GoldLevelPercentageDiscount;
            }
            return 0;
        }
    }
}
