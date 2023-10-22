#include <iostream>
#include <string>

using namespace std;

// Function prototypes
void printMessage(const string& message);
int makeChoice(const string& choice1, const string& choice2);

int main() {
    printMessage("You find yourself in a mysterious forest. You hear strange noises and see two paths ahead of you.");
    
    int choice = makeChoice("Go left", "Go right");

    if (choice == 1) {
        printMessage("You venture deeper into the forest, and you find a hidden treasure!");
    } else {
        printMessage("You encounter a ferocious beast and narrowly escape with your life.");
    }

    printMessage("As you continue, you see a river blocking your path. What will you do?");

    choice = makeChoice("Swim across", "Look for a bridge");

    if (choice == 1) {
        printMessage("You make it across but get exhausted in the process.");
    } else {
        printMessage("After some searching, you find a sturdy bridge and cross the river safely.");
    }

    printMessage("You finally reach the heart of the forest and discover a magical portal. What will you do?");
    
    choice = makeChoice("Enter the portal", "Turn back");

    if (choice == 1) {
        printMessage("You step into the portal, and it transports you to another dimension. You win!");
    } else {
        printMessage("You decide not to risk it and head back, ending your adventure here.");
    }

    return 0;
}

// Function to print a message with some formatting
void printMessage(const string& message) {
    cout << "\n-------------------------------------------\n";
    cout << message << endl;
    cout << "------------------------------------------\n\n";
}

// Function to get the player's choice (1 or 2)
int makeChoice(const string& choice1, const string& choice2) {
    int choice;
    cout << "1. " << choice1 << endl;
    cout << "2. " << choice2 << endl;
    cout << "Enter your choice (1 or 2): ";
    cin >> choice;
    return choice;
}
