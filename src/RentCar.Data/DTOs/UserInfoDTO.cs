using System;

namespace RentCar.Data.DTOs
{
    public class UserInfoDTO
    {
        public Guid Id { get; set; }
        public bool IsVip { get; set; }
        public string Username { get; set; }
        public string FirstName { get; set; }
        public string MiddleName { get; set; }
        public string LastName { get; set; }
        public string Address { get; set; }
        public string PhoneNumber { get; set; }
        public bool IsAdmin { get; set; }
    }
}
