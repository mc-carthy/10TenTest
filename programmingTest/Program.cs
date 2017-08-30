using System;

namespace programmingTest
{
    class Program
    {
        private static int[] example1 = { 1, 4, 1, 4, 2, 1, 3, 5, 6, 2, 3, 7 };
        private static int[] example2 = { 3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5 };
        private static int[] example3 = { 2, 7, 1, 8, 2, 8, 1 };

        static void Main(string[] args)
        {
            Console.WriteLine(LongestAscendingSequence(example1));
            Console.WriteLine(LongestAscendingSequence(example2));
            Console.WriteLine(LongestAscendingSequence(example3));
            Console.ReadLine();
        }
        private static int LongestAscendingSequence(int[] numbers)
        {
            int count = 1;
            int longestCount = 0;

            for (int i = 1; i < numbers.Length; i++)
            {
                if (numbers[i] > numbers[i - 1])
                {
                    count++;
                }
                else
                {
                    if (count > longestCount)
                    {
                        longestCount = count;
                    }
                    count = 1;
                }
            }

            return longestCount;
        }
    }
}
