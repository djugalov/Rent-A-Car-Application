﻿using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using RentCar.BL.Contracts;
using RentCar.Data;
using RentCar.Data.DTOs;
using RentCar.Web.Data;
using System;
using System.Collections.Generic;
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
            var applicationUsers = await _context.Users.ToListAsync();
            return _mapper.Map<IReadOnlyCollection<GetUserDTO>>(applicationUsers);
        }

        public async Task<GetUserDTO> GetUserByID(string id)
        {
            var user = await _context.Users.FirstOrDefaultAsync(x => x.Id == id);
            return user != null ? _mapper.Map<GetUserDTO>(user) : throw new NullReferenceException();
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
            throw new NullReferenceException();
        }

        public async Task<string> EditUser(EditUserDTO editUserDTO)
        {
            var user = await _context.Users.AsNoTracking().FirstOrDefaultAsync(x => x.Id == editUserDTO.ID);
            if (user != null)
            {
                var editedUser = _mapper.Map<ApplicationUser>(editUserDTO);
                _context.Users.Update(editedUser);
                await _context.SaveChangesAsync();
                return editedUser.Id;
            }
            throw new NullReferenceException();
        }

        public bool IsUserLoggedIn()
        {
            return _httpContextAccessor.HttpContext.User.Identity.IsAuthenticated;
        }
    }
}
