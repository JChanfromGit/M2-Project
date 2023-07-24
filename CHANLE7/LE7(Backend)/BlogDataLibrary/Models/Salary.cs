using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BlogDataLibrary.Models
{
    public class Salary
    {
        public int Id { get; set; }
        public string? Position { get; set; }
        public decimal CurrentPay { get; set; }
        public decimal TotalPay { get; set; }
    }
}