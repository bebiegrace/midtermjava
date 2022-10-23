	//ADD:can't add if 
    //username input contains special characters and numbers.
     //id ID number contains negative integer
    //job title  contains special characters and numbers

    //REMOVE:can't remove if 
    //the record is empty
    //if the input name is not in the list.

    
    //DISPLAY:can't DISPLAY  if 
    //the record is empty
    //if the input name is not in the list.



  

    
    
    
    
package midtermjava;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
 
public class Main {
 
    public static void main(String[] args) throws BebieErrorException {
 
        boolean mainLoop = true;
 
        int choice;
        int num;
        Scanner scan = new Scanner(System.in);
        char choices;
 
        List<professionals> pro = new ArrayList<professionals>();
             System.out.println("=====================");
            System.out.println("=====================");
            System.out.println("\nWelcome to professional world!!");
 
        while (true) {  
            System.out.println("==============================");
            System.out.println(" Main Menu\n");
            System.out.print("1.) Add professional \n");
            System.out.print("2.) Remove professional \n");
            System.out.print("3.) Display professionals\n");
            System.out.print("4.) Update professional's Job\n");
            System.out.print("5.) Exit\n");
            System.out.print("\nEnter Your Menu Choice: ");
            choice = scan.nextInt();
 
            System.out.println("-----------------");
            System.out.println("-----------------");
 
       
                switch (choice) {
 
                    case 1:
                        // add people to the professionals' Record

                      
                        do {
                            System.out.println("Please Input your details to Register as Professional");
                            System.out.println("============================================");
 
                            try {
                                System.out.println("\nEnter Username: ");
                                scan.nextLine();
                                String name = scan.nextLine(); // Get the users 

                                Pattern pat = Pattern.compile("[!@#$%&*()_+=|<>?{}\\[\\]~;:''0123456789]");
                                Matcher matcher = pat.matcher(name);

                                if (matcher.find()) {
                                    throw new BebieErrorException(
                                            "Invalid Input!! Numbers and special characters is not allowed for username input!");
                                }
 
                                System.out.println("\nEnter ID number: ");
 
                                int id = scan.nextInt(); // Get the users idnumber
 
                                if (id < 0) {
                                    throw new BebieErrorException(
                                            "Invalid input for Id number! Negative is not allowed!");
                                }  
 
                                System.out.println("\nEnter Job: ");
                                scan.nextLine();
                                String job = scan.nextLine(); // Get the users job title

                                Matcher matchera = pat.matcher(job);
                                if (matchera.find()) {
                                    throw new BebieErrorException(
                                            "Invalid Input!! Numbers and special characters is not allowed for job input!");
                                }
 
 
                                System.out.println("Thanks for filling up!!");
 
                                System.out.println("=========================================");
 

                                professionals entrp = new professionals(name, id, job);
                                pro.add(entrp);
 
                                System.out.println(name + " has been successfully added to the professionals' record");
 
                            } catch (BebieErrorException e) {
                                System.out.println(e.getMessage());
                            }
 
                            System.out.println("Do You Want To Continue( Y/ N(Return exit) )");
                            choices = scan.next().charAt(0);
                        } while (choices == 'Y' || choices == 'y');
 
                        break;
                        
                        
                    case 2:
                        System.out.println("==> Professionals' name list <==");
                        System.out.println("=======================");
                        int arrs = pro.size();
                        Pattern pat = Pattern.compile("[!@#$%&*()_+=|<>?{}\\[\\]~;:0123456789]");
                        boolean ansa = pro.isEmpty();
 
                        for (int b = 0; b < arrs; b++) {
                            System.out.println("Username: " + pro.get(b).getUsername());    
                           
                        }
                        if(ansa== true){
                            System.out.println("Nothing to remove! The list is currently empty!");
                         }else
 
                        do {
                               
                            try{
                            for (int i = 0; i < 1; i++) {
 
                                if (i >= 0 && i < pro.size()) {
 
                                    String username;
 
                                    System.out.print("Enter professional's name you want to remove: ");
                                    username = scan.next();
                                    Matcher matcher1 = pat.matcher(username);

                                    if (matcher1.find()) {
                                        throw new BebieErrorException(
                                                "Invalid Input! No special characters and numbers allowed!");
                                    }

                                    System.out.println("Trying to locate <" + username + ">");
                                    for (int ie = pro.size() - 1; ie >= 0; --ie) {
                                        professionals p = pro.get(ie);
                                        System.out.println("\tChecking with: ==> " + pro.get(ie).username + " <==");
                                        if (p.username.equals(username)) {
                                            System.out.println("Found that username at index " + ie);
                                            pro.remove(ie);
                                            System.out.println("... and has been remove from the list.");
                                        }else if(!p.username.equals(username)){
                                            System.out.println("____________________");
                                            throw new BebieErrorException(
                                                "That username was out of the list!");
                                        }
                                    }
                                }
                            }
                                   
                            } catch (BebieErrorException e) {
                                System.out.println(e.getMessage());
                            }
 
                            System.out.println("**======================**");
                            System.out.println("Do You Want To Continue(Y/N)");
                            choices= scan.next().charAt(0);
                        } while (choices == 'Y' || choices == 'y');
 
 
                        break;
 
                    case 3:
                         boolean ans3 = pro.isEmpty();
                        do {
                            System.out.println("=======>Profesionals' Record <=======)");
                            // Display Professionals list
                            if(ans3== true){
                                System.out.println("Nothing to DISPLAY! The professionals' record is currently empty!");
                             }else
     
                            for (int ie = pro.size() - 1; ie >= 0; --ie) {
                                professionals p = pro.get(ie);


                                System.out.println("Username: " + pro.get(ie).username + "_____ID_Number: "
                                        + pro.get(ie).Idnumber + "_____Job: " + pro.get(ie).job);
 
                            }
                            System.out.println("**======================**");
                            System.out.println("Do You Want To Continue( Y/ N(Return exit) )");
                            choices = scan.next().charAt(0);
                        } while (choices == 'Y' || choices == 'y');
 
                        break;
 
                        case 4:
 
                        boolean ansa1 = pro.isEmpty();
 
                        String pname;
 
                        if(ansa1== true){
                            System.out.println("Nothing to remove! The list is currently empty!");
                         }else
 
                        do {
                            System.out.println("=======>Profesionals' Record_To change Job title<=======)");
                            // Display Professionals list
 
                            for (int ie = pro.size() - 1; ie >= 0; --ie) {
                                professionals p = pro.get(ie);
                                System.out.println("Username: " + pro.get(ie).username + "_____ID_Number: "
                                        + pro.get(ie).Idnumber + "_____Job: " + pro.get(ie).job);
                            }
                            System.out.print("Enter professional's name you want to Update: ");
                            pname = scan.next();
                            System.out.println("Trying to locate <" + pname + ">");
 
 
                            for (int ie = pro.size() - 1; ie >= 0; --ie) {
                                professionals p = pro.get(ie);
                               
                                System.out.println("\tChecking with: ==> " + pro.get(ie).username + " <==");
                                if (p.username.equals(pname)) {
                                    System.out.println("Professional detected at " + ie);
 
                                   
                                    System.out.println("... and the job title has been updated!.");
                                }else if(!p.username.equals(pname)){
                                    System.out.println("____________________");
                                    throw new BebieErrorException(
                                        "");
                               
                                }
                            }
 
                            System.out.println("**======================**");
                            System.out.println("Do You Want To Continue( Y/ N(Return exit) )");
                            choices = scan.next().charAt(0);
                        } while (choices == 'Y' || choices == 'y');
 
                        break;
 
 
                    case 5:
 
 
                        do {
                            try {
                                do {
 
                                    String ans = "y";
                                    String answ = "n";
                                    System.out.println("\nAre you sure you want to exit y/n?: ");
                                    scan.nextLine();
                                    String inp = scan.nextLine();
 
                                    if (inp.equals(ans)) {
                                        System.out.println("Exiting Program...");
                                        System.exit(0);
                                    } else if (!inp.equals(answ) || !inp.equals(answ)) {
                                        throw new BebieErrorException("Invalid Input!!");
                                    } else
                                        System.out.println("Still want to continue the program? (y/n): ");
                                    choices = scan.next().charAt(0);
 
                                } while (choices == 'Y' || choices == 'y');
                            } catch (BebieErrorException e) {
                                System.out.println(e.getMessage());
                            }
                            System.out.println("Do You Want To Continue( Y/N(Return to Menu) )");
                            choices = scan.next().charAt(0);
 
                        } while (choices == 'Y' || choices == 'y');
 
                        break;
 
                    default:
                        System.out.println("This is not a valid Menu Option! Please Select Another");
                        break;
 
                }
            }
        }
 
    }
 
