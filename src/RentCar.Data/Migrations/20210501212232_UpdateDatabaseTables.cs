using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace RentCar.Data.Migrations
{
    public partial class UpdateDatabaseTables : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Vehicles",
                columns: table => new
                {
                    id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    brand = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    model = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    construction_date = table.Column<DateTime>(type: "datetime2", nullable: false),
                    number_of_seats = table.Column<byte>(type: "tinyint", nullable: false),
                    image_link = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    price_per_day = table.Column<decimal>(type: "decimal(5,2)", nullable: false),
                    is_available = table.Column<bool>(type: "bit", nullable: false),
                    fuel_type = table.Column<int>(type: "int", nullable: false),
                    vehicle_type = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Vehicles", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "RentalEvents",
                columns: table => new
                {
                    id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    start_date = table.Column<DateTime>(type: "datetime2", nullable: false),
                    end_date = table.Column<DateTime>(type: "datetime2", nullable: false),
                    customer_id = table.Column<string>(type: "nvarchar(450)", nullable: true),
                    vehicle_id = table.Column<Guid>(type: "uniqueidentifier", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_RentalEvents", x => x.id);
                    table.ForeignKey(
                        name: "FK_RentalEvents_AspNetUsers_customer_id",
                        column: x => x.customer_id,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_RentalEvents_Vehicles_vehicle_id",
                        column: x => x.vehicle_id,
                        principalTable: "Vehicles",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_RentalEvents_customer_id",
                table: "RentalEvents",
                column: "customer_id");

            migrationBuilder.CreateIndex(
                name: "IX_RentalEvents_vehicle_id",
                table: "RentalEvents",
                column: "vehicle_id");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "RentalEvents");

            migrationBuilder.DropTable(
                name: "Vehicles");
        }
    }
}
