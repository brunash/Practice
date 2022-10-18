using System;
using System.Linq;

// Task
//Create a method to see whether the string is ALL CAPS.
public static class StringExtensions
{
  public static bool IsUpperCase(this string text)
  {
    for (int i = 0; i < text.Length; i++)
    {
        if (!char.IsUpper(text[i]) && char.IsLetter(text[i])) 
          return false;
    }
    return true;    
  } 
}