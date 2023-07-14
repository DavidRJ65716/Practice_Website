using Microsoft.EntityFrameworkCore;
using projects.Models;

namespace projects.Data{

    public class EmployDB : DbContext{

        public DbSet<Employees> Employee {get; set;} 

        static readonly string connectionString = "Server=localhost; User ID=guess; Password=5c9[b@_iDs6dwlku; Database=Employees";

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder){
            
            optionsBuilder.UseMySql(connectionString, ServerVersion.AutoDetect(connectionString));
        }
    }
}