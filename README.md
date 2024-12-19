# Bug in Euclidean Algorithm Implementation

This repository demonstrates a bug in a JavaScript implementation of the Euclidean algorithm for finding the greatest common divisor (GCD) of two numbers. The Euclidean algorithm is a method for computing the greatest common divisor of two integers. 

The bug causes incorrect results for some inputs and throws an error for others because of the lack of a base case to prevent infinite recursion. A corrected implementation is provided to address these issues.  The original code uses recursion to repeatedly apply the algorithm until a base case of a being equal to b is reached, which is incorrect and results in infinite recursion for certain inputs where the GCD is 0.