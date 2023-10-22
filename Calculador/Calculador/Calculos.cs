using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Calculador
{
    public static class Calculos
    {
        public static decimal Calcularrectangulo(decimal b, decimal a)
        {
            return b * a ;
        }

        public static double Calcularcirculo(double c)
        {
            const double pi = 3.1416;

            return pi * Math.Pow(c, 2);
        }

    }
}
