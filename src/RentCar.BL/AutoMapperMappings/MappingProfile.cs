using AutoMapper;
using RentCar.Data;
using RentCar.Data.DTOs;
using RentCar.Data.Models;

namespace RentCar.BL.AutoMapperMappings
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<Vehicle, AddNewVehicleDTO>().ReverseMap();
            CreateMap<Vehicle, EditVehicleDTO>().ReverseMap();
            CreateMap<ApplicationUser, GetUserDTO>().ForMember(dest => dest.FullName, opt => opt.MapFrom(x => x.GetFullName())).ReverseMap();
            CreateMap<ApplicationUser, EditUserDTO>().ReverseMap();
        }
    }
}
