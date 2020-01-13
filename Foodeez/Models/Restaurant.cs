using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Foodeez.Models
{
    public class Restaurant
    {
        public int id { get; set; }
        public string name { get; set; }
        public string address { get; set; }
        public string city { get; set; }
        public string state { get; set; }
        public string area { get; set; }
        public string postal_code { get; set; }
        public string country { get; set; }
        public string phone { get; set; }
        public string lat { get; set; }
        public string lng { get; set; }
        public int price { get; set; }
        public string reserve_url { get; set; }
        public string mobile_reserve_url { get; set; }
        public string image_url { get; set; }
    }
}
