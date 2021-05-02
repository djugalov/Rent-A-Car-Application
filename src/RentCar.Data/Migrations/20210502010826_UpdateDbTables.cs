using Microsoft.EntityFrameworkCore.Migrations;

namespace RentCar.Data.Migrations
{
    public partial class UpdateDbTables : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "is_deleted",
                table: "Vehicles",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<decimal>(
                name: "total_rental_event_price",
                table: "RentalEvents",
                type: "decimal(5,2)",
                nullable: false,
                defaultValue: 0m);

            migrationBuilder.AddColumn<bool>(
                name: "is_vip",
                table: "AspNetUsers",
                type: "bit",
                nullable: false,
                defaultValue: false);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "is_deleted",
                table: "Vehicles");

            migrationBuilder.DropColumn(
                name: "total_rental_event_price",
                table: "RentalEvents");

            migrationBuilder.DropColumn(
                name: "is_vip",
                table: "AspNetUsers");
        }
    }
}
