using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BlogDataLibrary.Models
{
    public class PostEmployee
    {
        public int Id { get; set; }
        public int AdminId { get; set; }
        public string? Position { get; set; }
        public string? LastName { get; set; }
        public string? FirstName { get; set; }
        public decimal CurrentPay { get; set; }
        public DateTime DateJoined { get; set; }
    }
}
