decimal f;
do
{
    Console.WriteLine("Por favor elija la figura del área que quiere calcular: 1. Rectángulo 2. Circulo");
    f = Calculador.Validation.ObtenerEntradaNumerica();

    if (f == 1)
    {
        Console.WriteLine("Introduzca la base del rectángulo:");
        var b = Calculador.Validation.ObtenerEntradaNumerica();

        Console.WriteLine("Introduzca la altura del rectángulo:");
        var a = Calculador.Validation.ObtenerEntradaNumerica();

        Console.WriteLine($"El area del rectángulo es: {Calculador.Calculos.Calcularrectangulo(b, a)}");
    }
    else if (f == 2)
    {
        Console.WriteLine("Ingrese el valor del radio:");
        var c = Calculador.Validation.ObtenerEntradaNumerica2();

        Console.WriteLine($"El area del circulo es: {Calculador.Calculos.Calcularcirculo(c)}");
    }
    else
    {
        Console.WriteLine("El numero indicado no corresponde a lo indicado ");
        
    }
} while (f != 1 && f != 2);