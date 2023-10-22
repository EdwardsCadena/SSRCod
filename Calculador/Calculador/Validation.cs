using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Calculador
{
    public static class Validation
    {


        public static decimal ObtenerEntradaNumerica()
        {
            decimal numero;
            while (!decimal.TryParse(Console.ReadLine(), out numero))
            {
                Console.WriteLine("Por favor, ingrese un dato numérico válido.");
            }
            return numero;
        }

        public static double ObtenerEntradaNumerica2()
        {
            double numero;
            while (!double.TryParse(Console.ReadLine(), out numero))
            {
                Console.WriteLine("Por favor, ingrese un dato numérico válido.");
            }
            return numero;
        }

    }
}
