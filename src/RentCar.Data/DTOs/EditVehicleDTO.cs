using System;
using System.Collections.Generic;
using System.Text;

namespace RentCar.Data.DTOs
{
    public class EditVehicleDTO : AddNewVehicleDTO
    {
        public Guid ID { get; set; }
    }
}
