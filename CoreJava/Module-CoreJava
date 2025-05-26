1. Hello World Program
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}

 
2. Simple Calculator
import java.util.Scanner;

public class Calculator {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter first number: ");
        double num1 = scanner.nextDouble();
        System.out.print("Enter second number: ");
        double num2 = scanner.nextDouble();
        System.out.print("Choose operation (+, -, *, /): ");
        String op = scanner.next();

        double result = 0;
        switch(op) {
            case "+": result = num1 + num2; break;
            case "-": result = num1 - num2; break;
            case "*": result = num1 * num2; break;
            case "/": result = num1 / num2; break;
            default: System.out.println("Invalid operation");
        }
        System.out.println("Result: " + result);
    }
}

 
3. Even or Odd Checker
import java.util.Scanner;

public class EvenOddChecker {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter an integer: ");
        int num = scanner.nextInt();
        System.out.println(num % 2 == 0 ? "Even" : "Odd");
    }
}

 
4. Leap Year Checker
import java.util.Scanner;

public class LeapYearChecker {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter a year: ");
        int year = scanner.nextInt();
        boolean isLeap = (year % 4 == 0 && year % 100 != 0) || (year % 400 == 0);
        System.out.println(isLeap ? "Leap year" : "Not a leap year");
    }
}

 
5. Multiplication Table
import java.util.Scanner;

public class MultiplicationTable {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter a number: ");
        int num = scanner.nextInt();
        for (int i = 1; i <= 10; i++) {
            System.out.println(num + " x " + i + " = " + (num * i));
        }
    }
}

 
6. Data Type Demonstration
public class DataTypesDemo {
    public static void main(String[] args) {
        int i = 10;
        float f = 3.14f;
        double d = 2.71828;
        char c = 'A';
        boolean b = true;
        System.out.println("int: " + i);
        System.out.println("float: " + f);
        System.out.println("double: " + d);
        System.out.println("char: " + c);
        System.out.println("boolean: " + b);
    }
}

 
7. Type Casting Example
public class TypeCasting {
    public static void main(String[] args) {
        double d = 9.99;
        int i = (int) d;
        System.out.println("double to int: " + i);
        int j = 100;
        double k = j;
        System.out.println("int to double: " + k);
    }
}

 
8. Operator Precedence
public class OperatorPrecedence {
    public static void main(String[] args) {
        int result = 10 + 5 * 2; // 10 + (5 * 2) = 20
        System.out.println("Result: " + result);
        // Explanation: * has higher precedence than +
    }
}

 
9. Grade Calculator
import java.util.Scanner;

public class GradeCalculator {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter marks (0-100): ");
        int marks = scanner.nextInt();
        char grade;
        if (marks >= 90) grade = 'A';
        else if (marks >= 80) grade = 'B';
        else if (marks >= 70) grade = 'C';
        else if (marks >= 60) grade = 'D';
        else grade = 'F';
        System.out.println("Grade: " + grade);
    }
}

 
10. Number Guessing Game
import java.util.Scanner;
import java.util.Random;

public class NumberGuessingGame {
    public static void main(String[] args) {
        Random rand = new Random();
        int number = rand.nextInt(100) + 1;
        Scanner scanner = new Scanner(System.in);
        int guess;
        do {
            System.out.print("Guess the number (1-100): ");
            guess = scanner.nextInt();
            if (guess < number) System.out.println("Too low!");
            else if (guess > number) System.out.println("Too high!");
        } while (guess != number);
        System.out.println("Correct!");
    }
}

 
11. Factorial Calculator
import java.util.Scanner;

public class FactorialCalculator {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter a non-negative integer: ");
        int n = scanner.nextInt();
        long fact = 1;
        for (int i = 2; i <= n; i++) fact *= i;
        System.out.println("Factorial: " + fact);
    }
}

 
12. Method Overloading
public class MethodOverloading {
    public static int add(int a, int b) { return a + b; }
    public static double add(double a, double b) { return a + b; }
    public static int add(int a, int b, int c) { return a + b + c; }
    public static void main(String[] args) {
        System.out.println("add(2, 3): " + add(2, 3));
        System.out.println("add(2.5, 3.5): " + add(2.5, 3.5));
        System.out.println("add(2, 3, 4): " + add(2, 3, 4));
    }
}

 
13. Recursive Fibonacci
import java.util.Scanner;

public class RecursiveFibonacci {
    public static int fibonacci(int n) {
        if (n <= 1) return n;
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter n: ");
        int n = scanner.nextInt();
        System.out.println("Fibonacci number: " + fibonacci(n));
    }
}

 
14. Array Sum and Average
import java.util.Scanner;

public class ArraySumAndAverage {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter number of elements: ");
        int n = scanner.nextInt();
        double[] arr = new double[n];
        double sum = 0;
        for (int i = 0; i < n; i++) {
            System.out.print("Enter element " + (i + 1) + ": ");
            arr[i] = scanner.nextDouble();
            sum += arr[i];
        }
        System.out.println("Sum: " + sum);
        System.out.println("Average: " + (sum / n));
    }
}

 
15. String Reversal
import java.util.Scanner;

public class StringReversal {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter a string: ");
        String str = scanner.nextLine();
        String reversed = new StringBuilder(str).reverse().toString();
        System.out.println("Reversed: " + reversed);
    }
}

 
16. Palindrome Checker
import java.util.Scanner;

public class PalindromeChecker {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter a string: ");
        String str = scanner.nextLine();
        String cleaned = str.replaceAll("[^a-zA-Z0-9]", "").toLowerCase();
        String reversed = new StringBuilder(cleaned).reverse().toString();
        System.out.println(cleaned.equals(reversed) ? "Palindrome" : "Not a palindrome");
    }
}

 
17. Class and Object Creation
public class Car {
    String make;
    String model;
    int year;
    void displayDetails() {
        System.out.println("Make: " + make + ", Model: " + model + ", Year: " + year);
    }
    public static void main(String[] args) {
        Car myCar = new Car();
        myCar.make = "Toyota";
        myCar.model = "Corolla";
        myCar.year = 2020;
        myCar.displayDetails();
    }
}

 
18. Inheritance Example
class Animal {
    void makeSound() { System.out.println("Animal sound"); }
}
class Dog extends Animal {
    @Override void makeSound() { System.out.println("Bark"); }
}
public class InheritanceExample {
    public static void main(String[] args) {
        Animal a = new Animal();
        Dog d = new Dog();
        a.makeSound();
        d.makeSound();
    }
}

 
19. Interface Implementation
interface Playable {
    void play();
}
class Guitar implements Playable {
    public void play() { System.out.println("Playing guitar"); }
}
class Piano implements Playable {
    public void play() { System.out.println("Playing piano"); }
}
public class InterfaceExample {
    public static void main(String[] args) {
        Playable g = new Guitar();
        Playable p = new Piano();
        g.play();
        p.play();
    }
}

 
20. Try-Catch Example
import java.util.Scanner;

public class TryCatchExample {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter two integers: ");
        int a = scanner.nextInt();
        int b = scanner.nextInt();
        try {
            System.out.println("Result: " + (a / b));
        } catch (ArithmeticException e) {
            System.out.println("Cannot divide by zero");
        }
    }
}

 
21. Custom Exception
import java.util.Scanner;

class InvalidAgeException extends Exception {
    InvalidAgeException(String msg) { super(msg); }
}
public class CustomExceptionDemo {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter your age: ");
        int age = scanner.nextInt();
        try {
            if (age < 18) throw new InvalidAgeException("Age must be at least 18");
            System.out.println("Age is valid");
        } catch (InvalidAgeException e) {
            System.out.println(e.getMessage());
        }
    }
}

 
22. File Writing
import java.io.FileWriter;
import java.util.Scanner;

public class FileWriting {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter a string: ");
        String data = scanner.nextLine();
        try (FileWriter writer = new FileWriter("output.txt")) {
            writer.write(data);
            System.out.println("Data written to file.");
        } catch (Exception e) {
            System.out.println("Error writing to file");
        }
    }
}

 
23. File Reading
import java.io.File;
import java.util.Scanner;

public class FileReading {
    public static void main(String[] args) {
        try (Scanner fileScanner = new Scanner(new File("output.txt"))) {
            while (fileScanner.hasNextLine()) {
                System.out.println(fileScanner.nextLine());
            }
        } catch (Exception e) {
            System.out.println("Error reading file");
        }
    }
}

 
24. ArrayList Example
import java.util.ArrayList;
import java.util.Scanner;

public class ArrayListExample {
    public static void main(String[] args) {
        ArrayList<String> names = new ArrayList<>();
        Scanner scanner = new Scanner(System.in);
        System.out.println("Enter names (type 'done' to finish):");
        String name;
        while (true) {
            name = scanner.nextLine();
            if (name.equalsIgnoreCase("done")) break;
            names.add(name);
        }
        System.out.println("Names entered:");
        for (String n : names) System.out.println(n);
    }
}

 
25. HashMap Example
import java.util.HashMap;
import java.util.Scanner;

public class HashMapExample {
    public static void main(String[] args) {
        HashMap<Integer, String> students = new HashMap<>();
        Scanner scanner = new Scanner(System.in);
        System.out.println("Enter student ID and name (type 'done' to finish):");
        while (true) {
            System.out.print("ID: ");
            String idStr = scanner.nextLine();
            if (idStr.equalsIgnoreCase("done")) break;
            int id = Integer.parseInt(idStr);
            System.out.print("Name: ");
            String name = scanner.nextLine();
            students.put(id, name);
        }
        System.out.print("Enter ID to find: ");
        int findId = scanner.nextInt();
        System.out.println("Name: " + students.get(findId));
    }
}

 
26. Thread Creation
class MyThread extends Thread {
    public void run() {
        for (int i = 0; i < 3; i++) {
            System.out.println("Thread: " + getName() + " " + i);
        }
    }
}
public class ThreadCreation {
    public static void main(String[] args) {
        MyThread t1 = new MyThread();
        MyThread t2 = new MyThread();
        t1.start();
        t2.start();
    }
}

 
27. Lambda Expressions
import java.util.Arrays;
import java.util.List;
import java.util.Collections;

public class LambdaExpressions {
    public static void main(String[] args) {
        List<String> names = Arrays.asList("Bob", "Alice", "Charlie");
        Collections.sort(names, (a, b) -> a.compareTo(b));
        System.out.println("Sorted: " + names);
    }
}

 
28. Stream API
import java.util.Arrays;
import java.util.List;

public class StreamAPI {
    public static void main(String[] args) {
        List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5, 6);
        numbers.stream().filter(n -> n % 2 == 0).forEach(System.out::println);
    }
}

 
29. Records
import java.util.List;
import java.util.stream.Collectors;

record Person(String name, int age) {}

public class RecordsExample {
    public static void main(String[] args) {
        List<Person> people = List.of(
            new Person("Alice", 25),
            new Person("Bob", 30)
        );
        List<Person> filtered = people.stream()
            .filter(p -> p.age() > 26)
            .collect(Collectors.toList());
        filtered.forEach(System.out::println);
    }
}

 
30. Pattern Matching for switch (Java 21)
public class PatternMatchingSwitch {
    public static void checkType(Object obj) {
        String result = switch (obj) {
            case Integer i -> "Integer: " + i;
            case String s -> "String: " + s;
            case Double d -> "Double: " + d;
            default -> "Unknown type";
        };
        System.out.println(result);
    }
    public static void main(String[] args) {
        checkType(123);
        checkType("Hello");
        checkType(3.14);
    }
}

 
31. Basic JDBC Connection
import java.sql.*;

public class BasicJDBC {
    public static void main(String[] args) {
        String url = "jdbc:mysql://localhost:3306/studentdb";
        String user = "root";
        String password = "password";
        try (Connection conn = DriverManager.getConnection(url, user, password);
             Statement stmt = conn.createStatement();
             ResultSet rs = stmt.executeQuery("SELECT * FROM students")) {
            while (rs.next()) {
                System.out.println(rs.getInt("id") + " " + rs.getString("name"));
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}

 
32. Insert and Update Operations in JDBC
import java.sql.*;

public class StudentDAO {
    public static void main(String[] args) throws SQLException {
        String url = "jdbc:mysql://localhost:3306/studentdb";
        String user = "root";
        String password = "password";
        try (Connection conn = DriverManager.getConnection(url, user, password)) {
            // Insert
            String insertSQL = "INSERT INTO students (name, age) VALUES (?, ?)";
            try (PreparedStatement pstmt = conn.prepareStatement(insertSQL)) {
                pstmt.setString(1, "Alice");
                pstmt.setInt(2, 20);
                pstmt.executeUpdate();
            }
            // Update
            String updateSQL = "UPDATE students SET age = ? WHERE name = ?";
            try (PreparedStatement pstmt = conn.prepareStatement(updateSQL)) {
                pstmt.setInt(1, 21);
                pstmt.setString(2, "Alice");
                pstmt.executeUpdate();
            }
        }
    }
}

 
33. Transaction Handling in JDBC
import java.sql.*;

public class TransactionHandling {
    public static void main(String[] args) {
        String url = "jdbc:mysql://localhost:3306/bank";
        String user = "root";
        String password = "password";
        try (Connection conn = DriverManager.getConnection(url, user, password)) {
            conn.setAutoCommit(false);
            try {
                // Simulate transfer: debit from account 1, credit to account 2
                String debit = "UPDATE accounts SET balance = balance - 100 WHERE id = 1";
                String credit = "UPDATE accounts SET balance = balance + 100 WHERE id = 2";
                Statement stmt = conn.createStatement();
                stmt.executeUpdate(debit);
                stmt.executeUpdate(credit);
                conn.commit();
                System.out.println("Transfer successful");
            } catch (SQLException e) {
                conn.rollback();
                System.out.println("Transfer failed, rolled back");
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}

 
34. Create and Use Java Modules
// Example structure only; actual module-info.java contents are shown below.
// Place in src/com.utils/module-info.java
module com.utils {
    exports com.utils;
}

// Place in src/com.greetings/module-info.java
module com.greetings {
    requires com.utils;
}

// In com.utils/src/com/utils/Utility.java
package com.utils;
public class Utility {
    public static void greet() { System.out.println("Hello from Utility!"); }
}

// In com.greetings/src/com/greetings/Main.java
package com.greetings;
import com.utils.Utility;
public class Main {
    public static void main(String[] args) {
        Utility.greet();
    }
}

Note: The above is a structural example. For GitHub, you would create directories and files as shown, with the module-info.java files in each module's root.
 
35. TCP Client-Server Chat
Server
import java.io.*;
import java.net.*;

public class TCPServer {
    public static void main(String[] args) throws IOException {
        ServerSocket server = new ServerSocket(1234);
        System.out.println("Server waiting for client...");
        Socket client = server.accept();
        BufferedReader in = new BufferedReader(new InputStreamReader(client.getInputStream()));
        PrintWriter out = new PrintWriter(client.getOutputStream(), true);
        String line;
        while ((line = in.readLine()) != null) {
            System.out.println("Client: " + line);
            out.println("Server: " + line.toUpperCase());
        }
        client.close();
        server.close();
    }
}

Client
import java.io.*;
import java.net.*;
import java.util.Scanner;

public class TCPClient {
    public static void main(String[] args) throws IOException {
        Socket client = new Socket("localhost", 1234);
        PrintWriter out = new PrintWriter(client.getOutputStream(), true);
        BufferedReader in = new BufferedReader(new InputStreamReader(client.getInputStream()));
        Scanner scanner = new Scanner(System.in);
        String line;
        while (true) {
            System.out.print("Client: ");
            line = scanner.nextLine();
            out.println(line);
            System.out.println(in.readLine());
        }
    }
}

 
36. HTTP Client API (Java 11+)
import java.net.URI;
import java.net.http.*;
import java.net.http.HttpResponse.BodyHandlers;

public class HttpClientExample {
    public static void main(String[] args) throws Exception {
        HttpClient client = HttpClient.newHttpClient();
        HttpRequest request = HttpRequest.newBuilder()
            .uri(URI.create("https://api.github.com/users/github"))
            .build();
        HttpResponse<String> response = client.send(request, BodyHandlers.ofString());
        System.out.println("Status: " + response.statusCode());
        System.out.println("Body: " + response.body());
    }
}

 
37. Using javap to Inspect Bytecode
Note: This is not a Java source file, but an example of how to use javap from the command line:
javac MyClass.java
javap -c MyClass

For GitHub, you could include a README.md explaining this step.
 
38. Decompile a Class File
Note: This is also not a Java source file. For GitHub, include a README.md explaining how to use a decompiler like JD-GUI or CFR.
 
39. Reflection in Java
import java.lang.reflect.*;

public class ReflectionExample {
    public static void main(String[] args) throws Exception {
        Class<?> cls = Class.forName("java.util.ArrayList");
        System.out.println("Methods:");
        for (Method m : cls.getDeclaredMethods())
            System.out.println(m.getName());
    }
}

 
40. Virtual Threads (Java 21)
public class VirtualThreads {
    public static void main(String[] args) {
        for (int i = 0; i < 10; i++) { // Use 10 for demo; change to 100000 for full test
            Thread.startVirtualThread(() -> {
                System.out.println("Thread: " + Thread.currentThread());
            });
        }
    }
}

 
41. Executor Service and Callable
import java.util.concurrent.*;

public class ExecutorServiceExample {
    public static void main(String[] args) throws Exception {
        ExecutorService executor = Executors.newFixedThreadPool(3);
        Callable<String> task = () -> "Task result";
        Future<String> future = executor.submit(task);
        System.out.println("Result: " + future.get());
        executor.shutdown();
    }
}

