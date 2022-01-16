using Microsoft.AspNetCore.Mvc;
using RentCar.BL.Contracts;
using RentCar.Data.DTOs;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace RentCar.Web.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class UserController : Controller
    {
        private readonly IUserService _userService;
        public UserController(IUserService userService)
        {
            _userService = userService;
        }

        [HttpGet]
        public async Task<IReadOnlyCollection<GetUserDTO>> GetAllUsers() => await _userService.GetAllUsers();
        [HttpGet]
        public async Task<ActionResult<UserInfoDTO>> GetUserByID(string id)
        {
            var result = await _userService.GetUserByID(id);

            return result == null ? Ok(result) : NotFound();
        }
        [HttpPost]
        public async Task<ActionResult<UserInfoDTO>> EditUser(EditUserDTO editUserDTO)
        {
            var result = await _userService.EditUser(editUserDTO);

            return result == null ? Ok(result) : NotFound();
        }
        [HttpPost]
        public async Task<ActionResult<string>> DeleteUser(BaseDeleteUserDto baseDeleteDTO)
        {
            // this will perform soft delete for the selected user
            var result = await _userService.DeleteUser(baseDeleteDTO.ID);

            return result == null ? Ok(result) : NotFound();
        }
        [HttpGet]
        public bool IsUserLoggedIn() => _userService.IsUserLoggedIn();

        [HttpGet]
        public async Task<ActionResult<UserInfoDTO>> GetCurrentUser()
        {
            var user = await _userService.GetCurrentUser();

            if(user == null)
            {
                return NotFound();
            }

            return Ok(user);
        }
    }
}
