/* Ejercicio3 */


Console.WriteLine("Introduce la cadena a evaluar");
String palabra = Console.ReadLine();
if (Palindroma(palabra)) Console.WriteLine("Es palíndroma");
else Console.WriteLine("NO es palíndroma");
}
static Boolean Palindroma(String cadena)
{
if (cadena.Length < 2) return true;
if (cadena[0] == cadena[cadena.Length - 1])
return Palindroma(cadena.Substring(1, cadena.Length - 2));
return false;
}

