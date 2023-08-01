using projects.Data;

namespace projects.Services{

    public class DBServices : IDBServices{

        private readonly EntityDB _context;
        public DBServices(EntityDB context){

            _context = context;
        }

        /*public async List<Employees> GetAllEmployees(){

            var Employee = await _context.;
        }*/
    }
}