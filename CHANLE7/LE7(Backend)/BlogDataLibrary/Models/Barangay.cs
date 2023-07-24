using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BlogDataLibrary.Models
{
    public class Barangay
    {
        public int Id { get; set; }
        public string? BarangayName { get; set; }
        public string? City { get; set; }
        public int Zip { get; set; }
        public string? District { get; set; }
        public string? Province { get; set; }
    }
}
