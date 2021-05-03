using RentCar.Data.DTOs;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace RentCar.BL.Contracts
{
    public interface IUserService
    {
        public Task<IReadOnlyCollection<GetUserDTO>> GetAllUsers();
        public Task<GetUserDTO> GetUserByID(string id);
        public Task<string> DeleteUser(string id);
        public Task<string> EditUser(EditUserDTO editUserDTO);
        public bool IsUserLoggedIn();
    }
}
