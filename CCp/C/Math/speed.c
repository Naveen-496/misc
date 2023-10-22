#include <stdio.h>

int main(void) {
    int A, X; // Distance and time for Alice
    int B, Y; // Distance and time for Bob

    // Input the values
    printf("Enter the distance and time for Alice (A, X): ");
    scanf("%d%d", &A, &X);

    printf("Enter the distance and time for Bob (B, Y): ");
    scanf("%d%d", &B, &Y);

    // Calculate the average speeds
    float speedAlice = (float) A / X;
    float speedBob = (float) B / Y;
    printf("%f", speedAlice);
    printf("%f", speedBob);

    // Compare the speeds and determine the result
    if (speedAlice > speedBob) {
        printf("Alice is driving faster\n");
    } else if (speedBob > speedAlice) {
        printf("Bob is driving faster\n");
    } else {
        printf("EQUAL\n");
    }

    return 0;
}
