using RentCar.Data.DTOs;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace RentCar.BL.Contracts
{
    public interface IUserService
    {
        public Task<IReadOnlyCollection<GetUserDTO>> GetAllUsers();
        public Task<UserInfoDTO> GetUserByID(string id);
        public Task<string> DeleteUser(string id);
        public Task<UserInfoDTO> EditUser(EditUserDTO editUserDTO);
        public bool IsUserLoggedIn();
        public Task<UserInfoDTO> GetCurrentUser();
    }
}
