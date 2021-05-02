using Microsoft.AspNetCore.Mvc;
using RentCar.BL.Contracts;
using RentCar.Data.DTOs;
using System;
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
        public async Task<ActionResult<GetUserDTO>> GetUserByID(string id)
        {
            try
            {
                return await _userService.GetUserByID(id);
            }
            catch (NullReferenceException e)
            {
                return NotFound($"We couldn't get information for the selected user: {e.Message}");
            }
        }
        [HttpPost]
        public async Task<ActionResult<string>> EditUser(EditUserDTO editUserDTO)
        {
            try
            {
                return await _userService.EditUser(editUserDTO);
            }
            catch (NullReferenceException e)
            {
                return NotFound($"We couldn't find the selected user: {e.Message}");
            }
        }
        [HttpPost]
        public async Task<ActionResult<string>> DeleteUser(string id)
        {
            try
            {
                // this will perform soft delete for the selected user
                return await _userService.DeleteUser(id);
            }
            catch (NullReferenceException e)
            {
                return NotFound($"We couldn't get information for the selected user: {e.Message}");
            }
        }
    }
}
