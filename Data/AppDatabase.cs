using Microsoft.EntityFrameworkCore;
using projects.Models;

namespace projects.Data{

    public class AppDatabase : DbContext{

        public DbSet<Employees> Employees{get; set;}
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder){
            //Y@[LwW4*xd[j5Wn@
            var connectionString = "server=localhost;user=guess;password=Y@[LwW4*xd[j5Wn@;database=Employees";
            //base.OnConfiguring(optionsBuilder);
            var serverVersion = new MySqlServerVersion(new Version(8, 0, 33));
            optionsBuilder.UseMySql(connectionString, serverVersion);
        }
    }
}
