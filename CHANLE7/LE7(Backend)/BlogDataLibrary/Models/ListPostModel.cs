using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

public class ListPostModel
{
    public int Id { get; set; }
    public string? BarangayName { get; set; }
    public string? Position { get; set; }
    public decimal CurrentPay { get; set; }
    public string? LastName { get; set; }
    public string? FirstName { get; set; }
    public DateTime DateJoined { get; set; }
}
