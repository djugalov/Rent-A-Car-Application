using Microsoft.EntityFrameworkCore.Migrations;

namespace RentCar.Data.Migrations
{
    public partial class UpdateApplicationUserWithIsAdminProp : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "is_admin",
                table: "AspNetUsers",
                type: "bit",
                nullable: false,
                defaultValue: false);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "is_admin",
                table: "AspNetUsers");
        }
    }
}
