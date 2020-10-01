using System;
using System.Net.Http;
using System.Threading.Tasks;
using System.Xml;
using System.Xml.Linq;

namespace NSAPI
{
    class Program
    {

        static async Task Main(string[] args)
        {
            Console.WriteLine("Enter User-Agent");
            string uAgent = Console.ReadLine();

            Console.WriteLine("Enter Shard(s)");
            string shardInput = Console.ReadLine(); //Do we have to change the name of this string to match down below? No. But it would be better. To be able to understand it better

            Console.WriteLine("Enter Nation Name");
            string nName = Console.ReadLine();

            using (HttpClient client = new HttpClient())
            {
                client.DefaultRequestHeaders.Add("User-Agent", uAgent);
                string shardString = ToShardString(shardInput);
                string nationName = ToID(nName);
                HttpResponseMessage response = await client.GetAsync($"https://www.nationstates.net/cgi-bin/api.cgi?nation={nationName}&q={shardString}");
                Console.WriteLine(await response.Content.ReadAsStringAsync());
            }
        }
        //Du kannst mit F2 umbenennen.
        private static string ToID(string nationName)
        {
            return nationName?.Trim().ToLower().Replace(' ', '_').Trim('@');
        } //So we delete this first one?

        private static string ToShardString(string shardInput)
        {
            return shardInput.ToLower().Replace(" ", "+");
        }

       {
        XmlDocument xmlDoc = new XmlDocument(); // Create an XML document object
        xmlDoc.Load("nationinfo.xml"); // Load the XML document from the specified file

            }
        
    }
}