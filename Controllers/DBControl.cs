using Microsoft.AspNetCore.Components;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using RouteAttribute = Microsoft.AspNetCore.Components.RouteAttribute;
using projects.Services;

namespace projects.Controllers{   

    [Route("api/[controller]")]
    [ApiController]
        
    public class DBControl : ControllerBase{

        private readonly IDBServices _service;

        public DBControl(IDBServices service) {
            
            _service = service;
        }
        
        /*[HttpGet]
        public async Task<IActionResult> gatherEmploy(){
            
            return ok();
        }*/
    }
}