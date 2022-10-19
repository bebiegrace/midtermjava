package midtermjava;
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

        while (true) {
            System.out.println("=====================");
            System.out.println("=====================");
            System.out.println("\nWelcome to professional world!!");
            System.out.println("==============================");
            System.out.println(" Main Menu\n");
            System.out.print("1.) Add professional \n");
            System.out.print("2.) Remove professional \n");
            System.out.print("3.) Display professionals\n");
            System.out.print("4.) Exit\n");
            System.out.print("\nEnter Your Menu Choice: ");
            choice = scan.nextInt();

            System.out.println("-----------------");
            System.out.println("-----------------");

            if (choice < 1 && choice > 4) {

                throw new BebieErrorException("not in the menu");
            }

            else {

                switch (choice) {

                    case 1:
                        // add people to the professionals' Record
                        do {
                            System.out.println("Please Input your details to Register as Professional");
                            System.out.println("============================================");

                            try {
                                System.out.println("\nEnter Username: ");
                                scan.nextLine();
                                String name = scan.nextLine(); // Get the users name

                                Pattern pat = Pattern.compile("[!@#$%&*()_+=|<>?{}\\[\\]~-]");
                                Matcher matcher = pat.matcher(name);

                                if (matcher.find()) {
                                    throw new BebieErrorException(
                                            "Invalid Input! No special characters allowed! Please input a String Name with no spacial characters!");
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

                                System.out.println("Thanks for filling up!!");

                                System.out.println("=========================================");

                                Matcher matchera = pat.matcher(job);

                                if (matchera.find()) {
                                    throw new BebieErrorException(
                                            "Invalid Input! No special characters allowed! Please input a String for job title with no spacial characters!");
                                }

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
                        System.out.println("===============================================");
                        int arrs = pro.size();
                        for (int b = 0; b < arrs; b++) {

                            System.out.println("Username: " + pro.get(b).getUsername());

                        }

                        do {

                            for (int i = 0; i < 1; i++) {

                                if (i >= 0 && i < pro.size()) {
                                    String username;

                                    System.out.print("Enter professional's name you want to remove: ");
                                    username = scan.next();
                                    System.out.println("Trying to locate <" + username + ">");
                                    for (int ie = pro.size() - 1; ie >= 0; --ie) {
                                        professionals p = pro.get(ie);
                                        System.out.println("\tChecking with: ==> " + pro.get(ie).username + " <==");
                                        if (p.username.equals(username)) {
                                            System.out.println("Found that username at index " + ie);
                                            pro.remove(ie);
                                            System.out.println("... and has been remove from the list.");
                                        }
                                    }
                                }
                            }
                            System.out.println("**======================**");
                            System.out.println("Do You Want To Continue(Y/N)");
                            choice = scan.next().charAt(0);
                        } while (choice == 'Y' || choice == 'y');

                        break;

                    case 3:

                        do {
                            System.out.println("=======>Profesionals' Record <=======)");
                            // Display Professionals list

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

}



