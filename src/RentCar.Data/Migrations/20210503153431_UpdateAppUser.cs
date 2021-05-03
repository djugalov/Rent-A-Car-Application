using Microsoft.EntityFrameworkCore.Migrations;

namespace RentCar.Data.Migrations
{
    public partial class UpdateAppUser : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "address",
                table: "AspNetUsers",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<bool>(
                name: "is_deleted",
                table: "AspNetUsers",
                type: "bit",
                nullable: false,
                defaultValue: false);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "address",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "is_deleted",
                table: "AspNetUsers");
        }
    }
}
