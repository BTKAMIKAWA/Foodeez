using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Foodeez.Models
{
    public class Restaurant
    {
        public long Id { get; set; }
        public string Name { get; set; }
        public string Address { get; set; }
        public string City { get; set; }
        public string State { get; set; }
        public string Area { get; set; }
        public string ZipCode { get; set; }
        public string Country { get; set; }
        public string PhoneNumber { get; set; }

        public float Latitude { get; set; }
        public float Longitude { get; set; }
        public int PriceRange { get; set; }
        public string ReserveUrl { get; set; }
        public string ImageUrl { get; set; }
    }
}
