using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using RentCar.BL.Contracts;
using RentCar.Data;
using RentCar.Data.DTOs;
using RentCar.Web.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;


namespace RentCar.BL.Services
{
    public class UserService : IUserService
    {
        private readonly IMapper _mapper;
        private readonly RentCarWebContext _context;
        private readonly SignInManager<ApplicationUser> _signInManager;
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly IHttpContextAccessor _httpContextAccessor;
        public UserService(IMapper mapper,
            RentCarWebContext context,
            UserManager<ApplicationUser> userManager,
            SignInManager<ApplicationUser> signInManager,
            IHttpContextAccessor httpContextAccessor)
        {
            _userManager = userManager;
            _signInManager = signInManager;
            _mapper = mapper;
            _context = context;
            _httpContextAccessor = httpContextAccessor;
        }

        public async Task<IReadOnlyCollection<GetUserDTO>> GetAllUsers()
        {
            var applicationUsers = await _context.Users.Where(x => !x.IsDeleted).ToListAsync();
            return _mapper.Map<IReadOnlyCollection<GetUserDTO>>(applicationUsers);
        }

        public async Task<UserInfoDTO> GetUserByID(string id)
        {
            var user = await _context.Users.FirstOrDefaultAsync(x => x.Id == id);
            return user != null ? _mapper.Map<UserInfoDTO>(user) : null;
        }

        public async Task<string> DeleteUser(string id)
        {
            var user = await _context.Users.FirstOrDefaultAsync(x => x.Id == id);
            if (user != null)
            {
                user.IsDeleted = true;
                await _context.SaveChangesAsync();
                return user.Id;
            }
            return null;
        }

        public async Task<UserInfoDTO> EditUser(EditUserDTO editUserDTO)
        {
            var user = await _context.Users.AsNoTracking().FirstOrDefaultAsync(x => x.Id == editUserDTO.Id);

            if (user != null)
            {
                user.FirstName = editUserDTO.FirstName;
                user.MiddleName = editUserDTO.MiddleName;
                user.LastName = editUserDTO.LastName;
                user.Address = editUserDTO.Address;
                user.PhoneNumber = editUserDTO.PhoneNumber;


                _context.Users.Update(user);
                _context.SaveChanges();
                return _mapper.Map<UserInfoDTO>(user);
            }

            return null;
        }

        public bool IsUserLoggedIn()
        {
            //var user = await _userManager.FindByNameAsync(_httpContextAccessor.HttpContext.User.Identity.Name);
            return _httpContextAccessor.HttpContext.User.Identity.IsAuthenticated;
        }

        public async Task<UserInfoDTO> GetCurrentUser()
        {
            var user = await _userManager.FindByNameAsync(_httpContextAccessor.HttpContext.User.Identity.Name);
            return _mapper.Map<UserInfoDTO>(user);
        }
    }
}
