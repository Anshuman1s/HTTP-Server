#include <vector>
#include <algorithm>

int makePowerNonDecreasing(std::vector<int>& power) {
    int totalIncrement = 0;
    for (int i = 1; i < power.size(); ++i) {
        if (power[i] < power[i - 1]) {
            totalIncrement += power[i - 1] - power[i];
            power[i] = power[i - 1];
        }
    }
    return totalIncrement;
}